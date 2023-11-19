import { VercelRequest, VercelResponse } from '@vercel/node';
import { sql } from '@vercel/postgres';
 
export default async function handler(
    request: VercelRequest,
    response: VercelResponse,
) {
    try {
        const result = await sql`
            SELECT * FROM person;
        `;

        const rows = result.rows;
        return response.status(200).json({ rows });
    } catch (error) {
        return response.status(500).json({ error });
    }
}