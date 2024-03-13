<svelte:head>
    <title>Contact - Tomi Koskinen</title>
    <meta name="description" content="Get in contact.">
    <meta name="author" content="Tomi Koskinen">
</svelte:head>

<div class="contact-page page">
    <div class="container">
        <header>
            <h1>Contact me</h1>
            <p>Easiest way to get in touch with me is by sending an email. Feel free to reach out on social media as well. Better for quick messages.</p>
        </header>
        <section class="email">
            <h2>Email</h2>
            <a href="mailto:contact@tomikoskinen.com">contact@tomikoskinen.com</a>
        </section>
        <section class="social-media">
            <h2>Social media</h2>
            <div class="accounts">
                <a href="https://linkedin.com/in/tomipkoskinen">LinkedIn (tomipkoskinen)</a>
                <a href="https://mastodon.social/@topeko">Mastodon (@topeko@mastodon.social)</a>
                <a href="https://instagram.com/tomipkoskinen">Instagram (@tomipkoskinen)</a>
            </div>
        </section>
    </div>
</div>

<style>
    header {
        padding: 50px 0 0 0;
    }
    h1 {
        color: var(--fontColor1);
        font-size: var(--fontSize1);
        font-weight: 700;
    }
    header p {
        line-height: 20px;
        margin: 20px 0 30px 0;
        color: var(--fontColor1);
        font-size: var(--fontSize3);
        font-weight: 500;
    }
    section {
        margin: 0 0 25px 0;
    }
    section h2 {
        margin: 0 0 10px 0;
        color: var(--fontColor1);
        font-size: var(--fontSize2);
        font-weight: 500;
    }
    section p {
        margin: 0;
        color: var(--fontColor1);
        font-size: var(--fontSize3);
        font-weight: 500;
    }
    section a {
        display: block;
        margin: 0;
        color: var(--fontColor1);
        font-size: var(--fontSize3);
        font-weight: 500;
        text-decoration: underline;
        cursor: pointer;
    }
    .accounts a {
        margin: 0 0 5px 0;
    }
</style>