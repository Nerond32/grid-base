import generator from './generator';

const carsSchema = {
    id: '{{random.number}}',
    vehicle: '{{vehicle.vehicle}}',
    model: '{{vehicle.model}}',
    manufacturer: '{{vehicle.manufacturer}}',
    type: '{{vehicle.type}}',
    color: '{{vehicle.color}}',
}

const cars = generator(carsSchema);

export default cars;