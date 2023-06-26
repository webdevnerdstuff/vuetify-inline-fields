<template>
	<v-row>
		<v-col
			id="description"
			class="mb-5"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#description"
				>#</a>
				Description
			</h2>

			<v-row>
				<v-col cols="12">
					<p>Vuetify Inline Fields Component Library offers a comprehensive collection of reusable UI components
						designed to create elegant and efficient inline form fields within your applications. With seamless
						integration into Vuetify's UI framework and a wide range of customizable options, developers can effortlessly
						incorporate inline fields that perfectly align with their application's needs.
					</p>
					<p>
						Additionally, this library provides enhanced integration specifically tailored for usage within data tables.
						Developers can seamlessly integrate inline form fields directly into their data table cells, facilitating
						efficient inline editing and data manipulation. This feature empowers users to make changes directly within
						the table, streamlining the editing process and improving productivity.</p>
				</v-col>
			</v-row>
		</v-col>
	</v-row>
</template>

<script setup>
import { inject } from 'vue';


const classes = inject('classes');
const links = inject('links');
</script>
