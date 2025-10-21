<script lang="ts">
  import Table from 'flowbite-svelte/Table.svelte';
  import TableBody from 'flowbite-svelte/TableBody.svelte';
  import TableBodyCell from 'flowbite-svelte/TableBodyCell.svelte';
  import TableBodyRow from 'flowbite-svelte/TableBodyRow.svelte';
  import TableHead from 'flowbite-svelte/TableHead.svelte';
  import TableHeadCell from 'flowbite-svelte/TableHeadCell.svelte';

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
  export let totalFixtures: number;

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

  // JSON-LD for SEO
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
          eventStatus: 'https://schema.org/EventScheduled',
          location: {
            '@type': 'Place',
            name: isHome ? 'Lancaster University Pitch' : f.venueDetails || 'TBC',
            address: isHome ? 'Lancaster LA1 4YQ' : 'See details for away venue'
          },
          homeTeam: {
            '@type': 'SportsTeam',
            name: isHome ? baseTeam : f.opponent
          },
          awayTeam: {
            '@type': 'SportsTeam',
            name: isHome ? f.opponent : baseTeam
          },
          organizer: {
            '@type': 'Organization',
            name: 'Lancaster University Hockey Club',
            url: 'https://www.luhc.co.uk'
          }
        };
      });

      const finalJsonLd = JSON.stringify(jsonLdEvents).replace(/</g, '\\u003C');
      scriptTagHtml = `<script type="application/ld+json">${finalJsonLd}<\/script>`;
    }
  }
</script>

<svelte:head>
  {@html scriptTagHtml}
</svelte:head>

<section class="my-12">
  <h2 class="text-3xl font-bold mb-6 text-center md:text-left">Upcoming Fixtures</h2>
  <div class="overflow-x-auto">
    <Table class="rounded-lg shadow-lg">
      <TableHead>
        <TableHeadCell>Date</TableHeadCell>
        <TableHeadCell>Team</TableHeadCell>
        <TableHeadCell>Opponent</TableHeadCell>
        <TableHeadCell>Venue</TableHeadCell>
        <TableHeadCell>Time</TableHeadCell>
      </TableHead>
      <TableBody>
        {#if fixtures.length > 0}
          {#each fixtures as fixture}
            {@const dateObj = new Date(fixture.dateAndTime)}
            <TableBodyRow>
              <TableBodyCell>
                {dateObj.toLocaleDateString('en-GB', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric'
                })}
              </TableBodyCell>
              <TableBodyCell>{fixture.team === 'Other' ? fixture.customTeam : fixture.team}</TableBodyCell>
              <TableBodyCell>{fixture.opponent}</TableBodyCell>
              <TableBodyCell>
                {fixture.locationType === 'Home'
                  ? 'Home (Lancaster Uni Pitch)'
                  : fixture.venueDetails || 'Away venue TBC'}
              </TableBodyCell>
              <TableBodyCell>
                {dateObj.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}
              </TableBodyCell>
            </TableBodyRow>
          {/each}
        {:else}
          <TableBodyRow>
            <TableBodyCell colspan={5} class="text-center text-gray-500 py-4">
              No upcoming fixtures scheduled. Check back soon!
            </TableBodyCell>
          </TableBodyRow>
        {/if}
      </TableBody>
    </Table>
  </div>

  {#if fixtures.length < totalFixtures}
    <div class="flex justify-center mt-6">
      <button
        on:click={loadMore}
        class="px-6 py-2 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Load More'}
      </button>
    </div>
  {/if}
</section>
