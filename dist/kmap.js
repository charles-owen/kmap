(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Kmap"] = factory();
	else
		root["Kmap"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdateKmap"];
/******/ 	window["webpackHotUpdateKmap"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		if (null) script.crossOrigin = null;
/******/ 		document.head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "8350c3d128ae48b16a99";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = "app";
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted
/******/ 			)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire("./index.js")(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_polyfills_all__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/polyfills/all */ "./src/polyfills/all.js");
/* harmony import */ var _src_kmap_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/kmap.scss */ "./src/kmap.scss");
/* harmony import */ var _src_kmap_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_kmap_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_Kmap_Kmap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/Kmap/Kmap */ "./src/Kmap/Kmap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _src_Kmap_Kmap__WEBPACK_IMPORTED_MODULE_2__["Kmap"]; });

// The public-path module must be imported first!
// import './src/public-path.js';
//





/***/ }),

/***/ "./node_modules/classlist-polyfill/src/index.js":
/*!******************************************************!*\
  !*** ./node_modules/classlist-polyfill/src/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * classList.js: Cross-browser full element.classList implementation.
 * 1.1.20170427
 *
 * By Eli Grey, http://eligrey.com
 * License: Dedicated to the public domain.
 *   See https://github.com/eligrey/classList.js/blob/master/LICENSE.md
 */

/*global self, document, DOMException */

/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */

if ("document" in window.self) {

// Full polyfill for browsers with no classList support
// Including IE < Edge missing SVGElement.classList
if (!("classList" in document.createElement("_")) 
	|| document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg","g"))) {

(function (view) {

"use strict";

if (!('Element' in view)) return;

var
	  classListProp = "classList"
	, protoProp = "prototype"
	, elemCtrProto = view.Element[protoProp]
	, objCtr = Object
	, strTrim = String[protoProp].trim || function () {
		return this.replace(/^\s+|\s+$/g, "");
	}
	, arrIndexOf = Array[protoProp].indexOf || function (item) {
		var
			  i = 0
			, len = this.length
		;
		for (; i < len; i++) {
			if (i in this && this[i] === item) {
				return i;
			}
		}
		return -1;
	}
	// Vendors: please allow content code to instantiate DOMExceptions
	, DOMEx = function (type, message) {
		this.name = type;
		this.code = DOMException[type];
		this.message = message;
	}
	, checkTokenAndGetIndex = function (classList, token) {
		if (token === "") {
			throw new DOMEx(
				  "SYNTAX_ERR"
				, "An invalid or illegal string was specified"
			);
		}
		if (/\s/.test(token)) {
			throw new DOMEx(
				  "INVALID_CHARACTER_ERR"
				, "String contains an invalid character"
			);
		}
		return arrIndexOf.call(classList, token);
	}
	, ClassList = function (elem) {
		var
			  trimmedClasses = strTrim.call(elem.getAttribute("class") || "")
			, classes = trimmedClasses ? trimmedClasses.split(/\s+/) : []
			, i = 0
			, len = classes.length
		;
		for (; i < len; i++) {
			this.push(classes[i]);
		}
		this._updateClassName = function () {
			elem.setAttribute("class", this.toString());
		};
	}
	, classListProto = ClassList[protoProp] = []
	, classListGetter = function () {
		return new ClassList(this);
	}
;
// Most DOMException implementations don't allow calling DOMException's toString()
// on non-DOMExceptions. Error's toString() is sufficient here.
DOMEx[protoProp] = Error[protoProp];
classListProto.item = function (i) {
	return this[i] || null;
};
classListProto.contains = function (token) {
	token += "";
	return checkTokenAndGetIndex(this, token) !== -1;
};
classListProto.add = function () {
	var
		  tokens = arguments
		, i = 0
		, l = tokens.length
		, token
		, updated = false
	;
	do {
		token = tokens[i] + "";
		if (checkTokenAndGetIndex(this, token) === -1) {
			this.push(token);
			updated = true;
		}
	}
	while (++i < l);

	if (updated) {
		this._updateClassName();
	}
};
classListProto.remove = function () {
	var
		  tokens = arguments
		, i = 0
		, l = tokens.length
		, token
		, updated = false
		, index
	;
	do {
		token = tokens[i] + "";
		index = checkTokenAndGetIndex(this, token);
		while (index !== -1) {
			this.splice(index, 1);
			updated = true;
			index = checkTokenAndGetIndex(this, token);
		}
	}
	while (++i < l);

	if (updated) {
		this._updateClassName();
	}
};
classListProto.toggle = function (token, force) {
	token += "";

	var
		  result = this.contains(token)
		, method = result ?
			force !== true && "remove"
		:
			force !== false && "add"
	;

	if (method) {
		this[method](token);
	}

	if (force === true || force === false) {
		return force;
	} else {
		return !result;
	}
};
classListProto.toString = function () {
	return this.join(" ");
};

if (objCtr.defineProperty) {
	var classListPropDesc = {
		  get: classListGetter
		, enumerable: true
		, configurable: true
	};
	try {
		objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
	} catch (ex) { // IE 8 doesn't support enumerable:true
		// adding undefined to fight this issue https://github.com/eligrey/classList.js/issues/36
		// modernie IE8-MSW7 machine has IE8 8.0.6001.18702 and is affected
		if (ex.number === undefined || ex.number === -0x7FF5EC54) {
			classListPropDesc.enumerable = false;
			objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
		}
	}
} else if (objCtr[protoProp].__defineGetter__) {
	elemCtrProto.__defineGetter__(classListProp, classListGetter);
}

}(window.self));

}

// There is full or partial native classList support, so just check if we need
// to normalize the add/remove and toggle APIs.

(function () {
	"use strict";

	var testElement = document.createElement("_");

	testElement.classList.add("c1", "c2");

	// Polyfill for IE 10/11 and Firefox <26, where classList.add and
	// classList.remove exist but support only one argument at a time.
	if (!testElement.classList.contains("c2")) {
		var createMethod = function(method) {
			var original = DOMTokenList.prototype[method];

			DOMTokenList.prototype[method] = function(token) {
				var i, len = arguments.length;

				for (i = 0; i < len; i++) {
					token = arguments[i];
					original.call(this, token);
				}
			};
		};
		createMethod('add');
		createMethod('remove');
	}

	testElement.classList.toggle("c3", false);

	// Polyfill for IE 10 and Firefox <24, where classList.toggle does not
	// support the second argument.
	if (testElement.classList.contains("c3")) {
		var _toggle = DOMTokenList.prototype.toggle;

		DOMTokenList.prototype.toggle = function(token, force) {
			if (1 in arguments && !this.contains(token) === !force) {
				return force;
			} else {
				return _toggle.call(this, token);
			}
		};

	}

	testElement = null;
}());

}


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./src/kmap.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js?sourceMap!./src/kmap.scss ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.kmap-cl {\n  position: relative;\n  background: white;\n  margin: 1em auto;\n  max-width: 650px;\n}\n\ndiv.kmap-cl h3 {\n  border-bottom: 1px solid black;\n  font-size: 1.2em;\n  font-family: sans-serif;\n  margin: 1em 0 0.5em 0;\n}\n\ndiv.kmap-cl button {\n  margin: 0;\n  padding: 0.15em 1em;\n  font-size: .9em;\n  min-width: 6em;\n}\n\ndiv.kmap-cl td {\n  cursor: pointer;\n}\n\ndiv.kmap-cl-work {\n  position: relative;\n  display: table;\n  margin: 0 auto;\n  padding: 0;\n  box-sizing: border-box;\n  border: 1px solid black;\n}\n\ndiv.kmap-cl-dlg {\n  position: absolute;\n  background-color: transparent;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  font-family: \"Trebuchet MS\", \"Lucida Grande\", \"Lucida Sans Unicode\", \"Lucida Sans\", sans-serif;\n}\n\ndiv.kmap-cl-dlg > div:first-child {\n  position: absolute;\n  background-color: white;\n  opacity: 0.5;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 2;\n}\n\ndiv.kmap-cl-dlg > div:nth-child(2) {\n  position: relative;\n  top: 50%;\n  opacity: 1;\n  z-index: 10;\n  width: 50%;\n  margin: 0 auto;\n  transform: perspective(1px) translateY(-50%);\n  border: 1px solid black;\n  background: white;\n}\n\ndiv.kmap-cl-dlg > div:nth-child(2) > div:first-child {\n  margin: 0;\n  background: green;\n  color: white;\n  padding: 0.25em;\n  font-size: 1.1em;\n}\n\ndiv.kmap-cl-dlg > div:nth-child(2) > div:nth-child(2) {\n  padding: 0.5em;\n}\n\ndiv.kmap-cl-dlg > div:nth-child(2) > div:nth-child(3) {\n  padding: 0.5em;\n  text-align: right;\n}\n\ndiv.kmap-cl-dlg > div:nth-child(2) > div:nth-child(3) button {\n  width: 8em;\n  padding: 0.5em 1em;\n}\n\ndiv.kmap-cl-work > div:first-child {\n  position: relative;\n  display: table-cell;\n  padding: 1em 0 0 0;\n  vertical-align: top;\n  width: 12em;\n  max-width: 12em;\n  text-align: center;\n  background: green;\n}\n\ndiv.kmap-cl-work > div:first-child button {\n  width: 9em;\n  margin: 0;\n  height: 2em;\n  padding: 0;\n  font-size: 0.9em;\n}\n\ndiv.kmap-cl-work > div:first-child .list {\n  position: absolute;\n  padding: 0;\n  margin: 0;\n  overflow-y: auto;\n  top: 4em;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\ndiv.kmap-cl-work > div:first-child .list .group {\n  position: relative;\n  display: inline-block;\n  box-sizing: border-box;\n  width: 100%;\n  height: 3.2em;\n  font-size: 0.8em;\n  word-wrap: break-word;\n  margin: 0.25em 0;\n  text-align: left;\n  padding: 0.25em;\n  color: white;\n}\n\ndiv.kmap-cl-work > div:first-child .list .group span {\n  position: absolute;\n  display: block;\n  right: 0.25em;\n  bottom: 0.25em;\n}\n\ndiv.kmap-cl-work > div:first-child .list .group a {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  background-image: url(" + escape(__webpack_require__(/*! ./img/x.png */ "./src/img/x.png")) + ");\n}\n\ndiv.kmap-cl-work > div:nth-child(2) {\n  position: relative;\n  display: table-cell;\n  padding: 1em 2em 1em 1em;\n  min-width: 25em;\n}\n\ndiv.kmap-cl-work > div:nth-child(2) canvas {\n  background-color: transparent;\n  position: absolute;\n  z-index: 10;\n  pointer-events: none;\n}\n\ndiv.kmap-cl > div > div:nth-child(2) table {\n  background: none;\n  border-collapse: collapse;\n  box-shadow: none;\n  border: 0;\n}\n\ndiv.kmap-cl > div > div:nth-child(2) table input {\n  width: 3em;\n  text-align: center;\n}\n\ndiv.kmap-cl > div > div:nth-child(2) table tr {\n  border: 0;\n}\n\ndiv.kmap-cl > div > div:nth-child(2) table th,\ndiv.kmap-cl > div > div:nth-child(2) table td {\n  background: white;\n  text-shadow: none;\n  font-weight: normal;\n  color: black;\n  padding: 0.25em;\n  vertical-align: middle;\n}\n\ndiv.kmap-cl > div > div:nth-child(2) table th {\n  border: 0;\n  width: 4em;\n  height: 4em;\n}\n\ndiv.kmap-cl > div > div:nth-child(2) table td {\n  position: relative;\n  border: 1px solid black;\n  width: 4em;\n  height: 4em;\n  vertical-align: middle;\n  text-align: center;\n}\n\ndiv.kmap-cl > div > div:nth-child(2) table td span.minterm {\n  position: absolute;\n  top: 0.15em;\n  left: 0.25em;\n  font-size: 0.75em;\n}\n\ndiv.kmap-cl > div > div:nth-child(2) table td.kmap-cl-selected {\n  background: yellow;\n}\n\ndiv.kmap-cl > div > div:nth-child(2) table tr:first-child th:not(:first-child) {\n  text-align: center;\n  vertical-align: bottom;\n}\n\ndiv.kmap-cl > div > div:nth-child(2) table tr:first-child th:first-child {\n  border: 0;\n  position: relative;\n}\n\ndiv.kmap-cl > div > div:nth-child(2) table tr:first-child th:first-child .kmap-cl-left {\n  position: absolute;\n  bottom: 0;\n  right: 1.5em;\n}\n\ndiv.kmap-cl > div > div:nth-child(2) table tr:first-child th:first-child .kmap-cl-right {\n  position: absolute;\n  bottom: 1.5em;\n  right: 0;\n}\n\ndiv.kmap-cl > div > div:nth-child(2) table tr:first-child th:first-child .kmap-cl-line {\n  width: 4em;\n  height: 1px;\n  background-color: transparent;\n  border-bottom: 1px solid black;\n  -webkit-transform: translate(2em) rotate(45deg) translate(-2em);\n  transform: translate(2em) rotate(45deg) translate(-2em);\n  position: absolute;\n  right: 0;\n  bottom: 0;\n}\n\ndiv.kmap-cl > div > div:nth-child(2) table tr:not(:first-child) th {\n  text-align: right;\n}\n\ndiv.kmap-cl-generator {\n  margin: 0 auto;\n}\n\ndiv.kmap-cl-generator form {\n  max-width: 100%;\n  position: relative;\n}\n\ndiv.kmap-cl-generator p {\n  position: relative;\n  margin: 0.75em 0;\n  padding-top: 0.25em;\n  text-align: left;\n}\n\ndiv.kmap-cl-generator p span {\n  padding-left: 0.5em;\n  font-size: 0.85em;\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\ndiv.kmap-cl-solution a {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  background-image: url(" + escape(__webpack_require__(/*! ./img/x.png */ "./src/img/x.png")) + ");\n}\n\ndiv.kmap-cl-solution button {\n  width: 8em;\n}\n\ndiv.kmap-cl-solution button.kmap-cl-solve {\n  display: inline-block;\n  float: right;\n}\n\ndiv.kmap-cl-solution input[type=\"text\"] {\n  width: 100%;\n  font-size: 0.9em;\n}\n\ndiv.kmap-cl-solution > div {\n  text-align: center;\n  font-size: 1.1em;\n}\n\ndiv.kmap-cl-manual form {\n  display: table;\n  table-layout: fixed;\n  width: 100%;\n}\n\ndiv.kmap-cl-manual form input[type=\"text\"] {\n  width: 90%;\n  font-size: 0.8em;\n}\n\ndiv.kmap-cl-manual form label {\n  font-size: 0.9em;\n}\n\ndiv.kmap-cl-manual form > div {\n  display: table-cell;\n  min-width: 50%;\n  margin: 0;\n  padding: 0;\n}\n\ndiv.kmap-cl-manual form p {\n  margin-top: 0;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, main, module, private, scripts, keywords, author, license, devDependencies, dependencies, default */
/***/ (function(module) {

module.exports = {"name":"kmap","version":"1.0.0","description":"Karnagh Map Editor","main":"dist/kmap.js","module":"index.js","private":false,"scripts":{"build:dev":"npx webpack --config webpack.dev.js","build:prod":"npx webpack --config webpack.prod.js","build:both":"npm run build:dev && npm run build:prod","test":"karma start karma.conf.js","serve":"webpack-dev-server  --config webpack.dev.js --open","build:docs":"documentation build src/Kmap/**/*.js --sort-order alpha -f html -o doc/js"},"keywords":["Education","Circuits","Computer Architecture","Karnagh Maps"],"author":"Charles B. Owen","license":"MIT","devDependencies":{"@babel/core":"^7.2.0","@babel/plugin-transform-runtime":"^7.2.0","@babel/preset-env":"^7.2.0","@babel/runtime":"^7.2.0","babel-loader":"^8.0.4","clean-webpack-plugin":"^0.1.19","copy-webpack-plugin":"^4.6.0","css-loader":"^0.28.11","file-loader":"^1.1.11","hoek":"^6.1.2","html-webpack-include-assets-plugin":"^1.0.6","html-webpack-plugin":"^3.2.0","jasmine-core":"^3.3.0","karma":"^2.0.5","karma-chrome-launcher":"^2.2.0","karma-jasmine":"^1.1.2","karma-jasmine-html-reporter":"^1.4.0","karma-sourcemap-loader":"^0.3.7","karma-webpack-with-fast-source-maps":"^1.10.2","node-sass":"^4.11.0","optimize-css-assets-webpack-plugin":"^4.0.3","resolve-url-loader":"^2.3.1","sass-loader":"^7.1.0","style-loader":"^0.21.0","uglifyjs-webpack-plugin":"^1.3.0","webpack":"^4.27.1","webpack-cli":"^3.1.2","webpack-dev-server":"^3.1.10","webpack-merge":"^4.1.5"},"dependencies":{"classlist-polyfill":"^1.2.0"}};

/***/ }),

/***/ "./src/Kmap/Generator.js":
/*!*******************************!*\
  !*** ./src/Kmap/Generator.js ***!
  \*******************************/
/*! exports provided: Generator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Generator", function() { return Generator; });
/* harmony import */ var _Logic_Minterms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Logic/Minterms */ "./src/Logic/Minterms.js");

/**
 * This object manages the practice generator section.
 * @param main
 * @param element
 * @constructor
 */

var Generator = function Generator(main, element) {
  var _this = this;

  var that = this;
  this.main = main;
  this.minterms = new _Logic_Minterms__WEBPACK_IMPORTED_MODULE_0__["Minterms"]();
  var mintermsSpan;

  if (main.options.fixed) {// var div = '<div class="generator-fixed"><p>Minterms: ' +
    //     '<span class="minterms"></span></p></div>';
    // $(element).html(div);
  } else {
    var div = document.createElement('div');
    div.classList.add('kmap-cl-generator');
    element.appendChild(div); // Heading

    var h3 = document.createElement('h3');
    h3.innerText = 'Minterm Generator';
    div.appendChild(h3);
    var form = document.createElement('form');
    div.appendChild(form);
    var p = document.createElement('p');
    p.innerText = 'Size: ';
    div.appendChild(p);
    var select = document.createElement('select');
    p.appendChild(select);
    var options1 = '';
    var options2 = '';

    for (var s = 2; s <= 4; s++) {
      if (s === +main.options.size) {
        if (main.options.gendontcare) {
          options1 += '<option value="' + s + '">' + s + '</option>';
          options2 += '<option value="' + s + 'd" selected>' + s + " w/don't cares</option>";
        } else {
          options1 += '<option value="' + s + '" selected>' + s + '</option>';
          options2 += '<option value="' + s + 'd">' + s + " w/don't cares</option>";
        }
      } else {
        options1 += '<option value="' + s + '">' + s + '</option>';
        options2 += '<option value="' + s + 'd">' + s + " <span>w/don't cares</span></option>";
      }
    }

    select.innerHTML = options1 + options2;
    p.appendChild(document.createTextNode(' '));
    var button = document.createElement('button');
    button.innerText = 'Generate';
    p.appendChild(button);
    p.appendChild(document.createTextNode(' '));
    mintermsSpan = document.createElement('span'); // minterms.classList.add('minterms');

    p.appendChild(mintermsSpan);
    button.addEventListener('click', function (event) {
      event.preventDefault();

      _this.generate();
    });
    select.addEventListener('change', function (event) {
      event.preventDefault();
      var val = select.value;
      var newSize = parseInt(val);
      main.options.gendontcare = val.match(/d$/) !== null;
      main.newSize(newSize);
    });
  }
  /**
   * Generate a new set of minterms with optional don't cares
   */


  this.generate = function () {
    this.minterms.size = this.main.options.size;

    if (this.main.options.gendontcare) {
      var dcMax = 8;

      switch (this.main.options.size) {
        case 2:
          dcMax = 2;
          break;

        case 3:
          dcMax = 4;
          break;
      }

      this.minterms.generate_bounded(0.5, 1, Math.pow(2, this.main.options.size) - 1, 0.2, 1, dcMax);
      mintermsSpan.innerHTML = this.minterms.list(true) + "<br>X=" + this.minterms.list_dontcare(true);
      this.main.newMinterms(this.minterms);
    } else {
      this.minterms.generate_bounded(0.5, 1, Math.pow(2, this.main.options.size) - 1);
      mintermsSpan.innerHTML = this.minterms.list(true);
      this.main.newMinterms(this.minterms);
    }
  };

  this.set = function (minterms, dontcare) {
    this.minterms.set_from(minterms, dontcare);

    if (this.minterms.dontcare.length > 0) {
      mintermsSpan.innerHTML = this.minterms.list(true) + "<br>X=" + this.minterms.list_dontcare(true);
    } else {
      mintermsSpan.innerHTML = this.minterms.list(true);
    }

    main.newMinterms(this.minterms);
  };
};

/***/ }),

/***/ "./src/Kmap/Group.js":
/*!***************************!*\
  !*** ./src/Kmap/Group.js ***!
  \***************************/
/*! exports provided: Group */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return Group; });
/**
 * A single group
 * @param groups Kmap.Group object
 * @param list List to add this item to
 * @param selected Minterms that are selected
 * @param color Color to draw item
 * @constructor
 */
var Group = function Group(groups, list, selected, color) {
  var _this = this;

  var that = this;
  this.groups = groups;
  this.selected = selected;
  this.color = color;

  if (list === null) {
    return;
  }

  var lst = '';
  var first = true;

  for (var i = 0; i < selected.length; i++) {
    if (!first) {
      lst += ',';
    } else {
      first = false;
    }

    if (i === 8) {
      lst += '<br/>';
    }

    lst += selected[i];
  } // var div = $('<div class="group">' + lst + '</div>');


  var div = document.createElement('div');
  div.classList.add('group');
  div.innerHTML = lst; // var span = $('<span></span>');
  // div.append(span);

  var span = document.createElement('span');
  div.appendChild(span); // var a = $('<a href="javascript:;"></a>');
  // span.append(a);

  var a = document.createElement('a');
  span.appendChild(a);
  list.appendChild(div);
  a.addEventListener('click', function (event) {
    event.preventDefault();
    list.removeChild(div);
    groups.remove(_this);
  });
  div.style.backgroundColor = color; // div.css("background-color", color);
};

Group.prototype.draw = function (ctx, wid, hit, insetDepth) {
  var inset = 15;
  var spacing = 10;
  var cols, rows, mapR, mapC, max;

  switch (this.groups.main.options.size) {
    case 2:
      cols = 2;
      rows = 2;
      mapR = [0, 1, 0, 1];
      mapC = [0, 0, 1, 1];
      max = 4;
      break;

    case 3:
      cols = 4;
      rows = 2;
      mapR = [0, 1, 0, 1, 0, 1, 0, 1];
      mapC = [0, 0, 1, 1, 3, 3, 2, 2];
      max = 8;
      break;

    case 4:
      cols = 4;
      rows = 4;
      mapR = [0, 1, 3, 2, 0, 1, 3, 2, 0, 1, 3, 2, 0, 1, 3, 2];
      mapC = [0, 0, 0, 0, 1, 1, 1, 1, 3, 3, 3, 3, 2, 2, 2, 2];
      max = 16;
      break;
  }

  var cnt = this.selected.length;

  if (cnt == max) {
    // We are wrapping the whole thing
    this.drawGroup(ctx, 0, 0, wid, hit, inset + spacing * insetDepth);
    return;
  }

  if (cnt == 1) {
    var c1 = mapC[this.selected[0]];
    var r1 = mapR[this.selected[0]];
    this.drawGroup(ctx, c1 * wid / cols, r1 * hit / rows, wid / cols, hit / rows, inset + spacing * insetDepth);
  } else if (cnt == 2) {
    var c1 = mapC[this.selected[0]];
    var r1 = mapR[this.selected[0]];
    var c2 = mapC[this.selected[1]];
    var r2 = mapR[this.selected[1]];

    if (r1 == r2) {
      // Horizontal
      if (c2 < c1) {
        var t = c1;
        c1 = c2;
        c2 = t;
      }

      if (c2 - c1 > 1) {
        // Not adjacent!
        this.drawGroup(ctx, c2 * wid / cols, r1 * hit / rows, wid * 2 / cols, hit / rows, inset + spacing * insetDepth);
        this.drawGroup(ctx, (c1 - 1) * wid / cols, r1 * hit / rows, wid * 2 / cols, hit / rows, inset + spacing * insetDepth);
      } else {
        this.drawGroup(ctx, c1 * wid / cols, r1 * hit / rows, wid * 2 / cols, hit / rows, inset + spacing * insetDepth);
      }
    } else {
      // Vertical
      if (r2 < r1) {
        var t = r1;
        r1 = r2;
        r2 = t;
      }

      if (r2 - r1 > 1) {
        // Not adjacent
        this.drawGroup(ctx, c1 * wid / cols, r2 * hit / rows, wid / cols, hit * 2 / rows, inset + spacing * insetDepth);
        this.drawGroup(ctx, c1 * wid / cols, (r1 - 1) * hit / rows, wid / cols, hit * 2 / rows, inset + spacing * insetDepth);
      } else {
        this.drawGroup(ctx, c1 * wid / cols, r1 * hit / rows, wid / cols, hit * 2 / rows, inset + spacing * insetDepth);
      }
    }
  } else if (cnt == 4) {
    var c1 = mapC[this.selected[0]];
    var r1 = mapR[this.selected[0]];
    var c2 = mapC[this.selected[1]];
    var r2 = mapR[this.selected[1]];
    var c3 = mapC[this.selected[2]];
    var r3 = mapR[this.selected[2]];
    var c4 = mapC[this.selected[3]];
    var r4 = mapR[this.selected[3]]; // Are all in same row?

    if (r1 == r2 && r2 == r3 && r3 == r4) {
      // Size 4 cover in the same row
      this.drawGroup(ctx, c1 * wid / cols, r1 * hit / rows, wid * 4 / cols, hit / rows, inset + spacing * insetDepth);
    } else if (c1 == c2 && c2 == c3 && c3 == c4) {
      // Size 4 cover in the same column
      this.drawGroup(ctx, c1 * wid / cols, r1 * hit / rows, wid / cols, hit * 4 / rows, inset + spacing * insetDepth);
    } else {
      // This must be square
      var wid4 = wid * 2 / cols;
      var hit4 = hit * 2 / rows;

      if (c1 == 0 && c2 == 0 && c3 == 3 && c4 == 3) {
        // This is a left/right side split
        if (r1 == 0 && r2 == 3 && r3 == 0 && r4 == 3) {
          // Four corner split
          this.drawGroup(ctx, -1 * wid / cols, -1 * hit / rows, wid4, hit4, inset + spacing * insetDepth);
          this.drawGroup(ctx, -1 * wid / cols, 3 * hit / rows, wid4, hit4, inset + spacing * insetDepth);
          this.drawGroup(ctx, 3 * wid / cols, -1 * hit / rows, wid4, hit4, inset + spacing * insetDepth);
          this.drawGroup(ctx, 3 * wid / cols, 3 * hit / rows, wid4, hit4, inset + spacing * insetDepth);
        } else {
          if (r1 > r2) {
            var t = r1;
            r1 = r2;
            r2 = t;
          }

          this.drawGroup(ctx, -1 * wid / cols, r1 * hit / rows, wid4, hit4, inset + spacing * insetDepth);
          this.drawGroup(ctx, 3 * wid / cols, r1 * hit / rows, wid4, hit4, inset + spacing * insetDepth);
        }
      } else if (r1 == 0 && r2 == 3) {
        if (c1 > c3) {
          var t = c1;
          c1 = c3;
          c3 = t;
        } // This is a top-bottom split


        this.drawGroup(ctx, c1 * wid / cols, -1 * hit / rows, wid4, hit4, inset + spacing * insetDepth);
        this.drawGroup(ctx, c1 * wid / cols, 3 * hit / rows, wid4, hit4, inset + spacing * insetDepth);
      } else {
        // Simple square!
        if (c1 > c3) {
          var t = c1;
          c1 = c3;
          c3 = t;
        }

        if (r1 > r2) {
          var t = r1;
          r1 = r2;
          r2 = t;
        }

        this.drawGroup(ctx, c1 * wid / cols, r1 * hit / rows, wid4, hit4, inset + spacing * insetDepth);
      }
    }
  } else if (cnt == 8) {
    var c1 = mapC[this.selected[0]];
    var r1 = mapR[this.selected[0]];
    var c2 = mapC[this.selected[1]];
    var r2 = mapR[this.selected[1]];
    var c3 = mapC[this.selected[2]];
    var r3 = mapR[this.selected[2]];
    var c4 = mapC[this.selected[3]];
    var r4 = mapR[this.selected[3]];
    var c5 = mapC[this.selected[4]];
    var r5 = mapR[this.selected[4]];

    if (c1 == c2 && c2 == c3 && c3 == c4) {
      var wid8 = wid * 2 / cols;
      var hit8 = hit * 4 / rows; // Vertical layout

      if (c1 == 0 && c5 == 3) {
        // Left/right split
        this.drawGroup(ctx, -1 * wid / cols, 0 * hit / rows, wid8, hit8, inset + spacing * insetDepth);
        this.drawGroup(ctx, 3 * wid / cols, 0 * hit / rows, wid8, hit8, inset + spacing * insetDepth);
      } else {
        if (c1 > c5) {
          c1 = c5;
        }

        this.drawGroup(ctx, c1 * wid / cols, 0 * hit / rows, wid8, hit8, inset + spacing * insetDepth);
      }
    } else {
      //Horizontal layout
      var wid8 = wid * 4 / cols;
      var hit8 = hit * 2 / rows;

      if (r2 - r1 > 1) {
        // Split
        this.drawGroup(ctx, 0 * wid / cols, -1 * hit / rows, wid8, hit8, inset + spacing * insetDepth);
        this.drawGroup(ctx, 0 * wid / cols, 3 * hit / rows, wid8, hit8, inset + spacing * insetDepth);
      } else {
        if (r1 > r2) {
          r1 = r2;
        }

        this.drawGroup(ctx, 0 * wid / cols, r1 * hit / rows, wid8, hit8, inset + spacing * insetDepth);
      }
    }
  }
};

Group.prototype.drawGroup = function (ctx, x1, y1, wid, hit, inset) {
  var x = x1 + inset;
  var y = y1 + inset;
  var width = wid - inset * 2 - 1;
  var height = hit - inset * 2 - 1;
  var radius = 30;
  ctx.lineWidth = 7;
  ctx.strokeStyle = this.color;
  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  ctx.lineTo(x, y + height - radius);
  ctx.arcTo(x, y + height, x + radius, y + height, radius);
  ctx.lineTo(x + width - radius, y + height);
  ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
  ctx.lineTo(x + width, y + radius);
  ctx.arcTo(x + width, y, x + width - radius, y, radius);
  ctx.lineTo(x + radius, y);
  ctx.arcTo(x, y, x, y + radius, radius);
  ctx.stroke();
};

/***/ }),

/***/ "./src/Kmap/Groups.js":
/*!****************************!*\
  !*** ./src/Kmap/Groups.js ***!
  \****************************/
/*! exports provided: Groups */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Groups", function() { return Groups; });
/* harmony import */ var _MessageDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MessageDialog */ "./src/Kmap/MessageDialog.js");
/* harmony import */ var _Group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Group */ "./src/Kmap/Group.js");


/**
 * The groups area of the editor
 */

var Groups = function Groups(main, sel) {
  var _this = this;

  var that = this;
  this.main = main;
  var list;

  var initialize = function initialize() {
    // var button = $("<button>Cover</button>");
    // $(sel).append(button);
    //
    // var list = $('<div class="list"></div>');
    // $(sel).append(list);
    var button = document.createElement('button');
    sel.appendChild(button);
    button.innerText = 'Cover';
    list = document.createElement('div');
    list.classList.add('list');
    sel.appendChild(list);
    _this.groups = [];
    _this.colorN = 0;
    button.addEventListener('click', function (event) {
      event.preventDefault();
      var selected = main.work.map.selected;

      if (main.options.strict) {
        // Determine how many common bits there are
        var and1 = Math.pow(2, main.options.size) - 1;
        var and2 = and1;

        for (var i = 0; i < selected.length; i++) {
          var _sel = selected[i];
          and1 &= _sel;
          and2 &= ~_sel;
        }

        var or = and1 | and2;
        var bits = 0;
        var size = main.options.size;

        for (var _i = 0; _i < size; _i++) {
          if ((or & 1) == 1) {
            bits++;
          }

          or >>= 1;
        } // Test for valid


        var valid = true;

        switch (selected.length) {
          case 1:
            break;

          case 2:
            valid = bits == size - 1;
            break;

          case 4:
            valid = bits == size - 2;
            break;

          case 8:
            valid = bits == size - 3;
            break;

          case 16:
            break;

          default:
            var html = '<p>Grouping must be of some power of two minterms.</p><p>The only ' + 'groupings possible are 1, 2, 4, 8, or 16, depending on the size of the ' + 'Karnaugh map.</p>';
            var dlg = new _MessageDialog__WEBPACK_IMPORTED_MODULE_0__["MessageDialog"](main, "You can't do that", html);
            dlg.open();
            return;
        }

        if (!valid) {
          var _html = '<p>Your minterm grouping is invalid.</p><p>Groupings must be such ' + 'that there are bits in common. This means the groupings must be a rectangle ' + 'on the Karnaugh map. This can be a 1 by 4 rectangle or a 2 by 2 rectangle for ' + 'a grouping of 4, for example. Note that the map does <em>wrap around</em> at' + ' the edges, so the right side is adjacent to the left side, for example.</p>';

          var _dlg = new _MessageDialog__WEBPACK_IMPORTED_MODULE_0__["MessageDialog"](main, "You can't do that", _html);

          _dlg.open();

          return;
        } //
        // Ensure this group does not already exist
        //


        for (var _i2 = 0; _i2 < that.groups.length && valid; _i2++) {
          if (that.groups[_i2].selected.length === selected.length) {
            var ok = false;

            for (var j = 0; j < that.groups[_i2].selected.length; j++) {
              if (that.groups[_i2].selected[j] !== selected[j]) {
                ok = true;
                break;
              }
            }

            if (!ok) {
              valid = false;
              var _html2 = '<p>This cover already exists.</p>';

              var _dlg2 = new _MessageDialog__WEBPACK_IMPORTED_MODULE_0__["MessageDialog"](main, "You can't do that", _html2);

              _dlg2.open();

              return;
            }
          }
        }
      }

      _this.add_group(selected);

      _this.drawGroups();

      main.work.map.clear();
    });
  };
  /**
   * Add a new group (cover)
   * @param minterms Array of minterms in the group
   */


  this.add_group = function (minterms) {
    var group = new _Group__WEBPACK_IMPORTED_MODULE_1__["Group"](this, list, minterms, this.colors[this.colorN]);
    this.colorN = (this.colorN + 1) % this.colors.length;
    this.groups.push(group);
  };
  /**
   * Draw all of the groups on the canvas
   */


  Groups.prototype.drawGroups = function () {
    var canvas = main.work.map.get_canvas();
    var c = canvas;
    var ctx = c.getContext("2d");
    var wid = c.width;
    var hit = c.height;
    ctx.clearRect(0, 0, wid, hit);
    var size = main.options.size;
    var counter = [];

    for (var i = 0; i < Math.pow(2, size); i++) {
      counter.push(0);
    }

    for (var i = 0; i < this.groups.length; i++) {
      var group = this.groups[i];
      var max = 1;

      for (var j = 0; j < group.selected.length; j++) {
        counter[group.selected[j]]++;

        if (counter[group.selected[j]] > max) {
          max = counter[group.selected[j]];
        }
      }

      group.draw(ctx, wid, hit, max);
    }
  };

  this.clear = function () {
    list.innerHTML = '';
    this.colorN = 0;
    this.groups = [];
    this.drawGroups();
  };

  this.remove = function (group) {
    for (var i = 0; i < this.groups.length; i++) {
      if (this.groups[i] === group) {
        this.groups.splice(i, 1);
      }
    }

    this.drawGroups();
  };

  initialize();
  /*
   '<button>Group</button>' +
   '            <div class="list">' +
   '            <div class="group">' +
   '            0,1,2,3,4,5,6,7,8, 9,10,11,12,13,14,15' +
   '        <span><a href="javascript:;"></a><img src="images/x.png"></a></span>' +
   '            </div>' +
   '            <div class="group">' +
   '            0,1,2,3,4,5,6,7,8, 9,10,11,12,13,14,15' +
   '        <span><a href="javascript:;"></a><img src="images/x.png"></a></span>' +
   '            </div>' +
   '            <div class="group">' +
   '            0,1,2,3,4,5,6,7,8, 9,10,11,12,13,14,15' +
   '        <span><a href="javascript:;"></a><img src="images/x.png"></a></span>' +
   '            </div>' +
   '            <div class="group">' +
   '            0,1,2,3,4,5,6,7,8, 9,10,11,12,13,14,15' +
   '        <span><a href="javascript:;"></a><img src="images/x.png"></a></span> ' +
   '           </div>' +
   '            <div class="group">' +
   '            0,1,2,3,4,5,6,7,8, 9,10,11,12,13,14,15' +
   '        <span><a href="javascript:;"></a><img src="images/x.png"></a></span>' +
   '            </div>' +
   '            </div>' +
     */
};
Groups.prototype.colors = ["#0000FF", "#808088", "#FF8800", "#008080", "#BDB76B", "#800000", "#00FF88", "#778899", "#FFA500", "#9ACD32", "#4682B4"];

/***/ }),

/***/ "./src/Kmap/Kmap.js":
/*!**************************!*\
  !*** ./src/Kmap/Kmap.js ***!
  \**************************/
/*! exports provided: Kmap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Kmap", function() { return Kmap; });
/* harmony import */ var _Options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Options */ "./src/Kmap/Options.js");
/* harmony import */ var _Utility_Ready__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utility/Ready */ "./src/Kmap/Utility/Ready.js");
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Main */ "./src/Kmap/Main.js");



/**
 * Create an instance of Kmap Karnaugh Map.
 * @constructor
 */

var Kmap = function Kmap(sel, options) {
  var _this = this;

  //
  // Master set of the version
  //
  var PACKAGE = __webpack_require__(/*! ../../package.json */ "./package.json");

  this.version = PACKAGE.version; // The Options object that manages user options

  this.options = new _Options__WEBPACK_IMPORTED_MODULE_0__["Options"](options); // A collection of Main objects.

  var mains = [];

  this.start = function () {
    _Utility_Ready__WEBPACK_IMPORTED_MODULE_1__["Ready"].go(function () {
      _this.startNow();
    });
  };
  /**
   * Start Kmap running now. Does not wait for document ready.
   */


  this.startNow = function () {
    if (sel instanceof Element) {
      var main = new _Main__WEBPACK_IMPORTED_MODULE_2__["Main"](_this, sel);
      mains.push(main);
    } else {
      var elements = document.querySelectorAll(sel);

      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        var _main = new _Main__WEBPACK_IMPORTED_MODULE_2__["Main"](_this, element);

        mains.push(_main);
      }
    }

    if (mains.length === 1) {
      return mains[0];
    }

    return null;
  };
};

/***/ }),

/***/ "./src/Kmap/Main.js":
/*!**************************!*\
  !*** ./src/Kmap/Main.js ***!
  \**************************/
/*! exports provided: Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return Main; });
/* harmony import */ var _Work__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Work */ "./src/Kmap/Work.js");
/* harmony import */ var _Generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Generator */ "./src/Kmap/Generator.js");
/* harmony import */ var _Solution__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Solution */ "./src/Kmap/Solution.js");
/* harmony import */ var _Manual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Manual */ "./src/Kmap/Manual.js");




/**
 * Main window management object
 * @param kmap Kmap object (parent)
 * @param element The DOM element to use
 * @constructor
 */

var Main = function Main(kmap, element) {
  var _this = this;

  this.options = kmap.options; // Ensure empty and add the kmap-cl class

  element.innerHTML = '';
  element.classList.add('kmap-cl');
  this.element = element;
  this.work = null;
  this.generator = null;
  this.solution = null;
  this.manual = null;

  this.initialize = function () {
    if (_this.options.generator) {
      _this.generator = new _Generator__WEBPACK_IMPORTED_MODULE_1__["Generator"](_this, element);
    }

    if (_this.options.manual) {
      _this.manual = new _Manual__WEBPACK_IMPORTED_MODULE_3__["Manual"](_this, element);
    }

    if (_this.options.map) {
      _this.work = new _Work__WEBPACK_IMPORTED_MODULE_0__["Work"](_this, element);
    }

    if (_this.options.solution) {
      _this.solution = new _Solution__WEBPACK_IMPORTED_MODULE_2__["Solution"](_this, element);
    } // Generate initial minterms


    if (_this.generator !== null) {
      if (_this.options.minterms.length === 0) {
        _this.generator.generate();
      } else {
        _this.generator.set(_this.config.minterms);
      }
    }
  };

  this.newMinterms = function (minterms) {
    if (this.solution !== null) {
      this.solution.clear();
    }

    this.options.minterms = minterms.minterms.slice();
    this.options.dontcare = minterms.dontcare.slice();

    if (this.work !== null) {
      this.work.render();
    }
  };

  this.newSize = function (size) {
    this.options.size = size;

    if (this.generator !== null) {
      this.generator.generate();
    }
  };

  this.initialize();
};

/***/ }),

/***/ "./src/Kmap/Manual.js":
/*!****************************!*\
  !*** ./src/Kmap/Manual.js ***!
  \****************************/
/*! exports provided: Manual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Manual", function() { return Manual; });
/**
 * Manual entry of minterms and don't cares support
 * @param main Main object
 * @param element Element we are adding this component to
 * @constructor
 */
var Manual = function Manual(main, element) {
  var that = this;
  var labels = main.options.labels;
  var manualMinterms, manualDontCares, manualVariables;

  var initialize = function initialize() {
    var div = document.createElement('div');
    div.classList.add('kmap-cl-manual');
    element.appendChild(div);
    var h3 = document.createElement('h3');
    h3.innerHTML = 'Manual Entry';
    div.appendChild(h3); // var form = '<form><div class="left">' +
    //     '<p><label for="manual-minterms">Minterms: </label><br><input type="text" id="manual-minterms" spellcheck="false"></p>' +
    //     '<p><label for="manual-dontcares">Don\'t cares: </label><br><input type="text" id="manual-dontcares" spellcheck="false"></p>' +
    //     '<p><button>Take</button></p>' +
    //     '</div><div class="right">' +
    //     '<p><label for="manual-variables">Labels: </label><br><input type="text" id="manual-variables" value="' +
    //     labels + '" spellcheck="false"></p>' +
    //     '</div></form>';

    var form = document.createElement('form');
    div.appendChild(form); //
    // Left div
    //

    var left = document.createElement('div');
    form.appendChild(left); // <p><label for="manual-minterms">Minterms: </label><br><input type="text" id="manual-minterms" spellcheck="false"></p>

    var p = document.createElement('p');
    left.appendChild(p);
    var label = document.createElement('label');
    p.appendChild(label);
    label.innerText = 'Minterms: ';
    label.appendChild(document.createElement('br'));
    manualMinterms = document.createElement('input');
    manualMinterms.setAttribute('type', 'text');
    manualMinterms.setAttribute('spellcheck', 'false');
    label.appendChild(manualMinterms); // <p><label for="manual-dontcares">Don\'t cares: </label><br><input type="text" id="manual-dontcares" spellcheck="false"></p>

    p = document.createElement('p');
    left.appendChild(p);
    label = document.createElement('label');
    p.appendChild(label);
    label.innerText = 'Don\'t cares: ';
    label.appendChild(document.createElement('br'));
    manualDontCares = document.createElement('input');
    manualDontCares.setAttribute('type', 'text');
    manualDontCares.setAttribute('spellcheck', 'false');
    label.appendChild(manualDontCares); // <p><button>Take</button></p>

    p = document.createElement('p');
    left.appendChild(p);
    var take = document.createElement('button');
    p.appendChild(take);
    take.innerText = 'Take'; //
    // Right div
    //

    var right = document.createElement('div');
    form.appendChild(right); // <p><label for="manual-variables">Labels: </label><br><input type="text" id="manual-variables" value="' +
    // labels + '" spellcheck="false"></p>

    p = document.createElement('p');
    right.appendChild(p);
    label = document.createElement('label');
    p.appendChild(label);
    label.innerText = 'Labels: ';
    label.appendChild(document.createElement('br'));
    manualVariables = document.createElement('input');
    manualVariables.setAttribute('type', 'text');
    manualVariables.setAttribute('spellcheck', 'false');
    label.appendChild(manualVariables);
    manualVariables.value = labels;
    take.addEventListener('click', function (event) {
      event.preventDefault();
      var mintermslist = parse(manualMinterms.value);
      var dontcarelist = parse(manualDontCares.value); // Get the labels, stripping any HTML tags just in case

      var labels = manualVariables.value.replace(/(<([^>]+)>)/ig, "");
      main.options.labels = labels.split(",");
      main.generator.set(mintermslist, dontcarelist);
    });
  };

  function parse(input) {
    var reM = /m/g;
    var re = /[, ]+/g;
    var items = input.replace(reM, '').split(re);
    var ret = [];
    items.forEach(function (item) {
      if (item !== "") {
        ret.push(parseInt(item));
      }
    });
    return ret;
  }

  initialize();
};

/***/ }),

/***/ "./src/Kmap/Map.js":
/*!*************************!*\
  !*** ./src/Kmap/Map.js ***!
  \*************************/
/*! exports provided: Map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return Map; });
/* harmony import */ var _MessageDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MessageDialog */ "./src/Kmap/MessageDialog.js");

/**
 * The actual Karnaugh Map
 * @param main
 * @param element
 * @constructor
 */

var Map = function Map(main, element) {
  var _this = this;

  this.main = main;
  this.element = element;
  this.selected = [];
  var topLeft, botRight, canvas;

  var initialize = function initialize() {
    var table = document.createElement('table');
    table.classList.add('kmap');
    element.appendChild(table); // Make a local copy of the labels, converting
    // _1 to <sub>1</sub>

    var labels = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = main.options.labels[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var label = _step.value;
        labels.push(label.replace(/_([a-zA-Z0-9])*/g, '<sub>$1</sub>'));
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    var left, right, rest, colheads;

    if (+main.options.size === 2) {
      var A = labels[0];
      var B = labels[1];
      left = B;
      right = A;
      rest = "<th>" + A + "'</th><th>" + A + "</th>";
      colheads = [B + "'", B];
    } else if (+main.options.size === 3) {
      var _A = labels[0];
      var _B = labels[1];
      var C = labels[2];
      left = C;
      right = _A + _B;
      rest = "<th>" + _A + "'" + _B + "'</th><th>" + _A + "'" + _B + "</th><th>" + _A + _B + "</th><th>" + _A + _B + "'</th>";
      colheads = [C + "'", C];
    } else {
      var _A2 = labels[0];
      var _B2 = labels[1];
      var _C = labels[2];
      var D = labels[3];
      left = _C + D;
      right = _A2 + _B2;
      rest = "<th>" + _A2 + "'" + _B2 + "'</th><th>" + _A2 + "'" + _B2 + "</th><th>" + _A2 + _B2 + "</th><th>" + _A2 + _B2 + "'</th>";
      colheads = [_C + "'" + D + "'", _C + "'" + D, _C + D, _C + D + "'"];
    }
    /*
     * Top row first
     */


    var tr = document.createElement('tr');
    tr.innerHTML = '<th><div class="kmap-cl-left">' + left + '</div><div class="kmap-cl-line"></div><div class="kmap-cl-right">' + right + '</div></th>' + rest;
    table.appendChild(tr);
    /*
     * Rest of the table
     */

    var rows = +main.options.size === 4 ? 4 : 2;
    var cols = +main.options.size === 2 ? 2 : 4;

    for (var r = 1; r <= rows; r++) {
      tr = document.createElement('tr');
      tr.innerHTML = '<th>' + colheads[r - 1] + '</th>';

      for (var c = 1; c <= cols; c++) {
        var td = make_cell(c, r);
        tr.appendChild(td);

        if (r === 1 && c === 1) {
          topLeft = td;
        } else if (r === rows && c === cols) {
          botRight = td;
        }
      }

      table.appendChild(tr);
    }

    canvas = document.createElement('canvas');
    canvas.setAttribute('width', '1000');
    canvas.setAttribute('height', '1000');
    _this.canvas = canvas;
    window.addEventListener('resize', function () {
      set_canvas();
    });
    element.appendChild(canvas);
    set_canvas();
  };

  this.get_canvas = function () {
    return this.canvas;
  };

  function set_canvas() {
    var tl = {
      left: topLeft.offsetLeft,
      top: topLeft.offsetTop
    };
    var br = {
      left: botRight.offsetLeft,
      top: botRight.offsetTop
    };
    canvas.style.top = tl.top + 'px';
    canvas.style.left = tl.left + 'px';
    canvas.style.width = br.left - tl.left + botRight.offsetWidth + 'px';
    canvas.style.height = br.top - tl.top + botRight.offsetHeight + 'px';
  }

  var make_cell = function make_cell(c, r) {
    var td = document.createElement('td');
    var minterm = to_minterm(c, r);
    var bit = '0';

    for (var i = 0; i < main.options.minterms.length; i++) {
      if (minterm === +main.options.minterms[i]) {
        bit = '1';
        break;
      }
    }

    for (i = 0; i < main.options.dontcare.length; i++) {
      if (minterm === +main.options.dontcare[i]) {
        bit = 'X';
        break;
      }
    }

    if (main.options.labelMinterms) {
      td.innerHTML = '<span class="minterm">m' + minterm + '</span>' + bit;
    } else {
      td.innerHTML = bit;
    }

    td.addEventListener('click', function (event) {
      event.preventDefault();

      if (_this.main.options.strict && bit === '0') {
        var html = '<p>You are only allowed to select cells that are either true ' + 'or set to don\'t care.</p><p>We are grouping minterms that all are true ' + 'so we can minimize the circuit. So, only true cells can be grouped.</p>';
        var dlg = new _MessageDialog__WEBPACK_IMPORTED_MODULE_0__["MessageDialog"](main, "You can't do that", html);
        dlg.open();
        return;
      }

      if (td.classList.contains("kmap-cl-selected")) {
        td.classList.remove("kmap-cl-selected");

        if (is_selected(minterm)) {
          _this.selected.splice(n, 1);
        }
      } else {
        td.classList.add("kmap-cl-selected");

        if (!is_selected(minterm)) {
          _this.selected.push(minterm);

          _this.selected.sort(function (a, b) {
            return a - b;
          });
        }
      }
    });
    return td;
  };

  var to_minterm = function to_minterm(c, r) {
    var map;

    if (+_this.main.options.size === 2) {
      map = [[0, 2], [1, 3]];
    } else if (+_this.main.options.size === 3) {
      map = [[0, 2, 6, 4], [1, 3, 7, 5]];
    } else {
      map = [[0, 4, 12, 8], [1, 5, 13, 9], [3, 7, 15, 11], [2, 6, 14, 10]];
    }

    return map[r - 1][c - 1];
  };

  var is_selected = function is_selected(minterm) {
    return _this.selected.indexOf(minterm) > -1; //
  };

  this.clear = function () {
    this.selected = [];
    var tds = this.element.querySelectorAll('td');
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = tds[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var td = _step2.value;
        td.classList.remove('kmap-cl-selected');
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  };

  initialize();
};

/***/ }),

/***/ "./src/Kmap/MessageDialog.js":
/*!***********************************!*\
  !*** ./src/Kmap/MessageDialog.js ***!
  \***********************************/
/*! exports provided: MessageDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageDialog", function() { return MessageDialog; });
/**
 * The standard Message dialog box.
 *
 * Pretty minimalist dialog box
 *
 * @param main The Main object
 * @param title Title for the dialog box
 * @param body Body HTML to put in the dialog box
 * @constructor
 */
var MessageDialog = function MessageDialog(main, title, body) {
  var div = null;

  this.open = function () {
    // The top level dialog element
    div = document.createElement('div');
    div.classList.add('kmap-cl-dlg');
    main.element.appendChild(div); // The mask

    var mask = document.createElement('div');
    div.appendChild(mask); // The dialog box itself

    var dlg = document.createElement('div');
    div.appendChild(dlg); // Title bar

    var tb = document.createElement('div');
    dlg.appendChild(tb);
    tb.innerText = title; // Body

    var db = document.createElement('div');
    dlg.appendChild(db);
    db.innerHTML = body; // Controls

    var controls = document.createElement('div');
    dlg.appendChild(controls);
    var ok = document.createElement('button');
    controls.appendChild(ok);
    ok.innerText = 'Ok';
    ok.addEventListener('click', function (event) {
      event.preventDefault();

      if (div !== null) {
        main.element.removeChild(div);
        div = null;
      }
    });
  };
};

/***/ }),

/***/ "./src/Kmap/Options.js":
/*!*****************************!*\
  !*** ./src/Kmap/Options.js ***!
  \*****************************/
/*! exports provided: Options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Options", function() { return Options; });
/**
 * User interface options.
 *
 * Options can be passed as a Javascript Object, JSON, or base64-encoded JSON
 *
 * @param options User provided options that override the default values.
 * @constructor
 */
var Options = function Options(options) {
  options = options ? options : {};

  if (options !== Object(options)) {
    if (options.substr(0, 1) === '{') {
      options = JSON.parse(options);
    } else {
      // Not JSON, must be base64 encoded
      options = JSON.parse(atob(options));
    }
  } /// The input size: 2, 3, or 4


  this.size = 2; /// The minterms. Set to integers starting at 0

  this.minterms = []; // [1, 2, 7, 8, 9, 14];
  /// The don't care minterms

  this.dontcare = []; /// Labels for the variables.

  this.labels = ['A', 'B', 'C', 'D']; /// Generate don't care maps

  this.gendontcare = false; //
  // User interface sections
  //
  /// Include the generator?

  this.generator = true; /// Include the manual data entry section?

  this.manual = true; /// Include the map?

  this.map = true; /// Include the solution section?

  this.solution = true; /// If true, the minterm name appears in each cell.

  this.labelMinterms = true; /// If set true, user input is checked for selecting invalid cells
  /// such as zeros.

  this.strict = true; /// If set true, practice generate features are disabled

  this.fixed = false; /// If true, the header Karnaugh Map is included with an option to hide the map

  this.mapHeading = true; /// Verbose answers on mistakes

  this.verbose = true; /// Is the solve button provided?

  this.solve = true;

  for (var property in options) {
    if (options.hasOwnProperty(property)) {
      if (!this.hasOwnProperty(property)) {
        throw new Error("Invalid option " + property);
      }

      this[property] = options[property];
    }
  }
};

/***/ }),

/***/ "./src/Kmap/Solution.js":
/*!******************************!*\
  !*** ./src/Kmap/Solution.js ***!
  \******************************/
/*! exports provided: Solution */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Solution", function() { return Solution; });
/* harmony import */ var _Logic_Expression__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Logic/Expression */ "./src/Logic/Expression.js");
/* harmony import */ var _Logic_QuineMcCluskeySolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Logic/QuineMcCluskeySolver */ "./src/Logic/QuineMcCluskeySolver.js");


/**
 * Practice page solution form
 * @param main Main object
 * @param element Parent element
 * @constructor
 */

var Solution = function Solution(main, element) {
  var _this = this;

  var that = this;
  this.main = main; // The various section elements

  var div, expressionInput, result;

  var initialize = function initialize() {
    div = document.createElement('div');
    div.classList.add('kmap-cl-solution');
    element.append(div);
    var h3 = document.createElement('h3');
    h3.innerText = 'Solution';
    div.appendChild(h3);
    var form = document.createElement('form');
    div.appendChild(form); // '<p><label>Enter Expression<br><input type="text" spellcheck="false" class="expression"></label></p>'

    var p = document.createElement('p');
    form.appendChild(p);
    var label = document.createElement('label');
    p.appendChild(label);
    label.innerText = 'Enter Expression';
    label.appendChild(document.createElement('br'));
    expressionInput = document.createElement('input');
    expressionInput.setAttribute('type', 'text');
    expressionInput.setAttribute('spellcheck', 'false');
    label.appendChild(expressionInput); // '<p><button class="check">Check</button><a class="clear" href="javascript:;"></a>';

    p = document.createElement('p');
    form.appendChild(p);
    var check = document.createElement('button');
    check.classList.add('check');
    check.innerText = 'Check';
    p.appendChild(check);
    check.addEventListener('click', function (event) {
      event.preventDefault();

      _this.check();
    }); // Clear button (input)

    p.appendChild(document.createTextNode(' '));
    var clear = document.createElement('a');
    clear.classList.add('clear');
    p.appendChild(clear);
    clear.addEventListener('click', function (event) {
      event.preventDefault();

      _this.clear();
    }); // Optional solve button

    if (main.options.solve) {
      p.appendChild(document.createTextNode(' '));
      var solve = document.createElement('button');
      solve.classList.add('kmap-cl-solve');
      solve.innerHTML = 'Solve';
      p.appendChild(solve);
      solve.addEventListener('click', function (event) {
        event.preventDefault();

        _this.solve();
      });
    } // Results div


    result = document.createElement('div');
    div.appendChild(result);
  };

  this.clear = function () {
    expressionInput.value = '';
    result.innerHTML = '';
  };

  this.check = function () {
    var mt = '';
    var first = true;

    for (var _i in main.options.minterms) {
      if (first) {
        mt += ",";
      } else {
        first = false;
      }

      mt += main.options.minterms[_i];
    }

    result.innerHTML = '';
    var expression = new _Logic_Expression__WEBPACK_IMPORTED_MODULE_0__["Expression"]();
    expression.labels = main.options.labels;
    expression.set_size(main.options.size);
    var str = expressionInput.value;

    try {
      expression.parse(str);
    } catch (msg) {
      fail('<p>Your expression failed to parse and must not be ' + 'in the correct form.</p>' + '<p>' + msg + '</p>');
      return;
    } // Is this result minimal?


    var qm = new _Logic_QuineMcCluskeySolver__WEBPACK_IMPORTED_MODULE_1__["QuineMcCluskeySolver"]();
    qm.labels = main.options.labels;
    qm.init(main.options.size);

    for (var i in main.options.minterms) {
      qm.set(main.options.minterms[i], true);
    }

    for (i in main.options.dontcare) {
      qm.set(main.options.dontcare[i], undefined);
    }

    qm.compute();
    var qmExpression = new _Logic_Expression__WEBPACK_IMPORTED_MODULE_0__["Expression"]();
    qmExpression.labels = main.options.labels;
    qmExpression.set_size(main.options.size);
    qmExpression.parse(qm.expression());
    var valid = true; //
    // Test that every minterm supplied is either
    // a valid minterm or a don't care
    //

    for (var i in expression.minterms.minterms) {
      var m = expression.minterms.minterms[i];
      var inlist = false;

      for (var j in main.options.minterms) {
        if (main.options.minterms[j] == m) {
          inlist = true;
          break;
        }
      }

      for (j in main.options.dontcare) {
        if (main.options.dontcare[j] == m) {
          inlist = true;
          break;
        }
      }

      if (!inlist) {
        // If we got to here, this term is extraneous!
        valid = false;
        break;
      }
    } //
    // Test that every minterm required is in the supplied list
    //


    for (i in main.options.minterms) {
      m = main.options.minterms[i];
      inlist = false;

      for (var j in expression.minterms.minterms) {
        if (expression.minterms.minterms[j] == m) {
          inlist = true;
          break;
        }
      }

      if (!inlist) {
        // If we got to here, this term is extraneous!
        valid = false;
        break;
      }
    }

    if (!valid) {
      if (main.options.verbose) {
        var html = '<p>Your expression is not a valid solution for this ' + 'set of minterms. The minterms for your expression have been ' + 'computed as: </p>';

        if (expression.minterms.minterms.length > 0) {
          html += '<p class="center small">' + expression.minterms.list() + '</p>';
        } else {
          html += '<p class="center small">none</p>';
        }
      } else {
        var html = '<p>Your expression is not a valid solution for this ' + 'set of minterms.</p>';
      }

      fail(html);
      return;
    }

    if (!expression.as_good_as(qmExpression)) {
      if (main.options.verbose) {
        fail('<p>Your expression is not minimal. A minimal solution ' + 'for this problem is:</p>' + '<p class="small">' + qm.expression() + '</p>');
      } else {
        fail('<p>Your expression is not minimal.</p>');
      }

      return;
    } //
    // Success
    //


    result.innerHTML = '<p>Your expression is correct and minimal.</p>';
  };

  this.solve = function () {
    var qm = this.minimumExpression();
    result.innerHTML = '<p class="center">' + qm.expression() + "</p>";
    main.work.map.clear();
    var groups = main.work.groups;
    groups.clear();
    var terms = qm.expression().split('+');
    var exp = new _Logic_Expression__WEBPACK_IMPORTED_MODULE_0__["Expression"]();
    exp.labels = main.options.labels;
    exp.set_size(main.options.size);

    for (var i = 0; i < terms.length; i++) {
      var term = terms[i];
      exp.parse(term);
      groups.add_group(exp.minterms.minterms);
    }

    groups.drawGroups();
  };

  function fail(msg) {
    result.innerHTML = msg;
  }

  this.minimumExpression = function () {
    // Is this result minimal?
    var qm = new _Logic_QuineMcCluskeySolver__WEBPACK_IMPORTED_MODULE_1__["QuineMcCluskeySolver"]();
    qm.labels = this.main.options.labels;
    qm.init(this.main.options.size);

    for (var i in this.main.options.minterms) {
      qm.set(this.main.options.minterms[i], true);
    }

    for (i in this.main.options.dontcare) {
      qm.set(this.main.options.dontcare[i], undefined);
    }

    qm.compute();
    return qm;
  };

  initialize();
};

/***/ }),

/***/ "./src/Kmap/Utility/Ready.js":
/*!***********************************!*\
  !*** ./src/Kmap/Utility/Ready.js ***!
  \***********************************/
/*! exports provided: Ready */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ready", function() { return Ready; });
/**
 * Simple Document ready function, equivalent to jQuery's document ready.
 * @constructor
 */
var Ready = function Ready() {};
/**
 * Call a function when the document is readon.
 * @param fn Function to be called on document ready
 */

Ready.go = function (fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
};

/***/ }),

/***/ "./src/Kmap/Work.js":
/*!**************************!*\
  !*** ./src/Kmap/Work.js ***!
  \**************************/
/*! exports provided: Work */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Work", function() { return Work; });
/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Map */ "./src/Kmap/Map.js");
/* harmony import */ var _Groups__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Groups */ "./src/Kmap/Groups.js");


/**
 * The work area is the Karnaugh map and the groupings controls.
 * @param main
 * @param element
 * @constructor
 */

var Work = function Work(main, element) {
  var div, left, right;

  this.initialize = function () {
    if (main.options.mapHeading) {
      var h3 = document.createElement('h3');
      element.appendChild(h3);
      var checkBox = document.createElement('input');
      checkBox.setAttribute('type', 'checkbox');
      checkBox.setAttribute('checked', 'true');
      h3.appendChild(checkBox);
      h3.appendChild(document.createTextNode(' Karnaugh Map'));
      checkBox.addEventListener('change', function (event) {
        event.preventDefault();

        if (checkBox.checked) {
          div.style.display = 'table';
        } else {
          div.style.display = 'none';
        }
      });
    } // Create the main div that contains the work area


    div = document.createElement('div');
    div.classList.add('kmap-cl-work');
    element.appendChild(div);
    this.div = div;
    this.render();
  };

  this.render = function () {
    div.innerHTML = '';
    left = document.createElement('div');
    div.appendChild(left);
    right = document.createElement('div');
    div.appendChild(right); //
    // Add the Kmap
    //

    this.map = new _Map__WEBPACK_IMPORTED_MODULE_0__["Map"](main, right); //
    // Add the groups
    //

    this.groups = new _Groups__WEBPACK_IMPORTED_MODULE_1__["Groups"](main, left);
  };

  this.initialize();
};

/***/ }),

/***/ "./src/Logic/Expression.js":
/*!*********************************!*\
  !*** ./src/Logic/Expression.js ***!
  \*********************************/
/*! exports provided: Expression */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Expression", function() { return Expression; });
/* harmony import */ var _Minterms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Minterms */ "./src/Logic/Minterms.js");

/**
 * Handle simple expressions. Only works for sum of products
 * for now. Will consider fancier version later on.
 * @constructor
 */

var Expression = function Expression() {
  var that = this;
  var size = 4;
  this.minterms = new _Minterms__WEBPACK_IMPORTED_MODULE_0__["Minterms"]();
  this.labels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];
  /**
   * Set the size of the expression
   * @param sz Value 1-? number of terms
   */

  this.set_size = function (sz) {
    size = sz;
    this.minterms.size = sz;
    terms_init();
  };
  /**
   * Test that this expression is as good as some other expression.
   * @param other
   */


  this.as_good_as = function (other) {
    if (this.num_products() > other.num_products()) {
      return false;
    }

    if (this.num_terms() > other.num_terms()) {
      return false;
    }

    return true;
  };
  /*
   * Minterms
   */


  function generate_minterms() {
    that.minterms.clear();

    for (var i = 0; i < Math.pow(2, size); i++) {
      terms_set(i);
      var resultS = false;

      for (var s in sop) {
        var prod = sop[s];
        var resultP = true;

        for (var p in prod) {
          var t = prod[p];

          if (t.not) {
            resultP = resultP && !t.term.value;
          } else {
            resultP = resultP && t.term.value;
          }
        }

        resultS = resultS || resultP;
      }

      if (resultS) {
        that.minterms.add(i);
      }
    }
  }
  /**
   * Parse an expression in sum-of-products form only
   * @param str
   */


  var sop = [];

  this.parse = function (exp) {
    lex(exp);
    sop = [];
    var prod = [];

    if (token() === "0") {
      generate_minterms();
      return;
    }

    if (token() === "1") {
      this.minterms.clear();

      for (var i = 0; i < Math.pow(2, size); i++) {
        this.minterms.add(i);
      }

      return;
    }

    while (true) {
      var ch = token();

      if (ch === null) {
        break;
      }

      if (ch === '+') {
        if (prod.length === 0) {
          error("Syntax error");
        }

        sop.push(prod);
        prod = [];
        advance();
      } else {
        // Is it a term?
        var term = get_term(ch);

        if (term !== null) {
          // We have a new term
          // Have we already seen it?
          for (var j in prod) {
            if (term === prod[j].term) {
              // Already seen this term
              error("Not in correct sum of products form. " + "Terms may only be used once per product.");
            }
          }

          advance();

          if (token() === "'") {
            prod.push({
              term: term,
              not: true
            });
            advance();
          } else {
            prod.push({
              term: term,
              not: false
            });
          }
        } else {
          error("Unexpected symbol.");
        }
      }
    }

    if (prod.length > 0) {
      sop.push(prod);
      prod = [];
    } else {
      error("Not in correct sum of products form. " + "Missing terms?");
    }

    generate_minterms();
  };

  this.num_products = function () {
    return sop.length;
  };

  this.num_terms = function () {
    var cnt = 0;

    for (var i in sop) {
      cnt += sop[i].length;
    }

    return cnt;
  };

  function error(msg) {
    throw "Expression parsing error [" + expressionLoc + "]: " + msg;
  }
  /*
   * Terms management
   */


  var terms = [];

  function terms_init() {
    terms = []; // Create the terms

    for (var i = 0; i < size; i++) {
      var term = {
        literal: that.labels[i],
        value: false
      };
      terms.push(term);
    }
  }

  function get_term(ch) {
    for (var i in terms) {
      if (ch.toUpperCase() === terms[i].literal.toUpperCase()) {
        return terms[i];
      }
    }

    return null;
  }

  function terms_set(val) {
    for (var j = terms.length - 1; j >= 0; j--) {
      terms[j].value = (val & 1) == 1;
      val >>= 1;
    }
  }
  /*
   * Simple lexical analyzer
   */


  var expression;
  var expressionLoc;

  function lex(exp) {
    expression = exp;
    expressionLoc = 0;
  }

  function token() {
    while (expressionLoc < expression.length) {
      var ch = expression.charAt(expressionLoc);

      if (ch !== ' ') {
        // Is this a term?
        for (var i in terms) {
          var maybe = expression.substr(expressionLoc, terms[i].literal.length);

          if (maybe === terms[i].literal) {
            return maybe;
          }
        }

        return ch;
      }

      expressionLoc++;
    }

    return null;
  }

  function advance() {
    var t = token();

    if (t !== null) {
      expressionLoc += t.length;
    }
  }

  this.set_size(4);
};

/***/ }),

/***/ "./src/Logic/Minterms.js":
/*!*******************************!*\
  !*** ./src/Logic/Minterms.js ***!
  \*******************************/
/*! exports provided: Minterms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Minterms", function() { return Minterms; });
/**
 * Object that represents a list of minterms and can generate random lists
 * @constructor
 */
var Minterms = function Minterms() {
  this.size = 4;
  this.minterms = []; // List of numbers

  this.dontcare = []; // List of don't cares

  /**
   * Generate random minterms and optionally dontcares
   * @param oneChance probability a minterm will be true
   * If omitted, the probability is 0.5
   * @param dcChance probablity a minterm will a dontcare
   * If omitted, the probability is 0
   */

  this.generate = function (oneChance, dcChance) {
    if (oneChance === undefined) {
      oneChance = 0.5;
    }

    if (dcChance === undefined) {
      dcChance = 0;
    }

    this.dontcare = [];
    this.minterms = [];
    var num = Math.pow(2, this.size);

    for (var i = 0; i < num; i++) {
      var rnd = Math.random();

      if (rnd <= oneChance) {
        this.minterms.push(i);
      } else if (rnd > 1 - dcChance) {
        this.dontcare.push(i);
      }
    }
  };
  /**
   * Generate random minterms and optionally dontcares
   * @param oneChance probability a minterm will be true
   * If omitted, the probability is 0.5
   * @param oneMin Minimum acceptable number of minterms
   * @param oneMax Maximum acceptable number of minterms
   * @param dcChance probablity a minterm will a dontcare
   * If omitted, the probability is 0
   * @param dcMin Minimum acceptable number of don't cares
   * @param dxMax Maximum acceptable number of don't cares
   */


  this.generate_bounded = function (oneChance, oneMin, oneMax, dcChance, dcMin, dcMax) {
    if (dcMin === undefined) {
      dcMin = 0;
    }

    if (dcMax === undefined) {
      dcMax = Math.pow(2, this.size);
    }

    for (var i = 0; i < 1000; i++) {
      this.generate(oneChance, dcChance);

      if (this.minterms.length >= oneMin && this.minterms.length <= oneMax && this.dontcare.length >= dcMin && this.dontcare.length <= dcMax) {
        return;
      }
    }
  };
  /**
   * Set the minterms list. This will accept any number of function arguments.
   */


  this.set = function () {
    this.minterms = [];

    for (var i = 0; i < arguments.length; i++) {
      this.minterms.push(arguments[i]);
    }

    this.minterms.sort(function (a, b) {
      return a - b;
    });
  };
  /**
   * Set from a list of minterms as an array
   * @param minterms Minterms array. The array is copied.
   * @param dontcare Optional don't care array
   */


  this.set_from = function (minterms, dontcare) {
    this.minterms = minterms.slice();
    this.minterms.sort(function (a, b) {
      return a - b;
    });

    if (dontcare !== null) {
      this.dontcare = dontcare.slice();
      this.dontcare.sort(function (a, b) {
        return a - b;
      });
    } else {
      this.dontcare = [];
    }
  };
  /**
   * Determine if two minterm lists are the same.
   * @param other Other Minterms object
   */


  this.equal = function (other) {
    var otherMinterms;

    if (other instanceof Logic.Minterms) {
      otherMinterms = other.minterms;
    } else {
      otherMinterms = other;
    }

    if (otherMinterms.length !== this.minterms.length) {
      return false;
    }

    for (var i = 0; i < otherMinterms.length; i++) {
      if (otherMinterms[i] != this.minterms[i]) {
        return false;
      }
    }

    return true;
  };

  this.clear = function () {
    this.minterms = [];
  };

  this.add = function (minterm) {
    for (var i in this.minterms) {
      if (this.minterms[i] == minterm) {
        return;
      }
    }

    this.minterms.push(minterm);
    this.minterms.sort(function (a, b) {
      return a - b;
    });
  };

  this.list = function (withBreak) {
    var first = true;
    var ret = '';
    var cr = false;

    for (var i in this.minterms) {
      if (first) {
        first = false;
      } else {
        ret += ', ';
      }

      if (withBreak === true && !cr && ret.length > 40) {
        cr = true;
        ret += '<br>';
      }

      ret += 'm' + this.minterms[i];
    }

    return ret;
  };

  this.list_dontcare = function (withBreak) {
    var first = true;
    var ret = '';
    var cr = false;

    for (var i in this.dontcare) {
      if (first) {
        first = false;
      } else {
        ret += ', ';
      }

      if (withBreak === true && !cr && ret.length > 40) {
        cr = true;
        ret += '<br>';
      }

      ret += 'm' + this.dontcare[i];
    }

    return ret;
  };
};

/***/ }),

/***/ "./src/Logic/QuineMcCluskeySolver.js":
/*!*******************************************!*\
  !*** ./src/Logic/QuineMcCluskeySolver.js ***!
  \*******************************************/
/*! exports provided: QuineMcCluskeySolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuineMcCluskeySolver", function() { return QuineMcCluskeySolver; });
/* harmony import */ var _qmc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qmc */ "./src/Logic/qmc.js");

/**
 * Solver for circuit minimization based on Quine McCluskey algorithm.
 * This uses the implemention in qmc.js, but adapts the interface
 * to match the variable names I use.
 * @constructor
 */

var QuineMcCluskeySolver = function QuineMcCluskeySolver() {
  this.qm = new _qmc__WEBPACK_IMPORTED_MODULE_0__["QuineMcCluskeyDataCtrl"]();
  this.labels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];

  this.init = function (numVars) {
    this.qm.init(numVars);
    this.clear();
  };

  this.clear = function () {
    var size = Math.pow(2, this.qm.noOfVars);
    this.qm.allowDontCare = true;

    for (var i = 0; i < size; i++) {
      this.qm.setFuncData(i, 0);
    }
  };
  /**
   * Set a minterm
   * @param minterm Minterm number
   * @param value true, false, or undefined for dontcare
   */


  this.set = function (minterm, value) {
    if (value === true) {
      this.qm.setFuncData(minterm, 1);
    } else if (value === undefined) {
      this.qm.setFuncData(minterm, 2);
    } else {
      this.qm.setFuncData(minterm, 0);
    }
  };

  this.compute = function () {
    this.qm.compute();
  };

  this.num_terms = function () {
    return this.qm.minimalTermPrims.length;
  };

  this.expression = function () {
    var qm = this.qm;
    var exp = "";
    var first = true;

    if (qm.minimalTermPrims.length === 0) {
      return "0";
    }

    if (qm.minimalTermPrims.length === 1 && qm.minimalTermPrims[0].termString === '1') {
      return "1";
    } // Loop over the results


    for (var i = 0; i < qm.minimalTermPrims.length; i++) {
      if (!first) {
        exp += "+";
      } else {
        first = false;
      } //
      // Find smallest prime implicant.
      // This is probably not strictly necessary
      // but I don't trust the method they use
      // that stops on the first iteration of a
      // for/in loop.
      //


      first = true;
      var minterm;
      var primTerm = qm.minimalTermPrims[i];

      for (var imp in primTerm.implicant.imp) {
        if (first) {
          minterm = imp;
          first = false;
        } else {
          if (imp < minterm) {
            minterm = imp;
          }
        }
      } // minterm is a minterm that is needed
      // except that some bits can be masked off
      // I count backwards, since I prefer
      // the most significant value to be A
      // to match the course materials.


      var one = 1 << qm.noOfVars - 1; // If a bit is set in primTerm.implicant.bitMask,
      // that term is not needed.

      var needed = ~primTerm.implicant.bitMask;
      var term = '';

      for (var v = qm.noOfVars - 1; v >= 0; v--) {
        var v1 = qm.noOfVars - v - 1;

        if ((needed & one) === one) {
          if ((minterm & one) === one) {
            term += this.labels[v1];
          } else {
            term += this.labels[v1] + "'";
          }
        }

        one = one >> 1;
      }

      exp += term;
    }

    return exp;
  };
};

/***/ }),

/***/ "./src/Logic/qmc.js":
/*!**************************!*\
  !*** ./src/Logic/qmc.js ***!
  \**************************/
/*! exports provided: QuineMcCluskeyDataCtrl, QuineMcCluskey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuineMcCluskeyDataCtrl", function() { return QuineMcCluskeyDataCtrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuineMcCluskey", function() { return QuineMcCluskey; });
// Copyright (C) Thorsten Thormaehlen, Marburg, 2013, All rights reserved
// Contact: www.thormae.de
// This software is written for educational (non-commercial) purpose. 
// There is no warranty or other guarantee of fitness for this software, 
// it is provided solely "as is". 
function PetrickMethod() {
  this.problem;
  this.maxProblemSize = 100;
  this.solution;
  this.log = "";
  var that = this;

  this.test = function () {
    var andArray = new Array();
    var orArray;
    var monomA;
    var monomB;
    orArray = new Array();
    monomA = new Object(); // using objects ensures that (x and x) = x

    monomA[1] = 1;
    orArray.push(monomA);
    monomB = new Object();
    monomB[2] = 2;
    orArray.push(monomB);
    andArray.push(orArray);
    orArray = new Array();
    monomA = new Object();
    monomA[3] = 3;
    orArray.push(monomA);
    monomB = new Object();
    monomB[4] = 4;
    orArray.push(monomB);
    andArray.push(orArray);
    orArray = new Array();
    monomA = new Object();
    monomA[1] = 1;
    orArray.push(monomA);
    monomB = new Object();
    monomB[3] = 3;
    orArray.push(monomB);
    andArray.push(orArray);
    orArray = new Array();
    monomA = new Object();
    monomA[5] = 5;
    orArray.push(monomA);
    monomB = new Object();
    monomB[6] = 6;
    orArray.push(monomB);
    andArray.push(orArray);
    orArray = new Array();
    monomA = new Object();
    monomA[2] = 2;
    orArray.push(monomA);
    monomB = new Object();
    monomB[5] = 5;
    orArray.push(monomB);
    andArray.push(orArray);
    orArray = new Array();
    monomA = new Object();
    monomA[4] = 4;
    orArray.push(monomA);
    monomB = new Object();
    monomB[6] = 6;
    orArray.push(monomB);
    andArray.push(orArray);
    /*orArray = new Array();
     monomA = new Object(); 
     monomA[4] = 4;
     orArray.push(monomA);
     monomB = new Object();
     monomB[4] = 4;
     orArray.push(monomB);
     andArray.push(orArray);*/

    this.solve(andArray);
  };

  this.solve = function (eq) {
    this.problem = eq;
    this.log = ""; //printEqnArray(eq);

    printEqnArrayFancy(eq); // multiply out

    var andArray = eq;
    var loopCounter = 0;

    while (andArray.length > 1) {
      var newAndArray = new Array();

      for (var i = 1; i < andArray.length; i += 2) {
        var orTermA = andArray[i - 1];
        var orTermB = andArray[i];
        var newOrArray = new Array();

        for (var a = 0; a < orTermA.length; a++) {
          for (var b = 0; b < orTermB.length; b++) {
            var monom1 = orTermA[a];
            var monom2 = orTermB[b];
            var resultingMonom = new Object();

            for (var m in monom1) {
              resultingMonom[monom1[m]] = monom1[m];
            }

            for (var n in monom2) {
              resultingMonom[monom2[n]] = monom2[n];
            }

            newOrArray.push(resultingMonom);
          }
        }

        newAndArray.push(newOrArray);
      } // if uneven copy last and-term


      if (andArray.length % 2 === 1) {
        newAndArray.push(andArray[andArray.length - 1]);
      } //printEqnArray(newAndArray);


      printEqnArrayFancy(newAndArray);
      andArray.length = 0; // simplify or-term

      for (var i = 0; i < newAndArray.length; i++) {
        var orTerm = newAndArray[i];
        var newOrTerm = simplifyOrTerm(orTerm);

        if (newOrTerm.length > 0) {
          andArray.push(newOrTerm);
        }
      }

      var problemSize = eqnArrayProblemSize(andArray);

      if (problemSize > this.maxProblemSize) {
        console.log("Error: The cyclic covering problem is too large to be solved with Petrick's method (increase maxProblemSize). Size=" + problemSize);
        return false;
      } //printEqnArray(andArray);


      printEqnArrayFancy(andArray);
      loopCounter++;
    }

    this.solution = andArray;
    return true;
  };

  function simplifyOrTerm(orTerm) {
    // find a monom that is the same or simpler than another one
    var newOrTerm = new Array();
    var markedForDeletion = new Object();

    for (var a = 0; a < orTerm.length; a++) {
      var keepA = true;
      var monomA = orTerm[a];

      for (var b = a + 1; b < orTerm.length && keepA; b++) {
        var monomB = orTerm[b];
        var overlapBoverA = 0;
        var lengthA = 0;

        for (var m in monomA) {
          if (monomB[m] in monomA) {
            overlapBoverA++;
          }

          lengthA++;
        }

        var overlapAoverB = 0;
        var lengthB = 0;

        for (var m in monomB) {
          if (monomA[m] in monomB) {
            overlapAoverB++;
          }

          lengthB++;
        }

        if (overlapBoverA === lengthB) {
          keepA = false;
        }

        if (lengthA < lengthB && overlapAoverB === lengthA) {
          markedForDeletion[b] = b;
        }
      }

      if (keepA) {
        if (a in markedForDeletion) {// do nothing
        } else newOrTerm.push(orTerm[a]);
      }
    }

    return newOrTerm;
  }

  function printEqnArrayFancy(andArray) {
    var str = "";

    for (var i = 0; i < andArray.length; i++) {
      var first = true;
      str += "(";
      var orArray = andArray[i];

      for (var j = 0; j < orArray.length; j++) {
        if (!first) str += " &or; ";
        var monom = orArray[j];

        for (var k in monom) {
          str += "<i>p</i><sub><small>" + monom[k] + "</small></sub>";
        }

        first = false;
      }

      str += ")";
    }

    if (that.log.length > 0) {
      that.log += "<p>&hArr;&nbsp;" + str + "</p>";
    } else {
      that.log += "<p>" + str + "</p>";
    }
  }

  function eqnArrayProblemSize(andArray) {
    var monomCounter = 0;

    for (var i = 0; i < andArray.length; i++) {
      var orArray = andArray[i];
      monomCounter += orArray.length;
    }

    return monomCounter;
  }

  function printEqnArray(andArray) {
    var str = "";

    for (var i = 0; i < andArray.length; i++) {
      var first = true;
      str += "(";
      var orArray = andArray[i];

      for (var j = 0; j < orArray.length; j++) {
        if (!first) str += " or ";
        var monom = orArray[j];

        for (var k in monom) {
          str += monom[k];
        }

        first = false;
      }

      str += ")";
    }

    console.log(str);
  }
}

function PrimTerm() {
  this.implicant = -1;
  this.termString = "";
  this.color = [0, 0, 0];
  this.coloredTermString = "";
  this.used = false;
  this.neededByVar = new Object();
}

function Implicant() {
  this.imp = new Object();
  this.isPrim = false;
  this.isOnlyDontCare = false;
  this.bitMask = 0;
}

function ImplicantGroup() {
  this.group = new Array();
  this.order = -1;
}

function PrimTermTable(ord) {
  this.essentialPrimTerms = new Array();
  this.order = ord;
  this.remainingVars = new Array();
  ;
  this.remainingPrimTerms = new Array();
  this.supersededPrimTerms = new Array();
}

function hsvToRgb(h, s, v) {
  var r, g, b;
  var i = Math.floor(h * 6);
  var f = h * 6 - i;
  var p = v * (1 - s);
  var q = v * (1 - f * s);
  var t = v * (1 - (1 - f) * s);

  switch (i % 6) {
    case 0:
      r = v, g = t, b = p;
      break;

    case 1:
      r = q, g = v, b = p;
      break;

    case 2:
      r = p, g = v, b = t;
      break;

    case 3:
      r = p, g = q, b = v;
      break;

    case 4:
      r = t, g = p, b = v;
      break;

    case 5:
      r = v, g = p, b = q;
      break;
  }

  return [Math.floor(r * 255), Math.floor(g * 255), Math.floor(b * 255)];
}

var QuineMcCluskeyDataCtrl = function QuineMcCluskeyDataCtrl() {
  this.noOfVars = -1;
  this.funcdata = new Array();
  this.primTerms = new Array();
  this.implicantGroups = new Array();
  this.minimalTerm = "";
  this.coloredMinimalTerm = "";
  this.minimalTermPrims = new Array();
  this.primTermTables = new Array();
  this.petrickSolver = new PetrickMethod();
  this.petrickTermPrims = new Array();
  this.allowDontCare = false;

  this.init = function (no) {
    this.noOfVars = no;
    this.funcdata.length = 0;
    this.primTerms.length = 0;
    this.implicantGroups.length = 0;
    this.minimalTerm = "0";
    this.coloredMinimalTerm = "0";
    this.minimalTermPrims.length = 0;
    this.primTermTables.length = 0;
    this.petrickTermPrims.length = 0;
    var noOfFuncData = Math.pow(2, this.noOfVars);

    for (var i = 0; i < noOfFuncData; i++) {
      this.funcdata.push(0);
    } //this.petrickSolver.test();

  };

  this.setFuncData = function (i, val) {
    if (i < 0 || i >= this.funcdata.length) return;
    this.funcdata[i] = val;
  };

  this.activated = function (i) {
    if (i < 0 || i >= this.funcdata.length) return;
    this.funcdata[i] += 1;

    if (this.allowDontCare) {
      if (this.funcdata[i] > 2) this.funcdata[i] = 0;
    } else {
      if (this.funcdata[i] > 1) this.funcdata[i] = 0;
    }

    this.compute();
  };

  this.random = function () {
    for (var i = 0; i < this.funcdata.length; i++) {
      if (this.allowDontCare) {
        this.funcdata[i] = Math.floor(Math.random() * 3);
      } else {
        this.funcdata[i] = Math.floor(Math.random() * 2);
      }
    }

    this.compute();
  };

  this.clear = function () {
    for (var i = 0; i < this.funcdata.length; i++) {
      this.funcdata[i] = 0;
    }

    this.compute();
  };

  function bitCount(value) {
    var counter = 0;

    while (value > 0) {
      if ((value & 1) === 1) counter++;
      value >>= 1;
    }

    return counter;
  }

  this.compute = function () {
    this.primTerms.length = 0;
    this.implicantGroups.length = 0;
    this.minimalTerm = "0";
    this.coloredMinimalTerm = "0";
    this.minimalTermPrims.length = 0;
    this.primTermTables.length = 0;
    this.petrickTermPrims.length = 0;
    var counter = 0;
    var lastIg = -1;
    var continueLoop = true;

    while (continueLoop) {
      continueLoop = false;
      var ig = new ImplicantGroup();

      if (counter === 0) {
        for (var i = 0; i < this.funcdata.length; i++) {
          if (this.funcdata[i] > 0) {
            var impl = new Implicant();
            impl.imp[i] = i;
            impl.isPrim = true;
            ig.group.push(impl);
            continueLoop = true;
          }
        }
      } else {
        for (var i = 0; i < lastIg.group.length; i++) {
          for (var j = i + 1; j < lastIg.group.length; j++) {
            var imp1 = lastIg.group[i];
            var imp2 = lastIg.group[j];

            if (imp1.bitMask === imp2.bitMask) {
              var found = false;
              var xor = -1;

              for (var m in imp1.imp) {
                for (var n in imp2.imp) {
                  var i1 = imp1.imp[m];
                  var i2 = imp2.imp[n]; //console.log(i1 + "<->" + i2);

                  xor = (i1 ^ i2) & ~imp1.bitMask;

                  if (bitCount(xor) === 1) {
                    //console.log("found merge candidate" + i1 + "<->" + i2);
                    found = true;
                  }

                  break;
                }

                break;
              }

              if (found) {
                imp1.isPrim = false;
                imp2.isPrim = false;
                var impl = new Implicant();
                impl.isPrim = true;
                impl.bitMask = imp1.bitMask | xor;

                for (var m in imp1.imp) {
                  impl.imp[m] = parseInt(m);
                }

                for (var n in imp2.imp) {
                  impl.imp[n] = parseInt(n);
                }

                var foundMatch = false; // determine if this combination is already there

                for (var k = 0; k < ig.group.length; k++) {
                  var exist = ig.group[k];
                  var isTheSame = true;

                  for (var m in impl.imp) {
                    var found = false;

                    for (var n in exist.imp) {
                      if (parseInt(m) === parseInt(n)) {
                        found = true;
                      }
                    }

                    if (!found) {
                      isTheSame = false;
                      break;
                    }
                  }

                  if (isTheSame) {
                    foundMatch = true;
                    break;
                  }
                }

                if (!foundMatch) {
                  ig.group.push(impl);
                  continueLoop = true;
                }
              }
            }
          }
        }
      }

      if (continueLoop) this.implicantGroups.push(ig);
      lastIg = ig;
      counter++;
    } // collect primterms


    this.primTerms.length = 0;
    this.minimalTermPrims.length = 0;
    var color = 0.0;

    for (var i = this.implicantGroups.length - 1; i >= 0; i--) {
      var g = this.implicantGroups[i].group;

      for (var j = 0; j < g.length; j++) {
        if (g[j].isPrim) {
          // prim terms introduced by don't cares
          // must have at least one 1
          var containsOne = false;
          var allFuncPrimTerm = g[j].imp;

          for (var kk in allFuncPrimTerm) {
            var k = allFuncPrimTerm[kk];

            if (this.funcdata[k] === 1) {
              containsOne = true;
            }
          }

          if (!containsOne) {
            g[j].isOnlyDontCare = true;
          } else {
            var primTerm = new PrimTerm();
            primTerm.implicant = g[j]; // extract minTerm as string

            for (var thisVal in primTerm.implicant.imp) {
              var minTerm = "";
              var one = 1;
              var needed = ~primTerm.implicant.bitMask;

              for (var v = 0; v < this.noOfVars; v++) {
                if ((needed & one) === one) {
                  if ((thisVal & one) === one) {
                    minTerm = "<i>x</i><sub><small>" + v + "</small></sub>" + minTerm;
                  } else {
                    minTerm = "<i>x&#772;</i><sub><small>" + v + "</small></sub>" + minTerm;
                  }
                }

                one = one << 1;
              }

              minTerm = "(" + minTerm + ")";
              if (primTerm.implicant.bitMask === Math.pow(2, this.noOfVars) - 1) minTerm = "1";
              primTerm.color = hsvToRgb(color, 1.0, 0.5);
              color += 0.22;
              color = color % 1.0;
              primTerm.termString = minTerm;
              var colorStr = "rgb(" + primTerm.color[0] + "," + primTerm.color[1] + "," + primTerm.color[2] + ")";
              primTerm.coloredTermString = "<span style='color:" + colorStr + "'>" + minTerm + "</span>";
              break;
            }

            this.primTerms.push(primTerm);
          }
        }
      }
    } // looking for essential prime implicants 


    var remaining = new Object();

    for (var i = 0; i < this.funcdata.length; i++) {
      if (this.funcdata[i] === 1) {
        remaining[i] = i;
      }
    }

    this.primTermTables.length = 0;
    var primTableLoop = 0;
    var primTableFound = this.primTerms.length > 0;
    var cyclicCoveringFound = false;
    var primTermTable;

    while (primTableFound) {
      primTableFound = false;
      primTermTable = new PrimTermTable(primTableLoop);

      for (var r in remaining) {
        primTermTable.remainingVars.push(remaining[r]);
      }

      if (primTableLoop === 0) {
        for (var j = 0; j < this.primTerms.length; j++) {
          primTermTable.remainingPrimTerms.push(this.primTerms[j]);
        }
      } else {
        // remove rows
        var prevTable = this.primTermTables[primTableLoop - 1];

        for (var k = 0; k < prevTable.remainingPrimTerms.length; k++) {
          if (!prevTable.remainingPrimTerms[k].used) {
            var superseded = false;
            var impA = prevTable.remainingPrimTerms[k].implicant.imp;
            var varCover = new Object();
            var countA = 0;

            for (var r in remaining) {
              var v = remaining[r];

              if (v in impA) {
                varCover[v] = v;
                countA++;
              }
            }

            for (var l = 0; l < prevTable.remainingPrimTerms.length && !superseded; l++) {
              if (!prevTable.remainingPrimTerms[l].used && k !== l) {
                var impB = prevTable.remainingPrimTerms[l].implicant.imp;
                var countB = 0;

                for (var r in varCover) {
                  var v = varCover[r];

                  if (v in impB) {
                    countB++;
                  }
                }

                if (countA === countB) {
                  var countBInRemaining = 0;

                  for (var r in remaining) {
                    var v = remaining[r];

                    if (v in impB) {
                      countBInRemaining++;
                    }
                  }

                  if (countBInRemaining > countA) {
                    superseded = true;
                  } else {
                    if (k > l) {
                      superseded = true;
                    }
                  }
                }
              }
            }

            if (!superseded) {
              primTermTable.remainingPrimTerms.push(prevTable.remainingPrimTerms[k]);
            } else {
              prevTable.supersededPrimTerms.push(prevTable.remainingPrimTerms[k]);
            }
          }
        }
      }

      if (primTermTable.remainingPrimTerms.length > 0) {
        this.primTermTables.push(primTermTable);
        var currentTerms = primTermTable.remainingPrimTerms;
        var toBeRemoved = new Object();

        for (var r in remaining) {
          var i = remaining[r];
          var count = 0;
          var term = -1;

          for (var j = 0; j < currentTerms.length && count < 2; j++) {
            if (i in currentTerms[j].implicant.imp) {
              term = j;
              count++;
            }
          }

          if (count === 1) {
            currentTerms[term].neededByVar[i] = primTableLoop;

            if (!currentTerms[term].used) {
              this.minimalTermPrims.push(currentTerms[term]);
              currentTerms[term].used = true;
              primTermTable.essentialPrimTerms.push(currentTerms[term]);
              primTableFound = true;

              for (var r in remaining) {
                var ii = remaining[r];

                if (ii in currentTerms[term].implicant.imp) {
                  toBeRemoved[ii] = ii;
                }
              }
            }
          }
        } // remove columns


        var tmpRemaining = new Object();

        for (var e in remaining) {
          var ee = remaining[e];
          tmpRemaining[ee] = ee;
          delete remaining[e];
        }

        var remainingCount = 0;

        for (var r in tmpRemaining) {
          var t = tmpRemaining[r];

          if (!(t in toBeRemoved)) {
            remaining[t] = t;
            remainingCount++;
          }
        }
      }

      if (remainingCount === 0) {
        primTableFound = false; // break loop
      } else {
        if (!primTableFound) {
          cyclicCoveringFound = true;
        }
      }

      primTableLoop++;
    }

    var solutionFound = true; // Petrick's Method

    if (cyclicCoveringFound) {
      //console.log("Cyclic covering found");
      var andArray = new Array();

      for (var r in remaining) {
        var ii = remaining[r];
        var orArray = new Array();

        for (var k = 0; k < primTermTable.remainingPrimTerms.length; k++) {
          var imp = primTermTable.remainingPrimTerms[k].implicant.imp;

          if (ii in imp) {
            var monom = new Object();
            monom[k] = k;
            orArray.push(monom);
          }
        }

        andArray.push(orArray);
      }

      solutionFound = this.petrickSolver.solve(andArray);

      if (solutionFound) {
        var solutions = this.petrickSolver.solution[0];
        var bestSolution = -1;
        var bestCount = 10000000;
        var bestVarCount = 10000000;

        for (var i = 0; i < solutions.length; i++) {
          var count = 0;

          for (var j in solutions[i]) {
            count++;
          }

          if (count <= bestCount) {
            // first sort accoring to monom length
            var foundBest = true;

            if (count === bestCount) {
              var bestVarCountNew = 0;

              for (var j in solutions[i]) {
                for (var v in primTermTable.remainingPrimTerms[j].implicant.imp) {
                  bestVarCountNew++;
                }
              }

              if (bestVarCountNew >= bestVarCount) foundBest = false;
            }

            if (foundBest) {
              bestCount = count;
              bestSolution = i;
              bestVarCount = 0;

              for (var j in solutions[bestSolution]) {
                for (var v in primTermTable.remainingPrimTerms[j].implicant.imp) {
                  bestVarCount++;
                }
              }
            }
          }
        } //console.log("Best solution " + bestSolution);


        var best = solutions[bestSolution];

        for (var b in best) {
          var addPrimTerm = primTermTable.remainingPrimTerms[best[b]];
          this.minimalTermPrims.push(addPrimTerm);
          this.petrickTermPrims.push(addPrimTerm);
        }
      }
    }

    if (solutionFound) {
      this.minimalTerm = "";
      this.coloredMinimalTerm = "";
      var firstL = true;

      for (var i = 0; i < this.minimalTermPrims.length; i++) {
        if (!firstL) {
          this.minimalTerm += " &or; ";
          this.coloredMinimalTerm += " &or; ";
        }

        this.minimalTerm += this.minimalTermPrims[i].termString;
        this.coloredMinimalTerm += this.minimalTermPrims[i].coloredTermString;
        firstL = false;
      }

      if (this.minimalTermPrims.length === 0) {
        this.minimalTerm = "0";
        this.coloredMinimalTerm = "0";
      }
    } else {
      this.minimalTerm = 'Error: The cyclic covering problem is too large (increase the "maxProblemSize" parameter)';
      this.coloredMinimalTerm = 'Error: The cyclic covering problem is too large (increase the "maxProblemSize" parameter)';
    }
  };
};
var QuineMcCluskey = function QuineMcCluskey(parentDivId, columns, language) {
  var myDiv = -1;
  var divId = parentDivId;
  this.cols = columns + 1;
  this.rows = Math.pow(2, columns);
  this.data = new QuineMcCluskeyDataCtrl();
  var that = this;
  var labels;

  if (language === 0) {
    labels = {
      ttable: "Truth table",
      minExp: "Minimal boolean expression",
      impli: "Implicants",
      order: "Order",
      primChart: "Prime implicant chart",
      primChartReduced: "Reduced prime implicant chart (Iteration",
      extractedPrims: "Extracted essential prime implicants",
      extractedMPrims: "Extracted prime implicants",
      petricksM: "Petrick's method"
    };
  } else {
    labels = {
      ttable: "Wahrheitstafel",
      minExp: "Minimaler boolescher Ausdruck",
      impli: "Implikanten",
      order: "Ordnung",
      primChart: "Primimplikantentafel",
      primChartReduced: "Reduzierte Primimplikantentafel (Iteration",
      extractedPrims: "Extrahierte essentielle Primimplikanten",
      extractedMPrims: "Extrahierte Primimplikanten",
      petricksM: "Verfahren von Petrick"
    };
  }

  this.init = function () {
    this.data.init(columns);
    myDiv = document.createElement('div');

    if (!myDiv) {
      console.log("QuineMcCluskey error: can not create a canvas element");
      myDiv = -1;
    } else {
      var parent = document.getElementById(divId);

      if (!parent) {
        if (divId !== "fakeDivId") {
          console.log("QuineMcCluskey error: can not find an element with the given name: " + divId);
        }

        myDiv = -1;
      } else {
        document.body.appendChild(myDiv);
        parent.appendChild(myDiv);
      }
    }

    this.update();
  };

  this.setNoOfVars = function (vars) {
    var c = parseInt(vars);
    if (c < 1 && c > 6) return;
    this.cols = c + 1;
    this.rows = Math.pow(2, c);
    this.data.init(c);
    this.update();
  };

  this.genRandom = function () {
    this.data.random();
    this.update();
  };

  this.allowDontCares = function (type) {
    if (type > 0) {
      this.data.allowDontCare = true;
    } else {
      this.data.allowDontCare = false;
    }

    this.data.clear();
    this.update();
  };

  this.drawImplicantGroup = function (g, parent, primFlag, t, drawPetrickVars) {
    var primTermTable = this.data.primTermTables[t];
    var myTable = document.createElement('table');
    myTable.setAttribute('class', 'qmcTableClass');
    var myRow = document.createElement('tr');
    var cell1h = document.createElement('td');
    cell1h.setAttribute('class', 'qmcTdNoBorder');
    cell1h.innerHTML = "";
    myRow.appendChild(cell1h);

    for (var j = 0; j < this.data.noOfVars; j++) {
      var myCell = document.createElement('th');
      myCell.innerHTML = "<i>x</i><sub><small>" + (this.data.noOfVars - 1 - j) + "</small></sub>";
      myCell.setAttribute('class', 'qmcHeaderX qmcBit');
      myRow.appendChild(myCell);
    }

    if (primFlag) {
      for (var i = 0; i < primTermTable.remainingVars.length; i++) {
        var cellImph = document.createElement('td');
        cellImph.setAttribute('class', 'qmcTdNoBorder');
        cellImph.innerHTML = primTermTable.remainingVars[i].toString(10);
        myRow.appendChild(cellImph);
      }
    }

    var cellImph = document.createElement('td');
    cellImph.setAttribute('class', 'qmcTdNoBorder');
    cellImph.innerHTML = "";
    myRow.appendChild(cellImph);
    myTable.appendChild(myRow);
    var iMax = 0;
    if (!primFlag) iMax = g.group.length;else iMax = primTermTable.remainingPrimTerms.length;

    for (var i = 0; i < iMax; i++) {
      var impl = -1;
      if (!primFlag) impl = g.group[i];else impl = primTermTable.remainingPrimTerms[i].implicant;
      var bits = 0;
      var mask = impl.bitMask;

      for (var m in impl.imp) {
        bits = impl.imp[m];
        break;
      }

      myRow = document.createElement('tr');
      var cell1 = document.createElement('td');
      var cell1Str = "";
      var first = true;

      for (var m in impl.imp) {
        if (!first) cell1Str += ", ";
        cell1Str += impl.imp[m].toString(10);
        first = false;
      }

      cell1.innerHTML = cell1Str + ":";
      cell1.setAttribute('class', 'qmcTdNoBorder');
      myRow.appendChild(cell1);
      var res = bits.toString(2);

      for (var j = 0; j < this.data.noOfVars; j++) {
        var myCell = document.createElement('td');
        myCell.setAttribute('class', 'qmcBit');
        var str;
        var currentBit = Math.pow(2, this.data.noOfVars - 1 - j);

        if ((currentBit & mask) === currentBit) {
          str = "-";
          myCell.innerHTML = str;
        } else {
          if (j >= this.data.noOfVars - res.length) {
            str = res.charAt(j - (this.data.noOfVars - res.length));
            myCell.innerHTML = str;
          } else {
            str = "0";
            myCell.innerHTML = str;
          }
        }

        myRow.appendChild(myCell);
      }

      if (!primFlag) {
        var cellLast = document.createElement('td');
        cellLast.setAttribute('class', 'qmcTdNoBorder');

        if (impl.isPrim) {
          cellLast.innerHTML = "&#x2713;"; //equivalent &check; in most browsers

          if (impl.isOnlyDontCare) {
            cellLast.innerHTML = " (&times;)";
          }
        } else {
          cellLast.innerHTML = "&rarr;";
        }

        myRow.appendChild(cellLast);
      } else {
        for (var v = 0; v < primTermTable.remainingVars.length; v++) {
          var ii = primTermTable.remainingVars[v];
          var cellUsed = document.createElement('td');
          cellUsed.setAttribute('class', 'qmcPrimItem qmcBit');

          if (ii in impl.imp) {
            cellUsed.innerHTML = "&#9675;";

            if (ii in primTermTable.remainingPrimTerms[i].neededByVar) {
              if (primTermTable.remainingPrimTerms[i].neededByVar[ii] === t) {
                cellUsed.innerHTML = "<span style='color:green;'>&#9679;</span>";
              }
            }
          }

          myRow.appendChild(cellUsed);
        }

        var cellLast = document.createElement('td');
        cellLast.setAttribute('class', 'qmcTdNoBorder');
        cellLast.innerHTML = primTermTable.remainingPrimTerms[i].coloredTermString;

        if (drawPetrickVars) {
          var pVars = "&nbsp;&equiv;&nbsp;<i>p</i><sub><small>" + i + "</small></sub>";
          cellLast.innerHTML += pVars;
        }

        myRow.appendChild(cellLast);
      }

      myTable.appendChild(myRow);
    }

    parent.appendChild(myTable);
  };

  this.update = function () {
    if (myDiv === -1) return; // clean up

    var oldInnerDiv = document.getElementById(divId + "_innerDiv");
    if (oldInnerDiv) myDiv.removeChild(oldInnerDiv);
    var myInnerDiv = document.createElement('div');
    myInnerDiv.setAttribute('id', divId + "_innerDiv");
    var myTruthTableDiv = document.createElement('div');
    myTruthTableDiv.innerHTML = "<div>" + labels['ttable'] + ":</div>";
    myTruthTableDiv.setAttribute('class', 'qmcTableLabelDiv'); // re-generate

    var myTable = document.createElement('table');
    myTable.setAttribute('class', 'qmcTableClass');
    var myRow = document.createElement('tr');
    var cell1h = document.createElement('td');
    cell1h.innerHTML = "";
    cell1h.setAttribute('class', 'qmcTdNoBorder');
    myRow.appendChild(cell1h);

    for (var j = 0; j < this.cols; j++) {
      var myCell = document.createElement('th');

      if (j < this.cols - 1) {
        myCell.innerHTML = "<i>x</i><sub><small>" + (this.cols - 2 - j) + "</small></sub>";
        myCell.setAttribute('class', 'qmcHeaderX qmcBit');
      } else {
        myCell.innerHTML = "<i>y</i>";
        myCell.setAttribute('class', 'qmcHeaderY qmcBit');
      }

      myRow.appendChild(myCell);
    }

    myTable.appendChild(myRow);

    for (var i = 0; i < this.rows; i++) {
      myRow = document.createElement('tr');
      var cell1 = document.createElement('td');
      cell1.innerHTML = i.toString(10) + ":";
      cell1.setAttribute('class', 'qmcTdNoBorder');
      myRow.appendChild(cell1);
      var res = i.toString(2);

      for (var j = 0; j < this.cols; j++) {
        var myCell = document.createElement('td');

        if (j < this.cols - 1) {
          // x element
          myCell.setAttribute('class', 'qmcBit');
          var str;

          if (j >= this.cols - 1 - res.length) {
            str = res.charAt(j - (this.cols - 1 - res.length));
            myCell.innerHTML = str;
          } else {
            str = "0";
            myCell.innerHTML = str;
          }
        } else {
          // y element
          myCell.setAttribute('class', 'qmcBit qmcBitY');
          myCell.setAttribute('title', i);

          myCell.onmousedown = function (event) {
            myCellMouseDown(event);
          };

          if (this.data.funcdata[i] === 0) {
            myCell.innerHTML = "0";
          }

          if (this.data.funcdata[i] === 1) {
            myCell.innerHTML = "1";
          }

          if (this.data.funcdata[i] === 2) {
            myCell.innerHTML = "&times;";
          }
        }

        myRow.appendChild(myCell);
      }

      myTable.appendChild(myRow);
    }

    myTruthTableDiv.appendChild(myTable);
    myInnerDiv.appendChild(myTruthTableDiv);

    for (var i = 0; i < this.data.implicantGroups.length; i++) {
      var myImplicantDiv = document.createElement('div');
      myImplicantDiv.innerHTML = "<div>" + labels['impli'] + " (" + labels['order'] + " " + i + "):</div>";
      myImplicantDiv.setAttribute('class', 'qmcTableLabelDiv');
      this.drawImplicantGroup(this.data.implicantGroups[i], myImplicantDiv, false, 0, false);
      myInnerDiv.appendChild(myImplicantDiv);
    }

    for (var i = 0; i < this.data.primTermTables.length; i++) {
      var resultDiv = document.createElement('div');

      if (i === 0) {
        resultDiv.innerHTML = "<p>" + labels['primChart'] + ":</p";
      } else {
        resultDiv.innerHTML = "<p> " + labels['primChartReduced'] + " " + (i - 1) + "):</p>";
      }

      resultDiv.setAttribute('class', 'qmcTableResultDiv');
      var drawPetrickVars = false;

      if (this.data.petrickTermPrims.length > 0 && i === this.data.primTermTables.length - 1) {
        drawPetrickVars = true;
      }

      this.drawImplicantGroup(this.data.primTerms, resultDiv, true, i, drawPetrickVars);
      var essPTermsDiv = document.createElement('div');
      var essPTermsStr = "";
      var primTermTable = this.data.primTermTables[i];
      var jj = primTermTable.essentialPrimTerms.length;

      for (var j = 0; j < jj; j++) {
        essPTermsStr += primTermTable.essentialPrimTerms[j].coloredTermString;
        if (j !== jj - 1) essPTermsStr += ", ";
      }

      if (jj > 0) {
        essPTermsDiv.innerHTML = "<p>" + labels['extractedPrims'] + ": <span class='qmcMathFont'>" + essPTermsStr + "</span></p>";
        essPTermsDiv.setAttribute('class', 'qmcIndent');
        resultDiv.appendChild(essPTermsDiv);
      }

      myInnerDiv.appendChild(resultDiv);
    }

    if (this.data.petrickTermPrims.length > 0) {
      var petrickDiv = document.createElement('div');
      petrickDiv.innerHTML = "<p> " + labels['petricksM'] + " </p>";
      var petrickInnerDiv = document.createElement('div');
      petrickInnerDiv.innerHTML = "<span class='qmcMathFont'>" + this.data.petrickSolver.log + "</span>";
      petrickInnerDiv.setAttribute('class', 'qmcIndent');
      petrickDiv.appendChild(petrickInnerDiv);
      var petrickEssTermsDiv = document.createElement('div');
      var petrickEssTermsStr = "";
      var jj = this.data.petrickTermPrims.length;

      for (var j = 0; j < jj; j++) {
        petrickEssTermsStr += this.data.petrickTermPrims[j].coloredTermString;
        if (j !== jj - 1) petrickEssTermsStr += ", ";
      }

      if (jj > 0) {
        petrickEssTermsDiv.innerHTML = "<p>" + labels['extractedMPrims'] + " (" + labels['petricksM'] + "): <span class='qmcMathFont'>" + petrickEssTermsStr + "</span></p>";
        petrickEssTermsDiv.setAttribute('class', 'qmcIndent');
        petrickDiv.appendChild(petrickEssTermsDiv);
      }

      myInnerDiv.appendChild(petrickDiv);
    }

    var termDiv = document.createElement('div');
    termDiv.innerHTML = "<p><strong>" + labels['minExp'] + ":</strong> </p> <p ><span class='qmcMathFont'><i>y</i>&nbsp;=&nbsp;" + this.data.coloredMinimalTerm;
    +"</span></p>";
    myInnerDiv.appendChild(termDiv);
    myDiv.appendChild(myInnerDiv);
  };

  function myCellMouseDown(e) {
    var targ;

    if (e.target) {
      targ = e.target;
    } else {
      // deal with Microsoft
      if (e.srcElement) targ = e.srcElement;
    }

    if (targ.nodeType === 3) {
      // deal with Safari
      targ = targ.parentNode;
    }

    var i = parseInt(targ.title);
    that.data.activated(i);
    that.update();
  }
};

/***/ }),

/***/ "./src/img/x.png":
/*!***********************!*\
  !*** ./src/img/x.png ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/x.png";

/***/ }),

/***/ "./src/kmap.scss":
/*!***********************!*\
  !*** ./src/kmap.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader!../node_modules/resolve-url-loader!../node_modules/sass-loader/lib/loader.js?sourceMap!./kmap.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./src/kmap.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader!../node_modules/resolve-url-loader!../node_modules/sass-loader/lib/loader.js?sourceMap!./kmap.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./src/kmap.scss", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader!../node_modules/resolve-url-loader!../node_modules/sass-loader/lib/loader.js?sourceMap!./kmap.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./src/kmap.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/polyfills/all.js":
/*!******************************!*\
  !*** ./src/polyfills/all.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pointer_events_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pointer_events_polyfill */ "./src/polyfills/pointer_events_polyfill.js");
/* harmony import */ var classlist_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classlist-polyfill */ "./node_modules/classlist-polyfill/src/index.js");
/* harmony import */ var classlist_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classlist_polyfill__WEBPACK_IMPORTED_MODULE_1__);


_pointer_events_polyfill__WEBPACK_IMPORTED_MODULE_0__["PointerEventsPolyfill"].initialize();

/***/ }),

/***/ "./src/polyfills/pointer_events_polyfill.js":
/*!**************************************************!*\
  !*** ./src/polyfills/pointer_events_polyfill.js ***!
  \**************************************************/
/*! exports provided: PointerEventsPolyfill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointerEventsPolyfill", function() { return PointerEventsPolyfill; });
/*
 * Pointer Events Polyfill: Adds support for the style attribute "pointer-events: none" to browsers without this feature (namely, IE).
 * (c) 2013, Kent Mewhort, licensed under BSD. See LICENSE.txt for details.
 */
// constructor
var PointerEventsPolyfill = function PointerEventsPolyfill(options) {
  // set defaults
  this.options = {
    selector: '*',
    mouseEvents: ['click', 'dblclick', 'mousedown', 'mouseup'],
    usePolyfillIf: function usePolyfillIf() {
      if (navigator.appName == 'Microsoft Internet Explorer') {
        var agent = navigator.userAgent;

        if (agent.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/) != null) {
          var version = parseFloat(RegExp.$1);
          if (version < 11) return true;
        }
      }

      return false;
    }
  };

  if (options) {
    var obj = this;
    $.each(options, function (k, v) {
      obj.options[k] = v;
    });
  }

  if (this.options.usePolyfillIf()) this.register_mouse_events();
}; // singleton initializer

PointerEventsPolyfill.initialize = function (options) {
  if (PointerEventsPolyfill.singleton == null) PointerEventsPolyfill.singleton = new PointerEventsPolyfill(options);
  return PointerEventsPolyfill.singleton;
}; // handle mouse events w/ support for pointer-events: none


PointerEventsPolyfill.prototype.register_mouse_events = function () {
  // register on all elements (and all future elements) matching the selector
  $(document).on(this.options.mouseEvents.join(" "), this.options.selector, function (e) {
    if ($(this).css('pointer-events') == 'none') {
      // peak at the element below
      var origDisplayAttribute = $(this).css('display');
      $(this).css('display', 'none');
      var underneathElem = document.elementFromPoint(e.clientX, e.clientY);
      if (origDisplayAttribute) $(this).css('display', origDisplayAttribute);else $(this).css('display', ''); // fire the mouse event on the element below

      e.target = underneathElem;
      $(underneathElem).trigger(e);
      return false;
    }

    return true;
  });
};

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9LbWFwL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9LbWFwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0ttYXAvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9LbWFwLy4vbm9kZV9tb2R1bGVzL2NsYXNzbGlzdC1wb2x5ZmlsbC9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vS21hcC8uL3NyYy9rbWFwLnNjc3MiLCJ3ZWJwYWNrOi8vS21hcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly9LbWFwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL3VybC9lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vS21hcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly9LbWFwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly9LbWFwLy4vc3JjL0ttYXAvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL0ttYXAvLi9zcmMvS21hcC9Hcm91cC5qcyIsIndlYnBhY2s6Ly9LbWFwLy4vc3JjL0ttYXAvR3JvdXBzLmpzIiwid2VicGFjazovL0ttYXAvLi9zcmMvS21hcC9LbWFwLmpzIiwid2VicGFjazovL0ttYXAvLi9zcmMvS21hcC9NYWluLmpzIiwid2VicGFjazovL0ttYXAvLi9zcmMvS21hcC9NYW51YWwuanMiLCJ3ZWJwYWNrOi8vS21hcC8uL3NyYy9LbWFwL01hcC5qcyIsIndlYnBhY2s6Ly9LbWFwLy4vc3JjL0ttYXAvTWVzc2FnZURpYWxvZy5qcyIsIndlYnBhY2s6Ly9LbWFwLy4vc3JjL0ttYXAvT3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9LbWFwLy4vc3JjL0ttYXAvU29sdXRpb24uanMiLCJ3ZWJwYWNrOi8vS21hcC8uL3NyYy9LbWFwL1V0aWxpdHkvUmVhZHkuanMiLCJ3ZWJwYWNrOi8vS21hcC8uL3NyYy9LbWFwL1dvcmsuanMiLCJ3ZWJwYWNrOi8vS21hcC8uL3NyYy9Mb2dpYy9FeHByZXNzaW9uLmpzIiwid2VicGFjazovL0ttYXAvLi9zcmMvTG9naWMvTWludGVybXMuanMiLCJ3ZWJwYWNrOi8vS21hcC8uL3NyYy9Mb2dpYy9RdWluZU1jQ2x1c2tleVNvbHZlci5qcyIsIndlYnBhY2s6Ly9LbWFwLy4vc3JjL0xvZ2ljL3FtYy5qcyIsIndlYnBhY2s6Ly9LbWFwLy4vc3JjL2ltZy94LnBuZyIsIndlYnBhY2s6Ly9LbWFwLy4vc3JjL2ttYXAuc2Nzcz9mMTgzIiwid2VicGFjazovL0ttYXAvLi9zcmMvcG9seWZpbGxzL2FsbC5qcyIsIndlYnBhY2s6Ly9LbWFwLy4vc3JjL3BvbHlmaWxscy9wb2ludGVyX2V2ZW50c19wb2x5ZmlsbC5qcyJdLCJuYW1lcyI6WyJHZW5lcmF0b3IiLCJtYWluIiwiZWxlbWVudCIsInRoYXQiLCJtaW50ZXJtcyIsIk1pbnRlcm1zIiwibWludGVybXNTcGFuIiwib3B0aW9ucyIsImZpeGVkIiwiZGl2IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kQ2hpbGQiLCJoMyIsImlubmVyVGV4dCIsImZvcm0iLCJwIiwic2VsZWN0Iiwib3B0aW9uczEiLCJvcHRpb25zMiIsInMiLCJzaXplIiwiZ2VuZG9udGNhcmUiLCJpbm5lckhUTUwiLCJjcmVhdGVUZXh0Tm9kZSIsImJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZ2VuZXJhdGUiLCJ2YWwiLCJ2YWx1ZSIsIm5ld1NpemUiLCJwYXJzZUludCIsIm1hdGNoIiwiZGNNYXgiLCJnZW5lcmF0ZV9ib3VuZGVkIiwiTWF0aCIsInBvdyIsImxpc3QiLCJsaXN0X2RvbnRjYXJlIiwibmV3TWludGVybXMiLCJzZXQiLCJkb250Y2FyZSIsInNldF9mcm9tIiwibGVuZ3RoIiwiR3JvdXAiLCJncm91cHMiLCJzZWxlY3RlZCIsImNvbG9yIiwibHN0IiwiZmlyc3QiLCJpIiwic3BhbiIsImEiLCJyZW1vdmVDaGlsZCIsInJlbW92ZSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwicHJvdG90eXBlIiwiZHJhdyIsImN0eCIsIndpZCIsImhpdCIsImluc2V0RGVwdGgiLCJpbnNldCIsInNwYWNpbmciLCJjb2xzIiwicm93cyIsIm1hcFIiLCJtYXBDIiwibWF4IiwiY250IiwiZHJhd0dyb3VwIiwiYzEiLCJyMSIsImMyIiwicjIiLCJ0IiwiYzMiLCJyMyIsImM0IiwicjQiLCJ3aWQ0IiwiaGl0NCIsImM1IiwicjUiLCJ3aWQ4IiwiaGl0OCIsIngxIiwieTEiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwicmFkaXVzIiwibGluZVdpZHRoIiwic3Ryb2tlU3R5bGUiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJhcmNUbyIsInN0cm9rZSIsIkdyb3VwcyIsInNlbCIsImluaXRpYWxpemUiLCJjb2xvck4iLCJ3b3JrIiwibWFwIiwic3RyaWN0IiwiYW5kMSIsImFuZDIiLCJvciIsImJpdHMiLCJ2YWxpZCIsImh0bWwiLCJkbGciLCJNZXNzYWdlRGlhbG9nIiwib3BlbiIsIm9rIiwiaiIsImFkZF9ncm91cCIsImRyYXdHcm91cHMiLCJjbGVhciIsImdyb3VwIiwiY29sb3JzIiwicHVzaCIsImNhbnZhcyIsImdldF9jYW52YXMiLCJjIiwiZ2V0Q29udGV4dCIsImNsZWFyUmVjdCIsImNvdW50ZXIiLCJzcGxpY2UiLCJLbWFwIiwiUEFDS0FHRSIsInJlcXVpcmUiLCJ2ZXJzaW9uIiwiT3B0aW9ucyIsIm1haW5zIiwic3RhcnQiLCJSZWFkeSIsImdvIiwic3RhcnROb3ciLCJFbGVtZW50IiwiTWFpbiIsImVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImttYXAiLCJnZW5lcmF0b3IiLCJzb2x1dGlvbiIsIm1hbnVhbCIsIk1hbnVhbCIsIldvcmsiLCJTb2x1dGlvbiIsImNvbmZpZyIsInNsaWNlIiwicmVuZGVyIiwibGFiZWxzIiwibWFudWFsTWludGVybXMiLCJtYW51YWxEb250Q2FyZXMiLCJtYW51YWxWYXJpYWJsZXMiLCJsZWZ0IiwibGFiZWwiLCJzZXRBdHRyaWJ1dGUiLCJ0YWtlIiwicmlnaHQiLCJtaW50ZXJtc2xpc3QiLCJwYXJzZSIsImRvbnRjYXJlbGlzdCIsInJlcGxhY2UiLCJzcGxpdCIsImlucHV0IiwicmVNIiwicmUiLCJpdGVtcyIsInJldCIsImZvckVhY2giLCJpdGVtIiwiTWFwIiwidG9wTGVmdCIsImJvdFJpZ2h0IiwidGFibGUiLCJyZXN0IiwiY29saGVhZHMiLCJBIiwiQiIsIkMiLCJEIiwidHIiLCJyIiwidGQiLCJtYWtlX2NlbGwiLCJ3aW5kb3ciLCJzZXRfY2FudmFzIiwidGwiLCJvZmZzZXRMZWZ0IiwidG9wIiwib2Zmc2V0VG9wIiwiYnIiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsIm1pbnRlcm0iLCJ0b19taW50ZXJtIiwiYml0IiwibGFiZWxNaW50ZXJtcyIsImNvbnRhaW5zIiwiaXNfc2VsZWN0ZWQiLCJuIiwic29ydCIsImIiLCJpbmRleE9mIiwidGRzIiwidGl0bGUiLCJib2R5IiwibWFzayIsInRiIiwiZGIiLCJjb250cm9scyIsIk9iamVjdCIsInN1YnN0ciIsIkpTT04iLCJhdG9iIiwibWFwSGVhZGluZyIsInZlcmJvc2UiLCJzb2x2ZSIsInByb3BlcnR5IiwiaGFzT3duUHJvcGVydHkiLCJFcnJvciIsImV4cHJlc3Npb25JbnB1dCIsInJlc3VsdCIsImFwcGVuZCIsImNoZWNrIiwibXQiLCJleHByZXNzaW9uIiwiRXhwcmVzc2lvbiIsInNldF9zaXplIiwic3RyIiwibXNnIiwiZmFpbCIsInFtIiwiUXVpbmVNY0NsdXNrZXlTb2x2ZXIiLCJpbml0IiwidW5kZWZpbmVkIiwiY29tcHV0ZSIsInFtRXhwcmVzc2lvbiIsIm0iLCJpbmxpc3QiLCJhc19nb29kX2FzIiwibWluaW11bUV4cHJlc3Npb24iLCJ0ZXJtcyIsImV4cCIsInRlcm0iLCJmbiIsImF0dGFjaEV2ZW50IiwicmVhZHlTdGF0ZSIsImNoZWNrQm94IiwiY2hlY2tlZCIsImRpc3BsYXkiLCJzeiIsInRlcm1zX2luaXQiLCJvdGhlciIsIm51bV9wcm9kdWN0cyIsIm51bV90ZXJtcyIsImdlbmVyYXRlX21pbnRlcm1zIiwidGVybXNfc2V0IiwicmVzdWx0UyIsInNvcCIsInByb2QiLCJyZXN1bHRQIiwibm90IiwibGV4IiwidG9rZW4iLCJjaCIsImVycm9yIiwiYWR2YW5jZSIsImdldF90ZXJtIiwiZXhwcmVzc2lvbkxvYyIsImxpdGVyYWwiLCJ0b1VwcGVyQ2FzZSIsImNoYXJBdCIsIm1heWJlIiwib25lQ2hhbmNlIiwiZGNDaGFuY2UiLCJudW0iLCJybmQiLCJyYW5kb20iLCJvbmVNaW4iLCJvbmVNYXgiLCJkY01pbiIsImFyZ3VtZW50cyIsImVxdWFsIiwib3RoZXJNaW50ZXJtcyIsIkxvZ2ljIiwid2l0aEJyZWFrIiwiY3IiLCJRdWluZU1jQ2x1c2tleURhdGFDdHJsIiwibnVtVmFycyIsIm5vT2ZWYXJzIiwiYWxsb3dEb250Q2FyZSIsInNldEZ1bmNEYXRhIiwibWluaW1hbFRlcm1QcmltcyIsInRlcm1TdHJpbmciLCJwcmltVGVybSIsImltcCIsImltcGxpY2FudCIsIm9uZSIsIm5lZWRlZCIsImJpdE1hc2siLCJ2IiwidjEiLCJQZXRyaWNrTWV0aG9kIiwicHJvYmxlbSIsIm1heFByb2JsZW1TaXplIiwibG9nIiwidGVzdCIsImFuZEFycmF5IiwiQXJyYXkiLCJvckFycmF5IiwibW9ub21BIiwibW9ub21CIiwiZXEiLCJwcmludEVxbkFycmF5RmFuY3kiLCJsb29wQ291bnRlciIsIm5ld0FuZEFycmF5Iiwib3JUZXJtQSIsIm9yVGVybUIiLCJuZXdPckFycmF5IiwibW9ub20xIiwibW9ub20yIiwicmVzdWx0aW5nTW9ub20iLCJvclRlcm0iLCJuZXdPclRlcm0iLCJzaW1wbGlmeU9yVGVybSIsInByb2JsZW1TaXplIiwiZXFuQXJyYXlQcm9ibGVtU2l6ZSIsImNvbnNvbGUiLCJtYXJrZWRGb3JEZWxldGlvbiIsImtlZXBBIiwib3ZlcmxhcEJvdmVyQSIsImxlbmd0aEEiLCJvdmVybGFwQW92ZXJCIiwibGVuZ3RoQiIsIm1vbm9tIiwiayIsIm1vbm9tQ291bnRlciIsInByaW50RXFuQXJyYXkiLCJQcmltVGVybSIsImNvbG9yZWRUZXJtU3RyaW5nIiwidXNlZCIsIm5lZWRlZEJ5VmFyIiwiSW1wbGljYW50IiwiaXNQcmltIiwiaXNPbmx5RG9udENhcmUiLCJJbXBsaWNhbnRHcm91cCIsIm9yZGVyIiwiUHJpbVRlcm1UYWJsZSIsIm9yZCIsImVzc2VudGlhbFByaW1UZXJtcyIsInJlbWFpbmluZ1ZhcnMiLCJyZW1haW5pbmdQcmltVGVybXMiLCJzdXBlcnNlZGVkUHJpbVRlcm1zIiwiaHN2VG9SZ2IiLCJoIiwiZyIsImZsb29yIiwiZiIsInEiLCJmdW5jZGF0YSIsInByaW1UZXJtcyIsImltcGxpY2FudEdyb3VwcyIsIm1pbmltYWxUZXJtIiwiY29sb3JlZE1pbmltYWxUZXJtIiwicHJpbVRlcm1UYWJsZXMiLCJwZXRyaWNrU29sdmVyIiwicGV0cmlja1Rlcm1QcmltcyIsIm5vIiwibm9PZkZ1bmNEYXRhIiwiYWN0aXZhdGVkIiwiYml0Q291bnQiLCJsYXN0SWciLCJjb250aW51ZUxvb3AiLCJpZyIsImltcGwiLCJpbXAxIiwiaW1wMiIsImZvdW5kIiwieG9yIiwiaTEiLCJpMiIsImZvdW5kTWF0Y2giLCJleGlzdCIsImlzVGhlU2FtZSIsImNvbnRhaW5zT25lIiwiYWxsRnVuY1ByaW1UZXJtIiwia2siLCJ0aGlzVmFsIiwibWluVGVybSIsImNvbG9yU3RyIiwicmVtYWluaW5nIiwicHJpbVRhYmxlTG9vcCIsInByaW1UYWJsZUZvdW5kIiwiY3ljbGljQ292ZXJpbmdGb3VuZCIsInByaW1UZXJtVGFibGUiLCJwcmV2VGFibGUiLCJzdXBlcnNlZGVkIiwiaW1wQSIsInZhckNvdmVyIiwiY291bnRBIiwibCIsImltcEIiLCJjb3VudEIiLCJjb3VudEJJblJlbWFpbmluZyIsImN1cnJlbnRUZXJtcyIsInRvQmVSZW1vdmVkIiwiY291bnQiLCJpaSIsInRtcFJlbWFpbmluZyIsImUiLCJlZSIsInJlbWFpbmluZ0NvdW50Iiwic29sdXRpb25Gb3VuZCIsInNvbHV0aW9ucyIsImJlc3RTb2x1dGlvbiIsImJlc3RDb3VudCIsImJlc3RWYXJDb3VudCIsImZvdW5kQmVzdCIsImJlc3RWYXJDb3VudE5ldyIsImJlc3QiLCJhZGRQcmltVGVybSIsImZpcnN0TCIsIlF1aW5lTWNDbHVza2V5IiwicGFyZW50RGl2SWQiLCJjb2x1bW5zIiwibGFuZ3VhZ2UiLCJteURpdiIsImRpdklkIiwiZGF0YSIsInR0YWJsZSIsIm1pbkV4cCIsImltcGxpIiwicHJpbUNoYXJ0IiwicHJpbUNoYXJ0UmVkdWNlZCIsImV4dHJhY3RlZFByaW1zIiwiZXh0cmFjdGVkTVByaW1zIiwicGV0cmlja3NNIiwicGFyZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ1cGRhdGUiLCJzZXROb09mVmFycyIsInZhcnMiLCJnZW5SYW5kb20iLCJhbGxvd0RvbnRDYXJlcyIsInR5cGUiLCJkcmF3SW1wbGljYW50R3JvdXAiLCJwcmltRmxhZyIsImRyYXdQZXRyaWNrVmFycyIsIm15VGFibGUiLCJteVJvdyIsImNlbGwxaCIsIm15Q2VsbCIsImNlbGxJbXBoIiwidG9TdHJpbmciLCJpTWF4IiwiY2VsbDEiLCJjZWxsMVN0ciIsInJlcyIsImN1cnJlbnRCaXQiLCJjZWxsTGFzdCIsImNlbGxVc2VkIiwicFZhcnMiLCJvbGRJbm5lckRpdiIsIm15SW5uZXJEaXYiLCJteVRydXRoVGFibGVEaXYiLCJvbm1vdXNlZG93biIsIm15Q2VsbE1vdXNlRG93biIsIm15SW1wbGljYW50RGl2IiwicmVzdWx0RGl2IiwiZXNzUFRlcm1zRGl2IiwiZXNzUFRlcm1zU3RyIiwiamoiLCJwZXRyaWNrRGl2IiwicGV0cmlja0lubmVyRGl2IiwicGV0cmlja0Vzc1Rlcm1zRGl2IiwicGV0cmlja0Vzc1Rlcm1zU3RyIiwidGVybURpdiIsInRhcmciLCJ0YXJnZXQiLCJzcmNFbGVtZW50Iiwibm9kZVR5cGUiLCJwYXJlbnROb2RlIiwiUG9pbnRlckV2ZW50c1BvbHlmaWxsIiwic2VsZWN0b3IiLCJtb3VzZUV2ZW50cyIsInVzZVBvbHlmaWxsSWYiLCJuYXZpZ2F0b3IiLCJhcHBOYW1lIiwiYWdlbnQiLCJ1c2VyQWdlbnQiLCJwYXJzZUZsb2F0IiwiUmVnRXhwIiwiJDEiLCJvYmoiLCIkIiwiZWFjaCIsInJlZ2lzdGVyX21vdXNlX2V2ZW50cyIsInNpbmdsZXRvbiIsIm9uIiwiam9pbiIsImNzcyIsIm9yaWdEaXNwbGF5QXR0cmlidXRlIiwidW5kZXJuZWF0aEVsZW0iLCJlbGVtZW50RnJvbVBvaW50IiwiY2xpZW50WCIsImNsaWVudFkiLCJ0cmlnZ2VyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBTTtBQUNOO0FBQ0E7QUFDQSxjQUFNO0FBQ047QUFDQTtBQUNBLGNBQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxlQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBNkI7QUFDN0IscUNBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUFxQixnQkFBZ0I7QUFDckM7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSw2QkFBcUIsZ0JBQWdCO0FBQ3JDO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGFBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsYUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQWtCLDhCQUE4QjtBQUNoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsZUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBb0IsMkJBQTJCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUFtQixjQUFjO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBZ0IsS0FBSztBQUNyQjtBQUNBO0FBQ0E7QUFDQSxjQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUFnQixZQUFZO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQWMsNEJBQTRCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHVCQUFlLDRCQUE0QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHVCQUFlLDRCQUE0QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLHVDQUF1QztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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LEdBQVd3QixjQUFYO0FBQ0FSLE9BQUMsQ0FBQ1EsY0FBRCxDQUFELENBQWtCSSxPQUFsQixDQUEwQmpHLENBQTFCO0FBRUEsYUFBTyxLQUFQO0FBQ0g7O0FBQ0QsV0FBTyxJQUFQO0FBQ0gsR0FyQkQ7QUFzQkgsQ0F4QkQsQyIsImZpbGUiOiJrbWFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiS21hcFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJLbWFwXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHRmdW5jdGlvbiBob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHRkZWxldGUgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0fVxuIFx0dmFyIHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrID0gd2luZG93W1wid2VicGFja0hvdFVwZGF0ZUttYXBcIl07XG4gXHR3aW5kb3dbXCJ3ZWJwYWNrSG90VXBkYXRlS21hcFwiXSA9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gd2VicGFja0hvdFVwZGF0ZUNhbGxiYWNrKGNodW5rSWQsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rSWQsIG1vcmVNb2R1bGVzKTtcbiBcdFx0aWYgKHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKSBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XG4gXHR9IDtcblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gXHRcdHNjcmlwdC5jaGFyc2V0ID0gXCJ1dGYtOFwiO1xuIFx0XHRzY3JpcHQuc3JjID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGNodW5rSWQgKyBcIi5cIiArIGhvdEN1cnJlbnRIYXNoICsgXCIuaG90LXVwZGF0ZS5qc1wiO1xuIFx0XHRpZiAobnVsbCkgc2NyaXB0LmNyb3NzT3JpZ2luID0gbnVsbDtcbiBcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdERvd25sb2FkTWFuaWZlc3QocmVxdWVzdFRpbWVvdXQpIHtcbiBcdFx0cmVxdWVzdFRpbWVvdXQgPSByZXF1ZXN0VGltZW91dCB8fCAxMDAwMDtcbiBcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgPT09IFwidW5kZWZpbmVkXCIpIHtcbiBcdFx0XHRcdHJldHVybiByZWplY3QobmV3IEVycm9yKFwiTm8gYnJvd3NlciBzdXBwb3J0XCIpKTtcbiBcdFx0XHR9XG4gXHRcdFx0dHJ5IHtcbiBcdFx0XHRcdHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gXHRcdFx0XHR2YXIgcmVxdWVzdFBhdGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgaG90Q3VycmVudEhhc2ggKyBcIi5ob3QtdXBkYXRlLmpzb25cIjtcbiBcdFx0XHRcdHJlcXVlc3Qub3BlbihcIkdFVFwiLCByZXF1ZXN0UGF0aCwgdHJ1ZSk7XG4gXHRcdFx0XHRyZXF1ZXN0LnRpbWVvdXQgPSByZXF1ZXN0VGltZW91dDtcbiBcdFx0XHRcdHJlcXVlc3Quc2VuZChudWxsKTtcbiBcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdHJldHVybiByZWplY3QoZXJyKTtcbiBcdFx0XHR9XG4gXHRcdFx0cmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiBcdFx0XHRcdGlmIChyZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHJldHVybjtcbiBcdFx0XHRcdGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCkge1xuIFx0XHRcdFx0XHQvLyB0aW1lb3V0XG4gXHRcdFx0XHRcdHJlamVjdChcbiBcdFx0XHRcdFx0XHRuZXcgRXJyb3IoXCJNYW5pZmVzdCByZXF1ZXN0IHRvIFwiICsgcmVxdWVzdFBhdGggKyBcIiB0aW1lZCBvdXQuXCIpXG4gXHRcdFx0XHRcdCk7XG4gXHRcdFx0XHR9IGVsc2UgaWYgKHJlcXVlc3Quc3RhdHVzID09PSA0MDQpIHtcbiBcdFx0XHRcdFx0Ly8gbm8gdXBkYXRlIGF2YWlsYWJsZVxuIFx0XHRcdFx0XHRyZXNvbHZlKCk7XG4gXHRcdFx0XHR9IGVsc2UgaWYgKHJlcXVlc3Quc3RhdHVzICE9PSAyMDAgJiYgcmVxdWVzdC5zdGF0dXMgIT09IDMwNCkge1xuIFx0XHRcdFx0XHQvLyBvdGhlciBmYWlsdXJlXG4gXHRcdFx0XHRcdHJlamVjdChuZXcgRXJyb3IoXCJNYW5pZmVzdCByZXF1ZXN0IHRvIFwiICsgcmVxdWVzdFBhdGggKyBcIiBmYWlsZWQuXCIpKTtcbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdC8vIHN1Y2Nlc3NcbiBcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHR2YXIgdXBkYXRlID0gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XG4gXHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHtcbiBcdFx0XHRcdFx0XHRyZWplY3QoZSk7XG4gXHRcdFx0XHRcdFx0cmV0dXJuO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdHJlc29sdmUodXBkYXRlKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9O1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0dmFyIGhvdEFwcGx5T25VcGRhdGUgPSB0cnVlO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudEhhc2ggPSBcIjgzNTBjM2QxMjhhZTQ4YjE2YTk5XCI7XG4gXHR2YXIgaG90UmVxdWVzdFRpbWVvdXQgPSAxMDAwMDtcbiBcdHZhciBob3RDdXJyZW50TW9kdWxlRGF0YSA9IHt9O1xuIFx0dmFyIGhvdEN1cnJlbnRDaGlsZE1vZHVsZTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzID0gW107XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50UGFyZW50c1RlbXAgPSBbXTtcblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RDcmVhdGVSZXF1aXJlKG1vZHVsZUlkKSB7XG4gXHRcdHZhciBtZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRpZiAoIW1lKSByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXztcbiBcdFx0dmFyIGZuID0gZnVuY3Rpb24ocmVxdWVzdCkge1xuIFx0XHRcdGlmIChtZS5ob3QuYWN0aXZlKSB7XG4gXHRcdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XSkge1xuIFx0XHRcdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpID09PSAtMSkge1xuIFx0XHRcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cy5wdXNoKG1vZHVsZUlkKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSByZXF1ZXN0O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKG1lLmNoaWxkcmVuLmluZGV4T2YocmVxdWVzdCkgPT09IC0xKSB7XG4gXHRcdFx0XHRcdG1lLmNoaWxkcmVuLnB1c2gocmVxdWVzdCk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdGNvbnNvbGUud2FybihcbiBcdFx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgK1xuIFx0XHRcdFx0XHRcdHJlcXVlc3QgK1xuIFx0XHRcdFx0XHRcdFwiKSBmcm9tIGRpc3Bvc2VkIG1vZHVsZSBcIiArXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWRcbiBcdFx0XHRcdCk7XG4gXHRcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFtdO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhyZXF1ZXN0KTtcbiBcdFx0fTtcbiBcdFx0dmFyIE9iamVjdEZhY3RvcnkgPSBmdW5jdGlvbiBPYmplY3RGYWN0b3J5KG5hbWUpIHtcbiBcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fW25hbWVdO1xuIFx0XHRcdFx0fSxcbiBcdFx0XHRcdHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiBcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXSA9IHZhbHVlO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH07XG4gXHRcdH07XG4gXHRcdGZvciAodmFyIG5hbWUgaW4gX193ZWJwYWNrX3JlcXVpcmVfXykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfX3dlYnBhY2tfcmVxdWlyZV9fLCBuYW1lKSAmJlxuIFx0XHRcdFx0bmFtZSAhPT0gXCJlXCIgJiZcbiBcdFx0XHRcdG5hbWUgIT09IFwidFwiXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIG5hbWUsIE9iamVjdEZhY3RvcnkobmFtZSkpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRmbi5lID0gZnVuY3Rpb24oY2h1bmtJZCkge1xuIFx0XHRcdGlmIChob3RTdGF0dXMgPT09IFwicmVhZHlcIikgaG90U2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcbiBcdFx0XHRob3RDaHVua3NMb2FkaW5nKys7XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShjaHVua0lkKS50aGVuKGZpbmlzaENodW5rTG9hZGluZywgZnVuY3Rpb24oZXJyKSB7XG4gXHRcdFx0XHRmaW5pc2hDaHVua0xvYWRpbmcoKTtcbiBcdFx0XHRcdHRocm93IGVycjtcbiBcdFx0XHR9KTtcblxuIFx0XHRcdGZ1bmN0aW9uIGZpbmlzaENodW5rTG9hZGluZygpIHtcbiBcdFx0XHRcdGhvdENodW5rc0xvYWRpbmctLTtcbiBcdFx0XHRcdGlmIChob3RTdGF0dXMgPT09IFwicHJlcGFyZVwiKSB7XG4gXHRcdFx0XHRcdGlmICghaG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiYgaG90V2FpdGluZ0ZpbGVzID09PSAwKSB7XG4gXHRcdFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9O1xuIFx0XHRmbi50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0XHRpZiAobW9kZSAmIDEpIHZhbHVlID0gZm4odmFsdWUpO1xuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnQodmFsdWUsIG1vZGUgJiB+MSk7XG4gXHRcdH07XG4gXHRcdHJldHVybiBmbjtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RDcmVhdGVNb2R1bGUobW9kdWxlSWQpIHtcbiBcdFx0dmFyIGhvdCA9IHtcbiBcdFx0XHQvLyBwcml2YXRlIHN0dWZmXG4gXHRcdFx0X2FjY2VwdGVkRGVwZW5kZW5jaWVzOiB7fSxcbiBcdFx0XHRfZGVjbGluZWREZXBlbmRlbmNpZXM6IHt9LFxuIFx0XHRcdF9zZWxmQWNjZXB0ZWQ6IGZhbHNlLFxuIFx0XHRcdF9zZWxmRGVjbGluZWQ6IGZhbHNlLFxuIFx0XHRcdF9kaXNwb3NlSGFuZGxlcnM6IFtdLFxuIFx0XHRcdF9tYWluOiBob3RDdXJyZW50Q2hpbGRNb2R1bGUgIT09IG1vZHVsZUlkLFxuXG4gXHRcdFx0Ly8gTW9kdWxlIEFQSVxuIFx0XHRcdGFjdGl2ZTogdHJ1ZSxcbiBcdFx0XHRhY2NlcHQ6IGZ1bmN0aW9uKGRlcCwgY2FsbGJhY2spIHtcbiBcdFx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmQWNjZXB0ZWQgPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJmdW5jdGlvblwiKSBob3QuX3NlbGZBY2NlcHRlZCA9IGRlcDtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpXG4gXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XG4gXHRcdFx0XHRlbHNlIGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XG4gXHRcdFx0fSxcbiBcdFx0XHRkZWNsaW5lOiBmdW5jdGlvbihkZXApIHtcbiBcdFx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmRGVjbGluZWQgPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIilcbiBcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRcdFx0aG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBbaV1dID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBdID0gdHJ1ZTtcbiBcdFx0XHR9LFxuIFx0XHRcdGRpc3Bvc2U6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcbiBcdFx0XHR9LFxuIFx0XHRcdGFkZERpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG4gXHRcdFx0fSxcbiBcdFx0XHRyZW1vdmVEaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdHZhciBpZHggPSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5pbmRleE9mKGNhbGxiYWNrKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkgaG90Ll9kaXNwb3NlSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0fSxcblxuIFx0XHRcdC8vIE1hbmFnZW1lbnQgQVBJXG4gXHRcdFx0Y2hlY2s6IGhvdENoZWNrLFxuIFx0XHRcdGFwcGx5OiBob3RBcHBseSxcbiBcdFx0XHRzdGF0dXM6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdGlmICghbCkgcmV0dXJuIGhvdFN0YXR1cztcbiBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG4gXHRcdFx0fSxcbiBcdFx0XHRhZGRTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHRob3RTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuIFx0XHRcdH0sXG4gXHRcdFx0cmVtb3ZlU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0dmFyIGlkeCA9IGhvdFN0YXR1c0hhbmRsZXJzLmluZGV4T2YobCk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIGhvdFN0YXR1c0hhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdH0sXG5cbiBcdFx0XHQvL2luaGVyaXQgZnJvbSBwcmV2aW91cyBkaXNwb3NlIGNhbGxcbiBcdFx0XHRkYXRhOiBob3RDdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF1cbiBcdFx0fTtcbiBcdFx0aG90Q3VycmVudENoaWxkTW9kdWxlID0gdW5kZWZpbmVkO1xuIFx0XHRyZXR1cm4gaG90O1xuIFx0fVxuXG4gXHR2YXIgaG90U3RhdHVzSGFuZGxlcnMgPSBbXTtcbiBcdHZhciBob3RTdGF0dXMgPSBcImlkbGVcIjtcblxuIFx0ZnVuY3Rpb24gaG90U2V0U3RhdHVzKG5ld1N0YXR1cykge1xuIFx0XHRob3RTdGF0dXMgPSBuZXdTdGF0dXM7XG4gXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaG90U3RhdHVzSGFuZGxlcnMubGVuZ3RoOyBpKyspXG4gXHRcdFx0aG90U3RhdHVzSGFuZGxlcnNbaV0uY2FsbChudWxsLCBuZXdTdGF0dXMpO1xuIFx0fVxuXG4gXHQvLyB3aGlsZSBkb3dubG9hZGluZ1xuIFx0dmFyIGhvdFdhaXRpbmdGaWxlcyA9IDA7XG4gXHR2YXIgaG90Q2h1bmtzTG9hZGluZyA9IDA7XG4gXHR2YXIgaG90V2FpdGluZ0ZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90UmVxdWVzdGVkRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3RBdmFpbGFibGVGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdERlZmVycmVkO1xuXG4gXHQvLyBUaGUgdXBkYXRlIGluZm9cbiBcdHZhciBob3RVcGRhdGUsIGhvdFVwZGF0ZU5ld0hhc2g7XG5cbiBcdGZ1bmN0aW9uIHRvTW9kdWxlSWQoaWQpIHtcbiBcdFx0dmFyIGlzTnVtYmVyID0gK2lkICsgXCJcIiA9PT0gaWQ7XG4gXHRcdHJldHVybiBpc051bWJlciA/ICtpZCA6IGlkO1xuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RDaGVjayhhcHBseSkge1xuIFx0XHRpZiAoaG90U3RhdHVzICE9PSBcImlkbGVcIikge1xuIFx0XHRcdHRocm93IG5ldyBFcnJvcihcImNoZWNrKCkgaXMgb25seSBhbGxvd2VkIGluIGlkbGUgc3RhdHVzXCIpO1xuIFx0XHR9XG4gXHRcdGhvdEFwcGx5T25VcGRhdGUgPSBhcHBseTtcbiBcdFx0aG90U2V0U3RhdHVzKFwiY2hlY2tcIik7XG4gXHRcdHJldHVybiBob3REb3dubG9hZE1hbmlmZXN0KGhvdFJlcXVlc3RUaW1lb3V0KS50aGVuKGZ1bmN0aW9uKHVwZGF0ZSkge1xuIFx0XHRcdGlmICghdXBkYXRlKSB7XG4gXHRcdFx0XHRob3RTZXRTdGF0dXMoXCJpZGxlXCIpO1xuIFx0XHRcdFx0cmV0dXJuIG51bGw7XG4gXHRcdFx0fVxuIFx0XHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwID0ge307XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzTWFwID0ge307XG4gXHRcdFx0aG90QXZhaWxhYmxlRmlsZXNNYXAgPSB1cGRhdGUuYztcbiBcdFx0XHRob3RVcGRhdGVOZXdIYXNoID0gdXBkYXRlLmg7XG5cbiBcdFx0XHRob3RTZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuIFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0XHRob3REZWZlcnJlZCA9IHtcbiBcdFx0XHRcdFx0cmVzb2x2ZTogcmVzb2x2ZSxcbiBcdFx0XHRcdFx0cmVqZWN0OiByZWplY3RcbiBcdFx0XHRcdH07XG4gXHRcdFx0fSk7XG4gXHRcdFx0aG90VXBkYXRlID0ge307XG4gXHRcdFx0dmFyIGNodW5rSWQgPSBcImFwcFwiO1xuIFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb25lLWJsb2Nrc1xuIFx0XHRcdHtcbiBcdFx0XHRcdC8qZ2xvYmFscyBjaHVua0lkICovXG4gXHRcdFx0XHRob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0aG90U3RhdHVzID09PSBcInByZXBhcmVcIiAmJlxuIFx0XHRcdFx0aG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJlxuIFx0XHRcdFx0aG90V2FpdGluZ0ZpbGVzID09PSAwXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdFx0fVxuIFx0XHRcdHJldHVybiBwcm9taXNlO1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RBZGRVcGRhdGVDaHVuayhjaHVua0lkLCBtb3JlTW9kdWxlcykge1xuIFx0XHRpZiAoIWhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdIHx8ICFob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSlcbiBcdFx0XHRyZXR1cm47XG4gXHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gZmFsc2U7XG4gXHRcdGZvciAodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRob3RVcGRhdGVbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZiAoLS1ob3RXYWl0aW5nRmlsZXMgPT09IDAgJiYgaG90Q2h1bmtzTG9hZGluZyA9PT0gMCkge1xuIFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKSB7XG4gXHRcdGlmICghaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0pIHtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0gPSB0cnVlO1xuIFx0XHR9IGVsc2Uge1xuIFx0XHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXMrKztcbiBcdFx0XHRob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdFVwZGF0ZURvd25sb2FkZWQoKSB7XG4gXHRcdGhvdFNldFN0YXR1cyhcInJlYWR5XCIpO1xuIFx0XHR2YXIgZGVmZXJyZWQgPSBob3REZWZlcnJlZDtcbiBcdFx0aG90RGVmZXJyZWQgPSBudWxsO1xuIFx0XHRpZiAoIWRlZmVycmVkKSByZXR1cm47XG4gXHRcdGlmIChob3RBcHBseU9uVXBkYXRlKSB7XG4gXHRcdFx0Ly8gV3JhcCBkZWZlcnJlZCBvYmplY3QgaW4gUHJvbWlzZSB0byBtYXJrIGl0IGFzIGEgd2VsbC1oYW5kbGVkIFByb21pc2UgdG9cbiBcdFx0XHQvLyBhdm9pZCB0cmlnZ2VyaW5nIHVuY2F1Z2h0IGV4Y2VwdGlvbiB3YXJuaW5nIGluIENocm9tZS5cbiBcdFx0XHQvLyBTZWUgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDY1NjY2XG4gXHRcdFx0UHJvbWlzZS5yZXNvbHZlKClcbiBcdFx0XHRcdC50aGVuKGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0XHRyZXR1cm4gaG90QXBwbHkoaG90QXBwbHlPblVwZGF0ZSk7XG4gXHRcdFx0XHR9KVxuIFx0XHRcdFx0LnRoZW4oXG4gXHRcdFx0XHRcdGZ1bmN0aW9uKHJlc3VsdCkge1xuIFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmUocmVzdWx0KTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0ZnVuY3Rpb24oZXJyKSB7XG4gXHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0KGVycik7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdCk7XG4gXHRcdH0gZWxzZSB7XG4gXHRcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHRcdGZvciAodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xuIFx0XHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xuIFx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaCh0b01vZHVsZUlkKGlkKSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHRcdGRlZmVycmVkLnJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RBcHBseShvcHRpb25zKSB7XG4gXHRcdGlmIChob3RTdGF0dXMgIT09IFwicmVhZHlcIilcbiBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJhcHBseSgpIGlzIG9ubHkgYWxsb3dlZCBpbiByZWFkeSBzdGF0dXNcIik7XG4gXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gXHRcdHZhciBjYjtcbiBcdFx0dmFyIGk7XG4gXHRcdHZhciBqO1xuIFx0XHR2YXIgbW9kdWxlO1xuIFx0XHR2YXIgbW9kdWxlSWQ7XG5cbiBcdFx0ZnVuY3Rpb24gZ2V0QWZmZWN0ZWRTdHVmZih1cGRhdGVNb2R1bGVJZCkge1xuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbdXBkYXRlTW9kdWxlSWRdO1xuIFx0XHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuXG4gXHRcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLnNsaWNlKCkubWFwKGZ1bmN0aW9uKGlkKSB7XG4gXHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRjaGFpbjogW2lkXSxcbiBcdFx0XHRcdFx0aWQ6IGlkXG4gXHRcdFx0XHR9O1xuIFx0XHRcdH0pO1xuIFx0XHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gXHRcdFx0XHR2YXIgcXVldWVJdGVtID0gcXVldWUucG9wKCk7XG4gXHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZUl0ZW0uaWQ7XG4gXHRcdFx0XHR2YXIgY2hhaW4gPSBxdWV1ZUl0ZW0uY2hhaW47XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmICghbW9kdWxlIHx8IG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZCkgY29udGludWU7XG4gXHRcdFx0XHRpZiAobW9kdWxlLmhvdC5fc2VsZkRlY2xpbmVkKSB7XG4gXHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWRlY2xpbmVkXCIsXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKG1vZHVsZS5ob3QuX21haW4pIHtcbiBcdFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcInVuYWNjZXB0ZWRcIixcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZS5wYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdHZhciBwYXJlbnRJZCA9IG1vZHVsZS5wYXJlbnRzW2ldO1xuIFx0XHRcdFx0XHR2YXIgcGFyZW50ID0gaW5zdGFsbGVkTW9kdWxlc1twYXJlbnRJZF07XG4gXHRcdFx0XHRcdGlmICghcGFyZW50KSBjb250aW51ZTtcbiBcdFx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuIFx0XHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0XHR0eXBlOiBcImRlY2xpbmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0cGFyZW50SWQ6IHBhcmVudElkXG4gXHRcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAob3V0ZGF0ZWRNb2R1bGVzLmluZGV4T2YocGFyZW50SWQpICE9PSAtMSkgY29udGludWU7XG4gXHRcdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSlcbiBcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSA9IFtdO1xuIFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSwgW21vZHVsZUlkXSk7XG4gXHRcdFx0XHRcdFx0Y29udGludWU7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXTtcbiBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gocGFyZW50SWQpO1xuIFx0XHRcdFx0XHRxdWV1ZS5wdXNoKHtcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuIFx0XHRcdFx0XHRcdGlkOiBwYXJlbnRJZFxuIFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG5cbiBcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0dHlwZTogXCJhY2NlcHRlZFwiLFxuIFx0XHRcdFx0bW9kdWxlSWQ6IHVwZGF0ZU1vZHVsZUlkLFxuIFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzOiBvdXRkYXRlZE1vZHVsZXMsXG4gXHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llczogb3V0ZGF0ZWREZXBlbmRlbmNpZXNcbiBcdFx0XHR9O1xuIFx0XHR9XG5cbiBcdFx0ZnVuY3Rpb24gYWRkQWxsVG9TZXQoYSwgYikge1xuIFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0dmFyIGl0ZW0gPSBiW2ldO1xuIFx0XHRcdFx0aWYgKGEuaW5kZXhPZihpdGVtKSA9PT0gLTEpIGEucHVzaChpdGVtKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBhdCBiZWdpbiBhbGwgdXBkYXRlcyBtb2R1bGVzIGFyZSBvdXRkYXRlZFxuIFx0XHQvLyB0aGUgXCJvdXRkYXRlZFwiIHN0YXR1cyBjYW4gcHJvcGFnYXRlIHRvIHBhcmVudHMgaWYgdGhleSBkb24ndCBhY2NlcHQgdGhlIGNoaWxkcmVuXG4gXHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuIFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG4gXHRcdHZhciBhcHBsaWVkVXBkYXRlID0ge307XG5cbiBcdFx0dmFyIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSA9IGZ1bmN0aW9uIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSgpIHtcbiBcdFx0XHRjb25zb2xlLndhcm4oXG4gXHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArIHJlc3VsdC5tb2R1bGVJZCArIFwiKSB0byBkaXNwb3NlZCBtb2R1bGVcIlxuIFx0XHRcdCk7XG4gXHRcdH07XG5cbiBcdFx0Zm9yICh2YXIgaWQgaW4gaG90VXBkYXRlKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xuIFx0XHRcdFx0bW9kdWxlSWQgPSB0b01vZHVsZUlkKGlkKTtcbiBcdFx0XHRcdC8qKiBAdHlwZSB7VE9ET30gKi9cbiBcdFx0XHRcdHZhciByZXN1bHQ7XG4gXHRcdFx0XHRpZiAoaG90VXBkYXRlW2lkXSkge1xuIFx0XHRcdFx0XHRyZXN1bHQgPSBnZXRBZmZlY3RlZFN0dWZmKG1vZHVsZUlkKTtcbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdHJlc3VsdCA9IHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcImRpc3Bvc2VkXCIsXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IGlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHQvKiogQHR5cGUge0Vycm9yfGZhbHNlfSAqL1xuIFx0XHRcdFx0dmFyIGFib3J0RXJyb3IgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBkb0FwcGx5ID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgZG9EaXNwb3NlID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgY2hhaW5JbmZvID0gXCJcIjtcbiBcdFx0XHRcdGlmIChyZXN1bHQuY2hhaW4pIHtcbiBcdFx0XHRcdFx0Y2hhaW5JbmZvID0gXCJcXG5VcGRhdGUgcHJvcGFnYXRpb246IFwiICsgcmVzdWx0LmNoYWluLmpvaW4oXCIgLT4gXCIpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c3dpdGNoIChyZXN1bHQudHlwZSkge1xuIFx0XHRcdFx0XHRjYXNlIFwic2VsZi1kZWNsaW5lZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIHNlbGYgZGVjbGluZTogXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiZGVjbGluZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBkZWNsaW5lZCBkZXBlbmRlbmN5OiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRcIiBpbiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0LnBhcmVudElkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJ1bmFjY2VwdGVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25VbmFjY2VwdGVkKSBvcHRpb25zLm9uVW5hY2NlcHRlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVVbmFjY2VwdGVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2UgXCIgKyBtb2R1bGVJZCArIFwiIGlzIG5vdCBhY2NlcHRlZFwiICsgY2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiYWNjZXB0ZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkFjY2VwdGVkKSBvcHRpb25zLm9uQWNjZXB0ZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRkb0FwcGx5ID0gdHJ1ZTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EaXNwb3NlZCkgb3B0aW9ucy5vbkRpc3Bvc2VkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0ZG9EaXNwb3NlID0gdHJ1ZTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0ZGVmYXVsdDpcbiBcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmV4Y2VwdGlvbiB0eXBlIFwiICsgcmVzdWx0LnR5cGUpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGFib3J0RXJyb3IpIHtcbiBcdFx0XHRcdFx0aG90U2V0U3RhdHVzKFwiYWJvcnRcIik7XG4gXHRcdFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChhYm9ydEVycm9yKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChkb0FwcGx5KSB7XG4gXHRcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gaG90VXBkYXRlW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCByZXN1bHQub3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0XHRcdFx0Zm9yIChtb2R1bGVJZCBpbiByZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRcdFx0XHRpZiAoXG4gXHRcdFx0XHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoXG4gXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcyxcbiBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWRcbiBcdFx0XHRcdFx0XHRcdClcbiBcdFx0XHRcdFx0XHQpIHtcbiBcdFx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKVxuIFx0XHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0gPSBbXTtcbiBcdFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KFxuIFx0XHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0sXG4gXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF1cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoZG9EaXNwb3NlKSB7XG4gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgW3Jlc3VsdC5tb2R1bGVJZF0pO1xuIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IHdhcm5VbmV4cGVjdGVkUmVxdWlyZTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBTdG9yZSBzZWxmIGFjY2VwdGVkIG91dGRhdGVkIG1vZHVsZXMgdG8gcmVxdWlyZSB0aGVtIGxhdGVyIGJ5IHRoZSBtb2R1bGUgc3lzdGVtXG4gXHRcdHZhciBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0Zm9yIChpID0gMDsgaSA8IG91dGRhdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdG1vZHVsZUlkID0gb3V0ZGF0ZWRNb2R1bGVzW2ldO1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdICYmXG4gXHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZFxuIFx0XHRcdClcbiBcdFx0XHRcdG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5wdXNoKHtcbiBcdFx0XHRcdFx0bW9kdWxlOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0ZXJyb3JIYW5kbGVyOiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZFxuIFx0XHRcdFx0fSk7XG4gXHRcdH1cblxuIFx0XHQvLyBOb3cgaW4gXCJkaXNwb3NlXCIgcGhhc2VcbiBcdFx0aG90U2V0U3RhdHVzKFwiZGlzcG9zZVwiKTtcbiBcdFx0T2JqZWN0LmtleXMoaG90QXZhaWxhYmxlRmlsZXNNYXApLmZvckVhY2goZnVuY3Rpb24oY2h1bmtJZCkge1xuIFx0XHRcdGlmIChob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSA9PT0gZmFsc2UpIHtcbiBcdFx0XHRcdGhvdERpc3Bvc2VDaHVuayhjaHVua0lkKTtcbiBcdFx0XHR9XG4gXHRcdH0pO1xuXG4gXHRcdHZhciBpZHg7XG4gXHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpO1xuIFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuIFx0XHRcdG1vZHVsZUlkID0gcXVldWUucG9wKCk7XG4gXHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0aWYgKCFtb2R1bGUpIGNvbnRpbnVlO1xuXG4gXHRcdFx0dmFyIGRhdGEgPSB7fTtcblxuIFx0XHRcdC8vIENhbGwgZGlzcG9zZSBoYW5kbGVyc1xuIFx0XHRcdHZhciBkaXNwb3NlSGFuZGxlcnMgPSBtb2R1bGUuaG90Ll9kaXNwb3NlSGFuZGxlcnM7XG4gXHRcdFx0Zm9yIChqID0gMDsgaiA8IGRpc3Bvc2VIYW5kbGVycy5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0Y2IgPSBkaXNwb3NlSGFuZGxlcnNbal07XG4gXHRcdFx0XHRjYihkYXRhKTtcbiBcdFx0XHR9XG4gXHRcdFx0aG90Q3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdID0gZGF0YTtcblxuIFx0XHRcdC8vIGRpc2FibGUgbW9kdWxlICh0aGlzIGRpc2FibGVzIHJlcXVpcmVzIGZyb20gdGhpcyBtb2R1bGUpXG4gXHRcdFx0bW9kdWxlLmhvdC5hY3RpdmUgPSBmYWxzZTtcblxuIFx0XHRcdC8vIHJlbW92ZSBtb2R1bGUgZnJvbSBjYWNoZVxuIFx0XHRcdGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcblxuIFx0XHRcdC8vIHdoZW4gZGlzcG9zaW5nIHRoZXJlIGlzIG5vIG5lZWQgdG8gY2FsbCBkaXNwb3NlIGhhbmRsZXJcbiBcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuXG4gXHRcdFx0Ly8gcmVtb3ZlIFwicGFyZW50c1wiIHJlZmVyZW5jZXMgZnJvbSBhbGwgY2hpbGRyZW5cbiBcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgY2hpbGQgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZS5jaGlsZHJlbltqXV07XG4gXHRcdFx0XHRpZiAoIWNoaWxkKSBjb250aW51ZTtcbiBcdFx0XHRcdGlkeCA9IGNoaWxkLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIHtcbiBcdFx0XHRcdFx0Y2hpbGQucGFyZW50cy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyByZW1vdmUgb3V0ZGF0ZWQgZGVwZW5kZW5jeSBmcm9tIG1vZHVsZSBjaGlsZHJlblxuIFx0XHR2YXIgZGVwZW5kZW5jeTtcbiBcdFx0dmFyIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzO1xuIFx0XHRmb3IgKG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZClcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuIFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xuIFx0XHRcdFx0XHRcdGlkeCA9IG1vZHVsZS5jaGlsZHJlbi5pbmRleE9mKGRlcGVuZGVuY3kpO1xuIFx0XHRcdFx0XHRcdGlmIChpZHggPj0gMCkgbW9kdWxlLmNoaWxkcmVuLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTm90IGluIFwiYXBwbHlcIiBwaGFzZVxuIFx0XHRob3RTZXRTdGF0dXMoXCJhcHBseVwiKTtcblxuIFx0XHRob3RDdXJyZW50SGFzaCA9IGhvdFVwZGF0ZU5ld0hhc2g7XG5cbiBcdFx0Ly8gaW5zZXJ0IG5ldyBjb2RlXG4gXHRcdGZvciAobW9kdWxlSWQgaW4gYXBwbGllZFVwZGF0ZSkge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXBwbGllZFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGNhbGwgYWNjZXB0IGhhbmRsZXJzXG4gXHRcdHZhciBlcnJvciA9IG51bGw7XG4gXHRcdGZvciAobW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKVxuIFx0XHRcdCkge1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAobW9kdWxlKSB7XG4gXHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID0gb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHR2YXIgY2FsbGJhY2tzID0gW107XG4gXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXTtcbiBcdFx0XHRcdFx0XHRjYiA9IG1vZHVsZS5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcGVuZGVuY3ldO1xuIFx0XHRcdFx0XHRcdGlmIChjYikge1xuIFx0XHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrcy5pbmRleE9mKGNiKSAhPT0gLTEpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzLnB1c2goY2IpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdFx0Y2IgPSBjYWxsYmFja3NbaV07XG4gXHRcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHRcdGNiKG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzKTtcbiBcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2ldLFxuIFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBMb2FkIHNlbGYgYWNjZXB0ZWQgbW9kdWxlc1xuIFx0XHRmb3IgKGkgPSAwOyBpIDwgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGl0ZW0gPSBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXNbaV07XG4gXHRcdFx0bW9kdWxlSWQgPSBpdGVtLm1vZHVsZTtcbiBcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XG4gXHRcdFx0dHJ5IHtcbiBcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpO1xuIFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0aWYgKHR5cGVvZiBpdGVtLmVycm9ySGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gXHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0aXRlbS5lcnJvckhhbmRsZXIoZXJyKTtcbiBcdFx0XHRcdFx0fSBjYXRjaCAoZXJyMikge1xuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIyLFxuIFx0XHRcdFx0XHRcdFx0XHRvcmlnaW5hbEVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnIyO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvcmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGhhbmRsZSBlcnJvcnMgaW4gYWNjZXB0IGhhbmRsZXJzIGFuZCBzZWxmIGFjY2VwdGVkIG1vZHVsZSBsb2FkXG4gXHRcdGlmIChlcnJvcikge1xuIFx0XHRcdGhvdFNldFN0YXR1cyhcImZhaWxcIik7XG4gXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiBcdFx0fVxuXG4gXHRcdGhvdFNldFN0YXR1cyhcImlkbGVcIik7XG4gXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gXHRcdFx0cmVzb2x2ZShvdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aG90OiBob3RDcmVhdGVNb2R1bGUobW9kdWxlSWQpLFxuIFx0XHRcdHBhcmVudHM6IChob3RDdXJyZW50UGFyZW50c1RlbXAgPSBob3RDdXJyZW50UGFyZW50cywgaG90Q3VycmVudFBhcmVudHMgPSBbXSwgaG90Q3VycmVudFBhcmVudHNUZW1wKSxcbiBcdFx0XHRjaGlsZHJlbjogW11cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgaG90Q3JlYXRlUmVxdWlyZShtb2R1bGVJZCkpO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIF9fd2VicGFja19oYXNoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gaG90Q3VycmVudEhhc2g7IH07XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gaG90Q3JlYXRlUmVxdWlyZShcIi4vaW5kZXguanNcIikoX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwiLy8gVGhlIHB1YmxpYy1wYXRoIG1vZHVsZSBtdXN0IGJlIGltcG9ydGVkIGZpcnN0IVxyXG4vLyBpbXBvcnQgJy4vc3JjL3B1YmxpYy1wYXRoLmpzJztcclxuLy9cclxuaW1wb3J0ICcuL3NyYy9wb2x5ZmlsbHMvYWxsJztcclxuaW1wb3J0ICcuL3NyYy9rbWFwLnNjc3MnO1xyXG5cclxuaW1wb3J0IHtLbWFwfSBmcm9tICcuL3NyYy9LbWFwL0ttYXAnO1xyXG5leHBvcnQge0ttYXAgYXMgZGVmYXVsdH07XHJcbiIsIi8qXG4gKiBjbGFzc0xpc3QuanM6IENyb3NzLWJyb3dzZXIgZnVsbCBlbGVtZW50LmNsYXNzTGlzdCBpbXBsZW1lbnRhdGlvbi5cbiAqIDEuMS4yMDE3MDQyN1xuICpcbiAqIEJ5IEVsaSBHcmV5LCBodHRwOi8vZWxpZ3JleS5jb21cbiAqIExpY2Vuc2U6IERlZGljYXRlZCB0byB0aGUgcHVibGljIGRvbWFpbi5cbiAqICAgU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lbGlncmV5L2NsYXNzTGlzdC5qcy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kXG4gKi9cblxuLypnbG9iYWwgc2VsZiwgZG9jdW1lbnQsIERPTUV4Y2VwdGlvbiAqL1xuXG4vKiEgQHNvdXJjZSBodHRwOi8vcHVybC5lbGlncmV5LmNvbS9naXRodWIvY2xhc3NMaXN0LmpzL2Jsb2IvbWFzdGVyL2NsYXNzTGlzdC5qcyAqL1xuXG5pZiAoXCJkb2N1bWVudFwiIGluIHdpbmRvdy5zZWxmKSB7XG5cbi8vIEZ1bGwgcG9seWZpbGwgZm9yIGJyb3dzZXJzIHdpdGggbm8gY2xhc3NMaXN0IHN1cHBvcnRcbi8vIEluY2x1ZGluZyBJRSA8IEVkZ2UgbWlzc2luZyBTVkdFbGVtZW50LmNsYXNzTGlzdFxuaWYgKCEoXCJjbGFzc0xpc3RcIiBpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiX1wiKSkgXG5cdHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyAmJiAhKFwiY2xhc3NMaXN0XCIgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcImdcIikpKSB7XG5cbihmdW5jdGlvbiAodmlldykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuaWYgKCEoJ0VsZW1lbnQnIGluIHZpZXcpKSByZXR1cm47XG5cbnZhclxuXHQgIGNsYXNzTGlzdFByb3AgPSBcImNsYXNzTGlzdFwiXG5cdCwgcHJvdG9Qcm9wID0gXCJwcm90b3R5cGVcIlxuXHQsIGVsZW1DdHJQcm90byA9IHZpZXcuRWxlbWVudFtwcm90b1Byb3BdXG5cdCwgb2JqQ3RyID0gT2JqZWN0XG5cdCwgc3RyVHJpbSA9IFN0cmluZ1twcm90b1Byb3BdLnRyaW0gfHwgZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnJlcGxhY2UoL15cXHMrfFxccyskL2csIFwiXCIpO1xuXHR9XG5cdCwgYXJySW5kZXhPZiA9IEFycmF5W3Byb3RvUHJvcF0uaW5kZXhPZiB8fCBmdW5jdGlvbiAoaXRlbSkge1xuXHRcdHZhclxuXHRcdFx0ICBpID0gMFxuXHRcdFx0LCBsZW4gPSB0aGlzLmxlbmd0aFxuXHRcdDtcblx0XHRmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRpZiAoaSBpbiB0aGlzICYmIHRoaXNbaV0gPT09IGl0ZW0pIHtcblx0XHRcdFx0cmV0dXJuIGk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiAtMTtcblx0fVxuXHQvLyBWZW5kb3JzOiBwbGVhc2UgYWxsb3cgY29udGVudCBjb2RlIHRvIGluc3RhbnRpYXRlIERPTUV4Y2VwdGlvbnNcblx0LCBET01FeCA9IGZ1bmN0aW9uICh0eXBlLCBtZXNzYWdlKSB7XG5cdFx0dGhpcy5uYW1lID0gdHlwZTtcblx0XHR0aGlzLmNvZGUgPSBET01FeGNlcHRpb25bdHlwZV07XG5cdFx0dGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcblx0fVxuXHQsIGNoZWNrVG9rZW5BbmRHZXRJbmRleCA9IGZ1bmN0aW9uIChjbGFzc0xpc3QsIHRva2VuKSB7XG5cdFx0aWYgKHRva2VuID09PSBcIlwiKSB7XG5cdFx0XHR0aHJvdyBuZXcgRE9NRXgoXG5cdFx0XHRcdCAgXCJTWU5UQVhfRVJSXCJcblx0XHRcdFx0LCBcIkFuIGludmFsaWQgb3IgaWxsZWdhbCBzdHJpbmcgd2FzIHNwZWNpZmllZFwiXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRpZiAoL1xccy8udGVzdCh0b2tlbikpIHtcblx0XHRcdHRocm93IG5ldyBET01FeChcblx0XHRcdFx0ICBcIklOVkFMSURfQ0hBUkFDVEVSX0VSUlwiXG5cdFx0XHRcdCwgXCJTdHJpbmcgY29udGFpbnMgYW4gaW52YWxpZCBjaGFyYWN0ZXJcIlxuXHRcdFx0KTtcblx0XHR9XG5cdFx0cmV0dXJuIGFyckluZGV4T2YuY2FsbChjbGFzc0xpc3QsIHRva2VuKTtcblx0fVxuXHQsIENsYXNzTGlzdCA9IGZ1bmN0aW9uIChlbGVtKSB7XG5cdFx0dmFyXG5cdFx0XHQgIHRyaW1tZWRDbGFzc2VzID0gc3RyVHJpbS5jYWxsKGVsZW0uZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikgfHwgXCJcIilcblx0XHRcdCwgY2xhc3NlcyA9IHRyaW1tZWRDbGFzc2VzID8gdHJpbW1lZENsYXNzZXMuc3BsaXQoL1xccysvKSA6IFtdXG5cdFx0XHQsIGkgPSAwXG5cdFx0XHQsIGxlbiA9IGNsYXNzZXMubGVuZ3RoXG5cdFx0O1xuXHRcdGZvciAoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdHRoaXMucHVzaChjbGFzc2VzW2ldKTtcblx0XHR9XG5cdFx0dGhpcy5fdXBkYXRlQ2xhc3NOYW1lID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0ZWxlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCB0aGlzLnRvU3RyaW5nKCkpO1xuXHRcdH07XG5cdH1cblx0LCBjbGFzc0xpc3RQcm90byA9IENsYXNzTGlzdFtwcm90b1Byb3BdID0gW11cblx0LCBjbGFzc0xpc3RHZXR0ZXIgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIG5ldyBDbGFzc0xpc3QodGhpcyk7XG5cdH1cbjtcbi8vIE1vc3QgRE9NRXhjZXB0aW9uIGltcGxlbWVudGF0aW9ucyBkb24ndCBhbGxvdyBjYWxsaW5nIERPTUV4Y2VwdGlvbidzIHRvU3RyaW5nKClcbi8vIG9uIG5vbi1ET01FeGNlcHRpb25zLiBFcnJvcidzIHRvU3RyaW5nKCkgaXMgc3VmZmljaWVudCBoZXJlLlxuRE9NRXhbcHJvdG9Qcm9wXSA9IEVycm9yW3Byb3RvUHJvcF07XG5jbGFzc0xpc3RQcm90by5pdGVtID0gZnVuY3Rpb24gKGkpIHtcblx0cmV0dXJuIHRoaXNbaV0gfHwgbnVsbDtcbn07XG5jbGFzc0xpc3RQcm90by5jb250YWlucyA9IGZ1bmN0aW9uICh0b2tlbikge1xuXHR0b2tlbiArPSBcIlwiO1xuXHRyZXR1cm4gY2hlY2tUb2tlbkFuZEdldEluZGV4KHRoaXMsIHRva2VuKSAhPT0gLTE7XG59O1xuY2xhc3NMaXN0UHJvdG8uYWRkID0gZnVuY3Rpb24gKCkge1xuXHR2YXJcblx0XHQgIHRva2VucyA9IGFyZ3VtZW50c1xuXHRcdCwgaSA9IDBcblx0XHQsIGwgPSB0b2tlbnMubGVuZ3RoXG5cdFx0LCB0b2tlblxuXHRcdCwgdXBkYXRlZCA9IGZhbHNlXG5cdDtcblx0ZG8ge1xuXHRcdHRva2VuID0gdG9rZW5zW2ldICsgXCJcIjtcblx0XHRpZiAoY2hlY2tUb2tlbkFuZEdldEluZGV4KHRoaXMsIHRva2VuKSA9PT0gLTEpIHtcblx0XHRcdHRoaXMucHVzaCh0b2tlbik7XG5cdFx0XHR1cGRhdGVkID0gdHJ1ZTtcblx0XHR9XG5cdH1cblx0d2hpbGUgKCsraSA8IGwpO1xuXG5cdGlmICh1cGRhdGVkKSB7XG5cdFx0dGhpcy5fdXBkYXRlQ2xhc3NOYW1lKCk7XG5cdH1cbn07XG5jbGFzc0xpc3RQcm90by5yZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdHZhclxuXHRcdCAgdG9rZW5zID0gYXJndW1lbnRzXG5cdFx0LCBpID0gMFxuXHRcdCwgbCA9IHRva2Vucy5sZW5ndGhcblx0XHQsIHRva2VuXG5cdFx0LCB1cGRhdGVkID0gZmFsc2Vcblx0XHQsIGluZGV4XG5cdDtcblx0ZG8ge1xuXHRcdHRva2VuID0gdG9rZW5zW2ldICsgXCJcIjtcblx0XHRpbmRleCA9IGNoZWNrVG9rZW5BbmRHZXRJbmRleCh0aGlzLCB0b2tlbik7XG5cdFx0d2hpbGUgKGluZGV4ICE9PSAtMSkge1xuXHRcdFx0dGhpcy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0dXBkYXRlZCA9IHRydWU7XG5cdFx0XHRpbmRleCA9IGNoZWNrVG9rZW5BbmRHZXRJbmRleCh0aGlzLCB0b2tlbik7XG5cdFx0fVxuXHR9XG5cdHdoaWxlICgrK2kgPCBsKTtcblxuXHRpZiAodXBkYXRlZCkge1xuXHRcdHRoaXMuX3VwZGF0ZUNsYXNzTmFtZSgpO1xuXHR9XG59O1xuY2xhc3NMaXN0UHJvdG8udG9nZ2xlID0gZnVuY3Rpb24gKHRva2VuLCBmb3JjZSkge1xuXHR0b2tlbiArPSBcIlwiO1xuXG5cdHZhclxuXHRcdCAgcmVzdWx0ID0gdGhpcy5jb250YWlucyh0b2tlbilcblx0XHQsIG1ldGhvZCA9IHJlc3VsdCA/XG5cdFx0XHRmb3JjZSAhPT0gdHJ1ZSAmJiBcInJlbW92ZVwiXG5cdFx0OlxuXHRcdFx0Zm9yY2UgIT09IGZhbHNlICYmIFwiYWRkXCJcblx0O1xuXG5cdGlmIChtZXRob2QpIHtcblx0XHR0aGlzW21ldGhvZF0odG9rZW4pO1xuXHR9XG5cblx0aWYgKGZvcmNlID09PSB0cnVlIHx8IGZvcmNlID09PSBmYWxzZSkge1xuXHRcdHJldHVybiBmb3JjZTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gIXJlc3VsdDtcblx0fVxufTtcbmNsYXNzTGlzdFByb3RvLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy5qb2luKFwiIFwiKTtcbn07XG5cbmlmIChvYmpDdHIuZGVmaW5lUHJvcGVydHkpIHtcblx0dmFyIGNsYXNzTGlzdFByb3BEZXNjID0ge1xuXHRcdCAgZ2V0OiBjbGFzc0xpc3RHZXR0ZXJcblx0XHQsIGVudW1lcmFibGU6IHRydWVcblx0XHQsIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuXHR9O1xuXHR0cnkge1xuXHRcdG9iakN0ci5kZWZpbmVQcm9wZXJ0eShlbGVtQ3RyUHJvdG8sIGNsYXNzTGlzdFByb3AsIGNsYXNzTGlzdFByb3BEZXNjKTtcblx0fSBjYXRjaCAoZXgpIHsgLy8gSUUgOCBkb2Vzbid0IHN1cHBvcnQgZW51bWVyYWJsZTp0cnVlXG5cdFx0Ly8gYWRkaW5nIHVuZGVmaW5lZCB0byBmaWdodCB0aGlzIGlzc3VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lbGlncmV5L2NsYXNzTGlzdC5qcy9pc3N1ZXMvMzZcblx0XHQvLyBtb2Rlcm5pZSBJRTgtTVNXNyBtYWNoaW5lIGhhcyBJRTggOC4wLjYwMDEuMTg3MDIgYW5kIGlzIGFmZmVjdGVkXG5cdFx0aWYgKGV4Lm51bWJlciA9PT0gdW5kZWZpbmVkIHx8IGV4Lm51bWJlciA9PT0gLTB4N0ZGNUVDNTQpIHtcblx0XHRcdGNsYXNzTGlzdFByb3BEZXNjLmVudW1lcmFibGUgPSBmYWxzZTtcblx0XHRcdG9iakN0ci5kZWZpbmVQcm9wZXJ0eShlbGVtQ3RyUHJvdG8sIGNsYXNzTGlzdFByb3AsIGNsYXNzTGlzdFByb3BEZXNjKTtcblx0XHR9XG5cdH1cbn0gZWxzZSBpZiAob2JqQ3RyW3Byb3RvUHJvcF0uX19kZWZpbmVHZXR0ZXJfXykge1xuXHRlbGVtQ3RyUHJvdG8uX19kZWZpbmVHZXR0ZXJfXyhjbGFzc0xpc3RQcm9wLCBjbGFzc0xpc3RHZXR0ZXIpO1xufVxuXG59KHdpbmRvdy5zZWxmKSk7XG5cbn1cblxuLy8gVGhlcmUgaXMgZnVsbCBvciBwYXJ0aWFsIG5hdGl2ZSBjbGFzc0xpc3Qgc3VwcG9ydCwgc28ganVzdCBjaGVjayBpZiB3ZSBuZWVkXG4vLyB0byBub3JtYWxpemUgdGhlIGFkZC9yZW1vdmUgYW5kIHRvZ2dsZSBBUElzLlxuXG4oZnVuY3Rpb24gKCkge1xuXHRcInVzZSBzdHJpY3RcIjtcblxuXHR2YXIgdGVzdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiX1wiKTtcblxuXHR0ZXN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYzFcIiwgXCJjMlwiKTtcblxuXHQvLyBQb2x5ZmlsbCBmb3IgSUUgMTAvMTEgYW5kIEZpcmVmb3ggPDI2LCB3aGVyZSBjbGFzc0xpc3QuYWRkIGFuZFxuXHQvLyBjbGFzc0xpc3QucmVtb3ZlIGV4aXN0IGJ1dCBzdXBwb3J0IG9ubHkgb25lIGFyZ3VtZW50IGF0IGEgdGltZS5cblx0aWYgKCF0ZXN0RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJjMlwiKSkge1xuXHRcdHZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbihtZXRob2QpIHtcblx0XHRcdHZhciBvcmlnaW5hbCA9IERPTVRva2VuTGlzdC5wcm90b3R5cGVbbWV0aG9kXTtcblxuXHRcdFx0RE9NVG9rZW5MaXN0LnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odG9rZW4pIHtcblx0XHRcdFx0dmFyIGksIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG5cblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRcdFx0dG9rZW4gPSBhcmd1bWVudHNbaV07XG5cdFx0XHRcdFx0b3JpZ2luYWwuY2FsbCh0aGlzLCB0b2tlbik7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fTtcblx0XHRjcmVhdGVNZXRob2QoJ2FkZCcpO1xuXHRcdGNyZWF0ZU1ldGhvZCgncmVtb3ZlJyk7XG5cdH1cblxuXHR0ZXN0RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiYzNcIiwgZmFsc2UpO1xuXG5cdC8vIFBvbHlmaWxsIGZvciBJRSAxMCBhbmQgRmlyZWZveCA8MjQsIHdoZXJlIGNsYXNzTGlzdC50b2dnbGUgZG9lcyBub3Rcblx0Ly8gc3VwcG9ydCB0aGUgc2Vjb25kIGFyZ3VtZW50LlxuXHRpZiAodGVzdEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYzNcIikpIHtcblx0XHR2YXIgX3RvZ2dsZSA9IERPTVRva2VuTGlzdC5wcm90b3R5cGUudG9nZ2xlO1xuXG5cdFx0RE9NVG9rZW5MaXN0LnByb3RvdHlwZS50b2dnbGUgPSBmdW5jdGlvbih0b2tlbiwgZm9yY2UpIHtcblx0XHRcdGlmICgxIGluIGFyZ3VtZW50cyAmJiAhdGhpcy5jb250YWlucyh0b2tlbikgPT09ICFmb3JjZSkge1xuXHRcdFx0XHRyZXR1cm4gZm9yY2U7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gX3RvZ2dsZS5jYWxsKHRoaXMsIHRva2VuKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdH1cblxuXHR0ZXN0RWxlbWVudCA9IG51bGw7XG59KCkpO1xuXG59XG4iLCJ2YXIgZXNjYXBlID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi91cmwvZXNjYXBlLmpzXCIpO1xuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJkaXYua21hcC1jbCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIG1hcmdpbjogMWVtIGF1dG87XFxuICBtYXgtd2lkdGg6IDY1MHB4O1xcbn1cXG5cXG5kaXYua21hcC1jbCBoMyB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDFlbSAwIDAuNWVtIDA7XFxufVxcblxcbmRpdi5rbWFwLWNsIGJ1dHRvbiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwLjE1ZW0gMWVtO1xcbiAgZm9udC1zaXplOiAuOWVtO1xcbiAgbWluLXdpZHRoOiA2ZW07XFxufVxcblxcbmRpdi5rbWFwLWNsIHRkIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuZGl2LmttYXAtY2wtd29yayB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuZGl2LmttYXAtY2wtZGxnIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUcmVidWNoZXQgTVNcXFwiLCBcXFwiTHVjaWRhIEdyYW5kZVxcXCIsIFxcXCJMdWNpZGEgU2FucyBVbmljb2RlXFxcIiwgXFxcIkx1Y2lkYSBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuZGl2LmttYXAtY2wtZGxnID4gZGl2OmZpcnN0LWNoaWxkIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgb3BhY2l0eTogMC41O1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgei1pbmRleDogMjtcXG59XFxuXFxuZGl2LmttYXAtY2wtZGxnID4gZGl2Om50aC1jaGlsZCgyKSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDUwJTtcXG4gIG9wYWNpdHk6IDE7XFxuICB6LWluZGV4OiAxMDtcXG4gIHdpZHRoOiA1MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMXB4KSB0cmFuc2xhdGVZKC01MCUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuXFxuZGl2LmttYXAtY2wtZGxnID4gZGl2Om50aC1jaGlsZCgyKSA+IGRpdjpmaXJzdC1jaGlsZCB7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kOiBncmVlbjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDAuMjVlbTtcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxufVxcblxcbmRpdi5rbWFwLWNsLWRsZyA+IGRpdjpudGgtY2hpbGQoMikgPiBkaXY6bnRoLWNoaWxkKDIpIHtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbn1cXG5cXG5kaXYua21hcC1jbC1kbGcgPiBkaXY6bnRoLWNoaWxkKDIpID4gZGl2Om50aC1jaGlsZCgzKSB7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG5kaXYua21hcC1jbC1kbGcgPiBkaXY6bnRoLWNoaWxkKDIpID4gZGl2Om50aC1jaGlsZCgzKSBidXR0b24ge1xcbiAgd2lkdGg6IDhlbTtcXG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcXG59XFxuXFxuZGl2LmttYXAtY2wtd29yayA+IGRpdjpmaXJzdC1jaGlsZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xcbiAgcGFkZGluZzogMWVtIDAgMCAwO1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gIHdpZHRoOiAxMmVtO1xcbiAgbWF4LXdpZHRoOiAxMmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogZ3JlZW47XFxufVxcblxcbmRpdi5rbWFwLWNsLXdvcmsgPiBkaXY6Zmlyc3QtY2hpbGQgYnV0dG9uIHtcXG4gIHdpZHRoOiA5ZW07XFxuICBtYXJnaW46IDA7XFxuICBoZWlnaHQ6IDJlbTtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LXNpemU6IDAuOWVtO1xcbn1cXG5cXG5kaXYua21hcC1jbC13b3JrID4gZGl2OmZpcnN0LWNoaWxkIC5saXN0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgdG9wOiA0ZW07XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxufVxcblxcbmRpdi5rbWFwLWNsLXdvcmsgPiBkaXY6Zmlyc3QtY2hpbGQgLmxpc3QgLmdyb3VwIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMy4yZW07XFxuICBmb250LXNpemU6IDAuOGVtO1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgbWFyZ2luOiAwLjI1ZW0gMDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBwYWRkaW5nOiAwLjI1ZW07XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmRpdi5rbWFwLWNsLXdvcmsgPiBkaXY6Zmlyc3QtY2hpbGQgLmxpc3QgLmdyb3VwIHNwYW4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICByaWdodDogMC4yNWVtO1xcbiAgYm90dG9tOiAwLjI1ZW07XFxufVxcblxcbmRpdi5rbWFwLWNsLXdvcmsgPiBkaXY6Zmlyc3QtY2hpbGQgLmxpc3QgLmdyb3VwIGEge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDE2cHg7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4vaW1nL3gucG5nXCIpKSArIFwiKTtcXG59XFxuXFxuZGl2LmttYXAtY2wtd29yayA+IGRpdjpudGgtY2hpbGQoMikge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcXG4gIHBhZGRpbmc6IDFlbSAyZW0gMWVtIDFlbTtcXG4gIG1pbi13aWR0aDogMjVlbTtcXG59XFxuXFxuZGl2LmttYXAtY2wtd29yayA+IGRpdjpudGgtY2hpbGQoMikgY2FudmFzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuZGl2LmttYXAtY2wgPiBkaXYgPiBkaXY6bnRoLWNoaWxkKDIpIHRhYmxlIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGJvcmRlcjogMDtcXG59XFxuXFxuZGl2LmttYXAtY2wgPiBkaXYgPiBkaXY6bnRoLWNoaWxkKDIpIHRhYmxlIGlucHV0IHtcXG4gIHdpZHRoOiAzZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmRpdi5rbWFwLWNsID4gZGl2ID4gZGl2Om50aC1jaGlsZCgyKSB0YWJsZSB0ciB7XFxuICBib3JkZXI6IDA7XFxufVxcblxcbmRpdi5rbWFwLWNsID4gZGl2ID4gZGl2Om50aC1jaGlsZCgyKSB0YWJsZSB0aCxcXG5kaXYua21hcC1jbCA+IGRpdiA+IGRpdjpudGgtY2hpbGQoMikgdGFibGUgdGQge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICB0ZXh0LXNoYWRvdzogbm9uZTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBjb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nOiAwLjI1ZW07XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG5kaXYua21hcC1jbCA+IGRpdiA+IGRpdjpudGgtY2hpbGQoMikgdGFibGUgdGgge1xcbiAgYm9yZGVyOiAwO1xcbiAgd2lkdGg6IDRlbTtcXG4gIGhlaWdodDogNGVtO1xcbn1cXG5cXG5kaXYua21hcC1jbCA+IGRpdiA+IGRpdjpudGgtY2hpbGQoMikgdGFibGUgdGQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogNGVtO1xcbiAgaGVpZ2h0OiA0ZW07XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5kaXYua21hcC1jbCA+IGRpdiA+IGRpdjpudGgtY2hpbGQoMikgdGFibGUgdGQgc3Bhbi5taW50ZXJtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMC4xNWVtO1xcbiAgbGVmdDogMC4yNWVtO1xcbiAgZm9udC1zaXplOiAwLjc1ZW07XFxufVxcblxcbmRpdi5rbWFwLWNsID4gZGl2ID4gZGl2Om50aC1jaGlsZCgyKSB0YWJsZSB0ZC5rbWFwLWNsLXNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQ6IHllbGxvdztcXG59XFxuXFxuZGl2LmttYXAtY2wgPiBkaXYgPiBkaXY6bnRoLWNoaWxkKDIpIHRhYmxlIHRyOmZpcnN0LWNoaWxkIHRoOm5vdCg6Zmlyc3QtY2hpbGQpIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxufVxcblxcbmRpdi5rbWFwLWNsID4gZGl2ID4gZGl2Om50aC1jaGlsZCgyKSB0YWJsZSB0cjpmaXJzdC1jaGlsZCB0aDpmaXJzdC1jaGlsZCB7XFxuICBib3JkZXI6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmRpdi5rbWFwLWNsID4gZGl2ID4gZGl2Om50aC1jaGlsZCgyKSB0YWJsZSB0cjpmaXJzdC1jaGlsZCB0aDpmaXJzdC1jaGlsZCAua21hcC1jbC1sZWZ0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAxLjVlbTtcXG59XFxuXFxuZGl2LmttYXAtY2wgPiBkaXYgPiBkaXY6bnRoLWNoaWxkKDIpIHRhYmxlIHRyOmZpcnN0LWNoaWxkIHRoOmZpcnN0LWNoaWxkIC5rbWFwLWNsLXJpZ2h0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMS41ZW07XFxuICByaWdodDogMDtcXG59XFxuXFxuZGl2LmttYXAtY2wgPiBkaXYgPiBkaXY6bnRoLWNoaWxkKDIpIHRhYmxlIHRyOmZpcnN0LWNoaWxkIHRoOmZpcnN0LWNoaWxkIC5rbWFwLWNsLWxpbmUge1xcbiAgd2lkdGg6IDRlbTtcXG4gIGhlaWdodDogMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDJlbSkgcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLTJlbSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyZW0pIHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC0yZW0pO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxufVxcblxcbmRpdi5rbWFwLWNsID4gZGl2ID4gZGl2Om50aC1jaGlsZCgyKSB0YWJsZSB0cjpub3QoOmZpcnN0LWNoaWxkKSB0aCB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuZGl2LmttYXAtY2wtZ2VuZXJhdG9yIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG5kaXYua21hcC1jbC1nZW5lcmF0b3IgZm9ybSB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmRpdi5rbWFwLWNsLWdlbmVyYXRvciBwIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogMC43NWVtIDA7XFxuICBwYWRkaW5nLXRvcDogMC4yNWVtO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuZGl2LmttYXAtY2wtZ2VuZXJhdG9yIHAgc3BhbiB7XFxuICBwYWRkaW5nLWxlZnQ6IDAuNWVtO1xcbiAgZm9udC1zaXplOiAwLjg1ZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbn1cXG5cXG5kaXYua21hcC1jbC1zb2x1dGlvbiBhIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxNnB4O1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuL2ltZy94LnBuZ1wiKSkgKyBcIik7XFxufVxcblxcbmRpdi5rbWFwLWNsLXNvbHV0aW9uIGJ1dHRvbiB7XFxuICB3aWR0aDogOGVtO1xcbn1cXG5cXG5kaXYua21hcC1jbC1zb2x1dGlvbiBidXR0b24ua21hcC1jbC1zb2x2ZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmbG9hdDogcmlnaHQ7XFxufVxcblxcbmRpdi5rbWFwLWNsLXNvbHV0aW9uIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxufVxcblxcbmRpdi5rbWFwLWNsLXNvbHV0aW9uID4gZGl2IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxufVxcblxcbmRpdi5rbWFwLWNsLW1hbnVhbCBmb3JtIHtcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5kaXYua21hcC1jbC1tYW51YWwgZm9ybSBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxufVxcblxcbmRpdi5rbWFwLWNsLW1hbnVhbCBmb3JtIGxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxufVxcblxcbmRpdi5rbWFwLWNsLW1hbnVhbCBmb3JtID4gZGl2IHtcXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuICBtaW4td2lkdGg6IDUwJTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmRpdi5rbWFwLWNsLW1hbnVhbCBmb3JtIHAge1xcbiAgbWFyZ2luLXRvcDogMDtcXG59XFxuXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlc2NhcGUodXJsKSB7XG4gICAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB1cmxcbiAgICB9XG4gICAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gICAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gICAgfVxuICAgIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICAgIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSkge1xuICAgICAgICByZXR1cm4gJ1wiJyArIHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpICsgJ1wiJ1xuICAgIH1cblxuICAgIHJldHVybiB1cmxcbn1cbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8gKyBcIiBcIiArIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJpbXBvcnQge01pbnRlcm1zfSBmcm9tIFwiLi4vTG9naWMvTWludGVybXNcIjtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIG9iamVjdCBtYW5hZ2VzIHRoZSBwcmFjdGljZSBnZW5lcmF0b3Igc2VjdGlvbi5cclxuICogQHBhcmFtIG1haW5cclxuICogQHBhcmFtIGVsZW1lbnRcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgR2VuZXJhdG9yID0gZnVuY3Rpb24obWFpbiwgZWxlbWVudCkge1xyXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xyXG5cclxuICAgIHRoaXMubWFpbiA9IG1haW47XHJcblxyXG4gICAgdGhpcy5taW50ZXJtcyA9IG5ldyBNaW50ZXJtcygpO1xyXG5cclxuICAgIGxldCBtaW50ZXJtc1NwYW47XHJcblxyXG5cdGlmKG1haW4ub3B0aW9ucy5maXhlZCkge1xyXG4gICAgICAgIC8vIHZhciBkaXYgPSAnPGRpdiBjbGFzcz1cImdlbmVyYXRvci1maXhlZFwiPjxwPk1pbnRlcm1zOiAnICtcclxuICAgICAgICAvLyAgICAgJzxzcGFuIGNsYXNzPVwibWludGVybXNcIj48L3NwYW4+PC9wPjwvZGl2Pic7XHJcbiAgICAgICAgLy8gJChlbGVtZW50KS5odG1sKGRpdik7XHJcbiAgICB9IGVsc2Uge1xyXG5cdCAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHQgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2ttYXAtY2wtZ2VuZXJhdG9yJyk7XHJcblx0ICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcbiAgICAgICAgLy8gSGVhZGluZ1xyXG4gICAgICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICBoMy5pbm5lclRleHQgPSAnTWludGVybSBHZW5lcmF0b3InO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChoMyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGZvcm0pO1xyXG5cclxuICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIHAuaW5uZXJUZXh0ID0gJ1NpemU6ICc7XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHApO1xyXG5cclxuICAgICAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuICAgICAgICBwLmFwcGVuZENoaWxkKHNlbGVjdCk7XHJcblxyXG4gICAgICAgIGxldCBvcHRpb25zMSA9ICcnO1xyXG4gICAgICAgIGxldCBvcHRpb25zMiA9ICcnO1xyXG4gICAgICAgIGZvcihsZXQgcz0yOyBzPD00OyBzKyspIHtcclxuICAgICAgICAgICAgaWYocyA9PT0gK21haW4ub3B0aW9ucy5zaXplKSB7XHJcbiAgICAgICAgICAgICAgICBpZihtYWluLm9wdGlvbnMuZ2VuZG9udGNhcmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zMSArPSAnPG9wdGlvbiB2YWx1ZT1cIicgKyBzICsgJ1wiPicgKyBzICsgJzwvb3B0aW9uPic7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczIgKz0gJzxvcHRpb24gdmFsdWU9XCInICsgcyArICdkXCIgc2VsZWN0ZWQ+JyArIHMgKyBcIiB3L2Rvbid0IGNhcmVzPC9vcHRpb24+XCI7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMxICs9ICc8b3B0aW9uIHZhbHVlPVwiJyArIHMgKyAnXCIgc2VsZWN0ZWQ+JyArIHMgKyAnPC9vcHRpb24+JztcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zMiArPSAnPG9wdGlvbiB2YWx1ZT1cIicgKyBzICsgJ2RcIj4nICsgcyArIFwiIHcvZG9uJ3QgY2FyZXM8L29wdGlvbj5cIjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uczEgKz0gJzxvcHRpb24gdmFsdWU9XCInICsgcyArICdcIj4nICsgcyArICc8L29wdGlvbj4nO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uczIgKz0gJzxvcHRpb24gdmFsdWU9XCInICsgcyArICdkXCI+JyArIHMgKyBcIiA8c3Bhbj53L2Rvbid0IGNhcmVzPC9zcGFuPjwvb3B0aW9uPlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZWxlY3QuaW5uZXJIVE1MID0gb3B0aW9uczEgKyBvcHRpb25zMjtcclxuXHJcbiAgICAgICAgcC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnICcpKTtcclxuXHJcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYnV0dG9uLmlubmVyVGV4dCA9ICdHZW5lcmF0ZSc7XHJcbiAgICAgICAgcC5hcHBlbmRDaGlsZChidXR0b24pO1xyXG5cclxuXHRcdHAuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJyAnKSk7XHJcblxyXG4gICAgICAgIG1pbnRlcm1zU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAvLyBtaW50ZXJtcy5jbGFzc0xpc3QuYWRkKCdtaW50ZXJtcycpO1xyXG4gICAgICAgIHAuYXBwZW5kQ2hpbGQobWludGVybXNTcGFuKTtcclxuXHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGUoKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGxldCB2YWwgPSBzZWxlY3QudmFsdWU7XHJcbiAgICAgICAgICAgIHZhciBuZXdTaXplID0gcGFyc2VJbnQodmFsKTtcclxuICAgICAgICAgICAgbWFpbi5vcHRpb25zLmdlbmRvbnRjYXJlID0gdmFsLm1hdGNoKC9kJC8pICE9PSBudWxsO1xyXG4gICAgICAgICAgICBtYWluLm5ld1NpemUobmV3U2l6ZSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblx0LyoqXHJcblx0ICogR2VuZXJhdGUgYSBuZXcgc2V0IG9mIG1pbnRlcm1zIHdpdGggb3B0aW9uYWwgZG9uJ3QgY2FyZXNcclxuXHQgKi9cclxuICAgIHRoaXMuZ2VuZXJhdGUgPSBmdW5jdGlvbigpIHtcclxuXHQgICAgdGhpcy5taW50ZXJtcy5zaXplID0gdGhpcy5tYWluLm9wdGlvbnMuc2l6ZTtcclxuXHQgICAgaWYodGhpcy5tYWluLm9wdGlvbnMuZ2VuZG9udGNhcmUpIHtcclxuXHRcdCAgICB2YXIgZGNNYXggPSA4O1xyXG5cdFx0ICAgIHN3aXRjaCh0aGlzLm1haW4ub3B0aW9ucy5zaXplKSB7XHJcblx0XHRcdCAgICBjYXNlIDI6XHJcblx0XHRcdFx0ICAgIGRjTWF4ID0gMjtcclxuXHRcdFx0XHQgICAgYnJlYWs7XHJcblxyXG5cdFx0XHQgICAgY2FzZSAzOlxyXG5cdFx0XHRcdCAgICBkY01heCA9IDQ7XHJcblx0XHRcdFx0ICAgIGJyZWFrO1xyXG5cdFx0ICAgIH1cclxuXHRcdCAgICB0aGlzLm1pbnRlcm1zLmdlbmVyYXRlX2JvdW5kZWQoMC41LCAxLCBNYXRoLnBvdygyLCB0aGlzLm1haW4ub3B0aW9ucy5zaXplKS0xLFxyXG5cdFx0XHQgICAgMC4yLCAxLCBkY01heCk7XHJcblxyXG5cdFx0ICAgIG1pbnRlcm1zU3Bhbi5pbm5lckhUTUwgPSB0aGlzLm1pbnRlcm1zLmxpc3QodHJ1ZSkgK1xyXG5cdFx0XHQgICAgXCI8YnI+WD1cIiArIHRoaXMubWludGVybXMubGlzdF9kb250Y2FyZSh0cnVlKTtcclxuXHJcblx0XHQgICAgdGhpcy5tYWluLm5ld01pbnRlcm1zKHRoaXMubWludGVybXMpO1xyXG5cdCAgICB9IGVsc2Uge1xyXG5cdFx0ICAgIHRoaXMubWludGVybXMuZ2VuZXJhdGVfYm91bmRlZCgwLjUsIDEsIE1hdGgucG93KDIsIHRoaXMubWFpbi5vcHRpb25zLnNpemUpLTEpO1xyXG5cclxuXHRcdCAgICBtaW50ZXJtc1NwYW4uaW5uZXJIVE1MID0gdGhpcy5taW50ZXJtcy5saXN0KHRydWUpO1xyXG5cdFx0ICAgIHRoaXMubWFpbi5uZXdNaW50ZXJtcyh0aGlzLm1pbnRlcm1zKTtcclxuXHQgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblx0dGhpcy5zZXQgPSBmdW5jdGlvbihtaW50ZXJtcywgZG9udGNhcmUpIHtcclxuXHRcdHRoaXMubWludGVybXMuc2V0X2Zyb20obWludGVybXMsIGRvbnRjYXJlKTtcclxuXHRcdGlmKHRoaXMubWludGVybXMuZG9udGNhcmUubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRtaW50ZXJtc1NwYW4uaW5uZXJIVE1MID0gdGhpcy5taW50ZXJtcy5saXN0KHRydWUpICsgXCI8YnI+WD1cIiArIHRoaXMubWludGVybXMubGlzdF9kb250Y2FyZSh0cnVlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG1pbnRlcm1zU3Bhbi5pbm5lckhUTUwgPSB0aGlzLm1pbnRlcm1zLmxpc3QodHJ1ZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0bWFpbi5uZXdNaW50ZXJtcyh0aGlzLm1pbnRlcm1zKTtcclxuXHR9XHJcbn1cclxuXHJcbiIsIi8qKlxyXG4gKiBBIHNpbmdsZSBncm91cFxyXG4gKiBAcGFyYW0gZ3JvdXBzIEttYXAuR3JvdXAgb2JqZWN0XHJcbiAqIEBwYXJhbSBsaXN0IExpc3QgdG8gYWRkIHRoaXMgaXRlbSB0b1xyXG4gKiBAcGFyYW0gc2VsZWN0ZWQgTWludGVybXMgdGhhdCBhcmUgc2VsZWN0ZWRcclxuICogQHBhcmFtIGNvbG9yIENvbG9yIHRvIGRyYXcgaXRlbVxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBHcm91cCA9IGZ1bmN0aW9uKGdyb3VwcywgbGlzdCwgc2VsZWN0ZWQsIGNvbG9yKSB7XHJcbiAgICB2YXIgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgdGhpcy5ncm91cHMgPSBncm91cHM7XHJcbiAgICB0aGlzLnNlbGVjdGVkID0gc2VsZWN0ZWQ7XHJcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICBpZihsaXN0ID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBsc3QgPSAnJztcclxuICAgIHZhciBmaXJzdCA9IHRydWU7XHJcbiAgICBmb3IodmFyIGk9MDsgaTxzZWxlY3RlZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmKCFmaXJzdCkge1xyXG4gICAgICAgICAgICBsc3QgKz0gJywnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZpcnN0ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihpID09PSA4KSB7XHJcbiAgICAgICAgICAgIGxzdCArPSAnPGJyLz4nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbHN0ICs9IHNlbGVjdGVkW2ldO1xyXG4gICAgfVxyXG5cclxuXHQvLyB2YXIgZGl2ID0gJCgnPGRpdiBjbGFzcz1cImdyb3VwXCI+JyArIGxzdCArICc8L2Rpdj4nKTtcclxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdncm91cCcpO1xyXG4gICAgZGl2LmlubmVySFRNTCA9IGxzdDtcclxuXHJcblx0Ly8gdmFyIHNwYW4gPSAkKCc8c3Bhbj48L3NwYW4+Jyk7XHJcblx0Ly8gZGl2LmFwcGVuZChzcGFuKTtcclxuXHRsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHRkaXYuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcblxyXG5cdC8vIHZhciBhID0gJCgnPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiPjwvYT4nKTtcclxuXHQvLyBzcGFuLmFwcGVuZChhKTtcclxuXHRsZXQgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuXHRzcGFuLmFwcGVuZENoaWxkKGEpO1xyXG5cclxuICAgIGxpc3QuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcbiAgICBhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICBcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgXHRsaXN0LnJlbW92ZUNoaWxkKGRpdik7XHJcbiAgICBcdGdyb3Vwcy5yZW1vdmUodGhpcyk7XHJcbiAgICB9KTtcclxuXHJcblx0ZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xyXG4gICAvLyBkaXYuY3NzKFwiYmFja2dyb3VuZC1jb2xvclwiLCBjb2xvcik7XHJcbn1cclxuXHJcbkdyb3VwLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oY3R4LCB3aWQsIGhpdCwgaW5zZXREZXB0aCkge1xyXG4gICAgdmFyIGluc2V0ID0gMTU7XHJcbiAgICB2YXIgc3BhY2luZyA9IDEwO1xyXG5cclxuICAgIHZhciBjb2xzLCByb3dzLCBtYXBSLCBtYXBDLCBtYXg7XHJcbiAgICBzd2l0Y2godGhpcy5ncm91cHMubWFpbi5vcHRpb25zLnNpemUpIHtcclxuICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgIGNvbHMgPSAyO1xyXG4gICAgICAgICAgICByb3dzID0gMjtcclxuICAgICAgICAgICAgbWFwUiA9IFswLCAxLCAwLCAxXTtcclxuICAgICAgICAgICAgbWFwQyA9IFswLCAwLCAxLCAxXTtcclxuICAgICAgICAgICAgbWF4ID0gNDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgY29scyA9IDQ7XHJcbiAgICAgICAgICAgIHJvd3MgPSAyO1xyXG4gICAgICAgICAgICBtYXBSID0gWzAsIDEsIDAsIDEsIDAsIDEsIDAsIDFdO1xyXG4gICAgICAgICAgICBtYXBDID0gWzAsIDAsIDEsIDEsIDMsIDMsIDIsIDJdO1xyXG4gICAgICAgICAgICBtYXggPSA4O1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICBjb2xzID0gNDtcclxuICAgICAgICAgICAgcm93cyA9IDQ7XHJcbiAgICAgICAgICAgIG1hcFIgPSBbMCwgMSwgMywgMiwgMCwgMSwgMywgMiwgMCwgMSwgMywgMiwgMCwgMSwgMywgMl07XHJcbiAgICAgICAgICAgIG1hcEMgPSBbMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMywgMywgMywgMywgMiwgMiwgMiwgMl07XHJcbiAgICAgICAgICAgIG1heCA9IDE2O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICB2YXIgY250ID0gdGhpcy5zZWxlY3RlZC5sZW5ndGg7XHJcbiAgICBpZihjbnQgPT0gbWF4KSB7XHJcbiAgICAgICAgLy8gV2UgYXJlIHdyYXBwaW5nIHRoZSB3aG9sZSB0aGluZ1xyXG4gICAgICAgIHRoaXMuZHJhd0dyb3VwKGN0eCwgMCwgMCwgd2lkLCBoaXQsIGluc2V0ICsgc3BhY2luZyAqIGluc2V0RGVwdGgpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZihjbnQgPT0gMSkge1xyXG4gICAgICAgIHZhciBjMSA9IG1hcENbdGhpcy5zZWxlY3RlZFswXV07XHJcbiAgICAgICAgdmFyIHIxID0gbWFwUlt0aGlzLnNlbGVjdGVkWzBdXTtcclxuICAgICAgICB0aGlzLmRyYXdHcm91cChjdHgsIGMxICogd2lkIC8gY29scywgcjEgKiBoaXQgLyByb3dzLFxyXG4gICAgICAgICAgICB3aWQgLyBjb2xzLCBoaXQgLyByb3dzLCBpbnNldCArIHNwYWNpbmcgKiBpbnNldERlcHRoKTtcclxuXHJcbiAgICB9IGVsc2UgaWYoY250ID09IDIpIHtcclxuICAgICAgICB2YXIgYzEgPSBtYXBDW3RoaXMuc2VsZWN0ZWRbMF1dO1xyXG4gICAgICAgIHZhciByMSA9IG1hcFJbdGhpcy5zZWxlY3RlZFswXV07XHJcbiAgICAgICAgdmFyIGMyID0gbWFwQ1t0aGlzLnNlbGVjdGVkWzFdXTtcclxuICAgICAgICB2YXIgcjIgPSBtYXBSW3RoaXMuc2VsZWN0ZWRbMV1dO1xyXG5cclxuICAgICAgICBpZihyMSA9PSByMikge1xyXG4gICAgICAgICAgICAvLyBIb3Jpem9udGFsXHJcbiAgICAgICAgICAgIGlmKGMyIDwgYzEpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0ID0gYzE7IGMxID0gYzI7IGMyID0gdDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoKGMyIC0gYzEpID4gMSkge1xyXG4gICAgICAgICAgICAgICAgLy8gTm90IGFkamFjZW50IVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3R3JvdXAoY3R4LCBjMiAqIHdpZCAvIGNvbHMsIHIxICogaGl0IC8gcm93cyxcclxuICAgICAgICAgICAgICAgICAgICB3aWQgKiAyIC8gY29scywgaGl0IC8gcm93cywgaW5zZXQgKyBzcGFjaW5nICogaW5zZXREZXB0aCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdHcm91cChjdHgsIChjMSAtIDEpICogd2lkIC8gY29scywgcjEgKiBoaXQgLyByb3dzLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZCAqIDIgLyBjb2xzLCBoaXQgLyByb3dzLCBpbnNldCArIHNwYWNpbmcgKiBpbnNldERlcHRoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd0dyb3VwKGN0eCwgYzEgKiB3aWQgLyBjb2xzLCByMSAqIGhpdCAvIHJvd3MsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkICogMiAvIGNvbHMsIGhpdCAvIHJvd3MsIGluc2V0ICsgc3BhY2luZyAqIGluc2V0RGVwdGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gVmVydGljYWxcclxuICAgICAgICAgICAgaWYocjIgPCByMSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHQgPSByMTsgcjEgPSByMjsgcjIgPSB0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZigocjIgLSByMSkgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBOb3QgYWRqYWNlbnRcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd0dyb3VwKGN0eCwgYzEgKiB3aWQgLyBjb2xzLCByMiAqIGhpdCAvIHJvd3MsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkIC8gY29scywgaGl0ICogMiAvIHJvd3MsIGluc2V0ICsgc3BhY2luZyAqIGluc2V0RGVwdGgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3R3JvdXAoY3R4LCBjMSAqIHdpZCAvIGNvbHMsIChyMS0xKSAqIGhpdCAvIHJvd3MsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkIC8gY29scywgaGl0ICogMiAvIHJvd3MsIGluc2V0ICsgc3BhY2luZyAqIGluc2V0RGVwdGgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3R3JvdXAoY3R4LCBjMSAqIHdpZCAvIGNvbHMsIHIxICogaGl0IC8gcm93cyxcclxuICAgICAgICAgICAgICAgICAgICB3aWQgLyBjb2xzLCBoaXQgKiAyIC8gcm93cywgaW5zZXQgKyBzcGFjaW5nICogaW5zZXREZXB0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfSBlbHNlIGlmKGNudCA9PSA0KSB7XHJcbiAgICAgICAgdmFyIGMxID0gbWFwQ1t0aGlzLnNlbGVjdGVkWzBdXTtcclxuICAgICAgICB2YXIgcjEgPSBtYXBSW3RoaXMuc2VsZWN0ZWRbMF1dO1xyXG4gICAgICAgIHZhciBjMiA9IG1hcENbdGhpcy5zZWxlY3RlZFsxXV07XHJcbiAgICAgICAgdmFyIHIyID0gbWFwUlt0aGlzLnNlbGVjdGVkWzFdXTtcclxuICAgICAgICB2YXIgYzMgPSBtYXBDW3RoaXMuc2VsZWN0ZWRbMl1dO1xyXG4gICAgICAgIHZhciByMyA9IG1hcFJbdGhpcy5zZWxlY3RlZFsyXV07XHJcbiAgICAgICAgdmFyIGM0ID0gbWFwQ1t0aGlzLnNlbGVjdGVkWzNdXTtcclxuICAgICAgICB2YXIgcjQgPSBtYXBSW3RoaXMuc2VsZWN0ZWRbM11dO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEFyZSBhbGwgaW4gc2FtZSByb3c/XHJcbiAgICAgICAgaWYocjEgPT0gcjIgJiYgcjIgPT0gcjMgJiYgcjMgPT0gcjQpIHtcclxuICAgICAgICAgICAgLy8gU2l6ZSA0IGNvdmVyIGluIHRoZSBzYW1lIHJvd1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdHcm91cChjdHgsIGMxICogd2lkIC8gY29scywgcjEgKiBoaXQgLyByb3dzLFxyXG4gICAgICAgICAgICAgICAgd2lkICogNCAvIGNvbHMsIGhpdCAvIHJvd3MsIGluc2V0ICsgc3BhY2luZyAqIGluc2V0RGVwdGgpO1xyXG4gICAgICAgIH0gZWxzZSBpZihjMSA9PSBjMiAmJiBjMiA9PSBjMyAmJiBjMyA9PSBjNCkge1xyXG4gICAgICAgICAgICAvLyBTaXplIDQgY292ZXIgaW4gdGhlIHNhbWUgY29sdW1uXHJcbiAgICAgICAgICAgIHRoaXMuZHJhd0dyb3VwKGN0eCwgYzEgKiB3aWQgLyBjb2xzLCByMSAqIGhpdCAvIHJvd3MsXHJcbiAgICAgICAgICAgICAgICB3aWQgLyBjb2xzLCBoaXQgKiA0IC8gcm93cywgaW5zZXQgKyBzcGFjaW5nICogaW5zZXREZXB0aCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gVGhpcyBtdXN0IGJlIHNxdWFyZVxyXG4gICAgICAgICAgICB2YXIgd2lkNCA9IHdpZCAqIDIgLyBjb2xzO1xyXG4gICAgICAgICAgICB2YXIgaGl0NCA9IGhpdCAqIDIgLyByb3dzO1xyXG5cclxuICAgICAgICAgICAgaWYoYzEgPT0gMCAmJiBjMiA9PSAwICYmIGMzID09IDMgJiYgYzQgPT0gMykge1xyXG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIGxlZnQvcmlnaHQgc2lkZSBzcGxpdFxyXG4gICAgICAgICAgICAgICAgaWYocjEgPT0gMCAmJiByMiA9PSAzICYmIHIzID09IDAgJiYgcjQgPT0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEZvdXIgY29ybmVyIHNwbGl0XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3R3JvdXAoY3R4LCAoLTEpICogd2lkIC8gY29scywgKC0xKSAqIGhpdCAvIHJvd3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZDQsIGhpdDQsIGluc2V0ICsgc3BhY2luZyAqIGluc2V0RGVwdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd0dyb3VwKGN0eCwgKC0xKSAqIHdpZCAvIGNvbHMsICgzKSAqIGhpdCAvIHJvd3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZDQsIGhpdDQsIGluc2V0ICsgc3BhY2luZyAqIGluc2V0RGVwdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd0dyb3VwKGN0eCwgKDMpICogd2lkIC8gY29scywgKC0xKSAqIGhpdCAvIHJvd3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZDQsIGhpdDQsIGluc2V0ICsgc3BhY2luZyAqIGluc2V0RGVwdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd0dyb3VwKGN0eCwgKDMpICogd2lkIC8gY29scywgKDMpICogaGl0IC8gcm93cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkNCwgaGl0NCwgaW5zZXQgKyBzcGFjaW5nICogaW5zZXREZXB0aCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHIxID4gcjIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSByMTsgcjEgPSByMjsgcjIgPSB0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3R3JvdXAoY3R4LCAoLTEpICogd2lkIC8gY29scywgcjEgKiBoaXQgLyByb3dzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWQ0LCBoaXQ0LCBpbnNldCArIHNwYWNpbmcgKiBpbnNldERlcHRoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdHcm91cChjdHgsICgzKSAqIHdpZCAvIGNvbHMsIHIxICogaGl0IC8gcm93cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkNCwgaGl0NCwgaW5zZXQgKyBzcGFjaW5nICogaW5zZXREZXB0aCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihyMSA9PSAwICYmIHIyID09IDMpIHtcclxuICAgICAgICAgICAgICAgIGlmKGMxID4gYzMpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IGMxOyBjMSA9IGMzOyBjMyA9IHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgdG9wLWJvdHRvbSBzcGxpdFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3R3JvdXAoY3R4LCBjMSAqIHdpZCAvIGNvbHMsICgtMSkgKiBoaXQgLyByb3dzLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZDQsIGhpdDQsIGluc2V0ICsgc3BhY2luZyAqIGluc2V0RGVwdGgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3R3JvdXAoY3R4LCBjMSAqIHdpZCAvIGNvbHMsICgzKSAqIGhpdCAvIHJvd3MsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkNCwgaGl0NCwgaW5zZXQgKyBzcGFjaW5nICogaW5zZXREZXB0aCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTaW1wbGUgc3F1YXJlIVxyXG4gICAgICAgICAgICAgICAgaWYoYzEgPiBjMykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gYzE7IGMxID0gYzM7IGMzID0gdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKHIxID4gcjIpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHIxOyByMSA9IHIyOyByMiA9IHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3R3JvdXAoY3R4LCBjMSAqIHdpZCAvIGNvbHMsIHIxICogaGl0IC8gcm93cyxcclxuICAgICAgICAgICAgICAgICAgICB3aWQ0LCBoaXQ0LCBpbnNldCArIHNwYWNpbmcgKiBpbnNldERlcHRoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIGlmKGNudCA9PSA4KSB7XHJcbiAgICAgICAgdmFyIGMxID0gbWFwQ1t0aGlzLnNlbGVjdGVkWzBdXTtcclxuICAgICAgICB2YXIgcjEgPSBtYXBSW3RoaXMuc2VsZWN0ZWRbMF1dO1xyXG4gICAgICAgIHZhciBjMiA9IG1hcENbdGhpcy5zZWxlY3RlZFsxXV07XHJcbiAgICAgICAgdmFyIHIyID0gbWFwUlt0aGlzLnNlbGVjdGVkWzFdXTtcclxuICAgICAgICB2YXIgYzMgPSBtYXBDW3RoaXMuc2VsZWN0ZWRbMl1dO1xyXG4gICAgICAgIHZhciByMyA9IG1hcFJbdGhpcy5zZWxlY3RlZFsyXV07XHJcbiAgICAgICAgdmFyIGM0ID0gbWFwQ1t0aGlzLnNlbGVjdGVkWzNdXTtcclxuICAgICAgICB2YXIgcjQgPSBtYXBSW3RoaXMuc2VsZWN0ZWRbM11dO1xyXG4gICAgICAgIHZhciBjNSA9IG1hcENbdGhpcy5zZWxlY3RlZFs0XV07XHJcbiAgICAgICAgdmFyIHI1ID0gbWFwUlt0aGlzLnNlbGVjdGVkWzRdXTtcclxuXHJcbiAgICAgICAgaWYoYzEgPT0gYzIgJiYgYzIgPT0gYzMgJiYgYzMgPT0gYzQpIHtcclxuICAgICAgICAgICAgdmFyIHdpZDggPSB3aWQgKiAyIC8gY29scztcclxuICAgICAgICAgICAgdmFyIGhpdDggPSBoaXQgKiA0IC8gcm93cztcclxuXHJcbiAgICAgICAgICAgIC8vIFZlcnRpY2FsIGxheW91dFxyXG4gICAgICAgICAgICBpZihjMSA9PSAwICYmIGM1ID09IDMpIHtcclxuICAgICAgICAgICAgICAgIC8vIExlZnQvcmlnaHQgc3BsaXRcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd0dyb3VwKGN0eCwgKC0xKSAqIHdpZCAvIGNvbHMsICgwKSAqIGhpdCAvIHJvd3MsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkOCwgaGl0OCwgaW5zZXQgKyBzcGFjaW5nICogaW5zZXREZXB0aCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdHcm91cChjdHgsICgzKSAqIHdpZCAvIGNvbHMsICgwKSAqIGhpdCAvIHJvd3MsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkOCwgaGl0OCwgaW5zZXQgKyBzcGFjaW5nICogaW5zZXREZXB0aCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZihjMSA+IGM1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYzEgPSBjNTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdHcm91cChjdHgsIGMxICogd2lkIC8gY29scywgKDApICogaGl0IC8gcm93cyxcclxuICAgICAgICAgICAgICAgICAgICB3aWQ4LCBoaXQ4LCBpbnNldCArIHNwYWNpbmcgKiBpbnNldERlcHRoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vSG9yaXpvbnRhbCBsYXlvdXRcclxuICAgICAgICAgICAgdmFyIHdpZDggPSB3aWQgKiA0IC8gY29scztcclxuICAgICAgICAgICAgdmFyIGhpdDggPSBoaXQgKiAyIC8gcm93cztcclxuXHJcbiAgICAgICAgICAgIGlmKChyMiAtIHIxKSA+IDEpIHtcclxuICAgICAgICAgICAgICAgIC8vIFNwbGl0XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdHcm91cChjdHgsIDAgKiB3aWQgLyBjb2xzLCAoLTEpICogaGl0IC8gcm93cyxcclxuICAgICAgICAgICAgICAgICAgICB3aWQ4LCBoaXQ4LCBpbnNldCArIHNwYWNpbmcgKiBpbnNldERlcHRoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd0dyb3VwKGN0eCwgMCAqIHdpZCAvIGNvbHMsICgzKSAqIGhpdCAvIHJvd3MsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkOCwgaGl0OCwgaW5zZXQgKyBzcGFjaW5nICogaW5zZXREZXB0aCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZihyMSA+IHIyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcjEgPSByMjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdHcm91cChjdHgsIDAgKiB3aWQgLyBjb2xzLCAocjEpICogaGl0IC8gcm93cyxcclxuICAgICAgICAgICAgICAgICAgICB3aWQ4LCBoaXQ4LCBpbnNldCArIHNwYWNpbmcgKiBpbnNldERlcHRoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuR3JvdXAucHJvdG90eXBlLmRyYXdHcm91cCA9IGZ1bmN0aW9uKGN0eCwgeDEsIHkxLCB3aWQsIGhpdCwgaW5zZXQpIHtcclxuICAgIHZhciB4ID0geDEgKyBpbnNldDtcclxuICAgIHZhciB5ID0geTEgKyBpbnNldDtcclxuICAgIHZhciB3aWR0aCA9IHdpZCAtIGluc2V0ICogMiAtIDE7XHJcbiAgICB2YXIgaGVpZ2h0ID0gaGl0IC0gaW5zZXQgKiAyIC0gMTtcclxuICAgIHZhciByYWRpdXMgPSAzMDtcclxuICAgIGN0eC5saW5lV2lkdGggPSA3O1xyXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvcjtcclxuXHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHgubW92ZVRvKHgseStyYWRpdXMpO1xyXG4gICAgY3R4LmxpbmVUbyh4LHkraGVpZ2h0LXJhZGl1cyk7XHJcbiAgICBjdHguYXJjVG8oeCx5K2hlaWdodCx4K3JhZGl1cyx5K2hlaWdodCxyYWRpdXMpO1xyXG4gICAgY3R4LmxpbmVUbyh4K3dpZHRoLXJhZGl1cyx5K2hlaWdodCk7XHJcbiAgICBjdHguYXJjVG8oeCt3aWR0aCx5K2hlaWdodCx4K3dpZHRoLHkraGVpZ2h0LXJhZGl1cyxyYWRpdXMpO1xyXG4gICAgY3R4LmxpbmVUbyh4K3dpZHRoLHkrcmFkaXVzKTtcclxuICAgIGN0eC5hcmNUbyh4K3dpZHRoLHkseCt3aWR0aC1yYWRpdXMseSxyYWRpdXMpO1xyXG4gICAgY3R4LmxpbmVUbyh4K3JhZGl1cyx5KTtcclxuICAgIGN0eC5hcmNUbyh4LHkseCx5K3JhZGl1cyxyYWRpdXMpO1xyXG4gICAgY3R4LnN0cm9rZSgpO1xyXG59IiwiaW1wb3J0IHtNZXNzYWdlRGlhbG9nfSBmcm9tICcuL01lc3NhZ2VEaWFsb2cnO1xyXG5pbXBvcnQge0dyb3VwfSBmcm9tIFwiLi9Hcm91cFwiO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBncm91cHMgYXJlYSBvZiB0aGUgZWRpdG9yXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IEdyb3VwcyA9IGZ1bmN0aW9uKG1haW4sIHNlbCkge1xyXG5cdHZhciB0aGF0ID0gdGhpcztcclxuXHJcblx0dGhpcy5tYWluID0gbWFpbjtcclxuXHJcblx0bGV0IGxpc3Q7XHJcblxyXG5cdGNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XHJcblx0XHQvLyB2YXIgYnV0dG9uID0gJChcIjxidXR0b24+Q292ZXI8L2J1dHRvbj5cIik7XHJcblx0XHQvLyAkKHNlbCkuYXBwZW5kKGJ1dHRvbik7XHJcblx0XHQvL1xyXG5cdFx0Ly8gdmFyIGxpc3QgPSAkKCc8ZGl2IGNsYXNzPVwibGlzdFwiPjwvZGl2PicpO1xyXG5cdFx0Ly8gJChzZWwpLmFwcGVuZChsaXN0KTtcclxuXHJcblx0XHRsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblx0XHRzZWwuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuXHRcdGJ1dHRvbi5pbm5lclRleHQgPSAnQ292ZXInO1xyXG5cclxuXHRcdGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdGxpc3QuY2xhc3NMaXN0LmFkZCgnbGlzdCcpO1xyXG5cdFx0c2VsLmFwcGVuZENoaWxkKGxpc3QpO1xyXG5cclxuXHRcdHRoaXMuZ3JvdXBzID0gW107XHJcblx0XHR0aGlzLmNvbG9yTiA9IDA7XHJcblxyXG5cdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcblx0XHQgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdGxldCBzZWxlY3RlZCA9IG1haW4ud29yay5tYXAuc2VsZWN0ZWQ7XHJcbiAgICAgICAgICAgIFxyXG5cdFx0XHRpZihtYWluLm9wdGlvbnMuc3RyaWN0KSB7XHJcblx0XHRcdFx0Ly8gRGV0ZXJtaW5lIGhvdyBtYW55IGNvbW1vbiBiaXRzIHRoZXJlIGFyZVxyXG5cdFx0XHRcdGxldCBhbmQxID0gTWF0aC5wb3coMiwgbWFpbi5vcHRpb25zLnNpemUpIC0gMTtcclxuXHRcdFx0XHRsZXQgYW5kMiA9IGFuZDE7XHJcblxyXG5cdFx0XHRcdGZvcihsZXQgaT0wOyBpPHNlbGVjdGVkLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRsZXQgc2VsID0gc2VsZWN0ZWRbaV07XHJcblx0XHRcdFx0XHRhbmQxICY9IHNlbDtcclxuXHRcdFx0XHRcdGFuZDIgJj0gfnNlbDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGxldCBvciA9IGFuZDEgfCBhbmQyO1xyXG5cdFx0XHRcdGxldCBiaXRzID0gMDtcclxuXHRcdFx0XHRsZXQgc2l6ZSA9IG1haW4ub3B0aW9ucy5zaXplO1xyXG5cclxuXHRcdFx0XHRmb3IobGV0IGk9MDsgaTxzaXplOyBpKyspIHtcclxuXHRcdFx0XHRcdGlmKChvciAmIDEpID09IDEpIHtcclxuXHRcdFx0XHRcdFx0Yml0cysrO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdG9yID4+PSAxO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gVGVzdCBmb3IgdmFsaWRcclxuXHRcdFx0XHR2YXIgdmFsaWQgPSB0cnVlO1xyXG5cdFx0XHRcdHN3aXRjaChzZWxlY3RlZC5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdGNhc2UgMTpcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0Y2FzZSAyOlxyXG5cdFx0XHRcdFx0XHR2YWxpZCA9IGJpdHMgPT0gc2l6ZSAtIDE7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdGNhc2UgNDpcclxuXHRcdFx0XHRcdFx0dmFsaWQgPSBiaXRzID09IHNpemUgLSAyO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRjYXNlIDg6XHJcblx0XHRcdFx0XHRcdHZhbGlkID0gYml0cyA9PSBzaXplIC0gMztcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0Y2FzZSAxNjpcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdFx0bGV0IGh0bWwgPSAnPHA+R3JvdXBpbmcgbXVzdCBiZSBvZiBzb21lIHBvd2VyIG9mIHR3byBtaW50ZXJtcy48L3A+PHA+VGhlIG9ubHkgJyArXHJcblx0XHRcdFx0XHRcdFx0J2dyb3VwaW5ncyBwb3NzaWJsZSBhcmUgMSwgMiwgNCwgOCwgb3IgMTYsIGRlcGVuZGluZyBvbiB0aGUgc2l6ZSBvZiB0aGUgJyArXHJcblx0XHRcdFx0XHRcdFx0J0thcm5hdWdoIG1hcC48L3A+JztcclxuXHRcdFx0XHRcdFx0bGV0IGRsZyA9IG5ldyBNZXNzYWdlRGlhbG9nKG1haW4sIFwiWW91IGNhbid0IGRvIHRoYXRcIiwgaHRtbCk7XHJcblx0XHRcdFx0XHRcdGRsZy5vcGVuKCk7XHJcblx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmKCF2YWxpZCkge1xyXG5cdFx0XHRcdFx0bGV0IGh0bWwgPSAnPHA+WW91ciBtaW50ZXJtIGdyb3VwaW5nIGlzIGludmFsaWQuPC9wPjxwPkdyb3VwaW5ncyBtdXN0IGJlIHN1Y2ggJyArXHJcblx0XHRcdFx0XHRcdCd0aGF0IHRoZXJlIGFyZSBiaXRzIGluIGNvbW1vbi4gVGhpcyBtZWFucyB0aGUgZ3JvdXBpbmdzIG11c3QgYmUgYSByZWN0YW5nbGUgJyArXHJcblx0XHRcdFx0XHRcdCdvbiB0aGUgS2FybmF1Z2ggbWFwLiBUaGlzIGNhbiBiZSBhIDEgYnkgNCByZWN0YW5nbGUgb3IgYSAyIGJ5IDIgcmVjdGFuZ2xlIGZvciAnICtcclxuXHRcdFx0XHRcdFx0J2EgZ3JvdXBpbmcgb2YgNCwgZm9yIGV4YW1wbGUuIE5vdGUgdGhhdCB0aGUgbWFwIGRvZXMgPGVtPndyYXAgYXJvdW5kPC9lbT4gYXQnICtcclxuXHRcdFx0XHRcdFx0JyB0aGUgZWRnZXMsIHNvIHRoZSByaWdodCBzaWRlIGlzIGFkamFjZW50IHRvIHRoZSBsZWZ0IHNpZGUsIGZvciBleGFtcGxlLjwvcD4nO1xyXG5cdFx0XHRcdFx0bGV0IGRsZyA9IG5ldyBNZXNzYWdlRGlhbG9nKG1haW4sIFwiWW91IGNhbid0IGRvIHRoYXRcIiwgaHRtbCk7XHJcblx0XHRcdFx0XHRkbGcub3BlbigpO1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly9cclxuXHRcdFx0XHQvLyBFbnN1cmUgdGhpcyBncm91cCBkb2VzIG5vdCBhbHJlYWR5IGV4aXN0XHJcblx0XHRcdFx0Ly9cclxuXHRcdFx0XHRmb3IobGV0IGk9MDsgaTx0aGF0Lmdyb3Vwcy5sZW5ndGggJiYgdmFsaWQ7IGkrKykge1xyXG5cdFx0XHRcdFx0aWYodGhhdC5ncm91cHNbaV0uc2VsZWN0ZWQubGVuZ3RoID09PSBzZWxlY3RlZC5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdFx0bGV0IG9rID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdGZvcihsZXQgaj0wOyBqPHRoYXQuZ3JvdXBzW2ldLnNlbGVjdGVkLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYodGhhdC5ncm91cHNbaV0uc2VsZWN0ZWRbal0gIT09IHNlbGVjdGVkW2pdKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRvayA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdGlmKCFvaykge1xyXG5cdFx0XHRcdFx0XHRcdHZhbGlkID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0bGV0IGh0bWwgPSAnPHA+VGhpcyBjb3ZlciBhbHJlYWR5IGV4aXN0cy48L3A+JztcclxuXHRcdFx0XHRcdFx0XHRsZXQgZGxnID0gbmV3IE1lc3NhZ2VEaWFsb2cobWFpbiwgXCJZb3UgY2FuJ3QgZG8gdGhhdFwiLCBodG1sKTtcclxuXHRcdFx0XHRcdFx0XHRkbGcub3BlbigpO1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5hZGRfZ3JvdXAoc2VsZWN0ZWQpO1xyXG5cdFx0XHR0aGlzLmRyYXdHcm91cHMoKTtcclxuXHJcblx0XHRcdG1haW4ud29yay5tYXAuY2xlYXIoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHQvKipcclxuXHQgKiBBZGQgYSBuZXcgZ3JvdXAgKGNvdmVyKVxyXG5cdCAqIEBwYXJhbSBtaW50ZXJtcyBBcnJheSBvZiBtaW50ZXJtcyBpbiB0aGUgZ3JvdXBcclxuXHQgKi9cclxuXHR0aGlzLmFkZF9ncm91cCA9IGZ1bmN0aW9uKG1pbnRlcm1zKSB7XHJcblx0XHRsZXQgZ3JvdXAgPSBuZXcgR3JvdXAodGhpcywgbGlzdCwgbWludGVybXMsIHRoaXMuY29sb3JzW3RoaXMuY29sb3JOXSk7XHJcblx0XHR0aGlzLmNvbG9yTiA9ICh0aGlzLmNvbG9yTiArIDEpICUgdGhpcy5jb2xvcnMubGVuZ3RoO1xyXG5cdFx0dGhpcy5ncm91cHMucHVzaChncm91cCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBEcmF3IGFsbCBvZiB0aGUgZ3JvdXBzIG9uIHRoZSBjYW52YXNcclxuXHQgKi9cclxuXHRHcm91cHMucHJvdG90eXBlLmRyYXdHcm91cHMgPSBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBjYW52YXMgPSBtYWluLndvcmsubWFwLmdldF9jYW52YXMoKTtcclxuXHRcdHZhciBjID0gY2FudmFzO1xyXG5cdFx0dmFyIGN0eCA9IGMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxuXHRcdHZhciB3aWQgPSBjLndpZHRoO1xyXG5cdFx0dmFyIGhpdCA9IGMuaGVpZ2h0O1xyXG5cclxuXHRcdGN0eC5jbGVhclJlY3QoMCwgMCwgd2lkLCBoaXQpO1xyXG5cclxuXHRcdHZhciBzaXplID0gbWFpbi5vcHRpb25zLnNpemU7XHJcblx0XHR2YXIgY291bnRlciA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpPTA7IGk8TWF0aC5wb3coMiwgc2l6ZSk7ICBpKyspIHtcclxuXHRcdFx0Y291bnRlci5wdXNoKDApO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvcih2YXIgaT0wOyBpPHRoaXMuZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBncm91cCA9IHRoaXMuZ3JvdXBzW2ldO1xyXG5cclxuXHRcdFx0dmFyIG1heCA9IDE7XHJcblx0XHRcdGZvcih2YXIgaj0wOyBqPGdyb3VwLnNlbGVjdGVkLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0Y291bnRlcltncm91cC5zZWxlY3RlZFtqXV0rKztcclxuXHRcdFx0XHRpZihjb3VudGVyW2dyb3VwLnNlbGVjdGVkW2pdXSA+IG1heCkge1xyXG5cdFx0XHRcdFx0bWF4ID0gY291bnRlcltncm91cC5zZWxlY3RlZFtqXV07XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cdFx0XHRncm91cC5kcmF3KGN0eCwgd2lkLCBoaXQsIG1heCk7XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0dGhpcy5jbGVhciA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0bGlzdC5pbm5lckhUTUwgPSAnJztcclxuXHRcdHRoaXMuY29sb3JOID0gMDtcclxuXHRcdHRoaXMuZ3JvdXBzID0gW107XHJcblx0XHR0aGlzLmRyYXdHcm91cHMoKTtcclxuXHR9XHJcblxyXG5cdHRoaXMucmVtb3ZlID0gZnVuY3Rpb24oZ3JvdXApIHtcclxuXHRcdGZvcihsZXQgaT0wOyBpPHRoaXMuZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmKHRoaXMuZ3JvdXBzW2ldID09PSBncm91cCkge1xyXG5cdFx0XHRcdHRoaXMuZ3JvdXBzLnNwbGljZShpLCAxKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZHJhd0dyb3VwcygpO1xyXG5cdH1cclxuXHJcblx0aW5pdGlhbGl6ZSgpO1xyXG5cclxuICAgIC8qXHJcbiAgICAgJzxidXR0b24+R3JvdXA8L2J1dHRvbj4nICtcclxuICAgICAnICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3RcIj4nICtcclxuICAgICAnICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyb3VwXCI+JyArXHJcbiAgICAgJyAgICAgICAgICAgIDAsMSwyLDMsNCw1LDYsNyw4LCA5LDEwLDExLDEyLDEzLDE0LDE1JyArXHJcbiAgICAgJyAgICAgICAgPHNwYW4+PGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiPjwvYT48aW1nIHNyYz1cImltYWdlcy94LnBuZ1wiPjwvYT48L3NwYW4+JyArXHJcbiAgICAgJyAgICAgICAgICAgIDwvZGl2PicgK1xyXG4gICAgICcgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXBcIj4nICtcclxuICAgICAnICAgICAgICAgICAgMCwxLDIsMyw0LDUsNiw3LDgsIDksMTAsMTEsMTIsMTMsMTQsMTUnICtcclxuICAgICAnICAgICAgICA8c3Bhbj48YSBocmVmPVwiamF2YXNjcmlwdDo7XCI+PC9hPjxpbWcgc3JjPVwiaW1hZ2VzL3gucG5nXCI+PC9hPjwvc3Bhbj4nICtcclxuICAgICAnICAgICAgICAgICAgPC9kaXY+JyArXHJcbiAgICAgJyAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncm91cFwiPicgK1xyXG4gICAgICcgICAgICAgICAgICAwLDEsMiwzLDQsNSw2LDcsOCwgOSwxMCwxMSwxMiwxMywxNCwxNScgK1xyXG4gICAgICcgICAgICAgIDxzcGFuPjxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj48L2E+PGltZyBzcmM9XCJpbWFnZXMveC5wbmdcIj48L2E+PC9zcGFuPicgK1xyXG4gICAgICcgICAgICAgICAgICA8L2Rpdj4nICtcclxuICAgICAnICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyb3VwXCI+JyArXHJcbiAgICAgJyAgICAgICAgICAgIDAsMSwyLDMsNCw1LDYsNyw4LCA5LDEwLDExLDEyLDEzLDE0LDE1JyArXHJcbiAgICAgJyAgICAgICAgPHNwYW4+PGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiPjwvYT48aW1nIHNyYz1cImltYWdlcy94LnBuZ1wiPjwvYT48L3NwYW4+ICcgK1xyXG4gICAgICcgICAgICAgICAgIDwvZGl2PicgK1xyXG4gICAgICcgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXBcIj4nICtcclxuICAgICAnICAgICAgICAgICAgMCwxLDIsMyw0LDUsNiw3LDgsIDksMTAsMTEsMTIsMTMsMTQsMTUnICtcclxuICAgICAnICAgICAgICA8c3Bhbj48YSBocmVmPVwiamF2YXNjcmlwdDo7XCI+PC9hPjxpbWcgc3JjPVwiaW1hZ2VzL3gucG5nXCI+PC9hPjwvc3Bhbj4nICtcclxuICAgICAnICAgICAgICAgICAgPC9kaXY+JyArXHJcbiAgICAgJyAgICAgICAgICAgIDwvZGl2PicgK1xyXG5cclxuICAgICAqL1xyXG59XHJcblxyXG5Hcm91cHMucHJvdG90eXBlLmNvbG9ycyA9IFtcIiMwMDAwRkZcIiwgXCIjODA4MDg4XCIsIFwiI0ZGODgwMFwiLCBcIiMwMDgwODBcIiwgXCIjQkRCNzZCXCIsXHJcbiAgICBcIiM4MDAwMDBcIiwgXCIjMDBGRjg4XCIsIFwiIzc3ODg5OVwiLCBcIiNGRkE1MDBcIiwgXCIjOUFDRDMyXCIsIFwiIzQ2ODJCNFwiXTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge09wdGlvbnN9IGZyb20gJy4vT3B0aW9ucyc7XHJcbmltcG9ydCB7UmVhZHl9IGZyb20gJy4vVXRpbGl0eS9SZWFkeSc7XHJcbmltcG9ydCB7TWFpbn0gZnJvbSAnLi9NYWluJztcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgS21hcCBLYXJuYXVnaCBNYXAuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEttYXAgPSBmdW5jdGlvbihzZWwsIG9wdGlvbnMpIHtcclxuXHQvL1xyXG5cdC8vIE1hc3RlciBzZXQgb2YgdGhlIHZlcnNpb25cclxuXHQvL1xyXG5cdGxldCBQQUNLQUdFID0gcmVxdWlyZSgnLi4vLi4vcGFja2FnZS5qc29uJyk7XHJcblx0dGhpcy52ZXJzaW9uID0gUEFDS0FHRS52ZXJzaW9uO1xyXG5cclxuXHQvLyBUaGUgT3B0aW9ucyBvYmplY3QgdGhhdCBtYW5hZ2VzIHVzZXIgb3B0aW9uc1xyXG5cdHRoaXMub3B0aW9ucyA9IG5ldyBPcHRpb25zKG9wdGlvbnMpO1xyXG5cclxuXHQvLyBBIGNvbGxlY3Rpb24gb2YgTWFpbiBvYmplY3RzLlxyXG5cdGNvbnN0IG1haW5zID0gW107XHJcblxyXG5cdHRoaXMuc3RhcnQgPSAoKSA9PiB7XHJcblx0XHRSZWFkeS5nbygoKSA9PiB7XHJcblx0XHRcdHRoaXMuc3RhcnROb3coKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU3RhcnQgS21hcCBydW5uaW5nIG5vdy4gRG9lcyBub3Qgd2FpdCBmb3IgZG9jdW1lbnQgcmVhZHkuXHJcblx0ICovXHJcblx0dGhpcy5zdGFydE5vdyA9ICgpID0+IHtcclxuXHRcdGlmKHNlbCBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcclxuXHRcdFx0Y29uc3QgbWFpbiA9IG5ldyBNYWluKHRoaXMsIHNlbCk7XHJcblx0XHRcdG1haW5zLnB1c2gobWFpbik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsKTtcclxuXHRcdFx0Zm9yKGxldCBpPTA7IGk8ZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRjb25zdCBlbGVtZW50ID0gZWxlbWVudHNbaV07XHJcblx0XHRcdFx0Y29uc3QgbWFpbiA9IG5ldyBNYWluKHRoaXMsIGVsZW1lbnQpO1xyXG5cdFx0XHRcdG1haW5zLnB1c2gobWFpbik7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZihtYWlucy5sZW5ndGggPT09IDEpIHtcclxuXHRcdFx0cmV0dXJuIG1haW5zWzBdO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQge1dvcmt9IGZyb20gJy4vV29yayc7XHJcbmltcG9ydCB7R2VuZXJhdG9yfSBmcm9tICcuL0dlbmVyYXRvcic7XHJcbmltcG9ydCB7U29sdXRpb259IGZyb20gXCIuL1NvbHV0aW9uXCI7XHJcbmltcG9ydCB7TWFudWFsfSBmcm9tIFwiLi9NYW51YWxcIjtcclxuXHJcbi8qKlxyXG4gKiBNYWluIHdpbmRvdyBtYW5hZ2VtZW50IG9iamVjdFxyXG4gKiBAcGFyYW0ga21hcCBLbWFwIG9iamVjdCAocGFyZW50KVxyXG4gKiBAcGFyYW0gZWxlbWVudCBUaGUgRE9NIGVsZW1lbnQgdG8gdXNlXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IE1haW4gPSBmdW5jdGlvbihrbWFwLCBlbGVtZW50KSB7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSBrbWFwLm9wdGlvbnM7XHJcblxyXG4gICAgLy8gRW5zdXJlIGVtcHR5IGFuZCBhZGQgdGhlIGttYXAtY2wgY2xhc3NcclxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ttYXAtY2wnKTtcclxuXHJcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG5cclxuICAgIHRoaXMud29yayA9IG51bGw7XHJcbiAgICB0aGlzLmdlbmVyYXRvciA9IG51bGw7XHJcbiAgICB0aGlzLnNvbHV0aW9uID0gbnVsbDtcclxuICAgIHRoaXMubWFudWFsID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLmluaXRpYWxpemUgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYodGhpcy5vcHRpb25zLmdlbmVyYXRvcikge1xyXG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRvciA9IG5ldyBHZW5lcmF0b3IodGhpcywgZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLm9wdGlvbnMubWFudWFsKSB7XHJcbiAgICAgICAgXHR0aGlzLm1hbnVhbCA9IG5ldyBNYW51YWwodGhpcywgZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLm9wdGlvbnMubWFwKSB7XHJcblx0ICAgICAgICB0aGlzLndvcmsgPSBuZXcgV29yayh0aGlzLCBlbGVtZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMub3B0aW9ucy5zb2x1dGlvbikge1xyXG5cdCAgICAgICAgdGhpcy5zb2x1dGlvbiA9IG5ldyBTb2x1dGlvbih0aGlzLCBlbGVtZW50KTtcclxuICAgICAgICB9XHJcblxyXG5cdCAgICAvLyBHZW5lcmF0ZSBpbml0aWFsIG1pbnRlcm1zXHJcblx0ICAgIGlmKHRoaXMuZ2VuZXJhdG9yICE9PSBudWxsKSB7XHJcblx0XHQgICAgaWYodGhpcy5vcHRpb25zLm1pbnRlcm1zLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHQgICAgdGhpcy5nZW5lcmF0b3IuZ2VuZXJhdGUoKTtcclxuXHRcdCAgICB9IGVsc2Uge1xyXG5cdFx0XHQgICAgdGhpcy5nZW5lcmF0b3Iuc2V0KHRoaXMuY29uZmlnLm1pbnRlcm1zKTtcclxuXHRcdCAgICB9XHJcblx0ICAgIH1cclxuICAgIH1cclxuXHJcblx0dGhpcy5uZXdNaW50ZXJtcyA9IGZ1bmN0aW9uKG1pbnRlcm1zKSB7XHJcblx0XHRpZih0aGlzLnNvbHV0aW9uICE9PSBudWxsKSB7XHJcblx0XHRcdHRoaXMuc29sdXRpb24uY2xlYXIoKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLm9wdGlvbnMubWludGVybXMgPSBtaW50ZXJtcy5taW50ZXJtcy5zbGljZSgpO1xyXG5cdFx0dGhpcy5vcHRpb25zLmRvbnRjYXJlID0gbWludGVybXMuZG9udGNhcmUuc2xpY2UoKTtcclxuXHJcblx0XHRpZih0aGlzLndvcmsgIT09IG51bGwpIHtcclxuXHRcdFx0dGhpcy53b3JrLnJlbmRlcigpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdHRoaXMubmV3U2l6ZSA9IGZ1bmN0aW9uKHNpemUpIHtcclxuXHRcdHRoaXMub3B0aW9ucy5zaXplID0gc2l6ZTtcclxuXHRcdGlmKHRoaXMuZ2VuZXJhdG9yICE9PSBudWxsKSB7XHJcblx0XHRcdHRoaXMuZ2VuZXJhdG9yLmdlbmVyYXRlKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG59IiwiLyoqXHJcbiAqIE1hbnVhbCBlbnRyeSBvZiBtaW50ZXJtcyBhbmQgZG9uJ3QgY2FyZXMgc3VwcG9ydFxyXG4gKiBAcGFyYW0gbWFpbiBNYWluIG9iamVjdFxyXG4gKiBAcGFyYW0gZWxlbWVudCBFbGVtZW50IHdlIGFyZSBhZGRpbmcgdGhpcyBjb21wb25lbnQgdG9cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgTWFudWFsID0gZnVuY3Rpb24obWFpbiwgZWxlbWVudCkge1xyXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xyXG5cclxuICAgIGNvbnN0IGxhYmVscyA9IG1haW4ub3B0aW9ucy5sYWJlbHM7XHJcblxyXG4gICAgbGV0IG1hbnVhbE1pbnRlcm1zLCBtYW51YWxEb250Q2FyZXMsIG1hbnVhbFZhcmlhYmxlcztcclxuXHJcbiAgICBjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdrbWFwLWNsLW1hbnVhbCcpO1xyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcbiAgICAgICAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgIGgzLmlubmVySFRNTCA9ICdNYW51YWwgRW50cnknO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChoMyk7XHJcblxyXG5cdCAgICAvLyB2YXIgZm9ybSA9ICc8Zm9ybT48ZGl2IGNsYXNzPVwibGVmdFwiPicgK1xyXG5cdFx0Ly8gICAgICc8cD48bGFiZWwgZm9yPVwibWFudWFsLW1pbnRlcm1zXCI+TWludGVybXM6IDwvbGFiZWw+PGJyPjxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibWFudWFsLW1pbnRlcm1zXCIgc3BlbGxjaGVjaz1cImZhbHNlXCI+PC9wPicgK1xyXG5cdFx0Ly8gICAgICc8cD48bGFiZWwgZm9yPVwibWFudWFsLWRvbnRjYXJlc1wiPkRvblxcJ3QgY2FyZXM6IDwvbGFiZWw+PGJyPjxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibWFudWFsLWRvbnRjYXJlc1wiIHNwZWxsY2hlY2s9XCJmYWxzZVwiPjwvcD4nICtcclxuXHRcdC8vICAgICAnPHA+PGJ1dHRvbj5UYWtlPC9idXR0b24+PC9wPicgK1xyXG5cdFx0Ly8gICAgICc8L2Rpdj48ZGl2IGNsYXNzPVwicmlnaHRcIj4nICtcclxuXHRcdC8vICAgICAnPHA+PGxhYmVsIGZvcj1cIm1hbnVhbC12YXJpYWJsZXNcIj5MYWJlbHM6IDwvbGFiZWw+PGJyPjxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibWFudWFsLXZhcmlhYmxlc1wiIHZhbHVlPVwiJyArXHJcblx0XHQvLyAgICAgbGFiZWxzICsgJ1wiIHNwZWxsY2hlY2s9XCJmYWxzZVwiPjwvcD4nICtcclxuXHRcdC8vICAgICAnPC9kaXY+PC9mb3JtPic7XHJcblxyXG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGZvcm0pO1xyXG5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIExlZnQgZGl2XHJcbiAgICAgICAgLy9cclxuXHJcbiAgICAgICAgY29uc3QgbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQobGVmdCk7XHJcblxyXG5cdCAgICAvLyA8cD48bGFiZWwgZm9yPVwibWFudWFsLW1pbnRlcm1zXCI+TWludGVybXM6IDwvbGFiZWw+PGJyPjxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibWFudWFsLW1pbnRlcm1zXCIgc3BlbGxjaGVjaz1cImZhbHNlXCI+PC9wPlxyXG4gICAgICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGxlZnQuYXBwZW5kQ2hpbGQocCk7XHJcblxyXG4gICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgcC5hcHBlbmRDaGlsZChsYWJlbCk7XHJcblxyXG4gICAgICAgIGxhYmVsLmlubmVyVGV4dCA9ICdNaW50ZXJtczogJztcclxuICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcclxuXHJcbiAgICAgICAgbWFudWFsTWludGVybXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIG1hbnVhbE1pbnRlcm1zLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICAgICAgbWFudWFsTWludGVybXMuc2V0QXR0cmlidXRlKCdzcGVsbGNoZWNrJywgJ2ZhbHNlJyk7XHJcbiAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQobWFudWFsTWludGVybXMpO1xyXG5cclxuICAgICAgICAvLyA8cD48bGFiZWwgZm9yPVwibWFudWFsLWRvbnRjYXJlc1wiPkRvblxcJ3QgY2FyZXM6IDwvbGFiZWw+PGJyPjxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibWFudWFsLWRvbnRjYXJlc1wiIHNwZWxsY2hlY2s9XCJmYWxzZVwiPjwvcD5cclxuXHQgICAgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHQgICAgbGVmdC5hcHBlbmRDaGlsZChwKTtcclxuXHJcblx0ICAgIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuXHQgICAgcC5hcHBlbmRDaGlsZChsYWJlbCk7XHJcblxyXG5cdCAgICBsYWJlbC5pbm5lclRleHQgPSAnRG9uXFwndCBjYXJlczogJztcclxuXHQgICAgbGFiZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XHJcblxyXG5cdCAgICBtYW51YWxEb250Q2FyZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5cdCAgICBtYW51YWxEb250Q2FyZXMuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuXHQgICAgbWFudWFsRG9udENhcmVzLnNldEF0dHJpYnV0ZSgnc3BlbGxjaGVjaycsICdmYWxzZScpO1xyXG5cdCAgICBsYWJlbC5hcHBlbmRDaGlsZChtYW51YWxEb250Q2FyZXMpO1xyXG5cclxuXHQgICAgLy8gPHA+PGJ1dHRvbj5UYWtlPC9idXR0b24+PC9wPlxyXG5cdCAgICBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cdCAgICBsZWZ0LmFwcGVuZENoaWxkKHApO1xyXG5cclxuICAgICAgICBjb25zdCB0YWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgcC5hcHBlbmRDaGlsZCh0YWtlKTtcclxuICAgICAgICB0YWtlLmlubmVyVGV4dCA9ICdUYWtlJztcclxuXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBSaWdodCBkaXZcclxuICAgICAgICAvL1xyXG5cclxuICAgICAgICBjb25zdCByaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQocmlnaHQpO1xyXG5cclxuICAgICAgICAvLyA8cD48bGFiZWwgZm9yPVwibWFudWFsLXZhcmlhYmxlc1wiPkxhYmVsczogPC9sYWJlbD48YnI+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJtYW51YWwtdmFyaWFibGVzXCIgdmFsdWU9XCInICtcclxuXHQgICAgLy8gbGFiZWxzICsgJ1wiIHNwZWxsY2hlY2s9XCJmYWxzZVwiPjwvcD5cclxuXHQgICAgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHQgICAgcmlnaHQuYXBwZW5kQ2hpbGQocCk7XHJcblxyXG5cdCAgICBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcblx0ICAgIHAuYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG5cclxuXHQgICAgbGFiZWwuaW5uZXJUZXh0ID0gJ0xhYmVsczogJztcclxuXHQgICAgbGFiZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XHJcblxyXG5cdCAgICBtYW51YWxWYXJpYWJsZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5cdCAgICBtYW51YWxWYXJpYWJsZXMuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuXHQgICAgbWFudWFsVmFyaWFibGVzLnNldEF0dHJpYnV0ZSgnc3BlbGxjaGVjaycsICdmYWxzZScpO1xyXG5cdCAgICBsYWJlbC5hcHBlbmRDaGlsZChtYW51YWxWYXJpYWJsZXMpO1xyXG5cdCAgICBtYW51YWxWYXJpYWJsZXMudmFsdWUgPSBsYWJlbHM7XHJcblxyXG5cdCAgICB0YWtlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcblx0XHQgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdCAgICBjb25zdCBtaW50ZXJtc2xpc3QgPSBwYXJzZShtYW51YWxNaW50ZXJtcy52YWx1ZSk7XHJcblx0XHQgICAgY29uc3QgZG9udGNhcmVsaXN0ID0gcGFyc2UobWFudWFsRG9udENhcmVzLnZhbHVlKTtcclxuXHJcblx0XHQgICAgLy8gR2V0IHRoZSBsYWJlbHMsIHN0cmlwcGluZyBhbnkgSFRNTCB0YWdzIGp1c3QgaW4gY2FzZVxyXG5cdFx0ICAgIGNvbnN0IGxhYmVscyA9IG1hbnVhbFZhcmlhYmxlcy52YWx1ZS5yZXBsYWNlKC8oPChbXj5dKyk+KS9pZyxcIlwiKTtcclxuXHJcblx0XHQgICAgbWFpbi5vcHRpb25zLmxhYmVscyA9IGxhYmVscy5zcGxpdChcIixcIik7XHJcblx0XHQgICAgbWFpbi5nZW5lcmF0b3Iuc2V0KG1pbnRlcm1zbGlzdCwgZG9udGNhcmVsaXN0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblx0ZnVuY3Rpb24gcGFyc2UoaW5wdXQpIHtcclxuXHRcdHZhciByZU0gPSAvbS9nO1xyXG5cdFx0dmFyIHJlID0gL1ssIF0rL2c7XHJcblx0XHR2YXIgaXRlbXMgPSBpbnB1dC5yZXBsYWNlKHJlTSwgJycpLnNwbGl0KHJlKTtcclxuXHRcdHZhciByZXQgPSBbXTtcclxuXHRcdGl0ZW1zLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xyXG5cdFx0XHRpZihpdGVtICE9PSAgXCJcIikge1xyXG5cdFx0XHRcdHJldC5wdXNoKHBhcnNlSW50KGl0ZW0pKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuIHJldDtcclxuXHR9XHJcblxyXG4gICAgaW5pdGlhbGl6ZSgpO1xyXG59XHJcbiIsImltcG9ydCB7TWVzc2FnZURpYWxvZ30gZnJvbSAnLi9NZXNzYWdlRGlhbG9nJztcclxuXHJcbi8qKlxyXG4gKiBUaGUgYWN0dWFsIEthcm5hdWdoIE1hcFxyXG4gKiBAcGFyYW0gbWFpblxyXG4gKiBAcGFyYW0gZWxlbWVudFxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBNYXAgPSBmdW5jdGlvbihtYWluLCBlbGVtZW50KSB7XHJcbiAgICB0aGlzLm1haW4gPSBtYWluO1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICAgIHRoaXMuc2VsZWN0ZWQgPSBbXTtcclxuXHJcbiAgICBsZXQgdG9wTGVmdCwgYm90UmlnaHQsIGNhbnZhcztcclxuXHJcbiAgICBjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XHJcbiAgICAgICAgdGFibGUuY2xhc3NMaXN0LmFkZCgna21hcCcpO1xyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGFibGUpO1xyXG5cclxuICAgICAgICAvLyBNYWtlIGEgbG9jYWwgY29weSBvZiB0aGUgbGFiZWxzLCBjb252ZXJ0aW5nXHJcblx0ICAgIC8vIF8xIHRvIDxzdWI+MTwvc3ViPlxyXG5cdCAgICBjb25zdCBsYWJlbHMgPSBbXTtcclxuXHQgICAgZm9yKGNvbnN0IGxhYmVsIG9mIG1haW4ub3B0aW9ucy5sYWJlbHMpIHtcclxuXHRcdFx0bGFiZWxzLnB1c2gobGFiZWwucmVwbGFjZSgvXyhbYS16QS1aMC05XSkqL2csICc8c3ViPiQxPC9zdWI+JykpO1xyXG5cdCAgICB9XHJcblxyXG4gICAgICAgIHZhciBsZWZ0LCByaWdodCwgcmVzdCwgY29saGVhZHM7XHJcbiAgICAgICAgaWYoK21haW4ub3B0aW9ucy5zaXplID09PSAyKSB7XHJcbiAgICAgICAgICAgIGxldCBBID0gbGFiZWxzWzBdO1xyXG5cdCAgICAgICAgbGV0IEIgPSBsYWJlbHNbMV07XHJcbiAgICAgICAgICAgIGxlZnQ9QjtcclxuICAgICAgICAgICAgcmlnaHQ9QTtcclxuICAgICAgICAgICAgcmVzdCA9IFwiPHRoPlwiICsgQSArIFwiJzwvdGg+PHRoPlwiICsgQSArIFwiPC90aD5cIjtcclxuICAgICAgICAgICAgY29saGVhZHMgPSBbQiArIFwiJ1wiLCBCXTtcclxuICAgICAgICB9IGVsc2UgaWYoK21haW4ub3B0aW9ucy5zaXplID09PSAzKSB7XHJcblx0ICAgICAgICBsZXQgQSA9IGxhYmVsc1swXTtcclxuXHQgICAgICAgIGxldCBCID0gbGFiZWxzWzFdO1xyXG5cdCAgICAgICAgbGV0IEMgPSBsYWJlbHNbMl07XHJcbiAgICAgICAgICAgIGxlZnQ9QztcclxuICAgICAgICAgICAgcmlnaHQ9QSArIEI7XHJcbiAgICAgICAgICAgIHJlc3QgPSBcIjx0aD5cIiArIEEgKyBcIidcIiArIEIgKyBcIic8L3RoPjx0aD5cIiArIEEgKyBcIidcIiArIEIgK1xyXG4gICAgICAgICAgICAgICAgXCI8L3RoPjx0aD5cIiArIEEgKyBCICsgXCI8L3RoPjx0aD5cIiArIEEgICsgQiArIFwiJzwvdGg+XCI7XHJcbiAgICAgICAgICAgIGNvbGhlYWRzID0gW0MgKyBcIidcIiwgQ107XHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgIGxldCBBID0gbGFiZWxzWzBdO1xyXG5cdCAgICAgICAgbGV0IEIgPSBsYWJlbHNbMV07XHJcblx0ICAgICAgICBsZXQgQyA9IGxhYmVsc1syXTtcclxuXHQgICAgICAgIGxldCBEID0gbGFiZWxzWzNdO1xyXG4gICAgICAgICAgICBsZWZ0PUMgKyBEO1xyXG4gICAgICAgICAgICByaWdodD1BICsgQjtcclxuICAgICAgICAgICAgcmVzdCA9IFwiPHRoPlwiICsgQSArIFwiJ1wiICsgQiArIFwiJzwvdGg+PHRoPlwiICsgQSArIFwiJ1wiICsgQiArIFwiPC90aD48dGg+XCIgK1xyXG4gICAgICAgICAgICAgICAgQSArIEIgKyBcIjwvdGg+PHRoPlwiICsgQSArIEIgKyBcIic8L3RoPlwiO1xyXG4gICAgICAgICAgICBjb2xoZWFkcyA9IFtDICsgXCInXCIgKyBEICsgXCInXCIsIEMgKyBcIidcIiArIEQsIEMgKyBELCBDICsgRCArIFwiJ1wiXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgICogVG9wIHJvdyBmaXJzdFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGxldCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICAgICAgdHIuaW5uZXJIVE1MID0gJzx0aD48ZGl2IGNsYXNzPVwia21hcC1jbC1sZWZ0XCI+JyArIGxlZnQgK1xyXG4gICAgICAgICAgICAnPC9kaXY+PGRpdiBjbGFzcz1cImttYXAtY2wtbGluZVwiPjwvZGl2PjxkaXYgY2xhc3M9XCJrbWFwLWNsLXJpZ2h0XCI+JyArIHJpZ2h0ICsgJzwvZGl2PjwvdGg+JyArXHJcbiAgICAgICAgICAgIHJlc3Q7XHJcbiAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQodHIpO1xyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgICAqIFJlc3Qgb2YgdGhlIHRhYmxlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbGV0IHJvd3MgPSArbWFpbi5vcHRpb25zLnNpemUgPT09IDQgPyA0IDogMjtcclxuICAgICAgICBsZXQgY29scyA9ICttYWluLm9wdGlvbnMuc2l6ZSA9PT0gMiA/IDIgOiA0O1xyXG5cclxuXHJcbiAgICAgICAgZm9yKGxldCByPTE7IHI8PXJvd3M7IHIrKykge1xyXG4gICAgICAgIFx0dHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgICAgIFx0dHIuaW5uZXJIVE1MID0gJzx0aD4nICsgY29saGVhZHNbci0xXSArICc8L3RoPic7XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGM9MTsgYzw9Y29sczsgYysrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZCA9IG1ha2VfY2VsbChjLCByKTtcclxuICAgICAgICAgICAgICAgIHRyLmFwcGVuZENoaWxkKHRkKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihyID09PSAxICYmIGMgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3BMZWZ0ID0gdGQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYociA9PT0gcm93cyAmJiBjID09PSBjb2xzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90UmlnaHQgPSB0ZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQodHIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgY2FudmFzLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnMTAwMCcpO1xyXG4gICAgICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsICcxMDAwJyk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcbiAgICAgICAgXHRzZXRfY2FudmFzKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2FudmFzKTtcclxuXHJcbiAgICAgICAgc2V0X2NhbnZhcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZ2V0X2NhbnZhcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhbnZhcztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRfY2FudmFzKCkge1xyXG5cdCAgICBjb25zdCB0bCA9IHtsZWZ0OiB0b3BMZWZ0Lm9mZnNldExlZnQsIHRvcDogdG9wTGVmdC5vZmZzZXRUb3B9O1xyXG5cdCAgICBjb25zdCBiciA9IHtsZWZ0OiBib3RSaWdodC5vZmZzZXRMZWZ0LCB0b3A6IGJvdFJpZ2h0Lm9mZnNldFRvcH07XHJcblx0ICAgIGNhbnZhcy5zdHlsZS50b3AgPSB0bC50b3AgKyAncHgnO1xyXG5cdCAgICBjYW52YXMuc3R5bGUubGVmdCA9IHRsLmxlZnQgKyAncHgnO1xyXG5cdCAgICBjYW52YXMuc3R5bGUud2lkdGggPSAoYnIubGVmdCAtIHRsLmxlZnQgKyBib3RSaWdodC5vZmZzZXRXaWR0aCkgKyAncHgnO1xyXG5cdCAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gKGJyLnRvcCAtIHRsLnRvcCArIGJvdFJpZ2h0Lm9mZnNldEhlaWdodCkgKyAncHgnO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1ha2VfY2VsbCA9IChjLCByKSA9PiB7XHJcbiAgICBcdGxldCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcblxyXG4gICAgICAgIGxldCBtaW50ZXJtID0gdG9fbWludGVybShjLCByKTtcclxuICAgICAgICBsZXQgYml0ID0gJzAnO1xyXG4gICAgICAgIGZvcih2YXIgaT0wOyBpPG1haW4ub3B0aW9ucy5taW50ZXJtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZihtaW50ZXJtID09PSArbWFpbi5vcHRpb25zLm1pbnRlcm1zW2ldKSB7XHJcbiAgICAgICAgICAgICAgICBiaXQgPSAnMSc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yKGk9MDsgaTxtYWluLm9wdGlvbnMuZG9udGNhcmUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYobWludGVybSA9PT0gK21haW4ub3B0aW9ucy5kb250Y2FyZVtpXSkge1xyXG4gICAgICAgICAgICAgICAgYml0ID0gJ1gnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKG1haW4ub3B0aW9ucy5sYWJlbE1pbnRlcm1zKSB7XHJcbiAgICAgICAgICAgIHRkLmlubmVySFRNTCA9ICc8c3BhbiBjbGFzcz1cIm1pbnRlcm1cIj5tJyArIG1pbnRlcm0gKyAnPC9zcGFuPicgKyBiaXQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGQuaW5uZXJIVE1MID0gYml0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLm1haW4ub3B0aW9ucy5zdHJpY3QgJiYgYml0ID09PSAnMCcpIHtcclxuICAgICAgICAgICAgICAgIGxldCBodG1sID0gJzxwPllvdSBhcmUgb25seSBhbGxvd2VkIHRvIHNlbGVjdCBjZWxscyB0aGF0IGFyZSBlaXRoZXIgdHJ1ZSAnICtcclxuICAgICAgICAgICAgICAgICAgICAnb3Igc2V0IHRvIGRvblxcJ3QgY2FyZS48L3A+PHA+V2UgYXJlIGdyb3VwaW5nIG1pbnRlcm1zIHRoYXQgYWxsIGFyZSB0cnVlICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICdzbyB3ZSBjYW4gbWluaW1pemUgdGhlIGNpcmN1aXQuIFNvLCBvbmx5IHRydWUgY2VsbHMgY2FuIGJlIGdyb3VwZWQuPC9wPic7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkbGcgPSBuZXcgTWVzc2FnZURpYWxvZyhtYWluLCBcIllvdSBjYW4ndCBkbyB0aGF0XCIsIGh0bWwpO1xyXG4gICAgICAgICAgICAgICAgZGxnLm9wZW4oKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYodGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwia21hcC1jbC1zZWxlY3RlZFwiKSkge1xyXG4gICAgICAgICAgICAgICAgdGQuY2xhc3NMaXN0LnJlbW92ZShcImttYXAtY2wtc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICBpZihpc19zZWxlY3RlZChtaW50ZXJtKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQuc3BsaWNlKG4sIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGQuY2xhc3NMaXN0LmFkZChcImttYXAtY2wtc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICBpZighaXNfc2VsZWN0ZWQobWludGVybSkpIHtcclxuXHQgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZC5wdXNoKG1pbnRlcm0pO1xyXG5cdCAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkLnNvcnQoZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYSAtIGI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0ZDtcclxuICAgIH1cclxuXHJcblx0Y29uc3QgdG9fbWludGVybSA9IChjLCByKSA9PiB7XHJcblx0XHRsZXQgbWFwO1xyXG5cclxuXHRcdGlmKCt0aGlzLm1haW4ub3B0aW9ucy5zaXplID09PSAyKSB7XHJcblx0XHRcdG1hcCA9IFtbMCwgMl0sIFsxLCAzXV07XHJcblx0XHR9IGVsc2UgaWYoK3RoaXMubWFpbi5vcHRpb25zLnNpemUgPT09IDMpIHtcclxuXHRcdFx0bWFwID0gW1swLCAyLCA2LCA0XSwgWzEsIDMsIDcsIDVdXTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG1hcCA9IFtbMCwgNCwgMTIsIDhdLCBbMSwgNSwgMTMsIDldLCBbMywgNywgMTUsIDExXSwgWzIsIDYsIDE0LCAxMF1dO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBtYXBbci0xXVtjLTFdO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgaXNfc2VsZWN0ZWQgPSAobWludGVybSkgPT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuc2VsZWN0ZWQuaW5kZXhPZihtaW50ZXJtKSA+IC0xOyAvL1xyXG5cdH1cclxuXHJcbiAgICB0aGlzLmNsZWFyID0gZnVuY3Rpb24oKSB7XHJcblx0ICAgIHRoaXMuc2VsZWN0ZWQgPSBbXTtcclxuXHQgICAgY29uc3QgdGRzID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RkJyk7XHJcblx0ICAgIGZvcihsZXQgdGQgb2YgdGRzKSB7XHJcblx0ICAgIFx0dGQuY2xhc3NMaXN0LnJlbW92ZSgna21hcC1jbC1zZWxlY3RlZCcpO1xyXG5cdCAgICB9XHJcbiAgICB9XHJcblxyXG5cdGluaXRpYWxpemUoKTtcclxufVxyXG4iLCIvKipcclxuICogVGhlIHN0YW5kYXJkIE1lc3NhZ2UgZGlhbG9nIGJveC5cclxuICpcclxuICogUHJldHR5IG1pbmltYWxpc3QgZGlhbG9nIGJveFxyXG4gKlxyXG4gKiBAcGFyYW0gbWFpbiBUaGUgTWFpbiBvYmplY3RcclxuICogQHBhcmFtIHRpdGxlIFRpdGxlIGZvciB0aGUgZGlhbG9nIGJveFxyXG4gKiBAcGFyYW0gYm9keSBCb2R5IEhUTUwgdG8gcHV0IGluIHRoZSBkaWFsb2cgYm94XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IE1lc3NhZ2VEaWFsb2cgPSBmdW5jdGlvbihtYWluLCB0aXRsZSwgYm9keSkge1xyXG5cclxuICAgIGxldCBkaXYgPSBudWxsO1xyXG5cclxuICAgIHRoaXMub3BlbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIFRoZSB0b3AgbGV2ZWwgZGlhbG9nIGVsZW1lbnRcclxuICAgICAgICBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgna21hcC1jbC1kbGcnKTtcclxuICAgICAgICBtYWluLmVsZW1lbnQuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcbiAgICAgICAgLy8gVGhlIG1hc2tcclxuICAgICAgICBsZXQgbWFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChtYXNrKTtcclxuXHJcbiAgICAgICAgLy8gVGhlIGRpYWxvZyBib3ggaXRzZWxmXHJcbiAgICAgICAgbGV0IGRsZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChkbGcpO1xyXG5cclxuICAgICAgICAvLyBUaXRsZSBiYXJcclxuICAgICAgICBsZXQgdGIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkbGcuYXBwZW5kQ2hpbGQodGIpO1xyXG4gICAgICAgIHRiLmlubmVyVGV4dCA9IHRpdGxlO1xyXG5cclxuICAgICAgICAvLyBCb2R5XHJcbiAgICAgICAgbGV0IGRiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGxnLmFwcGVuZENoaWxkKGRiKTtcclxuXHQgICAgZGIuaW5uZXJIVE1MID0gYm9keTtcclxuXHJcblx0ICAgIC8vIENvbnRyb2xzXHJcbiAgICAgICAgbGV0IGNvbnRyb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGxnLmFwcGVuZENoaWxkKGNvbnRyb2xzKTtcclxuXHJcbiAgICAgICAgbGV0IG9rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgY29udHJvbHMuYXBwZW5kQ2hpbGQob2spO1xyXG4gICAgICAgIG9rLmlubmVyVGV4dCA9ICdPayc7XHJcblxyXG4gICAgICAgIG9rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICBpZihkaXYgIT09IG51bGwpIHtcclxuXHQgICAgICAgICAgIG1haW4uZWxlbWVudC5yZW1vdmVDaGlsZChkaXYpO1xyXG5cdCAgICAgICAgICAgZGl2ID0gbnVsbDtcclxuICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBVc2VyIGludGVyZmFjZSBvcHRpb25zLlxyXG4gKlxyXG4gKiBPcHRpb25zIGNhbiBiZSBwYXNzZWQgYXMgYSBKYXZhc2NyaXB0IE9iamVjdCwgSlNPTiwgb3IgYmFzZTY0LWVuY29kZWQgSlNPTlxyXG4gKlxyXG4gKiBAcGFyYW0gb3B0aW9ucyBVc2VyIHByb3ZpZGVkIG9wdGlvbnMgdGhhdCBvdmVycmlkZSB0aGUgZGVmYXVsdCB2YWx1ZXMuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IE9wdGlvbnMgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgICBvcHRpb25zID0gb3B0aW9ucyA/IG9wdGlvbnMgOiB7fTtcclxuXHJcblx0aWYgKG9wdGlvbnMgIT09IE9iamVjdChvcHRpb25zKSkge1xyXG5cdFx0aWYgKG9wdGlvbnMuc3Vic3RyKDAsIDEpID09PSAneycpIHtcclxuXHRcdFx0b3B0aW9ucyA9IEpTT04ucGFyc2Uob3B0aW9ucyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQvLyBOb3QgSlNPTiwgbXVzdCBiZSBiYXNlNjQgZW5jb2RlZFxyXG5cdFx0XHRvcHRpb25zID0gSlNPTi5wYXJzZShhdG9iKG9wdGlvbnMpKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG4gICAgLy8vIFRoZSBpbnB1dCBzaXplOiAyLCAzLCBvciA0XHJcblx0dGhpcy5zaXplID0gMjtcclxuXHJcblx0Ly8vIFRoZSBtaW50ZXJtcy4gU2V0IHRvIGludGVnZXJzIHN0YXJ0aW5nIGF0IDBcclxuXHR0aGlzLm1pbnRlcm1zID0gW107IC8vIFsxLCAyLCA3LCA4LCA5LCAxNF07XHJcblxyXG5cdC8vLyBUaGUgZG9uJ3QgY2FyZSBtaW50ZXJtc1xyXG5cdHRoaXMuZG9udGNhcmUgPSBbXTtcclxuXHJcblx0Ly8vIExhYmVscyBmb3IgdGhlIHZhcmlhYmxlcy5cclxuXHR0aGlzLmxhYmVscyA9IFsnQScsICdCJywgJ0MnLCAnRCddO1xyXG5cclxuXHQvLy8gR2VuZXJhdGUgZG9uJ3QgY2FyZSBtYXBzXHJcblx0dGhpcy5nZW5kb250Y2FyZSA9IGZhbHNlO1xyXG5cclxuXHQvL1xyXG5cdC8vIFVzZXIgaW50ZXJmYWNlIHNlY3Rpb25zXHJcblx0Ly9cclxuXHJcblx0Ly8vIEluY2x1ZGUgdGhlIGdlbmVyYXRvcj9cclxuXHR0aGlzLmdlbmVyYXRvciA9IHRydWU7XHJcblxyXG5cdC8vLyBJbmNsdWRlIHRoZSBtYW51YWwgZGF0YSBlbnRyeSBzZWN0aW9uP1xyXG5cdHRoaXMubWFudWFsID0gdHJ1ZTtcclxuXHJcblx0Ly8vIEluY2x1ZGUgdGhlIG1hcD9cclxuXHR0aGlzLm1hcCA9IHRydWU7XHJcblxyXG5cdC8vLyBJbmNsdWRlIHRoZSBzb2x1dGlvbiBzZWN0aW9uP1xyXG5cdHRoaXMuc29sdXRpb24gPSB0cnVlO1xyXG5cclxuXHJcblxyXG5cclxuXHQvLy8gSWYgdHJ1ZSwgdGhlIG1pbnRlcm0gbmFtZSBhcHBlYXJzIGluIGVhY2ggY2VsbC5cclxuXHR0aGlzLmxhYmVsTWludGVybXMgPSB0cnVlO1xyXG5cclxuXHQvLy8gSWYgc2V0IHRydWUsIHVzZXIgaW5wdXQgaXMgY2hlY2tlZCBmb3Igc2VsZWN0aW5nIGludmFsaWQgY2VsbHNcclxuXHQvLy8gc3VjaCBhcyB6ZXJvcy5cclxuXHR0aGlzLnN0cmljdCA9IHRydWU7XHJcblxyXG5cdC8vLyBJZiBzZXQgdHJ1ZSwgcHJhY3RpY2UgZ2VuZXJhdGUgZmVhdHVyZXMgYXJlIGRpc2FibGVkXHJcblx0dGhpcy5maXhlZCA9IGZhbHNlO1xyXG5cclxuXHQvLy8gSWYgdHJ1ZSwgdGhlIGhlYWRlciBLYXJuYXVnaCBNYXAgaXMgaW5jbHVkZWQgd2l0aCBhbiBvcHRpb24gdG8gaGlkZSB0aGUgbWFwXHJcblx0dGhpcy5tYXBIZWFkaW5nID0gdHJ1ZTtcclxuXHJcblx0Ly8vIFZlcmJvc2UgYW5zd2VycyBvbiBtaXN0YWtlc1xyXG5cdHRoaXMudmVyYm9zZSA9IHRydWU7XHJcblxyXG5cdC8vLyBJcyB0aGUgc29sdmUgYnV0dG9uIHByb3ZpZGVkP1xyXG5cdHRoaXMuc29sdmUgPSB0cnVlO1xyXG5cclxuICAgIGZvcih2YXIgcHJvcGVydHkgaW4gb3B0aW9ucykge1xyXG4gICAgICAgIGlmKG9wdGlvbnMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBvcHRpb24gXCIgKyBwcm9wZXJ0eSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpc1twcm9wZXJ0eV0gPSBvcHRpb25zW3Byb3BlcnR5XTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtFeHByZXNzaW9ufSBmcm9tIFwiLi4vTG9naWMvRXhwcmVzc2lvblwiO1xyXG5pbXBvcnQge1F1aW5lTWNDbHVza2V5U29sdmVyfSBmcm9tIFwiLi4vTG9naWMvUXVpbmVNY0NsdXNrZXlTb2x2ZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBQcmFjdGljZSBwYWdlIHNvbHV0aW9uIGZvcm1cclxuICogQHBhcmFtIG1haW4gTWFpbiBvYmplY3RcclxuICogQHBhcmFtIGVsZW1lbnQgUGFyZW50IGVsZW1lbnRcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgU29sdXRpb24gPSBmdW5jdGlvbihtYWluLCBlbGVtZW50KSB7XHJcbiAgICB2YXIgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgdGhpcy5tYWluID0gbWFpbjtcclxuXHJcbiAgICAvLyBUaGUgdmFyaW91cyBzZWN0aW9uIGVsZW1lbnRzXHJcbiAgICBsZXQgZGl2LCBleHByZXNzaW9uSW5wdXQsIHJlc3VsdDtcclxuXHJcbiAgICBjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xyXG4gICAgICAgIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdrbWFwLWNsLXNvbHV0aW9uJyk7XHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmQoZGl2KTtcclxuXHJcbiAgICAgICAgbGV0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICBoMy5pbm5lclRleHQgPSAnU29sdXRpb24nO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChoMyk7XHJcblxyXG4gICAgICAgIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChmb3JtKTtcclxuXHJcblx0ICAgIC8vICc8cD48bGFiZWw+RW50ZXIgRXhwcmVzc2lvbjxicj48aW5wdXQgdHlwZT1cInRleHRcIiBzcGVsbGNoZWNrPVwiZmFsc2VcIiBjbGFzcz1cImV4cHJlc3Npb25cIj48L2xhYmVsPjwvcD4nXHJcblx0ICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cdCAgICBmb3JtLmFwcGVuZENoaWxkKHApO1xyXG5cclxuXHQgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuXHQgICAgcC5hcHBlbmRDaGlsZChsYWJlbCk7XHJcblx0ICAgIGxhYmVsLmlubmVyVGV4dCA9ICdFbnRlciBFeHByZXNzaW9uJztcclxuXHQgICAgbGFiZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XHJcblxyXG5cdCAgICBleHByZXNzaW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5cdCAgICBleHByZXNzaW9uSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuXHQgICAgZXhwcmVzc2lvbklucHV0LnNldEF0dHJpYnV0ZSgnc3BlbGxjaGVjaycsICdmYWxzZScpO1xyXG5cdCAgICBsYWJlbC5hcHBlbmRDaGlsZChleHByZXNzaW9uSW5wdXQpO1xyXG5cclxuXHQgICAgLy8gJzxwPjxidXR0b24gY2xhc3M9XCJjaGVja1wiPkNoZWNrPC9idXR0b24+PGEgY2xhc3M9XCJjbGVhclwiIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj48L2E+JztcclxuICAgICAgICBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQocCk7XHJcblxyXG4gICAgICAgIGxldCBjaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGNoZWNrLmNsYXNzTGlzdC5hZGQoJ2NoZWNrJyk7XHJcbiAgICAgICAgY2hlY2suaW5uZXJUZXh0ID0gJ0NoZWNrJztcclxuICAgICAgICBwLmFwcGVuZENoaWxkKGNoZWNrKTtcclxuXHJcbiAgICAgICAgY2hlY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgIHRoaXMuY2hlY2soKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQ2xlYXIgYnV0dG9uIChpbnB1dClcclxuXHQgICAgcC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnICcpKTtcclxuXHJcblx0ICAgIGxldCBjbGVhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuXHQgICAgY2xlYXIuY2xhc3NMaXN0LmFkZCgnY2xlYXInKTtcclxuXHQgICAgcC5hcHBlbmRDaGlsZChjbGVhcik7XHJcblxyXG5cdCAgICBjbGVhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG5cdCAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHQgICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgICAgICB9KTtcclxuXHJcblx0ICAgIC8vIE9wdGlvbmFsIHNvbHZlIGJ1dHRvblxyXG5cdCAgICBpZihtYWluLm9wdGlvbnMuc29sdmUpIHtcclxuXHRcdCAgICBwLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcgJykpO1xyXG5cclxuXHRcdCAgICBsZXQgc29sdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHRcdCAgICBzb2x2ZS5jbGFzc0xpc3QuYWRkKCdrbWFwLWNsLXNvbHZlJyk7XHJcblx0XHQgICAgc29sdmUuaW5uZXJIVE1MID0gJ1NvbHZlJztcclxuXHRcdCAgICBwLmFwcGVuZENoaWxkKHNvbHZlKTtcclxuXHJcblx0XHQgICAgc29sdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuXHRcdCAgICBcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHQgICAgXHR0aGlzLnNvbHZlKCk7XHJcblx0XHQgICAgfSlcclxuXHQgICAgfVxyXG5cclxuXHQgICAgLy8gUmVzdWx0cyBkaXZcclxuICAgICAgICByZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQocmVzdWx0KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNsZWFyID0gZnVuY3Rpb24oKSB7XHJcblx0ICAgIGV4cHJlc3Npb25JbnB1dC52YWx1ZSA9ICcnO1xyXG5cdCAgICByZXN1bHQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jaGVjayA9IGZ1bmN0aW9uKCkge1xyXG5cdCAgICB2YXIgbXQgPSAnJztcclxuXHQgICAgdmFyIGZpcnN0PXRydWU7XHJcblx0ICAgIGZvcihsZXQgaSBpbiBtYWluLm9wdGlvbnMubWludGVybXMpIHtcclxuXHRcdCAgICBpZihmaXJzdCkge1xyXG5cdFx0XHQgICAgbXQgKz0gXCIsXCI7XHJcblx0XHQgICAgfSBlbHNlIHtcclxuXHRcdFx0ICAgIGZpcnN0ID0gZmFsc2U7XHJcblx0XHQgICAgfVxyXG5cclxuXHRcdCAgICBtdCArPSBtYWluLm9wdGlvbnMubWludGVybXNbaV07XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIHJlc3VsdC5pbm5lckhUTUwgPSAnJztcclxuXHJcblx0ICAgIHZhciBleHByZXNzaW9uID0gbmV3IEV4cHJlc3Npb24oKTtcclxuXHQgICAgZXhwcmVzc2lvbi5sYWJlbHMgPSBtYWluLm9wdGlvbnMubGFiZWxzO1xyXG5cdCAgICBleHByZXNzaW9uLnNldF9zaXplKG1haW4ub3B0aW9ucy5zaXplKTtcclxuXHJcblx0ICAgIGxldCBzdHIgPSBleHByZXNzaW9uSW5wdXQudmFsdWU7XHJcblxyXG5cdCAgICB0cnkge1xyXG5cdFx0ICAgIGV4cHJlc3Npb24ucGFyc2Uoc3RyKTtcclxuXHQgICAgfSBjYXRjaChtc2cpIHtcclxuXHRcdCAgICBmYWlsKCc8cD5Zb3VyIGV4cHJlc3Npb24gZmFpbGVkIHRvIHBhcnNlIGFuZCBtdXN0IG5vdCBiZSAnICtcclxuXHRcdFx0ICAgICdpbiB0aGUgY29ycmVjdCBmb3JtLjwvcD4nICtcclxuXHRcdFx0ICAgICc8cD4nICsgbXNnICsgJzwvcD4nKTtcclxuXHRcdCAgICByZXR1cm47XHJcblx0ICAgIH1cclxuXHJcblxyXG5cdCAgICAvLyBJcyB0aGlzIHJlc3VsdCBtaW5pbWFsP1xyXG5cdCAgICB2YXIgcW0gPSBuZXcgUXVpbmVNY0NsdXNrZXlTb2x2ZXIoKTtcclxuXHQgICAgcW0ubGFiZWxzID0gbWFpbi5vcHRpb25zLmxhYmVscztcclxuXHJcblx0ICAgIHFtLmluaXQobWFpbi5vcHRpb25zLnNpemUpO1xyXG5cdCAgICBmb3IodmFyIGkgaW4gbWFpbi5vcHRpb25zLm1pbnRlcm1zKSB7XHJcblx0XHQgICAgcW0uc2V0KG1haW4ub3B0aW9ucy5taW50ZXJtc1tpXSwgdHJ1ZSk7XHJcblx0ICAgIH1cclxuXHQgICAgZm9yKGkgaW4gbWFpbi5vcHRpb25zLmRvbnRjYXJlKSB7XHJcblx0XHQgICAgcW0uc2V0KG1haW4ub3B0aW9ucy5kb250Y2FyZVtpXSwgdW5kZWZpbmVkKTtcclxuXHQgICAgfVxyXG5cdCAgICBxbS5jb21wdXRlKCk7XHJcblxyXG5cdCAgICB2YXIgcW1FeHByZXNzaW9uID0gbmV3IEV4cHJlc3Npb24oKTtcclxuXHQgICAgcW1FeHByZXNzaW9uLmxhYmVscyA9IG1haW4ub3B0aW9ucy5sYWJlbHM7XHJcblx0ICAgIHFtRXhwcmVzc2lvbi5zZXRfc2l6ZShtYWluLm9wdGlvbnMuc2l6ZSk7XHJcblxyXG5cdCAgICBxbUV4cHJlc3Npb24ucGFyc2UocW0uZXhwcmVzc2lvbigpKTtcclxuXHJcblx0ICAgIHZhciB2YWxpZCA9IHRydWU7XHJcblxyXG5cdCAgICAvL1xyXG5cdCAgICAvLyBUZXN0IHRoYXQgZXZlcnkgbWludGVybSBzdXBwbGllZCBpcyBlaXRoZXJcclxuXHQgICAgLy8gYSB2YWxpZCBtaW50ZXJtIG9yIGEgZG9uJ3QgY2FyZVxyXG5cdCAgICAvL1xyXG5cdCAgICBmb3IodmFyIGkgaW4gZXhwcmVzc2lvbi5taW50ZXJtcy5taW50ZXJtcykge1xyXG5cdFx0ICAgIHZhciBtID0gZXhwcmVzc2lvbi5taW50ZXJtcy5taW50ZXJtc1tpXTtcclxuXHRcdCAgICB2YXIgaW5saXN0ID0gZmFsc2U7XHJcblx0XHQgICAgZm9yKHZhciBqIGluIG1haW4ub3B0aW9ucy5taW50ZXJtcykge1xyXG5cdFx0XHQgICAgaWYobWFpbi5vcHRpb25zLm1pbnRlcm1zW2pdID09IG0pIHtcclxuXHRcdFx0XHQgICAgaW5saXN0ID0gdHJ1ZTtcclxuXHRcdFx0XHQgICAgYnJlYWs7XHJcblx0XHRcdCAgICB9XHJcblx0XHQgICAgfVxyXG5cclxuXHRcdCAgICBmb3IoaiAgaW4gbWFpbi5vcHRpb25zLmRvbnRjYXJlKSB7XHJcblx0XHRcdCAgICBpZihtYWluLm9wdGlvbnMuZG9udGNhcmVbal0gPT0gbSkge1xyXG5cdFx0XHRcdCAgICBpbmxpc3QgPSB0cnVlO1xyXG5cdFx0XHRcdCAgICBicmVhaztcclxuXHRcdFx0ICAgIH1cclxuXHRcdCAgICB9XHJcblxyXG5cdFx0ICAgIGlmKCFpbmxpc3QpIHtcclxuXHRcdFx0ICAgIC8vIElmIHdlIGdvdCB0byBoZXJlLCB0aGlzIHRlcm0gaXMgZXh0cmFuZW91cyFcclxuXHRcdFx0ICAgIHZhbGlkID0gZmFsc2U7XHJcblx0XHRcdCAgICBicmVhaztcclxuXHRcdCAgICB9XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIC8vXHJcblx0ICAgIC8vIFRlc3QgdGhhdCBldmVyeSBtaW50ZXJtIHJlcXVpcmVkIGlzIGluIHRoZSBzdXBwbGllZCBsaXN0XHJcblx0ICAgIC8vXHJcblx0ICAgIGZvcihpIGluIG1haW4ub3B0aW9ucy5taW50ZXJtcykge1xyXG5cdFx0ICAgIG0gPSBtYWluLm9wdGlvbnMubWludGVybXNbaV07XHJcblx0XHQgICAgaW5saXN0ID0gZmFsc2U7XHJcblx0XHQgICAgZm9yKHZhciBqIGluIGV4cHJlc3Npb24ubWludGVybXMubWludGVybXMpIHtcclxuXHRcdFx0ICAgIGlmKGV4cHJlc3Npb24ubWludGVybXMubWludGVybXNbal0gPT0gbSkge1xyXG5cdFx0XHRcdCAgICBpbmxpc3QgPSB0cnVlO1xyXG5cdFx0XHRcdCAgICBicmVhaztcclxuXHRcdFx0ICAgIH1cclxuXHRcdCAgICB9XHJcblxyXG5cdFx0ICAgIGlmKCFpbmxpc3QpIHtcclxuXHRcdFx0ICAgIC8vIElmIHdlIGdvdCB0byBoZXJlLCB0aGlzIHRlcm0gaXMgZXh0cmFuZW91cyFcclxuXHRcdFx0ICAgIHZhbGlkID0gZmFsc2U7XHJcblx0XHRcdCAgICBicmVhaztcclxuXHRcdCAgICB9XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGlmKCF2YWxpZCkge1xyXG5cdFx0ICAgIGlmKG1haW4ub3B0aW9ucy52ZXJib3NlKSB7XHJcblx0XHRcdCAgICB2YXIgaHRtbCA9ICc8cD5Zb3VyIGV4cHJlc3Npb24gaXMgbm90IGEgdmFsaWQgc29sdXRpb24gZm9yIHRoaXMgJyArXHJcblx0XHRcdFx0ICAgICdzZXQgb2YgbWludGVybXMuIFRoZSBtaW50ZXJtcyBmb3IgeW91ciBleHByZXNzaW9uIGhhdmUgYmVlbiAnICtcclxuXHRcdFx0XHQgICAgJ2NvbXB1dGVkIGFzOiA8L3A+JztcclxuXHJcblx0XHRcdCAgICBpZihleHByZXNzaW9uLm1pbnRlcm1zLm1pbnRlcm1zLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHQgICAgaHRtbCArPSAnPHAgY2xhc3M9XCJjZW50ZXIgc21hbGxcIj4nICsgZXhwcmVzc2lvbi5taW50ZXJtcy5saXN0KCkgKyAnPC9wPic7XHJcblx0XHRcdCAgICB9IGVsc2Uge1xyXG5cdFx0XHRcdCAgICBodG1sICs9ICc8cCBjbGFzcz1cImNlbnRlciBzbWFsbFwiPm5vbmU8L3A+JztcclxuXHRcdFx0ICAgIH1cclxuXHRcdCAgICB9IGVsc2Uge1xyXG5cdFx0XHQgICAgdmFyIGh0bWwgPSAnPHA+WW91ciBleHByZXNzaW9uIGlzIG5vdCBhIHZhbGlkIHNvbHV0aW9uIGZvciB0aGlzICcgK1xyXG5cdFx0XHRcdCAgICAnc2V0IG9mIG1pbnRlcm1zLjwvcD4nO1xyXG5cdFx0ICAgIH1cclxuXHJcblx0XHQgICAgZmFpbChodG1sKTtcclxuXHRcdCAgICByZXR1cm47XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGlmKCFleHByZXNzaW9uLmFzX2dvb2RfYXMocW1FeHByZXNzaW9uKSkge1xyXG5cdFx0ICAgIGlmKG1haW4ub3B0aW9ucy52ZXJib3NlKSB7XHJcblx0XHRcdCAgICBmYWlsKCc8cD5Zb3VyIGV4cHJlc3Npb24gaXMgbm90IG1pbmltYWwuIEEgbWluaW1hbCBzb2x1dGlvbiAnICtcclxuXHRcdFx0XHQgICAgJ2ZvciB0aGlzIHByb2JsZW0gaXM6PC9wPicgK1xyXG5cdFx0XHRcdCAgICAnPHAgY2xhc3M9XCJzbWFsbFwiPicgKyBxbS5leHByZXNzaW9uKCkgKyAnPC9wPicpO1xyXG5cdFx0ICAgIH0gZWxzZSB7XHJcblx0XHRcdCAgICBmYWlsKCc8cD5Zb3VyIGV4cHJlc3Npb24gaXMgbm90IG1pbmltYWwuPC9wPicpO1xyXG5cdFx0ICAgIH1cclxuXHJcblx0XHQgICAgcmV0dXJuO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICAvL1xyXG5cdCAgICAvLyBTdWNjZXNzXHJcblx0ICAgIC8vXHJcblxyXG5cdCAgICByZXN1bHQuaW5uZXJIVE1MID0gJzxwPllvdXIgZXhwcmVzc2lvbiBpcyBjb3JyZWN0IGFuZCBtaW5pbWFsLjwvcD4nO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc29sdmUgPSBmdW5jdGlvbigpIHtcclxuXHQgICAgY29uc3QgcW0gPSB0aGlzLm1pbmltdW1FeHByZXNzaW9uKCk7XHJcblx0ICAgIHJlc3VsdC5pbm5lckhUTUwgPSAnPHAgY2xhc3M9XCJjZW50ZXJcIj4nICsgcW0uZXhwcmVzc2lvbigpICsgXCI8L3A+XCI7XHJcblxyXG5cdCAgICBtYWluLndvcmsubWFwLmNsZWFyKCk7XHJcblxyXG5cdCAgICB2YXIgZ3JvdXBzID0gbWFpbi53b3JrLmdyb3VwcztcclxuXHQgICAgZ3JvdXBzLmNsZWFyKCk7XHJcblxyXG5cdCAgICB2YXIgdGVybXMgPSBxbS5leHByZXNzaW9uKCkuc3BsaXQoJysnKTtcclxuXHQgICAgdmFyIGV4cCA9IG5ldyBFeHByZXNzaW9uKCk7XHJcblx0ICAgIGV4cC5sYWJlbHMgPSBtYWluLm9wdGlvbnMubGFiZWxzO1xyXG5cdCAgICBleHAuc2V0X3NpemUobWFpbi5vcHRpb25zLnNpemUpO1xyXG5cdCAgICBmb3IodmFyIGk9MDsgaTx0ZXJtcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0ICAgIHZhciB0ZXJtID0gdGVybXNbaV07XHJcblx0XHQgICAgZXhwLnBhcnNlKHRlcm0pO1xyXG5cdFx0ICAgIGdyb3Vwcy5hZGRfZ3JvdXAoZXhwLm1pbnRlcm1zLm1pbnRlcm1zKTtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgZ3JvdXBzLmRyYXdHcm91cHMoKTtcclxuICAgIH1cclxuXHJcblx0ZnVuY3Rpb24gZmFpbChtc2cpIHtcclxuXHRcdHJlc3VsdC5pbm5lckhUTUwgPSBtc2c7XHJcblx0fVxyXG5cclxuXHJcblx0dGhpcy5taW5pbXVtRXhwcmVzc2lvbiA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0Ly8gSXMgdGhpcyByZXN1bHQgbWluaW1hbD9cclxuXHRcdHZhciBxbSA9IG5ldyBRdWluZU1jQ2x1c2tleVNvbHZlcigpO1xyXG5cdFx0cW0ubGFiZWxzID0gdGhpcy5tYWluLm9wdGlvbnMubGFiZWxzO1xyXG5cclxuXHRcdHFtLmluaXQodGhpcy5tYWluLm9wdGlvbnMuc2l6ZSk7XHJcblx0XHRmb3IodmFyIGkgaW4gdGhpcy5tYWluLm9wdGlvbnMubWludGVybXMpIHtcclxuXHRcdFx0cW0uc2V0KHRoaXMubWFpbi5vcHRpb25zLm1pbnRlcm1zW2ldLCB0cnVlKTtcclxuXHRcdH1cclxuXHRcdGZvcihpIGluIHRoaXMubWFpbi5vcHRpb25zLmRvbnRjYXJlKSB7XHJcblx0XHRcdHFtLnNldCh0aGlzLm1haW4ub3B0aW9ucy5kb250Y2FyZVtpXSwgdW5kZWZpbmVkKTtcclxuXHRcdH1cclxuXHRcdHFtLmNvbXB1dGUoKTtcclxuXHRcdHJldHVybiBxbTtcclxuXHR9XHJcblxyXG4gICAgaW5pdGlhbGl6ZSgpO1xyXG59XHJcblxyXG4iLCIvKipcclxuICogU2ltcGxlIERvY3VtZW50IHJlYWR5IGZ1bmN0aW9uLCBlcXVpdmFsZW50IHRvIGpRdWVyeSdzIGRvY3VtZW50IHJlYWR5LlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBSZWFkeSA9IGZ1bmN0aW9uKCkge1xyXG59XHJcblxyXG4vKipcclxuICogQ2FsbCBhIGZ1bmN0aW9uIHdoZW4gdGhlIGRvY3VtZW50IGlzIHJlYWRvbi5cclxuICogQHBhcmFtIGZuIEZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBvbiBkb2N1bWVudCByZWFkeVxyXG4gKi9cclxuUmVhZHkuZ28gPSBmdW5jdGlvbihmbikge1xyXG4gICAgaWYgKGRvY3VtZW50LmF0dGFjaEV2ZW50ID8gZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiIDogZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gXCJsb2FkaW5nXCIpe1xyXG4gICAgICAgIGZuKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmbik7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtNYXB9IGZyb20gJy4vTWFwJztcclxuaW1wb3J0IHtHcm91cHN9IGZyb20gJy4vR3JvdXBzJztcclxuXHJcbi8qKlxyXG4gKiBUaGUgd29yayBhcmVhIGlzIHRoZSBLYXJuYXVnaCBtYXAgYW5kIHRoZSBncm91cGluZ3MgY29udHJvbHMuXHJcbiAqIEBwYXJhbSBtYWluXHJcbiAqIEBwYXJhbSBlbGVtZW50XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFdvcmsgPSBmdW5jdGlvbihtYWluLCBlbGVtZW50KSB7XHJcblxyXG5cdGxldCBkaXYsIGxlZnQsIHJpZ2h0O1xyXG5cclxuXHR0aGlzLmluaXRpYWxpemUgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmKG1haW4ub3B0aW9ucy5tYXBIZWFkaW5nKSB7XHJcblx0XHRcdGxldCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcblx0XHRcdGVsZW1lbnQuYXBwZW5kQ2hpbGQoaDMpO1xyXG5cclxuXHRcdFx0bGV0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuXHRcdFx0Y2hlY2tCb3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XHJcblx0XHRcdGNoZWNrQm94LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICd0cnVlJyk7XHJcblx0XHRcdGgzLmFwcGVuZENoaWxkKGNoZWNrQm94KTtcclxuXHJcblx0XHRcdGgzLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcgS2FybmF1Z2ggTWFwJykpO1xyXG5cclxuXHRcdFx0Y2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XHJcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdFx0aWYoY2hlY2tCb3guY2hlY2tlZCkge1xyXG5cdFx0XHRcdFx0ZGl2LnN0eWxlLmRpc3BsYXkgPSAndGFibGUnO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRkaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gQ3JlYXRlIHRoZSBtYWluIGRpdiB0aGF0IGNvbnRhaW5zIHRoZSB3b3JrIGFyZWFcclxuXHRcdGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0ZGl2LmNsYXNzTGlzdC5hZGQoJ2ttYXAtY2wtd29yaycpO1xyXG5cdFx0ZWxlbWVudC5hcHBlbmRDaGlsZChkaXYpO1xyXG5cdFx0dGhpcy5kaXYgPSBkaXY7XHJcblxyXG5cdFx0dGhpcy5yZW5kZXIoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0dGhpcy5yZW5kZXIgPSBmdW5jdGlvbigpIHtcclxuXHRcdGRpdi5pbm5lckhUTUwgPSAnJztcclxuXHJcblx0XHRsZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRkaXYuYXBwZW5kQ2hpbGQobGVmdCk7XHJcblxyXG5cdFx0cmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdGRpdi5hcHBlbmRDaGlsZChyaWdodCk7XHJcblxyXG5cdFx0Ly9cclxuXHRcdC8vIEFkZCB0aGUgS21hcFxyXG5cdFx0Ly9cclxuXHRcdHRoaXMubWFwID0gbmV3IE1hcChtYWluLCByaWdodCk7XHJcblxyXG5cdFx0Ly9cclxuXHRcdC8vIEFkZCB0aGUgZ3JvdXBzXHJcblx0XHQvL1xyXG5cdFx0dGhpcy5ncm91cHMgPSBuZXcgR3JvdXBzKG1haW4sIGxlZnQpO1xyXG5cdH1cclxuXHJcblx0dGhpcy5pbml0aWFsaXplKCk7XHJcblxyXG59IiwiaW1wb3J0IHtNaW50ZXJtc30gZnJvbSBcIi4vTWludGVybXNcIjtcclxuXHJcbi8qKlxyXG4gKiBIYW5kbGUgc2ltcGxlIGV4cHJlc3Npb25zLiBPbmx5IHdvcmtzIGZvciBzdW0gb2YgcHJvZHVjdHNcclxuICogZm9yIG5vdy4gV2lsbCBjb25zaWRlciBmYW5jaWVyIHZlcnNpb24gbGF0ZXIgb24uXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEV4cHJlc3Npb24gPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciB0aGF0ID0gdGhpcztcclxuXHJcbiAgICB2YXIgc2l6ZSA9IDQ7XHJcblxyXG4gICAgdGhpcy5taW50ZXJtcyA9IG5ldyBNaW50ZXJtcygpO1xyXG5cclxuICAgIHRoaXMubGFiZWxzID0gWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJywgJ0snXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCB0aGUgc2l6ZSBvZiB0aGUgZXhwcmVzc2lvblxyXG4gICAgICogQHBhcmFtIHN6IFZhbHVlIDEtPyBudW1iZXIgb2YgdGVybXNcclxuICAgICAqL1xyXG4gICAgdGhpcy5zZXRfc2l6ZSA9IGZ1bmN0aW9uKHN6KSB7XHJcbiAgICAgICAgc2l6ZSA9IHN6O1xyXG4gICAgICAgIHRoaXMubWludGVybXMuc2l6ZSA9IHN6O1xyXG4gICAgICAgIHRlcm1zX2luaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRlc3QgdGhhdCB0aGlzIGV4cHJlc3Npb24gaXMgYXMgZ29vZCBhcyBzb21lIG90aGVyIGV4cHJlc3Npb24uXHJcbiAgICAgKiBAcGFyYW0gb3RoZXJcclxuICAgICAqL1xyXG4gICAgdGhpcy5hc19nb29kX2FzID0gZnVuY3Rpb24ob3RoZXIpIHtcclxuICAgICAgICBpZih0aGlzLm51bV9wcm9kdWN0cygpID4gb3RoZXIubnVtX3Byb2R1Y3RzKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5udW1fdGVybXMoKSA+IG90aGVyLm51bV90ZXJtcygpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBNaW50ZXJtc1xyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZV9taW50ZXJtcygpIHtcclxuICAgICAgICB0aGF0Lm1pbnRlcm1zLmNsZWFyKCk7XHJcbiAgICAgICAgZm9yKHZhciBpPTA7IGk8TWF0aC5wb3coMiwgc2l6ZSk7IGkrKykge1xyXG4gICAgICAgICAgICB0ZXJtc19zZXQoaSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmVzdWx0UyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgZm9yKHZhciBzIGluIHNvcCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHByb2QgPSBzb3Bbc107XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0UCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yKHZhciBwIGluIHByb2QpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHByb2RbcF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHQubm90KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFAgPSByZXN1bHRQICYmICEodC50ZXJtLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRQID0gcmVzdWx0UCAmJiB0LnRlcm0udmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJlc3VsdFMgPSByZXN1bHRTIHx8IHJlc3VsdFA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHJlc3VsdFMpIHtcclxuICAgICAgICAgICAgICAgIHRoYXQubWludGVybXMuYWRkKGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUGFyc2UgYW4gZXhwcmVzc2lvbiBpbiBzdW0tb2YtcHJvZHVjdHMgZm9ybSBvbmx5XHJcbiAgICAgKiBAcGFyYW0gc3RyXHJcbiAgICAgKi9cclxuXHJcbiAgICB2YXIgc29wID0gW107XHJcblxyXG4gICAgdGhpcy5wYXJzZSA9IGZ1bmN0aW9uKGV4cCkge1xyXG4gICAgICAgIGxleChleHApO1xyXG5cclxuICAgICAgICBzb3AgPSBbXTtcclxuXHJcbiAgICAgICAgdmFyIHByb2QgPSBbXTtcclxuXHJcbiAgICAgICAgaWYodG9rZW4oKSA9PT0gXCIwXCIpIHtcclxuICAgICAgICAgICAgZ2VuZXJhdGVfbWludGVybXMoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodG9rZW4oKSA9PT0gXCIxXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5taW50ZXJtcy5jbGVhcigpO1xyXG4gICAgICAgICAgICBmb3IodmFyIGk9MDsgaTxNYXRoLnBvdygyLCBzaXplKTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1pbnRlcm1zLmFkZChpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aGlsZSh0cnVlKSB7XHJcbiAgICAgICAgICAgIHZhciBjaCA9IHRva2VuKCk7XHJcbiAgICAgICAgICAgIGlmKGNoID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoY2ggPT09ICcrJykge1xyXG4gICAgICAgICAgICAgICAgaWYocHJvZC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcihcIlN5bnRheCBlcnJvclwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBzb3AucHVzaChwcm9kKTtcclxuICAgICAgICAgICAgICAgIHByb2QgPSBbXTtcclxuICAgICAgICAgICAgICAgIGFkdmFuY2UoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIElzIGl0IGEgdGVybT9cclxuICAgICAgICAgICAgICAgIHZhciB0ZXJtID0gZ2V0X3Rlcm0oY2gpO1xyXG4gICAgICAgICAgICAgICAgaWYodGVybSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIGhhdmUgYSBuZXcgdGVybVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEhhdmUgd2UgYWxyZWFkeSBzZWVuIGl0P1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcih2YXIgaiBpbiBwcm9kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRlcm0gPT09IHByb2Rbal0udGVybSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWxyZWFkeSBzZWVuIHRoaXMgdGVybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IoXCJOb3QgaW4gY29ycmVjdCBzdW0gb2YgcHJvZHVjdHMgZm9ybS4gXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVGVybXMgbWF5IG9ubHkgYmUgdXNlZCBvbmNlIHBlciBwcm9kdWN0LlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYWR2YW5jZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRva2VuKCkgPT09IFwiJ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2QucHVzaCh7dGVybTogdGVybSwgbm90OiB0cnVlfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkdmFuY2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kLnB1c2goe3Rlcm06IHRlcm0sIG5vdDogZmFsc2V9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcihcIlVuZXhwZWN0ZWQgc3ltYm9sLlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYocHJvZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHNvcC5wdXNoKHByb2QpO1xyXG4gICAgICAgICAgICBwcm9kID0gW107XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZXJyb3IoXCJOb3QgaW4gY29ycmVjdCBzdW0gb2YgcHJvZHVjdHMgZm9ybS4gXCIgK1xyXG4gICAgICAgICAgICAgICAgXCJNaXNzaW5nIHRlcm1zP1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdlbmVyYXRlX21pbnRlcm1zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5udW1fcHJvZHVjdHMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gc29wLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm51bV90ZXJtcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBjbnQgPSAwO1xyXG4gICAgICAgIGZvcih2YXIgaSBpbiBzb3ApIHtcclxuICAgICAgICAgICAgY250ICs9IHNvcFtpXS5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY250O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGVycm9yKG1zZykge1xyXG4gICAgICAgIHRocm93IFwiRXhwcmVzc2lvbiBwYXJzaW5nIGVycm9yIFtcIiArIGV4cHJlc3Npb25Mb2MgKyBcIl06IFwiICsgbXNnO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBUZXJtcyBtYW5hZ2VtZW50XHJcbiAgICAgKi9cclxuXHJcbiAgICB2YXIgdGVybXMgPSBbXTtcclxuXHJcbiAgICBmdW5jdGlvbiB0ZXJtc19pbml0KCkge1xyXG4gICAgICAgIHRlcm1zID0gW107XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgdGVybXNcclxuICAgICAgICBmb3IodmFyIGk9MDsgaTxzaXplOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHRlcm0gPSB7XHJcbiAgICAgICAgICAgICAgICBsaXRlcmFsOiB0aGF0LmxhYmVsc1tpXSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0ZXJtcy5wdXNoKHRlcm0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0X3Rlcm0oY2gpIHtcclxuXHJcbiAgICAgICAgZm9yKHZhciBpIGluIHRlcm1zKSB7XHJcbiAgICAgICAgICAgIGlmKGNoLnRvVXBwZXJDYXNlKCkgPT09IHRlcm1zW2ldLmxpdGVyYWwudG9VcHBlckNhc2UoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRlcm1zW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0ZXJtc19zZXQodmFsKSB7XHJcbiAgICAgICAgZm9yKHZhciBqPXRlcm1zLmxlbmd0aC0xOyBqPj0wOyBqLS0pIHtcclxuICAgICAgICAgICAgdGVybXNbal0udmFsdWUgPSAodmFsICYgMSkgPT0gMTtcclxuICAgICAgICAgICAgdmFsID4+PSAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLypcclxuICAgICAqIFNpbXBsZSBsZXhpY2FsIGFuYWx5emVyXHJcbiAgICAgKi9cclxuXHJcbiAgICB2YXIgZXhwcmVzc2lvbjtcclxuICAgIHZhciBleHByZXNzaW9uTG9jO1xyXG5cclxuICAgIGZ1bmN0aW9uIGxleChleHApIHtcclxuICAgICAgICBleHByZXNzaW9uID0gZXhwO1xyXG4gICAgICAgIGV4cHJlc3Npb25Mb2MgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRva2VuKCkge1xyXG4gICAgICAgIHdoaWxlKGV4cHJlc3Npb25Mb2MgPCBleHByZXNzaW9uLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB2YXIgY2ggPSBleHByZXNzaW9uLmNoYXJBdChleHByZXNzaW9uTG9jKTtcclxuICAgICAgICAgICAgaWYoY2ggIT09ICcgJykge1xyXG4gICAgICAgICAgICAgICAgLy8gSXMgdGhpcyBhIHRlcm0/XHJcbiAgICAgICAgICAgICAgICBmb3IodmFyIGkgaW4gdGVybXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF5YmUgPSBleHByZXNzaW9uLnN1YnN0cihleHByZXNzaW9uTG9jLCB0ZXJtc1tpXS5saXRlcmFsLmxlbmd0aCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKG1heWJlID09PSB0ZXJtc1tpXS5saXRlcmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXliZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBleHByZXNzaW9uTG9jKys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZHZhbmNlKCkge1xyXG4gICAgICAgIHZhciB0ID0gdG9rZW4oKTtcclxuICAgICAgICBpZih0ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGV4cHJlc3Npb25Mb2MgKz0gdC5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2V0X3NpemUoNCk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIE9iamVjdCB0aGF0IHJlcHJlc2VudHMgYSBsaXN0IG9mIG1pbnRlcm1zIGFuZCBjYW4gZ2VuZXJhdGUgcmFuZG9tIGxpc3RzXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IE1pbnRlcm1zID0gZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLnNpemUgPSA0O1xyXG4gICAgdGhpcy5taW50ZXJtcyA9IFtdOyAvLyBMaXN0IG9mIG51bWJlcnNcclxuICAgIHRoaXMuZG9udGNhcmUgPSBbXTsgLy8gTGlzdCBvZiBkb24ndCBjYXJlc1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2VuZXJhdGUgcmFuZG9tIG1pbnRlcm1zIGFuZCBvcHRpb25hbGx5IGRvbnRjYXJlc1xyXG4gICAgICogQHBhcmFtIG9uZUNoYW5jZSBwcm9iYWJpbGl0eSBhIG1pbnRlcm0gd2lsbCBiZSB0cnVlXHJcbiAgICAgKiBJZiBvbWl0dGVkLCB0aGUgcHJvYmFiaWxpdHkgaXMgMC41XHJcbiAgICAgKiBAcGFyYW0gZGNDaGFuY2UgcHJvYmFibGl0eSBhIG1pbnRlcm0gd2lsbCBhIGRvbnRjYXJlXHJcbiAgICAgKiBJZiBvbWl0dGVkLCB0aGUgcHJvYmFiaWxpdHkgaXMgMFxyXG4gICAgICovXHJcbiAgICB0aGlzLmdlbmVyYXRlID0gZnVuY3Rpb24ob25lQ2hhbmNlLCBkY0NoYW5jZSkge1xyXG4gICAgICAgIGlmKG9uZUNoYW5jZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIG9uZUNoYW5jZSA9IDAuNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZGNDaGFuY2UgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBkY0NoYW5jZSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRvbnRjYXJlID0gW107XHJcbiAgICAgICAgdGhpcy5taW50ZXJtcyA9IFtdO1xyXG5cclxuICAgICAgICB2YXIgbnVtID0gTWF0aC5wb3coMiwgdGhpcy5zaXplKTtcclxuICAgICAgICBmb3IodmFyIGk9MDsgaTxudW07IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgcm5kID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgaWYocm5kIDw9IG9uZUNoYW5jZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5taW50ZXJtcy5wdXNoKGkpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYocm5kID4gKDEgLSBkY0NoYW5jZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9udGNhcmUucHVzaChpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdlbmVyYXRlIHJhbmRvbSBtaW50ZXJtcyBhbmQgb3B0aW9uYWxseSBkb250Y2FyZXNcclxuICAgICAqIEBwYXJhbSBvbmVDaGFuY2UgcHJvYmFiaWxpdHkgYSBtaW50ZXJtIHdpbGwgYmUgdHJ1ZVxyXG4gICAgICogSWYgb21pdHRlZCwgdGhlIHByb2JhYmlsaXR5IGlzIDAuNVxyXG4gICAgICogQHBhcmFtIG9uZU1pbiBNaW5pbXVtIGFjY2VwdGFibGUgbnVtYmVyIG9mIG1pbnRlcm1zXHJcbiAgICAgKiBAcGFyYW0gb25lTWF4IE1heGltdW0gYWNjZXB0YWJsZSBudW1iZXIgb2YgbWludGVybXNcclxuICAgICAqIEBwYXJhbSBkY0NoYW5jZSBwcm9iYWJsaXR5IGEgbWludGVybSB3aWxsIGEgZG9udGNhcmVcclxuICAgICAqIElmIG9taXR0ZWQsIHRoZSBwcm9iYWJpbGl0eSBpcyAwXHJcbiAgICAgKiBAcGFyYW0gZGNNaW4gTWluaW11bSBhY2NlcHRhYmxlIG51bWJlciBvZiBkb24ndCBjYXJlc1xyXG4gICAgICogQHBhcmFtIGR4TWF4IE1heGltdW0gYWNjZXB0YWJsZSBudW1iZXIgb2YgZG9uJ3QgY2FyZXNcclxuICAgICAqL1xyXG4gICAgdGhpcy5nZW5lcmF0ZV9ib3VuZGVkID0gZnVuY3Rpb24ob25lQ2hhbmNlLCBvbmVNaW4sIG9uZU1heCwgZGNDaGFuY2UsIGRjTWluLCBkY01heCkge1xyXG4gICAgICAgIGlmKGRjTWluID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgZGNNaW4gPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihkY01heCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGRjTWF4ID0gTWF0aC5wb3coMiwgdGhpcy5zaXplKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcih2YXIgaT0wOyBpPDEwMDA7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlKG9uZUNoYW5jZSwgZGNDaGFuY2UpO1xyXG4gICAgICAgICAgICBpZih0aGlzLm1pbnRlcm1zLmxlbmd0aCA+PSBvbmVNaW4gJiZcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1pbnRlcm1zLmxlbmd0aCA8PSBvbmVNYXggJiZcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbnRjYXJlLmxlbmd0aCA+PSBkY01pbiAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG9udGNhcmUubGVuZ3RoIDw9IGRjTWF4KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdGhlIG1pbnRlcm1zIGxpc3QuIFRoaXMgd2lsbCBhY2NlcHQgYW55IG51bWJlciBvZiBmdW5jdGlvbiBhcmd1bWVudHMuXHJcbiAgICAgKi9cclxuICAgIHRoaXMuc2V0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5taW50ZXJtcyA9IFtdO1xyXG4gICAgICAgIGZvcih2YXIgaT0wOyBpPGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLm1pbnRlcm1zLnB1c2goYXJndW1lbnRzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5taW50ZXJtcy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtyZXR1cm4gYS1iO30pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IGZyb20gYSBsaXN0IG9mIG1pbnRlcm1zIGFzIGFuIGFycmF5XHJcbiAgICAgKiBAcGFyYW0gbWludGVybXMgTWludGVybXMgYXJyYXkuIFRoZSBhcnJheSBpcyBjb3BpZWQuXHJcbiAgICAgKiBAcGFyYW0gZG9udGNhcmUgT3B0aW9uYWwgZG9uJ3QgY2FyZSBhcnJheVxyXG4gICAgICovXHJcbiAgICB0aGlzLnNldF9mcm9tID0gZnVuY3Rpb24obWludGVybXMsIGRvbnRjYXJlKSB7XHJcbiAgICAgICAgdGhpcy5taW50ZXJtcyA9IG1pbnRlcm1zLnNsaWNlKCk7XHJcbiAgICAgICAgdGhpcy5taW50ZXJtcy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtyZXR1cm4gYS1iO30pO1xyXG5cclxuICAgICAgICBpZihkb250Y2FyZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmRvbnRjYXJlID0gZG9udGNhcmUuc2xpY2UoKTtcclxuICAgICAgICAgICAgdGhpcy5kb250Y2FyZS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtyZXR1cm4gYS1iO30pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZG9udGNhcmUgPSBbXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZXRlcm1pbmUgaWYgdHdvIG1pbnRlcm0gbGlzdHMgYXJlIHRoZSBzYW1lLlxyXG4gICAgICogQHBhcmFtIG90aGVyIE90aGVyIE1pbnRlcm1zIG9iamVjdFxyXG4gICAgICovXHJcbiAgICB0aGlzLmVxdWFsID0gZnVuY3Rpb24ob3RoZXIpIHtcclxuICAgICAgICB2YXIgb3RoZXJNaW50ZXJtcztcclxuXHJcbiAgICAgICAgaWYob3RoZXIgaW5zdGFuY2VvZiBMb2dpYy5NaW50ZXJtcykge1xyXG4gICAgICAgICAgICBvdGhlck1pbnRlcm1zID0gb3RoZXIubWludGVybXM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb3RoZXJNaW50ZXJtcyA9IG90aGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYob3RoZXJNaW50ZXJtcy5sZW5ndGggIT09IHRoaXMubWludGVybXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcih2YXIgaT0wOyBpPG90aGVyTWludGVybXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKG90aGVyTWludGVybXNbaV0gIT0gdGhpcy5taW50ZXJtc1tpXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNsZWFyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5taW50ZXJtcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYWRkID0gZnVuY3Rpb24obWludGVybSkge1xyXG4gICAgICAgIGZvcih2YXIgaSBpbiB0aGlzLm1pbnRlcm1zKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMubWludGVybXNbaV0gPT0gbWludGVybSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm1pbnRlcm1zLnB1c2gobWludGVybSk7XHJcbiAgICAgICAgdGhpcy5taW50ZXJtcy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtyZXR1cm4gYS1iO30pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubGlzdCA9IGZ1bmN0aW9uKHdpdGhCcmVhaykge1xyXG4gICAgICAgIHZhciBmaXJzdCA9IHRydWU7XHJcbiAgICAgICAgdmFyIHJldCA9ICcnO1xyXG4gICAgICAgIHZhciBjciA9IGZhbHNlO1xyXG4gICAgICAgIGZvcih2YXIgaSBpbiB0aGlzLm1pbnRlcm1zKSB7XHJcbiAgICAgICAgICAgICAgICBpZihmaXJzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldCArPSAnLCAnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKHdpdGhCcmVhayA9PT0gdHJ1ZSAmJiAhY3IgJiYgcmV0Lmxlbmd0aCA+IDQwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldCArPSAnPGJyPic7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0ICs9ICdtJyArIHRoaXMubWludGVybXNbaV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubGlzdF9kb250Y2FyZSA9IGZ1bmN0aW9uKHdpdGhCcmVhaykge1xyXG4gICAgICAgIHZhciBmaXJzdCA9IHRydWU7XHJcbiAgICAgICAgdmFyIHJldCA9ICcnO1xyXG4gICAgICAgIHZhciBjciA9IGZhbHNlO1xyXG4gICAgICAgIGZvcih2YXIgaSBpbiB0aGlzLmRvbnRjYXJlKSB7XHJcbiAgICAgICAgICAgIGlmKGZpcnN0KSB7XHJcbiAgICAgICAgICAgICAgICBmaXJzdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0ICs9ICcsICc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHdpdGhCcmVhayA9PT0gdHJ1ZSAmJiAhY3IgJiYgcmV0Lmxlbmd0aCA+IDQwKSB7XHJcbiAgICAgICAgICAgICAgICBjciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXQgKz0gJzxicj4nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXQgKz0gJ20nICsgdGhpcy5kb250Y2FyZVtpXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtRdWluZU1jQ2x1c2tleURhdGFDdHJsfSBmcm9tIFwiLi9xbWNcIjtcclxuXHJcbi8qKlxyXG4gKiBTb2x2ZXIgZm9yIGNpcmN1aXQgbWluaW1pemF0aW9uIGJhc2VkIG9uIFF1aW5lIE1jQ2x1c2tleSBhbGdvcml0aG0uXHJcbiAqIFRoaXMgdXNlcyB0aGUgaW1wbGVtZW50aW9uIGluIHFtYy5qcywgYnV0IGFkYXB0cyB0aGUgaW50ZXJmYWNlXHJcbiAqIHRvIG1hdGNoIHRoZSB2YXJpYWJsZSBuYW1lcyBJIHVzZS5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgUXVpbmVNY0NsdXNrZXlTb2x2ZXIgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICB0aGlzLnFtID0gbmV3IFF1aW5lTWNDbHVza2V5RGF0YUN0cmwoKTtcclxuXHJcbiAgICB0aGlzLmxhYmVscyA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSicsICdLJ107XHJcblxyXG4gICAgdGhpcy5pbml0ID0gZnVuY3Rpb24obnVtVmFycykge1xyXG4gICAgICAgIHRoaXMucW0uaW5pdChudW1WYXJzKTtcclxuXHJcbiAgICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2xlYXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgc2l6ZSA9IE1hdGgucG93KDIsIHRoaXMucW0ubm9PZlZhcnMpO1xyXG4gICAgICAgIHRoaXMucW0uYWxsb3dEb250Q2FyZSA9IHRydWU7XHJcbiAgICAgICAgZm9yKHZhciBpPTA7IGk8c2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucW0uc2V0RnVuY0RhdGEoaSwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IGEgbWludGVybVxyXG4gICAgICogQHBhcmFtIG1pbnRlcm0gTWludGVybSBudW1iZXJcclxuICAgICAqIEBwYXJhbSB2YWx1ZSB0cnVlLCBmYWxzZSwgb3IgdW5kZWZpbmVkIGZvciBkb250Y2FyZVxyXG4gICAgICovXHJcbiAgICB0aGlzLnNldCA9IGZ1bmN0aW9uKG1pbnRlcm0sIHZhbHVlKSB7XHJcbiAgICAgICAgaWYodmFsdWUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5xbS5zZXRGdW5jRGF0YShtaW50ZXJtLCAxKTtcclxuICAgICAgICB9IGVsc2UgaWYodmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnFtLnNldEZ1bmNEYXRhKG1pbnRlcm0sIDIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucW0uc2V0RnVuY0RhdGEobWludGVybSwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY29tcHV0ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMucW0uY29tcHV0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubnVtX3Rlcm1zID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucW0ubWluaW1hbFRlcm1Qcmltcy5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5leHByZXNzaW9uID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHFtID0gdGhpcy5xbTtcclxuXHJcbiAgICAgICAgdmFyIGV4cCA9IFwiXCI7XHJcbiAgICAgICAgdmFyIGZpcnN0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYocW0ubWluaW1hbFRlcm1Qcmltcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiMFwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYocW0ubWluaW1hbFRlcm1Qcmltcy5sZW5ndGggPT09IDEgJiZcclxuICAgICAgICAgICAgcW0ubWluaW1hbFRlcm1Qcmltc1swXS50ZXJtU3RyaW5nID09PSAnMScpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiMVwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gTG9vcCBvdmVyIHRoZSByZXN1bHRzXHJcbiAgICAgICAgZm9yKHZhciBpPTA7IGk8cW0ubWluaW1hbFRlcm1Qcmltcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZighZmlyc3QpIHtcclxuICAgICAgICAgICAgICAgIGV4cCArPSBcIitcIjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZpcnN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIEZpbmQgc21hbGxlc3QgcHJpbWUgaW1wbGljYW50LlxyXG4gICAgICAgICAgICAvLyBUaGlzIGlzIHByb2JhYmx5IG5vdCBzdHJpY3RseSBuZWNlc3NhcnlcclxuICAgICAgICAgICAgLy8gYnV0IEkgZG9uJ3QgdHJ1c3QgdGhlIG1ldGhvZCB0aGV5IHVzZVxyXG4gICAgICAgICAgICAvLyB0aGF0IHN0b3BzIG9uIHRoZSBmaXJzdCBpdGVyYXRpb24gb2YgYVxyXG4gICAgICAgICAgICAvLyBmb3IvaW4gbG9vcC5cclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgZmlyc3QgPSB0cnVlO1xyXG4gICAgICAgICAgICB2YXIgbWludGVybTtcclxuXHJcbiAgICAgICAgICAgIHZhciBwcmltVGVybSA9IHFtLm1pbmltYWxUZXJtUHJpbXNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIGltcCBpbiBwcmltVGVybS5pbXBsaWNhbnQuaW1wKSB7XHJcbiAgICAgICAgICAgICAgICBpZihmaXJzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbnRlcm0gPSBpbXA7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaW1wIDwgbWludGVybSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW50ZXJtID0gaW1wO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gbWludGVybSBpcyBhIG1pbnRlcm0gdGhhdCBpcyBuZWVkZWRcclxuICAgICAgICAgICAgLy8gZXhjZXB0IHRoYXQgc29tZSBiaXRzIGNhbiBiZSBtYXNrZWQgb2ZmXHJcblxyXG4gICAgICAgICAgICAvLyBJIGNvdW50IGJhY2t3YXJkcywgc2luY2UgSSBwcmVmZXJcclxuICAgICAgICAgICAgLy8gdGhlIG1vc3Qgc2lnbmlmaWNhbnQgdmFsdWUgdG8gYmUgQVxyXG4gICAgICAgICAgICAvLyB0byBtYXRjaCB0aGUgY291cnNlIG1hdGVyaWFscy5cclxuICAgICAgICAgICAgdmFyIG9uZSA9IDEgPDwgKHFtLm5vT2ZWYXJzIC0gMSk7XHJcblxyXG4gICAgICAgICAgICAvLyBJZiBhIGJpdCBpcyBzZXQgaW4gcHJpbVRlcm0uaW1wbGljYW50LmJpdE1hc2ssXHJcbiAgICAgICAgICAgIC8vIHRoYXQgdGVybSBpcyBub3QgbmVlZGVkLlxyXG4gICAgICAgICAgICB2YXIgbmVlZGVkID0gKH5wcmltVGVybS5pbXBsaWNhbnQuYml0TWFzayk7XHJcblxyXG4gICAgICAgICAgICB2YXIgdGVybSA9ICcnO1xyXG4gICAgICAgICAgICBmb3IgKHZhciB2ID0gcW0ubm9PZlZhcnMtMTsgdiA+PSAwIDsgdi0tKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdjEgPSBxbS5ub09mVmFycyAtIHYgLSAxO1xyXG4gICAgICAgICAgICAgICAgaWYgKChuZWVkZWQgJiBvbmUpID09PSBvbmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoKG1pbnRlcm0gJiBvbmUpID09PSBvbmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVybSArPSB0aGlzLmxhYmVsc1t2MV07XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVybSArPSB0aGlzLmxhYmVsc1t2MV0gKyBcIidcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBvbmUgPSBvbmUgPj4gMTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZXhwICs9IHRlcm07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZXhwO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKEMpIFRob3JzdGVuIFRob3JtYWVobGVuLCBNYXJidXJnLCAyMDEzLCBBbGwgcmlnaHRzIHJlc2VydmVkXHJcbi8vIENvbnRhY3Q6IHd3dy50aG9ybWFlLmRlXHJcblxyXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHdyaXR0ZW4gZm9yIGVkdWNhdGlvbmFsIChub24tY29tbWVyY2lhbCkgcHVycG9zZS4gXHJcbi8vIFRoZXJlIGlzIG5vIHdhcnJhbnR5IG9yIG90aGVyIGd1YXJhbnRlZSBvZiBmaXRuZXNzIGZvciB0aGlzIHNvZnR3YXJlLCBcclxuLy8gaXQgaXMgcHJvdmlkZWQgc29sZWx5IFwiYXMgaXNcIi4gXHJcblxyXG5mdW5jdGlvbiBQZXRyaWNrTWV0aG9kKClcclxue1xyXG4gIHRoaXMucHJvYmxlbTtcclxuICB0aGlzLm1heFByb2JsZW1TaXplID0gMTAwO1xyXG4gIHRoaXMuc29sdXRpb247XHJcbiAgdGhpcy5sb2cgPSBcIlwiO1xyXG4gIHZhciB0aGF0ID0gdGhpcztcclxuICBcclxuICB0aGlzLnRlc3QgPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciBhbmRBcnJheSA9IG5ldyBBcnJheSgpO1xyXG4gICAgdmFyIG9yQXJyYXk7XHJcbiAgICB2YXIgbW9ub21BO1xyXG4gICAgdmFyIG1vbm9tQjtcclxuICAgIG9yQXJyYXkgPSBuZXcgQXJyYXkoKTtcclxuICAgIG1vbm9tQSA9IG5ldyBPYmplY3QoKTsgLy8gdXNpbmcgb2JqZWN0cyBlbnN1cmVzIHRoYXQgKHggYW5kIHgpID0geFxyXG4gICAgbW9ub21BWzFdID0gMTtcclxuICAgIG9yQXJyYXkucHVzaChtb25vbUEpO1xyXG4gICAgbW9ub21CID0gbmV3IE9iamVjdCgpO1xyXG4gICAgbW9ub21CWzJdID0gMjtcclxuICAgIG9yQXJyYXkucHVzaChtb25vbUIpO1xyXG4gICAgYW5kQXJyYXkucHVzaChvckFycmF5KTtcclxuICAgIG9yQXJyYXkgPSBuZXcgQXJyYXkoKTtcclxuICAgIG1vbm9tQSA9IG5ldyBPYmplY3QoKTtcclxuICAgIG1vbm9tQVszXSA9IDM7XHJcbiAgICBvckFycmF5LnB1c2gobW9ub21BKTtcclxuICAgIG1vbm9tQiA9IG5ldyBPYmplY3QoKTtcclxuICAgIG1vbm9tQls0XSA9IDQ7XHJcbiAgICBvckFycmF5LnB1c2gobW9ub21CKTtcclxuICAgIGFuZEFycmF5LnB1c2gob3JBcnJheSk7XHJcbiAgICBvckFycmF5ID0gbmV3IEFycmF5KCk7XHJcbiAgICBtb25vbUEgPSBuZXcgT2JqZWN0KCk7XHJcbiAgICBtb25vbUFbMV0gPSAxO1xyXG4gICAgb3JBcnJheS5wdXNoKG1vbm9tQSk7XHJcbiAgICBtb25vbUIgPSBuZXcgT2JqZWN0KCk7XHJcbiAgICBtb25vbUJbM10gPSAzO1xyXG4gICAgb3JBcnJheS5wdXNoKG1vbm9tQik7XHJcbiAgICBhbmRBcnJheS5wdXNoKG9yQXJyYXkpO1xyXG4gICAgb3JBcnJheSA9IG5ldyBBcnJheSgpO1xyXG4gICAgbW9ub21BID0gbmV3IE9iamVjdCgpO1xyXG4gICAgbW9ub21BWzVdID0gNTtcclxuICAgIG9yQXJyYXkucHVzaChtb25vbUEpO1xyXG4gICAgbW9ub21CID0gbmV3IE9iamVjdCgpO1xyXG4gICAgbW9ub21CWzZdID0gNjtcclxuICAgIG9yQXJyYXkucHVzaChtb25vbUIpO1xyXG4gICAgYW5kQXJyYXkucHVzaChvckFycmF5KTtcclxuICAgIG9yQXJyYXkgPSBuZXcgQXJyYXkoKTtcclxuICAgIG1vbm9tQSA9IG5ldyBPYmplY3QoKTtcclxuICAgIG1vbm9tQVsyXSA9IDI7XHJcbiAgICBvckFycmF5LnB1c2gobW9ub21BKTtcclxuICAgIG1vbm9tQiA9IG5ldyBPYmplY3QoKTtcclxuICAgIG1vbm9tQls1XSA9IDU7XHJcbiAgICBvckFycmF5LnB1c2gobW9ub21CKTtcclxuICAgIGFuZEFycmF5LnB1c2gob3JBcnJheSk7XHJcbiAgICBvckFycmF5ID0gbmV3IEFycmF5KCk7XHJcbiAgICBtb25vbUEgPSBuZXcgT2JqZWN0KCk7XHJcbiAgICBtb25vbUFbNF0gPSA0O1xyXG4gICAgb3JBcnJheS5wdXNoKG1vbm9tQSk7XHJcbiAgICBtb25vbUIgPSBuZXcgT2JqZWN0KCk7XHJcbiAgICBtb25vbUJbNl0gPSA2O1xyXG4gICAgb3JBcnJheS5wdXNoKG1vbm9tQik7XHJcbiAgICBhbmRBcnJheS5wdXNoKG9yQXJyYXkpO1xyXG4gICAgLypvckFycmF5ID0gbmV3IEFycmF5KCk7XHJcbiAgICAgbW9ub21BID0gbmV3IE9iamVjdCgpOyBcclxuICAgICBtb25vbUFbNF0gPSA0O1xyXG4gICAgIG9yQXJyYXkucHVzaChtb25vbUEpO1xyXG4gICAgIG1vbm9tQiA9IG5ldyBPYmplY3QoKTtcclxuICAgICBtb25vbUJbNF0gPSA0O1xyXG4gICAgIG9yQXJyYXkucHVzaChtb25vbUIpO1xyXG4gICAgIGFuZEFycmF5LnB1c2gob3JBcnJheSk7Ki9cclxuICAgIFxyXG4gICAgdGhpcy5zb2x2ZShhbmRBcnJheSk7XHJcbiAgfTtcclxuXHJcbiAgdGhpcy5zb2x2ZSA9IGZ1bmN0aW9uKGVxKSB7XHJcblxyXG4gICAgdGhpcy5wcm9ibGVtID0gZXE7XHJcbiAgICB0aGlzLmxvZyA9IFwiXCI7XHJcbiAgICBcclxuICAgIC8vcHJpbnRFcW5BcnJheShlcSk7XHJcbiAgICBwcmludEVxbkFycmF5RmFuY3koZXEpO1xyXG4gICAgXHJcbiAgICAvLyBtdWx0aXBseSBvdXRcclxuICAgIHZhciBhbmRBcnJheSA9IGVxO1xyXG4gICAgdmFyIGxvb3BDb3VudGVyID0gMDtcclxuICAgIHdoaWxlIChhbmRBcnJheS5sZW5ndGggPiAxKSB7XHJcbiAgICAgIHZhciBuZXdBbmRBcnJheSA9IG5ldyBBcnJheSgpO1xyXG4gICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFuZEFycmF5Lmxlbmd0aDsgaSArPSAyKSB7XHJcblxyXG4gICAgICAgIHZhciBvclRlcm1BID0gYW5kQXJyYXlbaSAtIDFdO1xyXG4gICAgICAgIHZhciBvclRlcm1CID0gYW5kQXJyYXlbaV07XHJcbiAgICAgICAgdmFyIG5ld09yQXJyYXkgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IG9yVGVybUEubGVuZ3RoOyBhKyspIHtcclxuICAgICAgICAgIGZvciAodmFyIGIgPSAwOyBiIDwgb3JUZXJtQi5sZW5ndGg7IGIrKykge1xyXG4gICAgICAgICAgICB2YXIgbW9ub20xID0gb3JUZXJtQVthXTtcclxuICAgICAgICAgICAgdmFyIG1vbm9tMiA9IG9yVGVybUJbYl07XHJcbiAgICAgICAgICAgIHZhciByZXN1bHRpbmdNb25vbSA9IG5ldyBPYmplY3QoKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgbSBpbiBtb25vbTEpIHtcclxuICAgICAgICAgICAgICByZXN1bHRpbmdNb25vbVttb25vbTFbbV1dID0gbW9ub20xW21dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAodmFyIG4gaW4gbW9ub20yKSB7XHJcbiAgICAgICAgICAgICAgcmVzdWx0aW5nTW9ub21bbW9ub20yW25dXSA9IG1vbm9tMltuXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuZXdPckFycmF5LnB1c2gocmVzdWx0aW5nTW9ub20pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmV3QW5kQXJyYXkucHVzaChuZXdPckFycmF5KTtcclxuICAgICAgfVxyXG4gICAgICAvLyBpZiB1bmV2ZW4gY29weSBsYXN0IGFuZC10ZXJtXHJcbiAgICAgIGlmIChhbmRBcnJheS5sZW5ndGggJSAyID09PSAxKSB7XHJcbiAgICAgICAgbmV3QW5kQXJyYXkucHVzaChhbmRBcnJheVthbmRBcnJheS5sZW5ndGggLSAxXSk7XHJcbiAgICAgIH1cclxuICAgICAgLy9wcmludEVxbkFycmF5KG5ld0FuZEFycmF5KTtcclxuICAgICAgcHJpbnRFcW5BcnJheUZhbmN5KG5ld0FuZEFycmF5KTtcclxuICAgICAgXHJcbiAgICAgIGFuZEFycmF5Lmxlbmd0aCA9IDA7XHJcbiAgICAgIC8vIHNpbXBsaWZ5IG9yLXRlcm1cclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZXdBbmRBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHZhciBvclRlcm0gPSBuZXdBbmRBcnJheVtpXTtcclxuICAgICAgICB2YXIgbmV3T3JUZXJtID0gc2ltcGxpZnlPclRlcm0ob3JUZXJtKTtcclxuICAgICAgICBpZiAobmV3T3JUZXJtLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGFuZEFycmF5LnB1c2gobmV3T3JUZXJtKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBwcm9ibGVtU2l6ZSA9IGVxbkFycmF5UHJvYmxlbVNpemUoYW5kQXJyYXkpO1xyXG4gICAgICBpZiAocHJvYmxlbVNpemUgPiB0aGlzLm1heFByb2JsZW1TaXplKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogVGhlIGN5Y2xpYyBjb3ZlcmluZyBwcm9ibGVtIGlzIHRvbyBsYXJnZSB0byBiZSBzb2x2ZWQgd2l0aCBQZXRyaWNrJ3MgbWV0aG9kIChpbmNyZWFzZSBtYXhQcm9ibGVtU2l6ZSkuIFNpemU9XCIgKyBwcm9ibGVtU2l6ZSk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvL3ByaW50RXFuQXJyYXkoYW5kQXJyYXkpO1xyXG4gICAgICBwcmludEVxbkFycmF5RmFuY3koYW5kQXJyYXkpO1xyXG4gICAgICBsb29wQ291bnRlcisrO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zb2x1dGlvbiA9IGFuZEFycmF5O1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gc2ltcGxpZnlPclRlcm0ob3JUZXJtKSB7XHJcbiAgICAvLyBmaW5kIGEgbW9ub20gdGhhdCBpcyB0aGUgc2FtZSBvciBzaW1wbGVyIHRoYW4gYW5vdGhlciBvbmVcclxuICAgIHZhciBuZXdPclRlcm0gPSBuZXcgQXJyYXkoKTtcclxuICAgIHZhciBtYXJrZWRGb3JEZWxldGlvbiA9IG5ldyBPYmplY3QoKTtcclxuICAgIGZvciAodmFyIGEgPSAwOyBhIDwgb3JUZXJtLmxlbmd0aDsgYSsrKSB7XHJcbiAgICAgIHZhciBrZWVwQSA9IHRydWU7XHJcbiAgICAgIHZhciBtb25vbUEgPSBvclRlcm1bYV07XHJcbiAgICAgIGZvciAodmFyIGIgPSBhICsgMTsgYiA8IG9yVGVybS5sZW5ndGggJiYga2VlcEE7IGIrKykge1xyXG4gICAgICAgIHZhciBtb25vbUIgPSBvclRlcm1bYl07XHJcbiAgICAgICAgdmFyIG92ZXJsYXBCb3ZlckEgPSAwO1xyXG4gICAgICAgIHZhciBsZW5ndGhBID0gMDtcclxuICAgICAgICBmb3IgKHZhciBtIGluIG1vbm9tQSkge1xyXG4gICAgICAgICAgaWYgKG1vbm9tQlttXSBpbiBtb25vbUEpIHtcclxuICAgICAgICAgICAgb3ZlcmxhcEJvdmVyQSsrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbGVuZ3RoQSsrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG92ZXJsYXBBb3ZlckIgPSAwO1xyXG4gICAgICAgIHZhciBsZW5ndGhCID0gMDtcclxuICAgICAgICBmb3IgKHZhciBtIGluIG1vbm9tQikge1xyXG4gICAgICAgICAgaWYgKG1vbm9tQVttXSBpbiBtb25vbUIpIHtcclxuICAgICAgICAgICAgb3ZlcmxhcEFvdmVyQisrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbGVuZ3RoQisrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG92ZXJsYXBCb3ZlckEgPT09IGxlbmd0aEIpIHtcclxuICAgICAgICAgIGtlZXBBID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobGVuZ3RoQSA8IGxlbmd0aEIgJiYgb3ZlcmxhcEFvdmVyQiA9PT0gbGVuZ3RoQSkge1xyXG4gICAgICAgICAgbWFya2VkRm9yRGVsZXRpb25bYl0gPSBiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuICAgICAgaWYgKGtlZXBBKSB7XHJcbiAgICAgICAgaWYgKGEgaW4gbWFya2VkRm9yRGVsZXRpb24pIHtcclxuICAgICAgICAgIC8vIGRvIG5vdGhpbmdcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICAgIG5ld09yVGVybS5wdXNoKG9yVGVybVthXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBuZXdPclRlcm07XHJcbiAgfVxyXG5cclxuXHJcbiAgZnVuY3Rpb24gcHJpbnRFcW5BcnJheUZhbmN5KGFuZEFycmF5KSB7XHJcbiAgICB2YXIgc3RyID0gXCJcIjtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYW5kQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIGZpcnN0ID0gdHJ1ZTtcclxuICAgICAgc3RyICs9IFwiKFwiO1xyXG4gICAgICB2YXIgb3JBcnJheSA9IGFuZEFycmF5W2ldO1xyXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG9yQXJyYXkubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICBpZiAoIWZpcnN0KVxyXG4gICAgICAgICAgc3RyICs9IFwiICZvcjsgXCI7XHJcbiAgICAgICAgdmFyIG1vbm9tID0gb3JBcnJheVtqXTtcclxuICAgICAgICBmb3IgKHZhciBrIGluIG1vbm9tKSB7XHJcbiAgICAgICAgICBzdHIgKz0gXCI8aT5wPC9pPjxzdWI+PHNtYWxsPlwiKyBtb25vbVtrXSArIFwiPC9zbWFsbD48L3N1Yj5cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmlyc3QgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBzdHIgKz0gXCIpXCI7XHJcbiAgICB9XHJcbiAgICBpZih0aGF0LmxvZy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoYXQubG9nICs9IFwiPHA+JmhBcnI7Jm5ic3A7XCIgKyBzdHIgKyBcIjwvcD5cIjtcclxuICAgIH1lbHNle1xyXG4gICAgICB0aGF0LmxvZyArPSBcIjxwPlwiKyBzdHIgKyBcIjwvcD5cIjtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgZnVuY3Rpb24gZXFuQXJyYXlQcm9ibGVtU2l6ZShhbmRBcnJheSkge1xyXG4gICAgdmFyIG1vbm9tQ291bnRlciA9IDA7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFuZEFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBvckFycmF5ID0gYW5kQXJyYXlbaV07XHJcbiAgICAgIG1vbm9tQ291bnRlciArPSBvckFycmF5Lmxlbmd0aDtcclxuICAgIH1cclxuICAgIHJldHVybiBtb25vbUNvdW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIGZ1bmN0aW9uIHByaW50RXFuQXJyYXkoYW5kQXJyYXkpIHtcclxuICAgIHZhciBzdHIgPSBcIlwiO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbmRBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgZmlyc3QgPSB0cnVlO1xyXG4gICAgICBzdHIgKz0gXCIoXCI7XHJcbiAgICAgIHZhciBvckFycmF5ID0gYW5kQXJyYXlbaV07XHJcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgb3JBcnJheS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgIGlmICghZmlyc3QpXHJcbiAgICAgICAgICBzdHIgKz0gXCIgb3IgXCI7XHJcbiAgICAgICAgdmFyIG1vbm9tID0gb3JBcnJheVtqXTtcclxuICAgICAgICBmb3IgKHZhciBrIGluIG1vbm9tKSB7XHJcbiAgICAgICAgICBzdHIgKz0gbW9ub21ba107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpcnN0ID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgc3RyICs9IFwiKVwiO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coc3RyKTtcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFByaW1UZXJtKCkge1xyXG4gIHRoaXMuaW1wbGljYW50ID0gLTE7XHJcbiAgdGhpcy50ZXJtU3RyaW5nID0gXCJcIjtcclxuICB0aGlzLmNvbG9yID0gWzAsIDAsIDBdO1xyXG4gIHRoaXMuY29sb3JlZFRlcm1TdHJpbmcgPSBcIlwiO1xyXG4gIHRoaXMudXNlZCA9IGZhbHNlO1xyXG4gIHRoaXMubmVlZGVkQnlWYXIgPSBuZXcgT2JqZWN0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBJbXBsaWNhbnQoKSB7XHJcbiAgdGhpcy5pbXAgPSBuZXcgT2JqZWN0KCk7XHJcbiAgdGhpcy5pc1ByaW0gPSBmYWxzZTtcclxuICB0aGlzLmlzT25seURvbnRDYXJlID0gZmFsc2U7XHJcbiAgdGhpcy5iaXRNYXNrID0gMDtcclxufVxyXG5cclxuZnVuY3Rpb24gSW1wbGljYW50R3JvdXAoKSB7XHJcbiAgdGhpcy5ncm91cCA9IG5ldyBBcnJheTtcclxuICB0aGlzLm9yZGVyID0gLTE7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFByaW1UZXJtVGFibGUob3JkKSB7XHJcbiAgdGhpcy5lc3NlbnRpYWxQcmltVGVybXMgPSBuZXcgQXJyYXkoKTtcclxuICB0aGlzLm9yZGVyID0gb3JkO1xyXG4gIHRoaXMucmVtYWluaW5nVmFycyA9ICBuZXcgQXJyYXkoKTs7XHJcbiAgdGhpcy5yZW1haW5pbmdQcmltVGVybXMgPSAgbmV3IEFycmF5KCk7XHJcbiAgdGhpcy5zdXBlcnNlZGVkUHJpbVRlcm1zID0gIG5ldyBBcnJheSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoc3ZUb1JnYihoLCBzLCB2KSB7XHJcblxyXG4gIHZhciByLCBnLCBiO1xyXG4gIHZhciBpID0gTWF0aC5mbG9vcihoICogNik7XHJcbiAgdmFyIGYgPSBoICogNiAtIGk7XHJcbiAgdmFyIHAgPSB2ICogKDEgLSBzKTtcclxuICB2YXIgcSA9IHYgKiAoMSAtIGYgKiBzKTtcclxuICB2YXIgdCA9IHYgKiAoMSAtICgxIC0gZikgKiBzKTtcclxuXHJcbiAgc3dpdGNoIChpICUgNikge1xyXG4gIGNhc2UgMDpcclxuICAgIHIgPSB2LCBnID0gdCwgYiA9IHA7XHJcbiAgICBicmVhaztcclxuICBjYXNlIDE6XHJcbiAgICByID0gcSwgZyA9IHYsIGIgPSBwO1xyXG4gICAgYnJlYWs7XHJcbiAgY2FzZSAyOlxyXG4gICAgciA9IHAsIGcgPSB2LCBiID0gdDtcclxuICAgIGJyZWFrO1xyXG4gIGNhc2UgMzpcclxuICAgIHIgPSBwLCBnID0gcSwgYiA9IHY7XHJcbiAgICBicmVhaztcclxuICBjYXNlIDQ6XHJcbiAgICByID0gdCwgZyA9IHAsIGIgPSB2O1xyXG4gICAgYnJlYWs7XHJcbiAgY2FzZSA1OlxyXG4gICAgciA9IHYsIGcgPSBwLCBiID0gcTtcclxuICAgIGJyZWFrO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIFsgTWF0aC5mbG9vcihyICogMjU1KSwgTWF0aC5mbG9vcihnICogMjU1KSwgTWF0aC5mbG9vcihiICogMjU1KSBdO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUXVpbmVNY0NsdXNrZXlEYXRhQ3RybCA9IGZ1bmN0aW9uKCkge1xyXG4gIHRoaXMubm9PZlZhcnMgPSAtMTtcclxuICB0aGlzLmZ1bmNkYXRhID0gbmV3IEFycmF5O1xyXG4gIHRoaXMucHJpbVRlcm1zID0gbmV3IEFycmF5O1xyXG4gIHRoaXMuaW1wbGljYW50R3JvdXBzID0gbmV3IEFycmF5O1xyXG4gIHRoaXMubWluaW1hbFRlcm0gPSBcIlwiO1xyXG4gIHRoaXMuY29sb3JlZE1pbmltYWxUZXJtID0gXCJcIjtcclxuICB0aGlzLm1pbmltYWxUZXJtUHJpbXMgPSBuZXcgQXJyYXk7XHJcbiAgdGhpcy5wcmltVGVybVRhYmxlcyA9IG5ldyBBcnJheTtcclxuICB0aGlzLnBldHJpY2tTb2x2ZXIgPSBuZXcgUGV0cmlja01ldGhvZCgpO1xyXG4gIHRoaXMucGV0cmlja1Rlcm1QcmltcyA9IG5ldyBBcnJheTtcclxuICB0aGlzLmFsbG93RG9udENhcmUgPSBmYWxzZTtcclxuICBcclxuICB0aGlzLmluaXQgPSBmdW5jdGlvbihubykge1xyXG4gICAgdGhpcy5ub09mVmFycyA9IG5vO1xyXG4gICAgdGhpcy5mdW5jZGF0YS5sZW5ndGggPSAwO1xyXG4gICAgdGhpcy5wcmltVGVybXMubGVuZ3RoID0gMDtcclxuICAgIHRoaXMuaW1wbGljYW50R3JvdXBzLmxlbmd0aCA9IDA7XHJcbiAgICB0aGlzLm1pbmltYWxUZXJtID0gXCIwXCI7XHJcbiAgICB0aGlzLmNvbG9yZWRNaW5pbWFsVGVybSA9IFwiMFwiO1xyXG4gICAgdGhpcy5taW5pbWFsVGVybVByaW1zLmxlbmd0aCA9IDA7XHJcbiAgICB0aGlzLnByaW1UZXJtVGFibGVzLmxlbmd0aCA9IDA7XHJcbiAgICB0aGlzLnBldHJpY2tUZXJtUHJpbXMubGVuZ3RoID0gMDtcclxuXHJcbiAgICB2YXIgbm9PZkZ1bmNEYXRhID0gTWF0aC5wb3coMiwgdGhpcy5ub09mVmFycyk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vT2ZGdW5jRGF0YTsgaSsrKSB7XHJcbiAgICAgIHRoaXMuZnVuY2RhdGEucHVzaCgwKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy90aGlzLnBldHJpY2tTb2x2ZXIudGVzdCgpO1xyXG4gICAgXHJcbiAgfTtcclxuICBcclxuICB0aGlzLnNldEZ1bmNEYXRhID0gZnVuY3Rpb24oaSwgdmFsKSB7XHJcbiAgICBpZiAoaSA8IDAgfHwgaSA+PSB0aGlzLmZ1bmNkYXRhLmxlbmd0aClcclxuICAgICAgcmV0dXJuO1xyXG4gICAgdGhpcy5mdW5jZGF0YVtpXSA9IHZhbDtcclxuICB9O1xyXG4gIFxyXG4gIHRoaXMuYWN0aXZhdGVkID0gZnVuY3Rpb24oaSkge1xyXG4gICAgaWYgKGkgPCAwIHx8IGkgPj0gdGhpcy5mdW5jZGF0YS5sZW5ndGgpXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICB0aGlzLmZ1bmNkYXRhW2ldICs9IDE7XHJcbiAgICBpZih0aGlzLmFsbG93RG9udENhcmUpIHtcclxuICAgICAgaWYgKHRoaXMuZnVuY2RhdGFbaV0gPiAyKSB0aGlzLmZ1bmNkYXRhW2ldID0gMDtcclxuICAgIH1lbHNle1xyXG4gICAgICBpZiAodGhpcy5mdW5jZGF0YVtpXSA+IDEpIHRoaXMuZnVuY2RhdGFbaV0gPSAwO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jb21wdXRlKCk7XHJcbiAgfTtcclxuICBcclxuICB0aGlzLnJhbmRvbSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmZ1bmNkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmKHRoaXMuYWxsb3dEb250Q2FyZSkge1xyXG4gICAgICAgIHRoaXMuZnVuY2RhdGFbaV0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgdGhpcy5mdW5jZGF0YVtpXSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmNvbXB1dGUoKTtcclxuICB9O1xyXG4gIFxyXG4gIHRoaXMuY2xlYXIgPSBmdW5jdGlvbigpIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5mdW5jZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICB0aGlzLmZ1bmNkYXRhW2ldID0gMDtcclxuICAgIH1cclxuICAgIHRoaXMuY29tcHV0ZSgpO1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIGJpdENvdW50KHZhbHVlKSB7XHJcbiAgICB2YXIgY291bnRlciA9IDA7XHJcbiAgICB3aGlsZSAodmFsdWUgPiAwKSB7XHJcbiAgICAgIGlmICgodmFsdWUgJiAxKSA9PT0gMSkgY291bnRlcisrO1xyXG4gICAgICB2YWx1ZSA+Pj0gMTtcclxuICAgIH1cclxuICAgIHJldHVybiBjb3VudGVyO1xyXG4gIH1cclxuICBcclxuICB0aGlzLmNvbXB1dGUgPSBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMucHJpbVRlcm1zLmxlbmd0aCA9IDA7XHJcbiAgICB0aGlzLmltcGxpY2FudEdyb3Vwcy5sZW5ndGggPSAwO1xyXG4gICAgdGhpcy5taW5pbWFsVGVybSA9IFwiMFwiO1xyXG4gICAgdGhpcy5jb2xvcmVkTWluaW1hbFRlcm0gPSBcIjBcIjtcclxuICAgIHRoaXMubWluaW1hbFRlcm1Qcmltcy5sZW5ndGggPSAwO1xyXG4gICAgdGhpcy5wcmltVGVybVRhYmxlcy5sZW5ndGggPSAwO1xyXG4gICAgdGhpcy5wZXRyaWNrVGVybVByaW1zLmxlbmd0aCA9IDA7XHJcbiAgICBcclxuICAgIHZhciBjb3VudGVyID0gMDtcclxuICAgIHZhciBsYXN0SWcgPSAtMTtcclxuICAgIHZhciBjb250aW51ZUxvb3AgPSB0cnVlO1xyXG4gICAgd2hpbGUoY29udGludWVMb29wKSB7XHJcbiAgICAgIFxyXG4gICAgICBjb250aW51ZUxvb3AgPSBmYWxzZTtcclxuICAgICAgdmFyIGlnID0gbmV3IEltcGxpY2FudEdyb3VwKCk7XHJcbiAgICAgIFxyXG4gICAgICBpZihjb3VudGVyID09PSAwKSB7XHJcbiAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5mdW5jZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgIGlmKHRoaXMuZnVuY2RhdGFbaV0gPiAwKSB7XHJcbiAgICAgICAgICAgICB2YXIgaW1wbCA9IG5ldyBJbXBsaWNhbnQoKTtcclxuICAgICAgICAgICAgIGltcGwuaW1wW2ldID0gaTtcclxuICAgICAgICAgICAgIGltcGwuaXNQcmltID0gdHJ1ZTtcclxuICAgICAgICAgICAgIGlnLmdyb3VwLnB1c2goaW1wbCk7XHJcbiAgICAgICAgICAgICBjb250aW51ZUxvb3AgPSB0cnVlO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICBcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZy5ncm91cC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgZm9yICh2YXIgaiA9IGkrMTsgaiA8IGxhc3RJZy5ncm91cC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICB2YXIgaW1wMSA9IGxhc3RJZy5ncm91cFtpXTtcclxuICAgICAgICAgICAgdmFyIGltcDIgPSBsYXN0SWcuZ3JvdXBbal07XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoaW1wMS5iaXRNYXNrID09PSBpbXAyLmJpdE1hc2spIHtcclxuXHJcbiAgICAgICAgICAgICAgdmFyIGZvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgdmFyIHhvciA9IC0xO1xyXG4gICAgICAgICAgICAgIGZvciAodmFyIG0gaW4gaW1wMS5pbXApIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIG4gaW4gaW1wMi5pbXApIHtcclxuICAgICAgICAgICAgICAgICAgdmFyIGkxID0gaW1wMS5pbXBbbV07XHJcbiAgICAgICAgICAgICAgICAgIHZhciBpMiA9IGltcDIuaW1wW25dO1xyXG4gICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGkxICsgXCI8LT5cIiArIGkyKTtcclxuICAgICAgICAgICAgICAgICAgeG9yID0gKGkxIF4gaTIpICYgKH5pbXAxLmJpdE1hc2spO1xyXG4gICAgICAgICAgICAgICAgICBpZiAoYml0Q291bnQoeG9yKSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJmb3VuZCBtZXJnZSBjYW5kaWRhdGVcIiArIGkxICsgXCI8LT5cIiArIGkyKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKGZvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICBpbXAxLmlzUHJpbSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaW1wMi5pc1ByaW0gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgaW1wbCA9IG5ldyBJbXBsaWNhbnQoKTtcclxuICAgICAgICAgICAgICAgIGltcGwuaXNQcmltID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGltcGwuYml0TWFzayA9IGltcDEuYml0TWFzayB8IHhvcjtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIG0gaW4gaW1wMS5pbXApXHJcbiAgICAgICAgICAgICAgICAgIGltcGwuaW1wW21dID0gcGFyc2VJbnQobSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBuIGluIGltcDIuaW1wKVxyXG4gICAgICAgICAgICAgICAgICBpbXBsLmltcFtuXSA9IHBhcnNlSW50KG4pO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBmb3VuZE1hdGNoID0gZmFsc2U7IC8vIGRldGVybWluZSBpZiB0aGlzIGNvbWJpbmF0aW9uIGlzIGFscmVhZHkgdGhlcmVcclxuICAgICAgICAgICAgICAgIGZvcih2YXIgaz0wOyBrIDwgaWcuZ3JvdXAubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgICAgICAgdmFyIGV4aXN0ID0gaWcuZ3JvdXBba107XHJcbiAgICAgICAgICAgICAgICAgIHZhciBpc1RoZVNhbWUgPSB0cnVlOyAgXHJcbiAgICAgICAgICAgICAgICAgICBmb3IodmFyIG0gaW4gaW1wbC5pbXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgdmFyIGZvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG4gaW4gZXhpc3QuaW1wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZihwYXJzZUludChtKSA9PT0gcGFyc2VJbnQobikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgIGlmKCFmb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGlzVGhlU2FtZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICBpZihpc1RoZVNhbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgZm91bmRNYXRjaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoIWZvdW5kTWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgaWcuZ3JvdXAucHVzaChpbXBsKTtcclxuICAgICAgICAgICAgICAgICAgY29udGludWVMb29wID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGlmKGNvbnRpbnVlTG9vcCkgdGhpcy5pbXBsaWNhbnRHcm91cHMucHVzaChpZyk7XHJcbiAgICAgIGxhc3RJZyA9IGlnO1xyXG4gICAgICBjb3VudGVyKys7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIGNvbGxlY3QgcHJpbXRlcm1zXHJcbiAgICB0aGlzLnByaW1UZXJtcy5sZW5ndGggPSAwO1xyXG4gICAgdGhpcy5taW5pbWFsVGVybVByaW1zLmxlbmd0aCA9IDA7XHJcbiAgICB2YXIgY29sb3IgPSAwLjA7XHJcbiAgICBmb3IodmFyIGk9IHRoaXMuaW1wbGljYW50R3JvdXBzLmxlbmd0aC0xOyBpID49MDsgaS0tKSB7XHJcbiAgICAgIHZhciBnID0gdGhpcy5pbXBsaWNhbnRHcm91cHNbaV0uZ3JvdXA7XHJcbiAgICBcclxuICAgICAgZm9yKHZhciBqPTA7IGogPCBnLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgaWYoZ1tqXS5pc1ByaW0pIHtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gcHJpbSB0ZXJtcyBpbnRyb2R1Y2VkIGJ5IGRvbid0IGNhcmVzXHJcbiAgICAgICAgICAvLyBtdXN0IGhhdmUgYXQgbGVhc3Qgb25lIDFcclxuICAgICAgICAgIHZhciBjb250YWluc09uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgdmFyIGFsbEZ1bmNQcmltVGVybSA9IGdbal0uaW1wO1xyXG4gICAgICAgICAgZm9yKHZhciBrayBpbiBhbGxGdW5jUHJpbVRlcm0pIHtcclxuICAgICAgICAgICAgdmFyIGsgPSBhbGxGdW5jUHJpbVRlcm1ba2tdO1xyXG4gICAgICAgICAgICBpZih0aGlzLmZ1bmNkYXRhW2tdID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgY29udGFpbnNPbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlmKCFjb250YWluc09uZSl7XHJcbiAgICAgICAgICAgIGdbal0uaXNPbmx5RG9udENhcmUgPSB0cnVlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIHByaW1UZXJtID0gbmV3IFByaW1UZXJtKCk7XHJcbiAgICAgICAgICAgIHByaW1UZXJtLmltcGxpY2FudCA9IGdbal07XHJcblxyXG4gICAgICAgICAgICAvLyBleHRyYWN0IG1pblRlcm0gYXMgc3RyaW5nXHJcbiAgICAgICAgICAgIGZvciAodmFyIHRoaXNWYWwgaW4gcHJpbVRlcm0uaW1wbGljYW50LmltcCkge1xyXG4gICAgICAgICAgICAgIHZhciBtaW5UZXJtID0gXCJcIjtcclxuICAgICAgICAgICAgICB2YXIgb25lID0gMTtcclxuICAgICAgICAgICAgICB2YXIgbmVlZGVkID0gKH5wcmltVGVybS5pbXBsaWNhbnQuYml0TWFzayk7XHJcbiAgICAgICAgICAgICAgZm9yICh2YXIgdiA9IDA7IHYgPCB0aGlzLm5vT2ZWYXJzOyB2KyspIHtcclxuICAgICAgICAgICAgICAgIGlmICgobmVlZGVkICYgb25lKSA9PT0gb25lKSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmICgodGhpc1ZhbCAmIG9uZSkgPT09IG9uZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1pblRlcm0gPSBcIjxpPng8L2k+PHN1Yj48c21hbGw+XCIgKyB2ICsgXCI8L3NtYWxsPjwvc3ViPlwiICsgbWluVGVybTtcclxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBtaW5UZXJtID0gXCI8aT54JiM3NzI7PC9pPjxzdWI+PHNtYWxsPlwiICsgdiArIFwiPC9zbWFsbD48L3N1Yj5cIiArIG1pblRlcm07XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG9uZSA9IG9uZSA8PCAxO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBtaW5UZXJtID0gXCIoXCIgKyBtaW5UZXJtICsgXCIpXCI7XHJcbiAgICAgICAgICAgICAgaWYgKHByaW1UZXJtLmltcGxpY2FudC5iaXRNYXNrID09PSBNYXRoLnBvdygyLCB0aGlzLm5vT2ZWYXJzKSAtIDEpXHJcbiAgICAgICAgICAgICAgICBtaW5UZXJtID0gXCIxXCI7XHJcbiAgICAgICAgICAgICAgcHJpbVRlcm0uY29sb3IgPSBoc3ZUb1JnYihjb2xvciwgMS4wLCAwLjUpO1xyXG4gICAgICAgICAgICAgIGNvbG9yICs9IDAuMjI7XHJcbiAgICAgICAgICAgICAgY29sb3IgPSBjb2xvciAlIDEuMDtcclxuXHJcblxyXG4gICAgICAgICAgICAgIHByaW1UZXJtLnRlcm1TdHJpbmcgPSBtaW5UZXJtO1xyXG4gICAgICAgICAgICAgIHZhciBjb2xvclN0ciA9IFwicmdiKFwiICsgcHJpbVRlcm0uY29sb3JbMF0gKyBcIixcIiArIHByaW1UZXJtLmNvbG9yWzFdICsgXCIsXCIgKyBwcmltVGVybS5jb2xvclsyXSArIFwiKVwiO1xyXG4gICAgICAgICAgICAgIHByaW1UZXJtLmNvbG9yZWRUZXJtU3RyaW5nID0gXCI8c3BhbiBzdHlsZT0nY29sb3I6XCIgKyBjb2xvclN0ciArIFwiJz5cIiArIG1pblRlcm0gKyBcIjwvc3Bhbj5cIjtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5wcmltVGVybXMucHVzaChwcmltVGVybSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgLy8gbG9va2luZyBmb3IgZXNzZW50aWFsIHByaW1lIGltcGxpY2FudHMgXHJcbiAgICB2YXIgcmVtYWluaW5nID0gbmV3IE9iamVjdCgpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmZ1bmNkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmKHRoaXMuZnVuY2RhdGFbaV0gPT09IDEpIHtcclxuICAgICAgICByZW1haW5pbmdbaV0gPSBpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRoaXMucHJpbVRlcm1UYWJsZXMubGVuZ3RoID0gMDtcclxuICAgIHZhciBwcmltVGFibGVMb29wID0gMDtcclxuICAgIHZhciBwcmltVGFibGVGb3VuZCA9ICh0aGlzLnByaW1UZXJtcy5sZW5ndGggPiAwKTtcclxuICAgIHZhciBjeWNsaWNDb3ZlcmluZ0ZvdW5kID0gZmFsc2U7XHJcbiAgICB2YXIgcHJpbVRlcm1UYWJsZTtcclxuICAgIHdoaWxlIChwcmltVGFibGVGb3VuZCkge1xyXG5cclxuICAgICAgcHJpbVRhYmxlRm91bmQgPSBmYWxzZTtcclxuXHJcbiAgICAgIHByaW1UZXJtVGFibGUgPSBuZXcgUHJpbVRlcm1UYWJsZShwcmltVGFibGVMb29wKTtcclxuICAgICAgZm9yICh2YXIgciBpbiByZW1haW5pbmcpIHtcclxuICAgICAgICBwcmltVGVybVRhYmxlLnJlbWFpbmluZ1ZhcnMucHVzaChyZW1haW5pbmdbcl0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAocHJpbVRhYmxlTG9vcCA9PT0gMCkgeyBcclxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMucHJpbVRlcm1zLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICBwcmltVGVybVRhYmxlLnJlbWFpbmluZ1ByaW1UZXJtcy5wdXNoKHRoaXMucHJpbVRlcm1zW2pdKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gcmVtb3ZlIHJvd3NcclxuICAgICAgICB2YXIgcHJldlRhYmxlID0gdGhpcy5wcmltVGVybVRhYmxlc1twcmltVGFibGVMb29wLTFdOyBcclxuICAgICAgICBmb3IodmFyIGs9MDsgayA8cHJldlRhYmxlLnJlbWFpbmluZ1ByaW1UZXJtcy5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgaWYoIXByZXZUYWJsZS5yZW1haW5pbmdQcmltVGVybXNba10udXNlZCl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgc3VwZXJzZWRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB2YXIgaW1wQSA9IHByZXZUYWJsZS5yZW1haW5pbmdQcmltVGVybXNba10uaW1wbGljYW50LmltcDtcclxuICAgICAgICAgICAgdmFyIHZhckNvdmVyID0gbmV3IE9iamVjdDtcclxuICAgICAgICAgICAgdmFyIGNvdW50QSA9IDA7XHJcbiAgICAgICAgICAgIGZvcih2YXIgciBpbiByZW1haW5pbmcpIHtcclxuICAgICAgICAgICAgICB2YXIgdiA9IHJlbWFpbmluZ1tyXTtcclxuICAgICAgICAgICAgICBpZiAodiBpbiBpbXBBKSB7XHJcbiAgICAgICAgICAgICAgICB2YXJDb3Zlclt2XSA9IHY7XHJcbiAgICAgICAgICAgICAgICBjb3VudEErKztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZvciAodmFyIGwgPSAwOyBsIDwgcHJldlRhYmxlLnJlbWFpbmluZ1ByaW1UZXJtcy5sZW5ndGggJiYgIXN1cGVyc2VkZWQ7IGwrKykge1xyXG4gICAgICAgICAgICAgIGlmICghcHJldlRhYmxlLnJlbWFpbmluZ1ByaW1UZXJtc1tsXS51c2VkICYmIGsgIT09IGwpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpbXBCID0gcHJldlRhYmxlLnJlbWFpbmluZ1ByaW1UZXJtc1tsXS5pbXBsaWNhbnQuaW1wO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvdW50QiA9IDA7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciByIGluIHZhckNvdmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgIHZhciB2ID0gdmFyQ292ZXJbcl07XHJcbiAgICAgICAgICAgICAgICAgIGlmICh2IGluIGltcEIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudEIrKztcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoY291bnRBID09PSBjb3VudEIpIHtcclxuICAgICAgICAgICAgICAgICAgdmFyIGNvdW50QkluUmVtYWluaW5nID0gMDtcclxuICAgICAgICAgICAgICAgICAgZm9yICh2YXIgciBpbiByZW1haW5pbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdiA9IHJlbWFpbmluZ1tyXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodiBpbiBpbXBCKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb3VudEJJblJlbWFpbmluZysrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBpZihjb3VudEJJblJlbWFpbmluZyA+IGNvdW50QSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1cGVyc2VkZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBpZihrID4gbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3VwZXJzZWRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoIXN1cGVyc2VkZWQpIHtcclxuICAgICAgICAgICAgICBwcmltVGVybVRhYmxlLnJlbWFpbmluZ1ByaW1UZXJtcy5wdXNoKHByZXZUYWJsZS5yZW1haW5pbmdQcmltVGVybXNba10pO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICBwcmV2VGFibGUuc3VwZXJzZWRlZFByaW1UZXJtcy5wdXNoKHByZXZUYWJsZS5yZW1haW5pbmdQcmltVGVybXNba10pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAocHJpbVRlcm1UYWJsZS5yZW1haW5pbmdQcmltVGVybXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHRoaXMucHJpbVRlcm1UYWJsZXMucHVzaChwcmltVGVybVRhYmxlKTtcclxuICAgICAgICB2YXIgY3VycmVudFRlcm1zID0gcHJpbVRlcm1UYWJsZS5yZW1haW5pbmdQcmltVGVybXM7XHJcblxyXG4gICAgICAgIHZhciB0b0JlUmVtb3ZlZCA9IG5ldyBPYmplY3QoKTtcclxuICAgICAgICBcclxuICAgICAgICBmb3IgKHZhciByIGluIHJlbWFpbmluZykge1xyXG4gICAgICAgICAgdmFyIGkgPSByZW1haW5pbmdbcl07XHJcbiAgICAgICAgICB2YXIgY291bnQgPSAwO1xyXG4gICAgICAgICAgdmFyIHRlcm0gPSAtMTtcclxuICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgY3VycmVudFRlcm1zLmxlbmd0aCAmJiBjb3VudCA8IDI7IGorKykge1xyXG4gICAgICAgICAgICBpZiAoaSBpbiBjdXJyZW50VGVybXNbal0uaW1wbGljYW50LmltcCkge1xyXG4gICAgICAgICAgICAgIHRlcm0gPSBqO1xyXG4gICAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAoY291bnQgPT09IDEpIHtcclxuICAgICAgICAgICAgY3VycmVudFRlcm1zW3Rlcm1dLm5lZWRlZEJ5VmFyW2ldID0gcHJpbVRhYmxlTG9vcDtcclxuICAgICAgICAgICAgaWYoIWN1cnJlbnRUZXJtc1t0ZXJtXS51c2VkKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5taW5pbWFsVGVybVByaW1zLnB1c2goY3VycmVudFRlcm1zW3Rlcm1dKTtcclxuICAgICAgICAgICAgICBjdXJyZW50VGVybXNbdGVybV0udXNlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgcHJpbVRlcm1UYWJsZS5lc3NlbnRpYWxQcmltVGVybXMucHVzaChjdXJyZW50VGVybXNbdGVybV0pO1xyXG4gICAgICAgICAgICAgIHByaW1UYWJsZUZvdW5kID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgZm9yICh2YXIgciBpbiByZW1haW5pbmcpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpaSA9IHJlbWFpbmluZ1tyXTtcclxuICAgICAgICAgICAgICAgIGlmIChpaSBpbiBjdXJyZW50VGVybXNbdGVybV0uaW1wbGljYW50LmltcCkge1xyXG4gICAgICAgICAgICAgICAgICB0b0JlUmVtb3ZlZFtpaV0gPSBpaTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gcmVtb3ZlIGNvbHVtbnNcclxuICAgICAgICB2YXIgdG1wUmVtYWluaW5nID0gbmV3IE9iamVjdCgpO1xyXG4gICAgICAgIGZvciAodmFyIGUgaW4gcmVtYWluaW5nKXtcclxuICAgICAgICAgIHZhciBlZSA9IHJlbWFpbmluZ1tlXTtcclxuICAgICAgICAgIHRtcFJlbWFpbmluZ1tlZV0gPSBlZTtcclxuICAgICAgICAgIGRlbGV0ZSByZW1haW5pbmdbZV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciByZW1haW5pbmdDb3VudCA9IDA7XHJcbiAgICAgICAgZm9yICh2YXIgciBpbiB0bXBSZW1haW5pbmcpIHtcclxuICAgICAgICAgIHZhciB0ID0gdG1wUmVtYWluaW5nW3JdO1xyXG4gICAgICAgICAgaWYoISh0IGluIHRvQmVSZW1vdmVkKSkge1xyXG4gICAgICAgICAgICAgcmVtYWluaW5nIFt0XSA9IHQ7XHJcbiAgICAgICAgICAgICByZW1haW5pbmdDb3VudCsrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gICAgXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGlmKCByZW1haW5pbmdDb3VudCA9PT0gMCApIHtcclxuICAgICAgICBwcmltVGFibGVGb3VuZCA9IGZhbHNlOyAvLyBicmVhayBsb29wXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGlmKCFwcmltVGFibGVGb3VuZCkge1xyXG4gICAgICAgICAgY3ljbGljQ292ZXJpbmdGb3VuZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBwcmltVGFibGVMb29wKys7XHJcbiAgICB9XHJcbiAgICBcclxuICAgdmFyIHNvbHV0aW9uRm91bmQgPSB0cnVlO1xyXG4gICAgXHJcbiAgICAvLyBQZXRyaWNrJ3MgTWV0aG9kXHJcbiAgICBpZiAoY3ljbGljQ292ZXJpbmdGb3VuZCkge1xyXG4gICAgICAvL2NvbnNvbGUubG9nKFwiQ3ljbGljIGNvdmVyaW5nIGZvdW5kXCIpO1xyXG5cclxuICAgICAgdmFyIGFuZEFycmF5ID0gbmV3IEFycmF5KCk7XHJcbiAgIFxyXG4gICAgICBmb3IgKHZhciByIGluIHJlbWFpbmluZykge1xyXG4gICAgICAgIHZhciBpaSA9IHJlbWFpbmluZ1tyXTtcclxuICAgICAgICAgdmFyIG9yQXJyYXkgPSBuZXcgQXJyYXkoKTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBwcmltVGVybVRhYmxlLnJlbWFpbmluZ1ByaW1UZXJtcy5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgdmFyIGltcCA9IHByaW1UZXJtVGFibGUucmVtYWluaW5nUHJpbVRlcm1zW2tdLmltcGxpY2FudC5pbXA7XHJcbiAgICAgICAgICBpZihpaSBpbiBpbXApe1xyXG4gICAgICAgICAgICB2YXIgbW9ub20gPSBuZXcgT2JqZWN0KCk7XHJcbiAgICAgICAgICAgIG1vbm9tW2tdID0gaztcclxuICAgICAgICAgICAgb3JBcnJheS5wdXNoKG1vbm9tKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYW5kQXJyYXkucHVzaChvckFycmF5KTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgc29sdXRpb25Gb3VuZCA9IHRoaXMucGV0cmlja1NvbHZlci5zb2x2ZShhbmRBcnJheSk7XHJcbiAgICAgIFxyXG4gICAgICBpZiAoc29sdXRpb25Gb3VuZCkge1xyXG4gICAgICAgIHZhciBzb2x1dGlvbnMgPSB0aGlzLnBldHJpY2tTb2x2ZXIuc29sdXRpb25bMF07XHJcblxyXG4gICAgICAgIHZhciBiZXN0U29sdXRpb24gPSAtMTtcclxuICAgICAgICB2YXIgYmVzdENvdW50ID0gMTAwMDAwMDA7XHJcbiAgICAgICAgdmFyIGJlc3RWYXJDb3VudCA9IDEwMDAwMDAwO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc29sdXRpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICB2YXIgY291bnQgPSAwO1xyXG4gICAgICAgICAgZm9yICh2YXIgaiBpbiBzb2x1dGlvbnNbaV0pIHtcclxuICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChjb3VudCA8PSBiZXN0Q291bnQpIHsgLy8gZmlyc3Qgc29ydCBhY2NvcmluZyB0byBtb25vbSBsZW5ndGhcclxuXHJcbiAgICAgICAgICAgIHZhciBmb3VuZEJlc3QgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAoY291bnQgPT09IGJlc3RDb3VudCkge1xyXG4gICAgICAgICAgICAgIHZhciBiZXN0VmFyQ291bnROZXcgPSAwO1xyXG4gICAgICAgICAgICAgIGZvciAodmFyIGogaW4gc29sdXRpb25zW2ldKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB2IGluIHByaW1UZXJtVGFibGUucmVtYWluaW5nUHJpbVRlcm1zW2pdLmltcGxpY2FudC5pbXApIHtcclxuICAgICAgICAgICAgICAgICAgYmVzdFZhckNvdW50TmV3Kys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlmIChiZXN0VmFyQ291bnROZXcgPj0gYmVzdFZhckNvdW50KVxyXG4gICAgICAgICAgICAgICAgZm91bmRCZXN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChmb3VuZEJlc3QpIHtcclxuICAgICAgICAgICAgICBiZXN0Q291bnQgPSBjb3VudDtcclxuICAgICAgICAgICAgICBiZXN0U29sdXRpb24gPSBpO1xyXG4gICAgICAgICAgICAgIGJlc3RWYXJDb3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgZm9yICh2YXIgaiBpbiBzb2x1dGlvbnNbYmVzdFNvbHV0aW9uXSkge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgdiBpbiBwcmltVGVybVRhYmxlLnJlbWFpbmluZ1ByaW1UZXJtc1tqXS5pbXBsaWNhbnQuaW1wKSB7XHJcbiAgICAgICAgICAgICAgICAgIGJlc3RWYXJDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiQmVzdCBzb2x1dGlvbiBcIiArIGJlc3RTb2x1dGlvbik7XHJcblxyXG4gICAgICAgIHZhciBiZXN0ID0gc29sdXRpb25zW2Jlc3RTb2x1dGlvbl07XHJcbiAgICAgICAgZm9yICh2YXIgYiBpbiBiZXN0KSB7XHJcbiAgICAgICAgICB2YXIgYWRkUHJpbVRlcm0gPSBwcmltVGVybVRhYmxlLnJlbWFpbmluZ1ByaW1UZXJtc1tiZXN0W2JdXTtcclxuICAgICAgICAgIHRoaXMubWluaW1hbFRlcm1Qcmltcy5wdXNoKGFkZFByaW1UZXJtKTtcclxuICAgICAgICAgIHRoaXMucGV0cmlja1Rlcm1Qcmltcy5wdXNoKGFkZFByaW1UZXJtKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKHNvbHV0aW9uRm91bmQpIHtcclxuICAgICAgdGhpcy5taW5pbWFsVGVybSA9IFwiXCI7XHJcbiAgICAgIHRoaXMuY29sb3JlZE1pbmltYWxUZXJtID0gXCJcIjtcclxuICAgICAgdmFyIGZpcnN0TCA9IHRydWU7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5taW5pbWFsVGVybVByaW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKCFmaXJzdEwpIHtcclxuICAgICAgICAgIHRoaXMubWluaW1hbFRlcm0gKz0gXCIgJm9yOyBcIjtcclxuICAgICAgICAgIHRoaXMuY29sb3JlZE1pbmltYWxUZXJtICs9IFwiICZvcjsgXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubWluaW1hbFRlcm0gKz0gdGhpcy5taW5pbWFsVGVybVByaW1zW2ldLnRlcm1TdHJpbmc7XHJcbiAgICAgICAgdGhpcy5jb2xvcmVkTWluaW1hbFRlcm0gKz0gdGhpcy5taW5pbWFsVGVybVByaW1zW2ldLmNvbG9yZWRUZXJtU3RyaW5nO1xyXG4gICAgICAgIGZpcnN0TCA9IGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5taW5pbWFsVGVybVByaW1zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHRoaXMubWluaW1hbFRlcm0gPSBcIjBcIjtcclxuICAgICAgICB0aGlzLmNvbG9yZWRNaW5pbWFsVGVybSA9IFwiMFwiO1xyXG4gICAgICB9XHJcbiAgICB9ZWxzZXtcclxuICAgICAgIHRoaXMubWluaW1hbFRlcm0gPSAnRXJyb3I6IFRoZSBjeWNsaWMgY292ZXJpbmcgcHJvYmxlbSBpcyB0b28gbGFyZ2UgKGluY3JlYXNlIHRoZSBcIm1heFByb2JsZW1TaXplXCIgcGFyYW1ldGVyKSc7XHJcbiAgICAgICB0aGlzLmNvbG9yZWRNaW5pbWFsVGVybSA9ICdFcnJvcjogVGhlIGN5Y2xpYyBjb3ZlcmluZyBwcm9ibGVtIGlzIHRvbyBsYXJnZSAoaW5jcmVhc2UgdGhlIFwibWF4UHJvYmxlbVNpemVcIiBwYXJhbWV0ZXIpJztcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgUXVpbmVNY0NsdXNrZXkgPSBmdW5jdGlvbihwYXJlbnREaXZJZCwgY29sdW1ucywgbGFuZ3VhZ2UpIHtcclxuICB2YXIgbXlEaXYgPSAtMTtcclxuICB2YXIgZGl2SWQgPSBwYXJlbnREaXZJZDtcclxuICB0aGlzLmNvbHMgPSBjb2x1bW5zICsgMTtcclxuICB0aGlzLnJvd3MgPSBNYXRoLnBvdygyLCBjb2x1bW5zKTtcclxuICB0aGlzLmRhdGEgPSAgbmV3IFF1aW5lTWNDbHVza2V5RGF0YUN0cmwoKTtcclxuICB2YXIgdGhhdCA9IHRoaXM7XHJcblxyXG4gIHZhciBsYWJlbHM7XHJcbiAgaWYobGFuZ3VhZ2UgPT09IDApIHtcclxuICAgIGxhYmVscyA9IHt0dGFibGU6XCJUcnV0aCB0YWJsZVwiLFxyXG4gICAgICAgICAgICAgIG1pbkV4cDpcIk1pbmltYWwgYm9vbGVhbiBleHByZXNzaW9uXCIsXHJcbiAgICAgICAgICAgICAgaW1wbGk6XCJJbXBsaWNhbnRzXCIsXHJcbiAgICAgICAgICAgICAgb3JkZXI6XCJPcmRlclwiLFxyXG4gICAgICAgICAgICAgIHByaW1DaGFydDpcIlByaW1lIGltcGxpY2FudCBjaGFydFwiLFxyXG4gICAgICAgICAgICAgIHByaW1DaGFydFJlZHVjZWQ6XCJSZWR1Y2VkIHByaW1lIGltcGxpY2FudCBjaGFydCAoSXRlcmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgZXh0cmFjdGVkUHJpbXM6XCJFeHRyYWN0ZWQgZXNzZW50aWFsIHByaW1lIGltcGxpY2FudHNcIixcclxuICAgICAgICAgICAgICBleHRyYWN0ZWRNUHJpbXM6XCJFeHRyYWN0ZWQgcHJpbWUgaW1wbGljYW50c1wiLFxyXG4gICAgICAgICAgICAgIHBldHJpY2tzTTpcIlBldHJpY2sncyBtZXRob2RcIn07XHJcbiAgfWVsc2V7XHJcbiAgICBsYWJlbHMgPSB7dHRhYmxlOlwiV2FocmhlaXRzdGFmZWxcIixcclxuICAgICAgICAgICAgICBtaW5FeHA6XCJNaW5pbWFsZXIgYm9vbGVzY2hlciBBdXNkcnVja1wiLFxyXG4gICAgICAgICAgICAgIGltcGxpOlwiSW1wbGlrYW50ZW5cIixcclxuICAgICAgICAgICAgICBvcmRlcjpcIk9yZG51bmdcIixcclxuICAgICAgICAgICAgICBwcmltQ2hhcnQ6XCJQcmltaW1wbGlrYW50ZW50YWZlbFwiLFxyXG4gICAgICAgICAgICAgIHByaW1DaGFydFJlZHVjZWQ6XCJSZWR1emllcnRlIFByaW1pbXBsaWthbnRlbnRhZmVsIChJdGVyYXRpb25cIixcclxuICAgICAgICAgICAgICBleHRyYWN0ZWRQcmltczpcIkV4dHJhaGllcnRlIGVzc2VudGllbGxlIFByaW1pbXBsaWthbnRlblwiLFxyXG4gICAgICAgICAgICAgIGV4dHJhY3RlZE1QcmltczpcIkV4dHJhaGllcnRlIFByaW1pbXBsaWthbnRlblwiLFxyXG4gICAgICAgICAgICAgIHBldHJpY2tzTTpcIlZlcmZhaHJlbiB2b24gUGV0cmlja1wifTtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgdGhpcy5pbml0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICBcclxuICAgIHRoaXMuZGF0YS5pbml0KGNvbHVtbnMpO1xyXG4gICAgXHJcbiAgICBteURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaWYgKCFteURpdikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlF1aW5lTWNDbHVza2V5IGVycm9yOiBjYW4gbm90IGNyZWF0ZSBhIGNhbnZhcyBlbGVtZW50XCIpO1xyXG4gICAgICBteURpdiA9IC0xO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICBcclxuICAgICAgdmFyIHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRpdklkKTtcclxuICAgICAgaWYgKCFwYXJlbnQpIHtcclxuICAgICAgICBpZihkaXZJZCAhPT0gXCJmYWtlRGl2SWRcIikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJRdWluZU1jQ2x1c2tleSBlcnJvcjogY2FuIG5vdCBmaW5kIGFuIGVsZW1lbnQgd2l0aCB0aGUgZ2l2ZW4gbmFtZTogXCIgKyBkaXZJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG15RGl2ID0gLTE7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChteURpdik7XHJcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKG15RGl2KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9O1xyXG5cclxuICB0aGlzLnNldE5vT2ZWYXJzID0gZnVuY3Rpb24odmFycykge1xyXG4gICAgdmFyIGMgPSBwYXJzZUludCh2YXJzKTtcclxuICAgIGlmIChjIDwgMSAmJiBjID4gNilcclxuICAgICAgcmV0dXJuO1xyXG4gICAgdGhpcy5jb2xzID0gYyArIDE7XHJcbiAgICB0aGlzLnJvd3MgPSBNYXRoLnBvdygyLCBjKTtcclxuICAgIHRoaXMuZGF0YS5pbml0KGMpO1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9O1xyXG5cclxuICB0aGlzLmdlblJhbmRvbSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5kYXRhLnJhbmRvbSgpO1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9O1xyXG5cclxuICB0aGlzLmFsbG93RG9udENhcmVzID0gZnVuY3Rpb24odHlwZSkge1xyXG4gICAgaWYodHlwZSA+IDApIHtcclxuICAgICAgdGhpcy5kYXRhLmFsbG93RG9udENhcmUgPSB0cnVlO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMuZGF0YS5hbGxvd0RvbnRDYXJlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB0aGlzLmRhdGEuY2xlYXIoKTtcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgfTtcclxuXHJcbiAgdGhpcy5kcmF3SW1wbGljYW50R3JvdXAgPSBmdW5jdGlvbihnLCBwYXJlbnQsIHByaW1GbGFnLCB0LCBkcmF3UGV0cmlja1ZhcnMpIHtcclxuICAgIHZhciBwcmltVGVybVRhYmxlID0gdGhpcy5kYXRhLnByaW1UZXJtVGFibGVzW3RdO1xyXG4gICAgdmFyIG15VGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xyXG4gICAgbXlUYWJsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3FtY1RhYmxlQ2xhc3MnKTtcclxuICAgIHZhciBteVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICBcclxuICAgIHZhciBjZWxsMWggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpOyAgXHJcbiAgICBjZWxsMWguc2V0QXR0cmlidXRlKCdjbGFzcycsICdxbWNUZE5vQm9yZGVyJyk7XHJcbiAgICBjZWxsMWguaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIG15Um93LmFwcGVuZENoaWxkKGNlbGwxaCk7XHJcbiAgICBcclxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5kYXRhLm5vT2ZWYXJzOyBqKyspIHtcclxuICAgICAgdmFyIG15Q2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XHJcbiAgICAgIG15Q2VsbC5pbm5lckhUTUwgPSBcIjxpPng8L2k+PHN1Yj48c21hbGw+XCIgKyAodGhpcy5kYXRhLm5vT2ZWYXJzLTEtaikgKyBcIjwvc21hbGw+PC9zdWI+XCI7XHJcbiAgICAgIG15Q2VsbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3FtY0hlYWRlclggcW1jQml0Jyk7XHJcbiAgICAgIG15Um93LmFwcGVuZENoaWxkKG15Q2VsbCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmIChwcmltRmxhZykge1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByaW1UZXJtVGFibGUucmVtYWluaW5nVmFycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHZhciBjZWxsSW1waCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgY2VsbEltcGguc2V0QXR0cmlidXRlKCdjbGFzcycsICdxbWNUZE5vQm9yZGVyJyk7XHJcbiAgICAgICAgY2VsbEltcGguaW5uZXJIVE1MID0gcHJpbVRlcm1UYWJsZS5yZW1haW5pbmdWYXJzW2ldLnRvU3RyaW5nKDEwKTtcclxuICAgICAgICBteVJvdy5hcHBlbmRDaGlsZChjZWxsSW1waCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgdmFyIGNlbGxJbXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgIGNlbGxJbXBoLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncW1jVGROb0JvcmRlcicpO1xyXG4gICAgY2VsbEltcGguaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIG15Um93LmFwcGVuZENoaWxkKGNlbGxJbXBoKTtcclxuXHJcblxyXG4gICAgbXlUYWJsZS5hcHBlbmRDaGlsZChteVJvdyk7XHJcbiAgICBcclxuICAgIHZhciBpTWF4ID0gMDtcclxuICAgIGlmKCFwcmltRmxhZykgaU1heCA9IGcuZ3JvdXAubGVuZ3RoOyBlbHNlIGlNYXggPSBwcmltVGVybVRhYmxlLnJlbWFpbmluZ1ByaW1UZXJtcy5sZW5ndGg7XHJcbiAgICBcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaU1heDsgaSsrKSB7XHJcbiAgICAgIHZhciBpbXBsID0gLTE7XHJcbiAgICAgIGlmKCFwcmltRmxhZykgaW1wbCA9IGcuZ3JvdXBbaV07IGVsc2UgaW1wbCA9IHByaW1UZXJtVGFibGUucmVtYWluaW5nUHJpbVRlcm1zW2ldLmltcGxpY2FudDtcclxuICAgICAgdmFyIGJpdHMgPSAwO1xyXG4gICAgICB2YXIgbWFzayA9IGltcGwuYml0TWFzaztcclxuICAgICAgXHJcbiAgICAgIGZvcih2YXIgbSBpbiBpbXBsLmltcCkge1xyXG4gICAgICAgIGJpdHMgPSBpbXBsLmltcFttXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgbXlSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgICBcclxuICAgICAgdmFyIGNlbGwxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTsgICAgICBcclxuICAgICAgdmFyIGNlbGwxU3RyID0gXCJcIjtcclxuICAgICAgdmFyIGZpcnN0ID0gdHJ1ZTtcclxuICAgICAgZm9yKHZhciBtIGluIGltcGwuaW1wKSB7XHJcbiAgICAgICAgaWYoIWZpcnN0KSBjZWxsMVN0ciArPSAgXCIsIFwiO1xyXG4gICAgICAgIGNlbGwxU3RyICs9IGltcGwuaW1wW21dLnRvU3RyaW5nKDEwKTtcclxuICAgICAgICBmaXJzdCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGNlbGwxLmlubmVySFRNTCA9IGNlbGwxU3RyICsgXCI6XCI7XHJcbiAgICAgIGNlbGwxLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncW1jVGROb0JvcmRlcicpO1xyXG4gICAgICBteVJvdy5hcHBlbmRDaGlsZChjZWxsMSk7XHJcbiAgICAgIFxyXG4gICAgICB2YXIgcmVzID0gYml0cy50b1N0cmluZygyKTtcclxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmRhdGEubm9PZlZhcnM7IGorKykge1xyXG4gICAgICAgIHZhciBteUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgIG15Q2VsbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3FtY0JpdCcpO1xyXG4gICAgICAgIHZhciBzdHI7XHJcblxyXG4gICAgICAgIHZhciBjdXJyZW50Qml0ID0gTWF0aC5wb3coMiwgKHRoaXMuZGF0YS5ub09mVmFycyAtIDEpLWopO1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgaWYgKChjdXJyZW50Qml0ICYgbWFzaykgPT09IGN1cnJlbnRCaXQpIHtcclxuICAgICAgICAgIHN0ciA9IFwiLVwiO1xyXG4gICAgICAgICAgbXlDZWxsLmlubmVySFRNTCA9IHN0cjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKGogPj0gKHRoaXMuZGF0YS5ub09mVmFycykgLSByZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHN0ciA9IHJlcy5jaGFyQXQoaiAtICh0aGlzLmRhdGEubm9PZlZhcnMgLSByZXMubGVuZ3RoKSk7XHJcbiAgICAgICAgICAgIG15Q2VsbC5pbm5lckhUTUwgPSBzdHI7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzdHIgPSBcIjBcIjtcclxuICAgICAgICAgICAgbXlDZWxsLmlubmVySFRNTCA9IHN0cjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbXlSb3cuYXBwZW5kQ2hpbGQobXlDZWxsKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICBcclxuICAgICAgaWYgKCFwcmltRmxhZykge1xyXG4gICAgICAgICB2YXIgY2VsbExhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgICBjZWxsTGFzdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3FtY1RkTm9Cb3JkZXInKTtcclxuICAgICAgICBpZiAoaW1wbC5pc1ByaW0pIHtcclxuICAgICAgICAgIGNlbGxMYXN0LmlubmVySFRNTCA9IFwiJiN4MjcxMztcIjsgIC8vZXF1aXZhbGVudCAmY2hlY2s7IGluIG1vc3QgYnJvd3NlcnNcclxuICAgICAgICAgIGlmKGltcGwuaXNPbmx5RG9udENhcmUpe1xyXG4gICAgICAgICAgICBjZWxsTGFzdC5pbm5lckhUTUwgPSBcIiAoJnRpbWVzOylcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjZWxsTGFzdC5pbm5lckhUTUwgPSBcIiZyYXJyO1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBteVJvdy5hcHBlbmRDaGlsZChjZWxsTGFzdCk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGZvciAodmFyIHYgPSAwOyB2IDwgcHJpbVRlcm1UYWJsZS5yZW1haW5pbmdWYXJzLmxlbmd0aDsgdisrKSB7XHJcbiAgICAgICAgICB2YXIgaWkgPSBwcmltVGVybVRhYmxlLnJlbWFpbmluZ1ZhcnNbdl07XHJcbiAgICAgICAgICB2YXIgY2VsbFVzZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgICAgY2VsbFVzZWQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdxbWNQcmltSXRlbSBxbWNCaXQnKTtcclxuICAgICAgICAgIGlmIChpaSBpbiBpbXBsLmltcCkge1xyXG4gICAgICAgICAgICBjZWxsVXNlZC5pbm5lckhUTUwgPSBcIiYjOTY3NTtcIjtcclxuICAgICAgICAgICAgaWYgKGlpIGluIHByaW1UZXJtVGFibGUucmVtYWluaW5nUHJpbVRlcm1zW2ldLm5lZWRlZEJ5VmFyKSB7XHJcbiAgICAgICAgICAgICAgaWYocHJpbVRlcm1UYWJsZS5yZW1haW5pbmdQcmltVGVybXNbaV0ubmVlZGVkQnlWYXJbaWldID09PSB0KSB7XHJcbiAgICAgICAgICAgICAgICBjZWxsVXNlZC5pbm5lckhUTUwgPSBcIjxzcGFuIHN0eWxlPSdjb2xvcjpncmVlbjsnPiYjOTY3OTs8L3NwYW4+XCI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgbXlSb3cuYXBwZW5kQ2hpbGQoY2VsbFVzZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgdmFyIGNlbGxMYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICAgY2VsbExhc3Quc2V0QXR0cmlidXRlKCdjbGFzcycsICdxbWNUZE5vQm9yZGVyJyk7ICAgIFxyXG4gICAgICAgICBjZWxsTGFzdC5pbm5lckhUTUwgPSBwcmltVGVybVRhYmxlLnJlbWFpbmluZ1ByaW1UZXJtc1tpXS5jb2xvcmVkVGVybVN0cmluZzsgIFxyXG4gICAgICAgICBpZihkcmF3UGV0cmlja1ZhcnMpIHtcclxuICAgICAgICAgICB2YXIgcFZhcnMgPSBcIiZuYnNwOyZlcXVpdjsmbmJzcDs8aT5wPC9pPjxzdWI+PHNtYWxsPlwiICsgaSArIFwiPC9zbWFsbD48L3N1Yj5cIjtcclxuICAgICAgICAgICBjZWxsTGFzdC5pbm5lckhUTUwgKz0gcFZhcnM7ICAgICAgICBcclxuICAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICAgXHJcbiAgICAgICAgIG15Um93LmFwcGVuZENoaWxkKGNlbGxMYXN0KTtcclxuICAgICAgfVxyXG4gXHJcbiAgICAgIFxyXG4gICAgICBteVRhYmxlLmFwcGVuZENoaWxkKG15Um93KTtcclxuICAgIH1cclxuXHJcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobXlUYWJsZSk7XHJcbiAgfTtcclxuXHJcblxyXG4gIHRoaXMudXBkYXRlID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgaWYobXlEaXYgPT09IC0xKSByZXR1cm47XHJcblxyXG4gICAgLy8gY2xlYW4gdXBcclxuICAgIHZhciBvbGRJbm5lckRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRpdklkK1wiX2lubmVyRGl2XCIpO1xyXG4gICAgaWYgKG9sZElubmVyRGl2KSBteURpdi5yZW1vdmVDaGlsZChvbGRJbm5lckRpdik7XHJcbiAgICBcclxuICAgIHZhciBteUlubmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBteUlubmVyRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCBkaXZJZCtcIl9pbm5lckRpdlwiKTtcclxuICAgIFxyXG5cclxuICAgIHZhciBteVRydXRoVGFibGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG15VHJ1dGhUYWJsZURpdi5pbm5lckhUTUwgPSBcIjxkaXY+XCIgKyBsYWJlbHNbJ3R0YWJsZSddICsgXCI6PC9kaXY+XCI7XHJcbiAgICBteVRydXRoVGFibGVEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdxbWNUYWJsZUxhYmVsRGl2Jyk7XHJcbiAgICBcclxuICAgIC8vIHJlLWdlbmVyYXRlXHJcbiAgICB2YXIgbXlUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XHJcbiAgICBteVRhYmxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncW1jVGFibGVDbGFzcycpO1xyXG5cclxuICAgIHZhciBteVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICBcclxuICAgIHZhciBjZWxsMWggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpOyAgICAgIFxyXG4gICAgY2VsbDFoLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBjZWxsMWguc2V0QXR0cmlidXRlKCdjbGFzcycsICdxbWNUZE5vQm9yZGVyJyk7XHJcbiAgICBteVJvdy5hcHBlbmRDaGlsZChjZWxsMWgpO1xyXG4gICAgXHJcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuY29sczsgaisrKSB7XHJcbiAgICAgIHZhciBteUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xyXG4gICAgICBpZiAoaiA8IHRoaXMuY29scyAtIDEpIHtcclxuICAgICAgICBteUNlbGwuaW5uZXJIVE1MID0gXCI8aT54PC9pPjxzdWI+PHNtYWxsPlwiICsgKHRoaXMuY29scy0yLWopICsgXCI8L3NtYWxsPjwvc3ViPlwiO1xyXG4gICAgICAgIG15Q2VsbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3FtY0hlYWRlclggcW1jQml0Jyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbXlDZWxsLmlubmVySFRNTCA9IFwiPGk+eTwvaT5cIjtcclxuICAgICAgICBteUNlbGwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdxbWNIZWFkZXJZIHFtY0JpdCcpO1xyXG4gICAgICB9XHJcbiAgICAgIG15Um93LmFwcGVuZENoaWxkKG15Q2VsbCk7XHJcbiAgICB9XHJcbiAgICBteVRhYmxlLmFwcGVuZENoaWxkKG15Um93KTtcclxuICAgXHJcblxyXG4gICBcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcclxuICAgICAgbXlSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgICBcclxuICAgICAgdmFyIGNlbGwxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTsgICAgICBcclxuICAgICAgY2VsbDEuaW5uZXJIVE1MID0gaS50b1N0cmluZygxMCkgKyBcIjpcIjtcclxuICAgICAgY2VsbDEuc2V0QXR0cmlidXRlKCdjbGFzcycsICdxbWNUZE5vQm9yZGVyJyk7XHJcbiAgICAgIG15Um93LmFwcGVuZENoaWxkKGNlbGwxKTtcclxuICAgICAgXHJcbiAgICAgIHZhciByZXMgPSBpLnRvU3RyaW5nKDIpO1xyXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuY29sczsgaisrKSB7XHJcbiAgICAgICAgdmFyIG15Q2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcblxyXG4gICAgICAgIGlmIChqIDwgdGhpcy5jb2xzIC0gMSkgeyAvLyB4IGVsZW1lbnRcclxuICAgICAgICAgIG15Q2VsbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3FtY0JpdCcpO1xyXG4gICAgICAgICAgdmFyIHN0cjtcclxuICAgICAgICAgIGlmIChqID49ICh0aGlzLmNvbHMgLSAxKSAtIHJlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgc3RyID0gcmVzLmNoYXJBdChqIC0gKCh0aGlzLmNvbHMgLSAxKSAtIHJlcy5sZW5ndGgpKTtcclxuICAgICAgICAgICAgbXlDZWxsLmlubmVySFRNTCA9IHN0cjtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN0ciA9IFwiMFwiO1xyXG4gICAgICAgICAgICBteUNlbGwuaW5uZXJIVE1MID0gc3RyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7IC8vIHkgZWxlbWVudFxyXG4gICAgICAgICAgbXlDZWxsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncW1jQml0IHFtY0JpdFknKTtcclxuICAgICAgICAgIG15Q2VsbC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgaSk7XHJcbiAgICAgICAgICBteUNlbGwub25tb3VzZWRvd24gPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICBteUNlbGxNb3VzZURvd24oZXZlbnQpO1xyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICBpZiAodGhpcy5kYXRhLmZ1bmNkYXRhW2ldID09PSAwKSB7XHJcbiAgICAgICAgICAgIG15Q2VsbC5pbm5lckhUTUwgPSBcIjBcIjtcclxuICAgICAgICAgIH0gXHJcbiAgICAgICAgICBpZiAodGhpcy5kYXRhLmZ1bmNkYXRhW2ldID09PSAxKSB7XHJcbiAgICAgICAgICAgIG15Q2VsbC5pbm5lckhUTUwgPSBcIjFcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICh0aGlzLmRhdGEuZnVuY2RhdGFbaV0gPT09IDIpIHtcclxuICAgICAgICAgICAgbXlDZWxsLmlubmVySFRNTCA9IFwiJnRpbWVzO1wiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBteVJvdy5hcHBlbmRDaGlsZChteUNlbGwpO1xyXG4gICAgICB9XHJcbiAgICAgIG15VGFibGUuYXBwZW5kQ2hpbGQobXlSb3cpO1xyXG4gICAgfVxyXG5cclxuICAgIG15VHJ1dGhUYWJsZURpdi5hcHBlbmRDaGlsZChteVRhYmxlKTtcclxuICAgIG15SW5uZXJEaXYuYXBwZW5kQ2hpbGQobXlUcnV0aFRhYmxlRGl2KTtcclxuICAgIFxyXG5cclxuICAgIGZvcih2YXIgaT0wOyBpIDwgdGhpcy5kYXRhLmltcGxpY2FudEdyb3Vwcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgbXlJbXBsaWNhbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgbXlJbXBsaWNhbnREaXYuaW5uZXJIVE1MID0gXCI8ZGl2PlwiKyBsYWJlbHNbJ2ltcGxpJ10gKyBcIiAoXCIgKyBsYWJlbHNbJ29yZGVyJ10gKyBcIiBcIitpK1wiKTo8L2Rpdj5cIjtcclxuICAgICAgbXlJbXBsaWNhbnREaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdxbWNUYWJsZUxhYmVsRGl2Jyk7XHJcbiAgICAgIHRoaXMuZHJhd0ltcGxpY2FudEdyb3VwKHRoaXMuZGF0YS5pbXBsaWNhbnRHcm91cHNbaV0sICBteUltcGxpY2FudERpdiwgZmFsc2UsIDAsIGZhbHNlKTtcclxuICAgICAgbXlJbm5lckRpdi5hcHBlbmRDaGlsZChteUltcGxpY2FudERpdik7IFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAgXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZGF0YS5wcmltVGVybVRhYmxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgcmVzdWx0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGlmKGkgPT09IDAgKSB7XHJcbiAgICAgICAgcmVzdWx0RGl2LmlubmVySFRNTCA9IFwiPHA+XCIgKyBsYWJlbHNbJ3ByaW1DaGFydCddICsgXCI6PC9wXCI7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHJlc3VsdERpdi5pbm5lckhUTUwgPSBcIjxwPiBcIiArbGFiZWxzWydwcmltQ2hhcnRSZWR1Y2VkJ10gKyBcIiBcIiArIChpLTEpICsgXCIpOjwvcD5cIjtcclxuICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICByZXN1bHREaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdxbWNUYWJsZVJlc3VsdERpdicpO1xyXG5cclxuICAgICAgdmFyIGRyYXdQZXRyaWNrVmFycyA9IGZhbHNlO1xyXG4gICAgICBpZih0aGlzLmRhdGEucGV0cmlja1Rlcm1Qcmltcy5sZW5ndGggPiAwICYmIGkgPT09IHRoaXMuZGF0YS5wcmltVGVybVRhYmxlcy5sZW5ndGgtMSkge1xyXG4gICAgICAgIGRyYXdQZXRyaWNrVmFycyA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHRoaXMuZHJhd0ltcGxpY2FudEdyb3VwKHRoaXMuZGF0YS5wcmltVGVybXMsIHJlc3VsdERpdiwgdHJ1ZSwgaSwgZHJhd1BldHJpY2tWYXJzKTtcclxuICAgICAgXHJcbiAgICAgIHZhciBlc3NQVGVybXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgdmFyIGVzc1BUZXJtc1N0ciA9IFwiXCI7XHJcbiAgICAgIHZhciBwcmltVGVybVRhYmxlID0gdGhpcy5kYXRhLnByaW1UZXJtVGFibGVzW2ldO1xyXG4gICAgICB2YXIgamogPSBwcmltVGVybVRhYmxlLmVzc2VudGlhbFByaW1UZXJtcy5sZW5ndGg7XHJcbiAgICAgIGZvcih2YXIgaj0wOyBqIDwgamo7IGorKykge1xyXG4gICAgICAgIGVzc1BUZXJtc1N0ciArPSBwcmltVGVybVRhYmxlLmVzc2VudGlhbFByaW1UZXJtc1tqXS5jb2xvcmVkVGVybVN0cmluZztcclxuICAgICAgICBpZihqICE9PSAoamotMSkpIGVzc1BUZXJtc1N0ciArPSBcIiwgXCI7XHJcbiAgICAgIH1cclxuICAgICAgaWYoamogPiAwKSB7XHJcbiAgICAgICBlc3NQVGVybXNEaXYuaW5uZXJIVE1MID0gXCI8cD5cIiArIGxhYmVsc1snZXh0cmFjdGVkUHJpbXMnXSArXCI6IDxzcGFuIGNsYXNzPSdxbWNNYXRoRm9udCc+XCIgKyBlc3NQVGVybXNTdHIgKyBcIjwvc3Bhbj48L3A+XCI7XHJcbiAgICAgICBlc3NQVGVybXNEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdxbWNJbmRlbnQnKTtcclxuICAgICAgIHJlc3VsdERpdi5hcHBlbmRDaGlsZChlc3NQVGVybXNEaXYpO1xyXG4gICAgICB9XHJcbiAgICAgXHJcbiAgICAgIG15SW5uZXJEaXYuYXBwZW5kQ2hpbGQocmVzdWx0RGl2KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKHRoaXMuZGF0YS5wZXRyaWNrVGVybVByaW1zLmxlbmd0aCA+IDApIHtcclxuICAgICAgdmFyIHBldHJpY2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgcGV0cmlja0Rpdi5pbm5lckhUTUwgPSBcIjxwPiBcIiArIGxhYmVsc1sncGV0cmlja3NNJ10gKyBcIiA8L3A+XCI7XHJcblxyXG4gICAgICB2YXIgcGV0cmlja0lubmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHBldHJpY2tJbm5lckRpdi5pbm5lckhUTUwgPSBcIjxzcGFuIGNsYXNzPSdxbWNNYXRoRm9udCc+XCIgKyB0aGlzLmRhdGEucGV0cmlja1NvbHZlci5sb2cgKyBcIjwvc3Bhbj5cIjtcclxuICAgICAgcGV0cmlja0lubmVyRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncW1jSW5kZW50Jyk7XHJcbiAgICAgIHBldHJpY2tEaXYuYXBwZW5kQ2hpbGQocGV0cmlja0lubmVyRGl2KTtcclxuXHJcbiAgICAgIHZhciBwZXRyaWNrRXNzVGVybXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgdmFyIHBldHJpY2tFc3NUZXJtc1N0ciA9IFwiXCI7XHJcbiAgICAgIHZhciBqaiA9IHRoaXMuZGF0YS5wZXRyaWNrVGVybVByaW1zLmxlbmd0aDtcclxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBqajsgaisrKSB7XHJcbiAgICAgICAgcGV0cmlja0Vzc1Rlcm1zU3RyICs9IHRoaXMuZGF0YS5wZXRyaWNrVGVybVByaW1zW2pdLmNvbG9yZWRUZXJtU3RyaW5nO1xyXG4gICAgICAgIGlmIChqICE9PSAoamogLSAxKSlcclxuICAgICAgICAgIHBldHJpY2tFc3NUZXJtc1N0ciArPSBcIiwgXCI7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGpqID4gMCkge1xyXG4gICAgICAgIHBldHJpY2tFc3NUZXJtc0Rpdi5pbm5lckhUTUwgPSBcIjxwPlwiICsgbGFiZWxzWydleHRyYWN0ZWRNUHJpbXMnXSArIFwiIChcIiArIGxhYmVsc1sncGV0cmlja3NNJ10gKyBcIik6IDxzcGFuIGNsYXNzPSdxbWNNYXRoRm9udCc+XCIgKyBwZXRyaWNrRXNzVGVybXNTdHIgKyBcIjwvc3Bhbj48L3A+XCI7XHJcbiAgICAgICAgcGV0cmlja0Vzc1Rlcm1zRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncW1jSW5kZW50Jyk7XHJcbiAgICAgICAgcGV0cmlja0Rpdi5hcHBlbmRDaGlsZChwZXRyaWNrRXNzVGVybXNEaXYpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAgICBteUlubmVyRGl2LmFwcGVuZENoaWxkKHBldHJpY2tEaXYpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIHZhciB0ZXJtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0ZXJtRGl2LmlubmVySFRNTCA9IFwiPHA+PHN0cm9uZz5cIiArIGxhYmVsc1snbWluRXhwJ10rIFwiOjwvc3Ryb25nPiA8L3A+IDxwID48c3BhbiBjbGFzcz0ncW1jTWF0aEZvbnQnPjxpPnk8L2k+Jm5ic3A7PSZuYnNwO1wiICsgdGhpcy5kYXRhLmNvbG9yZWRNaW5pbWFsVGVybTsgK1wiPC9zcGFuPjwvcD5cIjtcclxuICAgIG15SW5uZXJEaXYuYXBwZW5kQ2hpbGQodGVybURpdik7XHJcbiAgICBteURpdi5hcHBlbmRDaGlsZChteUlubmVyRGl2KTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBteUNlbGxNb3VzZURvd24oZSkge1xyXG5cclxuICAgIHZhciB0YXJnO1xyXG4gICAgaWYgKGUudGFyZ2V0KSB7XHJcbiAgICAgIHRhcmcgPSBlLnRhcmdldDtcclxuICAgIH0gZWxzZSB7IC8vIGRlYWwgd2l0aCBNaWNyb3NvZnRcclxuICAgICAgaWYgKGUuc3JjRWxlbWVudClcclxuICAgICAgICB0YXJnID0gZS5zcmNFbGVtZW50O1xyXG4gICAgfVxyXG4gICAgaWYgKHRhcmcubm9kZVR5cGUgPT09IDMpIHsgLy8gZGVhbCB3aXRoIFNhZmFyaVxyXG4gICAgICB0YXJnID0gdGFyZy5wYXJlbnROb2RlO1xyXG4gICAgfVxyXG4gICAgdmFyIGkgPSBwYXJzZUludCh0YXJnLnRpdGxlKTtcclxuICAgIHRoYXQuZGF0YS5hY3RpdmF0ZWQoaSk7XHJcblxyXG4gICAgdGhhdC51cGRhdGUoKTtcclxuICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcveC5wbmdcIjsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi9rbWFwLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4va21hcC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi9rbWFwLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQge1BvaW50ZXJFdmVudHNQb2x5ZmlsbH0gZnJvbSBcIi4vcG9pbnRlcl9ldmVudHNfcG9seWZpbGxcIjtcclxuaW1wb3J0ICdjbGFzc2xpc3QtcG9seWZpbGwnO1xyXG5cclxuUG9pbnRlckV2ZW50c1BvbHlmaWxsLmluaXRpYWxpemUoKTsiLCIvKlxyXG4gKiBQb2ludGVyIEV2ZW50cyBQb2x5ZmlsbDogQWRkcyBzdXBwb3J0IGZvciB0aGUgc3R5bGUgYXR0cmlidXRlIFwicG9pbnRlci1ldmVudHM6IG5vbmVcIiB0byBicm93c2VycyB3aXRob3V0IHRoaXMgZmVhdHVyZSAobmFtZWx5LCBJRSkuXHJcbiAqIChjKSAyMDEzLCBLZW50IE1ld2hvcnQsIGxpY2Vuc2VkIHVuZGVyIEJTRC4gU2VlIExJQ0VOU0UudHh0IGZvciBkZXRhaWxzLlxyXG4gKi9cclxuXHJcbi8vIGNvbnN0cnVjdG9yXHJcbmV4cG9ydCBjb25zdCBQb2ludGVyRXZlbnRzUG9seWZpbGwgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgICAvLyBzZXQgZGVmYXVsdHNcclxuICAgIHRoaXMub3B0aW9ucyA9IHtcclxuICAgICAgICBzZWxlY3RvcjogJyonLFxyXG4gICAgICAgIG1vdXNlRXZlbnRzOiBbJ2NsaWNrJywnZGJsY2xpY2snLCdtb3VzZWRvd24nLCdtb3VzZXVwJ10sXHJcbiAgICAgICAgdXNlUG9seWZpbGxJZjogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgaWYobmF2aWdhdG9yLmFwcE5hbWUgPT0gJ01pY3Jvc29mdCBJbnRlcm5ldCBFeHBsb3JlcicpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBhZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWdlbnQubWF0Y2goL01TSUUgKFswLTldezEsfVtcXC4wLTldezAsfSkvKSAhPSBudWxsKXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdmVyc2lvbiA9IHBhcnNlRmxvYXQoIFJlZ0V4cC4kMSApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHZlcnNpb24gPCAxMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBpZihvcHRpb25zKXtcclxuICAgICAgICB2YXIgb2JqID0gdGhpcztcclxuICAgICAgICAkLmVhY2gob3B0aW9ucywgZnVuY3Rpb24oayx2KXtcclxuICAgICAgICAgICAgb2JqLm9wdGlvbnNba10gPSB2O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHRoaXMub3B0aW9ucy51c2VQb2x5ZmlsbElmKCkpXHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlcl9tb3VzZV9ldmVudHMoKTtcclxufVxyXG5cclxuLy8gc2luZ2xldG9uIGluaXRpYWxpemVyXHJcblBvaW50ZXJFdmVudHNQb2x5ZmlsbC5pbml0aWFsaXplID0gZnVuY3Rpb24ob3B0aW9ucyl7XHJcbiAgICBpZihQb2ludGVyRXZlbnRzUG9seWZpbGwuc2luZ2xldG9uID09IG51bGwpXHJcbiAgICAgICAgUG9pbnRlckV2ZW50c1BvbHlmaWxsLnNpbmdsZXRvbiA9IG5ldyBQb2ludGVyRXZlbnRzUG9seWZpbGwob3B0aW9ucyk7XHJcbiAgICByZXR1cm4gUG9pbnRlckV2ZW50c1BvbHlmaWxsLnNpbmdsZXRvbjtcclxufTtcclxuXHJcbi8vIGhhbmRsZSBtb3VzZSBldmVudHMgdy8gc3VwcG9ydCBmb3IgcG9pbnRlci1ldmVudHM6IG5vbmVcclxuUG9pbnRlckV2ZW50c1BvbHlmaWxsLnByb3RvdHlwZS5yZWdpc3Rlcl9tb3VzZV9ldmVudHMgPSBmdW5jdGlvbigpe1xyXG4gICAgLy8gcmVnaXN0ZXIgb24gYWxsIGVsZW1lbnRzIChhbmQgYWxsIGZ1dHVyZSBlbGVtZW50cykgbWF0Y2hpbmcgdGhlIHNlbGVjdG9yXHJcbiAgICAkKGRvY3VtZW50KS5vbih0aGlzLm9wdGlvbnMubW91c2VFdmVudHMuam9pbihcIiBcIiksIHRoaXMub3B0aW9ucy5zZWxlY3RvciwgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgaWYoJCh0aGlzKS5jc3MoJ3BvaW50ZXItZXZlbnRzJykgPT0gJ25vbmUnKXtcclxuICAgICAgICAgICAgLy8gcGVhayBhdCB0aGUgZWxlbWVudCBiZWxvd1xyXG4gICAgICAgICAgICB2YXIgb3JpZ0Rpc3BsYXlBdHRyaWJ1dGUgPSAkKHRoaXMpLmNzcygnZGlzcGxheScpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcclxuXHJcbiAgICAgICAgICAgIHZhciB1bmRlcm5lYXRoRWxlbSA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoZS5jbGllbnRYLCBlLmNsaWVudFkpO1xyXG5cclxuICAgICAgICAgICAgaWYob3JpZ0Rpc3BsYXlBdHRyaWJ1dGUpXHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNzcygnZGlzcGxheScsIG9yaWdEaXNwbGF5QXR0cmlidXRlKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2Rpc3BsYXknLCcnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGZpcmUgdGhlIG1vdXNlIGV2ZW50IG9uIHRoZSBlbGVtZW50IGJlbG93XHJcbiAgICAgICAgICAgIGUudGFyZ2V0ID0gdW5kZXJuZWF0aEVsZW07XHJcbiAgICAgICAgICAgICQodW5kZXJuZWF0aEVsZW0pLnRyaWdnZXIoZSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=