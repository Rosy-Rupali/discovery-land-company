let articleContents = [
  {
    article1: "This Blue Chip Caribbean Island Hopes to Dethrone St. Barts",
    date1: "New York Post | April 5, 2021",
    article2: "No Longer Waiting for Retirement",
    date2: "New York Times International Homes | March 27-28, 2021",
    article3: "Golf and Pickleball are Having a Love Affair",
    date3: "New York Times | March 22, 2021",
    article4: "For Many, the Pandemic Has Led to the 'Discovery' of Golf",
    date4: "New York Times | March 22, 2021"
  },
  {
    article1: "Celebrities Keep Flocking to Discovery Resorts During the Pandemic. Here's Why",
    date1: "Elle Decor | September 2020",
    article2: "Green Golf Homes in Five Destinations",
    date2: "New York Times | September 11, 2020",
    article3: "Bring Your Clubs. And the Kids.",
    date3: "New York Times | September 11, 2020",
    article4: "Billionare Barn Debuts at Quant 850-acre Silo Ridge Field Club",
    date4: "Forbes | August 2020"
  },
  {
    article1: "How Discovery Land Company's Mike Meldman Develops the World's <br>Most Exclusive Private Clubs and Resort Communities",
    date1: "CSQ | June 17, 2020",
    article2: "U.S. Golf Communities for the Love of the Game (Yellowstone Club and Madison Club)",
    date2: "Mansion Global | April 23, 2020",
    article3: "A Rockwellian Lifestyle at Silo Ridge (Silo Ridge)",
    date3: "Quest Magazine | April 10, 2020",
    article4: "Thinking of golf in retirement?",
    date4: "New York Times | March 7, 2020"
  },
  {
    article1: "Most Influential Developers",
    date1: "Golf Inc. | January/February 2020",
    article2: "Looking Beyond the Golf Course",
    date2: "The New York Times | March 9, 2019",
    article3: "Star-Studded Madison Club Golf Invitational<br> Raises Big Money for Charity (The Madison Club)",
    date3: "Forbes | January 30, 2019",
    article4: "Moveable Feasts (Silo Ridge)",
    date4: "GOLF Magazine | July 3, 2019"
  },
  {
    article1: "Silo Ridge Field Club Is the Stuff of Dreams (Silo Ridge)",
    date1: "Hudson Valley Magazine | June 25, 2019",
    article2: "Work starts on $250M community with 300-plus homes, golf course (Driftwood)",
    date2: "Austin Business Journal | June 19, 2019",
    article3: "Exclusive Playa Grande Golf &amp; Ocean Club<br> Opens In The Dominican Republic (Playa Grande)",
    date3: "Forbes | November 14, 2018",
    article4: "The Captain’s Table: Mike Meldman",
    date4: "Financial Times | June 22, 2018"
  },
  {
    article1: "George Clooney and Rande Gerber have a third partner in their <br>$1 billion tequila company, and he happens to be a real estate <br>tycoon",
    date1: "Business Insider | December 8, 2018",
    article2: "Shore Thing (Playa Grande)",
    date2: "Modern Luxury Interiors | Spring 2019",
    article3: "The Remarkable Accomplishments of “Magic Mike”",
    date3: "Executive Golfer | March 2019",
    article4: "Best of the Bahamas: Baker’s Bay Golf &amp; Ocean Club (Baker's Bay)",
    date4: "Ocean Home | April 7, 2019"
  },
  {
    article1: "Silo Ridge Field Club Is the Stuff of Dreams (Silo Ridge)",
    date1: "Hudson Valley Magazine | June 25, 2019",
    article2: "The Man Behind Some of Golf’s Best Development Projects",
    date2: "Desert Golf &amp; Tennis | January 2019",
    article3: "Peek Inside the Hudson Valley’s Most Exclusive Live-Work-Play Community (Silo Ridge)",
    date3: "Hudson Valley Magazine | February 19, 2019",
    article4: "Current Trends From Top Golf Communities: What’s Hot (Playa Grande)",
    date4: "LINKS magazine | Special Issue 2019"
  }
];
let index1 = 0;
function nextSlide() {
  index1++;
  changetext();
}
function prevSlide() {
  index1--;
  changetext();
}
function changetext() {
  if (index1 < 0) {
    index1 = articleContents.length - 1;
  }
  if (index1 >= articleContents.length) {
    index1= 0;
  }

  document.getElementById("block1").innerHTML = articleContents[index1].article1;
  document.getElementById("text1").innerHTML = articleContents[index1].date1;
  document.getElementById("block2").innerHTML = articleContents[index1].article2;
  document.getElementById("text2").innerHTML = articleContents[index1].date2;
  document.getElementById("block3").innerHTML = articleContents[index1].article3;
  document.getElementById("text3").innerHTML = articleContents[index1].date3;
  document.getElementById("block4").innerHTML = articleContents[index1].article4;
  document.getElementById("text4").innerHTML = articleContents[index1].date4;
}
