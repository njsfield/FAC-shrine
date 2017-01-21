var rand = Math.random;
var floor = Math.floor;

// 1. Generate string keywords
var string = Array(800)
            .fill('')
            .map(function(){
                return keywords[floor(rand() * keywords.length)]})
            .join("")
            .substring(0,5244);


//3. Slice it in X, Y blocks
string = string.match(/.{1,114}/g)

//5. Use function to morph text and stroke styles into span strings
var spanStyleFunc = function(t, props){

    var openSpan  = '<span class="null">';
    var closeSpan = '</span>' ;
    var resultStr = "";
    var start = 0;

    for (var prop in props) {
      resultStr += 
        openSpan.replace("null", props[prop]) 
          + t.substring(start, +prop)
          + closeSpan
      start = +prop;
    }
    return resultStr;
}

//4. Map stroke styles to text

string = string.map(function(s,i) {
    return spanStyleFunc(s, strokeObj[i] || strokeObj['default']);
})

// 5. Join the string and render
document.querySelector('code').innerHTML = string.join('\n');