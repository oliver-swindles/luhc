<script lang="ts">
  export let results: {
    team: string;
    opponent: string;
    score: string;
    locationType: 'Home' | 'Away';
  }[] = [];

  // Duplicate the list to create a seamless infinite loop
  const scrollItems = [...results, ...results];
</script>

{#if results.length > 0}
  <div class="w-full bg-luhc-dark text-white border-b border-white/10 overflow-hidden relative h-10 flex items-center z-20">
    
    <div class="absolute left-0 top-0 bottom-0 bg-luhc-red px-4 flex items-center shadow-lg z-30">
      <span class="text-[10px] font-bold uppercase tracking-widest text-white">Latest Scores</span>
    </div>

    <div class="flex items-center animate-scroll hover:pause whitespace-nowrap pl-32">
      {#each scrollItems as match}
        <div class="inline-flex items-center gap-3 mx-6 text-xs font-mono opacity-90 hover:opacity-100 transition-opacity">
          <span class="font-bold text-white">{match.team}</span>
          
          <span class="bg-white/10 px-2 py-0.5 rounded text-white font-bold tracking-widest border border-white/10">
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
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
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