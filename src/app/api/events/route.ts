//api route for fetching events

import { NextResponse } from "next/server";
import { GitHubEvent } from "@/app/types/github";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const repo = searchParams.get("repo");
    const owner = searchParams.get("owner");
    const event = searchParams.get("event");

    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/events`);
    const data = await response.json();
    console.log(repo, owner, event);

    if (event) {
        const filtered = data.filter((e: GitHubEvent) => e.type === event);
        return NextResponse.json(filtered);
    }
    return NextResponse.json(data);
}