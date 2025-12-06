<script>
  import WomensHero from "$lib/images/pages/womens/womens-hero.webp?enhanced";
  import OnesPhoto from "$lib/images/pages/womens/womens-ones.avif?enhanced";
  import TwosPhoto from "$lib/images/pages/womens/womens-twos.avif?enhanced";
  import ThreesPhoto from "$lib/images/pages/womens/womens-threes.avif?enhanced";

  const teams = [
    {
      name: "LUWHC 1st XI",
      photo: OnesPhoto,
      league: "BUCS Northern Tier 2A / North West Women's Division 1",
      captain: "Kiah Bardouille-Lewis",
      vice: "Lucy Bridges",
      quote: "The team is hardworking, motivated and aspirational. We are a supportive and enthusiastic team who love a challenge and I believe this season could be a very successful one!",
    },
    {
      name: "LUWHC 2nd XI",
      photo: TwosPhoto,
      league: "BUCS Northern Tier 3A",
      captain: "Katie Little & Nat Kyte",
      vice: "Co-Captains",
      quote: "Us 2s are a friendly bunch and are very encouraging of each other both on and off the pitch. This year we want to hit the ground running and start rebuilding upon skills and fitness.",
    },
    {
      name: "LUWHC 3rd XI",
      photo: ThreesPhoto,
      league: "North West Women's Division 5 North Central",
      captain: "Grace Puckey",
      vice: "Cat Prince",
      quote: "We always strive to make the 3s a friendly team who gel really well. We're focusing on fitness and skill a bit more this year, aiming for the promotion we missed by just 2 points last year!",
    }
  ];
</script>

<svelte:head>
  <title>Women's Club | Lancaster University Hockey Club</title>
</svelte:head>

<section class="relative h-[60vh] w-full overflow-hidden bg-luhc-dark">
  <enhanced:img
    src={WomensHero}
    alt="Women's Club Hero"
    class="absolute inset-0 w-full h-full object-cover object-center opacity-70"
  />
  <div class="absolute inset-0 bg-gradient-to-t from-luhc-dark via-transparent to-transparent"></div>
  
  <div class="absolute inset-0 flex flex-col justify-center items-center text-center px-4" data-aos="fade-in">
    <h1 class="font-display text-6xl md:text-8xl font-bold text-white uppercase tracking-tighter drop-shadow-2xl mb-4">
      Women's Club
    </h1>
    <p class="font-sans text-xl md:text-2xl text-white/90 font-light max-w-2xl">
      Lancaster University Women's Hockey Club
    </p>
  </div>
</section>

<div class="max-w-7xl mx-auto px-6 py-20 text-gray-900">
  
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24" data-aos="fade-up">
    <div>
      <h2 class="font-display uppercase text-4xl font-bold text-luhc-dark mb-6">About LUWHC</h2>
      <div class="h-1 w-20 bg-luhc-red mb-8"></div>
      <div class="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
        <p>LUWHC is a friendly and supportive community made up of three competitive teams and a development squad. We compete in BUCS leagues on Wednesdays and local Saturday leagues.</p>
        <p>More than just a team, we are a family. We pride ourselves on creating an inclusive environment where you can find friends and memories for life.</p>
      </div>
    </div>

    <div class="bg-gray-50 border border-gray-100 p-8 shadow-sm">
      <h3 class="font-display uppercase text-2xl font-bold mb-6 text-luhc-dark">Training Schedule</h3>
      <div class="space-y-4 mb-8 text-sm">
        <div class="flex justify-between items-center border-b border-gray-200 pb-2">
          <span class="font-sans font-bold text-gray-700">1st & 2nd XI</span>
          <span class="font-sans text-luhc-red font-bold">Mon & Thu Evenings</span>
        </div>
        <div class="flex justify-between items-center border-b border-gray-200 pb-2">
          <span class="font-sans font-bold text-gray-700">3rd XI</span>
          <span class="font-sans text-luhc-red font-bold">Tue & Thu Evenings</span>
        </div>
      </div>
      
      <h3 class="font-display uppercase text-2xl font-bold mb-4 text-luhc-dark">Kit Colors</h3>
      <ul class="space-y-2 text-gray-600 font-light mb-6 text-sm">
        <li><strong class="text-luhc-dark">Home:</strong> Red Top, Black Shorts, Red Socks</li>
        <li><strong class="text-luhc-dark">Away:</strong> Red Top, Black Shorts, Black Socks</li>
      </ul>
    </div>
  </div>

  <section data-aos="fade-up">
    <div class="text-center mb-16">
      <h2 class="font-display uppercase text-4xl font-bold text-luhc-dark">The Squads</h2>
    </div>

    <div class="space-y-16">
      {#each teams as team}
        <div class="flex flex-col lg:flex-row bg-white border border-gray-100 shadow-lg overflow-hidden group">
          
          <div class="lg:w-2/5 relative overflow-hidden h-64 lg:h-auto">
            <enhanced:img src={team.photo} alt={team.name} class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div class="absolute inset-0 bg-luhc-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <div class="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center relative">
            <div class="absolute top-0 left-0 w-1 h-full bg-gray-100 group-hover:bg-luhc-red transition-colors duration-300"></div>
            
            <h3 class="font-display uppercase text-3xl font-bold text-luhc-dark mb-2">{team.name}</h3>
            <p class="font-sans text-xs uppercase tracking-widest text-luhc-red font-bold mb-6">{team.league}</p>
            
            <div class="grid grid-cols-2 gap-4 mb-6 text-sm">
              <div>
                <span class="block text-gray-400 uppercase text-xs font-bold tracking-wider">Captain</span>
                <span class="font-display text-lg font-medium text-luhc-dark">{team.captain}</span>
              </div>
              <div>
                <span class="block text-gray-400 uppercase text-xs font-bold tracking-wider">Vice Captain</span>
                <span class="font-display text-lg font-medium text-luhc-dark">{team.vice}</span>
              </div>
            </div>

            <blockquote class="font-sans italic text-gray-500 font-light border-l-2 border-gray-200 pl-4">
              "{team.quote}"
            </blockquote>
          </div>

        </div>
      {/each}
    </div>
  </section>

  <section class="mt-24 text-center py-12 border-t border-gray-100">
    <h2 class="font-display uppercase text-4xl font-bold mb-6">Join The Women's Club</h2>
    <a href="/contact-us" class="inline-block bg-luhc-red text-white font-display uppercase font-bold tracking-widest px-10 py-4 shadow-lg hover:bg-luhc-dark transition-colors transform hover:-translate-y-1">
      Get Involved
    </a>
  </section>

</div>