import { VercelRequest, VercelResponse } from '@vercel/node';
import { sql } from '@vercel/postgres';
 
export default async function handler(
    request: VercelRequest,
    response: VercelResponse,
) {
    const groupId = 1;

    try {
        const client = await sql.connect();
        const groupRes = await client.query(`
            SELECT *
            FROM "group"
            WHERE "group".id = ${groupId}
        `);
        const peopleRes = await client.query(`
            SELECT *
            FROM person
            WHERE person.group_id = ${groupId}
        `);
        client.release();

        const group = groupRes.rows[0];
        const people = peopleRes.rows;
        const groupDtoV1 = {
            ...group,
            people: people
        }

        return response.status(200).json(groupDtoV1);
    } catch (error) {
        return response.status(500).json(error);
    }
}