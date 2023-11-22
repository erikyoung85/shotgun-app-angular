import { VercelRequest, VercelResponse } from '@vercel/node';
import { sql } from '@vercel/postgres';
 
export default async function handler(
    request: VercelRequest,
    response: VercelResponse,
) {
    const body: {
        groupId: number;
        personId: number;
    } = request.body?.body;

    try {

        const client = await sql.connect();
        await client.query(`
            DELETE FROM person
            WHERE group_id = ${body.groupId} AND id = ${body.personId}
        `);
        client.release();

        return response.status(200).json(true);
    } catch (error) {
        return response.status(500).json(error);
    }
}