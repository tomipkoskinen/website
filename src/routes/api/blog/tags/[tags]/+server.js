import { error } from '@sveltejs/kit';
import { getPosts } from '$lib/server';

export async function GET({ params }) {
    const tags = params.tags;
    try {
        const data = await getPosts(undefined, undefined, tags);

        return data;
    } catch (e) {
        console.error(e);
        error(404, e);
    }
}