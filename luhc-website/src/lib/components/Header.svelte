<script lang="ts">
  import { resolve } from '$app/paths';
  import { page } from '$app/state';
  import LUHCLogo from '$lib/images/luhc-logo.png?enhanced';
  import { slide } from 'svelte/transition';
  import { Button } from 'bits-ui';

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
        <Button.Root class="group flex shrink-0 items-center gap-3" href={resolve('/')}>
          <enhanced:img
            class="h-10 w-auto drop-shadow-md transition-transform group-hover:scale-105 md:h-12"
            alt="LUHC Logo"
            src={LUHCLogo}
          />
          <span
            class="font-display text-2xl font-bold tracking-wide text-white uppercase drop-shadow-sm"
          >
            LUHC
          </span>
        </Button.Root>

        <nav class="hidden items-center space-x-8 md:flex">
          <Button.Root
            class="font-display text-sm font-medium tracking-widest text-white uppercase transition-colors hover:text-white/80"
            href={resolve('/')}>Home</Button.Root
          >

          <div class="group relative flex h-full items-center">
            <Button.Root
              class="flex h-full items-center gap-1 font-display text-sm font-medium tracking-widest text-white uppercase transition-colors hover:text-white/80 focus:outline-none"
            >
              About <svg
                class="h-3 w-3 opacity-70"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                ><path
                  d="M19 9l-7 7-7-7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                ></path></svg
              >
            </Button.Root>
            <div
              class="invisible absolute top-full left-0 w-56 translate-y-2 transform border-t-4 border-luhc-dark bg-white opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
            >
              <div class="flex flex-col py-2 font-sans text-sm font-medium text-luhc-dark">
                <Button.Root
                  class="border-b border-gray-100 px-4 py-3 hover:bg-gray-50 hover:text-luhc-red"
                  href={resolve('/about')}>About the Club</Button.Root
                >
                <Button.Root
                  class="border-b border-gray-100 px-4 py-3 hover:bg-gray-50 hover:text-luhc-red"
                  href={resolve('/roses')}>Roses</Button.Root
                >
                <Button.Root
                  class="border-b border-gray-100 px-4 py-3 hover:bg-gray-50 hover:text-luhc-red"
                  href={resolve('/about/meet-the-exec')}>Meet the Exec</Button.Root
                >
                <Button.Root
                  class="border-b border-gray-100 px-4 py-3 hover:bg-gray-50 hover:text-luhc-red"
                  href={resolve('/about/meet-the-captains')}>Meet the Captains</Button.Root
                >
                <Button.Root
                  class="px-4 py-3 hover:bg-gray-50 hover:text-luhc-red"
                  href={resolve('/socials')}>Socials</Button.Root
                >
              </div>
            </div>
          </div>

          <div class="group relative flex h-full items-center">
            <Button.Root
              class="flex h-full items-center gap-1 font-display text-sm font-medium tracking-widest text-white uppercase transition-colors hover:text-white/80 focus:outline-none"
            >
              Teams <svg
                class="h-3 w-3 opacity-70"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                ><path
                  d="M19 9l-7 7-7-7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                ></path></svg
              >
            </Button.Root>
            <div
              class="invisible absolute top-full left-0 w-56 translate-y-2 transform border-t-4 border-luhc-dark bg-white opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
            >
              <div class="flex flex-col py-2 font-sans text-sm font-medium text-luhc-dark">
                <Button.Root
                  class="border-b border-gray-100 px-4 py-3 hover:bg-gray-50 hover:text-luhc-red"
                  href={resolve('/teams/mens-club')}>Men's Club</Button.Root
                >
                <Button.Root
                  class="border-b border-gray-100 px-4 py-3 hover:bg-gray-50 hover:text-luhc-red"
                  href={resolve('/teams/womens-club')}>Women's Club</Button.Root
                >
                <Button.Root
                  class="border-b border-gray-100 px-4 py-3 hover:bg-gray-50 hover:text-luhc-red"
                  href={resolve('/teams/development-squad')}>Development Squad</Button.Root
                >
                <Button.Root
                  class="px-4 py-3 hover:bg-gray-50 hover:text-luhc-red"
                  href={resolve('/teams/indoor-hockey')}>Indoor Hockey</Button.Root
                >
              </div>
            </div>
          </div>

          <Button.Root
            class="font-display text-sm font-medium tracking-widest text-white uppercase transition-colors hover:text-white/80"
            href={resolve('/sponsors')}>Sponsors</Button.Root
          >

          <Button.Root
            class="rounded-sm bg-white px-6 py-2 font-display text-xs font-bold tracking-widest text-luhc-red uppercase shadow-sm transition-colors hover:bg-gray-100"
            href={resolve('/contact-us')}
          >
            Contact
          </Button.Root>
        </nav>

        <div class="flex items-center md:hidden">
          <Button.Root
            class="p-2 text-white hover:text-gray-200 focus:outline-none"
            onclick={toggleMenu}
            type="button"
          >
            <span class="sr-only">Open main menu</span>
            {#if !isMenuOpen}
              <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                ><path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                /></svg
              >
            {:else}
              <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                ><path
                  d="M6 18L18 6M6 6l12 12"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                /></svg
              >
            {/if}
          </Button.Root>
        </div>
      </div>
    </div>

    {#if isMenuOpen}
      <div
        class="border-t border-white/10 bg-luhc-red shadow-inner md:hidden"
        transition:slide={{ duration: 200 }}
      >
        <div class="space-y-2 px-4 pt-4 pb-8">
          <Button.Root
            class="block rounded-md px-3 py-3 font-display text-base font-medium tracking-widest text-white uppercase hover:bg-black/10"
            href={resolve('/')}>Home</Button.Root
          >
          <Button.Root
            class="block rounded-md px-3 py-3 font-display text-base font-medium tracking-widest text-white uppercase hover:bg-black/10"
            href={resolve('/sponsors')}>Sponsors</Button.Root
          >

          <div class="px-3 py-2">
            <span class="mb-3 block text-xs font-bold tracking-widest text-white/40 uppercase"
              >About</span
            >
            <div class="space-y-3 border-l-2 border-white/20 pl-4">
              <Button.Root
                class="block font-sans text-sm text-white hover:text-white/80"
                href={resolve('/about')}>Club Info</Button.Root
              >
              <Button.Root class="block font-sans text-sm text-white" href={resolve('/roses')}
                >Roses</Button.Root
              >
              <Button.Root
                class="block font-sans text-sm text-white hover:text-white/80"
                href={resolve('/about/meet-the-exec')}>Exec Team</Button.Root
              >
              <Button.Root
                class="block font-sans text-sm text-white hover:text-white/80"
                href={resolve('/about/meet-the-captains')}>Captains</Button.Root
              >
              <Button.Root
                class="block font-sans text-sm text-white hover:text-white/80"
                href={resolve('/socials')}>Socials</Button.Root
              >
            </div>
          </div>

          <div class="px-3 py-2">
            <span class="mb-3 block text-xs font-bold tracking-widest text-white/40 uppercase"
              >Teams</span
            >
            <div class="space-y-3 border-l-2 border-white/20 pl-4">
              <Button.Root
                class="block font-sans text-sm text-white hover:text-white/80"
                href={resolve('/teams/mens-club')}>Men's Club</Button.Root
              >
              <Button.Root
                class="block font-sans text-sm text-white hover:text-white/80"
                href={resolve('/teams/womens-club')}>Women's Club</Button.Root
              >
              <Button.Root
                class="block font-sans text-sm text-white hover:text-white/80"
                href={resolve('/teams/development-squad')}>Development</Button.Root
              >
              <Button.Root
                class="block font-sans text-sm text-white hover:text-white/80"
                href={resolve('/teams/indoor-hockey')}>Indoor</Button.Root
              >
            </div>
          </div>
          <Button.Root
            class="mt-6 block rounded-md bg-white px-3 py-3 text-center font-display text-base font-bold tracking-widest text-luhc-red uppercase shadow-md"
            href={resolve('/contact-us')}>Contact Us</Button.Root
          >
        </div>
      </div>
    {/if}
  </div>
</header>
