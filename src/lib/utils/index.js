export function formatDate(dateString) {
    let date = new Date(dateString);
    let formatted = date.toLocaleDateString("en-FI");
    return formatted;
}

export async function getPost(slug) {
    const data = await import(`../../blog/${slug}.md`);

    return { content: data.default, metadata: data.metadata, slug: slug };
}