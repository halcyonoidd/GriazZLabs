import { error } from "@sveltejs/kit";
import { getProjectBySlug, projects } from "$lib/data/projects";

export const load = ({ params }) => {
	const project = getProjectBySlug(params.slug);

	if (!project) {
		throw error(404, "Project not found");
	}

	const relatedProjects = projects.filter((item) => item.slug !== project.slug).slice(0, 3);

	return {
		project,
		relatedProjects,
	};
};
