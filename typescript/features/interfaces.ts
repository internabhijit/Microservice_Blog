interface Reportable {
    summery(): string
}

const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summery(): string {
        return `Name: ${this.name}`
    }
}

const drink = {
    carbonated: true,
    sugar: 40,
    summery() : string {
        return `My drinks as ${this.sugar} grams of sugar`
    }
}

const printVehicle = (vehicle: Reportable): void => {
    console.log(vehicle.summery());   
}

printVehicle(oldCivic);
printVehicle(drink);