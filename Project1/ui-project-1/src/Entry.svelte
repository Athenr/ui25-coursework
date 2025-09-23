<script>
    export let matchResult = "Draw";
    export let matchName = "";
    export let score = { team: 0, opponent: 0 };
    export let matchDate = "";
    export let kda = { kills: 0, deaths: 0, assists: 0 };
    export let selected = false;
    export let onSelect = () => {};

    let gradient, hoverGradient, borderColor;

    $: {
        if (matchResult === "Victory") {
            gradient =
                "linear-gradient(to right, rgba(0, 200, 0, 0.3), rgba(0, 200, 0, 0))";
            hoverGradient =
                "linear-gradient(to right, rgba(0, 255, 0, 0.5), rgba(0, 255, 0, 0.1))";
            borderColor = "rgba(0, 200, 0, 0.8)";
        } else if (matchResult === "Defeat") {
            gradient =
                "linear-gradient(to right, rgba(200, 0, 0, 0.3), rgba(200, 0, 0, 0))";
            hoverGradient =
                "linear-gradient(to right, rgba(255, 0, 0, 0.5), rgba(255, 0, 0, 0.1))";
            borderColor = "rgba(200, 0, 0, 0.8)";
        } else {
            gradient =
                "linear-gradient(to right, rgba(200, 200, 200, 0.3), rgba(200, 200, 200, 0))";
            hoverGradient =
                "linear-gradient(to right, rgba(220, 220, 220, 0.5), rgba(220, 220, 220, 0.1))";
            borderColor = "rgba(200, 200, 200, 0.8)";
        }
    }
</script>

<button 
    class="Entry {selected ? 'selected' : ''}" 
    on:click={onSelect}
    style="--gradient: {gradient}; --hover-gradient: {hoverGradient}; --border-color: {borderColor};">
    
    <div class="EntryContent">
        <div class="Result">{matchResult}</div>
        <div class="Name">{matchName}</div>
        <div class="ScoreAndKDASpan">
            <span class="Score">{score.team} - {score.opponent}</span>
            <span class="KDA">{kda.kills} / {kda.deaths} / {kda.assists}</span>
        </div>
        <div class="Date">{matchDate}</div>
    </div>
</button>

<style>
    * {
        box-sizing: border-box;
    }

    .Entry {
        display: block;
        width: 100%;
        min-height: 4rem;
        color: white;
        text-align: left;
        padding: 0.25rem 0.5rem;
        border-radius: 3px;
        border-left: 3px solid var(--border-color);
        border-right: none;
        border-top: none;
        border-bottom: none;
        background: var(--gradient);

        transition: background 0.2s;

        outline: none;
        cursor: pointer;
        font: inherit;
}

    .Entry:hover {
        background: var(--hover-gradient);
    }

    .Entry.selected {
        background: var(--hover-gradient);
    }

    .EntryContent {
        display: grid;
        grid-template-columns: 80px 1fr 70px 80px;
        align-items: center;
        font-size: 0.9rem;
        width: 100%;
        gap: 0.5rem;
    }

    .Result {
        font-weight: bolder;
        font-size: 1.1rem;
    }

    .Name {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: wrap;
    }

    .ScoreAndKDASpan {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.1rem;
    }

    .Score, .KDA {
        font-weight: bold;
        text-align: left;
    }

    .Date {
        text-align: right;
    }

</style>
