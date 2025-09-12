<script>
  import { Card, Button } from 'flowbite-svelte';

  import MensHero from "$lib/images/pages/mens/mens-hero.jpg?enhanced";
  import OnesPhoto from "$lib/images/pages/mens/mens-ones.avif?enhanced";
  import TwosPhoto from "$lib/images/pages/mens/mens-twos.avif?enhanced";
  import ThreesPhoto from "$lib/images/pages/mens/mens-threes.avif?enhanced";

  const teams = [
    {
      name: "LUMHC 1st XI",
      photo: OnesPhoto,
      league: "BUCS Northern Tier 1A / North West Men's Division 2 / Men's Lancashire Cup (Division 2)",
      captain: "Josh Thomas",
      vice: "Hamish Fergi",
      quote: "Hamish and I are very excited for the upcoming season. Our second season in BUCS 1A will no doubt be an incredibly tough test, but it’s one that we are looking forward to rise to. Our overall goal will be to build on last years success, amid tough opposition, and push the team to its full potential, aiming to finish at the top of the table. Within the Saturday league our aim is to win the league, but we’re also aiming to push and develop players further, including those joining us from the 2nd and 3rd XIs, forming a strong team bond which will help us reach our goals. Overall we want to grow as a team, build strength throughout the year, and ultimately win Roses.",
    },
    {
      name: "LUMHC 2nd XI",
      photo: TwosPhoto,
      league: "BUCS Northern Tier 3A",
      captain: "Joe Reed",
      vice: "James Shaw",
      quote: "We’re extremely excited for the upcoming year. As a team, we are really hopeful for a successful season, as we have a very real chance of gaining promotion, having a good run in the cup, and winning Roses. The atmosphere in our team is really special, which is welcoming to players who both want to enjoy competitive hockey, and improve their skills. The values at the core of our team really give us a great opportunity to reach our goals and do something special this year.",
    },
    {
      name: "LUMHC 3rd XI",
      photo: ThreesPhoto,
      league: "North West Men's Division 4 North",
      captain: "Jack Brown",
      vice: "Ed Dallaway",
      quote: "I am very excited to be captain of the 3s this year. We won promotion last year so the new league will be an exciting challenge and we will aim to stay up. I want to continue to develop the fun environment of the 3s, support players individual development and create a cohesive team.",
    }
  ];
</script>

<svelte:head>
  <title>Men's Club | Lancaster University Hockey Club</title>
</svelte:head>

<!-- Hero -->
<section class="p-8">
  <div class="relative overflow-hidden rounded-xl text-white text-center px-8 py-16 shadow-xl">
    <enhanced:img
      src={MensHero}
      alt="Men's Club Hero"
      class="absolute inset-0 w-full h-full object-cover z-[-1]"
    />
    <div class="absolute inset-0 bg-black/70 z-0 rounded-xl"></div>
    <div class="relative z-10 space-y-4" data-aos="fade-in">
      <h1 class="text-4xl md:text-5xl font-extrabold drop-shadow-lg">Men's Club</h1>
      <p class="text-xl max-w-2xl mx-auto drop-shadow-md">Lancaster University Men's Hockey Club</p>
    </div>
  </div>
</section>

<div class="max-w-5xl mx-auto px-4 space-y-12 text-gray-900">
  <!-- About -->
  <section data-aos="fade-up">
    <h2 class="text-3xl font-bold mb-4">About LUMHC</h2>
    <div class="space-y-4">
      <p>We have 3 competitive teams as well as a mixed development squad. Competitive teams play BUCS games on Wednesdays against other Universities, and we also have a Saturday league 1st XI sourcing players from across the club. The development squad provides a friendly environment for those who are new to the sport to get involved, learn and grow, whilst also offering the opportunity to those wanting to play more competitively to develop and progress to our competitive teams.</p>
      <p>We are a very social club, so even if you do not wish to play hockey, you can always join as a social member, taking part in club social events and making friends for life along the way.</p>
      <p>If you’re looking to join the club, keep a look out for trials posters on campus, make sure to find us at the fresher fair, and reach out through our social media pages and we’ll be more than happy to welcome you into our community.</p>
    </div>
  </section>

  <!-- Kit & Training -->
  <section class="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up">
    <div>
      <h2 class="text-2xl font-semibold mb-2">Kit</h2>
      <ul class="list-disc list-inside space-y-1">
        <li><span class="font-semibold">Home:</span> Red top, black shorts, red socks</li>
        <li><span class="font-semibold">Away:</span> Red top, black shorts, black socks</li>
      </ul>
    </div>
    <div>
      <h2 class="text-2xl font-semibold mb-2">Trainings</h2>
      <ul class="list-disc list-inside space-y-1">
        <li>1s & 2s: Monday and Thursday Evenings</li>
        <li>3s: Tuesday and Thursday Evenings</li>
        <li>Indoor: Sunday Morning (Term 2)</li>
        <li>Development Squad: Tuesday and Thursday Afternoon</li>
      </ul>
    </div>
  </section>

  <!-- Teams (Full-Width Cards) -->
  <section data-aos="fade-up">
    <h2 class="text-3xl font-bold mb-6 text-center">Our Teams</h2>
    <div class="space-y-12">
      {#each teams as team}
        <Card class="w-full min-w-full shadow-lg overflow-hidden" data-aos="zoom-in">
          <div class="flex flex-col">
            <enhanced:img src={team.photo} alt={team.name + " Photo"} class="w-full h-auto object-cover rounded-md" />
            <div class="p-6">
              <h3 class="text-2xl font-semibold mb-1">{team.name}</h3>
              <p class="text-sm text-gray-600 mb-3">{team.league}</p>
              <p class="mb-2"><span class="font-semibold">Captain:</span> {team.captain}</p>
              <p class="mb-4"><span class="font-semibold">Vice Captain:</span> {team.vice}</p>
              <blockquote class="italic text-gray-700">“{team.quote}”</blockquote>
            </div>
          </div>
        </Card>
      {/each}
    </div>
  </section>

  <!-- CTA -->
  <section class="text-center py-12" data-aos="fade-in">
    <Button href="/contact-us" color="red" class="text-xl px-8 py-4">Get Involved</Button>
  </section>
</div>

<style>
  /* Mobile adjustments */
  @media (max-width: 640px) {
    .max-w-5xl {
      max-width: 90%;
    }
  }
</style>
