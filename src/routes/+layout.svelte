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
  import LUHCLogo from "$lib/images/luhc-logo.png";
	onMount(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  });
</script>

<svelte:head>
	<title>Lancaster University Hockey Club</title>
  <link rel="apple-touch-icon" href="/favicon.png">
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<meta name="description" content="The official home page of Lancaster university hockey club. All are welcome.">
	<meta property="og:title" content="Lancaster University Hockey Club"/>
  <meta name="twitter:title" content="Lancaster University Hockey Club"/>

  <meta name="theme-color" content="#8a1f1c" />

  <meta property="og:url" content="https://www.luhc.co.uk" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Lancaster University Hockey Club" />
  <meta property="og:description" content="The official home page of Lancaster university hockey club. All are welcome." />

  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content="luhc.co.uk" />
  <meta property="twitter:url" content="https://www.luhc.co.uk" />
  <meta name="twitter:title" content="Lancaster University Hockey Club" />
  <meta name="twitter:description" content="The official home page of Lancaster university hockey club. All are welcome." />
</svelte:head>

<Header />
{@render children()}
<Footer />