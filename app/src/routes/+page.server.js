export async function load({ fetch }) {
    try {
        let response = await fetch('http://localhost:1337/api/home');
        if (!response.ok) {
            throw new Error(response.status);
        }
        const homeData = await response.json();

        response = await fetch('http://localhost:1337/api/info?populate=socials.icon');
        if (!response.ok) {
            throw new Error(response.status);
        }
        const infoData = await response.json();

        response = await fetch('http://localhost:1337/api/blogs?sort=publishedAt:desc&pagination[limit]=3&filters[public][$eq]=true');
        if (!response.ok) {
            throw new Error(response.status);
        }
        const blogData = await response.json();

        return { home: homeData.data, info: infoData.data, blogs: blogData.data };
    } catch (e) {
        console.error(e);
        return { error: "Fetch error" }
    }
}