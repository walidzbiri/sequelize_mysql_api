window.scrollTo(0, document.body.scrollHeight);
let elements=Array.from(document.getElementsByClassName("entity-result__summary"))
let entrepriseNames=elements.map(e=>{
    s = e.innerText.split(" chez ")
    return s.length > 1 ? s[1] : null
}).filter(e => e)
console.log(entrepriseNames)
window.close();
