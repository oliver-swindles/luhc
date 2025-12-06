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

  const galleryImages = [Socials1, Socials2, Socials3, Socials4, Socials5, Socials6, Socials7, Socials8]; 
</script>

<svelte:head>
  <title>Socials | Lancaster University Hockey Club</title>
</svelte:head>

<section class="relative h-[60vh] w-full overflow-hidden bg-luhc-dark">
  <enhanced:img
    src={SocialsHero}
    alt="LUHC Social Event"
    class="absolute inset-0 w-full h-full object-cover object-center opacity-70"
  />
  <div class="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
  
  <div class="absolute inset-0 flex flex-col justify-center px-8 md:px-24" data-aos="fade-in">
    <span class="font-display uppercase tracking-widest text-white font-bold mb-2">Wednesdays Are For</span>
    <h1 class="font-display text-6xl md:text-8xl font-bold text-white uppercase tracking-tighter drop-shadow-xl">
      Socials
    </h1>
  </div>
</section>

<section class="py-20 px-6 max-w-7xl mx-auto">
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
    
    <div class="space-y-6" data-aos="fade-right">
      <h2 class="font-display uppercase text-4xl font-bold text-luhc-dark">More Than Just Hockey</h2>
      <div class="h-1 w-20 bg-luhc-red"></div>
      <p class="text-lg text-gray-600 leading-relaxed font-light">
        Our welcoming community is built on friendship. We host <strong>weekly Wednesday socials</strong> ranging from themed nights out to relaxed get-togethers.
      </p>
      <p class="text-lg text-gray-600 leading-relaxed font-light">
        We are proud to host our nights at <a href="https://www.vibelancaster.com" target="_blank" class="text-luhc-red font-bold hover:underline">VIBE Lancaster</a>. Whether you play competitively or just want to be part of the community, our social membership is for you.
      </p>
      <a href="/contact-us" class="inline-block mt-4 border-b-2 border-luhc-dark pb-1 text-luhc-dark font-display uppercase tracking-widest hover:text-luhc-red hover:border-luhc-red transition-colors">
        Become a Social Member
      </a>
    </div>

    <div class="grid grid-cols-2 gap-4" data-aos="fade-left">
      <enhanced:img src={Socials1} class="w-full h-48 object-cover rounded-sm shadow-md hover:scale-105 transition-transform duration-500" alt="Social 1" />
      <enhanced:img src={Socials2} class="w-full h-48 object-cover rounded-sm shadow-md hover:scale-105 transition-transform duration-500 mt-8" alt="Social 2" />
      <enhanced:img src={Socials3} class="w-full h-48 object-cover rounded-sm shadow-md hover:scale-105 transition-transform duration-500" alt="Social 3" />
      <enhanced:img src={Socials4} class="w-full h-48 object-cover rounded-sm shadow-md hover:scale-105 transition-transform duration-500 mt-8" alt="Social 4" />
    </div>

  </div>
</section>

<section class="bg-luhc-dark py-24 px-4">
  <div class="max-w-7xl mx-auto text-center mb-12">
    <h2 class="font-display uppercase text-4xl font-bold text-white">The Highlights Reel</h2>
  </div>
  
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
    {#each galleryImages as img, index}
      <div class="overflow-hidden rounded-sm relative group aspect-square">
        <enhanced:img
          src={img}
          alt={`Social ${index}`}
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
        />
        <div class="absolute inset-0 bg-luhc-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    {/each}
  </div>
</section>