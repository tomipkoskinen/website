<script>
    export let data;
    const { title, date, updated, desc, author, categories } = data.metadata;
    const content = data.content;

    import { formatDate } from '$lib/utils';
</script>

<svelte:head>
    <title>{title} - Tomi Koskinen</title>
    <meta name="description" content="{desc}">
    <meta name="author" content="{author}">
</svelte:head>

<div class="blog-post page">
    <div class="container">
        <header>
            <h1>{title}</h1>
            <p class="desc">{desc}</p>
            <p class="author">{author}</p>
            <p class="date">Published {formatDate(date)}</p>
            {#if new Date(updated) > new Date(date)}
                <p class="date"> · Updated {formatDate(updated)}</p>
            {/if}
            <div class="categories">
                {#each categories as category }
                    <a href="/">#{category}</a>
                {/each}
            </div>
        </header>
        <section class="blog-content">
            <svelte:component this={content} />
        </section>
    </div>
</div>

<style>
    header {
        padding: 50px 0 20px 0;
    }
    header h1 {
        font-size: var(--fontSize1);
        color: var(--fontColor1);
        font-weight: 700;
        margin: 0 0 10px 0;
    }
    header p {
        font-size: var(--fontSize3);
        color: var(--fontColor1);
        font-weight: 500;
        margin: 0;
    }
    header .desc {
        margin: 10px 0 20px 0;
    }
    header .author {
        font-weight: 700;
    }
    header .date {
        display: inline-block;
    }
    .categories {
        margin-top: 10px;
    }
    .categories a {
        padding: 1px 5px 1px 5px;
        margin-right: 5px;
        line-height: 20px;
        color: var(--backgroundColor1);
        background-color: var(--fontColor1);
        font-size: var(--fontSize3);
        font-weight: 500;
        text-decoration: none;
        border-radius: 2px;
        cursor: pointer;
    }
</style>
