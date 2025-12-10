<script>
  import RosesHero from "$lib/images/pages/roses/roses-hero.webp?enhanced";
</script>

<svelte:head>
  <title>Roses | Lancaster University Hockey Club</title>
  <meta name="description" content="Roses is Europe's largest inter-varsity sports tournament between Lancaster and York. View LUHC highlights and match history." />
</svelte:head>

<section class="relative h-[70vh] w-full overflow-hidden bg-luhc-dark">
  <enhanced:img 
    src={RosesHero} 
    alt="Roses Hockey Action" 
    class="absolute inset-0 w-full h-full object-cover object-center opacity-60"
  />
  <div class="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-black/0"></div>
  
  <div class="absolute inset-0 flex flex-col justify-center items-center text-center px-6" data-aos="fade-in">
    <span class="font-display uppercase tracking-[0.4em] text-white font-bold text-sm md:text-base mb-4 animate-pulse">Varsity</span>
    <h1 class="font-display text-7xl md:text-9xl font-bold text-white uppercase tracking-tighter drop-shadow-2xl mb-6 leading-none">
      Roses
    </h1>
    <div class="h-2 w-32 bg-white mb-8"></div>
    <p class="font-sans text-xl md:text-3xl text-white font-light max-w-3xl drop-shadow-md">
      Europe's Largest Inter-Varsity Sports Tournament
    </p>
  </div>
</section>

<div class="bg-white text-luhc-dark">
  
  <section class="max-w-4xl mx-auto px-6 py-20 text-center" data-aos="fade-up">
    <h2 class="font-display uppercase text-4xl font-bold mb-8 text-luhc-red">Why It Matters</h2>
    <p class="text-xl text-gray-600 leading-relaxed font-light mb-8">
      Roses is the finale of the LUHC calendar. After a season of grit and training, it's the ultimate showdown against York.
      Six outdoor games, four indoor clashes, and the development squad exhibition match.
    </p>
    
    <div class="flex flex-col items-center gap-6">
      <a 
        href="https://roseslive.co.uk/" 
        target="_blank" 
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 bg-luhc-red text-white px-8 py-3 font-display font-bold uppercase tracking-wide hover:bg-luhc-dark transition-colors duration-300 shadow-md group"
      >
        <span>Visit RosesLive.co.uk</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 group-hover:translate-x-1 transition-transform">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
      </a>

      <a 
        href="https://www.lancaster.ac.uk/sport/roses/" 
        target="_blank" 
        rel="noopener noreferrer"
        class="mt-4 text-xs font-sans text-gray-400 hover:text-luhc-red transition-colors border-b border-transparent hover:border-luhc-red pb-0.5"
      >
        View More Tournament Details on lancaster.ac.uk &rarr;
      </a>
    </div>
  </section>

  <section class="bg-gray-50 py-20 px-4">
    <div class="max-w-7xl mx-auto">
      
      <div class="mb-20" data-aos="fade-up">
        <div class="flex items-center gap-4 mb-8">
          <div class="h-8 w-1 bg-luhc-red"></div>
          <h2 class="font-display uppercase text-3xl md:text-4xl font-bold">1st XI Highlights</h2>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div class="aspect-video shadow-xl rounded-sm overflow-hidden bg-black">
            <iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/D0kxPxzUJgI" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
          </div>
          <div class="aspect-video shadow-xl rounded-sm overflow-hidden bg-black">
            <iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/YE8VG-8AUOI" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
      </div>

      <div data-aos="fade-up">
        <div class="flex items-center gap-4 mb-8">
          <div class="h-8 w-1 bg-luhc-red"></div>
          <h2 class="font-display uppercase text-3xl md:text-4xl font-bold">Indoor Highlights</h2>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div class="aspect-video shadow-xl rounded-sm overflow-hidden bg-black">
            <iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/7eyaLJZA3sU" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
          </div>
          <div class="aspect-video shadow-xl rounded-sm overflow-hidden bg-black">
            <iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/n8Jj4okm0Hg" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
      </div>

    </div>
  </section>

  <section class="bg-luhc-dark text-white py-24 text-center px-6">
    <h2 class="font-display uppercase text-5xl font-bold mb-6">Make History</h2>
    <p class="font-sans text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
      Whether you're on the pitch or in the stands, every voice counts. Join us next year.
    </p>
    <a href="/contact-us" class="inline-block bg-luhc-red text-white font-display uppercase font-bold tracking-widest px-10 py-4 hover:bg-white hover:text-luhc-red transition-all duration-300 shadow-lg transform hover:-translate-y-1">
      Play for Lancaster
    </a>
  </section>

</div>  