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
		story: `The Problem
				The journey of ifLearning began with a real concern in the tech education space. Many students and university students have a strong interest in learning about technology and programming, but they often struggle to find engaging and structured resources. The scattered information across the internet frequently leads to a fragmented learning experience. This often leaves learners feeling overwhelmed, lost, and ultimately struggling to grasp fundamental programming concepts as a whole.

				The Goal
				Driven by this issue, we set a clear objective: we wanted to build a digital innovation that could transform how students learn technology. The main goal of ifLearning is to provide a learning experience that is not only effective and accessible but also highly interactive, ensuring that learning to code no longer feels rigid or boring.

				The Solution
				To answer this challenge, we designed ifLearning—a comprehensive educational app. We focused on three core values to solve the users' pain points:
				(1) Structured and Interactive Learning: Providing a clear learning path alongside interactive, practical exercises.
				(2) Real Projects Based on Everyday Problems: Encouraging users not just to memorize theories, but to directly build real-world projects relevant to daily life.
				(3) Supportive Community: Creating a safe space for learners to discuss, share knowledge, and foster continuous skill development.

				Roles & Collaboration
				This project was executed in 2025 through a solid team effort. I took on the core roles of Researcher and UI Designer. On the research side, I was responsible for mapping out user problems, while on the design side, I translated those solutions into a visual interface using Figma.
				Of course, I didn't work alone. This project was fully supported by my amazing collaborators, I Made Nandana Devadatta Giri(1610Deva) and Muhammad Julianda Nu'man(Mhmd7uLL). Through discussions, brainstorming, and joint iterations, we successfully drafted the project Proposal and brought the idea to life as a ready-to-test Prototype.

				Challenges & Obstacles
				During the development process, we faced several significant challenges. As a Researcher and UI Designer, the biggest hurdle was finding the perfect balance between presenting complex technical material and maintaining a clean, user-friendly interface that wouldn't intimidate beginners. Furthermore, integrating three major features (lessons, real projects, and community) into a seamless navigation system in Figma required multiple design iterations and user flow testing to ensure users wouldn't feel confused when switching between features.`,
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
		category: "Journaling App",
		year: "2026",
		image: "/src/lib/data/img/citta.jpg",
		summary: "AI-based journaling app that helps people share theirday-to-day experiences.",
		define: "Citta is a digital innovation, an AI-based journaling app that helps people share their day-to-day experiences. Through intuitive and intelligent interactions, the helps individuals unravel the complexities of their thoughts in a safe digital space, transforming the habit of self-reflection into a personal, warm, and meaningful interactive dialogue.",
		problem: "Many individuals today struggle with high levels of mental exhaustion (burnout) but hesitate to seek help or share their struggles due to the fear of stigma and judgment. Furthermore, conventional journaling—often used as a safe emotional outlet—has significant limitations, failing to provide a truly dynamic and effective space for them to process their feelings.",
		solution: "We designed an app, where people or individuals can freely express their daily stories without being judged by others and get solutions directly.",
		story: `The Problem
				Many individuals today struggle with high levels of mental exhaustion (burnout) but hesitate to seek help or share their struggles due to the fear of stigma and judgment. While conventional journaling is often used as a safe emotional outlet, it has significant limitations. It remains a one-sided activity, failing to provide a truly dynamic and effective space for people to actively process their feelings and find immediate relief.

				The Goal
				The primary objective of this project was to transform the solitary, often passive habit of self-reflection into a personal, warm, and meaningful interactive dialogue. We wanted to build a digital safe space where individuals could untangle the complexities of their thoughts without the fear of being judged, bridging the gap between traditional journaling and active emotional support.

				The Solution
				To address these emotional barriers, we developed Citta—an AI-based journaling app designed to listen and respond. Citta allows individuals to freely express their daily stories and receive empathetic solutions directly. To make the experience truly personal, we integrated key features such as a Multi-Dimensional Emotion Analysis and an Adaptive UI Colorway, where the interface dynamically shifts to match and comfort the user's current mood. The app also includes AI Decision Support to provide mild, helpful interventions when users need guidance the most.

				Roles & Process
				Developed in 2026, I took on the core responsibilities of Researcher and UI Designer. My research focused on directly engaging with potential users through surveys and interviews to map out an "Empathic UX Approach" based on their real psychological barriers. On the design side, I used Figma to translate these deep insights into an intuitive, comforting, and dynamic interface, ultimately delivering a comprehensive proposal and a fully functional interactive prototype.

				Challenges & Obstacles
				The most significant challenge in designing Citta was ensuring that an AI-driven application felt deeply human, warm, and empathetic rather than robotic or clinical. As a UI Designer, conceptualizing the Adaptive UI Colorway required rigorous testing to ensure that the dynamic color shifts felt soothing rather than overwhelming to an already exhausted user. Balancing the privacy expected from a traditional journal with the proactive nature of AI intervention required careful, deliberate design choices at every step of the user journey.`,
		role: ["Researcher", "UI Designer"],
		features: ["Emphatic UX Approach", "Multi-Dimensional Emotion Analysis", "Adaptive UI Colorway (Dynamic Interface)", "AI Decision Support for Mild Interventions"],
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
		gallery: [
			"/src/lib/data/img/citta.jpg",
			"/src/lib/data/img/citta 2.jpg",
			"/src/lib/data/img/citta 3.jpg",
			"/src/lib/data/img/citta 4.jpg",
			"/src/lib/data/img/citta 5.jpg",
			"/src/lib/data/img/citta 6.jpg",
		],
		stack: ["Figma"],
		links: [
			{ label: "Proposal", href: "https://drive.google.com/file/d/1EU44wDIV3VkDXHkV2PP5y2NZvs53qtN6/view?usp=sharingr" },
			{ label: "Prototype", href: "https://www.figma.com/proto/nIYU6XjJto8280ecttHS0W/CITTA-APP-DESIGN?node-id=328-1990&p=f&t=qBXUjuxTN9u8WPDK-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A86&starting-point-node-id=328%3A1990" }
		],
	},
	{
		slug: "DaichiNo",
		title: "DaichiNo",
		category: "Japanese Restaurant Website",
		year: "2025",
		image: "/src/lib/data/img/daichino_landing.png",
		summary: "Daichi No is a website for a Japanese-themed restaurant that offers an authentic dining experience using fresh and natural ingredients.",
		define: "Daichi No is a premium digital platform designed for an exclusive Japanese-themed restaurant in Indonesia. It translates the restaurant's high-end, nature-inspired dining concept into a seamless online experience, featuring earthy tones, interactive navigation, and a structured presentation of its traditional and modern culinary offerings.",
		problem: "Premium dining establishments often struggle to translate their exclusive, immersive physical ambiance into a digital format. Customers seeking high-end culinary experiences need an intuitive platform to fully understand the restaurant's unique concepts—such as category-specific dining areas and tier-based experiences—without losing the sense of luxury and exclusivity.",
		solution: "We developed a sophisticated, interactive website that mirrors the restaurant's premium quality. The platform features an elegant UI, dynamic menus grouped by distinct categories (e.g., Mizu for seafood), an immersive chef introduction, and a streamlined reservation system that allows users to seamlessly book exclusive, tier-based dining experiences.",
		story: `The Problem
				The concept of Daichi No revolves around premium, nature-inspired Japanese dining. However, traditional restaurant websites often feel flat and purely transactional. They frequently fail to capture the immersive, high-end ambiance of a physical restaurant, making it difficult for customers to truly appreciate unique offerings such as category-specific dining areas and exclusive, tiered dining experiences before they even step foot through the doors.

				The Goal
				We aimed to bridge this gap by creating a sophisticated digital platform that matches the restaurant's prestige. The goal was to build a website that serves not just as an informational menu, but as an interactive extension of the restaurant's luxurious atmosphere, ensuring a seamless and elegant journey from browsing dishes to booking a table.

				The Solution
				We developed an interactive, full-stack website tailored for exclusivity. The platform features an elegant UI with dynamic navigation, immersive chef profiles, and a categorized menu system (like the "Mizu" seafood section). To handle the business side, we integrated a comprehensive tier-based reservation system, a seamless cart for advanced ordering, and a secure checkout process, allowing users to customize their dining experience effortlessly.

				Roles & Collaboration
				In this project, I took on the role of Backend Developer, collaborating closely with my partner, Agus Prasetya(Diamond-Glitch). While my collaborator focused on bringing the earthy, Japanese-themed aesthetics to life on the frontend, I was responsible for the core logic and server-side architecture. Using PHP and the Laravel framework, I designed the PostgreSQL database structure to manage user authentication, complex menu inventories, and the backend logic powering the seamless user and admin experiences.

				Challenges & Obstacles
				As the Backend Developer, the most significant challenge was architecting a robust and secure data flow for the dynamic cart and tier-based reservation systems. Ensuring that user bookings, cart sessions, and checkouts synced perfectly—without data conflicts—required meticulous routing, session management, and relational database design in Laravel. Furthermore, building a comprehensive Admin Dashboard to track users and manage live reservations meant writing secure, efficient data queries that could keep the restaurant's operations running smoothly behind the scenes.`,
		role: ["Backend Developer"],
		features: ["Dynamic & Consistent Navigation", 
					"Interactive Categorized Menu", 
					"Tier-Based Reservation System", 
					"Immersive Chef Profiles", 
					"Unique Sushi-Shaped Contact Interface", 
					"Integrated Cart & Checkout System", 
            		"Floating Account Management"
					],
		collaborators: [
			{
				name: "Diamond-glitch",
				imageUrl: "https://avatars.githubusercontent.com/u/184829511?s=130&v=4",
				profileUrl: "https://github.com/Diamond-glitch",
			},
		],
		gallery: [
			"/src/lib/data/img/daichino_landing.png",
			"/src/lib/data/img/daichino_login.png",
			"/src/lib/data/img/daichino_createAccount.png",
			"/src/lib/data/img/daichino_aboutPage2.png",
			"/src/lib/data/img/daichino_menuPage.png",
			"/src/lib/data/img/daichino_contactPage.png",
			"/src/lib/data/img/daichino_reservationPage.png",
			"/src/lib/data/img/daichino_addCart.png",
			"/src/lib/data/img/daichino_addReservation.png",
			"/src/lib/data/img/daichino_cart.png",
			"/src/lib/data/img/daichino_payment.png",
			"/src/lib/data/img/daichino_profil.png",
			"/src/lib/data/img/daichino_detailProfil.png",
			"/src/lib/data/img/daichino_adminPage.png",
			"/src/lib/data/img/daichino_reservationsAdminPage.png",
			"/src/lib/data/img/daichino_usersAdminPage.png",
		],
		stack: ["PHP", "Laravel", "JavaScript", "PostgreSQL", "Bulma CSS"],
		links: [
			{ label: "GitHub", href: "https://github.com/halcyonoidd/DaichiNo" }
		],
	},
	{
		slug: "GriazZ",
		title: "GriazZ",
		category: "Portfolio Website",
		year: "2025",
		image: "/src/lib/data/img/griazzLanding.png",
		summary: "A personal portfolio website showcasing my projects, skills, and experiences in a visually engaging way.",
		define: "GriazZ is a personal portfolio website designed to showcase my projects, skills, and experiences in a visually engaging way. The website features a clean, modern design with intuitive navigation, allowing visitors to easily explore my work and learn more about my background and expertise.",
		problem: "As a creative professional, I needed a platform to effectively showcase my projects and skills. However, traditional portfolio websites often fail to capture the essence of my work and present it in an engaging way. I wanted a website that would display my projects, highlight my skills, and provide an immersive experience for visitors, while also being easy to navigate and visually appealing.",
		solution: "To address this, I designed and developed GriazZ, a personal portfolio website that combines a clean, modern aesthetic with interactive elements. The website features intuitive navigation, allowing visitors to easily explore my projects and learn more about my background and expertise. I focused on creating a visually engaging experience that effectively communicates the essence of my work while also highlighting my skills and experiences in a compelling way.",
		story: ``,
		role: ["Fullstack Developer"],
		features: ["Clean, Modern Design", "Intuitive Navigation", "Project Showcases with Detailed Descriptions", "Skills Highlight Section", "Responsive Layout for All Devices"],
		gallery: [
			"/src/lib/data/img/griazzLanding.png",
			"/src/lib/data/img/griazzLanding2.png",
			"/src/lib/data/img/griazzLanding3.png",
			"/src/lib/data/img/griazzAbout.png",
			"/src/lib/data/img/griazzAbout2.png",
			"/src/lib/data/img/griazzProject.png",
			"/src/lib/data/img/griazzProject2.png",
			"/src/lib/data/img/griazzContact.png",			
		],
		stack: ["Svelte", "Tailwind CSS"],
		links: [
			{ label: "Github", href: "https://github.com/halcyonoidd/GriazZ" },
			{ label: "Go to Website", href: "https://griazz.netlify.app" }
		],
	},
		{
		slug: "GriazZLabs",
		title: "GriazZLabs",
		category: "Portfolio Website",
		year: "2026",
		image: "/src/lib/data/img/labsLightLanding.png",
		summary: "GriazZLabs is a personal portfolio website designed to explain the process and backstory behind the projects showcased on GriazZ.",
		define: "GriazZLabs is a personal portfolio website designed to explain the process and backstory behind the projects showcased on GriazZ, providing a deeper understanding of the creative journey and development process. The website features detailed project descriptions, insights into the challenges faced, and the solutions implemented, allowing visitors to gain a comprehensive view of the work and the thought process behind it.",
		problem: "While GriazZ effectively showcases my projects, it lacks the depth and context that visitors often seek to fully understand the creative journey and development process behind each project. Many visitors are interested in learning about the challenges faced, the solutions implemented, and the thought process that led to the final outcome. However, traditional portfolio websites often fail to provide this level of insight, leaving visitors with a superficial understanding of the work.",
		solution: "To address this, I created GriazZLabs, a companion website to GriazZ that delves into the backstory and process behind each project. GriazZLabs features detailed project descriptions, insights into the challenges faced, and the solutions implemented, providing visitors with a comprehensive view of the creative journey. This allows visitors to gain a deeper understanding of the work and the thought process behind it, creating a more engaging and informative experience.",
		story: `The Problem
				A traditional portfolio is great for making a strong first impression, but it often only scratches the surface. While my main portfolio, GriazZ, effectively showcased the final polish of my projects, I realized it lacked the narrative depth that recruiters, peers, and collaborators often look for. Visitors could see what I built, but they couldn't see the how or the why. They were missing out on the problem-solving processes, the technical hurdles, and the creative decisions that shaped the final outcomes, leaving them with a somewhat superficial understanding of my work.

				The Goal
				I wanted to build a bridge between the final product and the raw development process. The objective was to create a dedicated space where I could document the "behind-the-scenes" of every project—detailing the challenges faced and the logic behind specific technical and design decisions—without cluttering the main, visually-driven showcase of GriazZ.

				The Solution
				To solve this, I developed GriazZLabs, a companion platform designed specifically for storytelling and deep-dive case studies. GriazZLabs acts as the analytical brain to GriazZ's visual storefront. It features comprehensive project descriptions, direct insights into challenges and solutions, and interactive elements that allow visitors to explore the development timeline. By separating the case studies from the main portfolio, I created a more engaging and informative experience for those who want to understand my technical thought process.

				Roles & Process
				Operating as the sole Fullstack Developer for this project in 2026, I was responsible for the entire pipeline. On the frontend, I designed a simple, clean, highly readable interface tailored for long-form content consumption. On the backend, I structured the data models and routing to efficiently deliver rich text, dynamic project galleries, and feature lists, ensuring the platform remained fast and responsive regardless of how much detail a project contained.

				Challenges & Obstacles
				The most difficult part was determining exactly what information needed to be displayed. I had to strike a careful balance between providing enough technical depth to clearly explain my thought process, and keeping the content concise enough to hold the reader's attention. Deciding which parts of the "behind-the-scenes" journey were genuinely valuable to visitors—and filtering out unnecessary details so the interface wouldn't feel overwhelming—required rigorous critical thinking and continuous refinement of the information layout.`,
		role: ["Fullstack Developer"],
		features: ["Detailed Project Descriptions", "Insights into Challenges and Solutions", "Comprehensive View of the Creative Journey", "Interactive Elements to Explore the Process"],
		gallery: [
			"/src/lib/data/img/labsLightLanding.png",
			"/src/lib/data/img/labsLightStats.png",
			"/src/lib/data/img/labsLightCard.png",
			"/src/lib/data/img/labsLightProject.png",
			"/src/lib/data/img/labsLightProject2.png",
			"/src/lib/data/img/labsLightProject3.png",
			"/src/lib/data/img/labsDarkLanding.png",
			"/src/lib/data/img/labsDarkStats.png",
			"/src/lib/data/img/labsDarkCard.png",
			"/src/lib/data/img/labsDarkProject.png",
			"/src/lib/data/img/labsDarkProject2.png",
			"/src/lib/data/img/labsDarkProject3.png",
		],
		stack: ["Svelte", "Tailwind CSS"],
		links: [
			{ label: "Github", href: "https://github.com/halcyonoidd/GriazZLabs" },
			{ label: "Go to Website", href: "https://griazzlabs.netlify.app" }
		],
	},
];

export function getProjectBySlug(slug: string) {
	return projects.find((project) => project.slug === slug);
}
