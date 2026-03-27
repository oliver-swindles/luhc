<script lang="ts">
    import { page } from '$app/stores';
</script>

<section class="flex h-72 items-center align-center">
    <h1 class="text-2xl text-center w-full">Error {$page.status}: {$page.error?.message}</h1>
</section>