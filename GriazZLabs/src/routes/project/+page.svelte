<script lang="ts">
	import { ArrowRight, FolderKanban, Sparkles } from "@lucide/svelte";
	import { InteractiveHoverButton } from "$lib/components/magic/interactive-hover-button";
	import type { Project } from "$lib/data/projects";

	let { data } = $props<{ data: { projects: Project[] } }>();

	const featuredProjects = $derived(data.projects);
</script>

<svelte:head>
	<title>Projects | GriazZLabs</title>
	<meta
		name="description"
		content="Project gallery and case studies from GriazZLabs with problem, solution, role, and stack details."
	/>
</svelte:head>

<section id="project-list" class="mx-auto w-full max-w-7xl px-4 pb-20 md:px-6">
	<div class="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
		<div class="max-w-2xl text-left">
			<p class="text-sm font-semibold uppercase tracking-[0.3em] text-[#A97CF8]">My Projects</p>
			<h2 class="mt-2 text-2xl font-bold text-slate-950 dark:text-white md:text-3xl">Explore My Work</h2>
			<p class="mt-2 text-sm leading-6 text-slate-600 dark:text-white/60 md:text-base">
				A showcase of my projects, highlighting the problems I solved, the technologies I used, and the impact they made.
				Each project includes a detailed case study covering the problem statement, my role, the tech
			</p>
		</div>
	</div>

	<div class="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
		{#each featuredProjects as project}
			<a
				href={`/project/${project.slug}`}
				class="group overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white/90 text-slate-950 shadow-[0_18px_60px_rgba(15,23,42,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(15,23,42,0.18)] dark:border-white/10 dark:bg-white/5 dark:text-white"
			>
				<div class="relative aspect-[16/10] overflow-hidden bg-slate-900">
					<img
						src={project.image}
						alt={project.title}
						class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
					/>
					<div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent"></div>
					<div class="absolute left-4 top-4 rounded-full border border-white/15 bg-[#A97CF8]/50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white/80 backdrop-blur-md">
						{project.category}
					</div>
					<div class="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4 text-white">
						<div>
							<p class="text-xs uppercase tracking-[0.3em] text-white/55">{project.year}</p>
							<h3 class="mt-2 text-2xl font-bold">{project.title}</h3>
						</div>
						<div class="rounded-full border border-white/15 bg-white/10 p-3 backdrop-blur-md transition group-hover:bg-white/20">
							<ArrowRight class="size-5" />
						</div>
					</div>
				</div>

				<div class="space-y-5 p-6">
					<p class="text-sm leading-6 text-slate-600 dark:text-white/65">{project.summary}</p>

					<div class="flex flex-wrap gap-2">
						{#each project.stack as item}
							<span class="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:border-white/10 dark:bg-white/10 dark:text-white/80">
								{item}
							</span>
						{/each}
					</div>
				</div>
			</a>
		{/each}
	</div>
</section>
