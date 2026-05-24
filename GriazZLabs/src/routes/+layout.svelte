<script lang="ts">
	import "./layout.css";
	import navbar from "$lib/components/magic/navbar/navbar.svelte";
	import footer from "$lib/components/magic/footer/footer.svelte";
	import favicon from "$lib/assets/favicon.svg";
	import { AnimatedThemeToggler } from "$lib/components/magic/animated-theme-toggler";
	import { ScrollProgress } from "$lib/components/magic/scroll-progress";
	import { SmoothCursor } from "$lib/components/magic/smooth-cursor";
	import Instagram from "@lucide/svelte/icons/instagram";
	import Linkedin from "@lucide/svelte/icons/linkedin";
	import Home from "@lucide/svelte/icons/home";
	import Meteors from '$lib/components/magic/meteors/Meteors.svelte';
	import { Dock, DockIcon } from "$lib/components/magic/dock";
	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<SmoothCursor />
<section class="min-h-screen pt-20 flex flex-col">

	<div>
		<navbar />
		<main class="flex-1">{@render children()}</main>
		<footer />
	</div>

	<div class="flex flex-col items-center gap-2">
		<Dock direction="bottom" class="mt-0">
			<DockIcon class="bg-black/10 dark:bg-white/10">
				<Home class="size-full" />
			</DockIcon>
			<DockIcon class="bg-gradient-to-br from-[#833AB4]/20 via-[#FD1D1D]/20 to-[#F77737]/20 text-[#E1306C]">
				<Instagram class="size-full" />
			</DockIcon>
			<DockIcon class="bg-[#0077B5]/20 text-[#0077B5]">
				<Linkedin class="size-full" />
			</DockIcon>
		</Dock>
	</div>

	<ScrollProgress class="top-15.5" />
	<AnimatedThemeToggler />
</section>
