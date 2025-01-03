// Тема ЦОК отображается во многих элементах
const themeOfDEC = 'Депарафинизация масел'
// Номер ФГОС и Тескт ФГОС
const numFgos = '18.02.09'
const numFgosTxt = 'Переработка нефти и газа'
// Номер МДК и Текст МДК
const numMDK = '02.01'
const numMDKTxt = 'Управление технологическим процессом'
const razdel = 'Производство масел'
// Массив с рекомендациями
const textOfMethodMaterials = 
[`<p class='pink_subtitle'>Рекомендации для обучающегося</p>
<p class='none_list'>Просмотрите видеолекцию по теме «Депарафинизация масел».</p>
<p class='none_list'>Если в процессе изучения материала возникнут вопросы, запишите их для дальнейшего обсуждения с преподавателем и/или с группой обучающихся.</p>
<p class='none_list'>Обратите внимание на основные вопросы лекции:</p>
Требования, предъявляемые к сырью, полуфабрикатам и готовой продукции в соответствии с нормативной документацией; 
Параметры процесса депарафинизации; 
Взаимосвязь параметров технологического процесса и влияние их на качество продукции;
Технологическая схема установки депарафинизации масел смесью МЭК и толуола; 
Оборудование процессов депарафинизации.
<p class='none_list'>При необходимости прослушайте/просмотрите материал еще раз.</p>
<p class='none_list'>Возвращайтесь к наиболее сложным аспектам темы.</p>
<p class='none_list'>Соблюдайте здоровьесберегающий режим: чередуйте работу с электронными носителями с отдыхом и гимнастикой для глаз.</p>
<p class='pink_subtitle'>Рекомендации для преподавателя</p>
<p class='none_list'>Применение данного ЭОМ  в ходе занятия поможет преподавателю мотивировать обучающихся к усвоению нового материала через визуализацию теоретического материала с помощью различных видов графики и видео и его изложение доступным языком, а так же через возможность организации интерактивной деятельности.</p>
<p class='none_list'>Преподаватель может организовать изучение обучающимися образовательных материалов ЭОМ через применение различных педагогических технологий, например:</p>
организовать изучение теоретических материалов  ЭОМ  до начала учебного занятия, а во время учебного занятия провести беседу, отвечая на вопросы обучающихся, уточняя и расширяя первичные знания;
организовать изучение нового материала с применением материалов ЭОМ непосредственно на занятии, через демонстрацию материалов ЭОМ, в т.ч. иллюстраций (схем, графиков, фото, видео и пр.);
организовать работу обучающихся в группах непосредственно на занятии с использованием учебных материалов ЭОМ;
предложить повторное изучение материалов ЭОМ после проведения учебных занятий с целью закрепления материала и подготовки к промежуточной аттестации и пр.
<p class='none_list'>В ходе занятия преподавателю предлагается, опираясь на материалы данного ЭОМ  раскрыть следующие вопросы:</p>
Требования, предъявляемые к сырью, полуфабрикатам и готовой продукции в соответствии с нормативной документацией;
Параметры процесса депарафинизации; 
Взаимосвязь параметров технологического процесса и влияние их на качество продукции;
Технологическая схема установки депарафинизации масел смесью МЭК и толуола; 
Оборудование процессов депарафинизации.`,

`<p class='pink_subtitle'>Рекомендации для обучающегося</p>
Запустите виртуальный тренажер по теме «Депарафинизация масел».
Ознакомьтесь с предложенными материалами и выполните тренировочные тестовые задания.
Обратите внимание, что на выполнение всех тестовых заданий предусмотрено 2 попытки.
Если в процессе изучения материала возникнут вопросы, запишите их для дальнейшего обсуждения с преподавателем и/или с группой обучающихся.
При неверном ответе на тестовое задание, вернитесь к предыдущему материалу и изучите его повторно.
Тренировочные тестовые задания предусматривают отображение правильных вариантов ответов после их выполнения.
Запустить виртуальный тренажер можно неограниченное количество раз.
<p class='pink_subtitle'>Рекомендации для преподавателя</p>
<p class='none_list'>Преподаватель может организовать изучение обучающимися образовательных материалов ЭОМ через применение различных педагогических технологий, например:</p>
организовать изучение практических материалов  ЭОМ  до начала учебного занятия, а во время учебного занятия организовать работу обучающихся на основе материалов ЭОМ;
организовать изучение материалов ЭОМ непосредственно на занятии, выявить наиболее часто встречающие ошибки при выполнении проверочных тестовых заданий, организовать работу над ошибками;
предложить повторное изучение материалов ЭОМ после проведения учебных занятий с целью закрепления материала и подготовки к промежуточной аттестации и пр.
<p class='none_list'>Применение данного ЭОМ на занятии поможет активизировать познавательную деятельность обучающихся, способствует  развитию  логического  мышления,  памяти, внимательности, наблюдательности.</p>`,

`<p class='pink_subtitle'>Рекомендации для обучающегося</p>
<p class='none_list'>Запустите интерактивную мини-игру по теме «Деперафинизация масел».</p>
<p class='none_list'>Ознакомьтесь с условиями выполнения тестовых заданий. Обратите внимание на отсутствие подсказок и возможности повторного выполнения заданий.</p>
<p class='none_list'>Выполните все тестовые задания. Ознакомьтесь с результатами тестирования.</p>
<p class='none_list'>При наличии ошибок по результатам тестирования вернитесь к изучению теоретического материала.</p>
<p class='none_list'>Запустить интерактивную мини-игру возможно неограниченное количество раз.</p>
<p class='pink_subtitle'>Рекомендации для преподавателя</p>
<p class='none_list'>Применяя данный ЭОМ преподаватель может мотивировать обучающихся для получения максимального количества баллов при выполнении тестовых заданий, предложенных с целью диагностики приобретенных знаний, умений и навыков, учитывая результаты тестирования при выставлении оценки по теме.</p>
<p class='none_list'>Преподаватель может анализировать результаты тестирования обучающихся с целью выявления наиболее сложных для понимания вопросов темы, с целью последующей организации работы по устранению данных пробелов в знаниях обучающихся.</p>`];
// Ключевые слова
const keyWords = 
`Депарафинизация \n процесс, направленный на удаление нормальных парафиновых углеводородов из керосино-газойлевых и масляных фракций нефти;
Депарафинизат \n целевой продукт процесса депарафинизации;
Гач \n побочный продукт процесса депарафинизации деасфальтизатов;
Петролатум \n побочный продукт депарафинизации остаточных масел;
Масло \n жидкие смеси высококипящих (высокомолекулярных) углеводородов; 
Растворитель \n вещество, которое способно растворять другие твёрдые, жидкие или газообразные вещества, не изменяя их химически.`
/* 1) ФГОС СПО
2) ПООП Профессионалитета
3) Профессиональный модуль
4) МДК
5) Раздел
6) Тема */
const infoContent = 
`${numFgos} ${numFgosTxt}
${numFgos} ${numFgosTxt}
ПМ.02 Ведение технологического процесса на установках I и II категорий
${numMDK} ${numMDKTxt}
${razdel}
${themeOfDEC}`
const blockButtonEOM2 = 1; // "Это для разработки и отладки удобно, блокирует кнопки назад и далее в ЭОМ_2 1 true 0 false"
const typeOfEOM3 = 0; // Если 1 то это тест если что то иное то мини-игра
const typeOfEOM1 = 1; // Если 1 то это video если что то иное то dynamic_info