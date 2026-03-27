<script lang="ts">
  import { resolve } from '$app/paths';
  import RosesHero from '$lib/images/pages/roses/roses-hero.webp?enhanced';
  import RosesCountdown from '$lib/components/RosesCountdown.svelte';
</script>

<svelte:head>
  <title>Roses | Lancaster University Hockey Club</title>
  <meta
    name="description"
    content="Roses is Europe's largest inter-varsity sports tournament between Lancaster and York. View LUHC highlights and match history."
  />
</svelte:head>

<section class="relative h-[70vh] w-full overflow-hidden bg-luhc-dark">
  <enhanced:img
    src={RosesHero}
    alt="Roses Hockey Action"
    class="absolute inset-0 h-full w-full object-cover object-center opacity-60"
  />
  <div class="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-black/0"></div>

  <div
    class="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
    data-aos="fade-in"
  >
    <span
      class="mb-4 animate-pulse font-display text-sm font-bold tracking-[0.4em] text-white uppercase md:text-base"
      >Varsity</span
    >
    <h1
      class="mb-6 font-display text-7xl leading-none font-bold tracking-tighter text-white uppercase drop-shadow-2xl md:text-9xl"
    >
      Roses
    </h1>
    <div class="mb-8 h-2 w-32 bg-white"></div>
    <p class="max-w-3xl font-sans text-xl font-light text-white drop-shadow-md md:text-3xl">
      Europe's Largest Inter-Varsity Sports Tournament
    </p>
  </div>
</section>

<RosesCountdown />

<div class="bg-white text-luhc-dark">
  <section class="mx-auto max-w-4xl px-6 py-20 text-center" data-aos="fade-up">
    <h2 class="mb-8 font-display text-4xl font-bold text-luhc-red uppercase">Why It Matters</h2>
    <p class="mb-8 text-xl leading-relaxed font-light text-gray-600">
      Roses is the finale of the LUHC calendar. After a season of grit and training, it's the
      ultimate showdown against York. Six outdoor games, four indoor clashes, and the development
      squad exhibition match.
    </p>

    <div class="flex flex-col items-center gap-6">
      <a
        href="https://roseslive.co.uk/"
        target="_blank"
        rel="noopener noreferrer"
        class="group inline-flex items-center gap-2 bg-luhc-red px-8 py-3 font-display font-bold tracking-wide text-white uppercase shadow-md transition-colors duration-300 hover:bg-luhc-dark"
      >
        <span>Visit RosesLive.co.uk</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="h-5 w-5 transition-transform group-hover:translate-x-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
          />
        </svg>
      </a>

      <a
        href="https://www.lancaster.ac.uk/sport/roses/"
        target="_blank"
        rel="noopener noreferrer"
        class="mt-4 border-b border-transparent pb-0.5 font-sans text-xs text-gray-400 transition-colors hover:border-luhc-red hover:text-luhc-red"
      >
        View More Tournament Details on lancaster.ac.uk &rarr;
      </a>
    </div>
  </section>

  <section class="bg-gray-50 px-4 py-20">
    <div class="mx-auto max-w-7xl">
      <div class="mb-20" data-aos="fade-up">
        <div class="mb-8 flex items-center gap-4">
          <div class="h-8 w-1 bg-luhc-red"></div>
          <h2 class="font-display text-3xl font-bold uppercase md:text-4xl">1st XI Highlights</h2>
        </div>
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div class="aspect-video overflow-hidden rounded-sm bg-black shadow-xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube-nocookie.com/embed/D0kxPxzUJgI"
              title="YouTube video player"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
          <div class="aspect-video overflow-hidden rounded-sm bg-black shadow-xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube-nocookie.com/embed/YE8VG-8AUOI"
              title="YouTube video player"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      <div class="mb-20" data-aos="fade-up">
        <div class="mb-8 flex items-center gap-4">
          <div class="h-8 w-1 bg-luhc-red"></div>
          <h2 class="font-display text-3xl font-bold uppercase md:text-4xl">2nd XI Highlights</h2>
        </div>
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div class="aspect-video overflow-hidden rounded-sm bg-black shadow-xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube-nocookie.com/embed/-kkhnXNMLCo"
              title="YouTube video player"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
          <div class="aspect-video overflow-hidden rounded-sm bg-black shadow-xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube-nocookie.com/embed/CEdbo9gKSSs"
              title="YouTube video player"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      <div class="mb-20" data-aos="fade-up">
        <div class="mb-8 flex items-center gap-4">
          <div class="h-8 w-1 bg-luhc-red"></div>
          <h2 class="font-display text-3xl font-bold uppercase md:text-4xl">3rd XI Highlights</h2>
        </div>
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div class="aspect-video overflow-hidden rounded-sm bg-black shadow-xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube-nocookie.com/embed/erSmlugfESg"
              title="YouTube video player"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
          <div class="aspect-video overflow-hidden rounded-sm bg-black shadow-xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube-nocookie.com/embed/CDyEXxHycEg"
              title="YouTube video player"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      <div data-aos="fade-up">
        <div class="mb-8 flex items-center gap-4">
          <div class="h-8 w-1 bg-luhc-red"></div>
          <h2 class="font-display text-3xl font-bold uppercase md:text-4xl">Indoor Highlights</h2>
        </div>
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div class="aspect-video overflow-hidden rounded-sm bg-black shadow-xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube-nocookie.com/embed/7eyaLJZA3sU"
              title="YouTube video player"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
          <div class="aspect-video overflow-hidden rounded-sm bg-black shadow-xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube-nocookie.com/embed/n8Jj4okm0Hg"
              title="YouTube video player"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-luhc-dark px-6 py-24 text-center text-white">
    <h2 class="mb-6 font-display text-5xl font-bold uppercase">Make History</h2>
    <p class="mx-auto mb-10 max-w-2xl font-sans text-xl text-gray-400">
      Whether you're on the pitch or in the stands, every voice counts. Join us next year.
    </p>
    <a
      href={resolve('/contact-us')}
      class="inline-block transform bg-luhc-red px-10 py-4 font-display font-bold tracking-widest text-white uppercase shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-luhc-red"
    >
      Play for Lancaster
    </a>
  </section>
</div>
