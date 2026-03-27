<script lang="ts">
  import { resolve } from '$app/paths';
  import LinkTreeList from '$lib/components/links/LinkList.svelte';
  // Use your static enhanced image here
  import MensLogo from '$lib/images/luhc-logo.png?enhanced';

  let { data } = $props();
  const pageData = $derived(data.pageData);
</script>

<svelte:head>
  <title>Men's Hockey Links | LUHC</title>
  <meta name="description" content={pageData.description} />
</svelte:head>

<div class="min-h-screen bg-[#f7f7f7] px-4 py-12 font-sans text-gray-900">
  <div class="mx-auto max-w-xl">
    <div class="mb-10 text-center">
      <div class="mx-auto mb-4 h-28 w-28 overflow-hidden rounded-full bg-black p-3 shadow-sm">
        <enhanced:img src={MensLogo} alt="LUHC Men's Logo" class="h-full w-full object-contain" />
      </div>
      <h1 class="mb-3 text-2xl font-bold">{pageData.title}</h1>
      <p class="mx-auto max-w-sm text-sm leading-relaxed text-gray-600">{pageData.description}</p>
    </div>

    <LinkTreeList socials={pageData.socials} sections={pageData.sections} />

    <div class="mt-16 text-center">
      <a
        href={resolve('/')}
        class="text-[10px] font-bold tracking-widest text-gray-400 uppercase transition-colors hover:text-luhc-red"
      >
        L.U.H.C. Official Site
      </a>
    </div>
  </div>
</div>

<style>
  /* Ensure the background covers the whole screen */
  :global(body) {
    background-color: #f7f7f7;
  }
</style>
