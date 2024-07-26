import { NextResponse } from "next/server";

export async function POST(request: Request) {
  return NextResponse.json({ msg: "test pre fetching" }, { status: 200 });
}
