(function(){var e={9341:function(e,t,r){"use strict";var n={};r.r(n),r.d(n,{searchMeals:function(){return D},searchMealsByIngredient:function(){return I},searchMealsByLetter:function(){return j}});var a={};r.r(a),r.d(a,{setMealsByIngredient:function(){return S},setMealsByLetter:function(){return L},setSearchedMeals:function(){return B}});var s=r(9242),l=r(3396);function o(e,t,r,n,a,s){const o=(0,l.up)("router-view");return(0,l.wg)(),(0,l.j4)(o)}var i={name:"App"},u=r(89);const c=(0,u.Z)(i,[["render",o]]);var d=c,m=r(2483),p=r(4161),f={BASE_URI:"https://www.themealdb.com/api/json/v1/1"};const v=p.Z.create({baseURL:f.BASE_URI});var g=v,h=r(4870);const b={class:"flex flex-col items-center p-8"},y=(0,l._)("div",{class:"w-full"},null,-1),w=[y];var _={__name:"Home",setup(e){const t=(0,h.iH)([]);return(0,l.bv)((async()=>{const e=await g.get("/list.php?i=list");t.value=e.data})),(e,t)=>((0,l.wg)(),(0,l.iD)("div",b,w))}};const x=_;var M=x,k=r(65);async function D({commit:e},t){g.get(`search.php?s=${t}`).then((({data:t})=>{e("setSearchedMeals",t.meals)})).catch((e=>{console.error("Error fetching searched meal:",e)}))}async function j({commit:e},t){g.get(`search.php?f=${t}`).then((({data:t})=>{e("setMealsByLetter",t.meals)})).catch((e=>{console.error("Error fetching searched meal:",e)}))}async function I({commit:e},t){g.get(`filter.php?i=${t}`).then((({data:t})=>{e("setMealsByIngredient",t.meals)})).catch((e=>{console.error("Error fetching searched meal:",e)}))}function B(e,t){e.searchedMeal=t}function L(e,t){e.mealsByLetter=t}function S(e,t){e.mealsByIngredient=t}var O=r(9539);const U=(0,k.MT)({state:{searchedMeal:[],mealsByLetter:[],mealsByIngredient:[]},actions:n,mutations:a,getters:O});var H=U,Y=r(7139);const z=["href"];var W={__name:"YoutubeButton",props:{href:String},setup(e){return(t,r)=>((0,l.wg)(),(0,l.iD)("a",{href:e.href,target:"_blank",class:"py-2 px-3 text-white border-2 bg-red-500 border-red-600 rounded hover:bg-red-600 hover:text-white transition-colors"},[(0,l.WI)(t.$slots,"default")],8,z))}};const T=W;var q=T;const A={class:"bg-white shadow rounded-2xl pb-3"},$=["src","alt"],E={class:"px-3"},P={class:"font-bold mb-2"},C=(0,l._)("p",{class:"mb-4"}," Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos amet dolores quibusdam, reiciendis eligendi rerum voluptatum quisquam ex accusantium totam maiores hic neque minima ab exercitationem soluta aperiam corrupti inventore. ",-1),K={class:"flex items-center justify-between"};var F={__name:"MealItem",props:{meal:{required:!0,type:Object}},setup(e){const{meal:t}=e;return(t,r)=>{const n=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("div",A,[(0,l.Wm)(n,{to:{name:"mealDetails",params:{id:e.meal.idMeal}}},{default:(0,l.w5)((()=>[(0,l._)("img",{src:e.meal.strMealThumb,alt:t.strMeal,class:"rounded-t-2xl h-56 w-full object-cover"},null,8,$)])),_:1},8,["to"]),(0,l._)("div",E,[(0,l._)("h3",P,(0,Y.zw)(e.meal.strMeal),1),C,(0,l._)("div",K,[(0,l.Wm)(q,{href:e.meal.strYoutube},{default:(0,l.w5)((()=>[(0,l.Uk)("Youtube")])),_:1},8,["href"])])])])}}};const Z=F;var N=Z;const R={class:"grid grid-cols-1 md:grid-cols-3 gap-5 p-8"},V={key:0,class:"flex justify-center items-center p-5 bg-white"};var G={__name:"Meals",props:{meals:{required:!0,type:Array}},setup(e){const{meals:t}=e;return(t,r)=>((0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("div",R,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.meals,(e=>((0,l.wg)(),(0,l.j4)(N,{key:e.idMeal,meal:e},null,8,["meal"])))),128))]),e.meals?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("div",V," There are no meals "))]))}};const J=G;var Q=J;const X={class:"p-8"},ee={class:"p-8 flex items-center justify-between"};var te={__name:"MealsByName",setup(e){const t=(0,h.iH)(""),r=(0,l.Fl)((()=>H.state.searchedMeal)),n=(0,m.yj)();function a(){H.dispatch("searchMeals",t.value)}return(0,l.bv)((()=>{t.value=n.params.name,t.value&&a()})),(e,n)=>((0,l.wg)(),(0,l.iD)("div",X,[(0,l._)("div",ee,[(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),class:"rounded border-2 border-gray-200 w-full p-2 outline-none",placeholder:"Search for Meals"},null,512),[[s.nr,t.value]]),(0,l._)("button",{type:"button",onClick:a,class:"ms-2 inline-block rounded-full border-2 border-blue-400 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-red-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-red-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"}," Search ")]),(0,l.Wm)(Q,{meals:r.value},null,8,["meals"])]))}};const re=te;var ne=re,ae={__name:"MealsByIngredient",setup(e){const t=(0,m.yj)(),r=(0,l.Fl)((()=>H.state.mealsByIngredient));return(0,l.bv)((()=>{H.dispatch("searchMealsByIngredient",t.params.ingredient)})),(e,t)=>((0,l.wg)(),(0,l.j4)(Q,{meals:r.value},null,8,["meals"]))}};const se=ae;var le=se;const oe=(0,l._)("h1",{class:"text-4xl font-bold mb-4 p-4"},"Ingredients",-1),ie={class:"grid grid-cols-1 md:grid-cols-3"},ue={class:"text-2xl font-bold mb-2"};var ce={__name:"Ingredient",setup(e){const t=(0,h.iH)([]);return(0,l.bv)((()=>{g.get("list.php?i=latest").then((({data:e})=>{console.log(e.meals),t.value=e.meals}))})),(e,r)=>{const n=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("div",null,[oe,(0,l._)("div",ie,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.value,(e=>((0,l.wg)(),(0,l.j4)(n,{to:{name:"byIngredient",params:{ingredient:e.strIngredient}},key:e.id,class:"block bg-white rounded p-3 m-3 shadow"},{default:(0,l.w5)((()=>[(0,l._)("h3",ue,(0,Y.zw)(e.strIngredient),1),(0,l._)("p",null,(0,Y.zw)(e.strDescription),1)])),_:2},1032,["to"])))),128))])])}}};const de=ce;var me=de;const pe={class:"flex gap-2 pt-3 items-center justify-center"};var fe={__name:"MealsByLetter",setup(e){const t=(0,m.yj)(),r="ABCDEFHIJKLMNOPQRSTUVWXYZ".split(""),n=(0,l.Fl)((()=>H.state.mealsByLetter));return(0,l.bv)((()=>{H.dispatch("searchMealsByLetter",t.params.letter)})),(0,l.YP)((()=>{H.dispatch("searchMealsByLetter",t.params.letter)})),(e,t)=>{const a=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",pe,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)((0,h.SU)(r),(e=>((0,l.wg)(),(0,l.j4)(a,{to:{name:"byLetter",params:{letter:e}},key:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,Y.zw)(e),1)])),_:2},1032,["to"])))),128))]),(0,l.Wm)(Q,{meals:n.value},null,8,["meals"])],64)}}};const ve=fe;var ge=ve;const he={class:"max-w-[800px] mx-auto p-8"},be={class:"text-5xl font-bold mb-5"},ye=["src","alt"],we={class:"grid grid-cols-1 md:grid-cols-3"},_e=(0,l._)("strong",{class:"font-bold"},"Category :",-1),xe=(0,l._)("strong",{class:"font-bold"},"Area :",-1),Me=(0,l._)("strong",{class:"font-bold"},"Tags :",-1),ke={class:"my-3"},De={class:"grid grid-cols-1 md:grid-cols-2"},je=(0,l._)("h2",{class:"text-2xl font-semibold mb-3"},"Ingredients :",-1),Ie={key:0},Be=(0,l._)("h2",{class:"text-2xl font-semibold mb-3"},"Measures :",-1),Le={key:0},Se={class:"mt-4"},Oe=["href"];var Ue={__name:"MealsDetails",setup(e){const t=(0,m.yj)(),r=(0,h.iH)({});return(0,l.bv)((()=>{g.get(`lookup.php?i=${t.params.id}`).then((e=>{r.value=e.data.meals[0]}))})),(e,t)=>((0,l.wg)(),(0,l.iD)("div",he,[(0,l._)("h1",be,(0,Y.zw)(r.value.strMeal),1),(0,l._)("img",{src:r.value.strMealThumb,alt:r.value.strMeal,class:"max-w-[100%]"},null,8,ye),(0,l._)("div",we,[(0,l._)("div",null,[_e,(0,l.Uk)(" "+(0,Y.zw)(r.value.strCategory),1)]),(0,l._)("div",null,[xe,(0,l.Uk)(" "+(0,Y.zw)(r.value.strArea),1)]),(0,l._)("div",null,[Me,(0,l.Uk)(" "+(0,Y.zw)(r.value.strTags),1)])]),(0,l._)("div",ke,(0,Y.zw)(r.value.strInstructions),1),(0,l._)("div",De,[(0,l._)("div",null,[je,(0,l._)("ul",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(new Array(20),((e,t)=>((0,l.wg)(),(0,l.iD)(l.HY,{key:t},[r.value[`strIngredient${t+1}`]?((0,l.wg)(),(0,l.iD)("li",Ie,(0,Y.zw)(t+1)+". "+(0,Y.zw)(r.value[`strIngredient${t+1}`]),1)):(0,l.kq)("",!0)],64)))),128))])]),(0,l._)("div",null,[Be,(0,l._)("ul",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(new Array(20),((e,t)=>((0,l.wg)(),(0,l.iD)(l.HY,{key:t},[r.value[`strMeasure${t+1}`]?((0,l.wg)(),(0,l.iD)("li",Le,(0,Y.zw)(t+1)+". "+(0,Y.zw)(r.value[`strMeasure${t+1}`]),1)):(0,l.kq)("",!0)],64)))),128))])]),(0,l._)("div",Se,[(0,l.Wm)(q,{href:r.value.strYoutube},{default:(0,l.w5)((()=>[(0,l.Uk)("Youtube")])),_:1},8,["href"]),(0,l._)("a",{href:r.value.strSource,target:"_blank",class:"ml-3 px-3 py-2 rounded border-2 border-transparent text-indigo-600 hover:bg-indigo-500 hover:text-white transition-colors"},"View Source",8,Oe)])])]))}};const He=Ue;var Ye=He;const ze={class:"bg-white h-16 shadow flex justify-between items-center font-semibold"},We={class:"flex items-center h-full"};function Te(e,t){const r=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("header",ze,[(0,l.Wm)(r,{to:{name:"home"},class:"inline-flex transition-colors items-center px-4 h-full hover:bg-purple-200"},{default:(0,l.w5)((()=>[(0,l.Uk)(" Home ")])),_:1}),(0,l._)("div",We,[(0,l.Wm)(r,{to:{name:"byName"},class:"inline-flex transition-colors items-center px-2 h-full hover:bg-purple-200"},{default:(0,l.w5)((()=>[(0,l.Uk)(" Search Meals ")])),_:1}),(0,l.Wm)(r,{to:{name:"byLetter"},class:"inline-flex transition-colors items-center px-2 h-full hover:bg-purple-200"},{default:(0,l.w5)((()=>[(0,l.Uk)(" Meals by Letters ")])),_:1}),(0,l.Wm)(r,{to:{name:"ingredient"},class:"inline-flex transition-colors items-center px-2 h-full hover:bg-purple-200"},{default:(0,l.w5)((()=>[(0,l.Uk)(" Meals By Ingredients ")])),_:1})])])}const qe={},Ae=(0,u.Z)(qe,[["render",Te]]);var $e=Ae;const Ee={class:"bg-gray-100 h-full"};var Pe={__name:"DefaultLayout",setup(e){return(e,t)=>{const r=(0,l.up)("router-view");return(0,l.wg)(),(0,l.iD)("div",Ee,[(0,l.Wm)($e),(0,l._)("main",null,[(0,l.Wm)(r)])])}}};const Ce=Pe;var Ke=Ce;const Fe={class:"bg-gray-100 h-full"};function Ze(e,t){return(0,l.wg)(),(0,l.iD)("div",Fe," Guest ")}const Ne={},Re=(0,u.Z)(Ne,[["render",Ze]]);var Ve=Re;const Ge=[{path:"/",component:Ke,children:[{path:"/",name:"home",component:M},{path:"/letter/:letter?",name:"byLetter",component:ge},{path:"/by-name/:name?",name:"byName",component:ne},{path:"/ingredient",name:"ingredient",component:me},{path:"/by-ingredient/:ingredient?",name:"byIngredient",component:le},{path:"/meal/:id",name:"mealDetails",component:Ye}]},{path:"/guest",component:Ve}],Je=(0,m.p7)({history:(0,m.PO)(),routes:Ge});var Qe=Je;(0,s.ri)(d).use(Qe).use(H).mount("#app")},9539:function(){}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}r.m=e,function(){var e=[];r.O=function(t,n,a,s){if(!n){var l=1/0;for(c=0;c<e.length;c++){n=e[c][0],a=e[c][1],s=e[c][2];for(var o=!0,i=0;i<n.length;i++)(!1&s||l>=s)&&Object.keys(r.O).every((function(e){return r.O[e](n[i])}))?n.splice(i--,1):(o=!1,s<l&&(l=s));if(o){e.splice(c--,1);var u=a();void 0!==u&&(t=u)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[n,a,s]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,s,l=n[0],o=n[1],i=n[2],u=0;if(l.some((function(t){return 0!==e[t]}))){for(a in o)r.o(o,a)&&(r.m[a]=o[a]);if(i)var c=i(r)}for(t&&t(n);u<l.length;u++)s=l[u],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(c)},n=self["webpackChunkfood_recipie"]=self["webpackChunkfood_recipie"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(9341)}));n=r.O(n)})();
//# sourceMappingURL=app.6c215e5c.js.map