<script lang="ts">
  import { resolve } from '$app/paths';
  import CaptainsHero from '$lib/images/pages/captains/captains-hero.webp';

  const captains = [
    { role: "Men's 1s Captain", name: 'Victor Vankelegom', photo: '' },
    { role: "Men's 1s Vice", name: 'Felix Woods', photo: '' },
    { role: "Women's 1s Captain", name: 'Kiah Bardouille-Lewis', photo: '' },
    { role: "Women's 1s Vice", name: 'Lucy Bridges', photo: '' },
    { role: "Men's 2s Captain", name: 'Samuel Choi', photo: '' },
    { role: "Men's 2s Vice", name: 'Will Mallik', photo: '' },
    { role: "Women's 2s Co-Captain", name: 'Katie Little', photo: '' },
    { role: "Women's 2s Co-Captain", name: 'Nat Kyte', photo: '' },
    { role: "Men's 3s Captain", name: 'Matt Grimshaw', photo: '' },
    { role: "Men's 3s Vice", name: 'Tom Baker', photo: '' },
    { role: "Women's 3s Captain", name: 'Grace Puckey', photo: '' },
    { role: "Women's 3s Vice", name: 'Cat Prince', photo: '' },
    { role: 'Dev Captain', name: 'Jemma Louise', photo: '' },
    { role: 'Dev Captain', name: 'George Turner', photo: '' },
    { role: 'Indoor Captain', name: 'Alex Potts', photo: '' },
  ];
</script>

<svelte:head>
  <title>Team Captains | Lancaster University Hockey Club</title>
</svelte:head>

<section class="relative h-[50vh] w-full overflow-hidden bg-luhc-dark">
  <img
    src={CaptainsHero}
    alt="Captains Hero"
    class="absolute inset-0 h-full w-full object-cover object-top opacity-50"
  />
  <div class="absolute inset-0 bg-linear-to-t from-luhc-dark via-transparent to-transparent"></div>
  <div class="absolute bottom-0 left-0 w-full p-8 md:p-16" data-aos="fade-up">
    <span class="mb-2 block font-display text-sm font-bold tracking-widest text-luhc-red uppercase"
      >On The Pitch</span
    >
    <h1 class="font-display text-5xl font-bold tracking-tighter text-white uppercase md:text-7xl">
      Team Captains
    </h1>
  </div>
</section>

<div class="mx-auto max-w-7xl px-6 py-20">
  <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {#each captains as cap (cap.name + cap.role)}
      <div
        class="group transform overflow-hidden border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-luhc-red/20 hover:shadow-xl"
        data-aos="fade-up"
      >
        <div class="relative aspect-4/5 w-full overflow-hidden bg-gray-100">
          {#if cap.photo}
            <img
              src={cap.photo}
              alt={cap.name}
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          {:else}
            <div class="absolute inset-0 flex items-center justify-center text-gray-300">
              <svg class="h-24 w-24" fill="currentColor" viewBox="0 0 24 24"
                ><path
                  d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                /></svg
              >
            </div>
          {/if}
          <div
            class="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          ></div>
        </div>

        <div class="relative p-6">
          <div
            class="absolute top-0 left-0 h-1 w-full bg-gray-100 transition-colors duration-300 group-hover:bg-luhc-red"
          ></div>
          <h3
            class="mb-1 font-display text-xl font-bold text-luhc-dark uppercase transition-colors group-hover:text-luhc-red"
          >
            {cap.name}
          </h3>
          <p class="font-sans text-xs tracking-widest text-gray-500 uppercase">{cap.role}</p>
        </div>
      </div>
    {/each}
  </div>

  <div class="mt-16 border border-gray-100 bg-gray-50 p-8 text-center">
    <p class="mb-4 font-display text-xl font-bold text-luhc-dark uppercase">
      Looking for the Committee?
    </p>
    <a
      href={resolve('/about/meet-the-exec')}
      class="inline-block text-sm font-bold tracking-widest text-luhc-red uppercase decoration-2 underline-offset-4 hover:underline"
    >
      View Executive Team &rarr;
    </a>
  </div>
</div>
