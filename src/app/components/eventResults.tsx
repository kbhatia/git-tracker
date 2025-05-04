"use client";

import { GitHubEvent } from "@/app/types/github";

interface EventResultsProps {
    events?: GitHubEvent[];
}

export default function EventResults({ events = [] }: EventResultsProps) {
    if (!events.length) {
        return <div>No events found</div>;
    }

    return (
        <div>
            {events.map((event) => (
                <div key={event.id}>
                    <h3>{event.type}</h3>
                    <p>By: {event.actor.login}</p>
                    <p>Repo: {event.repo.name}</p>
                    <p>Created: {new Date(event.created_at).toLocaleString()}</p>
                </div>
            ))}
        </div>
    );
}