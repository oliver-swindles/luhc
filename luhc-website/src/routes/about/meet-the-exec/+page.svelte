<script>
  import ExecHero from "$lib/images/pages/exec/exec-hero-2.webp?enhanced";

  const execs = [
    { role: "Chairperson", name: 'Hannah Bird', photo: '' },
    { role: "Vice-Chairwoman", name: 'Heledd Owen', photo: '' },
    { role: "Vice-Chairman", name: 'Josh Carr-Yetzes', photo: '' },
    { role: "Treasurer", name: 'Harry Tallents', photo: '' },
    { role: "Men's Publicity", name: 'Oliver Swindles', photo: '' },
    { role: "Women's Publicity", name: 'Lucy Bridges', photo: '' },
    { role: "Charity & Inclusivity", name: 'Abi Fitzpatrick', photo: '' },
    { role: "Health & Safety", name: 'Euan Ingleby', photo: '' },
    { role: "Men's Wellbeing", name: 'Olly Woodhouse', photo: ''},
    { role: "Women's Wellbeing", name: 'Autumn Head', photo: ''},
    { role: "Dev Officer", name: 'Rosie Lock', photo: '' },
    { role: "Dev Officer", name: 'Alex Delaney', photo: '' },
    { role: "Men's Social Sec", name: 'Marcus Allan', photo: '' },
    { role: "Women's Social Sec", name: 'Isabel Robinson', photo: '' },
    { role: "Social Officer", name: 'George Turner', photo: '' },
    { role: "Social Officer", name: 'Grace Puckey', photo: '' },
    { role: "Social Officer", name: 'Owen Price', photo: '' },
    { role: "Social Officer", name: 'Daisy Vose', photo: '' }
  ];
</script>

<svelte:head>
  <title>Executive Committee | Lancaster University Hockey Club</title>
</svelte:head>

<section class="relative h-[50vh] w-full overflow-hidden bg-luhc-dark">
  <enhanced:img 
    src={ExecHero} 
    alt="Exec Team" 
    class="absolute inset-0 w-full h-full object-cover object-top opacity-50"
  />
  <div class="absolute inset-0 bg-linear-to-t from-luhc-dark via-transparent to-transparent"></div>
  <div class="absolute bottom-0 left-0 w-full p-8 md:p-16" data-aos="fade-up">
    <span class="font-display text-luhc-red uppercase tracking-widest font-bold text-sm mb-2 block">Leadership</span>
    <h1 class="font-display text-5xl md:text-7xl font-bold text-white uppercase tracking-tighter">The Executive Committee</h1>
  </div>
</section>

<div class="max-w-7xl mx-auto px-6 py-20">
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    {#each execs as person}
      <div class="group bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-luhc-red/20 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden" data-aos="fade-up">
        
        <div class="w-full aspect-4/5 bg-gray-100 relative overflow-hidden">
          {#if person.photo}
            <img src={person.photo} alt={person.name} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          {:else}
            <div class="absolute inset-0 flex items-center justify-center text-gray-300">
              <svg class="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
            </div>
          {/if}
          <div class="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div class="p-6 relative">
          <div class="absolute top-0 left-0 w-full h-1 bg-gray-100 group-hover:bg-luhc-red transition-colors duration-300"></div>
          <h3 class="font-display uppercase text-xl font-bold text-luhc-dark group-hover:text-luhc-red transition-colors mb-1">{person.name}</h3>
          <p class="font-sans text-xs uppercase tracking-widest text-gray-500">{person.role}</p>
        </div>
      </div>
    {/each}
  </div>

  <div class="mt-16 p-8 bg-gray-50 text-center border border-gray-100">
    <p class="font-display uppercase text-xl font-bold text-luhc-dark mb-4">Looking for Team Captains?</p>
    <a href="/about/meet-the-captains" class="inline-block text-luhc-red font-bold uppercase tracking-widest text-sm hover:underline decoration-2 underline-offset-4">
      View Captains Roster &rarr;
    </a>
  </div>
</div>