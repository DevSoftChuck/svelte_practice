<script>
	import Features from "../components/Features.svelte";
</script>

<svelte:head>
	<title>NOMBRE_DE_LA_EMPRESA</title>
	<meta name="NOMBRE_DE_LA_EMPRESA pagina principal" content="NOMBRE_DE_LA_EMPRESA app" />
</svelte:head>

<section class="py-16 bg-white dark:bg-gray-900">
	<div class="px-8 mx-auto max-w-screen-xl text-center lg:px-12">
		<h1
			class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
		>
			Bienvenido a NOMBRE
		</h1>
		<p
			class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-16 dark:text-gray-400"
		>
			Con nuestros servicios de intermediación de contratos, encuentra lo que estás buscando sin
			perder tiempo ni esfuerzo. 
		</p>
		<div
			class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"
		>
			<a
				href="#"
				class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
			>
				Learn more
				<svg
					class="ml-2 -mr-1 w-5 h-5"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						fill-rule="evenodd"
						d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
						clip-rule="evenodd"
					/></svg
				>
			</a>
			<a
				href="#"
				class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
			>
				<svg
					class="mr-2 -ml-1 w-5 h-5"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"
					/></svg
				>
				Signup
			</a>
		</div>
	</div>
	<Features />
	<div
		class="py-16 px-8 mx-8 text-center rounded-lg max-w-screen-lg lg:mx-auto lg:px-12 bg-gray-200 dark:bg-gray-700"
	>
		<h1 class="text-3xl tracking-tight leading-none text-gray-900 dark:text-white">
			¿Estás cansado de tener que lidiar con la complejidad de los contratos por tu cuenta?
		</h1>
		<br />
		<h1 class="text-3xl tracking-tight leading-none text-gray-900 dark:text-white">
			¡Nosotros podemos ayudarte!
		</h1>
	</div>	
</section>


