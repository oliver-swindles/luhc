<script lang="ts">
  import LUHCExecMessage from '$lib/images/pages/index/luhc-exec-message.jpg?enhanced';
</script>

<section
  class="relative flex min-h-[60vh] items-center justify-center overflow-hidden py-24 text-center text-white md:py-36"
>
  <enhanced:img
    src={LUHCExecMessage}
    alt="Chair Message Background"
    class="absolute inset-0 z-0 h-full w-full object-cover"
  />

  <div
    class="absolute inset-0 z-10 bg-linear-to-b from-luhc-dark/90 via-luhc-dark/80 to-luhc-dark/90"
  ></div>

  <div class="relative z-20 mx-auto max-w-4xl px-6">
    <div class="mb-6 opacity-20">
      <svg class="mx-auto h-16 w-16 text-white" fill="currentColor" viewBox="0 0 24 24"
        ><path
          d="M14.017 21L14.017 18C14.017 16.0547 15.5937 14.478 17.5389 14.478H19.2003C19.7828 14.478 20.2547 14.0061 20.2547 13.4237V8.92372C20.2547 8.3413 19.7828 7.86938 19.2003 7.86938H16.2731C15.6907 7.86938 15.2188 7.39746 15.2188 6.81504V5.1278C15.2188 4.54538 15.6907 4.07346 16.2731 4.07346H19.7278C21.2825 4.07346 22.5428 5.33378 22.5428 6.88849V13.9511C22.5428 17.8398 19.3905 20.9921 15.5018 20.9921H14.017V21ZM5.5018 21L5.5018 18C5.5018 16.0547 7.07851 14.478 9.02375 14.478H10.6851C11.2676 14.478 11.7395 14.0061 11.7395 13.4237V8.92372C11.7395 8.3413 11.2676 7.86938 10.6851 7.86938H7.75791C7.1755 7.86938 6.70358 7.39746 6.70358 6.81504V5.1278C6.70358 4.54538 7.1755 4.07346 7.75791 4.07346H11.2126C12.7673 4.07346 14.0276 5.33378 14.0276 6.88849V13.9511C14.0276 17.8398 10.8753 20.9921 6.98659 20.9921H5.5018V21Z"
        /></svg
      >
    </div>

    <h2 class="mb-8 font-display text-3xl font-bold tracking-wide uppercase md:text-4xl">
      Message from the Chair
    </h2>

    <div class="border-l-4 border-luhc-red pl-6 text-left md:pl-10">
      <p class="font-sans text-lg leading-relaxed font-light text-gray-200 md:text-xl">
        "Hi, we are the chair team for the 25/26 season! Our objectives this year is to boost the
        clubs presence within the university going from already one of the largest mixed societies
        at Lancaster University to even greater heights. With new challenges to face in the upcoming
        season we look forward to making progress and allowing the club to run smoothly whilst
        sustaining the friendly and competitive nature of the club. We look forward in joining you
        for the upcoming season!"
      </p>
      <div class="mt-6 font-display font-bold tracking-widest text-luhc-red uppercase">
        - LUHC Chair Team
      </div>
    </div>
  </div>
</section>
