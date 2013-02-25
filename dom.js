
var ignoreTags = /^(script|img|style)$/;
   

var grabText = function(elem, parent) {
    // preserve context  
    return (function(elem, parent){  
        elem = elem || document.body;

        if (elem.nodeType == 1 && 
            !ignoreTags.test(elem.tagName.toLowerCase())) {
            for (var i=0, children=elem.childNodes;i<children.length;i++) {
                grabText(children[i], elem)    
            }
        } else if (elem.nodeType == 3) {
            this.data.push({node:parent, text:elem.data});
        }
        return this.data;
    }).apply(grabText, [elem, parent]);
};

grabText.data = [];

exports = grabText;



