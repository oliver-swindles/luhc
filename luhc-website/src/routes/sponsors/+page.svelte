<script>
  import SponsorsHero from "$lib/images/pages/sponsors/sponsors-hero-2.webp?enhanced";
  
  import YDLLogo from "$lib/images/sponsors/YDL.png?enhanced";
  import LA1Logo from "$lib/images/sponsors/la1.avif?enhanced";
  import BowerhamLogo from "$lib/images/sponsors/BowerhamHotel.jpg?enhanced";
  import GreensLogo from "$lib/images/sponsors/Greens.png?enhanced";

  const sponsors = [
    { logo: YDLLogo, name: 'Yellow Door Lets', desc: 'Student Accommodation Partner' },
    { logo: LA1Logo, name: 'LA1 Nightclub', desc: 'Official Social Venue' },
    { logo: BowerhamLogo, name: 'The Bowerham Hotel', desc: 'Match Day Teas' },
    { logo: GreensLogo, name: 'Greens Lancaster', desc: 'Sports Bar Partner' }
  ];
</script>

<svelte:head>
  <title>Sponsors | Lancaster University Hockey Club</title>
</svelte:head>

<section class="relative h-[50vh] w-full overflow-hidden bg-white">
  <enhanced:img 
    src={SponsorsHero} 
    alt="Sponsors Hero" 
    class="absolute inset-0 w-full h-full object-cover object-center opacity-90"
  />
  <div class="absolute inset-0 bg-luhc-dark/80"></div>
  
  <div class="absolute inset-0 flex flex-col justify-center items-center text-center px-6" data-aos="fade-in">
    <h1 class="font-display text-5xl md:text-7xl font-bold text-white uppercase tracking-tighter mb-4">
      Our Partners
    </h1>
    <p class="font-sans text-lg text-gray-300 max-w-2xl font-light">
      Fueling our success on and off the pitch.
    </p>
  </div>
</section>

<section class="py-20 px-6 max-w-6xl mx-auto">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
    {#each sponsors as sponsor}
      <div class="group flex flex-col items-center text-center p-6 border border-gray-100 hover:border-luhc-red hover:shadow-lg transition-all duration-300 rounded-sm bg-white" data-aos="fade-up">
        <div class="h-32 flex items-center justify-center w-full mb-6">
          <enhanced:img 
            src={sponsor.logo} 
            alt={sponsor.name} 
            class="max-h-24 w-auto object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110" 
          />
        </div>
        <h3 class="font-display uppercase font-bold text-lg text-luhc-dark mb-2">{sponsor.name}</h3>
        <p class="font-sans text-sm text-gray-500">{sponsor.desc}</p>
      </div>
    {/each}
  </div>
</section>

<section class="bg-gray-50 py-20 px-6">
  <div class="max-w-5xl mx-auto text-center">
    <h2 class="font-display uppercase text-4xl font-bold text-luhc-dark mb-12">Why Partner With LUHC?</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="bg-white p-8 shadow-sm border-t-4 border-luhc-red">
        <h3 class="font-display uppercase text-xl font-bold mb-4">Exposure</h3>
        <p class="text-gray-600 font-light text-sm leading-relaxed">Reach thousands of students through our social media channels.</p>
      </div>
      <div class="bg-white p-8 shadow-sm border-t-4 border-luhc-red">
        <h3 class="font-display uppercase text-xl font-bold mb-4">Community</h3>
        <p class="text-gray-600 font-light text-sm leading-relaxed">Showcase your commitment to student sport and local development in Lancaster.</p>
      </div>
      <div class="bg-white p-8 shadow-sm border-t-4 border-luhc-red">
        <h3 class="font-display uppercase text-xl font-bold mb-4">Networking</h3>
        <p class="text-gray-600 font-light text-sm leading-relaxed">Connect with university leaders, alumni, and fellow business owners.</p>
      </div>
    </div>
  </div>
</section>

<section class="py-20 text-center">
  <h2 class="font-display uppercase text-3xl font-bold text-luhc-dark mb-6">Join The Team</h2>
  <a href="/contact-us" class="inline-block bg-luhc-red text-white font-display uppercase font-bold tracking-widest px-10 py-4 hover:bg-luhc-dark transition-colors shadow-lg rounded-sm">
    Become A Sponsor
  </a>
</section>