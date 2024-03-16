import { error } from '@sveltejs/kit'

export async function load({ fetch }) {
    try {
        let response = await fetch('/api/blog.json');
        if (!response.ok) {
            throw new Error(response.status);
        }
        const blogData = await response.json();
        const recentPosts = blogData.posts.slice(0, 3);

        return { posts: recentPosts };
    } catch (e) {
        console.error(e);
        error(404, e);
    }
}