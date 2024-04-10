import { persisted } from 'svelte-persisted-store';
/**
 * Represents the settings store.
 */
/**
 * The settings store object that holds various settings for the application.
 */
export const settingsStoreA = persisted('settingsStoreA', {
	lang: 'sv-SE',
	fullScreen: false,
	show1a: false
});

/**
 * Sets the `showSettings` property in the `settingsStoreA` to `true`.
 */
export function setShow1a() {
	settingsStoreA.update((c) => ({ ...c, show1a: true }));
}

/**
 * Sets the `showSettings` property of the `settingsStoreA` to `false`.
 */
export function setHide1a() {
	settingsStoreA.update((c) => ({ ...c, show1a: false }));
}
