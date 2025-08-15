<script lang="ts">
	import LUHCLogo from '$lib/images/luhc-logo.png?enhanced';
	import HeroPFlick from '$lib/images/pages/index/p-flick-hero.jpg?enhanced';
</script>

<section class="p-8">
	<div class="relative overflow-hidden rounded-xl text-white text-center px-8 py-16 shadow-xl">
		<enhanced:img
			src={HeroPFlick}
			alt="A Lancaster University Hockey player taking a penalty flick during a match."
			class="absolute inset-0 w-full h-full object-cover z-[-1]"
		/>
		<div class="absolute inset-0 bg-black/70 z-0 rounded-xl"></div>
		<div class="relative z-10 space-y-6">
			<enhanced:img src={LUHCLogo} alt="LUHC Logo" class="h-36 w-auto mx-auto" />
			<h1 class="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
				Lancaster University Hockey Club
			</h1>
			<p class="text-xl max-w-2xl mx-auto drop-shadow-md">
				One of the largest, most competitive, and most welcoming sports clubs at Lancaster University.
				<!-- <span class="text-red-400 font-semibold">#ROSESARERED</span> -->
			</p>
		</div>
	</div>
</section>