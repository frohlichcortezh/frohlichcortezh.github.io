/*
 * Single source of truth for the CV, in the three published languages.
 *
 * `null` means "not confirmed yet": in `npm run dev` it renders as a dashed
 * TO CONFIRM marker, and production builds simply omit it. Entries with
 * `draft: true` are only shown in dev. Search this file for `null` and
 * `draft` before publishing.
 */

export const langs = ['en', 'pt', 'fr'] as const;
export type Lang = (typeof langs)[number];
export type L = Record<Lang, string>;

/** `YYYY-MM`. `end: 'present'` = ongoing; `null` = unknown (TO CONFIRM). */
export interface Period {
	start: string | null;
	end: string | 'present' | null;
}

export interface Entry {
	id: string;
	org: string | null;
	url?: string;
	role: L;
	/** Short line under the role: how the work was contracted, where it happened. */
	context: L | null;
	periods: Period[];
	summary?: L;
	items: L[];
	stack?: string[];
	draft?: boolean;
}

export const person = {
	name: 'Hector Frohlich Cortez',
	headline: {
		en: 'Full-stack developer · Tech Lead · Founder of Resolu',
		pt: 'Desenvolvedor full stack · Tech Lead · Fundador da Resolu',
		fr: 'Développeur full stack · Tech Lead · Fondateur de Resolu',
	} satisfies L,
	location: { en: 'Santos, São Paulo, Brazil', pt: 'Santos, SP, Brasil', fr: 'Santos, São Paulo, Brésil' } satisfies L,
	email: 'frohlichcortezh@protonmail.com',
	links: [
		{ label: 'GitHub', url: 'https://github.com/frohlichcortezh', handle: 'frohlichcortezh' },
		{ label: 'LinkedIn', url: 'https://www.linkedin.com/in/frohlichcortezh/', handle: 'in/frohlichcortezh' },
		{ label: 'Stack Overflow', url: 'https://stackoverflow.com/users/8323634/frohlichcortezh', handle: '8323634' },
	],
	summary: {
		en: 'Developer with more than fifteen years of experience in .NET and web applications, now running Resolu, the technology company I founded for software development, architecture, automation and infrastructure. Through Resolu I work as a contracted Tech Lead for clients, looking after software delivery from code to pipeline and the services that support it. I value code that is simple to read and maintain, free software, and writing down what I learn.',
		pt: 'Desenvolvedor com mais de quinze anos de experiência em .NET e aplicações web, hoje à frente da Resolu, empresa de tecnologia que fundei para desenvolvimento de software, arquitetura, automação e infraestrutura. Pela Resolu atuo como Tech Lead terceirizado para clientes, cuidando da entrega de software do código ao pipeline e dos serviços que a sustentam. Prezo por código simples de ler e de manter, por software livre e por registrar o que aprendo.',
		fr: 'Développeur avec plus de quinze ans d’expérience en .NET et en applications web, je dirige aujourd’hui Resolu, l’entreprise technologique que j’ai fondée pour le développement logiciel, l’architecture, l’automatisation et l’infrastructure. Via Resolu, j’interviens comme Tech Lead externe auprès de clients : livraison logicielle du code au pipeline et services qui la soutiennent. Je privilégie un code simple à lire et à maintenir, le logiciel libre et la documentation de ce que j’apprends.',
	} satisfies L,
};

/* ── Resolu: the company itself (entrepreneurship) ─────────────────────── */

