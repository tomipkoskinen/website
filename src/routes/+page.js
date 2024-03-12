import { error } from '@sveltejs/kit'

export async function load() {
    const limit = 3;
    let posts = [];
    try {
        const paths = import.meta.glob('$lib/blog/*.md', { eager: true });

        for (const path in paths) {
            const file = await paths[path];
            const slug = path.split('/').at(-1)?.replace('.md', '');

            const post = {
                slug,
                metadata: file.metadata
            }

            if (post.metadata.published === "true") {
                posts.push(post);
            }
        }

        posts = posts.sort(function(a,b){
            return new Date(b.metadata.date) - new Date(a.metadata.date);
        }).slice(0, limit);

        return { posts: posts };
    } catch (e) {
        console.error(e);
        error(404, e);
    }
}