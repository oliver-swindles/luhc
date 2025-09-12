<script lang="ts">
    import VibeLogo from "$lib/images/sponsors/vibe.png?enhanced";
    import SultansLogo from "$lib/images/sponsors/sultans.jpeg?enhanced";
    import SHLLogo from "$lib/images/sponsors/student-housing.webp?enhanced";
</script>

<section class="my-12">
    <h2 class="text-3xl font-bold mb-4 text-center md:text-left">Our Sponsors</h2>
    <p class="text-lg text-gray-700 mb-6">We’re proud to be supported by amazing sponsors. Want to join them? <a href="/contact-us" class="underline text-red-600 hover:text-red-800">Get in touch</a>!</p>
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-8 items-center py-12">
      <div class="flex flex-col items-center text-center">
        <enhanced:img src={VibeLogo} alt="VIBE Nightclub & Bar" class="h-16 object-contain mb-2" />
        <span class="text-sm text-gray-600">VIBE Nightclub & Bar</span>
      </div>
      <div class="flex flex-col items-center text-center">
        <enhanced:img src={SultansLogo} alt="The Sultan of Lancaster Experience" class="h-16 object-contain mb-2" />
        <span class="text-sm text-gray-600">The Sultan of Lancaster Experience</span>
      </div>
      <div class="flex flex-col items-center text-center">
        <enhanced:img src={SHLLogo} alt="Student Housing Lancaster" class="h-16 object-contain mb-2" />
        <span class="text-sm text-gray-600">Student Housing Lancaster</span>
      </div>
    </div>
</section>