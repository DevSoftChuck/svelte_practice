<script>
	let questions = [
		{
			id: 1,
			question: "What do you mean by 'Figma assets'?",
			response:
				'You will have access to download the full Figma project including all of the pages, the components, responsive pages, and also the icons, illustrations, and images included in the screens.'
		},
		{
			id: 2,
			question: "What does 'lifetime access' exactly mean?",
			response:
				'Once you have purchased either the design, code, or both packages, you will have access to all of the future updates based on the roadmap, free of charge.'
		},
		{
			id: 3,
			question: 'How does support work?',
			response:
				"We're aware of the importance of well qualified support, that is why we decided that support will only be provided by the authors that actually worked on this project.",
			additionalText: `
				<p class="text-gray-500 dark:text-gray-400">
					Feel free to <a
						href="/contact2"
						class="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline"
						target="_blank"
						rel="noreferrer">contact us</a
					> and we'll help you out as soon as we can.
				</p>`
		},
		{
			id: 4,
			question: 'I want to build more than one project. Is that allowed?',
			response:
				"You can use Windster for an unlimited amount of projects, whether it's a personal website, a SaaS app, or a website for a client. As long as you don't build a product that will directly compete with Windster either as a UI kit, theme, or template, it's fine."
		},
		{
			id: 5,
			question: "What does 'free updates' include?",
			response: `
				The free updates that will be provided is based on the <a
					href="#"
					class="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline"
					>roadmap</a
				> that we have laid out for this project. It is also possible that we will provide extra
				updates outside of the roadmap as well.`
		},
		{
			id: 6,
			question: 'What does the free version include?',
			response: `
				The <a
					href="#"
					class="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline"
					>free version</a
				> of Windster includes a minimal style guidelines, component variants, and a dashboard page
				with the mobile version alongside it.`
		},
		{
			id: 7,
			question: 'What is the difference between Windster and Tailwind UI?',
			response:
				'Although both Windster and Tailwind UI are built for integration with Tailwind CSS, the main difference is in the design, the pages, the extra components and UI elements that Windster includes. Additionally, Windster is a project that is still in development, and later it will include both the application, marketing, and e-commerce UI interfaces.',
			additionalText:
				'Additionally, Windster is a project that is still in development, and later it will include both the application, marketing, and e-commerce UI interfaces.'
		}
	];
</script>

<svelte:head>
	<title>FAQS</title>
	<meta name="Preguntas frecuentes" content="Preguntas frecuentes" />
</svelte:head>

<h2
	class="mb-8 text-center text-4xl tracking-tight leading-none font-extrabold text-gray-900 md:text-4xl lg:text-5xl dark:text-white"
>
	Preguntas Frecuentes
</h2>

<div
	class="grid pt-8 text-left border-t border-gray-200 md:gap-8 dark:border-gray-700 md:grid-cols-2"
>
	{#each questions as item (item.id)}
		<div class="mb-10">
			<h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
				<svg
					class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						fill-rule="evenodd"
						d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
						clip-rule="evenodd"
					/></svg
				>
				{item.question}
			</h3>
			<p class="text-gray-500 dark:text-gray-400">
				{@html item.response}
				{#if item.additionalText}
					{@html item.additionalText}
				{/if}
			</p>
		</div>
	{/each}
</div>
