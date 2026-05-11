<script lang="ts">
  import './layout.css';
  import '@fontsource-variable/inter/wght.css';
  import '@fontsource-variable/oswald/wght.css';

  import AOS from 'aos';
  import 'aos/dist/aos.css';
  import { onMount } from 'svelte';
  import { afterNavigate } from '$app/navigation';

  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let { children } = $props();

  onMount(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  });

  afterNavigate(() => {
    AOS.refresh();
  });
</script>

<svelte:head>
  <title>Lancaster University Hockey Club | LUHC</title>
  <link href="/favicon.png" rel="apple-touch-icon" />
  <link href="https://fonts.gstatic.com" rel="preconnect" />
  <meta
    name="description"
    content="Official site of Lancaster University Hockey Club (LUHC). Find team info, match updates, events, and how to get involved. #ROSESARERED"
  />

  <meta content="https://www.luhc.co.uk/og-image.jpg" property="og:image" />

  <meta content="Lancaster University Hockey Club" property="og:title" />
  <meta name="twitter:title" content="Lancaster University Hockey Club" />
  <meta name="theme-color" content="#D2141B" />
  <meta content="https://www.luhc.co.uk" property="og:url" />
  <meta content="website" property="og:type" />
  <meta
    content="Join LUHC - the home of Lancaster Uni hockey. Fixtures, socials, photos, and everything LUHC."
    property="og:description"
  />

  <meta name="twitter:card" content="summary_large_image" />
  <meta content="luhc.co.uk" property="twitter:domain" />
  <meta content="https://www.luhc.co.uk" property="twitter:url" />
  <meta
    name="twitter:description"
    content="Join LUHC - the home of Lancaster Uni hockey. Fixtures, socials, photos, and everything LUHC."
  />

  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "SportsTeam",
      "name": "Lancaster University Hockey Club",
      "alternateName": "LUHC",
      "sport": "Field Hockey",
      "url": "https://www.luhc.co.uk",
      "logo": "https://www.luhc.co.uk/favicon.png",
      "memberOf": {
        "@type": "CollegeOrUniversity",
        "name": "Lancaster University",
        "url": "https://www.lancaster.ac.uk"
      },
      "location": {
        "@type": "Place",
        "name": "Lancaster University Sports Centre",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Bigforth Drive, Bailrigg",
          "addressLocality": "Lancaster",
          "postalCode": "LA1 4YW",
          "addressCountry": "GB"
        }
      },
      "sameAs": [
        "https://www.facebook.com/groups/340322369353793/",
        "https://www.instagram.com/luwhc_/",
        "https://www.instagram.com/lumhc_/",
        "https://x.com/theofficialuwhc"
      ]
    }
  </script>
</svelte:head>

<div class="flex min-h-screen flex-col">
  <Header />

  <main class="grow">
    {@render children()}
  </main>

  <Footer />
</div>
