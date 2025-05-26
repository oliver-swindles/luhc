<script>
  import { onMount } from 'svelte';
  import { Card, Button } from 'flowbite-svelte';

  import ExecHero from "$lib/images/pages/exec/exec-hero.webp";

  const captains = [
    { role: "Chairperson", name: 'Alex Nash', photo: 'https://static.wixstatic.com/media/bf5fcf_1be6ee51b5444dcea89a12a36f8a844e~mv2.jpg/v1/fill/w_625,h_992,al_c,q_85,enc_avif,quality_auto/bf5fcf_1be6ee51b5444dcea89a12a36f8a844e~mv2.jpg' },
    { role: "Vice-Chairwoman", name: 'Scarlett Turnock', photo: 'https://static.wixstatic.com/media/bf5fcf_61f9d8debc144fc39b8a8e778093bcb8~mv2.jpg/v1/fill/w_427,h_677,al_c,q_80,enc_avif,quality_auto/bf5fcf_61f9d8debc144fc39b8a8e778093bcb8~mv2.jpg' },
    { role: "Vice-Chairman", name: 'Sam Foster', photo: 'https://static.wixstatic.com/media/bf5fcf_d20f63d9796e4fc2bef42c693924af7e~mv2.png/v1/fill/w_712,h_1130,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/bf5fcf_d20f63d9796e4fc2bef42c693924af7e~mv2.png' },
    { role: "Treasurer", name: 'James Sweetman', photo: 'https://static.wixstatic.com/media/bf5fcf_5a68ee4f2c5f43fd8afefe4b0bed0bd1~mv2.jpg/v1/fill/w_712,h_1186,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/bf5fcf_5a68ee4f2c5f43fd8afefe4b0bed0bd1~mv2.jpg' },
    { role: "Men's Publicity Officer", name: 'Thomas Lockyer', photo: 'https://static.wixstatic.com/media/bf5fcf_1a047be6880e4153acfbb28d53792226~mv2.jpg/v1/fill/w_489,h_814,al_c,q_85,enc_avif,quality_auto/bf5fcf_1a047be6880e4153acfbb28d53792226~mv2.jpg' },
    { role: "Charity & Inclusivity Officer", name: 'George Ardis', photo: 'https://static.wixstatic.com/media/bf5fcf_0b33274c4a264f0d911a41f9628983c9~mv2.jpg/v1/fill/w_480,h_799,al_c,q_85,enc_avif,quality_auto/bf5fcf_0b33274c4a264f0d911a41f9628983c9~mv2.jpg' },
    { role: "Health & Safety Officer", name: 'Abi Speight', photo: 'https://static.wixstatic.com/media/bf5fcf_d3a9234d6bde41a2878a95d425987004~mv2.jpg/v1/fill/w_486,h_809,al_c,lg_1,q_85,enc_avif,quality_auto/bf5fcf_d3a9234d6bde41a2878a95d425987004~mv2.jpg' },
    { role: "Men's Social Sec", name: 'James Aldous', photo: 'https://static.wixstatic.com/media/bf5fcf_1a27a5c20a5e4c5abdc2484ee99ed3f5~mv2.jpg/v1/fill/w_512,h_852,al_c,q_85,enc_avif,quality_auto/bf5fcf_1a27a5c20a5e4c5abdc2484ee99ed3f5~mv2.jpg' },
    { role: "Women's Social Sec", name: 'Kate Dempsey', photo: 'https://static.wixstatic.com/media/bf5fcf_5ed6bde82aea44e6b7e7d780c38b51f1~mv2.jpg/v1/fill/w_712,h_1184,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/bf5fcf_5ed6bde82aea44e6b7e7d780c38b51f1~mv2.jpg' },
    { role: "Social Officer", name: 'Will Malik', photo: 'https://static.wixstatic.com/media/bf5fcf_42e9d734b775416cbda91cedd60356e0~mv2.jpg/v1/fill/w_948,h_1036,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/bf5fcf_42e9d734b775416cbda91cedd60356e0~mv2.jpg' },
    { role: "Social Officer", name: 'Georgie Lewis', photo: 'https://static.wixstatic.com/media/bf5fcf_9435fc4c967844ad9ec553a45899442b~mv2.jpg/v1/fill/w_604,h_659,al_b,q_85,enc_avif,quality_auto/bf5fcf_9435fc4c967844ad9ec553a45899442b~mv2.jpg' },
    { role: "Social Officer", name: 'Chris Graham', photo: 'https://static.wixstatic.com/media/bf5fcf_c252bd79fb804001a76fb2ce3b4940c8~mv2.jpg/v1/crop/x_0,y_0,w_326,h_432,q_80,enc_auto/bf5fcf_c252bd79fb804001a76fb2ce3b4940c8~mv2.jpg' },
    { role: "Dev Officer", name: 'Rosie Lock', photo: 'https://static.wixstatic.com/media/bf5fcf_11207dd3bf98457badf9c03731e57946~mv2.jpg/v1/fill/w_373,h_621,al_c,q_80,enc_avif,quality_auto/bf5fcf_11207dd3bf98457badf9c03731e57946~mv2.jpg' },
    { role: "Dev Officer", name: 'Josh Carr-Yetzes', photo: 'https://static.wixstatic.com/media/bf5fcf_ee90cbe65d604011824aac039f7834f9~mv2.jpg/v1/fill/w_712,h_1186,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/bf5fcf_ee90cbe65d604011824aac039f7834f9~mv2.jpg' }
  ];
</script>

<svelte:head>
	<title>Exec | Lancaster University Hockey Club</title>
</svelte:head>

<!-- Hero Section -->
<section class="p-8">
  <div class="relative overflow-hidden rounded-xl text-white text-center px-8 py-16 shadow-xl">
    <img 
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
