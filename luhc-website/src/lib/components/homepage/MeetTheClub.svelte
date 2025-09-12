<script>
  import Button from "flowbite-svelte/Button.svelte";
  import Card from "flowbite-svelte/Card.svelte";
  import OurExec from "$lib/images/pages/index/our-exec.jpg?enhanced";
  import OurCaptains from "$lib/images/pages/index/our-captains.jpg?enhanced";
  import OurTeams from "$lib/images/pages/index/our-teams.jpg?enhanced";
</script>

<!-- Meet the Club -->
<section class="my-12">
  <h2 class="text-3xl font-bold mb-4 text-center md:text-left">Meet the Club</h2>
  <p class="text-lg text-gray-700 mb-6">LUHC is powered by passionate individuals on and off the pitch...</p>

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
    <Button class="w-full" href={item.link}>Meet {item.title} &RightArrow;</Button>
  </div>
  </Card>
  {/each}
  </div>
</section>
