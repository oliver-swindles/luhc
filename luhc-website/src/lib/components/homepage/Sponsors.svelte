<script lang="ts">
    import YellowDoorLetsLogo from "$lib/images/sponsors/YDL.png?enhanced";
    import LA1Logo from "$lib/images/sponsors/la1.avif?enhanced";
    import BowerhamHotelLogo from "$lib/images/sponsors/BowerhamHotel.jpg?enhanced";
    import GreensLogo from "$lib/images/sponsors/Greens.png?enhanced";
</script>

<section class="my-12">
    <h2 class="text-3xl font-bold mb-4 text-center md:text-left">Our Sponsors</h2>
    <p class="text-lg text-gray-700 mb-6">We’re proud to be supported by amazing sponsors. Want to join them? <a href="/contact-us" class="underline text-red-600 hover:text-red-800">Get in touch</a>!</p>
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center py-12">
      <div class="flex flex-col items-center text-center">
        <enhanced:img src={YellowDoorLetsLogo} alt="Yellow Door Lets Student Housing" class="h-16 object-contain mb-2" />
        <span class="text-sm text-gray-600">Yellow Door Lets</span>
      </div>
      <div class="flex flex-col items-center text-center">
        <enhanced:img src={LA1Logo} alt="LA1 Lancaster Nightclub" class="h-16 object-contain mb-2" />
        <span class="text-sm text-gray-600">LA1 Nightclub</span>
      </div>
      <div class="flex flex-col items-center text-center">
        <enhanced:img src={BowerhamHotelLogo} alt="The Bowerham Hotel" class="h-16 object-contain mb-2" />
        <span class="text-sm text-gray-600">The Bowerham Hotel</span>
      </div>
      <div class="flex flex-col items-center text-center">
        <enhanced:img src={GreensLogo} alt="Greens Pub Lancaster" class="h-16 object-contain mb-2" />
        <span class="text-sm text-gray-600">Greens Lancaster</span>
      </div>
    </div>
</section>