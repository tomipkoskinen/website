<script>
    export let data;
</script>

<div class="contact-page page">
    <div class="container">
        <header>
            {#if data.error}
            <h1>Error fetching content</h1>
            {:else}
            <h1>{data.contact.attributes.title}</h1>
            <p>{data.contact.attributes.description}</p>
            {/if}
        </header>
        <section class="email">
            <h2>Email</h2>
            {#if !data.error}
            <a href="mailto:{data.info.attributes.email}">{data.info.attributes.email}</a>
            {/if}
        </section>
        <section class="social-media">
            <h2>Social media</h2>
            <div class="accounts">
                {#if !data.error}
                {#each data.info.attributes.socials as social}
                <a href="{social.url}">{social.name} ({social.handle})</a>
                {/each}
                {/if}
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
        margin: 10px 0 10px 0;
        color: var(--fontColor1);
        font-size: var(--fontSize2);
        font-weight: 500;
    }
    header a {
        margin: 0;
        color: var(--fontColor3);
        font-size: var(--fontSize3);
        font-weight: 400;
        text-decoration: underline;
        cursor: pointer;
    }
    section {
        margin: 0 0 25px 0;
    }
    section h2 {
        color: var(--fontColor1);
        font-size: var(--fontSize1);
        font-weight: 500;
    }
    section p {
        margin: 0;
        color: var(--fontColor1);
        font-size: var(--fontSize2);
        font-weight: 500;
    }
    section a {
        display: block;
        margin: 0;
        color: var(--fontColor1);
        font-size: var(--fontSize2);
        font-weight: 500;
        text-decoration: underline;
        cursor: pointer;
    }
    .accounts {
        margin-top: 10px;
    }
    .accounts a {
        margin: 0 0 5px 0;
    }
</style>