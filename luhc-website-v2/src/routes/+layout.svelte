<script lang="ts">
  // 1. THIS IS THE MISSING KEY: Import the global CSS
  import '../app.css';
  
  // 2. Import the Header here so it appears on every page
  // (You can remove it from +page.svelte after this)
  let { children } = $props();
</script>

<div class="bg-void text-paper min-h-screen flex flex-col antialiased selection:bg-luhc-red selection:text-white">
  
  {@render children()}

</div>