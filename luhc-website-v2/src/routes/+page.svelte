<script lang="ts">
    import Header from '$lib/components/layout/Header.svelte';
    import Hero from '$lib/components/home/Hero.svelte';
    import Ticker from '$lib/components/home/Ticker.svelte';

    let { data } = $props();
</script>

<svelte:head>
    <title>Lancaster University Hockey Club | RELENTLESS</title>
</svelte:head>

<Header />

<main>
    <Hero />
    
    {#if data.gms.success}
        <Ticker results={data.gms.results} />
    {/if}
</main>