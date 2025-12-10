<script lang="ts">
  import '../app.css';
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  import { onMount } from 'svelte';
  import { afterNavigate } from '$app/navigation'; // Import this for page changes
  import { dev } from '$app/environment';
  
  import { injectAnalytics } from '@vercel/analytics/sveltekit';
  
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let { children } = $props();

  injectAnalytics({ mode: dev ? 'development' : 'production' });

  onMount(() => {
    AOS.init({ 
      duration: 800, 
      easing: 'ease-in-out', 
      once: true 
    });
  });

  afterNavigate(() => {
    AOS.refresh();
  });
</script>

<svelte:head>
  <title>Lancaster University Hockey Club | LUHC</title>
  <link rel="apple-touch-icon" href="/favicon.png">
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <meta name="description" content="Official site of Lancaster University Hockey Club (LUHC). Find team info, match updates, events, and how to get involved. #ROSESARERED">
  
  <meta property="og:image" content="https://www.luhc.co.uk/og-image.jpg" /> 

  <meta property="og:title" content="Lancaster University Hockey Club"/>
  <meta name="twitter:title" content="Lancaster University Hockey Club"/>
  <meta name="theme-color" content="#c01515" />
  <meta property="og:url" content="https://www.luhc.co.uk" />
  <meta property="og:type" content="website" />
  <meta property="og:description" content="Join LUHC - the home of Lancaster Uni hockey. Fixtures, socials, photos, and everything LUHC." />

  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content="luhc.co.uk" />
  <meta property="twitter:url" content="https://www.luhc.co.uk" />
  <meta name="twitter:description" content="Join LUHC - the home of Lancaster Uni hockey. Fixtures, socials, photos, and everything LUHC." />
  
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

<div class="flex flex-col min-h-screen">
  <Header />
  
  <main class="grow">
    {@render children()}
  </main>
  
  <Footer />
</div>