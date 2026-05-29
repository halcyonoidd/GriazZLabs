<script lang="ts">
	import "./layout.css";
	import Navbar from "$lib/components/magic/navbar/navbar.svelte";
	import Footer from "$lib/components/magic/footer/footer.svelte";
	import Meteors from "$lib/components/magic/meteors/Meteors.svelte";
	import GLabs from "$lib/assets/GLabs.svg";

	import { ScrollProgress } from "$lib/components/magic/scroll-progress";
	import { SmoothCursor } from "$lib/components/magic/smooth-cursor";
	import { Dock, DockIcon } from "$lib/components/magic/dock";

	import { Home } from "@lucide/svelte";
	import Instagram from "$lib/components/home/icons/instagram.svelte";
	import Linkedin from "$lib/components/home/icons/linkedin.svelte";
	import Github from "$lib/components/home/icons/github.svelte";
	import GriazZ from "$lib/components/icons/GriazZ.jpeg";
	
	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={GLabs} /></svelte:head>
<SmoothCursor />

<section class="min-h-screen flex flex-col">
	<div class="fixed inset-0 z-40 pointer-events-none overflow-hidden">
		<Meteors number={70} class="opacity-30" />
	</div>
	<div
		id="navSection"
		class="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10"
	>
		<Navbar />
		<ScrollProgress class="top-auto bottom-0 z-60" />
	</div>

	<main class="flex-1 pt-24 md:pt-28">
		{@render children()}
	</main>

	<div id="dockWrapper" class="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] left-3 right-3 z-50 sm:left-1/2 sm:right-auto sm:bottom-6 sm:-translate-x-1/2">
		<Dock direction="bottom" iconSize={30} iconMagnification={38} iconDistance={84} class="mt-0 w-full max-w-[22rem] justify-between gap-1 overflow-visible px-2 py-2 sm:w-max sm:justify-center sm:gap-2 sm:px-2 sm:py-2">
			<a href="/" aria-label="Home">
				<DockIcon class="bg-black/10 dark:bg-white/10">
					<Home class="size-full" />
				</DockIcon>
			</a>
			<a href="https://www.instagram.com/agriazz" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
				<DockIcon class="bg-gradient-to-br from-[#833AB4]/20 via-[#FD1D1D]/20 to-[#F77737]/20 text-[#E1306C]">
					<Instagram class="size-full" />
				</DockIcon>
			</a>
			<a href="https://www.linkedin.com/in/agriazzukhruf" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
				<DockIcon class="bg-[#0077B5]/20 text-[#0077B5]">
					<Linkedin class="size-full" />
				</DockIcon>
			</a>
			<a href="https://github.com/halcyonoidd" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
				<DockIcon class="bg-black/10 dark:bg-white/10">
					<Github class="size-full" />
				</DockIcon>
			</a>
			<a href="https://griazz.netlify.app/" target="_blank" rel="noopener noreferrer" aria-label="GriazZ">
				<DockIcon class="bg-black/10 dark:bg-white/10">
					<img src={GriazZ} alt="GriazZ" class="size-full" />
				</DockIcon>
			</a>
		</Dock>
	</div>

	<Footer />

	
	
</section>
