/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./code.ts":
/*!*****************!*\
  !*** ./code.ts ***!
  \*****************/
/***/ (() => {

eval("// This plugin creates 5 rectangles on the screen.\n// const numberOfRectangles = 5\n// This file holds the main code for the plugins. It has access to the *document*.\n// You can access browser APIs such as the network by creating a UI which contains\n// a full browser environment (see documentation).\n// const nodes: SceneNode[] = [];\n// for (let i = 0; i < numberOfRectangles; i++) {\n//   const rect = figma.createRectangle();\n//   rect.x = i * 150;\n//   rect.fills = [{type: 'SOLID', color: {r: 1, g: 0.5, b: 0}}];\n//   figma.currentPage.appendChild(rect);\n//   nodes.push(rect);\n// }\n// figma.currentPage.selection = nodes;\n// figma.viewport.scrollAndZoomIntoView(nodes);\n// Make sure to close the plugin when you're done. Otherwise the plugin will\n// keep running, which shows the cancel button at the bottom of the screen.\nlet pages = [\n    \"Cover\",\n    \"-------------\",\n    \"Style Components\",\n    \"Typography Components\",\n    \"-------------\",\n    \"Design-v1 In Progress\",\n    \"Design-v2 In Progress\",\n    \"Design-v3 In Progress\",\n    \"-------------\",\n    \"Icon/FavIcons\",\n    \"Assets\",\n    \"Discovery\",\n    \"References\",\n    \"Junkyard\",\n];\nlet currentPage = figma.currentPage;\ncurrentPage.name = pages[0];\nfor (let page of pages.slice(1)) {\n    let newPage = figma.createPage();\n    newPage.name = page;\n}\nfigma.notify(\"Pages Created Successfully!\");\nfigma.closePlugin();\n\n\n//# sourceURL=webpack://Figma-Pages/./code.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./code.ts"]();
/******/ 	
/******/ })()
;