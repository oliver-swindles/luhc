<script lang="ts">
    import { onMount } from 'svelte';
    import heroImage from '$lib/assets/pages/index/p-flick-hero.jpg?enhanced';

    let loaded = $state(false);
    onMount(() => { loaded = true; });
</script>

<section class="relative h-dvh] w-full overflow-hidden bg-void">
    
    <div class="absolute inset-0">
        <enhanced:img 
            src={heroImage} 
            alt="LUHC Action" 
            class="h-full w-full object-cover object-center brightness-[0.4] scale-105 transition-transform duration-[2s] ease-out"
            class:scale-100={loaded}
        />
        <div class="absolute inset-0 opacity-[0.05] pointer-events-none" style="background-image: url('https://grainy-gradients.vercel.app/noise.svg')"></div>
    </div>

    <div class="absolute inset-0 flex flex-col justify-end pb-24 px-6 md:px-12 max-w-450 mx-auto z-10">
        
        <div class="overflow-hidden mb-6">
            <div class="transition-transform duration-1000 ease-expo" class:translate-y-full={!loaded}>
                <span class="border border-white/20 bg-black/30 backdrop-blur-sm px-3 py-1 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-white">
                    Est. 1964
                </span>
            </div>
        </div>

        <h1 class="text-white mb-8">
            <div class="overflow-hidden">
                <span class="block text-6xl md:text-9xl transition-transform duration-1000 delay-100 ease-expo" class:translate-y-full={!loaded}>
                    WE ARE
                </span>
            </div>
            <div class="overflow-hidden pb-2"> <span class="block text-6xl md:text-9xl text-luhc-red transition-transform duration-1000 delay-200 ease-expo" class:translate-y-full={!loaded}>
                    LANCASTER
                </span>
            </div>
        </h1>

        <div class="max-w-md transition-opacity duration-1000 delay-500" class:opacity-0={!loaded}>
            <p class="font-sans text-lg text-gray-300 font-light leading-relaxed border-l-2 border-luhc-red pl-6">
                Six teams. One ambition. The largest high-performance hockey club in the North West.
            </p>
        </div>

    </div>
</section>