export const venture = {
	name: 'Resolu',
	url: 'https://resolu.dev',
	role: { en: 'Founder & CTO', pt: 'Fundador e CTO', fr: 'Fondateur et CTO' } satisfies L,
	period: { start: '2023-10', end: 'present' } satisfies Period,
	pitch: {
		en: 'Technology company for software development, architecture, automation, infrastructure and consulting — and an independent publication about open technology. Motto: Understand. Experiment. Share.',
		pt: 'Empresa de tecnologia para desenvolvimento de software, arquitetura, automação, infraestrutura e consultoria — e uma publicação independente sobre tecnologia aberta. Lema: Entender. Experimentar. Compartilhar.',
		fr: 'Entreprise technologique de développement logiciel, d’architecture, d’automatisation, d’infrastructure et de conseil — et publication indépendante sur la technologie ouverte. Devise : Comprendre. Expérimenter. Partager.',
	} satisfies L,
	items: [
		{
			en: 'Created the company, its service offer and its visual identity (with the design studio Studio Goods).',
			pt: 'Criação da empresa, da oferta de serviços e da identidade visual (com o estúdio Studio Goods).',
			fr: 'Création de l’entreprise, de son offre de services et de son identité visuelle (avec le studio Studio Goods).',
		},
		{
			en: 'Built resolu.dev: static Astro site, no trackers or third-party resources, five accessible themes checked against WCAG 2.2 AA, automated tests in CI.',
			pt: 'Construção do resolu.dev: site estático em Astro, sem rastreadores nem recursos de terceiros, cinco temas acessíveis verificados em WCAG 2.2 AA, testes automatizados no CI.',
			fr: 'Réalisation de resolu.dev : site statique Astro, sans traceurs ni ressources tierces, cinq thèmes accessibles vérifiés WCAG 2.2 AA, tests automatisés en CI.',
		},
		{
			en: 'Runs its own infrastructure: Proxmox virtualisation, self-hosted GitLab with Linux and Windows runners, Debian VPS behind a shared Traefik reverse proxy, deployments through GitLab CI.',
			pt: 'Infraestrutura própria: virtualização com Proxmox, GitLab self-hosted com runners Linux e Windows, VPS Debian atrás de um Traefik compartilhado, deploys via GitLab CI.',
			fr: 'Infrastructure propre : virtualisation Proxmox, GitLab auto-hébergé avec runners Linux et Windows, VPS Debian derrière un Traefik mutualisé, déploiements via GitLab CI.',
		},
		{
			en: 'Designing a software-engineering platform where AI agents prepare changes and humans approve them (in progress).',
			pt: 'Desenho de uma plataforma de engenharia de software em que agentes de IA preparam mudanças e pessoas as aprovam (em andamento).',
			fr: 'Conception d’une plateforme d’ingénierie logicielle où des agents d’IA préparent les changements et des humains les valident (en cours).',
		},
	] satisfies L[],
	goal: {
		en: 'Goal: grow Resolu into a cooperative.',
		pt: 'Objetivo: transformar a Resolu em uma cooperativa.',
		fr: 'Objectif : faire de Resolu une coopérative.',
	} satisfies L,
};

/* ── Client work (through Resolu since its founding, Oct 2023) ─────────── */

const client: L = { en: 'Client · remote', pt: 'Cliente · remoto', fr: 'Client · à distance' };

