var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "1.1",
  "title": "Section Title",
  "body": " Section Title  Text of section.   PROTEUS exercises (for Section 5.1)    Drag each function on the left to the graph of its antiderivative on the right.          f(x)=3*x^2 + 2*x               f(x)=x^3 + x^2                 f(x)=sin(x)+ 1               f(x)=-cos(x)+x                 f(x)=2*x\/(x^2+1)               f(x)=ln(x^2+1)                 F(x)=fabs(x)  f(x)=deriv(F,x)               f(x)=fabs(x)            decoy 1    decoy 2      "
},
{
  "id": "proteus-5-1-matching-graphs",
  "level": "2",
  "url": "sec-section-name.html#proteus-5-1-matching-graphs",
  "type": "Exercise",
  "number": "1.1.1",
  "title": "",
  "body": "  Drag each function on the left to the graph of its antiderivative on the right.          f(x)=3*x^2 + 2*x               f(x)=x^3 + x^2                 f(x)=sin(x)+ 1               f(x)=-cos(x)+x                 f(x)=2*x\/(x^2+1)               f(x)=ln(x^2+1)                 F(x)=fabs(x)  f(x)=deriv(F,x)               f(x)=fabs(x)            decoy 1    decoy 2    "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
