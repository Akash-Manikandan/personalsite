<script lang="ts">
	import Prism from 'prismjs';
	import CryptoJS from 'crypto-js';
	let code = `console.log('Hello world')`;
	export let data: string;
</script>

<div class="code text-left">
	{@html Prism.highlight(
		CryptoJS.AES.decrypt(data, 'CodeforPresonalSite').toString(CryptoJS.enc.Utf8),
		Prism.languages.js,
		'js'
	)}
</div>

<style>
	.code {
		white-space: pre-wrap;
	}
</style>
