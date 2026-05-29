<script lang="ts">
  import { IconCloud } from "$lib/components/magic/icon-cloud";

  let { tools = [], images = [] } = $props();
</script>

<div class="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-900 shadow-sm md:col-span-1 xl:col-span-2 dark:border-white/10 dark:bg-black/20 dark:text-white">
  <p class="text-sm font-medium uppercase tracking-[0.2em] text-slate-700 dark:text-white/55">Tech Stack</p>
  <div class="mt-4 grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
    <div class="flex flex-wrap gap-2">
      {#each tools as tool}
        <span class="rounded-full border border-[#A97CF8]/25 bg-[#A97CF8]/12 px-3 py-1 text-sm text-slate-900 shadow-sm dark:border-[#A97CF8]/20 dark:bg-[#A97CF8]/10 dark:text-white/90">{tool}</span>
      {/each}
    </div>

    <div class="relative mx-auto flex w-full max-w-[16rem] items-center justify-center overflow-hidden sm:max-w-[18rem] lg:max-w-none">
      <IconCloud {images} />
    </div>
  </div>
</div>