<script>
  import AboutHero from "$lib/images/pages/about/about-hero.jpg?enhanced";
  import MensClub from "$lib/images/pages/about/mens-club.webp?enhanced";
  import WomensClub from "$lib/images/pages/about/womens-club.avif?enhanced";
  import DevSquad from "$lib/images/pages/about/dev-squad.avif?enhanced";
  import IndoorHockey from "$lib/images/pages/about/indoor-hockey.webp?enhanced";

  const teamLinks = [
    { title: "Men's Club", href: "/teams/mens-club", img: MensClub },
    { title: "Women's Club", href: "/teams/womens-club", img: WomensClub },
    { title: "Dev Squad", href: "/teams/development-squad", img: DevSquad },
    { title: "Indoor Hockey", href: "/teams/indoor-hockey", img: IndoorHockey }
  ];
</script>

<svelte:head>
  <title>About Us | Lancaster University Hockey Club</title>
</svelte:head>

<section class="relative h-[60vh] w-full overflow-hidden bg-luhc-dark">
  <enhanced:img
    src={AboutHero}
    alt="LUHC Team Huddle"
    class="absolute inset-0 w-full h-full object-cover object-center opacity-60"
  />
  <div class="absolute inset-0 bg-gradient-to-t from-luhc-dark via-transparent to-black/30"></div>
  
  <div class="absolute inset-0 flex flex-col justify-center items-center text-center px-4" data-aos="fade-in">
    <span class="font-display uppercase tracking-[0.3em] text-luhc-red font-bold mb-4 text-sm md:text-base">Est. 1964</span>
    <h1 class="font-display text-6xl md:text-8xl font-bold text-white uppercase tracking-tighter drop-shadow-xl mb-6">
      Our Club
    </h1>
    <div class="h-1 w-24 bg-luhc-red mb-8"></div>
    <p class="font-sans text-lg md:text-2xl text-gray-200 max-w-3xl font-light leading-relaxed drop-shadow-md">
      We take pride in offering both competitive teams and a non-competitive development squad. 
      <span class="text-white font-medium">Whoever you are, there is a place for you at LUHC.</span>
    </p>
  </div>
</section>

<div class="bg-white text-luhc-dark">
  
  <section class="py-20 px-6 max-w-7xl mx-auto" data-aos="fade-up">
    <div class="text-center mb-16">
      <h2 class="font-display uppercase text-4xl md:text-5xl font-bold mb-4">Mission & Values</h2>
      <div class="h-[1px] w-full max-w-[200px] bg-gray-200 mx-auto"></div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="bg-gray-50 p-8 border-l-4 border-luhc-red shadow-sm hover:shadow-md transition-shadow" data-aos="fade-up" data-aos-delay="0">
        <h3 class="font-display uppercase text-2xl font-bold mb-3 text-luhc-dark">Inclusivity</h3>
        <p class="text-gray-600 font-light leading-relaxed">We welcome players of all backgrounds and skill levels. From complete beginners to seasoned pros, we foster a supportive environment for everyone.</p>
      </div>
      <div class="bg-gray-50 p-8 border-l-4 border-luhc-red shadow-sm hover:shadow-md transition-shadow" data-aos="fade-up" data-aos-delay="100">
        <h3 class="font-display uppercase text-2xl font-bold mb-3 text-luhc-dark">Excellence</h3>
        <p class="text-gray-600 font-light leading-relaxed">On and off the pitch, we aim to excel. Through rigorous training, competitive spirit, and club development, we push for the win.</p>
      </div>
      <div class="bg-gray-50 p-8 border-l-4 border-luhc-red shadow-sm hover:shadow-md transition-shadow" data-aos="fade-up" data-aos-delay="200">
        <h3 class="font-display uppercase text-2xl font-bold mb-3 text-luhc-dark">Community</h3>
        <p class="text-gray-600 font-light leading-relaxed">Beyond hockey, we build lasting friendships. Our socials, charity events, and traditions create a family away from home.</p>
      </div>
    </div>
  </section>

  <section class="bg-luhc-dark py-24 px-6 text-white" data-aos="fade-up">
    <div class="max-w-7xl mx-auto">
      <div class="flex items-center gap-4 mb-12">
        <div class="h-8 w-1 bg-luhc-red"></div>
        <h2 class="font-display uppercase text-4xl font-bold tracking-tight">Our Squads</h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {#each teamLinks as team}
          <a href={team.href} class="group relative block aspect-[3/4] overflow-hidden bg-gray-900 border border-white/10 hover:border-luhc-red transition-colors">
            <enhanced:img 
              src={team.img} 
              alt={team.title} 
              class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" 
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
            
            <div class="absolute bottom-0 left-0 p-6 w-full">
              <h3 class="font-display uppercase text-2xl font-bold text-white mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{team.title}</h3>
              <div class="h-1 w-0 bg-luhc-red group-hover:w-full transition-all duration-500"></div>
            </div>
          </a>
        {/each}
      </div>
    </div>
  </section>

  <section class="py-24 px-6 max-w-5xl mx-auto text-center" data-aos="fade-up">
    <h2 class="font-display uppercase text-4xl font-bold text-luhc-dark mb-6">Beyond The Pitch</h2>
    <p class="text-xl text-gray-600 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
      From weekly socials and formal dinners to charity fundraisers, our vibrant calendar ensures there's always something happening.
    </p>
    <a href="/socials" class="inline-block border-2 border-luhc-dark text-luhc-dark font-display uppercase tracking-widest px-8 py-3 hover:bg-luhc-dark hover:text-white transition-colors duration-300 font-bold text-sm">
      View Socials
    </a>
  </section>

  <section class="bg-luhc-red text-white py-20 px-6 text-center">
    <div class="max-w-4xl mx-auto" data-aos="fade-in">
      <h2 class="font-display uppercase text-5xl font-bold mb-6">Ready to Play?</h2>
      <p class="font-sans text-lg text-white/90 mb-10">Join one of the largest societies at Lancaster.</p>
      <a href="/contact-us" class="inline-block bg-white text-luhc-red font-display uppercase font-bold tracking-widest px-10 py-4 shadow-lg hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300">
        Join The Club
      </a>
    </div>
  </section>

</div>