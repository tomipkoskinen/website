import { error } from '@sveltejs/kit';
import { getPhotos } from '$lib/server';

export async function GET({ params }) {
    const album = params.album;
    try {
        const data = await getPhotos(album);

        return data;
    } catch (e) {
        console.error(e);
        error(404, e);
    }
}