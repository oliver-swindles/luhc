<script>
  import { Button } from "flowbite-svelte";

  import TeamsHero from "$lib/images/pages/teams/teams-hero.webp?enhanced";
  import MensClub from "$lib/images/pages/teams/mens-club.webp?enhanced";
  import WomensClub from "$lib/images/pages/teams/womens-club.webp?enhanced";
  import DevSquad from "$lib/images/pages/teams/development-squad.avif?enhanced";
  import IndoorHockey from "$lib/images/pages/teams/indoor-hockey.webp?enhanced";

  const teamPages = [
    {
      name: "Men's Club",
      href: '/teams/mens-club',
      image: MensClub,
      alt: 'Men's Club Action Shot',
      description: 'BUCS & Saturday league teams fostering strong camaraderie and competitive hockey.'
    },
    {
      name: "Women's Club",
      href: '/teams/womens-club',
      image: WomensClub,
      alt: 'Women's Club Team Photo',
      description: 'Three thriving women's teams full of passion, drive, and supportive team spirit.'
    },
    {
      name: "Development Squad",
      href: '/teams/development-squad',
      image: DevSquad,
      alt: 'Development Squad Practice',
      description: 'Open to all abilities - LUHC's core for learning, improving and thriving in hockey.'
    },
    {
      name: "Indoor Hockey",
      href: '/teams/indoor-hockey',
      image: IndoorHockey,
      alt: 'Indoor Hockey Match',
      description: 'Fast-paced and energetic indoor hockey - perfect for winter fitness and Roses glory.'
    }
  ];
</script>

<svelte:head>
  <title>Our Teams | Lancaster University Hockey Club</title>
</svelte:head>

<section class="p-8">
  <div class="relative overflow-hidden rounded-xl text-white text-center px-8 py-16 shadow-xl">
    <enhanced:img
      src={TeamsHero}
      alt="LUHC Teams Hero"
      class="absolute inset-0 w-full h-full object-cover z-[-1]"
    />
    <div class="absolute inset-0 bg-black/70 z-0 rounded-xl"></div>
    <div class="relative z-10 space-y-4" data-aos="fade-in">
      <h1 class="text-4xl md:text-5xl font-extrabold drop-shadow-lg">Our Teams</h1>
      <p class="text-xl max-w-2xl mx-auto drop-shadow-md">Explore LUHC's clubs, squads, and hockey offerings</p>
    </div>
  </div>
</section>

<section class="max-w-6xl mx-auto px-4 py-12">
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-8" data-aos="fade-up">
    {#each teamPages as team}
      <article
        class="group rounded-xl overflow-hidden shadow-lg bg-white transition-transform hover:scale-[1.03] focus:outline-none focus:ring-4 focus:ring-red-400"
        aria-label={`Go to ${team.name} page`}
      >
        <enhanced:img
          src={team.image}
          alt={team.alt}
          class="w-full h-56 object-cover group-hover:brightness-90 transition duration-300"
          loading="lazy"
        />
        <div class="p-5">
          <h2 class="text-2xl font-bold text-red-700 mb-2">{team.name}</h2>
          <p class="text-gray-700 mb-4">{team.description}</p>
          <Button
            color="red"
            size="md"
            aria-label={`Visit ${team.name} page`}
            class="w-full sm:w-auto cursor-pointer"
            href={team.href}
          >
            View Team
          </Button>
        </div>
      </article>
    {/each}
  </div>
</section>

<style>
  @media (max-width: 640px) {
    .max-w-6xl {
      max-width: 90%;
    }
  }
</style>
