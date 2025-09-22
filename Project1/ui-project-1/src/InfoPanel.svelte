<script>
    import RankBox from './RankBox.svelte';
    import PlayerInfo from './PlayerInfoBox.svelte';
    import StatisticsBox from './StatisticsBox.svelte';
</script>

<div class="InfoPanel">
    <div class="RankAndPlayerInfoDiv">
        <RankBox />
        <PlayerInfo />
    </div>

    <StatisticsBox />
</div>

<style>
    .InfoPanel {
        flex: .6;
        color: white;
        text-align: center;
        display: flex;
        flex-direction: column;
    }

    .RankAndPlayerInfoDiv {
        display: flex;
        flex-direction: row;
        flex: 0 0 30%;
        gap: 2rem;
        padding-bottom: 2rem;
    }
</style>
