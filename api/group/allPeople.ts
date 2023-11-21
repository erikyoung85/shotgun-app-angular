import { VercelRequest, VercelResponse } from '@vercel/node';
import { sql } from '@vercel/postgres';
 
export default async function handler(
    request: VercelRequest,
    response: VercelResponse,
) {
    try {
        // const result = await sql`
        //     SELECT * FROM person;
        // `;

        // const rows = result.rows;
        const mockRows = [
            {
                id: 1,
                name: 'erik'
            },
            {
                id: 2,
                name: 'jack'
            },
            {
                id: 3,
                name: 'alexis'
            },
            {
                id: 4,
                name: 'elliot'
            },
        ];
        return response.status(200).json(mockRows);
    } catch (error) {
        return response.status(500).json(error);
    }
}