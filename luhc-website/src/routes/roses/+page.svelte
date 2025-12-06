<script>
  import RosesHero from "$lib/images/pages/roses/roses-hero.webp?enhanced";
</script>

<svelte:head>
  <title>Roses | Lancaster University Hockey Club</title>
</svelte:head>

<section class="relative h-[70vh] w-full overflow-hidden bg-luhc-dark">
  <enhanced:img 
    src={RosesHero} 
    alt="Roses Hockey Action" 
    class="absolute inset-0 w-full h-full object-cover object-center opacity-60"
  />
  <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/0"></div>
  
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
      With six outdoor games, four indoor clashes, and the development squad exhibition, it is a weekend where legends are made.
    </p>
    <div class="inline-block border-2 border-luhc-dark px-6 py-2 font-display uppercase font-bold tracking-widest text-sm">
      #RosesAreRed
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
      Join The Squad
    </a>
  </section>

</div>