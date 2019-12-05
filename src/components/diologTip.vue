<template>
	<div class="content">
		<div class="toast">{{postTitle}}</div>
	</div>
</template>

<script>
export default {
	props: ['postTitle'],
	data() {
		return {

		}
	}
}
</script>

<style scoped>
	.toast {
		position: absolute;
		top: 45%;
		width: 14rem;
		height: 4rem;
		left: 50%;
		margin-left: -7rem;
		z-index: 10000;
		background:rgba(0,0,0,0.4);
		color: #FFFFFF;
		font-size: 1.6rem;
		text-align: center;
		line-height: 4rem;
		border-radius: .5rem;
		font-weight: bold;
	}
</style>