// формирует JSON объект с кол-вом записей по ключу и ключи явл.уникальными
export function getCountUniqueData(listObjects, key) {
    return JSON.parse(JSON.stringify(
        listObjects.reduce((acc, el) => {
            acc[el[key]] = (acc[el[key]] || 0) + 1;
            return acc;
        }, {})))
}

// формирует массив объектов по одной записи JSON (в JSON-е ключи уникальные)
export function getListObjects(json, key) {
    let resultObjectList = []
    let obj = getCountUniqueData(json,key)
    for(let key in obj){
        resultObjectList.push({
            name: key,
            count_respondents: obj[key],
        })
    }
    return resultObjectList
}
