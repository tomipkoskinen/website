<script>
    export let data;
    const albums = data.galleryData.albums;
</script>

<svelte:head>
    <title>Gallery - Tomi Koskinen</title>
    <meta name="description" content="Photography gallery.">
    <meta name="author" content="Tomi Koskinen">
</svelte:head>

<div class="container page">
    <header>
        <h1>Albums</h1>
    </header>
    <section class="albums">
        {#each albums as album }
            <div class="album">
                <a href="/gallery/album/{album.id}">{album.title}</a>
            </div>
        {/each}
    </section>
</div>

<style>
    header {
        padding: 50px 0 10px 0;
    }
    .album {
        margin-bottom: 10px;
    }
</style>