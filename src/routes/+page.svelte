<script lang="ts">
  import Button from "flowbite-svelte/Button.svelte";
  import Card from "flowbite-svelte/Card.svelte";
  import Table from "flowbite-svelte/Table.svelte";
  import TableBody from "flowbite-svelte/TableBody.svelte";
  import TableBodyCell from "flowbite-svelte/TableBodyCell.svelte";
  import TableBodyRow from "flowbite-svelte/TableBodyRow.svelte";
  import TableHead from "flowbite-svelte/TableHead.svelte";
  import TableHeadCell from "flowbite-svelte/TableHeadCell.svelte";

  import LUHCLogo from "$lib/images/luhc-logo.png?enhanced";
  import HeroPFlick from "$lib/images/pages/index/p-flick-hero.jpg?enhanced";
  import VibeLogo from "$lib/images/sponsors/vibe.png?enhanced";
  import SultansLogo from "$lib/images/sponsors/sultans.jpeg?enhanced";
  import SHLLogo from "$lib/images/sponsors/student-housing.webp?enhanced";
  import OurExec from "$lib/images/pages/index/our-exec.jpg?enhanced";
  import OurCaptains from "$lib/images/pages/index/our-captains.jpg?enhanced";
  import OurTeams from "$lib/images/pages/index/our-teams.jpg?enhanced";
  import LUHCExecMessage from "$lib/images/pages/index/luhc-exec-message.jpg?enhanced";

  import AboutGallery1 from "$lib/images/pages/index/about-gallery-1.jpg?enhanced";
  import AboutGallery2 from "$lib/images/pages/index/about-gallery-2.jpg?enhanced";
  import AboutGallery3 from "$lib/images/pages/index/about-gallery-3.jpg?enhanced";
  import AboutGallery4 from "$lib/images/pages/index/about-gallery-4.jpg?enhanced";

  let gallery = [
    AboutGallery1,
    AboutGallery2,
    AboutGallery3,
    AboutGallery4,
  ];
</script>

<svelte:head>
	<title>Lancaster University Hockey Club</title>
</svelte:head>

<!-- Hero Section -->
<section class="p-8">
  <div class="relative overflow-hidden rounded-xl text-white text-center px-8 py-16 shadow-xl">
    <enhanced:img 
      src={HeroPFlick} 
      alt="Hero Background" 
      class="absolute inset-0 w-full h-full object-cover z-[-1]"
    />
    <div class="absolute inset-0 bg-black/70 z-0 rounded-xl"></div>
    <div class="relative z-10 space-y-6">
      <enhanced:img 
        src={LUHCLogo} 
        alt="LUHC Logo" 
        class="h-36 w-auto mx-auto"
      />
      <h1 class="text-4xl md:text-5xl font-extrabold drop-shadow-lg">Lancaster University Hockey Club</h1>
      <p class="text-xl max-w-2xl mx-auto drop-shadow-md">
        One of the largest, most competitive, and most welcoming sports clubs at Lancaster University.
        <span class="text-red-400 font-semibold">#ROSESARERED</span>
      </p>
    </div>
  </div>
</section>

