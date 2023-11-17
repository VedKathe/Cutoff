

import { NextResponse } from 'next/server'
import { sql } from "@vercel/postgres";
import { createPool } from "@vercel/postgres";
import { createClient } from "@vercel/postgres";


export async function POST(request){
   const PostData = await request.json()
    
    const {
        name,feedback      
      } = PostData;
    
      const pool = new createPool({
        connectionString: process.env.POSTGRES_URL, // Your PostgreSQL connection string
      });

      
        const insertQuery = `
            INSERT INTO feedback_table (name,  feedback)
            VALUES ($1, $2)
        `;
        await pool.query(insertQuery, [name, feedback]);
   

    

    //Close connection

    return NextResponse.json({message: "Feedback Done"},{status:"200"})
}