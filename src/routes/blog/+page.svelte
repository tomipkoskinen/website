<script>
    export let data;
    const posts = data.posts;
</script>

<div class="container page">
    <h1>Blog</h1>
    {#each posts as post}
        <div class="blog-post">
            <p>{post.metadata.date}</p>
            <a href="/blog/{post.slug}">{post.metadata.title}</a>
        </div>
    {/each}
</div>