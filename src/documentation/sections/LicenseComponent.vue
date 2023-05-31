<template>
	<v-row>
		<v-col
			id="license"
			class="mb-5"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#license"
				>#</a>
				License
			</h2>

			<v-row>
				<v-col cols="12">
					Copyright &copy; {{ new Date().getFullYear() }}
					<a
						:href="store.links.githubProfile"
						target="_blank"
					>WebDevNerdStuff</a>
					<br />
					Licensed under the
					<a
						:href="`${store.links.github}/blob/master/LICENSE.md`"
						target="_blank"
					>
						MIT License
					</a>
				</v-col>
			</v-row>
		</v-col>
	</v-row>
</template>

<script setup>
import { inject } from 'vue';
import { useCoreStore } from '@/stores/index';

const classes = inject('classes');

const store = useCoreStore();
</script>
