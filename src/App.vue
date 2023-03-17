<template>
	<h1>Rick & Morty</h1>
	<ListCharacters></ListCharacters>
</template>

<script>
	import ListCharacters from "./components/ListCharacters";

	export default {
		name: "App",
		components: { ListCharacters },
	};
</script>

<style lang="scss"></style>
