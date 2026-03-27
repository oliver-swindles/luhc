<script lang="ts">
  import { resolve } from '$app/paths';
  import OurExec from '$lib/images/pages/index/our-exec.jpg';
  import OurCaptains from '$lib/images/pages/index/our-captains.jpg';
  import OurTeams from '$lib/images/pages/index/our-teams.jpg';

  const items = [
    {
      img: OurExec,
      title: 'The Exec',
      desc: 'Meet the leadership team guiding LUHC through this season.',
      link: '/about/meet-the-exec',
    },
    {
      img: OurCaptains,
      title: 'The Captains',
      desc: 'The leaders on the field and in the changing room.',
      link: '/about/meet-the-captains',
    },
    {
      img: OurTeams,
      title: 'The Teams',
      desc: '7 teams, one family. See what makes each squad special.',
      link: '/teams',
    },
  ] as const;
</script>

<div class="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
  {#each items as item (item.title + item.link)}
    <a
      href={resolve(item.link)}
      class="group flex transform flex-col overflow-hidden rounded-sm border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div class="relative aspect-4/3 w-full overflow-hidden">
        <img
          src={item.img}
          alt={item.title}
          class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div
          class="absolute inset-0 bg-luhc-red/0 transition-colors duration-300 group-hover:bg-luhc-red/10"
        ></div>
      </div>

      <div class="relative flex grow flex-col p-8">
        <div
          class="absolute top-0 left-0 h-1 w-full bg-gray-100 transition-colors duration-300 group-hover:bg-luhc-red"
        ></div>

        <h3
          class="mb-3 font-display text-2xl font-bold text-luhc-dark uppercase transition-colors group-hover:text-luhc-red"
        >
          {item.title}
        </h3>

        <p class="mb-6 grow font-sans leading-relaxed font-light text-gray-600">
          {item.desc}
        </p>

        <div
          class="flex items-center gap-2 text-xs font-bold tracking-widest text-gray-400 uppercase transition-colors group-hover:text-luhc-red"
        >
          View Profile
          <span class="transform transition-transform duration-300 group-hover:translate-x-1"
            >&rarr;</span
          >
        </div>
      </div>
    </a>
  {/each}
</div>
