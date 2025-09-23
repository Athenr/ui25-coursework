<script>
    import TotalOverviewBox from './TotalOverviewBox.svelte';
    import EntriesBox from './EntriesBox.svelte';
</script>

<div class="EntryPanel">
    <TotalOverviewBox />
    <EntriesBox />
</div>

<style>
    .EntryPanel {
        flex: .5;
        display: flex;
        flex-direction: column;
        color: white;
        text-align: center;
        gap: 2rem;
    }
</style>
