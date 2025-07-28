<script>
  import { Card, Button } from 'flowbite-svelte';

  import WomensHero from "$lib/images/pages/womens/womens-hero.webp?enhanced";
  import OnesPhoto from "$lib/images/pages/womens/womens-ones.avif?enhanced";
  import TwosPhoto from "$lib/images/pages/womens/womens-twos.avif?enhanced";
  import ThreesPhoto from "$lib/images/pages/womens/womens-threes.avif?enhanced";

  const teams = [
    {
      name: "LUWHC 1st XI",
      photo: OnesPhoto,
      league: "BUCS Northern Tier 2A / North West Women's Division 1",
      captain: "Jess Loader",
      vice: "Lauren Willson",
      quote: "Hey I’m Jess, captain for the women's 1s. After a successful season last year the first team are working hard and looking forward to the challenges the coming season will bring! The team is hardworking, motivated and aspirational, and never lets the northern weather get in the way of our goals. We are a supportive and enthusiastic team who love a challenge and I am very excited to captain this team as I believe this season could be a very successful one! As captain I want to continue the supportive and motivating environment that we worked hard to create last year and use that to achieve a fun and rewarding season of hockey.",
    },
    {
      name: "LUWHC 2nd XI",
      photo: TwosPhoto,
      league: "BUCS Northern Tier 3A",
      captain: "Casey Holliday & Ella Sampson",
      vice: "",
      quote: "Hello everybody, We are Casey and Ella co-captains of the 2s this year! We are really looking forward to welcoming back the team and all the new freshers! Us 2s are a friendly bunch and are very encouraging of each other both on and off the pitch. Of course we have our competitive side and are looking to keep progressing within the leagues. This year we want to hit the ground running and start rebuilding upon skills and fitness in preseason training and throughout the rest of the year. We hope everyone is as eager as we are to get back to hockey! See you all soon, Casey & Ella",
    },
    {
      name: "LUWHC 3rd XI",
      photo: ThreesPhoto,
      league: "North West Women's Division 5 North Central",
      captain: "Ellie Amies-King (Cinders)",
      vice: "Esme Ikram",
      quote: "Hi, I'm Cinders, the 3s captain for this year. I can't wait to captain the 3s as we made so much progress last year and I'm really excited to see what we can do! We always strive to make the 3s a friendly team who gel really well, and we can't wait to welcome the new members! We're also focusing on fitness and skill a bit more this year, as we're aiming for promotion which we only just missed out on by 2 points last year! I can't wait for the season to start.",
    }
  ];
</script>

<svelte:head>
  <title>Women's Club | Lancaster University Hockey Club</title>
</svelte:head>

<!-- Hero -->
<section class="p-8">
  <div class="relative overflow-hidden rounded-xl text-white text-center px-8 py-16 shadow-xl">
    <enhanced:img
      src={WomensHero}
      alt="Men's Club Hero"
      class="absolute inset-0 w-full h-full object-cover z-[-1]"
    />
    <div class="absolute inset-0 bg-black/70 z-0 rounded-xl"></div>
    <div class="relative z-10 space-y-4" data-aos="fade-in">
      <h1 class="text-4xl md:text-5xl font-extrabold drop-shadow-lg">Women's Club</h1>
      <p class="text-xl max-w-2xl mx-auto drop-shadow-md">Lancaster University Women's Hockey Club</p>
    </div>
  </div>
</section>

<div class="max-w-5xl mx-auto px-4 space-y-12 text-gray-900">
  <!-- About -->
  <section data-aos="fade-up">
    <h2 class="text-3xl font-bold mb-4">About LUWHC</h2>
    <div class="space-y-4">
      <p>LUWHC is a friendly and supportive community made up of three teams, complemented by the development squad, which will give you friends and memories for life. We compete in BUCS leagues on Wednesdays and we have a Saturday 1st XI consisting of players from across the club who compete in local leagues.</p>
      <p>If you are interested in getting involved, follow our social media accounts to keep up to date about our trials in freshers week and after Christmas.</p>
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
        <li>Indoor: Sunday Mornings (Term 2)</li>
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
