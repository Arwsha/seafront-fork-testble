import { createI18n } from 'vue-i18n';

const messages = {
  'en-US': {
    navbar: {
      about: 'About Family',
      feedback: 'Reviews',
      pricing: 'Join Us',
      faq: 'FAQ',
      login: 'Login',
      signup: 'Join',
      profile: 'Profile',
    },

    title: {
      first: 'Meets Team 2.0',
      second: 'Elite Family on Black Russia',
      button: 'Join Now',
    },

    adventages: {
      title: 'About Us',
      title2: 'Why Meets Team 2.0?',
      first: {
        name: 'Development',
        text: 'In our family, you will gain all the necessary knowledge and skills for successful gameplay. Experienced players will help newcomers adapt.'
      },
      second: {
        name: 'Support',
        text: "We are one big family. Every member can count on help and support from other family members in any situation."
      },
      third: {
        name: 'Opportunities',
        text: 'Participate in joint events, access exclusive content, and build a successful career in the game.'
      },
      stat: {
        users: 'Members:',
        launches: 'Events:',
        updates: 'Achievements:',
        days: 'Days Active:',
      },
    },

    feadback: {
      title: "Reviews",
      title2: "What Our Members Say",
    },
    
    pricing: {
      title: "Join",
      title2: "Choose Your Status",
      month: "Rookie",
      three_months: "Advanced",
      year: "VIP",
      button: 'Join'
    },

    faq: {
      title: 'Frequently Asked Questions',
      q1: 'How to join Meets Team 2.0?',
      a1: 'After submitting and approving your application, you will receive an invitation to the family private chat. Curators will meet you there and provide full training.',
      q2: 'How to contact leadership?',
      a2: 'You can contact family leaders through our Discord server or Telegram chat.',
      q3: 'What are the requirements to join?',
      a3: 'Main requirements: adequacy, desire to develop, respect for other family members. Minimum level and donation requirements are discussed individually.',
      q4: 'What are the benefits of family membership?',
      a4: 'Family members receive support from experienced players, access to private events, character development assistance, and many other bonuses.'
    }
  },
  'ru-RU': {
    navbar: {
      about: 'О фаме',
      feedback: 'Отзывы участников',
      pricing: 'Вступительный взнос',
      faq: 'Вопросы',
      login: 'Войти',
      signup: 'Вступить',
      profile: 'Личный кабинет',
    },

    title: {
      first: 'Meets Team 2.0',
      second: 'Элитная фама Black Russia',
      button: 'Присоединиться',
    },

    adventages: {
      title: 'О нас',
      title2: 'Почему Meets Team 2.0?',
      first: {
        name: 'Развитие',
        text: 'В нашей фаме вы получите все необходимые знания и навыки для успешной игры. Опытные игроки помогут освоиться новичкам.'
      },
      second: {
        name: 'Поддержка',
        text: "Мы - одна большая семья. Каждый участник может рассчитывать на помощь и поддержку от других членов фамы в любой ситуации."
      },
      third: {
        name: 'Возможности',
        text: 'Участие в совместных мероприятиях, доступ к эксклюзивному контенту и возможность построить успешную карьеру в игре.'
      },
      stat: {
        users: 'Участников:',
        launches: 'Мероприятий:',
        updates: 'Достижений:',
        days: 'Дней существования:',
      },
    },

    feadback: {
      title: "Отзывы",
      title2: "Что Говорят Наши Участники",
    },
    
    pricing: {
      title: "Вступление",
      title2: "Выберите статус",
      month: "Новичок",
      three_months: "Продвинутый",
      year: "VIP",
      button: 'Вступить'
    },

    faq: {
      title: 'Частые вопросы',
      q1: 'Как вступить в Meets Team 2.0?',
      a1: 'После подачи заявки и её одобрения, вы получите приглашение в закрытый чат фамы. Там вас встретят кураторы и проведут полное обучение.',
      q2: 'Как связаться с руководством?',
      a2: 'Вы можете связаться с лидерами фамы через наш Discord-сервер или Telegram-чат.',
      q3: 'Какие требования для вступления?',
      a3: 'Основные требования: адекватность, желание развиваться, уважение к другим участникам фамы. Минимальный уровень и наличие доната обсуждаются индивидуально.',
      q4: 'Какие преимущества даёт участие в фаме?',
      a4: 'Члены фамы получают поддержку от более опытных игроков, доступ к закрытым мероприятиям, помощь в развитии персонажа и много других бонусов.'
    },

    privacy: {
      title: 'Правила конфиденциальности',
      date: '29.08.2024',
      section1: {
        title: '1. Введение',
        text: 'Добро пожаловать в Meets Team 2.0 ("наша фама"). Мы заботимся о безопасности и конфиденциальности наших участников. Эти правила описывают, как мы обращаемся с информацией наших участников.',
      },
      section2: {
        title: '2. Информация участников',
        text: 'Мы собираем следующую информацию:',
        name: 'Игровой ник',
        nameDesc: 'Для идентификации в игре и коммуникации.',
        email: 'Discord/Telegram',
        emailDesc: 'Для связи и доступа к закрытым чатам фамы.',
      },
      section3: {
        title: '3. Использование информации',
        text: 'Информация используется для:',
        communication: 'Коммуникация',
        communicationDesc: 'Общение внутри фамы и координация действий.',
        improvement: 'Развитие фамы',
        improvementDesc: 'Улучшение взаимодействия между участниками.',
        legal: 'Безопасность',
        legalDesc: 'Защита интересов фамы и её участников.',
      },
      section4: {
        title: '4. Безопасность',
        text: 'Мы принимаем все меры для защиты информации наших участников от несанкционированного доступа.',
      },
      section5: {
        title: '5. Конфиденциальность',
        text: 'Информация участников не передается третьим лицам без согласия.',
      },
      section6: {
        title: '6. Хранение данных',
        text: 'Данные участников хранятся только в период их активного участия в фаме.',
      },
      section7: {
        title: '7. Права участников',
        text: 'Каждый участник имеет право:',
        access: 'Получить доступ к своей информации.',
        delete: 'Запросить удаление информации при выходе из фамы.',
        withdraw: 'Отозвать согласие на обработку данных.',
      },
      section8: {
        title: '8. Изменения правил',
        text: 'Правила могут обновляться. Все изменения будут доведены до участников.',
      },
      section9: {
        title: '9. Контакты',
        text: 'По всем вопросам обращайтесь к руководству фамы: ',
      },
    },

    rules: {
      title: 'Правила фамы',
      date: '29.08.2024',
      section1: {
        title: '1. Запрещено',
        text: 'Участникам Meets Team 2.0 запрещается:',
        editingFiles: 'Нарушение правил',
        editingFilesDesc: 'Нарушение правил сервера и фамы строго запрещено.',
        hacking: 'Обман участников',
        hackingDesc: 'Любые попытки обмана других участников недопустимы.',
        accountSharing: 'Передача аккаунта',
        accountSharingDesc: 'Запрещена передача доступа к личному аккаунту.',
        fileDistribution: 'Слив информации',
        fileDistributionDesc: 'Запрещено разглашение внутренней информации фамы.',
      },
      section2: {
        title: '2. Исключение',
        text: 'Руководство оставляет за собой право исключить участника за нарушение правил фамы.',
      },
      section3: {
        title: '3. Обязательства',
        text: 'Вступая в Meets Team 2.0, вы соглашаетесь следовать всем правилам фамы.',
      },
      section4: {
        title: '4. Связь',
        text: 'По всем вопросам обращайтесь к руководству фамы:',
      },
    },

    terms: {
      title: 'Условия участия',
      date: '29.08.2024',
      section1: {
        title: '1. Общие положения',
        text: 'Эти условия определяют правила участия в фаме Meets Team 2.0. Вступление в фаму означает согласие с данными условиями.',
      },
      section2: {
        title: '2. Членство',
        text: 'Для вступления необходимо соответствовать требованиям фамы и пройти отбор. Каждый участник обязан поддерживать активность.',
      },
      section3: {
        title: '3. Поведение',
        text: 'От участников требуется:',
        respectLaw: 'Уважение правил',
        respectLawDesc: 'Соблюдение правил сервера и фамы.',
        respectOthers: 'Уважение участников',
        respectOthersDesc: 'Поддержание дружественной атмосферы.',
        respectServices: 'Активность',
        respectServicesDesc: 'Регулярное участие в мероприятиях фамы.',
      },
      section4: {
        title: '4. Собственность',
        text: 'Все материалы, символика и контент фамы являются собственностью Meets Team 2.0.',
      },
      section5: {
        title: '5. Взносы и выплаты',
        payment: 'Взносы',
        paymentDesc: 'Информация о вступительных взносах предоставляется индивидуально.',
        refunds: 'Возвраты',
        refundsDesc: 'Условия возврата взносов обсуждаются с руководством: ',
      },
      section6: {
        title: '6. Ответственность',
        text: 'Фама не несет ответственности за действия отдельных участников вне мероприятий фамы.',
      },
      section7: {
        title: '7. Исключение',
        text: 'Руководство оставляет за собой право исключить участника за нарушение правил или неактивность.',
      },
      section8: {
        title: '8. Изменения',
        text: 'Условия могут меняться. Все изменения будут доведены до участников.',
      },
      section9: {
        title: '9. Контакты',
        text: 'По всем вопросам обращайтесь к руководству фамы: ',
      },
    },

    footer: {
      contact_email: "Связь с нами ",
      copyright: "Meets Team 2.0 © 2022-2024",
      design_by: "MEETS TEAM 2.0",
      privacy_policy: "Правила конфиденциальности",
      terms_of_service: "Условия участия",
      rules_of_use: "Правила фамы"
    }
  },
};

const savedLanguage = localStorage.getItem('userLanguage') || 'en-US';

const i18n = createI18n({
  legacy: false,
  locale: savedLanguage,
  fallbackLocale: 'en-US',
  messages,
});

export default i18n;
