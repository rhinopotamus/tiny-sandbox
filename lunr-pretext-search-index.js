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
  "title": "A bunch of PROTEUS drafts",
  "body": " A bunch of PROTEUS drafts  Drafts of questions for PROTEUS chapter 5 stuff.   PROTEUS exercises (for Section 5.1)    Drag each function on the left to the graph of its antiderivative on the right.          f(x)=3*x^2 + 2*x               f(x)=x^3 + x^2                 f(x)=sin(x)+ 1               f(x)=-cos(x)+x                 f(x)=2*x\/(x^2+1)               f(x)=ln(x^2+1)                 f(x)=-1  g(x)=1                f(x)=fabs(x)            decoy 1    decoy 2       PROTEUS exercises (for Section 5.2)    Consider the function defined by the rule . In the figure below, is the function graphed in blue, and is found by computing the area shaded in gray.    f(t)=t^3\/3 - 2*t^2 + 3*t +2              For some small , shade in the area corresponding to on the figure above.      As long as is relatively small, is well approximated by a rectangle. Draw such a rectangle on the figure above, and label its height and its width.      Since is approximately a rectangle, is approximately the product of the height and the width. Use your labels from the previous part to write an approximation for .       What is ?        Consider the piecewise linear function defined by this graph on the interval :    f(x)=x  g(x)=4-x  h(x)=x-8          Let be the function defined by the rule .     Reasoning from the graph, find the values of , , , , , , , and , .      Name two trends or patterns that you observe in the values of that you found in part (a).       On the interval , do you expect the graph of to be constant, linear, quadratic, or something else? Why?         PROTEUS exercises (for Section 5.3)   Each of the following expressions is the result of the Chain Rule being applied to a composite function. In other words, it is the right-hand side of the Chain Rule: . Drag the blocks in each problem below to identify the functions , , and , and then calculate the original composite function.      Drag , , , and into the box below, in that order.                     Drag , , , and into the box below, in that order.                     Drag , , , and into the box below, in that order.                   "
},
{
  "id": "proteus-5-1-matching-graphs",
  "level": "2",
  "url": "sec-section-name.html#proteus-5-1-matching-graphs",
  "type": "Exercise",
  "number": "1.1.1",
  "title": "",
  "body": "  Drag each function on the left to the graph of its antiderivative on the right.          f(x)=3*x^2 + 2*x               f(x)=x^3 + x^2                 f(x)=sin(x)+ 1               f(x)=-cos(x)+x                 f(x)=2*x\/(x^2+1)               f(x)=ln(x^2+1)                 f(x)=-1  g(x)=1                f(x)=fabs(x)            decoy 1    decoy 2    "
},
{
  "id": "proteus-5-2-spencer",
  "level": "2",
  "url": "sec-section-name.html#proteus-5-2-spencer",
  "type": "Exercise",
  "number": "1.1.1",
  "title": "",
  "body": "  Consider the function defined by the rule . In the figure below, is the function graphed in blue, and is found by computing the area shaded in gray.    f(t)=t^3\/3 - 2*t^2 + 3*t +2              For some small , shade in the area corresponding to on the figure above.      As long as is relatively small, is well approximated by a rectangle. Draw such a rectangle on the figure above, and label its height and its width.      Since is approximately a rectangle, is approximately the product of the height and the width. Use your labels from the previous part to write an approximation for .       What is ?     "
},
{
  "id": "proteus-5-2-matt",
  "level": "2",
  "url": "sec-section-name.html#proteus-5-2-matt",
  "type": "Exercise",
  "number": "1.1.2",
  "title": "",
  "body": "  Consider the piecewise linear function defined by this graph on the interval :    f(x)=x  g(x)=4-x  h(x)=x-8          Let be the function defined by the rule .     Reasoning from the graph, find the values of , , , , , , , and , .      Name two trends or patterns that you observe in the values of that you found in part (a).       On the interval , do you expect the graph of to be constant, linear, quadratic, or something else? Why?      "
},
{
  "id": "proteus-5-3-draggable-1",
  "level": "2",
  "url": "sec-section-name.html#proteus-5-3-draggable-1",
  "type": "Exercise",
  "number": "1.1.1",
  "title": "",
  "body": "   Drag , , , and into the box below, in that order.                 "
},
{
  "id": "proteus-5-3-draggable-2",
  "level": "2",
  "url": "sec-section-name.html#proteus-5-3-draggable-2",
  "type": "Exercise",
  "number": "1.1.2",
  "title": "",
  "body": "   Drag , , , and into the box below, in that order.                 "
},
{
  "id": "proteus-5-3-draggable-3",
  "level": "2",
  "url": "sec-section-name.html#proteus-5-3-draggable-3",
  "type": "Exercise",
  "number": "1.1.3",
  "title": "",
  "body": "   Drag , , , and into the box below, in that order.                 "
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
