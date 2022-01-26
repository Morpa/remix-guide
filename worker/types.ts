import type { Tracker } from 'workers-logger';
export type { Context } from './context';

export type AsyncReturnType<T> = T extends Promise<infer U>
	? U
	: T extends (...args: any) => Promise<infer U>
	? U
	: T extends (...args: any) => infer U
	? U
	: T;

export interface Env {
	GITHUB_TOKEN?: string;
	GITHUB_CLIENT_ID?: string;
	GITHUB_CLIENT_SECRET?: string;
	GITHUB_CALLBACK_URL?: string;
	GOOGLE_API_KEY?: string;
	SESSION_SECERTS?: string;
	SENTRY_DSN?: string;
	USER_AGENT?: string;
	DEBUG?: string;
	LOGGER_NAME?: string;
	LOGGER?: Tracker;
	CONTENT: KVNamespace;
	PAGE: KVNamespace;
	RESOURCES_STORE: DurableObjectNamespace;
	USER_STORE: DurableObjectNamespace;
}

export interface UserProfile {
	id: string;
	name: string;
	email: string;
}

export interface User {
	profile: UserProfile;
	viewed: string[];
	bookmarked: string[];
}

export type Category = 'tutorials' | 'packages' | 'examples' | 'others';

export interface Page {
	url: string;
	author?: string;
	category?: string;
	title: string;
	description?: string;
	dependencies?: Record<string, string>;
	configs?: string[];
	image?: string;
	video?: string;
	isSafe: boolean;
	createdAt: string;
	updatedAt: string;
}

export type SubmissionStatus = 'PUBLISHED' | 'RESUBMITTED' | 'INVALID';

export type MessageType = 'success' | 'error' | 'warning' | 'info';

export interface ResourceMetadata
	extends Pick<
		Resource,
		| 'id'
		| 'url'
		| 'category'
		| 'author'
		| 'title'
		| 'description'
		| 'integrations'
		| 'viewCounts'
		| 'createdAt'
	> {
	bookmarkCounts?: number;
}

export interface ResourceSummary {
	id: string;
	url: string;
	viewCounts: number;
	bookmarked: string[];
	createdAt: string;
	createdBy: string;
	updatedAt: string;
	updatedBy: string;
}

export interface Resource extends Page, ResourceSummary {
	integrations: string[];
}

export interface SearchOptions {
	keyword?: string | null;
	list?: string | null;
	owner?: string | null;
	author?: string | null;
	site?: string | null;
	category?: Category | null;
	platform?: string | null;
	integrations?: string[] | null;
	excludes?: string[] | null;
	limit?: number;
	sortBy?: 'hotness' | null;
}
