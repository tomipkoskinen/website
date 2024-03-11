export async function load({ fetch }) {
    try {
        let response = await fetch('http://localhost:1337/api/blogs?sort=publishedAt:desc&filters[public][$eq]=true');
        if (!response.ok) {
            throw new Error(response.status);
        }
        const blogData = await response.json();

        return { blogs: blogData.data };
    } catch (e) {
        console.error(e);
        return { error: "Fetch error" }
    }
}