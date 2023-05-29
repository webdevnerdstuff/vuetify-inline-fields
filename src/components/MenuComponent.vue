<template>
	<v-list :color="drawerOptions.color ? 'white' : 'primary'">
		<v-list-item
			v-for="item in menuItems"
			:key="item.title"
			:class="{
				'v-list-item--active': active === item.href,
			}"
			:color="drawerOptions.color ? 'white' : 'primary'"
			:href="item.href"
			link
			:title="item.title"
		>
			<template v-slot:prepend>
				<v-icon :icon="item.icon"></v-icon>
			</template>
		</v-list-item>
	</v-list>
</template>

<script setup>
import { inject, onMounted, reactive, ref } from 'vue';

const drawerOptions = inject('drawerOptions');

const active = ref('');
const menuItems = reactive([
	{
		href: '#home',
		icon: 'mdi:mdi-home',
		title: 'Home',
	},
	{
		href: '#installation',
		icon: 'mdi:mdi-plus-thick',
		title: 'Installation',
	},
	{
		href: '#description',
		icon: 'mdi:mdi-information-outline',
		title: 'Description',
	},
	{
		href: '#props',
		icon: 'mdi:mdi-cog',
		title: 'Props',
	},
	{
		href: '#events',
		icon: 'mdi:mdi-calendar-star',
		title: 'Events',
	},
	{
		href: '#slots',
		icon: 'mdi:mdi-slot-machine',
		title: 'Slots',
	},
	{
		href: '#sass-variables',
		icon: 'mdi:mdi-sass',
		title: 'SASS Variables',
	},
	{
		href: '#example',
		icon: 'mdi:mdi-code-json',
		title: 'Example',
	},
	{
		href: '#dependencies',
		icon: 'mdi:mdi-asterisk-circle-outline',
		title: 'Dependencies',
	},
	{
		href: '#license',
		icon: 'mdi:mdi-card-account-details-outline',
		title: 'License',
	},
	{
		href: '#legal',
		icon: 'mdi:mdi-scale-balance',
		title: 'Legal',
	},
]);

onMounted(() => {
	smoothScroll();

	active.value = window.location.hash || '#home';
});

function smoothScroll() {
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener('click', (e) => {
			e.preventDefault();

			const hash = anchor.hash;
			const id = hash.replace('#', '');
			const yOffset = -55;
			const element = document.getElementById(id);
			const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

			active.value = hash;

			window.location.hash = hash;
			window.scrollTo({ behavior: 'smooth', top: y });
		});
	});
}

</script>

<style lang="scss">
</style>
