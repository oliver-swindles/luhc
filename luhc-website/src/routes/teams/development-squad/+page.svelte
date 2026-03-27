<script lang="ts">
  import { resolve } from '$app/paths';
  import DevHero from '$lib/images/pages/dev/dev-hero.jpg';
  import Dev1 from '$lib/images/pages/dev/dev-1.avif';
  import Dev2 from '$lib/images/pages/dev/dev-2.avif';
  import Dev3 from '$lib/images/pages/dev/dev-3.avif';
  import Dev4 from '$lib/images/pages/dev/dev-4.avif';

  const gallery = [Dev1, Dev2, Dev3, Dev4];
</script>

<svelte:head>
  <title>Development Squad | Lancaster University Hockey Club</title>
</svelte:head>

<section class="relative h-[60vh] w-full overflow-hidden bg-luhc-dark">
  <img
    src={DevHero}
    alt="Dev Squad Huddle"
    class="absolute inset-0 h-full w-full object-cover object-center opacity-60"
  />
  <div class="absolute inset-0 bg-linear-to-t from-luhc-dark via-transparent to-transparent"></div>

  <div
    class="absolute inset-0 flex flex-col items-center justify-center px-4 text-center"
    data-aos="fade-in"
  >
    <h1
      class="mb-4 font-display text-6xl font-bold tracking-tighter text-white uppercase drop-shadow-xl md:text-8xl"
    >
      Dev Squad
    </h1>
    <p class="max-w-2xl font-sans text-xl font-light text-white/90 md:text-2xl">
      Hockey for Everyone. Any Ability. Any Background.
    </p>
  </div>
</section>

<div class="mx-auto max-w-7xl px-6 py-20">
  <div class="mb-24 grid grid-cols-1 items-start gap-16 lg:grid-cols-2" data-aos="fade-up">
    <div>
      <h2 class="mb-6 font-display text-4xl font-bold text-luhc-dark uppercase">About The Squad</h2>
      <div class="mb-8 h-1 w-20 bg-luhc-red"></div>
      <div class="space-y-6 text-lg leading-relaxed font-light text-gray-600">
        <p>
          Whether you're picking up a stick for the first time or looking to sharpen your skills for
          competitive selection, Dev is your home.
        </p>
        <p>
          Sessions are run by our dedicated Development Squad Coaches alongside the Dev Captains. It
          is the perfect pathway into the 3rd XI, or simply a great way to stay fit and make
          friends.
        </p>
      </div>
    </div>

    <div class="border border-gray-100 bg-gray-50 p-8 shadow-sm">
      <h3 class="mb-6 font-display text-2xl font-bold text-luhc-dark uppercase">
        Training Schedule
      </h3>
      <div class="mb-8 space-y-4">
        <div class="flex items-center justify-between border-b border-gray-200 pb-2">
          <span class="font-sans font-bold text-gray-700">Tuesday</span>
          <span class="font-sans font-bold text-luhc-red">16:00 - 17:00</span>
        </div>
        <div class="flex items-center justify-between border-b border-gray-200 pb-2">
          <span class="font-sans font-bold text-gray-700">Thursday</span>
          <span class="font-sans font-bold text-luhc-red">17:00 - 18:00</span>
        </div>
      </div>

      <h3 class="mb-4 font-display text-2xl font-bold text-luhc-dark uppercase">Fixtures</h3>
      <p class="mb-6 font-light text-gray-600">
        Regular friendly matches against other university development squads, culminating in the
        Roses Mixed Exhibition.
      </p>

      <a
        href={resolve('/socials')}
        class="block w-full border-2 border-luhc-red py-3 text-center font-display font-bold tracking-widest text-luhc-red uppercase transition-colors hover:bg-luhc-red hover:text-white"
      >
        View Socials
      </a>
    </div>
  </div>

  <section data-aos="fade-up">
    <div class="mb-12 text-center">
      <h2 class="font-display text-4xl font-bold text-luhc-dark uppercase">Action Shots</h2>
    </div>
    <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
      {#each gallery as img (img)}
        <div class="group relative aspect-square overflow-hidden bg-gray-100">
          <img
            src={img}
            alt="Dev Squad Action"
            class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      {/each}
    </div>
  </section>

  <section class="mt-24 rounded-sm bg-luhc-red px-6 py-16 text-center text-white shadow-xl">
    <h2 class="mb-4 font-display text-4xl font-bold uppercase">Start Your Journey</h2>
    <p class="mb-8 font-sans text-lg text-white/90">No trials required. Just turn up and play.</p>
    <a
      href={resolve('/contact-us')}
      class="inline-block bg-white px-10 py-4 font-display font-bold tracking-widest text-luhc-red uppercase shadow-md transition-colors hover:bg-luhc-dark hover:text-white"
    >
      Get Involved
    </a>
  </section>
</div>
