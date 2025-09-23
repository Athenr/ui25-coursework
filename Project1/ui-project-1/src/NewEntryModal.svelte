<script>
    export let isOpen = false;

    function closeModal() {
        isOpen = false;
    }
</script>

{#if isOpen}
<div class="modal">

    <div class="modal-content">
        <button class="close-button" on:click={closeModal}>✖</button>
        <slot></slot>
    </div>

</div>
{/if}

<style>
.modal {
    width: 100%;
    height: 100%;
    display: flex;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    justify-content: center;
    align-items: flex-start;
    background-color: rgba(0,0,0,0.6);
}

.modal-content {
    background-color: #3F3F49;
    margin: auto;
    padding: 2.5rem;
    padding-top: 0;
    border: 3px solid #8478C5;
    width: 45%;
    position: relative;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}

.close-button {
    position: absolute;
    top: .10rem;
    right: .25rem;
    background: none;
    border: none;
    font-size: 30px;
    cursor: pointer;
}

.close-button:hover {
    color: red;
}

</style>