<script>
    import { page, navigating } from '$app/stores';

    let pagesChecked;

    // On route change
    $: if($navigating) resetNavbar();
    function resetNavbar () {
        pagesChecked = false;
    }
</script>

<navbar class="navbar">
    <div class="container">
        <a class="logo" href="/">Tomi Koskinen</a>

        <!-- Buttons for opening and closing mobile menu -->
        <input type="checkbox" id="pages-input" bind:checked={pagesChecked}>
        <label for="pages-input" id="pages-button" />

        <!-- Page navigation -->
        <div class="pages">
            <a class="page-link" href="/contact">Contact</a>
            <a class="page-link" href="/gallery">Gallery</a>
            <a class="page-link" href="/software">Software</a>
            <a class="page-link" href="/blog">Blog</a>
            <a class="page-link" href="/">Home</a>
        </div>
    </div>
</navbar>

<style>
    .navbar {
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
    .page-link {
        width: 100px;
        float: right;
        text-align: center;
        font-size: var(--fontSize2);
    }
    .page-link:hover {
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
        .page-link {
            width: 100%;
            border-bottom: 1px solid black;
        }
        #pages-button {
            display: block;
            margin-left: 10px;
            background-color: black;
        }
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