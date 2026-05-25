<script lang="ts">
  import { HyperText } from "$lib/components/magic/hyper-text";
  import { InteractiveHoverButton } from "$lib/components/magic/interactive-hover-button";
  import Marquee from "$lib/components/magic/card/Marquee.svelte";
  import Reviewcard from "$lib/components/magic/card/ReviewCard.svelte";
  import { reviews } from "$lib/data/reviews";
  import { NumberTicker } from "$lib/components/magic/number-ticker";
  import { IconCloud } from "$lib/components/magic/icon-cloud";
  const slugs = ["typescript","javascript","svelte","html5","css3",
                "postgresql","github","visualstudiocode","figma","tailwindcss",
                "php","laravel","python","c++","react"
	              ];
  let images = $state(slugs.map((slug) => `https://cdn.simpleicons.org/${slug}/${slug}`));

  const tools = ["typescript","javascript","svelte","html5","css3",
                "postgresql","github","visualstudiocode","figma","tailwindcss",
                "php","laravel","python","c++","react"
                  ];
  const themes = ["UI/UX Design","Fullstack Development","backend development","frontend development"];

  let firstRow = reviews.slice(0, reviews.length / 2);
  let secondRow = reviews.slice(reviews.length / 2);
</script>

<section class="flex min-h-[calc(100vh-10rem)] flex-col items-center justify-center px-4 text-center">
  <h1 class="mb-4 flex flex-wrap items-center justify-center gap-x-3 text-4xl font-bold md:text-5xl">
    <span>Welcome to</span>
    <HyperText text="GriazZLabs" class="text-[#A97CF8]" />
  </h1>
  <p class="mb-8 max-w-2xl text-lg ">
    Explore my projects, experiments, and thoughts on technology, programming, and design. Dive into a world of creativity and innovation!
  </p>
  <a href="/project" class="inline-block">
    <InteractiveHoverButton class="rounded-lg bg-[#A97CF8] px-6 py-3 text-white transition-colors duration-300 hover:bg-[#A97CF8]/90">
      Explore Projects
    </InteractiveHoverButton>
  </a>
</section>



<section class="mx-auto w-full max-w-6xl px-4 py-16">
  <div class="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/10 backdrop-blur-md md:p-8">
    <div class="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div class="max-w-2xl text-left">
        <p class="text-sm font-semibold uppercase tracking-[0.3em] text-[#A97CF8]/80">
          Quick Stats
        </p>
        <h2 class="mt-2 text-2xl font-bold md:text-3xl">Jumlah project dan tools yang saya pakai</h2>
        <p class="mt-2 text-sm leading-6 md:text-base">
          Ringkasan singkat dari work yang saya bangun dan stack yang paling sering saya pakai.
        </p>
      </div>
      <div class="rounded-2xl border border-[#A97CF8]/20 bg-[#A97CF8] px-5 py-4 text-left md:min-w-44">
        <p class="text-sm text-white">Total projects</p>
          <NumberTicker
            value={5}
            class="text-6xl font-medium tracking-tighter whitespace-pre-wrap text-white dark:text-white"
          />
      </div>
    </div>

    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      <div class="rounded-2xl border border-white/10 bg-black/20 p-5">
        <p class="text-sm font-medium uppercase tracking-[0.2em]">Themes</p>
        <div class="mt-4 flex flex-wrap gap-2">
          {#each themes as theme}
            <span class="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-sm">
              {theme}
            </span>
          {/each}
        </div>
      </div>

      <div class="rounded-2xl border border-white/10 bg-black/20 p-5 md:col-span-1 xl:col-span-2">
        <p class="text-sm font-medium uppercase tracking-[0.2em]">Tools</p>
        <div class="mt-4 flex flex-wrap gap-2">
          {#each tools as tool}
            <span class="rounded-full border border-[#A97CF8]/20 bg-[#A97CF8]/10 px-3 py-1 text-sm">
              {tool}
            </span>
          {/each}

          <div class="relative flex size-full items-center justify-center overflow-hidden">
	          <IconCloud {images} />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-transparent py-20 md:shadow-xl">
  <Marquee pauseOnHover class="[--duration:20s]">
    {#each firstRow as item}
      <Reviewcard {...item} />
    {/each}
  </Marquee>
  <Marquee reverse pauseOnHover class="[--duration:20s]">
    {#each secondRow as item}
      <Reviewcard {...item} />
    {/each}
  </Marquee>
  <div class="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent to-transparent">
  </div>
  <div class="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-transparent to-transparent">
  </div>
</div>
