export async function load({ fetch }) {
    try {
        let response = await fetch('http://localhost:1337/api/contact');
        if (!response.ok) {
            throw new Error(response.status);
        }
        const contactData = await response.json();

        response = await fetch('http://localhost:1337/api/info?populate=*');
        if (!response.ok) {
            throw new Error(response.status);
        }
        const infoData = await response.json();

        return { contact: contactData.data, info: infoData.data };
    } catch (e) {
        console.error(e);
        return { error: "Fetch error" }
    }
}