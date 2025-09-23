<script>
    import { matches } from './main.js';
    import RankImage from './RankImage.png';

    $: totalWins = $matches.filter(m => m.matchResult === "Victory").length;
    $: totalLosses = $matches.filter(m => m.matchResult === "Defeat").length;
    $: totalDraws = $matches.filter(m => m.matchResult === "Draw").length;
</script>

<div class="RankBox">
    <div class="rank-header">
        <img src="{RankImage}" alt="Rank Icon" class="rank-icon" />
        <h3>Current Rank</h3>
    </div>

    <div class="rank-info">
        <div class="stat">
            <span class="label">Wins</span>
            <span class="value wins">{totalWins}</span>
        </div>
        <div class="stat">
            <span class="label">Losses</span>
            <span class="value losses">{totalLosses}</span>
        </div>
        <div class="stat">
            <span class="label">Draws</span>
            <span class="value draws">{totalDraws}</span>
        </div>
    </div>
</div>

<style>
    .RankBox {
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

    .rank-header {
        margin-top: .10rem;
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .rank-icon {
        width: 70px;
        height: 70px;
        background-color: #ccc;
        border-radius: 12px;
        flex-shrink: 0;
    }

    .rank-header h3 {
        margin: 0;
        font-size: 1.3rem;
    }

    .rank-info {
        display: flex;
        justify-content: space-around;
        flex: 1;
        width: 100%;
        gap: 1rem;
        align-items: center;
    }

    .stat {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: rgba(255,255,255,0.1);
        padding: 0.5rem 1rem;
        border-radius: 12px;
        flex: 1;
        transition: transform 0.2s;
    }

    .stat:hover {
        transform: scale(1.05);
        background: rgba(255,255,255,0.2);
    }

    .stat .label {
        font-size: 0.8rem;
        color: #ddd;
    }

    .stat .value {
        font-size: 1.2rem;
        font-weight: bold;
    }

    .stat .value.wins { color: #0f0; }
    .stat .value.losses { color: #f33; }
    .stat .value.draws { color: #ccc; }
</style>