// Тема ЦОК отображается во многих элементах
const themeOfDEC = 'Технология промывки скважин в процессе бурения'
// Номер ФГОС и Тескт ФГОС
const numFgos = '21.02.02'
const numFgosTxt = 'Бурение нефтяных и газовых скважин'
// Номер МДК и Текст МДК
const numMDK = '01.01'
const numMDKTxt = 'Технология выполнения работ по бурению, креплению, испытанию и освоению нефтяных и газовых скважин'
const razdel = 'Технология бурения нефтяных и газовых скважин'
// Массив с рекомендациями
const textOfMethodMaterials = [
`<p class='pink_subtitle'>Рекомендации для обучающегося</p>
<p class='none_list'>Просмотрите динамическую инфографику по теме «Технология промывки скважин в процессе бурения».</p>
<p class='none_list'>Если в процессе изучения материала возникнут вопросы, запишите их для дальнейшего обсуждения с преподавателем и/или с группой обучающихся.</p>
<p class='none_list'>Обратите внимание на основные вопросы лекции:</p>
Функции бурового раствора
Коркообразование
Основные параметры буровых растворов и приборы для их измерения
Свойства буровых растворов
Химическая обработка буровых растворов
Приготовление и очистка промывочных жидкостей
Очистка бурового раствора от шлама
Дегазация промывочных жидкостей
<p class='none_list'>При необходимости просмотрите материал еще раз.</p>
<p class='none_list'>Возвращайтесь к наиболее сложным аспектам темы.</p>
<p class='none_list'>Соблюдайте здоровьесберегающий режим: чередуйте работу с электронными носителями с отдыхом и гимнастикой для глаз.</p>
<p class='pink_subtitle'>Рекомендации для преподавателя</p>
<p class='none_list'>Применение данного ЭОМ в ходе занятия поможет преподавателю мотивировать обучающихся к усвоению нового материала через визуализацию теоретического материала с помощью различных видов графики и видео и его изложение доступным языком, а так же через возможность организации интерактивной деятельности.</p>
<p class='none_list'>Преподаватель может организовать изучение обучающимися образовательных материалов ЭОМ через применение различных педагогических технологий, например:</p>
организовать изучение теоретических материалов ЭОМ до начала учебного занятия, а во время учебного занятия провести беседу, отвечая на вопросы обучающихся, уточняя и расширяя первичные знания
организовать изучение нового материала с применением материалов ЭОМ непосредственно на занятии, через демонстрацию материалов ЭОМ, в т.ч. иллюстраций (схем, графиков, фото, видео и пр.)
организовать работу обучающихся в группах непосредственно на занятии с использованием учебных материалов ЭОМ
<p class='none_list'>предложить повторное изучение материалов ЭОМ после проведения учебных занятий с целью закрепления материала и подготовки к промежуточной аттестации и пр.</p>
<p class='none_list'>В ходе занятия преподавателю предлагается, опираясь на материалы данного ЭОМ раскрыть следующие вопросы:</p>
Функции бурового раствора
Коркообразование
Основные параметры буровых растворов и приборы для их измерения
Свойства буровых растворов
Химическая обработка буровых растворов
Приготовление и очистка промывочных жидкостей`,
  
`<p class='pink_subtitle'>Рекомендации для обучающегося</p>
<p class='none_list'>Запустите виртуальный тренажер по теме «Технология промывки скважин в процессе бурения» </p>
<p class='none_list'>Ознакомьтесь с предложенными материалами и выполните тренировочные тестовые задания. </p>
<p class='none_list'>Обратите внимание, что на выполнение всех тестовых заданий предусмотрено 2 попытки.</p>
<p class='none_list'>Если в процессе изучения материала возникнут вопросы, запишите их для дальнейшего обсуждения с преподавателем и/или с группой обучающихся. </p>
<p class='none_list'>При неверном ответе на тестовое задание, вернитесь к предыдущему материалу и изучите его повторно.</p>
<p class='none_list'>Тренировочные тестовые задания предусматривают отображение правильных вариантов ответов после их выполнения. </p>
<p class='none_list'>Запустить виртуальный тренажер можно неограниченное количество раз.</p>
<p class='pink_subtitle'>Рекомендации для преподавателя</p>
<p class='none_list'>Преподаватель может организовать изучение обучающимися образовательных материалов ЭОМ через применение различных педагогических технологий, например:</p>
организовать изучение практических материалов ЭОМ до начала учебного занятия, а во время учебного занятия организовать проведение практической работы на основе материалов ЭОМ
организовать изучение материалов ЭОМ непосредственно на занятии, выявить наиболее часто встречающие ошибки при выполнении проверочных тестовых заданий, организовать работу над ошибками
предложить повторное изучение материалов ЭОМ после проведения учебных занятий с целью закрепления материала и подготовки к промежуточной аттестации и пр.
<p class='none_list'>Применение данного ЭОМ на занятии поможет активизировать познавательную деятельность обучающихся, способствует развитию логического мышления, памяти, внимательности, наблюдательности. </p>
<p class='none_list'>Запустите виртуальный тренажер по теме «Технология промывки скважин в процессе бурения» </p>
<p class='none_list'>Ознакомьтесь с предложенными материалами и выполните тренировочные тестовые задания. </p>
<p class='none_list'>Обратите внимание, что на выполнение всех тестовых заданий предусмотрено 2 попытки.</p>
<p class='none_list'>Если в процессе изучения материала возникнут вопросы, запишите их для дальнейшего обсуждения с преподавателем и/или с группой обучающихся. </p>
<p class='none_list'>При неверном ответе на тестовое задание, вернитесь к предыдущему материалу и изучите его повторно.</p>
<p class='none_list'>Тренировочные тестовые задания предусматривают отображение правильных вариантов ответов после их выполнения. </p>
<p class='none_list'>Запустить виртуальный тренажер можно неограниченное количество раз.</p>`,

`<p class='pink_subtitle'>Рекомендации для обучающегося</p>
<p class='none_list'>Запустите интерактивный тренажер по выполнению заданий по теме «Технология промывки скважин в процессе бурения»</p>
<p class='none_list'>Ознакомьтесь с условиями выполнения тестовых заданий. Обратите внимание на отсутствие подсказок и возможности повторного выполнения заданий.</p>
<p class='none_list'>Выполните все тестовые задания. Ознакомьтесь с результатами тестирования.</p>
<p class='none_list'>При наличии ошибок по результатам тестирования вернитесь к изучению теоретического материала.</p>
<p class='none_list'>Запустить интерактивный тренажер по выполнению заданий возможно неограниченное количество раз.</p>
<p class='pink_subtitle'>Рекомендации для преподавателя</p>
<p class='none_list'>Применяя данный ЭОМ преподаватель может мотивировать обучающихся для получения максимального количества баллов при выполнении тестовых заданий, предложенных с целью диагностики приобретенных знаний, умений и навыков, учитывая результаты тестирования при выставлении оценки по теме.</p>
<p class='none_list'>Преподаватель может анализировать результаты тестирования обучающихся с целью выявления наиболее сложных для понимания вопросов темы, с целью последующей организации работы по устранению данных пробелов в знаниях обучающихся.</p>`
];
// Ключевые слова
const keyWords = 
`Бурение \n процесс сооружения скважины путем разрушения горных пород.
Буровой насос \n устройство для нагнетания бурового раствора в скважину.
Буровой раствор (промывочная жидкость) \n технологическая жидкость, прокачиваемая через скважину.
Глинистый раствор \n промывочная жидкость в виде суспензии, полученной путем диспергирования глины в воде.
Глубина скважины \n проекция длины скважины на вертикальную ось.
Промывка \n замена бурового раствора, заполняющего ствол скважины после бурения, более легкой жидкостью водой или нефтью.
Профиль скважины \n проекция оси скважины на вертикальную плоскость, проходящую через ее устье и забой.
Ствол скважины \n пространство, ограниченное стенкой скважины.
Тампонаж \n процесс нагнетания специальных растворов в горные породы.
Устье \n верхняя часть скважины.
Флюиды \n жидкости (вода, нефть) и газы, заполняющие поры и трещины горных пород.
Шлам \n мелкие частицы выбуренной породы ( или их взвесь в буровом растворе).`
/* 1) ФГОС СПО
2) ПООП Профессионалитета
3) Профессиональный модуль
4) МДК
5) Раздел
6) Тема*/
const infoContent = 
`${numFgos} ${numFgosTxt}
${numFgos} ${numFgosTxt}
ПМ.01 Проведение работ по эксплуатационному и разведочному бурению
${numMDK} ${numMDKTxt}
${razdel}
${themeOfDEC}`
const blockButtonEOM2 = 1; // "Это для разработки и отладки удобно, блокирует кнопки назад и далее в ЭОМ_2 1 true 0 false"
const typeOfEOM3 = 0; // Если 1 то это тест если что то иное то мини-игра
const typeOfEOM1 = 1; // Если 1 то это video если что то иное то dynamic_info