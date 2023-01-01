<script>
	import { Modal, Button, Label, Input, Textarea, Helper } from 'flowbite-svelte';
	import { validateInputs } from '../helpers/validators/ContactModal';
	export let openModal = false;

	let inputValues = {
		emailValue: '',
		subjectValue: '',
		messageValue: ''
	};

	const inputDefaultStyle =
		'border-gray-300 dark:border-gray-500 focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500';
	const errorBorderStyle =
		'border-red-300 dark:border-red-500 focus:border-red-400 focus:ring-red-500 dark:focus:border-red-500 dark:focus:ring-red-500';

	$: inputErrors = validateInputs(inputValues);
	$: emailClass =
		inputErrors.emailValue && inputValues.emailValue ? errorBorderStyle : inputDefaultStyle;
	$: subjectClass =
		inputErrors.subjectValue && inputValues.subjectValue ? errorBorderStyle : inputDefaultStyle;
	$: messageClass =
		inputErrors.messageValue && inputValues.messageValue ? errorBorderStyle : inputDefaultStyle;
</script>

<Modal title="Contáctanos" bind:open={openModal} autoclose={false}>
	<div class="flex flex-col space-y-4">
		<Label class="space-y-2">
			<span>Su correo electrónico</span>
			<Input
				defaultClass="{emailClass} bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
				type="email"
				color="Custom"
				id="email"
				name="email"
				bind:value={inputValues.emailValue}
				placeholder="nombre@ejemplo.com"
				required
			/>

			<!-- create an small label that shows the error message -->
			{#if inputErrors.emailValue && inputValues.emailValue}
				<Helper class="mt-2" color="red">
					<span class="font-medium">{inputErrors.emailValue}</span>
				</Helper>
			{/if}
		</Label>

		<Label class="space-y-2">
			<span>Asunto</span>
			<Input
				defaultClass="{subjectClass} bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
				type="text"
				color="Custom"
				id="subject"
				name="asunto"
				bind:value={inputValues.subjectValue}
				placeholder="Díganos cómo podemos ayudarle"
				required
			/>

			<!-- create an small label that shows the error message -->
			{#if inputErrors.subjectValue && inputValues.subjectValue}
				<Helper class="mt-2" color="red">
					<span class="font-medium">{inputErrors.subjectValue}</span>
				</Helper>
			{/if}
		</Label>

		<div class="sm:col-span-2">
			<label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
				>Su mensaje</label
			>
			<textarea
				id="message"
				bind:value={inputValues.messageValue}
				rows={6}
				class="{messageClass} w-full rounded-lg p-2.5 text-sm bg-gray-50 text-gray-900 border dark:placeholder-gray-400 dark:text-white dark:bg-gray-700"
				placeholder="Cuéntenos el motivo de su solicitud. Nuestro equipo de atención al cliente le responderá en breve..."
			/>

			<!-- create an small label that shows the error message -->
			{#if inputErrors.messageValue && inputValues.messageValue}
				<Helper class="mt-2" color="red">
					<span class="font-medium">{inputErrors.messageValue}</span>
				</Helper>
			{/if}
		</div>
		<div class="flex items-start mb-6">
			<p id="helper-text-explanation" class="ml-2 font-medium text-sm text-gray-500">
				Al enviar este formulario, acepta nuestras <a
					href="/terms"
					class="text-blue-600 hover:underline dark:text-blue-500">Condiciones de uso</a
				>
				y nuestra
				<a href="/privacy" class="text-blue-600 hover:underline dark:text-blue-500"
					>Política de privacidad</a
				>.
			</p>
		</div>
	</div>
	<svelte:fragment slot="footer">
		<Button>Enviar mensaje</Button>
	</svelte:fragment>
</Modal>
