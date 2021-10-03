var oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summery: function () {
        return "Name: " + this.name;
    }
};
var printVehicle = function (vehicle) {
    console.log(vehicle.summery());
};
printVehicle(oldCivic);
