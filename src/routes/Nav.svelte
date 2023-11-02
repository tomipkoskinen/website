<script>
    import { page, navigating } from '$app/stores';

    let pagesChecked;

    // On route change
    $: if($navigating) resetNavbar();
    function resetNavbar () {
        // Close mobile menu
        pagesChecked = false;
    }
</script>

<nav>
    <div class="container">
        <a class="logo" href="/">Tomi Koskinen</a>

        <!-- Button for opening and closing mobile menu -->
        <input type="checkbox" id="pages-input" bind:checked={pagesChecked}>
        <label for="pages-input" id="pages-button" />

        <!-- Page navigation -->
        <div class="pages">
            <a href="/contact">Contact</a>
            <a href="/gallery">Gallery</a>
            <a href="/software">Software</a>
            <a href="/blog">Blog</a>
            <a href="/">Home</a>
        </div>
    </div>
</nav>

<style>
    nav {
        position: fixed;
        width: 100%;
        height: 50px;
        top: 0;
        border-bottom: 1px solid black;
    }
    a {
        line-height: 50px;
        color: var(--fontColor1);
        text-decoration: none;
    }
    .logo {
        width: auto;
        float: left;
        font-size: var(--fontSize2);
    }
    .pages {
        position: relative;
        display: block;
        width: auto;
        float: right;
        background-color: none;
    }
    .pages a {
        width: 100px;
        float: right;
        text-align: center;
        font-size: var(--fontSize2);
    }
    .pages a:hover {
        text-decoration: underline;
    }
    #pages-button {
        display: none;
        height: 50px;
        width: 50px;
        float: right;
        cursor: pointer;
    }
    #pages-input {
        display: none;
    }

    /* Responsive mobile view */
    @media (max-width: 650px) {
        .pages {
            visibility: hidden;
            opacity: 0;
            position: fixed;
            top: 50px;
            left: 0;
            display: flex;
            flex-wrap: wrap;
            flex-direction: column-reverse;
            justify-content: flex-end;
            width: 100%;
            height: 100%;
            background-color: white;
        }
        .pages a {
            width: 100%;
            border-bottom: 1px solid black;
        }
        #pages-button {
            display: block;
            margin-left: 10px;
            background-color: black;
        }
        /* Logic for opening mobile menu */
        #pages-input:checked ~ .pages {
            visibility: visible;
            opacity: 1;
            transition: opacity .2s, visibility .2s;
        }
        #pages-input:checked ~ #pages-button {
            background-color: red;
        }
    }
</style>