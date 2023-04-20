/*! For license information please see main.js.LICENSE.txt */
(()=>{var t={193:function(t){var e;e=function(){return function(){var t={686:function(t,e,n){"use strict";n.d(e,{default:function(){return w}});var r=n(279),o=n.n(r),i=n(370),a=n.n(i),s=n(817),l=n.n(s);function c(t){try{return document.execCommand(t)}catch(t){return!1}}var u=function(t){var e=l()(t);return c("cut"),e},f=function(t,e){var n=function(t){var e="rtl"===document.documentElement.getAttribute("dir"),n=document.createElement("textarea");n.style.fontSize="12pt",n.style.border="0",n.style.padding="0",n.style.margin="0",n.style.position="absolute",n.style[e?"right":"left"]="-9999px";var r=window.pageYOffset||document.documentElement.scrollTop;return n.style.top="".concat(r,"px"),n.setAttribute("readonly",""),n.value=t,n}(t);e.container.appendChild(n);var r=l()(n);return c("copy"),n.remove(),r},d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body},n="";return"string"==typeof t?n=f(t,e):t instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(null==t?void 0:t.type)?n=f(t.value,e):(n=l()(t),c("copy")),n};function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function y(t,e){return y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},y(t,e)}function g(t){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},g(t)}function v(t,e){var n="data-clipboard-".concat(t);if(e.hasAttribute(n))return e.getAttribute(n)}var b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(l,t);var e,n,r,o,i,s=(o=l,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e,n=g(o);if(i){var r=g(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return!(e=t)||"object"!==h(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(this):e});function l(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,l),(n=s.call(this)).resolveOptions(e),n.listenClick(t),n}return e=l,n=[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===h(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=a()(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget,n=this.action(e)||"copy",r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.action,n=void 0===e?"copy":e,r=t.container,o=t.target,i=t.text;if("copy"!==n&&"cut"!==n)throw new Error('Invalid "action" value, use either "copy" or "cut"');if(void 0!==o){if(!o||"object"!==p(o)||1!==o.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===n&&o.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===n&&(o.hasAttribute("readonly")||o.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')}return i?d(i,{container:r}):o?"cut"===n?u(o):d(o,{container:r}):void 0}({action:n,container:this.container,target:this.target(e),text:this.text(e)});this.emit(r?"success":"error",{action:n,text:r,trigger:e,clearSelection:function(){e&&e.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(t){return v("action",t)}},{key:"defaultTarget",value:function(t){var e=v("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return v("text",t)}},{key:"destroy",value:function(){this.listener.destroy()}}],r=[{key:"copy",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body};return d(t,e)}},{key:"cut",value:function(t){return u(t)}},{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach((function(t){n=n&&!!document.queryCommandSupported(t)})),n}}],n&&m(e.prototype,n),r&&m(e,r),l}(o()),w=b},828:function(t){if("undefined"!=typeof Element&&!Element.prototype.matches){var e=Element.prototype;e.matches=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector}t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}},438:function(t,e,n){var r=n(828);function o(t,e,n,r,o){var a=i.apply(this,arguments);return t.addEventListener(n,a,o),{destroy:function(){t.removeEventListener(n,a,o)}}}function i(t,e,n,o){return function(n){n.delegateTarget=r(n.target,e),n.delegateTarget&&o.call(t,n)}}t.exports=function(t,e,n,r,i){return"function"==typeof t.addEventListener?o.apply(null,arguments):"function"==typeof n?o.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(t){return o(t,e,n,r,i)})))}},879:function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},370:function(t,e,n){var r=n(879),o=n(438);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!r.string(e))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(t))return function(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}(t,e,n);if(r.nodeList(t))return function(t,e,n){return Array.prototype.forEach.call(t,(function(t){t.addEventListener(e,n)})),{destroy:function(){Array.prototype.forEach.call(t,(function(t){t.removeEventListener(e,n)}))}}}(t,e,n);if(r.string(t))return function(t,e,n){return o(document.body,t,e,n)}(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},817:function(t){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var r=window.getSelection(),o=document.createRange();o.selectNodeContents(t),r.removeAllRanges(),r.addRange(o),e=r.toString()}return e}},279:function(t){function e(){}e.prototype={on:function(t,e,n){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var r=this;function o(){r.off(t,o),e.apply(n,arguments)}return o._=e,this.on(t,o,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),r=0,o=n.length;r<o;r++)n[r].fn.apply(n[r].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),r=n[t],o=[];if(r&&e)for(var i=0,a=r.length;i<a;i++)r[i].fn!==e&&r[i].fn._!==e&&o.push(r[i]);return o.length?n[t]=o:delete n[t],this}},t.exports=e,t.exports.TinyEmitter=e}},e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}return n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n(686)}().default},t.exports=e()}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=n(193),e=n.n(t);class r{constructor(t){void 0===t?this._elems=[]:t instanceof Element?this._elems=[t]:this._elems=t instanceof r?t.elems:"string"==typeof t?Array.from(document.querySelectorAll(t)):[...new Set(t)].filter((t=>null!=t))}get length(){return this.elems.length}get el(){return this.elems[0]}get elems(){return this._elems}each=t=>{for(const e of this.elems)if(t(new r(e)))break};map=t=>this.elems.map(((e,n)=>t(new r(e),n,this)));on=(t,e)=>{for(const n of this.elems)n.addEventListener(t,e,!1)};off=(t,e)=>{for(const n of this.elems)n.removeEventListener(t,e)};once=(t,e)=>{for(const n of this.elems)n.addEventListener(t,e,{once:!0})};trigger=(t,e)=>{const n=new CustomEvent(t,{bubbles:!0,cancelable:!0,detail:e});for(const t of this.elems)t.dispatchEvent(n)};addClass=(()=>{var t=this;return function(){for(const e of t.elems)e.classList.add(...arguments)}})();removeClass=(()=>{var t=this;return function(){for(const e of t.elems)e.classList.remove(...arguments)}})();toggleClass=(t,e)=>this.elems.map((n=>n.classList.toggle(t,e)))[0];hasClass=t=>this.elems.every((e=>e.classList.contains(t)));matches=t=>this.elems.every((e=>e.matches(t)));find=t=>{const e=this.elems.flatMap((e=>Array.from(e.querySelectorAll(t))));return new r(e)};closest=t=>{const e=this.elems.map((e=>e.closest(t)));return new r(e)};css=(t,e)=>{if("string"==typeof t){if(void 0===e)return this.elems.map((e=>getComputedStyle(e)[t]))[0];for(const n of this.elems)n.style[t]=e}else for(const e of this.elems)Object.assign(e.style,t)};text=t=>{if(void 0===t)return this.elems.map((t=>t.textContent))[0];for(const e of this.elems)e.textContent=t};attr=(t,e)=>{if(void 0===e)return this.elems.map((e=>e.getAttribute(t)))[0];for(const n of this.elems)n.setAttribute(t,e)}}function o(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return new r(...e)}new class{constructor(t){const n=new(e())(t);n.on("success",(t=>{t.clearSelection(),this._showTooltip(t.trigger,"Copied!"),o(t.trigger).once("mouseleave",(()=>this._closeTooltip(t.trigger)))})),n.on("error",(t=>{this._showTooltip(t.trigger,this._fallbackMessage(t.action))}))}_fallbackMessage=t=>{var e="cut"===t?"X":"C";return/iPhone|iPad/i.test(navigator.userAgent)?"No support :(":/Mac/i.test(navigator.userAgent)?"Press ⌘-"+e+" to "+t:"Press Ctrl-"+e+" to "+t};_showTooltip=(t,e)=>{const n=o(t);n.addClass("tooltipped","tooltipped-s","tooltipped-no-delay"),n.attr("aria-label",e)};_closeTooltip=t=>{const e=o(t);e.removeClass("tooltipped","tooltipped-s","tooltipped-no-delay"),e.attr("aria-label","")}}(".pub-list .pub-links .pub-link-bibtex"),new class{constructor(t){o(t).on("click",(t=>{const e=o(t.currentTarget).closest(".pub-block").find(".pub-abstract-frame");e.toggleClass("shown")?(e.css("height",`${e.el.scrollHeight}px`),e.el.scrollIntoView({behavior:"smooth",block:"nearest"})):e.css("height","0px")}))}}(".pub-block .pub-link-abstract"),new class{constructor(t){this.$publist=o(t),window.addEventListener("popstate",this._hashChanged),this._hashChanged(),this.$publist.find('.publist-search-panel [role="menuitem"]').on("click",this._onItemClick),this.$publist.find(".publist-search-panel").on("publist:update",this._onPanelUpdate)}_hashChanged=()=>{const t=this._parseFragment(location.hash),e=this._assembleFragment(t);e!==location.hash&&history.replaceState(null,"",e),this.$publist.find(".publist-search-panel").each((e=>this._panelShowFilter(e,t))),this._applyFilter(t)};_parseFragment=t=>{const e=/^#(\/\w+:([@!]?[^@,\/#]+)(,[@!]?[^@,\/#]+)*)+$/;try{const n=decodeURI(t);let r=new Map;if(null==n||!e.test(n))return r;for(const t of n.slice(1).split("/")){if(0===t.length)continue;const[e,n]=t.split(/:(.+)/),o=new Set(n.split(","));o.has("!all")||r.set(e,o)}return console.log("got filters",r),r}catch(t){console.log(t)}};_assembleFragment=t=>{const e=Array.from(t.entries(),(t=>{let[e,n]=t;return`${e}:${[...n].join(",")}`}));return encodeURI(["#",...e].join("/"))};_panelShowFilter=(t,e)=>{t.find("details").each((t=>{const n=e.get(t.attr("data-select-for"))||new Set("!all");t.find('[role="menuitem"]').attr("aria-checked","false");for(const e of n)t.find(`[data-value="${e}"]`).attr("aria-checked","true");0===t.find('[aria-checked="true"]').length&&t.find('[data-value="!all"]').attr("aria-checked","true");const r=t.find('[aria-checked="true"] .display-value'),o=t.find(".summary-value");r.length>1?o.text("Multiple"):o.text(r.text())}))};_applyFilter=t=>{this.$publist.find(".pub-list li").each((e=>{const n=this._matches(e,t);e.toggleClass("filter-hide",!n)})),this.$publist.find(".pub-list section.year").each((t=>{const e=t.find("li:not(.filter-hide)");t.toggleClass("filter-hide",e.length<=0)})),this.$publist.find(".selected-value").text(this.$publist.find(".pub-list li:not(.filter-hide)").length)};_matches=(t,e)=>{for(const[n,r]of e)if(!r.has("!all")){if("venue"!==n){const e=JSON.parse(t.attr("data-pub-extra"))[n]||[];if(r.has("!others")&&0===e.length)continue;if(e.filter((t=>r.has(t))).length>0)continue;return!1}{const e=t.attr("data-pub-cat");if(r.has(`@${e}`))continue;const n=t.attr("data-pub-venue");if(""===n&&r.has("!others"))continue;if(!r.has(n))return!1}}return!0};_onItemClick=t=>{const e=o(t.currentTarget);"true"===e.attr("aria-checked")?e.attr("aria-checked","false"):e.attr("aria-checked","true");const n=e.closest("details"),r=e.attr("data-value-cat"),i=e.attr("data-value");"!all"!==i&&n.find('[data-value="!all"').attr("aria-checked","false"),i.match(/^[!@]/)||n.find(`[data-value="${r}"`).attr("aria-checked","false"),e.trigger("publist:update")};_onPanelUpdate=t=>{const e=o(t.currentTarget),n=this._filtersFromPanel(e),r=this._assembleFragment(n);history.pushState(null,"",r),this._hashChanged()};_filtersFromPanel=t=>{let e=new Map;return t.find("details").each((t=>{const n=t.attr("data-select-for");let r=t.find('[aria-checked="true"]').map((t=>t.attr("data-value")));const o=new Set(r.filter((t=>t.startsWith("@"))).flatMap((e=>t.find(`[data-value-cat="${e}"]`).map((t=>t.attr("data-value"))))));r=r.filter((t=>!o.has(t))),-1!==r.indexOf("!all")&&(r=["!all"]),0===r.length&&(r=["!all"]),e.set(n,new Set(r))})),e}}(".publist")})()})();