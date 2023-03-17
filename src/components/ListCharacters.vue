<template>
	<section>
		<div class="characters">
			<div class="characters_item" v-for="character in characters" :key="character.id">
				{{ character.name }}
			</div>
		</div>
	</section>
</template>
<script setup>
	import { onMounted, computed } from "vue";
	import { useStore } from "vuex";
	const store = useStore();
	const characters = computed(() => {
		return store.state.charactersFilter;
	});
	onMounted(() => {
		store.dispatch("getCharacters");
	});
</script>
<style lang=""></style>
