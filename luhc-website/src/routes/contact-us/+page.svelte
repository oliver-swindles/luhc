<script>
  import ContactHero from "$lib/images/pages/contact/contact-hero.webp?enhanced";
</script>

<svelte:head>
  <title>Contact Us | Lancaster University Hockey Club</title>
</svelte:head>

<section class="relative h-[50vh] w-full overflow-hidden bg-luhc-dark">
  <enhanced:img 
    src={ContactHero} 
    alt="Contact Hero" 
    class="absolute inset-0 w-full h-full object-cover object-center opacity-60" 
  />
  <div class="absolute inset-0 bg-linear-to-t from-luhc-dark via-transparent to-transparent"></div>
  
  <div class="absolute inset-0 flex flex-col justify-center items-center text-center px-4" data-aos="fade-in">
    <h1 class="font-display text-5xl md:text-7xl font-bold text-white uppercase tracking-tighter drop-shadow-xl mb-4">
      Get In Touch
    </h1>
    <p class="font-sans text-xl text-gray-200 font-light">We'd love to hear from you.</p>
  </div>
</section>

<div class="max-w-5xl mx-auto px-6 py-20 text-gray-900">
  
  <section class="mb-20" data-aos="fade-up">
    <div class="text-center mb-12">
      <h2 class="font-display uppercase text-3xl font-bold text-luhc-dark">Quick Contact</h2>
      <p class="text-gray-500 mt-2 font-light">The fastest way to reach us is via Instagram Direct Message.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      <a href="https://instagram.com/lumhc_" target="_blank" class="group bg-white p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-luhc-red/30 transition-all duration-300 text-center rounded-sm transform hover:-translate-y-1">
        <h3 class="font-display uppercase text-xl font-bold text-luhc-dark mb-2">Men's Club</h3>
        <span class="font-sans text-luhc-red font-bold group-hover:underline">@lumhc_</span>
      </a>

      <a href="https://instagram.com/luwhc_" target="_blank" class="group bg-white p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-luhc-red/30 transition-all duration-300 text-center rounded-sm transform hover:-translate-y-1">
        <h3 class="font-display uppercase text-xl font-bold text-luhc-dark mb-2">Women's Club</h3>
        <span class="font-sans text-luhc-red font-bold group-hover:underline">@luwhc_</span>
      </a>

      <a href="https://instagram.com/luhc_dev" target="_blank" class="group bg-white p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-luhc-red/30 transition-all duration-300 text-center rounded-sm transform hover:-translate-y-1">
        <h3 class="font-display uppercase text-xl font-bold text-luhc-dark mb-2">Dev Squad</h3>
        <span class="font-sans text-luhc-red font-bold group-hover:underline">@luhc_dev</span>
      </a>

    </div>
  </section>

  <section class="bg-gray-50 p-10 text-center border-t border-gray-100" data-aos="fade-up">
    <h2 class="font-display uppercase text-3xl font-bold text-luhc-dark mb-4">Official Enquiries</h2>
    <p class="text-gray-600 font-light mb-8 max-w-xl mx-auto">
      For sponsorship opportunities, formal university business, or similar, please send us an email.
    </p>
    <a href="mailto:info@luhc.co.uk" class="inline-block bg-luhc-dark text-white font-display uppercase font-bold tracking-widest px-8 py-3 hover:bg-luhc-red transition-colors shadow-md">
      info@luhc.co.uk
    </a>
  </section>

</div>