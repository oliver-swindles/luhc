<script>
  import { Button, Card } from 'flowbite-svelte';

  import SponsorsHero from "$lib/images/pages/sponsors/sponsors-hero.webp?enhanced";
  
  import YDLLogo from "$lib/images/sponsors/YDL.png?enhanced";
  import LA1Logo from "$lib/images/sponsors/la1.avif?enhanced";
  import BowerhamLogo from "$lib/images/sponsors/BowerhamHotel.jpg?enhanced";
  import GreensLogo from "$lib/images/sponsors/Greens.png?enhanced";

  const sponsors = [
    { logo: YDLLogo, name: 'Yellow Door Lets', desc: 'Student accommodation partner', alt: "Yellow Door Lets Logo" },
    { logo: LA1Logo, name: 'LA1 Nightclub & Bar', desc: 'Nightclub & bar hosting our weekly Wednesday socials', alt: "LA1 Nightclub & Bar Logo" },
    { logo: BowerhamLogo, name: 'The Bowerham Hotel', desc: 'A renowned local pub providing our Saturday match teas', alt: "The Bowerham Hotel Logo" },
    { logo: GreensLogo, name: 'Greens Lancaster', desc: 'Pub and sports bar', alt: "Greens Lancaster Logo" }
  ];
</script>

<svelte:head>
	<title>Sponsors | Lancaster University Hockey Club</title>
</svelte:head>

<!-- Hero -->
 <!-- Hero Section -->
<section class="p-8">
  <div class="relative overflow-hidden rounded-xl text-white text-center px-8 py-16 shadow-xl">
    <enhanced:img 
      src={SponsorsHero} 
      alt="Hero Background" 
      class="absolute inset-0 w-full h-full object-cover z-[-1]"
    />
    <div class="absolute inset-0 bg-black/70 z-0 rounded-xl"></div>
    <div class="relative z-10 space-y-6" data-aos="fade-in">
      <h1 class="text-4xl md:text-5xl font-extrabold drop-shadow-lg">Our Sponsors</h1>
      <p class="text-xl max-w-2xl mx-auto drop-shadow-md">Join our incredible family of sponsors and gain unrivalled exposure both on and off the pitch.</p>
    </div>
  </div>
</section>

<div class="max-w-6xl mx-auto px-4 space-y-16 text-gray-900">
  <!-- Current Sponsors -->
  <section data-aos="fade-up">
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-center my-12">
      {#each sponsors as sponsor}
      <div class="flex flex-col items-center text-center p-4" data-aos="zoom-in">
        <enhanced:img src={sponsor.logo} alt={sponsor.name} class="h-16 object-contain mb-4" />
        <div class="font-semibold">{sponsor.name}</div>
        <span class="mt-1 text-sm text-gray-600">{sponsor.desc}</span>
      </div>
      {/each}
    </div>
  </section>

  <!-- Benefits -->
  <section class="bg-gray-100 p-6 rounded-xl" data-aos="fade-up">
    <h2 class="text-3xl font-bold mb-4 text-center">Why Sponsor LUHC?</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <Card class="p-6 text-center shadow-lg" data-aos="zoom-in">
        <h3 class="text-2xl font-semibold mb-2">Brand Exposure</h3>
        <p>Reach thousands of students and supporters through our website, social channels, and matchday events.</p>
      </Card>
      <Card class="p-6 text-center shadow-lg" data-aos="zoom-in" data-aos-delay="100">
        <h3 class="text-2xl font-semibold mb-2">Community Engagement</h3>
        <p>Showcase your commitment to student sport and community development at Lancaster University.</p>
      </Card>
      <Card class="p-6 text-center shadow-lg" data-aos="zoom-in" data-aos-delay="200">
        <h3 class="text-2xl font-semibold mb-2">Networking</h3>
        <p>Connect with university leaders, alumni, and fellow sponsors throughout the Lancashire area.</p>
      </Card>
    </div>
  </section>

  <!-- Sponsorship Tiers -->
  <!-- TODO: Add sponsorships tiers section -->


  <!-- Testimonials -->
  <!-- TODO: Add testimonials -->

  <!-- Call to Action -->
  <section class="text-center py-12" data-aos="fade-in">
    <h2 class="text-3xl font-bold mb-12">Ready to Partner with LUHC?</h2>
    <Button href="/contact-us" size="lg" color="red">Get in Touch</Button>
  </section>
</div>

<style>
  @media (max-width: 640px) {
    .max-w-6xl { max-width: 95%; }
  }
</style>
