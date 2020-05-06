import { readable } from "svelte/store";

export function stopwatch() {
	let setter, start = Date.now(), end = start;
	
	let store = readable({ ms: 0 }, set => {
		setter = set;
		return () => {};
	});

	store.update = (stage = "") => {
		if (setter) {
			end = Date.now();
			setter({ ms: end - start, stage });
		}
		return "";
	};

	store.reset = () => {
		if (setter) {
			start = end = Date.now();
			setter({ ms: 0 });
		}
	};

	return store;
}
