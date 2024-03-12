export async function getPosts(category) {
    category = category ?? null;

    let posts = [];

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
    });

    if (category) {
        posts = posts.filter(post => post.metadata.categories.includes(category));
    }

    return posts;
}

export async function getPost(slug) {
    const data = await import(`$lib/blog/${slug}.md`);

    return { content: data.default, metadata: data.metadata, slug: slug };
}