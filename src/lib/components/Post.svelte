<script>
    import { formatDate } from '$lib/utils';
    import '$lib/styles/blog-content.css';

    export let post;
    const { title, date, updated, desc, author, tags } = post.metadata;
    const content = post.content;
</script>

<div>
    <header>
        <h1>{title}</h1>
        <p class="desc">{desc}</p>
        <p class="author">{author}</p>
        <p class="date">Published {formatDate(date)}</p>
        {#if new Date(updated) > new Date(date)}
            <p class="date"> · Updated {formatDate(updated)}</p>
        {/if}
        <div class="categories">
            {#each tags as tag }
                <a href="/blog/tags/{tag}">#{tag}</a>
            {/each}
        </div>
    </header>
    <section class="blog-content">
        <svelte:component this={content} />
    </section>
</div>

<style>
    header {
        padding: 50px 0 20px 0;
    }
    header .desc {
        margin: 10px 0 20px 0;
    }
    header .author {
        font-weight: 700;
        margin: 10px 0 10px 0;
    }
    header .date {
        display: inline-block;
        margin: 0;
    }
    header .categories {
        margin-top: 10px;
    }
    header .categories a {
        padding: 1px 5px 1px 5px;
        margin-right: 5px;
        line-height: 20px;
        color: var(--backgroundColor1);
        background-color: var(--foregroundColor);
        font-size: var(--fontSize3);
        font-weight: 500;
        text-decoration: none;
        border-radius: 2px;
        cursor: pointer;
    }
</style>