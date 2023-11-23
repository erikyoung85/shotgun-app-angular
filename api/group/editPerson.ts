import { VercelRequest, VercelResponse } from '@vercel/node';
import { sql } from '@vercel/postgres';
 
export default async function handler(
    request: VercelRequest,
    response: VercelResponse,
) {
    const body: {
        person: {
            groupId: number;
            id: number;
            name: string;
        };
    } = request.body?.body;

    try {
        const client = await sql.connect();
        const editPersonRes = await client.query(`
            UPDATE person
            SET name = '${body.person.name}'
            WHERE group_id = ${body.person.groupId} AND id = ${body.person.id}
            RETURNING *;
        `);
        client.release();

        return response.status(200).json(editPersonRes.rows[0]);
    } catch (error) {
        return response.status(500).json(error);
    }
}