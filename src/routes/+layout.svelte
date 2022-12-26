<script>
	import '../app.postcss';
	import HomeNavBar from "../components/HomeNavBar.svelte";
	import HomeFooter from '../components/HomeFooter.svelte';
</script>

<div >
	<HomeNavBar />
	<main class="pt-8">
		<slot />
	</main>
	<HomeFooter />
</div>
