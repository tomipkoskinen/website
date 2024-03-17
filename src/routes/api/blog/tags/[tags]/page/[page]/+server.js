import { error } from '@sveltejs/kit';
import { getPosts } from '$lib/server';

export async function GET({ params }) {
    const tags = params.tags;
    const page = Number(params.page);
    const limit = 10;
    try {
        const data = await getPosts(page, limit, tags);

        return data;
    } catch (e) {
        console.error(e);
        error(404, e);
    }
}