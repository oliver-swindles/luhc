<script lang="ts">
  import { resolve } from '$app/paths';
  import IndoorHero from '$lib/images/pages/indoor/indoor-hero.jpg?enhanced';
  import Indoor1 from '$lib/images/pages/indoor/indoor-1.webp?enhanced';
  import Indoor2 from '$lib/images/pages/indoor/indoor-2.webp?enhanced';
  import Indoor3 from '$lib/images/pages/indoor/indoor-3.webp?enhanced';
  import Indoor4 from '$lib/images/pages/indoor/indoor-4.webp?enhanced';
  import Indoor5 from '$lib/images/pages/indoor/indoor-5.webp?enhanced';
  import Indoor6 from '$lib/images/pages/indoor/indoor-6.webp?enhanced';
  import Indoor7 from '$lib/images/pages/indoor/indoor-7.webp?enhanced';
  import Indoor8 from '$lib/images/pages/indoor/indoor-8.webp?enhanced';
  import Indoor9 from '$lib/images/pages/indoor/indoor-9.webp?enhanced';

  const gallery = [
    { src: Indoor1, alt: 'Indoor Hockey 1' },
    { src: Indoor2, alt: 'Indoor Hockey 2' },
    { src: Indoor3, alt: 'Indoor Hockey 3' },
    { src: Indoor4, alt: 'Indoor Hockey 4' },
    { src: Indoor5, alt: 'Indoor Hockey 5' },
    { src: Indoor6, alt: 'Indoor Hockey 6' },
    { src: Indoor7, alt: 'Indoor Hockey 7' },
    { src: Indoor8, alt: 'Indoor Hockey 8' },
    { src: Indoor9, alt: 'Indoor Hockey 9' },
  ];
</script>

<svelte:head>
  <title>Indoor Hockey | Lancaster University Hockey Club</title>
</svelte:head>

<section class="relative h-[60vh] w-full overflow-hidden bg-luhc-dark">
  <enhanced:img
    src={IndoorHero}
    alt="Indoor Hockey Action"
    class="absolute inset-0 h-full w-full object-cover object-center opacity-70"
  />
  <div class="absolute inset-0 bg-linear-to-t from-luhc-dark via-transparent to-transparent"></div>

  <div
    class="absolute inset-0 flex flex-col items-center justify-center px-4 text-center"
    data-aos="fade-in"
  >
    <h1
      class="font-display text-6xl font-bold tracking-tighter text-white uppercase drop-shadow-2xl md:text-8xl"
    >
      Indoor Hockey
    </h1>
    <span
      class="mt-4 rounded-full border border-white/20 bg-white/10 px-4 py-1 font-display text-sm font-bold tracking-widest text-luhc-red uppercase backdrop-blur-sm"
      >Fast • Intense • Technical</span
    >
  </div>
</section>

<div class="mx-auto max-w-7xl px-6 py-20 text-gray-900">
  <section class="mb-20 grid grid-cols-1 gap-12 lg:grid-cols-12" data-aos="fade-up">
    <div class="border-l-4 border-luhc-red bg-gray-50 p-10 shadow-sm lg:col-span-8">
      <h2 class="mb-6 font-display text-3xl font-bold text-luhc-dark uppercase">Captain's Brief</h2>
      <blockquote class="mb-6 font-sans text-xl leading-relaxed text-gray-600 italic">
        “Hi, I'm Kat, the Indoor Hockey Captain for the 2022/23 season! I'm really looking forward
        to stepping into this captain role and increasing participation in such a great part of the
        sport. I hope to lead our teams to another victory at Roses as well as new competitions that
        we intend to enter this year. I can't wait to get started and help those who aren't as
        experienced at indoor improve and enjoy the game as much as I do!”
      </blockquote>
      <div class="font-display text-sm font-bold tracking-widest text-luhc-red uppercase">
        - Kat Headings, Indoor Captain (2022/23)
      </div>
    </div>

    <div class="flex flex-col justify-center lg:col-span-4">
      <div class="bg-luhc-dark p-8 text-white shadow-xl">
        <h3 class="mb-4 font-display text-2xl font-bold text-luhc-red uppercase">Schedule</h3>
        <ul class="space-y-4 font-sans font-light">
          <li class="flex items-center gap-3">
            <span class="h-2 w-2 rounded-full bg-luhc-red"></span>
            <span>Sunday Mornings (Term 2)</span>
          </li>
          <li class="flex items-center gap-3">
            <span class="h-2 w-2 rounded-full bg-luhc-red"></span>
            <span>Sports Centre Hall 1</span>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <section data-aos="fade-up">
    <div class="mb-8 flex items-center gap-4">
      <div class="h-8 w-1 bg-luhc-red"></div>
      <h2 class="font-display text-4xl font-bold text-luhc-dark uppercase">The Arena</h2>
    </div>

    <div class="grid grid-cols-2 gap-4 md:grid-cols-3">
      {#each gallery as img (img.src)}
        <div class="group relative aspect-4/3 overflow-hidden rounded-sm bg-gray-900">
          <enhanced:img
            src={img.src}
            alt={img.alt}
            class="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-100"
          />
          <div
            class="absolute inset-0 bg-luhc-red/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          ></div>
        </div>
      {/each}
    </div>
  </section>

  <section class="mt-24 border-t border-gray-100 pt-16 text-center">
    <h2 class="mb-6 font-display text-4xl font-bold uppercase">Master The Indoor Game</h2>
    <p class="mx-auto mb-10 max-w-xl font-sans text-lg text-gray-500">
      Sharpen your skills in the fast-paced indoor format.
    </p>
    <a
      href={resolve('/contact-us')}
      class="inline-block transform bg-luhc-red px-10 py-4 font-display font-bold tracking-widest text-white uppercase shadow-lg transition-colors hover:-translate-y-1 hover:bg-luhc-dark"
    >
      Join Training
    </a>
  </section>
</div>
