<script lang="ts">
	import { ArrowRight } from "@lucide/svelte";
	import { cn } from "$lib/utils";
	import type { Snippet } from "svelte";
	import type { HTMLButtonAttributes } from "svelte/elements";

	interface InteractiveHoverButtonProps extends HTMLButtonAttributes {
		children: Snippet;
		class?: string;
	}

	let { children, class: className, ...props }: InteractiveHoverButtonProps = $props();
</script>

<button
	class={cn(
		"group relative w-auto cursor-pointer overflow-hidden rounded-full border border-black/80 bg-black px-6 py-2 text-center font-semibold text-white transition-colors duration-300 dark:border-[#A97CF8]/40 dark:bg-[#A97CF8] dark:text-white",
		className
	)}
	{...props}
>
	<div class="flex items-center gap-2">
		<div
			class="h-2 w-2 rounded-full bg-[#A97CF8] transition-all duration-300 group-hover:scale-[100.8] dark:bg-white"
		></div>
		<span
			class="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0"
		>
			{@render children()}
		</span>
	</div>
	<div
		class="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100 dark:text-black"
	>
		<span>{@render children()}</span>
		<ArrowRight />
	</div>
</button>
