<script>
    import { formatDate } from '$lib/utils';
    export let data;
    const posts = data.posts;
</script>

<svelte:head>
    <title>Blog - Tomi Koskinen</title>
    <meta name="description" content="Tomi's personal blog.">
    <meta name="author" content="Tomi Koskinen">
</svelte:head>


<div class="container page">
    <header>
        <h1>Blog</h1>
    </header>
    <section class="all-blogs">
        {#each posts as post }
            <div class="blog-post">
                <p>{formatDate(post.metadata.date)}</p>
                <a href="/blog/{post.slug}">{post.metadata.title}</a>
            </div>
        {/each}
    </section>
</div>

<style>
    header {
        padding: 50px 0 10px 0;
    }
    header h1 {
        font-size: var(--fontSize1);
        color: var(--fontColor1);
        font-weight: 700;
    }
    .all-blogs {
        padding: 0;
    }
    .blog-post {
        margin: 0 0 10px 0;
    }
    .blog-post p {
        margin: 0;
        color: var(--fontColor1);
        font-size: var(--fontSize4);
    }
    .blog-post a {
        display: block;
        margin: 0;
        color: var(--fontColor1);
        font-size: var(--fontSize3);
        font-weight: 500;
        text-decoration: underline;
        cursor: pointer;
    }
</style>