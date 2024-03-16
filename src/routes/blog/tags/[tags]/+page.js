import { error } from '@sveltejs/kit'

export async function load({ fetch, params }) {
    try {
        let response = await fetch(`/api/blog/tags/${params.tags}`);
        if (!response.ok) {
            throw new Error(response.status);
        }
        const blogData = await response.json();

        return { posts: blogData.posts, tag: blogData.tags };
    } catch (e) {
        console.error(e);
        error(404, e);
    }
}