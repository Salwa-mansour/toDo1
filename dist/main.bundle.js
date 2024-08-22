/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["main"],{

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://todolist/./src/style.css?");

/***/ }),

/***/ "./node_modules/uniqid/index.js":
/*!**************************************!*\
  !*** ./node_modules/uniqid/index.js ***!
  \**************************************/
/***/ (function(module) {

eval("/* \n(The MIT License)\nCopyright (c) 2014-2021 Halász Ádám <adam@aimform.com>\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n*/\n\n//  Unique Hexatridecimal ID Generator\n// ================================================\n\n//  Dependencies\n// ================================================\nvar pid = typeof process !== 'undefined' && process.pid ? process.pid.toString(36) : '' ;\nvar address = '';\nif(false){ var i, networkInterfaces, mac, os; } \n\n//  Exports\n// ================================================\nmodule.exports = module.exports[\"default\"] = function(prefix, suffix){ return (prefix ? prefix : '') + address + pid + now().toString(36) + (suffix ? suffix : ''); }\nmodule.exports.process = function(prefix, suffix){ return (prefix ? prefix : '') + pid + now().toString(36) + (suffix ? suffix : ''); }\nmodule.exports.time    = function(prefix, suffix){ return (prefix ? prefix : '') + now().toString(36) + (suffix ? suffix : ''); }\n\n//  Helpers\n// ================================================\nfunction now(){\n    var time = Date.now();\n    var last = now.last || time;\n    return now.last = time > last ? time : last + 1;\n}\n\n\n//# sourceURL=webpack://todolist/./node_modules/uniqid/index.js?");

/***/ }),

/***/ "./src/Populator.js":
/*!**************************!*\
  !*** ./src/Populator.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   populaoteCategories: function() { return /* binding */ populaoteCategories; },\n/* harmony export */   populaoteTasks: function() { return /* binding */ populaoteTasks; }\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n\r\n\r\n\r\n  \r\n    function populaoteCategories(list,categories=[]){\r\n      list.innerHTML  =categories.map((category,i)=>{\r\n        return `\r\n        <div class=\"category\" data-category=\"${category.id}\" data-index=\"${i}\">\r\n        <h1>${category.name}</h1>\r\n        <ul class=\"toDos\">\r\n\r\n           \r\n        </ul>\r\n        <div class=\"add-toDo \">\r\n            <button class=\"add-task-btn\" data-category=\"${category.id}\" >➕ add task</button>\r\n        </div>\r\n        <dialog class=\"add-task\" data-category=\"${category.id}\">\r\n            <form method=\"dialog\" >\r\n                <input type=\"hidden\" value=\"${category.id}\">\r\n                <input type=\"text\" placeholder=\"add a task\">\r\n                <input type=\"checkbox\" name=\"done\">\r\n                <button type=\"submit\">add</button>\r\n            </form>\r\n        </dialog>\r\n    </div>\r\n    `\r\n        }).join('');\r\n\r\n    populaoteTasks(_data__WEBPACK_IMPORTED_MODULE_0__.tasks,categories);\r\n\r\n    }\r\n    function populaoteTasks(tasks,categories){\r\n        // console.log(tasks)\r\n        categories.forEach(category=>{\r\n            let list = document.querySelector(`div[data-category=\"${category.id}\"] .toDos`);//DOM bended pad practice!\r\n            let listContent=\"\";\r\n            tasks.filter((task)=>{\r\n               if(task.categoryId === category.id){\r\n                listContent +=`\r\n                <li >\r\n                  <p>${task.text}</p>\r\n                  <input type=\"checkbox\" name=\"done\" data-id=\"${task.id}\"  ${task.done ? \"checked\" : \"\"} >\r\n                  <button class=\"delete\" data-id=\"${task.id}\" >❌</button>\r\n               </li>`\r\n               }\r\n            });\r\n            list.innerHTML = listContent;\r\n        })\r\n    }\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://todolist/./src/Populator.js?");

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addItem: function() { return /* binding */ addItem; },\n/* harmony export */   categories: function() { return /* binding */ categories; },\n/* harmony export */   category: function() { return /* binding */ category; },\n/* harmony export */   changeDoneState: function() { return /* binding */ changeDoneState; },\n/* harmony export */   editItem: function() { return /* binding */ editItem; },\n/* harmony export */   removeItem: function() { return /* binding */ removeItem; },\n/* harmony export */   tasks: function() { return /* binding */ tasks; },\n/* harmony export */   toDo: function() { return /* binding */ toDo; }\n/* harmony export */ });\n\r\n\r\nlet tasks = JSON.parse(localStorage.getItem('tasks')) || [];\r\nlet categories = JSON.parse(localStorage.getItem('categories')) || [];\r\n    function toDo(id,text, categoryId,done = false) {\r\n        return {\r\n            id,\r\n            text,\r\n            categoryId,\r\n            done\r\n        }\r\n    }\r\n\r\n    function category(id,name) {\r\n        return {\r\n            id,\r\n            name\r\n        }\r\n    }\r\n\r\n    function addItem(arr,item){\r\n        arr.push(item);\r\n    }\r\n\r\n    function removeItem(id){\r\n        \r\n        tasks = tasks.filter((item)=> {\r\n            return item.id !== id\r\n        })\r\n     \r\n    }\r\n    function changeDoneState(id,arr = tasks){\r\n        \r\n        arr = arr.map((item)=>{\r\n            if(item.id == id){\r\n         \r\n                item.done = !item.done;\r\n            }\r\n        })\r\n    }\r\n    function editItem(id ,newData,arr = tasks){\r\n       arr = arr.map((item)=>{\r\n        if(item.id == id){\r\n            item = newData;\r\n        }\r\n       })\r\n\r\n    }\r\n    // return{\r\n    //     toDo,\r\n    //     category,\r\n    //    tasks,\r\n    //    categories,\r\n    //     addItem\r\n    // }\r\n\r\n\r\n\n\n//# sourceURL=webpack://todolist/./src/data.js?");

