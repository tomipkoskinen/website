<script>
    import { formatDate } from '$lib/utils';
    import '$lib/styles/blog-post.css';

    export let post;
    const { title, date, updated, desc, author, tags } = post.metadata;
    const content = post.content;
</script>

<div class="blog-post">
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