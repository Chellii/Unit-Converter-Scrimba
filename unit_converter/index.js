function financial(x) {
    return Number.parseFloat(x).toFixed(3);
  }

function convert()
{

let num = document.getElementById("input").value;
document.getElementById("number").textContent = num

let p1 = document.getElementById("meter-feet");
let meter_to_feet = num * 3.28084;
let feet_to_meter = num * 0.3048;
p1.textContent = num + " meters = " + financial(meter_to_feet) + " feet | " + num + " feet = " + financial(feet_to_meter) + " meters";

let p2 = document.getElementById("liters-gallons");
let liters_to_gallons = num * 0.264172;
let gallons_to_liters = num * 3.78541;
p2.textContent = num + " liters = " + financial(liters_to_gallons) + " gallons | " + num + " gallons = " + financial(gallons_to_liters) + " liters";

let p3 = document.getElementById("kilo-pounds");
let kilo_to_pounds = num * 2.20462;
let pounds_to_kilo = num * 0.453592;
p3.textContent = num + " kilos = " + financial(kilo_to_pounds) + " pounds | " + num + " pounds = " + financial(pounds_to_kilo) + " kilos";
}

let num = 20
document.getElementById("number").textContent = num

let p1 = document.getElementById("meter-feet");
let meter_to_feet = num * 3.28084;
let feet_to_meter = num * 0.3048;
p1.textContent = num + " meters = " + financial(meter_to_feet) + " feet | " + num + " feet = " + financial(feet_to_meter) + " meters";

let p2 = document.getElementById("liters-gallons");
let liters_to_gallons = num * 0.264172;
let gallons_to_liters = num * 3.78541;
p2.textContent = num + " liters = " + financial(liters_to_gallons) + " gallons | " + num + " gallons = " + financial(gallons_to_liters) + " liters";

let p3 = document.getElementById("kilo-pounds");
let kilo_to_pounds = num * 2.20462;
let pounds_to_kilo = num * 0.453592;
p3.textContent = num + " kilos = " + financial(kilo_to_pounds) + " pounds | " + num + " pounds = " + financial(pounds_to_kilo) + " kilos";
