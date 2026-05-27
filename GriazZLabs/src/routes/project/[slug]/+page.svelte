<script lang="ts">
	import { ArrowLeft, ArrowRight, Calendar, CheckCircle2, Layers3, Sparkles, UserRound } from "@lucide/svelte";
	import type { Project } from "$lib/data/projects";

	let { data } = $props<{ data: { project: Project; relatedProjects: Project[] } }>();
	const project = $derived(data.project);
	const relatedProjects = $derived(data.relatedProjects);
	const story = $derived(project.story ?? project.summary);
	const galleryImages = $derived(project.gallery?.length ? project.gallery : [project.image, project.image, project.image]);

	import { writable } from 'svelte/store';
	const selectedImage = writable<string | null>(null);

	function openImage(img: string) {
		selectedImage.set(img);
	}

	function closeImage() {
		selectedImage.set(null);
	}

	const handleKeydown = (e: KeyboardEvent) => {
		if (e.key === "Escape") selectedImage.set(null);
	};
</script>

<svelte:head>
	<title>{project.title} | GriazZLabs</title>
	<meta name="description" content={project.summary} />
</svelte:head>

<svelte:window on:keydown={handleKeydown} />

<section class="mx-auto w-full max-w-7xl px-4 pb-20 pt-8 md:px-6">
	<div class="mb-6 flex flex-wrap items-center justify-between gap-4">
		<a href="/project" class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-x-0.5 hover:border-[#A97CF8]/40 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-white/70 dark:hover:text-white">
			<ArrowLeft class="size-4" />
			Back to projects
		</a>
		<p class="text-sm font-medium uppercase tracking-[0.3em] text-[#A97CF8]">Case study</p>
	</div>

	<div class="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
		<div class="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/90 shadow-[0_20px_70px_rgba(15,23,42,0.14)] dark:border-white/10 dark:bg-white/5">
			<div class="relative aspect-[16/10] bg-slate-950">
				<img src={project.image} alt={project.title} class="h-full w-full object-cover" />
				<div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent"></div>

				<div class="absolute bottom-5 left-5 right-5 text-white">
					<p class="text-xs uppercase tracking-[0.3em] text-white/55">{project.year}</p>
					<h1 class="mt-2 text-3xl font-bold md:text-5xl">{project.title}</h1>
					<p class="mt-3 max-w-2xl text-sm leading-6 text-white/75 md:text-base">{project.summary}</p>
				</div>
			</div>

			<div class="grid gap-4 p-6 md:grid-cols-2">
				<div class="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-black/20">
					<div class="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-700 dark:text-white/55">
						<Calendar class="size-4" />
						Define
					</div>
					<p class="mt-3 text-sm leading-7 text-slate-700 dark:text-white/75">{project.define}</p>
				</div>
				<div class="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-black/20">
					<div class="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-700 dark:text-white/55">
						<Layers3 class="size-4" />
						Problem
					</div>
					<p class="mt-3 text-sm leading-7 text-slate-700 dark:text-white/75">{project.problem}</p>
				</div>
				<div class="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-black/20">
					<div class="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-700 dark:text-white/55">
						<CheckCircle2 class="size-4" />
						Solution
					</div>
					<p class="mt-3 text-sm leading-7 text-slate-700 dark:text-white/75">{project.solution}</p>
				</div>
				<div class="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-black/20">
					<div class="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-700 dark:text-white/55">
						<UserRound class="size-4" />
						Role
					</div>
					<div class="mt-3 flex flex-wrap gap-2">
						{#each project.role as item}
							<span class="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 dark:border-white/10 dark:bg-white/10 dark:text-white/80">{item}</span>
						{/each}
					</div>
				</div>

				<div class="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-black/20 md:col-span-2">
					<div class="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-700 dark:text-white/55">
						<Sparkles class="size-4" />
						Story
					</div>
					<p class="mt-3 text-sm leading-7 text-slate-700 dark:text-white/75">{story}</p>
				</div>
			</div>
		</div>

		<div class="space-y-6">
			<div class="rounded-[2rem] border border-white/10 bg-slate-950 p-6 text-white shadow-2xl shadow-black/30">
				<p class="text-sm font-semibold uppercase tracking-[0.3em] text-[#A97CF8]">Features</p>
				<p class="mt-3 text-base leading-7 text-white/75">
					Bagian ini bisa dipakai untuk detail tambahan seperti deliverables, scope breakdown, atau hasil akhir project. Untuk project ini saya isi dengan poin yang paling relevan agar mudah dibaca.
				</p>
				<div class="mt-5 space-y-3">
					{#each project.features as item}
						<div class="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
							<span class="inline-flex size-8 items-center justify-center rounded-full bg-[#A97CF8]/15 text-[#A97CF8]">
								<CheckCircle2 class="size-4" />
							</span>
							<p class="text-sm text-white/80">{item}</p>
						</div>
					{/each}
				</div>
			</div>

			<div class="rounded-[2rem] border border-slate-200/80 bg-white/90 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.1)] dark:border-white/10 dark:bg-white/5">
				<p class="text-sm font-semibold uppercase tracking-[0.3em] text-[#A97CF8]">Tech stack</p>
				<div class="mt-4 flex flex-wrap gap-2">
					{#each project.stack as item}
						<span class="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:border-white/10 dark:bg-white/10 dark:text-white/80">{item}</span>
					{/each}
				</div>
				<div class="mt-6 flex flex-wrap gap-3">
					{#each project.links as link}
						<a href={link.href} class="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#A97CF8]/40 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-white/75 dark:hover:text-white">
							{link.label}
							<ArrowRight class="size-4" />
						</a>
					{/each}
				</div>
			</div>

			<div class="rounded-[2rem] border border-slate-200/80 bg-white/90 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.1)] dark:border-white/10 dark:bg-white/5">
				<p class="text-sm font-semibold uppercase tracking-[0.3em] text-[#A97CF8]">Gallery</p>
				<div class="mt-4 grid grid-cols-3 gap-3">
					{#each galleryImages as image}
							<button type="button" onclick={() => openImage(image)} class="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-black/20 p-0">
								<img src={image} alt={`${project.title} gallery`} class="aspect-square h-full w-full object-cover transition duration-500 hover:scale-105" />
							</button>
						{/each}
				</div>
			</div>

			{#if $selectedImage}
				<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/70" role="dialog" aria-modal="true" tabindex="0" onclick={(e) => { if (e.target === e.currentTarget) closeImage(); }} onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') closeImage(); }}>
					<div class="relative max-h-[90vh] max-w-[90vw] p-4">
						<button type="button" class="absolute right-2 top-2 z-60 rounded-full bg-white/80 p-2 text-slate-800 hover:bg-white" onclick={() => closeImage()} aria-label="Close image">
							✕
						</button>
						<img src={$selectedImage} alt={`Enlarged ${project.title}`} class="max-h-[80vh] max-w-[80vw] rounded-lg object-contain shadow-2xl" />
					</div>
				</div>
			{/if}
		</div>
	</div>

	<div class="mt-10">
		<div class="mb-5 flex items-end justify-between gap-4">
			<div>
				<p class="text-sm font-semibold uppercase tracking-[0.3em] text-[#A97CF8]">Related</p>
				<h2 class="mt-2 text-2xl font-bold text-slate-950 dark:text-white">Project lain yang bisa dilihat</h2>
			</div>
			<a href="/project" class="text-sm font-semibold text-slate-600 transition hover:text-slate-950 dark:text-white/65 dark:hover:text-white">See all</a>
		</div>

		<div class="grid gap-5 md:grid-cols-3">
			{#each relatedProjects as item}
				<a href={`/project/${item.slug}`} class="group overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white/90 shadow-[0_16px_50px_rgba(15,23,42,0.1)] transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/5">
					<div class="aspect-[16/10] overflow-hidden bg-slate-900">
						<img src={item.image} alt={item.title} class="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
					</div>
					<div class="p-5">
						<p class="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-white/45">{item.category}</p>
						<h3 class="mt-2 text-lg font-bold text-slate-950 dark:text-white">{item.title}</h3>
						<p class="mt-2 text-sm leading-6 text-slate-600 dark:text-white/65">{item.summary}</p>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>
