let newscontents= [
    {
        headlines: "Costa Tera<br>Discovery's 23rd property",
        news:"<p>Discovery land company the world leading</p><p>developer of luxury private residential communities,</p><p>clubs,and resorts ,has announced its 23rd property and </p><p>first in europe.</p>"
    },
    {
        headlines:"James island<br>Dicovery's Newest<br>property ",
        news:"<p>Ajax is not a technology, but rather a programming</p><p>concept.HTML and CSS can be used in combination</p><p>to mark up and style information The webpage can</p><p>be modified by JavaScript to dynamically display and allow</p><p>the user to interact with the new.</p>"
    },
    {
        headlines:"Troubandar To Open<br> Golf Course Fall 2019" ,
        news:"<p>Since then, however, there have been a number </p><p>of developments in the technologies used in an Ajax application,</p><p>and in the definition of the term Ajax itself. XML is no</p><p>longer required for data interchange and,therefore, XSLT is</p><p>no longer required for the manipulation of data.</p>"
    }
]
let index = 0;
function next(){
    index ++ ;
    whiteBox();
}
function prev(){
    index --;
    whiteBox();
}
function whiteBox(){
    if(index < 0){
        index = newscontents.length -1;
    }
    if(index >= newscontents.length ) {
        index = 0 ;
    }    
    document.getElementById("newstext").innerHTML =  newscontents[index].headlines;
    document.getElementById("newspara").innerHTML =  newscontents[index].news;
}
   