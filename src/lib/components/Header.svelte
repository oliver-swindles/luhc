<script>
  import Navbar from "flowbite-svelte/Navbar.svelte";
  import NavBrand from "flowbite-svelte/NavBrand.svelte";
  import NavLi from "flowbite-svelte/NavLi.svelte";
  import NavUl from "flowbite-svelte/NavUl.svelte";
  import NavHamburger from "flowbite-svelte/NavHamburger.svelte";
  import Dropdown from "flowbite-svelte/Dropdown.svelte";
  import DropdownItem from "flowbite-svelte/DropdownItem.svelte";

  import LUHCLogo from "$lib/images/luhc-logo.png?enhanced";
</script>

<div class="relative px-8 text-white z-50">
  <Navbar class="fixed bg-red-800 dark:bg-red-800 text-white start-0 top-0 z-20 w-full border-b px-2 py-2.5 md:py-1 sm:px-4">
    <NavBrand href="/">
      <enhanced:img src={LUHCLogo} class="me-3 h-6 w-auto  sm:h-9" alt="LUHC Logo" />
      <span class="self-center text-xl font-semibold whitespace-nowrap text-white">LUHC</span>
    </NavBrand>
    <NavHamburger />
    <NavUl class="text-white">
      <NavLi href="/" class="text-black md:text-white md:hover:text-gray-400 hover:text-gray-400">Home</NavLi>
      <NavLi role="button" aria-haspopup="true" class="cursor-pointer text-black md:text-white md:hover:text-gray-400 hover:text-gray-400">
        About&nbsp;<span class="font-bold">&#709;</span>
      </NavLi>
      <Dropdown class="w-44">
        <DropdownItem href="/about">About the Club</DropdownItem>
        <DropdownItem href="/about/meet-the-exec">Meet the Exec</DropdownItem>
        <DropdownItem href="/about/meet-the-captains">Meet the Captains</DropdownItem>
        <DropdownItem href="/roses">Roses</DropdownItem>
        <DropdownItem href="/socials">Socials</DropdownItem>
      </Dropdown>
      <NavLi role="button" aria-haspopup="true" class="cursor-pointer text-black md:text-white md:hover:text-gray-400 hover:text-gray-400">
        Teams&nbsp;<span class="font-bold">&#709;</span>
      </NavLi>
      <Dropdown class="w-44">
        <DropdownItem href="/teams/mens-club">Men's Club</DropdownItem>
        <DropdownItem href="/teams/womens-club">Women's Club</DropdownItem>
        <DropdownItem href="/teams/development-squad">Development Squad</DropdownItem>
        <DropdownItem href="/teams/indoor-hockey">Indoor Hockey</DropdownItem>
      </Dropdown>
      <NavLi href="/sponsors" class="text-black md:text-white md:hover:text-gray-400 hover:text-gray-400">Sponsors</NavLi>
      <NavLi href="/contact-us" class="text-black md:text-white md:hover:text-gray-400 hover:text-gray-400">Contact</NavLi>
    </NavUl>
  </Navbar>
  <div class="pt-[3.5rem] md:pt-[4.5rem]"></div>
</div>