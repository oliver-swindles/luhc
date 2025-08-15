<script>
  import { Card, Button } from 'flowbite-svelte';

  import CaptainsHero from "$lib/images/pages/captains/captains-hero.webp?enhanced";

  const captains = [
    { role: "Men's 1s Captain", name: 'Victor Vankelegom', photo: '' },
    { role: "Men's 1s Vice-captain", name: 'Felix Woods', photo: '' },
    { role: "Women's 1s Captain", name: 'Kiah Bardouille-Lewis', photo: '' },
    { role: "Women's 1s Vice-captain", name: 'Lucy Bridges', photo: ''},
    { role: "Men's 2s Captain", name: 'Tom Lockyer', photo: '' },
    { role: "Men's 2s Vice-captain", name: 'Samuel Choi', photo: '' },
    { role: "Women's 2s Co-Captain", name: 'Katie Little', photo: '' },
    { role: "Women's 2s Co-captain", name: 'Nat Kyte', photo: '' },
    { role: "Men's 3s Captain", name: 'Matt Grimshaw', photo: '' },
    { role: "Men's 3s Vice-captain", name: 'Tom Baker', photo: '' },
    { role: "Women's 3s Captain", name: 'Grace Puckey', photo: '' },
    { role: "Women's 3s Vice-captain", name: 'Cat Prince', photo: '' },
    { role: "Indoor Captain", name: 'Alex Potts', photo: '' },
    { role: "Development Captain", name: 'Jemma Louise', photo: '' },
    { role: "Development Captain", name: 'George Turner', photo: '' }
  ];
</script>

<svelte:head>
	<title>Captains | Lancaster University Hockey Club</title>
</svelte:head>

<!-- Hero Section -->
<section class="p-8">
  <div class="relative overflow-hidden rounded-xl text-white text-center px-8 py-16 shadow-xl">
    <enhanced:img 
      src={CaptainsHero} 
      alt="Hero Background" 
      class="absolute inset-0 w-full h-full object-cover z-[-1]"
    />
    <div class="absolute inset-0 bg-black/70 z-0 rounded-xl"></div>
    <div class="relative z-10 space-y-6" data-aos="fade-in">
      <h1 class="text-4xl md:text-5xl font-extrabold drop-shadow-lg">Meet Our Captains</h1>
      <p class="text-xl max-w-2xl mx-auto drop-shadow-md">The leaders driving Lancaster University Hockey Club to victory this season.</p>
    </div>
  </div>
</section>

<div class="max-w-6xl mx-auto px-4 py-12">
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    {#each captains as cap}
      <Card class="overflow-hidden shadow-lg hover:shadow-xl transition-shadow" data-aos="zoom-in">
        <img src={cap.photo} alt={cap.name} class="w-full h-48 object-cover rounded-md" />
        <div class="p-4 text-center">
          <h3 class="text-xl font-semibold mb-1">{cap.name}</h3>
          <p class="text-sm text-gray-600">{cap.role}</p>
        </div>
      </Card>
    {/each}
  </div>

  <section class="text-center mt-12" data-aos="fade-up">
    <p class="mb-4 text-gray-700">Looking for the full executive team? Check out our&nbsp;
      <a href="/about/meet-the-exec" class="text-red-600 underline hover:text-red-800">Meet the Exec</a> page.
    </p>
    <Button href="/contact-us" color="red">Get in Touch</Button>
  </section>
</div>

<style>
  @media (max-width: 640px) {
    .max-w-6xl { max-width: 90%; }
  }
</style>
