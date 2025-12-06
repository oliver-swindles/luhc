<script lang="ts">
    import YellowDoorLetsLogo from "$lib/images/sponsors/YDL.png?enhanced";
    import LA1Logo from "$lib/images/sponsors/la1.avif?enhanced";
    import BowerhamHotelLogo from "$lib/images/sponsors/BowerhamHotel.jpg?enhanced";
    import GreensLogo from "$lib/images/sponsors/Greens.png?enhanced";
</script>

<section class="my-12">
    <div class="flex items-center gap-4 mb-8">
        <h2 class="font-display uppercase text-3xl font-bold text-luhc-dark tracking-tight">Official Partners</h2>
        <div class="h-[1px] flex-grow bg-gray-200"></div>
    </div>

    <p class="text-lg text-gray-600 font-light mb-8 max-w-2xl">
        We're proud to be supported by local businesses. Want to join the team? 
        <a href="/contact-us" class="font-bold text-luhc-red hover:underline decoration-2 underline-offset-4">Get in touch</a>.
    </p>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center py-8">
        
        <a href="https://www.yellowdoorlets.co.uk/" target="_blank" class="group flex flex-col items-center justify-center p-4 transition-all duration-300">
            <enhanced:img src={YellowDoorLetsLogo} alt="Yellow Door Lets" class="h-16 w-auto object-contain mb-4 filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
            <span class="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-luhc-red transition-colors">Yellow Door Lets</span>
        </a>

        <a href="https://www.la1lancaster.co.uk/" target="_blank" class="group flex flex-col items-center justify-center p-4 transition-all duration-300">
            <enhanced:img src={LA1Logo} alt="LA1 Nightclub" class="h-16 w-auto object-contain mb-4 filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
            <span class="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-luhc-red transition-colors">LA1 Nightclub</span>
        </a>

        <a href="https://thebowerham.co.uk/" target="_blank" class="group flex flex-col items-center justify-center p-4 transition-all duration-300">
            <enhanced:img src={BowerhamHotelLogo} alt="The Bowerham Hotel" class="h-16 w-auto object-contain mb-4 filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
            <span class="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-luhc-red transition-colors">Bowerham Hotel</span>
        </a>

        <a href="https://www.facebook.com/GreensLancaster/" target="_blank" class="group flex flex-col items-center justify-center p-4 transition-all duration-300">
            <enhanced:img src={GreensLogo} alt="Greens Lancaster" class="h-16 w-auto object-contain mb-4 filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
            <span class="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-luhc-red transition-colors">Greens</span>
        </a>

    </div>
</section>