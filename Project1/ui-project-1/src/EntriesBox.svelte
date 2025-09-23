<script>
    import Entry from "./Entry.svelte";
    import CreateEntryButton from "./CreateEntryButton.svelte";
    import Modal from "./NewEntryModal.svelte";
    import { matches, selectedMatchId } from './main.js';

    let isModalOpen = false;

    let matchName = "";
    let teamScore = "";
    let opponentScore = "";
    let matchResult = "Draw";
    let matchDate = "";
    let yourTeam = "";
    let opponentTeam = "";
    let matchType = "";
    let kills = "";
    let deaths = "";
    let assists = "";
    let matchNotes = "";

    function openModal() {
        isModalOpen = true;
    }

    function submitMatch() {
        if (
            !matchName ||
            !teamScore ||
            !opponentScore ||
            !matchResult ||
            !matchDate ||
            !yourTeam ||
            !opponentTeam ||
            !matchType
        ) {
            alert("Please fill all required fields!");
            return;
        }

        const newMatch = {
            id: crypto.randomUUID(),
            matchName,
            score: { team: teamScore, opponent: opponentScore },
            matchResult,
            matchDate,
            yourTeam,
            opponentTeam,
            matchType,
            kda: { kills, deaths, assists },
            matchNotes,
        };

        matches.update((current) => {
            return [...current, newMatch].sort(
                (a, b) =>
                    new Date(b.matchDate).getTime() - new Date(a.matchDate).getTime(),
            );
        });

        console.log(matches);

        isModalOpen = false;

        matchName = "";
        teamScore = "";
        opponentScore = "";
        matchResult = "Draw";
        matchDate = "";
        yourTeam = "";
        opponentTeam = "";
        matchType = "";
        kills = "";
        deaths = "";
        assists = "";
        matchNotes = "";
    }

    function handleSelect(id) {
        selectedMatchId.set(id === $selectedMatchId ? null : id);
    }
</script>

