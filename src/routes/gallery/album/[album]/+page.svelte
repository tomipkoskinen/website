<script>
    import Album from '$lib/components/Album.svelte';
    export let data;
    const album = data.galleryData.albums[0];
</script>

<svelte:head>
    <title>Gallery - Tomi Koskinen</title>
    <meta name="description" content="Photography gallery.">
    <meta name="author" content="Tomi Koskinen">
</svelte:head>

<div class="container page">
    <header>
        <h1>{album.title}</h1>
    </header>
    <Album album={album}/>
</div>

<style>
    header {
        padding: 50px 0 0 0;
    }
</style>