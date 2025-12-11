<script lang="ts">
  import HeroSection from '$lib/components/homepage/HeroSection.svelte';
  import ScoreTicker from '$lib/components/homepage/ScoreTicker.svelte';
  import NewsSection from '$lib/components/homepage/NewsSection.svelte';
  import Sponsors from '$lib/components/homepage/Sponsors.svelte';
  import ChairMessage from '$lib/components/homepage/ChairMessage.svelte';
  import JoinCta from '$lib/components/homepage/JoinCta.svelte';
  import MeetTheClub from '$lib/components/homepage/MeetTheClub.svelte';
  
  // Import the component
  import MatchCentre from '$lib/components/homepage/MatchCentre.svelte';

  // Get data from +page.server.ts
  let { data } = $props();
</script>

<svelte:head>
  <title>Lancaster University Hockey Club | LUHC</title>
  <link rel="canonical" href="https://www.luhc.co.uk" />
</svelte:head>

<HeroSection />

<ScoreTicker results={data.results} />

<section class="bg-white py-16 md:py-24 font-sans text-luhc-dark">
  <div class="max-w-4xl mx-auto px-6 text-center">
    
    <div class="mb-12">
        <span class="font-display text-luhc-red uppercase tracking-widest font-bold text-sm">Est. 1964</span>
        <h2 class="font-display uppercase text-4xl md:text-5xl font-bold tracking-tight text-luhc-dark mt-2">
          Welcome to LUHC
        </h2>
        <div class="h-1 w-24 bg-gray-100 mx-auto mt-6"></div>
    </div>
    
    <div class="prose prose-lg text-gray-600 leading-relaxed mx-auto">
      <NewsSection />
    </div>
    
    <div class="mt-12">
      <a href="/about" class="inline-block border-b-2 border-luhc-red pb-1 text-luhc-dark font-bold uppercase tracking-widest text-xs hover:text-luhc-red transition-colors">
        Read more about LUHC
      </a>
    </div>

  </div>
</section>

<section class="bg-gray-50 py-20 border-t border-gray-200">
  <div class="max-w-6xl mx-auto px-4 md:px-6">
    
    <div class="flex flex-col md:flex-row justify-between items-center md:items-end mb-10 gap-4">
        <div>
            <h2 class="font-display uppercase text-3xl text-center md:text-left md:text-4xl font-bold text-luhc-dark">Match Centre</h2>
            <p class="text-gray-500 mt-2 font-light">Upcoming fixtures for all of our Saturday squads.</p>
        </div>
        <div class="flex items-center gap-2">
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span class="text-xs font-bold uppercase tracking-widest text-gray-400">Syncing Live with GMS</span>
        </div>
    </div>

    <div class="w-full shadow-xl rounded-sm overflow-hidden border-t-4 border-luhc-red bg-white">
        <MatchCentre fixtures={data.fixtures} />
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
  <div class="max-w-7xl mx-auto px-4 space-y-32"> 
    <div>
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