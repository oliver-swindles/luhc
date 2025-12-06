<script>
  import OurExec from "$lib/images/pages/index/our-exec.jpg?enhanced";
  import OurCaptains from "$lib/images/pages/index/our-captains.jpg?enhanced";
  import OurTeams from "$lib/images/pages/index/our-teams.jpg?enhanced";

  const items = [
    {
      img: OurExec,
      title: "The Exec",
      desc: "Meet the leadership team guiding LUHC through this season.",
      link: "/about/meet-the-exec"
    },
    {
      img: OurCaptains,
      title: "The Captains",
      desc: "The leaders on the field and in the changing room.",
      link: "/about/meet-the-captains"
    },
    {
      img: OurTeams,
      title: "The Teams",
      desc: "7 teams, one family. See what makes each squad special.",
      link: "/teams"
    }
  ];
</script>

<div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
  {#each items as item}
    <a href={item.link} class="group flex flex-col bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden rounded-sm">
      
      <div class="relative w-full aspect-[4/3] overflow-hidden">
        <enhanced:img
          src={item.img}
          alt={item.title}
          class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div class="absolute inset-0 bg-luhc-red/0 group-hover:bg-luhc-red/10 transition-colors duration-300"></div>
      </div>

      <div class="p-8 flex flex-col flex-grow relative">
        <div class="absolute top-0 left-0 w-full h-1 bg-gray-100 group-hover:bg-luhc-red transition-colors duration-300"></div>

        <h3 class="text-2xl font-display font-bold uppercase text-luhc-dark mb-3 group-hover:text-luhc-red transition-colors">
          {item.title}
        </h3>
        
        <p class="text-gray-600 font-sans font-light leading-relaxed mb-6 flex-grow">
          {item.desc}
        </p>

        <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-luhc-red transition-colors">
          View Profile 
          <span class="transform group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
        </div>
      </div>

    </a>
  {/each}
</div>