export const services: Entry[] = [
	{
		id: 'banksoft',
		org: 'BankSoft',
		role: { en: 'Tech Lead & full-stack developer', pt: 'Tech Lead e desenvolvedor full stack', fr: 'Tech Lead et développeur full stack' },
		context: client,
		periods: [{ start: '2023-04', end: 'present' }],
		// Kept deliberately discreet until the case study is cleared with BankSoft.
		summary: {
			en: 'Built the engineering foundation of a growing development team from the ground up — version control, continuous integration and delivery, shared packages — and now lead its technical delivery.',
			pt: 'Estruturei do zero a base de engenharia de uma equipe de desenvolvimento em crescimento — controle de versão, integração e entrega contínuas, pacotes compartilhados — e hoje lidero sua entrega técnica.',
			fr: 'J’ai bâti de zéro le socle d’ingénierie d’une équipe de développement en croissance — gestion de versions, intégration et livraison continues, paquets partagés — et j’en dirige aujourd’hui la livraison technique.',
		},
		items: [
			{
				en: 'Set up self-hosted GitLab and designed every CI/CD pipeline.',
				pt: 'Implantação do GitLab self-hosted e criação de todos os pipelines CI/CD.',
				fr: 'Mise en place de GitLab auto-hébergé et conception de tous les pipelines CI/CD.',
			},
			{
				en: 'Internal NuGet package architecture and its publishing infrastructure.',
				pt: 'Arquitetura de pacotes NuGet internos e infraestrutura de publicação.',
				fr: 'Architecture des paquets NuGet internes et infrastructure de publication.',
			},
			{
				en: 'Applications that automate deployment and change-management requests (GMUD).',
				pt: 'Aplicações para automatizar e facilitar o deploy e as GMUDs (gestão de mudanças).',
				fr: 'Applications pour automatiser le déploiement et les demandes de changement (GMUD).',
			},
			{
				en: 'Project template for new .NET minimal APIs.',
				pt: 'Template para criação de minimal APIs em .NET.',
				fr: 'Modèle de projet pour les nouvelles minimal APIs .NET.',
			},
			{
				en: 'Delivery leadership: pipeline triage, branching, sprint and release process, Jira ↔ GitLab traceability; upkeep of GitLab, Passbolt and Uptime Kuma.',
				pt: 'Liderança da entrega: triagem de pipelines, branches, processo de sprint e release, rastreabilidade Jira ↔ GitLab; manutenção de GitLab, Passbolt e Uptime Kuma.',
				fr: 'Pilotage de la livraison : diagnostic des pipelines, branches, processus de sprint et de release, traçabilité Jira ↔ GitLab ; maintien de GitLab, Passbolt et Uptime Kuma.',
			},
		],
		stack: ['.NET', 'Minimal APIs', 'NuGet', 'GitLab CI/CD', 'Jira', 'Passbolt', 'Uptime Kuma'],
	},
	{
		id: 'alfa-tennant',
		org: 'Alfa Tennant',
		role: {
			en: 'After-sales portal and unified login',
			pt: 'Portal pós-venda e login unificado',
			fr: 'Portail après-vente et connexion unifiée',
		},
		context: client,
		periods: [{ start: '2024-08', end: '2025-02' }],
		items: [
			{
				en: 'After-sales portal (.NET Core 2.2, ASP.NET MVC).',
				pt: 'Portal de pós-venda (.NET Core 2.2, ASP.NET MVC).',
				fr: 'Portail après-vente (.NET Core 2.2, ASP.NET MVC).',
			},
			{
				en: 'Ms.Usuarios (.NET 8): a single login across several portals — users with profiles in the after-sales and sales-portal apps, plus other internal and external portals.',
				pt: 'Ms.Usuarios (.NET 8): login único para vários portais — usuários com perfis nos apps de pós-venda e portal de vendas, além de outros portais internos e externos.',
				fr: 'Ms.Usuarios (.NET 8) : connexion unique pour plusieurs portails — utilisateurs ayant un profil dans les applications après-vente et portail de ventes, ainsi que d’autres portails internes et externes.',
			},
		],
		stack: ['.NET Core 2.2', 'ASP.NET MVC', '.NET 8'],
	},
	{
		id: 'kilucru',
		org: 'Kilucru',
		role: {
			en: 'Online learning platform: WordPress, then Odoo',
			pt: 'Plataforma de ensino online: WordPress, depois Odoo',
			fr: 'Plateforme de formation en ligne : WordPress, puis Odoo',
		},
		context: { en: 'Own project', pt: 'Projeto próprio', fr: 'Projet personnel' },
		periods: [{ start: '2023-09', end: 'present' }],
		items: [
			{
				en: 'First version on WordPress with the LearnPress plugin.',
				pt: 'Primeira versão em WordPress com o plugin LearnPress.',
				fr: 'Première version sous WordPress avec le plugin LearnPress.',
			},
			{
				en: 'Migration to Odoo eLearning, deployed with Docker Compose on a VPS and published over HTTPS through a shared Traefik reverse proxy.',
				pt: 'Migração para o Odoo eLearning, implantado com Docker Compose em VPS e publicado em HTTPS por um Traefik compartilhado.',
				fr: 'Migration vers Odoo eLearning, déployé avec Docker Compose sur VPS et publié en HTTPS via un Traefik mutualisé.',
			},
			{
				en: 'GitLab CI pipeline: configuration validation, PostgreSQL backup before every deployment, manual deploy step and health check.',
				pt: 'Pipeline GitLab CI: validação da configuração, backup do PostgreSQL antes de cada deploy, deploy manual e verificação de saúde.',
				fr: 'Pipeline GitLab CI : validation de la configuration, sauvegarde PostgreSQL avant chaque déploiement, déploiement manuel et contrôle de santé.',
			},
		],
		stack: ['WordPress', 'LearnPress', 'Odoo eLearning', 'Docker Compose', 'PostgreSQL', 'Traefik', 'GitLab CI'],
	},
];

