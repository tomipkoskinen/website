import { error } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';
import { getPhotos } from '$lib/server';

export async function GET() {
    try {
        const data = await getPhotos();

        return json({
            "albums": data,
            "album": null
        });
    } catch (e) {
        console.error(e);
        error(404, e);
    }
}