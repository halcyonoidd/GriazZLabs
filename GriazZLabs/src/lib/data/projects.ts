export type Project = {
	slug: string;
	title: string;
	category: string;
	year: string;
	image: string;
	summary: string;
	story?: string;
	define: string;
	problem: string;
	solution: string;
	role: string[];
	collaborators?: {
		name: string;
		imageUrl: string;
		profileUrl: string;
	}[];
	features: string[];
	stack: string[];
	gallery?: string[];
	links: {
		label: string;
		href: string;
	}[];
};

export const projects: Project[] = [
	{
		slug: "ifLearning App Design",
		title: "ifLearning App Design",
		category: "Educational App",
		year: "2025",
		image: "/src/lib/data/img/iflearning.jpeg",
		summary: "Educational app design to enhance learning experiences for students.",
		define: "ifLearning application is a digital innovation designed to provide an effective, interactive, and accessible learning experience for students and university students who want to learn about technology and programming.",
		problem: "Students often struggle to find engaging and structured resources for learning technology and programming, leading to fragmented learning experiences.",
		solution: "We designed an educational app that offers interactive lessons, practical exercises, and a supportive community to foster continuous learning and skill development.",
		story: ``,
		role: ["Researcher", "UI Designer"],
		collaborators: [
			{
				name: "1610Deva",
				imageUrl: "https://avatars.githubusercontent.com/u/169161113?v=4",
				profileUrl: "https://github.com/1610Deva",
			},
			{
				name: "Mhmd7uLL",
				imageUrl: "https://avatars.githubusercontent.com/u/192890103?s=130&v=4",
				profileUrl: "https://github.com/Mhmd7uLL",
			},
		],
		features: ["Structured and Interactive Learning", "Create Real Projects Based on Everyday Problem", "Supportive Community"],
		gallery: [
			"/src/lib/data/img/ifLearning.jpeg",
			"/src/lib/data/img/ifLearning 2.jpeg",
			"/src/lib/data/img/ifLearning 3.jpeg",
			"/src/lib/data/img/ifLearning 4.jpeg",
		],
		stack: ["Figma"],
		links: [
			{ label: "Proposal", href: "https://drive.google.com/file/d/1Gw-UCia627ANy_cWWhKOMEeR_zjPvhP-/view?usp=sharing" },
			{ label: "Prototype", href: "https://www.figma.com/proto/5Qrq6YNADPqF6S5C5Wf4fZ/iFLearning?node-id=19-2&p=f&t=05YwdTV174ylF1qV-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=423%3A1262" }
		],
	},
	{
		slug: "Citta App Design",
		title: "Citta App Design",
		category: "Productivity",
		year: "2025",
		image: "/projects/taskflow-planner.svg",
		summary: "A lightweight planning app for daily tasks, priorities, and simple team handoff.",
		define: "A focused task planner that keeps daily work visible without turning into a heavy project tool.",
		problem: "Small tasks were getting buried inside chat messages and notes, so priorities were easy to miss.",
		solution: "I designed a compact dashboard with priority lanes, quick actions, and clear status cues.",
		story: `The concept grew from a simple problem: daily planning was scattered across too many
		places. I shaped the interface around quick decision-making, so the user can capture
		tasks fast, scan priorities at a glance, and move through the day without friction.`,
		role: ["UI Design", "Frontend Development", "Interaction Design"],
		features: ["Priority sorting", "Status tracking", "Quick capture"],
		gallery: [
			"/projects/taskflow-planner.svg",
			"/projects/griazzlabs-portfolio.svg",
			"/projects/fittrack-dashboard.svg",
		],
		stack: ["Svelte", "TypeScript", "Tailwind CSS", "Local State"],
		links: [
			{ label: "Prototype", href: "/project/taskflow-planner" },
			{ label: "GitHub", href: "https://github.com/halcyonoidd" }
		],
	},
	{
		slug: "campuslink-events",
		title: "CampusLink Events",
		category: "Event Platform",
		year: "2025",
		image: "/projects/campuslink-events.svg",
		summary: "An event hub for campus announcements, registrations, and agenda details.",
		define: "A web platform for sharing event information and letting students register in a few steps.",
		problem: "Event details were spread across posters and group chats, which made registration inconsistent.",
		solution: "I created a structured event page with deadlines, sign-up flows, and a clean information stack.",
		story: `This project was built to make campus events feel more organized and trustworthy
		from the first glance. I designed the information flow so users can understand the event,
		find the deadline, and register without digging through unrelated details.`,
		role: ["Frontend Development", "Information Architecture", "Content Design"],
		features: ["Registration flow", "Event timeline", "Clear CTA hierarchy"],
		gallery: [
			"/projects/campuslink-events.svg",
			"/projects/griazzlabs-portfolio.svg",
			"/projects/taskflow-planner.svg",
		],
		stack: ["SvelteKit", "TypeScript", "Tailwind CSS", "Forms"],
		links: [
			{ label: "Detail", href: "/project/campuslink-events" },
			{ label: "GitHub", href: "https://github.com/halcyonoidd" }
		],
	},
	{
		slug: "fittrack-dashboard",
		title: "FitTrack Dashboard",
		category: "Analytics",
		year: "2024",
		image: "/projects/fittrack-dashboard.svg",
		summary: "A health dashboard for habits, progress, and quick performance snapshots.",
		define: "ifLearning application is a digital innovation designed to provide an effective, interactive, and accessible learning, experience for, students and university students who want to learn about technology and programming.",
		problem: "Raw activity data was hard to read, so it was difficult to understand momentum over time.",
		solution: "I translated the data into cards, charts, and milestone summaries that are easy to scan.",
		story: `The dashboard was designed to make progress feel visible instead of buried in
		numbers. I focused on clear hierarchy and compact visual summaries so the user can
		understand trends quickly and stay motivated while tracking habits.`,
		role: ["Data Visualization", "Frontend Development", "UX Writing"],
		features: ["Progress cards", "Milestone highlights", "Interactive charts"],
		gallery: [
			"/projects/fittrack-dashboard.svg",
			"/projects/campuslink-events.svg",
			"/projects/griazzlabs-portfolio.svg",
		],
		stack: ["Svelte", "Chart UI", "TypeScript", "Tailwind CSS"],
		links: [
			{ label: "Case Study", href: "/project/fittrack-dashboard" },
			{ label: "GitHub", href: "https://github.com/halcyonoidd" }
		],
	},
];

export function getProjectBySlug(slug: string) {
	return projects.find((project) => project.slug === slug);
}
