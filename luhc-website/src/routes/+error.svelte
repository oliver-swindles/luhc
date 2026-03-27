<script lang="ts">
  import { page } from '$app/stores';
</script>

<section class="align-center flex h-72 items-center">
  <h1 class="w-full text-center text-2xl">Error {$page.status}: {$page.error?.message}</h1>
</section>
