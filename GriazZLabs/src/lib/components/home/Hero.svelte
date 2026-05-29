<script lang="ts">
  import { HyperText } from "$lib/components/magic/hyper-text";
  import { InteractiveHoverButton } from "$lib/components/magic/interactive-hover-button";
</script>

<section class="flex min-h-[calc(100vh-10rem)] flex-col items-center justify-center px-4 text-center">
  <h1 class="mb-4 flex flex-wrap items-center justify-center gap-x-3 text-balance text-4xl font-bold leading-tight md:text-5xl">
    <span>Welcome to</span>
    <HyperText text="GriazZLabs" class="text-[#A97CF8]" />
  </h1>
  <p class="mb-8 max-w-2xl text-pretty text-base leading-7 text-slate-700 dark:text-white/70 md:text-lg">
    Explore my projects, experiments, and thoughts on technology, programming, and design. Dive into a world of creativity and innovation!
  </p>
  <a href="/project" class="inline-block">
    <InteractiveHoverButton class="rounded-lg px-6 py-3">
      Explore Projects
    </InteractiveHoverButton>
  </a>
</section>