<div class="max-w-6xl mx-auto px-4 text-gray-900">
  <!-- Latest News -->
  <section class="my-12">
    <!-- <h2 class="text-3xl font-bold mb-6 text-center md:text-left">Latest News</h2> -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <enhanced:img src={gallery[0]} alt="Latest News" class="rounded-xl w-full h-80 object-cover shadow-lg" />
      <div class="space-y-4">
        <p>The official website of Lancaster University Hockey club, one of the biggest and friendliest clubs on campus. We have three men's and three women's teams, competing in the BUCS (British university and college sport) Wednesday leagues, as well as both of our 1st XIs competing in local Saturday leagues. We boast an impressive development squad for members who would like to play recreationally, as well as members who wish to develop their game and progress into the competitive teams. We host socials every Wednesday, Saturday and have two formal dinners each year.</p>
        <!-- <h3 class="text-2xl font-semibold">Title of News Article</h3> -->
        <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus numquam iste dolorem optio recusandae dignissimos.</p> -->
        <!-- <Button class="w-fit">Read More</Button> -->
      </div>
    </div>
  </section>

  <hr class="border-gray-200 my-12">

  <!-- Upcoming Fixtures -->
  <section class="my-12">
    <h2 class="text-3xl font-bold mb-6 text-center md:text-left">Upcoming Summer League Fixtures</h2>
    <div class="overflow-x-auto">
      <Table class="rounded-lg shadow-lg">
        <TableHead>
          <TableHeadCell>Date</TableHeadCell>
          <TableHeadCell>Team</TableHeadCell>
          <TableHeadCell>Opponent</TableHeadCell>
          <TableHeadCell>Venue</TableHeadCell>
          <TableHeadCell>Time</TableHeadCell>
        </TableHead>
        <TableBody>
          {#each [
            ["26-05-2025", "Team 2", "Team 8", "Home", "19:00"],
            ["26-05-2025", "Team 7", "Team 5", "Home", "19:00"],
            ["26-05-2025", "Team 10", "Team 3", "Home", "20:00"],
            ["26-05-2025", "Team 6", "Team 1", "Home", "20:00"],
            ["26-05-2025", "Team 9", "Team 4", "Home", "21:00"]
          ] as row}
            <TableBodyRow>
              {#each row as cell}<TableBodyCell>{cell}</TableBodyCell>{/each}
            </TableBodyRow>
          {/each}
        </TableBody>
      </Table>
    </div>
  </section>
</div>

<!-- Club Bio -->
<section class="bg-red-800 text-white text-center py-16 px-6">
  <div class="max-w-4xl mx-auto space-y-6">
    <h2 class="text-3xl font-bold">A Bit About Us</h2>
    <p class="text-lg leading-relaxed">LUHC is one of the biggest and friendliest clubs on campus, with 6 competitive teams and a development squad. From BUCS to local leagues, from weekly socials to formal dinners, we're more than just hockey—LUHC is a community.</p>
  </div>
</section>

<div class="max-w-6xl mx-auto px-4">
  <!-- Sponsors -->
  <section class="my-12">
    <h2 class="text-3xl font-bold mb-4 text-center md:text-left">Our Sponsors</h2>
    <p class="text-lg text-gray-700 mb-6">We’re proud to be supported by amazing sponsors. Want to join them? <a href="/contact-us" class="underline text-red-600 hover:text-red-800">Get in touch</a>!</p>
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-8 items-center py-12">
      <div class="flex flex-col items-center text-center">
        <enhanced:img src={VibeLogo} alt="VIBE" class="h-16 object-contain mb-2" />
        <span class="text-sm text-gray-600">VIBE Nightclub & Bar</span>
      </div>
      <div class="flex flex-col items-center text-center">
        <enhanced:img src={SultansLogo} alt="The Sultan" class="h-16 object-contain mb-2" />
        <span class="text-sm text-gray-600">The Sultan of Lancaster Experience</span>
      </div>
      <div class="flex flex-col items-center text-center">
        <enhanced:img src={SHLLogo} alt="Student Housing Lancaster" class="h-16 object-contain mb-2" />
        <span class="text-sm text-gray-600">Student Housing Lancaster</span>
      </div>
    </div>
  </section>

  <!-- Player Testimonials Section -->
  <!-- <section class="bg-gray-50 py-16 px-6 rounded-xl">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-12">Player Testimonials</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-white p-6 rounded-xl shadow-md" data-aos="fade-up">
          <p class="text-gray-700 italic mb-4">"LUHC helped me grow not just as a player but as a person. It's a family on and off the pitch."</p>
          <div class="font-bold text-red-800">– Alex, Men's 1s</div>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="100">
          <p class="text-gray-700 italic mb-4">"Joining LUHC was the best decision I made at uni. The team spirit and socials are unmatched!"</p>
          <div class="font-bold text-red-800">– Jess, Women's 2s</div>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="200">
          <p class="text-gray-700 italic mb-4">"Whether you're new or experienced, LUHC gives everyone a chance to thrive."</p>
          <div class="font-bold text-red-800">– Sam, Development Squad</div>
        </div>
      </div>
    </div>
  </section> -->

  <!-- Meet the Club -->
  <section class="my-12">
    <h2 class="text-3xl font-bold mb-4 text-center md:text-left">Meet the Club</h2>
    <p class="text-lg text-gray-700 mb-6">
      LUHC is powered by passionate individuals on and off the pitch...
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each [
        {
          img: OurExec,
          title: "Our Exec",
          desc: "Meet the leadership team guiding LUHC through the season.",
          link: "/about/meet-the-exec"
        },
        {
          img: OurCaptains,
          title: "Our Captains",
          desc: "The leaders on the field and in the locker room.",
          link: "/about/meet-the-captains"
        },
        {
          img: OurTeams,
          title: "Our Teams",
          desc: "7 teams, one family. See what makes each squad special.",
          link: "/teams"
        }
      ] as item}
        <Card class="mx-auto">
          <enhanced:img
            src={item.img}
            alt={item.title}
            class="w-full max-h-48 object-cover rounded-t-lg"
          />
          <div class="p-4 md:p-6">
            <h3 class="text-xl font-bold text-gray-900">{item.title}</h3>
            <p class="text-sm text-gray-700 mt-2 mb-4">{item.desc}</p>
            <Button class="w-full" href={item.link}>
              Meet {item.title} &RightArrow;
            </Button>
          </div>
        </Card>
      {/each}
    </div>
  </section>
</div>

<!-- Chair Statement -->
<section class="relative py-36 text-white text-center overflow-hidden min-h-[60vh]">
  <enhanced:img
    src={LUHCExecMessage}
    alt="Chair Message Background"
    class="absolute inset-0 w-full h-full object-cover z-0"
  />

  <!-- Semi-transparent overlay -->
  <div class="absolute inset-0 bg-[rgba(0,0,0,0.8)] z-10"></div>

  <!-- Content -->
  <div class="relative z-20 max-w-4xl mx-auto px-6">
    <h2 class="text-3xl font-bold mb-6">A Message from Our Chair Team</h2>
    <p class="text-lg leading-relaxed">
      Hi, we are the chair team for the 24/25 season! Our objectives this year is to boost the clubs presence within the university going from already one of the largest mixed societies at Lancaster University to even greater heights. With new challenges to face in the upcoming season we look forward to making progress and allowing the club to run smoothly whilst sustaining the friendly and competitive nature of the club. We look forward in joining you for the upcoming season!
    </p>
  </div>
</section>


<!-- CTA -->
<section class="px-6 py-16 bg-red-800 text-white text-center">
  <h2 class="text-3xl font-bold mb-4">Join the LUHC Family</h2>
  <p class="text-lg mb-6">From beginners to elite athletes, there's a place for everyone at LUHC.</p>
  <Button href="/contact-us" color="light">Get in Touch</Button>
</section>
