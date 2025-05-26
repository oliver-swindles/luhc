<script lang="ts">
	import '../app.css';
	import AOS from 'aos';
	import 'aos/dist/aos.css';
  import { onMount } from 'svelte';
	let { children } = $props();
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	onMount(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  });
</script>

<svelte:head>
	<title>Lancaster University Hockey Club</title>
	<link rel="shortcut icon" href="favicon.png" type="image/png">
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<meta name="description" content="The official home page of Lancaster university hockey club. All are welcome.">
	<meta property="og:title" content="Lancaster University Hockey Club"/>
  <meta name="twitter:title" content="Lancaster University Hockey Club"/>
</svelte:head>

<Header />
{@render children()}
<Footer />