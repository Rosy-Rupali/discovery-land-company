var blackbox = [
  {
    maintext: "Madison",
    subtext: "La Quinta , California",
    weather: 230,
    windspeed: "10.3mph",
    suntemp: 44
  },
  {
    maintext: "Baker's Bay",
    subtext: "Great Guana Cay, Bahamas",
    weather: 100,
    windspeed: "22.5mph",
    suntemp: 45
  },
  {
    maintext: "Mountaintop",
    subtext: "Cashiers, North Carolina",
    weather: 250,
    windspeed: "33.0mph",
    suntemp: 22
  },
  {
    maintext: "Mirabel",
    subtext: "Scottsdale,Arizona",
    weather: 300,
    windspeed: "15.5mph",
    suntemp: 35
  },
  {
    maintext: "Vaquero",
    subtext: "West Lake,Texas",
    weather: 320,
    windspeed: "12.2mph",
    suntemp: 38
  },
  {
    maintext: "Yellowstone Club",
    subtext: "Big Sky, Montana",
    weather: 58,
    windspeed: "8.37mph",
    suntemp: 62
  }
];
let index = 0;

function next() {
  index++;
  changeBlackBox();
}
function prev() {
  index--;
  changeBlackBox();
}
function changeBlackBox() {
  if (index < 0 ) index = blackbox.length - 1;
  if (index >= blackbox.length) index = 0;
  document.getElementById("main-text").innerHTML = blackbox[index].maintext;
  document.getElementById("sub-text").innerHTML = blackbox[index].subtext;
  document.getElementById("weather").innerHTML = blackbox[index].weather;
  document.getElementById("wind-speed").innerHTML = blackbox[index].windspeed;
  document.getElementById("sun-degree").innerHTML = blackbox[index].suntemp;
}

