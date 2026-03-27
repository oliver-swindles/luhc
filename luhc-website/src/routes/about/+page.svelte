<script lang="ts">
  import { resolve } from '$app/paths';
  import AboutHero from '$lib/images/pages/about/about-hero-2.webp?enhanced';
  import MensClub from '$lib/images/pages/about/mens-club-3.jpg?enhanced';
  import WomensClub from '$lib/images/pages/about/womens-club-3.webp?enhanced';
  import DevSquad from '$lib/images/pages/about/dev-squad.avif';
  import IndoorHockey from '$lib/images/pages/about/indoor-hockey-2.webp?enhanced';

  const teamLinks = [
    { title: "Men's Club", href: '/teams/mens-club', img: MensClub },
    { title: "Women's Club", href: '/teams/womens-club', img: WomensClub },
    { title: 'Dev Squad', href: '/teams/development-squad', img: DevSquad },
    { title: 'Indoor Hockey', href: '/teams/indoor-hockey', img: IndoorHockey },
  ] as const;
</script>

<svelte:head>
  <title>About Us | Lancaster University Hockey Club</title>
</svelte:head>

<section class="relative h-[60vh] w-full overflow-hidden bg-luhc-dark">
  <enhanced:img
    src={AboutHero}
    alt="LUHC Team Huddle"
    class="absolute inset-0 h-full w-full object-cover object-center opacity-60"
  />
  <div class="absolute inset-0 bg-linear-to-t from-luhc-dark via-transparent to-black/30"></div>

  <div
    class="absolute inset-0 flex flex-col items-center justify-center px-4 text-center"
    data-aos="fade-in"
  >
    <!-- <span class="font-display uppercase tracking-[0.3em] text-luhc-red font-bold mb-4 text-sm md:text-base">Est. 1964</span> -->
    <h1
      class="mb-6 font-display text-6xl font-bold tracking-tighter text-white uppercase drop-shadow-xl md:text-8xl"
    >
      Our Club
    </h1>
    <div class="mb-8 h-1 w-24 bg-luhc-red"></div>
    <p
      class="max-w-3xl font-sans text-lg leading-relaxed font-light text-gray-200 drop-shadow-md md:text-2xl"
    >
      We take pride in offering both competitive teams and a non-competitive development squad.
      Whoever you are, there is a place for you at LUHC.
    </p>
  </div>
</section>

<div class="bg-white text-luhc-dark">
  <section class="mx-auto max-w-7xl px-6 py-20" data-aos="fade-up">
    <div class="mb-16 text-center">
      <h2 class="mb-4 font-display text-4xl font-bold uppercase md:text-5xl">Mission & Values</h2>
      <div class="mx-auto h-px w-full max-w-50 bg-gray-200"></div>
    </div>

    <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
      <div
        class="border-l-4 border-luhc-red bg-gray-50 p-8 shadow-sm transition-shadow hover:shadow-md"
        data-aos="fade-up"
        data-aos-delay="0"
      >
        <h3 class="mb-3 font-display text-2xl font-bold text-luhc-dark uppercase">Inclusivity</h3>
        <p class="leading-relaxed font-light text-gray-600">
          We welcome players of all backgrounds and skill levels. From complete beginners to
          seasoned pros, we foster a supportive environment for everyone.
        </p>
      </div>
      <div
        class="border-l-4 border-luhc-red bg-gray-50 p-8 shadow-sm transition-shadow hover:shadow-md"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h3 class="mb-3 font-display text-2xl font-bold text-luhc-dark uppercase">Excellence</h3>
        <p class="leading-relaxed font-light text-gray-600">
          On and off the pitch, we aim to excel. Through rigorous training, competitive spirit, and
          club development, we push for the win.
        </p>
      </div>
      <div
        class="border-l-4 border-luhc-red bg-gray-50 p-8 shadow-sm transition-shadow hover:shadow-md"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h3 class="mb-3 font-display text-2xl font-bold text-luhc-dark uppercase">Community</h3>
        <p class="leading-relaxed font-light text-gray-600">
          Beyond hockey, we build lasting friendships. Our socials, charity events, and traditions
          create a family away from home.
        </p>
      </div>
    </div>
  </section>

  <section class="bg-luhc-dark px-6 py-24 text-white" data-aos="fade-up">
    <div class="mx-auto max-w-7xl">
      <div class="mb-12 flex items-center gap-4">
        <div class="h-8 w-1 bg-luhc-red"></div>
        <h2 class="font-display text-4xl font-bold tracking-tight uppercase">Our Squads</h2>
      </div>

      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {#each teamLinks as team (team.title + team.href)}
          <a
            href={resolve(team.href)}
            class="group relative block aspect-3/4 overflow-hidden border border-white/10 bg-gray-900 transition-colors hover:border-luhc-red"
          >
            <enhanced:img
              src={team.img}
              alt={team.title}
              class="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-100"
            />
            <div
              class="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-90"
            ></div>

            <div class="absolute bottom-0 left-0 w-full p-6">
              <h3
                class="mb-2 translate-y-2 font-display text-2xl font-bold text-white uppercase transition-transform duration-300 group-hover:translate-y-0"
              >
                {team.title}
              </h3>
              <div class="h-1 w-0 bg-luhc-red transition-all duration-500 group-hover:w-full"></div>
            </div>
          </a>
        {/each}
      </div>
    </div>
  </section>

  <section class="mx-auto max-w-5xl px-6 py-24 text-center" data-aos="fade-up">
    <h2 class="mb-6 font-display text-4xl font-bold text-luhc-dark uppercase">Beyond The Pitch</h2>
    <p class="mx-auto mb-10 max-w-2xl text-xl leading-relaxed font-light text-gray-600">
      From weekly socials and formal dinners to charity fundraisers, our vibrant calendar ensures
      there's always something happening.
    </p>
    <a
      href={resolve('/socials')}
      class="inline-block border-2 border-luhc-dark px-8 py-3 font-display text-sm font-bold tracking-widest text-luhc-dark uppercase transition-colors duration-300 hover:bg-luhc-dark hover:text-white"
    >
      View Socials
    </a>
  </section>

  <section class="bg-luhc-red px-6 py-20 text-center text-white">
    <div class="mx-auto max-w-4xl" data-aos="fade-in">
      <h2 class="mb-6 font-display text-5xl font-bold uppercase">Ready to Play?</h2>
      <p class="mb-10 font-sans text-lg text-white/90">
        Join one of the largest societies at Lancaster.
      </p>
      <a
        href={resolve('/contact-us')}
        class="inline-block transform bg-white px-10 py-4 font-display font-bold tracking-widest text-luhc-red uppercase shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-gray-100"
      >
        Join The Club
      </a>
    </div>
  </section>
</div>
