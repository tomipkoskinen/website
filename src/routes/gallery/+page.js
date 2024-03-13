import { error } from '@sveltejs/kit'

export async function load({ fetch }) {
    try {
        let response = await fetch('/api/gallery');
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