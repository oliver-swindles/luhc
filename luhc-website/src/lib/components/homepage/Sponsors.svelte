<script lang="ts">
  import { resolve } from '$app/paths';
  import YellowDoorLetsLogo from '$lib/images/sponsors/YDL.png?enhanced';
  import MollyOMalleysLogo from '$lib/images/sponsors/molly-o-malleys.webp?enhanced';
  import BowerhamHotelLogo from '$lib/images/sponsors/BowerhamHotel.jpg?enhanced';
  import GreensLogo from '$lib/images/sponsors/Greens.png?enhanced';
</script>

<section class="my-12">
  <div class="mb-8 flex items-center gap-4">
    <h2 class="font-display text-3xl font-bold tracking-tight text-luhc-dark uppercase">
      Official Partners
    </h2>
    <div class="h-px grow bg-gray-200"></div>
  </div>

  <p class="mb-8 max-w-2xl text-lg font-light text-gray-600">
    We're proud to be supported by local businesses. Want to join the team?
    <a
      href={resolve('/contact-us')}
      class="font-bold text-luhc-red decoration-2 underline-offset-4 hover:underline"
      >Get in touch</a
    >.
  </p>

  <div class="grid grid-cols-2 items-center gap-8 py-8 md:grid-cols-4 md:gap-12">
    <a
      href="https://www.yellowdoorlets.co.uk/"
      target="_blank"
      class="group flex flex-col items-center justify-center p-4 transition-all duration-300"
    >
      <enhanced:img
        src={YellowDoorLetsLogo}
        alt="Yellow Door Lets"
        class="mb-4 h-16 w-auto object-contain opacity-60 grayscale filter transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
      />
      <span
        class="text-xs font-bold tracking-widest text-gray-500 uppercase transition-colors group-hover:text-luhc-red"
        >Yellow Door Lets</span
      >
    </a>

    <a
      href="https://www.mollyomalleys.co.uk/"
      target="_blank"
      class="group flex flex-col items-center justify-center p-4 transition-all duration-300"
    >
      <enhanced:img
        src={MollyOMalleysLogo}
        alt="Molly O'Malleys"
        class="mb-4 h-16 w-auto object-contain opacity-60 grayscale filter transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
      />
      <span
        class="text-xs font-bold tracking-widest text-gray-500 uppercase transition-colors group-hover:text-luhc-red"
        >Molly O'Malleys</span
      >
    </a>

    <a
      href="https://thebowerham.co.uk/"
      target="_blank"
      class="group flex flex-col items-center justify-center p-4 transition-all duration-300"
    >
      <enhanced:img
        src={BowerhamHotelLogo}
        alt="The Bowerham Hotel"
        class="mb-4 h-16 w-auto object-contain opacity-60 grayscale filter transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
      />
      <span
        class="text-xs font-bold tracking-widest text-gray-500 uppercase transition-colors group-hover:text-luhc-red"
        >Bowerham Hotel</span
      >
    </a>

    <a
      href="https://www.facebook.com/GreensLancaster/"
      target="_blank"
      class="group flex flex-col items-center justify-center p-4 transition-all duration-300"
    >
      <enhanced:img
        src={GreensLogo}
        alt="Greens Lancaster"
        class="mb-4 h-16 w-auto object-contain opacity-60 grayscale filter transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
      />
      <span
        class="text-xs font-bold tracking-widest text-gray-500 uppercase transition-colors group-hover:text-luhc-red"
        >Greens</span
      >
    </a>
  </div>
</section>
