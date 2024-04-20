import { dbConnection } from '@/lib/db';
import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { Product } from '@/lib/models/product';

export async function GET() {
    try {
        await mongoose.connect(dbConnection, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        mongoose.set('strictQuery', true);
        const data = await Product.find();
        console.log('Connected to MongoDB');
        console.log(data)
        return NextResponse.json({ result: data }, { status: 200 });
    } catch (error) {
        // If an error occurs during database connection or query, log the error and return an error response
        console.error("Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}