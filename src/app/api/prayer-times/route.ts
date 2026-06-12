import { NextResponse } from "next/server";
import { getPrayerData } from "@/app/(site)/solat/_lib/prayer";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get("city") || "Kuala Lumpur";

  try {
    const data = await getPrayerData(city);
    return NextResponse.json(data, {
      headers: { "Cache-Control": "public, s-maxage=43200, stale-while-revalidate=3600" },
    });
  } catch {
    return NextResponse.json({ error: "Failed to fetch prayer times" }, { status: 500 });
  }
}
