<script lang="ts">
	import "./layout.css";
	import Navbar from "$lib/components/magic/navbar/navbar.svelte";
	import Footer from "$lib/components/magic/footer/footer.svelte";
	import Meteors from "$lib/components/magic/meteors/Meteors.svelte";
	import favicon from "$lib/assets/favicon.svg";
	import { ScrollProgress } from "$lib/components/magic/scroll-progress";
	import { SmoothCursor } from "$lib/components/magic/smooth-cursor";
	import { Dock, DockIcon } from "$lib/components/magic/dock";

	import { Home } from "@lucide/svelte";
	import Instagram from "$lib/components/icons/instagram.svelte";
	import Linkedin from "$lib/components/icons/linkedin.svelte";
	import Github from "$lib/components/icons/github.svelte";
	
	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<SmoothCursor />

<section class="min-h-screen flex flex-col">
	<div class="absolute top-0 left-0 w-full min-h-full z-0 pointer-events-none overflow-hidden">
		<Meteors number={70} class="opacity-30" />
	</div>
	<div
		id="navSection"
		class="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10"
	>
		<Navbar />
	</div>

	<main class="flex-1 pt-24 md:pt-28">
		{@render children()}
	</main>

	<div id="dockWrapper" class="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
		<Dock direction="bottom" class="mt-0">
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
			<a href="https://github.com/agriazz" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
				<DockIcon class="bg-black/10 dark:bg-white/10">
					<Github class="size-full" />
				</DockIcon>
			</a>
		</Dock>
	</div>

	<Footer />

	<ScrollProgress class="top-15.5" />
	
</section>
