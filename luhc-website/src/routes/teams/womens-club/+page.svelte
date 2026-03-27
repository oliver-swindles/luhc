<script lang="ts">
  import { resolve } from '$app/paths';
  import WomensHero from '$lib/images/pages/womens/womens-hero.webp';
  import OnesPhoto from '$lib/images/pages/womens/womens-ones.avif';
  import TwosPhoto from '$lib/images/pages/womens/womens-twos.avif';
  import ThreesPhoto from '$lib/images/pages/womens/womens-threes.avif';

  const teams = [
    {
      name: 'LUWHC 1st XI',
      photo: OnesPhoto,
      league: "BUCS Northern Tier 2A / North West Women's Division 1",
      captain: 'Kiah Bardouille-Lewis',
      vice: 'Lucy Bridges',
      quote: '',
    },
    {
      name: 'LUWHC 2nd XI',
      photo: TwosPhoto,
      league: 'BUCS Northern Tier 3A',
      captain: 'Katie Little & Nat Kyte',
      vice: 'Co-Captains',
      quote: '',
    },
    {
      name: 'LUWHC 3rd XI',
      photo: ThreesPhoto,
      league: "North West Women's Division 5 North Central",
      captain: 'Grace Puckey',
      vice: 'Cat Prince',
      quote: '',
    },
  ];
</script>

<svelte:head>
  <title>Women's Club | Lancaster University Hockey Club</title>
</svelte:head>

<section class="relative h-[60vh] w-full overflow-hidden bg-luhc-dark">
  <img
    src={WomensHero}
    alt="Women's Club Hero"
    class="absolute inset-0 h-full w-full object-cover object-center opacity-70"
  />
  <div class="absolute inset-0 bg-linear-to-t from-luhc-dark via-transparent to-transparent"></div>

  <div
    class="absolute inset-0 flex flex-col items-center justify-center px-4 text-center"
    data-aos="fade-in"
  >
    <h1
      class="mb-4 font-display text-6xl font-bold tracking-tighter text-white uppercase drop-shadow-2xl md:text-8xl"
    >
      Women's Club
    </h1>
    <p class="max-w-2xl font-sans text-xl font-light text-white/90 md:text-2xl">
      Lancaster University Women's Hockey Club
    </p>
  </div>
</section>

<div class="mx-auto max-w-7xl px-6 py-20 text-gray-900">
  <div class="mb-24 grid grid-cols-1 gap-16 lg:grid-cols-2" data-aos="fade-up">
    <div>
      <h2 class="mb-6 font-display text-4xl font-bold text-luhc-dark uppercase">About LUWHC</h2>
      <div class="mb-8 h-1 w-20 bg-luhc-red"></div>
      <div class="space-y-6 text-lg leading-relaxed font-light text-gray-600">
        <p>
          LUWHC is a friendly and supportive community made up of three competitive teams and a
          development squad. We compete in BUCS leagues on Wednesdays and local Saturday leagues.
        </p>
        <p>
          More than just a team, we are a family. We pride ourselves on creating an inclusive
          environment where you can find friends and memories for life.
        </p>
      </div>
    </div>

    <div class="border border-gray-100 bg-gray-50 p-8 shadow-sm">
      <h3 class="mb-6 font-display text-2xl font-bold text-luhc-dark uppercase">
        Training Schedule
      </h3>
      <div class="mb-8 space-y-4 text-sm">
        <div class="flex items-center justify-between border-b border-gray-200 pb-2">
          <span class="font-sans font-bold text-gray-700">1st & 2nd XI</span>
          <span class="font-sans font-bold text-luhc-red">Mon & Thu Evenings</span>
        </div>
        <div class="flex items-center justify-between border-b border-gray-200 pb-2">
          <span class="font-sans font-bold text-gray-700">3rd XI</span>
          <span class="font-sans font-bold text-luhc-red">Tue & Thu Evenings</span>
        </div>
      </div>

      <h3 class="mb-4 font-display text-2xl font-bold text-luhc-dark uppercase">Kit Colors</h3>
      <ul class="mb-6 space-y-2 text-sm font-light text-gray-600">
        <li><strong class="text-luhc-dark">Home:</strong> Red Top, Black Shorts, Red Socks</li>
        <li><strong class="text-luhc-dark">Away:</strong> Red Top, Black Shorts, Black Socks</li>
      </ul>
    </div>
  </div>

  <section data-aos="fade-up">
    <div class="mb-16 text-center">
      <h2 class="font-display text-4xl font-bold text-luhc-dark uppercase">The Squads</h2>
    </div>

    <div class="space-y-16">
      {#each teams as team (team.name + team.league)}
        <div
          class="group flex flex-col overflow-hidden border border-gray-100 bg-white shadow-lg lg:flex-row"
        >
          <div class="relative h-64 overflow-hidden lg:h-auto lg:w-2/5">
            <img
              src={team.photo}
              alt={team.name}
              class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              class="absolute inset-0 bg-luhc-red/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            ></div>
          </div>

          <div class="relative flex flex-col justify-center p-8 lg:w-3/5 lg:p-12">
            <div
              class="absolute top-0 left-0 h-full w-1 bg-gray-100 transition-colors duration-300 group-hover:bg-luhc-red"
            ></div>

            <h3 class="mb-2 font-display text-3xl font-bold text-luhc-dark uppercase">
              {team.name}
            </h3>
            <p class="mb-6 font-sans text-xs font-bold tracking-widest text-luhc-red uppercase">
              {team.league}
            </p>

            <div class="mb-6 grid grid-cols-2 gap-4 text-sm">
              <div>
                <span class="block text-xs font-bold tracking-wider text-gray-400 uppercase"
                  >Captain</span
                >
                <span class="font-display text-lg font-medium text-luhc-dark">{team.captain}</span>
              </div>
              <div>
                <span class="block text-xs font-bold tracking-wider text-gray-400 uppercase"
                  >Vice Captain</span
                >
                <span class="font-display text-lg font-medium text-luhc-dark">{team.vice}</span>
              </div>
            </div>

            <blockquote
              class="border-l-2 border-gray-200 pl-4 font-sans font-light text-gray-500 italic"
            >
              "{team.quote ?? ''}"
            </blockquote>
          </div>
        </div>
      {/each}
    </div>
  </section>

  <section class="mt-24 border-t border-gray-100 py-12 text-center">
    <h2 class="mb-6 font-display text-4xl font-bold uppercase">Join The Women's Club</h2>
    <a
      href={resolve('/contact-us')}
      class="inline-block transform bg-luhc-red px-10 py-4 font-display font-bold tracking-widest text-white uppercase shadow-lg transition-colors hover:-translate-y-1 hover:bg-luhc-dark"
    >
      Get Involved
    </a>
  </section>
</div>
