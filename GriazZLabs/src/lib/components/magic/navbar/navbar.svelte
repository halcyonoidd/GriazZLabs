<script>
    import AnimatedThemeToggler from "$lib/components/magic/animated-theme-toggler/animated-theme-toggler.svelte";
</script>

<nav class="px-4 py-3 text-[var(--color-foreground)] sm:px-6 sm:py-4">
        <div class="mx-auto flex max-w-7xl items-center">
            <div class="flex w-full items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl sm:bg-transparent sm:px-0 sm:py-0 sm:backdrop-blur-0">
                <a
                    href="/"
                    class="shrink-0 text-lg font-bold tracking-tight transition-colors duration-300 hover:text-[#A97CF8] sm:text-2xl"
                >GriazZLabs</a>

                <ul
                    class="flex shrink-0 items-center gap-2 sm:gap-6"
                    id="navMenu"
                >

                    <li>
                        <a
                            href="/project"
                            class="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium transition-colors duration-300 hover:border-[#A97CF8]/40 hover:text-[#A97CF8] sm:bg-transparent sm:px-2 sm:py-1"
                        >Project</a>
                    </li>
                    <AnimatedThemeToggler class="inline-flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 transition-colors duration-300 hover:border-[#FDCC92]/40 hover:text-[#FDCC92] sm:bg-transparent"/>
                </ul>
            </div>
        </div>
    </nav>
