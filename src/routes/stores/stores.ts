import { writable, type Writable } from 'svelte/store';

export const isOpen: Writable<boolean> = writable(false);
export const isDarkMode: Writable<boolean> = writable(false);