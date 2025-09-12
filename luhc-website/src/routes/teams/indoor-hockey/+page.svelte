<script>
  import { Button } from 'flowbite-svelte';

  import IndoorHero from "$lib/images/pages/indoor/indoor-hero.jpg?enhanced";

  import Indoor1 from "$lib/images/pages/indoor/indoor-1.webp?enhanced";
  import Indoor2 from "$lib/images/pages/indoor/indoor-2.webp?enhanced";
  import Indoor3 from "$lib/images/pages/indoor/indoor-3.webp?enhanced";
  import Indoor4 from "$lib/images/pages/indoor/indoor-4.webp?enhanced";
  import Indoor5 from "$lib/images/pages/indoor/indoor-5.webp?enhanced";
  import Indoor6 from "$lib/images/pages/indoor/indoor-6.webp?enhanced";
  import Indoor7 from "$lib/images/pages/indoor/indoor-7.webp?enhanced";
  import Indoor8 from "$lib/images/pages/indoor/indoor-8.webp?enhanced";
  import Indoor9 from "$lib/images/pages/indoor/indoor-9.webp?enhanced";

  // Gallery images
  const gallery = [
    { src: Indoor1 , alt: 'Indoor Hockey 1' },
    { src: Indoor2 , alt: 'Indoor Hockey 2' },
    { src: Indoor3 , alt: 'Indoor Hockey 3' },
    { src: Indoor4 , alt: 'Indoor Hockey 4' },
    { src: Indoor5 , alt: 'Indoor Hockey 5' },
    { src: Indoor6 , alt: 'Indoor Hockey 6' },
    { src: Indoor7 , alt: 'Indoor Hockey 7' },
    { src: Indoor8 , alt: 'Indoor Hockey 8' },
    { src: Indoor9 , alt: 'Indoor Hockey 9' }
  ];
</script>

<svelte:head>
  <title>Indoor Hockey | Lancaster University Hockey Club</title>
</svelte:head>

<!-- Hero Section -->
<section class="p-8">
  <div class="relative overflow-hidden rounded-xl text-white text-center px-8 py-16 shadow-xl">
    <enhanced:img
      src={IndoorHero}
      alt="Indoor Hockey Hero"
      class="absolute inset-0 w-full h-full object-cover z-[-1]"
    />
    <div class="absolute inset-0 bg-black/70 z-0 rounded-xl"></div>
    <div class="relative z-10 space-y-4" data-aos="fade-in">
      <h1 class="text-4xl md:text-5xl font-extrabold drop-shadow-lg">Indoor Hockey</h1>
      <p class="text-xl max-w-2xl mx-auto drop-shadow-md">Indoor Hockey at LUHC</p>
    </div>
  </div>
</section>

<div class="max-w-6xl mx-auto px-4 space-y-12 text-gray-900">
  <!-- Captain Intro -->
  <section class="space-y-6" data-aos="fade-up">
    <h2 class="text-3xl font-bold">Meet the Indoor Hockey Captain</h2>
    <blockquote class="italic text-gray-700 border-l-4 border-red-600 pl-4">
      “Hi, I'm Kat, the Indoor Hockey Captain for the 2022/23 season!
      I'm really looking forward to stepping into this captain role and increasing participation in such a great part of the sport. I hope to lead our teams to another victory at Roses as well as new competitions that we intend to enter this year.
      I can't wait to get started and help those who aren't as experienced at indoor improve and enjoy the game as much as I do!”
    </blockquote>
    <div class="text-right font-semibold text-red-800">- Kat Headings, Indoor Captain (2022/23)</div>
  </section>

  <!-- Training & Season -->
  <section class="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up">
    <div>
      <h3 class="text-2xl font-semibold mb-2">Training</h3>
      <p>Sunday mornings throughout term (starting October).</p>
    </div>
    <div>
      <h3 class="text-2xl font-semibold mb-2">Season Highlights</h3>
      <p>After an impressive Roses campaign, the club gears up for training in January. The hard work culminates in matches against York in Roses, an exciting experience for both spectators and players.</p>
      <p class="mt-2">Over the last few years the club has been exploring participation in indoor tournaments and aims to host events to grow the indoor aspect of LUHC.</p>
    </div>
  </section>

  <!-- Member Quote -->
  <!-- <section class="bg-gray-100 p-6 rounded-xl" data-aos="fade-up">
    <blockquote class="italic text-gray-700">“Indoor hockey, where boys become men. If you thought hockey wasn't dangerous enough then this is made for you. Surprisingly entertaining and the crowds are large, genuinely a great time and a good laugh. I would recommend”</blockquote>
    <div class="text-right font-semibold text-gray-800 mt-2">– Anonymous LUHC member</div>
  </section> -->

  <!-- Gallery -->
  <section data-aos="fade-up">
    <h2 class="text-3xl font-bold mb-6 text-center">Indoor Action Gallery</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {#each gallery as img}
        <div class="overflow-hidden rounded-xl shadow-md" data-aos="zoom-in">
          <enhanced:img src={img.src} alt={img.alt} class="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
        </div>
      {/each}
    </div>
  </section>

  <!-- CTA -->
  <section class="text-center py-12" data-aos="fade-in">
    <h2 class="text-3xl font-bold mb-4">Get Involved</h2>
    <p class="mb-6">Whether you're new to indoor or an experienced player, join us this season!</p>
    <Button href="/contact-us" size="lg" color="red">Join Indoor Training</Button>
  </section>
</div>

<style>
  @media (max-width: 640px) {
    .max-w-6xl { max-width: 90%; }
    img { max-width: 100%; height: auto; }
  }
</style>
