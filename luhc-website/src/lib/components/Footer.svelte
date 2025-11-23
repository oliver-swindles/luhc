<script>
  import LUHCLogo from "$lib/images/luhc-logo.png?enhanced";

  import FooterCopyright from "flowbite-svelte/FooterCopyright.svelte";
</script>

<footer class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-6 py-10">
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
    <div class="flex flex-col items-start space-y-4">
      <a href="/" class="flex items-center space-x-3">
        <enhanced:img src={LUHCLogo} alt="LUHC Logo" class="h-12 w-auto" />
        <span class="text-xl font-bold text-gray-900 dark:text-white">LU Hockey</span>
      </a>
      <p class="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
        Lancaster University Hockey Club. #ROSESARERED
      </p>
    </div>

    <div>
      <h2 class="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
      <ul class="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
        <li><a href="/contact-us" class="hover:text-red-600 transition-colors">Contact Us</a></li>
        <li><a href="https://github.com/oliver-swindles/luhc" class="hover:text-red-600 transition-colors">GitHub Page</a></li>
      </ul>
    </div>

    <div>
      <h2 class="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Socials</h2>
      <ul class="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
        <li><a href="https://www.facebook.com/groups/340322369353793/" class="hover:text-red-600 transition-colors">LUHC Facebook</a></li>
        <li><a href="https://www.instagram.com/lumhc_/" class="hover:text-red-600 transition-colors">Men's Instagram</a></li>
        <li><a href="https://www.instagram.com/luwhc_/" class="hover:text-red-600 transition-colors">Women's Instagram</a></li>
        <li><a href="https://www.instagram.com/luhc_dev/" class="hover:text-red-600 transition-colors">Dev Instagram</a></li>
      </ul>
    </div>

    <div>
      <h2 class="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Sponsors</h2>
      <ul class="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
        <li><a href="https://www.yellowdoorlets.co.uk/" class="hover:text-red-600 transition-colors">Yellow Door Lets</a></li>
        <li><a href="https://www.la1lancaster.co.uk/" class="hover:text-red-600 transition-colors">LA1 Nightclub & Bar</a></li>
        <li><a href="https://thebowerham.co.uk/" class="hover:text-red-600 transition-colors">The Bowerham Hotel</a></li>
        <li><a href="https://www.facebook.com/GreensLancaster/" class="hover:text-red-600 transition-colors">Greens Lancaster</a></li>
      </ul>
    </div>
  </div>

  <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
  <div class="text-center py-6">
    <FooterCopyright href="/" by="Lancaster University Hockey Club." />
    <p class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">Website by <a href="https://oliverswindles.com" class="hover:underline">Oliver Swindles</a></p>
    <div class="mt-4">
      <p class="font-semibold text-red-800">#ROSESARERED</p>
    </div>
  </div>
</footer>
