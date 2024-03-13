import { error } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';
import { getPosts } from '$lib/server';

export async function GET() {
    try {
        const data = await getPosts();

        return json({
            "posts": data,
            "category": null
        });
    } catch (e) {
        console.error(e);
        error(404, e);
    }
}