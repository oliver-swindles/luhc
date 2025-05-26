<script>
  import { Footer, FooterCopyright, FooterLinkGroup, FooterLink, FooterBrand } from "flowbite-svelte";

  import LUHCLogo from "$lib/images/luhc-logo.png";
</script>

<Footer footerType="socialmedia" class="border-t-1 border-gray-200">
  <div class="md:flex md:justify-between">
    <div class="mb-6 md:mb-0">
      <FooterBrand href="https://www.luhc.co.uk" src={LUHCLogo} alt="LUHC Logo" name="LUHC" />
    </div>
    <div class="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
      <div>
        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
        <FooterLinkGroup>
          <FooterLink liClass="mb-4" href="/contact-us">Contact Us</FooterLink>
        </FooterLinkGroup>
      </div>
      <div>
        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Socials</h2>
        <FooterLinkGroup>
          <FooterLink liClass="mb-4" href="https://www.facebook.com/groups/340322369353793/">LUHC Facebook</FooterLink>
          <FooterLink liClass="mb-4" href="https://www.instagram.com/lumhc_/">Men's Instagram</FooterLink>
          <FooterLink liClass="mb-4" href="https://www.instagram.com/luwhc_/">Women's Instagram</FooterLink>
          <FooterLink liClass="mb-4" href="https://www.instagram.com/luhc_dev/">Dev Instagram</FooterLink>
        </FooterLinkGroup>
      </div>
      <div>
        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Sponsors</h2>
        <FooterLinkGroup>
          <FooterLink liClass="mb-4" href="https://www.vibelancaster.com/">VIBE Nightclub & Bar</FooterLink>
          <FooterLink liClass="mb-4" href="https://sultanexperiencelancaster.co.uk/">The Sultan of Lancaster Experience</FooterLink>
          <FooterLink liClass="mb-4" href="https://studenthousinglancaster.co.uk/">Student Housing Lancaster</FooterLink>
        </FooterLinkGroup>
      </div>
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
</Footer>