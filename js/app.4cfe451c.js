(function(e){function t(t){for(var n,a,l=t[0],u=t[1],d=t[2],s=0,b=[];s<l.length;s++)a=l[s],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&b.push(r[a][0]),r[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);i&&i(t);while(b.length)b.shift()();return c.push.apply(c,d||[]),o()}function o(){for(var e,t=0;t<c.length;t++){for(var o=c[t],n=!0,l=1;l<o.length;l++){var u=o[l];0!==r[u]&&(n=!1)}n&&(c.splice(t--,1),e=a(a.s=o[0]))}return e}var n={},r={app:0},c=[];function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=n,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/todo-app/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var i=u;c.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"37da":function(e,t,o){"use strict";o("ccd1")},"3cde":function(e,t,o){"use strict";o("ce14")},"4fd3":function(e,t,o){},"53d1":function(e,t,o){"use strict";o("4fd3")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("7a23"),r={class:"min-h-screen bg-gray-100"},c={class:"flex flex-col w-full md:w-3/6 m-auto pt-14 px-10 border-gray-300 border-l border-r min-h-screen bg-white shadow-md"};function a(e,t,o,a,l,u){var d=Object(n["A"])("Home");return Object(n["r"])(),Object(n["i"])("div",r,[Object(n["j"])("div",c,[Object(n["l"])(d)])])}o("a4d3"),o("e01a");Object(n["u"])("data-v-4a140e02");var l=Object(n["j"])("span",{class:"text-gray-500 text-sm"},"Add Todo",-1),u={class:"text-xl leading-6 font-medium text-gray-900"},d={class:"text-sm text-gray-500 mt-1"},i=Object(n["k"])(" Cancel "),s={class:"mt-2 flex-1 flex flex-col"},b={key:0,class:"divide-y divide-gray-300"},j={key:1,class:"flex flex-col justify-center items-center text-center flex-1"},f=Object(n["j"])("h3",{class:"font-bold text-xl text-gray-900 mb-1"}," You've nothing to do now 😓 ",-1),p=Object(n["j"])("p",{class:"text-sm text-gray-500"},[Object(n["k"])(" Create some todo using "),Object(n["j"])("span",{class:"text-blue-600 font-medium underline"},"Add Todo"),Object(n["k"])(" button at the top ")],-1),O=[f,p];function m(e,t,o,r,c,a){var f=Object(n["A"])("BaseHeader"),p=Object(n["A"])("Plus"),m=Object(n["A"])("BaseInputText"),v=Object(n["A"])("BaseTextarea"),x=Object(n["A"])("BaseButton"),h=Object(n["A"])("BaseModal"),g=Object(n["A"])("BaseItem");return Object(n["r"])(),Object(n["i"])(n["a"],null,[Object(n["l"])(f),Object(n["l"])(h,{modelValue:r.isOpenModal,"onUpdate:modelValue":t[4]||(t[4]=function(e){return r.isOpenModal=e})},{activator:Object(n["E"])((function(){return[Object(n["j"])("div",{onClick:t[0]||(t[0]=function(e){return r.isOpenModal=!0}),class:"mt-10 ml-2 rounded-md flex items-center cursor-pointer space-x-2 hover:bg-gray-100 p-3"},[Object(n["l"])(p,{class:"h-5 w-5 text-blue-500"}),l])]})),header:Object(n["E"])((function(){return[Object(n["j"])("h3",u,Object(n["B"])(r.todoId?"Edit":"Add")+" Todo ",1),Object(n["j"])("p",d,Object(n["B"])(r.todoId?"Update":"Create")+" your Todo List ",1)]})),content:Object(n["E"])((function(){return[Object(n["j"])("form",{onSubmit:t[3]||(t[3]=Object(n["G"])((function(){return r.submitTodo&&r.submitTodo.apply(r,arguments)}),["prevent"]))},[Object(n["l"])(m,{ref:"title",id:"title",label:"Title",placeholder:"Add title here...",modelValue:r.todo.title,"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.todo.title=e})},null,8,["modelValue"]),Object(n["l"])(v,{id:"description",label:"Description",placeholder:"Add description here...",class:"mt-5",modelValue:r.todo.description,"onUpdate:modelValue":t[2]||(t[2]=function(e){return r.todo.description=e})},null,8,["modelValue"])],32)]})),footer:Object(n["E"])((function(){return[Object(n["l"])(x,{variant:"primary",onClick:r.submitTodo},{default:Object(n["E"])((function(){return[Object(n["k"])(Object(n["B"])(r.todoId?"Edit":"Add")+" Todo ",1)]})),_:1},8,["onClick"]),Object(n["l"])(x,{class:"sm:ml-3 mt-3 sm:mt-0",variant:"secondary",onClick:r.closeModal},{default:Object(n["E"])((function(){return[i]})),_:1},8,["onClick"])]})),_:1},8,["modelValue"]),Object(n["j"])("div",s,[Object(n["l"])(n["c"],{name:"todos-fade"},{default:Object(n["E"])((function(){return[r.todos.length>0?(Object(n["r"])(),Object(n["i"])("div",b,[Object(n["l"])(n["d"],{name:"todo-item"},{default:Object(n["E"])((function(){return[(Object(n["r"])(!0),Object(n["i"])(n["a"],null,Object(n["y"])(r.todos,(function(e){return Object(n["r"])(),Object(n["g"])(g,{item:e,key:e.id,onEditTodo:r.editTodo},null,8,["item","onEditTodo"])})),128))]})),_:1})])):(Object(n["r"])(),Object(n["i"])("div",j,O))]})),_:1})])],64)}Object(n["s"])();var v=o("1da1"),x=(o("96cf"),{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}),h=Object(n["j"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 4v16m8-8H4"},null,-1),g=[h];function w(e,t,o,r,c,a){return Object(n["r"])(),Object(n["i"])("svg",x,g)}var y={name:"Plus"};y.render=w;var k=y,B=["for"],T=["name","id","placeholder","value"];function V(e,t,o,r,c,a){return Object(n["r"])(),Object(n["i"])("div",null,[Object(n["j"])("label",{for:o.id,class:"block text-sm font-medium text-gray-700"},Object(n["B"])(o.label),9,B),Object(n["j"])("input",{type:"text",name:o.id,id:o.id,placeholder:o.placeholder,value:o.modelValue,onInput:t[0]||(t[0]=function(){return r.updateValue&&r.updateValue.apply(r,arguments)}),autocomplete:"off",class:"mt-2 shadow-sm w-full sm:text-sm border border-gray-300 rounded-md focus:outline-none py-2 px-3 focus:ring-blue-600 focus:border-blue-600 focus:ring-1"},null,40,T)])}var D={name:"BaseInputText",props:["id","label","placeholder","modelValue"],setup:function(e,t){var o=t.emit,n=function(e){return o("update:modelValue",e.target.value)};return{updateValue:n}}};D.render=V;var C=D,_=["for"],M=["name","id","placeholder","value"];function I(e,t,o,r,c,a){return Object(n["r"])(),Object(n["i"])("div",null,[Object(n["j"])("label",{for:o.id,class:"block text-sm font-medium text-gray-700"},Object(n["B"])(o.label),9,_),Object(n["j"])("textarea",{type:"text",name:o.id,id:o.id,placeholder:o.placeholder,value:o.modelValue,onInput:t[0]||(t[0]=function(){return r.updateValue&&r.updateValue.apply(r,arguments)}),autocomplete:"off",class:"mt-2 shadow-sm w-full sm:text-sm border border-gray-300 rounded-md focus:outline-none py-2 px-3 focus:ring-blue-600 focus:ring-1 focus:border-blue-600"},null,40,M)])}var A={name:"BaseTextarea",props:["id","label","placeholder","modelValue"],setup:function(e,t){var o=t.emit,n=function(e){return o("update:modelValue",e.target.value)};return{updateValue:n}}};A.render=I;var E=A;function z(e,t,o,r,c,a){return Object(n["r"])(),Object(n["i"])("button",{class:Object(n["o"])(o.variant)},[Object(n["z"])(e.$slots,"default",{},void 0,!0)],2)}var S={name:"BaseButton",props:["variant"]};o("3cde");S.render=z,S.__scopeId="data-v-55e69905";var P=S;Object(n["u"])("data-v-b84b0870");var H={class:"bg-white sm:rounded-md sm:h-auto h-full w-full mx-auto shadow-xl border border-gray-300 p-6 text-black sm:max-w-xl"},U={class:"modal-header"},$={class:"border-t border-gray-300 my-5 py-4"},L={class:"sm:flex sm:justify-end"};function J(e,t,o,r,c,a){return Object(n["r"])(),Object(n["i"])(n["a"],null,[Object(n["z"])(e.$slots,"activator",{},void 0,!0),(Object(n["r"])(),Object(n["g"])(n["b"],{to:"#modal"},[Object(n["l"])(n["c"],{name:"modal-overlay-animation"},{default:Object(n["E"])((function(){return[Object(n["F"])(Object(n["j"])("div",{onClick:t[0]||(t[0]=Object(n["G"])((function(){return r.closeModal&&r.closeModal.apply(r,arguments)}),["self"])),class:"fixed overflow-y-auto inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50"},[Object(n["l"])(n["c"],{name:"modal-animation"},{default:Object(n["E"])((function(){return[Object(n["F"])(Object(n["j"])("div",H,[Object(n["j"])("div",U,[Object(n["z"])(e.$slots,"header",{},void 0,!0)]),Object(n["j"])("div",$,[Object(n["z"])(e.$slots,"content",{},void 0,!0)]),Object(n["j"])("div",L,[Object(n["z"])(e.$slots,"footer",{},void 0,!0)])],512),[[n["C"],o.modelValue]])]})),_:3})],512),[[n["C"],o.modelValue]])]})),_:3})]))],64)}Object(n["s"])();var q={name:"BaseList",props:["modelValue"],emits:["update:modelValue"],setup:function(e,t){var o=t.emit,n=function(){return o("update:modelValue",!1)};return{closeModal:n}}};o("37da");q.render=J,q.__scopeId="data-v-b84b0870";var F=q,G={class:"px-4 py-2 flex cursor-pointer font-medium transition-all duration-300"},N={class:"flex justify-between w-full items-center"},R=["onClick"],Y=Object(n["j"])("span",{class:"ml-2"},"Edit",-1),K=Object(n["j"])("span",{class:"ml-2"},"Delete",-1);function Q(e,t,o,r,c,a){var l=Object(n["A"])("BaseCheckbox"),u=Object(n["A"])("VerticalDots"),d=Object(n["A"])("Pencil"),i=Object(n["A"])("BaseDropdownItem"),s=Object(n["A"])("Trash"),b=Object(n["A"])("BaseDropdown");return Object(n["r"])(),Object(n["i"])("div",G,[Object(n["j"])("div",N,[Object(n["l"])(l,{id:o.item.id,modelValue:o.item.done,"onUpdate:modelValue":r.changeTodoStatus},{default:Object(n["E"])((function(){return[Object(n["j"])("span",{class:Object(n["o"])(["text-sm",{"line-through":o.item.done}])},Object(n["B"])(o.item.title),3)]})),_:1},8,["id","modelValue","onUpdate:modelValue"]),Object(n["j"])("div",null,[Object(n["l"])(b,null,{activator:Object(n["E"])((function(e){var t=e.openDropdown;return[Object(n["j"])("div",{onClick:t},[Object(n["l"])(u,{class:"h-5 w-5 text-gray-500 hover:text-gray-800"})],8,R)]})),"dropdown-item":Object(n["E"])((function(){return[Object(n["l"])(i,{onOptionClick:t[0]||(t[0]=function(e){return r.editTodo(o.item.id)})},{default:Object(n["E"])((function(){return[Object(n["l"])(d,{class:"w-4 h-4 text-gray-600"}),Y]})),_:1}),Object(n["l"])(i,{onOptionClick:t[1]||(t[1]=function(e){return r.removeTodo(o.item.id)}),class:"text-red-600 hover:text-red-700 hover:bg-red-100"},{default:Object(n["E"])((function(){return[Object(n["l"])(s,{class:"w-4 h-4 text-red-600"}),K]})),_:1})]})),_:1})])])])}var W=o("5530");Object(n["u"])("data-v-45091450");var X={class:"flex items-center w-full"},Z=["id","checked"],ee={class:"transition flex items-center justify-center mr-2 bg-white border-2 border-gray-300 w-4 h-4 rounded-sm cursor-pointer"},te=["for"];function oe(e,t,o,r,c,a){var l=Object(n["A"])("Check");return Object(n["r"])(),Object(n["i"])("div",X,[Object(n["j"])("input",{type:"checkbox",id:o.id,class:"opacity-0 absolute cursor-pointer",checked:o.modelValue,onChange:t[0]||(t[0]=function(){return r.updateValue&&r.updateValue.apply(r,arguments)})},null,40,Z),Object(n["j"])("div",ee,[Object(n["l"])(l,{class:"hidden w-3 h-3 select-none text-blue-500"})]),Object(n["j"])("label",{class:"cursor-pointer select-none w-full",for:o.id},[Object(n["z"])(e.$slots,"default",{},void 0,!0)],8,te)])}Object(n["s"])();var ne={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},re=Object(n["j"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"},null,-1),ce=[re];function ae(e,t,o,r,c,a){return Object(n["r"])(),Object(n["i"])("svg",ne,ce)}var le={name:"CheckIcon"};le.render=ae;var ue=le,de={name:"BaseCheckbox",components:{Check:ue},props:["id","modelValue"],setup:function(e,t){var o=t.emit,n=function(e){return o("update:modelValue",e.target.checked)};return{updateValue:n}}};o("53d1");de.render=oe,de.__scopeId="data-v-45091450";var ie=de;function se(e,t,o,r,c,a){return Object(n["r"])(),Object(n["i"])("span",{onClick:t[0]||(t[0]=function(){return r.clickHandler&&r.clickHandler.apply(r,arguments)}),class:"cursor-pointer text-gray-600 flex items-center w-full text-left text-xs font-medium px-4 py-2 hover:text-gray-900 hover:bg-gray-100 tracking-tight"},[Object(n["z"])(e.$slots,"default")])}var be={name:"BaseDropdownItem",setup:function(e,t){var o=t.emit,r=Object(n["m"])("closeDropdown"),c=function(){r(),o("option-click")};return{clickHandler:c}}};be.render=se;var je=be;Object(n["u"])("data-v-e98771b2");var fe={class:"relative",ref:"dropdown"},pe={key:0,class:"mt-1 bg-white shadow-md border border-gray-300 rounded-lg right-0 sm:left-0 absolute w-40 z-10 py-1"};function Oe(e,t,o,r,c,a){return Object(n["r"])(),Object(n["i"])("div",fe,[Object(n["z"])(e.$slots,"activator",{openDropdown:r.toggleDropdown},void 0,!0),Object(n["l"])(n["c"],{name:"dropdown-animation"},{default:Object(n["E"])((function(){return[r.showMenu?(Object(n["r"])(),Object(n["i"])("div",pe,[Object(n["z"])(e.$slots,"dropdown-item",{},void 0,!0)])):Object(n["h"])("",!0)]})),_:3})],512)}Object(n["s"])();var me=function(){var e=Object(n["x"])(!1),t=function(){return e.value=!e.value},o=function(){return e.value=!1};return{showMenu:e,toggleDropdown:t,closeDropdown:o}},ve={name:"BaseDropdown",setup:function(){var e=me(),t=e.showMenu,o=e.toggleDropdown,r=e.closeDropdown,c=Object(n["x"])(null);Object(n["t"])("closeDropdown",r);var a=function(e){var t=e.target;c.value.contains(t)||r()};return Object(n["q"])((function(){document.addEventListener("click",a)})),Object(n["p"])((function(){document.removeEventListener("click",a)})),{dropdown:c,toggleDropdown:o,showMenu:t}}};o("62c8");ve.render=Oe,ve.__scopeId="data-v-e98771b2";var xe=ve,he={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},ge=Object(n["j"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"},null,-1),we=[ge];function ye(e,t,o,r,c,a){return Object(n["r"])(),Object(n["i"])("svg",he,we)}var ke={name:"VerticalDotsIcon"};ke.render=ye;var Be=ke,Te={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Ve=Object(n["j"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"},null,-1),De=[Ve];function Ce(e,t,o,r,c,a){return Object(n["r"])(),Object(n["i"])("svg",Te,De)}var _e={name:"Trash"};_e.render=Ce;var Me=_e,Ie={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Ae=Object(n["j"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"},null,-1),Ee=[Ae];function ze(e,t,o,r,c,a){return Object(n["r"])(),Object(n["i"])("svg",Ie,Ee)}var Se={name:"Pencil"};Se.render=ze;var Pe=Se,He=(o("7db0"),o("c740"),o("a434"),o("d81d"),o("ac1f"),o("5319"),o("d3b7"),o("25f0"),function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}))}),Ue="todo_list",$e=function(){return localStorage.getItem(Ue)?JSON.parse(localStorage.getItem(Ue)):{todos:[]}},Le=Object(n["v"])($e()),Je={getTodos:function(){return Object(n["e"])((function(){return Le.todos}))},getTodo:function(e){return Object(n["e"])((function(){return Le.todos.find((function(t){return t.id===e}))}))}},qe={createTodo:function(e){Le.todos.push(Object(W["a"])({id:He()},e))},updateTodo:function(e,t){var o=Le.todos.findIndex((function(t){return t.id===e}));Le.todos.splice(o,1,Object(W["a"])(Object(W["a"])({},t),{},{id:e}))},removeTodo:function(e){var t=Le.todos.findIndex((function(t){return t.id===e}));Le.todos.splice(t,1)},bulkUpdateDone:function(){Object.assign(Le.todos,Le.todos.map((function(e){return Object(W["a"])(Object(W["a"])({},e),{},{done:!0})})))},bulkDelete:function(){Object.assign(Le,{todos:[]})}};Object(n["D"])((function(){return Le}),(function(){localStorage.setItem(Ue,JSON.stringify(Le))}),{deep:!0,immediate:!0});var Fe=function(){return Object(W["a"])(Object(W["a"])({state:Object(n["w"])(Le)},Je),qe)},Ge={name:"BaseItem",components:{BaseCheckbox:ie,VerticalDots:Be,BaseDropdown:xe,BaseDropdownItem:je,Pencil:Pe,Trash:Me},props:["item"],setup:function(e,t){var o=t.emit,n=Fe(),r=n.removeTodo,c=n.updateTodo,a=function(t){c(e.item.id,Object(W["a"])(Object(W["a"])({},e.item),{},{done:t}))},l=function(e){o("edit-todo",e)};return{editTodo:l,removeTodo:r,changeTodoStatus:a}}};Ge.render=Q;var Ne=Ge,Re={class:"flex justify-between pb-3 border-b border-gray-300"},Ye=Object(n["j"])("h1",{class:"text-2xl font-bold"},"Todo Lists 📃",-1),Ke=["onClick"],Qe=Object(n["j"])("span",{class:"ml-2"},"Mark all as done",-1),We=Object(n["j"])("span",{class:"ml-2"},"Delete All",-1);function Xe(e,t,o,r,c,a){var l=Object(n["A"])("VerticalDots"),u=Object(n["A"])("Check"),d=Object(n["A"])("BaseDropdownItem"),i=Object(n["A"])("Trash"),s=Object(n["A"])("BaseDropdown");return Object(n["r"])(),Object(n["i"])("div",Re,[Ye,Object(n["l"])(s,null,{activator:Object(n["E"])((function(e){var t=e.openDropdown;return[Object(n["j"])("div",{onClick:t,class:"cursor-pointer rounded-md flex p-1 justify-center items-center border border-gray-300"},[Object(n["l"])(l,{class:"h-6 w-6 text-gray-500 hover:text-gray-800"})],8,Ke)]})),"dropdown-item":Object(n["E"])((function(){return[Object(n["l"])(d,{onOptionClick:r.bulkUpdateDone,class:"text-green-500 hover:text-green-600 hover:bg-green-50"},{default:Object(n["E"])((function(){return[Object(n["l"])(u,{class:"w-4 h-4 text-green-600"}),Qe]})),_:1},8,["onOptionClick"]),Object(n["l"])(d,{class:"text-red-500 hover:text-red-600 hover:bg-red-50",onOptionClick:r.bulkDelete},{default:Object(n["E"])((function(){return[Object(n["l"])(i,{class:"w-4 h-4 text-red-600"}),We]})),_:1},8,["onOptionClick"])]})),_:1})])}var Ze={name:"BaseHeader",components:{VerticalDots:Be,BaseDropdown:xe,BaseDropdownItem:je,Check:ue,Trash:Me},setup:function(){var e=Fe(),t=e.bulkUpdateDone,o=e.bulkDelete;return{bulkUpdateDone:t,bulkDelete:o}}};Ze.render=Xe;var et=Ze,tt={components:{BaseButton:P,BaseHeader:et,BaseItem:Ne,BaseModal:F,BaseInputText:C,BaseTextarea:E,Plus:k},setup:function(){var e=Fe(),t=e.getTodos,o=e.createTodo,r=e.getTodo,c=e.updateTodo,a=Object(n["x"])(!1),l=Object(n["x"])(null),u=Object(n["x"])(null),d=Object(n["v"])({title:null,description:null,done:!1});Object(n["D"])(a,function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t){e.next=4;break}return e.next=3,Object(n["n"])();case 3:l.value.$el.querySelector("input#title").focus();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var i=function(){d.title&&""!==d.title&&(u.value?c(u.value,d):o(d),b())},s=function(e){u.value=e,a.value=!0;var t=r(e).value,o=t.title,n=t.description,c=t.done;d.title=o,d.description=n,d.done=c},b=function(){a.value=!1,u.value=null,j()},j=function(){d.title=null,d.description=null,d.done=!1};return{todos:t(),todo:d,submitTodo:i,isOpenModal:a,closeModal:b,editTodo:s,todoId:u,title:l}}};o("f174");tt.render=m,tt.__scopeId="data-v-4a140e02";var ot=tt,nt={components:{Home:ot}};nt.render=a;var rt=nt;o("a2f0");Object(n["f"])(rt).mount("#app")},"62c8":function(e,t,o){"use strict";o("bd42")},a2f0:function(e,t,o){},bd42:function(e,t,o){},ccbc:function(e,t,o){},ccd1:function(e,t,o){},ce14:function(e,t,o){},f174:function(e,t,o){"use strict";o("ccbc")}});
//# sourceMappingURL=app.4cfe451c.js.map