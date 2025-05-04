// app/page.tsx
"use client";
import { useState } from "react";
import EventDisplay from "./components/eventDisplay";
import EventResults from "./components/eventResults";
export default function Home() {
    const [events, setEvents] = useState([]);
    const [error, setError] = useState("");

    const handleSubmit = async (repo: string, owner: string, event: string) => {
        //debug
        //console.log(repo, owner, event);
        try {
            setError("");
            const response = await fetch(`/api/events?repo=${repo}&owner=${owner}&event=${event}`);
            const data = await response.json();
            setEvents(data);
        } catch (error) {
            console.error("Error fetching events:", error);
        }
    } 

return (
    <main className="p-4">
        <h1>GitHub Repo Events Viewer</h1>
        <EventDisplay onSubmit={handleSubmit} />
        <EventResults events={events} />
    </main>
) 
}