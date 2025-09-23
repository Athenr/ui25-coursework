<script>
    export let cycleTheme;

    function logout() {
        console.log("Logout clicked");
    }
</script>

<div class="TopBar">
    <h2>UNNAMED GAME TRACKER APP</h2>
    <div class="buttons">
        <button class="theme-button" on:click={cycleTheme}>Cycle Theme</button>
        <button class="logout-button" on:click={logout}>Logout</button>
    </div>
</div>

<style>
.TopBar {
    flex: 0 0 60px;
    background: linear-gradient(135deg, #5D548A, #8478C5);
    color: white;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);

    border-top-left-radius: 0;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 30px;
}

.TopBar h2 {
    margin: 0;
    font-size: 1.4rem;
    font-weight: bold;
}

.buttons {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

button {
    background: #5D548A;
    color: white;
    border: none;
    border-radius: 12px;
    padding: 0.4rem 1rem;
    cursor: pointer;
    font-weight: bold;
    transition: background 0.2s, transform 0.2s;
}

button:hover {
    background: #978AE2;
    transform: scale(1.05);
}

.logout-button {
    background: rgb(255, 0, 0);
    color: white;
}

.logout-button:hover {
    background: #ff4646;
}
</style>