var cdataF = function self(elem) {
  var str = '',
      children = elem.childNodes;
  for (var i = 0; i < children.length; i++) {
    var node = children[i];
    if (node.nodeType == 3) {
      str += node.nodeValue;
    }
    else if (node.nodeType == 1 && node.childNodes.length) {
      str += self(node);
    }
    str += ' ';
  }
  return str;
};
GM_define([], function(){ return cdataF; });
