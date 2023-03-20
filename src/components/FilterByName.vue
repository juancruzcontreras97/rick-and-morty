<template>
	<div class="search">
		<input type="search" placeholder="searc by name" @keyup="filter" v-model="name" />
	</div>
</template>
<script setup>
	import { ref } from "vue";
	import { useStore } from "vuex";

	const store = useStore();
	const name = ref("");

	const filter = () => {
		store.dispatch("filterByName", name.value);
	};
</script>
<style lang="scss">
	.search {
		width: 400px;
		margin: 3rem auto 0;
		input {
			height: 53px;
			width: 400px;
			border: none;
			border-radius: 10px;
			padding: 0 0.5rem;
		}
	}
</style>
