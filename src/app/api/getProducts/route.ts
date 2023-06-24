import { NextResponse } from 'next/server';

import Products from '#assets/data/products.json';

export async function GET () {
	try {
		return NextResponse.json(Products);
	}
	catch (err) {
		return NextResponse.json(err);
	}
}
