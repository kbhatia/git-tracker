"use client";

import {useState } from "react";

export default function EventDisplay({onSubmit}: {onSubmit: (repo: string, owner: string, event: string) => void}) {
    const [repo, setRepo] = useState("");
    const [owner, setOwner] = useState("");
    const [event, setEvent] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(repo, owner, event);
    }

    return (
        <div className="p-4">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="repo" className="block mb-1">Repository Name:</label>
                    <input 
                        id="repo"
                        type="text" 
                        value={repo} 
                        onChange={(e) => setRepo(e.target.value)}
                        className="w-full p-2 border rounded bg-white text-black"
                    />
                </div>
                <div>
                    <label htmlFor="owner" className="block mb-1">Owner:</label>
                    <input 
                        id="owner"
                        type="text" 
                        value={owner} 
                        onChange={(e) => setOwner(e.target.value)}
                        className="w-full p-2 border rounded bg-white text-black"
                    />
                </div>
                <div>
                    <label htmlFor="event" className="block mb-1">Event Type:</label>
                    <input 
                        id="event"
                        type="text" 
                        value={event} 
                        onChange={(e) => setEvent(e.target.value)}
                        className="w-full p-2 border rounded bg-white text-black"
                    />
                </div>
                <button 
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}