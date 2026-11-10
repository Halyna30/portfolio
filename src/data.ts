// All page content lives here — edit this file to update the site.
// `profile` is shared; everything translatable is in `content.en / .pl / .uk`.

export const profile = {
  name: 'Halyna Pryn',
  email: 'prynhalyna@gmail.com',
  phone: '+48 600 777 971',
  cv: '/Halyna-Pryn-CV.pdf',
}

export const sectionIds = ['about', 'experience', 'work', 'skills', 'contact'] as const
export type SectionId = (typeof sectionIds)[number]

export const locales = [
  { code: 'en', label: 'EN' },
  { code: 'pl', label: 'PL' },
  { code: 'uk', label: 'UA' },
] as const
export type Locale = (typeof locales)[number]['code']

export type Job = {
  period: string
  title: string
  company: string
  place: string
  points?: string[]
  tags?: string[]
}

export type Content = {
  meta: { title: string }
  nav: Record<SectionId, string>
  ui: { downloadCv: string; openMenu: string; closeMenu: string; language: string }
  hero: {
    badge: string
    greeting: string
    firstName: string
    roles: string[]
    tagline: string
    ctaWork: string
    ctaContact: string
    location: string
  }
  about: {
    title: string
    paragraphs: string[]
    stats: { value: string; suffix: string; label: string }[]
    languagesTitle: string
    languages: { name: string; level: string; pct: number }[]
  }
  experience: {
    title: string
    jobs: Job[]
    educationTitle: string
    education: { period: string; title: string; school: string; note: string }[]
  }
  work: {
    title: string
    items: { kicker: string; title: string; text: string; brands?: string[]; tags: string[] }[]
  }
  skills: { title: string; groups: { group: string; items: string[] }[] }
  contact: {
    title: string
    text: string
    send: string
    copy: string
    copied: string
    phone: string
    location: string
    locationValue: string
    languages: string
  }
  footer: { builtWith: string }
}

const brands = ['lastminute.com', 'weg.de', 'bravofly.com', 'rumbo.com']
const periods = { lm: '10.2021 — 09.2026', hydro: '01.2018 — 01.2019', mw: '10.2013 — 10.2014' }
const lmTags = ['React', 'TypeScript', 'SSR/CSR', 'Material UI', 'Playwright', 'Jest', 'Nx']
const workTags = [
  ['React', 'TypeScript', 'SSR/CSR', 'REST API'],
  ['Material UI', 'Emotion', 'a11y', 'Storybook'],
  ['Playwright', 'Jest', 'React Testing Library', 'CI/CD'],
  ['GitHub Copilot', 'Claude', 'Nx monorepo'],
]

