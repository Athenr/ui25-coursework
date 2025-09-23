<script>
    import TopBar from './TopBar.svelte';
    import InfoPanel from './InfoPanel.svelte';
    import EntryPanel from './EntryPanel.svelte';
    import { onMount } from 'svelte';

    let hueIndex = 0;
    const hues = [0, 30, 60, 120, 180, 210, 240, 270, 300, 330];
    let currentHue = hues[hueIndex];

    function cycleTheme() {
        hueIndex = (hueIndex + 1) % hues.length;
        currentHue = hues[hueIndex];
        document.documentElement.style.filter = `hue-rotate(${currentHue}deg)`;
    }

    onMount(() => {
        document.documentElement.style.filter = `hue-rotate(${currentHue}deg)`;
    });
</script>

<main>
    <TopBar {cycleTheme} />
    <div class="BottomPanel">
        <InfoPanel />
        <EntryPanel />
    </div>
</main>

<style>
    * {
        box-sizing: border-box;
    }

    main {
        height: 100vh;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin: 0;
        padding: 2rem;
    }

    .BottomPanel {
        display: flex;
        gap: 2rem;
        flex: 1;
    }
</style>
