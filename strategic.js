(function () {
  'use strict';

  const SITE_DATA = Object.freeze({
    metrics: [
      { value: '200+', key: 'metricPlanned' },
      { value: '150+', key: 'metricHooks' },
      { value: '6+', key: 'metricFormats' },
      { value: '5', key: 'metricLanguages' }
    ],
    languages: ['en', 'ru', 'es', 'it', 'by'],
    languageLabels: { en: 'EN', ru: 'RU', es: 'ES', it: 'IT', by: 'BY' },
    htmlLanguages: { en: 'en', ru: 'ru', es: 'es', it: 'it', by: 'be' },
    contacts: {
      email: 'prostokatoka@gmail.com',
      linkedin: 'https://www.linkedin.com/in/katherina-novitskaia-652a2415a',
      whatsapp: 'https://wa.me/34657501973'
    }
  });

  const COPY = {
    en: {
      metaTitle: 'Ekaterina Novitskaia — Content Systems & Short-Form Strategy',
      metaDescription: 'Content strategy, Reels, storytelling and scalable production systems for brands building consistent short-form content.',
      skip: 'Skip to content', menu: 'Menu', close: 'Close',
      navExpertise: 'Expertise', navWork: 'Work', navProcess: 'Process', navServices: 'Services', navContact: 'Contact',
      heroEyebrow: 'Content strategy · Reels · Storytelling · AI production',
      heroHeadline: 'I build content systems that turn ideas into <em>months of consistent content.</em>',
      heroCopy: 'I help brands turn their positioning, products and expertise into strategic short-form content — from content architecture and hooks to Reels, creative direction and scalable production workflows.',
      heroPrimary: 'Build your content system', heroSecondary: 'View selected work', heroSignature: 'Ekaterina Novitskaia · Europe', heroAlt: 'Ekaterina Novitskaia, content strategist and short-form producer',
      proofHeading: 'Content systems built for real brands',
      metricPlanned: 'posts planned in a 12-month content system', metricHooks: 'hooks developed', metricFormats: 'evergreen content formats', metricLanguages: 'languages · RU · EN · ES · IT · BY',
      expertiseLabel: 'Expertise', expertiseTitle: 'What I build', expertiseIntro: 'Strategy and production are one connected system: a clear brand territory, repeatable formats and the workflow to keep publishing.',
      cap1Title: 'Content Strategy', cap1Copy: 'Content architecture, positioning, pillars, editorial systems and long-term content planning.', cap1Terms: 'Positioning · Content pillars · Editorial architecture · Strategic masterplans',
      cap2Title: 'Reels & Short-form', cap2Copy: 'Hooks, scripts, creative direction, editing, B-roll and short-form storytelling.', cap2Terms: 'Hooks · Scripts · Creative direction · Editing · B-roll',
      cap3Title: 'Brand Storytelling', cap3Copy: 'Narratives that connect products, culture and brand positioning into content people remember.', cap3Terms: 'Brand narratives · Product storytelling · Tone of voice',
      cap4Title: 'AI-Powered Production', cap4Copy: 'AI-assisted workflows for ideation, scripting, visual development, production and repurposing.', cap4Terms: 'Strategy first · Tools second · Scalable workflows',
      cap5Title: 'Multilingual Content', cap5Copy: 'Consistent brand voice across Russian, English, Spanish, Italian and Belarusian markets.', cap5Terms: 'Localization · Hook adaptation · Cultural context · Brand consistency',
      workLabel: 'Selected work', workTitle: 'Systems built for real brands.', workIntro: 'Not isolated content pieces. Each project connects positioning, an editorial system and hands-on production.',
      challenge: 'Challenge', strategy: 'Strategy', system: 'System', execution: 'Execution', outcome: 'Outcome',
      case1Category: 'Hair care · Content infrastructure', case1Title: '12-month content infrastructure for a science-backed hair-care brand.',
      case1Challenge: 'The brand had a clinically backed product and decades of research, but needed a scalable communication system rather than isolated social posts.',
      case1Strategy: 'Find a distinct territory between fear-driven pharmaceutical communication and generic beauty lifestyle content.',
      case1Execution: 'Posts, carousels, Reels, scripts and B-roll assets for the first production cycles.',
      case1Outcome: 'A repeatable content infrastructure designed to support consistent production throughout the year.',
      case1Metric1: 'content concepts', case1Metric2: 'months', case1Metric3: 'evergreen formats',
      case2Category: 'Sustainable optics · Hook & content system', case2Title: 'Turning a product brand into a cultural content world.',
      case2Challenge: 'A distinctive product, a founding history and an established customer base — but no coherent content identity.',
      case2Strategy: 'Turn the brand’s city and origin from a geographical fact into an ownable narrative asset.',
      case2Execution: 'Reels, carousels, brand visuals and cultural storytelling examples across languages.',
      case2Outcome: 'A sustainable accessories brand with its own recognisable cultural identity and repeatable editorial rhythm.',
      case2Metric1: 'hooks developed',
      case3Category: 'Slow fashion · Cultural storytelling', case3Title: 'From aesthetic content to a world people can recognize.',
      case3Challenge: 'A familiar nature-and-softness aesthetic without a distinctive narrative world.',
      case3Strategy: 'Build an emotional and narrative universe around the product, then make it repeatable across seasons.',
      case3Execution: 'Editorial visuals, carousels, Reels and seasonal storytelling.',
      case3Outcome: 'Generic aesthetic → own narrative → repeatable visual and story system.',
      testimonial: '“The assigned tasks were completed consistently to our full satisfaction.”',
      reelsLabel: 'Reels & short-form', reelsTitle: 'Strategy you can see in motion.', reelsIntro: 'Selected short-form work across hair care, sustainable optics and slow fashion — from hook and script to creative direction and edit.',
      reelHair1: 'Science made human', reelHair2: 'Product ritual', reelOptics1: 'Cultural hook', reelOptics2: 'Product world', reelFashion1: 'Seasonal story', reelFashion2: 'Emotional world-building',
      reelRoleFull: 'Hook · Script · Direction · Edit', reelRoleDirection: 'Concept · Direction · Edit',
      processLabel: 'How I work', processTitle: 'From brand truth to repeatable production.', processIntro: 'A focused four-stage process that creates clarity first, then turns it into content a team can actually sustain.',
      process1Title: 'Discover', process1Copy: 'Brand, product, audience and competitive landscape.',
      process2Title: 'Position', process2Copy: 'Narrative territory, pillars, voice and communication rules.',
      process3Title: 'Systemise', process3Copy: 'Formats, hooks, calendars, briefs and production workflow.',
      process4Title: 'Produce', process4Copy: 'Reels, carousels, scripts, B-roll and continuous refinement.',
      fitLabel: 'Who I work with', fitTitle: 'Built for teams that need a system, not more noise.',
      fit1Title: 'Founders', fit1Copy: 'Turn expertise and ideas into a clear content engine.',
      fit2Title: 'Consumer brands', fit2Copy: 'Build a distinctive world around a real product.',
      fit3Title: 'International brands', fit3Copy: 'Adapt one strategic core across multiple markets.',
      fit4Title: 'Small marketing teams', fit4Copy: 'Add senior strategic and production capacity without agency overhead.',
      servicesLabel: 'Ways to work together', servicesTitle: 'Choose the level of system and production you need.', servicesIntro: 'Every engagement starts with strategic clarity. Scope is shaped around the brand, team and production reality — not a menu of disconnected deliverables.',
      offer1Title: 'Content System Sprint', offer1Copy: 'For brands that need a clear foundation before producing more. Positioning, pillars, formats, hooks and an actionable editorial direction.', offer1Output: 'Best for · Strategic reset',
      offer2Title: 'Content System + Production', offer2Copy: 'For brands that want the system and the first content cycle built together — strategy, scripts, direction, Reels and supporting assets.', offer2Output: 'Best for · Build and launch',
      offer3Title: 'Ongoing Strategic Production', offer3Copy: 'For teams that already have traction and need a consistent senior partner to evolve the system and keep production moving.', offer3Output: 'Best for · Monthly continuity',
      aboutLabel: 'About', aboutTitle: 'Strategy first. Production included.',
      aboutCopy: 'I helped House of Sustainable Brands in Hamburg — the company behind Thiocyn and other digital-native brands — build complete content systems from competitor intelligence and positioning to 12-month masterplans, format libraries and finished assets. I work remotely across Europe and adapt the strategic core for Russian, English, Spanish, Italian and Belarusian markets.',
      cred1Title: 'International brands', cred1Copy: 'Strategy and production across European markets', cred2Title: 'Remote collaboration', cred2Copy: 'Built to work with founders and small teams', cred3Title: 'End-to-end', cred3Copy: 'From positioning to finished short-form content',
      tools: 'Selected production tools · Runway · Midjourney · Sora · ChatGPT · Claude · ElevenLabs',
      galleryLabel: 'Additional creative work', galleryTitle: 'More selected creative work.', galleryIntro: 'A broader archive of visual concepts, carousels and production experiments. The business and storytelling task stays primary; tools are supporting metadata.',
      filterAll: 'All', filterHaircare: 'Hair care', filterSunglasses: 'Sunglasses', filterLifestyle: 'Lifestyle', filterPhoto: 'Photo', filterVideo: 'Video',
      contactLabel: 'Start a project', contactTitle: 'Have a brand idea but no content system yet? <em>Let’s build it.</em>', contactSupport: 'Tell me what you are building, where content gets stuck and what your team needs to produce consistently.', contactButton: 'Build your content system',
      footer: 'Content Systems · Short-form Production · Europe', lightboxClose: 'Close media', previous: 'Previous media', next: 'Next media'
    },
    ru: {
      metaTitle: 'Екатерина Новицкая — контент-системы и short-form стратегия', metaDescription: 'Контент-стратегия, Reels, сторителлинг и масштабируемые производственные системы для последовательного short-form контента.',
      skip: 'Перейти к содержанию', menu: 'Меню', close: 'Закрыть', navExpertise: 'Экспертиза', navWork: 'Работы', navProcess: 'Процесс', navServices: 'Форматы работы', navContact: 'Контакты',
      heroEyebrow: 'Контент-стратегия · Reels · Сторителлинг · AI-продакшн', heroHeadline: 'Я создаю контент-системы, которые превращают идеи в <em>месяцы последовательного контента.</em>', heroCopy: 'Я помогаю брендам превращать позиционирование, продукты и экспертизу в стратегический short-form контент — от контент-архитектуры и хуков до Reels, креативного руководства и масштабируемых производственных процессов.', heroPrimary: 'Построить контент-систему', heroSecondary: 'Смотреть избранные проекты', heroSignature: 'Екатерина Новицкая · Европа', heroAlt: 'Екатерина Новицкая, контент-стратег и short-form продюсер',
      proofHeading: 'Контент-системы для реальных брендов', metricPlanned: 'публикаций спланировано в системе на 12 месяцев', metricHooks: 'хуков разработано', metricFormats: 'постоянных контент-форматов', metricLanguages: 'языков · RU · EN · ES · IT · BY',
      expertiseLabel: 'Экспертиза', expertiseTitle: 'Что я создаю', expertiseIntro: 'Стратегия и производство работают как единая система: чёткая территория бренда, повторяемые форматы и процесс для регулярных публикаций.',
      cap1Title: 'Контент-стратегия', cap1Copy: 'Контент-архитектура, позиционирование, рубрики, редакционные системы и долгосрочное планирование.', cap1Terms: 'Позиционирование · Контент-рубрики · Редакционная архитектура · Мастер-планы',
      cap2Title: 'Reels и short-form', cap2Copy: 'Хуки, сценарии, креативное руководство, монтаж, B-roll и короткий сторителлинг.', cap2Terms: 'Хуки · Сценарии · Креативное руководство · Монтаж · B-roll',
      cap3Title: 'Сторителлинг бренда', cap3Copy: 'Истории, которые связывают продукт, культуру и позиционирование в запоминающийся контент.', cap3Terms: 'Нарратив бренда · Истории о продукте · Tone of voice',
      cap4Title: 'Продакшн с AI', cap4Copy: 'AI-процессы для поиска идей, сценариев, визуальной разработки, производства и переупаковки контента.', cap4Terms: 'Сначала стратегия · Затем инструменты · Масштабируемые процессы',
      cap5Title: 'Многоязычный контент', cap5Copy: 'Единый голос бренда на русском, английском, испанском, итальянском и белорусском рынках.', cap5Terms: 'Локализация · Адаптация хуков · Культурный контекст · Целостность бренда',
      workLabel: 'Избранные проекты', workTitle: 'Системы, созданные для реальных брендов.', workIntro: 'Не отдельные публикации. Каждый проект соединяет позиционирование, редакционную систему и реальное производство.',
      challenge: 'Задача', strategy: 'Стратегия', system: 'Система', execution: 'Реализация', outcome: 'Результат',
      case1Category: 'Уход за волосами · Контент-инфраструктура', case1Title: 'Контент-инфраструктура на 12 месяцев для научно обоснованного бренда ухода за волосами.', case1Challenge: 'У бренда был клинически обоснованный продукт и десятилетия исследований, но вместо разрозненных публикаций требовалась масштабируемая система коммуникации.', case1Strategy: 'Найти собственную территорию между коммуникацией фармбрендов, построенной на страхе, и типичным beauty/lifestyle контентом.', case1Execution: 'Посты, карусели, Reels, сценарии и B-roll для первых производственных циклов.', case1Outcome: 'Повторяемая контент-инфраструктура для последовательного производства в течение всего года.', case1Metric1: 'контент-концепций', case1Metric2: 'месяцев', case1Metric3: 'постоянных форматов',
      case2Category: 'Экологичная оптика · Система хуков и контента', case2Title: 'Как превратить продуктовый бренд в культурный контент-мир.', case2Challenge: 'Выразительный продукт, история основания и большая клиентская база — но без цельной контент-идентичности.', case2Strategy: 'Превратить город и происхождение бренда из географического факта в собственный нарративный актив.', case2Execution: 'Reels, карусели, визуалы бренда и культурный сторителлинг на нескольких языках.', case2Outcome: 'У бренда экологичных аксессуаров появилась узнаваемая культурная идентичность и повторяемый редакционный ритм.', case2Metric1: 'хуков разработано',
      case3Category: 'Slow fashion · Культурный сторителлинг', case3Title: 'От эстетичного контента — к миру, который узнают.', case3Challenge: 'Знакомая эстетика природы и мягкости без собственного нарративного мира.', case3Strategy: 'Создать эмоциональную вселенную вокруг продукта и превратить её в систему, работающую из сезона в сезон.', case3Execution: 'Редакционные визуалы, карусели, Reels и сезонный сторителлинг.', case3Outcome: 'Типовая эстетика → собственный нарратив → повторяемая визуальная и сюжетная система.', testimonial: '«Поставленные задачи выполнялись неизменно в полном соответствии с нашими ожиданиями».',
      reelsLabel: 'Reels и short-form', reelsTitle: 'Стратегия, которую видно в движении.', reelsIntro: 'Избранные short-form работы для ухода за волосами, экологичной оптики и slow fashion — от хука и сценария до креативного руководства и монтажа.', reelHair1: 'Наука человеческим языком', reelHair2: 'Ритуал продукта', reelOptics1: 'Культурный хук', reelOptics2: 'Мир продукта', reelFashion1: 'Сезонная история', reelFashion2: 'Эмоциональный мир бренда', reelRoleFull: 'Хук · Сценарий · Руководство · Монтаж', reelRoleDirection: 'Концепция · Руководство · Монтаж',
      processLabel: 'Как я работаю', processTitle: 'От сути бренда к повторяемому производству.', processIntro: 'Четыре сфокусированных этапа: сначала ясность, затем контент, который команда действительно сможет выпускать регулярно.', process1Title: 'Исследование', process1Copy: 'Бренд, продукт, аудитория и конкурентная среда.', process2Title: 'Позиционирование', process2Copy: 'Нарративная территория, рубрики, голос и правила коммуникации.', process3Title: 'Система', process3Copy: 'Форматы, хуки, календари, брифы и производственный процесс.', process4Title: 'Продакшн', process4Copy: 'Reels, карусели, сценарии, B-roll и постоянное улучшение.',
      fitLabel: 'С кем я работаю', fitTitle: 'Для команд, которым нужна система, а не ещё больше шума.', fit1Title: 'Основатели', fit1Copy: 'Превратить экспертизу и идеи в понятный контент-механизм.', fit2Title: 'Потребительские бренды', fit2Copy: 'Создать вокруг реального продукта узнаваемый мир.', fit3Title: 'Международные бренды', fit3Copy: 'Адаптировать единое стратегическое ядро для разных рынков.', fit4Title: 'Небольшие маркетинговые команды', fit4Copy: 'Добавить стратегическую и производственную экспертизу без агентской громоздкости.',
      servicesLabel: 'Форматы сотрудничества', servicesTitle: 'Выберите нужный уровень системы и производства.', servicesIntro: 'Каждый проект начинается со стратегической ясности. Объём работы определяется задачами бренда, команды и реального продакшна, а не меню разрозненных услуг.', offer1Title: 'Спринт по контент-системе', offer1Copy: 'Для брендов, которым нужна ясная основа до наращивания производства: позиционирование, рубрики, форматы, хуки и практическое редакционное направление.', offer1Output: 'Подходит для · Стратегической перезагрузки', offer2Title: 'Контент-система + производство', offer2Copy: 'Для брендов, которым нужна и система, и первый цикл контента: стратегия, сценарии, руководство, Reels и поддерживающие материалы.', offer2Output: 'Подходит для · Создания и запуска', offer3Title: 'Постоянный стратегический продакшн', offer3Copy: 'Для команд с рабочей базой, которым нужен постоянный старший партнёр для развития системы и регулярного производства.', offer3Output: 'Подходит для · Ежемесячной работы',
      aboutLabel: 'Обо мне', aboutTitle: 'Сначала стратегия. Продакшн включён.', aboutCopy: 'Я помогла House of Sustainable Brands в Гамбурге — компании, стоящей за Thiocyn и другими digital-native брендами, — создать полные контент-системы: от анализа конкурентов и позиционирования до мастер-планов на 12 месяцев, библиотек форматов и готовых материалов. Я работаю удалённо по всей Европе и адаптирую стратегическое ядро для русскоязычного, англоязычного, испанского, итальянского и белорусского рынков.', cred1Title: 'Международные бренды', cred1Copy: 'Стратегия и производство для европейских рынков', cred2Title: 'Удалённая работа', cred2Copy: 'Процесс для основателей и небольших команд', cred3Title: 'От начала до результата', cred3Copy: 'От позиционирования до готового short-form контента', tools: 'Инструменты продакшна · Runway · Midjourney · Sora · ChatGPT · Claude · ElevenLabs',
      galleryLabel: 'Дополнительные работы', galleryTitle: 'Ещё избранные творческие проекты.', galleryIntro: 'Архив визуальных концепций, каруселей и производственных экспериментов. На первом месте — бизнес-задача и история; инструменты остаются вторичными метаданными.', filterAll: 'Все', filterHaircare: 'Уход за волосами', filterSunglasses: 'Очки', filterLifestyle: 'Лайфстайл', filterPhoto: 'Фото', filterVideo: 'Видео',
      contactLabel: 'Начать проект', contactTitle: 'Есть идея бренда, но ещё нет контент-системы? <em>Давайте её построим.</em>', contactSupport: 'Расскажите, что вы создаёте, где останавливается производство контента и что вашей команде нужно выпускать регулярно.', contactButton: 'Построить контент-систему', footer: 'Контент-системы · Short-form продакшн · Европа', lightboxClose: 'Закрыть медиа', previous: 'Предыдущее медиа', next: 'Следующее медиа'
    },
    es: {
      metaTitle: 'Ekaterina Novitskaia — Sistemas de contenido y estrategia short-form', metaDescription: 'Estrategia de contenido, Reels, storytelling y sistemas de producción escalables para marcas que crean contenido short-form constante.', skip: 'Ir al contenido', menu: 'Menú', close: 'Cerrar', navExpertise: 'Experiencia', navWork: 'Proyectos', navProcess: 'Proceso', navServices: 'Servicios', navContact: 'Contacto',
      heroEyebrow: 'Estrategia de contenido · Reels · Storytelling · Producción con IA', heroHeadline: 'Creo sistemas de contenido que convierten ideas en <em>meses de contenido constante.</em>', heroCopy: 'Ayudo a las marcas a convertir su posicionamiento, productos y experiencia en contenido short-form estratégico: desde arquitectura de contenidos y hooks hasta Reels, dirección creativa y flujos de producción escalables.', heroPrimary: 'Crear tu sistema de contenido', heroSecondary: 'Ver proyectos seleccionados', heroSignature: 'Ekaterina Novitskaia · Europa', heroAlt: 'Ekaterina Novitskaia, estratega de contenido y productora short-form',
      proofHeading: 'Sistemas de contenido creados para marcas reales', metricPlanned: 'publicaciones planificadas en un sistema de 12 meses', metricHooks: 'hooks desarrollados', metricFormats: 'formatos de contenido evergreen', metricLanguages: 'idiomas · RU · EN · ES · IT · BY',
      expertiseLabel: 'Experiencia', expertiseTitle: 'Lo que construyo', expertiseIntro: 'Estrategia y producción forman un único sistema: un territorio de marca claro, formatos repetibles y un flujo para publicar con constancia.', cap1Title: 'Estrategia de contenido', cap1Copy: 'Arquitectura de contenidos, posicionamiento, pilares, sistemas editoriales y planificación a largo plazo.', cap1Terms: 'Posicionamiento · Pilares · Arquitectura editorial · Planes estratégicos', cap2Title: 'Reels y short-form', cap2Copy: 'Hooks, guiones, dirección creativa, edición, B-roll y narrativa short-form.', cap2Terms: 'Hooks · Guiones · Dirección creativa · Edición · B-roll', cap3Title: 'Storytelling de marca', cap3Copy: 'Narrativas que conectan producto, cultura y posicionamiento en contenidos memorables.', cap3Terms: 'Narrativa de marca · Storytelling de producto · Tono de voz', cap4Title: 'Producción con IA', cap4Copy: 'Flujos asistidos por IA para ideación, guion, desarrollo visual, producción y reutilización.', cap4Terms: 'Primero la estrategia · Después las herramientas · Flujos escalables', cap5Title: 'Contenido multilingüe', cap5Copy: 'Una voz de marca consistente en los mercados ruso, inglés, español, italiano y bielorruso.', cap5Terms: 'Localización · Adaptación de hooks · Contexto cultural · Consistencia',
      workLabel: 'Proyectos seleccionados', workTitle: 'Sistemas creados para marcas reales.', workIntro: 'No son piezas aisladas. Cada proyecto conecta posicionamiento, sistema editorial y producción práctica.', challenge: 'Reto', strategy: 'Estrategia', system: 'Sistema', execution: 'Ejecución', outcome: 'Resultado', case1Category: 'Cuidado capilar · Infraestructura de contenido', case1Title: 'Infraestructura de contenido de 12 meses para una marca capilar con base científica.', case1Challenge: 'La marca contaba con un producto respaldado clínicamente y décadas de investigación, pero necesitaba un sistema de comunicación escalable, no publicaciones aisladas.', case1Strategy: 'Encontrar un territorio propio entre la comunicación farmacéutica basada en el miedo y el contenido beauty/lifestyle genérico.', case1Execution: 'Posts, carruseles, Reels, guiones y recursos B-roll para los primeros ciclos de producción.', case1Outcome: 'Una infraestructura repetible para sostener una producción constante durante todo el año.', case1Metric1: 'conceptos de contenido', case1Metric2: 'meses', case1Metric3: 'formatos evergreen', case2Category: 'Óptica sostenible · Sistema de hooks y contenido', case2Title: 'Convertir una marca de producto en un mundo cultural de contenido.', case2Challenge: 'Un producto distintivo, una historia fundacional y una base de clientes consolidada, pero sin una identidad de contenido coherente.', case2Strategy: 'Convertir la ciudad y el origen de la marca en un activo narrativo propio, no en un simple dato geográfico.', case2Execution: 'Reels, carruseles, visuales de marca y storytelling cultural en varios idiomas.', case2Outcome: 'Una marca de accesorios sostenibles con identidad cultural reconocible y ritmo editorial repetible.', case2Metric1: 'hooks desarrollados', case3Category: 'Slow fashion · Storytelling cultural', case3Title: 'Del contenido estético a un mundo reconocible.', case3Challenge: 'Una estética habitual de naturaleza y suavidad sin un universo narrativo propio.', case3Strategy: 'Construir un universo emocional alrededor del producto y hacerlo repetible entre temporadas.', case3Execution: 'Visuales editoriales, carruseles, Reels y storytelling estacional.', case3Outcome: 'Estética genérica → narrativa propia → sistema visual y narrativo repetible.', testimonial: '«Las tareas asignadas se completaron de manera consistente a nuestra entera satisfacción».',
      reelsLabel: 'Reels y short-form', reelsTitle: 'Una estrategia que se ve en movimiento.', reelsIntro: 'Selección de trabajos short-form para cuidado capilar, óptica sostenible y slow fashion: del hook y el guion a la dirección creativa y la edición.', reelHair1: 'La ciencia, en lenguaje humano', reelHair2: 'Ritual de producto', reelOptics1: 'Hook cultural', reelOptics2: 'Mundo de producto', reelFashion1: 'Historia estacional', reelFashion2: 'Universo emocional de marca', reelRoleFull: 'Hook · Guion · Dirección · Edición', reelRoleDirection: 'Concepto · Dirección · Edición',
      processLabel: 'Cómo trabajo', processTitle: 'De la verdad de marca a una producción repetible.', processIntro: 'Un proceso de cuatro etapas: primero claridad; después, contenido que el equipo realmente puede sostener.', process1Title: 'Descubrir', process1Copy: 'Marca, producto, audiencia y panorama competitivo.', process2Title: 'Posicionar', process2Copy: 'Territorio narrativo, pilares, voz y reglas de comunicación.', process3Title: 'Sistematizar', process3Copy: 'Formatos, hooks, calendarios, briefs y flujo de producción.', process4Title: 'Producir', process4Copy: 'Reels, carruseles, guiones, B-roll y mejora continua.',
      fitLabel: 'Con quién trabajo', fitTitle: 'Para equipos que necesitan un sistema, no más ruido.', fit1Title: 'Founders', fit1Copy: 'Convertir experiencia e ideas en un motor de contenido claro.', fit2Title: 'Marcas de consumo', fit2Copy: 'Crear un mundo distintivo alrededor de un producto real.', fit3Title: 'Marcas internacionales', fit3Copy: 'Adaptar un único núcleo estratégico a varios mercados.', fit4Title: 'Equipos pequeños de marketing', fit4Copy: 'Añadir capacidad estratégica y productiva senior sin la estructura de una agencia.',
      servicesLabel: 'Formas de trabajar juntos', servicesTitle: 'Elige el nivel de sistema y producción que necesitas.', servicesIntro: 'Cada colaboración empieza con claridad estratégica. El alcance responde a la marca, al equipo y a la realidad de producción, no a un menú de entregables aislados.', offer1Title: 'Sprint de sistema de contenido', offer1Copy: 'Para marcas que necesitan una base clara antes de producir más: posicionamiento, pilares, formatos, hooks y dirección editorial aplicable.', offer1Output: 'Ideal para · Reinicio estratégico', offer2Title: 'Sistema de contenido + producción', offer2Copy: 'Para marcas que quieren construir el sistema y el primer ciclo juntos: estrategia, guiones, dirección, Reels y recursos de apoyo.', offer2Output: 'Ideal para · Crear y lanzar', offer3Title: 'Producción estratégica continua', offer3Copy: 'Para equipos con tracción que necesitan una colaboración senior constante para evolucionar el sistema y mantener la producción.', offer3Output: 'Ideal para · Continuidad mensual',
      aboutLabel: 'Sobre mí', aboutTitle: 'Primero la estrategia. Producción incluida.', aboutCopy: 'Ayudé a House of Sustainable Brands en Hamburgo — la empresa detrás de Thiocyn y otras marcas nativas digitales — a crear sistemas completos: desde inteligencia competitiva y posicionamiento hasta planes de 12 meses, bibliotecas de formatos y piezas terminadas. Trabajo en remoto en Europa y adapto el núcleo estratégico a los mercados ruso, inglés, español, italiano y bielorruso.', cred1Title: 'Marcas internacionales', cred1Copy: 'Estrategia y producción para mercados europeos', cred2Title: 'Colaboración remota', cred2Copy: 'Un proceso pensado para founders y equipos pequeños', cred3Title: 'De principio a fin', cred3Copy: 'Del posicionamiento al contenido short-form terminado', tools: 'Herramientas de producción · Runway · Midjourney · Sora · ChatGPT · Claude · ElevenLabs',
      galleryLabel: 'Trabajo creativo adicional', galleryTitle: 'Más trabajo creativo seleccionado.', galleryIntro: 'Un archivo más amplio de conceptos visuales, carruseles y experimentos de producción. La tarea de negocio y la historia van primero; las herramientas son metadatos secundarios.', filterAll: 'Todo', filterHaircare: 'Cuidado capilar', filterSunglasses: 'Gafas', filterLifestyle: 'Lifestyle', filterPhoto: 'Foto', filterVideo: 'Vídeo', contactLabel: 'Iniciar un proyecto', contactTitle: '¿Tienes una idea de marca pero todavía no un sistema de contenido? <em>Construyámoslo.</em>', contactSupport: 'Cuéntame qué estás creando, dónde se atasca el contenido y qué necesita producir tu equipo con constancia.', contactButton: 'Crear tu sistema de contenido', footer: 'Sistemas de contenido · Producción short-form · Europa', lightboxClose: 'Cerrar contenido', previous: 'Contenido anterior', next: 'Contenido siguiente'
    },
    it: {
      metaTitle: 'Ekaterina Novitskaia — Sistemi di contenuto e strategia short-form', metaDescription: 'Strategia dei contenuti, Reels, storytelling e sistemi di produzione scalabili per una presenza short-form costante.', skip: 'Vai al contenuto', menu: 'Menu', close: 'Chiudi', navExpertise: 'Competenze', navWork: 'Progetti', navProcess: 'Processo', navServices: 'Servizi', navContact: 'Contatti',
      heroEyebrow: 'Strategia dei contenuti · Reels · Storytelling · Produzione AI', heroHeadline: 'Creo sistemi di contenuto che trasformano le idee in <em>mesi di contenuti coerenti.</em>', heroCopy: 'Aiuto i brand a trasformare posizionamento, prodotti e competenze in contenuti short-form strategici: dall’architettura editoriale e dagli hook ai Reels, alla direzione creativa e ai flussi di produzione scalabili.', heroPrimary: 'Costruisci il tuo sistema di contenuto', heroSecondary: 'Vedi i progetti selezionati', heroSignature: 'Ekaterina Novitskaia · Europa', heroAlt: 'Ekaterina Novitskaia, content strategist e produttrice short-form',
      proofHeading: 'Sistemi di contenuto creati per brand reali', metricPlanned: 'post pianificati in un sistema di 12 mesi', metricHooks: 'hook sviluppati', metricFormats: 'formati di contenuto evergreen', metricLanguages: 'lingue · RU · EN · ES · IT · BY', expertiseLabel: 'Competenze', expertiseTitle: 'Cosa costruisco', expertiseIntro: 'Strategia e produzione diventano un unico sistema: un territorio di marca chiaro, formati ripetibili e un flusso per pubblicare con continuità.', cap1Title: 'Strategia dei contenuti', cap1Copy: 'Architettura dei contenuti, posizionamento, pillar, sistemi editoriali e pianificazione a lungo termine.', cap1Terms: 'Posizionamento · Content pillar · Architettura editoriale · Masterplan', cap2Title: 'Reels e short-form', cap2Copy: 'Hook, script, direzione creativa, montaggio, B-roll e storytelling short-form.', cap2Terms: 'Hook · Script · Direzione creativa · Montaggio · B-roll', cap3Title: 'Brand storytelling', cap3Copy: 'Narrazioni che collegano prodotto, cultura e posizionamento in contenuti memorabili.', cap3Terms: 'Narrazione di marca · Storytelling di prodotto · Tone of voice', cap4Title: 'Produzione con AI', cap4Copy: 'Flussi assistiti dall’AI per ideazione, script, sviluppo visivo, produzione e riuso.', cap4Terms: 'Prima la strategia · Poi gli strumenti · Flussi scalabili', cap5Title: 'Contenuti multilingue', cap5Copy: 'Una voce di marca coerente nei mercati russo, inglese, spagnolo, italiano e bielorusso.', cap5Terms: 'Localizzazione · Adattamento degli hook · Contesto culturale · Coerenza',
      workLabel: 'Progetti selezionati', workTitle: 'Sistemi creati per brand reali.', workIntro: 'Non singoli contenuti. Ogni progetto collega posizionamento, sistema editoriale e produzione concreta.', challenge: 'Sfida', strategy: 'Strategia', system: 'Sistema', execution: 'Esecuzione', outcome: 'Risultato', case1Category: 'Hair care · Infrastruttura di contenuto', case1Title: 'Un’infrastruttura di contenuto di 12 mesi per un brand hair-care basato sulla scienza.', case1Challenge: 'Il brand aveva un prodotto supportato clinicamente e decenni di ricerca, ma serviva un sistema di comunicazione scalabile invece di post isolati.', case1Strategy: 'Trovare un territorio distintivo tra la comunicazione farmaceutica basata sulla paura e i contenuti beauty/lifestyle generici.', case1Execution: 'Post, caroselli, Reels, script e risorse B-roll per i primi cicli di produzione.', case1Outcome: 'Un’infrastruttura ripetibile, progettata per sostenere una produzione coerente durante tutto l’anno.', case1Metric1: 'concept di contenuto', case1Metric2: 'mesi', case1Metric3: 'formati evergreen', case2Category: 'Ottica sostenibile · Sistema di hook e contenuti', case2Title: 'Trasformare un brand di prodotto in un mondo culturale.', case2Challenge: 'Un prodotto distintivo, una storia fondativa e una base clienti consolidata, ma nessuna identità editoriale coerente.', case2Strategy: 'Trasformare la città e l’origine del brand da dato geografico ad asset narrativo proprietario.', case2Execution: 'Reels, caroselli, visual di brand e storytelling culturale in più lingue.', case2Outcome: 'Un brand di accessori sostenibili con una propria identità culturale riconoscibile e un ritmo editoriale ripetibile.', case2Metric1: 'hook sviluppati', case3Category: 'Slow fashion · Storytelling culturale', case3Title: 'Da contenuti estetici a un mondo riconoscibile.', case3Challenge: 'Un’estetica generica fatta di natura e morbidezza, senza un universo narrativo distintivo.', case3Strategy: 'Costruire un universo emotivo attorno al prodotto e renderlo ripetibile stagione dopo stagione.', case3Execution: 'Visual editoriali, caroselli, Reels e storytelling stagionale.', case3Outcome: 'Estetica generica → narrazione propria → sistema visivo e narrativo ripetibile.', testimonial: '«Le attività assegnate sono state completate costantemente con nostra piena soddisfazione».',
      reelsLabel: 'Reels e short-form', reelsTitle: 'Una strategia che si vede in movimento.', reelsIntro: 'Una selezione di lavori short-form per hair care, ottica sostenibile e slow fashion: dall’hook e dallo script alla direzione creativa e al montaggio.', reelHair1: 'La scienza in modo umano', reelHair2: 'Rituale di prodotto', reelOptics1: 'Hook culturale', reelOptics2: 'Mondo di prodotto', reelFashion1: 'Storia stagionale', reelFashion2: 'World-building emotivo', reelRoleFull: 'Hook · Script · Direzione · Montaggio', reelRoleDirection: 'Concept · Direzione · Montaggio',
      processLabel: 'Come lavoro', processTitle: 'Dalla verità del brand a una produzione ripetibile.', processIntro: 'Quattro fasi mirate: prima la chiarezza, poi contenuti che il team può davvero sostenere.', process1Title: 'Scoprire', process1Copy: 'Brand, prodotto, pubblico e panorama competitivo.', process2Title: 'Posizionare', process2Copy: 'Territorio narrativo, pillar, voce e regole di comunicazione.', process3Title: 'Sistematizzare', process3Copy: 'Formati, hook, calendari, brief e flusso di produzione.', process4Title: 'Produrre', process4Copy: 'Reels, caroselli, script, B-roll e miglioramento continuo.', fitLabel: 'Con chi lavoro', fitTitle: 'Per team che hanno bisogno di un sistema, non di altro rumore.', fit1Title: 'Founder', fit1Copy: 'Trasformare competenze e idee in un motore di contenuti chiaro.', fit2Title: 'Brand consumer', fit2Copy: 'Costruire un mondo distintivo attorno a un prodotto reale.', fit3Title: 'Brand internazionali', fit3Copy: 'Adattare un unico nucleo strategico a mercati diversi.', fit4Title: 'Piccoli team marketing', fit4Copy: 'Aggiungere capacità strategica e produttiva senior senza la struttura di un’agenzia.',
      servicesLabel: 'Come lavorare insieme', servicesTitle: 'Scegli il livello di sistema e produzione che ti serve.', servicesIntro: 'Ogni collaborazione parte dalla chiarezza strategica. Il perimetro segue il brand, il team e la realtà produttiva, non un menu di deliverable scollegati.', offer1Title: 'Content System Sprint', offer1Copy: 'Per brand che hanno bisogno di basi chiare prima di produrre di più: posizionamento, pillar, formati, hook e direzione editoriale operativa.', offer1Output: 'Ideale per · Reset strategico', offer2Title: 'Sistema di contenuto + produzione', offer2Copy: 'Per brand che vogliono costruire insieme il sistema e il primo ciclo: strategia, script, direzione, Reels e asset di supporto.', offer2Output: 'Ideale per · Costruzione e lancio', offer3Title: 'Produzione strategica continuativa', offer3Copy: 'Per team già avviati che cercano un partner senior costante per evolvere il sistema e mantenere la produzione.', offer3Output: 'Ideale per · Continuità mensile',
      aboutLabel: 'Chi sono', aboutTitle: 'Prima la strategia. Produzione inclusa.', aboutCopy: 'Ho aiutato House of Sustainable Brands ad Amburgo — l’azienda dietro Thiocyn e altri brand digital-native — a creare sistemi completi: dall’analisi competitiva e dal posizionamento ai masterplan di 12 mesi, alle librerie di formati e agli asset finali. Lavoro da remoto in Europa e adatto il nucleo strategico ai mercati russo, inglese, spagnolo, italiano e bielorusso.', cred1Title: 'Brand internazionali', cred1Copy: 'Strategia e produzione per i mercati europei', cred2Title: 'Collaborazione da remoto', cred2Copy: 'Un processo pensato per founder e piccoli team', cred3Title: 'End-to-end', cred3Copy: 'Dal posizionamento ai contenuti short-form finiti', tools: 'Strumenti di produzione · Runway · Midjourney · Sora · ChatGPT · Claude · ElevenLabs', galleryLabel: 'Altri lavori creativi', galleryTitle: 'Altri lavori creativi selezionati.', galleryIntro: 'Un archivio più ampio di concept visivi, caroselli ed esperimenti produttivi. La sfida di business e la storia restano centrali; gli strumenti sono metadati secondari.', filterAll: 'Tutti', filterHaircare: 'Hair care', filterSunglasses: 'Occhiali', filterLifestyle: 'Lifestyle', filterPhoto: 'Foto', filterVideo: 'Video', contactLabel: 'Avvia un progetto', contactTitle: 'Hai un’idea di brand ma non ancora un sistema di contenuto? <em>Costruiamolo.</em>', contactSupport: 'Raccontami cosa stai costruendo, dove si blocca il contenuto e cosa il tuo team deve produrre con continuità.', contactButton: 'Costruisci il tuo sistema', footer: 'Sistemi di contenuto · Produzione short-form · Europa', lightboxClose: 'Chiudi media', previous: 'Media precedente', next: 'Media successivo'
    },
    by: {
      metaTitle: 'Кацярына Навіцкая — кантэнт-сістэмы і short-form стратэгія', metaDescription: 'Кантэнт-стратэгія, Reels, сторытэлінг і маштабаваныя вытворчыя сістэмы для паслядоўнага short-form кантэнту.', skip: 'Перайсці да зместу', menu: 'Меню', close: 'Закрыць', navExpertise: 'Экспертыза', navWork: 'Праекты', navProcess: 'Працэс', navServices: 'Паслугі', navContact: 'Кантакты',
      heroEyebrow: 'Кантэнт-стратэгія · Reels · Сторытэлінг · AI-вытворчасць', heroHeadline: 'Я ствараю кантэнт-сістэмы, якія ператвараюць ідэі ў <em>месяцы паслядоўнага кантэнту.</em>', heroCopy: 'Я дапамагаю брэндам ператвараць пазіцыянаванне, прадукты і экспертызу ў стратэгічны short-form кантэнт — ад кантэнт-архітэктуры і хукаў да Reels, крэатыўнага кіраўніцтва і маштабаваных вытворчых працэсаў.', heroPrimary: 'Стварыць кантэнт-сістэму', heroSecondary: 'Глядзець выбраныя праекты', heroSignature: 'Кацярына Навіцкая · Еўропа', heroAlt: 'Кацярына Навіцкая, кантэнт-стратэг і short-form прадзюсар', proofHeading: 'Кантэнт-сістэмы для рэальных брэндаў', metricPlanned: 'публікацый спланавана ў сістэме на 12 месяцаў', metricHooks: 'хукаў распрацавана', metricFormats: 'пастаянных кантэнт-фарматаў', metricLanguages: 'моў · RU · EN · ES · IT · BY',
      expertiseLabel: 'Экспертыза', expertiseTitle: 'Што я ствараю', expertiseIntro: 'Стратэгія і вытворчасць працуюць як адзіная сістэма: выразная тэрыторыя брэнда, паўтаральныя фарматы і працэс для рэгулярных публікацый.', cap1Title: 'Кантэнт-стратэгія', cap1Copy: 'Кантэнт-архітэктура, пазіцыянаванне, рубрыкі, рэдакцыйныя сістэмы і доўгатэрміновае планаванне.', cap1Terms: 'Пазіцыянаванне · Кантэнт-рубрыкі · Рэдакцыйная архітэктура · Майстар-планы', cap2Title: 'Reels і short-form', cap2Copy: 'Хукі, сцэнары, крэатыўнае кіраўніцтва, мантаж, B-roll і кароткі сторытэлінг.', cap2Terms: 'Хукі · Сцэнары · Крэатыўнае кіраўніцтва · Мантаж · B-roll', cap3Title: 'Сторытэлінг брэнда', cap3Copy: 'Гісторыі, якія злучаюць прадукт, культуру і пазіцыянаванне ў запамінальны кантэнт.', cap3Terms: 'Наратыў брэнда · Гісторыі пра прадукт · Tone of voice', cap4Title: 'Вытворчасць з AI', cap4Copy: 'AI-працэсы для пошуку ідэй, сцэнарыяў, візуальнай распрацоўкі, вытворчасці і пераўпакоўкі кантэнту.', cap4Terms: 'Спачатку стратэгія · Потым інструменты · Маштабаваныя працэсы', cap5Title: 'Шматмоўны кантэнт', cap5Copy: 'Адзіны голас брэнда на рускамоўным, англамоўным, іспанскім, італьянскім і беларускім рынках.', cap5Terms: 'Лакалізацыя · Адаптацыя хукаў · Культурны кантэкст · Цэласнасць брэнда',
      workLabel: 'Выбраныя праекты', workTitle: 'Сістэмы, створаныя для рэальных брэндаў.', workIntro: 'Не асобныя публікацыі. Кожны праект злучае пазіцыянаванне, рэдакцыйную сістэму і рэальную вытворчасць.', challenge: 'Задача', strategy: 'Стратэгія', system: 'Сістэма', execution: 'Рэалізацыя', outcome: 'Вынік', case1Category: 'Догляд валасоў · Кантэнт-інфраструктура', case1Title: 'Кантэнт-інфраструктура на 12 месяцаў для навукова абгрунтаванага брэнда догляду валасоў.', case1Challenge: 'У брэнда быў клінічна абгрунтаваны прадукт і дзесяцігоддзі даследаванняў, але замест асобных публікацый патрэбна была маштабаваная сістэма камунікацыі.', case1Strategy: 'Знайсці ўласную тэрыторыю паміж камунікацыяй фармацэўтычных брэндаў, заснаванай на страху, і тыповым beauty/lifestyle кантэнтам.', case1Execution: 'Пасты, каруселі, Reels, сцэнары і B-roll для першых вытворчых цыклаў.', case1Outcome: 'Паўтаральная кантэнт-інфраструктура для паслядоўнай вытворчасці цягам усяго года.', case1Metric1: 'кантэнт-канцэпцый', case1Metric2: 'месяцаў', case1Metric3: 'пастаянных фарматаў', case2Category: 'Устойлівая оптыка · Сістэма хукаў і кантэнту', case2Title: 'Як ператварыць прадуктовы брэнд у культурны кантэнт-свет.', case2Challenge: 'Выразны прадукт, гісторыя заснавання і вялікая кліенцкая база — але без цэласнай кантэнт-ідэнтычнасці.', case2Strategy: 'Ператварыць горад і паходжанне брэнда з геаграфічнага факта ва ўласны наратыўны актыў.', case2Execution: 'Reels, каруселі, візуалы брэнда і культурны сторытэлінг на некалькіх мовах.', case2Outcome: 'Брэнд устойлівых аксесуараў атрымаў пазнавальную культурную ідэнтычнасць і паўтаральны рэдакцыйны рытм.', case2Metric1: 'хукаў распрацавана', case3Category: 'Slow fashion · Культурны сторытэлінг', case3Title: 'Ад эстэтычнага кантэнту да свету, які пазнаюць.', case3Challenge: 'Знаёмая эстэтыка прыроды і мяккасці без уласнага наратыўнага свету.', case3Strategy: 'Стварыць эмацыйны сусвет вакол прадукту і ператварыць яго ў сістэму, што працуе з сезона ў сезон.', case3Execution: 'Рэдакцыйныя візуалы, каруселі, Reels і сезонны сторытэлінг.', case3Outcome: 'Тыповая эстэтыка → уласны наратыў → паўтаральная візуальная і сюжэтная сістэма.', testimonial: '«Пастаўленыя задачы выконваліся нязменна ў поўнай адпаведнасці з нашымі чаканнямі».',
      reelsLabel: 'Reels і short-form', reelsTitle: 'Стратэгія, якую бачна ў руху.', reelsIntro: 'Выбраныя short-form працы для догляду валасоў, устойлівай оптыкі і slow fashion — ад хука і сцэнарыя да крэатыўнага кіраўніцтва і мантажу.', reelHair1: 'Навука чалавечай мовай', reelHair2: 'Рытуал прадукту', reelOptics1: 'Культурны хук', reelOptics2: 'Свет прадукту', reelFashion1: 'Сезонная гісторыя', reelFashion2: 'Эмацыйны свет брэнда', reelRoleFull: 'Хук · Сцэнар · Кіраўніцтва · Мантаж', reelRoleDirection: 'Канцэпцыя · Кіраўніцтва · Мантаж',
      processLabel: 'Як я працую', processTitle: 'Ад сутнасці брэнда да паўтаральнай вытворчасці.', processIntro: 'Чатыры сфакусаваныя этапы: спачатку яснасць, потым кантэнт, які каманда сапраўды можа выпускаць рэгулярна.', process1Title: 'Даследаванне', process1Copy: 'Брэнд, прадукт, аўдыторыя і канкурэнтнае асяроддзе.', process2Title: 'Пазіцыянаванне', process2Copy: 'Наратыўная тэрыторыя, рубрыкі, голас і правілы камунікацыі.', process3Title: 'Сістэма', process3Copy: 'Фарматы, хукі, календары, брыфы і вытворчы працэс.', process4Title: 'Вытворчасць', process4Copy: 'Reels, каруселі, сцэнары, B-roll і пастаяннае паляпшэнне.', fitLabel: 'З кім я працую', fitTitle: 'Для каманд, якім патрэбна сістэма, а не яшчэ больш шуму.', fit1Title: 'Заснавальнікі', fit1Copy: 'Ператварыць экспертызу і ідэі ў зразумелы кантэнт-механізм.', fit2Title: 'Спажывецкія брэнды', fit2Copy: 'Стварыць вакол рэальнага прадукту пазнавальны свет.', fit3Title: 'Міжнародныя брэнды', fit3Copy: 'Адаптаваць адзінае стратэгічнае ядро для розных рынкаў.', fit4Title: 'Невялікія маркетынгавыя каманды', fit4Copy: 'Дадаць стратэгічную і вытворчую экспертызу без агенцкай грувасткасці.',
      servicesLabel: 'Фарматы супрацоўніцтва', servicesTitle: 'Выберыце патрэбны ўзровень сістэмы і вытворчасці.', servicesIntro: 'Кожны праект пачынаецца са стратэгічнай яснасці. Аб’ём працы вызначаецца задачамі брэнда, каманды і рэальнай вытворчасці, а не меню асобных паслуг.', offer1Title: 'Спрынт па кантэнт-сістэме', offer1Copy: 'Для брэндаў, якім патрэбна ясная аснова перад ростам вытворчасці: пазіцыянаванне, рубрыкі, фарматы, хукі і практычны рэдакцыйны напрамак.', offer1Output: 'Падыходзіць для · Стратэгічнай перазагрузкі', offer2Title: 'Кантэнт-сістэма + вытворчасць', offer2Copy: 'Для брэндаў, якім патрэбны і сістэма, і першы цыкл кантэнту: стратэгія, сцэнары, кіраўніцтва, Reels і дапаможныя матэрыялы.', offer2Output: 'Падыходзіць для · Стварэння і запуску', offer3Title: 'Пастаянная стратэгічная вытворчасць', offer3Copy: 'Для каманд з рабочай базай, якім патрэбны пастаянны старэйшы партнёр для развіцця сістэмы і рэгулярнай вытворчасці.', offer3Output: 'Падыходзіць для · Штомесячнай працы',
      aboutLabel: 'Пра мяне', aboutTitle: 'Спачатку стратэгія. Вытворчасць уключана.', aboutCopy: 'Я дапамагла House of Sustainable Brands у Гамбургу — кампаніі, якая стаіць за Thiocyn і іншымі digital-native брэндамі, — стварыць поўныя кантэнт-сістэмы: ад аналізу канкурэнтаў і пазіцыянавання да майстар-планаў на 12 месяцаў, бібліятэк фарматаў і гатовых матэрыялаў. Я працую дыстанцыйна па ўсёй Еўропе і адаптую стратэгічнае ядро для рускамоўнага, англамоўнага, іспанскага, італьянскага і беларускага рынкаў.', cred1Title: 'Міжнародныя брэнды', cred1Copy: 'Стратэгія і вытворчасць для еўрапейскіх рынкаў', cred2Title: 'Дыстанцыйная праца', cred2Copy: 'Працэс для заснавальнікаў і невялікіх каманд', cred3Title: 'Ад пачатку да выніку', cred3Copy: 'Ад пазіцыянавання да гатовага short-form кантэнту', tools: 'Інструменты вытворчасці · Runway · Midjourney · Sora · ChatGPT · Claude · ElevenLabs', galleryLabel: 'Дадатковыя працы', galleryTitle: 'Яшчэ выбраныя творчыя праекты.', galleryIntro: 'Архіў візуальных канцэпцый, каруселяў і вытворчых эксперыментаў. На першым месцы — бізнес-задача і гісторыя; інструменты застаюцца другаснымі метададзенымі.', filterAll: 'Усе', filterHaircare: 'Догляд валасоў', filterSunglasses: 'Акуляры', filterLifestyle: 'Лайфстайл', filterPhoto: 'Фота', filterVideo: 'Відэа', contactLabel: 'Пачаць праект', contactTitle: 'Ёсць ідэя брэнда, але яшчэ няма кантэнт-сістэмы? <em>Давайце яе створым.</em>', contactSupport: 'Раскажыце, што вы ствараеце, дзе спыняецца вытворчасць кантэнту і што вашай камандзе трэба выпускаць рэгулярна.', contactButton: 'Стварыць кантэнт-сістэму', footer: 'Кантэнт-сістэмы · Short-form вытворчасць · Еўропа', lightboxClose: 'Закрыць медыя', previous: 'Папярэдняе медыя', next: 'Наступнае медыя'
    }
  };

  const SYSTEM_TAGS = {
    en: {
      haircare: ['Competitor intelligence', 'Brand manifesto', 'Positioning', '12-month masterplan', 'Content pillars', 'Hook library', 'Compliance framework', 'Production workflow'],
      optics: ['Competitor analysis', 'Manifesto', 'Tone of voice', 'Content pillars', 'Visual direction', 'Hook system', 'KPI framework', 'Content calendar'],
      fashion: ['Audience portrait', 'Positioning', 'Seasonal narrative', 'Communication rules', 'Content matrix', 'Annual masterplan', 'Production calendar', 'Story briefs']
    },
    ru: {
      haircare: ['Анализ конкурентов', 'Манифест бренда', 'Позиционирование', 'Мастер-план на 12 месяцев', 'Контент-рубрики', 'Библиотека хуков', 'Система compliance', 'Процесс производства'],
      optics: ['Анализ конкурентов', 'Манифест', 'Tone of voice', 'Контент-рубрики', 'Визуальное направление', 'Система хуков', 'KPI-фреймворк', 'Контент-календарь'],
      fashion: ['Портрет аудитории', 'Позиционирование', 'Сезонный нарратив', 'Правила коммуникации', 'Контент-матрица', 'Годовой мастер-план', 'Производственный календарь', 'Брифы историй']
    },
    es: {
      haircare: ['Inteligencia competitiva', 'Manifiesto de marca', 'Posicionamiento', 'Plan de 12 meses', 'Pilares de contenido', 'Biblioteca de hooks', 'Marco de compliance', 'Flujo de producción'],
      optics: ['Análisis competitivo', 'Manifiesto', 'Tono de voz', 'Pilares de contenido', 'Dirección visual', 'Sistema de hooks', 'Marco de KPIs', 'Calendario de contenido'],
      fashion: ['Perfil de audiencia', 'Posicionamiento', 'Narrativa estacional', 'Reglas de comunicación', 'Matriz de contenido', 'Plan anual', 'Calendario de producción', 'Briefs narrativos']
    },
    it: {
      haircare: ['Analisi competitiva', 'Manifesto di marca', 'Posizionamento', 'Masterplan di 12 mesi', 'Content pillar', 'Libreria di hook', 'Framework di compliance', 'Flusso di produzione'],
      optics: ['Analisi competitiva', 'Manifesto', 'Tone of voice', 'Content pillar', 'Direzione visiva', 'Sistema di hook', 'Framework KPI', 'Calendario editoriale'],
      fashion: ['Profilo del pubblico', 'Posizionamento', 'Narrazione stagionale', 'Regole di comunicazione', 'Matrice dei contenuti', 'Masterplan annuale', 'Calendario di produzione', 'Brief narrativi']
    },
    by: {
      haircare: ['Аналіз канкурэнтаў', 'Маніфест брэнда', 'Пазіцыянаванне', 'Майстар-план на 12 месяцаў', 'Кантэнт-рубрыкі', 'Бібліятэка хукаў', 'Сістэма compliance', 'Вытворчы працэс'],
      optics: ['Аналіз канкурэнтаў', 'Маніфест', 'Tone of voice', 'Кантэнт-рубрыкі', 'Візуальны напрамак', 'Сістэма хукаў', 'KPI-фрэймворк', 'Кантэнт-каляндар'],
      fashion: ['Партрэт аўдыторыі', 'Пазіцыянаванне', 'Сезонны наратыў', 'Правілы камунікацыі', 'Кантэнт-матрыца', 'Гадавы майстар-план', 'Вытворчы каляндар', 'Брыфы гісторый']
    }
  };

  const en = COPY.en;
  const getCopy = (lang, key) => (COPY[lang] && COPY[lang][key]) || en[key] || '';
  const element = (tag, key, className) => `<${tag}${className ? ` class="${className}"` : ''} data-i18n="${key}">${en[key]}</${tag}>`;
  const tags = (set, lang = 'en') => `<div class="system-tags" data-system-set="${set}">${SYSTEM_TAGS[lang][set].map(item => `<span>${item}</span>`).join('')}</div>`;

  function renderNavigation() {
    const nav = document.querySelector('nav');
    nav.setAttribute('aria-label', 'Primary navigation');
    nav.innerHTML = `
      <a href="#hero" class="nav-name" aria-label="Ekaterina Novitskaia — home">Ekaterina Novitskaia</a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-nav"><span data-i18n="menu">${en.menu}</span></button>
      <ul class="nav-links" id="primary-nav">
        <li><a href="#expertise" data-i18n="navExpertise">${en.navExpertise}</a></li>
        <li><a href="#work" data-i18n="navWork">${en.navWork}</a></li>
        <li><a href="#process" data-i18n="navProcess">${en.navProcess}</a></li>
        <li><a href="#services" data-i18n="navServices">${en.navServices}</a></li>
        <li><a href="#contact" data-i18n="navContact">${en.navContact}</a></li>
      </ul>
      <div class="nav-lang" role="group" aria-label="Choose language">
        ${SITE_DATA.languages.map(lang => `<button class="lang-btn" type="button" data-lang="${lang}" lang="${SITE_DATA.htmlLanguages[lang]}">${SITE_DATA.languageLabels[lang]}</button>`).join('')}
      </div>`;
  }

  function renderHero() {
    document.getElementById('hero').innerHTML = `
      <div class="hero-left">
        ${element('div', 'heroEyebrow', 'hero-kicker eyebrow')}
        ${element('h1', 'heroHeadline', 'hero-value')}
        ${element('p', 'heroCopy', 'hero-copy')}
        <div class="hero-actions">
          <a class="btn-primary" href="#services" data-i18n="heroPrimary">${en.heroPrimary}</a>
          <a class="btn-secondary" href="#work" data-i18n="heroSecondary">${en.heroSecondary}</a>
        </div>
      </div>
      <div class="hero-photo">
        <img src="assets/img/hero/Kat-editorial-bw.jpg" width="1086" height="1448" fetchpriority="high" decoding="async" alt="${en.heroAlt}" data-i18n-alt="heroAlt">
        ${element('span', 'heroSignature', 'hero-signature')}
      </div>`;
  }

  function sectionHead(label, title, intro) {
    return `<div class="section-head reveal"><div>${element('div', label, 'section-label')}</div><div>${element('h2', title, 'section-title')}${intro ? element('p', intro, 'section-intro') : ''}</div></div>`;
  }

  function renderCase(number, category, title, challengeKey, strategyKey, executionKey, outcomeKey, tagSet, metrics, testimonial, media) {
    return `<article class="case-study reveal">
      <div class="case-heading">
        <div class="case-number" aria-hidden="true">${number}</div>
        <div>
          ${element('div', category, 'case-category eyebrow')}
          ${element('h3', title, '')}
          ${metrics ? `<div class="case-metrics">${metrics.map(metric => `<div class="case-metric"><strong>${metric.value}</strong><span data-i18n="${metric.key}">${en[metric.key]}</span></div>`).join('')}</div>` : ''}
        </div>
      </div>
      <div class="case-details">
        <dl class="case-narrative">
          <div class="case-row"><dt data-i18n="challenge">${en.challenge}</dt><dd data-i18n="${challengeKey}">${en[challengeKey]}</dd></div>
          <div class="case-row"><dt data-i18n="strategy">${en.strategy}</dt><dd data-i18n="${strategyKey}">${en[strategyKey]}</dd></div>
          <div class="case-row"><dt data-i18n="system">${en.system}</dt><dd>${tags(tagSet)}</dd></div>
          <div class="case-row"><dt data-i18n="execution">${en.execution}</dt><dd data-i18n="${executionKey}">${en[executionKey]}</dd></div>
          <div class="case-row outcome"><dt data-i18n="outcome">${en.outcome}</dt><dd data-i18n="${outcomeKey}">${en[outcomeKey]}</dd></div>
        </dl>
        ${testimonial ? `<blockquote class="testimonial"><span data-i18n="testimonial">${en.testimonial}</span><cite>Peter Hart, CEO · House of Sustainable Brands / Thiocyn GmbH</cite></blockquote>` : ''}
      </div>
      <div class="case-media">${media.map(src => `<img src="${src}" loading="lazy" decoding="async" alt="${en[title]}" data-i18n-alt="${title}">`).join('')}</div>
    </article>`;
  }

  function renderReel(src, poster, titleKey, roleKey) {
    return `<figure class="reel-card reveal"><div class="reel-media"><video controls muted playsinline preload="none" poster="${poster}" aria-label="${en[titleKey]}"><source src="${src}" type="video/mp4"></video></div><figcaption><span class="reel-title" data-i18n="${titleKey}">${en[titleKey]}</span><span class="reel-role" data-i18n="${roleKey}">${en[roleKey]}</span></figcaption></figure>`;
  }

  function renderStrategicSections() {
    const oldSections = ['about', 'services', 'cases', 'pricing'];
    oldSections.forEach(id => document.getElementById(id)?.remove());
    const metrics = SITE_DATA.metrics.map(metric => `<div class="metric reveal"><strong class="metric-value">${metric.value}</strong><div class="metric-label" data-i18n="${metric.key}">${en[metric.key]}</div></div>`).join('');
    const capabilities = [1,2,3,4,5].map(n => `<article class="capability${n === 2 ? ' featured' : ''} reveal"><span class="capability-num">0${n}</span><h3 data-i18n="cap${n}Title">${en[`cap${n}Title`]}</h3><div class="capability-copy"><p data-i18n="cap${n}Copy">${en[`cap${n}Copy`]}</p><p class="term-line" data-i18n="cap${n}Terms">${en[`cap${n}Terms`]}</p></div></article>`).join('');
    const processes = [1,2,3,4].map(n => `<article class="process-step reveal"><span class="process-step-num">0${n}</span><h3 data-i18n="process${n}Title">${en[`process${n}Title`]}</h3><p data-i18n="process${n}Copy">${en[`process${n}Copy`]}</p></article>`).join('');
    const fits = [1,2,3,4].map(n => `<div class="fit-item reveal"><span>0${n}</span><div><strong data-i18n="fit${n}Title">${en[`fit${n}Title`]}</strong><p data-i18n="fit${n}Copy">${en[`fit${n}Copy`]}</p></div></div>`).join('');
    const offers = [1,2,3].map(n => `<article class="offer reveal"><span class="offer-num">0${n}</span><h3 data-i18n="offer${n}Title">${en[`offer${n}Title`]}</h3><p data-i18n="offer${n}Copy">${en[`offer${n}Copy`]}</p><div class="offer-output" data-i18n="offer${n}Output">${en[`offer${n}Output`]}</div></article>`).join('');
    const html = `
      <section id="proof" aria-labelledby="proof-title"><div class="proof-heading eyebrow" id="proof-title" data-i18n="proofHeading">${en.proofHeading}</div><div class="metrics-grid">${metrics}</div></section>
      <section id="expertise">${sectionHead('expertiseLabel','expertiseTitle','expertiseIntro')}<div class="capability-list">${capabilities}</div></section>
      <section id="work">${sectionHead('workLabel','workTitle','workIntro')}
        ${renderCase('01','case1Category','case1Title','case1Challenge','case1Strategy','case1Execution','case1Outcome','haircare',[{value:'200+',key:'case1Metric1'},{value:'12',key:'case1Metric2'},{value:'6+',key:'case1Metric3'}],true,['assets/img/cases/hair-loss/Slider-1-1.webp','assets/img/cases/hair-loss/Slider-4-1.webp','assets/img/cases/hair-loss/Slider-4-4.webp'])}
        ${renderCase('02','case2Category','case2Title','case2Challenge','case2Strategy','case2Execution','case2Outcome','optics',[{value:'150+',key:'case2Metric1'}],false,['assets/img/cases/sunglasses/Carusel-cover.webp','assets/img/cases/sunglasses/99.webp','assets/img/cases/sunglasses/post3_feed.webp'])}
        ${renderCase('03','case3Category','case3Title','case3Challenge','case3Strategy','case3Execution','case3Outcome','fashion',null,false,['assets/img/cases/lifestyle/Holly-0.webp','assets/img/cases/lifestyle/Slider-3-1.webp','assets/img/cases/lifestyle/LS-1.webp'])}
      </section>
      <section id="reels">${sectionHead('reelsLabel','reelsTitle','reelsIntro')}<div class="reels-grid">
        ${renderReel('assets/img/cases/hair-loss/videos/identit.mp4','assets/img/cases/hair-loss/Slider-1-1.webp','reelHair1','reelRoleFull')}
        ${renderReel('assets/img/cases/hair-loss/videos/ClipHearSerum.mp4','assets/img/cases/hair-loss/Slider-4-1.webp','reelHair2','reelRoleDirection')}
        ${renderReel('assets/img/cases/sunglasses/videos/VampBest.mp4','assets/img/cases/sunglasses/99.webp','reelOptics1','reelRoleFull')}
        ${renderReel('assets/img/cases/sunglasses/videos/SG-9.mp4','assets/img/cases/sunglasses/Carusel-cover.webp','reelOptics2','reelRoleDirection')}
        ${renderReel('assets/img/cases/lifestyle/videos/Llamas_1.mp4','assets/img/cases/lifestyle/Holly-0.webp','reelFashion1','reelRoleFull')}
        ${renderReel('assets/img/cases/lifestyle/videos/Llama_Lifestyle_2.mp4','assets/img/cases/lifestyle/Slider-3-1.webp','reelFashion2','reelRoleDirection')}
      </div></section>
      <section id="process">${sectionHead('processLabel','processTitle','processIntro')}<div class="process-line">${processes}</div></section>
      <section id="fit"><div class="fit-grid"><div>${element('div','fitLabel','section-label')}${element('h2','fitTitle','section-title')}</div><div class="fit-list">${fits}</div></div></section>
      <section id="services">${sectionHead('servicesLabel','servicesTitle','servicesIntro')}<div class="offers">${offers}</div></section>
      <section id="about"><div class="about-layout"><div class="about-portrait reveal"><img src="assets/img/hero/Kat-editorial-bw.jpg" width="1086" height="1448" loading="lazy" decoding="async" alt="${en.heroAlt}" data-i18n-alt="heroAlt"></div><div class="about-copy reveal">${element('div','aboutLabel','section-label')}${element('h2','aboutTitle','')} ${element('p','aboutCopy','')}<div class="credibility-list">${[1,2,3].map(n => `<div class="credibility-item"><strong data-i18n="cred${n}Title">${en[`cred${n}Title`]}</strong><span data-i18n="cred${n}Copy">${en[`cred${n}Copy`]}</span></div>`).join('')}</div>${element('div','tools','tools-line')}</div></div></section>`;
    document.getElementById('hero').insertAdjacentHTML('afterend', html);
  }

  function upgradeGallery() {
    const gallery = document.getElementById('gallery');
    const oldLabel = gallery.querySelector(':scope > .section-label');
    oldLabel?.remove();
    gallery.insertAdjacentHTML('afterbegin', sectionHead('galleryLabel','galleryTitle','galleryIntro'));
    const filterKeys = { all:'filterAll', haircare:'filterHaircare', sunglasses:'filterSunglasses', lifestyle:'filterLifestyle', photo:'filterPhoto', video:'filterVideo' };
    gallery.querySelectorAll('.gf-btn').forEach(button => {
      button.dataset.i18n = filterKeys[button.dataset.filter];
    });
    gallery.querySelectorAll('img').forEach((img, index) => {
      img.loading = 'lazy';
      img.decoding = 'async';
      if (!img.alt) img.alt = `Selected creative work ${index + 1}`;
    });
    gallery.querySelectorAll('video').forEach(video => { video.preload = 'none'; });
    gallery.querySelectorAll('.gal-video-wrap').forEach((wrap, index) => {
      wrap.setAttribute('role', 'button');
      wrap.tabIndex = 0;
      wrap.setAttribute('aria-label', `Open video ${index + 1}`);
      wrap.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); wrap.click(); }
      });
    });
    gallery.querySelectorAll('.carousel-btn.prev').forEach(button => button.setAttribute('aria-label', en.previous));
    gallery.querySelectorAll('.carousel-btn.next').forEach(button => button.setAttribute('aria-label', en.next));
  }

  function renderContact() {
    const { email, linkedin, whatsapp } = SITE_DATA.contacts;
    document.getElementById('contact').innerHTML = `<div class="contact-inner reveal">
      ${element('div','contactLabel','section-label')}
      ${element('h2','contactTitle','contact-title')}
      ${element('p','contactSupport','contact-support')}
      <div class="contact-links">
        <a href="mailto:${email}" class="contact-link"><span class="contact-link-label">Email</span><span class="contact-link-value">${email}</span></a>
        <a href="${linkedin}" target="_blank" rel="noopener noreferrer" class="contact-link"><span class="contact-link-label">LinkedIn</span><span class="contact-link-value">katherina-novitskaia</span></a>
        <a href="${whatsapp}" target="_blank" rel="noopener noreferrer" class="contact-link"><span class="contact-link-label">WhatsApp</span><span class="contact-link-value">+34 657 501 973</span></a>
      </div>
      <a href="mailto:${email}?subject=Content%20system%20project" class="btn-primary" data-i18n="contactButton">${en.contactButton}</a>
    </div>`;
    document.querySelector('footer').innerHTML = `<span class="footer-copy">© 2026 Ekaterina Novitskaia</span><span class="footer-copy" data-i18n="footer">${en.footer}</span>`;
  }

  function createMainLandmark() {
    const main = document.createElement('main');
    main.id = 'main-content';
    const hero = document.getElementById('hero');
    document.body.insertBefore(main, hero);
    let node = hero;
    while (node && node.tagName === 'SECTION') {
      const next = node.nextElementSibling;
      main.appendChild(node);
      node = next;
    }
  }

  function applyLanguage(lang) {
    if (!SITE_DATA.languages.includes(lang)) lang = 'en';
    document.documentElement.lang = SITE_DATA.htmlLanguages[lang];
    document.title = getCopy(lang, 'metaTitle');
    document.querySelector('meta[name="description"]')?.setAttribute('content', getCopy(lang, 'metaDescription'));
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', getCopy(lang, 'metaTitle'));
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', getCopy(lang, 'metaDescription'));
    document.querySelectorAll('[data-i18n]').forEach(node => { node.innerHTML = getCopy(lang, node.dataset.i18n); });
    document.querySelectorAll('[data-i18n-alt]').forEach(node => { node.alt = getCopy(lang, node.dataset.i18nAlt); });
    document.querySelectorAll('[data-system-set]').forEach(node => {
      const set = node.dataset.systemSet;
      node.innerHTML = SYSTEM_TAGS[lang][set].map(item => `<span>${item}</span>`).join('');
    });
    document.querySelectorAll('.lang-btn').forEach(button => {
      const active = button.dataset.lang === lang;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    const toggle = document.querySelector('.nav-toggle span');
    if (toggle && document.body.classList.contains('nav-open')) toggle.textContent = getCopy(lang, 'close');
    const closeButton = document.getElementById('lb-close');
    if (closeButton) closeButton.setAttribute('aria-label', getCopy(lang, 'lightboxClose'));
    document.getElementById('lb-prev')?.setAttribute('aria-label', getCopy(lang, 'previous'));
    document.getElementById('lb-next')?.setAttribute('aria-label', getCopy(lang, 'next'));
    localStorage.setItem('lang', lang);
  }

  function bindInteractions() {
    const toggle = document.querySelector('.nav-toggle');
    const closeNav = () => {
      document.body.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.querySelector('span').textContent = getCopy(localStorage.getItem('lang') || 'en', 'menu');
    };
    toggle.addEventListener('click', () => {
      const open = document.body.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.querySelector('span').textContent = getCopy(localStorage.getItem('lang') || 'en', open ? 'close' : 'menu');
    });
    document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', closeNav));
    document.querySelectorAll('.lang-btn').forEach(button => button.addEventListener('click', () => applyLanguage(button.dataset.lang)));
    document.addEventListener('keydown', event => { if (event.key === 'Escape' && document.body.classList.contains('nav-open')) closeNav(); });
    const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: .08 }) : null;
    document.querySelectorAll('.reveal').forEach(node => observer ? observer.observe(node) : node.classList.add('visible'));
  }

  function upgradeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-label', 'Media viewer');
    document.getElementById('lb-img').alt = 'Selected creative work';
    ['lb-close','lb-prev','lb-next'].forEach(id => {
      const node = document.getElementById(id);
      node.setAttribute('role', 'button');
      node.tabIndex = 0;
      node.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); node.click(); }
      });
    });
  }

  document.body.insertAdjacentHTML('afterbegin', `<a class="skip-link" href="#main-content" data-i18n="skip">${en.skip}</a>`);
  renderNavigation();
  renderHero();
  renderStrategicSections();
  upgradeGallery();
  renderContact();
  createMainLandmark();
  upgradeLightbox();
  bindInteractions();
  applyLanguage(localStorage.getItem('lang') || 'en');
  document.body.classList.add('strategic-ready');
})();
