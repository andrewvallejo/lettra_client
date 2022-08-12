import { derived, writable } from "svelte/store";

import { replaceNewlines, wrapWords } from "../lib/editor.ts";

export const text = writable<string>('');

export const liveText = derived(
	text,
	$text => {
    const parsed = replaceNewlines($text)
    return wrapWords(parsed);
  }
);


export const matchedWords = writable<string[]>([]);


