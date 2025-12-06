<script>
  import IndoorHero from "$lib/images/pages/indoor/indoor-hero.jpg?enhanced";
  import Indoor1 from "$lib/images/pages/indoor/indoor-1.webp?enhanced";
  import Indoor2 from "$lib/images/pages/indoor/indoor-2.webp?enhanced";
  import Indoor3 from "$lib/images/pages/indoor/indoor-3.webp?enhanced";
  import Indoor4 from "$lib/images/pages/indoor/indoor-4.webp?enhanced";
  import Indoor5 from "$lib/images/pages/indoor/indoor-5.webp?enhanced";
  import Indoor6 from "$lib/images/pages/indoor/indoor-6.webp?enhanced";
  import Indoor7 from "$lib/images/pages/indoor/indoor-7.webp?enhanced";
  import Indoor8 from "$lib/images/pages/indoor/indoor-8.webp?enhanced";
  import Indoor9 from "$lib/images/pages/indoor/indoor-9.webp?enhanced";

  const gallery = [
    { src: Indoor1 , alt: 'Indoor Hockey 1' },
    { src: Indoor2 , alt: 'Indoor Hockey 2' },
    { src: Indoor3 , alt: 'Indoor Hockey 3' },
    { src: Indoor4 , alt: 'Indoor Hockey 4' },
    { src: Indoor5 , alt: 'Indoor Hockey 5' },
    { src: Indoor6 , alt: 'Indoor Hockey 6' },
    { src: Indoor7 , alt: 'Indoor Hockey 7' },
    { src: Indoor8 , alt: 'Indoor Hockey 8' },
    { src: Indoor9 , alt: 'Indoor Hockey 9' }
  ];
</script>

<svelte:head>
  <title>Indoor Hockey | Lancaster University Hockey Club</title>
</svelte:head>

<section class="relative h-[60vh] w-full overflow-hidden bg-luhc-dark">
  <enhanced:img
    src={IndoorHero}
    alt="Indoor Hockey Action"
    class="absolute inset-0 w-full h-full object-cover object-center opacity-70"
  />
  <div class="absolute inset-0 bg-gradient-to-t from-luhc-dark via-transparent to-transparent"></div>
  
  <div class="absolute inset-0 flex flex-col justify-center items-center text-center px-4" data-aos="fade-in">
    <h1 class="font-display text-6xl md:text-8xl font-bold text-white uppercase tracking-tighter drop-shadow-2xl">
      Indoor Hockey
    </h1>
    <span class="font-display text-luhc-red uppercase tracking-widest font-bold text-sm mt-4 bg-white/10 px-4 py-1 rounded-full backdrop-blur-sm border border-white/20">Fast • Intense • Technical</span>
  </div>
</section>

<div class="max-w-7xl mx-auto px-6 py-20 text-gray-900">
  
  <section class="mb-20 grid grid-cols-1 lg:grid-cols-12 gap-12" data-aos="fade-up">
    <div class="lg:col-span-8 bg-gray-50 p-10 border-l-4 border-luhc-red shadow-sm">
      <h2 class="font-display uppercase text-3xl font-bold mb-6 text-luhc-dark">Captain's Brief</h2>
      <blockquote class="font-sans text-xl italic text-gray-600 leading-relaxed mb-6">
        “Hi, I'm Kat, the Indoor Hockey Captain for the 2022/23 season! I'm really looking forward to stepping into this captain role and increasing participation in such a great part of the sport. I hope to lead our teams to another victory at Roses as well as new competitions that we intend to enter this year. I can't wait to get started and help those who aren't as experienced at indoor improve and enjoy the game as much as I do!”
      </blockquote>
      <div class="font-display uppercase font-bold text-sm tracking-widest text-luhc-red">
        — Kat Headings, Indoor Captain (2022/23)
      </div>
    </div>
    
    <div class="lg:col-span-4 flex flex-col justify-center">
      <div class="bg-luhc-dark text-white p-8 shadow-xl">
        <h3 class="font-display uppercase text-2xl font-bold mb-4 text-luhc-red">Schedule</h3>
        <ul class="space-y-4 font-sans font-light">
          <li class="flex items-center gap-3">
            <span class="w-2 h-2 bg-luhc-red rounded-full"></span>
            <span>Sunday Mornings (Term 2)</span>
          </li>
          <li class="flex items-center gap-3">
            <span class="w-2 h-2 bg-luhc-red rounded-full"></span>
            <span>Sports Centre Hall 1</span>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <section data-aos="fade-up">
    <div class="flex items-center gap-4 mb-8">
      <div class="h-8 w-1 bg-luhc-red"></div>
      <h2 class="font-display uppercase text-4xl font-bold text-luhc-dark">The Arena</h2>
    </div>
    
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
      {#each gallery as img}
        <div class="group relative aspect-[4/3] overflow-hidden bg-gray-900 rounded-sm">
          <enhanced:img 
            src={img.src} 
            alt={img.alt} 
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" 
          />
          <div class="absolute inset-0 bg-luhc-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      {/each}
    </div>
  </section>

  <section class="mt-24 text-center border-t border-gray-100 pt-16">
    <h2 class="font-display uppercase text-4xl font-bold mb-6">Master The Indoor Game</h2>
    <p class="font-sans text-lg text-gray-500 mb-10 max-w-xl mx-auto">
      Sharpen your skills in the fast-paced indoor format. Open to all abilities.
    </p>
    <a href="/contact-us" class="inline-block bg-luhc-red text-white font-display uppercase font-bold tracking-widest px-10 py-4 shadow-lg hover:bg-luhc-dark transition-colors transform hover:-translate-y-1">
      Join Training
    </a>
  </section>
</div>