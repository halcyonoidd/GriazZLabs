<script>
    import AnimatedThemeToggler from "$lib/components/magic/animated-theme-toggler/animated-theme-toggler.svelte";
</script>

<nav class="px-6 py-4">
        <div class="mx-auto flex max-w-7xl items-center">
            <div class="flex w-full justify-between items-center">
                <a
                    href="/"
                    class="text-2xl font-bold tracking-tight text-white transition-colors duration-300 hover:text-red-500"
                >agriazz</a>

                <ul
                    class="flex flex-row flex-wrap gap-2 md:flex-row md:space-x-8 md:gap-0 items-center"
                    id="navMenu"
                >

                    <li>
                        <a
                            href="/project"
                            class="inline-block text-sm font-medium text-gray-300 hover:text-red-500 transition-colors duration-300 py-1 px-2"
                        >Project</a>
                    </li>
                    <AnimatedThemeToggler />
                </ul>
            </div>
        </div>
    </nav>
