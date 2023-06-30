<template>
	<v-row>
		<v-col
			id="example"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#example"
				>#</a>
				Example
			</h2>
		</v-col>

		<PlaygroundPage />
	</v-row>
</template>

<script setup>
import { inject } from 'vue';
import PlaygroundPage from '@/playground/configs/templates/PlaygroundPage.vue';


const classes = inject('classes');
</script>
