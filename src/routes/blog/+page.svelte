<script>
    import PostList from '$lib/components/PostList.svelte';
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
    <PostList posts={posts}/>
</div>

<style>
    header {
        padding: 50px 0 10px 0;
    }
</style>