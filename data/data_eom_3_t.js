window.dataLoaded = false;
let title_of_eom = themeOfDEC;
const data = {
    "index_1":{
        "subtitle": "Укажите средства индивидуальной защиты, применяемые во время работы с буровыми расстворами <b class='black_sub'>(Выберите несколько правильных ответов)</b>",
        "step_of_popup": "Укажите средства индивидуальной защиты, применяемые во время работы с буровыми расстворами.",
        "test":[
            {"type": 1},
            {"answers": [
                "Костюм из смешанных тканей",
                "Очки защитные",
                "Перчатки с полимерным покрытием",
                "Маска защитная",
                "Каска защитная",
                "Ботинки кожаные с жестким мыском",
            ]},
            {"correct_answer": [0,1,2,4,5]},
            {"image": false, "image_path": "./content/video/test_video.mp4"}
        ],
    },
    "index_2":{
        "subtitle": "Какие функции должна выполнять промывочная жидкость в бурении для качественной проводки скважины. <b class='black_sub'>(Выберите несколько правильных ответов)</b>",
        "step_of_popup": "Какие функции должна выполнять промывочная жидкость в бурении для качественной проводки скважины.",
        "test":[
            {"type": 1},
            {"answers": [
                "Физико-химическая",
                "Гидростатическая",
                "Экономическая",
                "Коркообразования",
                "Гидродинамическая"
            ]},
            {"correct_answer": [0, 1, 3, 4]},
            {"image": false, "image_path": "./content/video/test_video.mp4"}
        ],
    },
    "index_3":{
        "subtitle": "Дайте определение понятию «Условная вязкость», выбрав один правильный ответ.",
        "step_of_popup": "Дайте определение понятию «Условная вязкость», выбрав один правильный ответ.",
        "test":[
            {"type": 1},
            {"answers": [
                "сила внутреннего трения в промывочной жидкости",
                "время истечения 500 см<sup>3</sup> промывочной жидкости ",
                "время истечения 700 см<sup>3</sup> промывочной жидкости"
            ]},
            {"correct_answer": [1]},
            {"image": false, "image_path": "./content/video/test_video.mp4"}
        ],
    },
    "index_4":{
        "subtitle": "Сопоставьте название прибора параметру бурового раствора для оценки его качества.",
        "step_of_popup": "Сопоставьте название прибора параметру бурового раствора для оценки его качества.",
        "test":[
            {"type": 9},
            {"description": "Тут пишем описание задания"},
            {"definitions": [
                "Ареометр",
                "Вискозиметр",
                "ВМ-6",
                "СНС-2"
            ]},
            {"answers": [
                "Показатель фильтрации (водоотдача)",
                "Вязкость",
                "Плотность",
                "Статическое напряжение сдвига"
            ]},
            {"correct_answer_type_10": [3, 2, 1, 4]},
            {"image": true, "image_path": "./content/empty_img.png", "image_sgn": "blablabla"}
        ],
    },
    "index_5":{
        "subtitle": "Сопоставьте название прибора с его назначением.",
        "step_of_popup": "Сопоставьте название прибора с его назначением.",
        "test":[
            {"type": 9},
            {"description": "Тут пишем описание задания"},
            {"definitions": [
                "Ареометр",
                "Гидроциклонный шламоотделитель",
                "Газовый сепаратор",
                "Вибросито",
                "Вискозиметр полевой"
            ]},
            {"answers": [
                "Очистка БР",
                "Плотность БР",
                "Очистка БР",
                "Дегазация БР",
                "Вязкость БР"
            ]},
            {"correct_answer_type_10": [2, 3, 4, 1, 5]},
            {"image": true, "image_path": "./content/empty_img.png", "image_sgn": "blablabla"}
        ],
    },
    "index_6":{
        "subtitle": "Сопоставьте изображение прибора с его названием.",
        "step_of_popup": "Сопоставьте изображение прибора с его названием.",
        "test": [{
            "type": 4
        }, {
            "image": "['./content/15111.png', './content/15211.png', './content/15311.png', './content/15411.png']"
        }, {
            "answers": ["Ареометр", "Гидроциклонный шламоотделитель", "Газовый сепаратор", "Вискозиметр"]
        }],
    },
    "index_7":{
        "subtitle": "subtitle 3333",
        "step_of_popup": "step 2",
        "test":[
            {"type": 4},
            {"image": "['./content/tests_content/03_01.png', './content/tests_content/03_02.png', './content/tests_content/03_03.png', './content/tests_content/03_03.png', './content/tests_content/03_03.png']"},
            {"answers": [
                "Шибер",
                "Клин",
                "Диск",
                "ДисВАЫВААЫВк",
                "КлиВЫАЫАЫАВФЫФн",
            ]}
        ],
    },
    "index_8":{
        "subtitle": "subtitle 3333",
        "step_of_popup": "step 2",
        "test":[
            {"type": 5},
            {"leftColumn": 2},
            {"rightColumn": 4},
            {"image": "./content/tests_content/03_01_0002.png"},
            {"answers": [
            'регулировочная рукоятка',
            'лицевая панель',
            'панель со шкалой',
            'ползунок',
            'обмотка',
            'защитный кожух']}
        ],
    },
    "index_9":{
        "subtitle": "subtitle 3333",
        "step_of_popup": "step 2",
        "test":[
            {"type": 6},
            {"image": "./content/tests_content/03_01_0002.png"},
            {"answers": [
            ['двум лицам, одно должно иметь квалификационную группу по электробезопасности ІІІ, второе – группу IV или V старшее по должности'],
            ['двум лицам, одно должно иметь квалификационную группу по электробезопасности не ниже IV'],
            ['двум лицам, одно должно иметь квалификационную группу по электробезопасности не ниже ІІІ'],
            ['двум лицам, одно должно иметь квалификационную группу по электробезопасности не ниже ІІІfsdfsfsfsfsfssfsd']
            ]},
            {"columns": ["до 1000 В","до 380 В","выше 1000 В","выше 1000 dgdgdgdfgdgdgd"]}
        ],
    },
    "index_10":{
        "subtitle": "subtitle 3333",
        "step_of_popup": "step 2",
        "test":[
            {"type": 7},
            {"anwserArr2": ['Вы случайно включили канал...', 'Старуха из «Сказки о рыбаке...»', 'Успешный художник...', 'Вы стараетесь хорошо учиться...', 'Вам нравится перед засыпанием...','Вы остались после работы...', 'Сотруднику пообещали премию...', 'Внезапно начавшийся дождик...', 'Некоторым детям родители...','Вы сегодня не выспались...', 'Чтобы избежать угона...', 'Ваш сын-школьник читает книгу...']},
            {"answersInCol": [
                ['Вы случайно включили канал...', 'Старуха из «Сказки о рыбаке...»', 'Успешный художник...', 'Вы стараетесь хорошо учиться...', 'Вам нравится перед засыпанием...'],
                ['Вы остались после работы...', 'Сотруднику пообещали премию...', 'Внезапно начавшийся дождик...', 'Некоторым детям родители...'],
                ['Вы сегодня не выспались...', 'Чтобы избежать угона...', 'Ваш сын-школьник читает книгу...']
            ]},
            {"columns": ['Внешняя', 'Внутренняя', 'Черешня']}
        ],
    },
    "index_11":{
        "subtitle": "subtitle 3333",
        "step_of_popup": "step 2",
        "test":[
            {"type": 8},
            {"description": "Тут пишем описание задания"},
            {"test_with_text_3": "Россия {=1} наша {=2} Россия - любимая наша страна Могучая {=3} великая {=4} Твое {=5} на все {=6}"},
            {"options_test_with_text_3": {
                "1": ["священная", "земля", "родина"],
                "2": ["держава", "страна", "родина"],
                "3": ["воля", "доброта", "сила"],
                "4": ["слава", "доброта", "сила"],
                "5": ["достоянье", "награда", "трофей"],
                "6": ["времена", "годы", "столетия"]
            }},
            {"correctAnswers_test_with_text_3": {
                "1": "священная",
                "2": "держава",
                "3": "воля",
                "4": "слава",
                "5": "достоянье",
                "6": "времена"
            }},
            {"image": true, "image_path": "./content/video/test_video.mp4"}
        ],
    },
    "index_12":{
        "subtitle": "subtitle 3333",
        "step_of_popup": "step 2",
        "test":[
            {"type": 9},
            {"description": "Тут пишем описание задания"},
            {"definitions": [
                "First definitions",
                "<video class='answer_or_definition_img' controls='controls' src='./content/video/test_video.mp4'></video>",
                "Third definitions",
                "Fourth definitions",
                "<p class='popup_zoom_plc'><img class='answer_or_definition_img' src='./content/test_image.png' alt='1'></p>"
            ]},
            {"answers": [
                "<p class='popup_zoom_plc'><img class='answer_or_definition_img' src='./content/test_image.png' alt='1'></p>",
                "<p class='popup_zoom_plc zoom_paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, assumenda cumque omnis voluptate, et sapiente laboriosam cum amet aliquam nam nemo perferendis eius sequi voluptatem similique iure explicabo dolore iusto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sit optio molestias earum eligendi, repellendus dolore, minus odit enim sequi placeat laudantium! Dolorum repellendus reiciendis reprehenderit soluta nobis, facilis dolore?</p>",
                "Third Answer",
                "Fourth Answer",
                "Fifth Answer"
            ]},
            {"correct_answer_type_10": [5, 4, 3, 2, 1]},
            {"image": true, "image_path": "./content/test_image.png", "image_sgn": "blablabla"}
        ],
    },
    "index_13":{
        "subtitle": "Тут типа результаты",
        "step_of_popup": "Тут типа результаты",
        "result":[]
    },
}
window.dataLoaded = true;