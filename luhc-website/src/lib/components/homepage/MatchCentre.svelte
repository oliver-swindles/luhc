<script lang="ts">
  import type { Match } from '$lib/types';

  interface DateStringExt {
    weekday: string;
    dayNum: string;
    month: string;
    time: string;
  }

  // 1. Destructure props using the rune
  let { fixtures }: { fixtures: Match[] } = $props();

  function formatDate(dateStr: string): DateStringExt {
    const d = new Date(dateStr);
    return {
      weekday: d.toLocaleDateString('en-GB', { weekday: 'short' }).toUpperCase(),
      dayNum: d.toLocaleDateString('en-GB', { day: 'numeric' }),
      month: d.toLocaleDateString('en-GB', { month: 'short' }).toUpperCase(),
      time: d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }),
    };
  }

  const scriptTagHtml = $derived.by(() => {
    if (!fixtures || fixtures.length === 0) {
      return '';
    }

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

<div class="bg-white">
  <div
    class="sticky top-0 z-10 flex items-center justify-between border-b border-gray-100 bg-gray-50 p-4 shadow-sm"
  >
    <span class="text-xs font-bold tracking-widest text-gray-500 uppercase">Upcoming Fixtures</span>
    <span class="font-mono text-[10px] text-gray-500">2025/26 Season</span>
  </div>

  <div
    class="scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent max-h-96 w-full overflow-y-auto bg-white"
  >
    {#if fixtures && fixtures.length > 0}
      <div class="divide-y divide-gray-100">
        {#each fixtures as fixture, i (fixture.dateAndTime + fixture.opponent + fixture.team + i)}
          {@const dt = formatDate(fixture.dateAndTime)}

          <div class="group relative flex items-center p-3 transition-colors hover:bg-gray-50">
            <div
              class="mr-4 flex h-14 w-14 shrink-0 flex-col items-center justify-center overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm transition-all group-hover:border-luhc-red group-hover:shadow-md"
            >
              <div
                class="w-full bg-gray-50 py-0.5 text-center text-[9px] font-bold text-gray-500 uppercase transition-colors group-hover:bg-luhc-red group-hover:text-white"
              >
                {dt.weekday}
              </div>
              <div class="pt-1 font-display text-xl leading-none font-bold text-luhc-dark">
                {dt.dayNum}
              </div>
              <div class="pb-1 text-[9px] leading-none font-bold text-gray-500 uppercase">
                {dt.month}
              </div>
            </div>

            <div class="mr-2 grid flex-1 grid-cols-7 items-center gap-2">
              <div class="col-span-3 text-right">
                <span class="block text-sm leading-tight font-bold text-luhc-dark">
                  {fixture.team}
                </span>
              </div>

              <div class="col-span-1 flex justify-center">
                <span class="text-[9px] font-black tracking-widest text-gray-500 uppercase">VS</span
                >
              </div>

              <div class="col-span-3 text-left">
                <span
                  class="block truncate text-sm leading-tight font-medium text-gray-600"
                  title={fixture.opponent}
                >
                  {fixture.opponent}
                </span>
              </div>
            </div>

            <div class="flex w-24 shrink-0 flex-col items-end text-right">
              <div
                class="mb-1 inline-block rounded border border-gray-200 bg-gray-100 px-1.5 py-0.5 font-mono text-xs text-luhc-dark"
              >
                {dt.time}
              </div>

              {#if fixture.locationType === 'Home'}
                <div class="flex items-center gap-1">
                  <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-luhc-red"></span>
                  <span class="text-[9px] font-bold tracking-wider text-luhc-red uppercase"
                    >Home</span
                  >
                </div>
              {:else}
                <span class="text-[9px] font-bold tracking-wider text-gray-400 uppercase">Away</span
                >
                {#if fixture.venueDetails}
                  <span
                    class="block max-w-22.5 truncate text-[9px] text-gray-400"
                    title={fixture.venueDetails}
                  >
                    {fixture.venueDetails}
                  </span>
                {/if}
              {/if}
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
        <p class="mb-1 font-display text-lg text-luhc-dark uppercase">No Upcoming Games</p>
        <p class="max-w-50 text-xs font-light text-gray-400">
          Fixtures are updated automatically via GMS. Check back soon.
        </p>
      </div>
    {/if}
  </div>

  <div class="border-t border-gray-100 bg-gray-50 p-3 text-center">
    <p class="flex items-center justify-center gap-1 text-[10px] text-gray-500">
      <svg class="h-3 w-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        /></svg
      >
      Auto-syncing from GMS
    </p>
  </div>
</div>