/* ── Employment before Resolu ──────────────────────────────────────────── */

export const experience: Entry[] = [
	{
		id: 'lojelis',
		org: 'Lojelis',
		url: 'https://www.linkedin.com/company/lojelis/',
		role: { en: 'Full-stack developer (.NET, Angular)', pt: 'Desenvolvedor full stack (.NET, Angular)', fr: 'Développeur full stack (.NET, Angular)' },
		context: { en: 'Consultant · Clermont-Ferrand, France', pt: 'Consultor · Clermont-Ferrand, França', fr: 'Consultant · Clermont-Ferrand, France' },
		periods: [{ start: '2020-08', end: '2023-03' }],
		summary: {
			en: 'Fixed-price projects and technical assistance, across every phase: requirements, estimation, design, development, documentation, testing, deployment, training and support.',
			pt: 'Projetos de escopo fechado e assistência técnica, em todas as fases: levantamento de requisitos, estimativa, concepção, desenvolvimento, documentação, testes, implantação, treinamento e suporte.',
			fr: 'Projets au forfait et assistance technique, sur toutes les phases : analyse des besoins, chiffrage, conception, développement, documentation, tests, déploiement, formation et support.',
		},
		items: [
			{
				en: 'Windows service integrating with the CEGID API (.NET Core 3.1).',
				pt: 'Serviço Windows de integração com a API CEGID (.NET Core 3.1).',
				fr: 'Service Windows d’intégration avec l’API CEGID (.NET Core 3.1).',
			},
			{
				en: 'Web portal serving as the interface of a data-mining tool (.NET Core 3.1, Angular, MySQL, REST).',
				pt: 'Portal web como interface de uma ferramenta de data mining (.NET Core 3.1, Angular, MySQL, REST).',
				fr: 'Portail web servant d’interface à un outil de data mining (.NET Core 3.1, Angular, MySQL, REST).',
			},
			{
				en: 'Redesign of a web application’s process built on a workflow service (.NET Framework 4.5, ASP.NET, WCF, WF).',
				pt: 'Reformulação do processo de uma aplicação web baseada em serviço de workflow (.NET Framework 4.5, ASP.NET, WCF, WF).',
				fr: 'Refonte du processus d’une application web reposant sur un service Workflow (.NET Framework 4.5, ASP.NET, WCF, WF).',
			},
			{
				en: 'Web application analysing train journey data extracted from black boxes (.NET Core 3.1, Angular, Azure DevOps).',
				pt: 'Aplicação web de análise de dados de caixas-pretas de viagens de trem (.NET Core 3.1, Angular, Azure DevOps).',
				fr: 'Application web d’analyse de données extraites de boîtes noires de trajets en train (.NET Core 3.1, Angular, Azure DevOps).',
			},
		],
	},
	{
		id: 'lokoa',
		org: 'Lokoa',
		url: 'https://www.linkedin.com/company/lokoa/',
		role: { en: 'Senior .NET developer', pt: 'Desenvolvedor .NET sênior', fr: 'Développeur .NET senior' },
		context: { en: 'Chamalières, France', pt: 'Chamalières, França', fr: 'Chamalières, France' },
		periods: [{ start: '2019-09', end: '2020-02' }],
		summary: {
			en: 'Responsible for the architecture of new applications and for evolving the existing code base (.NET Framework 4.6).',
			pt: 'Responsável pela arquitetura das novas aplicações e pela evolução do código existente (.NET Framework 4.6).',
			fr: 'Responsable de l’architecture des nouvelles applications et de l’évolution du code existant (.NET Framework 4.6).',
		},
		items: [
			{
				en: 'Architecture and development of a new application (WinForms, SOAP, .NET Framework 4.6, .NET Standard 2.0).',
				pt: 'Arquitetura e desenvolvimento de uma nova aplicação (WinForms, SOAP, .NET Framework 4.6, .NET Standard 2.0).',
				fr: 'Architecture et développement d’une nouvelle application (WinForms, SOAP, .NET Framework 4.6, .NET Standard 2.0).',
			},
		],
	},
	{
		id: 'funcao',
		org: 'Função Sistemas',
		url: 'https://www.linkedin.com/company/fun%C3%A7%C3%A3o-inform%C3%A1tica-automa%C3%A7%C3%A3o-e-sistemas-ltda/',
		role: { en: 'Full-stack developer', pt: 'Desenvolvedor full stack', fr: 'Développeur full stack' },
		context: {
			en: 'Remote consultant (2013–2019) · São Paulo, Brazil (2008–2012)',
			pt: 'Consultor remoto (2013–2019) · São Paulo, Brasil (2008–2012)',
			fr: 'Consultant à distance (2013–2019) · São Paulo, Brésil (2008–2012)',
		},
		periods: [
			{ start: '2013-06', end: '2019-07' },
			{ start: '2008-03', end: '2012-02' },
		],
		summary: {
			en: 'Design, development and testing of new features; client visits; support to the help-desk team; technical specifications; review of functional specifications; code review and workload follow-up.',
			pt: 'Concepção, desenvolvimento e testes de novas funcionalidades; visitas a clientes; apoio ao suporte técnico; especificações técnicas; validação de especificações funcionais; revisão de código e acompanhamento de carga da equipe.',
			fr: 'Conception, développement et tests de nouvelles fonctionnalités ; visites clients ; soutien au support technique ; spécifications techniques ; validation des spécifications fonctionnelles ; revue de code et suivi des charges.',
		},
		items: [
			{
				en: 'Led an application maintenance team of three people.',
				pt: 'Gestão de uma equipe de manutenção de aplicações (3 pessoas).',
				fr: 'Management d’une équipe de maintenance applicative (3 personnes).',
			},
			{
				en: 'Migration of Delphi 7 code to C# and ASP.NET.',
				pt: 'Migração de código Delphi 7 para C# e ASP.NET.',
				fr: 'Migration du code Delphi 7 vers C# et ASP.NET.',
			},
			{
				en: 'Internal framework to reduce recurring errors.',
				pt: 'Framework interno para reduzir erros recorrentes.',
				fr: 'Framework interne pour diminuer les erreurs courantes.',
			},
			{
				en: 'Integration back end for the new FEBRABAN payment platform (NPC).',
				pt: 'Back end de integração com a nova plataforma de pagamentos da FEBRABAN (NPC).',
				fr: 'Back end d’intégration avec la nouvelle plateforme de paiement FEBRABAN (NPC).',
			},
		],
		stack: ['.NET Framework 4.0–4.7', 'ASP.NET MVC', 'Delphi 7', 'SQL Server'],
	},
];

