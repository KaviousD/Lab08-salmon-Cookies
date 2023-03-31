"use strict";
//Creating function for max and min
function getRandom(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}
// Creating function to do math for me
const seattle = {
    min: 23,
    max: 65,
    avg: 6.3,
    location: "seattle",
    hoursofoperation: [
        "6am",
        "7am",
        "8am",
        "9am",
        "10am",
        "11am",
        "12pm",
        "1pm",
        "2pm",
        "3pm",
        "4pm",
        "5pm",
        "6pm",
        "7pm",
    ],
    customersPerHour: function () {
        return getRandom(this.max, this.min);
        // method 
    },
    cookiesPerHour: [],
    // array datat type
    getCookies: function () {
        for (let i = 0; i < this.hoursofoperation.length; i++) {
            // console.log("seattle avg cookies/sale", this.avg);
            // console.log("seattle avg customers/hour", this.customersPerHour());

            // change the names from london!!
            let randomammountofcustomers = this.customersPerHour()
            // console.log ("seattle customersperhour", randomammountofcustomers)

            let cookiesSold = this.avg * randomammountofcustomers
            this.cookiesPerHour.push(Math.floor(cookiesSold))

            // console log to check random ammount of ppl  
            // this.cookiesPerHour.push(Math.round(this.avg * this.customersPerHour()));
        }
        //  console.log(this.cookiesPerHour);
        return this.cookiesPerHour;
    },
}


let hoursofoperation = [
    "6am",
    "7am",
    "8am",
    "9am",
    "10am",
    "11am",
    "12pm",
    "1pm",
    "2pm",
    "3pm",
    "4pm",
    "5pm",
    "6pm",
    "7pm",
]
let Table = document.getElementById("sales")
let tr = document.createElement("tr")
let th1 = document.createElement("th")
tr.append(th1)
Table.append(tr)
for (let i = 0; i < hoursofoperation.length; i++) {
    //create new th element
    // change innerhtml of the th to the hour
    // insert th into tr
    let th = document.createElement("th")
    th.innerHTML = hoursofoperation[i]
    tr.append(th)

}

let seattleTr = document.createElement("tr")
let SeattleLocationtd = document.createElement("td")
SeattleLocationtd.innerHTML = seattle.location.toUpperCase()
seattleTr.append(SeattleLocationtd)
let sum = 0
for (let i = 0; i < seattle.hoursofoperation.length; i++) {
    let seattletd = document.createElement("td");
    // seattlelist.innerHTML = `${seattle.hoursofoperation[i]}:${seattle.getCookies()[i]} cookies`;
    // seatData.append(seattlelist);
    seattletd.innerHTML = seattle.getCookies()[i]
    // (seattle.getCookies()[i])
    seattleTr.append(seattletd)
}
Table.append(seattleTr)

//



const Tokyo = {
    min: 3,
    max: 24,
    avg: 1.2,
    location: "Tokyo",
    hoursofoperation: [
        "6am",
        "7am",
        "8am",
        "9am",
        "10am",
        "11am",
        "12pm",
        "1pm",
        "2pm",
        "3pm",
        "4pm",
        "5pm",
        "6pm",
        "7pm",
    ],
    customersPerHour: function () {
        return getRandom(this.max, this.min);
    },
    cookiesPerHour: [],
    getCookies: function () {
        for (let i = 0; i < this.hoursofoperation.length; i++) {
            // console.log("Tokyo avg coocies/sale", this.avg);
            //console.log("Tokyo avg customers/hour", this.customersPerHour());
            this.cookiesPerHour.push(Math.floor(this.avg * this.customersPerHour()));
        }
        return this.cookiesPerHour;
    },
};

let Tokytr = document.createElement("tr")
let TokyoLocationtd = document.createElement("td")
TokyoLocationtd.innerHTML = Tokyo.location.toUpperCase()
Tokytr.append(TokyoLocationtd)

for (let i = 0; i < Tokyo.hoursofoperation.length; i++) {
    let Tokyolist = document.createElement("td");
    Tokyolist.innerHTML = `${Tokyo.getCookies()[i]}`;
    Tokytr.append(Tokyolist);
}
Table.append(Tokytr)



