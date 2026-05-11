<script lang="ts">
  import { resolve } from '$app/paths';
  import YellowDoorLetsLogo from '$lib/images/sponsors/YDL.png?enhanced';
  import MollyOMalleysLogo from '$lib/images/sponsors/molly-o-malleys.webp?enhanced';
  import BowerhamHotelLogo from '$lib/images/sponsors/BowerhamHotel.jpg?enhanced';
  import GreensLogo from '$lib/images/sponsors/Greens.png?enhanced';

  import { Button } from 'bits-ui';
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
    <Button.Root
      class="font-bold text-luhc-red decoration-2 underline-offset-4 hover:underline"
      href={resolve('/contact-us')}>Get in touch</Button.Root
    >.
  </p>

  <div class="grid grid-cols-2 items-center gap-8 py-8 md:grid-cols-4 md:gap-12">
    <Button.Root
      class="group flex flex-col items-center justify-center p-4 transition-all duration-300"
      href="https://www.yellowdoorlets.co.uk/"
      rel="noopener noreferrer"
      target="_blank"
    >
      <enhanced:img
        class="mb-4 h-16 w-auto object-contain opacity-60 grayscale filter transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
        alt="Yellow Door Lets"
        src={YellowDoorLetsLogo}
      />
      <span
        class="text-xs font-bold tracking-widest text-gray-500 uppercase transition-colors group-hover:text-luhc-red"
        >Yellow Door Lets</span
      >
    </Button.Root>

    <Button.Root
      class="group flex flex-col items-center justify-center p-4 transition-all duration-300"
      href="https://www.mollyomalleys.co.uk/"
      rel="noopener noreferrer"
      target="_blank"
    >
      <enhanced:img
        class="mb-4 h-16 w-auto object-contain opacity-60 grayscale filter transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
        alt="Molly O'Malleys"
        src={MollyOMalleysLogo}
      />
      <span
        class="text-xs font-bold tracking-widest text-gray-500 uppercase transition-colors group-hover:text-luhc-red"
        >Molly O'Malleys</span
      >
    </Button.Root>

    <Button.Root
      class="group flex flex-col items-center justify-center p-4 transition-all duration-300"
      href="https://thebowerham.co.uk/"
      rel="noopener noreferrer"
      target="_blank"
    >
      <enhanced:img
        class="mb-4 h-16 w-auto object-contain opacity-60 grayscale filter transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
        alt="The Bowerham Hotel"
        src={BowerhamHotelLogo}
      />
      <span
        class="text-xs font-bold tracking-widest text-gray-500 uppercase transition-colors group-hover:text-luhc-red"
        >Bowerham Hotel</span
      >
    </Button.Root>

    <Button.Root
      class="group flex flex-col items-center justify-center p-4 transition-all duration-300"
      href="https://www.facebook.com/GreensLancaster/"
      rel="noopener noreferrer"
      target="_blank"
    >
      <enhanced:img
        class="mb-4 h-16 w-auto object-contain opacity-60 grayscale filter transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
        alt="Greens Lancaster"
        src={GreensLogo}
      />
      <span
        class="text-xs font-bold tracking-widest text-gray-500 uppercase transition-colors group-hover:text-luhc-red"
        >Greens</span
      >
    </Button.Root>
  </div>
</section>
