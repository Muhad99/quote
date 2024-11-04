function generate(){
    var quotes = {
        "- C..S Lewis" : '"It take both rain and sunshine to make rainbow."',
        "- Sun Fin" : '" The worst path of life is you do not know what is coming up next. "',
        "- James snow" : '" For some moment in life there are no words."',
        "- Brand Stalk" : '"Trying and doing are two different things. When you try, you hope. When you do, you succeed."',
        "- David Scoth" : '" One day your entire life will flash in front of your eyes. Make sure it is worth watching."',
        "- A.D Muhammed" : '"Success depend upon previous preparation, and without such preparation there is sure to be failure."',
        "- Code Fox " : '" A computer once beat me at chess, but it was no match for me at kick boxing."'
    }

    var authors = Object.keys(quotes);
 
    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}