<script>
    import { navigating } from '$app/stores';

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
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/blog">Blog</a>
                </li>
                <li>
                    <a href="/software">Software</a>
                </li>
                <li>
                    <a href="/gallery">Gallery</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
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
    .logo {
        line-height: 50px;
        width: auto;
        float: left;
        font-size: var(--fontSize2);
        color: var(--fontColor1);
        text-decoration: none;
    }
    .pages {
        position: relative;
        display: block;
        width: auto;
        float: right;
        background-color: none;
    }
    .pages ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    .pages li {
        text-align: center;
        float: right;
    }
    .pages a {
        display: block;
        line-height: 50px;
        width: 100px;
        color: var(--fontColor1);
        text-decoration: none;
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
            width: 100%;
            height: 100%;
            background-color: white;
        }
        .pages li {
            float: none;
            border-bottom: 1px solid black;
        }
        .pages a {
            width: 100%;
        }
        #pages-button {
            display: block;
            margin-left: 10px;
            /* Temp */
            background-color: black;
        }
        /* Logic for mobile menu */
        #pages-input:checked ~ .pages {
            visibility: visible;
            opacity: 1;
            transition: opacity .2s, visibility .2s;
        }
        #pages-input:checked ~ #pages-button {
            /* Temp */
            background-color: red;
        }
    }
</style>