<script lang="ts">
  import LinkTreeList from '$lib/components/links/LinkList.svelte';
  // Use your static enhanced image here
  import MensLogo from '$lib/images/luhc-logo.png?enhanced'; 
  
  let { data } = $props();
  const { pageData } = data;
</script>

<svelte:head>
  <title>Men's Hockey Links | LUHC</title>
  <meta name="description" content={pageData.description} />
</svelte:head>

<div class="min-h-screen bg-[#f7f7f7] text-gray-900 font-sans px-4 py-12">
  <div class="max-w-xl mx-auto">
    
    <div class="text-center mb-10">
      <div class="w-28 h-28 mx-auto mb-4 bg-black p-3 rounded-full overflow-hidden shadow-sm">
        <enhanced:img src={MensLogo} alt="LUHC Men's Logo" class="w-full h-full object-contain" />
      </div>
      <h1 class="text-2xl font-bold mb-3">{pageData.title}</h1>
      <p class="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto">{pageData.description}</p>
    </div>

    <LinkTreeList 
      socials={pageData.socials} 
      sections={pageData.sections} 
    />

    <div class="mt-16 text-center">
      <a href="/" class="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-luhc-red transition-colors">
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