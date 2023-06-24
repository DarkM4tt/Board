import { NextResponse } from 'next/server';

import Events from '#assets/data/events.json';

export async function GET () {
	try {
		return NextResponse.json(Events);
	}
	catch (err) {
		return NextResponse.json(err);
	}
}
