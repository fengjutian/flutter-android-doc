// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'fengjutian Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/fengjutian/flutter-android-doc' }],
			sidebar: [
				{
					label: '文章',
					// items: [
					// 	// Each item here is one entry in the navigation menu.
					// 	{ label: 'Example Guide', slug: 'guides/example' },
					// ],
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: '资源',
					autogenerate: { directory: 'resource' },
				},
			    {
					label: '问题',
					autogenerate: { directory: 'questions' },
				},
			],
		}),
	],
});
