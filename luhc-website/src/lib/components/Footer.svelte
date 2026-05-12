<script lang="ts">
  import { resolve } from '$app/paths';
  import LUHCLogo from '$lib/images/luhc-logo.png?enhanced';
  import { CarbonBadge } from 'svelte-website-carbon-badge';
  import { Button } from 'bits-ui';
</script>

<footer class="border-t-4 border-luhc-red bg-luhc-dark pt-16 pb-8 text-white">
  <div class="mx-auto mb-12 grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-4">
    <div class="flex flex-col items-start space-y-6">
      <Button.Root class="group flex items-center space-x-3" href={resolve('/')}>
        <enhanced:img
          class="h-16 w-auto opacity-90 transition-opacity group-hover:opacity-100"
          alt="LUHC Logo"
          src={LUHCLogo}
        />
        <div class="flex flex-col">
          <span class="font-display text-2xl font-bold tracking-wide uppercase">LU Hockey</span>
          <!-- <span class="text-xs font-sans text-gray-400">Est. 1964</span> -->
        </div>
      </Button.Root>
      <p class="max-w-xs text-sm leading-relaxed font-light text-gray-400">
        The official home of Lancaster University Hockey Club. Competitive, social, and inclusive.
      </p>
      <div class="inline-block rounded border border-white/10 bg-white/5 px-3 py-1">
        <span class="text-xs font-bold tracking-widest text-luhc-red">#ROSESARERED</span>
      </div>
      <CarbonBadge dark={true} />
    </div>

    <div>
      <h2
        class="mb-6 inline-block border-b border-white/10 pb-2 font-display text-sm font-bold tracking-widest text-white uppercase"
      >
        Club Info
      </h2>
      <ul class="space-y-3 font-sans text-sm text-gray-400">
        <li>
          <Button.Root
            class="transition-colors duration-200 hover:text-luhc-red"
            href={resolve('/about')}>About Us</Button.Root
          >
        </li>
        <li>
          <Button.Root
            class="transition-colors duration-200 hover:text-luhc-red"
            href={resolve('/contact-us')}>Contact Us</Button.Root
          >
        </li>
        <li>
          <Button.Root
            class="transition-colors duration-200 hover:text-luhc-red"
            href="{resolve('/')}LUHCClubConstitution.docx">Club Constitution</Button.Root
          >
        </li>
        <li>
          <Button.Root
            class="flex items-center gap-2 transition-colors duration-200 hover:text-luhc-red"
            href="https://github.com/oliver-swindles/luhc"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub Repo <svg class="h-3 w-3" fill="currentColor" viewBox="0 0 24 24"
              ><path
                d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.655-3.795-1.455-3.795-1.455-.54-1.38-1.335-1.755-1.335-1.755-1.095-.75.09-.735.09-.735 1.2.09 1.83 1.245 1.83 1.245 1.08 1.86 2.805 1.32 3.495 1.005.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.225 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405 1.02 0 2.04.135 3 .405 2.295-1.56 3.3-1.23 3.3-1.23.66 1.695.24 2.925.12 3.225.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
              /></svg
            >
          </Button.Root>
        </li>
      </ul>
    </div>

    <div>
      <h2
        class="mb-6 inline-block border-b border-white/10 pb-2 font-display text-sm font-bold tracking-widest text-white uppercase"
      >
        Follow Us
      </h2>
      <ul class="space-y-3 font-sans text-sm text-gray-400">
        <li>
          <Button.Root
            class="transition-colors duration-200 hover:text-luhc-red"
            href="https://www.facebook.com/groups/340322369353793/"
            rel="noopener noreferrer"
            target="_blank">LUHC Facebook</Button.Root
          >
        </li>
        <li>
          <Button.Root
            class="transition-colors duration-200 hover:text-luhc-red"
            href="https://www.instagram.com/lumhc_/"
            rel="noopener noreferrer"
            target="_blank">Men's Instagram</Button.Root
          >
        </li>
        <li>
          <Button.Root
            class="transition-colors duration-200 hover:text-luhc-red"
            href="https://www.instagram.com/luwhc_/"
            rel="noopener noreferrer"
            target="_blank">Women's Instagram</Button.Root
          >
        </li>
        <li>
          <Button.Root
            class="transition-colors duration-200 hover:text-luhc-red"
            href="https://www.instagram.com/luhc_dev/"
            rel="noopener noreferrer"
            target="_blank">Dev Squad Instagram</Button.Root
          >
        </li>
      </ul>
    </div>

    <div>
      <h2
        class="mb-6 inline-block border-b border-white/10 pb-2 font-display text-sm font-bold tracking-widest text-white uppercase"
      >
        Partners
      </h2>
      <ul class="space-y-3 font-sans text-sm text-gray-400">
        <li>
          <Button.Root
            class="transition-colors duration-200 hover:text-yellow-400"
            href="https://www.yellowdoorlets.co.uk/"
            rel="noopener noreferrer"
            target="_blank">Yellow Door Lets</Button.Root
          >
        </li>
        <li>
          <Button.Root
            class="transition-colors duration-200 hover:text-white"
            href="https://www.mollyomalleys.co.uk/"
            rel="noopener noreferrer"
            target="_blank">Molly O'Malleys</Button.Root
          >
        </li>
        <li>
          <Button.Root
            class="transition-colors duration-200 hover:text-white"
            href="https://thebowerham.co.uk/"
            rel="noopener noreferrer"
            target="_blank">The Bowerham Hotel</Button.Root
          >
        </li>
        <li>
          <Button.Root
            class="transition-colors duration-200 hover:text-green-400"
            href="https://www.facebook.com/GreensLancaster/"
            rel="noopener noreferrer"
            target="_blank">Greens Lancaster</Button.Root
          >
        </li>
      </ul>
    </div>
  </div>

  <div class="mt-8 border-t border-white/10 px-6 pt-8">
    <div
      class="mx-auto flex max-w-7xl flex-col items-center justify-between text-xs text-gray-400 md:flex-row"
    >
      <div class="flex items-center gap-1">
        <span>&copy; {new Date().getFullYear()} Lancaster University Hockey Club.</span>
        <span class="hidden md:inline"> All Rights Reserved.</span>
      </div>
      <div class="mt-4 flex items-center gap-4 md:mt-0">
        <p class="transition-colors hover:text-white">#ROSESARERED</p>
        <div class="h-3 w-px bg-white/20"></div>
        <p>
          Website by <Button.Root
            class="font-bold text-luhc-red transition-colors hover:text-white"
            href="https://www.spacefrogstudio.com"
            rel="noopener noreferrer"
            target="_blank">Space Frog Studio</Button.Root
          >
        </p>
      </div>
    </div>
  </div>
</footer>
