<script>
    export let data;
    const posts = data.posts;
</script>

<svelte:head>

</svelte:head>

<div class="home-page page">
    <div class="container">
        <header>
            <h1>Hi, My name is Tomi!</h1>
            <p>I am a software engineering student and hobbyist photographer based in Finland.</p>
            <div class="socials">
                <a href="https://linkedin.com/in/tomipkoskinen" target="_blank"><img src="/socials/linkedin-logo.svg" alt="LinkedIn logo"></a>
                <a href="https://github.com/topekodev" target="_blank"><img src="/socials/github-logo.svg" alt="GitHub logo"></a>
                <a href="https://mastodon.social/@topeko"><img src="/socials/mastodon-logo.svg" alt="Mastodon logo"></a>
                <a href="https://instagram.com/tomipkoskinen" target="_blank"><img src="/socials/instagram-logo.svg" alt="Instagram logo"></a>
            </div>
            <a class="button" href="/contact">Contact</a>
        </header>
        <hr>
        <section class="recent-blogs">
            <h2>Recent blog posts</h2>
            {#each posts as post }
                <div class="blog-post">
                    <p>{post.metadata.date}</p>
                    <a href="/blog/{post.slug}">{post.metadata.title}</a>
                </div>
            {/each}
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