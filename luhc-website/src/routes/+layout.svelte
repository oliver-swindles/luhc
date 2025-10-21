<script lang="ts">
	import '../app.css';
	import AOS from 'aos';
	import 'aos/dist/aos.css';
  import { onMount } from 'svelte';
	import { dev } from '$app/environment';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	injectAnalytics({ mode: dev ? 'development' : 'production' });
	let { children } = $props();
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	onMount(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  });
</script>

<svelte:head>
	<title>Lancaster University Hockey Club | LUHC</title>
  <link rel="apple-touch-icon" href="/favicon.png">
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<meta name="description" content="Official site of Lancaster University Hockey Club (LUHC). Find team info, match updates, events, and how to get involved. #ROSESARERED">
	<meta property="og:title" content="Lancaster University Hockey Club"/>
  <meta name="twitter:title" content="Lancaster University Hockey Club"/>

  <meta name="theme-color" content="#8a1f1c" />

  <meta property="og:url" content="https://www.luhc.co.uk" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Lancaster University Hockey Club | LUHC" />
  <meta property="og:description" content="Join LUHC - the home of Lancaster Uni hockey. Fixtures, socials, photos, and everything LUHC." />

  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content="luhc.co.uk" />
  <meta property="twitter:url" content="https://www.luhc.co.uk" />
  <meta name="twitter:title" content="Lancaster University Hockey Club | LUHC" />
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
        "url": "https://www.lancaster.ac.uk",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Bailrigg",
          "addressLocality": "Lancaster",
          "addressRegion": "Lancashire",
          "postalCode": "LA1 4YW",
          "addressCountry": "GB"
        }
      },
      "location": {
        "@type": "Place",
        "name": "Lancaster University Sports Centre",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Bigforth Drive, Bailrigg",
          "addressLocality": "Lancaster",
          "addressRegion": "Lancashire",
          "postalCode": "LA1 4YW",
          "addressCountry": "GB"
        }
      },
      "sameAs": [
        "https://www.facebook.com/groups/340322369353793/",
        "https://www.instagram.com/luwhc_/",
        "https://www.instagram.com/lumhc_/",
        "https://www.instagram.com/luhc_dev/",
        "https://x.com/theofficialuwhc",
        "https://x.com/lumhc"
      ]
    }
  </script>
</svelte:head>

<Header />
{@render children()}
<Footer />
