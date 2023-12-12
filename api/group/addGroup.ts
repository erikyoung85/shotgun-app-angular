import { VercelRequest, VercelResponse } from '@vercel/node';
import { sql } from '@vercel/postgres';
 
export default async function handler(
    request: VercelRequest,
    response: VercelResponse,
) {
    const body: {
        groupName: string;
    } = request.body;

    try {
        const client = await sql.connect();
        const result = await client.query(`
            INSERT INTO "group"(name)
            VALUES ('${body.groupName}')
            RETURNING id, name;
        `);
        client.release();

        const responseDto = {
            id: result.rows[0].id,
            name: result.rows[0].name,
            people: [],
        }

        return response.status(200).json(responseDto);
    } catch (error) {
        return response.status(500).json(error);
    }
}