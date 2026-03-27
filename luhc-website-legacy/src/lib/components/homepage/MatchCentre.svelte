<script lang="ts">
  export let fixtures: {
    team: string;
    opponent: string;
    dateAndTime: string;
    locationType: 'Home' | 'Away';
    venueDetails?: string;
  }[];

  function formatDate(dateStr: string) {
    const d = new Date(dateStr);
    return {
        // e.g. "WED"
        weekday: d.toLocaleDateString('en-GB', { weekday: 'short' }).toUpperCase(),
        // e.g. "12"
        dayNum: d.toLocaleDateString('en-GB', { day: 'numeric' }),
        // e.g. "OCT"
        month: d.toLocaleDateString('en-GB', { month: 'short' }).toUpperCase(),
        // e.g. "14:00"
        time: d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })
    };
  }

  // SEO Schema
  let scriptTagHtml = '';
  $: {
    if (fixtures && fixtures.length > 0) {
      const jsonLdEvents = fixtures.slice(0, 5).map((f) => {
        const isHome = f.locationType === 'Home';
        return {
          '@context': 'https://schema.org',
          '@type': 'SportsEvent',
          name: `${f.team} vs ${f.opponent}`,
          startDate: f.dateAndTime,
          location: {
            '@type': 'Place',
            name: isHome ? 'Lancaster University Pitch 1' : f.venueDetails || 'Away Venue',
            address: isHome ? 'Lancaster LA1 4YQ' : 'See details'
          },
          homeTeam: { '@type': 'SportsTeam', name: isHome ? f.team : f.opponent },
          awayTeam: { '@type': 'SportsTeam', name: isHome ? f.opponent : f.team }
        };
      });
      scriptTagHtml = `<script type="application/ld+json">${JSON.stringify(jsonLdEvents)}<\/script>`;
    }
  }
</script>

<svelte:head>
  {@html scriptTagHtml}
</svelte:head>

<div class="bg-white">
    
    <div class="p-4 bg-gray-50 border-b border-gray-100 flex justify-between items-center sticky top-0 z-10 shadow-sm">
        <span class="text-xs font-bold uppercase tracking-widest text-gray-500">Upcoming Fixtures</span>
        <span class="text-[10px] text-gray-400 font-mono">2025/26 Season</span>
    </div>
    
    <div class="w-full bg-white overflow-y-auto max-h-96 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
        
        {#if fixtures && fixtures.length > 0}
            <div class="divide-y divide-gray-100">
                {#each fixtures as fixture}
                    {@const dt = formatDate(fixture.dateAndTime)}
                    
                    <div class="flex items-center p-3 hover:bg-gray-50 transition-colors group relative">
                        
                        <div class="w-14 shrink-0 flex flex-col items-center justify-center bg-white rounded-md border border-gray-200 h-14 shadow-sm group-hover:border-luhc-red group-hover:shadow-md transition-all mr-4 overflow-hidden">
                            <div class="w-full bg-gray-50 text-[9px] font-bold text-center uppercase py-0.5 text-gray-500 group-hover:bg-luhc-red group-hover:text-white transition-colors">
                                {dt.weekday}
                            </div>
                            <div class="text-xl font-display font-bold text-luhc-dark leading-none pt-1">
                                {dt.dayNum}
                            </div>
                            <div class="text-[9px] font-bold text-gray-400 uppercase leading-none pb-1">
                                {dt.month}
                            </div>
                        </div>

                        <div class="flex-1 grid grid-cols-7 items-center gap-2 mr-2">
                            
                            <div class="col-span-3 text-right">
                                <span class="font-bold text-sm text-luhc-dark leading-tight block">
                                    {fixture.team}
                                </span>
                            </div>

                            <div class="col-span-1 flex justify-center">
                                <span class="text-[9px] font-black text-gray-300 uppercase tracking-widest">VS</span>
                            </div>

                            <div class="col-span-3 text-left">
                                <span class="font-medium text-sm text-gray-600 leading-tight block truncate" title={fixture.opponent}>
                                    {fixture.opponent}
                                </span>
                            </div>
                        </div>

                        <div class="w-24 shrink-0 text-right flex flex-col items-end">
                            <div class="font-mono text-luhc-dark text-xs bg-gray-100 px-1.5 py-0.5 rounded inline-block mb-1 border border-gray-200">
                                {dt.time}
                            </div>
                            
                            {#if fixture.locationType === 'Home'}
                                <div class="flex items-center gap-1">
                                    <span class="h-1.5 w-1.5 rounded-full bg-luhc-red animate-pulse"></span>
                                    <span class="text-[9px] uppercase font-bold text-luhc-red tracking-wider">Home</span>
                                </div>
                            {:else}
                                <span class="text-[9px] uppercase font-bold text-gray-400 tracking-wider">Away</span>
                                {#if fixture.venueDetails}
                                    <span class="text-[9px] text-gray-400 truncate max-w-[90px] block" title={fixture.venueDetails}>
                                        {fixture.venueDetails}
                                    </span>
                                {/if}
                            {/if}
                        </div>

                    </div>
                {/each}
            </div>
        {:else}
            <div class="flex flex-col items-center justify-center py-16 px-6 text-center">
                <div class="bg-gray-50 rounded-full p-4 mb-4">
                    <svg class="w-8 h-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>
                <h4 class="font-display text-lg text-luhc-dark uppercase mb-1">No Upcoming Games</h4>
                <p class="text-gray-400 text-xs max-w-[200px] font-light">
                    Fixtures are updated automatically via GMS. Check back soon.
                </p>
            </div>
        {/if}
    </div>
    
    <div class="p-3 bg-gray-50 border-t border-gray-100 text-center">
        <p class="text-[10px] text-gray-400 flex items-center justify-center gap-1">
            <svg class="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
            Auto-syncing from GMS
        </p>
    </div>
</div>