import { error } from '@sveltejs/kit'
import { getPost } from '$lib/utils';

export async function load({ params }) {
    try {
        const blogData = await getPost(params.slug);
        return blogData;
    } catch (e) {
        console.error(e);
        error(404, e);
    }
}