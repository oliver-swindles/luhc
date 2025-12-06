<script>
  import MensHero from "$lib/images/pages/mens/mens-hero.jpg?enhanced";
  import OnesPhoto from "$lib/images/pages/mens/mens-ones.avif?enhanced";
  import TwosPhoto from "$lib/images/pages/mens/mens-twos.avif?enhanced";
  import ThreesPhoto from "$lib/images/pages/mens/mens-threes.avif?enhanced";

  const teams = [
    {
      name: "LUMHC 1st XI",
      photo: OnesPhoto,
      league: "BUCS Northern Tier 1A / North West Men's Division 2",
      captain: "Victor Vankelegom",
      vice: "Felix Woods",
      quote: "Our second season in BUCS 1A will be an incredibly tough test, but we are looking forward to rising to it. We aim to finish at the top of the table and ultimately win Roses.",
    },
    {
      name: "LUMHC 2nd XI",
      photo: TwosPhoto,
      league: "BUCS Northern Tier 3A",
      captain: "Samuel Choi",
      vice: "Will Mallik",
      quote: "We have a very real chance of gaining promotion, having a good run in the cup, and winning Roses. The atmosphere in our team is welcoming to players who want to enjoy competitive hockey.",
    },
    {
      name: "LUMHC 3rd XI",
      photo: ThreesPhoto,
      league: "North West Men's Division 4 North",
      captain: "Matt Grimshaw",
      vice: "Tom Baker",
      quote: "We won promotion last year so the new league will be an exciting challenge. I want to continue to develop the fun environment of the 3s and create a cohesive team.",
    }
  ];
</script>

<svelte:head>
  <title>Men's Club | Lancaster University Hockey Club</title>
</svelte:head>

<section class="relative h-[60vh] w-full overflow-hidden bg-luhc-dark">
  <enhanced:img
    src={MensHero}
    alt="Men's Club Hero"
    class="absolute inset-0 w-full h-full object-cover object-center opacity-70"
  />
  <div class="absolute inset-0 bg-gradient-to-t from-luhc-dark via-transparent to-transparent"></div>
  
  <div class="absolute inset-0 flex flex-col justify-center items-center text-center px-4" data-aos="fade-in">
    <h1 class="font-display text-6xl md:text-8xl font-bold text-white uppercase tracking-tighter drop-shadow-2xl mb-4">
      Men's Club
    </h1>
    <p class="font-sans text-xl md:text-2xl text-white/90 font-light max-w-2xl">
      Lancaster University Men's Hockey Club
    </p>
  </div>
</section>

<div class="max-w-7xl mx-auto px-6 py-20 text-gray-900">
  
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24" data-aos="fade-up">
    <div>
      <h2 class="font-display uppercase text-4xl font-bold text-luhc-dark mb-6">About LUMHC</h2>
      <div class="h-1 w-20 bg-luhc-red mb-8"></div>
      <div class="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
        <p>We field three competitive teams in BUCS and Saturday leagues, offering a level for everyone. From elite performance in the 1st XI to the competitive spirit of the 3rd XI, we train hard and play harder.</p>
        <p>Off the pitch, we are a brotherhood. Whether you play every week or join as a social member, you become part of a community that lasts a lifetime.</p>
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
    <h2 class="font-display uppercase text-4xl font-bold mb-6">Join The Men's Club</h2>
    <a href="/contact-us" class="inline-block bg-luhc-red text-white font-display uppercase font-bold tracking-widest px-10 py-4 shadow-lg hover:bg-luhc-dark transition-colors transform hover:-translate-y-1">
      Get Involved
    </a>
  </section>

</div>