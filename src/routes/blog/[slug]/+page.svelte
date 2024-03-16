<script>
    import Post from '$lib/components/Post.svelte';
    export let data;
    const { title, desc, author } = data.metadata;

</script>

<svelte:head>
    <title>{title} - Tomi Koskinen</title>
    <meta name="description" content="{desc}">
    <meta name="author" content="{author}">
</svelte:head>

<div class="blog-post page">
    <div class="container">
        <Post post={data}/>
    </div>
</div>