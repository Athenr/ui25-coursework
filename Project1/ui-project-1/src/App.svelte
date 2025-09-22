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
        gap: 2rem;
        margin: 0;
        padding: 5rem;
    }

    .BottomPanel {
        display: flex;
        gap: 2rem;
        flex: 1;
    }

</style>
