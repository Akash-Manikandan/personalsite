<script lang="ts">
	import { onMount } from 'svelte';
	import { Canvas, Layer, t } from 'svelte-canvas';
	import { feature } from 'topojson-client';
	import { geoOrthographic, geoPath, geoGraticule10, type GeoPermissibleObjects } from 'd3-geo';
	import { isDarkMode } from '../stores/stores';
	let map: GeoPermissibleObjects;
	export let width: number;
	const projection = geoOrthographic(),
		path = geoPath(projection);
	onMount(() =>
		fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json')
			.then((data) => data.json())
			.then((data) => (map = feature(data, 'land')))
	);
	const chennaiCoords: [number, number] = [80.2707, 13.0827]; // Chennai coordinates [longitude, latitude]
	$: graticule = ({
		context,
		width,
		height
	}: {
		context: CanvasRenderingContext2D;
		width: number;
		height: number;
	}) => {
		projection.fitSize([width, height], { type: 'Sphere' }).rotate([$t / 50, -10]);
		context.strokeStyle = $isDarkMode ? '#b8c1ec' : '#abd1c6';
		context.beginPath(), path(geoGraticule10()), context.stroke();
	};
	$: globe = ({ context }: { context: CanvasRenderingContext2D }) => {
		context.fillStyle = $isDarkMode ? '#eebbc3' : '#004643';
		context.beginPath(), path(map), context.fill();
		const [x, y]: any = projection(chennaiCoords);
		const canvasWidth = context.canvas.width;
		const canvasHeight = context.canvas.height;
		const scale = projection.scale();
		const rotate = projection.rotate();
		const chennaiVisible =
			x >= 0 &&
			x <= canvasWidth &&
			y >= 0 &&
			y <= canvasHeight &&
			scale > 100 &&
			rotate[0] > 180 &&
			rotate[0] < 360;
		if (chennaiVisible) {
			context.fillStyle = $isDarkMode ? '#b8c1ec' : '#716040';
			context.font = '14px Prompt';
			context.beginPath();
			context.arc(x-1, y, 2, 0, Math.PI * 2);
			context.fillText('Chennai', x + 3, y + 2);
			context.fill();
		}
	};
</script>

<Canvas {width} height={width}>
	<Layer setup={({ context }) => path.context(context)} render={graticule} />
	<Layer render={globe} />
</Canvas>
