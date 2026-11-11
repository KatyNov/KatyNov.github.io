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
      reelsLabel: 'Selected motion work', reelsTitle: 'The world, in motion.', reelsIntro: 'A few examples of how strategy and creative direction become moving image — from the first hook and concept to script, direction and edit.',
      reelHair1: 'Science made human', reelHair2: 'Product ritual', reelOptics1: 'Cultural hook', reelOptics2: 'Product world', reelFashion1: 'Seasonal story', reelFashion2: 'Emotional world-building',
      reelRoleFull: 'Hook · Script · Creative direction · Edit', reelRoleDirection: 'Concept · Creative direction · Edit',
      processLabel: 'How projects move', processTitle: 'Clear thinking first. Then a system people can use.', processIntro: 'The process is deliberately simple: understand what is already there, find the territory worth owning, build the world around it, then make that world usable.',
      process1Title: 'Look closely.', process1Copy: 'Brand, product, category, competitors, audience and the cultural context around them.',
      process2Title: 'Find the territory.', process2Copy: 'Define the point of view, narrative, voice and creative direction the brand can genuinely own.',
      process3Title: 'Build the world.', process3Copy: 'Turn the idea into a visual language, recurring formats, stories and campaign directions.',
      process4Title: 'Make it usable.', process4Copy: 'Build the content architecture, briefs and rhythm a team can carry forward — with ongoing creative direction when it is needed.',
      servicesLabel: 'Ways to work together', servicesTitle: 'Start with the problem, not the package.', servicesIntro: 'Some brands need one sharp decision. Others need the whole world built around it. The scope depends on what is missing — the idea, the system, or the momentum to keep it moving.',
      offer1Title: 'Creative Direction Session', offer1Lead: 'One problem. One focused session. A sharper idea.', offer1Copy: 'For a brand, campaign or content direction that feels close — but not quite right. We look at the problem, the category and what is getting lost, then find a clearer territory to move forward with.', offer1Output: 'Best for · A stuck idea, campaign or brand direction',
      offer2Title: 'Brand Content Sprint', offer2Lead: 'Find the territory. Define the world. Build the first system.', offer2Copy: 'For brands that need more than another content calendar. We define the strategic territory, voice and visual direction, then turn them into repeatable formats, stories and an editorial structure the team can actually use.', offer2Output: 'Best for · Building or resetting a brand content direction',
      offer3Title: 'Ongoing Creative Direction', offer3Lead: 'Keep the idea alive without repeating yourself.', offer3Copy: 'For brands that already have a direction and need a senior creative partner to evolve it — shaping campaigns, content concepts, visual language and the system around them as the brand grows.', offer3Output: 'Best for · Ongoing creative and strategic partnership',
      aboutLabel: 'About', aboutTitle: 'I like brands with a point of view.',
      aboutRhythm1: 'The ones with a strange colour.', aboutRhythm2: 'A very specific way of speaking.', aboutRhythm3: 'A picture that makes you stop for half a second.',
      aboutDetails: 'I work between strategy and creative direction — finding what makes a brand recognisable, then turning that idea into content people can actually live with.',
      aboutExperience: 'I’ve built content systems for beauty, fashion, lifestyle and consumer brands across Europe.',
      aboutMethod1: 'Strategy when it needs thinking.', aboutMethod2: 'Creative direction when it needs nerve.', aboutMethod3: 'Systems when the good idea needs to survive Monday morning.',
      aboutCredential: 'At House of Sustainable Brands in Hamburg, I worked across strategy and production for digital-native consumer brands — from competitor intelligence and positioning to annual content systems and finished creative assets.',
      cred1Title: 'European brand work', cred1Copy: 'Beauty, fashion, lifestyle and consumer brands across European markets', cred2Title: 'Strategy + creative', cred2Copy: 'From brand territory and narrative to visual direction and content systems', cred3Title: 'Built for collaboration', cred3Copy: 'Remote, structured and comfortable for founders and small teams',
      aboutLanguages: 'Working across Russian, English, Spanish, Italian and Belarusian.',
      galleryLabel: 'Selected visual work', galleryTitle: 'The world, in stills.', galleryIntro: 'A closer look at how the same brand territories become carousels, editorial images and recurring visual language.',
      gallery1Brand: 'Thiocyn · Hair care', gallery1Title: 'Science made easier to enter.', gallery1Role: 'Educational carousel · Content direction + art direction',
      gallery2Brand: 'Thiocyn · Hair care', gallery2Title: 'A calmer visual language for clinical credibility.', gallery2Role: 'Product series · Visual concept + copy direction',
      gallery3Brand: 'Sustainable optics · Leipzig', gallery3Title: 'Product, place and material in the same world.', gallery3Role: 'Lifestyle series · Visual direction + copy',
      gallery4Brand: 'Sustainable optics · Leipzig', gallery4Title: 'Turning origin into a recurring visual story.', gallery4Role: 'Brand carousel · Art direction + storytelling',
      gallery5Brand: 'Slow fashion · Europe', gallery5Title: 'Nature as part of the story, not decoration.', gallery5Role: 'Seasonal series · Brand narrative + art direction',
      gallery6Brand: 'Slow fashion · Europe', gallery6Title: 'One visual world, carried across a season.', gallery6Role: 'World-building carousel · Visual concept + copy',
      gallery7Brand: 'Azafranes Manchegos · Independent concept', gallery7Title: 'From field to thread: the slowness is the value.', gallery7Role: 'Origin series · Creative direction + copy',
      gallery8Brand: 'Azafranes Manchegos · Independent concept', gallery8Title: 'Saffron that doesn’t wait for a special occasion.', gallery8Role: 'Kitchen story · Strategy + creative direction + copy',
      gallery9Brand: 'Labiatae · Strategic brand exercise', gallery9Title: 'How a brand story is built from photos and research.', gallery9Role: 'Research desk + moodboard · Brand direction',
      gallery10Brand: 'Labiatae · Strategic brand exercise', gallery10Title: 'A bottle is never just a bottle.', gallery10Role: 'Campaign posters · Concept + copy',
      gallery11Brand: 'Palentina de Aromáticas · Independent concept', gallery11Title: 'One flower. Many industries.', gallery11Role: 'Brand idea · Strategy + concept',
      gallery12Brand: 'Palentina de Aromáticas · Independent concept', gallery12Title: 'Lavender is more than a scent.', gallery12Role: 'Territory moodboards · Research + art direction',
      gallery13Brand: 'Palentina de Aromáticas · Independent concept', gallery13Title: 'A purple flower. A golden story.', gallery13Role: 'Campaign posters · Concept + copy',
      gallery14Brand: 'Palentina de Aromáticas · Independent concept', gallery14Title: 'Beauty is not always delicate.', gallery14Role: 'Land series · Art direction + storytelling',
      case4Category: 'Aromatic plants · Independent concept', case4Title: 'One flower, many industries: a brand world for a lavender cooperative.', case4Problem: 'A farmers’ cooperative in Castile distils lavender into essential oil and sells it as raw material. The story ends where the oil leaves the still.', case4Idea: 'Lavender is more than a scent.', case4World: 'One flower read through four territories — food, drink, material and what remains after distillation — rooted in the dry, wind-swept land it grows on.', case4System: 'A brand idea, four territory moodboards, a poster campaign and a land series that can keep producing stories.', case4Result: 'A self-initiated concept: a research-led brand territory ready to extend into campaigns, packaging and editorial content.', case4Metric1: 'content territories', case4Metric2: 'key visuals', albumOpen: 'Open album', albumClose: 'Close album', albumSeries: 'series', albumImages: 'images', caseNext: 'Next case', casePrev: 'Previous case', scrollHint: 'Scroll sideways',
      contactLabel: 'Start a project', contactTitle: 'Have an idea that hasn\'t found its shape yet?', contactSupport: 'Tell me what feels unclear, stuck or too much like everyone else. I’ll look at the problem and come back with the most useful next step.', contactButton: 'Tell me about it',
      footer: 'Brand Content Strategy · Creative Direction · Content Systems · Europe', lightboxClose: 'Close media', previous: 'Previous media', next: 'Next media'
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
      reelsLabel: 'Избранные работы в движении', reelsTitle: 'Мир в движении.', reelsIntro: 'Несколько примеров того, как стратегия и креативное руководство превращаются в движущееся изображение — от первого хука и концепции до сценария, руководства и монтажа.', reelHair1: 'Наука человеческим языком', reelHair2: 'Ритуал продукта', reelOptics1: 'Культурный хук', reelOptics2: 'Мир продукта', reelFashion1: 'Сезонная история', reelFashion2: 'Эмоциональный мир бренда', reelRoleFull: 'Хук · Сценарий · Креативное руководство · Монтаж', reelRoleDirection: 'Концепция · Креативное руководство · Монтаж',
      processLabel: 'Как движется проект', processTitle: 'Сначала ясная мысль. Потом система, которой можно пользоваться.', processIntro: 'Процесс намеренно простой: понять, что уже есть, найти территорию, которую бренд может занять, построить вокруг неё мир и превратить этот мир в рабочую систему.', process1Title: 'Посмотреть внимательнее.', process1Copy: 'Бренд, продукт, категория, конкуренты, аудитория и культурный контекст вокруг них.', process2Title: 'Найти территорию.', process2Copy: 'Определить точку зрения, нарратив, голос и креативное направление, которые бренд действительно может сделать своими.', process3Title: 'Построить мир.', process3Copy: 'Превратить идею в визуальный язык, повторяемые форматы, истории и направления для кампаний.', process4Title: 'Сделать его рабочим.', process4Copy: 'Собрать контент-архитектуру, брифы и ритм, с которыми команда сможет двигаться дальше — при необходимости с постоянным креативным руководством.',
      servicesLabel: 'Форматы сотрудничества', servicesTitle: 'Начинать нужно с задачи, а не с пакета.', servicesIntro: 'Одному бренду нужно одно точное решение. Другому — целый мир вокруг идеи. Объём работы зависит от того, чего сейчас не хватает: самой идеи, системы или движения, которое нужно поддерживать дальше.', offer1Title: 'Сессия креативного направления', offer1Lead: 'Одна задача. Один фокус. Более точная идея.', offer1Copy: 'Для бренда, кампании или контент-направления, которое почти работает, но всё ещё не складывается. Разбираем проблему, категорию и то, что теряется по дороге, — и находим более ясную территорию для движения дальше.', offer1Output: 'Лучше всего · Когда идея, кампания или направление застряли', offer2Title: 'Спринт по бренд-контенту', offer2Lead: 'Найти территорию. Собрать мир. Построить первую систему.', offer2Copy: 'Для брендов, которым нужен не ещё один контент-календарь. Мы определяем стратегическую территорию, голос и визуальное направление, а затем превращаем их в повторяемые форматы, истории и редакционную структуру, которой команда действительно сможет пользоваться.', offer2Output: 'Лучше всего · Для запуска или перезапуска контент-направления бренда', offer3Title: 'Постоянное креативное руководство', offer3Lead: 'Развивать идею, не повторяя себя.', offer3Copy: 'Для брендов, у которых уже есть направление, но нужен опытный креативный партнёр, чтобы развивать его дальше — кампании, контент-концепции, визуальный язык и систему вокруг них по мере роста бренда.', offer3Output: 'Лучше всего · Для постоянного стратегического и креативного партнёрства',
      aboutLabel: 'Обо мне', aboutTitle: 'Мне нравятся бренды с собственной точкой зрения.', aboutRhythm1: 'Те, у которых странный цвет.', aboutRhythm2: 'Очень конкретная манера говорить.', aboutRhythm3: 'Картинка, на которой взгляд задерживается хотя бы на полсекунды.', aboutDetails: 'Я работаю на стыке стратегии и креативного руководства — нахожу то, что делает бренд узнаваемым, а затем превращаю эту идею в контент, с которым действительно можно жить и работать.', aboutExperience: 'Я строила контент-системы для beauty, fashion, lifestyle и consumer-брендов по всей Европе.', aboutMethod1: 'Стратегия — когда нужно подумать.', aboutMethod2: 'Креативное руководство — когда нужна смелость.', aboutMethod3: 'Система — когда хорошей идее нужно пережить понедельник.', aboutCredential: 'В House of Sustainable Brands в Гамбурге я работала и со стратегией, и с продакшном для digital-native consumer-брендов — от анализа конкурентов и позиционирования до годовых контент-систем и готовых креативных материалов.', cred1Title: 'Работа с европейскими брендами', cred1Copy: 'Beauty-, fashion-, lifestyle- и consumer-бренды на рынках Европы', cred2Title: 'Стратегия + креатив', cred2Copy: 'От территории бренда и нарратива до визуального направления и контент-систем', cred3Title: 'Создано для сотрудничества', cred3Copy: 'Удалённо, структурированно и комфортно для основателей и небольших команд', aboutLanguages: 'Работаю на русском, английском, испанском, итальянском и белорусском языках.',
      galleryLabel: 'Избранные визуальные работы', galleryTitle: 'Тот же мир — в кадре.', galleryIntro: 'Более близкий взгляд на то, как те же территории брендов превращаются в карусели, редакционные визуалы и повторяемый визуальный язык.',
      gallery1Brand: 'Thiocyn · Уход за волосами', gallery1Title: 'Наука, к которой легче подступиться.', gallery1Role: 'Образовательная карусель · Контент-направление + арт-дирекшн',
      gallery2Brand: 'Thiocyn · Уход за волосами', gallery2Title: 'Более спокойный визуальный язык для клинической убедительности.', gallery2Role: 'Продуктовая серия · Визуальная концепция + направление копирайтинга',
      gallery3Brand: 'Экологичная оптика · Лейпциг', gallery3Title: 'Продукт, место и материал в одном мире.', gallery3Role: 'Лайфстайл-серия · Визуальное направление + текст',
      gallery4Brand: 'Экологичная оптика · Лейпциг', gallery4Title: 'Превратить происхождение бренда в повторяемую визуальную историю.', gallery4Role: 'Бренд-карусель · Арт-дирекшн + сторителлинг',
      gallery5Brand: 'Slow fashion · Европа', gallery5Title: 'Природа как часть истории, а не декорация.', gallery5Role: 'Сезонная серия · Нарратив бренда + арт-дирекшн',
      gallery6Brand: 'Slow fashion · Европа', gallery6Title: 'Один визуальный мир, проходящий через весь сезон.', gallery6Role: 'Карусель о мире бренда · Визуальная концепция + текст',
      gallery7Brand: 'Azafranes Manchegos · Независимый концепт', gallery7Title: 'От поля до нити: ценность — в медленности.', gallery7Role: 'Серия о происхождении · Креативное направление + текст',
      gallery8Brand: 'Azafranes Manchegos · Независимый концепт', gallery8Title: 'Шафран, который не ждёт особого случая.', gallery8Role: 'Кухонная история · Стратегия + креативное направление + текст',
      gallery9Brand: 'Labiatae · Стратегическое упражнение для бренда', gallery9Title: 'Как история бренда складывается из фотографий и исследования.', gallery9Role: 'Исследование + мудборд · Направление бренда',
      gallery10Brand: 'Labiatae · Стратегическое упражнение для бренда', gallery10Title: 'Флакон — никогда не просто флакон.', gallery10Role: 'Постеры кампании · Концепция + текст',
      gallery11Brand: 'Palentina de Aromáticas · Независимый концепт', gallery11Title: 'Один цветок. Много индустрий.', gallery11Role: 'Идея бренда · Стратегия + концепция',
      gallery12Brand: 'Palentina de Aromáticas · Независимый концепт', gallery12Title: 'Лаванда — больше, чем аромат.', gallery12Role: 'Мудборды территорий · Исследование + арт-дирекшн',
      gallery13Brand: 'Palentina de Aromáticas · Независимый концепт', gallery13Title: 'Фиолетовый цветок. Золотая история.', gallery13Role: 'Постеры кампании · Концепция + текст',
      gallery14Brand: 'Palentina de Aromáticas · Независимый концепт', gallery14Title: 'Красота не всегда хрупкая.', gallery14Role: 'Серия о земле · Арт-дирекшн + сторителлинг',
      case4Category: 'Ароматические растения · Независимый концепт', case4Title: 'Один цветок, много индустрий: мир бренда для лавандового кооператива.', case4Problem: 'Фермерский кооператив в Кастилии перегоняет лаванду в эфирное масло и продаёт его как сырьё. История заканчивается там, где масло покидает перегонный куб.', case4Idea: 'Лаванда — больше, чем аромат.', case4World: 'Один цветок, прочитанный через четыре территории — еда, напитки, материал и то, что остаётся после дистилляции, — и укоренённый в сухой, продуваемой ветром земле, на которой он растёт.', case4System: 'Идея бренда, четыре мудборда территорий, постерная кампания и серия о земле, из которых можно продолжать делать истории.', case4Result: 'Самостоятельный концепт: территория бренда, выросшая из исследования и готовая продолжиться в кампаниях, упаковке и редакционном контенте.', case4Metric1: 'контент-территории', case4Metric2: 'ключевых визуалов', albumOpen: 'Открыть альбом', albumClose: 'Закрыть альбом', albumSeries: 'серии', albumImages: 'изображений', caseNext: 'Следующий кейс', casePrev: 'Предыдущий кейс', scrollHint: 'Листайте в сторону',
      contactLabel: 'Начать проект', contactTitle: 'Есть идея, которая пока не нашла свою форму?', contactSupport: 'Расскажите, что кажется неясным, застряло или слишком похоже на всех остальных. Я посмотрю на задачу и предложу самый полезный следующий шаг.', contactButton: 'Расскажите о ней', footer: 'Стратегия бренд-контента · Креативное руководство · Контент-системы · Европа', lightboxClose: 'Закрыть медиа', previous: 'Предыдущее медиа', next: 'Следующее медиа'
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
      reelsLabel: 'Obras seleccionadas en movimiento', reelsTitle: 'El mundo, en movimiento.', reelsIntro: 'Algunos ejemplos de cómo la estrategia y la dirección creativa se convierten en imagen en movimiento: desde el primer hook y concepto hasta el guion, la dirección y la edición.', reelHair1: 'La ciencia, en lenguaje humano', reelHair2: 'Ritual de producto', reelOptics1: 'Hook cultural', reelOptics2: 'Mundo de producto', reelFashion1: 'Historia estacional', reelFashion2: 'Universo emocional de marca', reelRoleFull: 'Hook · Guion · Dirección creativa · Edición', reelRoleDirection: 'Concepto · Dirección creativa · Edición',
      processLabel: 'Cómo avanza un proyecto', processTitle: 'Primero, claridad. Después, un sistema que la gente pueda usar.', processIntro: 'El proceso es deliberadamente sencillo: entender lo que ya existe, encontrar el territorio que merece la pena ocupar, construir el mundo a su alrededor y hacer que ese mundo sea útil.', process1Title: 'Observar de cerca.', process1Copy: 'La marca, el producto, la categoría, la competencia, la audiencia y el contexto cultural que los rodea.', process2Title: 'Encontrar el territorio.', process2Copy: 'Definir el punto de vista, la narrativa, la voz y la dirección creativa que la marca puede hacer realmente suyos.', process3Title: 'Construir el mundo.', process3Copy: 'Convertir la idea en un lenguaje visual, formatos recurrentes, historias y direcciones de campaña.', process4Title: 'Hacerlo útil.', process4Copy: 'Construir la arquitectura de contenido, los briefs y el ritmo que el equipo pueda llevar adelante, con dirección creativa continua cuando sea necesaria.',
      servicesLabel: 'Formas de trabajar juntos', servicesTitle: 'Empieza por el problema, no por el paquete.', servicesIntro: 'Algunas marcas necesitan una decisión precisa. Otras, todo un mundo construido alrededor de una idea. El alcance depende de lo que falte: la idea, el sistema o el impulso para mantenerlo en movimiento.', offer1Title: 'Sesión de dirección creativa', offer1Lead: 'Un problema. Una sesión enfocada. Una idea más precisa.', offer1Copy: 'Para una marca, campaña o dirección de contenido que está cerca de funcionar, pero aún no termina de encajar. Analizamos el problema, la categoría y lo que se está perdiendo, y encontramos un territorio más claro desde el que avanzar.', offer1Output: 'Ideal para · Una idea, campaña o dirección estancada', offer2Title: 'Sprint de contenido de marca', offer2Lead: 'Encontrar el territorio. Definir el mundo. Construir el primer sistema.', offer2Copy: 'Para marcas que necesitan algo más que otro calendario de contenido. Definimos el territorio estratégico, la voz y la dirección visual, y los convertimos en formatos repetibles, historias y una estructura editorial que el equipo realmente pueda utilizar.', offer2Output: 'Ideal para · Construir o redefinir la dirección de contenido de una marca', offer3Title: 'Dirección creativa continua', offer3Lead: 'Mantener viva la idea sin repetirse.', offer3Copy: 'Para marcas que ya tienen una dirección y necesitan un partner creativo senior para desarrollarla: dando forma a campañas, conceptos de contenido, lenguaje visual y al sistema que los sostiene a medida que la marca crece.', offer3Output: 'Ideal para · Una colaboración creativa y estratégica continua',
      aboutLabel: 'Sobre mí', aboutTitle: 'Me gustan las marcas con un punto de vista propio.', aboutRhythm1: 'Las que tienen un color extraño.', aboutRhythm2: 'Una forma muy concreta de hablar.', aboutRhythm3: 'Una imagen que te hace detenerte medio segundo.', aboutDetails: 'Trabajo entre la estrategia y la dirección creativa: encuentro lo que hace reconocible a una marca y convierto esa idea en contenido con el que de verdad se puede vivir y trabajar.', aboutExperience: 'He creado sistemas de contenido para marcas de belleza, moda, lifestyle y consumo en toda Europa.', aboutMethod1: 'Estrategia cuando hace falta pensar.', aboutMethod2: 'Dirección creativa cuando hace falta valor.', aboutMethod3: 'Sistemas cuando una buena idea necesita sobrevivir al lunes por la mañana.', aboutCredential: 'En House of Sustainable Brands, en Hamburgo, trabajé en estrategia y producción para marcas de consumo nativas digitales: desde inteligencia competitiva y posicionamiento hasta sistemas anuales de contenido y piezas creativas terminadas.', cred1Title: 'Trabajo con marcas europeas', cred1Copy: 'Marcas de belleza, moda, lifestyle y consumo en mercados europeos', cred2Title: 'Estrategia + creatividad', cred2Copy: 'Del territorio de marca y la narrativa a la dirección visual y los sistemas de contenido', cred3Title: 'Diseñado para colaborar', cred3Copy: 'Un proceso remoto, estructurado y cómodo para founders y equipos pequeños', aboutLanguages: 'Trabajo en ruso, inglés, español, italiano y bielorruso.',
      galleryLabel: 'Trabajo visual seleccionado', galleryTitle: 'El mundo, en imágenes.', galleryIntro: 'Una mirada más cercana a cómo los mismos territorios de marca se convierten en carruseles, imágenes editoriales y un lenguaje visual recurrente.',
      gallery1Brand: 'Thiocyn · Cuidado capilar', gallery1Title: 'Una ciencia a la que resulta más fácil acercarse.', gallery1Role: 'Carrusel educativo · Dirección de contenido + dirección de arte',
      gallery2Brand: 'Thiocyn · Cuidado capilar', gallery2Title: 'Un lenguaje visual más sereno para transmitir credibilidad clínica.', gallery2Role: 'Serie de producto · Concepto visual + dirección de copy',
      gallery3Brand: 'Óptica sostenible · Leipzig', gallery3Title: 'Producto, lugar y material dentro del mismo mundo.', gallery3Role: 'Serie lifestyle · Dirección visual + copy',
      gallery4Brand: 'Óptica sostenible · Leipzig', gallery4Title: 'Convertir el origen en una historia visual recurrente.', gallery4Role: 'Carrusel de marca · Dirección de arte + storytelling',
      gallery5Brand: 'Slow fashion · Europa', gallery5Title: 'La naturaleza como parte de la historia, no como decoración.', gallery5Role: 'Serie estacional · Narrativa de marca + dirección de arte',
      gallery6Brand: 'Slow fashion · Europa', gallery6Title: 'Un mismo mundo visual a lo largo de toda una temporada.', gallery6Role: 'Carrusel de world-building · Concepto visual + copy',
      gallery7Brand: 'Azafranes Manchegos · Concepto independiente', gallery7Title: 'Del campo al hilo: el valor está en la lentitud.', gallery7Role: 'Serie de origen · Dirección creativa + copy',
      gallery8Brand: 'Azafranes Manchegos · Concepto independiente', gallery8Title: 'Un azafrán que no espera a una ocasión especial.', gallery8Role: 'Historia de cocina · Estrategia + dirección creativa + copy',
      gallery9Brand: 'Labiatae · Ejercicio estratégico de marca', gallery9Title: 'Cómo se construye la historia de una marca a partir de fotos e investigación.', gallery9Role: 'Investigación + moodboard · Dirección de marca',
      gallery10Brand: 'Labiatae · Ejercicio estratégico de marca', gallery10Title: 'Un frasco nunca es solo un frasco.', gallery10Role: 'Pósters de campaña · Concepto + copy',
      gallery11Brand: 'Palentina de Aromáticas · Concepto independiente', gallery11Title: 'Una flor. Muchas industrias.', gallery11Role: 'Idea de marca · Estrategia + concepto',
      gallery12Brand: 'Palentina de Aromáticas · Concepto independiente', gallery12Title: 'La lavanda es más que un aroma.', gallery12Role: 'Moodboards de territorios · Investigación + dirección de arte',
      gallery13Brand: 'Palentina de Aromáticas · Concepto independiente', gallery13Title: 'Una flor púrpura. Una historia dorada.', gallery13Role: 'Pósters de campaña · Concepto + copy',
      gallery14Brand: 'Palentina de Aromáticas · Concepto independiente', gallery14Title: 'La belleza no siempre es delicada.', gallery14Role: 'Serie sobre la tierra · Dirección de arte + storytelling',
      case4Category: 'Plantas aromáticas · Concepto independiente', case4Title: 'Una flor, muchas industrias: un mundo de marca para una cooperativa de lavanda.', case4Problem: 'Una cooperativa de agricultores de Castilla destila lavanda en aceite esencial y lo vende como materia prima. La historia termina donde el aceite sale del alambique.', case4Idea: 'La lavanda es más que un aroma.', case4World: 'Una flor leída a través de cuatro territorios — comida, bebida, material y lo que queda tras la destilación — y arraigada en la tierra seca y ventosa donde crece.', case4System: 'Una idea de marca, cuatro moodboards de territorio, una campaña de pósters y una serie sobre la tierra que puede seguir generando historias.', case4Result: 'Un concepto de iniciativa propia: un territorio de marca nacido de la investigación, listo para extenderse a campañas, packaging y contenido editorial.', case4Metric1: 'territorios de contenido', case4Metric2: 'visuales clave', albumOpen: 'Abrir álbum', albumClose: 'Cerrar álbum', albumSeries: 'series', albumImages: 'imágenes', caseNext: 'Caso siguiente', casePrev: 'Caso anterior', scrollHint: 'Desliza hacia un lado',
      contactLabel: 'Iniciar un proyecto', contactTitle: '¿Tienes una idea que todavía no ha encontrado su forma?', contactSupport: 'Cuéntame qué se siente poco claro, bloqueado o demasiado parecido a todo lo demás. Analizaré el problema y volveré con el siguiente paso más útil.', contactButton: 'Cuéntame', footer: 'Estrategia de contenido de marca · Dirección creativa · Sistemas de contenido · Europa', lightboxClose: 'Cerrar contenido', previous: 'Contenido anterior', next: 'Contenido siguiente'
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
      reelsLabel: 'Lavori selezionati in movimento', reelsTitle: 'Il mondo, in movimento.', reelsIntro: 'Alcuni esempi di come strategia e direzione creativa diventano immagini in movimento: dal primo hook e concept allo script, alla direzione e al montaggio.', reelHair1: 'La scienza in modo umano', reelHair2: 'Rituale di prodotto', reelOptics1: 'Hook culturale', reelOptics2: 'Mondo di prodotto', reelFashion1: 'Storia stagionale', reelFashion2: 'World-building emotivo', reelRoleFull: 'Hook · Script · Direzione creativa · Montaggio', reelRoleDirection: 'Concept · Direzione creativa · Montaggio',
      processLabel: 'Come procede un progetto', processTitle: 'Prima il pensiero chiaro. Poi un sistema che le persone possano usare.', processIntro: 'Il processo è volutamente semplice: capire ciò che esiste già, trovare il territorio che vale la pena occupare, costruirgli attorno un mondo e rendere quel mondo utilizzabile.', process1Title: 'Guardare da vicino.', process1Copy: 'Brand, prodotto, categoria, concorrenti, pubblico e il contesto culturale che li circonda.', process2Title: 'Trovare il territorio.', process2Copy: 'Definire il punto di vista, la narrazione, la voce e la direzione creativa che il brand può davvero fare propri.', process3Title: 'Costruire il mondo.', process3Copy: 'Trasformare l’idea in un linguaggio visivo, formati ricorrenti, storie e direzioni di campagna.', process4Title: 'Renderlo utilizzabile.', process4Copy: 'Costruire l’architettura dei contenuti, i brief e il ritmo che il team può portare avanti, con una direzione creativa continuativa quando serve.',
      servicesLabel: 'Come lavorare insieme', servicesTitle: 'Parti dal problema, non dal pacchetto.', servicesIntro: 'Alcuni brand hanno bisogno di una decisione precisa. Altri di un intero mondo costruito attorno a un’idea. Il perimetro dipende da ciò che manca: l’idea, il sistema o lo slancio per continuare a farlo evolvere.', offer1Title: 'Sessione di direzione creativa', offer1Lead: 'Un problema. Una sessione mirata. Un’idea più precisa.', offer1Copy: 'Per un brand, una campagna o una direzione di contenuto che sembra quasi giusta, ma non funziona ancora del tutto. Analizziamo il problema, la categoria e ciò che si perde lungo il percorso, poi troviamo un territorio più chiaro da cui ripartire.', offer1Output: 'Ideale per · Un’idea, una campagna o una direzione bloccata', offer2Title: 'Sprint di brand content', offer2Lead: 'Trovare il territorio. Definire il mondo. Costruire il primo sistema.', offer2Copy: 'Per brand che hanno bisogno di più di un altro calendario editoriale. Definiamo il territorio strategico, la voce e la direzione visiva, poi li trasformiamo in formati ripetibili, storie e una struttura editoriale che il team possa davvero usare.', offer2Output: 'Ideale per · Costruire o ridefinire la direzione dei contenuti di un brand', offer3Title: 'Direzione creativa continuativa', offer3Lead: 'Tenere viva l’idea senza ripetersi.', offer3Copy: 'Per brand che hanno già una direzione e cercano un partner creativo senior per farla evolvere: sviluppando campagne, concept di contenuto, linguaggio visivo e il sistema che li sostiene mentre il brand cresce.', offer3Output: 'Ideale per · Una collaborazione creativa e strategica continuativa',
      aboutLabel: 'Chi sono', aboutTitle: 'Mi piacciono i brand con un punto di vista.', aboutRhythm1: 'Quelli con un colore strano.', aboutRhythm2: 'Un modo molto preciso di parlare.', aboutRhythm3: 'Un’immagine che ti fa fermare per mezzo secondo.', aboutDetails: 'Lavoro tra strategia e direzione creativa: trovo ciò che rende un brand riconoscibile e trasformo quell’idea in contenuti con cui le persone possano davvero convivere.', aboutExperience: 'Ho costruito sistemi di contenuti per brand beauty, fashion, lifestyle e consumer in tutta Europa.', aboutMethod1: 'Strategia, quando serve pensare.', aboutMethod2: 'Direzione creativa, quando serve coraggio.', aboutMethod3: 'Sistemi, quando una buona idea deve sopravvivere al lunedì mattina.', aboutCredential: 'Da House of Sustainable Brands ad Amburgo, ho lavorato tra strategia e produzione per brand consumer digital-native: dall’analisi competitiva e dal posizionamento ai sistemi di contenuti annuali e agli asset creativi finali.', cred1Title: 'Esperienza con brand europei', cred1Copy: 'Brand beauty, fashion, lifestyle e consumer nei mercati europei', cred2Title: 'Strategia + creatività', cred2Copy: 'Dal territorio e dalla narrativa del brand alla direzione visiva e ai sistemi di contenuti', cred3Title: 'Pensato per collaborare', cred3Copy: 'Un processo remoto, strutturato e comodo per founder e piccoli team', aboutLanguages: 'Lavoro in russo, inglese, spagnolo, italiano e bielorusso.', galleryLabel: 'Lavori visivi selezionati', galleryTitle: 'Il mondo, negli scatti.', galleryIntro: 'Uno sguardo più ravvicinato a come gli stessi territori di brand diventano caroselli, immagini editoriali e un linguaggio visivo ricorrente.',
      gallery1Brand: 'Thiocyn · Hair care', gallery1Title: 'Una scienza a cui è più facile avvicinarsi.', gallery1Role: 'Carosello educativo · Direzione dei contenuti + art direction',
      gallery2Brand: 'Thiocyn · Hair care', gallery2Title: 'Un linguaggio visivo più calmo per comunicare credibilità clinica.', gallery2Role: 'Serie prodotto · Concept visivo + direzione copy',
      gallery3Brand: 'Ottica sostenibile · Lipsia', gallery3Title: 'Prodotto, luogo e materia nello stesso mondo.', gallery3Role: 'Serie lifestyle · Direzione visiva + copy',
      gallery4Brand: 'Ottica sostenibile · Lipsia', gallery4Title: 'Trasformare l’origine in una storia visiva ricorrente.', gallery4Role: 'Carosello di brand · Art direction + storytelling',
      gallery5Brand: 'Slow fashion · Europa', gallery5Title: 'La natura come parte della storia, non come decorazione.', gallery5Role: 'Serie stagionale · Narrativa di brand + art direction',
      gallery6Brand: 'Slow fashion · Europa', gallery6Title: 'Un unico mondo visivo, portato attraverso un’intera stagione.', gallery6Role: 'Carosello di world-building · Concept visivo + copy',
      gallery7Brand: 'Azafranes Manchegos · Concept indipendente', gallery7Title: 'Dal campo al filo: il valore è nella lentezza.', gallery7Role: 'Serie sull’origine · Direzione creativa + copy',
      gallery8Brand: 'Azafranes Manchegos · Concept indipendente', gallery8Title: 'Uno zafferano che non aspetta un’occasione speciale.', gallery8Role: 'Storia in cucina · Strategia + direzione creativa + copy',
      gallery9Brand: 'Labiatae · Esercizio strategico di brand', gallery9Title: 'Come la storia di un brand nasce da foto e ricerca.', gallery9Role: 'Ricerca + moodboard · Direzione di brand',
      gallery10Brand: 'Labiatae · Esercizio strategico di brand', gallery10Title: 'Una bottiglia non è mai solo una bottiglia.', gallery10Role: 'Poster di campagna · Concept + copy',
      gallery11Brand: 'Palentina de Aromáticas · Concept indipendente', gallery11Title: 'Un fiore. Molte industrie.', gallery11Role: 'Idea di brand · Strategia + concept',
      gallery12Brand: 'Palentina de Aromáticas · Concept indipendente', gallery12Title: 'La lavanda è più di un profumo.', gallery12Role: 'Moodboard dei territori · Ricerca + art direction',
      gallery13Brand: 'Palentina de Aromáticas · Concept indipendente', gallery13Title: 'Un fiore viola. Una storia dorata.', gallery13Role: 'Poster di campagna · Concept + copy',
      gallery14Brand: 'Palentina de Aromáticas · Concept indipendente', gallery14Title: 'La bellezza non è sempre delicata.', gallery14Role: 'Serie sulla terra · Art direction + storytelling',
      case4Category: 'Piante aromatiche · Concept indipendente', case4Title: 'Un fiore, molte industrie: un mondo di marca per una cooperativa di lavanda.', case4Problem: 'Una cooperativa di agricoltori in Castiglia distilla la lavanda in olio essenziale e lo vende come materia prima. La storia finisce dove l’olio lascia l’alambicco.', case4Idea: 'La lavanda è più di un profumo.', case4World: 'Un fiore letto attraverso quattro territori — cibo, bevande, materiali e ciò che resta dopo la distillazione — e radicato nella terra secca e ventosa in cui cresce.', case4System: 'Un’idea di brand, quattro moodboard di territorio, una campagna di poster e una serie sulla terra che può continuare a generare storie.', case4Result: 'Un concept di iniziativa personale: un territorio di marca nato dalla ricerca, pronto a estendersi a campagne, packaging e contenuti editoriali.', case4Metric1: 'territori di contenuto', case4Metric2: 'visual chiave', albumOpen: 'Apri l’album', albumClose: 'Chiudi l’album', albumSeries: 'serie', albumImages: 'immagini', caseNext: 'Caso successivo', casePrev: 'Caso precedente', scrollHint: 'Scorri di lato',
      contactLabel: 'Avvia un progetto', contactTitle: 'Hai un’idea che non ha ancora trovato la sua forma?', contactSupport: 'Raccontami cosa non è chiaro, cosa si è bloccato o cosa assomiglia troppo a tutto il resto. Guarderò il problema e tornerò con il passo successivo più utile.', contactButton: 'Raccontamela', footer: 'Strategia dei contenuti di brand · Direzione creativa · Sistemi di contenuti · Europa', lightboxClose: 'Chiudi media', previous: 'Media precedente', next: 'Media successivo'
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
      reelsLabel: 'Выбраныя працы ў руху', reelsTitle: 'Свет у руху.', reelsIntro: 'Некалькі прыкладаў таго, як стратэгія і крэатыўнае кіраўніцтва ператвараюцца ў рухомую выяву — ад першага хука і канцэпцыі да сцэнарыя, кіраўніцтва і мантажу.', reelHair1: 'Навука чалавечай мовай', reelHair2: 'Рытуал прадукту', reelOptics1: 'Культурны хук', reelOptics2: 'Свет прадукту', reelFashion1: 'Сезонная гісторыя', reelFashion2: 'Эмацыйны свет брэнда', reelRoleFull: 'Хук · Сцэнар · Крэатыўнае кіраўніцтва · Мантаж', reelRoleDirection: 'Канцэпцыя · Крэатыўнае кіраўніцтва · Мантаж',
      processLabel: 'Як рухаецца праект', processTitle: 'Спачатку ясная думка. Потым сістэма, якой можна карыстацца.', processIntro: 'Працэс наўмысна просты: зразумець, што ўжо ёсць, знайсці тэрыторыю, якую брэнд можа заняць, пабудаваць вакол яе свет і ператварыць гэты свет у працоўную сістэму.', process1Title: 'Паглядзець уважлівей.', process1Copy: 'Брэнд, прадукт, катэгорыя, канкурэнты, аўдыторыя і культурны кантэкст вакол іх.', process2Title: 'Знайсці тэрыторыю.', process2Copy: 'Вызначыць пункт гледжання, наратыў, голас і крэатыўны напрамак, якія брэнд сапраўды можа зрабіць сваімі.', process3Title: 'Пабудаваць свет.', process3Copy: 'Ператварыць ідэю ў візуальную мову, паўтаральныя фарматы, гісторыі і напрамкі для кампаній.', process4Title: 'Зрабіць яго працоўным.', process4Copy: 'Сабраць кантэнт-архітэктуру, брыфы і рытм, з якімі каманда зможа рухацца далей — пры неабходнасці з пастаянным крэатыўным кіраўніцтвам.',
      servicesLabel: 'Фарматы супрацоўніцтва', servicesTitle: 'Пачынаць трэба з задачы, а не з пакета.', servicesIntro: 'Адному брэнду патрэбна адно дакладнае рашэнне. Іншаму — цэлы свет вакол ідэі. Аб’ём працы залежыць ад таго, чаго цяпер не хапае: самой ідэі, сістэмы або руху, які трэба падтрымліваць далей.', offer1Title: 'Сесія крэатыўнага напрамку', offer1Lead: 'Адна задача. Адзін фокус. Больш дакладная ідэя.', offer1Copy: 'Для брэнда, кампаніі або кантэнт-напрамку, які амаль працуе, але ўсё яшчэ не складваецца. Разбіраем праблему, катэгорыю і тое, што губляецца па дарозе, — і знаходзім больш ясную тэрыторыю для руху далей.', offer1Output: 'Найлепш · Калі ідэя, кампанія або напрамак затрымаліся', offer2Title: 'Спрынт па брэнд-кантэнце', offer2Lead: 'Знайсці тэрыторыю. Сабраць свет. Пабудаваць першую сістэму.', offer2Copy: 'Для брэндаў, якім патрэбны не яшчэ адзін кантэнт-каляндар. Мы вызначаем стратэгічную тэрыторыю, голас і візуальны напрамак, а затым ператвараем іх у паўтаральныя фарматы, гісторыі і рэдакцыйную структуру, якой каманда сапраўды зможа карыстацца.', offer2Output: 'Найлепш · Для запуску або перазапуску кантэнт-напрамку брэнда', offer3Title: 'Пастаяннае крэатыўнае кіраўніцтва', offer3Lead: 'Развіваць ідэю, не паўтараючы сябе.', offer3Copy: 'Для брэндаў, у якіх ужо ёсць напрамак, але патрэбны дасведчаны крэатыўны партнёр, каб развіваць яго далей — кампаніі, кантэнт-канцэпцыі, візуальную мову і сістэму вакол іх па меры росту брэнда.', offer3Output: 'Найлепш · Для пастаяннага стратэгічнага і крэатыўнага партнёрства',
      aboutLabel: 'Пра мяне', aboutTitle: 'Мне падабаюцца брэнды з уласным пунктам гледжання.', aboutRhythm1: 'Тыя, у якіх дзіўны колер.', aboutRhythm2: 'Вельмі канкрэтная манера гаварыць.', aboutRhythm3: 'Выява, на якой погляд затрымліваецца хаця б на паўсекунды.', aboutDetails: 'Я працую на стыку стратэгіі і крэатыўнага кіраўніцтва — знаходжу тое, што робіць брэнд пазнавальным, а затым ператвараю гэтую ідэю ў кантэнт, з якім сапраўды можна жыць і працаваць.', aboutExperience: 'Я стварала кантэнт-сістэмы для beauty, fashion, lifestyle і consumer-брэндаў па ўсёй Еўропе.', aboutMethod1: 'Стратэгія — калі трэба падумаць.', aboutMethod2: 'Крэатыўнае кіраўніцтва — калі патрэбная смеласць.', aboutMethod3: 'Сістэма — калі добрай ідэі трэба перажыць панядзелак.', aboutCredential: 'У House of Sustainable Brands у Гамбургу я працавала са стратэгіяй і вытворчасцю для digital-native consumer-брэндаў — ад аналізу канкурэнтаў і пазіцыянавання да гадавых кантэнт-сістэм і гатовых крэатыўных матэрыялаў.', cred1Title: 'Праца з еўрапейскімі брэндамі', cred1Copy: 'Beauty, fashion, lifestyle і consumer-брэнды на рынках Еўропы', cred2Title: 'Стратэгія + крэатыў', cred2Copy: 'Ад тэрыторыі брэнда і наратыву да візуальнага напрамку і кантэнт-сістэм', cred3Title: 'Створана для супрацоўніцтва', cred3Copy: 'Дыстанцыйна, структуравана і камфортна для заснавальнікаў і невялікіх каманд', aboutLanguages: 'Працую на рускай, англійскай, іспанскай, італьянскай і беларускай мовах.', galleryLabel: 'Выбраныя візуальныя працы', galleryTitle: 'Той жа свет — у кадры.', galleryIntro: 'Больш блізкі погляд на тое, як тыя ж тэрыторыі брэндаў ператвараюцца ў каруселі, рэдакцыйныя выявы і паўтаральную візуальную мову.',
      gallery1Brand: 'Thiocyn · Догляд валасоў', gallery1Title: 'Навука, да якой лягчэй наблізіцца.', gallery1Role: 'Адукацыйная карусель · Кантэнт-напрамак + арт-дырэкшн',
      gallery2Brand: 'Thiocyn · Догляд валасоў', gallery2Title: 'Больш спакойная візуальная мова для клінічнай пераканаўчасці.', gallery2Role: 'Прадуктовая серыя · Візуальная канцэпцыя + кірунак тэксту',
      gallery3Brand: 'Устойлівая оптыка · Лейпцыг', gallery3Title: 'Прадукт, месца і матэрыял у адным свеце.', gallery3Role: 'Лайфстайл-серыя · Візуальны напрамак + тэкст',
      gallery4Brand: 'Устойлівая оптыка · Лейпцыг', gallery4Title: 'Ператварыць паходжанне ў паўтаральную візуальную гісторыю.', gallery4Role: 'Брэнд-карусель · Арт-дырэкшн + сторытэлінг',
      gallery5Brand: 'Slow fashion · Еўропа', gallery5Title: 'Прырода як частка гісторыі, а не дэкарацыя.', gallery5Role: 'Сезонная серыя · Наратыў брэнда + арт-дырэкшн',
      gallery6Brand: 'Slow fashion · Еўропа', gallery6Title: 'Адзін візуальны свет на працягу ўсяго сезона.', gallery6Role: 'Карусель пра свет брэнда · Візуальная канцэпцыя + тэкст',
      gallery7Brand: 'Azafranes Manchegos · Незалежны канцэпт', gallery7Title: 'Ад поля да ніткі: каштоўнасць — у павольнасці.', gallery7Role: 'Серыя пра паходжанне · Крэатыўны напрамак + тэкст',
      gallery8Brand: 'Azafranes Manchegos · Незалежны канцэпт', gallery8Title: 'Шафран, які не чакае асаблівай нагоды.', gallery8Role: 'Кухонная гісторыя · Стратэгія + крэатыўны напрамак + тэкст',
      gallery9Brand: 'Labiatae · Стратэгічнае практыкаванне для брэнда', gallery9Title: 'Як гісторыя брэнда складаецца з фотаздымкаў і даследавання.', gallery9Role: 'Даследаванне + мудборд · Напрамак брэнда',
      gallery10Brand: 'Labiatae · Стратэгічнае практыкаванне для брэнда', gallery10Title: 'Флакон — ніколі не проста флакон.', gallery10Role: 'Постэры кампаніі · Канцэпцыя + тэкст',
      gallery11Brand: 'Palentina de Aromáticas · Незалежны канцэпт', gallery11Title: 'Адна кветка. Шмат індустрый.', gallery11Role: 'Ідэя брэнда · Стратэгія + канцэпцыя',
      gallery12Brand: 'Palentina de Aromáticas · Незалежны канцэпт', gallery12Title: 'Лаванда — больш, чым водар.', gallery12Role: 'Мудборды тэрыторый · Даследаванне + арт-дырэкшн',
      gallery13Brand: 'Palentina de Aromáticas · Незалежны канцэпт', gallery13Title: 'Фіялетавая кветка. Залатая гісторыя.', gallery13Role: 'Постэры кампаніі · Канцэпцыя + тэкст',
      gallery14Brand: 'Palentina de Aromáticas · Незалежны канцэпт', gallery14Title: 'Прыгажосць не заўсёды кволая.', gallery14Role: 'Серыя пра зямлю · Арт-дырэкшн + сторытэлінг',
      case4Category: 'Араматычныя расліны · Незалежны канцэпт', case4Title: 'Адна кветка, шмат індустрый: свет брэнда для лавандавага кааператыва.', case4Problem: 'Фермерскі кааператыў у Кастыліі пераганяе лаванду ў эфірны алей і прадае яго як сыравіну. Гісторыя заканчваецца там, дзе алей пакідае перагонны куб.', case4Idea: 'Лаванда — больш, чым водар.', case4World: 'Адна кветка, прачытаная праз чатыры тэрыторыі — ежа, напоі, матэрыял і тое, што застаецца пасля дыстыляцыі, — і ўкаранёная ў сухой, ветранай зямлі, на якой яна расце.', case4System: 'Ідэя брэнда, чатыры мудборды тэрыторый, постэрная кампанія і серыя пра зямлю, з якіх можна працягваць рабіць гісторыі.', case4Result: 'Самастойны канцэпт: тэрыторыя брэнда, якая вырасла з даследавання і гатовая працягнуцца ў кампаніях, упакоўцы і рэдакцыйным кантэнце.', case4Metric1: 'кантэнт-тэрыторыі', case4Metric2: 'ключавых візуалаў', albumOpen: 'Адкрыць альбом', albumClose: 'Закрыць альбом', albumSeries: 'серыі', albumImages: 'выяў', caseNext: 'Наступны кейс', casePrev: 'Папярэдні кейс', scrollHint: 'Гартайце ўбок',
      contactLabel: 'Пачаць праект', contactTitle: 'Ёсць ідэя, якая пакуль не знайшла сваю форму?', contactSupport: 'Раскажыце, што застаецца няясным, затрымалася або занадта падобнае да ўсяго астатняга. Я пагляджу на задачу і прапаную найбольш карысны наступны крок.', contactButton: 'Раскажыце пра яе', footer: 'Стратэгія брэнд-кантэнту · Крэатыўнае кіраўніцтва · Кантэнт-сістэмы · Еўропа', lightboxClose: 'Закрыць медыя', previous: 'Папярэдняе медыя', next: 'Наступнае медыя'
    }
  };

  const FORM_COPY = {
    en: {
      asyncLabel: 'Async collaboration', asyncTitle: 'Designed to work well asynchronously.', asyncCopy: 'Projects can move through a structured brief, written feedback and clear milestones. Calls are there when they add value — not as a default.', asyncFlow: 'BRIEF → DIRECTION → BUILD → REVIEW → HANDOFF',
      formLabel: 'Project brief', formTitle: 'Tell me what you\'re working on.', formIntro: 'A few essentials are enough. I’ll read the brief and reply with the most useful next step, a possible scope and an estimated investment.', requiredNote: 'Required fields are marked with *.',
      name: 'Name *', email: 'Email *', company: 'Company', website: 'Website', industry: 'Industry', industryPlaceholder: 'Beauty, fashion, wellness…', needs: 'What do you need? *', service1: 'Creative Direction Session', service2: 'Brand Content Sprint', service3: 'Ongoing Creative Direction', service4: 'Not sure yet', serviceError: 'Please select at least one option.', budget: 'What’s your approximate budget?', project: 'What are you working on? *', projectPlaceholder: 'What are you building, what feels unclear or stuck, and what would a useful outcome look like?', submit: 'Send the brief', sending: 'Sending…', privacy: 'Your information will only be used to review and respond to this project brief.',
      successTitle: 'Thanks — I have your brief.', successCopy: 'I’ll read it and reply with the most useful next step, possible scope and an estimated investment.', errorTitle: 'The brief could not be sent.', errorCopy: 'Please try again or send it directly by email.', directContact: 'Prefer to write directly?'
    },
    ru: {
      asyncLabel: 'Асинхронная работа', asyncTitle: 'Процесс удобно работает и без постоянных созвонов.', asyncCopy: 'Проект может двигаться через структурированный бриф, письменную обратную связь и понятные этапы. Созвоны подключаются тогда, когда действительно помогают.', asyncFlow: 'БРИФ → НАПРАВЛЕНИЕ → РАЗРАБОТКА → ПРОВЕРКА → ПЕРЕДАЧА',
      formLabel: 'Бриф проекта', formTitle: 'Расскажите, над чем вы работаете.', formIntro: 'Достаточно нескольких основных деталей. Я прочитаю бриф и отвечу с самым полезным следующим шагом, возможным объёмом работ и ориентировочной стоимостью.', requiredNote: 'Обязательные поля отмечены *.',
      name: 'Имя *', email: 'Email *', company: 'Компания', website: 'Сайт', industry: 'Сфера', industryPlaceholder: 'Beauty, fashion, wellness…', needs: 'Что вам нужно? *', service1: 'Сессия креативного направления', service2: 'Спринт по бренд-контенту', service3: 'Постоянное креативное руководство', service4: 'Пока не уверен(а)', serviceError: 'Выберите хотя бы один вариант.', budget: 'Примерный бюджет', project: 'Над чем вы работаете? *', projectPlaceholder: 'Что вы создаёте, что кажется неясным или застряло и каким должен быть полезный результат?', submit: 'Отправить бриф', sending: 'Отправка…', privacy: 'Ваша информация будет использована только для рассмотрения этого брифа и ответа на него.',
      successTitle: 'Спасибо — я получила ваш бриф.', successCopy: 'Я прочитаю его и отвечу с самым полезным следующим шагом, возможным объёмом работ и ориентировочной стоимостью.', errorTitle: 'Не удалось отправить бриф.', errorCopy: 'Попробуйте ещё раз или отправьте его напрямую по email.', directContact: 'Предпочитаете написать напрямую?'
    },
    es: {
      asyncLabel: 'Colaboración asíncrona', asyncTitle: 'Diseñado para funcionar bien de forma asíncrona.', asyncCopy: 'Los proyectos pueden avanzar mediante un brief estructurado, feedback por escrito e hitos claros. Las llamadas se incorporan cuando aportan valor, no por defecto.', asyncFlow: 'BRIEF → DIRECCIÓN → DESARROLLO → REVISIÓN → ENTREGA',
      formLabel: 'Brief del proyecto', formTitle: 'Cuéntame en qué estás trabajando.', formIntro: 'Con unos pocos datos esenciales es suficiente. Leeré el brief y responderé con el siguiente paso más útil, un posible alcance y una inversión estimada.', requiredNote: 'Los campos obligatorios están marcados con *.',
      name: 'Nombre *', email: 'Email *', company: 'Empresa', website: 'Sitio web', industry: 'Sector', industryPlaceholder: 'Belleza, moda, wellness…', needs: '¿Qué necesitas? *', service1: 'Sesión de dirección creativa', service2: 'Sprint de contenido de marca', service3: 'Dirección creativa continua', service4: 'Todavía no lo tengo claro', serviceError: 'Selecciona al menos una opción.', budget: 'Presupuesto aproximado', project: '¿En qué estás trabajando? *', projectPlaceholder: '¿Qué estás construyendo, qué se siente poco claro o bloqueado y cómo sería un resultado útil?', submit: 'Enviar el brief', sending: 'Enviando…', privacy: 'Tu información solo se utilizará para revisar y responder a este brief de proyecto.',
      successTitle: 'Gracias — ya tengo tu brief.', successCopy: 'Lo leeré y responderé con el siguiente paso más útil, un posible alcance y una inversión estimada.', errorTitle: 'No se pudo enviar el brief.', errorCopy: 'Inténtalo de nuevo o envíalo directamente por email.', directContact: '¿Prefieres escribir directamente?'
    },
    it: {
      asyncLabel: 'Collaborazione asincrona', asyncTitle: 'Pensato per funzionare bene anche in asincrono.', asyncCopy: 'I progetti possono avanzare attraverso un brief strutturato, feedback scritti e tappe chiare. Le call entrano in gioco quando aggiungono valore, non come impostazione predefinita.', asyncFlow: 'BRIEF → DIREZIONE → SVILUPPO → REVISIONE → CONSEGNA',
      formLabel: 'Brief del progetto', formTitle: 'Raccontami a cosa stai lavorando.', formIntro: 'Bastano pochi elementi essenziali. Leggerò il brief e risponderò con il passo successivo più utile, un possibile perimetro e una stima dell’investimento.', requiredNote: 'I campi obbligatori sono contrassegnati da *.',
      name: 'Nome *', email: 'Email *', company: 'Azienda', website: 'Sito web', industry: 'Settore', industryPlaceholder: 'Beauty, moda, wellness…', needs: 'Di cosa hai bisogno? *', service1: 'Sessione di direzione creativa', service2: 'Sprint di brand content', service3: 'Direzione creativa continuativa', service4: 'Non ne sono ancora sicuro/a', serviceError: 'Seleziona almeno un’opzione.', budget: 'Budget indicativo', project: 'A cosa stai lavorando? *', projectPlaceholder: 'Cosa stai costruendo, cosa non è chiaro o si è bloccato e come sarebbe un risultato utile?', submit: 'Invia il brief', sending: 'Invio…', privacy: 'Le tue informazioni saranno utilizzate solo per esaminare e rispondere a questo brief di progetto.',
      successTitle: 'Grazie — ho ricevuto il tuo brief.', successCopy: 'Lo leggerò e risponderò con il passo successivo più utile, un possibile perimetro e una stima dell’investimento.', errorTitle: 'Non è stato possibile inviare il brief.', errorCopy: 'Riprova oppure invialo direttamente via email.', directContact: 'Preferisci scrivere direttamente?'
    },
    by: {
      asyncLabel: 'Асінхронная праца', asyncTitle: 'Працэс добра працуе і без пастаянных званкоў.', asyncCopy: 'Праект можа рухацца праз структураваны брыф, пісьмовую зваротную сувязь і зразумелыя этапы. Званкі далучаюцца тады, калі сапраўды дапамагаюць.', asyncFlow: 'БРЫФ → НАПРАМАК → РАСПРАЦОЎКА → ПРАВЕРКА → ПЕРАДАЧА',
      formLabel: 'Брыф праекта', formTitle: 'Раскажыце, над чым вы працуеце.', formIntro: 'Дастаткова некалькіх асноўных дэталяў. Я прачытаю брыф і адкажу з найбольш карысным наступным крокам, магчымым аб’ёмам працы і арыенціровачнымі інвестыцыямі.', requiredNote: 'Абавязковыя палі пазначаны *.',
      name: 'Імя *', email: 'Email *', company: 'Кампанія', website: 'Сайт', industry: 'Сфера', industryPlaceholder: 'Beauty, fashion, wellness…', needs: 'Што вам патрэбна? *', service1: 'Сесія крэатыўнага напрамку', service2: 'Спрынт па брэнд-кантэнце', service3: 'Пастаяннае крэатыўнае кіраўніцтва', service4: 'Пакуль не ўпэўнены(ая)', serviceError: 'Выберыце хаця б адзін варыянт.', budget: 'Прыкладны бюджэт', project: 'Над чым вы працуеце? *', projectPlaceholder: 'Што вы ствараеце, што застаецца няясным або затрымалася і якім выглядаў бы карысны вынік?', submit: 'Адправіць брыф', sending: 'Адпраўка…', privacy: 'Ваша інфармацыя будзе выкарыстана толькі для разгляду гэтага брыфа і адказу на яго.',
      successTitle: 'Дзякуй — я атрымала ваш брыф.', successCopy: 'Я прачытаю яго і адкажу з найбольш карысным наступным крокам, магчымым аб’ёмам працы і арыенціровачнымі інвестыцыямі.', errorTitle: 'Не ўдалося адправіць брыф.', errorCopy: 'Паспрабуйце яшчэ раз або адпраўце яго непасрэдна па email.', directContact: 'Аддаеце перавагу напісаць наўпрост?'
    }
  };

  const SYSTEM_TAGS = {
    en: {
      haircare: ['Competitor intelligence', 'Brand manifesto', 'Positioning', 'Communication rules', '12-month masterplan', 'Content pillars', 'Evergreen formats', 'Hook library', 'Highlights architecture', 'Monthly content calendars', 'Compliance framework', 'Production workflow'],
      optics: ['Competitor analysis', 'Manifesto', 'Tone of voice', 'Positioning', 'Content pillars', 'Visual direction', 'Hook system', 'Editorial rhythm', 'KPI framework', 'Content calendar'],
      fashion: ['Audience portrait', 'Positioning', 'Seasonal narrative', 'Communication rules', 'Content matrix', 'Content pillars', 'Repeatable formats', 'Annual masterplan', 'Production calendar', 'Story briefs'],
      lavender: ['Territory research', 'Brand idea', 'Moodboards', 'Campaign concept', 'Poster series', 'Copywriting', 'Art direction', 'Land narrative']
    },
    ru: {
      haircare: ['Анализ конкурентов', 'Манифест бренда', 'Позиционирование', 'Правила коммуникации', 'Мастер-план на 12 месяцев', 'Контент-рубрики', 'Постоянные форматы', 'Библиотека хуков', 'Архитектура Highlights', 'Ежемесячные контент-календари', 'Система compliance', 'Процесс производства'],
      optics: ['Анализ конкурентов', 'Манифест', 'Tone of voice', 'Позиционирование', 'Контент-рубрики', 'Визуальное направление', 'Система хуков', 'Редакционный ритм', 'KPI-фреймворк', 'Контент-календарь'],
      fashion: ['Портрет аудитории', 'Позиционирование', 'Сезонный нарратив', 'Правила коммуникации', 'Контент-матрица', 'Контент-рубрики', 'Повторяемые форматы', 'Годовой мастер-план', 'Производственный календарь', 'Брифы историй'],
      lavender: ['Исследование территории', 'Идея бренда', 'Мудборды', 'Концепция кампании', 'Серия постеров', 'Копирайтинг', 'Арт-дирекшн', 'Нарратив земли']
    },
    es: {
      haircare: ['Inteligencia competitiva', 'Manifiesto de marca', 'Posicionamiento', 'Reglas de comunicación', 'Plan de 12 meses', 'Pilares de contenido', 'Formatos evergreen', 'Biblioteca de hooks', 'Arquitectura de Highlights', 'Calendarios mensuales', 'Marco de compliance', 'Flujo de producción'],
      optics: ['Análisis competitivo', 'Manifiesto', 'Tono de voz', 'Posicionamiento', 'Pilares de contenido', 'Dirección visual', 'Sistema de hooks', 'Ritmo editorial', 'Marco de KPIs', 'Calendario de contenido'],
      fashion: ['Perfil de audiencia', 'Posicionamiento', 'Narrativa estacional', 'Reglas de comunicación', 'Matriz de contenido', 'Pilares de contenido', 'Formatos repetibles', 'Plan anual', 'Calendario de producción', 'Briefs narrativos'],
      lavender: ['Investigación del territorio', 'Idea de marca', 'Moodboards', 'Concepto de campaña', 'Serie de pósters', 'Copywriting', 'Dirección de arte', 'Narrativa de la tierra']
    },
    it: {
      haircare: ['Analisi competitiva', 'Manifesto di marca', 'Posizionamento', 'Regole di comunicazione', 'Masterplan di 12 mesi', 'Content pillar', 'Formati evergreen', 'Libreria di hook', 'Architettura Highlights', 'Calendari mensili', 'Framework di compliance', 'Flusso di produzione'],
      optics: ['Analisi competitiva', 'Manifesto', 'Tone of voice', 'Posizionamento', 'Content pillar', 'Direzione visiva', 'Sistema di hook', 'Ritmo editoriale', 'Framework KPI', 'Calendario editoriale'],
      fashion: ['Profilo del pubblico', 'Posizionamento', 'Narrazione stagionale', 'Regole di comunicazione', 'Matrice dei contenuti', 'Content pillar', 'Formati ripetibili', 'Masterplan annuale', 'Calendario di produzione', 'Brief narrativi'],
      lavender: ['Ricerca sul territorio', 'Idea di brand', 'Moodboard', 'Concept di campagna', 'Serie di poster', 'Copywriting', 'Art direction', 'Narrazione della terra']
    },
    by: {
      haircare: ['Аналіз канкурэнтаў', 'Маніфест брэнда', 'Пазіцыянаванне', 'Правілы камунікацыі', 'Майстар-план на 12 месяцаў', 'Кантэнт-рубрыкі', 'Пастаянныя фарматы', 'Бібліятэка хукаў', 'Архітэктура Highlights', 'Штомесячныя кантэнт-календары', 'Сістэма compliance', 'Вытворчы працэс'],
      optics: ['Аналіз канкурэнтаў', 'Маніфест', 'Tone of voice', 'Пазіцыянаванне', 'Кантэнт-рубрыкі', 'Візуальны напрамак', 'Сістэма хукаў', 'Рэдакцыйны рытм', 'KPI-фрэймворк', 'Кантэнт-каляндар'],
      fashion: ['Партрэт аўдыторыі', 'Пазіцыянаванне', 'Сезонны наратыў', 'Правілы камунікацыі', 'Кантэнт-матрыца', 'Кантэнт-рубрыкі', 'Паўтаральныя фарматы', 'Гадавы майстар-план', 'Вытворчы каляндар', 'Брыфы гісторый'],
      lavender: ['Даследаванне тэрыторыі', 'Ідэя брэнда', 'Мудборды', 'Канцэпцыя кампаніі', 'Серыя постэраў', 'Капірайтынг', 'Арт-дырэкшн', 'Наратыў зямлі']
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
    const metrics = SITE_DATA.metrics.map(metric => `<div class="metric reveal"><strong class="metric-value">${metric.value}</strong><div class="metric-label" data-i18n="${metric.key}">${en[metric.key]}</div></div>`).join('');
    const capabilities = [1,2,3].map(n => `<article class="capability reveal"><span class="capability-num">0${n}</span><h3 data-i18n="cap${n}Title">${en[`cap${n}Title`]}</h3><div class="capability-copy"><p class="capability-lead" data-i18n="cap${n}Lead">${en[`cap${n}Lead`]}</p><p data-i18n="cap${n}Copy">${en[`cap${n}Copy`]}</p><p class="term-line" data-i18n="cap${n}Terms">${en[`cap${n}Terms`]}</p></div></article>`).join('');
    const processes = [1,2,3,4].map(n => `<article class="process-step reveal"><span class="process-step-num">0${n}</span><h3 data-i18n="process${n}Title">${en[`process${n}Title`]}</h3><p data-i18n="process${n}Copy">${en[`process${n}Copy`]}</p></article>`).join('');
    const offers = [1,2,3].map(n => `<article class="offer reveal"><span class="offer-num">0${n}</span><h3 data-i18n="offer${n}Title">${en[`offer${n}Title`]}</h3><div class="offer-copy"><p class="offer-lead" data-i18n="offer${n}Lead">${en[`offer${n}Lead`]}</p><p class="offer-body" data-i18n="offer${n}Copy">${en[`offer${n}Copy`]}</p></div><div class="offer-output" data-i18n="offer${n}Output">${en[`offer${n}Output`]}</div></article>`).join('');
    const html = `
      <section id="proof" aria-labelledby="proof-title"><div class="proof-heading eyebrow" id="proof-title" data-i18n="proofHeading">${en.proofHeading}</div><div class="metrics-grid">${metrics}</div></section>
      <section id="expertise">${sectionHead('expertiseLabel','expertiseTitle','expertiseIntro')}<div class="capability-list">${capabilities}</div></section>
      ${renderThinking()}
      <section id="work">${sectionHead('workLabel','workTitle','workIntro')}
        <div class="case-nav reveal"><div class="case-tabs" role="tablist">${[1,2,3,4].map(n => `<button class="case-tab" type="button" role="tab" data-case-index="${n-1}"><span class="case-tab-num">0${n}</span><span class="case-tab-name" data-i18n="case${n}Category">${en[`case${n}Category`]}</span></button>`).join('')}</div><div class="rail-arrows"><button class="rail-btn" type="button" data-case-dir="-1" data-i18n-aria-label="casePrev" aria-label="${en.casePrev}">&#8592;</button><button class="rail-btn" type="button" data-case-dir="1" data-i18n-aria-label="caseNext" aria-label="${en.caseNext}">&#8594;</button></div></div>
        <div class="case-track">
        ${renderCase('01','case1Category','case1Title','case1Problem','case1Idea','case1World','case1System','case1Result','haircare',[{value:'200+',key:'case1Metric1'},{value:'12',key:'case1Metric2'},{value:'6+',key:'case1Metric3'}],true,['assets/img/cases/hair-loss/Slider-1-1.webp','assets/img/cases/hair-loss/Slider-4-1.webp','assets/img/cases/hair-loss/Slider-4-4.webp'])}
        ${renderCase('02','case2Category','case2Title','case2Problem','case2Idea','case2World','case2System','case2Result','optics',[{value:'150+',key:'case2Metric1'}],false,['assets/img/cases/sunglasses/Carusel-cover.webp','assets/img/cases/sunglasses/99.webp','assets/img/cases/sunglasses/post3_feed.webp'])}
        ${renderCase('03','case3Category','case3Title','case3Problem','case3Idea','case3World','case3System','case3Result','fashion',null,false,['assets/img/cases/lifestyle/Holly-0.webp','assets/img/cases/lifestyle/Slider-3-1.webp','assets/img/cases/lifestyle/LS-1.webp'])}
        ${renderCase('04','case4Category','case4Title','case4Problem','case4Idea','case4World','case4System','case4Result','lavender',[{value:'4',key:'case4Metric1'},{value:'13',key:'case4Metric2'}],false,['assets/img/cases/lavender/idea-01.webp','assets/img/cases/lavender/campaign-01.webp','assets/img/cases/lavender/land-01.webp'])}
        </div>
      </section>
      <section id="reels">${sectionHead('reelsLabel','reelsTitle','reelsIntro')}<div class="reels-grid">
        ${renderReel('assets/img/cases/hair-loss/videos/identit.mp4','assets/img/cases/hair-loss/posters/identit.webp','reelHair1','reelRoleFull')}
        ${renderReel('assets/img/cases/hair-loss/videos/ClipHearSerum.mp4','assets/img/cases/hair-loss/posters/ClipHearSerum.webp','reelHair2','reelRoleDirection')}
        ${renderReel('assets/img/cases/sunglasses/videos/VampBest.mp4','assets/img/cases/sunglasses/posters/VampBest.webp','reelOptics1','reelRoleFull')}
        ${renderReel('assets/img/cases/sunglasses/videos/SG-9.mp4','assets/img/cases/sunglasses/posters/SG-9.webp','reelOptics2','reelRoleDirection')}
        ${renderReel('assets/img/cases/lifestyle/videos/Llamas_1.mp4','assets/img/cases/lifestyle/posters/Llamas_1.webp','reelFashion1','reelRoleFull')}
        ${renderReel('assets/img/cases/lifestyle/videos/Llama_Lifestyle_2.mp4','assets/img/cases/lifestyle/posters/Llama_Lifestyle_2.webp','reelFashion2','reelRoleDirection')}
      </div></section>
      <section id="process">${sectionHead('processLabel','processTitle','processIntro')}<div class="process-line">${processes}</div></section>
      <section id="services">${sectionHead('servicesLabel','servicesTitle','servicesIntro')}<div class="offers">${offers}</div></section>
      <section id="about"><div class="about-layout"><div class="about-portrait reveal"><img src="assets/img/hero/Kat-editorial-bw.jpg" width="1086" height="1448" loading="lazy" decoding="async" alt="${en.heroAlt}" data-i18n-alt="heroAlt"></div><div class="about-copy reveal">${element('div','aboutLabel','section-label')}${element('h2','aboutTitle','')}<div class="about-story"><p class="about-rhythm">${[1,2,3].map(n => element('span',`aboutRhythm${n}`,'')).join('')}</p>${element('p','aboutDetails','about-details')}${element('p','aboutExperience','about-experience')}<p class="about-method">${[1,2,3].map(n => element('span',`aboutMethod${n}`,'')).join('')}</p></div>${element('p','aboutCredential','about-credentials')}</div><div class="about-proof reveal"><div class="credibility-list">${[1,2,3].map(n => `<div class="credibility-item"><strong data-i18n="cred${n}Title">${en[`cred${n}Title`]}</strong><span data-i18n="cred${n}Copy">${en[`cred${n}Copy`]}</span></div>`).join('')}</div>${element('p','aboutLanguages','about-languages')}</div></div></section>`;
    document.getElementById('hero').insertAdjacentHTML('afterend', html);
  }

  function upgradeGallery() {
    const gallery = document.getElementById('gallery');
    document.getElementById('reels')?.insertAdjacentElement('afterend', gallery);
    gallery.insertAdjacentHTML('afterbegin', sectionHead('galleryLabel','galleryTitle','galleryIntro'));
    gallery.querySelectorAll('img').forEach((img, index) => {
      img.loading = 'lazy';
      img.decoding = 'async';
      if (!img.alt) img.alt = `Selected creative work ${index + 1}`;
    });
    gallery.querySelectorAll('.carousel-btn.prev').forEach(button => { button.dataset.i18nAriaLabel = 'previous'; button.setAttribute('aria-label', en.previous); });
    gallery.querySelectorAll('.carousel-btn.next').forEach(button => { button.dataset.i18nAriaLabel = 'next'; button.setAttribute('aria-label', en.next); });
  }

  function bindGalleryInteractions() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lb-img');
    const lightboxCounter = document.getElementById('lb-counter');
    const lightboxPrevious = document.getElementById('lb-prev');
    const lightboxNext = document.getElementById('lb-next');
    const allSlides = [...document.querySelectorAll('#galleryGrid .carousel-slide')];
    let slides = allSlides;
    let currentLightboxIndex = 0;

    const showLightboxItem = () => {
      const slide = slides[currentLightboxIndex];
      if (!slide) return;
      lightboxImage.style.display = 'block';
      lightboxImage.src = slide.getAttribute('src');
      lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${slides.length}`;
      lightboxPrevious.style.opacity = slides.length > 1 ? '1' : '0';
      lightboxNext.style.opacity = slides.length > 1 ? '1' : '0';
    };

    const openLightbox = slide => {
      slides = allSlides.filter(item => !item.closest('.gallery-item').hidden);
      const index = slides.indexOf(slide);
      if (index < 0) return;
      currentLightboxIndex = index;
      showLightboxItem();
      lightbox.classList.add('open');
    };

    const closeLightbox = () => {
      lightbox.classList.remove('open');
      lightboxImage.src = '';
    };

    const moveLightbox = direction => {
      if (!slides.length) return;
      currentLightboxIndex = (currentLightboxIndex + direction + slides.length) % slides.length;
      showLightboxItem();
    };

    document.getElementById('lb-close').addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', event => { if (event.target === lightbox) closeLightbox(); });
    lightboxPrevious.addEventListener('click', () => moveLightbox(-1));
    lightboxNext.addEventListener('click', () => moveLightbox(1));
    document.addEventListener('keydown', event => {
      if (!lightbox.classList.contains('open')) return;
      if (event.key === 'Escape') closeLightbox();
      if (event.key === 'ArrowLeft') moveLightbox(-1);
      if (event.key === 'ArrowRight') moveLightbox(1);
    });
    allSlides.forEach(slide => slide.addEventListener('click', () => openLightbox(slide)));

    document.querySelectorAll('.carousel').forEach(carousel => {
      const track = carousel.querySelector('.carousel-track');
      const carouselSlides = carousel.querySelectorAll('.carousel-slide');
      const counter = carousel.querySelector('.carousel-counter');
      let currentIndex = 0;
      const goTo = index => {
        currentIndex = (index + carouselSlides.length) % carouselSlides.length;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        if (counter) counter.textContent = `${currentIndex + 1} / ${carouselSlides.length}`;
      };
      carousel.querySelector('.prev').addEventListener('click', event => { event.stopPropagation(); goTo(currentIndex - 1); });
      carousel.querySelector('.next').addEventListener('click', event => { event.stopPropagation(); goTo(currentIndex + 1); });
      carousel.addEventListener('keydown', event => {
        if (event.key === 'ArrowLeft') { event.preventDefault(); goTo(currentIndex - 1); }
        if (event.key === 'ArrowRight') { event.preventDefault(); goTo(currentIndex + 1); }
      });
    });
  }


  function buildAlbums() {
    const gallery = document.getElementById('gallery');
    const grid = document.getElementById('galleryGrid');
    const groups = new Map();
    grid.querySelectorAll('.gallery-item').forEach(item => {
      const key = item.dataset.case;
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(item);
    });
    const cards = [...groups].map(([key, items], index) => {
      const first = items[0];
      const cover = first.querySelector('.carousel-slide').getAttribute('src');
      const brandKey = first.querySelector('.gallery-caption-brand').dataset.i18n;
      const count = items.reduce((sum, item) => sum + item.querySelectorAll('.carousel-slide').length, 0);
      const titles = items.map(item => {
        const titleKey = item.querySelector('.gallery-caption-title').dataset.i18n;
        return `<span class="album-title-line" data-i18n="${titleKey}">${en[titleKey]}</span>`;
      }).join('');
      return `<button class="album-card reveal" type="button" data-album="${key}" data-brand-key="${brandKey}" aria-haspopup="dialog">
        <span class="album-cover"><img src="${cover}" loading="lazy" decoding="async" alt=""></span>
        <span class="album-body">
          <span class="album-index">0${index + 1}</span>
          <span class="album-brand" data-i18n="${brandKey}">${en[brandKey]}</span>
          <span class="album-titles">${titles}</span>
          <span class="album-meta">${items.length} <span data-i18n="albumSeries">${en.albumSeries}</span> · ${count} <span data-i18n="albumImages">${en.albumImages}</span></span>
          <span class="album-open"><span data-i18n="albumOpen">${en.albumOpen}</span> &#8594;</span>
        </span>
      </button>`;
    }).join('');
    grid.insertAdjacentHTML('beforebegin', `<div class="rail-wrap"><div class="rail-arrows rail-arrows--light"><button class="rail-btn" type="button" data-rail-dir="-1" data-i18n-aria-label="previous" aria-label="${en.previous}">&#8592;</button><button class="rail-btn" type="button" data-rail-dir="1" data-i18n-aria-label="next" aria-label="${en.next}">&#8594;</button></div><div class="album-rail rail" id="albumRail">${cards}</div></div>
      <div class="album-panel" id="albumPanel" role="dialog" aria-modal="true" aria-labelledby="albumPanelBrand" hidden>
        <div class="album-panel-bar"><div class="album-panel-brand" id="albumPanelBrand"></div><button class="album-close" type="button" id="albumClose"><span data-i18n="albumClose">${en.albumClose}</span> &#10005;</button></div>
      </div>`);
    document.getElementById('albumPanel').appendChild(grid);
    grid.querySelectorAll('.gallery-item').forEach(item => { item.hidden = true; });
  }

  function bindAlbums() {
    const panel = document.getElementById('albumPanel');
    if (!panel) return;
    const grid = document.getElementById('galleryGrid');
    const brand = document.getElementById('albumPanelBrand');
    const lightbox = document.getElementById('lightbox');
    let opener = null;
    const close = () => {
      panel.classList.remove('open');
      document.body.classList.remove('album-open');
      window.setTimeout(() => { if (!panel.classList.contains('open')) panel.hidden = true; }, 450);
      opener?.focus({ preventScroll: true });
    };
    document.querySelectorAll('.album-card').forEach(card => card.addEventListener('click', () => {
      opener = card;
      grid.querySelectorAll('.gallery-item').forEach(item => { item.hidden = item.dataset.case !== card.dataset.album; });
      brand.dataset.i18n = card.dataset.brandKey;
      brand.innerHTML = card.querySelector('.album-brand').innerHTML;
      panel.hidden = false;
      grid.scrollLeft = 0;
      document.body.classList.add('album-open');
      window.requestAnimationFrame(() => { panel.classList.add('open'); document.getElementById('albumClose').focus({ preventScroll: true }); });
    }));
    document.getElementById('albumClose').addEventListener('click', close);
    grid.addEventListener('wheel', event => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX) || grid.scrollWidth <= grid.clientWidth) return;
      event.preventDefault();
      grid.scrollLeft += event.deltaY;
    }, { passive: false });
    panel.addEventListener('click', event => { if (event.target === panel || event.target === grid) close(); });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && panel.classList.contains('open') && !lightbox.classList.contains('open')) close();
    });
  }

  function bindRails() {
    document.querySelectorAll('.rail-wrap').forEach(wrap => {
      const rail = wrap.querySelector('.rail');
      wrap.querySelectorAll('[data-rail-dir]').forEach(button => button.addEventListener('click', () => {
        rail.scrollBy({ left: Number(button.dataset.railDir) * rail.clientWidth * .8, behavior: 'smooth' });
      }));
    });
    const track = document.querySelector('.case-track');
    if (track) {
      const tabs = [...document.querySelectorAll('.case-tab')];
      const cases = [...track.children];
      let current = -1;
      const sync = () => {
        const index = Math.max(0, Math.min(cases.length - 1, Math.round(track.scrollLeft / Math.max(1, track.clientWidth))));
        track.style.height = `${cases[index].offsetHeight}px`;
        if (index === current) return;
        current = index;
        tabs.forEach((tab, n) => { tab.classList.toggle('active', n === index); tab.setAttribute('aria-selected', String(n === index)); });
      };
      const go = index => track.scrollTo({ left: Math.max(0, Math.min(cases.length - 1, index)) * track.clientWidth, behavior: 'smooth' });
      let frame = 0;
      track.addEventListener('scroll', () => { window.cancelAnimationFrame(frame); frame = window.requestAnimationFrame(sync); }, { passive: true });
      tabs.forEach((tab, n) => tab.addEventListener('click', () => go(n)));
      document.querySelectorAll('[data-case-dir]').forEach(button => button.addEventListener('click', () => go(current + Number(button.dataset.caseDir))));
      window.addEventListener('resize', sync);
      window.addEventListener('load', sync);
      document.querySelectorAll('.lang-btn').forEach(button => button.addEventListener('click', () => window.requestAnimationFrame(sync)));
      sync();
    }
    const progress = document.querySelector('.scroll-progress');
    if (progress) {
      const update = () => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        progress.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`;
      };
      window.addEventListener('scroll', update, { passive: true });
      update();
    }
  }

  function renderContact() {
    const { email, linkedin, whatsapp } = SITE_DATA.contacts;
    const serviceOptions = [1,2,3,4].map(number => `<label class="brief-choice"><input type="checkbox" name="What do you need?" value="${FORM_COPY.en[`service${number}`]}"><span data-form-i18n="service${number}">${FORM_COPY.en[`service${number}`]}</span></label>`).join('');
    const budgets = ['€500–1,000','€1,000–2,000','€2,000–3,000','€3,000+'].map(budget => `<label class="brief-choice"><input type="radio" name="Approximate budget" value="${budget}"><span>${budget}</span></label>`).join('');
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
          <input type="hidden" name="subject" value="New project brief — portfolio.katokanovitski.com">
          <input type="hidden" name="from_name" value="Ekaterina Novitskaia — Project Brief">
          <input type="hidden" name="Source" value="https://portfolio.katokanovitski.com/#project-brief">
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
    document.querySelectorAll('[data-i18n-aria-label]').forEach(node => { node.setAttribute('aria-label', getCopy(lang, node.dataset.i18nAriaLabel)); });
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

  const PRERENDERED = document.documentElement.hasAttribute('data-prerendered');
  const PRERENDER_MODE = new URLSearchParams(window.location.search).get('prerender') === '1';
  if (!PRERENDERED) {
    document.body.insertAdjacentHTML('afterbegin', `<div class="scroll-progress" aria-hidden="true"></div><a class="skip-link" href="#main-content" data-i18n="skip">${en.skip}</a>`);
    renderNavigation();
    renderHero();
    renderStrategicSections();
    upgradeGallery();
    buildAlbums();
    renderContact();
    createMainLandmark();
  }
  if (PRERENDER_MODE) {
    document.documentElement.setAttribute('data-prerendered', '');
    return;
  }
  bindGalleryInteractions();
  bindAlbums();
  bindProjectForm();
  upgradeLightbox();
  bindInteractions();
  applyLanguage(localStorage.getItem('lang') || 'en');
  bindRails();
  document.body.classList.add('strategic-ready');
})();
