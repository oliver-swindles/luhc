<script>
  import DevHero from "$lib/images/pages/dev/dev-hero.jpg?enhanced";
  import Dev1 from "$lib/images/pages/dev/dev-1.avif?enhanced";
  import Dev2 from "$lib/images/pages/dev/dev-2.avif?enhanced";
  import Dev3 from "$lib/images/pages/dev/dev-3.avif?enhanced";
  import Dev4 from "$lib/images/pages/dev/dev-4.avif?enhanced";
  
  const gallery = [Dev1, Dev2, Dev3, Dev4]; 
</script>

<svelte:head>
  <title>Development Squad | Lancaster University Hockey Club</title>
</svelte:head>

<section class="relative h-[60vh] w-full overflow-hidden bg-luhc-dark">
  <enhanced:img
    src={DevHero}
    alt="Dev Squad Huddle"
    class="absolute inset-0 w-full h-full object-cover object-center opacity-60"
  />
  <div class="absolute inset-0 bg-gradient-to-t from-luhc-dark via-transparent to-transparent"></div>
  
  <div class="absolute inset-0 flex flex-col justify-center items-center text-center px-4" data-aos="fade-in">
    <h1 class="font-display text-6xl md:text-8xl font-bold text-white uppercase tracking-tighter drop-shadow-xl mb-4">
      Dev Squad
    </h1>
    <p class="font-sans text-xl md:text-2xl text-white/90 font-light max-w-2xl">
      Hockey for Everyone. Any Ability. Any Background.
    </p>
  </div>
</section>

<div class="max-w-7xl mx-auto px-6 py-20">
  
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24" data-aos="fade-up">
    <div>
      <h2 class="font-display uppercase text-4xl font-bold text-luhc-dark mb-6">About The Squad</h2>
      <div class="h-1 w-20 bg-luhc-red mb-8"></div>
      <div class="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
        <p>Whether you're picking up a stick for the first time or looking to sharpen your skills for competitive selection, Dev is your home.</p>
        <p>Sessions are run by our dedicated Development Officers alongside the Dev Captains. It is the perfect pathway into the 3rd XI, or simply a great way to stay fit and make friends.</p>
      </div>
    </div>

    <div class="bg-gray-50 border border-gray-100 p-8 shadow-sm">
      <h3 class="font-display uppercase text-2xl font-bold mb-6 text-luhc-dark">Training Schedule</h3>
      <div class="space-y-4 mb-8">
        <div class="flex justify-between items-center border-b border-gray-200 pb-2">
          <span class="font-sans font-bold text-gray-700">Tuesday</span>
          <span class="font-sans text-luhc-red font-bold">16:00 - 17:00</span>
        </div>
        <div class="flex justify-between items-center border-b border-gray-200 pb-2">
          <span class="font-sans font-bold text-gray-700">Thursday</span>
          <span class="font-sans text-luhc-red font-bold">17:00 - 18:00</span>
        </div>
      </div>
      
      <h3 class="font-display uppercase text-2xl font-bold mb-4 text-luhc-dark">Fixtures</h3>
      <p class="text-gray-600 font-light mb-6">Regular friendly matches against other university development squads, culminating in the Roses Mixed Exhibition.</p>
      
      <a href="/socials" class="block w-full text-center border-2 border-luhc-red text-luhc-red font-display uppercase font-bold tracking-widest py-3 hover:bg-luhc-red hover:text-white transition-colors">
        View Socials
      </a>
    </div>
  </div>

  <section data-aos="fade-up">
    <div class="text-center mb-12">
      <h2 class="font-display uppercase text-4xl font-bold text-luhc-dark">Action Shots</h2>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      {#each gallery as img}
        <div class="aspect-square bg-gray-100 overflow-hidden group relative">
          <enhanced:img 
            src={img} 
            alt="Dev Squad Action" 
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          />
        </div>
      {/each}
    </div>
  </section>

  <section class="mt-24 bg-luhc-red text-white py-16 px-6 text-center rounded-sm shadow-xl">
    <h2 class="font-display uppercase text-4xl font-bold mb-4">Start Your Journey</h2>
    <p class="font-sans text-lg text-white/90 mb-8">No trials required. Just turn up and play.</p>
    <a href="/contact-us" class="inline-block bg-white text-luhc-red font-display uppercase font-bold tracking-widest px-10 py-4 hover:bg-luhc-dark hover:text-white transition-colors shadow-md">
      Get Involved
    </a>
  </section>

</div>