!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);let n=Math.max(123.965,90.2345,15.678),o=0;for(let e=0;e<=10;e++)e%2!=0&&(o+=e);var s=o;const l=["Олександр","Ігор","Олена","Іра","Олексій","Світлана"],u=[4,5,5,3,4,5];const i=function(){let e=[];for(let t=0;t<l.length;t++)e.push([`${l[t]} = оцінка  (${u[t]})`]);return e}(),c=((...e)=>{let t=e.filter(e=>e%1==0);return(t.reduce((e,t)=>e+t)/t.length).toFixed(0)})(-2,9,15,-1,6,2,55,11,78),a=(e=>e.map(e=>e.name).sort())([{name:"Tanya",course:3,subjects:{math:[4,4,3,4],algorithms:[3,3,3,4,4,4],data_science:[5,5,3,4]}},{name:"Victor",course:4,subjects:{physics:[5,5,5,3],economics:[2,3,3,3,3,5],geometry:[5,5,2,3,5]}},{name:"Anton",course:2,subjects:{statistics:[4,5,5,5,5,3,4,3,4,5],english:[5,3],cosmology:[5,5,5,5]}}]);const f=Number(function(e){return this.tax*e}.call({tax:.195,middleSalary:1789,vacancies:11476},25e3));const m=new class{constructor(e,t,r){this.course=t,this.university=e,this.fullName=r,this.marksAll=[5,4,4,5],this.myStudent=!0}getInfo(){return`Студент (${this.university}) ${this.course} курсу - ${this.fullName}.`}get Marks(){return this.myStudent?this.marksAll:null}set Marks(e){return this.myStudent?(this.marksAll.push(e),this.marksAll):null}getAverageMark(){if(this.myStudent)return this.marksAll.reduce((e,t)=>e+t)/this.marksAll.length}dismiss(){return this.myStudent=!1}recover(){return this.myStudent=!0}}("ЛДУВС ","5-го ","Демкович Дмитро ").getInfo();const h=()=>{let e=[],t="#";for(let t=0;t<6;t++)e[t]=Math.floor(10*Math.random());return t+e.join("")},d=()=>{let e=document.querySelectorAll(".block");for(let t=0;t<e.length;t++)e[t].style.backgroundColor=""+h()};d();var g;console.log("HW1- Максимальна ціна - "+n),console.log(`HW2- Сума непарних чисел  - (${s})`),console.log("HW3- Функція 3: Перша велика буква:"+((g="рислінг")[0].toUpperCase()+g.slice(1).toLowerCase())),console.log(`HW4- Оцінки студентів   - (${i})`),console.log(`HW5- Cереднє арифметичне  - (${c})`),console.log(`HW6-  Імя студентів  - (${a})`),console.log(`HW7-  IT-спеціалісти платять податок в Україні отримуючи зарплату [25000 uah]  - (${f})`),console.log(`HW8- (${m})`)}]);