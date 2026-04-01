<script lang="ts">
  let { sections, socials } = $props();

  import { ICON_PATHS } from '$lib/constants/socials';

  const getIconPath = (platform: string): string => {
    return ICON_PATHS[platform.toLowerCase()] ?? '';
  };
</script>

{#if socials && socials.length > 0}
  <ul class="mb-10 flex justify-center gap-6">
    {#each socials as social (social.url)}
      <li>
        <a
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          class="transform text-gray-800 transition-colors duration-200 hover:scale-110 hover:text-luhc-red"
          aria-label={social.platform}
        >
          <svg fill="currentColor" width="30" height="30" viewBox="0 0 24 24">
            <path d={getIconPath(social.platform)} />
          </svg>
        </a>
      </li>
    {/each}
  </ul>
{/if}

{#if sections}
  <div class="space-y-8">
    {#each sections as section (section.title)}
      <div class="w-full">
        {#if section.title}
          <h3
            class="mb-4 text-center text-xs font-bold tracking-widest text-gray-800 uppercase opacity-60"
          >
            {section.title}
          </h3>
        {/if}

        <ul class="space-y-4">
          {#each section.links as link (link.url + link.name)}
            <li>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                class="block w-full rounded-xl bg-luhc-red px-6 py-4 text-center font-bold text-white shadow-md transition-all duration-200 hover:scale-[1.02] hover:bg-red-800 hover:shadow-lg"
              >
                {link.name}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>
{/if}
