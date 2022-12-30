<script>
    import { Modal, Button, Label, Input } from 'flowbite-svelte';
    
    export let openModal = false;
</script>

<Modal title="Contáctanos" bind:open={openModal} autoclose={false}>
  <form class="flex flex-col space-y-4" action="#">
    <Label class="space-y-2">
			<span>Su correo electrónico</span>
			<Input type="email" name="email" placeholder="nombre@ejemplo.com" required />
		</Label>
    <Label class="space-y-2">
			<span>Asunto</span>
			<Input type="text" id="subject" name="asunto" placeholder="Díganos cómo podemos ayudarle" required />
		</Label>
    <div class="sm:col-span-2">
      <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >Su mensaje</label
      >
      <textarea
        id="message"
        rows="6"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        placeholder="Cuéntenos el motivo de su solicitud. Nuestro equipo de atención al cliente le responderá en breve..."
      />
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
  </form>
  <svelte:fragment slot='footer'>
    <Button>Enviar mensaje</Button>
  </svelte:fragment>
</Modal>