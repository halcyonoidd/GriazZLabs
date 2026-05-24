<script lang="ts">
  import { Motion } from 'svelte-motion';
  export let count = 5;
  const blobs = Array.from({ length: count }).map((_, i) => ({
    size: 120 + i * 80,
    left: `${10 + i * 15}%`,
    top: `${20 + (i * 13) % 60}%`,
    color: [
      'rgba(255,80,100,0.12)',
      'rgba(100,120,255,0.12)',
      'rgba(80,255,160,0.12)',
      'rgba(255,200,80,0.12)',
      'rgba(180,80,255,0.12)'
    ][i % 5]
  }));
</script>

<div class="fixed inset-0 -z-20 pointer-events-none overflow-hidden">
  {#each blobs as blob, i}
    <Motion
      initial={{ x: 0, y: 0, opacity: 0 }}
      animate={{ x: [0, (i % 2 ? -1 : 1) * 200, 0], y: [0, (i % 3 ? -1 : 1) * 120, 0], opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 12 + i * 4, repeat: Infinity, repeatType: 'mirror', ease: 'linear' }}
      let:motion
      let:props
    >
      <div
        use:motion
        {...props}
        class="absolute rounded-full blur-3xl"
        style="width: {blob.size}px; height: {blob.size}px; left: {blob.left}; top: {blob.top}; background: {blob.color}; mix-blend-mode: screen;"
      ></div>
    </Motion>
  {/each}
</div>
