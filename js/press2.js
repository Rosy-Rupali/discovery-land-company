let articleContents = [
    {
        maintext: "This property company ups the Ante with Luxury and Sustainability",
        date: "Newyork times | November 21 2021",
        subtext: "Where sun sand to be <br> discoverd in land",
        magazine: "Brazil | January 30 1997",
        maintext1: "This property company ups the Ante <br>with Luxury and Sustainability",
        date1: "delhi | august 21 2021",
        subtext1: "Discovery land company",
        magazine1: "Germany | March 11 1999"

    },
    {
        maintext: " Sustainability",
        date: "Times | jan 21 2021",
        subtext: "No longer waiting for retirement",
        magazine: "Norway | October 30 2000",
        maintext1: " Luxury and Sustainability",
        date1: "Mumbai | November 21 2021",
        subtext1: "Sustainability",
        magazine1: "Austarlia | june 30 2012",

    },
    {
        maintext: " Ante with Luxury and Sustainability",
        date: "Newyork | may 21 2021",
        subtext: "For many discovery had lead <br> to pandameic lead",
        magazine: "Canda | september 21 2023",
        maintext1: "This property company ups the Ante <br>with Luxury and Sustainability",
        date1: "delhi | august 21 2021",
        subtext1: "Discovery land company",
        magazine1: "Germany | March 11 1999"
    },
    {
        maintext: "This property company ups the Ante <br>with Luxury and Sustainability",
        date: "delhi | august 21 2021",
        subtext: "Discovery land company",
        magazine: "Germany | March 11 1999",
        maintext1: "This property company ups the Ante with Luxury and Sustainability",
        date1: "Newyork times | November 21 2021",
        subtext1: "Where sun sand to be <br> discoverd in land",
        magazine1: "Brazil | January 30 1997"

    },
    {
        maintext: " Luxury and Sustainability",
        date: "Mumbai | November 21 2021",
        subtext: "Sustainability",
        magazine: "Austarlia | MAy 30 2012",
        maintext1: " Sustainability",
        date1: "Times | jan 21 2021",
        subtext1: "No longer waiting for retirement",
        magazine1: "Norway | Feb 30 2000"

    }
]
let index = 0;
function nextSlide() {
    index++;
    changetext();
}
function prevSlide() {
    index--;
    changetext();
}
function changetext() {
    if (index < 0) index = articleContents.length - 1;
    if (index >= articleContents.length) index = 0;

    document.getElementById("block1").innerHTML = articleContents[index].maintext;
    document.getElementById("text1").innerHTML = articleContents[index].date;
    document.getElementById("block2").innerHTML = articleContents[index].subtext;
    document.getElementById("text2").innerHTML = articleContents[index].magazine;
    document.getElementById("block3").innerHTML = articleContents[index].maintext1;
    document.getElementById("text3").innerHTML = articleContents[index].date1;
    document.getElementById("block4").innerHTML = articleContents[index].subtext1;
    document.getElementById("text4").innerHTML = articleContents[index].magazine1;
}