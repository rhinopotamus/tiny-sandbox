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
  "title": "Tiny Sandbox",
  "body": " Tiny Sandbox  Text of section.   PROTEUS exercises   Later in this section, we will learn several properties of the definite integral. In preparation for learning those properties, it will be useful to recall similar properties of simple areas.   Suppose you have an original rectangle that is 5 units tall and 2 units wide. Draw a picture of such a rectangle, and find its area.    Draw a new rectangle that is twice as tall as the original rectangle. What is the area of the new rectangle?    Draw another rectangle that is 5 units tall but just 1 unit wide, and suppose it was glued to the side of the original rectangle. What is the area of the combined figure?    Draw another rectangle that is 3 units tall and 2 units wide, and suppose it was glued to the top of the original rectangle. What is the area of the combined rectangle?        "
},
{
  "id": "proteus-area-reminders",
  "level": "2",
  "url": "sec-section-name.html#proteus-area-reminders",
  "type": "Exercise",
  "number": "1.1.1",
  "title": "",
  "body": " Later in this section, we will learn several properties of the definite integral. In preparation for learning those properties, it will be useful to recall similar properties of simple areas.   Suppose you have an original rectangle that is 5 units tall and 2 units wide. Draw a picture of such a rectangle, and find its area.    Draw a new rectangle that is twice as tall as the original rectangle. What is the area of the new rectangle?    Draw another rectangle that is 5 units tall but just 1 unit wide, and suppose it was glued to the side of the original rectangle. What is the area of the combined figure?    Draw another rectangle that is 3 units tall and 2 units wide, and suppose it was glued to the top of the original rectangle. What is the area of the combined rectangle?      "
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
