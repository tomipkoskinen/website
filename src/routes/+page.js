import { error } from '@sveltejs/kit'

export async function load({ fetch }) {
    try {
        let response = await fetch('/api/blog/page/1');
        if (!response.ok) {
            throw new Error(response.status);
        }
        const blogData = await response.json();

        return { posts: blogData.posts };
    } catch (e) {
        console.error(e);
        error(404, e);
    }
}