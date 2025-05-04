export interface GitHubActor {
    id: number;
    login: string;
    display_login: string;
    gravatar_id: string;
    url: string;
    avatar_url: string;
}

export interface GitHubRepo {
    id: number;
    name: string;
    url: string;
}

export interface GitHubCommit {
    sha: string;
    author: {
        email: string;
        name: string;
    };
    message: string;
    distinct: boolean;
    url: string;
}

export interface GitHubEvent {
    id: string;
    type: string;
    actor: GitHubActor;
    repo: GitHubRepo;
    payload: {
        repository_id: number;
        push_id: number;
        size: number;
        distinct_size: number;
        ref: string;
        head: string;
        before: string;
        commits: GitHubCommit[];
    };
    public: boolean;
    created_at: string;
} 