<script>
  import { Card, Button } from 'flowbite-svelte';

  import ExecHero from "$lib/images/pages/exec/exec-hero.webp?enhanced";

  const captains = [
    { role: "Chairperson", name: 'Hannah Bird', photo: '' },
    { role: "Vice-Chairwoman", name: 'Heledd Owen', photo: '' },
    { role: "Vice-Chairman", name: 'Josh Carr-Yetzes', photo: '' },
    { role: "Treasurer", name: 'Harry Tallents', photo: '' },
    { role: "Men's Publicity Officer", name: 'Oliver Swindles', photo: '' },
    { role: "Women's Publicity Officer", name: 'Lucy Bridges', photo: '' },
    { role: "Charity & Inclusivity Officer", name: 'Abi Fitzpatrick', photo: '' },
    { role: "Health & Safety Officer", name: 'Abi Speight', photo: '' },
    { role: "Men's Wellbeing Officer", name: 'Olly Woodhouse', photo: ''},
    { role: "Women's Wellbeing Officer", name: 'Autumn Head', photo: ''},
    { role: "Dev Officer", name: 'Rosie Lock', photo: '' },
    { role: "Dev Officer", name: 'Alex Delaney', photo: '' },
    { role: "Men's Social Sec", name: 'Marcus Allan', photo: '' },
    { role: "Women's Social Sec", name: 'Isabel Robinson', photo: '' },
    { role: "Social Officer", name: 'George Turner', photo: '' },
    { role: "Social Officer", name: 'Grace Puckey', photo: '' },
    { role: "Social Officer", name: 'Owen Price', photo: '' },
    { role: "Social Officer", name: 'Daisy Vose', photo: '' }
  ];
</script>

<svelte:head>
	<title>Exec | Lancaster University Hockey Club</title>
</svelte:head>

<!-- Hero Section -->
<section class="p-8">
  <div class="relative overflow-hidden rounded-xl text-white text-center px-8 py-16 shadow-xl">
    <enhanced:img 
      src={ExecHero} 
      alt="Hero Background" 
      class="absolute inset-0 w-full h-full object-cover z-[-1]"
    />
    <div class="absolute inset-0 bg-black/70 z-0 rounded-xl"></div>
    <div class="relative z-10 space-y-6" data-aos="fade-in">
      <h1 class="text-4xl md:text-5xl font-extrabold drop-shadow-lg">Meet Our Exec</h1>
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
    <p class="mb-4 text-gray-700">Looking for our Captains for this season? Check out our&nbsp;
      <a href="/about/meet-the-captains" class="text-red-600 underline hover:text-red-800">Meet the Captains</a> page.
    </p>
    <Button href="/contact-us" color="red">Get in Touch</Button>
  </section>
</div>

<style>
  @media (max-width: 640px) {
    .max-w-6xl { max-width: 90%; }
  }
</style>
