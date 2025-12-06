<script>
  import LUHCLogo from "$lib/images/luhc-logo.png?enhanced";
  import FooterCopyright from "flowbite-svelte/FooterCopyright.svelte";
</script>

<footer class="bg-luhc-dark text-white border-t-4 border-luhc-red pt-16 pb-8">
  <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
    
    <div class="flex flex-col items-start space-y-6">
      <a href="/" class="flex items-center space-x-3 group">
        <enhanced:img src={LUHCLogo} alt="LUHC Logo" class="h-16 w-auto opacity-90 group-hover:opacity-100 transition-opacity" />
        <div class="flex flex-col">
          <span class="text-2xl font-display font-bold uppercase tracking-wide">LU Hockey</span>
          <span class="text-xs font-sans text-gray-400">Est. 1964</span>
        </div>
      </a>
      <p class="text-sm text-gray-400 leading-relaxed max-w-xs font-light">
        The official home of Lancaster University Hockey Club. Competitive, social, and inclusive.
      </p>
      <div class="inline-block bg-white/5 px-3 py-1 rounded border border-white/10">
        <span class="text-xs font-bold text-luhc-red tracking-widest">#ROSESARERED</span>
      </div>
    </div>

    <div>
      <h2 class="mb-6 text-sm font-display font-bold uppercase tracking-widest text-white border-b border-white/10 pb-2 inline-block">Club Info</h2>
      <ul class="space-y-3 text-gray-400 text-sm font-sans">
        <li><a href="/about" class="hover:text-luhc-red transition-colors duration-200">About Us</a></li>
        <li><a href="/contact-us" class="hover:text-luhc-red transition-colors duration-200">Contact Committee</a></li>
        <li><a href="/sponsors" class="hover:text-luhc-red transition-colors duration-200">Our Sponsors</a></li>
        <li><a href="https://github.com/oliver-swindles/luhc" target="_blank" class="hover:text-luhc-red transition-colors duration-200 flex items-center gap-2">
            GitHub Repo <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.655-3.795-1.455-3.795-1.455-.54-1.38-1.335-1.755-1.335-1.755-1.095-.75.09-.735.09-.735 1.2.09 1.83 1.245 1.83 1.245 1.08 1.86 2.805 1.32 3.495 1.005.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.225 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405 1.02 0 2.04.135 3 .405 2.295-1.56 3.3-1.23 3.3-1.23.66 1.695.24 2.925.12 3.225.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
        </a></li>
      </ul>
    </div>

    <div>
      <h2 class="mb-6 text-sm font-display font-bold uppercase tracking-widest text-white border-b border-white/10 pb-2 inline-block">Follow Us</h2>
      <ul class="space-y-3 text-gray-400 text-sm font-sans">
        <li><a href="https://www.facebook.com/groups/340322369353793/" target="_blank" class="hover:text-luhc-red transition-colors duration-200">LUHC Facebook</a></li>
        <li><a href="https://www.instagram.com/lumhc_/" target="_blank" class="hover:text-luhc-red transition-colors duration-200">Men's Instagram</a></li>
        <li><a href="https://www.instagram.com/luwhc_/" target="_blank" class="hover:text-luhc-red transition-colors duration-200">Women's Instagram</a></li>
        <li><a href="https://www.instagram.com/luhc_dev/" target="_blank" class="hover:text-luhc-red transition-colors duration-200">Dev Squad Instagram</a></li>
      </ul>
    </div>

    <div>
      <h2 class="mb-6 text-sm font-display font-bold uppercase tracking-widest text-white border-b border-white/10 pb-2 inline-block">Partners</h2>
      <ul class="space-y-3 text-gray-400 text-sm font-sans">
        <li><a href="https://www.yellowdoorlets.co.uk/" target="_blank" class="hover:text-yellow-400 transition-colors duration-200">Yellow Door Lets</a></li>
        <li><a href="https://www.la1lancaster.co.uk/" target="_blank" class="hover:text-white transition-colors duration-200">LA1 Nightclub</a></li>
        <li><a href="https://thebowerham.co.uk/" target="_blank" class="hover:text-white transition-colors duration-200">The Bowerham Hotel</a></li>
        <li><a href="https://www.facebook.com/GreensLancaster/" target="_blank" class="hover:text-green-400 transition-colors duration-200">Greens Lancaster</a></li>
      </ul>
    </div>
  </div>

  <div class="border-t border-white/10 mt-8 pt-8 px-6">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
      
      <div class="flex items-center gap-1">
        <span>&copy; {new Date().getFullYear()} Lancaster University Hockey Club.</span>
        <span class="hidden md:inline"> All Rights Reserved.</span>
      </div>

      <div class="mt-4 md:mt-0 flex items-center gap-4">
        <p class="hover:text-white transition-colors">#ROSESARERED</p>
        <div class="h-3 w-[1px] bg-white/20"></div>
        <p>
          Website by <a href="https://oliverswindles.com" target="_blank" class="text-luhc-red hover:text-white font-bold transition-colors">Oliver Swindles</a>
        </p>
      </div>
    </div>
  </div>
</footer>