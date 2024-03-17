import { error } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';
import { getAlbums } from '$lib/server';

export async function GET() {
    try {
        const data = await getAlbums();

        return json({
            albums: data
        });
    } catch (e) {
        console.error(e);
        error(404, e);
    }
}