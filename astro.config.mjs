// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

/** @param {string} pkg @param {string} file */
const fontsource = (pkg, file) => `@fontsource/${pkg}/files/${file}.woff2`;

export default defineConfig({
	site: 'https://frohlichcortezh.github.io',
	trailingSlash: 'ignore',
	build: { format: 'directory' },
	// The previous site published the English CV under /en/; English now lives at the root.
	redirects: { '/en': '/' },
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Roboto Slab',
			cssVariable: '--font-slab',
			fallbacks: ['serif'],
			options: {
				variants: [
					{ src: [fontsource('roboto-slab', 'roboto-slab-latin-400-normal')], weight: 400, style: 'normal' },
					{ src: [fontsource('roboto-slab', 'roboto-slab-latin-700-normal')], weight: 700, style: 'normal' },
					{ src: [fontsource('roboto-slab', 'roboto-slab-latin-800-normal')], weight: 800, style: 'normal' },
				],
			},
		},
		{
			provider: fontProviders.local(),
			name: 'IBM Plex Sans',
			cssVariable: '--font-plex',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{ src: [fontsource('ibm-plex-sans', 'ibm-plex-sans-latin-400-normal')], weight: 400, style: 'normal' },
					{ src: [fontsource('ibm-plex-sans', 'ibm-plex-sans-latin-400-italic')], weight: 400, style: 'italic' },
					{ src: [fontsource('ibm-plex-sans', 'ibm-plex-sans-latin-600-normal')], weight: 600, style: 'normal' },
				],
			},
		},
		{
			provider: fontProviders.local(),
			name: 'Meslo LG',
			cssVariable: '--font-meslo',
			fallbacks: ['monospace'],
			options: {
				variants: [
					{ src: ['./src/assets/fonts/meslo/MesloLGM-Regular.subset.woff2'], weight: 400, style: 'normal' },
					{ src: ['./src/assets/fonts/meslo/MesloLGM-Bold.subset.woff2'], weight: 700, style: 'normal' },
				],
			},
		},
	],
});
