<script>
	import '../app.postcss';
	import Navbar from "../components/Navbar.svelte";
	import Footer from '../components/Footer.svelte';
</script>


<Navbar />
<main class="pt-8">
	<slot />
</main>
<Footer />

