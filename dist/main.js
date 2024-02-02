/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/computerPlayer.js":
/*!*******************************!*\
  !*** ./src/computerPlayer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\r\n\r\nconst createComputerPlayer = () => {\r\n  const randomCoords = () => {\r\n    const x = Math.floor(Math.random() * 10);\r\n    const y = Math.floor(Math.random() * 10);\r\n    const trueOrFalse = Math.floor(Math.random() * 2);\r\n    return [x, y, trueOrFalse];\r\n  }\r\n\r\n  const computerPlayer = {\r\n    gameboard: (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(),\r\n    enemy: null,\r\n\r\n    placeRandomlyOnBoard() {\r\n      console.log(this.gameboard.listShips())\r\n      this.gameboard.listShips().forEach((ship) => {\r\n        while (true) {\r\n          let [x, y, trueOrFalse] = randomCoords();\r\n          if (this.gameboard.placeShip(ship, x, y, trueOrFalse)) {\r\n            break;\r\n          }\r\n        }\r\n      })\r\n    },\r\n\r\n    sendRandomAttack() {\r\n      const [x, y] = randomCoords();\r\n      return [x, y];\r\n    }\r\n  }\r\n\r\n  return computerPlayer;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createComputerPlayer);\r\n\n\n//# sourceURL=webpack://odin-battleship/./src/computerPlayer.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\r\n\r\n// createGameboard function creates a gameboard hardcoded to size 10x10\r\n// each cell has 4 states:\r\n//  0: empty\r\n//  1: empty, hit\r\n//  ship: occupied\r\n//  2: occupied, hit\r\n\r\nconst createGameboard = () => {\r\n  const shipList = [\r\n    {\r\n      shipName: 'Carrier',\r\n      shipLength: 5\r\n    },\r\n    {\r\n      shipName: 'Battleship',\r\n      shipLength: 4\r\n    },\r\n    {\r\n      shipName: 'Destroyer',\r\n      shipLength: 3\r\n    },\r\n    {\r\n      shipName: 'Submarine',\r\n      shipLength: 3\r\n    },\r\n    {\r\n      shipName: 'Patrol Boat',\r\n      shipLength: 2\r\n    }\r\n  ];\r\n\r\n  const gameboard = {\r\n    sunkShips: 0,\r\n    board: [\r\n      [0,0,0,0,0,0,0,0,0,0],\r\n      [0,0,0,0,0,0,0,0,0,0],\r\n      [0,0,0,0,0,0,0,0,0,0],\r\n      [0,0,0,0,0,0,0,0,0,0],\r\n      [0,0,0,0,0,0,0,0,0,0],\r\n      [0,0,0,0,0,0,0,0,0,0],\r\n      [0,0,0,0,0,0,0,0,0,0],\r\n      [0,0,0,0,0,0,0,0,0,0],\r\n      [0,0,0,0,0,0,0,0,0,0],\r\n      [0,0,0,0,0,0,0,0,0,0]\r\n    ],\r\n\r\n    listShips() {\r\n      return shipList;\r\n    },\r\n\r\n    shipSunk() {\r\n      this.sunkShips++;\r\n    },\r\n\r\n    gameOver() {\r\n      if (this.sunkShips === 5) {\r\n        return 'Game over!';\r\n      }\r\n    },\r\n\r\n    isValidShipPlacement(shipLength, x_coord, y_coord, isHorizontal) {\r\n      if (x_coord < 0 || y_coord < 0 || x_coord > 9 || y_coord > 9) {\r\n        return; // Please enter a valid set of coordinates. x,y must be >= 0 and <= 9\r\n      } \r\n      \r\n      if (isHorizontal) {\r\n        if (x_coord + shipLength - 1 > 9) {\r\n          return false; // Ship will be out of range\r\n        }\r\n        for (let x = x_coord; x < x_coord + shipLength; x++) {\r\n          if (this.board[y_coord][x] != 0) {\r\n            return false; // position already taken\r\n          }\r\n        }\r\n      } else {\r\n        if (y_coord + shipLength - 1 > 9) {\r\n          return false; // Ship will be out of range\r\n        }\r\n        for (let y = y_coord; y < y_coord + shipLength; y++) {\r\n          if (this.board[y][x_coord] != 0) {\r\n            return false; // position already taken\r\n          }\r\n        }\r\n      }\r\n\r\n      return true;\r\n    },\r\n    \r\n    placeShip(ship, x_coord, y_coord, isHorizontal=true) {\r\n      if (!this.isValidShipPlacement(ship.shipLength, x_coord, y_coord, isHorizontal)) {\r\n        return false; // invalid placement, throw error?\r\n      }\r\n\r\n      const newShip = (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(ship.shipName, ship.shipLength);\r\n\r\n      if (isHorizontal) {\r\n        for (let x = x_coord; x < x_coord + ship.shipLength; x++) {\r\n          this.board[y_coord][x] = newShip; // Update the board\r\n        }\r\n      } else {\r\n        for (let y = y_coord; y < y_coord + ship.shipLength; y++) {\r\n          this.board[y][x_coord] = newShip; // Update the board\r\n        }\r\n      }\r\n      \r\n      return true;\r\n    },\r\n\r\n    isValidAttack(x_coord, y_coord) {\r\n      if (x_coord < 0 || y_coord < 0 || x_coord > 9 || y_coord > 9) {\r\n        return false; // Please enter a valid set of coordinates. x,y must be >= 0 and <= 9\r\n      } else if (this.board[y_coord][x_coord] === 1 || this.board[y_coord][x_coord] === 2) {\r\n        return false; // coord already hit, throw error/retry\r\n      }\r\n\r\n      return true;\r\n    },\r\n\r\n    receiveAttack(x_coord, y_coord) {\r\n      \r\n      if (!this.isValidAttack(x_coord, y_coord)) {\r\n        return false; // invalid attack, throw error, retry\r\n      }\r\n\r\n      if (this.board[y_coord][x_coord] === 0) {\r\n        this.board[y_coord][x_coord] = 1;\r\n        console.log(this.board, x_coord, y_coord)\r\n        return 'Shot missed.';\r\n      } else {\r\n\r\n        this.board[y_coord][x_coord].hit()\r\n\r\n        if (this.board[y_coord][x_coord].isSunk()) {\r\n          this.shipSunk();\r\n          console.log('ship sunk!', this.sunkShips);\r\n        }\r\n\r\n        this.board[y_coord][x_coord] = 2;\r\n        console.log(this.board, x_coord, y_coord)\r\n        return 'Shot hit!'; \r\n      }\r\n    }\r\n\r\n  }\r\n\r\n  return gameboard;\r\n}\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createGameboard);\n\n//# sourceURL=webpack://odin-battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/gameloop.js":
/*!*************************!*\
  !*** ./src/gameloop.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _computerPlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./computerPlayer */ \"./src/computerPlayer.js\");\n\r\n\r\n\r\n// Gameloop\r\n\r\n// initializing player and CPU\r\n\r\nconst player = (0,_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\nconst CPU = (0,_computerPlayer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\nCPU.placeRandomlyOnBoard();\r\nplayer.placeRandomlyOnBoard();\r\n\r\n\r\nwhile (true) {\r\n  // CPU turn\r\n  while (true) {\r\n    let result = player.gameboard.receiveAttack(...CPU.sendRandomAttack())\r\n    if (result) {\r\n      console.log(result);\r\n      break;\r\n    }\r\n  }\r\n\r\n  // Check for CPU win\r\n  if (player.gameboard.sunkShips === 5) {\r\n    console.log('you lose!');\r\n    break;\r\n  }\r\n\r\n  // Player turn\r\n  while (true) {\r\n    let result = CPU.gameboard.receiveAttack(...player.sendAttack())\r\n    if (result) {\r\n      console.log(result);\r\n      break;\r\n    }\r\n  }\r\n\r\n  // Check for player win\r\n  if (CPU.gameboard.sunkShips === 5) {\r\n    console.log('you win!');\r\n    break;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://odin-battleship/./src/gameloop.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\r\n\r\nconst createPlayer = () => {\r\n  const randomCoords = () => {\r\n    const x = Math.floor(Math.random() * 10);\r\n    const y = Math.floor(Math.random() * 10);\r\n    const trueOrFalse = Math.floor(Math.random() * 2);\r\n    return [x, y, trueOrFalse];\r\n  }\r\n\r\n  const player = {\r\n    gameboard: (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(),\r\n    enemy: null,\r\n\r\n    sendAttack() {\r\n      const x_coord = prompt('enter x coord')\r\n      const y_coord = prompt('enter y coord')\r\n      return [x_coord, y_coord];\r\n    },\r\n\r\n    placeRandomlyOnBoard() {\r\n      console.log(this.gameboard.listShips())\r\n      this.gameboard.listShips().forEach((ship) => {\r\n        while (true) {\r\n          let [x, y, trueOrFalse] = randomCoords();\r\n          if (this.gameboard.placeShip(ship, x, y, trueOrFalse)) {\r\n            break;\r\n          }\r\n        }\r\n        \r\n      })\r\n    },\r\n  }\r\n\r\n  return player;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPlayer);\r\n\n\n//# sourceURL=webpack://odin-battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createShip = (shipName, shipLength) => {\r\n  const ship = {\r\n    name: shipName,\r\n    length: shipLength,\r\n    hits: 0,\r\n\r\n    // Method for adding hits:\r\n    hit() {\r\n      this.hits += 1\r\n    },\r\n\r\n    // Bool returning method for whether or not ship is sunk\r\n    isSunk() {\r\n      return this.hits === this.length\r\n    }\r\n  }\r\n\r\n  return ship;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createShip);\n\n//# sourceURL=webpack://odin-battleship/./src/ship.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/gameloop.js");
/******/ 	
/******/ })()
;