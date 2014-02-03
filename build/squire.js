!function(e){"use strict";function t(e,t,n){this.root=this.currentNode=e,this.nodeType=t,this.filter=n}function n(e,t){for(var n=e.length;n--;)if(!t(e[n]))return!1;return!0}function r(e,t,n){if(e.nodeName!==t)return!1;for(var r in n)if(e.getAttribute(r)!==n[r])return!1;return!0}function o(e,t){return e.nodeType===t.nodeType&&e.nodeName===t.nodeName&&e.className===t.className&&(!e.style&&!t.style||e.style.cssText===t.style.cssText)}function i(e){return e.nodeType===b&&!!tt[e.nodeName]}function a(e){return et.test(e.nodeName)}function s(e){return e.nodeType===b&&!a(e)&&n(e.childNodes,a)}function d(e){return e.nodeType===b&&!a(e)&&!s(e)}function l(e){return s(e)?O:P}function c(e){var n=e.ownerDocument,r=new t(n.body,x,l,!1);return r.currentNode=e,r}function h(e){return c(e).previousNode()}function f(e){return c(e).nextNode()}function u(e,t,n){do if(r(e,t,n))return e;while(e=e.parentNode);return null}function p(e){var t,n,r,o,i=e.parentNode;return i&&e.nodeType===b?(t=p(i),t+=(t?">":"")+e.nodeName,(n=e.id)&&(t+="#"+n),(r=e.className.trim())&&(o=r.split(/\s\s*/),o.sort(),t+=".",t+=o.join("."))):t=i?p(i):"",t}function m(e){var t=e.nodeType;return t===b?e.childNodes.length:e.length||0}function g(e){var t=e.parentNode;return t&&t.removeChild(e),e}function v(e,t){var n=e.parentNode;n&&n.replaceChild(t,e)}function N(e){for(var t=e.ownerDocument.createDocumentFragment(),n=e.childNodes,r=n?n.length:0;r--;)t.appendChild(e.firstChild);return t}function C(e){var t,n,r=e.ownerDocument,o=e;if("BODY"===e.nodeName&&((n=e.firstChild)&&"BR"!==n.nodeName||(t=r.createElement("DIV"),n?e.replaceChild(t,n):e.appendChild(t),e=t,t=null)),a(e))e.firstChild||(Y?(t=r.createTextNode("​"),w.editor&&w.editor._setPlaceholderTextNode(t)):t=r.createTextNode(""));else if(Q){for(;e.nodeType!==k&&!i(e);){if(n=e.firstChild,!n){t=r.createTextNode("");break}e=n}e.nodeType===k?/^ +$/.test(e.data)&&(e.data=""):i(e)&&e.parentNode.insertBefore(r.createTextNode(""),e)}else if(!e.querySelector("BR"))for(t=r.createElement("BR");(n=e.lastElementChild)&&!a(n);)e=n;return t&&e.appendChild(t),o}function S(e,t,n){var r,o,i,a=e.nodeType;if(a===k&&e!==n)return S(e.parentNode,e.splitText(t),n);if(a===b){if("number"==typeof t&&(t=t<e.childNodes.length?e.childNodes[t]:null),e===n)return t;for(r=e.parentNode,o=e.cloneNode(!1);t;)i=t.nextSibling,o.appendChild(t),t=i;return C(e),C(o),(i=e.nextSibling)?r.insertBefore(o,i):r.appendChild(o),S(r,o,n)}return t}function _(e,t){if(e.nodeType===b)for(var n,r,i,s=e.childNodes,d=s.length,l=[];d--;)if(n=s[d],r=d&&s[d-1],d&&a(n)&&o(n,r)&&!tt[n.nodeName])t.startContainer===n&&(t.startContainer=r,t.startOffset+=m(r)),t.endContainer===n&&(t.endContainer=r,t.endOffset+=m(r)),t.startContainer===e&&(t.startOffset>d?t.startOffset-=1:t.startOffset===d&&(t.startContainer=r,t.startOffset=m(r))),t.endContainer===e&&(t.endOffset>d?t.endOffset-=1:t.endOffset===d&&(t.endContainer=r,t.endOffset=m(r))),g(n),n.nodeType===k?r.appendData(n.data.replace(/\u200B/g,"")):l.push(N(n));else if(n.nodeType===b){for(i=l.length;i--;)n.appendChild(l.pop());_(n,t)}}function y(e,t,n){for(var r,o,i,a=t;1===a.parentNode.childNodes.length;)a=a.parentNode;g(a),o=e.childNodes.length,r=e.lastChild,r&&"BR"===r.nodeName&&(e.removeChild(r),o-=1),i={startContainer:e,startOffset:o,endContainer:e,endOffset:o},e.appendChild(N(t)),_(e,i),n.setStart(i.startContainer,i.startOffset),n.collapse(!0),q&&(r=e.lastChild)&&"BR"===r.nodeName&&e.removeChild(r)}function T(e){var t=e.previousSibling,n=e.firstChild;t&&o(t,e)&&d(t)&&(g(e),t.appendChild(N(e)),n&&T(n))}function E(e,t,n,r){var o,i,a,s=e.createElement(t);if(n instanceof Array&&(r=n,n=null),n)for(o in n)s.setAttribute(o,n[o]);if(r)for(i=0,a=r.length;a>i;i+=1)s.appendChild(r[i]);return s}function R(e){var t=e.defaultView,n=e.body;this._win=t,this._doc=e,this._body=n,this._events={},this._sel=t.getSelection(),this._lastSelection=null,$&&this.addEventListener("beforedeactivate",this.getSelection),this._placeholderTextNode=null,this._mayRemovePlaceholder=!0,this._willEnablePlaceholderRemoval=!1,this._lastAnchorNode=null,this._lastFocusNode=null,this._path="",this.addEventListener("keyup",this._updatePathOnEvent),this.addEventListener("mouseup",this._updatePathOnEvent),t.addEventListener("focus",this,!1),t.addEventListener("blur",this,!1),this._undoIndex=-1,this._undoStack=[],this._undoStackLength=0,this._isInUndoState=!1,this.addEventListener("keyup",this._docWasChanged),this._awaitingPaste=!1,this.addEventListener(K?"beforecut":"cut",this._onCut),this.addEventListener(K?"beforepaste":"paste",this._onPaste),z&&this.addEventListener("keyup",this._ieSelAllClean),this.addEventListener(q?"keypress":"keydown",this._onKey),j&&(t.Text.prototype.splitText=function(e){var t=this.ownerDocument.createTextNode(this.data.slice(e)),n=this.nextSibling,r=this.parentNode,o=this.length-e;return n?r.insertBefore(t,n):r.appendChild(t),o&&this.deleteData(e,o),t}),n.setAttribute("contenteditable","true"),this.setHTML("")}var B=2,b=1,k=3,x=1,A=4,O=1,P=3,D=0,L=1,I=2,U=3,w=e.defaultView,F=navigator.userAgent,V=/iP(?:ad|hone|od)/.test(F),H=/Mac OS X/.test(F),M=/Gecko\//.test(F),K=/Trident\/[456]\./.test(F),z=8===w.ie,q=!!w.opera,W=/WebKit\//.test(F),G=H?"meta-":"ctrl-",Q=K||q,Y=K||W,$=K,j=function(){var t=e.createElement("div"),n=e.createTextNode("12");return t.appendChild(n),n.splitText(2),2!==t.childNodes.length}(),X=/[^ \t\r\n]/,Z=Array.prototype.indexOf,J={1:1,2:2,3:4,8:128,9:256,11:1024};t.prototype.nextNode=function(){for(var e,t=this.currentNode,n=this.root,r=this.nodeType,o=this.filter;;){for(e=t.firstChild;!e&&t&&t!==n;)e=t.nextSibling,e||(t=t.parentNode);if(!e)return null;if(J[e.nodeType]&r&&o(e)===O)return this.currentNode=e,e;t=e}},t.prototype.previousNode=function(){for(var e,t=this.currentNode,n=this.root,r=this.nodeType,o=this.filter;;){if(t===n)return null;if(e=t.previousSibling)for(;t=e.lastChild;)e=t;else e=t.parentNode;if(!e)return null;if(J[e.nodeType]&r&&o(e)===O)return this.currentNode=e,e;t=e}};var et=/^(?:#text|A(?:BBR|CRONYM)?|B(?:R|D[IO])?|C(?:ITE|ODE)|D(?:ATA|FN|EL)|EM|FONT|HR|I(?:NPUT|MG|NS)?|KBD|Q|R(?:P|T|UBY)|S(?:U[BP]|PAN|TR(?:IKE|ONG)|MALL|AMP)?|U|VAR|WBR)$/,tt={BR:1,IMG:1,INPUT:1},nt=function(e,t){for(var n=e.childNodes;t&&e.nodeType===b;)e=n[t-1],n=e.childNodes,t=n.length;return e},rt=function(e,t){if(e.nodeType===b){var n=e.childNodes;if(t<n.length)e=n[t];else{for(;e&&!e.nextSibling;)e=e.parentNode;e&&(e=e.nextSibling)}}return e},ot=function(e,n){e=e.cloneRange(),ht(e);for(var r=e.startContainer,o=e.endContainer,i=e.commonAncestorContainer,a=new t(i,A,function(){return O},!1),s=a.currentNode=r;!n(s,e)&&s!==o&&(s=a.nextNode()););},it=function(e){var t="";return ot(e,function(e,n){var r=e.data;r&&/\S/.test(r)&&(e===n.endContainer&&(r=r.slice(0,n.endOffset)),e===n.startContainer&&(r=r.slice(n.startOffset)),t+=r)}),t},at=function(e,t){var n,r,o,i,a=e.startContainer,s=e.startOffset,d=e.endContainer,l=e.endOffset;a.nodeType===k?(n=a.parentNode,r=n.childNodes,s===a.length?(s=Z.call(r,a)+1,e.collapsed&&(d=n,l=s)):(s&&(i=a.splitText(s),d===a?(l-=s,d=i):d===n&&(l+=1),a=i),s=Z.call(r,a)),a=n):r=a.childNodes,o=r.length,s===o?a.appendChild(t):a.insertBefore(t,r[s]),a===d&&(l+=r.length-o),e.setStart(a,s),e.setEnd(d,l)},st=function(e,t){var n=e.startContainer,r=e.startOffset,o=e.endContainer,i=e.endOffset;t||(t=e.commonAncestorContainer),t.nodeType===k&&(t=t.parentNode);for(var a,s=S(o,i,t),d=S(n,r,t),l=t.ownerDocument.createDocumentFragment();d!==s;)a=d.nextSibling,l.appendChild(d),d=a;return e.setStart(t,s?Z.call(t.childNodes,s):t.childNodes.length),e.collapse(!0),C(t),l},dt=function(e){ft(e),st(e);var t=ut(e),n=pt(e);t&&n&&t!==n&&y(t,n,e),t&&C(t);var r=e.endContainer.ownerDocument.body,o=r.firstChild;o&&"BR"!==o.nodeName||(C(r),e.selectNodeContents(r.firstChild));var i=e.collapsed;ht(e),i&&e.collapse(!0)},lt=function(e,t){for(var n=!0,r=t.childNodes,o=r.length;o--;)if(!a(r[o])){n=!1;break}if(e.collapsed||dt(e),ht(e),n)at(e,t),e.collapse(!1);else{for(var i,s,d=S(e.startContainer,e.startOffset,e.startContainer.ownerDocument.body),l=d.previousSibling,c=l,h=c.childNodes.length,u=d,p=0,g=d.parentNode;(i=c.lastChild)&&i.nodeType===b&&"BR"!==i.nodeName;)c=i,h=c.childNodes.length;for(;(i=u.firstChild)&&i.nodeType===b&&"BR"!==i.nodeName;)u=i;for(;(i=t.firstChild)&&a(i);)c.appendChild(i);for(;(i=t.lastChild)&&a(i);)u.insertBefore(i,u.firstChild),p+=1;for(s=t;s=f(s);)C(s);g.insertBefore(t,d),s=d.previousSibling,d.textContent?T(d):g.removeChild(d),d.parentNode||(u=s,p=m(u)),l.textContent?T(l):(c=l.nextSibling,h=0,g.removeChild(l)),e.setStart(c,h),e.setEnd(u,p),ht(e)}},ct=function(e,t,n){var r=t.ownerDocument.createRange();if(r.selectNode(t),n){var o=e.compareBoundaryPoints(U,r)>-1,i=e.compareBoundaryPoints(L,r)<1;return!o&&!i}var a=e.compareBoundaryPoints(D,r)<1,s=e.compareBoundaryPoints(I,r)>-1;return a&&s},ht=function(e){for(var t,n=e.startContainer,r=e.startOffset,o=e.endContainer,a=e.endOffset;n.nodeType!==k&&(t=n.childNodes[r],t&&!i(t));)n=t,r=0;if(a)for(;o.nodeType!==k&&(t=o.childNodes[a-1],t&&!i(t));)o=t,a=m(o);else for(;o.nodeType!==k&&(t=o.firstChild,t&&!i(t));)o=t;e.collapsed?(e.setStart(o,a),e.setEnd(n,r)):(e.setStart(n,r),e.setEnd(o,a))},ft=function(e,t){var n,r=e.startContainer,o=e.startOffset,i=e.endContainer,a=e.endOffset;for(t||(t=e.commonAncestorContainer);r!==t&&!o;)n=r.parentNode,o=Z.call(n.childNodes,r),r=n;for(;i!==t&&a===m(i);)n=i.parentNode,a=Z.call(n.childNodes,i)+1,i=n;e.setStart(r,o),e.setEnd(i,a)},ut=function(e){var t,n=e.startContainer;return a(n)?t=h(n):s(n)?t=n:(t=nt(n,e.startOffset),t=f(t)),t&&ct(e,t,!0)?t:null},pt=function(e){var t,n,r=e.endContainer;if(a(r))t=h(r);else if(s(r))t=r;else{if(t=rt(r,e.endOffset),!t)for(t=r.ownerDocument.body;n=t.lastChild;)t=n;t=h(t)}return t&&ct(e,t,!0)?t:null},mt=function(e){for(var t,n,r=e.startContainer,o=e.startOffset;a(r);){if(o)return!1;t=r.parentNode,o=Z.call(t.childNodes,r),r=t}for(;o&&(n=r.childNodes[o-1])&&(""===n.data||"BR"===n.nodeName);)o-=1;return!o},gt=function(e){for(var t,n,r=e.endContainer,o=e.endOffset,i=m(r);a(r);){if(o!==i)return!1;t=r.parentNode,o=Z.call(t.childNodes,r)+1,r=t,i=r.childNodes.length}for(;i>o&&(n=r.childNodes[o])&&(""===n.data||"BR"===n.nodeName);)o+=1;return o===i},vt=function(e){var t,n=ut(e),r=pt(e);n&&r&&(t=n.parentNode,e.setStart(t,Z.call(t.childNodes,n)),t=r.parentNode,e.setEnd(t,Z.call(t.childNodes,r)+1))},Nt=R.prototype;Nt.createElement=function(e,t,n){return E(this._doc,e,t,n)},Nt.didError=function(e){console.log(e)},Nt.getDocument=function(){return this._doc};var Ct={focus:1,blur:1,pathChange:1,select:1,input:1,undoStateChange:1};Nt.fireEvent=function(e,t){var n,r,o,i=this._events[e];if(i)for(t||(t={}),t.type!==e&&(t.type=e),i=i.slice(),n=0,r=i.length;r>n;n+=1){o=i[n];try{o.handleEvent?o.handleEvent(t):o.call(this,t)}catch(a){a.details="Squire: fireEvent error. Event type: "+e,this.didError(a)}}return this},Nt.handleEvent=function(e){this.fireEvent(e.type,e)},Nt.addEventListener=function(e,t){var n=this._events[e];return t?(n||(n=this._events[e]=[],Ct[e]||this._doc.addEventListener(e,this,!1)),n.push(t),this):(this.didError({name:"Squire: addEventListener with null or undefined fn",message:"Event type: "+e}),this)},Nt.removeEventListener=function(e,t){var n,r=this._events[e];if(r){for(n=r.length;n--;)r[n]===t&&r.splice(n,1);r.length||(delete this._events[e],Ct[e]||this._doc.removeEventListener(e,this,!1))}return this},Nt._createRange=function(e,t,n,r){if(e instanceof this._win.Range)return e.cloneRange();var o=this._doc.createRange();return o.setStart(e,t),n?o.setEnd(n,r):o.setEnd(e,t),o},Nt.setSelection=function(e){if(e){V&&this._win.focus();var t=this._sel;t.removeAllRanges(),t.addRange(e)}return this},Nt.getSelection=function(){var e=this._sel;if(e.rangeCount){var t=this._lastSelection=e.getRangeAt(0).cloneRange(),n=t.startContainer,r=t.endContainer;try{n&&i(n)&&t.setStartBefore(n),r&&i(r)&&t.setEndBefore(r)}catch(o){this.didError({name:"Squire#getSelection error",message:"Starts: "+n.nodeName+"\nEnds: "+r.nodeName})}}return this._lastSelection},Nt.getSelectedText=function(){return it(this.getSelection())},Nt.getPath=function(){return this._path},Nt._enablePlaceholderRemoval=function(){this._mayRemovePlaceholder=!0,this._willEnablePlaceholderRemoval=!1,this.removeEventListener("keydown",this._enablePlaceholderRemoval)},Nt._removePlaceholderTextNode=function(){if(this._mayRemovePlaceholder){var e,t=this._placeholderTextNode;if(this._placeholderTextNode=null,t.parentNode){for(;(e=t.data.indexOf("​"))>-1;)t.deleteData(e,1);t.data||t.nextSibling||t.previousSibling||!a(t.parentNode)||g(t.parentNode)}}},Nt._setPlaceholderTextNode=function(e){this._placeholderTextNode&&(this._mayRemovePlaceholder=!0,this._removePlaceholderTextNode()),this._willEnablePlaceholderRemoval||(this.addEventListener("keydown",this._enablePlaceholderRemoval),this._willEnablePlaceholderRemoval=!0),this._mayRemovePlaceholder=!1,this._placeholderTextNode=e},Nt._updatePath=function(e,t){this._placeholderTextNode&&!t&&this._removePlaceholderTextNode(e);var n,r=e.startContainer,o=e.endContainer;(t||r!==this._lastAnchorNode||o!==this._lastFocusNode)&&(this._lastAnchorNode=r,this._lastFocusNode=o,n=r&&o?r===o?p(o):"(selection)":"",this._path!==n&&(this._path=n,this.fireEvent("pathChange",{path:n}))),r!==o&&this.fireEvent("select")},Nt._updatePathOnEvent=function(){this._updatePath(this.getSelection())},Nt.focus=function(){return M&&this._body.focus(),this._win.focus(),this},Nt.blur=function(){return M&&this._body.blur(),top.focus(),this};var St="squire-selection-start",_t="squire-selection-end";Nt._saveRangeToBookmark=function(e){var t,n=this.createElement("INPUT",{id:St,type:"hidden"}),r=this.createElement("INPUT",{id:_t,type:"hidden"});at(e,n),e.collapse(!1),at(e,r),n.compareDocumentPosition(r)&B&&(n.id=_t,r.id=St,t=n,n=r,r=t),e.setStartAfter(n),e.setEndBefore(r)},Nt._getRangeAndRemoveBookmark=function(e){var t=this._doc,n=t.getElementById(St),r=t.getElementById(_t);if(n&&r){var o,i=n.parentNode,a=r.parentNode,s={startContainer:i,endContainer:a,startOffset:Z.call(i.childNodes,n),endOffset:Z.call(a.childNodes,r)};i===a&&(s.endOffset-=1),g(n),g(r),_(i,s),i!==a&&_(a,s),e||(e=t.createRange()),e.setStart(s.startContainer,s.startOffset),e.setEnd(s.endContainer,s.endOffset),o=e.collapsed,ht(e),o&&e.collapse(!0)}return e||null},Nt._docWasChanged=function(e){var t=e&&e.keyCode;(!e||!e.ctrlKey&&!e.metaKey&&!e.altKey&&(16>t||t>20)&&(33>t||t>45))&&(this._isInUndoState&&(this._isInUndoState=!1,this.fireEvent("undoStateChange",{canUndo:!0,canRedo:!1})),this.fireEvent("input"))},Nt._recordUndoState=function(e){if(!this._isInUndoState){var t=this._undoIndex+=1,n=this._undoStack;t<this._undoStackLength&&(n.length=this._undoStackLength=t),e&&this._saveRangeToBookmark(e),n[t]=this._getHTML(),this._undoStackLength+=1,this._isInUndoState=!0}},Nt.undo=function(){if(0!==this._undoIndex||!this._isInUndoState){this._recordUndoState(this.getSelection()),this._undoIndex-=1,this._setHTML(this._undoStack[this._undoIndex]);var e=this._getRangeAndRemoveBookmark();e&&this.setSelection(e),this._isInUndoState=!0,this.fireEvent("undoStateChange",{canUndo:0!==this._undoIndex,canRedo:!0}),this.fireEvent("input")}return this},Nt.redo=function(){var e=this._undoIndex,t=this._undoStackLength;if(t>e+1&&this._isInUndoState){this._undoIndex+=1,this._setHTML(this._undoStack[this._undoIndex]);var n=this._getRangeAndRemoveBookmark();n&&this.setSelection(n),this.fireEvent("undoStateChange",{canUndo:!0,canRedo:t>e+2}),this.fireEvent("input")}return this},Nt.hasFormat=function(e,n,r){if(e=e.toUpperCase(),n||(n={}),!r&&!(r=this.getSelection()))return!1;var o,i,a=r.commonAncestorContainer;if(u(a,e,n))return!0;if(a.nodeType===k)return!1;o=new t(a,A,function(e){return ct(r,e,!0)?O:P},!1);for(var s=!1;i=o.nextNode();){if(!u(i,e,n))return!1;s=!0}return s},Nt._addFormat=function(e,n,r){var o,i,a,s,d,l,c,h;if(r.collapsed)o=C(this.createElement(e,n)),at(r,o),r.setStart(o.firstChild,o.firstChild.length),r.collapse(!0);else{i=new t(r.commonAncestorContainer,A,function(e){return ct(r,e,!0)?O:P},!1),d=0,l=0,c=i.currentNode=r.startContainer,c.nodeType!==k&&(c=i.nextNode());do h=!u(c,e,n),c===r.endContainer&&(h&&c.length>r.endOffset?c.splitText(r.endOffset):l=r.endOffset),c===r.startContainer&&(h&&r.startOffset?c=c.splitText(r.startOffset):d=r.startOffset),h&&(o=this.createElement(e,n),v(c,o),o.appendChild(c),l=c.length),s=c,a||(a=s);while(c=i.nextNode());r=this._createRange(a,d,s,l)}return r},Nt._removeFormat=function(e,t,n,o){this._saveRangeToBookmark(n);var i,s=this._doc;n.collapsed&&(Y?(i=s.createTextNode("​"),this._setPlaceholderTextNode(i)):i=s.createTextNode(""),at(n,i));for(var d=n.commonAncestorContainer;a(d);)d=d.parentNode;var l=n.startContainer,c=n.startOffset,h=n.endContainer,f=n.endOffset,u=[],p=function(e,t){if(!ct(n,e,!1)){var r,o,i=e.nodeType===k;if(!ct(n,e,!0))return"INPUT"===e.nodeName||i&&!e.data||u.push([t,e]),void 0;if(i)e===h&&f!==e.length&&u.push([t,e.splitText(f)]),e===l&&c&&(e.splitText(c),u.push([t,e]));else for(r=e.firstChild;r;r=o)o=r.nextSibling,p(r,t)}},m=Array.prototype.filter.call(d.getElementsByTagName(e),function(o){return ct(n,o,!0)&&r(o,e,t)});o||m.forEach(function(e){p(e,e)}),u.forEach(function(e){var t=e[0].cloneNode(!1),n=e[1];v(n,t),t.appendChild(n)}),m.forEach(function(e){v(e,N(e))}),this._getRangeAndRemoveBookmark(n),i&&n.collapse(!1);var g={startContainer:n.startContainer,startOffset:n.startOffset,endContainer:n.endContainer,endOffset:n.endOffset};return _(d,g),n.setStart(g.startContainer,g.startOffset),n.setEnd(g.endContainer,g.endOffset),n},Nt.changeFormat=function(e,t,n,r){return n||(n=this.getSelection())?(this._recordUndoState(n),this._getRangeAndRemoveBookmark(n),t&&(n=this._removeFormat(t.tag.toUpperCase(),t.attributes||{},n,r)),e&&(n=this._addFormat(e.tag.toUpperCase(),e.attributes||{},n)),this.setSelection(n),this._updatePath(n,!0),this._docWasChanged(),this):void 0};var yt={DIV:"DIV",PRE:"DIV",H1:"DIV",H2:"DIV",H3:"DIV",H4:"DIV",H5:"DIV",H6:"DIV",P:"DIV",DT:"DD",DD:"DT",LI:"LI"},Tt=function(e,t,n){var r=yt[e.nodeName],o=S(t,n,e.parentNode);return o.nodeName!==r&&(e=E(o.ownerDocument,r),e.className="rtl"===o.dir?"dir-rtl":"",e.dir=o.dir,v(o,e),e.appendChild(N(o)),o=e),o};Nt.forEachBlock=function(e,t,n){if(!n&&!(n=this.getSelection()))return this;t&&(this._recordUndoState(n),this._getRangeAndRemoveBookmark(n));var r=ut(n),o=pt(n);if(r&&o)do if(e(r)||r===o)break;while(r=f(r));return t&&(this.setSelection(n),this._updatePath(n,!0),this._docWasChanged()),this},Nt.modifyBlocks=function(e,t){if(!t&&!(t=this.getSelection()))return this;var n=this._body;q||n.setAttribute("contenteditable","false"),this._isInUndoState?this._saveRangeToBookmark(t):this._recordUndoState(t),vt(t),ft(t,n);var r=st(t,n);return at(t,e.call(this,r)),t.endOffset<t.endContainer.childNodes.length&&T(t.endContainer.childNodes[t.endOffset]),T(t.startContainer.childNodes[t.startOffset]),q||n.setAttribute("contenteditable","true"),this._getRangeAndRemoveBookmark(t),this.setSelection(t),this._updatePath(t,!0),this._docWasChanged(),this};var Et=function(e){return this.createElement("BLOCKQUOTE",[e])},Rt=function(e){var t=e.querySelectorAll("blockquote");return Array.prototype.filter.call(t,function(e){return!u(e.parentNode,"BLOCKQUOTE")}).forEach(function(e){v(e,N(e))}),e},Bt=function(e){for(var t,n=e.querySelectorAll("blockquote"),r=n.length;r--;)t=n[r],v(t,N(t));return e},bt=function(e,t,n){var r,o,i,a,l,c;for(r=0,o=t.length;o>r;r+=1)i=t[r],a=i.nodeName,s(i)?"LI"!==a&&(c=e.createElement("LI",{"class":"rtl"===i.dir?"dir-rtl":"",dir:i.dir},[N(i)]),i.parentNode.nodeName===n?v(i,c):(l=i.previousSibling)&&l.nodeName===n?(l.appendChild(c),g(i),r-=1,o-=1):v(i,e.createElement(n,[c]))):d(i)&&(a!==n&&/^[DOU]L$/.test(a)?v(i,e.createElement(n,[N(i)])):bt(e,i.childNodes,n))},kt=function(e){return bt(this,e.childNodes,"UL"),e},xt=function(e){return bt(this,e.childNodes,"OL"),e},At=function(e){var t=e.querySelectorAll("UL, OL");return Array.prototype.filter.call(t,function(e){return!u(e.parentNode,"UL")&&!u(e.parentNode,"OL")}).forEach(function(e){for(var t,n=N(e),r=n.childNodes,o=r.length;o--;)t=r[o],"LI"===t.nodeName&&n.replaceChild(this.createElement("DIV",{"class":"rtl"===t.dir?"dir-rtl":"",dir:t.dir},[N(t)]),t);v(e,n)},this),e},Ot=/\b((?:(?:ht|f)tps?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\([^\s()<>]+\))+(?:\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’])|(?:[\w\-.%+]+@(?:[\w\-]+\.)+[A-Z]{2,4}))/i,Pt=function(e){for(var n,r,o,i,a,s,d,l=e.ownerDocument,c=new t(e,A,function(e){return u(e,"A")?P:O},!1);n=c.nextNode();)if(r=n.data.split(Ot),i=r.length,i>1){for(s=n.parentNode,d=n.nextSibling,o=0;i>o;o+=1)a=r[o],o?(o%2?(n=l.createElement("A"),n.textContent=a,n.href=/@/.test(a)?"mailto:"+a:/^(?:ht|f)tps?:/.test(a)?a:"http://"+a):n=l.createTextNode(a),d?s.insertBefore(n,d):s.appendChild(n)):n.data=a;c.currentNode=n}},Dt=/^(?:A(?:DDRESS|RTICLE|SIDE)|BLOCKQUOTE|CAPTION|D(?:[DLT]|IV)|F(?:IGURE|OOTER)|H[1-6]|HEADER|L(?:ABEL|EGEND|I)|O(?:L|UTPUT)|P(?:RE)?|SECTION|T(?:ABLE|BODY|D|FOOT|H|HEAD|R)|UL)$/,Lt={1:10,2:13,3:16,4:18,5:24,6:32,7:48},It={backgroundColor:{regexp:X,replace:function(e,t){return E(e,"SPAN",{"class":"highlight",style:"background-color: "+t})}},color:{regexp:X,replace:function(e,t){return E(e,"SPAN",{"class":"colour",style:"color:"+t})}},fontWeight:{regexp:/^bold/i,replace:function(e){return E(e,"B")}},fontStyle:{regexp:/^italic/i,replace:function(e){return E(e,"I")}},fontFamily:{regexp:X,replace:function(e,t){return E(e,"SPAN",{"class":"font",style:"font-family:"+t})}},fontSize:{regexp:X,replace:function(e,t){return E(e,"SPAN",{"class":"size",style:"font-size:"+t})}}},Ut=function(e){return function(t,n){var r=E(t.ownerDocument,e);return n.replaceChild(r,t),r.appendChild(N(t)),r}},wt={SPAN:function(e,t){var n,r,o,i,a,s,d=e.style,l=e.ownerDocument;for(n in It)r=It[n],o=d[n],o&&r.regexp.test(o)&&(s=r.replace(l,o),i&&i.appendChild(s),i=s,a||(a=s));return a&&(i.appendChild(N(e)),t.replaceChild(a,e)),i||e},STRONG:Ut("B"),EM:Ut("I"),STRIKE:Ut("S"),FONT:function(e,t){var n,r,o,i,a,s=e.face,d=e.size,l=e.color,c=e.ownerDocument;return s&&(n=E(c,"SPAN",{"class":"font",style:"font-family:"+s}),a=n,i=n),d&&(r=E(c,"SPAN",{"class":"size",style:"font-size:"+Lt[d]+"px"}),a||(a=r),i&&i.appendChild(r),i=r),l&&/^#?([\dA-F]{3}){1,2}$/i.test(l)&&("#"!==l.charAt(0)&&(l="#"+l),o=E(c,"SPAN",{"class":"colour",style:"color:"+l}),a||(a=o),i&&i.appendChild(o),i=o),a||(a=i=E(c,"SPAN")),t.replaceChild(a,e),i.appendChild(N(e)),i},TT:function(e,t){var n=E(e.ownerDocument,"SPAN",{"class":"font",style:'font-family:menlo,consolas,"courier new",monospace'});return t.replaceChild(n,e),n.appendChild(N(e)),n}},Ft=function(e){for(var t,n=e.childNodes,r=n.length;r--;)t=n[r],t.nodeType===b&&"IMG"!==t.nodeName&&(Ft(t),a(t)&&!t.firstChild&&e.removeChild(t))},Vt=function(e,t){var n,r,o,i,s,d,l,c=e.childNodes;for(n=0,r=c.length;r>n;n+=1)if(o=c[n],i=o.nodeName,s=o.nodeType,d=wt[i],s===b){if(l=o.childNodes.length,d)o=d(o,e);else{if(!Dt.test(i)&&!a(o)){n-=1,r+=l-1,e.replaceChild(N(o),o);continue}!t&&o.style.cssText&&o.removeAttribute("style")}l&&Vt(o,t)}else s===k&&(X.test(o.data)||n>0&&a(c[n-1])||r>n+1&&a(c[n+1]))||(e.removeChild(o),n-=1,r-=1);return e},Ht=function(e,t){var n,r,o,i,s=e.childNodes,d=e.ownerDocument,l=null;for(n=0,r=s.length;r>n;n+=1)o=s[n],i="BR"===o.nodeName,!i&&a(o)?(l||(l=E(d,t)),l.appendChild(o),n-=1,r-=1):(i||l)&&(l||(l=E(d,t)),C(l),i?e.replaceChild(l,o):(e.insertBefore(l,o),n+=1,r+=1),l=null);return l&&e.appendChild(C(l)),e},Mt=function(e){return(e.nodeType===b?"BR"===e.nodeName:X.test(e.data))?O:P},Kt=function(e){for(var n,r=e.parentNode;a(r);)r=r.parentNode;return n=new t(r,x|A,Mt),n.currentNode=e,!!n.nextNode()},zt=function(e){var t,n,r,o=e.querySelectorAll("BR"),i=[],d=o.length;for(t=0;d>t;t+=1)i[t]=Kt(o[t]);for(;d--;)if(n=o[d],r=n.parentNode){for(;a(r);)r=r.parentNode;s(r)&&yt[r.nodeName]?(i[d]&&Tt(r,n.parentNode,n),g(n)):Ht(r,"DIV")}};Nt._onCut=function(){var e=this.getSelection(),t=this;this._recordUndoState(e),this._getRangeAndRemoveBookmark(e),this.setSelection(e),setTimeout(function(){try{C(t._body)}catch(e){t.didError(e)}},0)},Nt._onPaste=function(e){if(!this._awaitingPaste){var t,n,r=e.clipboardData,o=r&&r.items,i=!1,a=!1;if(o){for(t=o.length;t--;){if(n=o[t].type,"text/html"===n){a=!1;break}/^image\/.*/.test(n)&&(a=!0)}if(a)return e.preventDefault(),this.fireEvent("dragover",{dataTransfer:r,preventDefault:function(){i=!0}}),i&&this.fireEvent("drop",{dataTransfer:r}),void 0}this._awaitingPaste=!0;var s=this,d=this._body,l=this.getSelection(),c=l.startContainer,h=l.startOffset,u=l.endContainer,p=l.endOffset,m=this.createElement("DIV",{style:"position: absolute; overflow: hidden; top:"+(d.scrollTop+30)+"px; left: 0; width: 1px; height: 1px;"});d.appendChild(m),l.selectNodeContents(m),this.setSelection(l),setTimeout(function(){try{var e=N(g(m)),t=e.firstChild,n=s._createRange(c,h,u,p);if(t){t===e.lastChild&&"DIV"===t.nodeName&&e.replaceChild(N(t),t),e.normalize(),Pt(e),Vt(e,!1),zt(e),Ft(e);for(var r=e,o=!0;r=f(r);)C(r);s.fireEvent("willPaste",{fragment:e,preventDefault:function(){o=!1}}),o&&(lt(n,e),s._docWasChanged(),n.collapse(!1))}s.setSelection(n),s._updatePath(n,!0),s._awaitingPaste=!1}catch(i){s.didError(i)}},0)}};var qt={8:"backspace",9:"tab",13:"enter",32:"space",37:"left",39:"right",46:"delete"},Wt=function(e){return function(t,n){n.preventDefault(),t[e]()}},Gt=function(e,t){return t=t||null,function(n,r){r.preventDefault();var o=n.getSelection();n.hasFormat(e,null,o)?n.changeFormat(null,{tag:e},o):n.changeFormat({tag:e},t,o)}},Qt=function(e){try{var t,n=e.getSelection(),r=n.startContainer;if(r.nodeType===k&&(r=r.parentNode),a(r)&&!r.textContent){do t=r.parentNode;while(a(t)&&!t.textContent&&(r=t));n.setStart(t,Z.call(t.childNodes,r)),n.collapse(!0),t.removeChild(r),s(t)||(t=h(t)),C(t),ht(n),e.setSelection(n),e._updatePath(n)}}catch(o){e.didError(o)}};z&&(Nt._ieSelAllClean=function(){var e=this._body.firstChild;"P"===e.nodeName&&(this._saveRangeToBookmark(this.getSelection()),v(e,this.createElement("DIV",[N(e)])),this.setSelection(this._getRangeAndRemoveBookmark()))});var Yt={enter:function(e,t){t.preventDefault();var n=e.getSelection();if(n){e._recordUndoState(n),Pt(n.startContainer),e._getRangeAndRemoveBookmark(n),n.collapsed||dt(n);var r,o=ut(n),i=o?o.nodeName:"DIV",a=yt[i];if(!o)return at(n,e.createElement("BR")),n.collapse(!1),e.setSelection(n),e._updatePath(n,!0),e._docWasChanged(),void 0;var s,d=n.startContainer,l=n.startOffset;if(a||(d===o&&(d=l?d.childNodes[l-1]:null,l=0,d&&("BR"===d.nodeName?d=d.nextSibling:l=m(d),d&&"BR"!==d.nodeName||(s=C(e.createElement("DIV")),d?o.replaceChild(s,d):o.appendChild(s),d=s))),Ht(o,"DIV"),a="DIV",d||(d=o.firstChild),n.setStart(d,l),n.setEnd(d,l),o=ut(n)),!o.textContent){if(u(o,"UL")||u(o,"OL"))return e.modifyBlocks(At,n);if(u(o,"BLOCKQUOTE"))return e.modifyBlocks(Bt,n)}for(r=Tt(o,d,l);r.nodeType===b;){var c,h=r.firstChild;if("A"!==r.nodeName){for(;h&&h.nodeType===k&&!h.data&&(c=h.nextSibling,c&&"BR"!==c.nodeName);)g(h),h=c;if(!h||"BR"===h.nodeName||h.nodeType===k&&!q)break;r=h}else v(r,N(r)),r=h}n=e._createRange(r,0),e.setSelection(n),e._updatePath(n,!0),r.nodeType===k&&(r=r.parentNode);var f=e._doc,p=e._body;r.offsetTop+r.offsetHeight>(f.documentElement.scrollTop||p.scrollTop)+p.offsetHeight&&r.scrollIntoView(!1),e._docWasChanged()}},backspace:function(e,t){var n=e.getSelection();if(n.collapsed)if(mt(n)){e._recordUndoState(n),e._getRangeAndRemoveBookmark(n),t.preventDefault();var r=ut(n),o=r&&h(r);if(o){if(!o.isContentEditable)return g(o),void 0;for(y(o,r,n),r=o.parentNode;r&&!r.nextSibling;)r=r.parentNode;r&&(r=r.nextSibling)&&T(r),e.setSelection(n)}else if(r){if(u(r,"UL")||u(r,"OL"))return e.modifyBlocks(At,n);if(u(r,"BLOCKQUOTE"))return e.modifyBlocks(Rt,n);e.setSelection(n),e._updatePath(n,!0)}}else{var i=n.startContainer.data||"";X.test(i.charAt(n.startOffset-1))||(e._recordUndoState(n),e._getRangeAndRemoveBookmark(n),e.setSelection(n)),setTimeout(function(){Qt(e)},0)}else e._recordUndoState(n),e._getRangeAndRemoveBookmark(n),t.preventDefault(),dt(n),e.setSelection(n),e._updatePath(n,!0)},"delete":function(e,t){var n=e.getSelection();if(n.collapsed)if(gt(n)){e._recordUndoState(n),e._getRangeAndRemoveBookmark(n),t.preventDefault();var r=ut(n),o=r&&f(r);if(o){if(!o.isContentEditable)return g(o),void 0;for(y(r,o,n),o=r.parentNode;o&&!o.nextSibling;)o=o.parentNode;o&&(o=o.nextSibling)&&T(o),e.setSelection(n),e._updatePath(n,!0)}}else{var i=n.startContainer.data||"";X.test(i.charAt(n.startOffset))||(e._recordUndoState(n),e._getRangeAndRemoveBookmark(n),e.setSelection(n)),setTimeout(function(){Qt(e)},0)}else e._recordUndoState(n),e._getRangeAndRemoveBookmark(n),t.preventDefault(),dt(n),e.setSelection(n),e._updatePath(n,!0)},space:function(e){var t=e.getSelection();e._recordUndoState(t),Pt(t.startContainer),e._getRangeAndRemoveBookmark(t),e.setSelection(t)}};H&&M&&w.getSelection().modify&&(Yt["meta-left"]=function(e,t){t.preventDefault(),e._sel.modify("move","backward","lineboundary")},Yt["meta-right"]=function(e,t){t.preventDefault(),e._sel.modify("move","forward","lineboundary")}),Yt[G+"b"]=Gt("B"),Yt[G+"i"]=Gt("I"),Yt[G+"u"]=Gt("U"),Yt[G+"shift-7"]=Gt("S"),Yt[G+"shift-5"]=Gt("SUB",{tag:"SUP"}),Yt[G+"shift-6"]=Gt("SUP",{tag:"SUB"}),Yt[G+"y"]=Wt("redo"),Yt[G+"z"]=Wt("undo"),Yt[G+"shift-z"]=Wt("redo"),Nt._onKey=function(e){var t=e.keyCode,n=qt[t]||String.fromCharCode(t).toLowerCase(),r="";q&&46===e.which&&(n="."),t>111&&124>t&&(n="f"+(t-111)),e.altKey&&(r+="alt-"),e.ctrlKey&&(r+="ctrl-"),e.metaKey&&(r+="meta-"),e.shiftKey&&(r+="shift-"),n=r+n,Yt[n]&&Yt[n](this,e)},Nt._getHTML=function(){return this._body.innerHTML},Nt._setHTML=function(e){var t=this._body;t.innerHTML=e;do C(t);while(t=f(t))},Nt.getHTML=function(e){var t,n,r,o,i,a=[];if(e&&(i=this.getSelection())&&this._saveRangeToBookmark(i),Q)for(t=this._body;t=f(t);)t.textContent||t.querySelector("BR")||(n=this.createElement("BR"),t.appendChild(n),a.push(n));if(r=this._getHTML(),Q)for(o=a.length;o--;)g(a[o]);return i&&this._getRangeAndRemoveBookmark(i),r},Nt.setHTML=function(e){var t,n=this._doc.createDocumentFragment(),r=this.createElement("DIV");r.innerHTML=e,n.appendChild(N(r)),Vt(n,!0),zt(n),Ht(n,"DIV");for(var o=n;o=f(o);)C(o);for(var i=this._body;t=i.lastChild;)i.removeChild(t);i.appendChild(n),C(i),this._undoIndex=-1,this._undoStack.length=0,this._undoStackLength=0,this._isInUndoState=!1;var a=this._getRangeAndRemoveBookmark()||this._createRange(i.firstChild,0);return this._recordUndoState(a),this._getRangeAndRemoveBookmark(a),$?this._lastSelection=a:this.setSelection(a),this._updatePath(a,!0),this},Nt.insertElement=function(e,t){if(t||(t=this.getSelection()),t.collapse(!0),a(e))at(t,e),t.setStartAfter(e);else{for(var n,r,o=this._body,i=ut(t)||o;i!==o&&!i.nextSibling;)i=i.parentNode;i!==o&&(n=i.parentNode,r=S(n,i.nextSibling,o)),r?(o.insertBefore(e,r),t.setStart(r,0),t.setStart(r,0),ht(t)):(o.appendChild(e),o.appendChild(C(this.createElement("div"))),t.setStart(e,0),t.setEnd(e,0)),this.focus(),this.setSelection(t),this._updatePath(t)}return this},Nt.insertImage=function(e){var t=this.createElement("IMG",{src:e});return this.insertElement(t),t};var $t=function(e,t,n){return function(){return this[e](t,n),this.focus()}};Nt.addStyles=function(e){if(e){var t=this._doc.documentElement.firstChild,n=this.createElement("STYLE",{type:"text/css"});n.styleSheet?(t.appendChild(n),n.styleSheet.cssText=e):(n.appendChild(this._doc.createTextNode(e)),t.appendChild(n))}return this},Nt.bold=$t("changeFormat",{tag:"B"}),Nt.italic=$t("changeFormat",{tag:"I"}),Nt.underline=$t("changeFormat",{tag:"U"}),Nt.strikethrough=$t("changeFormat",{tag:"S"}),Nt.subscript=$t("changeFormat",{tag:"SUB"},{tag:"SUP"}),Nt.superscript=$t("changeFormat",{tag:"SUP"},{tag:"SUB"}),Nt.removeBold=$t("changeFormat",null,{tag:"B"}),Nt.removeItalic=$t("changeFormat",null,{tag:"I"}),Nt.removeUnderline=$t("changeFormat",null,{tag:"U"}),Nt.removeStrikethrough=$t("changeFormat",null,{tag:"S"}),Nt.removeSubscript=$t("changeFormat",null,{tag:"SUB"}),Nt.removeSuperscript=$t("changeFormat",null,{tag:"SUP"}),Nt.makeLink=function(e){e=encodeURI(e);
var t=this.getSelection();if(t.collapsed){var n=e.indexOf(":")+1;if(n)for(;"/"===e[n];)n+=1;at(t,this._doc.createTextNode(e.slice(n)))}return this.changeFormat({tag:"A",attributes:{href:e}},{tag:"A"},t),this.focus()},Nt.removeLink=function(){return this.changeFormat(null,{tag:"A"},this.getSelection(),!0),this.focus()},Nt.setFontFace=function(e){return this.changeFormat({tag:"SPAN",attributes:{"class":"font",style:"font-family: "+e+", sans-serif;"}},{tag:"SPAN",attributes:{"class":"font"}}),this.focus()},Nt.setFontSize=function(e){return this.changeFormat({tag:"SPAN",attributes:{"class":"size",style:"font-size: "+("number"==typeof e?e+"px":e)}},{tag:"SPAN",attributes:{"class":"size"}}),this.focus()},Nt.setTextColour=function(e){return this.changeFormat({tag:"SPAN",attributes:{"class":"colour",style:"color: "+e}},{tag:"SPAN",attributes:{"class":"colour"}}),this.focus()},Nt.setHighlightColour=function(e){return this.changeFormat({tag:"SPAN",attributes:{"class":"highlight",style:"background-color: "+e}},{tag:"SPAN",attributes:{"class":"highlight"}}),this.focus()},Nt.setTextAlignment=function(e){return this.forEachBlock(function(t){t.className=(t.className.split(/\s+/).filter(function(e){return!/align/.test(e)}).join(" ")+" align-"+e).trim(),t.style.textAlign=e},!0),this.focus()},Nt.setTextDirection=function(e){return this.forEachBlock(function(t){t.className=(t.className.split(/\s+/).filter(function(e){return!/dir/.test(e)}).join(" ")+" dir-"+e).trim(),t.dir=e},!0),this.focus()},Nt.increaseQuoteLevel=$t("modifyBlocks",Et),Nt.decreaseQuoteLevel=$t("modifyBlocks",Rt),Nt.makeUnorderedList=$t("modifyBlocks",kt),Nt.makeOrderedList=$t("modifyBlocks",xt),Nt.removeList=$t("modifyBlocks",At),top!==w?(w.editor=new R(e),w.onEditorLoad&&(w.onEditorLoad(w.editor),w.onEditorLoad=null)):w.Squire=R}(document);