<script lang="ts">
  import LUHCLogo from '$lib/images/luhc-logo.png';
  import HeroPFlick from '$lib/images/pages/index/p-flick-hero.jpg';
</script>

<section class="relative h-[85vh] w-full overflow-hidden bg-luhc-dark">
  <img
    src={HeroPFlick}
    alt="Lancaster University Hockey action shot"
    class="absolute inset-0 h-full w-full object-cover object-center opacity-80"
  />

  <div class="absolute inset-0 bg-linear-to-t from-luhc-dark via-luhc-dark/40 to-transparent"></div>

  <div
    class="absolute inset-0 mx-auto flex w-full max-w-7xl flex-col justify-end px-6 pb-12 md:px-12 md:pb-24"
  >
    <div class="animate-in slide-in-from-bottom-4 mb-6 flex items-end gap-4 duration-1000">
      <img src={LUHCLogo} alt="LUHC Logo" class="h-24 w-auto drop-shadow-2xl" />

      <!-- <div class="hidden md:block h-12 w-px bg-white/30 mb-2"></div> -->
      <!-- <span class="hidden md:block text-white/60 font-display uppercase tracking-widest text-sm mb-4">Est. 1964</span> -->
    </div>

    <h1
      class="max-w-4xl font-display text-6xl leading-[0.9] font-bold tracking-tighter text-white uppercase drop-shadow-xl md:text-8xl"
    >
      Lancaster University <br />
      <span class="bg-linear-to-r from-luhc-red to-red-500 bg-clip-text text-transparent"
        >Hockey Club</span
      >
    </h1>

    <div class="mt-6 flex flex-col items-start gap-6 md:flex-row md:items-center">
      <div class="h-1 w-24 bg-luhc-red"></div>
      <p class="max-w-xl font-sans text-xl font-light text-gray-200">
        One of the largest, most competitive, and welcoming sports clubs at Lancaster.
        <span class="mt-2 block font-medium text-white">#RosesAreRed</span>
      </p>
    </div>
  </div>
</section>
