<script lang="ts">
  import Hero from "$lib/components/home/Hero.svelte";
  import QuickStats from "$lib/components/home/QuickStats.svelte";
  import TechStack from "$lib/components/home/TechStack.svelte";
  import ReviewsMarquee from "$lib/components/home/ReviewsMarquee.svelte";
  import { reviews } from "$lib/data/reviews";


  const slugs = ["typescript","javascript","svelte","html5","css3",
                "postgresql","github","visualstudiocode","figma","tailwindcss",
                "php","laravel","python","c++","react"
	              ];

  const tools = ["typescript","javascript","svelte","html5","css3",
                "postgresql","github","visualstudiocode","figma","tailwindcss",
                "php","laravel","python","c++","react"
                ];
  
  const avatars = [
                    { 
                      imageUrl: "https://avatars.githubusercontent.com/u/184829511?v=4",
                      profileUrl: "https://github.com/Diamond-glitch",
                    },
                    { 
                      imageUrl: "https://avatars.githubusercontent.com/u/169161113?v=4",
                      profileUrl: "https://github.com/1610Deva",
                    },
                    { 
                      imageUrl: "https://avatars.githubusercontent.com/u/192890103?s=130&v=4",
                      profileUrl: "https://github.com/Mhmd7uLL",
                    }
                  ]

  const roles = ["Full Stack Developer", "UI/UX Designer", "Backend Developer","Researcher"];

  let images = $state(slugs.map((slug) => `https://cdn.simpleicons.org/${slug}/${slug}`));
  let firstRow = reviews.slice(0, reviews.length / 2);
  let secondRow = reviews.slice(reviews.length / 2);
</script>

<Hero />

<section class="mx-auto w-full max-w-6xl px-4 py-16">
  <QuickStats {roles} {avatars}>
    <TechStack {tools} {images} />
  </QuickStats>
</section>

<ReviewsMarquee {firstRow} {secondRow} />
