<script>
  import SocialsHero from "$lib/images/pages/socials/socials-hero.webp?enhanced";

  import Socials1 from "$lib/images/pages/socials/socials-1.webp?enhanced";
  import Socials2 from "$lib/images/pages/socials/socials-2.webp?enhanced";
  import Socials3 from "$lib/images/pages/socials/socials-3.webp?enhanced";
  import Socials4 from "$lib/images/pages/socials/socials-4.webp?enhanced";
  import Socials5 from "$lib/images/pages/socials/socials-5.webp?enhanced";
  import Socials6 from "$lib/images/pages/socials/socials-6.webp?enhanced";
  import Socials7 from "$lib/images/pages/socials/socials-7.webp?enhanced";
  import Socials8 from "$lib/images/pages/socials/socials-8.webp?enhanced";
  import Socials9 from "$lib/images/pages/socials/socials-9.webp?enhanced";
  import Socials10 from "$lib/images/pages/socials/socials-10.webp?enhanced";
  import Socials11 from "$lib/images/pages/socials/socials-11.webp?enhanced";
  import Socials12 from "$lib/images/pages/socials/socials-12.webp?enhanced";
  import Socials13 from "$lib/images/pages/socials/socials-13.webp?enhanced";
  import Socials14 from "$lib/images/pages/socials/socials-14.webp?enhanced";
  import Socials15 from "$lib/images/pages/socials/socials-15.webp?enhanced";
  import Socials16 from "$lib/images/pages/socials/socials-16.webp?enhanced";

  const galleryImages = [
    Socials5, Socials6, Socials7, Socials8, Socials9, Socials10,
    Socials11, Socials12, Socials13, Socials14, Socials15, Socials16
  ];
</script>

<svelte:head>
  <title>Socials | Lancaster University Hockey Club</title>
</svelte:head>

<!-- Hero Section -->
<section class="p-8">
  <div class="relative overflow-hidden rounded-xl text-white text-center px-8 py-16 shadow-xl">
    <enhanced:img
      src={SocialsHero}
      alt="LUHC Socials Hero"
      class="absolute inset-0 w-full h-full object-cover z-[-1]"
    />
    <div class="absolute inset-0 bg-black/70 z-0 rounded-xl"></div>
    <div class="relative z-10 space-y-4" data-aos="fade-in">
      <h1 class="text-4xl md:text-5xl font-extrabold drop-shadow-lg">LUHC Socials</h1>
      <p class="text-xl max-w-2xl mx-auto drop-shadow-md">Making memories on and off the pitch</p>
    </div>
  </div>
</section>

<!-- Socials Content -->
<section class="max-w-6xl mx-auto px-6 py-12 text-gray-800">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <div class="space-y-4" data-aos="fade-up">
      <h2 class="text-3xl font-bold">A Social Club Like No Other</h2>
      <p class="text-lg">
        Our welcoming community is full of friendly, sociable individuals. We host <strong>weekly Wednesday socials</strong>
        where you'll make lasting memories and strengthen bonds off the pitch. Whether it's a themed night out, a pub crawl, or a
        relaxing get-together, there's something for everyone.
      </p>
      <p class="text-lg">Some socials are mixed, while others split into men's and women's groups. We're proud to host our Wednesday nights at <a href="https://www.vibelancaster.com" class="text-red-700 underline hover:text-red-900">VIBE Lancaster</a> – our fantastic sponsor.</p>
        <p class="text-lg">All members agree that the social side of LUHC can be just as important as playing with your teammates. We have social members who have joined the club solely to be a part of our community without playing competitively.</p>
    </div>

    <div class="grid grid-cols-2 gap-4">
    <enhanced:img src={Socials1} class="w-full h-40 sm:h-48 md:h-56 lg:h-64 rounded-lg shadow-md object-cover" alt="LUHC Social 1" />
    <enhanced:img src={Socials2} class="w-full h-40 sm:h-48 md:h-56 lg:h-64 rounded-lg shadow-md object-cover" alt="LUHC Social 2" />
    <enhanced:img src={Socials3} class="w-full h-40 sm:h-48 md:h-56 lg:h-64 rounded-lg shadow-md object-cover" alt="LUHC Social 3" />
    <enhanced:img src={Socials4} class="w-full h-40 sm:h-48 md:h-56 lg:h-64 rounded-lg shadow-md object-cover" alt="LUHC Social 4" />
    </div>
  </div>

  <!-- Call to Action -->
  <div class="mt-16 text-center" data-aos="fade-up">
    <h3 class="text-2xl font-semibold mb-4">Ready to Join the Fun?</h3>
    <p class="mb-6 text-lg">Come along to our next social or get in touch to learn more about becoming a social member.</p>
    <a href="/contact-us" class="inline-block bg-red-800 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition">Contact Us</a>
  </div>
</section>

<!-- Image Gallery -->
<section class="bg-gray-50 py-12 px-6" data-aos="fade-up">
  <div class="max-w-6xl mx-auto">
    <h2 class="text-3xl font-bold text-center mb-8">Social Highlights</h2>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {#each galleryImages as img, index}
        <enhanced:img
          src={img}
          alt={`Social Highlight ${index + 5}`}
          class="rounded-lg shadow-md object-cover w-full h-48 sm:h-56 md:h-64 transition-transform duration-300 hover:scale-105"
        />
      {/each}
    </div>
  </div>
</section>