/***/ }),

/***/ "./src/domController.js":
/*!******************************!*\
  !*** ./src/domController.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   domController: function() { return /* binding */ domController; }\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n/* harmony import */ var _Populator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Populator */ \"./src/Populator.js\");\n/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uniqid */ \"./node_modules/uniqid/index.js\");\n/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\n\r\nconst domController = function () {\r\n    const container = document.querySelector('#category-container');\r\n\r\n    const addCategoryModal = container.querySelector('#add-category');\r\n    const addCategoryForm = addCategoryModal.querySelector('form');\r\n    const addCategoryBtn = container.querySelector('#add-category-btn');\r\n    // const addTaskModal = container.querySelectorAll('.add-task');\r\n\r\n    const categoriesList = container.querySelector('#category-container .created-categories');\r\n\r\n\r\n\r\n    function setCategory() {\r\n        const categoryItem = (0,_data__WEBPACK_IMPORTED_MODULE_0__.category)(uniqid__WEBPACK_IMPORTED_MODULE_2___default()(),addCategoryForm.querySelector('input[type=\"text\"]').value);\r\n\r\n        (0,_data__WEBPACK_IMPORTED_MODULE_0__.addItem)(_data__WEBPACK_IMPORTED_MODULE_0__.categories, categoryItem);\r\n        localStorage.setItem('categories', JSON.stringify(_data__WEBPACK_IMPORTED_MODULE_0__.categories));\r\n        (0,_Populator__WEBPACK_IMPORTED_MODULE_1__.populaoteCategories)(categoriesList, _data__WEBPACK_IMPORTED_MODULE_0__.categories);\r\n        addCategoryForm.reset();\r\n    }\r\n\r\n    function showTaskModel(e) {\r\n        if (!e.target.matches('.add-task-btn')) return;\r\n        const categoryModel = e.target.dataset.category;\r\n        const categoryBox = container.querySelector(`div[data-category=\"${categoryModel}\"]`)\r\n        // console.log(container.querySelector(`dialog[data-category=\"${categoryModel}\"]`))\r\n        categoryBox.querySelector(`dialog`).showModal();\r\n        categoryBox.querySelector('form').addEventListener('submit', setTask)\r\n    }\r\n\r\n    function setTask() {\r\n        const task = (0,_data__WEBPACK_IMPORTED_MODULE_0__.toDo)(\r\n            uniqid__WEBPACK_IMPORTED_MODULE_2___default()(),\r\n            this.querySelector('input[type=\"text\"]').value,\r\n            this.querySelector('input[type=\"hidden\"]').value,\r\n            this.querySelector('input[type=\"checkbox\"]').checked\r\n        )\r\n        this.reset();\r\n        (0,_data__WEBPACK_IMPORTED_MODULE_0__.addItem)(_data__WEBPACK_IMPORTED_MODULE_0__.tasks, task);\r\n        localStorage.setItem('tasks', JSON.stringify(_data__WEBPACK_IMPORTED_MODULE_0__.tasks));\r\n        (0,_Populator__WEBPACK_IMPORTED_MODULE_1__.populaoteTasks)(_data__WEBPACK_IMPORTED_MODULE_0__.tasks, _data__WEBPACK_IMPORTED_MODULE_0__.categories);\r\n    }\r\n\r\n    function defualtCategories() {\r\n        const cagetory1 = (0,_data__WEBPACK_IMPORTED_MODULE_0__.category)(uniqid__WEBPACK_IMPORTED_MODULE_2___default()(),'ToDayTasks');\r\n        (0,_data__WEBPACK_IMPORTED_MODULE_0__.addItem)(_data__WEBPACK_IMPORTED_MODULE_0__.categories, cagetory1);\r\n        (0,_Populator__WEBPACK_IMPORTED_MODULE_1__.populaoteCategories)(categoriesList, _data__WEBPACK_IMPORTED_MODULE_0__.categories);\r\n    }\r\n    addCategoryBtn.addEventListener('click', () => {\r\n        addCategoryModal.showModal()\r\n    });\r\n\r\n    function deleteItem(e){\r\n        \r\n        const id =e.target.dataset.id;\r\n        (0,_data__WEBPACK_IMPORTED_MODULE_0__.removeItem)(id);\r\n        localStorage.setItem('tasks', JSON.stringify(_data__WEBPACK_IMPORTED_MODULE_0__.tasks));\r\n        (0,_Populator__WEBPACK_IMPORTED_MODULE_1__.populaoteTasks)(_data__WEBPACK_IMPORTED_MODULE_0__.tasks, _data__WEBPACK_IMPORTED_MODULE_0__.categories);\r\n    }\r\n\r\n    function doneState(e){\r\n        const id  = e.target.dataset.id;\r\n     \r\n        (0,_data__WEBPACK_IMPORTED_MODULE_0__.changeDoneState)(id);\r\n        localStorage.setItem('tasks', JSON.stringify(_data__WEBPACK_IMPORTED_MODULE_0__.tasks));\r\n        (0,_Populator__WEBPACK_IMPORTED_MODULE_1__.populaoteTasks)(_data__WEBPACK_IMPORTED_MODULE_0__.tasks, _data__WEBPACK_IMPORTED_MODULE_0__.categories);\r\n    }\r\n\r\n    defualtCategories();\r\n\r\n    container.addEventListener('click',(e)=>{\r\n        if(e.target.matches('.add-task-btn')){\r\n            showTaskModel(e);\r\n        }else if(e.target.matches('.delete')){\r\n            deleteItem(e);\r\n        }else if(e.target.matches('li input[name=\"done\"]')){\r\n            \r\n            doneState(e);\r\n        }\r\n        \r\n    } );\r\n    addCategoryForm.addEventListener('submit', setCategory)\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://todolist/./src/domController.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _domController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domController */ \"./src/domController.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_domController__WEBPACK_IMPORTED_MODULE_1__.domController)();\r\n\r\n\n\n//# sourceURL=webpack://todolist/./src/main.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./src/main.js"));
/******/ }
]);