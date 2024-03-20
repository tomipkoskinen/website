<script>
    export let album;
</script>


<section>
    {#each album.photos as image }
        {#if image.orientation === "landscape"}
            <img class="landscape" src={image.url} alt="{image.alt}">
        {:else if image.orientation === "portrait"}
            <img class="portrait" src={image.url} alt="{image.alt}">
        {:else}
            <img class="other" src={image.url} alt="{image.alt}">
        {/if}
    {/each}
</section>

<style>
    section {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
    }
    img {
        max-width: 100%;
    }
    .landscape {
        grid-column: span 2;
    }
    .portrait {
        grid-column: span 1;
    }
    .other {
        grid-column: span 2;
    }
</style>
