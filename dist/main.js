!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);function r(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var i=function(){var e,t,n,o=function(e){r(e.elements).forEach((function(e){"button"!==e.tagName.toLowerCase()&&"button"!==e.type&&(e.value="")}))},i=function(e,t,n){document.querySelectorAll(".popup").forEach((function(r){e.addEventListener("click",(function(){n.style.display="block"})),r.addEventListener("click",(function(e){var n=e.target;n.classList.contains("close_icon")||n.classList.contains("close-btn")?(r.style.display="none",o(t)):(n=n.closest(".form-content"))||(r.style.display="none",o(t))}))}))};e=document.getElementById("free_visit_form"),t=document.querySelector(".open-popup"),n=document.getElementById("form2"),i(t,n,e);!function(){var e=document.querySelector(".callback-btn"),t=document.getElementById("callback_form"),n=document.getElementById("form1");i(e,n,t)}()},a=function(e){var t=document.getElementById("thanks");e.closest(".popup").style.display="none",t.style.display="block",setTimeout((function(){document.getElementById("thanks").style.display="none"}),4e3)},c=function(e){var t=document.getElementById("thanks");e.closest(".popup").style.display="none",t.querySelector(".form-wrapper").innerHTML='\n    <div class="close-form">\n      <img src="images/close-icon.png" alt="close" class="close_icon">\n    </div>\n    <div class="form-content">\n      <h4>Ошибка!</h4>\n      <p>Что-то пошло не так...</p>\n      <button class="btn close-btn">OK</button>\n    </div>\n  ',t.style.display="block",setTimeout((function(){document.getElementById("thanks").style.display="none"}),4e3)};function l(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+7 (___) ___-__-__",n=document.querySelectorAll(e);function r(e){var n=e.keyCode,r=t,o=r.replace(/\D/g,""),i=this.value.replace(/\D/g,""),a=0,c=r.replace(/[_\d]/g,(function(e){return a<i.length?i.charAt(a++)||o.charAt(a):e}));-1!=(a=c.indexOf("_"))&&(c=c.slice(0,a));var l=r.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(l=new RegExp("^"+l+"$")).test(this.value)||this.value.length<5||n>47&&n<58)&&(this.value=c),"blur"==e.type&&this.value.length<5&&(this.value="")}var o,i=l(n);try{for(i.s();!(o=i.n()).done;){var a=o.value;a.addEventListener("input",r),a.addEventListener("focus",r),a.addEventListener("blur",r)}}catch(e){i.e(e)}finally{i.f()}};function f(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var y=function(e,t){f(e.elements).forEach((function(n){!function(n){"checkbox"===n.type&&t.addEventListener("click",(function(){if(!n.checked){t.disabled=!0;var r=document.createElement("div");r.classList.add("validate-error"),r.textContent="Подтвердите обработку данных!",e.insertAdjacentElement("afterend",r);setTimeout((function(){t.disabled=!1,r.remove()}),3e3)}}))}(n),"tel"===n.type&&(n.classList.add("phone-class"),s(".".concat(n.className)));n.addEventListener("blur",(function(){var e=document.createElement("div");e.classList.add("validate-error");var t;"text"===n.type&&((t=n.value.trim(),{phoneInput:function(){return t.replace(/[^\+\d]/gi,"")},textInput:function(){return t.replace(/[^а-яё _\-,.;!?\:]$/i,"")},phoneBlur:function(){return/\+?[78]([-()]*\d){10}/g.test(t)},textBlur:function(){return/^[а-яё]/gi.test(t)}}).textBlur()||""===n.value||(e.textContent="Допустим ввод только русских букв!",n.insertAdjacentElement("afterend",e),n.value="",setTimeout((function(){e.remove()}),3e3)))}))}))},m=function(){var e=document.querySelectorAll("form"),t="Загрузка...",n=function(e){var n=e.querySelector("button");y(e,n);!function(e){e.addEventListener("submit",(function(n){n.preventDefault();var r=document.createElement("div");r.style.cssText="color: white",r.textContent=t,e.insertAdjacentElement("afterend",r);var o,i,l=new FormData(e),u=JSON.stringify(Object.fromEntries(l.entries()));(o="server.php",i=u,fetch(o,{method:"POST",headers:{"Content-type":"application/json"},body:i})).then((function(t){if(!t.ok)throw new Error("Status network isn't 200");a(e)})).catch((function(t){c(e),console.error(t)})).finally((function(){e.reset(),r.remove()}))}))}(e)};e.forEach((function(e){n(e)}))},p=function(){var e=document.querySelector(".fixed-gift"),t=document.getElementById("gift");e.addEventListener("click",(function(){t.style.display="block",e.remove()}))},v=function(){var e=document.querySelector(".main-slider").querySelectorAll(".slide"),t=0,n=function(){e[t].style.display="none",++t>=e.length&&(t=0),function(e,t){e[t].style.display="flex"}(e,t)};!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2e3;setInterval(n,e)}()};function h(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var b=function(){var e=document.querySelector(".services-slider"),t=h(e.children),n=document.querySelectorAll(".services-slider > .slide > img"),r=document.createElement("span"),o=document.createElement("span");r.className="carousel-slider-left",r.innerHTML='<i class="fa fa-angle-left"></i>',o.className="carousel-slider-right",o.innerHTML='<i class="fa fa-angle-right"></i>',e.append(r),e.append(o);var i=function(){var r=0,o=0;e.addEventListener("click",(function(e){var i=e.target;if(i.closest(".carousel-slider-left, .carousel-slider-right")){if(i.closest(".carousel-slider-left")&&o>0){if(window.innerWidth<=768)return r+=t[0].getBoundingClientRect().width-n[0].getBoundingClientRect().width+n[0].getBoundingClientRect().width,o--,void t.forEach((function(e){e.style.transform="translateX(".concat(r,"px)")}));if(window.innerWidth<1100)return r+=t[0].getBoundingClientRect().width,o--,void t.forEach((function(e){e.style.transform="translateX(".concat(r,"px)")}));if(window.innerWidth>1100)return r+=226,o--,void t.forEach((function(e){e.style.transform="translateX(".concat(r,"px)")}))}if(i.closest(".carousel-slider-right")){if(window.innerWidth<=768&&o!==t.length-1)return r-=t[0].getBoundingClientRect().width-n[0].getBoundingClientRect().width+n[0].getBoundingClientRect().width,o++,void t.forEach((function(e){e.style.transform="translateX(".concat(r,"px)")}));if(window.innerWidth>768&&window.innerWidth<=1100&&o!==t.length-3)return r-=t[0].getBoundingClientRect().width,o++,void t.forEach((function(e){e.style.transform="translateX(".concat(r,"px)")}));if(window.innerWidth>1100&&o!==t.length-5)return r-=226,o++,void t.forEach((function(e){e.style.transform="translateX(".concat(r,"px)")}))}}}))};i(),window.addEventListener("resize",i)};(function(){var e=document.querySelector(".clubs-list").querySelector("ul");document.body.addEventListener("click",(function(t){t.target.closest(".clubs-list")?"block"===e.style.display?e.style.display="none":e.style.display="block":e.style.display="none"}))})(),i(),m(),p(),v(),b()}]);