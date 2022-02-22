import owner from '../enums.js'
import type from '../enums.js'
import category from '../enums.js'

const name = ["Лучшая упаковка для Playstation", "Макет приложения", "Навигация по сайту", "Аналог крема Loreal'"]
const ownerType = [
    {type: owner.ownerTest.Company, name: "Google"},
    {type: owner.ownerTest.Company, name: "Yandex"},
    {type: owner.ownerTest.Company, name: "ITD company"},
    {type: owner.ownerTest.Company, name: "Microsoft"},
    {type: owner.ownerTest.Company, name: "DoIT"},
    {type: owner.ownerTest.Person, name: "Олег Иванцов"},
    {type: owner.ownerTest.Person, name: "Игорь Ильяшенко"},
    {type: owner.ownerTest.Person, name: "Ольга Кудрявцева"},
    {type: owner.ownerTest.Person, name: "Виктор Лихолетов"},
    {type: owner.ownerTest.Person, name: "Виктория Разенков"},
    {type: owner.ownerTest.Person, name: "Анастасия Зарянова"},
]

const typeTest = [type.typeTest.FirstClick, type.typeTest.FiveSeconds, type.typeTest.Like, type.typeTest.Navigation, type.typeTest.OverallImpression]
const categoryTest = [category.categoryTest.New, category.categoryTest.Active, category.categoryTest.Favorite, category.categoryTest.Finished]

function getRandValue(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let finalFile = []

for(let i = 0; i<150; i++){
    finalFile.push({
        id: i+1,
        name: getRandValue(name),
        time: getRandomInt(0, 15),
        cost: getRandomInt(0, 1000),
        typeOwner: getRandValue(ownerType).type,
        nameOwner: getRandValue(ownerType).name,
        type: getRandValue(typeTest),
        date: new Date().toLocaleDateString(),
        category: getRandValue(categoryTest)
    })
}

export default finalFile
