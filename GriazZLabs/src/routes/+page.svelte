<script lang="ts">
  import { HyperText } from "$lib/components/magic/hyper-text";
  import { InteractiveHoverButton } from "$lib/components/magic/interactive-hover-button";
  import Marquee from "$lib/components/magic/card/Marquee.svelte";
  import Reviewcard from "$lib/components/magic/card/ReviewCard.svelte";
  import { reviews } from "$lib/data/reviews";
  import { NumberTicker } from "$lib/components/magic/number-ticker";
  import { IconCloud } from "$lib/components/magic/icon-cloud";
  import { AvatarCircles } from "$lib/components/magic/avatar-circles";


  const slugs = ["typescript","javascript","svelte","html5","css3",
                "postgresql","github","visualstudiocode","figma","tailwindcss",
                "php","laravel","python","c++","react"
	              ];

  const tools = ["typescript","javascript","svelte","html5","css3",
                "postgresql","github","visualstudiocode","figma","tailwindcss",
                "php","laravel","python","c++","react"
                ];
  
  const avatars = [
                    { 
                      imageUrl: "https://avatars.githubusercontent.com/u/184829511?v=4",
                      profileUrl: "https://github.com/Diamond-glitch",
                    },
                    { 
                      imageUrl: "https://avatars.githubusercontent.com/u/169161113?v=4",
                      profileUrl: "https://github.com/1610Deva",
                    },
                    { 
                      imageUrl: "https://avatars.githubusercontent.com/u/192890103?s=130&v=4",
                      profileUrl: "https://github.com/Mhmd7uLL",
                    }
                  ]

  const roles = ["Full Stack Developer", "UI/UX Designer", "Backend Developer"];

  let images = $state(slugs.map((slug) => `https://cdn.simpleicons.org/${slug}/${slug}`));
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
  <div class="rounded-3xl border border-slate-200/80 bg-white/90 p-6 text-slate-900 shadow-2xl shadow-slate-900/10 backdrop-blur-md md:p-8 dark:border-white/10 dark:bg-white/5 dark:text-white dark:shadow-black/10">
    <div class="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div class="max-w-2xl text-left">
        <p class="text-sm font-semibold uppercase tracking-[0.3em] text-[#7F56D9] dark:text-[#A97CF8]/80">
          Quick Stats
        </p>
        <h2 class="mt-2 text-2xl font-bold text-slate-950 md:text-3xl dark:text-white">Technology Stack and Roles</h2>
        <p class="mt-2 text-sm leading-6 text-slate-700 md:text-base dark:text-white/65">
          A brief summary of the projects I've built and the technologies I frequently use.
        </p>
      </div>
      <div class="rounded-2xl border border-[#A97CF8]/20 bg-[#A97CF8] px-5 py-4 text-left shadow-lg shadow-[#A97CF8]/20 md:min-w-44 dark:border-[#A97CF8]/20 dark:bg-[#A97CF8]/15">
        <p class="text-sm font-medium text-white/90 dark:text-white/75">Total projects</p>
          <NumberTicker
            value={5}
            class="whitespace-pre-wrap text-6xl font-medium tracking-tighter text-white dark:text-white"
          />
      </div>
    </div>

    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      <div class="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-900 shadow-sm dark:border-white/10 dark:bg-black/20 dark:text-white">
        <p class="text-sm font-medium uppercase tracking-[0.2em] text-slate-700 dark:text-white/55">Roles</p>
        <div class="mt-4 flex flex-wrap gap-2">
          {#each roles as role}
            <span class="rounded-full border border-slate-300 bg-white px-3 py-1 text-sm text-slate-800 shadow-sm dark:border-white/10 dark:bg-white/8 dark:text-white/85">
              {role}
            </span>
          {/each}
        </div>
        <AvatarCircles numPeople={+10} avatarUrls={avatars} class="mt-4"/>
      </div>

      <div class="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-900 shadow-sm md:col-span-1 xl:col-span-2 dark:border-white/10 dark:bg-black/20 dark:text-white">
        <p class="text-sm font-medium uppercase tracking-[0.2em] text-slate-700 dark:text-white/55">Tech Stack</p>
        <div class="mt-4 flex flex-wrap gap-2">
          {#each tools as tool}
            <span class="rounded-full border border-[#A97CF8]/25 bg-[#A97CF8]/12 px-3 py-1 text-sm text-slate-900 shadow-sm dark:border-[#A97CF8]/20 dark:bg-[#A97CF8]/10 dark:text-white/90">
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
