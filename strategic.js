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
      thinkingLabel: 'How I think',
      thinkingOpening: 'A brand doesn\'t always need another campaign.',
      thinkingIdea: 'Sometimes it needs <em>one good idea</em>.',
      thinkingObservation: 'A colour. · A phrase. · A recurring image. · Something slightly strange.',
      thinkingTransition: 'Then you give that idea somewhere to go.',
      thinkingApplications: 'POST · REEL · CAMPAIGN · STORY · AND ANOTHER STORY',
      thinkingConclusion: 'That\'s how content stops being a pile of posts<br>and starts becoming <em>a world</em>.',
      thinkingSupport: 'The job is not to make more content. It\'s to find something worth repeating.',
      problem: 'Problem', idea: 'Idea', world: 'World', result: 'Result',
      case1Problem: 'The brand had a clinically backed product and decades of research, but needed a scalable communication system rather than isolated social posts.',
      case1Idea: 'A quieter kind of authority.',
      case1World: 'Scientific credibility expressed through calm, human language and a restrained visual rhythm — distinct from both fear-driven pharmaceutical communication and generic beauty lifestyle content.',
      case1System: 'Positioning, manifesto and a 12-month production framework carried through posts, carousels, Reels, scripts and B-roll assets.',
      case1Result: 'A repeatable content infrastructure designed to support consistent production throughout the year.',
      case2Problem: 'A distinctive product, a founding history and an established customer base — but no coherent content identity.',
      case2Idea: 'Turn the brand’s city and origin into an ownable narrative asset.',
      case2World: 'A cultural content world built through the character of the city, bold hooks, brand visuals and multilingual storytelling.',
      case2System: 'A repeatable editorial rhythm carried through Reels, carousels, brand visuals and cultural storytelling across languages.',
      case2Result: 'A sustainable accessories brand with its own recognisable cultural identity and repeatable editorial rhythm.',
      case3Problem: 'A familiar nature-and-softness aesthetic without a distinctive narrative world.',
      case3Idea: 'Turn a familiar aesthetic into an emotional world of its own.',
      case3World: 'Nature and softness became a deliberate seasonal narrative around the product, expressed through editorial visuals and story-led content.',
      case3System: 'A seasonal content framework carried through editorial visuals, carousels, Reels and storytelling.',
      case3Result: 'Generic aesthetic → own narrative → repeatable visual and story system.',
      metaTitle: 'Ekaterina Novitskaia — Brand Content Strategy & Creative Direction',
      metaDescription: 'Brand content strategy, creative direction and content systems for brands that want a distinctive point of view and a repeatable way to express it.',
      skip: 'Skip to content', menu: 'Menu', close: 'Close',
      navExpertise: 'Expertise', navWork: 'Work', navProcess: 'Process', navServices: 'Services', navContact: 'Contact',
      heroEyebrow: 'Brand Content Strategy · Creative Direction · Content Systems',
      heroHeadline: '<em>I find the idea hiding inside a brand</em> — then build the content system around it.',
      heroCopy: 'Strategy, creative direction and content systems for brands that don’t want to look like everyone else.',
      heroPrimary: 'Tell me about your brand', heroSecondary: 'View selected work', heroSignature: 'Ekaterina Novitskaia · Europe', heroAlt: 'Ekaterina Novitskaia, brand content strategist and creative director',
      proofHeading: 'Content systems built for real brands',
      metricPlanned: 'posts planned in a 12-month content system', metricHooks: 'hooks developed', metricFormats: 'evergreen content formats', metricLanguages: 'languages · RU · EN · ES · IT · BY',
      expertiseLabel: 'Expertise', expertiseTitle: 'From idea to a world people can recognise.', expertiseIntro: 'I find the territory that belongs to the brand, give it a visual and verbal language, then build a system that keeps that idea alive.',
      cap1Title: 'Brand Content Strategy', cap1Lead: 'Find the territory.', cap1Copy: 'I look at the category, the competitors and the culture around the brand — and find the space that feels unmistakably yours.', cap1Terms: 'Competitor & cultural research · Positioning · Audience · Brand narrative · Content pillars · Tone of voice · Visual direction · Content architecture',
      cap2Title: 'Creative Direction', cap2Lead: 'Give the idea a world.', cap2Copy: 'A good idea needs more than a caption. It needs a visual language, a rhythm, a little tension — and sometimes a strange red chair.', cap2Terms: 'Visual concepts · Art direction · Campaign concepts · Photography direction · AI visual development · Reels concepts · Hooks & copy direction · Mood & visual references',
      cap3Title: 'Content System', cap3Lead: 'Make the good idea last longer than Tuesday.', cap3Copy: 'One good idea shouldn’t die after Tuesday’s Instagram post. I turn it into a repeatable content system — formats, series, stories, hooks and a rhythm your team can actually use.', cap3Terms: 'Repeatable formats · Content series · Stories · Hooks · Editorial rhythm · Team-ready content architecture',
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
      aboutLabel: 'About', aboutTitle: 'I like brands with a point of view.',
      aboutRhythm1: 'The ones with a strange colour.', aboutRhythm2: 'A very specific way of speaking.', aboutRhythm3: 'A picture that makes you stop for half a second.',
      aboutDetails: 'I work between strategy and creative direction — finding what makes a brand recognisable, then turning that idea into content people can actually live with.',
      aboutExperience: 'I’ve built content systems for beauty, fashion, lifestyle and consumer brands across Europe.',
      aboutMethod1: 'Strategy when it needs thinking.', aboutMethod2: 'Creative direction when it needs nerve.', aboutMethod3: 'Systems when the good idea needs to survive Monday morning.',
      aboutCredential: 'At House of Sustainable Brands in Hamburg, I worked across strategy and production for digital-native consumer brands — from competitor intelligence and positioning to annual content systems and finished creative assets.',
      cred1Title: 'European brand work', cred1Copy: 'Beauty, fashion, lifestyle and consumer brands across European markets', cred2Title: 'Strategy + creative', cred2Copy: 'From brand territory and narrative to visual direction and content systems', cred3Title: 'Built for collaboration', cred3Copy: 'Remote, structured and comfortable for founders and small teams',
      aboutLanguages: 'Working across Russian, English, Spanish, Italian and Belarusian.',
      galleryLabel: 'Additional creative work', galleryTitle: 'More selected creative work.', galleryIntro: 'A broader archive of visual concepts, carousels and production experiments. The business and storytelling task stays primary; tools are supporting metadata.',
      filterAll: 'All', filterHaircare: 'Hair care', filterSunglasses: 'Sunglasses', filterLifestyle: 'Lifestyle', filterPhoto: 'Photo', filterVideo: 'Video',
      contactLabel: 'Start a project', contactTitle: 'Your brand already has a story. <em>Let’s build the system that turns it into consistent content.</em>', contactSupport: 'Tell me what you’re building, where your content is getting stuck and what you want to achieve.', contactButton: 'Start your project',
      footer: 'Content Systems · Short-form Production · Europe', lightboxClose: 'Close media', previous: 'Previous media', next: 'Next media'
    },
    ru: {
      thinkingLabel: 'Как я думаю',
      thinkingOpening: 'Бренду не всегда нужна ещё одна кампания.',
      thinkingIdea: 'Иногда ему нужна <em>одна хорошая идея</em>.',
      thinkingObservation: 'Цвет. · Фраза. · Повторяющийся образ. · Что-нибудь немного странное.',
      thinkingTransition: 'А потом этой идее нужно дать пространство для жизни.',
      thinkingApplications: 'ПОСТ · REEL · КАМПАНИЯ · ИСТОРИЯ · А ПОТОМ ЕЩЁ ОДНА',
      thinkingConclusion: 'Так контент перестаёт быть кучей публикаций<br>и начинает становиться <em>целым миром</em>.',
      thinkingSupport: 'Задача не в том, чтобы делать больше контента. Задача — найти то, что стоит повторять.',
      problem: 'Проблема', idea: 'Идея', world: 'Мир', result: 'Результат',
      case1Problem: 'У бренда был клинически обоснованный продукт и десятилетия исследований, но вместо разрозненных публикаций требовалась масштабируемая система коммуникации.',
      case1Idea: 'Более спокойный язык авторитета.',
      case1World: 'Научная убедительность — через спокойный человеческий язык и сдержанный визуальный ритм, в стороне и от запугивания фармбрендов, и от типичного beauty/lifestyle контента.',
      case1System: 'Позиционирование, манифест и производственная система на 12 месяцев — с постами, каруселями, Reels, сценариями и B-roll материалами.',
      case1Result: 'Повторяемая контент-инфраструктура для последовательного производства в течение всего года.',
      case2Problem: 'Выразительный продукт, история основания и большая клиентская база — но без цельной контент-идентичности.',
      case2Idea: 'Превратить город и происхождение бренда в собственный нарративный актив.',
      case2World: 'Культурный контент-мир, построенный на характере города, выразительных хуках, визуалах бренда и многоязычном сторителлинге.',
      case2System: 'Повторяемый редакционный ритм для Reels, каруселей, визуалов бренда и культурного сторителлинга на нескольких языках.',
      case2Result: 'У бренда экологичных аксессуаров появилась узнаваемая культурная идентичность и повторяемый редакционный ритм.',
      case3Problem: 'Знакомая эстетика природы и мягкости без собственного нарративного мира.',
      case3Idea: 'Превратить знакомую эстетику в собственный эмоциональный мир.',
      case3World: 'Природа и мягкость стали осознанным сезонным нарративом вокруг продукта, выраженным через редакционные визуалы и сюжетный контент.',
      case3System: 'Сезонная контент-система для редакционных визуалов, каруселей, Reels и сторителлинга.',
      case3Result: 'Типовая эстетика → собственный нарратив → повторяемая визуальная и сюжетная система.',
      metaTitle: 'Екатерина Новицкая — стратегия бренд-контента и креативное руководство', metaDescription: 'Стратегия бренд-контента, креативное руководство и контент-системы для брендов, которым нужны собственный взгляд и способ последовательно его выражать.',
      skip: 'Перейти к содержанию', menu: 'Меню', close: 'Закрыть', navExpertise: 'Экспертиза', navWork: 'Работы', navProcess: 'Процесс', navServices: 'Форматы работы', navContact: 'Контакты',
      heroEyebrow: 'Стратегия бренд-контента · Креативное руководство · Контент-системы', heroHeadline: '<em>Я нахожу идею, в которой раскрывается характер бренда,</em> — и выстраиваю вокруг неё контент-систему.', heroCopy: 'Стратегия, креативное руководство и контент-системы для брендов, которые не хотят выглядеть как все остальные.', heroPrimary: 'Расскажите о своём бренде', heroSecondary: 'Смотреть избранные проекты', heroSignature: 'Екатерина Новицкая · Европа', heroAlt: 'Екатерина Новицкая, стратег по бренд-контенту и креативный директор',
      proofHeading: 'Контент-системы для реальных брендов', metricPlanned: 'публикаций спланировано в системе на 12 месяцев', metricHooks: 'хуков разработано', metricFormats: 'постоянных контент-форматов', metricLanguages: 'языков · RU · EN · ES · IT · BY',
      expertiseLabel: 'Экспертиза', expertiseTitle: 'От идеи — к миру, который узнают.', expertiseIntro: 'Я нахожу собственную территорию бренда, даю ей визуальный и вербальный язык, а затем строю систему, которая помогает этой идее жить дальше.',
      cap1Title: 'Стратегия бренд-контента', cap1Lead: 'Найти свою территорию.', cap1Copy: 'Я изучаю категорию, конкурентов и культурный контекст бренда — и нахожу пространство, которое может принадлежать только вам.', cap1Terms: 'Исследование конкурентов и культурного контекста · Позиционирование · Аудитория · Нарратив бренда · Контент-рубрики · Tone of voice · Визуальное направление · Контент-архитектура',
      cap2Title: 'Креативное руководство', cap2Lead: 'Дать идее собственный мир.', cap2Copy: 'Хорошей идее мало одной подписи. Ей нужны визуальный язык, ритм, немного напряжения — а иногда и странный красный стул.', cap2Terms: 'Визуальные концепции · Арт-дирекшн · Концепции кампаний · Руководство съёмкой · AI-разработка визуалов · Концепции Reels · Направление хуков и текстов · Мудборды и визуальные референсы',
      cap3Title: 'Контент-система', cap3Lead: 'Не дать хорошей идее умереть после вторника.', cap3Copy: 'Одна хорошая идея не должна умирать после вторничного поста в Instagram. Я превращаю её в повторяемую контент-систему — форматы, серии, истории, хуки и ритм, которым команда действительно может пользоваться.', cap3Terms: 'Повторяемые форматы · Контент-серии · Истории · Хуки · Редакционный ритм · Контент-архитектура для команды',
      workLabel: 'Избранные проекты', workTitle: 'Системы, созданные для реальных брендов.', workIntro: 'Не отдельные публикации. Каждый проект соединяет позиционирование, редакционную систему и реальное производство.',
      challenge: 'Задача', strategy: 'Стратегия', system: 'Система', execution: 'Реализация', outcome: 'Результат',
      case1Category: 'Уход за волосами · Контент-инфраструктура', case1Title: 'Контент-инфраструктура на 12 месяцев для научно обоснованного бренда ухода за волосами.', case1Challenge: 'У бренда был клинически обоснованный продукт и десятилетия исследований, но вместо разрозненных публикаций требовалась масштабируемая система коммуникации.', case1Strategy: 'Найти собственную территорию между коммуникацией фармбрендов, построенной на страхе, и типичным beauty/lifestyle контентом.', case1Execution: 'Посты, карусели, Reels, сценарии и B-roll для первых производственных циклов.', case1Outcome: 'Повторяемая контент-инфраструктура для последовательного производства в течение всего года.', case1Metric1: 'контент-концепций', case1Metric2: 'месяцев', case1Metric3: 'постоянных форматов',
      case2Category: 'Экологичная оптика · Система хуков и контента', case2Title: 'Как превратить продуктовый бренд в культурный контент-мир.', case2Challenge: 'Выразительный продукт, история основания и большая клиентская база — но без цельной контент-идентичности.', case2Strategy: 'Превратить город и происхождение бренда из географического факта в собственный нарративный актив.', case2Execution: 'Reels, карусели, визуалы бренда и культурный сторителлинг на нескольких языках.', case2Outcome: 'У бренда экологичных аксессуаров появилась узнаваемая культурная идентичность и повторяемый редакционный ритм.', case2Metric1: 'хуков разработано',
      case3Category: 'Slow fashion · Культурный сторителлинг', case3Title: 'От эстетичного контента — к миру, который узнают.', case3Challenge: 'Знакомая эстетика природы и мягкости без собственного нарративного мира.', case3Strategy: 'Создать эмоциональную вселенную вокруг продукта и превратить её в систему, работающую из сезона в сезон.', case3Execution: 'Редакционные визуалы, карусели, Reels и сезонный сторителлинг.', case3Outcome: 'Типовая эстетика → собственный нарратив → повторяемая визуальная и сюжетная система.', testimonial: '«Поставленные задачи выполнялись неизменно в полном соответствии с нашими ожиданиями».',
      reelsLabel: 'Reels и short-form', reelsTitle: 'Стратегия, которую видно в движении.', reelsIntro: 'Избранные short-form работы для ухода за волосами, экологичной оптики и slow fashion — от хука и сценария до креативного руководства и монтажа.', reelHair1: 'Наука человеческим языком', reelHair2: 'Ритуал продукта', reelOptics1: 'Культурный хук', reelOptics2: 'Мир продукта', reelFashion1: 'Сезонная история', reelFashion2: 'Эмоциональный мир бренда', reelRoleFull: 'Хук · Сценарий · Руководство · Монтаж', reelRoleDirection: 'Концепция · Руководство · Монтаж',
      processLabel: 'Как я работаю', processTitle: 'От сути бренда к повторяемому производству.', processIntro: 'Четыре сфокусированных этапа: сначала ясность, затем контент, который команда действительно сможет выпускать регулярно.', process1Title: 'Исследование', process1Copy: 'Бренд, продукт, аудитория и конкурентная среда.', process2Title: 'Позиционирование', process2Copy: 'Нарративная территория, рубрики, голос и правила коммуникации.', process3Title: 'Система', process3Copy: 'Форматы, хуки, календари, брифы и производственный процесс.', process4Title: 'Продакшн', process4Copy: 'Reels, карусели, сценарии, B-roll и постоянное улучшение.',
      fitLabel: 'С кем я работаю', fitTitle: 'Для команд, которым нужна система, а не ещё больше шума.', fit1Title: 'Основатели', fit1Copy: 'Превратить экспертизу и идеи в понятный контент-механизм.', fit2Title: 'Потребительские бренды', fit2Copy: 'Создать вокруг реального продукта узнаваемый мир.', fit3Title: 'Международные бренды', fit3Copy: 'Адаптировать единое стратегическое ядро для разных рынков.', fit4Title: 'Небольшие маркетинговые команды', fit4Copy: 'Добавить стратегическую и производственную экспертизу без агентской громоздкости.',
      servicesLabel: 'Форматы сотрудничества', servicesTitle: 'Выберите нужный уровень системы и производства.', servicesIntro: 'Каждый проект начинается со стратегической ясности. Объём работы определяется задачами бренда, команды и реального продакшна, а не меню разрозненных услуг.', offer1Title: 'Спринт по контент-системе', offer1Copy: 'Для брендов, которым нужна ясная основа до наращивания производства: позиционирование, рубрики, форматы, хуки и практическое редакционное направление.', offer1Output: 'Подходит для · Стратегической перезагрузки', offer2Title: 'Контент-система + производство', offer2Copy: 'Для брендов, которым нужна и система, и первый цикл контента: стратегия, сценарии, руководство, Reels и поддерживающие материалы.', offer2Output: 'Подходит для · Создания и запуска', offer3Title: 'Постоянный стратегический продакшн', offer3Copy: 'Для команд с рабочей базой, которым нужен постоянный старший партнёр для развития системы и регулярного производства.', offer3Output: 'Подходит для · Ежемесячной работы',
      aboutLabel: 'Обо мне', aboutTitle: 'Мне нравятся бренды с собственной точкой зрения.', aboutRhythm1: 'Те, у которых странный цвет.', aboutRhythm2: 'Очень конкретная манера говорить.', aboutRhythm3: 'Картинка, на которой взгляд задерживается хотя бы на полсекунды.', aboutDetails: 'Я работаю на стыке стратегии и креативного руководства — нахожу то, что делает бренд узнаваемым, а затем превращаю эту идею в контент, с которым действительно можно жить и работать.', aboutExperience: 'Я строила контент-системы для beauty, fashion, lifestyle и consumer-брендов по всей Европе.', aboutMethod1: 'Стратегия — когда нужно подумать.', aboutMethod2: 'Креативное руководство — когда нужна смелость.', aboutMethod3: 'Система — когда хорошей идее нужно пережить понедельник.', aboutCredential: 'В House of Sustainable Brands в Гамбурге я работала и со стратегией, и с продакшном для digital-native consumer-брендов — от анализа конкурентов и позиционирования до годовых контент-систем и готовых креативных материалов.', cred1Title: 'Работа с европейскими брендами', cred1Copy: 'Beauty-, fashion-, lifestyle- и consumer-бренды на рынках Европы', cred2Title: 'Стратегия + креатив', cred2Copy: 'От территории бренда и нарратива до визуального направления и контент-систем', cred3Title: 'Создано для сотрудничества', cred3Copy: 'Удалённо, структурированно и комфортно для основателей и небольших команд', aboutLanguages: 'Работаю на русском, английском, испанском, итальянском и белорусском языках.',
      galleryLabel: 'Дополнительные работы', galleryTitle: 'Ещё избранные творческие проекты.', galleryIntro: 'Архив визуальных концепций, каруселей и производственных экспериментов. На первом месте — бизнес-задача и история; инструменты остаются вторичными метаданными.', filterAll: 'Все', filterHaircare: 'Уход за волосами', filterSunglasses: 'Очки', filterLifestyle: 'Лайфстайл', filterPhoto: 'Фото', filterVideo: 'Видео',
      contactLabel: 'Начать проект', contactTitle: 'У вашего бренда уже есть история. <em>Давайте построим систему, которая превратит её в последовательный контент.</em>', contactSupport: 'Расскажите, что вы создаёте, где останавливается производство контента и какого результата хотите достичь.', contactButton: 'Начать проект', footer: 'Контент-системы · Short-form продакшн · Европа', lightboxClose: 'Закрыть медиа', previous: 'Предыдущее медиа', next: 'Следующее медиа'
    },
    es: {
      thinkingLabel: 'Cómo pienso',
      thinkingOpening: 'Una marca no siempre necesita otra campaña.',
      thinkingIdea: 'A veces necesita <em>una buena idea</em>.',
      thinkingObservation: 'Un color. · Una frase. · Una imagen que vuelve. · Algo ligeramente extraño.',
      thinkingTransition: 'Y entonces le das a esa idea un lugar adonde ir.',
      thinkingApplications: 'POST · REEL · CAMPAÑA · HISTORIA · Y DESPUÉS OTRA HISTORIA',
      thinkingConclusion: 'Así el contenido deja de ser un montón de publicaciones<br>y empieza a convertirse en <em>un mundo</em>.',
      thinkingSupport: 'El trabajo no consiste en crear más contenido. Consiste en encontrar algo que merezca la pena repetir.',
      problem: 'Problema', idea: 'Idea', world: 'Mundo', result: 'Resultado',
      case1Problem: 'La marca contaba con un producto respaldado clínicamente y décadas de investigación, pero necesitaba un sistema de comunicación escalable, no publicaciones aisladas.',
      case1Idea: 'Una autoridad más serena.',
      case1World: 'Credibilidad científica expresada con un lenguaje humano y calmado y un ritmo visual contenido, lejos tanto del miedo farmacéutico como del contenido beauty/lifestyle genérico.',
      case1System: 'Posicionamiento, manifiesto y un marco de producción de 12 meses aplicado a posts, carruseles, Reels, guiones y recursos B-roll.',
      case1Result: 'Una infraestructura repetible para sostener una producción constante durante todo el año.',
      case2Problem: 'Un producto distintivo, una historia fundacional y una base de clientes consolidada, pero sin una identidad de contenido coherente.',
      case2Idea: 'Convertir la ciudad y el origen de la marca en un activo narrativo propio.',
      case2World: 'Un mundo cultural de contenido construido con el carácter de la ciudad, hooks potentes, visuales de marca y storytelling multilingüe.',
      case2System: 'Un ritmo editorial repetible aplicado a Reels, carruseles, visuales de marca y storytelling cultural en varios idiomas.',
      case2Result: 'Una marca de accesorios sostenibles con identidad cultural reconocible y ritmo editorial repetible.',
      case3Problem: 'Una estética habitual de naturaleza y suavidad sin un universo narrativo propio.',
      case3Idea: 'Convertir una estética familiar en un mundo emocional propio.',
      case3World: 'La naturaleza y la suavidad se convirtieron en una narrativa estacional deliberada alrededor del producto, expresada mediante visuales editoriales y contenido narrativo.',
      case3System: 'Un sistema estacional aplicado a visuales editoriales, carruseles, Reels y storytelling.',
      case3Result: 'Estética genérica → narrativa propia → sistema visual y narrativo repetible.',
      metaTitle: 'Ekaterina Novitskaia — Estrategia de contenido de marca y dirección creativa', metaDescription: 'Estrategia de contenido de marca, dirección creativa y sistemas de contenido para marcas que buscan un punto de vista propio y una forma coherente de expresarlo una y otra vez.', skip: 'Ir al contenido', menu: 'Menú', close: 'Cerrar', navExpertise: 'Experiencia', navWork: 'Proyectos', navProcess: 'Proceso', navServices: 'Servicios', navContact: 'Contacto',
      heroEyebrow: 'Estrategia de contenido de marca · Dirección creativa · Sistemas de contenido', heroHeadline: '<em>Encuentro la idea que define el carácter de una marca</em> y construyo a su alrededor un sistema de contenido.', heroCopy: 'Estrategia, dirección creativa y sistemas de contenido para marcas que no quieren parecerse a todas las demás.', heroPrimary: 'Cuéntame sobre tu marca', heroSecondary: 'Ver proyectos seleccionados', heroSignature: 'Ekaterina Novitskaia · Europa', heroAlt: 'Ekaterina Novitskaia, estratega de contenido de marca y directora creativa',
      proofHeading: 'Sistemas de contenido creados para marcas reales', metricPlanned: 'publicaciones planificadas en un sistema de 12 meses', metricHooks: 'hooks desarrollados', metricFormats: 'formatos de contenido evergreen', metricLanguages: 'idiomas · RU · EN · ES · IT · BY',
      expertiseLabel: 'Experiencia', expertiseTitle: 'De una idea a un mundo que la gente reconoce.', expertiseIntro: 'Encuentro el territorio que pertenece a la marca, le doy un lenguaje visual y verbal y después construyo un sistema que mantiene viva esa idea.', cap1Title: 'Estrategia de contenido de marca', cap1Lead: 'Encontrar un territorio propio.', cap1Copy: 'Observo la categoría, la competencia y la cultura que rodea a la marca para encontrar un espacio que se sienta inequívocamente suyo.', cap1Terms: 'Investigación competitiva y cultural · Posicionamiento · Audiencia · Narrativa de marca · Pilares de contenido · Tono de voz · Dirección visual · Arquitectura de contenido', cap2Title: 'Dirección creativa', cap2Lead: 'Darle un mundo a la idea.', cap2Copy: 'Una buena idea necesita más que un pie de foto. Necesita un lenguaje visual, un ritmo, un poco de tensión y, a veces, una extraña silla roja.', cap2Terms: 'Conceptos visuales · Dirección de arte · Conceptos de campaña · Dirección de fotografía · Desarrollo visual con IA · Conceptos para Reels · Dirección de hooks y copy · Mood y referencias visuales', cap3Title: 'Sistema de contenido', cap3Lead: 'Hacer que una buena idea sobreviva al martes.', cap3Copy: 'Una buena idea no debería morir después del post del martes en Instagram. La convierto en un sistema de contenido repetible: formatos, series, historias, hooks y un ritmo que tu equipo pueda usar de verdad.', cap3Terms: 'Formatos repetibles · Series de contenido · Historias · Hooks · Ritmo editorial · Arquitectura de contenido para equipos',
      workLabel: 'Proyectos seleccionados', workTitle: 'Sistemas creados para marcas reales.', workIntro: 'No son piezas aisladas. Cada proyecto conecta posicionamiento, sistema editorial y producción práctica.', challenge: 'Reto', strategy: 'Estrategia', system: 'Sistema', execution: 'Ejecución', outcome: 'Resultado', case1Category: 'Cuidado capilar · Infraestructura de contenido', case1Title: 'Infraestructura de contenido de 12 meses para una marca capilar con base científica.', case1Challenge: 'La marca contaba con un producto respaldado clínicamente y décadas de investigación, pero necesitaba un sistema de comunicación escalable, no publicaciones aisladas.', case1Strategy: 'Encontrar un territorio propio entre la comunicación farmacéutica basada en el miedo y el contenido beauty/lifestyle genérico.', case1Execution: 'Posts, carruseles, Reels, guiones y recursos B-roll para los primeros ciclos de producción.', case1Outcome: 'Una infraestructura repetible para sostener una producción constante durante todo el año.', case1Metric1: 'conceptos de contenido', case1Metric2: 'meses', case1Metric3: 'formatos evergreen', case2Category: 'Óptica sostenible · Sistema de hooks y contenido', case2Title: 'Convertir una marca de producto en un mundo cultural de contenido.', case2Challenge: 'Un producto distintivo, una historia fundacional y una base de clientes consolidada, pero sin una identidad de contenido coherente.', case2Strategy: 'Convertir la ciudad y el origen de la marca en un activo narrativo propio, no en un simple dato geográfico.', case2Execution: 'Reels, carruseles, visuales de marca y storytelling cultural en varios idiomas.', case2Outcome: 'Una marca de accesorios sostenibles con identidad cultural reconocible y ritmo editorial repetible.', case2Metric1: 'hooks desarrollados', case3Category: 'Slow fashion · Storytelling cultural', case3Title: 'Del contenido estético a un mundo reconocible.', case3Challenge: 'Una estética habitual de naturaleza y suavidad sin un universo narrativo propio.', case3Strategy: 'Construir un universo emocional alrededor del producto y hacerlo repetible entre temporadas.', case3Execution: 'Visuales editoriales, carruseles, Reels y storytelling estacional.', case3Outcome: 'Estética genérica → narrativa propia → sistema visual y narrativo repetible.', testimonial: '«Las tareas asignadas se completaron de manera consistente a nuestra entera satisfacción».',
      reelsLabel: 'Reels y short-form', reelsTitle: 'Una estrategia que se ve en movimiento.', reelsIntro: 'Selección de trabajos short-form para cuidado capilar, óptica sostenible y slow fashion: del hook y el guion a la dirección creativa y la edición.', reelHair1: 'La ciencia, en lenguaje humano', reelHair2: 'Ritual de producto', reelOptics1: 'Hook cultural', reelOptics2: 'Mundo de producto', reelFashion1: 'Historia estacional', reelFashion2: 'Universo emocional de marca', reelRoleFull: 'Hook · Guion · Dirección · Edición', reelRoleDirection: 'Concepto · Dirección · Edición',
      processLabel: 'Cómo trabajo', processTitle: 'De la verdad de marca a una producción repetible.', processIntro: 'Un proceso de cuatro etapas: primero claridad; después, contenido que el equipo realmente puede sostener.', process1Title: 'Descubrir', process1Copy: 'Marca, producto, audiencia y panorama competitivo.', process2Title: 'Posicionar', process2Copy: 'Territorio narrativo, pilares, voz y reglas de comunicación.', process3Title: 'Sistematizar', process3Copy: 'Formatos, hooks, calendarios, briefs y flujo de producción.', process4Title: 'Producir', process4Copy: 'Reels, carruseles, guiones, B-roll y mejora continua.',
      fitLabel: 'Con quién trabajo', fitTitle: 'Para equipos que necesitan un sistema, no más ruido.', fit1Title: 'Founders', fit1Copy: 'Convertir experiencia e ideas en un motor de contenido claro.', fit2Title: 'Marcas de consumo', fit2Copy: 'Crear un mundo distintivo alrededor de un producto real.', fit3Title: 'Marcas internacionales', fit3Copy: 'Adaptar un único núcleo estratégico a varios mercados.', fit4Title: 'Equipos pequeños de marketing', fit4Copy: 'Añadir capacidad estratégica y productiva senior sin la estructura de una agencia.',
      servicesLabel: 'Formas de trabajar juntos', servicesTitle: 'Elige el nivel de sistema y producción que necesitas.', servicesIntro: 'Cada colaboración empieza con claridad estratégica. El alcance responde a la marca, al equipo y a la realidad de producción, no a un menú de entregables aislados.', offer1Title: 'Sprint de sistema de contenido', offer1Copy: 'Para marcas que necesitan una base clara antes de producir más: posicionamiento, pilares, formatos, hooks y dirección editorial aplicable.', offer1Output: 'Ideal para · Reinicio estratégico', offer2Title: 'Sistema de contenido + producción', offer2Copy: 'Para marcas que quieren construir el sistema y el primer ciclo juntos: estrategia, guiones, dirección, Reels y recursos de apoyo.', offer2Output: 'Ideal para · Crear y lanzar', offer3Title: 'Producción estratégica continua', offer3Copy: 'Para equipos con tracción que necesitan una colaboración senior constante para evolucionar el sistema y mantener la producción.', offer3Output: 'Ideal para · Continuidad mensual',
      aboutLabel: 'Sobre mí', aboutTitle: 'Me gustan las marcas con un punto de vista propio.', aboutRhythm1: 'Las que tienen un color extraño.', aboutRhythm2: 'Una forma muy concreta de hablar.', aboutRhythm3: 'Una imagen que te hace detenerte medio segundo.', aboutDetails: 'Trabajo entre la estrategia y la dirección creativa: encuentro lo que hace reconocible a una marca y convierto esa idea en contenido con el que de verdad se puede vivir y trabajar.', aboutExperience: 'He creado sistemas de contenido para marcas de belleza, moda, lifestyle y consumo en toda Europa.', aboutMethod1: 'Estrategia cuando hace falta pensar.', aboutMethod2: 'Dirección creativa cuando hace falta valor.', aboutMethod3: 'Sistemas cuando una buena idea necesita sobrevivir al lunes por la mañana.', aboutCredential: 'En House of Sustainable Brands, en Hamburgo, trabajé en estrategia y producción para marcas de consumo nativas digitales: desde inteligencia competitiva y posicionamiento hasta sistemas anuales de contenido y piezas creativas terminadas.', cred1Title: 'Trabajo con marcas europeas', cred1Copy: 'Marcas de belleza, moda, lifestyle y consumo en mercados europeos', cred2Title: 'Estrategia + creatividad', cred2Copy: 'Del territorio de marca y la narrativa a la dirección visual y los sistemas de contenido', cred3Title: 'Diseñado para colaborar', cred3Copy: 'Un proceso remoto, estructurado y cómodo para founders y equipos pequeños', aboutLanguages: 'Trabajo en ruso, inglés, español, italiano y bielorruso.',
      galleryLabel: 'Trabajo creativo adicional', galleryTitle: 'Más trabajo creativo seleccionado.', galleryIntro: 'Un archivo más amplio de conceptos visuales, carruseles y experimentos de producción. La tarea de negocio y la historia van primero; las herramientas son metadatos secundarios.', filterAll: 'Todo', filterHaircare: 'Cuidado capilar', filterSunglasses: 'Gafas', filterLifestyle: 'Lifestyle', filterPhoto: 'Foto', filterVideo: 'Vídeo', contactLabel: 'Iniciar un proyecto', contactTitle: 'Tu marca ya tiene una historia. <em>Construyamos el sistema que la convierta en contenido constante.</em>', contactSupport: 'Cuéntame qué estás creando, dónde se atasca el contenido y qué quieres conseguir.', contactButton: 'Iniciar proyecto', footer: 'Sistemas de contenido · Producción short-form · Europa', lightboxClose: 'Cerrar contenido', previous: 'Contenido anterior', next: 'Contenido siguiente'
    },
    it: {
      thinkingLabel: 'Come penso',
      thinkingOpening: 'Un brand non ha sempre bisogno di un’altra campagna.',
      thinkingIdea: 'A volte ha bisogno di <em>una buona idea</em>.',
      thinkingObservation: 'Un colore. · Una frase. · Un’immagine che ritorna. · Qualcosa di leggermente strano.',
      thinkingTransition: 'Poi dai a quell’idea un posto dove andare.',
      thinkingApplications: 'POST · REEL · CAMPAGNA · STORIA · E POI UN’ALTRA STORIA',
      thinkingConclusion: 'È così che i contenuti smettono di essere un mucchio di post<br>e cominciano a diventare <em>un mondo</em>.',
      thinkingSupport: 'Il lavoro non è creare più contenuti. È trovare qualcosa che valga la pena ripetere.',
      problem: 'Problema', idea: 'Idea', world: 'Mondo', result: 'Risultato',
      case1Problem: 'Il brand aveva un prodotto supportato clinicamente e decenni di ricerca, ma serviva un sistema di comunicazione scalabile invece di post isolati.',
      case1Idea: 'Un’autorevolezza più quieta.',
      case1World: 'Credibilità scientifica espressa con un linguaggio calmo e umano e un ritmo visivo misurato, lontano sia dalla paura farmaceutica sia dai contenuti beauty/lifestyle generici.',
      case1System: 'Posizionamento, manifesto e un framework produttivo di 12 mesi tradotto in post, caroselli, Reels, script e asset B-roll.',
      case1Result: 'Un’infrastruttura ripetibile, progettata per sostenere una produzione coerente durante tutto l’anno.',
      case2Problem: 'Un prodotto distintivo, una storia fondativa e una base clienti consolidata, ma nessuna identità editoriale coerente.',
      case2Idea: 'Trasformare la città e l’origine del brand in un asset narrativo proprietario.',
      case2World: 'Un mondo culturale costruito attraverso il carattere della città, hook forti, visual di brand e storytelling multilingue.',
      case2System: 'Un ritmo editoriale ripetibile tradotto in Reels, caroselli, visual di brand e storytelling culturale in più lingue.',
      case2Result: 'Un brand di accessori sostenibili con una propria identità culturale riconoscibile e un ritmo editoriale ripetibile.',
      case3Problem: 'Un’estetica generica fatta di natura e morbidezza, senza un universo narrativo distintivo.',
      case3Idea: 'Trasformare un’estetica familiare in un mondo emotivo tutto suo.',
      case3World: 'Natura e morbidezza sono diventate una narrazione stagionale intenzionale attorno al prodotto, espressa attraverso visual editoriali e contenuti narrativi.',
      case3System: 'Un sistema stagionale tradotto in visual editoriali, caroselli, Reels e storytelling.',
      case3Result: 'Estetica generica → narrazione propria → sistema visivo e narrativo ripetibile.',
      metaTitle: 'Ekaterina Novitskaia — Strategia dei contenuti di brand e direzione creativa', metaDescription: 'Strategia dei contenuti di brand, direzione creativa e sistemi di contenuto per brand che vogliono un punto di vista distintivo e un modo coerente per esprimerlo nel tempo.', skip: 'Vai al contenuto', menu: 'Menu', close: 'Chiudi', navExpertise: 'Competenze', navWork: 'Progetti', navProcess: 'Processo', navServices: 'Servizi', navContact: 'Contatti',
      heroEyebrow: 'Strategia dei contenuti di brand · Direzione creativa · Sistemi di contenuto', heroHeadline: '<em>Trovo l’idea che definisce il carattere di un brand</em> — poi costruisco il sistema di contenuto intorno a quell’idea.', heroCopy: 'Strategia, direzione creativa e sistemi di contenuto per brand che non vogliono assomigliare a tutti gli altri.', heroPrimary: 'Raccontami il tuo brand', heroSecondary: 'Vedi i progetti selezionati', heroSignature: 'Ekaterina Novitskaia · Europa', heroAlt: 'Ekaterina Novitskaia, brand content strategist e creative director',
      proofHeading: 'Sistemi di contenuto creati per brand reali', metricPlanned: 'post pianificati in un sistema di 12 mesi', metricHooks: 'hook sviluppati', metricFormats: 'formati di contenuto evergreen', metricLanguages: 'lingue · RU · EN · ES · IT · BY', expertiseLabel: 'Competenze', expertiseTitle: 'Da un’idea a un mondo che le persone riconoscono.', expertiseIntro: 'Trovo il territorio che appartiene al brand, gli do un linguaggio visivo e verbale, poi costruisco un sistema che mantiene viva quell’idea.', cap1Title: 'Strategia dei contenuti di brand', cap1Lead: 'Trovare il proprio territorio.', cap1Copy: 'Osservo la categoria, i concorrenti e la cultura che circonda il brand per trovare uno spazio che sembri inequivocabilmente suo.', cap1Terms: 'Ricerca competitiva e culturale · Posizionamento · Pubblico · Narrazione di brand · Content pillar · Tone of voice · Direzione visiva · Architettura dei contenuti', cap2Title: 'Direzione creativa', cap2Lead: 'Dare all’idea un mondo tutto suo.', cap2Copy: 'Una buona idea ha bisogno di più di una caption. Le servono un linguaggio visivo, un ritmo, un po’ di tensione — e a volte una strana sedia rossa.', cap2Terms: 'Concept visivi · Art direction · Concept di campagna · Direzione fotografica · Sviluppo visivo con AI · Concept per Reels · Direzione di hook e copy · Mood e riferimenti visivi', cap3Title: 'Sistema di contenuto', cap3Lead: 'Far sopravvivere una buona idea al martedì.', cap3Copy: 'Una buona idea non dovrebbe morire dopo il post del martedì su Instagram. La trasformo in un sistema di contenuto ripetibile: formati, serie, storie, hook e un ritmo che il tuo team possa usare davvero.', cap3Terms: 'Formati ripetibili · Serie di contenuti · Storie · Hook · Ritmo editoriale · Architettura dei contenuti per il team',
      workLabel: 'Progetti selezionati', workTitle: 'Sistemi creati per brand reali.', workIntro: 'Non singoli contenuti. Ogni progetto collega posizionamento, sistema editoriale e produzione concreta.', challenge: 'Sfida', strategy: 'Strategia', system: 'Sistema', execution: 'Esecuzione', outcome: 'Risultato', case1Category: 'Hair care · Infrastruttura di contenuto', case1Title: 'Un’infrastruttura di contenuto di 12 mesi per un brand hair-care basato sulla scienza.', case1Challenge: 'Il brand aveva un prodotto supportato clinicamente e decenni di ricerca, ma serviva un sistema di comunicazione scalabile invece di post isolati.', case1Strategy: 'Trovare un territorio distintivo tra la comunicazione farmaceutica basata sulla paura e i contenuti beauty/lifestyle generici.', case1Execution: 'Post, caroselli, Reels, script e risorse B-roll per i primi cicli di produzione.', case1Outcome: 'Un’infrastruttura ripetibile, progettata per sostenere una produzione coerente durante tutto l’anno.', case1Metric1: 'concept di contenuto', case1Metric2: 'mesi', case1Metric3: 'formati evergreen', case2Category: 'Ottica sostenibile · Sistema di hook e contenuti', case2Title: 'Trasformare un brand di prodotto in un mondo culturale.', case2Challenge: 'Un prodotto distintivo, una storia fondativa e una base clienti consolidata, ma nessuna identità editoriale coerente.', case2Strategy: 'Trasformare la città e l’origine del brand da dato geografico ad asset narrativo proprietario.', case2Execution: 'Reels, caroselli, visual di brand e storytelling culturale in più lingue.', case2Outcome: 'Un brand di accessori sostenibili con una propria identità culturale riconoscibile e un ritmo editoriale ripetibile.', case2Metric1: 'hook sviluppati', case3Category: 'Slow fashion · Storytelling culturale', case3Title: 'Da contenuti estetici a un mondo riconoscibile.', case3Challenge: 'Un’estetica generica fatta di natura e morbidezza, senza un universo narrativo distintivo.', case3Strategy: 'Costruire un universo emotivo attorno al prodotto e renderlo ripetibile stagione dopo stagione.', case3Execution: 'Visual editoriali, caroselli, Reels e storytelling stagionale.', case3Outcome: 'Estetica generica → narrazione propria → sistema visivo e narrativo ripetibile.', testimonial: '«Le attività assegnate sono state completate costantemente con nostra piena soddisfazione».',
      reelsLabel: 'Reels e short-form', reelsTitle: 'Una strategia che si vede in movimento.', reelsIntro: 'Una selezione di lavori short-form per hair care, ottica sostenibile e slow fashion: dall’hook e dallo script alla direzione creativa e al montaggio.', reelHair1: 'La scienza in modo umano', reelHair2: 'Rituale di prodotto', reelOptics1: 'Hook culturale', reelOptics2: 'Mondo di prodotto', reelFashion1: 'Storia stagionale', reelFashion2: 'World-building emotivo', reelRoleFull: 'Hook · Script · Direzione · Montaggio', reelRoleDirection: 'Concept · Direzione · Montaggio',
      processLabel: 'Come lavoro', processTitle: 'Dalla verità del brand a una produzione ripetibile.', processIntro: 'Quattro fasi mirate: prima la chiarezza, poi contenuti che il team può davvero sostenere.', process1Title: 'Scoprire', process1Copy: 'Brand, prodotto, pubblico e panorama competitivo.', process2Title: 'Posizionare', process2Copy: 'Territorio narrativo, pillar, voce e regole di comunicazione.', process3Title: 'Sistematizzare', process3Copy: 'Formati, hook, calendari, brief e flusso di produzione.', process4Title: 'Produrre', process4Copy: 'Reels, caroselli, script, B-roll e miglioramento continuo.', fitLabel: 'Con chi lavoro', fitTitle: 'Per team che hanno bisogno di un sistema, non di altro rumore.', fit1Title: 'Founder', fit1Copy: 'Trasformare competenze e idee in un motore di contenuti chiaro.', fit2Title: 'Brand consumer', fit2Copy: 'Costruire un mondo distintivo attorno a un prodotto reale.', fit3Title: 'Brand internazionali', fit3Copy: 'Adattare un unico nucleo strategico a mercati diversi.', fit4Title: 'Piccoli team marketing', fit4Copy: 'Aggiungere capacità strategica e produttiva senior senza la struttura di un’agenzia.',
      servicesLabel: 'Come lavorare insieme', servicesTitle: 'Scegli il livello di sistema e produzione che ti serve.', servicesIntro: 'Ogni collaborazione parte dalla chiarezza strategica. Il perimetro segue il brand, il team e la realtà produttiva, non un menu di deliverable scollegati.', offer1Title: 'Content System Sprint', offer1Copy: 'Per brand che hanno bisogno di basi chiare prima di produrre di più: posizionamento, pillar, formati, hook e direzione editoriale operativa.', offer1Output: 'Ideale per · Reset strategico', offer2Title: 'Sistema di contenuto + produzione', offer2Copy: 'Per brand che vogliono costruire insieme il sistema e il primo ciclo: strategia, script, direzione, Reels e asset di supporto.', offer2Output: 'Ideale per · Costruzione e lancio', offer3Title: 'Produzione strategica continuativa', offer3Copy: 'Per team già avviati che cercano un partner senior costante per evolvere il sistema e mantenere la produzione.', offer3Output: 'Ideale per · Continuità mensile',
      aboutLabel: 'Chi sono', aboutTitle: 'Mi piacciono i brand con un punto di vista.', aboutRhythm1: 'Quelli con un colore strano.', aboutRhythm2: 'Un modo molto preciso di parlare.', aboutRhythm3: 'Un’immagine che ti fa fermare per mezzo secondo.', aboutDetails: 'Lavoro tra strategia e direzione creativa: trovo ciò che rende un brand riconoscibile e trasformo quell’idea in contenuti con cui le persone possano davvero convivere.', aboutExperience: 'Ho costruito sistemi di contenuti per brand beauty, fashion, lifestyle e consumer in tutta Europa.', aboutMethod1: 'Strategia, quando serve pensare.', aboutMethod2: 'Direzione creativa, quando serve coraggio.', aboutMethod3: 'Sistemi, quando una buona idea deve sopravvivere al lunedì mattina.', aboutCredential: 'Da House of Sustainable Brands ad Amburgo, ho lavorato tra strategia e produzione per brand consumer digital-native: dall’analisi competitiva e dal posizionamento ai sistemi di contenuti annuali e agli asset creativi finali.', cred1Title: 'Esperienza con brand europei', cred1Copy: 'Brand beauty, fashion, lifestyle e consumer nei mercati europei', cred2Title: 'Strategia + creatività', cred2Copy: 'Dal territorio e dalla narrativa del brand alla direzione visiva e ai sistemi di contenuti', cred3Title: 'Pensato per collaborare', cred3Copy: 'Un processo remoto, strutturato e comodo per founder e piccoli team', aboutLanguages: 'Lavoro in russo, inglese, spagnolo, italiano e bielorusso.', galleryLabel: 'Altri lavori creativi', galleryTitle: 'Altri lavori creativi selezionati.', galleryIntro: 'Un archivio più ampio di concept visivi, caroselli ed esperimenti produttivi. La sfida di business e la storia restano centrali; gli strumenti sono metadati secondari.', filterAll: 'Tutti', filterHaircare: 'Hair care', filterSunglasses: 'Occhiali', filterLifestyle: 'Lifestyle', filterPhoto: 'Foto', filterVideo: 'Video', contactLabel: 'Avvia un progetto', contactTitle: 'Il tuo brand ha già una storia. <em>Costruiamo il sistema che la trasformi in contenuti coerenti.</em>', contactSupport: 'Raccontami cosa stai costruendo, dove si blocca il contenuto e quale risultato vuoi ottenere.', contactButton: 'Avvia il progetto', footer: 'Sistemi di contenuto · Produzione short-form · Europa', lightboxClose: 'Chiudi media', previous: 'Media precedente', next: 'Media successivo'
    },
    by: {
      thinkingLabel: 'Як я думаю',
      thinkingOpening: 'Брэнду не заўсёды патрэбная яшчэ адна кампанія.',
      thinkingIdea: 'Часам яму патрэбная <em>адна добрая ідэя</em>.',
      thinkingObservation: 'Колер. · Фраза. · Вобраз, які паўтараецца. · Штосьці крыху дзіўнае.',
      thinkingTransition: 'А потым гэтай ідэі трэба даць прастору для жыцця.',
      thinkingApplications: 'ДОПІС · REEL · КАМПАНІЯ · ГІСТОРЫЯ · А ПОТЫМ ЯШЧЭ АДНА',
      thinkingConclusion: 'Так кантэнт перастае быць кучай публікацый<br>і пачынае станавіцца <em>цэлым светам</em>.',
      thinkingSupport: 'Задача не ў тым, каб рабіць больш кантэнту. Задача — знайсці тое, што варта паўтараць.',
      problem: 'Праблема', idea: 'Ідэя', world: 'Свет', result: 'Вынік',
      case1Problem: 'У брэнда быў клінічна абгрунтаваны прадукт і дзесяцігоддзі даследаванняў, але замест асобных публікацый патрэбна была маштабаваная сістэма камунікацыі.',
      case1Idea: 'Больш спакойная мова аўтарытэту.',
      case1World: 'Навуковая пераканаўчасць — праз спакойную чалавечую мову і стрыманы візуальны рытм, удалечыні і ад запалохвання фармбрэндаў, і ад тыповага beauty/lifestyle кантэнту.',
      case1System: 'Пазіцыянаванне, маніфест і вытворчая сістэма на 12 месяцаў — з допісамі, каруселямі, Reels, сцэнарамі і B-roll матэрыяламі.',
      case1Result: 'Паўтаральная кантэнт-інфраструктура для паслядоўнай вытворчасці цягам усяго года.',
      case2Problem: 'Выразны прадукт, гісторыя заснавання і вялікая кліенцкая база — але без цэласнай кантэнт-ідэнтычнасці.',
      case2Idea: 'Ператварыць горад і паходжанне брэнда ва ўласны наратыўны актыў.',
      case2World: 'Культурны кантэнт-свет, пабудаваны на характары горада, выразных хуках, візуалах брэнда і шматмоўным сторытэлінгу.',
      case2System: 'Паўтаральны рэдакцыйны рытм для Reels, каруселяў, візуалаў брэнда і культурнага сторытэлінгу на некалькіх мовах.',
      case2Result: 'Брэнд устойлівых аксесуараў атрымаў пазнавальную культурную ідэнтычнасць і паўтаральны рэдакцыйны рытм.',
      case3Problem: 'Знаёмая эстэтыка прыроды і мяккасці без уласнага наратыўнага свету.',
      case3Idea: 'Ператварыць знаёмую эстэтыку ва ўласны эмацыйны свет.',
      case3World: 'Прырода і мяккасць сталі асэнсаваным сезонным наратывам вакол прадукту, выказаным праз рэдакцыйныя візуалы і сюжэтны кантэнт.',
      case3System: 'Сезонная кантэнт-сістэма для рэдакцыйных візуалаў, каруселяў, Reels і сторытэлінгу.',
      case3Result: 'Тыповая эстэтыка → уласны наратыў → паўтаральная візуальная і сюжэтная сістэма.',
      metaTitle: 'Кацярына Навіцкая — стратэгія брэнд-кантэнту і крэатыўнае кіраўніцтва', metaDescription: 'Стратэгія брэнд-кантэнту, крэатыўнае кіраўніцтва і кантэнт-сістэмы для брэндаў, якім патрэбны ўласны погляд і спосаб паслядоўна яго выказваць.', skip: 'Перайсці да зместу', menu: 'Меню', close: 'Закрыць', navExpertise: 'Экспертыза', navWork: 'Праекты', navProcess: 'Працэс', navServices: 'Паслугі', navContact: 'Кантакты',
      heroEyebrow: 'Стратэгія брэнд-кантэнту · Крэатыўнае кіраўніцтва · Кантэнт-сістэмы', heroHeadline: '<em>Я знаходжу ідэю, што раскрывае характар брэнда,</em> — і будую вакол яе кантэнт-сістэму.', heroCopy: 'Стратэгія, крэатыўнае кіраўніцтва і кантэнт-сістэмы для брэндаў, якія не хочуць выглядаць як усе.', heroPrimary: 'Раскажыце пра свой брэнд', heroSecondary: 'Глядзець выбраныя праекты', heroSignature: 'Кацярына Навіцкая · Еўропа', heroAlt: 'Кацярына Навіцкая, стратэг па брэнд-кантэнце і крэатыўны дырэктар', proofHeading: 'Кантэнт-сістэмы для рэальных брэндаў', metricPlanned: 'публікацый спланавана ў сістэме на 12 месяцаў', metricHooks: 'хукаў распрацавана', metricFormats: 'пастаянных кантэнт-фарматаў', metricLanguages: 'моў · RU · EN · ES · IT · BY',
      expertiseLabel: 'Экспертыза', expertiseTitle: 'Ад ідэі да свету, які пазнаюць.', expertiseIntro: 'Я знаходжу ўласную тэрыторыю брэнда, даю ёй візуальную і вербальную мову, а затым будую сістэму, што дапамагае гэтай ідэі жыць далей.', cap1Title: 'Стратэгія брэнд-кантэнту', cap1Lead: 'Знайсці сваю тэрыторыю.', cap1Copy: 'Я вывучаю катэгорыю, канкурэнтаў і культурны кантэкст брэнда — і знаходжу прастору, якая можа належаць толькі вам.', cap1Terms: 'Даследаванне канкурэнтаў і культурнага кантэксту · Пазіцыянаванне · Аўдыторыя · Наратыў брэнда · Кантэнт-рубрыкі · Tone of voice · Візуальны напрамак · Кантэнт-архітэктура', cap2Title: 'Крэатыўнае кіраўніцтва', cap2Lead: 'Даць ідэі ўласны свет.', cap2Copy: 'Добрай ідэі мала аднаго подпісу. Ёй патрэбныя візуальная мова, рытм, крыху напружання — а часам і дзіўнае чырвонае крэсла.', cap2Terms: 'Візуальныя канцэпцыі · Арт-дырэкшн · Канцэпцыі кампаній · Кіраўніцтва здымкай · AI-распрацоўка візуалаў · Канцэпцыі Reels · Напрамак хукаў і тэкстаў · Мудборды і візуальныя рэферэнсы', cap3Title: 'Кантэнт-сістэма', cap3Lead: 'Не даць добрай ідэі памерці пасля аўторка.', cap3Copy: 'Адна добрая ідэя не павінна паміраць пасля аўторкавага допісу ў Instagram. Я ператвараю яе ў паўтаральную кантэнт-сістэму — фарматы, серыі, гісторыі, хукі і рытм, які каманда сапраўды можа выкарыстоўваць.', cap3Terms: 'Паўтаральныя фарматы · Кантэнт-серыі · Гісторыі · Хукі · Рэдакцыйны рытм · Кантэнт-архітэктура для каманды',
      workLabel: 'Выбраныя праекты', workTitle: 'Сістэмы, створаныя для рэальных брэндаў.', workIntro: 'Не асобныя публікацыі. Кожны праект злучае пазіцыянаванне, рэдакцыйную сістэму і рэальную вытворчасць.', challenge: 'Задача', strategy: 'Стратэгія', system: 'Сістэма', execution: 'Рэалізацыя', outcome: 'Вынік', case1Category: 'Догляд валасоў · Кантэнт-інфраструктура', case1Title: 'Кантэнт-інфраструктура на 12 месяцаў для навукова абгрунтаванага брэнда догляду валасоў.', case1Challenge: 'У брэнда быў клінічна абгрунтаваны прадукт і дзесяцігоддзі даследаванняў, але замест асобных публікацый патрэбна была маштабаваная сістэма камунікацыі.', case1Strategy: 'Знайсці ўласную тэрыторыю паміж камунікацыяй фармацэўтычных брэндаў, заснаванай на страху, і тыповым beauty/lifestyle кантэнтам.', case1Execution: 'Пасты, каруселі, Reels, сцэнары і B-roll для першых вытворчых цыклаў.', case1Outcome: 'Паўтаральная кантэнт-інфраструктура для паслядоўнай вытворчасці цягам усяго года.', case1Metric1: 'кантэнт-канцэпцый', case1Metric2: 'месяцаў', case1Metric3: 'пастаянных фарматаў', case2Category: 'Устойлівая оптыка · Сістэма хукаў і кантэнту', case2Title: 'Як ператварыць прадуктовы брэнд у культурны кантэнт-свет.', case2Challenge: 'Выразны прадукт, гісторыя заснавання і вялікая кліенцкая база — але без цэласнай кантэнт-ідэнтычнасці.', case2Strategy: 'Ператварыць горад і паходжанне брэнда з геаграфічнага факта ва ўласны наратыўны актыў.', case2Execution: 'Reels, каруселі, візуалы брэнда і культурны сторытэлінг на некалькіх мовах.', case2Outcome: 'Брэнд устойлівых аксесуараў атрымаў пазнавальную культурную ідэнтычнасць і паўтаральны рэдакцыйны рытм.', case2Metric1: 'хукаў распрацавана', case3Category: 'Slow fashion · Культурны сторытэлінг', case3Title: 'Ад эстэтычнага кантэнту да свету, які пазнаюць.', case3Challenge: 'Знаёмая эстэтыка прыроды і мяккасці без уласнага наратыўнага свету.', case3Strategy: 'Стварыць эмацыйны сусвет вакол прадукту і ператварыць яго ў сістэму, што працуе з сезона ў сезон.', case3Execution: 'Рэдакцыйныя візуалы, каруселі, Reels і сезонны сторытэлінг.', case3Outcome: 'Тыповая эстэтыка → уласны наратыў → паўтаральная візуальная і сюжэтная сістэма.', testimonial: '«Пастаўленыя задачы выконваліся нязменна ў поўнай адпаведнасці з нашымі чаканнямі».',
      reelsLabel: 'Reels і short-form', reelsTitle: 'Стратэгія, якую бачна ў руху.', reelsIntro: 'Выбраныя short-form працы для догляду валасоў, устойлівай оптыкі і slow fashion — ад хука і сцэнарыя да крэатыўнага кіраўніцтва і мантажу.', reelHair1: 'Навука чалавечай мовай', reelHair2: 'Рытуал прадукту', reelOptics1: 'Культурны хук', reelOptics2: 'Свет прадукту', reelFashion1: 'Сезонная гісторыя', reelFashion2: 'Эмацыйны свет брэнда', reelRoleFull: 'Хук · Сцэнар · Кіраўніцтва · Мантаж', reelRoleDirection: 'Канцэпцыя · Кіраўніцтва · Мантаж',
      processLabel: 'Як я працую', processTitle: 'Ад сутнасці брэнда да паўтаральнай вытворчасці.', processIntro: 'Чатыры сфакусаваныя этапы: спачатку яснасць, потым кантэнт, які каманда сапраўды можа выпускаць рэгулярна.', process1Title: 'Даследаванне', process1Copy: 'Брэнд, прадукт, аўдыторыя і канкурэнтнае асяроддзе.', process2Title: 'Пазіцыянаванне', process2Copy: 'Наратыўная тэрыторыя, рубрыкі, голас і правілы камунікацыі.', process3Title: 'Сістэма', process3Copy: 'Фарматы, хукі, календары, брыфы і вытворчы працэс.', process4Title: 'Вытворчасць', process4Copy: 'Reels, каруселі, сцэнары, B-roll і пастаяннае паляпшэнне.', fitLabel: 'З кім я працую', fitTitle: 'Для каманд, якім патрэбна сістэма, а не яшчэ больш шуму.', fit1Title: 'Заснавальнікі', fit1Copy: 'Ператварыць экспертызу і ідэі ў зразумелы кантэнт-механізм.', fit2Title: 'Спажывецкія брэнды', fit2Copy: 'Стварыць вакол рэальнага прадукту пазнавальны свет.', fit3Title: 'Міжнародныя брэнды', fit3Copy: 'Адаптаваць адзінае стратэгічнае ядро для розных рынкаў.', fit4Title: 'Невялікія маркетынгавыя каманды', fit4Copy: 'Дадаць стратэгічную і вытворчую экспертызу без агенцкай грувасткасці.',
      servicesLabel: 'Фарматы супрацоўніцтва', servicesTitle: 'Выберыце патрэбны ўзровень сістэмы і вытворчасці.', servicesIntro: 'Кожны праект пачынаецца са стратэгічнай яснасці. Аб’ём працы вызначаецца задачамі брэнда, каманды і рэальнай вытворчасці, а не меню асобных паслуг.', offer1Title: 'Спрынт па кантэнт-сістэме', offer1Copy: 'Для брэндаў, якім патрэбна ясная аснова перад ростам вытворчасці: пазіцыянаванне, рубрыкі, фарматы, хукі і практычны рэдакцыйны напрамак.', offer1Output: 'Падыходзіць для · Стратэгічнай перазагрузкі', offer2Title: 'Кантэнт-сістэма + вытворчасць', offer2Copy: 'Для брэндаў, якім патрэбны і сістэма, і першы цыкл кантэнту: стратэгія, сцэнары, кіраўніцтва, Reels і дапаможныя матэрыялы.', offer2Output: 'Падыходзіць для · Стварэння і запуску', offer3Title: 'Пастаянная стратэгічная вытворчасць', offer3Copy: 'Для каманд з рабочай базай, якім патрэбны пастаянны старэйшы партнёр для развіцця сістэмы і рэгулярнай вытворчасці.', offer3Output: 'Падыходзіць для · Штомесячнай працы',
      aboutLabel: 'Пра мяне', aboutTitle: 'Мне падабаюцца брэнды з уласным пунктам гледжання.', aboutRhythm1: 'Тыя, у якіх дзіўны колер.', aboutRhythm2: 'Вельмі канкрэтная манера гаварыць.', aboutRhythm3: 'Выява, на якой погляд затрымліваецца хаця б на паўсекунды.', aboutDetails: 'Я працую на стыку стратэгіі і крэатыўнага кіраўніцтва — знаходжу тое, што робіць брэнд пазнавальным, а затым ператвараю гэтую ідэю ў кантэнт, з якім сапраўды можна жыць і працаваць.', aboutExperience: 'Я стварала кантэнт-сістэмы для beauty, fashion, lifestyle і consumer-брэндаў па ўсёй Еўропе.', aboutMethod1: 'Стратэгія — калі трэба падумаць.', aboutMethod2: 'Крэатыўнае кіраўніцтва — калі патрэбная смеласць.', aboutMethod3: 'Сістэма — калі добрай ідэі трэба перажыць панядзелак.', aboutCredential: 'У House of Sustainable Brands у Гамбургу я працавала са стратэгіяй і вытворчасцю для digital-native consumer-брэндаў — ад аналізу канкурэнтаў і пазіцыянавання да гадавых кантэнт-сістэм і гатовых крэатыўных матэрыялаў.', cred1Title: 'Праца з еўрапейскімі брэндамі', cred1Copy: 'Beauty, fashion, lifestyle і consumer-брэнды на рынках Еўропы', cred2Title: 'Стратэгія + крэатыў', cred2Copy: 'Ад тэрыторыі брэнда і наратыву да візуальнага напрамку і кантэнт-сістэм', cred3Title: 'Створана для супрацоўніцтва', cred3Copy: 'Дыстанцыйна, структуравана і камфортна для заснавальнікаў і невялікіх каманд', aboutLanguages: 'Працую на рускай, англійскай, іспанскай, італьянскай і беларускай мовах.', galleryLabel: 'Дадатковыя працы', galleryTitle: 'Яшчэ выбраныя творчыя праекты.', galleryIntro: 'Архіў візуальных канцэпцый, каруселяў і вытворчых эксперыментаў. На першым месцы — бізнес-задача і гісторыя; інструменты застаюцца другаснымі метададзенымі.', filterAll: 'Усе', filterHaircare: 'Догляд валасоў', filterSunglasses: 'Акуляры', filterLifestyle: 'Лайфстайл', filterPhoto: 'Фота', filterVideo: 'Відэа', contactLabel: 'Пачаць праект', contactTitle: 'У вашага брэнда ўжо ёсць гісторыя. <em>Давайце створым сістэму, якая ператворыць яе ў паслядоўны кантэнт.</em>', contactSupport: 'Раскажыце, што вы ствараеце, дзе спыняецца вытворчасць кантэнту і якога выніку хочаце дасягнуць.', contactButton: 'Пачаць праект', footer: 'Кантэнт-сістэмы · Short-form вытворчасць · Еўропа', lightboxClose: 'Закрыць медыя', previous: 'Папярэдняе медыя', next: 'Наступнае медыя'
    }
  };

  const FORM_COPY = {
    en: {
      asyncLabel: 'Async collaboration', asyncTitle: 'Designed for asynchronous collaboration.', asyncCopy: 'No unnecessary meetings. Projects can be managed through a structured brief, written feedback and clear delivery milestones — so your team can stay focused while the content gets built.', asyncFlow: 'Brief → Strategy → Production → Review → Delivery',
      formLabel: 'Project brief', formTitle: 'Start your project.', formIntro: 'Share the essentials. I’ll review the brief and respond with the recommended next step, scope and estimated investment.', requiredNote: 'Required fields are marked with *.',
      name: 'Name *', email: 'Email *', company: 'Company', website: 'Website', industry: 'Industry', industryPlaceholder: 'Beauty, fashion, wellness…', needs: 'What do you need? *', service1: 'Content Strategy Sprint', service2: 'Reels Content System', service3: 'Full Content Infrastructure', service4: 'Not sure yet', serviceError: 'Please select at least one option.', budget: 'What’s your approximate budget? *', project: 'Tell me briefly about your project *', projectPlaceholder: 'What are you building, where is content getting stuck, and what would a useful outcome look like?', submit: 'Submit project', sending: 'Sending…', privacy: 'Your information will only be used to review and respond to this project brief.',
      successTitle: 'Thanks — your project brief has been received.', successCopy: 'I’ll review your information and respond with the recommended next step, scope and estimated investment.', errorTitle: 'The brief could not be sent.', errorCopy: 'Please try again or send it directly by email.', directContact: 'Prefer a direct channel?'
    },
    ru: {
      asyncLabel: 'Асинхронная работа', asyncTitle: 'Процесс создан для асинхронного сотрудничества.', asyncCopy: 'Без лишних созвонов. Проект можно вести через структурированный бриф, письменную обратную связь и понятные этапы сдачи — ваша команда сохраняет фокус, пока контент создаётся.', asyncFlow: 'Бриф → Стратегия → Продакшн → Проверка → Передача',
      formLabel: 'Бриф проекта', formTitle: 'Начать проект.', formIntro: 'Расскажите главное. Я изучу бриф и отвечу с рекомендацией по следующему шагу, объёму работ и ориентировочной стоимости.', requiredNote: 'Обязательные поля отмечены *.',
      name: 'Имя *', email: 'Email *', company: 'Компания', website: 'Сайт', industry: 'Сфера', industryPlaceholder: 'Beauty, fashion, wellness…', needs: 'Что вам нужно? *', service1: 'Спринт по контент-стратегии', service2: 'Система контента для Reels', service3: 'Полная контент-инфраструктура', service4: 'Пока не уверены', serviceError: 'Выберите хотя бы один вариант.', budget: 'Примерный бюджет *', project: 'Коротко расскажите о проекте *', projectPlaceholder: 'Что вы создаёте, где останавливается производство контента и какого результата хотите достичь?', submit: 'Отправить проект', sending: 'Отправка…', privacy: 'Информация будет использована только для рассмотрения брифа и ответа на него.',
      successTitle: 'Спасибо — бриф проекта получен.', successCopy: 'Я изучу информацию и отвечу с рекомендацией по следующему шагу, объёму работ и ориентировочной стоимости.', errorTitle: 'Не удалось отправить бриф.', errorCopy: 'Попробуйте ещё раз или отправьте его напрямую по email.', directContact: 'Предпочитаете прямую связь?'
    },
    es: {
      asyncLabel: 'Colaboración asíncrona', asyncTitle: 'Diseñado para colaborar de forma asíncrona.', asyncCopy: 'Sin reuniones innecesarias. Los proyectos pueden gestionarse mediante un brief estructurado, feedback por escrito y entregas claramente definidas, para que tu equipo mantenga el foco mientras se construye el contenido.', asyncFlow: 'Brief → Estrategia → Producción → Revisión → Entrega',
      formLabel: 'Brief del proyecto', formTitle: 'Inicia tu proyecto.', formIntro: 'Comparte lo esencial. Revisaré el brief y responderé con el siguiente paso recomendado, el alcance y una inversión estimada.', requiredNote: 'Los campos obligatorios están marcados con *.',
      name: 'Nombre *', email: 'Email *', company: 'Empresa', website: 'Sitio web', industry: 'Sector', industryPlaceholder: 'Belleza, moda, wellness…', needs: '¿Qué necesitas? *', service1: 'Sprint de estrategia de contenido', service2: 'Sistema de contenido para Reels', service3: 'Infraestructura completa de contenido', service4: 'Todavía no lo sé', serviceError: 'Selecciona al menos una opción.', budget: '¿Cuál es tu presupuesto aproximado? *', project: 'Cuéntame brevemente sobre tu proyecto *', projectPlaceholder: '¿Qué estás creando, dónde se atasca el contenido y qué resultado te gustaría conseguir?', submit: 'Enviar proyecto', sending: 'Enviando…', privacy: 'Tus datos solo se utilizarán para revisar y responder a este brief.',
      successTitle: 'Gracias: he recibido el brief de tu proyecto.', successCopy: 'Revisaré la información y responderé con el siguiente paso recomendado, el alcance y una inversión estimada.', errorTitle: 'No se pudo enviar el brief.', errorCopy: 'Inténtalo de nuevo o envíalo directamente por email.', directContact: '¿Prefieres un canal directo?'
    },
    it: {
      asyncLabel: 'Collaborazione asincrona', asyncTitle: 'Progettato per una collaborazione asincrona.', asyncCopy: 'Nessuna riunione superflua. I progetti possono essere gestiti con un brief strutturato, feedback scritto e tappe di consegna chiare, così il tuo team resta concentrato mentre il contenuto prende forma.', asyncFlow: 'Brief → Strategia → Produzione → Revisione → Consegna',
      formLabel: 'Brief del progetto', formTitle: 'Avvia il tuo progetto.', formIntro: 'Condividi le informazioni essenziali. Esaminerò il brief e risponderò con il passo successivo consigliato, l’ambito e una stima dell’investimento.', requiredNote: 'I campi obbligatori sono contrassegnati da *.',
      name: 'Nome *', email: 'Email *', company: 'Azienda', website: 'Sito web', industry: 'Settore', industryPlaceholder: 'Beauty, moda, wellness…', needs: 'Di cosa hai bisogno? *', service1: 'Sprint di strategia dei contenuti', service2: 'Sistema di contenuti per Reels', service3: 'Infrastruttura completa dei contenuti', service4: 'Non ne sono ancora sicuro', serviceError: 'Seleziona almeno un’opzione.', budget: 'Qual è il budget indicativo? *', project: 'Raccontami brevemente il progetto *', projectPlaceholder: 'Cosa stai costruendo, dove si blocca il contenuto e quale risultato vorresti ottenere?', submit: 'Invia il progetto', sending: 'Invio…', privacy: 'I tuoi dati saranno utilizzati solo per valutare e rispondere a questo brief.',
      successTitle: 'Grazie: il brief del progetto è stato ricevuto.', successCopy: 'Esaminerò le informazioni e risponderò con il passo successivo consigliato, l’ambito e una stima dell’investimento.', errorTitle: 'Non è stato possibile inviare il brief.', errorCopy: 'Riprova oppure invialo direttamente via email.', directContact: 'Preferisci un contatto diretto?'
    },
    by: {
      asyncLabel: 'Асінхронная супраца', asyncTitle: 'Працэс створаны для асінхроннага супрацоўніцтва.', asyncCopy: 'Без лішніх сустрэч. Праект можна весці праз структураваны брыф, пісьмовую зваротную сувязь і зразумелыя этапы здачы — ваша каманда захоўвае фокус, пакуль ствараецца кантэнт.', asyncFlow: 'Брыф → Стратэгія → Вытворчасць → Праверка → Перадача',
      formLabel: 'Брыф праекта', formTitle: 'Пачаць праект.', formIntro: 'Раскажыце галоўнае. Я вывучу брыф і адкажу з рэкамендацыяй наконт наступнага кроку, аб’ёму працы і прыкладнага бюджэту.', requiredNote: 'Абавязковыя палі пазначаны *.',
      name: 'Імя *', email: 'Email *', company: 'Кампанія', website: 'Сайт', industry: 'Сфера', industryPlaceholder: 'Beauty, fashion, wellness…', needs: 'Што вам патрэбна? *', service1: 'Спрынт па кантэнт-стратэгіі', service2: 'Сістэма кантэнту для Reels', service3: 'Поўная кантэнт-інфраструктура', service4: 'Пакуль не ўпэўнены', serviceError: 'Выберыце хаця б адзін варыянт.', budget: 'Прыкладны бюджэт *', project: 'Коратка раскажыце пра праект *', projectPlaceholder: 'Што вы ствараеце, дзе спыняецца вытворчасць кантэнту і якога выніку хочаце дасягнуць?', submit: 'Адправіць праект', sending: 'Адпраўка…', privacy: 'Інфармацыя будзе выкарыстана толькі для разгляду брыфа і адказу на яго.',
      successTitle: 'Дзякуй — брыф праекта атрыманы.', successCopy: 'Я вывучу інфармацыю і адкажу з рэкамендацыяй наконт наступнага кроку, аб’ёму працы і прыкладнага бюджэту.', errorTitle: 'Не ўдалося адправіць брыф.', errorCopy: 'Паспрабуйце яшчэ раз або адпраўце яго непасрэдна па email.', directContact: 'Аддаеце перавагу прамой сувязі?'
    }
  };

  const SYSTEM_TAGS = {
    en: {
      haircare: ['Competitor intelligence', 'Brand manifesto', 'Positioning', 'Communication rules', '12-month masterplan', 'Content pillars', 'Evergreen formats', 'Hook library', 'Highlights architecture', 'Monthly content calendars', 'Compliance framework', 'Production workflow'],
      optics: ['Competitor analysis', 'Manifesto', 'Tone of voice', 'Positioning', 'Content pillars', 'Visual direction', 'Hook system', 'Editorial rhythm', 'KPI framework', 'Content calendar'],
      fashion: ['Audience portrait', 'Positioning', 'Seasonal narrative', 'Communication rules', 'Content matrix', 'Content pillars', 'Repeatable formats', 'Annual masterplan', 'Production calendar', 'Story briefs']
    },
    ru: {
      haircare: ['Анализ конкурентов', 'Манифест бренда', 'Позиционирование', 'Правила коммуникации', 'Мастер-план на 12 месяцев', 'Контент-рубрики', 'Постоянные форматы', 'Библиотека хуков', 'Архитектура Highlights', 'Ежемесячные контент-календари', 'Система compliance', 'Процесс производства'],
      optics: ['Анализ конкурентов', 'Манифест', 'Tone of voice', 'Позиционирование', 'Контент-рубрики', 'Визуальное направление', 'Система хуков', 'Редакционный ритм', 'KPI-фреймворк', 'Контент-календарь'],
      fashion: ['Портрет аудитории', 'Позиционирование', 'Сезонный нарратив', 'Правила коммуникации', 'Контент-матрица', 'Контент-рубрики', 'Повторяемые форматы', 'Годовой мастер-план', 'Производственный календарь', 'Брифы историй']
    },
    es: {
      haircare: ['Inteligencia competitiva', 'Manifiesto de marca', 'Posicionamiento', 'Reglas de comunicación', 'Plan de 12 meses', 'Pilares de contenido', 'Formatos evergreen', 'Biblioteca de hooks', 'Arquitectura de Highlights', 'Calendarios mensuales', 'Marco de compliance', 'Flujo de producción'],
      optics: ['Análisis competitivo', 'Manifiesto', 'Tono de voz', 'Posicionamiento', 'Pilares de contenido', 'Dirección visual', 'Sistema de hooks', 'Ritmo editorial', 'Marco de KPIs', 'Calendario de contenido'],
      fashion: ['Perfil de audiencia', 'Posicionamiento', 'Narrativa estacional', 'Reglas de comunicación', 'Matriz de contenido', 'Pilares de contenido', 'Formatos repetibles', 'Plan anual', 'Calendario de producción', 'Briefs narrativos']
    },
    it: {
      haircare: ['Analisi competitiva', 'Manifesto di marca', 'Posizionamento', 'Regole di comunicazione', 'Masterplan di 12 mesi', 'Content pillar', 'Formati evergreen', 'Libreria di hook', 'Architettura Highlights', 'Calendari mensili', 'Framework di compliance', 'Flusso di produzione'],
      optics: ['Analisi competitiva', 'Manifesto', 'Tone of voice', 'Posizionamento', 'Content pillar', 'Direzione visiva', 'Sistema di hook', 'Ritmo editoriale', 'Framework KPI', 'Calendario editoriale'],
      fashion: ['Profilo del pubblico', 'Posizionamento', 'Narrazione stagionale', 'Regole di comunicazione', 'Matrice dei contenuti', 'Content pillar', 'Formati ripetibili', 'Masterplan annuale', 'Calendario di produzione', 'Brief narrativi']
    },
    by: {
      haircare: ['Аналіз канкурэнтаў', 'Маніфест брэнда', 'Пазіцыянаванне', 'Правілы камунікацыі', 'Майстар-план на 12 месяцаў', 'Кантэнт-рубрыкі', 'Пастаянныя фарматы', 'Бібліятэка хукаў', 'Архітэктура Highlights', 'Штомесячныя кантэнт-календары', 'Сістэма compliance', 'Вытворчы працэс'],
      optics: ['Аналіз канкурэнтаў', 'Маніфест', 'Tone of voice', 'Пазіцыянаванне', 'Кантэнт-рубрыкі', 'Візуальны напрамак', 'Сістэма хукаў', 'Рэдакцыйны рытм', 'KPI-фрэймворк', 'Кантэнт-каляндар'],
      fashion: ['Партрэт аўдыторыі', 'Пазіцыянаванне', 'Сезонны наратыў', 'Правілы камунікацыі', 'Кантэнт-матрыца', 'Кантэнт-рубрыкі', 'Паўтаральныя фарматы', 'Гадавы майстар-план', 'Вытворчы каляндар', 'Брыфы гісторый']
    }
  };

  const en = COPY.en;
  const getCopy = (lang, key) => (COPY[lang] && COPY[lang][key]) || en[key] || '';
  const getFormCopy = (lang, key) => (FORM_COPY[lang] && FORM_COPY[lang][key]) || FORM_COPY.en[key] || '';
  const element = (tag, key, className) => `<${tag}${className ? ` class="${className}"` : ''} data-i18n="${key}">${en[key]}</${tag}>`;
  const formElement = (tag, key, className) => `<${tag}${className ? ` class="${className}"` : ''} data-form-i18n="${key}">${FORM_COPY.en[key]}</${tag}>`;
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
        <li><a href="#project-brief" class="nav-project-link" data-i18n="contactLabel">${en.contactLabel}</a></li>
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
          <a class="btn-primary" href="#project-brief" data-i18n="heroPrimary">${en.heroPrimary}</a>
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

  function renderCase(number, category, title, problemKey, ideaKey, worldKey, systemKey, resultKey, tagSet, metrics, testimonial, media) {
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
          <div class="case-row problem"><dt data-i18n="problem">${en.problem}</dt><dd data-i18n="${problemKey}">${en[problemKey]}</dd></div>
          <div class="case-row idea"><dt data-i18n="idea">${en.idea}</dt><dd data-i18n="${ideaKey}">${en[ideaKey]}</dd></div>
          <div class="case-row world"><dt data-i18n="world">${en.world}</dt><dd data-i18n="${worldKey}">${en[worldKey]}</dd></div>
          <div class="case-row system"><dt data-i18n="system">${en.system}</dt><dd><p class="case-system-copy" data-i18n="${systemKey}">${en[systemKey]}</p>${tags(tagSet)}</dd></div>
          <div class="case-row result"><dt data-i18n="result">${en.result}</dt><dd data-i18n="${resultKey}">${en[resultKey]}</dd></div>
        </dl>
        ${testimonial ? `<blockquote class="testimonial"><span data-i18n="testimonial">${en.testimonial}</span><cite>Peter Hart, CEO · House of Sustainable Brands / Thiocyn GmbH</cite></blockquote>` : ''}
      </div>
      <div class="case-media">${media.map(src => `<div class="case-media-frame" style="--media-image: url('${src}')"><img src="${src}" loading="lazy" decoding="async" alt="${en[title]}" data-i18n-alt="${title}"></div>`).join('')}</div>
    </article>`;
  }

  function renderReel(src, poster, titleKey, roleKey) {
    return `<figure class="reel-card reveal"><div class="reel-media"><video controls muted playsinline preload="none" poster="${poster}" aria-label="${en[titleKey]}"><source src="${src}" type="video/mp4"></video></div><figcaption><span class="reel-title" data-i18n="${titleKey}">${en[titleKey]}</span><span class="reel-role" data-i18n="${roleKey}">${en[roleKey]}</span></figcaption></figure>`;
  }

  function renderThinking() {
    return `<section id="thinking" aria-labelledby="thinking-label">
      <div class="thinking-staircase reveal">
        <div class="section-label" id="thinking-label" data-i18n="thinkingLabel">${en.thinkingLabel}</div>
        <div class="thinking-step thinking-step-1">
            ${element('p','thinkingOpening','thinking-opening')}
            ${element('p','thinkingIdea','thinking-idea')}
        </div>
        <div class="thinking-step thinking-step-2">
            ${element('p','thinkingObservation','thinking-observation')}
        </div>
        <div class="thinking-step thinking-step-3">
            ${element('p','thinkingTransition','thinking-transition')}
            ${element('p','thinkingApplications','thinking-applications')}
        </div>
        <div class="thinking-step thinking-step-4">
          ${element('p','thinkingConclusion','thinking-conclusion')}
        </div>
        <div class="thinking-step thinking-step-5">
          ${element('p','thinkingSupport','thinking-support')}
        </div>
      </div>
    </section>`;
  }

  function renderStrategicSections() {
    const oldSections = ['about', 'services', 'cases', 'pricing'];
    oldSections.forEach(id => document.getElementById(id)?.remove());
    const metrics = SITE_DATA.metrics.map(metric => `<div class="metric reveal"><strong class="metric-value">${metric.value}</strong><div class="metric-label" data-i18n="${metric.key}">${en[metric.key]}</div></div>`).join('');
    const capabilities = [1,2,3].map(n => `<article class="capability reveal"><span class="capability-num">0${n}</span><h3 data-i18n="cap${n}Title">${en[`cap${n}Title`]}</h3><div class="capability-copy"><p class="capability-lead" data-i18n="cap${n}Lead">${en[`cap${n}Lead`]}</p><p data-i18n="cap${n}Copy">${en[`cap${n}Copy`]}</p><p class="term-line" data-i18n="cap${n}Terms">${en[`cap${n}Terms`]}</p></div></article>`).join('');
    const processes = [1,2,3,4].map(n => `<article class="process-step reveal"><span class="process-step-num">0${n}</span><h3 data-i18n="process${n}Title">${en[`process${n}Title`]}</h3><p data-i18n="process${n}Copy">${en[`process${n}Copy`]}</p></article>`).join('');
    const fits = [1,2,3,4].map(n => `<div class="fit-item reveal"><span>0${n}</span><div><strong data-i18n="fit${n}Title">${en[`fit${n}Title`]}</strong><p data-i18n="fit${n}Copy">${en[`fit${n}Copy`]}</p></div></div>`).join('');
    const offers = [1,2,3].map(n => `<article class="offer reveal"><span class="offer-num">0${n}</span><h3 data-i18n="offer${n}Title">${en[`offer${n}Title`]}</h3><p data-i18n="offer${n}Copy">${en[`offer${n}Copy`]}</p><div class="offer-output" data-i18n="offer${n}Output">${en[`offer${n}Output`]}</div></article>`).join('');
    const html = `
      <section id="proof" aria-labelledby="proof-title"><div class="proof-heading eyebrow" id="proof-title" data-i18n="proofHeading">${en.proofHeading}</div><div class="metrics-grid">${metrics}</div></section>
      <section id="expertise">${sectionHead('expertiseLabel','expertiseTitle','expertiseIntro')}<div class="capability-list">${capabilities}</div></section>
      ${renderThinking()}
      <section id="work">${sectionHead('workLabel','workTitle','workIntro')}
        ${renderCase('01','case1Category','case1Title','case1Problem','case1Idea','case1World','case1System','case1Result','haircare',[{value:'200+',key:'case1Metric1'},{value:'12',key:'case1Metric2'},{value:'6+',key:'case1Metric3'}],true,['assets/img/cases/hair-loss/Slider-1-1.webp','assets/img/cases/hair-loss/Slider-4-1.webp','assets/img/cases/hair-loss/Slider-4-4.webp'])}
        ${renderCase('02','case2Category','case2Title','case2Problem','case2Idea','case2World','case2System','case2Result','optics',[{value:'150+',key:'case2Metric1'}],false,['assets/img/cases/sunglasses/Carusel-cover.webp','assets/img/cases/sunglasses/99.webp','assets/img/cases/sunglasses/post3_feed.webp'])}
        ${renderCase('03','case3Category','case3Title','case3Problem','case3Idea','case3World','case3System','case3Result','fashion',null,false,['assets/img/cases/lifestyle/Holly-0.webp','assets/img/cases/lifestyle/Slider-3-1.webp','assets/img/cases/lifestyle/LS-1.webp'])}
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
      <section id="about"><div class="about-layout"><div class="about-portrait reveal"><img src="assets/img/hero/Kat-editorial-bw.jpg" width="1086" height="1448" loading="lazy" decoding="async" alt="${en.heroAlt}" data-i18n-alt="heroAlt"></div><div class="about-copy reveal">${element('div','aboutLabel','section-label')}${element('h2','aboutTitle','')}<div class="about-story"><p class="about-rhythm">${[1,2,3].map(n => element('span',`aboutRhythm${n}`,'')).join('')}</p>${element('p','aboutDetails','about-details')}${element('p','aboutExperience','about-experience')}<p class="about-method">${[1,2,3].map(n => element('span',`aboutMethod${n}`,'')).join('')}</p></div>${element('p','aboutCredential','about-credentials')}</div><div class="about-proof reveal"><div class="credibility-list">${[1,2,3].map(n => `<div class="credibility-item"><strong data-i18n="cred${n}Title">${en[`cred${n}Title`]}</strong><span data-i18n="cred${n}Copy">${en[`cred${n}Copy`]}</span></div>`).join('')}</div>${element('p','aboutLanguages','about-languages')}</div></div></section>`;
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
    const serviceOptions = [1,2,3,4].map(number => `<label class="brief-choice"><input type="checkbox" name="What do you need?" value="${FORM_COPY.en[`service${number}`]}"><span data-form-i18n="service${number}">${FORM_COPY.en[`service${number}`]}</span></label>`).join('');
    const budgets = ['€500–1,000','€1,000–2,000','€2,000–3,000','€3,000+'].map((budget, index) => `<label class="brief-choice"><input type="radio" name="Approximate budget" value="${budget}"${index === 0 ? ' required' : ''}><span>${budget}</span></label>`).join('');
    document.getElementById('contact').innerHTML = `<div class="contact-inner">
      <div class="contact-cta reveal">
        ${element('div','contactLabel','section-label')}
        ${element('h2','contactTitle','contact-title')}
        ${element('p','contactSupport','contact-support')}
        <a class="btn-primary" href="#project-brief" data-i18n="contactButton">${en.contactButton}</a>
      </div>
      <div class="async-layout reveal">
        <div>${formElement('div','asyncLabel','section-label')}</div>
        <div class="async-copy">${formElement('h2','asyncTitle','contact-title')}${formElement('p','asyncCopy','contact-support')}${formElement('div','asyncFlow','async-flow')}</div>
      </div>
      <div class="brief-shell reveal" id="project-brief">
        <div class="brief-heading">
          ${formElement('div','formLabel','section-label')}
          ${formElement('h2','formTitle','brief-title')}
          ${formElement('p','formIntro','brief-intro')}
          ${formElement('p','requiredNote','brief-required')}
        </div>
        <form class="brief-form" id="project-form" action="https://api.web3forms.com/submit" method="POST" accept-charset="UTF-8">
          <input type="hidden" name="access_key" value="d33b0ee1-7cf1-4c89-ae7a-bca71d29fdc1">
          <input type="hidden" name="subject" value="New project brief — katynov.github.io">
          <input type="hidden" name="from_name" value="Ekaterina Novitskaia — Project Brief">
          <input type="hidden" name="Source" value="https://katynov.github.io/#project-brief">
          <input type="hidden" name="Language" id="project-language" value="EN">
          <label class="brief-field"><span data-form-i18n="name">${FORM_COPY.en.name}</span><input type="text" name="Name" autocomplete="name" required></label>
          <label class="brief-field"><span data-form-i18n="email">${FORM_COPY.en.email}</span><input type="email" name="email" autocomplete="email" required></label>
          <label class="brief-field"><span data-form-i18n="company">${FORM_COPY.en.company}</span><input type="text" name="Company" autocomplete="organization"></label>
          <label class="brief-field"><span data-form-i18n="website">${FORM_COPY.en.website}</span><input type="url" name="Website" inputmode="url" autocomplete="url" placeholder="https://"></label>
          <label class="brief-field brief-field-wide"><span data-form-i18n="industry">${FORM_COPY.en.industry}</span><input type="text" name="Industry" data-form-i18n-placeholder="industryPlaceholder" placeholder="${FORM_COPY.en.industryPlaceholder}"></label>
          <fieldset class="brief-fieldset brief-field-wide" id="service-fieldset"><legend data-form-i18n="needs">${FORM_COPY.en.needs}</legend><div class="brief-options">${serviceOptions}</div><p class="brief-field-error" id="service-error" data-form-i18n="serviceError" hidden>${FORM_COPY.en.serviceError}</p></fieldset>
          <fieldset class="brief-fieldset brief-field-wide"><legend data-form-i18n="budget">${FORM_COPY.en.budget}</legend><div class="brief-options">${budgets}</div></fieldset>
          <label class="brief-field brief-field-wide"><span data-form-i18n="project">${FORM_COPY.en.project}</span><textarea name="Project brief" rows="6" data-form-i18n-placeholder="projectPlaceholder" placeholder="${FORM_COPY.en.projectPlaceholder}" required></textarea></label>
          <div class="brief-honeypot" aria-hidden="true"><label>Leave empty<input type="checkbox" name="botcheck" tabindex="-1" autocomplete="off"></label></div>
          <div class="brief-error brief-field-wide" id="brief-error" role="alert" hidden><strong data-form-i18n="errorTitle">${FORM_COPY.en.errorTitle}</strong> <span data-form-i18n="errorCopy">${FORM_COPY.en.errorCopy}</span> <a href="mailto:${email}">Email</a></div>
          <div class="brief-submit-row brief-field-wide"><button class="btn-primary brief-submit" type="submit" data-form-i18n="submit">${FORM_COPY.en.submit}</button><p data-form-i18n="privacy">${FORM_COPY.en.privacy}</p></div>
        </form>
        <div class="brief-success" id="brief-success" role="status" tabindex="-1" hidden>${formElement('h3','successTitle','')}${formElement('p','successCopy','')}</div>
      </div>
      <div class="contact-secondary reveal">
        ${formElement('p','directContact','contact-direct-label')}
        <div class="contact-links">
          <a href="mailto:${email}" class="contact-link"><span class="contact-link-label">Email</span><span class="contact-link-value">${email}</span></a>
          <a href="${linkedin}" target="_blank" rel="noopener noreferrer" class="contact-link"><span class="contact-link-label">LinkedIn</span><span class="contact-link-value">katherina-novitskaia</span></a>
          <a href="${whatsapp}" target="_blank" rel="noopener noreferrer" class="contact-link"><span class="contact-link-label">WhatsApp</span><span class="contact-link-value">+34 657 501 973</span></a>
        </div>
      </div>
    </div>`;
    document.querySelector('footer').innerHTML = `<span class="footer-copy">© 2026 Ekaterina Novitskaia</span><span class="footer-copy" data-i18n="footer">${en.footer}</span>`;
  }

  function bindProjectForm() {
    const form = document.getElementById('project-form');
    const serviceInputs = [...form.querySelectorAll('input[name="What do you need?"]')];
    const serviceError = document.getElementById('service-error');
    const submitButton = form.querySelector('.brief-submit');
    const errorBox = document.getElementById('brief-error');
    const successBox = document.getElementById('brief-success');
    serviceInputs.forEach(input => input.addEventListener('change', () => { if (serviceInputs.some(option => option.checked)) serviceError.hidden = true; }));
    form.addEventListener('submit', async event => {
      event.preventDefault();
      if (!serviceInputs.some(input => input.checked)) {
        serviceError.hidden = false;
        serviceInputs[0].focus();
        return;
      }

      const currentLang = SITE_DATA.languages.find(lang => document.querySelector(`.lang-btn[data-lang="${lang}"]`)?.classList.contains('active')) || 'en';
      errorBox.hidden = true;
      submitButton.disabled = true;
      submitButton.setAttribute('aria-busy', 'true');
      submitButton.textContent = getFormCopy(currentLang, 'sending');

      try {
        const formData = new FormData(form);
        formData.set('What do you need?', serviceInputs.filter(input => input.checked).map(input => input.value).join(', '));
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: { Accept: 'application/json' }
        });
        const result = await response.json().catch(() => ({}));
        if (!response.ok || result.success === false) throw new Error(result.message || 'Submission failed');

        form.reset();
        form.hidden = true;
        successBox.hidden = false;
        window.requestAnimationFrame(() => successBox.focus());
      } catch (error) {
        errorBox.hidden = false;
        errorBox.focus?.();
      } finally {
        submitButton.disabled = false;
        submitButton.removeAttribute('aria-busy');
        submitButton.textContent = getFormCopy(currentLang, 'submit');
      }
    });
    if (new URLSearchParams(window.location.search).get('submitted') === '1') {
      form.hidden = true;
      successBox.hidden = false;
      window.requestAnimationFrame(() => successBox.focus());
    }
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
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', getCopy(lang, 'metaTitle'));
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', getCopy(lang, 'metaDescription'));
    document.querySelectorAll('[data-i18n]').forEach(node => { node.innerHTML = getCopy(lang, node.dataset.i18n); });
    document.querySelectorAll('[data-i18n-alt]').forEach(node => { node.alt = getCopy(lang, node.dataset.i18nAlt); });
    document.querySelectorAll('[data-form-i18n]').forEach(node => { node.innerHTML = getFormCopy(lang, node.dataset.formI18n); });
    document.querySelectorAll('[data-form-i18n-placeholder]').forEach(node => { node.placeholder = getFormCopy(lang, node.dataset.formI18nPlaceholder); });
    const projectLanguage = document.getElementById('project-language');
    if (projectLanguage) projectLanguage.value = SITE_DATA.languageLabels[lang];
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
  bindProjectForm();
  createMainLandmark();
  upgradeLightbox();
  bindInteractions();
  applyLanguage(localStorage.getItem('lang') || 'en');
  document.body.classList.add('strategic-ready');
})();
