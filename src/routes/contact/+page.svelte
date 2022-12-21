<script>
	// this.setCustomValidity('Por favor, ingrese un correo electronico valido!')

	//create a function to validate if inputs are empty and throw a message as tooltip using setCustomValidity

	const handleInputChange = (e) => {
		const input = e.target;
		const value = input.value;
		const emailRegex =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (value === '') {
			input.setCustomValidity('Por favor, complete este campo!');
		} else if (!emailRegex.test(value) && input.id === 'email') {
			input.setCustomValidity('Por favor, ingrese un correo electronico valido!');
		} else {
			input.setCustomValidity('');
		}
	};
</script>

<svelte:head>
	<title>Contacto</title>
	<meta name="Contacto" content="Contacto" />
</svelte:head>

<section class="bg-white dark:bg-gray-900">
	<div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
		<h2
			class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white"
		>
			Contáctanos
		</h2>
		<p class="mb-8 lg:mb-16 text-center text-gray-500 dark:text-gray-400 sm:text-xl">
			¿Tienes un problema técnico? ¿Necesitas más información sobre nuestro plan de negocio?
			Cuéntanos cómo podemos ayudarte, de forma que nuestro equipo de profesionales pueda ayudarle.
		</p>
		<form action="#" class="space-y-4">
			<div>
				<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
					>Su correo electrónico</label
				>
				<input
					type="email"
					id="email"
					class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
					placeholder="nombre@ejemplo.com"
					required
					on:invalid={handleInputChange}
				/>
			</div>
			<div>
				<label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
					>Asunto</label
				>
				<input
					type="text"
					id="subject"
					class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
					placeholder="Díganos cómo podemos ayudarle"
					required
					on:invalid={handleInputChange}
				/>
			</div>
			<div class="sm:col-span-2">
				<label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
					>Su mensaje</label
				>
				<textarea
					id="message"
					rows="6"
					class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
					placeholder="Cuéntenos el motivo de su solicitud. Nuestro equipo de atención al cliente le responderá en breve..."
				/>
			</div>
			<div class="flex items-start mb-6">
				<p id="helper-text-explanation" class="ml-2 font-medium text-sm text-gray-500">
					Al enviar este formulario, acepta nuestras <a
						href="/terms"
						class="text-blue-600 hover:underline dark:text-blue-500">condiciones de uso</a
					>
					y nuestra
					<a href="/privacy" class="text-blue-600 hover:underline dark:text-blue-500"
						>política de privacidad</a
					>, que explica cómo podemos recopilar, utilizar y divulgar su información personal,
					incluso a terceros.
				</p>
			</div>
			<button
				type="submit"
				class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
			>
				Enviar mensaje
			</button>
		</form>
	</div>
</section>
