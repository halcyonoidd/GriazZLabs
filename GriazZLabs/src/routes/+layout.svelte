<script lang="ts">
	import "./layout.css";
	import favicon from "$lib/assets/favicon.svg";
	import { AnimatedThemeToggler } from "$lib/components/magic/animated-theme-toggler";
	import { ScrollProgress } from "$lib/components/magic/scroll-progress";
	import { SmoothCursor } from "$lib/components/magic/smooth-cursor";
	import Instagram from "@lucide/svelte/icons/instagram";
	import Linkedin from "@lucide/svelte/icons/linkedin";
	import Home from "@lucide/svelte/icons/home";

	import { cn } from "$lib/utils";
	import { Motion } from "svelte-motion";

	let className: any = "";
	export { className as class };
	export let r = 5;
	export let c = 5;
	let rows = new Array(r).fill(1);
	let cols = new Array(c).fill(1);


	import { Dock, DockIcon } from "$lib/components/magic/dock";
	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<SmoothCursor />
<section class="min-h-screen pt-20 flex flex-col">
	
<div class="">
  <div class={cn("relative z-0 flex w-full h-full justify-center", className)}>
    {#each rows as _, i}
      <Motion let:motion>
        <div
          class="md:w-12 sm:h-12 w-9 h-9 dark:border-neutral-900 border-neutral-200"
          use:motion
        >
          {#each cols as _, j}
            <Motion
              whileHover={{
                backgroundColor: `var(--tile)`,
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              let:motion
            >
              <div
                class="md:w-12 sm:h-12 w-9 h-9 border-r border-t last:border-b {i ===
                  0 && j >= 0
                  ? 'border-l'
                  : ''}    dark:border-neutral-900 border-neutral-200 relative"
                use:motion
              ></div>
            </Motion>
          {/each}
        </div>
      </Motion>
    {/each}
  </div>
</div>


	<div
		id="navSection"
		class="fixed top-0 left-0 right-0 z-50 bg-[#050A18]/70 backdrop-blur-md border-b border-white/5"
	>
		<nav class="px-6 py-4">
		<ScrollProgress class="top-15.5" />
			<div class="mx-auto flex max-w-7xl items-center">
				<div class="flex w-full justify-between items-center">
					<a
						href="/"
						class="text-2xl font-bold tracking-tight text-white transition-colors duration-300 hover:text-red-500"
					>agriazz</a>

					<ul
						class="flex flex-row flex-wrap gap-2 md:flex-row md:space-x-8 md:gap-0 items-center"
						id="navMenu"
					>

						<li>
							<a
								href="/project"
								class="inline-block text-sm font-medium text-gray-300 hover:text-red-500 transition-colors duration-300 py-1 px-2"
							>Project</a>
						</li>

						<AnimatedThemeToggler />
					</ul>
				</div>
			</div>
		</nav>
	</div>

	<main class="flex-1">{@render children()}</main>

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
	<footer
		class="p-4 text-center"
		style="border-top: 1px solid rgba(255, 255, 255, 0.05); padding-bottom: calc(1rem + env(safe-area-inset-bottom));"
	><p>© 2025 agriazz</p></footer>
</section>
