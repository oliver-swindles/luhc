<script lang="ts">
  import { onMount } from 'svelte';

  // Target: May 1st, 2026
  const TARGET_DATE = new Date('2026-05-01T00:00:00').getTime();

  // Svelte 5 Runes for high-performance state management
  let now = $state(Date.now());

  let diff = $derived(Math.max(0, TARGET_DATE - now));

  let days = $derived(Math.floor(diff / (1000 * 60 * 60 * 24)));
  let hours = $derived(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  let minutes = $derived(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)));
  let seconds = $derived(Math.floor((diff % (1000 * 60)) / 1000));

  onMount(() => {
    const interval = setInterval(() => {
      now = Date.now();
    }, 1000);

    return (): void => {
      clearInterval(interval);
    };
  });
</script>

<section class="bg-luhc-red px-4 py-12 text-white">
  <div class="mx-auto max-w-6xl text-center">
    <h2
      class="mb-8 font-display text-4xl font-bold tracking-tight text-white uppercase md:text-5xl"
    >
      Roses 2026
    </h2>
    <div class="mx-auto grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
      {#each [{ label: 'Days', value: days }, { label: 'Hours', value: hours }, { label: 'Minutes', value: minutes }, { label: 'Seconds', value: seconds }] as unit (unit.label + unit.value)}
        <div class="rounded-sm border-2 border-white/20 bg-black/10 p-6 backdrop-blur-sm">
          <span class="block font-mono text-5xl font-bold md:text-7xl"
            >{unit.value.toString().padStart(2, '0')}</span
          >
          <span class="mt-2 block text-sm font-semibold tracking-widest uppercase opacity-82"
            >{unit.label}</span
          >
        </div>
      {/each}
    </div>

    <p class="mt-8 text-lg font-medium opacity-90">Europe's Largest Inter-varsity.</p>
  </div>
</section>
