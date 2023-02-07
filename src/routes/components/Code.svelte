<script lang="ts">
	import Prism from 'prismjs';
	import CryptoJS from 'crypto-js';

	export let data: string;
</script>

<code class="code text-left">
	{@html Prism.highlight(
		CryptoJS.AES.decrypt(data, 'CodeforPresonalSite').toString(CryptoJS.enc.Utf8),
		Prism.languages.js,
		'js'
	)}
</code>

<style style="scss">
	.code {
		white-space: pre-wrap;
	}
</style>
