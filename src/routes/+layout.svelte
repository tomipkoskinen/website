<script>
    // Global stylesheet
    import "./app.css";

    // Components
    import Navbar from '$lib/components/Nav.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>

<Navbar />
<main>
    <slot />
</main>
<Footer />