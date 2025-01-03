let themeName = "Техническое документоведение";

let allQuestions = [
    {
        type: 1, // Тип вопроса
        price: 100, // Цена вопроса
        text: 'Какое событие стимулировало развитие технической документации для программного обеспечения? Выберите все правильные ответы.', // Текст вопроса
        answers: ['Появление интернета','Развитие компьютеров во второй половине XX века','Стандартизация ISO','Промышленная революция'], // Массив ответов
        correctAnswer: [1,2], // Массив верных ответов
        answered: null
    },
    {
        type: 1, // Тип вопроса
        price: 100, // Цена вопроса
        text: 'Что является основной задачей современного технического документоведения? Выберите все правильные ответы.', // Текст вопроса
        answers: ['Переход документации в цифровую форму','Создание физических копий документов','Поддержание актуальности и доступности документации','Разработка стандартов для различных типов документов'], // Массив ответов
        correctAnswer: [0,2,3], // Массив верных ответов
        answered: null
    },
    {
        type: 1, // Тип вопроса
        price: 100, // Цена вопроса
        text: 'Какую роль играет техническая документация в сфере IT? Выберите все правильные ответы.', // Текст вопроса
        answers: ['Улучшает качество и безопасность программного обеспечения','Снижает потребление энергии','Сокращает количество сотрудников','Облегчает обучение и поддержку пользователей'], // Массив ответов
        correctAnswer: [0,3], // Массив верных ответов
        answered: null
    },
    {
        type: 1, // Тип вопроса
        price: 150, // Цена вопроса
        text: 'Какие стандарты управляют документацией в производстве и IT-сфере? Выберите все правильные ответы.', // Текст вопроса
        answers: ['ГОСТ 2.105-95','ГОСТ 34.201-89','ISO 9001','ISO 14001'], // Массив ответов
        correctAnswer: [0,1,2], // Массив верных ответов
        answered: null
    },
    {
        type: 6, // Тип вопроса
        price: 150, // Цена вопроса
        text: "Сопоставьте основные стандарты с их назначением.", // Текст вопроса
        // Типы контента: { type: 'text/image/video' },
        leftContents: [
            { type: 'text', value: 'ГОСТ 2.105-95' },
            { type: 'text', value: 'ISO 9001' },
            { type: 'text', value: 'ГОСТ 34.201-89' },
            { type: 'text', value: 'ISO 14001' },
            { type: 'text', value: 'IEC 60068' },
        ],
        rightContents: [
            { type: 'text', value: 'Стандарты по качеству управления документацией' },
            { type: 'text', value: 'Общие требования к текстовым документам' },
            { type: 'text', value: 'Стандарты для электротехнической продукции' },
            { type: 'text', value: 'Стандарты для разработки программных и информационных систем' },
            { type: 'text', value: 'Стандарты для экологического управления' },
        ],
        correctAnswer: [1, 0, 3, 4, 2], // Массив верных ответов. 
        // Чтение ответа происходит по порядку левого контента: 
        // 0 слева -> 0 справа; 1 слева -> 1 справа и тд.
        answered: null,
    },
    {
        type: 6, // Тип вопроса
        price: 150, // Цена вопроса
        text: "Сопоставьте основные элементы документации с их описанием.", // Текст вопроса
        // Типы контента: { type: 'text/image/video' },
        leftContents: [
            { type: 'text', value: 'Заголовок' },
            { type: 'text', value: 'Введение' },
            { type: 'text', value: 'Основная часть' },
            { type: 'text', value: 'Заключение' },
            { type: 'text', value: 'Приложения' },
        ],
        rightContents: [
            { type: 'text', value: 'Содержит дополнительные материалы, такие как таблицы и графики' },
            { type: 'text', value: 'Представляет краткий обзор документа и его целей' },
            { type: 'text', value: 'Основное содержание и детали, связанные с темой документа' },
            { type: 'text', value: 'Подводит итоги и выделяет ключевые моменты' },
            { type: 'text', value: 'Указывает название документа и его версию' },
        ],
        correctAnswer: [4, 1, 2, 3, 0], // Массив верных ответов. 
        // Чтение ответа происходит по порядку левого контента: 
        // 0 слева -> 0 справа; 1 слева -> 1 справа и тд.
        answered: null,
    },
    {
        type: 6, // Тип вопроса
        price: 200, // Цена вопроса
        text: "Сопоставьте тип документа с его описанием.", // Текст вопроса
        // Типы контента: { type: 'text/image/video' },
        leftContents: [
            { type: 'text', value: 'Техническое задание (ТЗ)' },
            { type: 'text', value: 'Руководство пользователя' },
            { type: 'text', value: 'Технологическая карта' },
            { type: 'text', value: 'Спецификация интерфейса' },
            { type: 'text', value: 'Тестовая документация' },
        ],
        rightContents: [
            { type: 'text', value: 'Документ, описывающий процессы производства и их этапы' },
            { type: 'text', value: 'Документ, содержащий инструкции по использованию системы' },
            { type: 'text', value: 'Документ, описывающий функциональные требования к системе' },
            { type: 'text', value: 'Документ, описывающий внешний вид и взаимодействие пользовательского интерфейса' },
            { type: 'text', value: 'Документ, содержащий тестовые планы и сценарии для проверки системы' },
        ],
        correctAnswer: [2, 1, 0, 3, 4], // Массив верных ответов. 
        // Чтение ответа происходит по порядку левого контента: 
        // 0 слева -> 0 справа; 1 слева -> 1 справа и тд.
        answered: null,
    },
    {
        type: 6, // Тип вопроса
        price: 200, // Цена вопроса
        text: "Соотнесите аспекты, влияющие на IT, с их описаниями.", // Текст вопроса
        // Типы контента: { type: 'text/image/video' },
        leftContents: [
            { type: 'text', value: 'Стандартизация процессов' },
            { type: 'text', value: 'Тестирование и отладка' },
            { type: 'text', value: 'Поддержка и обучение' },
            { type: 'text', value: 'Улучшение качества' },
            { type: 'text', value: 'Примеры успешных внедрений' },
        ],
        rightContents: [
            { type: 'text', value: 'Оптимизация взаимодействия' },
            { type: 'text', value: 'Успешное решение проблем' },
            { type: 'text', value: 'Снижение рисков' },
            { type: 'text', value: 'Обучение новых сотрудников' },
            { type: 'text', value: 'Обеспечение безопасности системы' },
        ],
        correctAnswer: [0, 2, 3, 4, 1], // Массив верных ответов. 
        // Чтение ответа происходит по порядку левого контента: 
        // 0 слева -> 0 справа; 1 слева -> 1 справа и тд.
        answered: null,
    },
    {
        type: 6, // Тип вопроса
        price: 200, // Цена вопроса
        text: "Соотнесите стандарт с его областью применения.", // Текст вопроса
        // Типы контента: { type: 'text/image/video' },
        leftContents: [
            { type: 'text', value: 'ГОСТ 2.105-95' },
            { type: 'text', value: 'ГОСТ 34.201-89' },
            { type: 'text', value: 'ISO 9001' },
            { type: 'text', value: 'IEC 61508' },
            { type: 'text', value: 'ГОСТ 19.001-78' },
        ],
        rightContents: [
            { type: 'text', value: 'Электротехническая продукция' },
            { type: 'text', value: 'Оформление текстовых документов' },
            { type: 'text', value: 'Управление качеством' },
            { type: 'text', value: 'Программные и информационные системы' },
            { type: 'text', value: 'Общие положения программной документации' },
        ],
        correctAnswer: [1, 3, 2, 0, 4], // Массив верных ответов. 
        // Чтение ответа происходит по порядку левого контента: 
        // 0 слева -> 0 справа; 1 слева -> 1 справа и тд.
        answered: null,
    },
    {
        type: 6, // Тип вопроса
        price: 250, // Цена вопроса
        text: "Сопоставьте этапы разработки документации с их характеристиками.", // Текст вопроса
        // Типы контента: { type: 'text/image/video' },
        leftContents: [
            { type: 'text', value: 'Исследование требований' },
            { type: 'text', value: 'Проектирование документации' },
            { type: 'text', value: 'Оформление документации' },
            { type: 'text', value: 'Внедрение и тестирование' },
            { type: 'text', value: 'Архивация документации' },
        ],
        rightContents: [
            { type: 'text', value: 'Создание черновиков и схем для последующего оформления' },
            { type: 'text', value: 'Подготовка документации к использованию и тестирование её на практике' },
            { type: 'text', value: 'Сбор информации о потребностях пользователей и технических условиях' },
            { type: 'text', value: 'Систематизация и хранение готовой документации' },
            { type: 'text', value: 'Оформление документации в соответствии с установленными стандартами' },
        ],
        correctAnswer: [2, 0, 4, 1, 3], // Массив верных ответов. 
        // Чтение ответа происходит по порядку левого контента: 
        // 0 слева -> 0 справа; 1 слева -> 1 справа и тд.
        answered: null,
    },
    {
        type: 6, // Тип вопроса
        price: 250, // Цена вопроса
        text: "Сопоставьте виды технической документации с их назначением.", // Текст вопроса
        // Типы контента: { type: 'text/image/video' },
        leftContents: [
            { type: 'text', value: 'Техническое задание (ТЗ)' },
            { type: 'text', value: 'Инструкция пользователя' },
            { type: 'text', value: 'Регламент установки' },
            { type: 'text', value: 'Технологическая карта' },
            { type: 'text', value: 'Протокол совещания' }
        ],
        rightContents: [
            { type: 'text', value: 'Описывает процессы и параметры производства' },
            { type: 'text', value: 'Содержит требования к системе и описывает функциональность' },
            { type: 'text', value: 'Подробно объясняет, как использовать продукт' },
            { type: 'text', value: 'Фиксирует принятые решения и обсуждения на встречах' },
            { type: 'text', value: 'Определяет порядок действий для установки системы' },
        ],
        correctAnswer: [1, 2, 4, 0, 3], // Массив верных ответов. 
        // Чтение ответа происходит по порядку левого контента: 
        // 0 слева -> 0 справа; 1 слева -> 1 справа и тд.
        answered: null,
    },
    {
        type: 6, // Тип вопроса
        price: 250, // Цена вопроса
        text: "Сопоставьте этапы управления проектной документацией с их характеристиками.", // Текст вопроса
        // Типы контента: { type: 'text/image/video' },
        leftContents: [
            { type: 'text', value: 'Идентификация документации' },
            { type: 'text', value: 'Создание документации' },
            { type: 'text', value: 'Хранение и доступ' },
            { type: 'text', value: 'Обновление документации' },
            { type: 'text', value: 'Уничтожение документации' } 
        ],
        rightContents: [
            { type: 'text', value: 'Удаление устаревших или ненужных документов' },
            { type: 'text', value: 'Обеспечение правильной классификации и организации документов' },
            { type: 'text', value: 'Разработка и формализация необходимых документов' },
            { type: 'text', value: 'Обеспечение доступности документов для всех заинтересованных сторон' },
            { type: 'text', value: 'Поддержание актуальности и соответствия текущим требованиям' } 
        ],
        correctAnswer: [1, 2, 3, 4, 0], // Массив верных ответов. 
        // Чтение ответа происходит по порядку левого контента: 
        // 0 слева -> 0 справа; 1 слева -> 1 справа и тд.
        answered: null,
    },
    {
        type: 2, // Тип вопроса
        price: 300, // Цена вопроса
        text: 'Впишите термин.', // Текст вопроса
        textDd: "Документ, описывающий функциональные и нефункциональные требования к системе, а также цели и задачи проекта называется:!", // Текст вопроса с разделителями. В местах где "!" будет вставлен input для ввода.
        correctAnswer: ["Техническое задание"], // Массив ответов при !. Один ответ к одному инпуту.
        answered: null, // Флаг, ответили ли на этот вопрос
    },
    {
        type: 2, // Тип вопроса
        price: 300, // Цена вопроса
        text: 'Впишите термин.', // Текст вопроса
        textDd: "Методология, которая регулирует выполнение технологических операций и обеспечивает стандартизацию процессов называется:!", // Текст вопроса с разделителями. В местах где "!" будет вставлен input для ввода.
        correctAnswer: ["Регламент"], // Массив ответов при !. Один ответ к одному инпуту.
        answered: null, // Флаг, ответили ли на этот вопрос
    },
    {
        type: 2, // Тип вопроса
        price: 300, // Цена вопроса
        text: 'Впишите термин.', // Текст вопроса
        textDd: "Процесс, который включает в себя сбор информации и данных для документации перед написанием ее основного текста называется:!", // Текст вопроса с разделителями. В местах где "!" будет вставлен input для ввода.
        correctAnswer: ["Исследование"], // Массив ответов при !. Один ответ к одному инпуту.
        answered: null, // Флаг, ответили ли на этот вопрос
    },

    
];