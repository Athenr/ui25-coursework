<script>
    import TopBar from './TopBar.svelte';
    import InfoPanel from './InfoPanel.svelte';
    import EntryPanel from './EntryPanel.svelte';
</script>

<!-- ------------------------------------------------------------------------------------------- -->

<main>

    <TopBar />

    <div class="BottomPanel">
        <InfoPanel />
        <EntryPanel />
    </div>

</main>

<!-- ------------------------------------------------------------------------------------------- -->

<style>
    * {
        box-sizing: border-box;
    }

    main {
        height: 100vh;
        display: flex;
        flex-direction: column;
        gap: 3rem;
        margin: 0;
        padding: 3rem;
    }

    .BottomPanel {
        display: flex;
        gap: 2rem;
        flex: 1;
    }

</style>
