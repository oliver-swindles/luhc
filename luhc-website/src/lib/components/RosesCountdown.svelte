<script>
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

		return () => clearInterval(interval);
	});
</script>

<section class="bg-luhc-red py-12 px-4 text-white">
	<div class="max-w-6xl mx-auto text-center">
    <h2 class="font-display uppercase text-4xl md:text-5xl font-bold tracking-tight text-white mb-8">Roses 2026</h2>
		<div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
			{#each [
				{ label: 'Days', value: days },
				{ label: 'Hours', value: hours },
				{ label: 'Minutes', value: minutes },
				{ label: 'Seconds', value: seconds }
			] as unit}
				<div class="bg-black/10 backdrop-blur-sm border-2 border-white/20 p-6 rounded-sm">
					<span class="block text-5xl md:text-7xl font-mono font-bold">{unit.value.toString().padStart(2, '0')}</span>
					<span class="block text-sm uppercase tracking-widest mt-2 font-semibold opacity-80">{unit.label}</span>
				</div>
			{/each}
		</div>
		
		<p class="mt-8 text-lg font-medium opacity-90">
      Europe's Largest Inter-varsity.
    </p>
	</div>
</section>