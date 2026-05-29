<script lang="ts">
  import Marquee from "$lib/components/home/card/Marquee.svelte";
  import Reviewcard from "$lib/components/home/card/ReviewCard.svelte";

  let { firstRow = [], secondRow = [] } = $props();
</script>

<div class="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-[2rem] py-16 shadow-none backdrop-blur md:py-20 md:shadow-xl">
  <Marquee pauseOnHover class="[--duration:25s]">
    {#each firstRow as item}
      <Reviewcard {...item} />
    {/each}
  </Marquee>
  <Marquee reverse pauseOnHover class="[--duration:15s]">
    {#each secondRow as item}
      <Reviewcard {...item} />
    {/each}
  </Marquee>
  <div class="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent to-transparent"></div>
  <div class="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-transparent to-transparent"></div>
</div>