/* ── Education ─────────────────────────────────────────────────────────── */

export const education: Entry[] = [
	{
		id: 'caelum',
		org: 'Caelum',
		url: 'https://www.caelum.com.br/',
		role: { en: 'Android development course', pt: 'Curso de desenvolvimento Android', fr: 'Formation développement Android' },
		context: { en: 'São Paulo, Brazil', pt: 'São Paulo, Brasil', fr: 'São Paulo, Brésil' },
		periods: [{ start: '2011', end: '2011' }],
		items: [],
	},
	{
		id: 'mackenzie',
		org: 'Universidade Presbiteriana Mackenzie',
		url: 'https://www.mackenzie.br/graduacao/sao-paulo-higienopolis/sistemas-de-informacao/',
		role: { en: 'Information Systems (bachelor’s programme)', pt: 'Bacharelado em Sistemas de Informação', fr: 'Bachelor en systèmes d’information' },
		context: { en: 'São Paulo, Brazil', pt: 'São Paulo, Brasil', fr: 'São Paulo, Brésil' },
		periods: [{ start: '2010', end: '2011' }],
		items: [],
	},
	{
		id: 'ka',
		org: 'KA Solution',
		role: { en: 'Microsoft certification preparation', pt: 'Preparatório para certificação Microsoft', fr: 'Préparation à la certification Microsoft' },
		context: { en: 'São Paulo, Brazil', pt: 'São Paulo, Brasil', fr: 'São Paulo, Brésil' },
		periods: [{ start: '2009', end: '2009' }],
		items: [
			{ en: '2956 · Foundations of Microsoft .NET 2.0 Development', pt: '2956 · Foundations of Microsoft .NET 2.0 Development', fr: '2956 · Foundations of Microsoft .NET 2.0 Development' },
			{ en: '2957 · Advanced Foundations of Microsoft .NET 2.0 Development', pt: '2957 · Advanced Foundations of Microsoft .NET 2.0 Development', fr: '2957 · Advanced Foundations of Microsoft .NET 2.0 Development' },
			{ en: '6463 · Visual Studio 2008 – ASP.NET 3.5', pt: '6463 · Visual Studio 2008 – ASP.NET 3.5', fr: '6463 · Visual Studio 2008 – ASP.NET 3.5' },
		],
	},
	{
		id: 'etec',
		org: 'ETEC Professor Basilides de Godoy',
		url: 'https://basilides.com.br/cursos/desenvolvimento-sistemas/',
		role: { en: 'IT technician', pt: 'Técnico em Informática', fr: 'Technicien en informatique' },
		context: { en: 'São Paulo, Brazil', pt: 'São Paulo, Brasil', fr: 'São Paulo, Brésil' },
		periods: [{ start: '2006-06', end: '2007-12' }],
		summary: {
			en: 'Programming logic; C, Pascal, Delphi 7, Visual Basic and JavaScript. Final project: management software for a gym.',
			pt: 'Lógica de programação; C, Pascal, Delphi 7, Visual Basic e JavaScript. Projeto de conclusão: software de gestão para academia.',
			fr: 'Logique de programmation ; C, Pascal, Delphi 7, Visual Basic et JavaScript. Projet de fin d’études : logiciel pour une salle de sport.',
		},
		items: [],
	},
];

