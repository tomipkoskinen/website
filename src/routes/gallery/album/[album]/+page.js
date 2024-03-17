import { error } from '@sveltejs/kit'

export async function load({ fetch, params }) {
    const album = params.album;
    try {
        let response = await fetch(`/api/gallery/album/${album}`);
        if (!response.ok) {
            throw new Error(response.status);
        }
        const galleryData = await response.json();

        return { galleryData };
    } catch (e) {
        console.error(e);
        error(404, e);
    }
}