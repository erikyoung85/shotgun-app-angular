import { VercelRequest, VercelResponse } from '@vercel/node';
import { sql } from '@vercel/postgres';
 
export default async function handler(
    request: VercelRequest,
    response: VercelResponse,
) {
    const body: {
        groupId: number;
        groupName: string
    } = request.body.body;

    try {
        const client = await sql.connect();
        const groupNameRes = await client.query(`
            Update "group"
            SET name = '${body.groupName}'
            WHERE "group".id = ${body.groupId}
            RETURNING name
        `);
        client.release();

        const newGroupName = groupNameRes.rows[0];

        return response.status(200).json(newGroupName);
    } catch (error) {
        return response.status(500).json(error);
    }
}