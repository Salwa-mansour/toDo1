"use strict";(self.webpackChunktodolist=self.webpackChunktodolist||[]).push([[792],{582:function(){let t=[],e=[];function n(t){return{name:t}}function a(t,e){t.push(e)}function o(e,n=[]){e.innerHTML=n.map(((t,e)=>`\n        <div class="category" data-category="${t.name}" data-index="${e}">\n        <h1>${t.name}</h1>\n        <ul class="toDos">\n\n           \n        </ul>\n        <div class="add-toDo ">\n            <button class="add-task-btn" data-category="${t.name}" >➕ add task</button>\n        </div>\n        <dialog class="add-task" data-category="${t.name}">\n            <form method="dialog" >\n                <input type="hidden" value="${t.name}">\n                <input type="text" placeholder="add a task">\n                <button type="submit">add</button>\n            </form>\n        </dialog>\n    </div>\n    `)).join(""),c(t,n)}function c(t,e){e.forEach((e=>{let n=document.querySelector(`div[data-category="${e.name}"] .toDos`),a="";t.filter((t=>{t.category===e.name&&(a+=`\n                <li>\n                  <p>${t.text}</p>\n                  <input type="checkbox" name="done" >\n                  <button class="delete">❌</button>\n               </li>`)})),n.innerHTML=a}))}!function(){const r=document.querySelector("#category-container"),d=r.querySelector("#add-category"),i=d.querySelector("form"),u=r.querySelector("#add-category-btn"),s=r.querySelector("#category-container .created-categories");function l(){const n=function(t,e){return{text:t,category:e,done:!1}}(this.querySelector('input[type="text"]').value,this.querySelector('input[type="hidden"]').value);this.reset(),a(t,n),c(t,e)}u.addEventListener("click",(()=>{d.showModal()})),function(){const t=n("ToDayTasks");a(e,t),o(s,e)}(),document.addEventListener("click",(function(t){if(!t.target.matches(".add-task-btn"))return;const e=t.target.dataset.category,n=r.querySelector(`div[data-category="${e}"]`);n.querySelector("dialog").showModal(),n.querySelector("form").addEventListener("submit",l)})),i.addEventListener("submit",(function(){const t=n(this.querySelector('input[type="text"]').value);a(e,t),o(s,e),this.reset()}))}()}},function(t){t(t.s=582)}]);