<div class="EntriesBox">
    <div class="EntriesHeader">
        <h2 class="MatchHistoryTitle">MATCH HISTORY</h2>
        <CreateEntryButton onOpenModal={openModal} />
    </div>
    <div class="EntriesContainer">
        {#each $matches as match (match.id)}
            <Entry
                matchName={match.matchName}
                score={match.score}
                matchResult={match.matchResult}
                matchDate={match.matchDate}
                kda={match.kda}
                selected={$selectedMatchId === match.id}
                onSelect={() => handleSelect(match.id)}
            />
        {/each}
    </div>
</div>

<Modal bind:isOpen={isModalOpen}>
    <div id="modalHeader">
        <h2>NEW MATCH</h2>
    </div>

    <!-- Line 1 -->

    <div id="topnewLine" class="newLine">
        <div id="matchNameDiv" class="inputDiv">
            <p><b> Name:</b></p>
            <input
                type="text"
                id="matchName"
                placeholder="Match Name"
                bind:value={matchName}
                required
            />
        </div>

        <div id="scoreDiv" class="inputDiv">
            <p><b>Score:</b></p>
            <input
                type="number"
                id="teamScore"
                name="teamScore"
                placeholder="Team"
                min="0"
                max="999"
                bind:value={teamScore}
                required
            />
            <p><b> — </b></p>
            <input
                type="number"
                id="opponentScore"
                name="opponentScore"
                placeholder="Opponent"
                min="0"
                max="999"
                bind:value={opponentScore}
                required
            />
        </div>
    </div>

    <!-- Line 2 -->

    <div class="newLine">
        <div id="matchResultDiv" class="inputDiv">
            <p><b>Match Result:</b></p>
            <input
                type="radio"
                id="win"
                name="matchResult"
                value="Victory"
                bind:group={matchResult}
            />
            <label for="win">Victory</label><br />
            <input
                type="radio"
                id="loss"
                name="matchResult"
                value="Defeat"
                bind:group={matchResult}
            />
            <label for="loss">Defeat</label><br />
            <input
                type="radio"
                id="draw"
                name="matchResult"
                value="Draw"
                bind:group={matchResult}
                required
            />
            <label for="draw">Draw</label>
        </div>

        <div id="dateDiv" class="inputDiv">
            <p><b>Date:</b></p>
            <input type="date" id="matchDate" bind:value={matchDate} required />
        </div>
    </div>

    <!-- Line 3 -->

    <div class="newLine">
        <div id="teamNameDiv" class="inputDiv">
            <p><b> Your Team:</b></p>
            <input
                type="text"
                id="teamName"
                placeholder="Your Team"
                bind:value={yourTeam}
                required
            />
        </div>

        <div id="opponentNameDiv" class="inputDiv">
            <p><b>Opponent Team:</b></p>
            <input
                type="text"
                id="opponentName"
                placeholder="Opponent Team"
                bind:value={opponentTeam}
                required
            />
        </div>
    </div>

    <!-- Line 4 -->

    <div class="newLine">
        <div id="matchResultDiv" class="inputDiv">
            <p><b>Match Type:</b></p>
            <select
                id="matchType"
                name="matchType"
                bind:value={matchType}
                required
            >
                <option value="" disabled selected>Select a match type</option>
                <option value="Spar">Spar</option>
                <option value="Duel">Duel</option>
                <option value="Practice Raid">Practice Raid</option>
                <option value="Official Raid">Official Raid</option>
                <option value="Practice Siege">Practice Siege</option>
                <option value="Official Siege">Official Siege</option>
            </select>
        </div>

        <div id="KDADiv" class="inputDiv">
            <p><b>Kills / Deaths / Assists:</b></p>
            <input
                type="number"
                id="kills"
                name="kills"
                placeholder="K"
                min="0"
                max="999"
                bind:value={kills}
            />
            <input
                type="number"
                id="deaths"
                name="deaths"
                placeholder="D"
                min="0"
                max="999"
                bind:value={deaths}
            />
            <input
                type="number"
                id="assists"
                name="assists"
                placeholder="A"
                min="0"
                max="999"
                bind:value={assists}
            />
        </div>
    </div>

    <div class="newLine">
        <div id="notesDiv" class="inputDiv">
            <p><b>Match Notes:</b></p>
            <textarea
                id="matchNotes"
                placeholder="Enter additional notes about the match..."
                bind:value={matchNotes}
            ></textarea>
        </div>
    </div>

    <button type="submit" id="submitButton" on:click={submitMatch}
        >SUBMIT</button
    >
</Modal>

<style>
    * {
        box-sizing: border-box;
    }

    .EntriesBox {
        flex: 80%;
        background-color: #3f3f49;
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
        border-bottom: 2px solid #aa9bff;
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

    .newLine {
        margin: 0 auto;
        width: 100%;
        flex: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
        margin-top: 0rem;
    }

    .inputDiv {
        display: flex;
        flex: 1;
        flex-direction: row;
        align-items: flex-start;
        align-items: center;
        gap: 0.2rem;
    }

    input[type="text"],
    input[type="number"],
    input[type="date"],
    select {
        background-color: #333338;
        border: 2px solid #8478c5;
        border-radius: 5px;
        color: white;
        padding: 0.3rem;
        font-size: 1rem;
    }

    input[type="radio"] {
        accent-color: #978ae2;
    }

    #KDADiv input {
        width: 4rem;
    }

    #scoreDiv input {
        width: 7rem;
    }

    #notesDiv {
        flex-direction: column;
        align-items: flex-start;
    }

    #notesDiv p {
        margin: 0;
    }

    #matchNotes {
        width: 100%;
        min-height: 10rem;
        padding: 0.5rem;
        font-size: 1rem;
        border: 2px solid #8478c5;
        border-radius: 10px;
        color: white;
        resize: none;
    }

    #modalHeader {
        margin: 0;
        padding: 0;
        border-bottom: 2px solid #aa9bff;
        width: 100%;
    }

    #modalHeader h2 {
        margin: 0;
        padding: 0.25rem 0;
    }

    #topnewLine {
        padding-top: 1rem;
    }

    #submitButton {
        margin-top: 2.25rem;
        align-self: center;
        background-color: #5d548a;
        color: white;
        border: 3px solid #8478c5;
        font-size: 1.2rem;
        border-radius: 10px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        padding: 0.5rem 2rem;
    }

    #submitButton:hover {
        background-color: #5d548a;
        border: 3px solid #8478c5;
    }

    #submitButton:active {
        background-color: #5d548a;
        border: 3px solid #8478c5;
    }
</style>