/* ── Skills and languages ──────────────────────────────────────────────── */

export const skills: { label: L; items: string[] }[] = [
	{
		label: { en: 'Back end', pt: 'Back end', fr: 'Back end' },
		items: ['C#', '.NET (Framework 4.x, Core, 5–8)', 'ASP.NET / MVC', 'EF Core', 'LINQ', 'REST / SOAP', 'WCF', 'Windows Workflow Foundation', 'VB.NET', 'Delphi 7'],
	},
	{
		label: { en: 'Front end', pt: 'Front end', fr: 'Front end' },
		items: ['Angular', 'JavaScript', 'HTML', 'CSS', 'Astro', 'jQuery', 'DevExpress'],
	},
	{
		label: { en: 'Data', pt: 'Dados', fr: 'Données' },
		items: ['SQL Server (T-SQL, SSRS)', 'PostgreSQL', 'MySQL / MariaDB', 'SQLite'],
	},
	{
		label: { en: 'DevOps & infrastructure', pt: 'DevOps e infraestrutura', fr: 'DevOps et infrastructure' },
		items: ['GitLab (self-hosted, CI/CD, runners)', 'Docker / Compose', 'Traefik', 'Proxmox', 'Ansible', 'Linux (Debian, Fedora)', 'Odoo', 'Azure DevOps', 'TFS', 'Git'],
	},
	{
		label: { en: 'Ways of working', pt: 'Métodos e ferramentas', fr: 'Méthodes et outils' },
		items: ['Scrum', 'Kanban', 'V-Model', 'Jira', 'Redmine', 'Code review'],
	},
	{
		label: { en: 'Explored', pt: 'Explorado', fr: 'Exploré' },
		items: ['Go', 'Dart / Flutter', 'Android'],
	},
];

// Levels kept from the previous site (100 / 80 / 70 / 25 %). Review before publishing.
export const languages: { name: L; level: L; value: number }[] = [
	{ name: { en: 'Portuguese', pt: 'Português', fr: 'Portugais' }, level: { en: 'Native', pt: 'Nativo', fr: 'Langue maternelle' }, value: 4 },
	{ name: { en: 'English', pt: 'Inglês', fr: 'Anglais' }, level: { en: 'Professional', pt: 'Profissional', fr: 'Professionnel' }, value: 3 },
	{ name: { en: 'French', pt: 'Francês', fr: 'Français' }, level: { en: 'Professional', pt: 'Profissional', fr: 'Professionnel' }, value: 3 },
	{ name: { en: 'Spanish', pt: 'Espanhol', fr: 'Espagnol' }, level: { en: 'Basic', pt: 'Básico', fr: 'Notions' }, value: 1 },
];
