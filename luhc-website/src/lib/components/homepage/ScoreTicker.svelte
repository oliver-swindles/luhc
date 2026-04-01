<script lang="ts">
  import type { Match } from '$lib/types';

  interface Props {
    results?: Match[];
  }

  let { results = [] }: Props = $props();

  let scrollItems = $derived([...results, ...results]);
</script>

<!-- {#if results.length > 0} -->
{#if true}
  <div
    class="relative z-20 flex h-10 w-full items-center overflow-hidden border-b border-white/10 bg-luhc-dark text-white"
  >
    <div class="absolute top-0 bottom-0 left-0 z-30 flex items-center bg-luhc-red px-4 shadow-lg">
      <span class="text-[10px] font-bold tracking-widest text-white uppercase">Latest Scores</span>
    </div>

    <div class="animate-scroll hover:pause flex items-center pl-32 whitespace-nowrap">
      {#each scrollItems as match, i (match.team + match.opponent + match.score + i)}
        <div
          class="mx-6 inline-flex items-center gap-3 font-mono text-xs opacity-90 transition-opacity hover:opacity-100"
        >
          <span class="font-bold text-white">{match.team}</span>

          <span
            class="rounded border border-white/10 bg-white/10 px-2 py-0.5 font-bold tracking-widest text-white"
          >
            {match.score}
          </span>

          <span class="text-gray-400">{match.opponent}</span>

          <span class="text-[9px] font-bold text-luhc-red">
            {match.locationType === 'Home' ? '(H)' : '(A)'}
          </span>
        </div>

        <div class="h-1 w-1 rounded-full bg-white/20"></div>
      {/each}
    </div>
  </div>
{/if}

<style>
  /* Define Keyframes for Scrolling */
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .animate-scroll {
    /* Adjust '40s' to make it faster or slower */
    animation: scroll 70s linear infinite;
  }

  /* Pause animation when hovering to read */
  .hover\:pause:hover {
    animation-play-state: paused;
  }
</style>
