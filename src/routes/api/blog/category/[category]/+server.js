import { error } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';
import { getPosts } from '$lib/server';

export async function GET({ params }) {
    const category = params.category;
    try {
        let posts = await getPosts(category);

        return json({
            "posts": posts,
            "category": category
        });
    } catch (e) {
        console.error(e);
        error(404, e);
    }
}