<template>
	<div class="Product-content">
		<figure class="Product-figure">
			<img :src="src" :alt="name" class="Product-image">
		</figure>
		<span class="Product-name" id="coca">{{ name }}</span>
		<span class="Product-value">Valor: {{ price }}</span>
		<span class="Product-code">Codigo: {{ code }}</span>
		<slot></slot>
	</div>
</template>

<script>

export default {
	props: {
		term: {
			type: String,
			default: ''
		},
		price: {
			type: Number,
			default: 0
		},
		code: {
			type: String,
			default: ''
		},
		src: {
			type: String,
			default: ''
		},
		name: {
			type: String,
			default: ''
		}
	},

	methods: {
		resolveImage(src) {
			return require(src)
		}
	}
}

</script>

<style lang="scss">
@import '../styles/settings';


@media (max-width: 760px) {
	.Product {
		&-content {
			width: calc(50% - 15px);
		}
	}
}

.Product {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	padding-bottom: 50px;
	border-bottom: 2px dotted;

	&--alignMiddle {
		justify-content: center;
		margin: 30px 0;
	}

	&-title {
		width: 100%;
		text-align: center;
		color: $primary-color;;
	}

	&-content {
		width: calc(25% - 10px);	
		margin-bottom: 10px;
	}

	&-figure {
		margin: 0;
		width: 100%;
	}
	
	&-name, 
	&-value,
	&-code {
		display: block;
		text-align: center;
		margin-top: 10px;
		color: $primary-color;
	}

	&-name {
		font-weight: bold;
	}

	&-value, 
	&-code {
		color: darken(#c5c0c0, 40%);
	}

	&-image {
		width: 100%;
		display: block;
	}

	&-actions {
		width: 100%;
		text-align: center;
	}

	// @media (max-width: 760px) {
	// 	&-content {
	// 		width: calc(50% - 15px);
	// 	}
	// }

	// @media (max-width: 420px) {
	// 	&-content {
	// 		width: calc(100%);
	// 	}
	// }
}

</style>