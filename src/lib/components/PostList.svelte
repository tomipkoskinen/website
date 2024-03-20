<script>
    import { formatDate } from '$lib/utils';
    export let posts;
</script>

<section>
    {#each posts as post }
        <div class="blog-list-item">
            <p>{formatDate(post.metadata.date)}</p>
            <a href="/blog/{post.slug}">{post.metadata.title}</a>
        </div>
    {/each}
</section>

<style>
    section {
        padding: 0;
    }
    .blog-list-item {
        margin: 0 0 10px 0;
    }
    p {
        margin: 0;
        color: var(--foregroundColor);
        font-size: var(--fontSize4);
    }
    a {
        display: block;
        margin-top: 5px;
        color: var(--foregroundColor);
        font-size: var(--fontSize3);
        font-weight: 500;
        text-decoration: underline;
        cursor: pointer;
    }
</style>