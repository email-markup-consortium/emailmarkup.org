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
export const GITHUB_REPO = 'email-markup-consortium/emailmarkup.org';
export const GITHUB_EDIT_URL = `https://github.com/${GITHUB_REPO}/blob/main/`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
// export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
// export const ALGOLIA = {
//   indexName: 'XXXXXXXXXX',
//   appId: 'XXXXXXXXXX',
//   apiKey: 'XXXXXXXXXX',
// }

export const SIDEBARS = {
	default: {
		en: [
			{ text: '', header: true },
			{ text: 'Mission', link: 'en/docs/mission' },
			{ text: 'Vision', link: 'en/docs/vision' },
			{ text: 'Benefits', link: 'en/docs/benefits' },
			{ text: 'Glossary', link: 'en/docs/glossary' },
			
			{ text: 'Work', header: true },
			{ text: 'Planned Projects', link: 'en/projects' },
			{ text: 'Compliant Standards', link: 'en/docs/compliant-standards' },
			{ text: 'Sanitizer', link: 'en/docs/sanitizer' },

			{ text: 'Reports', header: true },
			{ text: 'Accessibility', link: 'en/reports/accessibility' },
			{ text: 'Email Clients', link: 'en/reports/email-clients' },

			{ text: 'Help', header: true },
			{ text: 'Contribute', link: 'en/how-to-help' },
			{ text: 'Sponsor', link: 'en/sponsors' },
			{ text: 'Roles', link: 'https://github.com/email-markup-consortium/email-markup-consortium/blob/main/roles-and-responsibilities.md' },
			{ text: 'Code of Conduct', link: 'https://github.com/email-markup-consortium/email-markup-consortium/blob/main/code-of-conduct.md' }
		],
	},

	sanitizer: {
		en: [
			{ text: '', header: true },
			{ text: 'Back', link: 'en/docs/' },

			{ text: 'Sanitizer', header: true },
			{ text: 'Intro', link: 'en/docs/sanitizer' },
			{ text: 'Handling', link: 'en/docs/sanitizer/handling' },
			{ text: 'Features', link: 'en/docs/sanitizer/features' },
		],
	}
};
