import type { Instructions } from '../types';
import { writable } from 'svelte/store';

const store: Instructions = {
	prompt: `In order to create a wordiable, you must surround it with two backslashes.\n \n For Example, the words \\flamingo\\ and \\doctor\\ are now wordiables.\n \n With every following iteration of the word's colors corresponding with it.\n \n I am applying for the \\doctor\\ role at \\flamingo\\ inc.\n \n Hit any key to clear editor and begin!`,
	active: true
};

const instructionsStore = () => {
	const { subscribe, set, update } = writable(store);

	const toggle = () => {
		update((instructions: Instructions) => {
			instructions.active = !instructions.active;
			return instructions;
		});
	};

	return {
		subscribe,
		set,
		update,
		toggle
	};
};

export const instructions = instructionsStore();
