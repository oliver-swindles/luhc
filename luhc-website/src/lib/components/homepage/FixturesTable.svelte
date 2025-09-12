<script lang="ts">
	import Table from 'flowbite-svelte/Table.svelte';
	import TableBody from 'flowbite-svelte/TableBody.svelte';
	import TableBodyCell from 'flowbite-svelte/TableBodyCell.svelte';
	import TableBodyRow from 'flowbite-svelte/TableBodyRow.svelte';
	import TableHead from 'flowbite-svelte/TableHead.svelte';
	import TableHeadCell from 'flowbite-svelte/TableHeadCell.svelte';

	// Sanity fixture type
	export type Fixture = {
		date: string;
		team: string;
		opponent: string;
		venue: string;
		time: string;
	};

	export let upcomingFixtures: Fixture[];

	// JSON-LD for SEO
	let scriptTagHtml = '';

	$: {
		if (upcomingFixtures && upcomingFixtures.length > 0) {
			const sanitizeForJson = (str: string): string =>
				str ? str.replace(/"/g, '\\"') : '';

			const jsonLdEvents = upcomingFixtures.map((fixture) => {
				const teamSanitized = sanitizeForJson(fixture.team);
				const opponentSanitized = sanitizeForJson(fixture.opponent);
				const isHomeGame = fixture.venue?.toLowerCase().includes('home');

				return {
					'@context': 'https://schema.org',
					'@type': 'SportsEvent',
					name: `${teamSanitized} vs ${opponentSanitized}`,
					startDate: fixture.date + (fixture.time ? `T${fixture.time}` : ''),
					eventStatus: 'https://schema.org/EventScheduled',
					location: {
						'@type': 'Place',
						name: fixture.venue,
						address: isHomeGame
							? 'Lancaster LA1 4YQ'
							: 'See details for away venue'
					},
					homeTeam: {
						'@type': 'SportsTeam',
						name: isHomeGame ? teamSanitized : opponentSanitized
					},
					awayTeam: {
						'@type': 'SportsTeam',
						name: isHomeGame ? opponentSanitized : teamSanitized
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
						{@const fixtureDate = new Date(fixture.date)}
						<TableBodyRow>
							<TableBodyCell>
								{fixtureDate.toLocaleDateString('en-GB', {
									day: '2-digit',
									month: '2-digit',
									year: 'numeric'
								})}
							</TableBodyCell>
							<TableBodyCell>{fixture.team}</TableBodyCell>
							<TableBodyCell>{fixture.opponent}</TableBodyCell>
							<TableBodyCell>{fixture.venue}</TableBodyCell>
							<TableBodyCell>{fixture.time}</TableBodyCell>
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
