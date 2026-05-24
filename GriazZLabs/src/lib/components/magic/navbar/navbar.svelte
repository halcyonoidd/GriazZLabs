<script>
    import AnimatedThemeToggler from "$lib/components/magic/animated-theme-toggler/animated-theme-toggler.svelte";
</script>

<nav class="px-6 py-4 text-[var(--color-foreground)]">
        <div class="mx-auto flex max-w-7xl items-center">
            <div class="flex w-full justify-between items-center">
                <a
                    href="/"
                    class="text-2xl font-bold tracking-tight transition-colors duration-300 hover:text-[#A97CF8]"
                >GriazZLabs</a>

                <ul
                    class="flex flex-row flex-wrap gap-2 md:flex-row md:space-x-8 md:gap-0 items-center"
                    id="navMenu"
                >

                    <li>
                        <a
                            href="/project"
                            class="inline-block text-sm font-medium hover:text-[#A97CF8] transition-colors duration-300 py-1 px-2"
                        >Project</a>
                    </li>
                    <AnimatedThemeToggler class="hover:text-[#FDCC92]"/>
                </ul>
            </div>
        </div>
    </nav>
