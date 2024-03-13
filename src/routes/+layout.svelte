<script>
    // Components
    import Navbar from '$lib/components/Nav.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
    <link rel="stylesheet" href="/styles/app.css">
    <link rel="stylesheet" href="/styles/blog-content.css">
</svelte:head>

<Navbar />
<main>
    <slot />
</main>
<Footer />