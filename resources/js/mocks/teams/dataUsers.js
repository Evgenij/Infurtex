let countries = ['Россия', 'США', 'Украина', 'Польша', 'Беларусь', 'Германия', 'Испания', 'Италия']
let gender = ['Мужской', 'Женский']
let statusEmp = ['Безработный','Студент','Частичная занятость','Полная занятость','Предприниматель', 'На пенсии']
let education = ['Без образования', 'Среднее общее', 'Среднее профессиональное', 'Высшее — бакалавриат', 'Высшее — магистратура', 'Высшее — кадры выс.квалиф']
let industries = [
    {id: 1, name: 'Информационные технологии'},
    {id: 2, name: 'Автомобильный бизнес'},
    {id: 3, name: 'Продажи, обслуживание клиентов'},
    {id: 4, name: 'Производство, сервисное обслуживание'},
    {id: 5, name: 'Стратегия, инвестиции, консалтинг'},
    {id: 6, name: 'Строительство, недвижимость'},
    {id: 7, name: 'Финансы, бухгалтерия'},
    {id: 8, name: 'Управление персоналом, тренинги'},
]
let workArea = [
    {id: 1, id_ind: 1, name: 'Аналитик'},
    {id: 2, id_ind: 1, name: 'Арт-директор, креативный директор'},
    {id: 3, id_ind: 1, name: 'Дизайнер, художник'},
    {id: 4, id_ind: 1, name: 'Программист, разработчик'},
    {id: 5, id_ind: 1, name: 'Руководитель группы разработки'},
    {id: 6, id_ind: 2, name: 'Автомойщик'},
    {id: 7, id_ind: 2, name: 'Автослесарь, автомеханик'},
    {id: 8, id_ind: 2, name: 'Мастер-приемщик'},
    {id: 9, id_ind: 2, name: 'Менеджер по продажам, менеджер по работе с клиентами'},
    {id: 10, id_ind: 3, name: 'Агент по недвижимости'},
    {id: 11, id_ind: 3, name: 'Коммерческий директор (CCO)'},
    {id: 12, id_ind: 3, name: 'Кредитный специалист'},
    {id: 13, id_ind: 4, name: 'Инженер по качеству'},
    {id: 14, id_ind: 4, name: 'Инженер-технолог'},
    {id: 15, id_ind: 4, name: 'Машинист'},
    {id: 16, id_ind: 5, name: 'Менеджер/консультант по стратегии'},
    {id: 17, id_ind: 5, name: 'Руководитель проектов'},
    {id: 18, id_ind: 5, name: 'Финансовый аналитик, инвестиционный аналитик'},
    {id: 19, id_ind: 6, name: 'Архитектор'},
    {id: 20, id_ind: 6, name: 'Геодезист'},
    {id: 21, id_ind: 6, name: 'Инженер ПТО, инженер-сметчик'},
    {id: 22, id_ind: 7, name: 'Казначей'},
    {id: 23, id_ind: 7, name: 'Финансовый контролер'},
    {id: 24, id_ind: 7, name: 'Финансовый менеджер'},
    {id: 25, id_ind: 8, name: 'Бизнес-тренер'},
    {id: 26, id_ind: 8, name: 'Специалист по кадрам'},
    {id: 27, id_ind: 8, name: 'Директор по персоналу (HRD)'},
]
let techPrep = ['Начинающий', 'Уверенный пользователь', 'Продвинутый']
let list_work_areas = []
let finalFile = []


function getRandValue(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

industries.forEach((item, id)=>{
    list_work_areas.push({
        id: id,
        name: workArea.find(work_ar => work_ar.id_ind === item.id).name
    })
})

for(let i = 0; i<10433; i++){
    finalFile.push({
        id: i+1,
        country: getRandValue(countries),
        gender: getRandValue(gender),
        age: getRandomInt(0, 80).toString(), //для корректной работы фильтрации возраст перевел в строку
        education: getRandValue(education),
        statusEmp: getRandValue(statusEmp),
        industry: getRandValue(industries).name,
        workArea: getRandValue(workArea).name,
        techPrep: getRandValue(techPrep)
    })
}

export default finalFile
