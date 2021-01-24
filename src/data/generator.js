import faker from 'faker';

const generator = (schema, min = 20, max = 40) => {
    max = max || min
    return Array.from({ length: faker.random.number({ min, max }) }).map(() => Object.keys(schema).reduce((entity, key) => {
        entity[key] = faker.fake(schema[key])
        return entity
    }, {}))
}

export default generator;