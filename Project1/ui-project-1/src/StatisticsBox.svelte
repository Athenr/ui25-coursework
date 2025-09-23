<script>
    import { matches, selectedMatchId } from './main.js';

    $: selectedMatch = $matches.find(match => match.id === $selectedMatchId);
</script>

<div class="StatisticsBox">
    <div class="statisticsHeader">
        <h2>MATCH STATISTICS</h2>
    </div>

    {#if selectedMatch}
        <div class="stat-section">
            <div class="stat-row"><span class="label">Match Name:</span> <span class="value">{selectedMatch.matchName}</span></div>
            <div class="stat-row"><span class="label">Date:</span> <span class="value">{selectedMatch.matchDate}</span></div>
            <div class="stat-row result-row {selectedMatch.matchResult}">
                <span class="label">Result:</span> <span class="value">{selectedMatch.matchResult}</span>
            </div>
        </div>

        <div class="stat-section teams">
            <div class="stat-row"><span class="label">Match Type:</span> <span class="value">{selectedMatch.matchType}</span></div>
            <div class="stat-row"><span class="label">Your Team:</span> <span class="value">{selectedMatch.yourTeam}</span></div>
            <div class="stat-row"><span class="label">Opponent Team:</span> <span class="value">{selectedMatch.opponentTeam}</span></div>
        </div>

        <div class="stat-section score-kda">
            <div class="stat-row"><span class="label">Score:</span> <span class="value">{selectedMatch.score.team} - {selectedMatch.score.opponent}</span></div>
            <div class="stat-row"><span class="label">K / D / A:</span> <span class="value">{selectedMatch.kda.kills} / {selectedMatch.kda.deaths} / {selectedMatch.kda.assists}</span></div>
        </div>

        {#if selectedMatch.matchNotes}
        <div class="stat-section notes">
            <span class="label">Notes:</span>
            <p class="notes-value">{selectedMatch.matchNotes}</p>
        </div>
        {/if}

    {:else}
        <p class="placeholder">Select a match to see its statistics...</p>
    {/if}
</div>


<style>
    * {
        box-sizing: border-box;
    }

    .StatisticsBox {
        flex: 1;
        background-color: #3F3F49;
        color: white;
        text-align: left;
        padding: 1rem 1.5rem;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        font-family: "Segoe UI", Roboto, sans-serif;
        overflow-y: auto;
    }

    .statisticsHeader {
        border-bottom: 2px solid #aa9bff;
        margin-bottom: 1rem;
        padding-bottom: 0.5rem;
    }

    .StatisticsBox h2 {
        text-align: left;
        margin-bottom: 1rem;
        font-size: 1.5rem;
        margin: 0;
        padding: 0;
    }

    .stat-section {
        margin-bottom: 1rem;
        padding: 0.5rem;
        border-left: 3px solid #8478c5;
        background: rgba(255,255,255,0.05);
        border-radius: 8px;
    }

    .stat-row {
        display: flex;
        justify-content: space-between;
        padding: 0.25rem 0.5rem;
        align-items: center;
    }

    .label {
        font-weight: bold;
        color: #ccc;
    }

    .value {
        font-weight: bold;
        color: white;
    }

    .result-row.Victory .value {
        color: #0f0;
    }

    .result-row.Defeat .value {
        color: #f33;
    }

    .result-row.Draw .value {
        color: #ccc;
    }

    .notes {
        display: flex;
        flex-direction: column;
    }

    .notes-value {
        margin-top: 0.25rem;
        padding: 0.5rem;
        background: rgba(255,255,255,0.05);
        border-radius: 5px;
        font-style: italic;
        white-space: pre-wrap;
    }

    .placeholder {
        text-align: center;
        font-style: italic;
        margin-top: 2rem;
    }
</style>