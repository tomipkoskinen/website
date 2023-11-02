<script>

</script>

<svelte:head>

</svelte:head>

<div class="home-page page">
    <div class="container">
        <header>
            <h1>Hi, My name is Tomi!</h1>
            <p>I am a software engineering student and hobbyist photographer based in Finland.</p>
            <div class="socials">
                <a href="https://github.com/topekodev" target="_blank"><img src="socials/github-logo.svg" alt="Github logo"></a>
                <a href="https://mastodon.social/@topeko" rel="me" target="_blank"><img src="socials/mastodon-logo.svg" alt="Mastodon logo"></a>
                <a href="https://instagram.com/tomipkoskinen" rel="me" target="_blank"><img src="socials/instagram-logo.svg" alt="Instagram logo"></a>
            </div>
            <a class="button" href="/contact">Contact</a>
        </header>
        <hr>
        <section class="recent-blogs">
            <h2>Recent blog posts</h2>
        </section>
    </div>
</div>

<style>
    hr {
        height: 1px;
        width: 100%;
        border: none;
        background-color: var(--lineColor);
    }
    header {
        padding: 50px 0 50px 0;
    }
    header h1 {
        font-size: var(--fontSize1);
        font-weight: 700;
    }
    header p {
        max-width: 350px;
        line-height: 20px;
        margin: 25px 0 25px 0;
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
    .socials {
        margin-bottom: 25px;
    }
    .socials a {
        display: inline;
        margin: 0 10px 0 0;
    }
    .socials img {
        height: 24px;
    }
    .recent-blogs {
        padding: 25px 0 50px 0;
    }
    .recent-blogs h2 {
        font-size: var(--fontSize1);
        font-weight: 500;
    }
</style>