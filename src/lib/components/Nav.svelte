<script>
    import {page, navigating} from '$app/stores';

    let pagesChecked;

    $: if ($navigating) {
        resetNavbar();
    }

    function resetNavbar () {
        pagesChecked = false;
    }
</script>

<nav>
    <div class="container">
        <a class="logo" href="/">Tomi Koskinen</a>

        <!-- Button for opening and closing mobile menu -->
        <input type="checkbox" id="pages-input" bind:checked={pagesChecked}>
        <label for="pages-input" id="pages-button">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
        </label>

        <!-- Page navigation -->
        <div class="pages">
            <ul>
                <div class="divider"></div>
                <li>
                    <a href="/blog">Blog</a>
                </li>
                <div class="divider"></div>
                <li>
                    <a href="/projects">Projects</a>
                </li>
                <div class="divider"></div>
                <li>
                    <a href="/gallery">Gallery</a>
                </li>
                <div class="divider"></div>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<style>
    nav {
        z-index: 1;
        position: fixed;
        width: 100%;
        height: 30px;
        padding-top: 50px;
        top: 0;
        background-color: var(--backgroundColor1);
    }
    .logo {
        width: auto;
        float: left;
        line-height: 30px;;
        font-size: var(--fontSize3);
        font-weight: 500;
        color: var(--foregroundColor);
        text-decoration: none;
    }
    .divider {
        height: 30px;
        display: block;
        text-align: center;
        float: left;
        margin: 0 20px 0 20px;
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
        float: left;
    }
    .pages a {
        display: block;
        width: auto;
        line-height: 30px;
        color: var(--foregroundColor);
        text-decoration: none;
        font-size: var(--fontSize3);
        font-weight: 400;
    }
    .pages a:hover {
        text-decoration: underline;
    }
    #pages-button {
        display: none;
        height: 100%;
        width: 30px;
        padding: 2px 0;
        float: right;
        cursor: pointer;
    }
    #pages-input {
        display: none;
    }
    .bar1, .bar2, .bar3 {
        width: 100%;
        height: 2px;
        background-color: var(--foregroundColor);
        margin: 5px 0;
        transition: 0.1s;
        border-radius: 2px;
    }

    /* Responsive mobile view */
    @media (max-width: 700px) {
        .divider {
            display: none;
        }   
        .pages {
            visibility: hidden;
            opacity: 0;
            position: fixed;
            top: 80px;
            padding-top: 20px;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: var(--backgroundColor1);
        }
        .pages li {
            float: none;
            border-bottom: 1px solid var(--foregroundColor);
        }
        .pages a {
            width: 100%;
            line-height: 50px;
        }
        #pages-button {
            display: block;
            margin-left: 10px;
        }
        /* Logic for mobile menu */
        #pages-input:checked ~ .pages {
            visibility: visible;
            opacity: 1;
            transition: opacity .2s, visibility .2s;
        }
        /* Rotate bars */
        #pages-input:checked ~ #pages-button > .bar1 {
            transform: translate(0, 7px) rotate(-45deg);
        }
        #pages-input:checked ~ #pages-button > .bar2 {
            opacity: 0;
        }
        #pages-input:checked ~ #pages-button > .bar3 {
            transform: translate(0, -7px) rotate(45deg);
        }
    }
</style>
