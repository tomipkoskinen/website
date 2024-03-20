<script>
    import PostList from '$lib/components/PostList.svelte';
    import Socials from '$lib/components/Socials.svelte';
    export let data;
    const posts = data.posts;
</script>

<svelte:head>
    <title>Tomi Koskinen</title>
    <meta name="description" content="Software Engineering Student at LUT University and a hobbyist photographer based in Lappenranta, Finland.">
    <meta name="author" content="Tomi Koskinen">
</svelte:head>

<div class="home-page page">
    <div class="container">
        <header>
            <h1>Software Engineering<br>Student<br>& Photographer</h1>
        </header>
        <section class="recent-blogs">
            <h2>Recent blog posts</h2>
            <PostList posts={posts}/>
            <a class="blog-open" href="/blog">Visit blog</a>
        </section>
    </div>
</div>

<style>
    header {
        padding: 0 0 50px 0;
        max-width: 700px;
    }
    header h1 {
        font-size: 50px;
        font-weight: 700;
    }
    .recent-blogs {
        padding: 20px 0 50px 0;
    }
    .recent-blogs h2 {
        font-size: var(--fontSize3);
        font-weight: 500;
    }
    .blog-open {
        display: block;
        margin: 0;
        color: var(--foregroundColor);
        font-size: var(--fontSize4);
        font-weight: 500;
        text-decoration: underline;
        cursor: pointer;
    }

    /* Responsive mobile view */
    @media (max-width: 700px) {
        header {
            padding: 10px 0 50px 0;
        }
        header h1 {
            font-size: 40px;
        }
    }
    @media (max-width: 500px) {
        header h1 {
            max-width: 400px;
        }
    }
</style>
