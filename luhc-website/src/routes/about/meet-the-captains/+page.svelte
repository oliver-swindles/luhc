<script>
  import CaptainsHero from "$lib/images/pages/captains/captains-hero.webp?enhanced";

  const captains = [
    { role: "Men's 1s Captain", name: 'Victor Vankelegom', photo: '' },
    { role: "Men's 1s Vice", name: 'Felix Woods', photo: '' },
    { role: "Women's 1s Captain", name: 'Kiah Bardouille-Lewis', photo: '' },
    { role: "Women's 1s Vice", name: 'Lucy Bridges', photo: ''},
    { role: "Men's 2s Captain", name: 'Samuel Choi', photo: '' },
    { role: "Men's 2s Vice", name: 'Will Mallik', photo: '' },
    { role: "Women's 2s Co-Captain", name: 'Katie Little', photo: '' },
    { role: "Women's 2s Co-Captain", name: 'Nat Kyte', photo: '' },
    { role: "Men's 3s Captain", name: 'Matt Grimshaw', photo: '' },
    { role: "Men's 3s Vice", name: 'Tom Baker', photo: '' },
    { role: "Women's 3s Captain", name: 'Grace Puckey', photo: '' },
    { role: "Women's 3s Vice", name: 'Cat Prince', photo: '' },
    { role: "Indoor Captain", name: 'Alex Potts', photo: '' },
    { role: "Dev Captain", name: 'Jemma Louise', photo: '' },
    { role: "Dev Captain", name: 'George Turner', photo: '' }
  ];
</script>

<svelte:head>
  <title>Team Captains | Lancaster University Hockey Club</title>
</svelte:head>

<section class="relative h-[50vh] w-full overflow-hidden bg-luhc-dark">
  <enhanced:img 
    src={CaptainsHero} 
    alt="Captains Hero" 
    class="absolute inset-0 w-full h-full object-cover object-top opacity-50"
  />
  <div class="absolute inset-0 bg-gradient-to-t from-luhc-dark via-transparent to-transparent"></div>
  <div class="absolute bottom-0 left-0 w-full p-8 md:p-16" data-aos="fade-up">
    <span class="font-display text-luhc-red uppercase tracking-widest font-bold text-sm mb-2 block">On The Pitch</span>
    <h1 class="font-display text-5xl md:text-7xl font-bold text-white uppercase tracking-tighter">Team Captains</h1>
  </div>
</section>

<div class="max-w-7xl mx-auto px-6 py-20">
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    {#each captains as cap}
      <div class="group bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-luhc-red/20 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden" data-aos="fade-up">
        
        <div class="w-full aspect-[4/5] bg-gray-100 relative overflow-hidden">
          {#if cap.photo}
            <img src={cap.photo} alt={cap.name} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          {:else}
            <div class="absolute inset-0 flex items-center justify-center text-gray-300">
              <svg class="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
            </div>
          {/if}
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div class="p-6 relative">
          <div class="absolute top-0 left-0 w-full h-1 bg-gray-100 group-hover:bg-luhc-red transition-colors duration-300"></div>
          <h3 class="font-display uppercase text-xl font-bold text-luhc-dark group-hover:text-luhc-red transition-colors mb-1">{cap.name}</h3>
          <p class="font-sans text-xs uppercase tracking-widest text-gray-500">{cap.role}</p>
        </div>
      </div>
    {/each}
  </div>

  <div class="mt-16 p-8 bg-gray-50 text-center border border-gray-100">
    <p class="font-display uppercase text-xl font-bold text-luhc-dark mb-4">Looking for the Committee?</p>
    <a href="/about/meet-the-exec" class="inline-block text-luhc-red font-bold uppercase tracking-widest text-sm hover:underline decoration-2 underline-offset-4">
      View Executive Team &rarr;
    </a>
  </div>
</div>