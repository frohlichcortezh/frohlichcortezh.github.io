import type { L, Lang, Period } from '../data/cv';

export const locales: Record<Lang, { tag: string; path: string; name: string; short: string }> = {
	en: { tag: 'en', path: '/', name: 'English', short: 'EN' },
	pt: { tag: 'pt-BR', path: '/pt/', name: 'Português', short: 'PT' },
	fr: { tag: 'fr', path: '/fr/', name: 'Français', short: 'FR' },
};

export const ui = {
	en: {
		title: 'Hector Frohlich Cortez — CV',
		description: 'Full-stack developer and Tech Lead, founder of Resolu. .NET, web, DevOps and infrastructure.',
		skip: 'Skip to content',
		nav: { venture: 'Resolu', services: 'Services', experience: 'Experience', education: 'Education', skills: 'Skills' },
		navLabel: 'Sections',
		langLabel: 'Language',
		theme: 'theme',
		themes: { auto: 'Automatic', light: 'Light', dark: 'Dark', contrast: 'High contrast' },
		resolved: { light: 'light', dark: 'dark', contrast: 'contrast' },
		print: 'Print / PDF',
		contact: 'Contact',
		location: 'Based in',
		languages: 'Languages',
		ventureHead: 'Entrepreneurship',
		ventureLead: 'The company',
		servicesHead: 'Services delivered',
		servicesLead: 'Client work, now delivered through Resolu.',
		experienceHead: 'Employment',
		educationHead: 'Education',
		skillsHead: 'Skills',
		present: 'present',
		toConfirm: 'to confirm',
		visit: 'Visit',
		updated: 'Updated',
		colophon: 'Built with Astro. Type: Roboto Slab, IBM Plex Sans, Meslo LG. Visual language borrowed from resolu.dev.',
		source: 'Source code',
		newTab: 'opens in a new tab',
	},
	pt: {
		title: 'Hector Frohlich Cortez — Currículo',
		description: 'Desenvolvedor full stack e Tech Lead, fundador da Resolu. .NET, web, DevOps e infraestrutura.',
		skip: 'Pular para o conteúdo',
		nav: { venture: 'Resolu', services: 'Serviços', experience: 'Experiência', education: 'Formação', skills: 'Competências' },
		navLabel: 'Seções',
		langLabel: 'Idioma',
		theme: 'tema',
		themes: { auto: 'Automático', light: 'Claro', dark: 'Escuro', contrast: 'Alto contraste' },
		resolved: { light: 'claro', dark: 'escuro', contrast: 'contraste' },
		print: 'Imprimir / PDF',
		contact: 'Contato',
		location: 'Base',
		languages: 'Idiomas',
		ventureHead: 'Empreendimento',
		ventureLead: 'A empresa',
		servicesHead: 'Prestação de serviços',
		servicesLead: 'Trabalhos para clientes, hoje pela Resolu.',
		experienceHead: 'Experiência como empregado',
		educationHead: 'Formação',
		skillsHead: 'Competências',
		present: 'atual',
		toConfirm: 'a confirmar',
		visit: 'Visitar',
		updated: 'Atualizado em',
		colophon: 'Feito com Astro. Tipografia: Roboto Slab, IBM Plex Sans, Meslo LG. Linguagem visual emprestada do resolu.dev.',
		source: 'Código-fonte',
		newTab: 'abre em nova aba',
	},
	fr: {
		title: 'Hector Frohlich Cortez — CV',
		description: 'Développeur full stack et Tech Lead, fondateur de Resolu. .NET, web, DevOps et infrastructure.',
		skip: 'Aller au contenu',
		nav: { venture: 'Resolu', services: 'Prestations', experience: 'Expérience', education: 'Formation', skills: 'Compétences' },
		navLabel: 'Sections',
		langLabel: 'Langue',
		theme: 'thème',
		themes: { auto: 'Automatique', light: 'Clair', dark: 'Sombre', contrast: 'Contraste élevé' },
		resolved: { light: 'clair', dark: 'sombre', contrast: 'contraste' },
		print: 'Imprimer / PDF',
		contact: 'Contact',
		location: 'Basé à',
		languages: 'Langues',
		ventureHead: 'Entrepreneuriat',
		ventureLead: 'L’entreprise',
		servicesHead: 'Prestations de services',
		servicesLead: 'Missions clients, aujourd’hui via Resolu.',
		experienceHead: 'Expérience salariée',
		educationHead: 'Formation',
		skillsHead: 'Compétences',
		present: 'aujourd’hui',
		toConfirm: 'à confirmer',
		visit: 'Visiter',
		updated: 'Mis à jour',
		colophon: 'Réalisé avec Astro. Typographie : Roboto Slab, IBM Plex Sans, Meslo LG. Langage visuel emprunté à resolu.dev.',
		source: 'Code source',
		newTab: 's’ouvre dans un nouvel onglet',
	},
} satisfies Record<Lang, unknown>;

export type Ui = (typeof ui)[Lang];

/** Unconfirmed values are shown only while developing; production omits them. */
export const showDrafts = import.meta.env.DEV;

export const t = (value: L, lang: Lang) => value[lang];

const formatDate = (value: string, lang: Lang) => {
	const [year, month] = value.split('-');
	if (!month) return year!;
	const date = new Date(Date.UTC(Number(year), Number(month) - 1, 1));
	const name = new Intl.DateTimeFormat(locales[lang].tag, { month: 'short', timeZone: 'UTC' })
		.format(date)
		.replace('.', '');
	return `${name} ${year}`;
};

/** Returns the text parts of a period; `null` parts mean "to confirm". */
export function periodParts(period: Period, lang: Lang): [string | null, string | null] {
	const start = period.start ? formatDate(period.start, lang) : null;
	const end = period.end === 'present' ? ui[lang].present : period.end ? formatDate(period.end, lang) : null;
	return [start, end];
}
