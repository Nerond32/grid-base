import generator from './generator';

const scoresSchema = {
    name: '{{name.firstName}} {{name.lastName}}',
    score: '{{random.number}}',
    country: '{{address.country}}',
    sponsor: '{{company.companyName}}',
    gender: '{{name.gender}}',
    careerStarted: '{{date.future}}',
    active: '{{random.boolean}}',
}

const cars = generator(scoresSchema);

export default cars;