"use client";

import { GitHubEvent } from "@/app/types/github";
import Image from "next/image";

interface EventResultsProps {
    events?: GitHubEvent[];
}

export default function EventResults({ events = [] }: EventResultsProps) {
    if (!events.length) {
        return <div className="p-4 text-gray-500">No events found</div>;
    }

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actor</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Repository</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {events.map((event) => (
                        <tr key={event.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                    {event.type}
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <a 
                                        href={`https://github.com/${event.actor.login}`}
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center hover:opacity-80"
                                    >
                                        <Image 
                                            className="rounded-full mr-2" 
                                            src={event.actor.avatar_url} 
                                            alt={event.actor.login}
                                            width={32}
                                            height={32}
                                        />
                                        <span className="text-sm text-gray-900">{event.actor.login}</span>
                                    </a>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {event.repo.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {new Date(event.created_at).toLocaleString()}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}