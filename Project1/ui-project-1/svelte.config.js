import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import adapter from '@sveltejs/adapter-netlify';

/** @type {import("@sveltejs/vite-plugin-svelte").SvelteConfig} */


/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			edge: false,
			split: false
		})
	},
  preprocess: vitePreprocess()
};

export default config;