<script>
  import { Card, Button } from 'flowbite-svelte';

  import AboutHero from "$lib/images/pages/about/about-hero.jpg?enhanced";
  import MensClub from "$lib/images/pages/about/mens-club.webp?enhanced";
  import WomensClub from "$lib/images/pages/about/womens-club.avif?enhanced";
  import DevSquad from "$lib/images/pages/about/dev-squad.avif?enhanced";
  import IndoorHockey from "$lib/images/pages/about/indoor-hockey.webp?enhanced";

  const teamLinks = [
    { title: 'Men’s Club', href: '/teams/mens-club', img: MensClub },
    { title: 'Women’s Club', href: '/teams/womens-club', img: WomensClub },
    { title: 'Dev Squad', href: '/teams/development-squad', img: DevSquad },
    { title: 'Indoor Hockey', href: '/teams/indoor-hockey', img: IndoorHockey }
  ];

  // const achievements = [
  //   { year: '2024', title: 'BUCS Tier 2A Promotion' },
  //   { year: '2023', title: 'Roses Hockey Champions' },
  //   { year: '2022', title: '3rd XI Promotion to Tier 4A' }
  // ];
</script>

<svelte:head>
  <title>About Us | Lancaster University Hockey Club</title>
</svelte:head>

<!-- Hero Section -->
<section class="p-8">
  <div class="relative overflow-hidden rounded-xl text-white text-center px-8 py-16 shadow-xl">
    <enhanced:img
      src={AboutHero}
      alt="Development Squad Hero"
      class="absolute inset-0 w-full h-full object-cover z-[-1]"
    />
    <div class="absolute inset-0 bg-black/70 z-0 rounded-xl"></div>
    <div class="relative z-10 space-y-4" data-aos="fade-in">
      <h1 class="text-4xl md:text-5xl font-extrabold drop-shadow-lg">About LUHC</h1>
      <p class="text-xl max-w-2xl mx-auto drop-shadow-md">At Lancaster University Hockey Club, we want everyone to feel they belong. We take pride in offering both competitive teams and a non-competitive development squad, allowing us to include players of all abilities. Whoever you are, there will always be a place for you at LUHC.</p>
    </div>
  </div>
</section>

<div class="max-w-6xl mx-auto px-4 space-y-16 text-gray-900">
  <!-- Mission & Values -->
  <section class="pt-12" data-aos="fade-up">
    <h2 class="text-3xl font-bold mb-4 text-center">Our Mission & Values</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <Card class="p-6 text-center shadow-lg mx-auto" data-aos="zoom-in">
        <h3 class="text-2xl font-semibold mb-2">Inclusivity</h3>
        <p>We welcome players of all backgrounds and skill levels, fostering a supportive environment.</p>
      </Card>
      <Card class="p-6 text-center shadow-lg mx-auto" data-aos="zoom-in" data-aos-delay="100">
        <h3 class="text-2xl font-semibold mb-2">Excellence</h3>
        <p>On and off the pitch, we aim to excel - through training, competition, and club development.</p>
      </Card>
      <Card class="p-6 text-center shadow-lg mx-auto" data-aos="zoom-in" data-aos-delay="200">
        <h3 class="text-2xl font-semibold mb-2">Community</h3>
        <p>Beyond hockey, we build lasting friendships through socials, charity events, and club traditions.</p>
      </Card>
    </div>
  </section>

  <!-- Teams Overview -->
  <section data-aos="fade-up">
    <h2 class="text-3xl font-bold mb-6 text-center">Explore Our Teams</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {#each teamLinks as team}
        <Card class="mx-auto overflow-hidden shadow-lg hover:shadow-xl transition-shadow" data-aos="zoom-in">
          <enhanced:img src={team.img} alt={team.title} class="w-full h-40 object-cover rounded-md" />
          <div class="p-4 text-center">
            <h3 class="text-xl font-semibold mb-2">{team.title}</h3>
            <Button href={team.href} size="sm">Learn More</Button>
          </div>
        </Card>
      {/each}
    </div>
  </section>

  <!-- Achievements -->
  <!-- <section data-aos="fade-up">
    <h2 class="text-3xl font-bold mb-4 text-center">Recent Achievements</h2>
    <ul class="space-y-4 max-w-md mx-auto">
      {#each achievements as {year, title}}
        <li class="flex justify-between bg-gray-100 px-6 py-4 rounded-lg shadow-md">
          <span class="font-semibold">{year}</span>
          <span>{title}</span>
        </li>
      {/each}
    </ul>
  </section> -->

  <!-- Social Life -->
  <section class="bg-gray-100 p-6 rounded-xl" data-aos="fade-up">
    <h2 class="text-3xl font-bold mb-4 text-center">Life Beyond the Pitch</h2>
    <p class="mb-6 text-center">From weekly socials and formal dinners to charity fundraisers, LUHC is about more than just hockey. Our vibrant social calendar ensures there’s always something fun happening.</p>
    <div class="text-center">
      <Button href="/socials" color="red">View Social Events</Button>
    </div>
  </section>

  <!-- Facilities -->
  <!-- <section data-aos="fade-up">
    <h2 class="text-3xl font-bold mb-4 text-center">Our Facilities</h2>
    <p class="text-center mb-6">We train on campus pitches and indoor halls equipped with modern turf, video analysis tools, and dedicated coaching staff to help you improve every session.</p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <Card class="p-6 text-center shadow-lg" data-aos="zoom-in">
        <h3 class="text-xl font-semibold mb-2">Outdoor Pitches</h3>
        <p>Premier water-based turf on campus for all-weather play.</p>
      </Card>
      <Card class="p-6 text-center shadow-lg" data-aos="zoom-in" data-aos-delay="100">
        <h3 class="text-xl font-semibold mb-2">Indoor Halls</h3>
        <p>Spacious sports halls with adjustable boards for indoor training.</p>
      </Card>
      <Card class="p-6 text-center shadow-lg" data-aos="zoom-in" data-aos-delay="200">
        <h3 class="text-xl font-semibold mb-2">Video Analysis</h3>
        <p>Post-training review sessions using high-speed cameras and software.</p>
      </Card>
    </div>
  </section> -->

  <!-- Call to Action -->
  <section class="text-center py-12" data-aos="fade-in">
    <h2 class="text-3xl font-bold mb-4">Ready to Join LUHC?</h2>
    <Button href="/contact-us" size="lg" color="red">Get in Touch</Button>
  </section>
</div>

<style>
  @media (max-width: 640px) {
    .max-w-6xl { max-width: 90%; }
  }
</style>
