<script lang="ts">
	import Table from 'flowbite-svelte/Table.svelte';
	import TableBody from 'flowbite-svelte/TableBody.svelte';
	import TableBodyCell from 'flowbite-svelte/TableBodyCell.svelte';
	import TableBodyRow from 'flowbite-svelte/TableBodyRow.svelte';
	import TableHead from 'flowbite-svelte/TableHead.svelte';
	import TableHeadCell from 'flowbite-svelte/TableHeadCell.svelte';
	import type { Fixture } from '$lib/types';

	// The component receives the fixtures as a prop from the main page
	export let upcomingFixtures: Fixture[];

	const sanitizeForJson = (str: string): string => {
		if (!str) return '';
		return str.replace(/"/g, '\\"');
	};

	// --- JSON-LD Generation ---
	// The component now generates its own structured data.
	const jsonLdEvents = (upcomingFixtures || []).map((fixture) => {
		const isHomeGame = fixture.locationType === 'Home';
		
		// Sanitize all the string values coming from the 'fixture' object
		const teamPlayingSanitized = sanitizeForJson(fixture.teamPlaying);
		const opponentSanitized = sanitizeForJson(fixture.opponent);

		return {
			'@context': 'https://schema.org',
			'@type': 'SportsEvent',
			name: `${teamPlayingSanitized} vs ${opponentSanitized}`,
			startDate: fixture.dateAndTime,
			eventStatus: 'https://schema.org/EventScheduled',
			location: {
				'@type': 'Place',
				name: isHomeGame ? 'Lancaster University Hockey Pitch' : 'Away Venue',
				address: isHomeGame ? 'Lancaster LA1 4YQ' : 'See details for away venue'
			},
			homeTeam: {
				'@type': 'SportsTeam',
				name: isHomeGame ? teamPlayingSanitized : opponentSanitized
			},
			awayTeam: {
				'@type': 'SportsTeam',
				name: isHomeGame ? opponentSanitized : teamPlayingSanitized
			},
			organizer: {
				'@type': 'Organization',
				name: 'Lancaster University Hockey Club',
				url: 'https://www.luhc.co.uk'
			}
		};
	});
</script>

<svelte:head>
	{#if jsonLdEvents.length > 0}
		<script type="application/ld+json">
			{@html JSON.stringify(jsonLdEvents)}
		</script>
	{/if}
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
				{#if upcomingFixtures && upcomingFixtures.length > 0}
					{#each upcomingFixtures as fixture}
						{@const fixtureDate = new Date(fixture.dateAndTime)}
						<TableBodyRow>
							<TableBodyCell>
								{fixtureDate.toLocaleDateString('en-GB', {
									day: '2-digit',
									month: '2-digit',
									year: 'numeric'
								})}
							</TableBodyCell>
							<TableBodyCell>{fixture.teamPlaying}</TableBodyCell>
							<TableBodyCell>{fixture.opponent}</TableBodyCell>
							<TableBodyCell>{fixture.locationType}</TableBodyCell>
							<TableBodyCell>
								{fixtureDate.toLocaleTimeString('en-GB', {
									hour: '2-digit',
									minute: '2-digit',
									hour12: false
								})}
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
</section>

<pre style="white-space: pre-wrap; background-color: #f0f0f0; padding: 1rem; margin-top: 2rem; border: 1px solid #ccc; display: block;">
    <h2>DEBUG: Raw JSON Output</h2>
    {JSON.stringify(jsonLdEvents, null, 2)}
</pre>