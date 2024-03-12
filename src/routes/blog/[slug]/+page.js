import { error } from '@sveltejs/kit'

export async function load({ params }) {
    try {
        const blogData = await import(`../../../lib/blog/${params.slug}.md`);
        const content = blogData.default;
        const metadata = blogData.metadata;

        return { content: content, metadata: metadata, slug: params.slug };
    } catch (e) {
        console.error(e);
        error(404, e);
    }
}