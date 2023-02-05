
	import { createEventDispatcher } from "svelte";
	
	let intersectionObserver: IntersectionObserver;
	function ensureIntersectionObserver() {
		const dispatch = createEventDispatcher();
		if (intersectionObserver) return;
	
		intersectionObserver = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				const eventName = entry.isIntersecting ? 'enterViewport' : 'exitViewport';
				entry.target.dispatchEvent(new CustomEvent(eventName));
			});
		});
	}
	
	export default function viewport(element: HTMLElement) {
		ensureIntersectionObserver();
	
		intersectionObserver.observe(element);
	
		return {
			destroy() {
				intersectionObserver.unobserve(element);
			}
		};
	}

