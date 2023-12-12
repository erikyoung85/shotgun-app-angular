import { VercelRequest, VercelResponse } from '@vercel/node';
import { sql } from '@vercel/postgres';

const mockResponse = {
    id: 1,
    name: 'mock group',
    people: [
        {group_id: 1, name: 'mock person 1', id: 1},
        {group_id: 1, name: 'mock person 2', id: 2},
        {group_id: 1, name: 'mock person 3', id: 3},
    ]
}
 
export default async function handler(
    request: VercelRequest,
    response: VercelResponse,
) {
    const groupId = Number(request.query.groupId);
    if (isNaN(groupId)) 
        return response.status(400).json({ message: 'groupId must be a number' })

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
            id: group.id,
            name: group.name,
            people: people
        }

        return response.status(200).json(groupDtoV1);
    } catch (error) {
        return response.status(500).json(error);
    }
}