<script lang="ts">
  import { resolve } from '$app/paths';

  import HeroSection from '$lib/components/homepage/HeroSection.svelte';
  import ScoreTicker from '$lib/components/homepage/ScoreTicker.svelte';
  import NewsSection from '$lib/components/homepage/NewsSection.svelte';
  import Sponsors from '$lib/components/homepage/Sponsors.svelte';
  import ChairMessage from '$lib/components/homepage/ChairMessage.svelte';
  import JoinCta from '$lib/components/homepage/JoinCta.svelte';
  import MeetTheClub from '$lib/components/homepage/MeetTheClub.svelte';
  import RosesCountdown from '$lib/components/RosesCountdown.svelte';
  import MatchCentre from '$lib/components/homepage/MatchCentre.svelte';

  let { data } = $props();
</script>

<svelte:head>
  <title>Lancaster University Hockey Club | LUHC</title>
  <link rel="canonical" href="https://www.luhc.co.uk" />
</svelte:head>

{#if !data}
  <p>DATA IS UNDEFINED</p>
{/if}

<HeroSection />

<ScoreTicker results={data.results} />

<RosesCountdown />

<section class="bg-white py-16 font-sans text-luhc-dark md:py-24">
  <div class="mx-auto max-w-4xl px-6 text-center">
    <div class="mb-12">
      <span class="font-display text-sm font-bold tracking-widest text-luhc-red uppercase"
        >Est. 1964</span
      >
      <h2
        class="mt-2 font-display text-4xl font-bold tracking-tight text-luhc-dark uppercase md:text-5xl"
      >
        Welcome to LUHC
      </h2>
      <div class="mx-auto mt-6 h-1 w-24 bg-gray-100"></div>
    </div>

    <div class="mx-auto prose prose-lg leading-relaxed text-gray-600">
      <NewsSection />
    </div>

    <div class="mt-12">
      <a
        href={resolve('/about')}
        class="inline-block border-b-2 border-luhc-red pb-1 text-xs font-bold tracking-widest text-luhc-dark uppercase transition-colors hover:text-luhc-red"
      >
        Read more about LUHC
      </a>
    </div>
  </div>
</section>

<section class="border-t border-gray-200 bg-gray-50 py-20">
  <div class="mx-auto max-w-6xl px-4 md:px-6">
    <div class="mb-10 flex flex-col items-center justify-between gap-4 md:flex-row md:items-end">
      <div>
        <h2
          class="text-center font-display text-3xl font-bold text-luhc-dark uppercase md:text-left md:text-4xl"
        >
          Match Centre
        </h2>
        <p class="mt-2 text-center font-light text-gray-500 sm:text-left">
          Upcoming fixtures for all of our Saturday squads.
        </p>
      </div>
      <div class="flex items-center gap-2">
        <span class="relative flex h-3 w-3">
          <span
            class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"
          ></span>
          <span class="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
        </span>
        <span class="text-xs font-bold tracking-widest text-gray-400 uppercase"
          >Syncing Live with GMS</span
        >
      </div>
    </div>

    <div class="w-full overflow-hidden rounded-sm border-t-4 border-luhc-red bg-white shadow-xl">
      <MatchCentre fixtures={data.fixtures} />
    </div>
  </div>
</section>

<section class="relative overflow-hidden bg-luhc-red px-6 py-24 text-center text-white">
  <div
    class="absolute inset-0 opacity-10"
    style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 24px 24px;"
  ></div>

  <div class="relative z-10 mx-auto max-w-4xl space-y-8">
    <h2 class="font-display text-5xl leading-none font-bold uppercase drop-shadow-sm md:text-6xl">
      We Are LUHC
    </h2>
    <p
      class="mx-auto max-w-3xl font-sans text-xl leading-relaxed font-light text-red-50 md:text-2xl"
    >
      One of the biggest and friendliest clubs on campus. From BUCS Wednesdays to weekly socials, we
      are home to <span class="border-b border-white/30 font-bold">6 competitive teams</span> and a thriving
      development squad.
    </p>
  </div>
</section>

<section class="bg-white py-24">
  <div class="mx-auto max-w-7xl space-y-32 px-4">
    <div>
      <div class="mb-16 text-center">
        <span class="mb-3 block font-sans text-xs font-bold tracking-widest text-gray-400 uppercase"
          >Meet The Team</span
        >
        <h2 class="font-display text-4xl font-bold text-luhc-dark uppercase md:text-5xl">
          The Committee
        </h2>
        <div class="mx-auto mt-6 h-1.5 w-24 bg-luhc-red"></div>
      </div>
      <div class="min-h-75">
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
