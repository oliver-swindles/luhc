<script lang="ts">
  import type { Match } from '$lib/types';

  interface DateString {
    day: string;
    date: string;
    time: string;
  }

  let { upcomingFixtures = [] }: { upcomingFixtures: Match[] } = $props();

  function formatDate(dateStr: string): DateString {
    const d = new Date(dateStr);
    return {
      day: d.toLocaleDateString('en-GB', { weekday: 'short' }).toUpperCase(),
      date: d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }).toUpperCase(),
      time: d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }),
    };
  }

  const scriptTagHtml = $derived.by(() => {
    if (!upcomingFixtures?.length) {
      return '';
    }

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
          address: isHome ? 'Lancaster LA1 4YQ' : 'See details',
        },
        homeTeam: { '@type': 'SportsTeam', name: isHome ? f.team : f.opponent },
        awayTeam: { '@type': 'SportsTeam', name: isHome ? f.opponent : f.team },
      };
    });

    return `<script type="application/ld+json">${JSON.stringify(jsonLdEvents)}</` + `script>`;
  });
</script>

<svelte:head>
  {@html scriptTagHtml}
</svelte:head>

<div class="w-full bg-white">
  {#if upcomingFixtures.length > 0}
    <div class="divide-y divide-gray-100">
      {#each upcomingFixtures.slice(0, 5) as fixture (fixture.dateAndTime + fixture.team)}
        {@const dt = formatDate(fixture.dateAndTime)}

        <div class="group flex items-center justify-between p-4 transition-colors hover:bg-gray-50">
          <div class="flex items-center gap-4">
            <div
              class="flex h-12 w-12 flex-col items-center justify-center rounded border border-gray-100 bg-gray-50 text-gray-500 transition-all group-hover:border-luhc-red/30 group-hover:text-luhc-red"
            >
              <span class="text-[10px] leading-none font-bold uppercase">{dt.day}</span>
              <span class="mt-0.5 font-display text-lg leading-none font-bold text-luhc-dark"
                >{dt.date}</span
              >
            </div>

            <div class="flex flex-col">
              <span class="text-base leading-tight font-bold text-luhc-dark">
                {fixture.team}
              </span>
              <div class="mt-0.5 flex items-center gap-2 text-sm text-gray-500">
                <span class="text-[10px] font-bold tracking-widest text-gray-300 uppercase">VS</span
                >
                <span class="font-medium text-gray-700">{fixture.opponent}</span>
              </div>
            </div>
          </div>

          <div class="pl-2 text-right">
            <div
              class="mb-1 inline-block rounded bg-gray-100 px-2 py-1 text-sm font-bold text-luhc-dark"
            >
              {dt.time}
            </div>
            <div class="flex items-center justify-end gap-1">
              {#if fixture.locationType === 'Home'}
                <span class="h-1.5 w-1.5 rounded-full bg-luhc-red"></span>
                <span class="text-[10px] font-bold tracking-wider text-luhc-red uppercase"
                  >Home</span
                >
              {:else}
                <span class="text-[10px] font-bold tracking-wider text-gray-400 uppercase"
                  >Away</span
                >
              {/if}
            </div>
          </div>
        </div>
      {/each}
    </div>
  {:else}
    <div class="flex flex-col items-center justify-center px-6 py-16 text-center">
      <div class="mb-4 rounded-full bg-gray-50 p-4">
        <svg class="h-8 w-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
      <h4 class="mb-1 font-display text-lg text-luhc-dark uppercase">No Upcoming Games</h4>
      <p class="max-w-50 text-xs font-light text-gray-400">
        Fixtures are updated automatically via GMS. Check back soon.
      </p>
    </div>
  {/if}
</div>
