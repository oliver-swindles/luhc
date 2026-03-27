<script lang="ts">
  import ContactHero from '$lib/images/pages/contact/contact-hero.webp';
</script>

<svelte:head>
  <title>Contact Us | Lancaster University Hockey Club</title>
</svelte:head>

<section class="relative h-[50vh] w-full overflow-hidden bg-luhc-dark">
  <img
    src={ContactHero}
    alt="Contact Hero"
    class="absolute inset-0 h-full w-full object-cover object-center opacity-60"
  />
  <div class="absolute inset-0 bg-linear-to-t from-luhc-dark via-transparent to-transparent"></div>

  <div
    class="absolute inset-0 flex flex-col items-center justify-center px-4 text-center"
    data-aos="fade-in"
  >
    <h1
      class="mb-4 font-display text-5xl font-bold tracking-tighter text-white uppercase drop-shadow-xl md:text-7xl"
    >
      Get In Touch
    </h1>
    <p class="font-sans text-xl font-light text-gray-200">We'd love to hear from you.</p>
  </div>
</section>

<div class="mx-auto max-w-5xl px-6 py-20 text-gray-900">
  <section class="mb-20" data-aos="fade-up">
    <div class="mb-12 text-center">
      <h2 class="font-display text-3xl font-bold text-luhc-dark uppercase">Quick Contact</h2>
      <p class="mt-2 font-light text-gray-500">
        The fastest way to reach us is via Instagram Direct Message.
      </p>
    </div>

    <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
      <a
        href="https://instagram.com/lumhc_"
        target="_blank"
        class="group transform rounded-sm border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-luhc-red/30 hover:shadow-xl"
      >
        <h3 class="mb-2 font-display text-xl font-bold text-luhc-dark uppercase">Men's Club</h3>
        <span class="font-sans font-bold text-luhc-red group-hover:underline">@lumhc_</span>
      </a>

      <a
        href="https://instagram.com/luwhc_"
        target="_blank"
        class="group transform rounded-sm border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-luhc-red/30 hover:shadow-xl"
      >
        <h3 class="mb-2 font-display text-xl font-bold text-luhc-dark uppercase">Women's Club</h3>
        <span class="font-sans font-bold text-luhc-red group-hover:underline">@luwhc_</span>
      </a>

      <a
        href="https://instagram.com/luhc_dev"
        target="_blank"
        class="group transform rounded-sm border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-luhc-red/30 hover:shadow-xl"
      >
        <h3 class="mb-2 font-display text-xl font-bold text-luhc-dark uppercase">Dev Squad</h3>
        <span class="font-sans font-bold text-luhc-red group-hover:underline">@luhc_dev</span>
      </a>
    </div>
  </section>

  <!-- <section class="border-t border-gray-100 bg-gray-50 p-10 text-center" data-aos="fade-up">
    <h2 class="mb-4 font-display text-3xl font-bold text-luhc-dark uppercase">
      Official Enquiries
    </h2>
    <p class="mx-auto mb-8 max-w-xl font-light text-gray-600">
      For sponsorship opportunities, formal university business, or similar, please send us an
      email.
    </p>
    <a
      href="mailto:info@luhc.co.uk"
      class="inline-block bg-luhc-dark px-8 py-3 font-display font-bold tracking-widest text-white uppercase shadow-md transition-colors hover:bg-luhc-red"
    >
      info@luhc.co.uk
    </a>
  </section> -->
</div>
