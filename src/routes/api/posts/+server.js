import { error } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';
import { getPosts } from '$lib/utils';

export async function GET() {
    try {
        const category = null;
        const posts = await getPosts(category);

        return json({
            "posts": posts,
            "category": null
        });
    } catch (e) {
        console.error(e);
        error(404, e);
    }
}