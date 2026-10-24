<script lang="ts">
  import { resolve } from '$app/paths';
  import { Button } from 'bits-ui';
  import { urlFor } from '#lib/image.js';

  interface Sponsor {
    _id: string;
    name: string;
    description?: string;
    link?: string;
    logo: any;
  }

  let { sponsors = [] }: { sponsors: Sponsor[] } = $props();
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
      href={resolve('contact-us')}>Get in touch</Button.Root
    >

    .
  </p>

  <div class="grid grid-cols-2 items-center gap-8 py-8 md:grid-cols-4 md:gap-12">
    {#each sponsors as sponsor (sponsor._id)}
      <Button.Root
        class="group flex flex-col items-center justify-center p-4 transition-all duration-300"
        href={sponsor.link || '#'}
        rel="noopener noreferrer"
        target="_blank"
      >
        {#if sponsor.logo}
          <img
            class="mb-4 h-16 w-auto object-contain opacity-60 grayscale filter transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
            alt={sponsor.logo?.alt || sponsor.name}
            loading="lazy"
            src={urlFor(sponsor.logo).height(120).url()}
          />
        {/if}

        <span
          class="text-center text-xs font-bold tracking-widest text-gray-500 uppercase transition-colors group-hover:text-luhc-red"
        >
          {sponsor.name}
        </span>

        {#if sponsor.description}
          <p class="mt-1 line-clamp-2 text-center text-xs text-gray-400">
            {sponsor.description}
          </p>
        {/if}
      </Button.Root>
    {/each}
  </div>
</section>
