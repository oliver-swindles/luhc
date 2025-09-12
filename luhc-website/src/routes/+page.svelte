<script lang="ts">
	// Import the new components
	import HeroSection from '$lib/components/homepage/HeroSection.svelte';
	import NewsSection from '$lib/components/homepage/NewsSection.svelte';
	import FixturesTable from '$lib/components/homepage/FixturesTable.svelte';
	import Sponsors from '$lib/components/homepage/Sponsors.svelte';
	import ChairMessage from '$lib/components/homepage/ChairMessage.svelte';
	import JoinCta from '$lib/components/homepage/JoinCta.svelte';
	import MeetTheClub from '$lib/components/homepage/MeetTheClub.svelte';

	// This page receives all data from the server
	export let data;
</script>

<svelte:head>
	<title>Lancaster University Hockey Club | LUHC</title>
	<link rel="canonical" href="https://www.luhc.co.uk" />
</svelte:head>

<HeroSection />

<div class="max-w-6xl mx-auto px-4 text-gray-900">
	<!-- <NewsSection latestNews={data.latestNews} /> -->
	<NewsSection />

	<hr class="border-gray-200 my-12" />
	
	<FixturesTable upcomingFixtures={data.upcomingFixtures} />
</div>

<section class="bg-red-800 text-white text-center py-16 px-6">
	<div class="max-w-4xl mx-auto space-y-6">
		<h2 class="text-3xl font-bold">A Bit About Us</h2>
		<p class="text-lg leading-relaxed">
			LUHC is one of the biggest and friendliest clubs on campus, with 6 competitive teams and a
			development squad. From BUCS to local leagues, from weekly socials to formal dinners, we're
			more than just hockey - LUHC is a community.
		</p>
	</div>
</section>

<div class="max-w-6xl mx-auto px-4">
	<Sponsors />
	<MeetTheClub />
</div>

<ChairMessage />

<JoinCta />