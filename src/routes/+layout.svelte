<script>
	import '../app.postcss';
	import NavbarLogout from "../components/NavbarLogout.svelte";
	import Footer from '../components/Footer.svelte';
</script>

<div >
	<NavbarLogout />
	<main class="pt-8">
		<slot />
	</main>
	<Footer />
</div>
