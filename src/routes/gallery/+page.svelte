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
    {#each albums as album }
        <section class="album">
            <h2>{album.title}</h2>
            <div class="gallery-content">
                {#each album.photos as image }
                    {#if image.orientation === "landscape"}
                        <img class="landscape" src={image.url} alt="{image.alt}">
                    {:else if image.orientation === "portrait"}
                        <img class="portrait" src={image.url} alt="{image.alt}">
                    {:else}
                        <img class="other" src={image.url} alt="{image.alt}">
                    {/if}
                {/each}
            </div>
        </section>
    {/each}
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
        margin: 20px 0 30px 0;
        color: var(--fontColor1);
        font-size: var(--fontSize3);
        font-weight: 500;
    }

    .album h2 {
        font-size: var(--fontSize2);
        color: var(--fontColor1);
        font-weight: 700;
    }

    .gallery-content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
    }
    .gallery-content img {
        max-width: 100%;
    }
    .gallery-content .landscape {
        grid-column: span 2;
    }
    .gallery-content .portrait {
        grid-column: span 1;
    }
    .gallery-content .other {
        grid-column: span 2;
    }
</style>