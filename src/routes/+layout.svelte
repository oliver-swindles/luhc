<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Lancaster University Hockey Club</title>
	<link rel="shortcut icon" href="favicon.png" type="image/png">
	<meta name="description" content="The official home page of Lancaster university hockey club. All are welcome.">
	<meta property="og:title" content="Lancaster University Hockey Club"/>
  <meta name="twitter:title" content="Lancaster University Hockey Club"/>
</svelte:head>

<Header />
{@render children()}
<Footer />