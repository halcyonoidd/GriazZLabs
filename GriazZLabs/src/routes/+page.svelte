<script lang="ts">
	import { HyperText } from "$lib/components/magic/hyper-text";
    import { InteractiveHoverButton } from "$lib/components/magic/interactive-hover-button";
</script>

<div class="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)]">
    <h1 class="mb-4 flex flex-wrap items-center justify-center gap-x-3 text-4xl font-bold">
        <span>Welcome to</span>
        <HyperText text="GriazZLabs" class="text-[#A97CF8]" />
    </h1>
    <p class="text-lg text-center mb-8 max-w-2xl">Explore my projects, experiments, and thoughts on technology, programming, and design. Dive into a world of creativity and innovation!</p>
    <a href="/project" class="inline-block">
        <InteractiveHoverButton class="px-6 py-3 bg-[#A97CF8] text-white rounded-lg hover:bg-[#A97CF8]/90 transition-colors duration-300">Explore Projects</InteractiveHoverButton>
    </a>
</div>
