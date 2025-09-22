<script>
    import WinEntry from './WinEntry.svelte';
    import LoseEntry from './LoseEntry.svelte';
    import CreateEntryButton from './CreateEntryButton.svelte';
</script>

<div class="EntriesBox">
    <div class="EntriesHeader">
        <h2 class="MatchHistoryTitle">MATCH HISTORY</h2>
        <CreateEntryButton />
    </div>
    <div class="EntriesContainer">
        <WinEntry />
        <WinEntry />
        <LoseEntry />
        <LoseEntry />
        <WinEntry />
        <LoseEntry />
        <WinEntry />
        <LoseEntry />
        <WinEntry />
    </div>
</div>


<style>
    .EntriesBox {
        flex: 80%;
        background-color: #3F3F49;
        color: white;
        text-align: center;
        padding: 1rem;
        margin-top: 0;
        padding-top: 0;
        border-radius: 20px;
    }

    .MatchHistoryTitle {
        flex: 0 0 75%;
        margin: 0;
        padding: 0;
        text-align: left;
    }

    .EntriesHeader {
        height: 12.5%;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        border-bottom: 2px solid #7066A8;
    }

    .EntriesContainer {
        display: flex;
        flex: 1;
        max-height: 47.5vh;
        flex-direction: column;
        gap: 1rem;
        height: 100%;
        overflow-y: auto;
        margin-top: 0.5rem;
        border-radius: 10px;
    }
</style>