const userRole = {
    Moderator: 'moderator',
    Respondent: 'respondent',
    None: 'none'
}

const durationTests = {
    '1-2': 'от 1 до 2 мин',
    '2-5': 'от 2 до 5 мин',
    '5-10': 'от 5 до 10 мин',
    '10>': 'более 10 мин',
}

const ownerTest = {
    Company: 'company',
    Person: 'person'
}
const typeTest = {
    Navigation: 1,
    FiveSeconds: 2,
    FirstClick: 3,
    OverallImpression: 4,
    Like: 5,
}

const categoryTest = {
    Active: 'active',
    New: 'new',
    Favorite: 'favorite',
    Finished: 'finished',
}

const typeQuestion = {
    Text: 1,
    Radio: 2,
    CheckBox: 3,
}

const typeFileLoader = {
    Single: 1,
    Multiply: 2
}

export default { userRole, durationTests, ownerTest, typeTest, categoryTest, typeQuestion, typeFileLoader}
