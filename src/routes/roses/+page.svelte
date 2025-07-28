<script>
  import { Button } from 'flowbite-svelte';

  import RosesHero from "$lib/images/pages/roses/roses-hero.webp?enhanced";
  // import Roses1 from "$lib/images/pages/roses/roses-1.avif";
  // import Roses2 from "$lib/images/pages/roses/roses-2.webp";
  // import Roses3 from "$lib/images/pages/roses/roses-3.webp";

  // Gallery images
  // const gallery = [
  //   { src: Roses1, alt: 'Roses 2019 Outdoor Highlights' },
  //   { src: Roses2, alt: "Roses Men's 2019 Outdoor Highlights" },
  //   { src: Roses3, alt: 'Roses Indoor Mens 1s Replay' },
  //   { src: Roses2, alt: 'Roses Indoor Womens 1s Replay' }
  // ];
</script>

<svelte:head>
  <title>Roses | Lancaster University Hockey Club</title>
</svelte:head>

<!-- Hero Section -->
<section class="p-8">
  <div class="relative overflow-hidden rounded-xl text-white text-center px-8 py-16 shadow-xl">
    <enhanced:img 
      src={RosesHero} 
      alt="Hero Background" 
      class="absolute inset-0 w-full h-full object-cover z-[-1]"
    />
    <div class="absolute inset-0 bg-black/70 z-0 rounded-xl"></div>
    <div class="relative z-10 space-y-6" data-aos="fade-in">
      <h1 class="text-4xl md:text-5xl font-extrabold drop-shadow-lg">Roses</h1>
      <p class="text-xl max-w-2xl mx-auto drop-shadow-md">The Largest European Inter-University Sports Tournament</p>
    </div>
  </div>
</section>

<div class="max-w-6xl mx-auto px-4 space-y-12 text-gray-900">
  <!-- Intro -->
  <section class="py-8" data-aos="fade-up">
    <h2 class="text-3xl font-bold mb-4 text-center">Why Roses Matters</h2>
    <p class="text-lg leading-relaxed mb-4">
      Roses is by far the biggest event on the LUHC calendar each year. After a year of build up and training, it provides an impressive finale to the end of the hockey season, and a memorable send-off for graduating members.
    </p>
    <p class="text-lg leading-relaxed">
      Featuring six outdoor games, four indoor games, the development squad exhibition match, and a club social, it’s a great weekend of sport for club members, friends and family to enjoy.
    </p>
  </section>

  <!-- Points Section -->
  <!-- <section class="bg-gray-100 p-6 rounded-xl" data-aos="fade-up">
    <h2 class="text-2xl font-semibold mb-3">Roses Are Red, Not White!</h2>
    <p class="mb-2">
      Hockey is an important part of Lancaster's annual Roses bid, with the most available Roses points of any sport. Every goal and every save can make the difference in the overall tournament result.
    </p>
    <p>
      Our goal: to bring home the trophy - and show that Roses truly are red.
    </p>
  </section> -->

  <!-- Roses Playlists -->
  <section data-aos="fade-up">
    <h2 class="text-3xl font-bold mb-2 text-center">1st XI Hockey</h2>
    <p class="text-gray-700 text-center mb-6">Roses 2025</p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center justify-center">
      <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/D0kxPxzUJgI?si=OP_ZqztvhkpMJIus" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="rounded-md mx-auto"></iframe>
      <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/YE8VG-8AUOI?si=CaFNyTn_SftUconA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="rounded-md mx-auto"></iframe>
    </div>
  </section>

  <!-- Roses Playlists -->
  <section data-aos="fade-up">
    <h2 class="text-3xl font-bold mb-2 text-center">1st XI Indoor Hockey</h2>
    <p class="text-gray-700 text-center mb-6">Roses 2025</p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/7eyaLJZA3sU?si=J2xWrDWcoDiYqlNe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="rounded-md mx-auto"></iframe>
      <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/n8Jj4okm0Hg?si=bIlAAwTMSbUyXw_7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="rounded-md mx-auto"></iframe>    </div>
  </section>

  <!-- Media Gallery -->
  <!-- <section data-aos="fade-up">
    <h2 class="text-3xl font-bold mb-6 text-center">Roses Highlights</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each gallery as img}
        <div class="overflow-hidden rounded-xl shadow-md" data-aos="zoom-in">
          <enhanced:img src={img.src} alt={img.alt} class="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
          <div class="p-2">
            <p class="text-sm text-gray-700">{img.alt}</p>
          </div>
        </div>
      {/each}
    </div>
  </section> -->

  <!-- Call to Action -->
  <section class="text-center py-12" data-aos="fade-in">
    <h2 class="text-3xl font-bold mb-4">Be Part of the Action</h2>
    <p class="mb-6 text-lg">
      Whether you’re a player, supporter, or sponsor, Roses is the moment to shine. Join us next year and be part of history.
    </p>
    <Button href="/contact-us" size="lg" color="red">Get In Touch</Button>
  </section>
</div>

<style>
  /* Ensure images and text scale on mobile */
  @media (max-width: 640px) {
    .max-w-6xl {
      max-width: 90%;
    }
  }
</style>
