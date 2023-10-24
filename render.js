import {ERRORS_DATA} from './errors_data.js'
const CONTAINER = document.getElementById('container')

ERRORS_DATA.forEach(function (error) {
    // const error = ERRORS_DATA[0];

// ЭЛЕМЕНТЫ КАРТОЧКИ
    const errorCard = document.createElement('div');
    errorCard.className = 'error_card';
    CONTAINER.append(errorCard);

    const errorArticle = document.createElement('div');
    errorArticle.className = 'accordion error_article';
    errorCard.append(errorArticle);
    const errorArticleH1 = document.createElement('h1');
    errorArticleH1.innerText = error.error_number; // error_number
    errorArticle.append(errorArticleH1)
    const errorArticleH2 = document.createElement('h2');
    errorArticleH2.innerText = error.error_name; //error_name
    errorArticle.append(errorArticleH2);
    const panel = document.createElement('div');
    panel.className = 'panel';
    errorCard.append(panel);

    const errorMonitored = document.createElement('div');
    errorMonitored.className = 'error_monitored';
    panel.append(errorMonitored);
    const errorMonitoredH3 = document.createElement('h3');
    errorMonitoredH3.innerText = 'МОНИТОРИНГ:';
    errorMonitored.append(errorMonitoredH3);
    const errorMonitoredP = document.createElement('p');
    errorMonitoredP.innerText = error.error_monitored; // error_monitored
    errorMonitored.append(errorMonitoredP);

    const errorCondition = document.createElement('div');
    errorCondition.className = 'error_condition';
    panel.append(errorCondition);
    const errorConditionH3 = document.createElement('h3');
    errorConditionH3.innerText = 'СОСТОЯНИЕ:';
    errorCondition.append(errorConditionH3);
    const errorConditionP = document.createElement('p');
    errorConditionP.innerText = error.error_condition; // error_condition
    errorCondition.append(errorConditionP);

    const errorCauses = document.createElement('div');
    errorCauses.className = 'error_causes';
    panel.append(errorCauses);
    const errorCausesH3 = document.createElement('h3');
    errorCausesH3.innerText = 'ВОЗМОЖНЫЕ ПРИЧИНЫ:';
    errorCauses.append(errorCausesH3);

// ЦИКЛ ПРИЧИН
    const causesElements = error.error_causes;

    for (let cause of causesElements) {
        const errorCausesP = document.createElement('p');
        errorCausesP.innerHTML = '&#10149; ' + cause; // error_causes
        errorCauses.append(errorCausesP);
    }

    const errorActions = document.createElement('div');
    errorActions.className = 'error_actions';
    panel.append(errorActions);
    const errorActionsH3 = document.createElement('h3');
    errorActionsH3.innerText = 'ДЕЙСТВИЯ:';
    errorActions.append(errorActionsH3);

// ЦИКЛ ЭКШЕНОВ
    const actionsElements = error.error_actions;

    for (let action of actionsElements) {
        const errorActionP = document.createElement('p');
        errorActionP.className = 'error_action';
        errorActionP.innerHTML = action; // error_action
        errorActions.append(errorActionP);
    }
})



ACCORD()
