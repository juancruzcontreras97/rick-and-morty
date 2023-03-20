<template>
	<section>
		<div class="characters">
			<div class="characters_item" v-for="character in characters" :key="character.id">
				<CardCharacter :character="character" />
			</div>
		</div>
	</section>
</template>

<script setup>
	import { onMounted, computed } from "vue";
	import { useStore } from "vuex";

	import CardCharacter from "./CardCharacter.vue";
	const store = useStore();
	const characters = computed(() => {
		return store.state.charactersFilter;
	});
	onMounted(() => {
		store.dispatch("getCharacters");
	});
</script>
<style>
	.characters {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 3rem;
		margin: 3rem 0;
	}
</style>
