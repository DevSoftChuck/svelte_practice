<script>
	import '../app.postcss';
	import HomeNavBar from "../components/HomeNavBar.svelte";
	import HomeFooter from '../components/HomeFooter.svelte';
</script>

<div>
	<HomeNavBar />

	<main>
		<slot />
	</main>

	<HomeFooter />
</div>
