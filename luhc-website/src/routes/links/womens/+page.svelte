<script lang="ts">
  import { resolve } from '$app/paths';
  import LinkTreeList from '$lib/components/links/LinkList.svelte';
  import WomensLogo from '$lib/images/luhc-logo.png?enhanced';

  import { Button } from 'bits-ui';

  let { data } = $props();
  const pageData = $derived(data.pageData);
</script>

<svelte:head>
  <title>Women's Hockey Links | LUHC</title>
  <meta name="description" content={pageData.description} />
</svelte:head>

<div class="min-h-screen bg-[#f7f7f7] px-4 py-12 font-sans text-gray-900">
  <div class="mx-auto max-w-xl">
    <div class="mb-10 text-center">
      <div class="mx-auto mb-4 h-28 w-28 overflow-hidden rounded-full bg-black p-3 shadow-sm">
        <enhanced:img class="h-full w-full object-contain" alt="LUHC Women's Logo" src={WomensLogo} />
      </div>
      <h1 class="mb-3 text-2xl font-bold">{pageData.title}</h1>
      <p class="mx-auto max-w-sm text-sm leading-relaxed text-gray-600">{pageData.description}</p>
    </div>

    <LinkTreeList sections={pageData.sections} socials={pageData.socials} />

    <div class="mt-16 text-center">
      <Button.Root
        class="text-[10px] font-bold tracking-widest text-gray-400 uppercase transition-colors hover:text-luhc-red"
        href={resolve('/')}
      >
        L.U.H.C. Official Site
      </Button.Root>
    </div>
  </div>
</div>

<style>
  /* Ensure the background covers the whole screen */
  :global(body) {
    background-color: #f7f7f7;
  }
</style>
