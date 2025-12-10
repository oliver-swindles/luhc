<script lang="ts">
    import HeroSection from '$lib/components/homepage/HeroSection.svelte';
    import NewsSection from '$lib/components/homepage/NewsSection.svelte'; // We will style this to look like a welcome text
    import FixturesTable from '$lib/components/homepage/FixturesTable.svelte';
    import Sponsors from '$lib/components/homepage/Sponsors.svelte';
    import ChairMessage from '$lib/components/homepage/ChairMessage.svelte';
    import JoinCta from '$lib/components/homepage/JoinCta.svelte';
    import MeetTheClub from '$lib/components/homepage/MeetTheClub.svelte';

    export let data;
</script>

<svelte:head>
    <title>Lancaster University Hockey Club | LUHC</title>
    <meta name="description" content="One of the biggest sports clubs at Lancaster University. 6 competitive teams, weekly socials, and a thriving development squad. Join LUHC today." />
    <link rel="canonical" href="https://www.luhc.co.uk" />
</svelte:head>

<HeroSection />

<section class="bg-gray-50 py-16 md:py-24 font-sans text-luhc-dark">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div class="lg:col-span-7 space-y-8">
                <div class="flex items-center gap-4 border-b-2 border-gray-200 pb-4">
                    <div class="h-8 w-1.5 bg-luhc-red"></div>
                    <h2 class="font-display uppercase text-3xl md:text-4xl font-bold tracking-tight text-luhc-dark">
                        Welcome to LUHC
                    </h2>
                </div>
                
                <div class="prose prose-lg text-gray-600 leading-relaxed max-w-none">
                    <NewsSection />
                </div>
                
                <div class="pt-2">
                    <a href="/about" class="text-luhc-red font-bold uppercase tracking-wider text-sm hover:underline underline-offset-4">
                        Find out more about LUHC &rarr;
                    </a>
                </div>
            </div>

            <div class="lg:col-span-5 sticky top-24">
                <div class="flex items-center gap-4 mb-6">
                    <div class="h-8 w-1.5 bg-luhc-red"></div>
                    <h2 class="font-display uppercase text-3xl md:text-4xl font-bold tracking-tight">Match Centre</h2>
                </div>
                
                <div class="bg-white shadow-lg border-t-4 border-luhc-red rounded-sm overflow-hidden">
                    <div class="p-4 bg-gray-50 border-b border-gray-100 flex justify-between items-center">
                        <span class="text-xs font-bold uppercase tracking-widest text-gray-500">Upcoming Fixtures</span>
                        <!-- <div class="flex gap-2">
                            <span class="h-2 w-2 rounded-full bg-green-500"></span>
                            <span class="text-[10px] uppercase font-bold text-gray-400">Live Updates</span>
                        </div> -->
                    </div>
                    <FixturesTable upcomingFixtures={data.upcomingFixtures} />
<!--                     
                    <div class="p-4 bg-gray-50 border-t border-gray-100 text-center">
                        <a href="/fixtures" class="text-xs font-bold uppercase tracking-widest text-luhc-dark hover:text-luhc-red transition-colors">
                            View All Fixtures
                        </a>
                    </div> -->
                </div>
            </div>

        </div>
    </div>
</section>

<section class="bg-luhc-red text-white text-center py-24 px-6 relative overflow-hidden">
    <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 24px 24px;"></div>
    
    <div class="max-w-4xl mx-auto relative z-10 space-y-8">
        <h2 class="font-display text-5xl md:text-6xl font-bold uppercase leading-none drop-shadow-sm">
            We Are LUHC
        </h2>
        <p class="font-sans text-xl md:text-2xl leading-relaxed text-red-50 max-w-3xl mx-auto font-light">
            One of the biggest and friendliest clubs on campus. From BUCS Wednesdays to weekly socials, 
            we are home to <span class="font-bold border-b border-white/30">6 competitive teams</span> and a thriving development squad.
        </p>
    </div>
</section>

<section class="bg-white py-24">
    <div class="max-w-7xl mx-auto px-4 space-y-32"> <div>
            <div class="text-center mb-16">
                <span class="font-sans text-gray-400 uppercase tracking-widest text-xs font-bold block mb-3">Meet The Team</span>
                <h2 class="font-display uppercase text-4xl md:text-5xl font-bold text-luhc-dark">The Committee</h2>
                <div class="h-1.5 w-24 bg-luhc-red mx-auto mt-6"></div>
            </div>
            <div class="min-h-[300px]"> 
                <MeetTheClub />
            </div>
        </div>

        <div>
            <Sponsors />
        </div>
    </div>
</section>

<ChairMessage />

<JoinCta />