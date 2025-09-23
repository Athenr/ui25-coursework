<script>
    export let onOpenModal;
</script>

<button class="CreateEntryButton" on:click={onOpenModal}>
    <b>+</b> New Match
</button>

<style>
    .CreateEntryButton {
        height: 55%;
        flex: 0 0 8rem;
        background-color: #4D4D57;
        color: white;
        border: 3px solid #8478C5;
        font-size: 1rem;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .CreateEntryButton:hover {
        background-color: #666670;
        border: 3px solid #AA9BFF;
    }

    .CreateEntryButton:active {
        background-color: #4D4D57;
        border: 3px solid #8478C5;
    }
</style>