import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

/**
 * Used when Typescript can't infer type after a null check.
 * Currently this an open issue in typescript [see here](https://github.com/Microsoft/TypeScript/issues/16069)
 * @example
 * const data = ['Hello', null]
 * data.filter(item => item !== null)
 * //Typescript will complain because item is possibly null
 * .map(item=>item.toLowerCase())
 * @param input
 * @returns
 */
export function inputIsNotNil<T>(input: T | null | undefined): input is T {
    return input !== null && input !== undefined;
}

/**
 * Used when Typescript can't infer type after a null check.
 * Currently this an open issue in typescript [see here](https://github.com/Microsoft/TypeScript/issues/16069)
 * @example
 * const data = from(['Hello', null])
 * data.pipe(
 *  filter(item => item !== null)
 *  //Typescript will complain because item is possibly null
 *  map(item=>item.toLowerCase())
 * )
 * @param input
 * @returns
 */
export function isNotNil<T>() {
    return (source$: Observable<null | undefined | T>) => source$.pipe(filter(inputIsNotNil));
}