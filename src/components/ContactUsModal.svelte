<script>
    import { Modal, Button } from 'flowbite-svelte';
    
    export let openModal = false;
</script>

<Modal title="Contáctanos" bind:open={openModal} autoclose={false}>
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
  </form>
  <svelte:fragment slot='footer'>
    <Button>Enviar mensaje</Button>
  </svelte:fragment>
</Modal>