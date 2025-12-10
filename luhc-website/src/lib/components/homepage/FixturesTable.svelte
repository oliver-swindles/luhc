<script lang="ts">
  export let upcomingFixtures: {
    team: string;
    opponent: string;
    dateAndTime: string;
    locationType: 'Home' | 'Away';
    venueDetails?: string;
  }[];

  function formatDate(dateStr: string) {
    const d = new Date(dateStr);
    return {
        day: d.toLocaleDateString('en-GB', { weekday: 'short' }).toUpperCase(),
        date: d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }).toUpperCase(),
        time: d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })
    };
  }

  // JSON-LD for SEO (Only for the visible items)
  let scriptTagHtml = '';
  $: {
    if (upcomingFixtures && upcomingFixtures.length > 0) {
      const jsonLdEvents = upcomingFixtures.slice(0, 5).map((f) => {
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

<div class="w-full bg-white">
    {#if upcomingFixtures && upcomingFixtures.length > 0}
        <div class="divide-y divide-gray-100">
            {#each upcomingFixtures.slice(0, 5) as fixture}
                {@const dt = formatDate(fixture.dateAndTime)}
                
                <div class="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors group">
                    
                    <div class="flex items-center gap-4">
                        <div class="flex flex-col items-center justify-center w-12 h-12 bg-gray-50 rounded border border-gray-100 text-gray-500 group-hover:border-luhc-red/30 group-hover:text-luhc-red transition-all">
                            <span class="text-[10px] font-bold uppercase leading-none">{dt.day}</span>
                            <span class="text-lg font-display font-bold text-luhc-dark leading-none mt-0.5">{dt.date}</span>
                        </div>

                        <div class="flex flex-col">
                            <span class="font-bold text-base text-luhc-dark leading-tight">
                                {fixture.team}
                            </span>
                            <div class="flex items-center gap-2 text-sm text-gray-500 mt-0.5">
                                <span class="text-[10px] uppercase font-bold tracking-widest text-gray-300">VS</span>
                                <span class="font-medium text-gray-700">{fixture.opponent}</span>
                            </div>
                        </div>
                    </div>

                    <div class="text-right pl-2">
                        <div class="font-bold text-luhc-dark text-sm bg-gray-100 px-2 py-1 rounded inline-block mb-1">
                            {dt.time}
                        </div>
                        <div class="flex items-center justify-end gap-1">
                            {#if fixture.locationType === 'Home'}
                                <span class="h-1.5 w-1.5 rounded-full bg-luhc-red"></span>
                                <span class="text-[10px] uppercase font-bold text-luhc-red tracking-wider">Home</span>
                            {:else}
                                <span class="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Away</span>
                            {/if}
                        </div>
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