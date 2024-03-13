import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex'
import mdsvexConfig from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			precompress: false,
			strict: true
		})
	},
	extensions: ['.svelte', '.md'],
	preprocess: [
		mdsvex(mdsvexConfig)
	]
};

export default config;
