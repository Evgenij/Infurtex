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

export default { userRole, durationTests, ownerTest, typeTest}
