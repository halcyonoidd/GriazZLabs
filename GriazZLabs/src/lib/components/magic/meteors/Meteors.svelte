<script lang="ts">
  import { cn } from "$lib/utils";
  import { onMount } from "svelte";


  export { className as class }; 
  
    let { class: className = undefined, number = 20 }: Props = $props();

    type Props = {
    class?: string;
    number?: number;
  };
  type MeteorStyle = {
    top: string;
    left: string;
    delay: string;
    duration: string;
  };

  let meteorStyles: MeteorStyle[] = $state([]);

  onMount(() => {
    const fullHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.documentElement.clientHeight
    );
    
    const styles = [...new Array(number)].map(() => ({
      top: Math.floor(Math.random() * fullHeight) + "px",
      left: Math.floor(Math.random() * window.innerWidth) + "px",
      delay: Math.random() * 0.6 + 0.2 + "s",
      duration: Math.floor(Math.random() * 9 + 4) + "s",
    }));
    meteorStyles = styles;
  });
</script>

{#each meteorStyles as style, idx}
  <span
    class={cn(
      "meteor-item pointer-events-none absolute size-1 rounded-full bg-[#A97CF8]",
      className
    )}
    style="top: {style.top}; left: {style.left}; --meteor-duration: {style.duration}; --meteor-delay: {style.delay};"
  >
    <div
        class="meteor-tail pointer-events-none absolute top-1/2 -z-10 h-px w-32 -translate-y-1/2"
        style="transform: rotate(-135deg); transform-origin: left center; background: linear-gradient(135deg, rgba(148,163,184,0.9), rgba(100,116,139,0.55), transparent);"
      ></div>
  </span>
{/each}

<style>
  .meteor-item {
    will-change: transform, opacity;
    animation: meteor var(--meteor-duration, 6s) linear var(--meteor-delay, 0s) infinite;
  }

  @keyframes meteor {
    0% {
      transform: translateX(0) translateY(0);
      opacity: 1;
    }
    80% {
      opacity: 0.9;
    }
    100% {
      transform: translateX(110vw) translateY(60vh);
      opacity: 0;
    }
  }

  /* small visual tweak for the tail so it fades out with the meteor */
  .meteor-item > div {
    transition: opacity 0.3s linear;
  }
</style>