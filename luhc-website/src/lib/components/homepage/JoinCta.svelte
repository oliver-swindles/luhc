<script lang="ts">
  import { resolve } from '$app/paths';
</script>

<section class="border-t border-white/10 bg-luhc-dark py-20 text-center text-white">
  <div class="mx-auto max-w-3xl px-6">
    <h2 class="mb-6 font-display text-5xl leading-none font-bold uppercase md:text-6xl">
      Join The <span class="text-luhc-red">Family</span>
    </h2>

    <p class="mx-auto mb-10 max-w-xl font-sans text-xl font-light text-gray-400">
      From beginners to elite athletes, there is a place for you at Lancaster University Hockey
      Club.
    </p>

    <a
      href={resolve('/contact-us')}
      class="inline-block transform rounded-sm bg-luhc-red px-10 py-4 font-display text-lg font-bold tracking-widest text-white uppercase shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-luhc-red hover:shadow-xl"
    >
      Get In Touch
    </a>
  </div>
</section>
