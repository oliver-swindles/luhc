<script lang="ts">
  import { page } from '$app/stores';

  import { resolve } from '$app/paths';

  import { Button } from 'bits-ui';
</script>

<section class="align-center flex h-96 flex-col items-center justify-center gap-4">
  <h1 class="w-full text-center text-2xl">Error {$page.status}: {$page.error?.message}</h1>
  <Button.Root
    class="rounded-md bg-luhc-red px-6 py-2 text-lg font-medium text-white"
    href={resolve('/')}>Go Home</Button.Root
  >
</section>
