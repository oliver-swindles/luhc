<script lang="ts">
    import type { Match } from '$lib/types/hockey';

    // Svelte 5 Props
    let { results }: { results: Match[] } = $props();

    // Create 4x copies for smooth infinite scroll on wide screens
    let scrollItems = $derived([...results, ...results, ...results, ...results]);
</script>

{#if results.length > 0}
    <div class="w-full bg-void border-y border-white/10 h-12 flex items-center relative overflow-hidden z-20">
        
        <div class="absolute left-0 top-0 bottom-0 bg-luhc-red px-6 flex items-center z-30 shadow-[4px_0_12px_rgba(0,0,0,0.5)]">
            <div class="flex items-center gap-2">
                <span class="relative flex h-2 w-2">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                <span class="text-[10px] font-bold uppercase tracking-widest text-white">Latest Intel</span>
            </div>
        </div>

        <div class="flex animate-scroll whitespace-nowrap pl-40 hover:pause">
            {#each scrollItems as match}
                <div class="inline-flex items-center gap-4 px-8 border-r border-white/5 h-12 group">
                    <span class="font-display font-bold text-xs text-gray-400 uppercase group-hover:text-white transition-colors">{match.team}</span>
                    <span class="font-mono font-bold text-luhc-red text-base tracking-tighter">{match.score}</span>
                    <span class="font-display font-bold text-xs text-gray-400 uppercase group-hover:text-white transition-colors">{match.opponent}</span>
                </div>
            {/each}
        </div>
    </div>
{/if}

<style>
    .animate-scroll { animation: scroll 60s linear infinite; }
    .hover\:pause:hover { animation-play-state: paused; }
    
    @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-25%); }
    }
</style>