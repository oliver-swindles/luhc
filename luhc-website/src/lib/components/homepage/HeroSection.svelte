<script lang="ts">
    import LUHCLogo from '$lib/images/luhc-logo.png?enhanced';
    import HeroPFlick from '$lib/images/pages/index/p-flick-hero.jpg?enhanced';
</script>

<section class="relative h-[85vh] w-full overflow-hidden bg-luhc-dark">
    <enhanced:img
        src={HeroPFlick}
        alt="Lancaster University Hockey action shot"
        class="absolute inset-0 w-full h-full object-cover object-center opacity-80"
    />

    <div class="absolute inset-0 bg-linear-to-t from-luhc-dark via-luhc-dark/40 to-transparent"></div>

    <div class="absolute inset-0 flex flex-col justify-end pb-12 md:pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        
        <div class="mb-6 flex items-end gap-4 animate-in slide-in-from-bottom-4 duration-1000">
            <enhanced:img src={LUHCLogo} alt="LUHC Logo" class="h-24 w-auto drop-shadow-2xl" />
            
            <!-- <div class="hidden md:block h-12 w-[1px] bg-white/30 mb-2"></div> -->
            <!-- <span class="hidden md:block text-white/60 font-display uppercase tracking-widest text-sm mb-4">Est. 1964</span> -->
        </div>

        <h1 class="font-display font-bold text-6xl md:text-8xl text-white uppercase leading-[0.9] tracking-tighter drop-shadow-xl max-w-4xl">
            Lancaster University <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-luhc-red to-red-500">Hockey Club</span>
        </h1>

        <div class="mt-6 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div class="h-1 w-24 bg-luhc-red"></div>
            <p class="font-sans text-xl text-gray-200 max-w-xl font-light">
                One of the largest, most competitive, and welcoming sports clubs at Lancaster.
                <span class="block mt-2 text-white font-medium">#RosesAreRed</span>
            </p>
        </div>

    </div>
</section>