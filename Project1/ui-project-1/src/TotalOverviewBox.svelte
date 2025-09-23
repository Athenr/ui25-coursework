<script>
    import { matches } from './main.js';

    $: totalMatches = $matches.length;
    $: totalWins = $matches.filter(m => m.matchResult === "Victory").length;
    $: winRate = totalMatches ? Math.round((totalWins / totalMatches) * 100) : 0;
    $: avgKills = totalMatches ? ($matches.reduce((sum, m) => sum + (+m.kda.kills || 0), 0) / totalMatches).toFixed(1) : 0;
    $: avgDeaths = totalMatches ? ($matches.reduce((sum, m) => sum + (+m.kda.deaths || 0), 0) / totalMatches).toFixed(1) : 0;
    $: avgAssists = totalMatches ? ($matches.reduce((sum, m) => sum + (+m.kda.assists || 0), 0) / totalMatches).toFixed(1) : 0;
    $: avgTeamScore = totalMatches ? ($matches.reduce((sum, m) => sum + (+m.score.team || 0), 0) / totalMatches).toFixed(1) : 0;
    $: avgOpponentScore = totalMatches ? ($matches.reduce((sum, m) => sum + (+m.score.opponent || 0), 0) / totalMatches).toFixed(1) : 0;
    $: avgScore = `${avgTeamScore} - ${avgOpponentScore}`;

    $: matchCounts = {
        Spar: $matches.filter(m => m.matchType === "Spar").length,
        Duel: $matches.filter(m => m.matchType === "Duel").length,
        "Practice Raid": $matches.filter(m => m.matchType === "Practice Raid").length,
        "Official Raid": $matches.filter(m => m.matchType === "Official Raid").length,
        "Practice Siege": $matches.filter(m => m.matchType === "Practice Siege").length,
        "Official Siege": $matches.filter(m => m.matchType === "Official Siege").length
    };
</script>

<div class="TotalOverviewBox">
    <div class="overview-stats">
        <div class="stat"><span class="label">Win Rate</span><span class="value">{winRate}%</span></div>
        <div class="stat"><span class="label">Average Kills</span><span class="value">{avgKills}</span></div>
        <div class="stat"><span class="label">Average Deaths</span><span class="value">{avgDeaths}</span></div>
        <div class="stat"><span class="label">Average Assists</span><span class="value">{avgAssists}</span></div>
        <div class="stat"><span class="label">Average Score</span><span class="value">{avgScore}</span></div>
        <div class="stat"><span class="label">Total Matches</span><span class="value">{totalMatches}</span></div>
        {#each Object.entries(matchCounts) as [type, count]}
            <div class="stat"><span class="label">{type}</span><span class="value">{count}</span></div>
        {/each}
    </div>
</div>

<style>
.TotalOverviewBox {
    flex: 1;
    background: linear-gradient(135deg, #3C3659, #4D4673);
    color: white;
    padding: 1rem;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    box-shadow: 0 4px 10px rgba(0,0,0,0.4);
}

.overview-stats {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 0.5rem;
}

.stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(255,255,255,0.1);
    padding: 0.4rem;
    border-radius: 12px;
    min-height: 45px;
    transition: transform 0.2s;
    text-align: center;
}

.stat:hover {
    transform: scale(1.05);
    background: rgba(255,255,255,0.2);
}

.stat .label {
    font-size: 0.85rem;
    color: #ddd;
    margin-bottom: 0.2rem;
}

.stat .value {
    font-size: 1.2rem;
    font-weight: bold;
}
</style>
