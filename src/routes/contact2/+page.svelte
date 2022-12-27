<script>
	import { AccordionItem, Accordion, Button } from 'flowbite-svelte';
	import ContactUsModal from '../../components/ContactUsModal.svelte';
 
	// ContactUs modal param
	let openModal = false;

	const accordionItems = [
		{
			header: 'Adoro sus productos',
			svg: 'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z',
			content: `
				<p class="mb-8 text-gray-500 dark:text-gray-400">
					Nos complace saber que le gustan nuestros productos. Esperamos que le ayuden a crear
					mejores proyectos.
				</p>
				<p class="mb-8 text-gray-500 dark:text-gray-400">
					¡Sentimos mucha curiosidad por saber qué nos quiere contar!
				</p>
			`,
		},
		{
			header: 'Tengo un problema con un producto',
			svg: 'M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75',
			content: `
				<p class="mb-8 text-gray-500 dark:text-gray-400">
					¡Estamos aquí para ayudar! Si tiene alguna pregunta, no dude en contactarnos.
				</p>
				<p class="mb-8 text-gray-500 dark:text-gray-400">
					¡Sentimos mucha curiosidad por saber qué nos quiere contar!
				</p>
			`,
		},
		{
			header: 'El pago sigue pendiente...',
			svg: 'M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z',
			content: `
				<p class="mb-8 text-gray-500 dark:text-gray-400">
					A veces nuestro proveedor de pago tarda más tiempo en procesar el pago. Se asegura de
					que la persona que ha realizado la compra es exactamente el propietario de la
					tarjeta/paypal para evitar fraudes en internet. Eso es todo, sólo algunos controles de
					seguridad adicionales para la protección de su cuenta. Gracias por su comprensión y
					disculpen las molestias.
				</p>
				<p class="mb-8 text-gray-500 dark:text-gray-400">
					Por favor, háganos saber si el pago de procesamiento está tomando demasiado tiempo y lo
					revisaremos manualmente.
				</p>
			`,
		},
		{
			header: 'Necesito una factura para mi empresa',
			svg: 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z',
			content: `
				<p class="mb-8 text-gray-500 dark:text-gray-400">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint
					explicabo ...
				</p>
			`,
		},
		{
			header: 'Estoy buscando patrocinadores',
			svg: 'M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
			content: `
				<p class="mb-8 text-gray-500 dark:text-gray-400">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint
					explicabo ...
				</p>
			`,
		},
		{
			header: 'Es otro asunto...',
			svg: 'M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155',
			content: `
				<p class="mb-8 text-gray-500 dark:text-gray-400">
					Si sigue sin encontrar respuesta a sus preguntas, no dude en ponerse en contacto con
					nosotros.
				</p>
			`,
		}
	];
		
</script>

<svelte:head>
	<title>Contacto</title>
	<meta name="Contacto" content="Contacto" />
</svelte:head>

<section class="py-28 bg-white dark:bg-gray-900">
	<div class="px-4 mx-auto max-w-screen-md">
		<h2 class="mb-16 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white" >
			¿Hay algún asunto en particular que estés tratando de resolver?
		</h2>

		<Accordion
			activeClasses="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800"
			inactiveClasses="text-gray-500 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800" >
			{#each accordionItems as item}
				<AccordionItem>
					<span slot="header" class="text-base flex gap-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d={item.svg}
							/>
						</svg>
						<span>{item.header}</span>
					</span>
					{@html item.content}

					<Button outline class="w-full" on:click={() => openModal = true}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="mr-2 w-6 h-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
							/>
						</svg>

						Enviar mensaje</Button>
				</AccordionItem>
			{/each}
		</Accordion>
	</div>
	<ContactUsModal bind:openModal />
</section>