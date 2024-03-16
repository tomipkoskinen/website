import { error } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';
import { getPosts } from '$lib/server';

export async function GET({ params }) {
    const tags = params.tags;
    try {
        let posts = await getPosts(tags);

        return json({
            "posts": posts,
            "tags": tags
        });
    } catch (e) {
        console.error(e);
        error(404, e);
    }
}