<script>
    export let data;
    const { title, date } = data.metadata;
    const content = data.content;
</script>

<div class="container page">
    <h1>{title}</h1>
    <svelte:component this={content} />
</div>