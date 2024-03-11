export async function load({ fetch }) {
    try {
        let response = await fetch('http://localhost:1337/api/gallery?sort=publishedAt:desc&filters[public][$eq]=true');
        if (!response.ok) {
            throw new Error(response.status);
        }
        const galleryData = await response.json();

        return { galleries: galleryData.data };
    } catch (e) {
        console.error(e);
        return { error: "Fetch error" }
    }
}