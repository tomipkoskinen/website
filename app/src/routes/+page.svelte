<script>
    const cmsUrl = "http://localhost:1337";
    export let data;

    function formatDate(dateString) {
        let date = new Date(dateString);
        let formatted = date.toLocaleDateString("en-FI");
        return formatted;
    }
</script>

<svelte:head>

</svelte:head>

<div class="home-page page">
    <div class="container">
        <header>
            {#if data.error}
            <h1>Welcome to my website!</h1>
            <p>There was a problem fetching content</p>
            {:else}
            <h1>{data.home.attributes.title}</h1>
            <p>{data.home.attributes.description}</p>
            {/if}
            <div class="socials">
                {#if !data.error}
                {#each data.info.attributes.socials as social}
                <a href="{social.url}" target="_blank"><img src="{cmsUrl}{social.icon.data.attributes.url}" alt="{social.name} logo"></a>
                {/each}
                {/if}
            </div>
            <a class="button" href="/contact">Contact</a>
        </header>
        <hr>
        <section class="recent-blogs">
            <h2>Recent blog posts</h2>
            {#if !data.error}
            {#each data.blogs as blog}
            <div class="blog-post">
                <p>{formatDate(blog.attributes.publishedAt)}</p>
                <a href="/blog/{blog.attributes.slug}">{blog.attributes.title}</a>
            </div>
            {/each}
            {/if}
            <a class="blog-open" href="/blog">Visit blog</a>
        </section>
    </div>
</div>

<style>
    header {
        padding: 50px 0 50px 0;
    }
    header h1 {
        font-size: var(--fontSize1);
        color: var(--fontColor1);
        font-weight: 700;
    }
    header p {
        max-width: 350px;
        line-height: 20px;
        margin: 25px 0 25px 0;
        color: var(--fontColor1);
        font-size: var(--fontSize2);
        font-weight: 500;
    }
    .button {
        padding: 5px 20px 5px 20px;
        line-height: 20px;
        color: var(--fontColor1);
        font-size: var(--fontSize2);
        font-weight: 500;
        text-decoration: none;
        background-color: var(--backgroundColor1);
        border: 1px solid var(--lineColor);
        border-radius: 2px;
        cursor: pointer;
    }
    .button:hover {
        color: var(--backgroundColor1);
        background-color: var(--fontColor1);
        transition: color .05s, background .1s;
    }
    .socials {
        margin-bottom: 25px;
    }
    .socials a {
        display: inline;
        margin: 0 10px 0 0;
    }
    .socials img {
        height: 24px;
        filter: grayscale(100%) contrast(500%);
        -webkit-filter: grayscale(100%) contrast(500%);
    }
    .recent-blogs {
        padding: 25px 0 50px 0;
    }
    .recent-blogs h2 {
        font-size: var(--fontSize1);
        font-weight: 500;
    }
    .recent-blogs > a {
        display: block;
        margin: 0;
        color: var(--fontColor1);
        font-size: var(--fontSize3);
        font-weight: 500;
        text-decoration: underline;
        cursor: pointer;
    }
    .blog-post {
        margin: 0 0 10px 0;
    }
    .blog-post p {
        margin: 0;
        color: var(--fontColor1);
        font-size: var(--fontSize3);
    }
    .blog-post a {
        display: block;
        margin: 0;
        color: var(--fontColor1);
        font-size: var(--fontSize2);
        font-weight: 500;
        text-decoration: underline;
        cursor: pointer;
    }
</style>