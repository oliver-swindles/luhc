<script>
  import { page } from '$app/stores';
  import LUHCLogo from "$lib/images/luhc-logo.png?enhanced";
  import { slide } from 'svelte/transition';

  // State for mobile menu
  let isMenuOpen = false;

  // Close menu when route changes
  $: {
    const _ = $page.url.pathname;
    isMenuOpen = false;
  }

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
  
  // Helper to check active state for styling
  $: activeUrl = $page.url.pathname;
</script>

<header class="sticky top-0 z-50 w-full transition-all duration-300">
  
  <div class="relative w-full bg-luhc-red/95 backdrop-blur-md border-b border-white/10 shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">

        <a href="/" class="flex-shrink-0 flex items-center gap-3 group">
          <enhanced:img src={LUHCLogo} class="h-10 w-auto md:h-12 drop-shadow-md group-hover:scale-105 transition-transform" alt="LUHC Logo" />
          <span class="font-display font-bold text-2xl uppercase tracking-wide text-white drop-shadow-sm">
            LUHC
          </span>
        </a>

        <nav class="hidden md:flex space-x-8 items-center">
          <a href="/" class="text-white hover:text-white/80 font-display uppercase tracking-widest text-sm font-medium transition-colors">Home</a>
          
          <div class="relative group h-full flex items-center">
            <button class="text-white hover:text-white/80 font-display uppercase tracking-widest text-sm font-medium transition-colors flex items-center gap-1 h-full focus:outline-none">
              About <svg class="w-3 h-3 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div class="absolute top-full left-0 w-56 bg-white shadow-xl border-t-4 border-luhc-dark opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
              <div class="py-2 flex flex-col font-sans text-luhc-dark text-sm font-medium">
                <a href="/about" class="px-4 py-3 hover:bg-gray-50 hover:text-luhc-red border-b border-gray-100">About the Club</a>
                <a href="/roses" class="px-4 py-3 hover:bg-gray-50 hover:text-luhc-red border-b border-gray-100">Roses</a>
                <a href="/about/meet-the-exec" class="px-4 py-3 hover:bg-gray-50 hover:text-luhc-red border-b border-gray-100">Meet the Exec</a>
                <a href="/about/meet-the-captains" class="px-4 py-3 hover:bg-gray-50 hover:text-luhc-red border-b border-gray-100">Meet the Captains</a>
                <a href="/socials" class="px-4 py-3 hover:bg-gray-50 hover:text-luhc-red">Socials</a>
              </div>
            </div>
          </div>

          <div class="relative group h-full flex items-center">
            <button class="text-white hover:text-white/80 font-display uppercase tracking-widest text-sm font-medium transition-colors flex items-center gap-1 h-full focus:outline-none">
              Teams <svg class="w-3 h-3 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div class="absolute top-full left-0 w-56 bg-white shadow-xl border-t-4 border-luhc-dark opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
              <div class="py-2 flex flex-col font-sans text-luhc-dark text-sm font-medium">
                <a href="/teams/mens-club" class="px-4 py-3 hover:bg-gray-50 hover:text-luhc-red border-b border-gray-100">Men's Club</a>
                <a href="/teams/womens-club" class="px-4 py-3 hover:bg-gray-50 hover:text-luhc-red border-b border-gray-100">Women's Club</a>
                <a href="/teams/development-squad" class="px-4 py-3 hover:bg-gray-50 hover:text-luhc-red border-b border-gray-100">Development Squad</a>
                <a href="/teams/indoor-hockey" class="px-4 py-3 hover:bg-gray-50 hover:text-luhc-red">Indoor Hockey</a>
              </div>
            </div>
          </div>

          <a href="/sponsors" class="text-white hover:text-white/80 font-display uppercase tracking-widest text-sm font-medium transition-colors">Sponsors</a>
          
          <a href="/contact-us" class="bg-white text-luhc-red hover:bg-gray-100 px-6 py-2 rounded-sm font-display uppercase tracking-widest text-xs font-bold transition-colors shadow-sm">
            Contact
          </a>
        </nav>

        <div class="flex items-center md:hidden">
          <button on:click={toggleMenu} type="button" class="text-white hover:text-gray-200 focus:outline-none p-2">
            <span class="sr-only">Open main menu</span>
            {#if !isMenuOpen}
              <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
            {:else}
              <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
            {/if}
          </button>
        </div>
      </div>
    </div>

    {#if isMenuOpen}
      <div class="md:hidden bg-luhc-red border-t border-white/10 shadow-inner" transition:slide={{ duration: 200 }}>
        <div class="px-4 pt-4 pb-8 space-y-2">
          <a href="/" class="block px-3 py-3 text-base font-display uppercase tracking-widest font-medium text-white hover:bg-black/10 rounded-md">Home</a>
          
          <div class="px-3 py-2">
            <span class="text-white/40 text-xs font-bold uppercase tracking-widest mb-3 block">About</span>
            <div class="pl-4 border-l-2 border-white/20 space-y-3">
               <a href="/about" class="block text-white font-sans text-sm hover:text-white/80">Club Info</a>
               <a href="/roses" class="block text-white font-sans text-sm">Roses</a>
               <a href="/about/meet-the-exec" class="block text-white font-sans text-sm hover:text-white/80">Exec Team</a>
               <a href="/about/meet-the-captains" class="block text-white font-sans text-sm hover:text-white/80">Captains</a>
               <a href="/socials" class="block text-white font-sans text-sm hover:text-white/80">Socials</a>
            </div>
          </div>

          <div class="px-3 py-2">
            <span class="text-white/40 text-xs font-bold uppercase tracking-widest mb-3 block">Teams</span>
            <div class="pl-4 border-l-2 border-white/20 space-y-3">
               <a href="/teams/mens-club" class="block text-white font-sans text-sm hover:text-white/80">Men's Club</a>
               <a href="/teams/womens-club" class="block text-white font-sans text-sm hover:text-white/80">Women's Club</a>
               <a href="/teams/development-squad" class="block text-white font-sans text-sm hover:text-white/80">Development</a>
               <a href="/teams/indoor-hockey" class="block text-white font-sans text-sm hover:text-white/80">Indoor</a>
            </div>
          </div>

          <a href="/sponsors" class="block px-3 py-3 text-base font-display uppercase tracking-widest font-medium text-white hover:bg-black/10 rounded-md">Sponsors</a>
          <a href="/contact-us" class="block px-3 py-3 text-base font-display uppercase tracking-widest font-bold text-luhc-red bg-white rounded-md mt-6 text-center shadow-md">Contact Us</a>
        </div>
      </div>
    {/if}
</header>