<script>
  import { Button } from 'flowbite-svelte';

  import DevHero from "$lib/images/pages/dev/dev-hero.jpg?enhanced";

  import Dev1 from "$lib/images/pages/dev/dev-1.avif?enhanced";
  import Dev2 from "$lib/images/pages/dev/dev-2.avif?enhanced";
  import Dev3 from "$lib/images/pages/dev/dev-3.avif?enhanced";
  import Dev4 from "$lib/images/pages/dev/dev-4.avif?enhanced";
  import Dev5 from "$lib/images/pages/dev/dev-5.avif?enhanced";
  import Dev6 from "$lib/images/pages/dev/dev-6.avif?enhanced";
  import Dev7 from "$lib/images/pages/dev/dev-7.avif?enhanced";
  import Dev8 from "$lib/images/pages/dev/dev-8.avif?enhanced";
  import Dev9 from "$lib/images/pages/dev/dev-9.avif?enhanced";
  import Dev10 from "$lib/images/pages/dev/dev-10.avif?enhanced";
  import Dev11 from "$lib/images/pages/dev/dev-11.avif?enhanced";
  import Dev13 from "$lib/images/pages/dev/dev-13.avif?enhanced";
  import Dev14 from "$lib/images/pages/dev/dev-14.avif?enhanced";

  // Gallery images
  const gallery = [
    { src: Dev1, alt: 'Dev Squad 1' },
    { src: Dev2, alt: 'Dev Squad 2' },
    { src: Dev3, alt: 'Dev Squad 3' },
    { src: Dev4, alt: 'Dev Squad 4' },
    { src: Dev5, alt: 'Dev Squad 5' },
    { src: Dev6, alt: 'Dev Squad 6' },
    { src: Dev7, alt: 'Dev Squad 7' },
    { src: Dev8, alt: 'Dev Squad 8' },
    { src: Dev9, alt: 'Dev Squad 9' },
    { src: Dev10, alt: 'Dev Squad 10' },
    { src: Dev11, alt: 'Dev Squad 11' },
    { src: Dev13, alt: 'Dev Squad 13' },
    { src: Dev14, alt: 'Dev Squad 14' }
  ];
</script>

<svelte:head>
  <title>Dev Squad | Lancaster University Hockey Club</title>
</svelte:head>

<!-- Hero Section -->
<section class="p-8">
  <div class="relative overflow-hidden rounded-xl text-white text-center px-8 py-16 shadow-xl">
    <enhanced:img
      src={DevHero}
      alt="Development Squad Hero"
      class="absolute inset-0 w-full h-full object-cover z-[-1]"
    />
    <div class="absolute inset-0 bg-black/70 z-0 rounded-xl"></div>
    <div class="relative z-10 space-y-4" data-aos="fade-in">
      <h1 class="text-4xl md:text-5xl font-extrabold drop-shadow-lg">Development Squad</h1>
      <p class="text-xl max-w-2xl mx-auto drop-shadow-md">Mixed Hockey for All Abilities</p>
    </div>
  </div>
</section>

<div class="max-w-6xl mx-auto px-4 space-y-12 text-gray-900">
  <!-- About Section -->
  <section data-aos="fade-up">
    <h2 class="text-3xl font-bold mb-4">About the Dev Squad</h2>
    <p class="leading-relaxed mb-4">
      Whether you're just starting out and want to try something new, or want to hone your skills and work your way into a competitive squad, Dev is the place for you. Training takes place twice a week, with a targeted training schedule to build on all aspects of your game throughout the year.
    </p>
    <p class="leading-relaxed mb-4">
      Sessions are run by our Development Captains and Officers, alongside competitive squad leaders who mentor and scout players ready for the 3rd XI.
    </p>
    <p class="leading-relaxed">
      We organise friendly games against other universities' development squads to build confidence, culminating in the excitement of the Roses mixed development match each Summer term.
    </p>
  </section>

  <!-- Training Schedule -->
  <section class="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up">
    <div>
      <h3 class="text-2xl font-semibold mb-2">Training Schedule</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>Tuesday 5-6pm</li>
        <li>Thursday 5-6pm</li>
      </ul>
    </div>
    <div>
      <h3 class="text-2xl font-semibold mb-2">Friendly Matches</h3>
      <p>
        Regular fixtures against other university development squads to test your progress and build match experience. Keep an eye on the fixtures page for upcoming dates.
      </p>
    </div>
  </section>

  <!-- Social & Progression -->
  <section class="bg-gray-100 p-6 rounded-xl" data-aos="fade-up">
    <h3 class="text-2xl font-semibold mb-2">Fun & Progression</h3>
    <p class="mb-4">
      Whilst there is opportunity to progress to our competitive teams, most importantly we want you to have fun and make great friends - whether at trainings or socials.
    </p>
    <Button href="/socials" color="red">View Club Socials</Button>
  </section>

  <!-- Gallery -->
  <section data-aos="fade-up">
    <h2 class="text-3xl font-bold mb-6 text-center">Dev Squad in Action</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {#each gallery as img}
        <div class="overflow-hidden rounded-xl shadow-md" data-aos="zoom-in">
          <enhanced:img src={img.src} alt={img.alt} class="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
        </div>
      {/each}
    </div>
  </section>

  <!-- Call to Action -->
  <section class="text-center py-12" data-aos="fade-in">
    <h2 class="text-3xl font-bold mb-4">Join the Dev Squad</h2>
    <p class="mb-6">Ready to develop your game? Come train with us and be part of LUHC’s future.</p>
    <Button href="/contact-us" size="lg" color="red">Sign Up Now</Button>
  </section>
</div>

<style>
  @media (max-width: 640px) {
    .max-w-6xl { max-width: 90%; }
  }
</style>