const Dubai = {
    min: 11,
    max: 38,
    avg: 3.7,
    location: "Dubai",
    hoursofoperation: [
        "6am",
        "7am",
        "8am",
        "9am",
        "10am",
        "11am",
        "12pm",
        "1pm",
        "2pm",
        "3pm",
        "4pm",
        "5pm",
        "6pm",
        "7pm",
    ],
    customersPerHour: function () {
        return getRandom(this.max, this.min);
    },
    cookiesPerHour: [],
    getCookies: function () {
        for (let i = 0; i < this.hoursofoperation.length; i++) {
            //console.log("Dubai avg coocies/sale", this.avg);
            //console.log("Dubai avg customers/hour", this.customersPerHour());
            this.cookiesPerHour.push(Math.floor(this.avg * this.customersPerHour()));
        }
        return this.cookiesPerHour;
    },
}

let Dubiatr = document.createElement("tr");

let DubiaLocationtd = document.createElement("td")
DubiaLocationtd.innerHTML = Dubai.location.toUpperCase()
Dubiatr.append(DubiaLocationtd)

for (let i = 0; i < Dubai.hoursofoperation.length; i++) {
    let Dubailist = document.createElement("td");
    Dubailist.innerHTML = `${Dubai.getCookies()[i]}`;
    Dubiatr.append(Dubailist);
}
Table.append(Dubiatr)





const paris = {
    min: 20,
    max: 38,
    avg: 2.3,
    location: "paris",
    hoursofoperation: [
        "6am",
        "7am",
        "8am",
        "9am",
        "10am",
        "11am",
        "12pm",
        "1pm",
        "2pm",
        "3pm",
        "4pm",
        "5pm",
        "6pm",
        "7pm",
    ],
    customersPerHour: function () {
        return getRandom(this.max, this.min);
    },
    cookiesPerHour: [],
    getCookies: function () {
        for (let i = 0; i < this.hoursofoperation.length; i++) {
            //console.log("paris avg coocies/sale", this.avg);
            //console.log("paris avg customers/hour", this.customersPerHour());
            this.cookiesPerHour.push(Math.floor(this.avg * this.customersPerHour()));
        }
        return this.cookiesPerHour;
    },
};

let pari = document.createElement("tr");

let PariLocationtd = document.createElement("td")
PariLocationtd.innerHTML = paris.location.toUpperCase()
pari.append(PariLocationtd)


for (let i = 0; i < paris.hoursofoperation.length; i++) {
    let Parislist = document.createElement("td");
    Parislist.innerHTML = `${paris.getCookies()[i]}`;
    pari.append(Parislist);

}
Table.append(pari)

const Lima = {
    min: 2,
    max: 16,
    avg: 4.6,
    location: "lima",
    hoursofoperation: [
        "6am",
        "7am",
        "8am",
        "9am",
        "10am",
        "11am",
        "12pm",
        "1pm",
        "2pm",
        "3pm",
        "4pm",
        "5pm",
        "6pm",
        "7pm",
    ],
    customersPerHour: function () {
        return getRandom(this.max, this.min);
    },
    cookiesPerHour: [],
    getCookies: function () {
        for (let i = 0; i < this.hoursofoperation.length; i++) {
            //console.log("lima avg coocies/sale", this.avg);
            //console.log("lima avg customers/hour", this.customersPerHour());
            this.cookiesPerHour.push(Math.floor(this.avg * this.customersPerHour()));
        }
        return this.cookiesPerHour;
    },
};

let Limb = document.createElement("tr");
let LimbLocationtd = document.createElement("td")
LimbLocationtd.innerHTML = Lima.location.toUpperCase()
Limb.append(LimbLocationtd)

for (let i = 0; i < Lima.hoursofoperation.length; i++) {
    let limalist = document.createElement("td");
    limalist.innerHTML = `${Lima.getCookies()[i]}`;
    Limb.append(limalist);
}
Table.append(Limb)

// let th = document.createElement("th")
// th.innerHTML = '6am'
// tr.append(th)

// let th2 = document.createElement("th")
// th2.innerHTML = '7am'
// tr.append(th2)
