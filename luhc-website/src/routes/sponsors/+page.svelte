<script lang="ts">
  import { resolve } from '$app/paths';
  import SponsorsHero from '$lib/images/pages/sponsors/sponsors-hero-2.webp';

  import YDLLogo from '$lib/images/sponsors/YDL.png';
  import BowerhamLogo from '$lib/images/sponsors/BowerhamHotel.jpg';
  import GreensLogo from '$lib/images/sponsors/Greens.png';
  import MollyOMalleysLogo from '$lib/images/sponsors/molly-o-malleys.webp';

  const sponsors = [
    {
      logo: YDLLogo,
      name: 'Yellow Door Lets',
      desc: 'Student Accommodation Partner',
      url: 'https://www.yellowdoorlets.co.uk/',
      domain: 'yellowdoorlets.co.uk',
    },
    {
      logo: BowerhamLogo,
      name: 'The Bowerham Hotel',
      desc: 'Match Day Teas',
      url: 'https://thebowerham.co.uk/',
      domain: 'thebowerham.co.uk',
    },
    {
      logo: MollyOMalleysLogo,
      name: "Molly O'Malleys",
      desc: 'Socials Partner',
      url: 'https://mollyomalleys.co.uk/',
      domain: 'mollyomalleys.co.uk',
    },
    {
      logo: GreensLogo,
      name: 'Greens Lancaster',
      desc: 'Socials Partner',
      url: 'https://www.instagram.com/greenslancaster/',
      domain: 'instagram.com/greenslancaster',
    },
  ];
</script>

<svelte:head>
  <title>Sponsors | Lancaster University Hockey Club</title>
</svelte:head>

<section class="relative h-[50vh] w-full overflow-hidden bg-white">
  <img
    src={SponsorsHero}
    alt="Sponsors Hero"
    class="absolute inset-0 h-full w-full object-cover object-center opacity-90"
  />
  <div class="absolute inset-0 bg-luhc-dark/80"></div>

  <div
    class="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
    data-aos="fade-in"
  >
    <h1
      class="mb-4 font-display text-5xl font-bold tracking-tighter text-white uppercase md:text-7xl"
    >
      Our Partners
    </h1>
    <p class="max-w-2xl font-sans text-lg font-light text-gray-300">
      Fueling our success on and off the pitch.
    </p>
  </div>
</section>

<section class="mx-auto max-w-6xl px-6 py-20">
  <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
    {#each sponsors as sponsor (sponsor.name + sponsor.domain)}
      <div
        class="group flex flex-col items-center justify-between rounded-sm border border-gray-100 bg-white p-6 text-center transition-all duration-300 hover:border-luhc-red hover:shadow-lg"
        data-aos="fade-up"
      >
        <div class="flex flex-col">
          <div class="mb-6 flex h-32 w-full items-center justify-center">
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              class="max-h-24 w-auto transform object-contain opacity-60 grayscale filter transition-all duration-500 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0"
            />
          </div>
          <h3 class="mb-2 font-display text-lg font-bold text-luhc-dark uppercase">
            {sponsor.name}
          </h3>
          <p class="font-sans text-sm text-gray-500">{sponsor.desc}</p>
        </div>
        <a
          href={sponsor.url}
          target="_blank"
          rel="noopener noreferrer"
          class="group inline-flex w-full items-center gap-2 bg-luhc-red px-2 py-2 font-display font-bold tracking-tight text-white uppercase shadow-md transition-colors duration-300 hover:bg-luhc-dark"
        >
          <span class="w-full text-center text-xs">{sponsor.domain}</span>
          <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 group-hover:translate-x-1 transition-transform">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg> -->
        </a>
      </div>
    {/each}
  </div>
</section>

<section class="bg-gray-50 px-6 py-20">
  <div class="mx-auto max-w-5xl text-center">
    <h2 class="mb-12 font-display text-4xl font-bold text-luhc-dark uppercase">
      Why Partner With LUHC?
    </h2>

    <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
      <div class="border-t-4 border-luhc-red bg-white p-8 shadow-sm">
        <h3 class="mb-4 font-display text-xl font-bold uppercase">Exposure</h3>
        <p class="text-sm leading-relaxed font-light text-gray-600">
          Reach thousands of students through our social media channels.
        </p>
      </div>
      <div class="border-t-4 border-luhc-red bg-white p-8 shadow-sm">
        <h3 class="mb-4 font-display text-xl font-bold uppercase">Community</h3>
        <p class="text-sm leading-relaxed font-light text-gray-600">
          Showcase your commitment to student sport and local development in Lancaster.
        </p>
      </div>
      <div class="border-t-4 border-luhc-red bg-white p-8 shadow-sm">
        <h3 class="mb-4 font-display text-xl font-bold uppercase">Networking</h3>
        <p class="text-sm leading-relaxed font-light text-gray-600">
          Connect with university leaders, alumni, and fellow business owners.
        </p>
      </div>
    </div>
  </div>
</section>

<section class="py-20 text-center">
  <h2 class="mb-6 font-display text-3xl font-bold text-luhc-dark uppercase">Join The Team</h2>
  <a
    href={resolve('/contact-us')}
    class="inline-block rounded-sm bg-luhc-red px-10 py-4 font-display font-bold tracking-widest text-white uppercase shadow-lg transition-colors hover:bg-luhc-dark"
  >
    Become A Sponsor
  </a>
</section>
