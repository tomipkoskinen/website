<script>
    // Global stylesheet
    import "./app.css";

    // Components
    import Navbar from './Nav.svelte';
    import Footer from './Footer.svelte';
</script>

<Navbar />
<main>
    <slot />
</main>
<Footer />