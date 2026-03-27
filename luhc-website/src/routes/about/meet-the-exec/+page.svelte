<script lang="ts">
  import { resolve } from '$app/paths';
  import ExecHero from '$lib/images/pages/exec/exec-hero-2.webp';

  const execs = [
    { role: 'Chairperson', name: 'Hannah Bird', photo: '' },
    { role: 'Vice-Chairwoman', name: 'Heledd Owen', photo: '' },
    { role: 'Vice-Chairman', name: 'Josh Carr-Yetzes', photo: '' },
    { role: 'Treasurer', name: 'Harry Tallents', photo: '' },
    { role: "Men's Publicity", name: 'Oliver Swindles', photo: '' },
    { role: "Women's Publicity", name: 'Lucy Bridges', photo: '' },
    { role: 'Charity & Inclusivity', name: 'Abi Fitzpatrick', photo: '' },
    { role: 'Health & Safety', name: 'Euan Ingleby', photo: '' },
    { role: "Men's Wellbeing", name: 'Olly Woodhouse', photo: '' },
    { role: "Women's Wellbeing", name: 'Autumn Head', photo: '' },
    { role: 'Dev Squad Coach', name: 'Rosie Lock', photo: '' },
    { role: 'Dev Squad Coach', name: 'Alex Delaney', photo: '' },
    { role: "Men's Social Sec", name: 'Marcus Allan', photo: '' },
    { role: "Women's Social Sec", name: 'Isabel Robinson', photo: '' },
    { role: 'Social Officer', name: 'George Turner', photo: '' },
    { role: 'Social Officer', name: 'Grace Puckey', photo: '' },
    { role: 'Social Officer', name: 'Owen Price', photo: '' },
    { role: 'Social Officer', name: 'Daisy Vose', photo: '' },
  ];
</script>

<svelte:head>
  <title>Executive Committee | Lancaster University Hockey Club</title>
</svelte:head>

<section class="relative h-[50vh] w-full overflow-hidden bg-luhc-dark">
  <img
    src={ExecHero}
    alt="Exec Team"
    class="absolute inset-0 h-full w-full object-cover object-top opacity-50"
  />
  <div class="absolute inset-0 bg-linear-to-t from-luhc-dark via-transparent to-transparent"></div>
  <div class="absolute bottom-0 left-0 w-full p-8 md:p-16" data-aos="fade-up">
    <span class="mb-2 block font-display text-sm font-bold tracking-widest text-luhc-red uppercase"
      >Leadership</span
    >
    <h1 class="font-display text-5xl font-bold tracking-tighter text-white uppercase md:text-7xl">
      The Executive Committee
    </h1>
  </div>
</section>

<div class="mx-auto max-w-7xl px-6 py-20">
  <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {#each execs as person (person.name + person.role)}
      <div
        class="group transform overflow-hidden border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-luhc-red/20 hover:shadow-xl"
        data-aos="fade-up"
      >
        <div class="relative aspect-4/5 w-full overflow-hidden bg-gray-100">
          {#if person.photo}
            <img
              src={person.photo}
              alt={person.name}
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
            {person.name}
          </h3>
          <p class="font-sans text-xs tracking-widest text-gray-500 uppercase">{person.role}</p>
        </div>
      </div>
    {/each}
  </div>

  <div class="mt-16 border border-gray-100 bg-gray-50 p-8 text-center">
    <p class="mb-4 font-display text-xl font-bold text-luhc-dark uppercase">
      Looking for Team Captains?
    </p>
    <a
      href={resolve('/about/meet-the-captains')}
      class="inline-block text-sm font-bold tracking-widest text-luhc-red uppercase decoration-2 underline-offset-4 hover:underline"
    >
      View Captains Roster &rarr;
    </a>
  </div>
</div>
