<script>
  import { Card, Button } from 'flowbite-svelte';

  import CaptainsHero from "$lib/images/pages/captains/captains-hero.webp?enhanced";

  const captains = [
    { role: "Men's 1s Captain", name: 'Dougie Alexander', photo: 'https://static.wixstatic.com/media/bf5fcf_d13ab9d17e5743ff8e63be27748271c5~mv2.jpg/v1/fill/w_420,h_666,al_c,q_80,enc_avif,quality_auto/bf5fcf_d13ab9d17e5743ff8e63be27748271c5~mv2.jpg' },
    { role: "Men's 1s Vice-captain", name: '...', photo: 'https://static.wixstatic.com/media/bf5fcf_510414e646e24bc383ce6806d244ea41~mv2.jpg/v1/fill/w_450,h_702,al_t,q_80,enc_avif,quality_auto/bf5fcf_510414e646e24bc383ce6806d244ea41~mv2.jpg' },
    { role: "Women's 1s Captain", name: 'Hebe Dixon', photo: 'https://static.wixstatic.com/media/bf5fcf_cdcaf98ec4404ecea72f52a3ddf6a4f2~mv2.jpg/v1/fill/w_712,h_1110,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/bf5fcf_cdcaf98ec4404ecea72f52a3ddf6a4f2~mv2.jpg' },
    { role: "Women's 1s Vice-captain", name: 'Melissa Lambert', photo: 'https://static.wixstatic.com/media/bf5fcf_084841b2719d4ccea970967e06bd2860~mv2.jpg/v1/fill/w_712,h_1110,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/bf5fcf_084841b2719d4ccea970967e06bd2860~mv2.jpg' },
    { role: "Men's 2s Co-captain", name: 'Daniel Rowe', photo: 'https://static.wixstatic.com/media/bf5fcf_d3af8e4809ae4a24b161a5a4628b0171~mv2.jpg/v1/fill/w_535,h_834,al_c,q_85,enc_avif,quality_auto/bf5fcf_d3af8e4809ae4a24b161a5a4628b0171~mv2.jpg' },
    { role: "Men's 2s Co-captain", name: 'Arthur Collenette', photo: 'https://static.wixstatic.com/media/bf5fcf_c40fa51dd3334170a7308db609bb0046~mv2.jpg/v1/fill/w_645,h_1006,al_c,q_85,enc_avif,quality_auto/bf5fcf_c40fa51dd3334170a7308db609bb0046~mv2.jpg' },
    { role: "Women's 2s Captain", name: 'Katie Little', photo: 'https://static.wixstatic.com/media/bf5fcf_0ad2fae1213f4166ab48faa5fabdc78e~mv2.jpg/v1/fill/w_531,h_828,al_c,q_85,enc_avif,quality_auto/bf5fcf_0ad2fae1213f4166ab48faa5fabdc78e~mv2.jpg' },
    { role: "Women's 2s Vice-captain", name: 'Natalie Kyte', photo: 'https://static.wixstatic.com/media/bf5fcf_732e2ab4ac41475ea31facc09880923f~mv2.jpg/v1/fill/w_712,h_1110,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/bf5fcf_732e2ab4ac41475ea31facc09880923f~mv2.jpg' },
    { role: "Men's 3s Captain", name: 'Max Fleming', photo: 'https://static.wixstatic.com/media/bf5fcf_7ecb50cdc5d04ddfb3d1b814dc3f8c23~mv2.jpg/v1/fill/w_616,h_960,al_c,q_85,enc_avif,quality_auto/bf5fcf_7ecb50cdc5d04ddfb3d1b814dc3f8c23~mv2.jpg' },
    { role: "Men's 3s Vice-captain", name: 'Jack Liang', photo: 'https://static.wixstatic.com/media/bf5fcf_c92578721235473e884329c572d157e6~mv2.jpg/v1/fill/w_467,h_780,al_c,q_85,enc_avif,quality_auto/bf5fcf_c92578721235473e884329c572d157e6~mv2.jpg' },
    { role: "Women's 3s Captain", name: 'Hannah Bird', photo: 'https://static.wixstatic.com/media/bf5fcf_4061feab32df4bfebc342772d2f30e90~mv2.jpg/v1/fill/w_712,h_1188,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/bf5fcf_4061feab32df4bfebc342772d2f30e90~mv2.jpg' },
    { role: "Women's 3s Vice-captain", name: 'Abigail Fitzpatrick', photo: 'https://static.wixstatic.com/media/bf5fcf_26e14886d26f4463be5ad28397a9a963~mv2.jpg/v1/fill/w_712,h_1188,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/bf5fcf_26e14886d26f4463be5ad28397a9a963~mv2.jpg' },
    { role: "Indoor Captain", name: 'Oli Moss', photo: 'https://static.wixstatic.com/media/bf5fcf_cdcf4b88eae841a4b952cc5bb017a1a2~mv2.jpg/v1/fill/w_575,h_959,al_c,q_85,enc_avif,quality_auto/bf5fcf_cdcf4b88eae841a4b952cc5bb017a1a2~mv2.jpg' },
    { role: "Development Captain", name: 'Martha Watson', photo: 'https://static.wixstatic.com/media/bf5fcf_a257469855e04e4eb317af2387b428ec~mv2.jpg/v1/fill/w_431,h_314,al_t,lg_1,q_80,enc_avif,quality_auto/bf5fcf_a257469855e04e4eb317af2387b428ec~mv2.jpg' },
    { role: "Development Captain", name: 'Jacob Dimmock', photo: 'https://static.wixstatic.com/media/bf5fcf_2ead3014db3145d19539551e7c1b134a~mv2.jpg/v1/fill/w_650,h_472,al_t,q_80,enc_avif,quality_auto/bf5fcf_2ead3014db3145d19539551e7c1b134a~mv2.jpg' }
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
