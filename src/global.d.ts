/// <reference types="@sveltejs/kit" />

export interface Project {
	id: number;
	name: string;
	repository: string;
	website: string;
	slug: string;
	cover: string;
	description: string;
	tags: Array<string>;
}
