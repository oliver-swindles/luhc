<script lang="ts">
  import { resolve } from '$app/paths';
  import SocialsHero from '$lib/images/pages/socials/socials-hero.webp?enhanced';
  import Socials1 from '$lib/images/pages/socials/socials-1.webp?enhanced';
  import Socials2 from '$lib/images/pages/socials/socials-2.webp?enhanced';
  import Socials3 from '$lib/images/pages/socials/socials-3.webp?enhanced';
  import Socials4 from '$lib/images/pages/socials/socials-4.webp?enhanced';
  import Socials5 from '$lib/images/pages/socials/socials-5.webp?enhanced';
  import Socials6 from '$lib/images/pages/socials/socials-6.webp?enhanced';
  import Socials7 from '$lib/images/pages/socials/socials-7.webp?enhanced';
  import Socials8 from '$lib/images/pages/socials/socials-8.webp?enhanced';

  const galleryImages = [
    Socials1,
    Socials2,
    Socials3,
    Socials4,
    Socials5,
    Socials6,
    Socials7,
    Socials8,
  ];
</script>

<svelte:head>
  <title>Socials | Lancaster University Hockey Club</title>
</svelte:head>

<section class="relative h-[60vh] w-full overflow-hidden bg-luhc-dark">
  <enhanced:img
    src={SocialsHero}
    alt="LUHC Social Event"
    class="absolute inset-0 h-full w-full object-cover object-center opacity-70"
  />
  <div class="absolute inset-0 bg-linear-to-r from-black/80 to-transparent"></div>

  <div class="absolute inset-0 flex flex-col justify-center px-8 md:px-24" data-aos="fade-in">
    <span class="mb-2 font-display font-bold tracking-widest text-white uppercase"
      >Wednesdays Are For</span
    >
    <h1
      class="font-display text-6xl font-bold tracking-tighter text-white uppercase drop-shadow-xl md:text-8xl"
    >
      Socials
    </h1>
  </div>
</section>

<section class="mx-auto max-w-7xl px-6 py-20">
  <div class="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
    <div class="space-y-6" data-aos="fade-right">
      <h2 class="font-display text-4xl font-bold text-luhc-dark uppercase">
        More Than Just Hockey
      </h2>
      <div class="h-1 w-20 bg-luhc-red"></div>
      <p class="text-lg leading-relaxed font-light text-gray-600">
        Our welcoming community is built on friendship. We host <strong
          >weekly Wednesday socials</strong
        > ranging from themed nights out to relaxed get-togethers.
      </p>
      <p class="text-lg leading-relaxed font-light text-gray-600">
        We are proud to host our nights at <a
          href="https://www.mollyomalleys.co.uk"
          target="_blank"
          class="font-bold text-luhc-red hover:underline">Molly O'Malleys</a
        >. Whether you play competitively or just want to be part of the community, our socials are
        for you.
      </p>
      <a
        href={resolve('/contact-us')}
        class="mt-4 inline-block border-b-2 border-luhc-dark pb-1 font-display tracking-widest text-luhc-dark uppercase transition-colors hover:border-luhc-red hover:text-luhc-red"
      >
        Become a Social Member
      </a>
    </div>

    <div class="grid grid-cols-2 gap-4" data-aos="fade-left">
      <enhanced:img
        src={Socials1}
        class="h-48 w-full rounded-sm object-cover shadow-md transition-transform duration-500 hover:scale-105"
        alt="Social 1"
      />
      <enhanced:img
        src={Socials2}
        class="mt-8 h-48 w-full rounded-sm object-cover shadow-md transition-transform duration-500 hover:scale-105"
        alt="Social 2"
      />
      <enhanced:img
        src={Socials3}
        class="h-48 w-full rounded-sm object-cover shadow-md transition-transform duration-500 hover:scale-105"
        alt="Social 3"
      />
      <enhanced:img
        src={Socials4}
        class="mt-8 h-48 w-full rounded-sm object-cover shadow-md transition-transform duration-500 hover:scale-105"
        alt="Social 4"
      />
    </div>
  </div>
</section>

<section class="bg-luhc-dark px-4 py-24">
  <div class="mx-auto mb-12 max-w-7xl text-center">
    <h2 class="font-display text-4xl font-bold text-white uppercase">The Highlights Reel</h2>
  </div>

  <div class="grid grid-cols-2 gap-4 px-4 md:grid-cols-4">
    {#each galleryImages as img, index (img)}
      <div class="group relative aspect-square overflow-hidden rounded-sm">
        <enhanced:img
          src={img}
          alt={`Social ${index}`}
          class="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-100"
        />
        <div
          class="absolute inset-0 bg-luhc-red/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        ></div>
      </div>
    {/each}
  </div>
</section>
