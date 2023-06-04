<template>
	<v-row>
		<v-col
			id="sass-variables"
			class="mb-5"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#sass-variables"
				>#</a>
				SASS Variables
			</h2>

			Please refer to the sass variables for the specific component in the <a
				:href="store.links.vuetify"
				target="_blank"
			>Vuetify</a> documentation.
		</v-col>


	</v-row>
</template>

<script setup>
import { inject } from 'vue';
import { useCoreStore } from '@/stores/index';


const classes = inject('classes');
const store = useCoreStore();
</script>
