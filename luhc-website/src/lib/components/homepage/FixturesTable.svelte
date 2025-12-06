<script lang="ts">
  export type Fixture = {
    _id: string;
    dateAndTime: string;
    team: string;
    customTeam?: string;
    opponent: string;
    locationType: 'Home' | 'Away';
    venueDetails?: string;
  };

  export let upcomingFixtures: Fixture[];
  export let totalFixtures: number = 0; // Default to 0 to prevent undefined errors

  let fixtures: Fixture[] = [...upcomingFixtures];
  let loading = false;

  async function loadMore() {
    loading = true;
    try {
      const res = await fetch(`/api/fixtures?offset=${fixtures.length}&limit=5`);
      const more = await res.json();
      fixtures = [...fixtures, ...more];
    } catch (err) {
      console.error('Failed to load more fixtures', err);
    } finally {
      loading = false;
    }
  }

  // Helper for Date Format (e.g. "WED 12 OCT")
  function formatDate(dateStr: string) {
    const d = new Date(dateStr);
    return {
        day: d.toLocaleDateString('en-GB', { weekday: 'short' }).toUpperCase(),
        date: d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }).toUpperCase(),
        time: d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })
    };
  }

  // JSON-LD logic remains the same (hidden for brevity, keeps SEO working)
  let scriptTagHtml = '';
  $: {
    if (fixtures && fixtures.length > 0) {
      const jsonLdEvents = fixtures.map((f) => {
        const baseTeam = f.team === 'Other' ? f.customTeam || 'LUHC' : f.team;
        const isHome = f.locationType === 'Home';
        return {
          '@context': 'https://schema.org',
          '@type': 'SportsEvent',
          name: `${baseTeam} vs ${f.opponent}`,
          startDate: f.dateAndTime,
          location: {
            '@type': 'Place',
            name: isHome ? 'Lancaster University Pitch' : f.venueDetails || 'Away Venue',
            address: isHome ? 'Lancaster LA1 4YQ' : 'See details'
          },
          homeTeam: { '@type': 'SportsTeam', name: isHome ? baseTeam : f.opponent },
          awayTeam: { '@type': 'SportsTeam', name: isHome ? f.opponent : baseTeam },
          organizer: { '@type': 'Organization', name: 'LUHC', url: 'https://www.luhc.co.uk' }
        };
      });
      scriptTagHtml = `<script type="application/ld+json">${JSON.stringify(jsonLdEvents)}<\/script>`;
    }
  }
</script>

<svelte:head>
  {@html scriptTagHtml}
</svelte:head>

<div class="w-full">
  <div class="overflow-x-auto">
    {#if fixtures.length > 0}
        <table class="w-full text-left border-collapse min-w-[600px]">
            <thead class="bg-luhc-dark text-white font-display uppercase tracking-widest text-sm">
                <tr>
                    <th class="p-4 pl-6 w-32">Date</th>
                    <th class="p-4 w-1/4">Team</th>
                    <th class="p-4 w-8 text-center"></th> <th class="p-4 w-1/4">Opponent</th>
                    <th class="p-4 text-right pr-6">Venue / Time</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 font-sans text-sm font-medium text-luhc-dark">
                {#each fixtures as fixture}
                    {@const dt = formatDate(fixture.dateAndTime)}
                    <tr class="hover:bg-gray-50 transition-colors group">
                        
                        <td class="p-4 pl-6 text-gray-500 group-hover:text-luhc-red transition-colors">
                            <span class="block font-bold text-xs uppercase">{dt.day}</span>
                            <span class="block text-lg font-display font-bold text-luhc-dark">{dt.date}</span>
                        </td>

                        <td class="p-4 font-bold text-base">
                            {fixture.team === 'Other' ? fixture.customTeam : fixture.team}
                        </td>

                        <td class="p-4 text-center">
                            <span class="inline-block bg-gray-100 text-gray-400 text-[10px] font-bold px-2 py-1 rounded-full uppercase">
                                VS
                            </span>
                        </td>

                        <td class="p-4 text-gray-600">
                            {fixture.opponent}
                        </td>

                        <td class="p-4 text-right pr-6">
                            <div class="flex flex-col items-end">
                                <span class="font-bold text-luhc-dark">{dt.time}</span>
                                <span class="text-xs uppercase font-bold tracking-wider 
                                    {fixture.locationType === 'Home' ? 'text-luhc-red' : 'text-gray-400'}">
                                    {fixture.locationType === 'Home' ? 'HOME' : 'AWAY'}
                                </span>
                            </div>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    {:else}
        <div class="flex flex-col items-center justify-center py-16 px-6 text-center border-t border-gray-100">
            <div class="bg-gray-50 rounded-full p-4 mb-4">
                <svg class="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            </div>
            <h4 class="font-display text-xl text-luhc-dark uppercase mb-2">No Upcoming Games</h4>
            <p class="text-gray-500 text-sm max-w-xs mb-6 font-light">
                Fixtures are usually updated on Tuesdays. Check back soon.
            </p>
        </div>
    {/if}
  </div>

  {#if fixtures.length < totalFixtures}
    <div class="p-4 border-t border-gray-100 bg-gray-50 flex justify-center">
      <button
        on:click={loadMore}
        class="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-luhc-red transition-colors flex items-center gap-2"
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Load More Fixtures'}
        <span class="text-lg">↓</span>
      </button>
    </div>
  {/if}
</div>