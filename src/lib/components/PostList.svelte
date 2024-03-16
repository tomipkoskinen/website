<script>
    import { formatDate } from '$lib/utils';
    import '$lib/styles/blog-list.css';
    export let posts;
</script>

<section class="blog-list">
    {#each posts as post }
        <div class="blog-list-item">
            <p>{formatDate(post.metadata.date)}</p>
            <a href="/blog/{post.slug}">{post.metadata.title}</a>
        </div>
    {/each}
</section>