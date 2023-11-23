import { Overlay } from "@angular/cdk/overlay"
import { ComponentPortal } from "@angular/cdk/portal"
import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from "@angular/core"
import { Observable, Subscription } from "rxjs"
import { LoadingComponent } from "./component/loading.component"

@Directive({
    selector: '[loadingOverlay]',
})
export class LoaderDirective implements OnChanges {

    overlayRef = this.overlay.create({
        scrollStrategy: this.overlay.scrollStrategies.reposition(),
        positionStrategy: this.overlay.position()
            .flexibleConnectedTo(this.elementRef)
            .withPush(false)
            .withPositions(
                [
                    {
                        originX: "center",
                        originY: "center",
                        overlayX: "center",
                        overlayY: "center"
                    }
                ]
            ),
        hasBackdrop: true,
    })

    currentSubscription: Subscription | undefined

    @Input() loadingOverlay!: boolean;

    ngOnChanges(changes: SimpleChanges): void {
        const isLoading = changes['loadingOverlay']?.currentValue
        if (isLoading === true) {
            this.showLoader()
        } else {
            this.hideLoader()
        }
    }

    // @Input()
    // set loadingOverlay(value: Observable<boolean>) {
    //     this.currentSubscription?.unsubscribe()
    //     this.showLoader()
    //     this.currentSubscription = value.subscribe(
    //         {
    //             next: () => this.hideLoader(),
    //             complete: () => this.hideLoader(),
    //             error: () => this.hideLoader()
    //         }
    //     )
    // };

    constructor(
        private elementRef: ElementRef,
        private overlay: Overlay,
    ) {
    }

    private showLoader() {
        this.overlayRef.attach(new ComponentPortal(LoadingComponent))
    }

    private hideLoader() {
        this.overlayRef.detach()
    }
}