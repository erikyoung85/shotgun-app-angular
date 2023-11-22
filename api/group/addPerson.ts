import { VercelRequest, VercelResponse } from '@vercel/node';
import { sql } from '@vercel/postgres';
 
export default async function handler(
    request: VercelRequest,
    response: VercelResponse,
) {
    const body: {
        groupId: number;
        personName: string;
    } = request.body?.body;

    try {

        const client = await sql.connect();
        const addPersonRes = await client.query(`
            INSERT INTO person(group_id, name)
            VALUES (${body.groupId}, '${body.personName}')
            RETURNING *;
        `);
        client.release();

        return response.status(200).json(addPersonRes.rows[0]);
    } catch (error) {
        return response.status(500).json(error);
    }
}