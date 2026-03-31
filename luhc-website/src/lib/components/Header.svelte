<script lang="ts">
  import { resolve } from '$app/paths';
  import { page } from '$app/state';
  import LUHCLogo from '$lib/images/luhc-logo.png?enhanced';
  import { slide } from 'svelte/transition';

  let isMenuOpen = $state(false);

  const activeUrl = $derived(page.url.pathname);

  $effect(() => {
    void activeUrl;
    isMenuOpen = false;
  });

  function toggleMenu(): void {
    isMenuOpen = !isMenuOpen;
  }
</script>

<header class="sticky top-0 z-50 w-full transition-all duration-300">
  <div
    class="relative w-full border-b border-white/10 bg-luhc-red shadow-lg backdrop-blur-md md:bg-luhc-red/95"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <a href={resolve('/')} class="group flex shrink-0 items-center gap-3">
          <enhanced:img
            src={LUHCLogo}
            class="h-10 w-auto drop-shadow-md transition-transform group-hover:scale-105 md:h-12"
            alt="LUHC Logo"
          />
          <span
            class="font-display text-2xl font-bold tracking-wide text-white uppercase drop-shadow-sm"
          >
            LUHC
          </span>
        </a>

        <nav class="hidden items-center space-x-8 md:flex">
          <a
            href={resolve('/')}
            class="font-display text-sm font-medium tracking-widest text-white uppercase transition-colors hover:text-white/80"
            >Home</a
          >

          <div class="group relative flex h-full items-center">
            <button
              class="flex h-full items-center gap-1 font-display text-sm font-medium tracking-widest text-white uppercase transition-colors hover:text-white/80 focus:outline-none"
            >
              About <svg
                class="h-3 w-3 opacity-70"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                ><path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  d="M19 9l-7 7-7-7"
                ></path></svg
              >
            </button>
            <div
              class="invisible absolute top-full left-0 w-56 translate-y-2 transform border-t-4 border-luhc-dark bg-white opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
            >
              <div class="flex flex-col py-2 font-sans text-sm font-medium text-luhc-dark">
                <a
                  href={resolve('/about')}
                  class="border-b border-gray-100 px-4 py-3 hover:bg-gray-50 hover:text-luhc-red"
                  >About the Club</a
                >
                <a
                  href={resolve('/roses')}
                  class="border-b border-gray-100 px-4 py-3 hover:bg-gray-50 hover:text-luhc-red"
                  >Roses</a
                >
                <a
                  href={resolve('/about/meet-the-exec')}
                  class="border-b border-gray-100 px-4 py-3 hover:bg-gray-50 hover:text-luhc-red"
                  >Meet the Exec</a
                >
                <a
                  href={resolve('/about/meet-the-captains')}
                  class="border-b border-gray-100 px-4 py-3 hover:bg-gray-50 hover:text-luhc-red"
                  >Meet the Captains</a
                >
                <a href={resolve('/socials')} class="px-4 py-3 hover:bg-gray-50 hover:text-luhc-red"
                  >Socials</a
                >
              </div>
            </div>
          </div>

          <div class="group relative flex h-full items-center">
            <button
              class="flex h-full items-center gap-1 font-display text-sm font-medium tracking-widest text-white uppercase transition-colors hover:text-white/80 focus:outline-none"
            >
              Teams <svg
                class="h-3 w-3 opacity-70"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                ><path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  d="M19 9l-7 7-7-7"
                ></path></svg
              >
            </button>
            <div
              class="invisible absolute top-full left-0 w-56 translate-y-2 transform border-t-4 border-luhc-dark bg-white opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
            >
              <div class="flex flex-col py-2 font-sans text-sm font-medium text-luhc-dark">
                <a
                  href={resolve('/teams/mens-club')}
                  class="border-b border-gray-100 px-4 py-3 hover:bg-gray-50 hover:text-luhc-red"
                  >Men's Club</a
                >
                <a
                  href={resolve('/teams/womens-club')}
                  class="border-b border-gray-100 px-4 py-3 hover:bg-gray-50 hover:text-luhc-red"
                  >Women's Club</a
                >
                <a
                  href={resolve('/teams/development-squad')}
                  class="border-b border-gray-100 px-4 py-3 hover:bg-gray-50 hover:text-luhc-red"
                  >Development Squad</a
                >
                <a
                  href={resolve('/teams/indoor-hockey')}
                  class="px-4 py-3 hover:bg-gray-50 hover:text-luhc-red">Indoor Hockey</a
                >
              </div>
            </div>
          </div>

          <a
            href={resolve('/sponsors')}
            class="font-display text-sm font-medium tracking-widest text-white uppercase transition-colors hover:text-white/80"
            >Sponsors</a
          >

          <a
            href={resolve('/contact-us')}
            class="rounded-sm bg-white px-6 py-2 font-display text-xs font-bold tracking-widest text-luhc-red uppercase shadow-sm transition-colors hover:bg-gray-100"
          >
            Contact
          </a>
        </nav>

        <div class="flex items-center md:hidden">
          <button
            onclick={toggleMenu}
            type="button"
            class="p-2 text-white hover:text-gray-200 focus:outline-none"
          >
            <span class="sr-only">Open main menu</span>
            {#if !isMenuOpen}
              <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                ><path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                /></svg
              >
            {:else}
              <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                ><path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                /></svg
              >
            {/if}
          </button>
        </div>
      </div>
    </div>

    {#if isMenuOpen}
      <div
        class="border-t border-white/10 bg-luhc-red shadow-inner md:hidden"
        transition:slide={{ duration: 200 }}
      >
        <div class="space-y-2 px-4 pt-4 pb-8">
          <a
            href={resolve('/')}
            class="block rounded-md px-3 py-3 font-display text-base font-medium tracking-widest text-white uppercase hover:bg-black/10"
            >Home</a
          >
          <a
            href={resolve('/sponsors')}
            class="block rounded-md px-3 py-3 font-display text-base font-medium tracking-widest text-white uppercase hover:bg-black/10"
            >Sponsors</a
          >

          <div class="px-3 py-2">
            <span class="mb-3 block text-xs font-bold tracking-widest text-white/40 uppercase"
              >About</span
            >
            <div class="space-y-3 border-l-2 border-white/20 pl-4">
              <a
                href={resolve('/about')}
                class="block font-sans text-sm text-white hover:text-white/80">Club Info</a
              >
              <a href={resolve('/roses')} class="block font-sans text-sm text-white">Roses</a>
              <a
                href={resolve('/about/meet-the-exec')}
                class="block font-sans text-sm text-white hover:text-white/80">Exec Team</a
              >
              <a
                href={resolve('/about/meet-the-captains')}
                class="block font-sans text-sm text-white hover:text-white/80">Captains</a
              >
              <a
                href={resolve('/socials')}
                class="block font-sans text-sm text-white hover:text-white/80">Socials</a
              >
            </div>
          </div>

          <div class="px-3 py-2">
            <span class="mb-3 block text-xs font-bold tracking-widest text-white/40 uppercase"
              >Teams</span
            >
            <div class="space-y-3 border-l-2 border-white/20 pl-4">
              <a
                href={resolve('/teams/mens-club')}
                class="block font-sans text-sm text-white hover:text-white/80">Men's Club</a
              >
              <a
                href={resolve('/teams/womens-club')}
                class="block font-sans text-sm text-white hover:text-white/80">Women's Club</a
              >
              <a
                href={resolve('/teams/development-squad')}
                class="block font-sans text-sm text-white hover:text-white/80">Development</a
              >
              <a
                href={resolve('/teams/indoor-hockey')}
                class="block font-sans text-sm text-white hover:text-white/80">Indoor</a
              >
            </div>
          </div>
          <a
            href={resolve('/contact-us')}
            class="mt-6 block rounded-md bg-white px-3 py-3 text-center font-display text-base font-bold tracking-widest text-luhc-red uppercase shadow-md"
            >Contact Us</a
          >
        </div>
      </div>
    {/if}
  </div>
</header>
