<script lang="ts">
  import { NumberTicker } from "$lib/components/magic/number-ticker";
  import { AvatarCircles } from "$lib/components/magic/avatar-circles";

  let { roles = [], avatars = [] } = $props();
</script>

<div class="rounded-3xl border border-slate-200/80 bg-white/90 p-6 text-slate-900 shadow-2xl shadow-slate-900/10 backdrop-blur-md md:p-8 dark:border-white/10 dark:bg-white/5 dark:text-white dark:shadow-black/10">
  <div class="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
    <div class="max-w-2xl text-left">
      <p class="text-sm font-semibold uppercase tracking-[0.3em] text-[#7F56D9] dark:text-[#A97CF8]/80">Quick Stats</p>
      <h2 class="mt-2 text-2xl font-bold text-slate-950 md:text-3xl dark:text-white">Technology Stack and Roles</h2>
      <p class="mt-2 text-sm leading-6 text-slate-700 md:text-base dark:text-white/65">A brief summary of the projects I've built and the technologies I frequently use.</p>
    </div>

    <div class="w-full rounded-2xl border border-[#A97CF8]/20 bg-[#A97CF8] px-5 py-4 text-left shadow-lg shadow-[#A97CF8]/20 md:min-w-44 md:w-auto dark:border-[#A97CF8]/20 dark:bg-[#A97CF8]/15">
      <p class="text-sm font-medium text-white/90 dark:text-white/75">Total projects</p>
      <NumberTicker value={5} class="whitespace-pre-wrap text-5xl font-medium tracking-tighter text-white dark:text-white sm:text-6xl" />
    </div>
  </div>

  <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
    <div class="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-900 shadow-sm dark:border-white/10 dark:bg-black/20 dark:text-white">
      <p class="text-sm font-medium uppercase tracking-[0.2em] text-slate-700 dark:text-white/55">Roles</p>
      <div class="mt-4 flex flex-wrap gap-2">
        {#each roles as role}
          <span class="rounded-full border border-slate-300 bg-white px-3 py-1 text-sm text-slate-800 shadow-sm dark:border-white/10 dark:bg-white/8 dark:text-white/85">{role}</span>
        {/each}
      </div>
      <AvatarCircles numPeople={+10} avatarUrls={avatars} class="mt-4 justify-center md:justify-start" />
    </div>

    <slot />
  </div>
</div>