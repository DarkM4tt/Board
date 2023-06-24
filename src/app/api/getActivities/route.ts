import { NextResponse } from 'next/server';

import Activities from '#assets/data/activities.json';

export async function GET () {
	try {
		return NextResponse.json(Activities);
	}
	catch (err) {
		return NextResponse.json(err);
	}
}
