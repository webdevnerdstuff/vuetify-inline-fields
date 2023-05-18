<template>
	<v-icon
		v-if="modelValue"
		class="fa-fw"
		:class="trueClass"
		:icon="iconTrue"
		:title="trueTitle"
	></v-icon>
	<v-icon
		v-else
		class="fa-fw"
		:class="falseClass"
		color="danger"
		:icon="iconFalse"
		:title="falseTitle"
	></v-icon>
</template>


<script setup lang="ts">

const modelValue = defineModel();

const props = defineProps({
	// ? The title tag of the false icon //
	falseTitle: {
		default: 'No',
		required: false,
		type: String,
	},

	// ? The false icon //
	iconFalse: {
		default: 'mdi mdi-close',
		required: false,
		type: String,
	},

	// ? The color of the icon when false //
	iconFalseColor: {
		default: 'text-danger',
		required: false,
		type: String,
	},

	// ? The true icon //
	iconTrue: {
		default: 'mdi mdi-check',
		required: false,
		type: String,
	},

	// ? The color of the icon when true //
	iconTrueColor: {
		default: 'text-success',
		required: false,
		type: String,
	},

	// ? The title tag of the true icon //
	trueTitle: {
		default: 'Yes',
		required: false,
		type: String,
	},

	// ? The value of the boolean //
	value: {
		default: false,
		type: [Boolean, Number],
	},
});

const falseClass = computed(() => {
	const classes = {
		[props.iconFalseColor]: true,
	};

	return classes;
});

const trueClass = computed(() => {
	const classes = {
		[props.iconTrueColor]: true,
	};

	return classes;
});
</script>

<style lang="scss">
</style>