const en: Content = {
  meta: { title: 'Halyna Pryn | Frontend Developer' },
  nav: { about: 'About', experience: 'Experience', work: 'Work', skills: 'Skills', contact: 'Contact' },
  ui: { downloadCv: 'Download CV', openMenu: 'Open menu', closeMenu: 'Close menu', language: 'Language' },
  hero: {
    badge: 'Open to new opportunities',
    greeting: "Hi, I'm",
    firstName: 'Halyna',
    roles: ['Frontend Developer', 'React & TypeScript', 'Accessibility advocate', 'SSR / CSR architect'],
    tagline:
      "I build fast, accessible interfaces for high-traffic products — for five years I've worked on search experiences used by millions of travellers across Europe.",
    ctaWork: 'See my work',
    ctaContact: 'Get in touch',
    location: 'Szczecin, Poland',
  },
  about: {
    title: 'A bit about me',
    paragraphs: [
      'Resourceful Frontend Developer with 5 years of experience building high-performance, accessible user interfaces for high-traffic platforms. I work daily with React, TypeScript and Material UI, and I am comfortable across hybrid SSR/CSR architectures and REST APIs.',
      'I care about code that lasts: I set up E2E and unit testing pipelines with Playwright and Jest, and I design UIs to meet the European Accessibility Act. I also use AI tools like GitHub Copilot and Claude to speed up prototyping, debugging and everyday development.',
      'Before tech I worked in finance and tendering — which taught me precision, deadlines and how to talk to the business side of a product.',
    ],
    stats: [
      { value: '5', suffix: 'yrs', label: 'Frontend experience' },
      { value: '4', suffix: '', label: 'High-traffic travel brands' },
      { value: 'EAA', suffix: '', label: 'Accessibility compliant UIs' },
      { value: 'E2E', suffix: '', label: 'Playwright + Jest pipelines' },
    ],
    languagesTitle: 'languages',
    languages: [
      { name: 'Ukrainian', level: 'Native', pct: 100 },
      { name: 'Polish', level: 'C1', pct: 88 },
      { name: 'Russian', level: 'C1', pct: 88 },
      { name: 'English', level: 'B1/B2', pct: 65 },
    ],
  },
  experience: {
    title: "Where I've worked",
    jobs: [
      {
        period: periods.lm,
        title: 'Frontend Developer',
        company: 'lastminute.com',
        place: 'Szczecin, Poland',
        points: [
          'Engineered a high-performance search ecosystem and widget for lastminute.com, weg.de, bravofly.com and rumbo.com.',
          'Developed reusable React components and hybrid (SSR/CSR) architectures integrated with REST APIs.',
          'Architected accessible UIs with Material UI, ensuring compliance with the European Accessibility Act (EAA).',
          'Established E2E and unit testing pipelines (Playwright, Jest) to keep quality and stability high.',
          'Improved daily development, debugging and prototyping with AI tools such as GitHub Copilot and Claude.',
        ],
        tags: lmTags,
      },
      { period: periods.hydro, title: 'Manager of the Tendering Department', company: 'Hydro United', place: 'Szczecin, Poland' },
      { period: periods.mw, title: 'Accountant', company: 'Modern Welding', place: 'Ivano-Frankivsk, Ukraine' },
    ],
    educationTitle: 'education',
    education: [
      { period: '05.2020 — 05.2021', title: 'Junior Full Stack Developer', school: 'GoIT School (online)', note: '15+ hours of study per week.' },
      {
        period: '09.2009 — 06.2014',
        title: 'Specialist, Finance and Credit',
        school: 'Vasyl Stefanyk Precarpathian National University',
        note: 'Ivano-Frankivsk, Ukraine',
      },
    ],
  },
  work: {
    title: "What I've worked on",
    items: [
      {
        kicker: '01 · Search',
        title: 'Search ecosystem & widget',
        text: 'The search experience and embeddable widget behind four European travel brands — built for speed under heavy traffic, with server-side rendering where it matters.',
        brands,
        tags: workTags[0],
      },
      {
        kicker: '02 · Accessibility',
        title: 'EAA-compliant UI',
        text: 'Accessible interfaces on top of Material UI and Emotion: keyboard flows, semantic markup and contrast that meet the European Accessibility Act.',
        tags: workTags[1],
      },
      {
        kicker: '03 · Quality',
        title: 'Testing pipelines',
        text: 'End-to-end and unit test pipelines wired into CI so every change ships with confidence — from component tests to full user journeys.',
        tags: workTags[2],
      },
      {
        kicker: '04 · Workflow',
        title: 'AI-assisted development',
        text: 'Using GitHub Copilot and Claude to prototype faster, debug smarter and spend more time on the problems that need a human.',
        tags: workTags[3],
      },
    ],
  },
  skills: {
    title: 'My toolbox',
    groups: [
      { group: 'Core', items: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js'] },
      { group: 'UI & Styling', items: ['Material UI', 'Emotion', 'UI/UX', 'Figma', 'Storybook'] },
      { group: 'State & Data', items: ['Redux', 'Zustand', 'REST API', 'SSR', 'CSR'] },
      { group: 'Testing', items: ['Jest', 'Playwright', 'React Testing Library', 'E2E testing'] },
      { group: 'Tooling', items: ['Vite', 'Webpack', 'Turbopack', 'Nx', 'CI/CD', 'Git & monorepos', 'Custom CMS'] },
      { group: 'AI-assisted dev', items: ['GitHub Copilot', 'Claude'] },
    ],
  },
  contact: {
    title: "Let's work together",
    text: "I'm looking for my next frontend role in Poland or remote. If you're building something with React and TypeScript and care about performance and accessibility — I'd love to hear from you.",
    send: 'Send an email',
    copy: 'Copy email',
    copied: 'Copied ✓',
    phone: 'phone',
    location: 'location',
    locationValue: 'Szczecin, Poland',
    languages: 'languages',
  },
  footer: { builtWith: 'Built with' },
}

const pl: Content = {
  meta: { title: 'Halyna Pryn | Frontend Developer' },
  nav: { about: 'O mnie', experience: 'Doświadczenie', work: 'Projekty', skills: 'Umiejętności', contact: 'Kontakt' },
  ui: { downloadCv: 'Pobierz CV', openMenu: 'Otwórz menu', closeMenu: 'Zamknij menu', language: 'Język' },
  hero: {
    badge: 'Otwarta na nowe możliwości',
    greeting: 'Cześć, jestem',
    firstName: 'Halyna',
    roles: ['Frontend Developer', 'React & TypeScript', 'Dostępność (a11y)', 'Architektura SSR / CSR'],
    tagline:
      'Tworzę szybkie i dostępne interfejsy dla produktów o dużym ruchu — od pięciu lat pracuję nad wyszukiwarkami, z których korzystają miliony podróżnych w całej Europie.',
    ctaWork: 'Zobacz projekty',
    ctaContact: 'Napisz do mnie',
    location: 'Szczecin, Polska',
  },
  about: {
    title: 'Kilka słów o mnie',
    paragraphs: [
      'Jestem Frontend Developerką z 5-letnim doświadczeniem w tworzeniu wydajnych i dostępnych interfejsów dla platform o dużym ruchu. Na co dzień pracuję z React, TypeScript i Material UI, swobodnie poruszam się w hybrydowych architekturach SSR/CSR i integracjach z REST API.',
      'Dbam o kod, który przetrwa: buduję pipeline’y testów E2E i jednostkowych w Playwright i Jest, a interfejsy projektuję zgodnie z Europejskim Aktem o Dostępności (EAA). Korzystam też z narzędzi AI, takich jak GitHub Copilot i Claude, żeby szybciej prototypować, debugować i rozwijać kod.',
      'Zanim weszłam do IT, pracowałam w finansach i przetargach — to nauczyło mnie precyzji, dotrzymywania terminów i rozmowy z biznesową stroną produktu.',
    ],
    stats: [
      { value: '5', suffix: ' lat', label: 'Doświadczenia we frontendzie' },
      { value: '4', suffix: '', label: 'Marki turystyczne o dużym ruchu' },
      { value: 'EAA', suffix: '', label: 'Interfejsy zgodne z wymogami dostępności' },
      { value: 'E2E', suffix: '', label: 'Pipeline’y Playwright + Jest' },
    ],
    languagesTitle: 'języki',
    languages: [
      { name: 'Ukraiński', level: 'Ojczysty', pct: 100 },
      { name: 'Polski', level: 'C1', pct: 88 },
      { name: 'Rosyjski', level: 'C1', pct: 88 },
      { name: 'Angielski', level: 'B1/B2', pct: 65 },
    ],
  },
  experience: {
    title: 'Gdzie pracowałam',
    jobs: [
      {
        period: periods.lm,
        title: 'Frontend Developer',
        company: 'lastminute.com',
        place: 'Szczecin, Polska',
        points: [
          'Zbudowałam wydajny ekosystem wyszukiwania oraz widżet dla lastminute.com, weg.de, bravofly.com i rumbo.com.',
          'Tworzyłam reużywalne komponenty React i hybrydowe architektury (SSR/CSR) zintegrowane z REST API.',
          'Projektowałam dostępne interfejsy w Material UI zgodne z Europejskim Aktem o Dostępności (EAA).',
          'Wdrożyłam pipeline’y testów E2E i jednostkowych (Playwright, Jest), które dbają o jakość i stabilność systemu.',
          'Usprawniłam codzienną pracę, debugowanie i prototypowanie dzięki narzędziom AI, takim jak GitHub Copilot i Claude.',
        ],
        tags: lmTags,
      },
      { period: periods.hydro, title: 'Kierowniczka Działu Przetargów', company: 'Hydro United', place: 'Szczecin, Polska' },
      { period: periods.mw, title: 'Księgowa', company: 'Modern Welding', place: 'Iwano-Frankiwsk, Ukraina' },
    ],
    educationTitle: 'edukacja',
    education: [
      { period: '05.2020 — 05.2021', title: 'Junior Full Stack Developer', school: 'GoIT School (online)', note: 'Ponad 15 godzin nauki tygodniowo.' },
      {
        period: '09.2009 — 06.2014',
        title: 'Specjalista, Finanse i Kredyt',
        school: 'Przykarpacki Uniwersytet Narodowy im. Wasyla Stefanyka',
        note: 'Iwano-Frankiwsk, Ukraina',
      },
    ],
  },
  work: {
    title: 'Nad czym pracowałam',
    items: [
      {
        kicker: '01 · Wyszukiwarka',
        title: 'Ekosystem wyszukiwania i widżet',
        text: 'Wyszukiwarka i osadzany widżet czterech europejskich marek turystycznych — zbudowane z myślą o szybkości przy dużym ruchu, z renderowaniem po stronie serwera tam, gdzie ma to znaczenie.',
        brands,
        tags: workTags[0],
      },
      {
        kicker: '02 · Dostępność',
        title: 'Interfejsy zgodne z EAA',
        text: 'Dostępne interfejsy oparte na Material UI i Emotion: obsługa z klawiatury, semantyczny HTML i kontrast spełniające wymogi Europejskiego Aktu o Dostępności.',
        tags: workTags[1],
      },
      {
        kicker: '03 · Jakość',
        title: 'Pipeline’y testowe',
        text: 'Testy E2E i jednostkowe podpięte pod CI, dzięki którym każda zmiana trafia na produkcję bezpiecznie — od testów komponentów po pełne ścieżki użytkownika.',
        tags: workTags[2],
      },
      {
        kicker: '04 · Workflow',
        title: 'Praca wspierana przez AI',
        text: 'GitHub Copilot i Claude pomagają mi szybciej prototypować, sprawniej debugować i poświęcać więcej czasu problemom, które wymagają człowieka.',
        tags: workTags[3],
      },
    ],
  },
  skills: {
    title: 'Moje narzędzia',
    groups: [
      { group: 'Fundamenty', items: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js'] },
      { group: 'UI i stylowanie', items: ['Material UI', 'Emotion', 'UI/UX', 'Figma', 'Storybook'] },
      { group: 'Stan i dane', items: ['Redux', 'Zustand', 'REST API', 'SSR', 'CSR'] },
      { group: 'Testowanie', items: ['Jest', 'Playwright', 'React Testing Library', 'Testy E2E'] },
      { group: 'Narzędzia', items: ['Vite', 'Webpack', 'Turbopack', 'Nx', 'CI/CD', 'Git i monorepo', 'Własny CMS'] },
      { group: 'Praca z AI', items: ['GitHub Copilot', 'Claude'] },
    ],
  },
  contact: {
    title: 'Popracujmy razem',
    text: 'Szukam nowej roli frontendowej w Polsce lub zdalnie. Jeśli tworzysz coś w React i TypeScript i zależy Ci na wydajności oraz dostępności — chętnie porozmawiam.',
    send: 'Wyślij e-mail',
    copy: 'Kopiuj e-mail',
    copied: 'Skopiowano ✓',
    phone: 'telefon',
    location: 'lokalizacja',
    locationValue: 'Szczecin, Polska',
    languages: 'języki',
  },
  footer: { builtWith: 'Zbudowane w' },
}

const uk: Content = {
  meta: { title: 'Halyna Pryn | Frontend-розробниця' },
  nav: { about: 'Про мене', experience: 'Досвід', work: 'Проєкти', skills: 'Навички', contact: 'Контакти' },
  ui: { downloadCv: 'Завантажити CV', openMenu: 'Відкрити меню', closeMenu: 'Закрити меню', language: 'Мова' },
  hero: {
    badge: 'Відкрита до нових пропозицій',
    greeting: 'Привіт, я',
    firstName: 'Галина',
    roles: ['Frontend-розробниця', 'React & TypeScript', 'Доступність (a11y)', 'Архітектура SSR / CSR'],
    tagline:
      'Створюю швидкі та доступні інтерфейси для високонавантажених продуктів — п’ять років працюю над пошуком, яким користуються мільйони мандрівників по всій Європі.',
    ctaWork: 'Мої проєкти',
    ctaContact: 'Зв’язатися',
    location: 'Щецин, Польща',
  },
  about: {
    title: 'Трохи про мене',
    paragraphs: [
      'Я Frontend-розробниця з 5-річним досвідом створення продуктивних і доступних інтерфейсів для високонавантажених платформ. Щодня працюю з React, TypeScript і Material UI, впевнено орієнтуюся в гібридних архітектурах SSR/CSR та інтеграціях із REST API.',
      'Дбаю про код, який живе довго: налаштовую пайплайни E2E- та юніт-тестів на Playwright і Jest, а інтерфейси проєктую відповідно до Європейського акта про доступність (EAA). Також використовую AI-інструменти — GitHub Copilot і Claude, — щоб швидше прототипувати, налагоджувати й розробляти.',
      'До IT я працювала у фінансах і тендерах — це навчило мене точності, дотримання дедлайнів і вміння говорити мовою бізнесу.',
    ],
    stats: [
      { value: '5', suffix: ' років', label: 'Досвіду у фронтенді' },
      { value: '4', suffix: '', label: 'Туристичні бренди з великим трафіком' },
      { value: 'EAA', suffix: '', label: 'Інтерфейси з дотриманням вимог доступності' },
      { value: 'E2E', suffix: '', label: 'Пайплайни Playwright + Jest' },
    ],
    languagesTitle: 'мови',
    languages: [
      { name: 'Українська', level: 'Рідна', pct: 100 },
      { name: 'Польська', level: 'C1', pct: 88 },
      { name: 'Російська', level: 'C1', pct: 88 },
      { name: 'Англійська', level: 'B1/B2', pct: 65 },
    ],
  },
  experience: {
    title: 'Де я працювала',
    jobs: [
      {
        period: periods.lm,
        title: 'Frontend-розробниця',
        company: 'lastminute.com',
        place: 'Щецин, Польща',
        points: [
          'Розробила високопродуктивну пошукову екосистему та віджет для lastminute.com, weg.de, bravofly.com і rumbo.com.',
          'Створювала багаторазові React-компоненти та гібридні (SSR/CSR) архітектури з інтеграцією REST API.',
          'Проєктувала доступні інтерфейси на Material UI відповідно до Європейського акта про доступність (EAA).',
          'Налаштувала пайплайни E2E- та юніт-тестування (Playwright, Jest) для підтримки якості й стабільності.',
          'Покращила щоденну розробку, налагодження та прототипування завдяки AI-інструментам — GitHub Copilot і Claude.',
        ],
        tags: lmTags,
      },
      { period: periods.hydro, title: 'Керівниця тендерного відділу', company: 'Hydro United', place: 'Щецин, Польща' },
      { period: periods.mw, title: 'Бухгалтерка', company: 'Modern Welding', place: 'Івано-Франківськ, Україна' },
    ],
    educationTitle: 'освіта',
    education: [
      { period: '05.2020 — 05.2021', title: 'Junior Full Stack Developer', school: 'GoIT School (онлайн)', note: 'Понад 15 годин навчання щотижня.' },
      {
        period: '09.2009 — 06.2014',
        title: 'Спеціаліст, фінанси і кредит',
        school: 'Прикарпатський національний університет імені Василя Стефаника',
        note: 'Івано-Франківськ, Україна',
      },
    ],
  },
  work: {
    title: 'Над чим я працювала',
    items: [
      {
        kicker: '01 · Пошук',
        title: 'Пошукова екосистема та віджет',
        text: 'Пошук і вбудовуваний віджет для чотирьох європейських туристичних брендів — створені для швидкості під великим навантаженням, із серверним рендерингом там, де це важливо.',
        brands,
        tags: workTags[0],
      },
      {
        kicker: '02 · Доступність',
        title: 'Інтерфейси відповідно до EAA',
        text: 'Доступні інтерфейси на основі Material UI та Emotion: керування з клавіатури, семантична розмітка й контраст, що відповідають Європейському акту про доступність.',
        tags: workTags[1],
      },
      {
        kicker: '03 · Якість',
        title: 'Пайплайни тестування',
        text: 'E2E- та юніт-тести, інтегровані в CI, щоб кожна зміна впевнено виходила в продакшн — від тестів компонентів до повних сценаріїв користувача.',
        tags: workTags[2],
      },
      {
        kicker: '04 · Процес',
        title: 'Розробка з AI',
        text: 'GitHub Copilot і Claude допомагають мені швидше прототипувати, ефективніше налагоджувати й більше часу приділяти задачам, які потребують людини.',
        tags: workTags[3],
      },
    ],
  },
  skills: {
    title: 'Мої інструменти',
    groups: [
      { group: 'Основа', items: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js'] },
      { group: 'UI та стилі', items: ['Material UI', 'Emotion', 'UI/UX', 'Figma', 'Storybook'] },
      { group: 'Стан і дані', items: ['Redux', 'Zustand', 'REST API', 'SSR', 'CSR'] },
      { group: 'Тестування', items: ['Jest', 'Playwright', 'React Testing Library', 'E2E-тестування'] },
      { group: 'Інструменти', items: ['Vite', 'Webpack', 'Turbopack', 'Nx', 'CI/CD', 'Git і монорепозиторії', 'Власна CMS'] },
      { group: 'Розробка з AI', items: ['GitHub Copilot', 'Claude'] },
    ],
  },
  contact: {
    title: 'Працюймо разом',
    text: 'Шукаю нову фронтенд-роль у Польщі або віддалено. Якщо ви створюєте щось на React і TypeScript і цінуєте продуктивність та доступність — буду рада поспілкуватися.',
    send: 'Написати лист',
    copy: 'Скопіювати e-mail',
    copied: 'Скопійовано ✓',
    phone: 'телефон',
    location: 'локація',
    locationValue: 'Щецин, Польща',
    languages: 'мови',
  },
  footer: { builtWith: 'Створено на' },
}

export const content: Record<Locale, Content> = { en, pl, uk }
