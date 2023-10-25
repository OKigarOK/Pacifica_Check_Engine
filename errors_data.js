export const ERRORS_DATA = [
    {
        error_number: 'P0016',
        error_name: 'ПЕРЕКОС ФАЗ ГАЗОРАСПРЕДЕЛЕНИЯ КОЛЕНЧАТОГО ВАЛА/РАСПРЕДЕЛИТЕЛЬНОГО ВАЛА',
        error_monitored: 'Запуск двигателя и работа двигателя',
        error_condition: 'Модуль управления силовым агрегатом обнаруживает ошибку, когда положение распределительного вала не совпадает с положением коленчатого вала. Одна ошибка при отключении.',
        error_causes: [
            'ПРЕРЫВИСТОЕ СОСТОЯНИЕ',
            'ПРОВЕРКА ПРЕРЫВИСТОГО СИГНАЛА CMP С ПОМОЩЬЮ ЛАБОРАТОРИИ',
            'ПРОВЕРКА ЖГУТА ПРОВОДОВ CMP',
            'ПРОВЕРКА ТОНАЛЬНОГО КОЛЕСА/ИМПУЛЬСНОГО КОЛЬЦА',
            'ПРОВЕРКА ЖГУТА ПРОВОДОВ CKP',
            'ПРОВЕРКА ТОНАЛЬНОГО КОЛЕСА/ИМПУЛЬСНОГО КОЛЬЦА',
            'ПРЕРЫВИСТЫЙ СИГНАЛ CKP',
            'ДАТЧИК ПОЛОЖЕНИЯ РАСПРЕДЕЛИТЕЛЬНОГО ВАЛА',
            'ДАТЧИК ПОЛОЖЕНИЯ КОЛЕНЧАТОГО ВАЛА'
        ],
        error_actions: ['В РАБОТЕ...']
    },
    {
        error_number: 'P0031 / P0037',
        error_name: 'ДАТЧИК O2 1-Й / 2-Й НИЗКИЙ УРОВЕНЬ В ЦЕПИ НАГРЕВАТЕЛЯ',
        error_note: 'Все перечисленные выше симптомы диагностируются с помощью одних и тех же тестов.\n' +
            'Тесты будут называться P0031-ДАТЧИК O2 1/1 НАГРЕВАТЕЛЯ\n' +
            'РАЗРЯЖЕННЫЙ КОНТУР.',
        error_monitored: 'Напряжение батареи выше 10.6 вольт, ASD включен, а нагреватель O2 включен.',
        error_condition: 'PCM обнаруживает, что напряжение нагревателя O2 выходит за пределы допустимого диапазона. Ниже 0.0926 вольта. Одна ошибка при отключении.',
        error_causes: [
            'РАБОТА НАГРЕВАТЕЛЯ ДАТЧИКА O2',
            'НАГРЕВАТЕЛЬНЫЙ ЭЛЕМЕНТ O2',
            'СХЕМА УПРАВЛЕНИЯ НАГРЕВАТЕЛЕМ O2',
            'УПРАВЛЕНИЕ НАГРЕВАТЕЛЕМ O2 ЗАМКНУТО НА ЗЕМЛЮ',
            'PCM'
        ],
        error_actions: [
            '1. Зажигание включено, двигатель не работает.<br>' +
            'С помощью DRBIII считайте коды неисправностей и записывайте соответствующие данные стоп-кадра.<br>' +
            'Отображается ли счетчик исправных поездок и равен ли он нулю?<br>' +
            'Да → Перейти к пункту 3.<br>' +
            'Нет → Перейти к пункту 2.',
            '2. Выключите зажигание.<br>' +
            '<b>ПРИМЕЧАНИЕ: Перед продолжением теста дайте датчику O2 остыть. О2 Напряжение датчика должно стабилизироваться на уровне 5.0 вольт. Поднятие капота может помочь быстрее снизить температуру под капотом.</b><br>' +
            'Зажигание включено, двигатель не работает.<br>' +
            'С помощью DRBIII запустите проверку нагревателя O2.<br>' +
            'С помощью DRBIII контролируйте напряжение датчика O2 в течение не менее 2 минут.<br>' +
            'Остается ли напряжение датчика O2 выше 4,5 вольт?<br>' +
            'Да → Перейти к пункту 3.<br>' +
            'Нет → Относится к симптому ПРЕРЫВИСТОГО СОСТОЯНИЯ в категории управляемости.<br>' +
            'Выполните ПРОВЕРОЧНЫЙ ТЕСТ СИЛОВОГО АГРЕГАТА VER-5- NGC.',
            '3. Выключите зажигание.<br>' +
            '<b>ПРИМЕЧАНИЕ: Дайте датчику O2 остыть до комнатной температуры.</b><br>' +
            'Отсоедините разъем жгута проводов датчика O2.<br>' +
            'Измерьте сопротивление со стороны компонента нагревательного элемента датчика O2.<br>' +
            '<b>ПРИМЕЧАНИЕ: Спецификация сопротивления нагревателя: 1/1 и 1/2 датчика O2 от 2,1 до 2,7 Ом.</b><br>' +
            'Соответствует ли нагревательный элемент датчика O2 техническим требованиям?<br>' +
            'Да → Перейти к пункту 4.<br>' +
            'Нет → Замените датчик O2.<br>' +
            'Выполните ПРОВЕРОЧНЫЙ ТЕСТ СИЛОВОЙ УСТАНОВКИ VER-5- NGC.',
            '4. Выключите зажигание.<br>' +
            'Отсоедините разъем жгута проводов датчика O2.<br>' +
            'Зажигание включено, двигатель не работает.<br>' +
            'С помощью DRBIII запустите проверку нагревателя O2.<br>' +
            'Используя 12-вольтовую контрольную лампочку, подключенную к заземлению, проверьте цепь управления нагревателем O2 в разъеме жгута проводов датчика O2.<br>' +
            'Горит ли тест ярко и включается ли и выключается ли вспышка?<br>' +
            'Да → Замените датчик O2.<br>' +
            'Выполните ПРОВЕРОЧНЫЙ ТЕСТ СИЛОВОЙ УСТАНОВКИ VER-5- NGC.<br>' +
            'Нет → Перейти к пункту 5.',
            '5. Выключите зажигание.<br>' +
            'Отсоедините разъем жгута проводов датчика O2.<br>' +
            'Отсоедините разъем жгута проводов PCM.<br>' +
            'Измерьте сопротивление между землей и цепью управления нагревателем O2 в O2.<br>' +
            'Разъем жгута проводов датчика.<br>' +
            'Является ли сопротивление ниже 5.0 Ом?<br>' +
            'Да → Устраните короткое замыкание на землю в цепи управления нагревателем датчика O2.<br>' +
            'Выполните ПРОВЕРОЧНЫЙ ТЕСТ СИЛОВОЙ УСТАНОВКИ VER-5- NGC.<br>' +
            'Нет → ПРИМЕЧАНИЕ: Прежде чем продолжить, проверьте клеммы разъема жгута проводов PCM\n' +
            'на наличие коррозии, повреждений или выталкивания клемм. Ремонтируйте по мере\n' +
            'необходимости. Замените и запрограммируйте модуль управления силовым агрегатом\n' +
            'в соответствии с сервисной информацией.<br>' +
            'Выполните ПРОВЕРОЧНЫЙ ТЕСТ СИЛОВОЙ УСТАНОВКИ VER-5- NGC.'
        ]
    },
    {
        error_number: 'P0032 / P0038',
        error_name: 'ДАТЧИК O2 1-Й / 2-Й ВЫСОКИЙ УРОВЕНЬ В КОНТУРЕ НАГРЕВАТЕЛЯ',
        error_note: 'Все перечисленные выше симптомы диагностируются с помощью одних и тех же тестов.\n' +
            'Тесты будут называться P0032-ДАТЧИК O2 1/1 НАГРЕВАТЕЛЯ\n' +
            'ЦЕПЬ НА ВЫСОКОМ УРОВНЕ.',
        error_monitored: 'Напряжение батареи выше 10.6 вольт, ASD включен, а нагреватель O2 выключен.',
        error_condition: 'Напряжение нагревателя O2 выходит за пределы допустимого значения. Одна ошибка при отключении.',
        error_causes: [
            'РАБОТА НАГРЕВАТЕЛЯ ДАТЧИКА O2',
            'НАГРЕВАТЕЛЬНЫЙ ЭЛЕМЕНТ O2',
            'ЦЕПЬ ЗАЗЕМЛЕНИЯ НАГРЕВАТЕЛЯ O2 РАЗОМКНУТА',
            'ДАТЧИК O2',
            'УПРАВЛЕНИЕ НАГРЕВАТЕЛЕМ O2 ЗАМКНУТО НА НАПРЯЖЕНИЕ',
            'ЦЕПЬ УПРАВЛЕНИЯ НАГРЕВАТЕЛЕМ O2 РАЗОМКНУТА',
            'PCM'
        ],
        error_actions: [

        ]
    },
    {
        error_number: 'P0068',
        error_name: 'СООТНОШЕНИЕ ДАВЛЕНИЯ В КОЛЛЕКТОРЕ И ПОЛОЖЕНИЯ ДРОССЕЛЬНОЙ ЗАСЛОНКИ',
        error_monitored: 'При работающем двигателе и отсутствии установленного датчика MAP или датчика TP DTC.',
        error_condition: 'PCM определяет допустимый диапазон, в котором должен находиться датчик TP при заданных оборотах в минуту/нагрузке. Затем фактическое напряжение датчика TP сравнивается с этим значением. Если напряжение датчика TP не попадает в ожидаемый диапазон в течение заданного времени, будет обнаружена ошибка. Две неисправности срабатывания.',
        error_causes: [
            'УДАЧНОЙ ПОЕЗДКИ, РАВНОЙ НУЛЮ',
            'ВЫСОКОЕ СОПРОТИВЛЕНИЕ В ЦЕПИ ПИТАНИЯ MAP (K6) НАПРЯЖЕНИЕМ 5 ВОЛЬТ',
            'СОПРОТИВЛЕНИЕ ЗАЗЕМЛЕНИЮ В ЦЕПИ ПИТАНИЯ MAP (K6) НАПРЯЖЕНИЕМ 5 ВОЛЬТ',
            'КАРТОГРАФИЧЕСКИЙ ДАТЧИК',
            'ВЫСОКОЕ СОПРОТИВЛЕНИЕ В СИГНАЛЬНОЙ ЦЕПИ MAP (K1)',
            'СОПРОТИВЛЕНИЕ ЗАЗЕМЛЕНИЮ В СИГНАЛЬНОЙ ЦЕПИ MAP (K1)',
            'ВЫСОКОЕ СОПРОТИВЛЕНИЕ В ЦЕПИ ЗАЗЕМЛЕНИЯ КАРТЫ (K4)',
            'PCM',
            'РАБОТА ДАТЧИКА TP',
            'ВЫСОКОЕ СОПРОТИВЛЕНИЕ В ЦЕПИ ПИТАНИЯ ДАТЧИКА TP (K6) НАПРЯЖЕНИЕМ 5 ВОЛЬТ',
            'СОПРОТИВЛЕНИЕ ЗАЗЕМЛЕНИЮ В ЦЕПИ ПИТАНИЯ ДАТЧИКА TP (K6) НАПРЯЖЕНИЕМ 5 ВОЛЬТ',
            'ДАТЧИК TP',
            'ВЫСОКОЕ СОПРОТИВЛЕНИЕ В СИГНАЛЬНОЙ ЦЕПИ TP (K22)',
            'СОПРОТИВЛЕНИЕ ЗАЗЕМЛЕНИЮ В СИГНАЛЬНОЙ ЦЕПИ ДАТЧИКА TP (K22)',
            'ВЫСОКОЕ СОПРОТИВЛЕНИЕ В ЦЕПИ ЗАЗЕМЛЕНИЯ ДАТЧИКА TP (K4)',
            'PCM'
        ],
        error_actions: ['В РАБОТЕ...']
    },
    {
        error_number: 'P0071',
        error_name: 'ПРОИЗВОДИТЕЛЬНОСТЬ ДАТЧИКА ТЕМПЕРАТУРЫ ОКРУЖАЮЩЕЙ СРЕДЫ',
        error_monitored: 'Время выключения двигателя составляет более 480 минут. Температура окружающей среды превышает -23°C (-10°F).',
        error_condition: 'По истечении откалиброванного времени охлаждения PCM сравнивает значения датчиков ECT, IAT и температуры окружающего воздуха. Если значение датчика температуры окружающего воздуха не находится в пределах откалиброванного значения температуры двух других датчиков температуры, обнаруживается ошибка. Две неисправности срабатывания.',
        error_causes: [
            'УДАЧНОЙ ПОЕЗДКИ, РАВНОЙ НУЛЮ',
            '(K25) СИГНАЛЬНАЯ ЦЕПЬ AAT ЗАКОРОЧЕНА ДО НАПРЯЖЕНИЯ БАТАРЕИ',
            'НАПРЯЖЕНИЕ ДАТЧИКА ТЕМПЕРАТУРЫ ОКРУЖАЮЩЕГО ВОЗДУХА НИЖЕ 1.0 ВОЛЬТА',
            '(K25) СИГНАЛЬНАЯ ЦЕПЬ AAT РАЗОМКНУТА',
            '(K4) ЦЕПЬ ЗАЗЕМЛЕНИЯ ДАТЧИКА РАЗОМКНУТА',
            '(K25) СИГНАЛЬНАЯ ЦЕПЬ AAT ЗАМКНУТА НА ЗЕМЛЮ',
            '(K25) СИГНАЛЬНАЯ ЦЕПЬ AAT ЗАМКНУТА НА ЗЕМЛЮ ДАТЧИКА (K4)',
            'НИЗКИЙ УРОВЕНЬ PCM',
            'PCM ВЫСОКИЙ'
        ],
        error_actions: ['В РАБОТЕ...']
    },
    {
        error_number: 'P0072',
        error_name: 'НИЗКИЙ УРОВЕНЬ ДАТЧИКА ТЕМПЕРАТУРЫ ОКРУЖАЮЩЕЙ СРЕДЫ',
        error_monitored: 'Ключ зажигания включен.',
        error_condition: 'Датчик температуры окружающей среды имеет значение менее 0,0392 вольта на PCM. Одна ошибка при отключении.',
        error_causes: [
            'НАПРЯЖЕНИЕ ДАТЧИКА ТЕМПЕРАТУРЫ ОКРУЖАЮЩЕГО ВОЗДУХА НИЖЕ 0.3 ВОЛЬТА',
            'ВНУТРЕННЯЯ НЕИСПРАВНОСТЬ ДАТЧИКА ТЕМПЕРАТУРЫ ОКРУЖАЮЩЕГО ВОЗДУХА',
            '(K145) СИГНАЛЬНАЯ ЦЕПЬ AAT ЗАМКНУТА НА ЗЕМЛЮ',
            '(K25) СИГНАЛЬНАЯ ЦЕПЬ AAT ЗАМКНУТА НА (K4) ЦЕПЬ ЗАЗЕМЛЕНИЯ ДАТЧИКА',
            'PCM'
        ],
        error_actions: ['В РАБОТЕ...']
    },
    {
        error_number: 'P0073',
        error_name: 'ДАТЧИК ТЕМПЕРАТУРЫ ОКРУЖАЮЩЕЙ СРЕДЫ ВЫСОКИЙ',
        error_monitored: 'Ключ зажигания включен.',
        error_condition: 'Напряжение датчика температуры окружающей среды превышает 4.94 вольта. Одна ошибка при отключении.',
        error_causes: [
            'НАПРЯЖЕНИЕ ДАТЧИКА ТЕМПЕРАТУРЫ ОКРУЖАЮЩЕГО ВОЗДУХА ВЫШЕ 4.8 ВОЛЬТ',
            '(K25) СИГНАЛЬНАЯ ЦЕПЬ AAT ЗАКОРОЧЕНА ДО НАПРЯЖЕНИЯ БАТАРЕИ',
            'ВНУТРЕННЯЯ НЕИСПРАВНОСТЬ ДАТЧИКА ТЕМПЕРАТУРЫ ОКРУЖАЮЩЕГО ВОЗДУХА',
            '(K25) СИГНАЛЬНАЯ ЦЕПЬ AAT РАЗОМКНУТА',
            '(K4) ЦЕПЬ ЗАЗЕМЛЕНИЯ ДАТЧИКА РАЗОМКНУТА',
            'PCM'
        ],
        error_actions: ['В РАБОТЕ...']
    },
    {
        error_number: 'P0522',
        error_name: 'НИЗКИЙ УРОВЕНЬ ДАТЧИКА ДАВЛЕНИЯ',
        error_monitored: 'Двигатель работает, напряжение аккумуляторной батареи выше 10.4 вольт.',
        error_condition: 'Напряжение датчика давления масла на PCM падает ниже 0.1 вольта на 0.5 секунды.',
        error_causes: [
            'НАПРЯЖЕНИЕ ДАТЧИКА ДАВЛЕНИЯ МАСЛА НИЖЕ 0.1 ВОЛЬТА',
            'ВНУТРЕННЯЯ ОТКАЗ ДАТЧИКА ДАВЛЕНИЯ МАСЛА',
            '(G6) СИГНАЛ ДАВЛЕНИЯ МАСЛА ЗАМКНУТ НА ЗЕМЛЮ',
            'PCM'
        ],
        error_actions: [
            '<b>ПРИМЕЧАНИЕ. Прежде чем продолжить, убедитесь, что давление моторного масла соответствует правильному.</b><br>' +
            '1. Зажигание включено, двигатель не работает.<br>' +
            'С помощью DRBIII считайте напряжение датчика давления масла.<br>' +
            'Напряжение ниже 0,1 вольт? <br>' +
            'Да → Перейти к пункту 2.<br>' +
            'Нет → См. признак ПРЕРЫВНОГО СОСТОЯНИЯ в Категория управляемости. Выполните ПРОВЕРОЧНЫЙ ТЕСТ СИЛОВОЙ ПЕРЕДАЧИ VER-5-NGC.',
            '2. Выключите зажигание.<br>' +
            'Отсоедините разъем жгута проводов датчика давления масла.<br>' +
            'Зажигание включено, двигатель не работает.<br>' +
            'С помощью DRBIII считайте напряжение датчика давления масла.<br>' +
            'Напряжение датчика давления масла составляет примерно 5.0 вольт?<br>' +
            'Да → Замените датчик давления масла. Выполните ПРОВЕРОЧНЫЙ ТЕСТ СИЛОВОЙ ПЕРЕДАЧИ VER-5-NGC.<br>' +
            'Нет → Перейти к пункту 3.<br>',
            '3. Выключите зажигание.<br>' +
            'Отсоедините разъем жгута проводов датчика давления масла.<br>' +
            'Отсоедините разъем жгута проводов PCM.<br>' +
            'Измерьте сопротивление между массой и цепью сигнала масляного пресса (G6) в разъем жгута проводов датчика давления масла.<br>' +
            'Сопротивление ниже 100 Ом?<br>' +
            'Да → Устранить замыкание на массу цепи сигнала масляного пресса (G6). Выполните ПРОВЕРОЧНЫЙ ТЕСТ СИЛОВОЙ трансмиссии VER-5-NGC.<br>' +
            'Нет → Замените и запрограммируйте модуль управления силовым агрегатом в соответствии с Сервисной информацией. Выполните ПРОВЕРОЧНЫЙ ТЕСТ СИЛОВОЙ ПЕРЕДАЧИ VER-5-NGC.'
        ]
    },
    {
        error_number: 'P0700',
        error_name: 'СИСТЕМА УПРАВЛЕНИЯ ПЕРЕДАЧЕЙ/ПЕРЕДАЧА СЧИТЫВАНИЯ КОДЫ НЕИСПРАВНОСТЕЙ В DRBIII',
        error_monitored: '',
        error_condition: '',
        error_causes: ['Паходу пяздарулю'],
        error_actions: ['Ищи канистру и спички', 'Абассать и сжечь']
    },
    {
        error_number: 'P1697',
        error_name: 'ПРОБЕГ EMR (SRI) НЕ СОХРАНЕН',
        error_monitored: 'При постоянно включенном зажигании.',
        error_condition: 'Попытка запрограммировать/записать во внутреннее EEPROM завершилась неудачей, также выполняется проверка при выключении питания.',
        error_causes: [
            'DRB ОТОБРАЖАЕТ ОШИБКУ ЗАПИСИ',
            'DRB ОТОБРАЖАЕТ ОТКАЗ В ЗАПИСИ ВО 2-Й РАЗ',
            'DRB ОТОБРАЖАЕТ НЕДОПУСТИМЫЙ ПРОБЕГ SRI',
            'СРАВНИТЕ ПРОБЕГ SRI С ПОМОЩЬЮ ОДОМЕТРА'
        ],
        error_actions: [
            '1. С помощью DRBIII выполните тест памяти SRI.<br>' +
            'Отображает ли DRBIII ошибку записи?<br>' +
            'Да → Замените и запрограммируйте модуль управления силовым агрегатом в соответствии с сервисной информацией. Выполните ПРОВЕРОЧНЫЙ ТЕСТ СИЛОВОГО АГРЕГАТА ВЕРСИИ 1.<br>' +
            'Нет → Перейти к пункту 2.',
            '2. С помощью DRBIII выполните тест памяти SRI.<br>' +
            'Отображается ли на дисплее DRBIII сообщение "Отказано в записи"?<br>' +
            'Да → Перейти к пункту 3.<br>' +
            'Нет → Перейти к пункту 4.',
            '3. С помощью DRBIII выполните тест памяти SRI во второй раз.<br>' +
            '<b>ПРИМЕЧАНИЕ: Повторите проверку памяти SRI еще два раза.</b><br>' +
            'Отображается ли на дисплее DRBIIIt сообщение "Отказано в записи" снова?<br>' +
            'Да → Замените и запрограммируйте модуль управления силовым агрегатом в соответствии с сервисной информацией.\n' +
            'Выполните ПРОВЕРОЧНЫЙ ТЕСТ СИЛОВОГО АГРЕГАТА ВЕРСИИ 1.<br>' +
            'Нет → Тест завершен.',
            '4. С помощью DRBIII выполните тест памяти SRI.<br>' +
            'Показывает ли DRBIII недопустимый пробег SRI?<br>' +
            'Да → Обновите пробег и повторно протестируйте память SRI. Выполните ПРОВЕРОЧНЫЙ ТЕСТ СИЛОВОГО АГРЕГАТА ВЕРСИИ 1.<br>' +
            'Нет → Перейти к пункту 5.',
            '5. Сравните сохраненный пробег SRI с показаниями одометра на приборной панели.<br>' +
            'Отображается ли пробег в пределах указанного диапазона на DRBIIIt?<br>' +
            'Да → Тест завершен.<br>' +
            'Нет → Обновите пробег и повторно протестируйте память SRI. Выполните ПРОВЕРОЧНЫЙ ТЕСТ СИЛОВОГО АГРЕГАТА ВЕРСИИ 1.'
        ]
    },

    {
        error_number: '',
        error_name: '',
        error_monitored: '',
        error_condition: '',
        error_causes: '',
        error_actions: ['В РАБОТЕ...']
    },
]