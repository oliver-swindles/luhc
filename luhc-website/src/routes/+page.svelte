<script lang="ts">
    import HeroSection from '$lib/components/homepage/HeroSection.svelte';
    import NewsSection from '$lib/components/homepage/NewsSection.svelte';
    import FixturesTable from '$lib/components/homepage/FixturesTable.svelte';
    import Sponsors from '$lib/components/homepage/Sponsors.svelte';
    import ChairMessage from '$lib/components/homepage/ChairMessage.svelte';
    import JoinCta from '$lib/components/homepage/JoinCta.svelte';
    import MeetTheClub from '$lib/components/homepage/MeetTheClub.svelte';

    export let data;
</script>

<svelte:head>
    <title>Lancaster University Hockey Club | LUHC</title>
    <link rel="canonical" href="https://www.luhc.co.uk" />
</svelte:head>

<HeroSection />

<section class="bg-gray-50 py-16 md:py-24 font-sans text-luhc-dark">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div class="lg:col-span-7">
                <div class="flex items-center gap-4 mb-8">
                    <div class="h-8 w-1 bg-luhc-red"></div>
                    <h2 class="font-display uppercase text-3xl md:text-4xl font-bold tracking-tight">Club News</h2>
                </div>
                <NewsSection />
            </div>

            <div class="lg:col-span-5">
                <div class="flex items-center gap-4 mb-8">
                    <div class="h-8 w-1 bg-luhc-red"></div>
                    <h2 class="font-display uppercase text-3xl md:text-4xl font-bold tracking-tight">Match Centre</h2>
                </div>
                <div class="bg-white shadow-sm border border-gray-200 rounded-none overflow-hidden">
                    <FixturesTable upcomingFixtures={data.upcomingFixtures} />
                </div>
            </div>

        </div>
    </div>
</section>

<section class="bg-luhc-red text-white text-center py-20 px-6 relative overflow-hidden">
    <div class="max-w-4xl mx-auto relative z-10 space-y-6">
        <span class="font-display uppercase tracking-[0.2em] text-white/80 font-bold text-sm">One Club. One Community.</span>
        <h2 class="font-display text-4xl md:text-5xl font-bold uppercase leading-none">
            We Are LUHC
        </h2>
        <p class="font-sans text-lg md:text-xl leading-relaxed text-red-50 max-w-2xl mx-auto font-light">
            One of the biggest and friendliest clubs on campus. From BUCS Wednesday's to weekly socials, 
            we are home to 6 competitive teams and a thriving development squad.
        </p>
    </div>
</section>

<section class="bg-white py-20">
    <div class="max-w-7xl mx-auto px-4 space-y-24">
        <div>
            <div class="text-center mb-12">
                <h2 class="font-display uppercase text-4xl font-bold text-luhc-dark">The Committee</h2>
                <div class="h-1 w-20 bg-luhc-red mx-auto mt-4"></div>
            </div>
            <MeetTheClub />
        </div>

        <div>
            <Sponsors />
        </div>
    </div>
</section>

<ChairMessage />

<JoinCta />