<script lang="ts">
	import Table from 'flowbite-svelte/Table.svelte';
	import TableBody from 'flowbite-svelte/TableBody.svelte';
	import TableBodyCell from 'flowbite-svelte/TableBodyCell.svelte';
	import TableBodyRow from 'flowbite-svelte/TableBodyRow.svelte';
	import TableHead from 'flowbite-svelte/TableHead.svelte';
	import TableHeadCell from 'flowbite-svelte/TableHeadCell.svelte';
	import type { Fixture } from '$lib/types';

	export let upcomingFixtures: Fixture[];

	// This will hold our final, complete <script> tag as a string
	let scriptTagHtml = '';

	$: {
		if (upcomingFixtures && upcomingFixtures.length > 0) {
			const sanitizeForJson = (str: string): string => {
				if (!str) return '';
				return str.replace(/"/g, '\\"');
			};

			const jsonLdEvents = upcomingFixtures.map((fixture) => {
				const isHomeGame = fixture.locationType === 'Home';
				// --- FIX #1: Use the new 'teamPlayingName' field ---
				const teamPlayingSanitized = sanitizeForJson(fixture.teamPlayingName);
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

			const finalJsonLdString = JSON.stringify(jsonLdEvents).replace(/</g, '\\u003C');
			scriptTagHtml = `<script type="application/ld+json">${finalJsonLdString}<\/script>`;
		} else {
			scriptTagHtml = '';
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
							<TableBodyCell>{fixture.teamPlayingName}</TableBodyCell>
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