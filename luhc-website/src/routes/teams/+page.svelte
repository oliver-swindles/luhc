<script lang="ts">
  import { resolve } from '$app/paths';

  import TeamsHero from '$lib/images/pages/teams/teams-hero.webp?enhanced';
  import MensClub from '$lib/images/pages/teams/mens-club.webp?enhanced';
  import WomensClub from '$lib/images/pages/teams/womens-club.webp?enhanced';
  import DevSquad from '$lib/images/pages/teams/development-squad.avif';
  import IndoorHockey from '$lib/images/pages/teams/indoor-hockey.webp?enhanced';

  const teamPages = [
    {
      name: "Men's Club",
      href: '/teams/mens-club',
      image: MensClub,
      alt: "Men's Club Action",
      description:
        'Three competitive squads playing weekly across BUCS and North West leagues. Strong performance on the pitch, stronger brotherhood off it.',
    },
    {
      name: "Women's Club",
      href: '/teams/womens-club',
      image: WomensClub,
      alt: "Women's Club Team",
      description:
        'A dynamic club with three teams competing in BUCS and Saturday divisions. We pride ourselves on depth of talent, commitment, and team spirit.',
    },
    {
      name: 'Development Squad',
      href: '/teams/development-squad',
      image: DevSquad,
      alt: 'Dev Squad Training',
      description:
        'The heart of LUHC growth. Open to all abilities - from complete beginners to those returning to the stick. Train, improve, and progress.',
    },
    {
      name: 'Indoor Hockey',
      href: '/teams/indoor-hockey',
      image: IndoorHockey,
      alt: 'Indoor Hockey Match',
      description:
        'Fast, technical, and intense. A key part of our season to sharpen skills for the outdoor game and the Roses tournament.',
    },
  ] as const;
</script>

<svelte:head>
  <title>Our Teams | Lancaster University Hockey Club</title>
</svelte:head>

<section class="relative h-[60vh] w-full overflow-hidden bg-luhc-dark">
  <enhanced:img
    src={TeamsHero}
    alt="LUHC Teams Hero"
    class="absolute inset-0 h-full w-full object-cover object-center opacity-60"
  />
  <div class="absolute inset-0 bg-linear-to-t from-luhc-dark via-transparent to-transparent"></div>

  <div
    class="absolute inset-0 flex flex-col items-center justify-center px-4 text-center"
    data-aos="fade-in"
  >
    <h1
      class="mb-4 font-display text-6xl font-bold tracking-tighter text-white uppercase drop-shadow-2xl md:text-8xl"
    >
      Our Squads
    </h1>
    <p class="max-w-2xl font-sans text-xl font-light text-white/90 drop-shadow-md md:text-2xl">
      Competitive. Social. Inclusive.
    </p>
  </div>
</section>

<div class="mx-auto max-w-7xl px-6 py-20 text-gray-900">
  <div class="mb-16 text-center" data-aos="fade-up">
    <h2 class="mb-4 font-display text-4xl font-bold text-luhc-dark uppercase">Find Your Team</h2>
    <div class="mx-auto h-1 w-24 bg-luhc-red"></div>
  </div>

  <div class="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12" data-aos="fade-up">
    {#each teamPages as team (team.name + team.href)}
      <a
        href={resolve(team.href)}
        class="group relative block transform overflow-hidden border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
        aria-label={`Go to ${team.name} page`}
      >
        <div class="relative h-64 overflow-hidden">
          <enhanced:img
            src={team.image}
            alt={team.alt}
            class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div
            class="absolute inset-0 bg-luhc-red/0 transition-colors duration-300 group-hover:bg-luhc-red/20"
          ></div>
        </div>

        <div class="relative p-8">
          <div
            class="absolute top-0 left-0 h-1 w-full bg-gray-100 transition-colors duration-300 group-hover:bg-luhc-red"
          ></div>

          <h2
            class="mb-3 font-display text-3xl font-bold text-luhc-dark uppercase transition-colors group-hover:text-luhc-red"
          >
            {team.name}
          </h2>

          <p class="mb-6 font-sans leading-relaxed font-light text-gray-600">
            {team.description}
          </p>

          <span
            class="inline-flex items-center text-sm font-bold tracking-widest text-luhc-dark uppercase transition-colors group-hover:text-luhc-red"
          >
            View Team Details
            <svg
              class="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </div>
      </a>
    {/each}
  </div>
</div>
