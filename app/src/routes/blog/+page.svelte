<script>
    const cmsUrl = "http://localhost:1337";
    export let data;
</script>

<div class="container page">
    <h1>Blog</h1>
    {#if data.error}
    <p>There was a problem fetching content</p>
    {:else}
    {#each data.blogs as blog}
    <a href="/blog/{blog.attributes.slug}">{blog.attributes.title}</a>
    {/each}
    {/if}
</div>