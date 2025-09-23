<script>
    import { onMount } from 'svelte';
    import { matches } from './main.js';
    import MSILogo from './MSILogo.png';

    let playerName = "Jane \"ravnyx\" Doe";
    let sessionStart = new Date();
    let currentTime = new Date();
    let totalUsageSeconds = 0;

    $: totalEntries = $matches.length;

    $: totalDaysActive = new Set($matches.map(m => new Date(m.matchDate).toDateString())).size;

    const updateTime = () => {
        currentTime = new Date();
        totalUsageSeconds = Math.floor((currentTime.getTime() - sessionStart.getTime()) / 1000);
    }

    let timer;
    onMount(() => {
        timer = setInterval(updateTime, 1000);
        return () => clearInterval(timer);
    });

    const formatTime = (seconds) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h}h ${m}m ${s}s`;
    }

    const currentDateStr = () => {
        const now = new Date();
        return now.toLocaleDateString('en-GB') + " " + now.toLocaleTimeString('en-GB', { hour12: false });
    }
</script>

<div class="PlayerInfoBox">
    <div class="profile-header">
        <img src="{MSILogo}" alt="profile" class="profile-pic" />
        <div class="player-name">{playerName}</div>
    </div>

    <div class="player-stats">
        <div class="stat">
        <span class="label">Date</span>
        <span class="value">{currentDateStr()}</span>
        </div>
        <div class="stat">
        <span class="label">Session</span>
        <span class="value">{formatTime(totalUsageSeconds)}</span>
        </div>
        <div class="stat">
        <span class="label">Days Active</span>
        <span class="value">{totalDaysActive}</span>
        </div>
        <div class="stat">
        <span class="label">Entries</span>
        <span class="value">{totalEntries}</span>
        </div>
    </div>
</div>

<style>
    .PlayerInfoBox {
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

    .profile-header {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .profile-pic {
        width: 70px;
        height: 70px;
        border-radius: 12px;
        background-color: #ccc;
        flex-shrink: 0;
    }

    .player-name {
        font-size: 1.2rem;
        font-weight: bold;
    }

    .player-stats {
        display: flex;
        justify-content: space-between;
        flex: 1;
        gap: 0.75rem;
    }

    .stat {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: rgba(255,255,255,0.1);
        padding: 0.5rem 0.75rem;
        border-radius: 12px;
        flex: 1;
        min-height: 60px;
        transition: transform 0.2s;
    }

    .stat:hover {
        transform: scale(1.05);
        background: rgba(255,255,255,0.2);
    }

    .stat .label {
        font-size: 0.8rem;
        color: #ddd;
        margin-bottom: 0.15rem;
    }

    .stat .value {
        font-size: 1.2rem;
        font-weight: bold;
        text-align: center;
    }
</style>