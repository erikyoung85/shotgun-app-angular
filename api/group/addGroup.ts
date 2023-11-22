import { VercelRequest, VercelResponse } from '@vercel/node';
import { sql } from '@vercel/postgres';
 
export default async function handler(
    request: VercelRequest,
    response: VercelResponse,
) {
    const body: {
        groupId: number;
        groupName: string;
    } = request.body;

    try {
        const client = await sql.connect();
        const result = await client.query(`
            INSERT INTO group(id, name)
            VALUES ('${body.groupId}', '${body.groupName}');
        `);
        client.release();

        return response.status(200).json(result);
    } catch (error) {
        return response.status(500).json(error);
    }
}