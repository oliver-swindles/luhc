<script lang="ts">
    import { onMount } from 'svelte';
    import logo from '$lib/assets/logo.png?enhanced'; // Ensure you moved the logo here

    let scrollY = $state(0);
    let isScrolled = $derived(scrollY > 50);
</script>

<svelte:window bind:scrollY />

<header 
    class="fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b border-transparent"
    class:bg-void={isScrolled}
    class:border-white-10={isScrolled}
    class:backdrop-blur-md={isScrolled}
    class:py-4={!isScrolled}
    class:py-3={isScrolled}
>
    <div class="max-w-450 mx-auto px-6 md:px-12 flex items-center justify-between">
        
        <a href="/" class="flex items-center gap-3 group">
            <div class="h-10 w-10 md:h-12 md:w-12 overflow-hidden">
                <enhanced:img src={logo} alt="LUHC" class="h-full w-full object-contain transition-transform group-hover:scale-105"/>
            </div>
            <span class="font-display font-bold text-xl md:text-2xl tracking-tighter uppercase text-white">
                LUHC
            </span>
        </a>

        <nav class="flex items-center gap-8">
            <a href="/about" class="hidden md:block text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
                The Club
            </a>
            <a href="/join" class="bg-luhc-red text-white font-display font-bold uppercase text-sm tracking-widest px-6 py-2 rounded-sm hover:bg-red-dark transition-colors">
                Join
            </a>
        </nav>

    </div>
</header>

<style>
    /* Tailwind v4 class replacement for conditional transparency */
    .bg-void { background-color: rgba(5, 5, 5, 0.8); }
    .border-white-10 { border-color: rgba(255, 255, 255, 0.1); }
</style>