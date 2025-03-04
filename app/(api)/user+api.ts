import { neon } from '@neondatabase/serverless';
const DATABASE_URL = process.env.DATABASE_URL as string

export async function POST(request: Request) {
    try {
        const sql = neon(DATABASE_URL);
        const { name, email, clerkId } = await request.json();
        if (!name || !email || !clerkId) {
            return Response.json({error: "Missing required fields"}, {status: 400})
        }
        const response = await sql`
            INSERT INTO users (name, email, clerk_id) values ( ${name}, ${email}, ${clerkId} )
        `
        return new Response(JSON.stringify({data: response}), {status: 201})
    } catch (error) {
        console.log("user+api ~ POST ~ error:", error);
        return Response.json({error: error}, {status: 500}) 
    }
}
export async function GET(request: Request) {
    try {
        
    } catch (error) {
        
    }
}