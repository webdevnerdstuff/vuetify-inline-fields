<template>
	<v-app id="home">
		<!-- ====================================================== App Bar -->
		<AppBar is-playground />

		<!-- ====================================================== Main Container -->
		<v-main class="main-container pb-10">
			<v-responsive>
				<v-container class="px-10">
					<v-row>
						<v-col class="v-col-12 text-center">
							<h1>Vuetify Inline Fields</h1>
						</v-col>
						<v-col class="v-col-12 text-center">
							<v-chip color="primary">
								Playground v{{ store.pluginVersion }}
							</v-chip>
						</v-col>
					</v-row>

					<v-row>
						<v-col class="v-col-12">
							<v-container>
								<v-row class="row mb-4">
									<PlaygroundPage />
								</v-row>
							</v-container>
						</v-col>
					</v-row>
				</v-container>
			</v-responsive>
		</v-main>
	</v-app>
</template>


<script setup>
import { provide } from 'vue';
import { useCoreStore } from '@/stores/index';
import PlaygroundPage from '@/playground/PlaygroundPage.vue';
import AppBar from '@/documentation/layout/AppBar.vue';

const store = useCoreStore();
provide('links', store.links);
</script>


<style scoped>
</style>
