<script>
  import TeamsHero from "$lib/images/pages/teams/teams-hero.webp?enhanced";
  import MensClub from "$lib/images/pages/teams/mens-club.webp?enhanced";
  import WomensClub from "$lib/images/pages/teams/womens-club.webp?enhanced";
  import DevSquad from "$lib/images/pages/teams/development-squad.avif?enhanced";
  import IndoorHockey from "$lib/images/pages/teams/indoor-hockey.webp?enhanced";

  const teamPages = [
    {
      name: "Men's Club",
      href: "/teams/mens-club",
      image: MensClub,
      alt: "Men's Club Action",
      // REALISTIC: Focuses on the schedule (Wed/Sat) and the balance of serious play + social.
      description: "Three competitive squads playing weekly across BUCS and North West leagues. Strong performance on the pitch, stronger brotherhood off it."
    },
    {
      name: "Women's Club",
      href: "/teams/womens-club",
      image: WomensClub,
      alt: "Women's Club Team",
      // REALISTIC: Removes "elite/highest level". Focuses on "depth" and "success" which is true for BUCS 2A.
      description: "A dynamic club with three teams competing in BUCS and Saturday divisions. We pride ourselves on depth of talent, commitment, and team spirit."
    },
    {
      name: "Development Squad",
      href: "/teams/development-squad",
      image: DevSquad,
      alt: "Dev Squad Training",
      // REALISTIC: Highlights that it's the entry point.
      description: "The heart of LUHC growth. Open to all abilities - from complete beginners to those returning to the stick. Train, improve, and progress."
    },
    {
      name: "Indoor Hockey",
      href: "/teams/indoor-hockey",
      image: IndoorHockey,
      alt: "Indoor Hockey Match",
      description: "Fast, technical, and intense. A key part of our season to sharpen skills for the outdoor game and the Roses tournament."
    }
  ];
</script>

<svelte:head>
  <title>Our Teams | Lancaster University Hockey Club</title>
</svelte:head>

<section class="relative h-[60vh] w-full overflow-hidden bg-luhc-dark">
  <enhanced:img
    src={TeamsHero}
    alt="LUHC Teams Hero"
    class="absolute inset-0 w-full h-full object-cover object-center opacity-60"
  />
  <div class="absolute inset-0 bg-gradient-to-t from-luhc-dark via-transparent to-transparent"></div>
  
  <div class="absolute inset-0 flex flex-col justify-center items-center text-center px-4" data-aos="fade-in">
    <h1 class="font-display text-6xl md:text-8xl font-bold text-white uppercase tracking-tighter drop-shadow-2xl mb-4">
      Our Squads
    </h1>
    <p class="font-sans text-xl md:text-2xl text-white/90 font-light max-w-2xl drop-shadow-md">
      Competitive. Social. Inclusive.
    </p>
  </div>
</section>

<div class="max-w-7xl mx-auto px-6 py-20 text-gray-900">
  
  <div class="text-center mb-16" data-aos="fade-up">
    <h2 class="font-display uppercase text-4xl font-bold text-luhc-dark mb-4">Find Your Team</h2>
    <div class="h-1 w-24 bg-luhc-red mx-auto"></div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12" data-aos="fade-up">
    {#each teamPages as team}
      <a 
        href={team.href} 
        class="group relative block bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
        aria-label={`Go to ${team.name} page`}
      >
        <div class="relative h-64 overflow-hidden">
          <enhanced:img
            src={team.image}
            alt={team.alt}
            class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-luhc-red/0 group-hover:bg-luhc-red/20 transition-colors duration-300"></div>
        </div>

        <div class="p-8 relative">
          <div class="absolute top-0 left-0 w-full h-1 bg-gray-100 group-hover:bg-luhc-red transition-colors duration-300"></div>
          
          <h2 class="font-display uppercase text-3xl font-bold text-luhc-dark group-hover:text-luhc-red transition-colors mb-3">
            {team.name}
          </h2>
          
          <p class="font-sans text-gray-600 font-light leading-relaxed mb-6">
            {team.description}
          </p>
          
          <span class="inline-flex items-center text-sm font-bold uppercase tracking-widest text-luhc-dark group-hover:text-luhc-red transition-colors">
            View Team Details 
            <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </a>
    {/each}
  </div>

</div>