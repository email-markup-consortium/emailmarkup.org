export const SITE = {
	title: 'Email Markup Consortium',
	description: 'A community-led group of industry professionals working to improve the email experience for everyone',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://emailmarkup.org/img/default-og-image.png',
		alt: 'Email Markup Consortium logo'
	},
	twitter: 'EmailMarkup',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
};

// Uncomment this to add an "Edit this page" button to every page of documentation.
// export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/blob/main/docs/`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
// export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
// export const ALGOLIA = {
//   indexName: 'XXXXXXXXXX',
//   appId: 'XXXXXXXXXX',
//   apiKey: 'XXXXXXXXXX',
// }

export const SIDEBAR = {
	en: [
		{ text: '', header: true },
		{ text: 'Home', link: '' },
		{ text: 'Code of Conduct', link: 'https://github.com/email-markup-consortium/email-markup-consortium/blob/main/code-of-conduct.md' },

		{ text: 'Pages', header: true },
		{ text: 'Mission', link: 'en/docs/mission' },
		{ text: 'Glossary', link: 'en/docs/glossary' },
		{ text: 'Compliant Standards', link: 'en/docs/compliant-standards' }
	],
};
