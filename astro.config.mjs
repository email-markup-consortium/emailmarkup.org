import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import react from '@astrojs/react';
import alpine from '@astrojs/alpinejs';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import { unified } from '@astrojs/markdown-remark';

// https://astro.build/config
export default defineConfig({
	site: 'https://emailmarkup.org/',
	// Preserve spaces between inline elements when upgrading to Astro 7.
	compressHTML: true,
	// Keep the existing Markdown/MDX typography and HTML output.
	markdown: { processor: unified() },
	integrations: [
		// Enable Preact to support Preact JSX components.
		preact({ include: ['**/LanguageSelect.tsx'] }),
		// Enable React for the Algolia search component.
		react({ include: ['**/Search.tsx'] }),
		
		
		alpine(),
		sitemap(),
		mdx()
	],
});
