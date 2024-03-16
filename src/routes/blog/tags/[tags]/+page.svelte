<script>
    import PostList from '$lib/components/PostList.svelte';
    export let data;
    const posts = data.posts;
    const tag = data.tag;
</script>

<svelte:head>
    <title>{tag} blog posts - Tomi Koskinen</title>
    <meta name="description" content="Tomi's personal blog.">
    <meta name="author" content="Tomi Koskinen">
</svelte:head>


<div class="container page">
    <header>
        <h1>#{tag}</h1>
    </header>
    <PostList posts={posts}/>
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
</style>