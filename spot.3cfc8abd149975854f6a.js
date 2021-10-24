/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/spot/draw.js":
/*!********************************!*\
  !*** ./src/pages/spot/draw.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drawSpot": () => (/* binding */ drawSpot)
/* harmony export */ });
/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals.js */ "./src/pages/spot/globals.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var lowerLegColor = "rgb(50,50,50)";
function drawSpot(cameraX, cameraY, xMeters, yMeters, chassisAngle, shoulderAngle, hipAngle, elbowAngle, kneeAngle, ctxFG) {
  ctxFG.save();
  ctxFG.translate(xMeters * _globals_js__WEBPACK_IMPORTED_MODULE_0__.metersToPixels + cameraX, yMeters * _globals_js__WEBPACK_IMPORTED_MODULE_0__.metersToPixels + cameraY);
  ctxFG.rotate(chassisAngle);
  ctxFG.save();
  drawPoly(_globals_js__WEBPACK_IMPORTED_MODULE_0__.chassisPtsDraw, "yellow", ctxFG, "black"); // ctxFG.rotate(shoulderAngle - chassisAngle)

  ctxFG.rotate(shoulderAngle);
  drawPoly(_globals_js__WEBPACK_IMPORTED_MODULE_0__.upperLegPtsDraw, "yellow", ctxFG, "black");
  ctxFG.translate.apply(ctxFG, _toConsumableArray(_globals_js__WEBPACK_IMPORTED_MODULE_0__.kneePtDraw)); // ctxFG.rotate(elbowAngle - shoulderAngle)

  ctxFG.rotate(elbowAngle);
  drawPoly(_globals_js__WEBPACK_IMPORTED_MODULE_0__.lowerLegPtsDraw, lowerLegColor, ctxFG, "black");
  drawFoot(lowerLegColor, ctxFG);
  ctxFG.translate.apply(ctxFG, _toConsumableArray(_globals_js__WEBPACK_IMPORTED_MODULE_0__.hipPtDraw)); // ctxFG.rotate(hipAngle - chassisAngle)

  ctxFG.rotate(hipAngle);
  drawPoly(_globals_js__WEBPACK_IMPORTED_MODULE_0__.upperLegPtsDraw, "yellow", ctxFG, "black");
  ctxFG.translate.apply(ctxFG, _toConsumableArray(_globals_js__WEBPACK_IMPORTED_MODULE_0__.kneePtDraw)); // ctxFG.rotate(kneeAngle - hipAngle)

  ctxFG.rotate(kneeAngle);
  drawPoly(_globals_js__WEBPACK_IMPORTED_MODULE_0__.lowerLegPtsDraw, lowerLegColor, ctxFG);
  drawFoot(lowerLegColor, ctxFG);
}

function drawPoly(pts, color, ctxFG, strokeColor) {
  ctxFG.beginPath();
  ctxFG.moveTo(pts[0], pts[1]);

  for (var i = 2; i < pts.length; i += 2) {
    ctxFG.lineTo(pts[i], pts[i + 1]);
  }

  ctxFG.lineTo(pts[0], pts[1]);
  ctxFG.fillStyle = color;
  ctxFG.fill();
  ctxFG.strokeStyle = strokeColor;
  ctxFG.stroke();
}

function drawFoot(color, ctxFG) {
  ctxFG.fillStyle = color;
  ctxFG.translate.apply(ctxFG, _toConsumableArray(_globals_js__WEBPACK_IMPORTED_MODULE_0__.anklePtDraw));
  ctxFG.beginPath();
  ctxFG.arc(0, 0, _globals_js__WEBPACK_IMPORTED_MODULE_0__.footRadiusDraw, 0, 2 * Math.PI);
  ctxFG.fill();
  ctxFG.strokeStyle = "rgb(150,150,150)";
  ctxFG.stroke();
  ctxFG.restore();
}

/***/ }),

/***/ "./src/pages/spot/globals.js":
/*!***********************************!*\
  !*** ./src/pages/spot/globals.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nWorkers": () => (/* binding */ nWorkers),
/* harmony export */   "popsizeMultiplier": () => (/* binding */ popsizeMultiplier),
/* harmony export */   "epLen": () => (/* binding */ epLen),
/* harmony export */   "cmaSigma": () => (/* binding */ cmaSigma),
/* harmony export */   "displayCreatureCount": () => (/* binding */ displayCreatureCount),
/* harmony export */   "w": () => (/* binding */ w),
/* harmony export */   "h": () => (/* binding */ h),
/* harmony export */   "ts": () => (/* binding */ ts),
/* harmony export */   "metersToPixels": () => (/* binding */ metersToPixels),
/* harmony export */   "b2GroundH": () => (/* binding */ b2GroundH),
/* harmony export */   "b2GroundW": () => (/* binding */ b2GroundW),
/* harmony export */   "canvasGroundH": () => (/* binding */ canvasGroundH),
/* harmony export */   "shoulderHMeters": () => (/* binding */ shoulderHMeters),
/* harmony export */   "cameraOffset": () => (/* binding */ cameraOffset),
/* harmony export */   "cameraInitY": () => (/* binding */ cameraInitY),
/* harmony export */   "upperLegPts": () => (/* binding */ upperLegPts),
/* harmony export */   "upperLegPtsDraw": () => (/* binding */ upperLegPtsDraw),
/* harmony export */   "kneePt": () => (/* binding */ kneePt),
/* harmony export */   "kneePtDraw": () => (/* binding */ kneePtDraw),
/* harmony export */   "lowerLegPts": () => (/* binding */ lowerLegPts),
/* harmony export */   "lowerLegPtsDraw": () => (/* binding */ lowerLegPtsDraw),
/* harmony export */   "anklePt": () => (/* binding */ anklePt),
/* harmony export */   "anklePtDraw": () => (/* binding */ anklePtDraw),
/* harmony export */   "footRadius": () => (/* binding */ footRadius),
/* harmony export */   "footRadiusDraw": () => (/* binding */ footRadiusDraw),
/* harmony export */   "chassisPts": () => (/* binding */ chassisPts),
/* harmony export */   "chassisPtsDraw": () => (/* binding */ chassisPtsDraw),
/* harmony export */   "hipPt": () => (/* binding */ hipPt),
/* harmony export */   "hipPtDraw": () => (/* binding */ hipPtDraw),
/* harmony export */   "upperLegLimits": () => (/* binding */ upperLegLimits),
/* harmony export */   "upperLegMaxTorque": () => (/* binding */ upperLegMaxTorque),
/* harmony export */   "lowerLegLimits": () => (/* binding */ lowerLegLimits),
/* harmony export */   "lowerLegMaxTorque": () => (/* binding */ lowerLegMaxTorque),
/* harmony export */   "maxSpeed": () => (/* binding */ maxSpeed),
/* harmony export */   "maxSpeedDiff": () => (/* binding */ maxSpeedDiff),
/* harmony export */   "nJointAngleBins": () => (/* binding */ nJointAngleBins),
/* harmony export */   "uniformDistBinCount": () => (/* binding */ uniformDistBinCount),
/* harmony export */   "rollingWindow": () => (/* binding */ rollingWindow),
/* harmony export */   "targetVelX": () => (/* binding */ targetVelX),
/* harmony export */   "cmaMeanInit": () => (/* binding */ cmaMeanInit)
/* harmony export */ });
var nWorkers = 4,
    popsizeMultiplier = 4,
    epLen = 4000,
    cmaSigma = 0.1,
    displayCreatureCount = 16;
var w = 800,
    h = 400,
    ts = 1 / 60,
    metersToPixels = 400,
    b2GroundH = 0,
    b2GroundW = 300,
    canvasGroundH = 40,
    // shoulderHMeters = -0.4932,
shoulderHMeters = -0.55,
    // cameraW = 0.5 * w,
cameraOffset = 300,
    cameraInitY = h - canvasGroundH,
    upperLegPts = [0.2518, -0.2119, -0.0261, 0.073, -0.0795, 0.0168, 0.2209, -0.2437],
    upperLegPtsDraw = upperLegPts.map(function (x) {
  return -x * metersToPixels;
}),
    kneePt = [0.2239, -0.2159],
    kneePtDraw = kneePt.map(function (x) {
  return -metersToPixels * x;
}),
    // lowerLegPts = [
//   0.047, 0.0206, 0.0169, 0.0468, -0.2457, -0.2391, -0.2213, -0.2602,
// ],
// lowerLegPts = [
//   0.047, 0.0206, 0.0169, 0.0468, -0.2166, -0.2074, -0.1917, -0.2292,
// ],
lowerLegPts = [0.047, 0.0206, 0.0169, 0.0468, -0.1942, -0.1833, -0.1693, -0.2051],
    lowerLegPtsDraw = lowerLegPts.map(function (x) {
  return -x * metersToPixels;
}),
    anklePt = [0.2247, 0.2419],
    anklePtDraw = anklePt.map(function (x) {
  return x * metersToPixels;
}),
    footRadius = 0.035402,
    // footRadius = 0.05,
footRadiusDraw = metersToPixels * footRadius,
    // density = 1,
// friction = 0.95,
// restitution = 0.1,
chassisPts = [0.6962, -0.0616, 0.7071, 0.0672, -0.1433, 0.074, -0.0822, -0.0873],
    chassisPtsDraw = chassisPts.map(function (x) {
  return -x * metersToPixels;
}),
    hipPt = [0.5838, 0],
    hipPtDraw = hipPt.map(function (x) {
  return -metersToPixels * x;
}),
    // upperLegLimits = [-0.3 * Math.PI, 0.15 * Math.PI],
upperLegLimits = [-0.35 * Math.PI, 0.15 * Math.PI],
    // upperLegMaxTorque = 1.0,
upperLegMaxTorque = 1.0,
    // lowerLegLimits = [-0.35 * Math.PI, 0.08 * Math.PI],
lowerLegLimits = [-0.35 * Math.PI, 0.15 * Math.PI],
    // lowerLegMaxTorque = 0.8,
lowerLegMaxTorque = 1.0,
    // maxSpeed = 5,
maxSpeed = 6,
    // maxSpeed = 3,
maxSpeedDiff = 1.0,
    nJointAngleBins = 100,
    uniformDistBinCount = epLen / nJointAngleBins,
    rollingWindow = 8,
    targetVelX = 1;
var cmaMeanInit = Float32Array.from([-4.657745361328125, -1.3866255283355713, -12.033345222473145, 3.310786247253418, 3.264359712600708, 4.369760036468506, 1.4250590801239014, 2.8595685958862305, -5.266165733337402, 8.023561477661133, 5.1022629737854, -11.662016868591309, -8.738048553466797, -8.631733894348145, 13.163140296936035, 9.408528327941895, 14.510215759277344, -9.578883171081543, -3.825205087661743, -13.517670631408691, 11.657623291015625, 4.42660665512085, -5.160345554351807, -10.382041931152344, -13.557269096374512, 4.109170436859131, 14.763008117675781, -10.612492561340332, 11.547207832336426, -8.73119068145752, 0.6397029757499695, -11.035240173339844, 3.2561047077178955, -5.910154819488525, -5.295793056488037, -1.017529010772705, 3.7499659061431885, -2.769634246826172, 4.087189197540283, 3.7802345752716064, -3.6115081310272217, 2.3060386180877686, -15.15159797668457, -8.573238372802734, -2.535712957382202, -2.317251205444336, -10.47507381439209, 10.279909133911133, -2.203740358352661, -4.604831695556641, -0.6054303050041199, -3.111947536468506, -1.2757933139801025, -12.381153106689453, 3.7812371253967285, 8.251448631286621, 10.71847915649414, 1.2502961158752441, -3.8949766159057617, 14.169062614440918, 8.993315696716309, -0.11049257963895798, 0.3913384974002838, 1.1717170476913452, 3.075956106185913, -2.603727102279663, 0.428038090467453, -2.320542812347412, -0.42455777525901794, 1.9024797677993774, 3.6540822982788086, 7.071680545806885, 4.711944580078125, 0.04070279747247696, -4.033210277557373, 2.694281578063965, -4.105454444885254, -1.750751256942749, -9.691014289855957, 9.282195091247559, -12.753439903259277, 2.118377923965454, 1.817147135734558, -3.2775330543518066, -5.367528915405273, -9.767395973205566, 4.906717300415039, 3.555147886276245, 3.338860511779785, 8.10708999633789, -12.131606101989746, -14.435002326965332, -1.216173529624939, -2.7268712520599365, -0.5501744151115417, -0.5982435345649719, -8.675766944885254, 12.129179000854492, 13.321590423583984, 21.536325454711914, -14.990818977355957, 8.94437026977539, -11.005807876586914, 10.580887794494629, -8.59623908996582, -1.67684805393219, 11.130093574523926, 9.13935661315918, 8.126432418823242, 1.8388720750808716, 6.117777347564697, -18.695981979370117, 7.778489112854004, 2.3785624504089355, 8.21226978302002, -1.6288907527923584, -6.489264011383057, 6.354172706604004, 0.20291058719158173, 7.733358860015869, -5.356312274932861, 7.871093273162842, -6.738729476928711, -14.664938926696777, 7.2750043869018555, -9.733050346374512, 17.329309463500977, -3.231701374053955, -3.1386191844940186, 0.509166419506073, -9.532939910888672, 4.207180023193359, -4.592642307281494, -0.4854167401790619, -10.454553604125977, -7.909143924713135, 1.7593003511428833, -10.906351089477539, -3.1363136768341064, -6.738506317138672, -6.156559944152832, -8.555266380310059, 11.617069244384766, 21.43716812133789, 2.7397632598876953, 8.600813865661621, -2.1742053031921387, 2.7142374515533447, -12.670181274414062, 4.6694841384887695, 7.310868263244629, 7.267244338989258, 10.467803001403809, -8.718870162963867, 16.028249740600586, -3.980930805206299, 1.2530678510665894, -8.145532608032227, -5.84381103515625, 16.006938934326172, 6.182781219482422, 4.672645568847656, -10.142325401306152, 7.643786430358887, 5.378488063812256, -5.84293794631958, 10.383304595947266, 2.7052197456359863, -12.104555130004883, 1.5571098327636719, 3.05548357963562, -12.299128532409668, -4.351644515991211, 4.644934177398682, -3.7897801399230957, -13.592243194580078, -7.878691673278809, 2.3208110332489014, -1.269008755683899, 3.456331491470337, -1.00554358959198, -1.2910867929458618, 1.9645347595214844, -8.742115020751953, -12.250194549560547, -0.6367547512054443, 6.929580211639404, -15.39238166809082, 9.230452537536621, -0.29803627729415894, 0.2865097224712372, -15.359959602355957, 8.203083038330078, 2.677522897720337, -16.21235466003418, -14.001925468444824, -12.657628059387207, -4.87373161315918, 12.668987274169922, -8.355598449707031, 4.4004082679748535, 3.5241713523864746, 1.0906120538711548, -0.3535153269767761, 2.3466882705688477, 4.753189563751221, 2.583059787750244, -8.093052864074707, 8.707534790039062, -0.6551088094711304, 8.082423210144043, -3.066342353820801, -12.396215438842773, 2.9383163452148438, 4.545548915863037, 1.501207947731018, -3.643289804458618, -2.129004955291748, 12.645214080810547, 0.6097874045372009, 0.4528854489326477, -12.836543083190918, -4.224125862121582, 0.25839629769325256, 0.9877028465270996, 7.081573009490967, 4.254159450531006, 15.779052734375, 12.020941734313965, -2.9140267372131348, -8.780303001403809, 10.989602088928223, -0.9242197871208191, 5.177490711212158, -4.585804462432861, -1.1005823612213135, -3.2037081718444824, -6.601403713226318, -13.655411720275879, 4.607207775115967, -1.476365089416504, -4.492757320404053, 9.881695747375488, 5.374475479125977, -2.635796070098877, -5.279156684875488, -4.070379257202148, -9.445215225219727, -9.202306747436523, 3.960397958755493, 1.9396755695343018, -15.519197463989258, -21.521739959716797, 6.207977771759033, -0.8380711674690247, -11.006186485290527, 5.487262725830078, 10.41186237335205, -2.8281869888305664, -3.848121404647827, -7.3082356452941895, 14.638585090637207, -5.521474361419678, -0.15181775391101837, 8.547465324401855, -6.023309707641602, -9.475427627563477, 4.368182182312012, 0.21612803637981415, -15.808575630187988, 20.51692771911621, 0.5301616191864014, -4.7148871421813965, 2.6670289039611816, 7.390977382659912, 7.1696062088012695, 2.4439947605133057, 1.6447376012802124, 9.506770133972168, 7.802790641784668, -0.2829080820083618, 6.100233554840088, -6.330566883087158, 9.558208465576172, 8.117594718933105, -3.647128105163574, 2.548192024230957, -5.933753490447998, 13.955277442932129, -14.9644193649292, 15.48812198638916, 2.196767807006836, 5.614635467529297, 8.411149978637695, -5.34518575668335, 1.8592725992202759, -2.9845306873321533, -1.7148702144622803, 15.863645553588867, 15.40249252319336, 4.121094703674316, 4.110169410705566, -9.778337478637695, -4.968455791473389, -8.524145126342773, -1.4454156160354614, 2.7117793560028076, 13.134766578674316, 6.1955037117004395, 9.001842498779297, -1.9725086688995361, -6.532043933868408, -5.131644248962402, 0.9902943968772888, -3.2992684841156006, -1.494798183441162, 4.829473495483398, 5.720550060272217, 8.581337928771973, -7.674528121948242, -5.0322489738464355, -1.352853775024414, 8.100107192993164, 8.475318908691406, -1.0600837469100952, 6.614287376403809, -7.958450794219971, -13.837203979492188, -1.5987281799316406, -1.3100394010543823, -0.7386565804481506, -7.370744705200195, 3.7110559940338135, -19.602834701538086, 7.135417938232422, -7.099925518035889, 0.797129213809967, 11.537450790405273, -6.04085636138916, 4.334213733673096, 0.3924579620361328, -18.92581558227539, 3.682396411895752, 2.9526734352111816, 6.168929100036621, -0.9339762330055237, 0.5923511385917664, -7.610025882720947, -2.664696455001831, -7.378530979156494, 3.6094117164611816, 2.1174397468566895, 1.1990514993667603, -11.850831985473633, 4.098474979400635, -9.661742210388184, -1.6567494869232178, 6.943885326385498, 7.252347469329834, 8.248005867004395, -17.12749671936035, -13.258204460144043, -0.3322802782058716, -15.56558609008789, -14.646713256835938, 15.994047164916992, -3.1063385009765625, -7.737937927246094, 6.010456562042236, -3.551220655441284, 7.92426061630249, 1.137144923210144, -9.14099407196045, -6.783447265625, 8.891838073730469, 7.173715591430664, 5.488510608673096, -13.226410865783691, 15.678061485290527, -1.5670294761657715, -2.4145238399505615, -10.081132888793945, -4.824934005737305, 8.457667350769043, -7.654112815856934, 1.2229187488555908, -4.738175868988037, -9.77851676940918, 5.729738712310791, 0.11308012157678604, -0.8038052916526794, -28.861968994140625, 1.1556044816970825, -3.206632137298584, -10.294421195983887, 0.142990842461586, -3.8698456287384033, -0.5114477276802063, 9.765935897827148, -2.491237163543701, -1.7780842781066895, 4.0799455642700195, -24.110252380371094, -3.711155652999878, 8.413335800170898, -13.976852416992188, 7.98535680770874, -1.1509472131729126, 10.581082344055176, 0.9087067246437073, -1.4719884395599365, -0.9178904891014099, -7.566404342651367, -14.06944751739502, 3.711322546005249, 0.2436501532793045, -1.7423521280288696, -12.43548583984375, 9.207294464111328, 8.730647087097168, -14.62609577178955, -0.22389574348926544, 20.83498764038086, -6.167695999145508, 0.560858428478241, 20.46656608581543, 13.165373802185059, -0.415301114320755, 1.5407185554504395, 5.902239799499512, 0.19024346768856049, -2.5397915840148926, -8.048541069030762, 1.0621768236160278, -4.2436842918396, 1.8910211324691772, -3.9996795654296875, -3.864471912384033, -1.5268614292144775, -11.168912887573242, -8.046788215637207, 1.5225023031234741, -7.670288562774658, -1.4101239442825317, -1.3172975778579712, -0.20299029350280762, -7.9431939125061035, 2.4284234046936035, -7.027848720550537, 1.6463345289230347, 5.060003757476807, -9.163565635681152, 0.5385441184043884, 4.486132621765137, 2.234252452850342, -2.045048475265503, -1.3804905414581299, -4.115851879119873, 6.080038070678711, 4.20335578918457, 2.003678321838379, -0.6967311501502991, 2.5457093715667725, -0.8599109649658203, -17.385412216186523, 9.456475257873535, -4.250700950622559, 13.755253791809082, -21.372779846191406, 1.8380119800567627, 6.02418851852417, -8.589399337768555, 11.958146095275879, 2.650796413421631, -11.182587623596191, 7.026295185089111, -5.9266510009765625, -17.39790153503418, -11.64460277557373, -10.541739463806152, -14.676935195922852, 4.428016185760498, 5.551878929138184, 5.647244453430176, -5.51271915435791, 5.103479862213135, 1.309457778930664, -5.742668151855469, -4.853992462158203, -7.708204746246338, 1.7129220962524414, 1.0103007555007935, -14.287549018859863, 8.537672996520996, -9.676522254943848, 7.508896350860596, -2.774013042449951, -1.5682681798934937, 15.529816627502441, -0.21364443004131317, 0.8824161291122437, 4.8035807609558105, 8.650884628295898, -8.82285213470459, 10.914685249328613, 16.36712074279785, 3.1701066493988037, 18.7506160736084, 4.673903465270996, 7.120995044708252, 4.525777339935303, -0.6950621604919434, -2.1989433765411377, -8.64819049835205, -13.839737892150879, 8.77845287322998, -18.26900863647461, -15.739385604858398, 1.2461168766021729, -5.35841178894043, 6.933792591094971, -1.3367433547973633, 5.565414905548096, -0.820067822933197, 7.04618501663208, -6.7162861824035645, -4.3323187828063965, -7.687788963317871, -20.3233699798584, 2.050381898880005, 18.850521087646484, -5.144291877746582, -2.935210943222046, 2.3162240982055664, -0.2553967535495758, 12.227867126464844, 14.42087459564209, 19.262554168701172, 6.8200364112854, -6.533962726593018, -13.903209686279297, -6.003807067871094, 4.218234062194824, -13.22422981262207, -10.808931350708008, -8.494077682495117, 15.517051696777344, 3.6454179286956787, -6.3536376953125, 14.126588821411133, 5.739182472229004, -0.03323923423886299, -1.6552973985671997, -14.808792114257812, 6.490632057189941, 13.673150062561035, -0.39209386706352234, -12.013628005981445, 0.055104635655879974, 11.531034469604492, -11.332298278808594, 0.31321850419044495, -0.1822877675294876, -3.4709017276763916, 10.883585929870605, -7.08734130859375, 13.164807319641113, 5.085231304168701, -7.5312395095825195, -1.6841111183166504, 0.4030313193798065, -4.769532680511475, -0.11873975396156311, 12.308802604675293, 2.342275619506836, -9.27330493927002, -5.339302062988281, 4.139087200164795, -3.0304272174835205, 3.4695582389831543, 8.367120742797852, -7.243118762969971, -19.449159622192383, 4.913900852203369, 0.5197740793228149, 21.65508270263672, -12.683976173400879, -3.5555543899536133, -0.25713467597961426, 14.36147403717041, -16.711732864379883, 2.922095775604248, -3.638378143310547, -1.4777706861495972, 24.507598876953125, 1.4436708688735962, 2.4150290489196777, -8.775728225708008, -7.442809104919434, 10.00777816772461, -11.51144790649414, 7.699141025543213, -8.31843376159668, 0.08280333131551743, -10.683311462402344, 0.6819412112236023, 2.0884437561035156, -1.75669264793396, -12.183501243591309, -9.919581413269043, -0.2958821952342987, 2.89178729057312, -2.8669090270996094, -7.690389156341553, 0.16158463060855865, -8.105830192565918, 2.578279733657837, -4.828826427459717, -1.8003343343734741, 5.197546005249023, 6.30916166305542, -3.772552251815796, -3.674820899963379, -6.694810390472412, 1.8506615161895752, 4.432969093322754, -15.09813117980957, -6.903271198272705, 6.642515659332275, 6.442625045776367, -6.794097900390625, -7.57397985458374, -3.526214599609375, 0.8804994821548462, -15.415545463562012, 1.050238847732544, -4.190955638885498, -4.584449291229248, -10.446924209594727, 10.535743713378906, 0.8186288475990295, 1.2042502164840698, 2.6767995357513428, -3.8851709365844727, 0.05652117729187012, -0.5072010159492493, -0.5986729860305786, -8.161643981933594, -3.915616035461426, 1.1772757768630981, 5.117048740386963, -1.3170276880264282, 1.6591476202011108, 5.940207004547119, -2.933765172958374, -1.4955648183822632, -6.059222221374512, -9.129839897155762, 1.4499413967132568, 6.890272617340088, -5.590106964111328, 1.992922306060791, -1.556068778038025, -0.060235556215047836, -0.8334713578224182, -5.306826591491699, -10.00778865814209, -3.787116050720215, -7.073084831237793, -6.007552146911621, -6.061801433563232, 2.999391794204712, -2.7466084957122803, -0.7428988218307495, 0.9037715196609497, 4.020101070404053, 4.329568386077881, -1.5898993015289307, -4.636168479919434, -10.890979766845703, 4.162439823150635, -7.273852825164795, -3.142735004425049, -7.932313442230225, 0.9113547801971436, -4.074224472045898, 4.5482025146484375, -2.0781569480895996, 0.6627838015556335, 1.759673833847046, -3.99275279045105, 5.874792575836182, 2.368485450744629, -3.2039597034454346, 13.243815422058105, 15.285905838012695, -5.684516906738281, -9.663240432739258, -1.0453276634216309, 1.231655478477478, 0.16887205839157104, -7.82719087600708, 0.6288763880729675, -4.188246726989746, -4.05418586730957, 3.4344370365142822, -5.686745643615723, 8.752174377441406, 11.750144958496094, -7.059301853179932, -3.2832720279693604, 3.0851643085479736, -1.0833642482757568, 1.365922451019287, -5.8299150466918945, 12.850386619567871, -5.594422340393066, 6.998571395874023, -9.0920991897583, 2.601287364959717, -7.402061462402344, 6.9816508293151855, 13.632552146911621, -3.9575746059417725, 2.0844013690948486, -5.559206008911133, -1.8723957538604736, -5.462682723999023, -4.012219429016113, 1.569908857345581, -5.115901470184326, -4.156540870666504, -5.549752712249756, -7.446072101593018, -8.501460075378418, 1.3229929208755493, -3.6014344692230225, -2.5985639095306396, -10.310277938842773, -14.360136985778809, -1.2538714408874512, -2.2566909790039062, -6.144384860992432, -6.274656772613525, 9.603487968444824, 2.2446889877319336, -0.16247043013572693, -3.106379508972168, 1.6288573741912842, 3.402287721633911, 2.2377817630767822, 7.7558488845825195, 3.6815993785858154, -0.0385269932448864, -2.617367744445801, -7.702469825744629, 5.486609935760498, 3.8867247104644775, 5.19602632522583, -3.293642997741699, 1.4901236295700073, 7.45111083984375, -5.852760314941406, -6.543854713439941, -3.2035274505615234, -1.4230120182037354, -2.733717441558838, -7.367424488067627, -5.069348335266113, -1.507745385169983, 5.621237754821777, 0.12361299246549606, 4.1097588539123535, 9.111923217773438, 3.1223766803741455, -2.582115650177002, -0.9857618808746338, -5.163644313812256, 5.304024696350098, -3.8373098373413086, 1.5124136209487915, -0.3078736960887909, -1.4993782043457031, -6.94023323059082, 2.3735392093658447, 4.099696636199951, 3.596930980682373, 1.3679147958755493, -4.278464317321777, 5.535072326660156, 1.2081999778747559, -5.015822410583496, -7.199364185333252, 5.298942565917969, -0.9253684878349304, 2.680299758911133, -3.333249092102051, -0.4188886880874634, -8.440831184387207, 4.018220901489258, -11.808876991271973, 1.202810525894165, 2.5708138942718506, -5.612508773803711, 2.2452054023742676, -4.541054725646973, -1.3240126371383667, 12.412901878356934, -10.735472679138184, -12.242737770080566, 3.627807140350342, -11.349102973937988, -16.35799789428711, 1.2977583408355713, 12.223645210266113, -6.677186012268066, -6.659238338470459, 1.4049166440963745, -2.107534170150757, 4.698306560516357, 4.756213188171387, -1.4964218139648438, 17.278366088867188, 7.909180164337158, -5.091513156890869, -6.20597505569458, -21.15599250793457, 10.844690322875977]);

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pages/spot/index.css":
/*!**********************************!*\
  !*** ./src/pages/spot/index.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + {"src_pages_spot_cma-worker_js":"7e78a458c5599a6684c7","src_pages_spot_b2d-worker_js":"708527741a21f5e3910f"}[chunkId] + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"spot": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************************!*\
  !*** ./src/pages/spot/index.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals.js */ "./src/pages/spot/globals.js");
/* harmony import */ var _draw_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./draw.js */ "./src/pages/spot/draw.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

__webpack_require__(/*! ../../main.css */ "./src/main.css");

__webpack_require__(/*! ./index.css */ "./src/pages/spot/index.css");



var creaturesPerWorker,
    // positionsHistory,
// cameraX = cameraInitX,
// weightCount,
// biasCount,
// popsize,
scoreSolutionInfos = [],
    scoresReceived = 0,
    historiesReceived = 0,
    currentHistory = 0,
    nextHistory = 1,
    looping = false;
var simulationWorkers = [],
    drawHistories = [new Float32Array(_globals_js__WEBPACK_IMPORTED_MODULE_0__.displayCreatureCount * _globals_js__WEBPACK_IMPORTED_MODULE_0__.epLen * 7), new Float32Array(_globals_js__WEBPACK_IMPORTED_MODULE_0__.displayCreatureCount * _globals_js__WEBPACK_IMPORTED_MODULE_0__.epLen * 7)]; // workerHistory = new Int8Array(epLen).fill(0),

var canvasFG = document.getElementById("canvas-fg"),
    ctxFG = canvasFG.getContext("2d"),
    canvasBG = document.getElementById("canvas-bg"),
    ctxBG = canvasBG.getContext("2d"),
    canvasTerrain = document.getElementById("canvas-terrain"),
    ctxTerrain = canvasTerrain.getContext("2d"),
    canvasDiv = document.getElementById("canvas-div");
canvasDiv.setAttribute("style", "height:".concat(_globals_js__WEBPACK_IMPORTED_MODULE_0__.h + 10, "px;"));
canvasFG.width = _globals_js__WEBPACK_IMPORTED_MODULE_0__.w;
canvasFG.height = _globals_js__WEBPACK_IMPORTED_MODULE_0__.h;
canvasBG.width = _globals_js__WEBPACK_IMPORTED_MODULE_0__.w;
canvasBG.height = _globals_js__WEBPACK_IMPORTED_MODULE_0__.h;
var terrainH = 40;
canvasTerrain.width = _globals_js__WEBPACK_IMPORTED_MODULE_0__.w;
canvasTerrain.height = terrainH;
canvasTerrain.setAttribute("style", "top:".concat(_globals_js__WEBPACK_IMPORTED_MODULE_0__.h, "px;"));
ctxBG.fillStyle = "skyblue";
ctxBG.fillRect(0, 0, _globals_js__WEBPACK_IMPORTED_MODULE_0__.w, _globals_js__WEBPACK_IMPORTED_MODULE_0__.h);
ctxBG.fillStyle = "green";
ctxBG.fillRect(0, _globals_js__WEBPACK_IMPORTED_MODULE_0__.cameraInitY - 2, _globals_js__WEBPACK_IMPORTED_MODULE_0__.w, _globals_js__WEBPACK_IMPORTED_MODULE_0__.h);
var cma_worker = new Worker(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u("src_pages_spot_cma-worker_js"), __webpack_require__.b));
var cmaInitialized = false;
var stepsDisplayed = 0;

var _loop = function _loop(i) {
  var simulation_worker = new Worker(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u("src_pages_spot_b2d-worker_js"), __webpack_require__.b));

  simulation_worker.onmessage = function (e) {
    var _e$data2 = _slicedToArray(e.data, 2),
        info = _e$data2[0],
        msg = _e$data2[1]; // if (info == "positions") {
    //   const step = msg[msg.length - 1]
    //   for (let j = 0; j < msg.length - 1; j++) {
    //     positionsHistory[(msg.length - 1) * (i + nWorkers * step) + j] = msg[j]
    //   }
    //   workerHistory[step]++
    //   if (workerHistory[step] > nWorkers) {
    //     workerHistory[step] -= nWorkers
    //   }
    //   // } else if (["solutionsScores", "scoreInfos"].includes(info)) {
    // } else


    if (info == "scoreSolutionInfo") {
      for (var j = 0; j < creaturesPerWorker; j++) {
        scoreSolutionInfos[i * creaturesPerWorker + j] = msg[j];
      }

      scoresReceived++;

      if (scoresReceived == _globals_js__WEBPACK_IMPORTED_MODULE_0__.nWorkers) {
        processScores();
      }
    } else if (info == "initInfo" && !cmaInitialized) {
      creaturesPerWorker = msg.creaturesPerWorker;
      console.log("wt count", msg.weightCount);
      console.log("bias count", msg.biasCount); // weightCount = msg.weightCount
      // biasCount = msg.biasCount
      // popsize = creaturesPerWorker * nWorkers
      //   n_dim = msg.n_dim

      cma_worker.postMessage(["initInfo", msg]); // positionsHistory = new Float32Array(
      //   7 * creaturesPerWorker * nWorkers * epLen
      // )

      cmaInitialized = true;
    } else if (info == "drawHistory") {
      var rank = msg.rank,
          history = msg.history;
      saveHistory(history, rank);
      historiesReceived++;

      if (historiesReceived == _globals_js__WEBPACK_IMPORTED_MODULE_0__.displayCreatureCount) {
        stepsDisplayed = 0;
        swapHistory();
        historiesReceived = 0;

        if (!looping) {
          looping = true;
          requestAnimationFrame(loop);
        }
      }
    }
  };

  simulationWorkers.push(simulation_worker);
};

for (var i = 0; i < _globals_js__WEBPACK_IMPORTED_MODULE_0__.nWorkers; i++) {
  _loop(i);
}

for (var _i = 0, _simulationWorkers = simulationWorkers; _i < _simulationWorkers.length; _i++) {
  var worker = _simulationWorkers[_i];
  worker.postMessage(["start"]);
}

cma_worker.onmessage = function (e) {
  var _e$data = _slicedToArray(e.data, 2),
      info = _e$data[0],
      msg = _e$data[1];

  if (info == "solutions") {
    var workerSolutionsLength = msg.length / _globals_js__WEBPACK_IMPORTED_MODULE_0__.nWorkers;
    var solutionsIdx = 0;

    for (var _i2 = 0; _i2 < _globals_js__WEBPACK_IMPORTED_MODULE_0__.nWorkers; _i2++) {
      var workerSolutions = msg.slice(solutionsIdx, solutionsIdx + workerSolutionsLength);

      simulationWorkers[_i2].postMessage(["solutions", workerSolutions]);

      solutionsIdx += workerSolutionsLength;
    }
  }
};

function loop() {
  ctxFG.clearRect(0, 0, _globals_js__WEBPACK_IMPORTED_MODULE_0__.w, _globals_js__WEBPACK_IMPORTED_MODULE_0__.h);
  var positionsLength = _globals_js__WEBPACK_IMPORTED_MODULE_0__.displayCreatureCount * 7,
      positionsHistory = drawHistories[currentHistory],
      positions = positionsHistory.slice(stepsDisplayed * positionsLength, (stepsDisplayed + 1) * positionsLength);
  var currentMaxX = positions[0];
  var cameraX = Math.round(-currentMaxX * _globals_js__WEBPACK_IMPORTED_MODULE_0__.metersToPixels - _globals_js__WEBPACK_IMPORTED_MODULE_0__.cameraOffset + _globals_js__WEBPACK_IMPORTED_MODULE_0__.w);
  ctxTerrain.clearRect(0, 0, _globals_js__WEBPACK_IMPORTED_MODULE_0__.w, terrainH);
  var terrainX = cameraX % _globals_js__WEBPACK_IMPORTED_MODULE_0__.w;

  for (var _i3 = 0; _i3 < 20; _i3++) {
    var currentX = (terrainX - 100 * _i3) % _globals_js__WEBPACK_IMPORTED_MODULE_0__.w;

    if (currentX < 0) {
      currentX += _globals_js__WEBPACK_IMPORTED_MODULE_0__.w;
    }

    ctxTerrain.beginPath();
    ctxTerrain.moveTo(currentX, 0);
    ctxTerrain.lineTo(currentX, terrainH);
    ctxTerrain.stroke();
  }

  for (var _i4 = _globals_js__WEBPACK_IMPORTED_MODULE_0__.displayCreatureCount - 1; _i4 >= 0; _i4--) {
    var idx = _i4 * 7;
    _draw_js__WEBPACK_IMPORTED_MODULE_1__.drawSpot.apply(void 0, [cameraX, _globals_js__WEBPACK_IMPORTED_MODULE_0__.cameraInitY].concat(_toConsumableArray(positions.slice(idx, idx + 7)), [ctxFG]));
  }

  stepsDisplayed++;

  if (stepsDisplayed == _globals_js__WEBPACK_IMPORTED_MODULE_0__.epLen) {
    stepsDisplayed = 0;
  }

  requestAnimationFrame(loop);
}

function getScore(scoreInfo) {
  // let score = spot.chassisVelXSqErrSum + spot.rollingVelXSqErrSum
  // let score = 1e3 * spot.footTangentImpulseSum
  // const finalX = scoreInfo["finalX"]
  // ,xMax = scoreInfo["xMax"]
  // // // // let score = -1e3 * Math.sign(finalX) * finalX * finalX
  // // // // score -= 1e3 * spot.xMax * spot.xMax
  // let score = -1e2 * finalX * finalX * finalX
  // score -= 1e2 * xMax * xMax * xMax
  var distSum = scoreInfo["finalX"] + scoreInfo["xMax"];
  distSum /= _globals_js__WEBPACK_IMPORTED_MODULE_0__.epLen; // distSum *= 1e2

  var scoreDist = -Math.sign(distSum) * distSum * distSum;
  scoreDist *= 1e5; // let score = -1e2 * (finalX + xMax)

  var tangentImpulseSum = scoreInfo.footTangentImpulseSum;
  tangentImpulseSum *= -1e-3 * tangentImpulseSum; // // score -= 1e3 * tangentImpulseSum * tangentImpulseSum * tangentImpulseSum

  var footNormalImpulseSqSum = scoreInfo.footNormalImpulseAbsSum / _globals_js__WEBPACK_IMPORTED_MODULE_0__.epLen;
  footNormalImpulseSqSum *= -1e3 * footNormalImpulseSqSum;
  var nonFootNormalImpulseSqSum = scoreInfo.nonFootNormalImpulseAbsSum / _globals_js__WEBPACK_IMPORTED_MODULE_0__.epLen;
  nonFootNormalImpulseSqSum *= 2e5 * nonFootNormalImpulseSqSum; // score += 1.0 * scoreInfo.nonFootNormalImpulseAbsSum
  // let clippedOutputSums = 0,

  var clippedSpeedSums = 0;
  var motorSpeedSumsSum = 0;

  for (var _i5 = 0; _i5 < 4; _i5++) {
    // clippedOutputSums +=
    //   1e-12 *
    //   scoreInfo.clippedOutputSqSums[i] *
    //   scoreInfo.clippedOutputSqSums[i]
    var clippedSpeedMean = scoreInfo.clippedSpeedSqSums[_i5] / _globals_js__WEBPACK_IMPORTED_MODULE_0__.epLen;
    clippedSpeedSums += clippedSpeedMean * clippedSpeedMean;
    var motorSpeedSum = Math.abs(scoreInfo.motorSpeedSums[_i5]) / _globals_js__WEBPACK_IMPORTED_MODULE_0__.epLen;
    motorSpeedSum *= motorSpeedSum;
    motorSpeedSumsSum += motorSpeedSum;
  }

  clippedSpeedSums *= 1e1;
  motorSpeedSumsSum *= 1e-1; // // // // // if (!simpleScore) {

  var chassisAngleErr = scoreInfo.chassisAngleErr / _globals_js__WEBPACK_IMPORTED_MODULE_0__.epLen;
  chassisAngleErr *= 1.0 * chassisAngleErr; // score += 1e-3 * spot.chassisAngleErr * spot.chassisAngleErr
  // let motorSpeedSq = scoreInfo["motorSpeedSqSum"] / epLen
  // motorSpeedSq *= 1e-3 * motorSpeedSq
  // score -= 1e1 * scoreInfo["motorSpeedDiffSqSum"]

  var chassisAngleSqErr = scoreInfo.chassisAngleSqErr / _globals_js__WEBPACK_IMPORTED_MODULE_0__.epLen;
  chassisAngleSqErr *= 1.0; // score += 1e-4 * spot.chassisAngleSqErr * spot.chassisAngleSqErr
  // // score += 1e-2 * spot.ySqDiffSum

  var ySqDiffSum = scoreInfo.ySqDiffSum;
  ySqDiffSum *= 1e-3; // score += 1e-6 * spot.ySqDiffSum * spot.ySqDiffSum
  // // // score += 1e-2 * spot.yVelSqSum

  var yVelSqSum = scoreInfo.yVelSqSum / _globals_js__WEBPACK_IMPORTED_MODULE_0__.epLen; // yVelSqSum *= 1e2

  yVelSqSum *= -1e1; // // score += 1e-2 * spot.yVelDiffSqSum
  // score += 1e-4 * spot.yVelDiffSqSum * spot.yVelDiffSqSum

  var yVelDiffSqSum = scoreInfo.yVelDiffSqSum / _globals_js__WEBPACK_IMPORTED_MODULE_0__.epLen; // yVelDiffSqSum *= 1e3

  yVelDiffSqSum *= 1.0; // score -= 1e-3 * scoreInfo.angVelAbsSum
  // score -= 1e-1 * scoreInfo.angVelDiffAbsSum
  // // score += 1.0 * spot.angVelSqSum
  // score += 1e-6 * spot.angVelSqSum * spot.angVelSqSum

  var angVelSqSum = scoreInfo.angVelSqSum / _globals_js__WEBPACK_IMPORTED_MODULE_0__.epLen;
  angVelSqSum *= -1e1; // score -= 1e-1 * scoreInfo.angVelDiffSqSum
  // score += 1e-4 * spot.angVelDiffSqSum * spot.angVelDiffSqSum

  var angVelDiffSqSum = scoreInfo.angVelDiffSqSum / _globals_js__WEBPACK_IMPORTED_MODULE_0__.epLen;
  angVelDiffSqSum *= 1e1; // score += 1e-5 * spot.xVelDiffSqSum * spot.xVelDiffSqSum

  var chassisVelXSqErrSum = scoreInfo.chassisVelXSqErrSum / _globals_js__WEBPACK_IMPORTED_MODULE_0__.epLen;
  chassisVelXSqErrSum *= 1e4 * chassisVelXSqErrSum;
  var rollJointVelAbs = 0;
  var jointMotorDiffSum = 0;
  var jointSpeedSqDiffSum = 0;

  for (var _i6 = 0; _i6 < 4; _i6++) {
    var jointSpeedSqDiff = scoreInfo.jointSpeedSqDiffs[_i6];
    jointSpeedSqDiffSum += jointSpeedSqDiff; // score += 1e-3 * (spot.motorSpeedSums[i] * spot.motorSpeedSums[i])

    var rollJointVelAbsMean = scoreInfo.rollingJointSpeedAbsSums[_i6] / _globals_js__WEBPACK_IMPORTED_MODULE_0__.epLen; // rollJointVelAbs += rollJointVelAbsMean * rollJointVelAbsMean
    // rollJointVelAbs += Math.sqrt(rollJointVelAbsMean)

    rollJointVelAbs += rollJointVelAbsMean; // score -= 1e-3 * scoreInfo.rollingJointSpeedSqSums[i]
    // score -= 1e-4 * scoreInfo.rollingJointSpeedAbsDiffSums[i]
    // score -= 1e-4 * scoreInfo.rollingJointSpeedSqDiffSums[i]
    // score += 1e-1 * scoreInfo.jointMotorSpeedDiffSqSums[i]

    var jointMotorSpeedDiffSqSum = scoreInfo.jointMotorSpeedDiffSqSums[_i6] / _globals_js__WEBPACK_IMPORTED_MODULE_0__.epLen; // jointMotorDiffSum += jointMotorSpeedDiffSqSum * jointMotorSpeedDiffSqSum

    jointMotorDiffSum += jointMotorSpeedDiffSqSum;
  }

  rollJointVelAbs *= -5.0;
  jointMotorDiffSum *= 1e-5;
  jointSpeedSqDiffSum *= 1e-3; // // // score += 1e-8 * spot.motorSpeedsSqDistSum
  // // // // // // }

  var torqueRxnSum = 0;
  var jointRxnForceYSqSum = 0;

  for (var _i7 = 0; _i7 < 4; _i7++) {
    // score += 1e-2 * spot.jointReactionTorqueSqSums[i]
    var torqueRxn = scoreInfo.jointReactionTorqueSqSums[_i7] / _globals_js__WEBPACK_IMPORTED_MODULE_0__.epLen;
    torqueRxn *= torqueRxn;
    torqueRxnSum += torqueRxn;
    var jointReactionForceXSqSum = scoreInfo.jointReactionForceXSqSums[_i7];
    jointRxnForceYSqSum += jointReactionForceXSqSum; // score -= 1e-1 * spot.jointReactionForceXSqSums[i]
    // score += 1e-3 * spot.jointReactionForceYSqSums[i]
  }

  torqueRxnSum *= 1e1;
  jointRxnForceYSqSum *= 1e-4; // score /= epLen
  // score -= 1e-6 * spot.rollingXVelMax * spot.rollingXVelMax
  // // // // if (!simpleScore) {
  // // // for (let i = 0; i < 4; i++) {
  // // //   score += 1e-3 * spot.jointSpeedMins[i]
  // // //   score -= 1e-3 * spot.jointSpeedMaxs[i]
  // // // }
  // }

  var histogramSum = 0; // let histogramProd = 1
  // let histogramMax = -Infinity

  var _iterator = _createForOfIteratorHelper(scoreInfo["histogramScores"]),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var histogramScore = _step.value;
      // histogramSum += Math.sqrt(histogramScore)
      histogramSum += histogramScore * histogramScore; //  * histogramScore * histogramScore
      // histogramProd *= 1 + Math.abs(histogramScore)
      // if (histogramScore > histogramMax) {
      //   histogramMax = histogramScore
      // }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  histogramSum *= 1.0; // score += 1e-4 * histogramSum * histogramSum
  // score += 1e-6 * histogramProd
  // score += 1e-1 * histogramMax

  var l2PenaltyWeights = 0;

  var _iterator2 = _createForOfIteratorHelper(scoreInfo["weightNorms"]),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var weightNorm = _step2.value;
      // console.log(weightNorm)
      l2PenaltyWeights += weightNorm;
    } // l2PenaltyWeights /= weightCount
    // l2PenaltyWeights *= 1e2

  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  l2PenaltyWeights *= 1.0;
  var l2PenaltyBiases = 0;

  var _iterator3 = _createForOfIteratorHelper(scoreInfo["biasNorms"]),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var biasNorm = _step3.value;
      l2PenaltyBiases += biasNorm;
    } // console.log(l2PenaltyWeights, l2PenaltyBiases)
    // l2PenaltyBiases /= biasCount
    // l2PenaltyBiases *= 1.0

  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  l2PenaltyBiases *= 1e-3;
  return {
    scoreDist: scoreDist,
    l2PenaltyWeights: l2PenaltyWeights,
    l2PenaltyBiases: l2PenaltyBiases // // clippedOutputSums,
    // clippedSpeedSums,
    // // torqueRxnSum,
    // // footNormalImpulseSqSum,
    // nonFootNormalImpulseSqSum,
    // // rollJointVelAbs,
    // // histogramSum,
    // // // // tangentImpulseSum,
    // // jointMotorDiffSum,
    // // ySqDiffSum,
    // // // yVelDiffSqSum,
    // // yVelSqSum,
    // // angVelSqSum,
    // // // angVelDiffSqSum,
    // // // chassisVelXSqErrSum,
    // // chassisAngleErr,
    // // chassisAngleSqErr,
    // // jointSpeedSqDiffSum,
    // jointRxnForceYSqSum,
    // // motorSpeedSumsSum,

  };
}

function processScores() {
  var solutionsScores = [];
  var bestScoresAndIdxs = [];
  console.log(scoreSolutionInfos[0]);
  var finalXMax = -Infinity; //   scoreDistMin = Infinity,
  //   scoreDistMax = -Infinity,
  //   scoreDistMean = 0,
  //   l2WtsMin = Infinity,
  //   l2WtsMax = -Infinity,
  //   l2WtsMean = 0,
  //   l2BiasMin = Infinity,
  //   l2BiasMax = -Infinity,
  //   l2BiasMean = 0

  var scoreStats = {};

  for (var j = 0; j < scoreSolutionInfos.length; j++) {
    var scoreSolutionInfo = scoreSolutionInfos[j];

    if (scoreSolutionInfo.finalX > finalXMax) {
      finalXMax = scoreSolutionInfo.finalX;
    }

    var scoreObj = getScore(scoreSolutionInfo),
        solution = scoreSolutionInfo["solution"].slice(),
        score = Object.values(scoreObj).reduce(function (a, b) {
      return a + b;
    });
    var kvPairs = Object.entries(scoreObj);
    kvPairs.push(["score", score]);

    for (var _i8 = 0, _kvPairs = kvPairs; _i8 < _kvPairs.length; _i8++) {
      var _kvPairs$_i = _slicedToArray(_kvPairs[_i8], 2),
          key = _kvPairs$_i[0],
          val = _kvPairs$_i[1];

      if (j == 0) {
        scoreStats[key] = {
          mean: 0,
          min: Infinity,
          max: -Infinity
        };
      }

      scoreStats[key].mean += val;

      if (scoreStats[key].min > val) {
        scoreStats[key].min = val;
      }

      if (scoreStats[key].max < val) {
        scoreStats[key].max = val;
      }
    } // scoreDistMean += scoreDist
    // if (scoreDistMin > scoreDist) {
    //   scoreDistMin = scoreDist
    // }
    // if (scoreDistMax < scoreDist) {
    //   scoreDistMax = scoreDist
    // }
    // l2WtsMean += l2PenaltyWeights
    // if (l2WtsMin > l2PenaltyWeights) {
    //   l2WtsMin = l2PenaltyWeights
    // }
    // if (l2WtsMax < l2PenaltyWeights) {
    //   l2WtsMax = l2PenaltyWeights
    // }
    // l2BiasMean += l2PenaltyBiases
    // if (l2BiasMin > l2PenaltyBiases) {
    //   l2BiasMin = l2PenaltyBiases
    // }
    // if (l2BiasMax < l2PenaltyBiases) {
    //   l2BiasMax = l2PenaltyBiases
    // }
    // const score = scoreDist + l2PenaltyWeights + l2PenaltyBiases


    solutionsScores.push({
      solution: solution,
      score: score
    });
    var newBestScore = false;

    if (bestScoresAndIdxs.length < _globals_js__WEBPACK_IMPORTED_MODULE_0__.displayCreatureCount) {
      bestScoresAndIdxs.push({
        j: j,
        score: score
      });
      newBestScore = true;
    } else if (score < bestScoresAndIdxs[_globals_js__WEBPACK_IMPORTED_MODULE_0__.displayCreatureCount - 1]["score"]) {
      bestScoresAndIdxs[_globals_js__WEBPACK_IMPORTED_MODULE_0__.displayCreatureCount - 1] = {
        j: j,
        score: score
      };
      newBestScore = true;
    }

    if (newBestScore) {
      bestScoresAndIdxs.sort(function (a, b) {
        return a["score"] - b["score"];
      });
    }
  }

  console.log("finalXMax: ".concat(finalXMax));

  for (var _i9 = 0, _Object$keys = Object.keys(scoreStats); _i9 < _Object$keys.length; _i9++) {
    var prop = _Object$keys[_i9];
    var summary = scoreStats[prop];
    summary.mean /= scoreSolutionInfos.length;
    console.log(prop);

    for (var _i10 = 0, _Object$entries = Object.entries(summary); _i10 < _Object$entries.length; _i10++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i10], 2),
          stat = _Object$entries$_i[0],
          _val = _Object$entries$_i[1];

      console.log(stat, _val);
    }
  }

  for (var _j = 0; _j < _globals_js__WEBPACK_IMPORTED_MODULE_0__.displayCreatureCount; _j++) {
    var totalIdx = bestScoresAndIdxs[_j]["j"],
        creatureIdx = totalIdx % creaturesPerWorker,
        workerIdx = (totalIdx - creatureIdx) / creaturesPerWorker,
        rank = _j;
    simulationWorkers[workerIdx].postMessage(["sendHistory", {
      creatureIdx: creatureIdx,
      rank: rank
    }]);
  }

  cma_worker.postMessage(["solutionsScores", solutionsScores]);
  scoreSolutionInfos = [];
  scoresReceived = 0;
}

function swapHistory() {
  if (currentHistory == 0) {
    currentHistory = 1;
    nextHistory = 0;
  } else {
    currentHistory = 0;
    nextHistory = 1;
  }
}

function saveHistory(history, rank) {
  var drawHistory = drawHistories[nextHistory];

  for (var _i11 = 0; _i11 < _globals_js__WEBPACK_IMPORTED_MODULE_0__.epLen; _i11++) {
    var multiCreatureIdx = 7 * (_i11 * _globals_js__WEBPACK_IMPORTED_MODULE_0__.displayCreatureCount + rank),
        singleCreatureIdx = 7 * _i11;

    for (var j = 0; j < 7; j++) {
      drawHistory[multiCreatureIdx + j] = history[singleCreatureIdx + j];
    }
  }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Oi8vd2VicGFjay10ZXN0Ly4vc3JjL3BhZ2VzL3Nwb3QvZHJhdy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3QvLi9zcmMvcGFnZXMvc3BvdC9nbG9iYWxzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVzdC8uL3NyYy9tYWluLmNzcz83NmJiIiwid2VicGFjazovL3dlYnBhY2stdGVzdC8uL3NyYy9wYWdlcy9zcG90L2luZGV4LmNzcz9kNzVhIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3QvLi9zcmMvcGFnZXMvc3BvdC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBjaGFzc2lzUHRzRHJhdyxcbiAgdXBwZXJMZWdQdHNEcmF3LFxuICBrbmVlUHREcmF3LFxuICBsb3dlckxlZ1B0c0RyYXcsXG4gIGhpcFB0RHJhdyxcbiAgYW5rbGVQdERyYXcsXG4gIGZvb3RSYWRpdXNEcmF3LFxuICBtZXRlcnNUb1BpeGVscyxcbn0gZnJvbSBcIi4vZ2xvYmFscy5qc1wiXG5cbmNvbnN0IGxvd2VyTGVnQ29sb3IgPSBcInJnYig1MCw1MCw1MClcIlxuXG5leHBvcnQgZnVuY3Rpb24gZHJhd1Nwb3QoXG4gIGNhbWVyYVgsXG4gIGNhbWVyYVksXG4gIHhNZXRlcnMsXG4gIHlNZXRlcnMsXG4gIGNoYXNzaXNBbmdsZSxcbiAgc2hvdWxkZXJBbmdsZSxcbiAgaGlwQW5nbGUsXG4gIGVsYm93QW5nbGUsXG4gIGtuZWVBbmdsZSxcbiAgY3R4Rkdcbikge1xuICBjdHhGRy5zYXZlKClcbiAgY3R4RkcudHJhbnNsYXRlKFxuICAgIHhNZXRlcnMgKiBtZXRlcnNUb1BpeGVscyArIGNhbWVyYVgsXG4gICAgeU1ldGVycyAqIG1ldGVyc1RvUGl4ZWxzICsgY2FtZXJhWVxuICApXG4gIGN0eEZHLnJvdGF0ZShjaGFzc2lzQW5nbGUpXG4gIGN0eEZHLnNhdmUoKVxuICBkcmF3UG9seShjaGFzc2lzUHRzRHJhdywgXCJ5ZWxsb3dcIiwgY3R4RkcsIFwiYmxhY2tcIilcblxuICAvLyBjdHhGRy5yb3RhdGUoc2hvdWxkZXJBbmdsZSAtIGNoYXNzaXNBbmdsZSlcbiAgY3R4Rkcucm90YXRlKHNob3VsZGVyQW5nbGUpXG4gIGRyYXdQb2x5KHVwcGVyTGVnUHRzRHJhdywgXCJ5ZWxsb3dcIiwgY3R4RkcsIFwiYmxhY2tcIilcbiAgY3R4RkcudHJhbnNsYXRlKC4uLmtuZWVQdERyYXcpXG5cbiAgLy8gY3R4Rkcucm90YXRlKGVsYm93QW5nbGUgLSBzaG91bGRlckFuZ2xlKVxuICBjdHhGRy5yb3RhdGUoZWxib3dBbmdsZSlcbiAgZHJhd1BvbHkobG93ZXJMZWdQdHNEcmF3LCBsb3dlckxlZ0NvbG9yLCBjdHhGRywgXCJibGFja1wiKVxuICBkcmF3Rm9vdChsb3dlckxlZ0NvbG9yLCBjdHhGRylcbiAgY3R4RkcudHJhbnNsYXRlKC4uLmhpcFB0RHJhdylcblxuICAvLyBjdHhGRy5yb3RhdGUoaGlwQW5nbGUgLSBjaGFzc2lzQW5nbGUpXG4gIGN0eEZHLnJvdGF0ZShoaXBBbmdsZSlcbiAgZHJhd1BvbHkodXBwZXJMZWdQdHNEcmF3LCBcInllbGxvd1wiLCBjdHhGRywgXCJibGFja1wiKVxuICBjdHhGRy50cmFuc2xhdGUoLi4ua25lZVB0RHJhdylcblxuICAvLyBjdHhGRy5yb3RhdGUoa25lZUFuZ2xlIC0gaGlwQW5nbGUpXG4gIGN0eEZHLnJvdGF0ZShrbmVlQW5nbGUpXG4gIGRyYXdQb2x5KGxvd2VyTGVnUHRzRHJhdywgbG93ZXJMZWdDb2xvciwgY3R4RkcpXG4gIGRyYXdGb290KGxvd2VyTGVnQ29sb3IsIGN0eEZHKVxufVxuXG5mdW5jdGlvbiBkcmF3UG9seShwdHMsIGNvbG9yLCBjdHhGRywgc3Ryb2tlQ29sb3IpIHtcbiAgY3R4RkcuYmVnaW5QYXRoKClcbiAgY3R4RkcubW92ZVRvKHB0c1swXSwgcHRzWzFdKVxuICBmb3IgKGxldCBpID0gMjsgaSA8IHB0cy5sZW5ndGg7IGkgKz0gMikge1xuICAgIGN0eEZHLmxpbmVUbyhwdHNbaV0sIHB0c1tpICsgMV0pXG4gIH1cbiAgY3R4RkcubGluZVRvKHB0c1swXSwgcHRzWzFdKVxuICBjdHhGRy5maWxsU3R5bGUgPSBjb2xvclxuICBjdHhGRy5maWxsKClcbiAgY3R4Rkcuc3Ryb2tlU3R5bGUgPSBzdHJva2VDb2xvclxuICBjdHhGRy5zdHJva2UoKVxufVxuXG5mdW5jdGlvbiBkcmF3Rm9vdChjb2xvciwgY3R4RkcpIHtcbiAgY3R4RkcuZmlsbFN0eWxlID0gY29sb3JcbiAgY3R4RkcudHJhbnNsYXRlKC4uLmFua2xlUHREcmF3KVxuICBjdHhGRy5iZWdpblBhdGgoKVxuICBjdHhGRy5hcmMoMCwgMCwgZm9vdFJhZGl1c0RyYXcsIDAsIDIgKiBNYXRoLlBJKVxuICBjdHhGRy5maWxsKClcbiAgY3R4Rkcuc3Ryb2tlU3R5bGUgPSBcInJnYigxNTAsMTUwLDE1MClcIlxuICBjdHhGRy5zdHJva2UoKVxuICBjdHhGRy5yZXN0b3JlKClcbn1cbiIsImV4cG9ydCBjb25zdCBuV29ya2VycyA9IDQsXG4gIHBvcHNpemVNdWx0aXBsaWVyID0gNCxcbiAgZXBMZW4gPSA0MDAwLFxuICBjbWFTaWdtYSA9IDAuMSxcbiAgZGlzcGxheUNyZWF0dXJlQ291bnQgPSAxNlxuXG5leHBvcnQgY29uc3QgdyA9IDgwMCxcbiAgaCA9IDQwMCxcbiAgdHMgPSAxIC8gNjAsXG4gIG1ldGVyc1RvUGl4ZWxzID0gNDAwLFxuICBiMkdyb3VuZEggPSAwLFxuICBiMkdyb3VuZFcgPSAzMDAsXG4gIGNhbnZhc0dyb3VuZEggPSA0MCxcbiAgLy8gc2hvdWxkZXJITWV0ZXJzID0gLTAuNDkzMixcbiAgc2hvdWxkZXJITWV0ZXJzID0gLTAuNTUsXG4gIC8vIGNhbWVyYVcgPSAwLjUgKiB3LFxuICBjYW1lcmFPZmZzZXQgPSAzMDAsXG4gIGNhbWVyYUluaXRZID0gaCAtIGNhbnZhc0dyb3VuZEgsXG4gIHVwcGVyTGVnUHRzID0gW1xuICAgIDAuMjUxOCwgLTAuMjExOSwgLTAuMDI2MSwgMC4wNzMsIC0wLjA3OTUsIDAuMDE2OCwgMC4yMjA5LCAtMC4yNDM3LFxuICBdLFxuICB1cHBlckxlZ1B0c0RyYXcgPSB1cHBlckxlZ1B0cy5tYXAoKHgpID0+IC14ICogbWV0ZXJzVG9QaXhlbHMpLFxuICBrbmVlUHQgPSBbMC4yMjM5LCAtMC4yMTU5XSxcbiAga25lZVB0RHJhdyA9IGtuZWVQdC5tYXAoKHgpID0+IC1tZXRlcnNUb1BpeGVscyAqIHgpLFxuICAvLyBsb3dlckxlZ1B0cyA9IFtcbiAgLy8gICAwLjA0NywgMC4wMjA2LCAwLjAxNjksIDAuMDQ2OCwgLTAuMjQ1NywgLTAuMjM5MSwgLTAuMjIxMywgLTAuMjYwMixcbiAgLy8gXSxcbiAgLy8gbG93ZXJMZWdQdHMgPSBbXG4gIC8vICAgMC4wNDcsIDAuMDIwNiwgMC4wMTY5LCAwLjA0NjgsIC0wLjIxNjYsIC0wLjIwNzQsIC0wLjE5MTcsIC0wLjIyOTIsXG4gIC8vIF0sXG4gIGxvd2VyTGVnUHRzID0gW1xuICAgIDAuMDQ3LCAwLjAyMDYsIDAuMDE2OSwgMC4wNDY4LCAtMC4xOTQyLCAtMC4xODMzLCAtMC4xNjkzLCAtMC4yMDUxLFxuICBdLFxuICBsb3dlckxlZ1B0c0RyYXcgPSBsb3dlckxlZ1B0cy5tYXAoKHgpID0+IC14ICogbWV0ZXJzVG9QaXhlbHMpLFxuICBhbmtsZVB0ID0gWzAuMjI0NywgMC4yNDE5XSxcbiAgYW5rbGVQdERyYXcgPSBhbmtsZVB0Lm1hcCgoeCkgPT4geCAqIG1ldGVyc1RvUGl4ZWxzKSxcbiAgZm9vdFJhZGl1cyA9IDAuMDM1NDAyLFxuICAvLyBmb290UmFkaXVzID0gMC4wNSxcbiAgZm9vdFJhZGl1c0RyYXcgPSBtZXRlcnNUb1BpeGVscyAqIGZvb3RSYWRpdXMsXG4gIC8vIGRlbnNpdHkgPSAxLFxuICAvLyBmcmljdGlvbiA9IDAuOTUsXG4gIC8vIHJlc3RpdHV0aW9uID0gMC4xLFxuICBjaGFzc2lzUHRzID0gW1xuICAgIDAuNjk2MiwgLTAuMDYxNiwgMC43MDcxLCAwLjA2NzIsIC0wLjE0MzMsIDAuMDc0LCAtMC4wODIyLCAtMC4wODczLFxuICBdLFxuICBjaGFzc2lzUHRzRHJhdyA9IGNoYXNzaXNQdHMubWFwKCh4KSA9PiAteCAqIG1ldGVyc1RvUGl4ZWxzKSxcbiAgaGlwUHQgPSBbMC41ODM4LCAwXSxcbiAgaGlwUHREcmF3ID0gaGlwUHQubWFwKCh4KSA9PiAtbWV0ZXJzVG9QaXhlbHMgKiB4KSxcbiAgLy8gdXBwZXJMZWdMaW1pdHMgPSBbLTAuMyAqIE1hdGguUEksIDAuMTUgKiBNYXRoLlBJXSxcbiAgdXBwZXJMZWdMaW1pdHMgPSBbLTAuMzUgKiBNYXRoLlBJLCAwLjE1ICogTWF0aC5QSV0sXG4gIC8vIHVwcGVyTGVnTWF4VG9ycXVlID0gMS4wLFxuICB1cHBlckxlZ01heFRvcnF1ZSA9IDEuMCxcbiAgLy8gbG93ZXJMZWdMaW1pdHMgPSBbLTAuMzUgKiBNYXRoLlBJLCAwLjA4ICogTWF0aC5QSV0sXG4gIGxvd2VyTGVnTGltaXRzID0gWy0wLjM1ICogTWF0aC5QSSwgMC4xNSAqIE1hdGguUEldLFxuICAvLyBsb3dlckxlZ01heFRvcnF1ZSA9IDAuOCxcbiAgbG93ZXJMZWdNYXhUb3JxdWUgPSAxLjAsXG4gIC8vIG1heFNwZWVkID0gNSxcbiAgbWF4U3BlZWQgPSA2LFxuICAvLyBtYXhTcGVlZCA9IDMsXG4gIG1heFNwZWVkRGlmZiA9IDEuMCxcbiAgbkpvaW50QW5nbGVCaW5zID0gMTAwLFxuICB1bmlmb3JtRGlzdEJpbkNvdW50ID0gZXBMZW4gLyBuSm9pbnRBbmdsZUJpbnMsXG4gIHJvbGxpbmdXaW5kb3cgPSA4LFxuICB0YXJnZXRWZWxYID0gMVxuXG5leHBvcnQgY29uc3QgY21hTWVhbkluaXQgPSBGbG9hdDMyQXJyYXkuZnJvbShbXG4gIC00LjY1Nzc0NTM2MTMyODEyNSwgLTEuMzg2NjI1NTI4MzM1NTcxMywgLTEyLjAzMzM0NTIyMjQ3MzE0NSxcbiAgMy4zMTA3ODYyNDcyNTM0MTgsIDMuMjY0MzU5NzEyNjAwNzA4LCA0LjM2OTc2MDAzNjQ2ODUwNiwgMS40MjUwNTkwODAxMjM5MDE0LFxuICAyLjg1OTU2ODU5NTg4NjIzMDUsIC01LjI2NjE2NTczMzMzNzQwMiwgOC4wMjM1NjE0Nzc2NjExMzMsIDUuMTAyMjYyOTczNzg1NCxcbiAgLTExLjY2MjAxNjg2ODU5MTMwOSwgLTguNzM4MDQ4NTUzNDY2Nzk3LCAtOC42MzE3MzM4OTQzNDgxNDUsXG4gIDEzLjE2MzE0MDI5NjkzNjAzNSwgOS40MDg1MjgzMjc5NDE4OTUsIDE0LjUxMDIxNTc1OTI3NzM0NCwgLTkuNTc4ODgzMTcxMDgxNTQzLFxuICAtMy44MjUyMDUwODc2NjE3NDMsIC0xMy41MTc2NzA2MzE0MDg2OTEsIDExLjY1NzYyMzI5MTAxNTYyNSwgNC40MjY2MDY2NTUxMjA4NSxcbiAgLTUuMTYwMzQ1NTU0MzUxODA3LCAtMTAuMzgyMDQxOTMxMTUyMzQ0LCAtMTMuNTU3MjY5MDk2Mzc0NTEyLFxuICA0LjEwOTE3MDQzNjg1OTEzMSwgMTQuNzYzMDA4MTE3Njc1NzgxLCAtMTAuNjEyNDkyNTYxMzQwMzMyLFxuICAxMS41NDcyMDc4MzIzMzY0MjYsIC04LjczMTE5MDY4MTQ1NzUyLCAwLjYzOTcwMjk3NTc0OTk2OTUsXG4gIC0xMS4wMzUyNDAxNzMzMzk4NDQsIDMuMjU2MTA0NzA3NzE3ODk1NSwgLTUuOTEwMTU0ODE5NDg4NTI1LFxuICAtNS4yOTU3OTMwNTY0ODgwMzcsIC0xLjAxNzUyOTAxMDc3MjcwNSwgMy43NDk5NjU5MDYxNDMxODg1LFxuICAtMi43Njk2MzQyNDY4MjYxNzIsIDQuMDg3MTg5MTk3NTQwMjgzLCAzLjc4MDIzNDU3NTI3MTYwNjQsXG4gIC0zLjYxMTUwODEzMTAyNzIyMTcsIDIuMzA2MDM4NjE4MDg3NzY4NiwgLTE1LjE1MTU5Nzk3NjY4NDU3LFxuICAtOC41NzMyMzgzNzI4MDI3MzQsIC0yLjUzNTcxMjk1NzM4MjIwMiwgLTIuMzE3MjUxMjA1NDQ0MzM2LFxuICAtMTAuNDc1MDczODE0MzkyMDksIDEwLjI3OTkwOTEzMzkxMTEzMywgLTIuMjAzNzQwMzU4MzUyNjYxLFxuICAtNC42MDQ4MzE2OTU1NTY2NDEsIC0wLjYwNTQzMDMwNTAwNDExOTksIC0zLjExMTk0NzUzNjQ2ODUwNixcbiAgLTEuMjc1NzkzMzEzOTgwMTAyNSwgLTEyLjM4MTE1MzEwNjY4OTQ1MywgMy43ODEyMzcxMjUzOTY3Mjg1LFxuICA4LjI1MTQ0ODYzMTI4NjYyMSwgMTAuNzE4NDc5MTU2NDk0MTQsIDEuMjUwMjk2MTE1ODc1MjQ0MSwgLTMuODk0OTc2NjE1OTA1NzYxNyxcbiAgMTQuMTY5MDYyNjE0NDQwOTE4LCA4Ljk5MzMxNTY5NjcxNjMwOSwgLTAuMTEwNDkyNTc5NjM4OTU3OTgsXG4gIDAuMzkxMzM4NDk3NDAwMjgzOCwgMS4xNzE3MTcwNDc2OTEzNDUyLCAzLjA3NTk1NjEwNjE4NTkxMywgLTIuNjAzNzI3MTAyMjc5NjYzLFxuICAwLjQyODAzODA5MDQ2NzQ1MywgLTIuMzIwNTQyODEyMzQ3NDEyLCAtMC40MjQ1NTc3NzUyNTkwMTc5NCxcbiAgMS45MDI0Nzk3Njc3OTkzNzc0LCAzLjY1NDA4MjI5ODI3ODgwODYsIDcuMDcxNjgwNTQ1ODA2ODg1LCA0LjcxMTk0NDU4MDA3ODEyNSxcbiAgMC4wNDA3MDI3OTc0NzI0NzY5NiwgLTQuMDMzMjEwMjc3NTU3MzczLCAyLjY5NDI4MTU3ODA2Mzk2NSxcbiAgLTQuMTA1NDU0NDQ0ODg1MjU0LCAtMS43NTA3NTEyNTY5NDI3NDksIC05LjY5MTAxNDI4OTg1NTk1NywgOS4yODIxOTUwOTEyNDc1NTksXG4gIC0xMi43NTM0Mzk5MDMyNTkyNzcsIDIuMTE4Mzc3OTIzOTY1NDU0LCAxLjgxNzE0NzEzNTczNDU1OCxcbiAgLTMuMjc3NTMzMDU0MzUxODA2NiwgLTUuMzY3NTI4OTE1NDA1MjczLCAtOS43NjczOTU5NzMyMDU1NjYsXG4gIDQuOTA2NzE3MzAwNDE1MDM5LCAzLjU1NTE0Nzg4NjI3NjI0NSwgMy4zMzg4NjA1MTE3Nzk3ODUsIDguMTA3MDg5OTk2MzM3ODksXG4gIC0xMi4xMzE2MDYxMDE5ODk3NDYsIC0xNC40MzUwMDIzMjY5NjUzMzIsIC0xLjIxNjE3MzUyOTYyNDkzOSxcbiAgLTIuNzI2ODcxMjUyMDU5OTM2NSwgLTAuNTUwMTc0NDE1MTExNTQxNywgLTAuNTk4MjQzNTM0NTY0OTcxOSxcbiAgLTguNjc1NzY2OTQ0ODg1MjU0LCAxMi4xMjkxNzkwMDA4NTQ0OTIsIDEzLjMyMTU5MDQyMzU4Mzk4NCxcbiAgMjEuNTM2MzI1NDU0NzExOTE0LCAtMTQuOTkwODE4OTc3MzU1OTU3LCA4Ljk0NDM3MDI2OTc3NTM5LFxuICAtMTEuMDA1ODA3ODc2NTg2OTE0LCAxMC41ODA4ODc3OTQ0OTQ2MjksIC04LjU5NjIzOTA4OTk2NTgyLCAtMS42NzY4NDgwNTM5MzIxOSxcbiAgMTEuMTMwMDkzNTc0NTIzOTI2LCA5LjEzOTM1NjYxMzE1OTE4LCA4LjEyNjQzMjQxODgyMzI0MiwgMS44Mzg4NzIwNzUwODA4NzE2LFxuICA2LjExNzc3NzM0NzU2NDY5NywgLTE4LjY5NTk4MTk3OTM3MDExNywgNy43Nzg0ODkxMTI4NTQwMDQsIDIuMzc4NTYyNDUwNDA4OTM1NSxcbiAgOC4yMTIyNjk3ODMwMjAwMiwgLTEuNjI4ODkwNzUyNzkyMzU4NCwgLTYuNDg5MjY0MDExMzgzMDU3LCA2LjM1NDE3MjcwNjYwNDAwNCxcbiAgMC4yMDI5MTA1ODcxOTE1ODE3MywgNy43MzMzNTg4NjAwMTU4NjksIC01LjM1NjMxMjI3NDkzMjg2MSwgNy44NzEwOTMyNzMxNjI4NDIsXG4gIC02LjczODcyOTQ3NjkyODcxMSwgLTE0LjY2NDkzODkyNjY5Njc3NywgNy4yNzUwMDQzODY5MDE4NTU1LFxuICAtOS43MzMwNTAzNDYzNzQ1MTIsIDE3LjMyOTMwOTQ2MzUwMDk3NywgLTMuMjMxNzAxMzc0MDUzOTU1LFxuICAtMy4xMzg2MTkxODQ0OTQwMTg2LCAwLjUwOTE2NjQxOTUwNjA3MywgLTkuNTMyOTM5OTEwODg4NjcyLCA0LjIwNzE4MDAyMzE5MzM1OSxcbiAgLTQuNTkyNjQyMzA3MjgxNDk0LCAtMC40ODU0MTY3NDAxNzkwNjE5LCAtMTAuNDU0NTUzNjA0MTI1OTc3LFxuICAtNy45MDkxNDM5MjQ3MTMxMzUsIDEuNzU5MzAwMzUxMTQyODgzMywgLTEwLjkwNjM1MTA4OTQ3NzUzOSxcbiAgLTMuMTM2MzEzNjc2ODM0MTA2NCwgLTYuNzM4NTA2MzE3MTM4NjcyLCAtNi4xNTY1NTk5NDQxNTI4MzIsXG4gIC04LjU1NTI2NjM4MDMxMDA1OSwgMTEuNjE3MDY5MjQ0Mzg0NzY2LCAyMS40MzcxNjgxMjEzMzc4OSwgMi43Mzk3NjMyNTk4ODc2OTUzLFxuICA4LjYwMDgxMzg2NTY2MTYyMSwgLTIuMTc0MjA1MzAzMTkyMTM4NywgMi43MTQyMzc0NTE1NTMzNDQ3LFxuICAtMTIuNjcwMTgxMjc0NDE0MDYyLCA0LjY2OTQ4NDEzODQ4ODc2OTUsIDcuMzEwODY4MjYzMjQ0NjI5LCA3LjI2NzI0NDMzODk4OTI1OCxcbiAgMTAuNDY3ODAzMDAxNDAzODA5LCAtOC43MTg4NzAxNjI5NjM4NjcsIDE2LjAyODI0OTc0MDYwMDU4NixcbiAgLTMuOTgwOTMwODA1MjA2Mjk5LCAxLjI1MzA2Nzg1MTA2NjU4OTQsIC04LjE0NTUzMjYwODAzMjIyNywgLTUuODQzODExMDM1MTU2MjUsXG4gIDE2LjAwNjkzODkzNDMyNjE3MiwgNi4xODI3ODEyMTk0ODI0MjIsIDQuNjcyNjQ1NTY4ODQ3NjU2LCAtMTAuMTQyMzI1NDAxMzA2MTUyLFxuICA3LjY0Mzc4NjQzMDM1ODg4NywgNS4zNzg0ODgwNjM4MTIyNTYsIC01Ljg0MjkzNzk0NjMxOTU4LCAxMC4zODMzMDQ1OTU5NDcyNjYsXG4gIDIuNzA1MjE5NzQ1NjM1OTg2MywgLTEyLjEwNDU1NTEzMDAwNDg4MywgMS41NTcxMDk4MzI3NjM2NzE5LCAzLjA1NTQ4MzU3OTYzNTYyLFxuICAtMTIuMjk5MTI4NTMyNDA5NjY4LCAtNC4zNTE2NDQ1MTU5OTEyMTEsIDQuNjQ0OTM0MTc3Mzk4NjgyLFxuICAtMy43ODk3ODAxMzk5MjMwOTU3LCAtMTMuNTkyMjQzMTk0NTgwMDc4LCAtNy44Nzg2OTE2NzMyNzg4MDksXG4gIDIuMzIwODExMDMzMjQ4OTAxNCwgLTEuMjY5MDA4NzU1NjgzODk5LCAzLjQ1NjMzMTQ5MTQ3MDMzNywgLTEuMDA1NTQzNTg5NTkxOTgsXG4gIC0xLjI5MTA4Njc5Mjk0NTg2MTgsIDEuOTY0NTM0NzU5NTIxNDg0NCwgLTguNzQyMTE1MDIwNzUxOTUzLFxuICAtMTIuMjUwMTk0NTQ5NTYwNTQ3LCAtMC42MzY3NTQ3NTEyMDU0NDQzLCA2LjkyOTU4MDIxMTYzOTQwNCxcbiAgLTE1LjM5MjM4MTY2ODA5MDgyLCA5LjIzMDQ1MjUzNzUzNjYyMSwgLTAuMjk4MDM2Mjc3Mjk0MTU4OTQsXG4gIDAuMjg2NTA5NzIyNDcxMjM3MiwgLTE1LjM1OTk1OTYwMjM1NTk1NywgOC4yMDMwODMwMzgzMzAwNzgsIDIuNjc3NTIyODk3NzIwMzM3LFxuICAtMTYuMjEyMzU0NjYwMDM0MTgsIC0xNC4wMDE5MjU0Njg0NDQ4MjQsIC0xMi42NTc2MjgwNTkzODcyMDcsXG4gIC00Ljg3MzczMTYxMzE1OTE4LCAxMi42Njg5ODcyNzQxNjk5MjIsIC04LjM1NTU5ODQ0OTcwNzAzMSwgNC40MDA0MDgyNjc5NzQ4NTM1LFxuICAzLjUyNDE3MTM1MjM4NjQ3NDYsIDEuMDkwNjEyMDUzODcxMTU0OCwgLTAuMzUzNTE1MzI2OTc2Nzc2MSxcbiAgMi4zNDY2ODgyNzA1Njg4NDc3LCA0Ljc1MzE4OTU2Mzc1MTIyMSwgMi41ODMwNTk3ODc3NTAyNDQsIC04LjA5MzA1Mjg2NDA3NDcwNyxcbiAgOC43MDc1MzQ3OTAwMzkwNjIsIC0wLjY1NTEwODgwOTQ3MTEzMDQsIDguMDgyNDIzMjEwMTQ0MDQzLCAtMy4wNjYzNDIzNTM4MjA4MDEsXG4gIC0xMi4zOTYyMTU0Mzg4NDI3NzMsIDIuOTM4MzE2MzQ1MjE0ODQzOCwgNC41NDU1NDg5MTU4NjMwMzcsIDEuNTAxMjA3OTQ3NzMxMDE4LFxuICAtMy42NDMyODk4MDQ0NTg2MTgsIC0yLjEyOTAwNDk1NTI5MTc0OCwgMTIuNjQ1MjE0MDgwODEwNTQ3LFxuICAwLjYwOTc4NzQwNDUzNzIwMDksIDAuNDUyODg1NDQ4OTMyNjQ3NywgLTEyLjgzNjU0MzA4MzE5MDkxOCxcbiAgLTQuMjI0MTI1ODYyMTIxNTgyLCAwLjI1ODM5NjI5NzY5MzI1MjU2LCAwLjk4NzcwMjg0NjUyNzA5OTYsXG4gIDcuMDgxNTczMDA5NDkwOTY3LCA0LjI1NDE1OTQ1MDUzMTAwNiwgMTUuNzc5MDUyNzM0Mzc1LCAxMi4wMjA5NDE3MzQzMTM5NjUsXG4gIC0yLjkxNDAyNjczNzIxMzEzNDgsIC04Ljc4MDMwMzAwMTQwMzgwOSwgMTAuOTg5NjAyMDg4OTI4MjIzLFxuICAtMC45MjQyMTk3ODcxMjA4MTkxLCA1LjE3NzQ5MDcxMTIxMjE1OCwgLTQuNTg1ODA0NDYyNDMyODYxLFxuICAtMS4xMDA1ODIzNjEyMjEzMTM1LCAtMy4yMDM3MDgxNzE4NDQ0ODI0LCAtNi42MDE0MDM3MTMyMjYzMTgsXG4gIC0xMy42NTU0MTE3MjAyNzU4NzksIDQuNjA3MjA3Nzc1MTE1OTY3LCAtMS40NzYzNjUwODk0MTY1MDQsXG4gIC00LjQ5Mjc1NzMyMDQwNDA1MywgOS44ODE2OTU3NDczNzU0ODgsIDUuMzc0NDc1NDc5MTI1OTc3LCAtMi42MzU3OTYwNzAwOTg4NzcsXG4gIC01LjI3OTE1NjY4NDg3NTQ4OCwgLTQuMDcwMzc5MjU3MjAyMTQ4LCAtOS40NDUyMTUyMjUyMTk3MjcsXG4gIC05LjIwMjMwNjc0NzQzNjUyMywgMy45NjAzOTc5NTg3NTU0OTMsIDEuOTM5Njc1NTY5NTM0MzAxOCxcbiAgLTE1LjUxOTE5NzQ2Mzk4OTI1OCwgLTIxLjUyMTczOTk1OTcxNjc5NywgNi4yMDc5Nzc3NzE3NTkwMzMsXG4gIC0wLjgzODA3MTE2NzQ2OTAyNDcsIC0xMS4wMDYxODY0ODUyOTA1MjcsIDUuNDg3MjYyNzI1ODMwMDc4LFxuICAxMC40MTE4NjIzNzMzNTIwNSwgLTIuODI4MTg2OTg4ODMwNTY2NCwgLTMuODQ4MTIxNDA0NjQ3ODI3LFxuICAtNy4zMDgyMzU2NDUyOTQxODk1LCAxNC42Mzg1ODUwOTA2MzcyMDcsIC01LjUyMTQ3NDM2MTQxOTY3OCxcbiAgLTAuMTUxODE3NzUzOTExMDE4MzcsIDguNTQ3NDY1MzI0NDAxODU1LCAtNi4wMjMzMDk3MDc2NDE2MDIsXG4gIC05LjQ3NTQyNzYyNzU2MzQ3NywgNC4zNjgxODIxODIzMTIwMTIsIDAuMjE2MTI4MDM2Mzc5ODE0MTUsXG4gIC0xNS44MDg1NzU2MzAxODc5ODgsIDIwLjUxNjkyNzcxOTExNjIxLCAwLjUzMDE2MTYxOTE4NjQwMTQsXG4gIC00LjcxNDg4NzE0MjE4MTM5NjUsIDIuNjY3MDI4OTAzOTYxMTgxNiwgNy4zOTA5NzczODI2NTk5MTIsXG4gIDcuMTY5NjA2MjA4ODAxMjY5NSwgMi40NDM5OTQ3NjA1MTMzMDU3LCAxLjY0NDczNzYwMTI4MDIxMjQsIDkuNTA2NzcwMTMzOTcyMTY4LFxuICA3LjgwMjc5MDY0MTc4NDY2OCwgLTAuMjgyOTA4MDgyMDA4MzYxOCwgNi4xMDAyMzM1NTQ4NDAwODgsIC02LjMzMDU2Njg4MzA4NzE1OCxcbiAgOS41NTgyMDg0NjU1NzYxNzIsIDguMTE3NTk0NzE4OTMzMTA1LCAtMy42NDcxMjgxMDUxNjM1NzQsIDIuNTQ4MTkyMDI0MjMwOTU3LFxuICAtNS45MzM3NTM0OTA0NDc5OTgsIDEzLjk1NTI3NzQ0MjkzMjEyOSwgLTE0Ljk2NDQxOTM2NDkyOTIsIDE1LjQ4ODEyMTk4NjM4OTE2LFxuICAyLjE5Njc2NzgwNzAwNjgzNiwgNS42MTQ2MzU0Njc1MjkyOTcsIDguNDExMTQ5OTc4NjM3Njk1LCAtNS4zNDUxODU3NTY2ODMzNSxcbiAgMS44NTkyNzI1OTkyMjAyNzU5LCAtMi45ODQ1MzA2ODczMzIxNTMzLCAtMS43MTQ4NzAyMTQ0NjIyODAzLFxuICAxNS44NjM2NDU1NTM1ODg4NjcsIDE1LjQwMjQ5MjUyMzE5MzM2LCA0LjEyMTA5NDcwMzY3NDMxNiwgNC4xMTAxNjk0MTA3MDU1NjYsXG4gIC05Ljc3ODMzNzQ3ODYzNzY5NSwgLTQuOTY4NDU1NzkxNDczMzg5LCAtOC41MjQxNDUxMjYzNDI3NzMsXG4gIC0xLjQ0NTQxNTYxNjAzNTQ2MTQsIDIuNzExNzc5MzU2MDAyODA3NiwgMTMuMTM0NzY2NTc4Njc0MzE2LFxuICA2LjE5NTUwMzcxMTcwMDQzOTUsIDkuMDAxODQyNDk4Nzc5Mjk3LCAtMS45NzI1MDg2Njg4OTk1MzYxLFxuICAtNi41MzIwNDM5MzM4Njg0MDgsIC01LjEzMTY0NDI0ODk2MjQwMiwgMC45OTAyOTQzOTY4NzcyODg4LFxuICAtMy4yOTkyNjg0ODQxMTU2MDA2LCAtMS40OTQ3OTgxODM0NDExNjIsIDQuODI5NDczNDk1NDgzMzk4LCA1LjcyMDU1MDA2MDI3MjIxNyxcbiAgOC41ODEzMzc5Mjg3NzE5NzMsIC03LjY3NDUyODEyMTk0ODI0MiwgLTUuMDMyMjQ4OTczODQ2NDM1NSxcbiAgLTEuMzUyODUzNzc1MDI0NDE0LCA4LjEwMDEwNzE5Mjk5MzE2NCwgOC40NzUzMTg5MDg2OTE0MDYsIC0xLjA2MDA4Mzc0NjkxMDA5NTIsXG4gIDYuNjE0Mjg3Mzc2NDAzODA5LCAtNy45NTg0NTA3OTQyMTk5NzEsIC0xMy44MzcyMDM5Nzk0OTIxODgsXG4gIC0xLjU5ODcyODE3OTkzMTY0MDYsIC0xLjMxMDAzOTQwMTA1NDM4MjMsIC0wLjczODY1NjU4MDQ0ODE1MDYsXG4gIC03LjM3MDc0NDcwNTIwMDE5NSwgMy43MTEwNTU5OTQwMzM4MTM1LCAtMTkuNjAyODM0NzAxNTM4MDg2LFxuICA3LjEzNTQxNzkzODIzMjQyMiwgLTcuMDk5OTI1NTE4MDM1ODg5LCAwLjc5NzEyOTIxMzgwOTk2NywgMTEuNTM3NDUwNzkwNDA1MjczLFxuICAtNi4wNDA4NTYzNjEzODkxNiwgNC4zMzQyMTM3MzM2NzMwOTYsIDAuMzkyNDU3OTYyMDM2MTMyOCwgLTE4LjkyNTgxNTU4MjI3NTM5LFxuICAzLjY4MjM5NjQxMTg5NTc1MiwgMi45NTI2NzM0MzUyMTExODE2LCA2LjE2ODkyOTEwMDAzNjYyMSwgLTAuOTMzOTc2MjMzMDA1NTIzNyxcbiAgMC41OTIzNTExMzg1OTE3NjY0LCAtNy42MTAwMjU4ODI3MjA5NDcsIC0yLjY2NDY5NjQ1NTAwMTgzMSxcbiAgLTcuMzc4NTMwOTc5MTU2NDk0LCAzLjYwOTQxMTcxNjQ2MTE4MTYsIDIuMTE3NDM5NzQ2ODU2Njg5NSxcbiAgMS4xOTkwNTE0OTkzNjY3NjAzLCAtMTEuODUwODMxOTg1NDczNjMzLCA0LjA5ODQ3NDk3OTQwMDYzNSxcbiAgLTkuNjYxNzQyMjEwMzg4MTg0LCAtMS42NTY3NDk0ODY5MjMyMTc4LCA2Ljk0Mzg4NTMyNjM4NTQ5OCwgNy4yNTIzNDc0NjkzMjk4MzQsXG4gIDguMjQ4MDA1ODY3MDA0Mzk1LCAtMTcuMTI3NDk2NzE5MzYwMzUsIC0xMy4yNTgyMDQ0NjAxNDQwNDMsXG4gIC0wLjMzMjI4MDI3ODIwNTg3MTYsIC0xNS41NjU1ODYwOTAwODc4OSwgLTE0LjY0NjcxMzI1NjgzNTkzOCxcbiAgMTUuOTk0MDQ3MTY0OTE2OTkyLCAtMy4xMDYzMzg1MDA5NzY1NjI1LCAtNy43Mzc5Mzc5MjcyNDYwOTQsXG4gIDYuMDEwNDU2NTYyMDQyMjM2LCAtMy41NTEyMjA2NTU0NDEyODQsIDcuOTI0MjYwNjE2MzAyNDksIDEuMTM3MTQ0OTIzMjEwMTQ0LFxuICAtOS4xNDA5OTQwNzE5NjA0NSwgLTYuNzgzNDQ3MjY1NjI1LCA4Ljg5MTgzODA3MzczMDQ2OSwgNy4xNzM3MTU1OTE0MzA2NjQsXG4gIDUuNDg4NTEwNjA4NjczMDk2LCAtMTMuMjI2NDEwODY1NzgzNjkxLCAxNS42NzgwNjE0ODUyOTA1MjcsXG4gIC0xLjU2NzAyOTQ3NjE2NTc3MTUsIC0yLjQxNDUyMzgzOTk1MDU2MTUsIC0xMC4wODExMzI4ODg3OTM5NDUsXG4gIC00LjgyNDkzNDAwNTczNzMwNSwgOC40NTc2NjczNTA3NjkwNDMsIC03LjY1NDExMjgxNTg1NjkzNCwgMS4yMjI5MTg3NDg4NTU1OTA4LFxuICAtNC43MzgxNzU4Njg5ODgwMzcsIC05Ljc3ODUxNjc2OTQwOTE4LCA1LjcyOTczODcxMjMxMDc5MSwgMC4xMTMwODAxMjE1NzY3ODYwNCxcbiAgLTAuODAzODA1MjkxNjUyNjc5NCwgLTI4Ljg2MTk2ODk5NDE0MDYyNSwgMS4xNTU2MDQ0ODE2OTcwODI1LFxuICAtMy4yMDY2MzIxMzcyOTg1ODQsIC0xMC4yOTQ0MjExOTU5ODM4ODcsIDAuMTQyOTkwODQyNDYxNTg2LFxuICAtMy44Njk4NDU2Mjg3Mzg0MDMzLCAtMC41MTE0NDc3Mjc2ODAyMDYzLCA5Ljc2NTkzNTg5NzgyNzE0OCxcbiAgLTIuNDkxMjM3MTYzNTQzNzAxLCAtMS43NzgwODQyNzgxMDY2ODk1LCA0LjA3OTk0NTU2NDI3MDAxOTUsXG4gIC0yNC4xMTAyNTIzODAzNzEwOTQsIC0zLjcxMTE1NTY1Mjk5OTg3OCwgOC40MTMzMzU4MDAxNzA4OTgsXG4gIC0xMy45NzY4NTI0MTY5OTIxODgsIDcuOTg1MzU2ODA3NzA4NzQsIC0xLjE1MDk0NzIxMzE3MjkxMjYsXG4gIDEwLjU4MTA4MjM0NDA1NTE3NiwgMC45MDg3MDY3MjQ2NDM3MDczLCAtMS40NzE5ODg0Mzk1NTk5MzY1LFxuICAtMC45MTc4OTA0ODkxMDE0MDk5LCAtNy41NjY0MDQzNDI2NTEzNjcsIC0xNC4wNjk0NDc1MTczOTUwMixcbiAgMy43MTEzMjI1NDYwMDUyNDksIDAuMjQzNjUwMTUzMjc5MzA0NSwgLTEuNzQyMzUyMTI4MDI4ODY5NixcbiAgLTEyLjQzNTQ4NTgzOTg0Mzc1LCA5LjIwNzI5NDQ2NDExMTMyOCwgOC43MzA2NDcwODcwOTcxNjgsIC0xNC42MjYwOTU3NzE3ODk1NSxcbiAgLTAuMjIzODk1NzQzNDg5MjY1NDQsIDIwLjgzNDk4NzY0MDM4MDg2LCAtNi4xNjc2OTU5OTkxNDU1MDgsXG4gIDAuNTYwODU4NDI4NDc4MjQxLCAyMC40NjY1NjYwODU4MTU0MywgMTMuMTY1MzczODAyMTg1MDU5LCAtMC40MTUzMDExMTQzMjA3NTUsXG4gIDEuNTQwNzE4NTU1NDUwNDM5NSwgNS45MDIyMzk3OTk0OTk1MTIsIDAuMTkwMjQzNDY3Njg4NTYwNDksXG4gIC0yLjUzOTc5MTU4NDAxNDg5MjYsIC04LjA0ODU0MTA2OTAzMDc2MiwgMS4wNjIxNzY4MjM2MTYwMjc4LCAtNC4yNDM2ODQyOTE4Mzk2LFxuICAxLjg5MTAyMTEzMjQ2OTE3NzIsIC0zLjk5OTY3OTU2NTQyOTY4NzUsIC0zLjg2NDQ3MTkxMjM4NDAzMyxcbiAgLTEuNTI2ODYxNDI5MjE0NDc3NSwgLTExLjE2ODkxMjg4NzU3MzI0MiwgLTguMDQ2Nzg4MjE1NjM3MjA3LFxuICAxLjUyMjUwMjMwMzEyMzQ3NDEsIC03LjY3MDI4ODU2Mjc3NDY1OCwgLTEuNDEwMTIzOTQ0MjgyNTMxNyxcbiAgLTEuMzE3Mjk3NTc3ODU3OTcxMiwgLTAuMjAyOTkwMjkzNTAyODA3NjIsIC03Ljk0MzE5MzkxMjUwNjEwMzUsXG4gIDIuNDI4NDIzNDA0NjkzNjAzNSwgLTcuMDI3ODQ4NzIwNTUwNTM3LCAxLjY0NjMzNDUyODkyMzAzNDcsIDUuMDYwMDAzNzU3NDc2ODA3LFxuICAtOS4xNjM1NjU2MzU2ODExNTIsIDAuNTM4NTQ0MTE4NDA0Mzg4NCwgNC40ODYxMzI2MjE3NjUxMzcsIDIuMjM0MjUyNDUyODUwMzQyLFxuICAtMi4wNDUwNDg0NzUyNjU1MDMsIC0xLjM4MDQ5MDU0MTQ1ODEyOTksIC00LjExNTg1MTg3OTExOTg3MyxcbiAgNi4wODAwMzgwNzA2Nzg3MTEsIDQuMjAzMzU1Nzg5MTg0NTcsIDIuMDAzNjc4MzIxODM4Mzc5LCAtMC42OTY3MzExNTAxNTAyOTkxLFxuICAyLjU0NTcwOTM3MTU2Njc3MjUsIC0wLjg1OTkxMDk2NDk2NTgyMDMsIC0xNy4zODU0MTIyMTYxODY1MjMsXG4gIDkuNDU2NDc1MjU3ODczNTM1LCAtNC4yNTA3MDA5NTA2MjI1NTksIDEzLjc1NTI1Mzc5MTgwOTA4MixcbiAgLTIxLjM3Mjc3OTg0NjE5MTQwNiwgMS44MzgwMTE5ODAwNTY3NjI3LCA2LjAyNDE4ODUxODUyNDE3LCAtOC41ODkzOTkzMzc3Njg1NTUsXG4gIDExLjk1ODE0NjA5NTI3NTg3OSwgMi42NTA3OTY0MTM0MjE2MzEsIC0xMS4xODI1ODc2MjM1OTYxOTEsIDcuMDI2Mjk1MTg1MDg5MTExLFxuICAtNS45MjY2NTEwMDA5NzY1NjI1LCAtMTcuMzk3OTAxNTM1MDM0MTgsIC0xMS42NDQ2MDI3NzU1NzM3MyxcbiAgLTEwLjU0MTczOTQ2MzgwNjE1MiwgLTE0LjY3NjkzNTE5NTkyMjg1MiwgNC40MjgwMTYxODU3NjA0OTgsXG4gIDUuNTUxODc4OTI5MTM4MTg0LCA1LjY0NzI0NDQ1MzQzMDE3NiwgLTUuNTEyNzE5MTU0MzU3OTEsIDUuMTAzNDc5ODYyMjEzMTM1LFxuICAxLjMwOTQ1Nzc3ODkzMDY2NCwgLTUuNzQyNjY4MTUxODU1NDY5LCAtNC44NTM5OTI0NjIxNTgyMDMsIC03LjcwODIwNDc0NjI0NjMzOCxcbiAgMS43MTI5MjIwOTYyNTI0NDE0LCAxLjAxMDMwMDc1NTUwMDc5MzUsIC0xNC4yODc1NDkwMTg4NTk4NjMsXG4gIDguNTM3NjcyOTk2NTIwOTk2LCAtOS42NzY1MjIyNTQ5NDM4NDgsIDcuNTA4ODk2MzUwODYwNTk2LCAtMi43NzQwMTMwNDI0NDk5NTEsXG4gIC0xLjU2ODI2ODE3OTg5MzQ5MzcsIDE1LjUyOTgxNjYyNzUwMjQ0MSwgLTAuMjEzNjQ0NDMwMDQxMzEzMTcsXG4gIDAuODgyNDE2MTI5MTEyMjQzNywgNC44MDM1ODA3NjA5NTU4MTA1LCA4LjY1MDg4NDYyODI5NTg5OCwgLTguODIyODUyMTM0NzA0NTksXG4gIDEwLjkxNDY4NTI0OTMyODYxMywgMTYuMzY3MTIwNzQyNzk3ODUsIDMuMTcwMTA2NjQ5Mzk4ODAzNywgMTguNzUwNjE2MDczNjA4NCxcbiAgNC42NzM5MDM0NjUyNzA5OTYsIDcuMTIwOTk1MDQ0NzA4MjUyLCA0LjUyNTc3NzMzOTkzNTMwMywgLTAuNjk1MDYyMTYwNDkxOTQzNCxcbiAgLTIuMTk4OTQzMzc2NTQxMTM3NywgLTguNjQ4MTkwNDk4MzUyMDUsIC0xMy44Mzk3Mzc4OTIxNTA4NzksIDguNzc4NDUyODczMjI5OTgsXG4gIC0xOC4yNjkwMDg2MzY0NzQ2MSwgLTE1LjczOTM4NTYwNDg1ODM5OCwgMS4yNDYxMTY4NzY2MDIxNzI5LFxuICAtNS4zNTg0MTE3ODg5NDA0MywgNi45MzM3OTI1OTEwOTQ5NzEsIC0xLjMzNjc0MzM1NDc5NzM2MzMsIDUuNTY1NDE0OTA1NTQ4MDk2LFxuICAtMC44MjAwNjc4MjI5MzMxOTcsIDcuMDQ2MTg1MDE2NjMyMDgsIC02LjcxNjI4NjE4MjQwMzU2NDUsXG4gIC00LjMzMjMxODc4MjgwNjM5NjUsIC03LjY4Nzc4ODk2MzMxNzg3MSwgLTIwLjMyMzM2OTk3OTg1ODQsIDIuMDUwMzgxODk4ODgwMDA1LFxuICAxOC44NTA1MjEwODc2NDY0ODQsIC01LjE0NDI5MTg3Nzc0NjU4MiwgLTIuOTM1MjEwOTQzMjIyMDQ2LFxuICAyLjMxNjIyNDA5ODIwNTU2NjQsIC0wLjI1NTM5Njc1MzU0OTU3NTgsIDEyLjIyNzg2NzEyNjQ2NDg0NCxcbiAgMTQuNDIwODc0NTk1NjQyMDksIDE5LjI2MjU1NDE2ODcwMTE3MiwgNi44MjAwMzY0MTEyODU0LCAtNi41MzM5NjI3MjY1OTMwMTgsXG4gIC0xMy45MDMyMDk2ODYyNzkyOTcsIC02LjAwMzgwNzA2Nzg3MTA5NCwgNC4yMTgyMzQwNjIxOTQ4MjQsXG4gIC0xMy4yMjQyMjk4MTI2MjIwNywgLTEwLjgwODkzMTM1MDcwODAwOCwgLTguNDk0MDc3NjgyNDk1MTE3LFxuICAxNS41MTcwNTE2OTY3NzczNDQsIDMuNjQ1NDE3OTI4Njk1Njc4NywgLTYuMzUzNjM3Njk1MzEyNSwgMTQuMTI2NTg4ODIxNDExMTMzLFxuICA1LjczOTE4MjQ3MjIyOTAwNCwgLTAuMDMzMjM5MjM0MjM4ODYyOTksIC0xLjY1NTI5NzM5ODU2NzE5OTcsXG4gIC0xNC44MDg3OTIxMTQyNTc4MTIsIDYuNDkwNjMyMDU3MTg5OTQxLCAxMy42NzMxNTAwNjI1NjEwMzUsXG4gIC0wLjM5MjA5Mzg2NzA2MzUyMjM0LCAtMTIuMDEzNjI4MDA1OTgxNDQ1LCAwLjA1NTEwNDYzNTY1NTg3OTk3NCxcbiAgMTEuNTMxMDM0NDY5NjA0NDkyLCAtMTEuMzMyMjk4Mjc4ODA4NTk0LCAwLjMxMzIxODUwNDE5MDQ0NDk1LFxuICAtMC4xODIyODc3Njc1Mjk0ODc2LCAtMy40NzA5MDE3Mjc2NzYzOTE2LCAxMC44ODM1ODU5Mjk4NzA2MDUsXG4gIC03LjA4NzM0MTMwODU5Mzc1LCAxMy4xNjQ4MDczMTk2NDExMTMsIDUuMDg1MjMxMzA0MTY4NzAxLCAtNy41MzEyMzk1MDk1ODI1MTk1LFxuICAtMS42ODQxMTExMTgzMTY2NTA0LCAwLjQwMzAzMTMxOTM3OTgwNjUsIC00Ljc2OTUzMjY4MDUxMTQ3NSxcbiAgLTAuMTE4NzM5NzUzOTYxNTYzMTEsIDEyLjMwODgwMjYwNDY3NTI5MywgMi4zNDIyNzU2MTk1MDY4MzYsXG4gIC05LjI3MzMwNDkzOTI3MDAyLCAtNS4zMzkzMDIwNjI5ODgyODEsIDQuMTM5MDg3MjAwMTY0Nzk1LCAtMy4wMzA0MjcyMTc0ODM1MjA1LFxuICAzLjQ2OTU1ODIzODk4MzE1NDMsIDguMzY3MTIwNzQyNzk3ODUyLCAtNy4yNDMxMTg3NjI5Njk5NzEsXG4gIC0xOS40NDkxNTk2MjIxOTIzODMsIDQuOTEzOTAwODUyMjAzMzY5LCAwLjUxOTc3NDA3OTMyMjgxNDksIDIxLjY1NTA4MjcwMjYzNjcyLFxuICAtMTIuNjgzOTc2MTczNDAwODc5LCAtMy41NTU1NTQzODk5NTM2MTMzLCAtMC4yNTcxMzQ2NzU5Nzk2MTQyNixcbiAgMTQuMzYxNDc0MDM3MTcwNDEsIC0xNi43MTE3MzI4NjQzNzk4ODMsIDIuOTIyMDk1Nzc1NjA0MjQ4LCAtMy42MzgzNzgxNDMzMTA1NDcsXG4gIC0xLjQ3Nzc3MDY4NjE0OTU5NzIsIDI0LjUwNzU5ODg3Njk1MzEyNSwgMS40NDM2NzA4Njg4NzM1OTYyLFxuICAyLjQxNTAyOTA0ODkxOTY3NzcsIC04Ljc3NTcyODIyNTcwODAwOCwgLTcuNDQyODA5MTA0OTE5NDM0LCAxMC4wMDc3NzgxNjc3MjQ2MSxcbiAgLTExLjUxMTQ0NzkwNjQ5NDE0LCA3LjY5OTE0MTAyNTU0MzIxMywgLTguMzE4NDMzNzYxNTk2NjgsIDAuMDgyODAzMzMxMzE1NTE3NDMsXG4gIC0xMC42ODMzMTE0NjI0MDIzNDQsIDAuNjgxOTQxMjExMjIzNjAyMywgMi4wODg0NDM3NTYxMDM1MTU2LFxuICAtMS43NTY2OTI2NDc5MzM5NiwgLTEyLjE4MzUwMTI0MzU5MTMwOSwgLTkuOTE5NTgxNDEzMjY5MDQzLFxuICAtMC4yOTU4ODIxOTUyMzQyOTg3LCAyLjg5MTc4NzI5MDU3MzEyLCAtMi44NjY5MDkwMjcwOTk2MDk0LFxuICAtNy42OTAzODkxNTYzNDE1NTMsIDAuMTYxNTg0NjMwNjA4NTU4NjUsIC04LjEwNTgzMDE5MjU2NTkxOCxcbiAgMi41NzgyNzk3MzM2NTc4MzcsIC00LjgyODgyNjQyNzQ1OTcxNywgLTEuODAwMzM0MzM0MzczNDc0MSwgNS4xOTc1NDYwMDUyNDkwMjMsXG4gIDYuMzA5MTYxNjYzMDU1NDIsIC0zLjc3MjU1MjI1MTgxNTc5NiwgLTMuNjc0ODIwODk5OTYzMzc5LCAtNi42OTQ4MTAzOTA0NzI0MTIsXG4gIDEuODUwNjYxNTE2MTg5NTc1MiwgNC40MzI5NjkwOTMzMjI3NTQsIC0xNS4wOTgxMzExNzk4MDk1NywgLTYuOTAzMjcxMTk4MjcyNzA1LFxuICA2LjY0MjUxNTY1OTMzMjI3NSwgNi40NDI2MjUwNDU3NzYzNjcsIC02Ljc5NDA5NzkwMDM5MDYyNSwgLTcuNTczOTc5ODU0NTgzNzQsXG4gIC0zLjUyNjIxNDU5OTYwOTM3NSwgMC44ODA0OTk0ODIxNTQ4NDYyLCAtMTUuNDE1NTQ1NDYzNTYyMDEyLFxuICAxLjA1MDIzODg0NzczMjU0NCwgLTQuMTkwOTU1NjM4ODg1NDk4LCAtNC41ODQ0NDkyOTEyMjkyNDgsXG4gIC0xMC40NDY5MjQyMDk1OTQ3MjcsIDEwLjUzNTc0MzcxMzM3ODkwNiwgMC44MTg2Mjg4NDc1OTkwMjk1LFxuICAxLjIwNDI1MDIxNjQ4NDA2OTgsIDIuNjc2Nzk5NTM1NzUxMzQyOCwgLTMuODg1MTcwOTM2NTg0NDcyNyxcbiAgMC4wNTY1MjExNzcyOTE4NzAxMiwgLTAuNTA3MjAxMDE1OTQ5MjQ5MywgLTAuNTk4NjcyOTg2MDMwNTc4NixcbiAgLTguMTYxNjQzOTgxOTMzNTk0LCAtMy45MTU2MTYwMzU0NjE0MjYsIDEuMTc3Mjc1Nzc2ODYzMDk4MSwgNS4xMTcwNDg3NDAzODY5NjMsXG4gIC0xLjMxNzAyNzY4ODAyNjQyODIsIDEuNjU5MTQ3NjIwMjAxMTEwOCwgNS45NDAyMDcwMDQ1NDcxMTksXG4gIC0yLjkzMzc2NTE3Mjk1ODM3NCwgLTEuNDk1NTY0ODE4MzgyMjYzMiwgLTYuMDU5MjIyMjIxMzc0NTEyLFxuICAtOS4xMjk4Mzk4OTcxNTU3NjIsIDEuNDQ5OTQxMzk2NzEzMjU2OCwgNi44OTAyNzI2MTczNDAwODgsIC01LjU5MDEwNjk2NDExMTMyOCxcbiAgMS45OTI5MjIzMDYwNjA3OTEsIC0xLjU1NjA2ODc3ODAzODAyNSwgLTAuMDYwMjM1NTU2MjE1MDQ3ODM2LFxuICAtMC44MzM0NzEzNTc4MjI0MTgyLCAtNS4zMDY4MjY1OTE0OTE2OTksIC0xMC4wMDc3ODg2NTgxNDIwOSxcbiAgLTMuNzg3MTE2MDUwNzIwMjE1LCAtNy4wNzMwODQ4MzEyMzc3OTMsIC02LjAwNzU1MjE0NjkxMTYyMSxcbiAgLTYuMDYxODAxNDMzNTYzMjMyLCAyLjk5OTM5MTc5NDIwNDcxMiwgLTIuNzQ2NjA4NDk1NzEyMjgwMyxcbiAgLTAuNzQyODk4ODIxODMwNzQ5NSwgMC45MDM3NzE1MTk2NjA5NDk3LCA0LjAyMDEwMTA3MDQwNDA1MywgNC4zMjk1NjgzODYwNzc4ODEsXG4gIC0xLjU4OTg5OTMwMTUyODkzMDcsIC00LjYzNjE2ODQ3OTkxOTQzNCwgLTEwLjg5MDk3OTc2Njg0NTcwMyxcbiAgNC4xNjI0Mzk4MjMxNTA2MzUsIC03LjI3Mzg1MjgyNTE2NDc5NSwgLTMuMTQyNzM1MDA0NDI1MDQ5LCAtNy45MzIzMTM0NDIyMzAyMjUsXG4gIDAuOTExMzU0NzgwMTk3MTQzNiwgLTQuMDc0MjI0NDcyMDQ1ODk4LCA0LjU0ODIwMjUxNDY0ODQzNzUsXG4gIC0yLjA3ODE1Njk0ODA4OTU5OTYsIDAuNjYyNzgzODAxNTU1NjMzNSwgMS43NTk2NzM4MzM4NDcwNDYsIC0zLjk5Mjc1Mjc5MDQ1MTA1LFxuICA1Ljg3NDc5MjU3NTgzNjE4MiwgMi4zNjg0ODU0NTA3NDQ2MjksIC0zLjIwMzk1OTcwMzQ0NTQzNDYsIDEzLjI0MzgxNTQyMjA1ODEwNSxcbiAgMTUuMjg1OTA1ODM4MDEyNjk1LCAtNS42ODQ1MTY5MDY3MzgyODEsIC05LjY2MzI0MDQzMjczOTI1OCxcbiAgLTEuMDQ1MzI3NjYzNDIxNjMwOSwgMS4yMzE2NTU0Nzg0Nzc0NzgsIDAuMTY4ODcyMDU4MzkxNTcxMDQsXG4gIC03LjgyNzE5MDg3NjAwNzA4LCAwLjYyODg3NjM4ODA3Mjk2NzUsIC00LjE4ODI0NjcyNjk4OTc0NiwgLTQuMDU0MTg1ODY3MzA5NTcsXG4gIDMuNDM0NDM3MDM2NTE0MjgyMiwgLTUuNjg2NzQ1NjQzNjE1NzIzLCA4Ljc1MjE3NDM3NzQ0MTQwNiwgMTEuNzUwMTQ0OTU4NDk2MDk0LFxuICAtNy4wNTkzMDE4NTMxNzk5MzIsIC0zLjI4MzI3MjAyNzk2OTM2MDQsIDMuMDg1MTY0MzA4NTQ3OTczNixcbiAgLTEuMDgzMzY0MjQ4Mjc1NzU2OCwgMS4zNjU5MjI0NTEwMTkyODcsIC01LjgyOTkxNTA0NjY5MTg5NDUsXG4gIDEyLjg1MDM4NjYxOTU2Nzg3MSwgLTUuNTk0NDIyMzQwMzkzMDY2LCA2Ljk5ODU3MTM5NTg3NDAyMywgLTkuMDkyMDk5MTg5NzU4MyxcbiAgMi42MDEyODczNjQ5NTk3MTcsIC03LjQwMjA2MTQ2MjQwMjM0NCwgNi45ODE2NTA4MjkzMTUxODU1LCAxMy42MzI1NTIxNDY5MTE2MjEsXG4gIC0zLjk1NzU3NDYwNTk0MTc3MjUsIDIuMDg0NDAxMzY5MDk0ODQ4NiwgLTUuNTU5MjA2MDA4OTExMTMzLFxuICAtMS44NzIzOTU3NTM4NjA0NzM2LCAtNS40NjI2ODI3MjM5OTkwMjMsIC00LjAxMjIxOTQyOTAxNjExMyxcbiAgMS41Njk5MDg4NTczNDU1ODEsIC01LjExNTkwMTQ3MDE4NDMyNiwgLTQuMTU2NTQwODcwNjY2NTA0LCAtNS41NDk3NTI3MTIyNDk3NTYsXG4gIC03LjQ0NjA3MjEwMTU5MzAxOCwgLTguNTAxNDYwMDc1Mzc4NDE4LCAxLjMyMjk5MjkyMDg3NTU0OTMsXG4gIC0zLjYwMTQzNDQ2OTIyMzAyMjUsIC0yLjU5ODU2MzkwOTUzMDYzOTYsIC0xMC4zMTAyNzc5Mzg4NDI3NzMsXG4gIC0xNC4zNjAxMzY5ODU3Nzg4MDksIC0xLjI1Mzg3MTQ0MDg4NzQ1MTIsIC0yLjI1NjY5MDk3OTAwMzkwNjIsXG4gIC02LjE0NDM4NDg2MDk5MjQzMiwgLTYuMjc0NjU2NzcyNjEzNTI1LCA5LjYwMzQ4Nzk2ODQ0NDgyNCwgMi4yNDQ2ODg5ODc3MzE5MzM2LFxuICAtMC4xNjI0NzA0MzAxMzU3MjY5MywgLTMuMTA2Mzc5NTA4OTcyMTY4LCAxLjYyODg1NzM3NDE5MTI4NDIsXG4gIDMuNDAyMjg3NzIxNjMzOTExLCAyLjIzNzc4MTc2MzA3Njc4MjIsIDcuNzU1ODQ4ODg0NTgyNTE5NSwgMy42ODE1OTkzNzg1ODU4MTU0LFxuICAtMC4wMzg1MjY5OTMyNDQ4ODY0LCAtMi42MTczNjc3NDQ0NDU4MDEsIC03LjcwMjQ2OTgyNTc0NDYyOSxcbiAgNS40ODY2MDk5MzU3NjA0OTgsIDMuODg2NzI0NzEwNDY0NDc3NSwgNS4xOTYwMjYzMjUyMjU4MywgLTMuMjkzNjQyOTk3NzQxNjk5LFxuICAxLjQ5MDEyMzYyOTU3MDAwNzMsIDcuNDUxMTEwODM5ODQzNzUsIC01Ljg1Mjc2MDMxNDk0MTQwNiwgLTYuNTQzODU0NzEzNDM5OTQxLFxuICAtMy4yMDM1Mjc0NTA1NjE1MjM0LCAtMS40MjMwMTIwMTgyMDM3MzU0LCAtMi43MzM3MTc0NDE1NTg4MzgsXG4gIC03LjM2NzQyNDQ4ODA2NzYyNywgLTUuMDY5MzQ4MzM1MjY2MTEzLCAtMS41MDc3NDUzODUxNjk5ODMsIDUuNjIxMjM3NzU0ODIxNzc3LFxuICAwLjEyMzYxMjk5MjQ2NTQ5NjA2LCA0LjEwOTc1ODg1MzkxMjM1MzUsIDkuMTExOTIzMjE3NzczNDM4LFxuICAzLjEyMjM3NjY4MDM3NDE0NTUsIC0yLjU4MjExNTY1MDE3NzAwMiwgLTAuOTg1NzYxODgwODc0NjMzOCxcbiAgLTUuMTYzNjQ0MzEzODEyMjU2LCA1LjMwNDAyNDY5NjM1MDA5OCwgLTMuODM3MzA5ODM3MzQxMzA4NixcbiAgMS41MTI0MTM2MjA5NDg3OTE1LCAtMC4zMDc4NzM2OTYwODg3OTA5LCAtMS40OTkzNzgyMDQzNDU3MDMxLFxuICAtNi45NDAyMzMyMzA1OTA4MiwgMi4zNzM1MzkyMDkzNjU4NDQ3LCA0LjA5OTY5NjYzNjE5OTk1MSwgMy41OTY5MzA5ODA2ODIzNzMsXG4gIDEuMzY3OTE0Nzk1ODc1NTQ5MywgLTQuMjc4NDY0MzE3MzIxNzc3LCA1LjUzNTA3MjMyNjY2MDE1NiwgMS4yMDgxOTk5Nzc4NzQ3NTU5LFxuICAtNS4wMTU4MjI0MTA1ODM0OTYsIC03LjE5OTM2NDE4NTMzMzI1MiwgNS4yOTg5NDI1NjU5MTc5NjksXG4gIC0wLjkyNTM2ODQ4NzgzNDkzMDQsIDIuNjgwMjk5NzU4OTExMTMzLCAtMy4zMzMyNDkwOTIxMDIwNTEsXG4gIC0wLjQxODg4ODY4ODA4NzQ2MzQsIC04LjQ0MDgzMTE4NDM4NzIwNywgNC4wMTgyMjA5MDE0ODkyNTgsXG4gIC0xMS44MDg4NzY5OTEyNzE5NzMsIDEuMjAyODEwNTI1ODk0MTY1LCAyLjU3MDgxMzg5NDI3MTg1MDYsXG4gIC01LjYxMjUwODc3MzgwMzcxMSwgMi4yNDUyMDU0MDIzNzQyNjc2LCAtNC41NDEwNTQ3MjU2NDY5NzMsXG4gIC0xLjMyNDAxMjYzNzEzODM2NjcsIDEyLjQxMjkwMTg3ODM1NjkzNCwgLTEwLjczNTQ3MjY3OTEzODE4NCxcbiAgLTEyLjI0MjczNzc3MDA4MDU2NiwgMy42Mjc4MDcxNDAzNTAzNDIsIC0xMS4zNDkxMDI5NzM5Mzc5ODgsXG4gIC0xNi4zNTc5OTc4OTQyODcxMSwgMS4yOTc3NTgzNDA4MzU1NzEzLCAxMi4yMjM2NDUyMTAyNjYxMTMsXG4gIC02LjY3NzE4NjAxMjI2ODA2NiwgLTYuNjU5MjM4MzM4NDcwNDU5LCAxLjQwNDkxNjY0NDA5NjM3NDUsXG4gIC0yLjEwNzUzNDE3MDE1MDc1NywgNC42OTgzMDY1NjA1MTYzNTcsIDQuNzU2MjEzMTg4MTcxMzg3LCAtMS40OTY0MjE4MTM5NjQ4NDM4LFxuICAxNy4yNzgzNjYwODg4NjcxODgsIDcuOTA5MTgwMTY0MzM3MTU4LCAtNS4wOTE1MTMxNTY4OTA4NjksIC02LjIwNTk3NTA1NTY5NDU4LFxuICAtMjEuMTU1OTkyNTA3OTM0NTcsIDEwLjg0NDY5MDMyMjg3NTk3Nyxcbl0pXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy51ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsge1wic3JjX3BhZ2VzX3Nwb3RfY21hLXdvcmtlcl9qc1wiOlwiN2U3OGE0NThjNTU5OWE2Njg0YzdcIixcInNyY19wYWdlc19zcG90X2IyZC13b3JrZXJfanNcIjpcIjcwODUyNzc0MWEyMWY1ZTM5MTBmXCJ9W2NodW5rSWRdICsgXCIuanNcIjtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcInNwb3RcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsInJlcXVpcmUoXCIuLi8uLi9tYWluLmNzc1wiKVxucmVxdWlyZShcIi4vaW5kZXguY3NzXCIpXG5cbmltcG9ydCB7XG4gIHcsXG4gIGgsXG4gIC8vIGNhbWVyYUluaXRYLFxuICBjYW1lcmFPZmZzZXQsXG4gIGNhbWVyYUluaXRZLFxuICBuV29ya2VycyxcbiAgZXBMZW4sXG4gIG1ldGVyc1RvUGl4ZWxzLFxuICBkaXNwbGF5Q3JlYXR1cmVDb3VudCxcbn0gZnJvbSBcIi4vZ2xvYmFscy5qc1wiXG5cbmltcG9ydCB7IGRyYXdTcG90IH0gZnJvbSBcIi4vZHJhdy5qc1wiXG5cbmxldCBjcmVhdHVyZXNQZXJXb3JrZXIsXG4gIC8vIHBvc2l0aW9uc0hpc3RvcnksXG4gIC8vIGNhbWVyYVggPSBjYW1lcmFJbml0WCxcbiAgLy8gd2VpZ2h0Q291bnQsXG4gIC8vIGJpYXNDb3VudCxcbiAgLy8gcG9wc2l6ZSxcbiAgc2NvcmVTb2x1dGlvbkluZm9zID0gW10sXG4gIHNjb3Jlc1JlY2VpdmVkID0gMCxcbiAgaGlzdG9yaWVzUmVjZWl2ZWQgPSAwLFxuICBjdXJyZW50SGlzdG9yeSA9IDAsXG4gIG5leHRIaXN0b3J5ID0gMSxcbiAgbG9vcGluZyA9IGZhbHNlXG5cbmNvbnN0IHNpbXVsYXRpb25Xb3JrZXJzID0gW10sXG4gIGRyYXdIaXN0b3JpZXMgPSBbXG4gICAgbmV3IEZsb2F0MzJBcnJheShkaXNwbGF5Q3JlYXR1cmVDb3VudCAqIGVwTGVuICogNyksXG4gICAgbmV3IEZsb2F0MzJBcnJheShkaXNwbGF5Q3JlYXR1cmVDb3VudCAqIGVwTGVuICogNyksXG4gIF1cbi8vIHdvcmtlckhpc3RvcnkgPSBuZXcgSW50OEFycmF5KGVwTGVuKS5maWxsKDApLFxuXG5jb25zdCBjYW52YXNGRyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzLWZnXCIpLFxuICBjdHhGRyA9IGNhbnZhc0ZHLmdldENvbnRleHQoXCIyZFwiKSxcbiAgY2FudmFzQkcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhcy1iZ1wiKSxcbiAgY3R4QkcgPSBjYW52YXNCRy5nZXRDb250ZXh0KFwiMmRcIiksXG4gIGNhbnZhc1RlcnJhaW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhcy10ZXJyYWluXCIpLFxuICBjdHhUZXJyYWluID0gY2FudmFzVGVycmFpbi5nZXRDb250ZXh0KFwiMmRcIiksXG4gIGNhbnZhc0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzLWRpdlwiKVxuXG5jYW52YXNEaXYuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgYGhlaWdodDoke2ggKyAxMH1weDtgKVxuY2FudmFzRkcud2lkdGggPSB3XG5jYW52YXNGRy5oZWlnaHQgPSBoXG5jYW52YXNCRy53aWR0aCA9IHdcbmNhbnZhc0JHLmhlaWdodCA9IGhcblxuY29uc3QgdGVycmFpbkggPSA0MFxuXG5jYW52YXNUZXJyYWluLndpZHRoID0gd1xuY2FudmFzVGVycmFpbi5oZWlnaHQgPSB0ZXJyYWluSFxuY2FudmFzVGVycmFpbi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBgdG9wOiR7aH1weDtgKVxuXG5jdHhCRy5maWxsU3R5bGUgPSBcInNreWJsdWVcIlxuY3R4QkcuZmlsbFJlY3QoMCwgMCwgdywgaClcbmN0eEJHLmZpbGxTdHlsZSA9IFwiZ3JlZW5cIlxuY3R4QkcuZmlsbFJlY3QoMCwgY2FtZXJhSW5pdFkgLSAyLCB3LCBoKVxuXG5jb25zdCBjbWFfd29ya2VyID0gbmV3IFdvcmtlcihuZXcgVVJMKFwiLi9jbWEtd29ya2VyLmpzXCIsIGltcG9ydC5tZXRhLnVybCkpXG5sZXQgY21hSW5pdGlhbGl6ZWQgPSBmYWxzZVxuXG5sZXQgc3RlcHNEaXNwbGF5ZWQgPSAwXG5cbmZvciAobGV0IGkgPSAwOyBpIDwgbldvcmtlcnM7IGkrKykge1xuICBjb25zdCBzaW11bGF0aW9uX3dvcmtlciA9IG5ldyBXb3JrZXIoXG4gICAgbmV3IFVSTChcIi4vYjJkLXdvcmtlci5qc1wiLCBpbXBvcnQubWV0YS51cmwpXG4gIClcbiAgc2ltdWxhdGlvbl93b3JrZXIub25tZXNzYWdlID0gKGUpID0+IHtcbiAgICBjb25zdCBbaW5mbywgbXNnXSA9IGUuZGF0YVxuICAgIC8vIGlmIChpbmZvID09IFwicG9zaXRpb25zXCIpIHtcbiAgICAvLyAgIGNvbnN0IHN0ZXAgPSBtc2dbbXNnLmxlbmd0aCAtIDFdXG4gICAgLy8gICBmb3IgKGxldCBqID0gMDsgaiA8IG1zZy5sZW5ndGggLSAxOyBqKyspIHtcbiAgICAvLyAgICAgcG9zaXRpb25zSGlzdG9yeVsobXNnLmxlbmd0aCAtIDEpICogKGkgKyBuV29ya2VycyAqIHN0ZXApICsgal0gPSBtc2dbal1cbiAgICAvLyAgIH1cbiAgICAvLyAgIHdvcmtlckhpc3Rvcnlbc3RlcF0rK1xuICAgIC8vICAgaWYgKHdvcmtlckhpc3Rvcnlbc3RlcF0gPiBuV29ya2Vycykge1xuICAgIC8vICAgICB3b3JrZXJIaXN0b3J5W3N0ZXBdIC09IG5Xb3JrZXJzXG4gICAgLy8gICB9XG4gICAgLy8gICAvLyB9IGVsc2UgaWYgKFtcInNvbHV0aW9uc1Njb3Jlc1wiLCBcInNjb3JlSW5mb3NcIl0uaW5jbHVkZXMoaW5mbykpIHtcbiAgICAvLyB9IGVsc2VcbiAgICBpZiAoaW5mbyA9PSBcInNjb3JlU29sdXRpb25JbmZvXCIpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY3JlYXR1cmVzUGVyV29ya2VyOyBqKyspIHtcbiAgICAgICAgc2NvcmVTb2x1dGlvbkluZm9zW2kgKiBjcmVhdHVyZXNQZXJXb3JrZXIgKyBqXSA9IG1zZ1tqXVxuICAgICAgfVxuICAgICAgc2NvcmVzUmVjZWl2ZWQrK1xuICAgICAgaWYgKHNjb3Jlc1JlY2VpdmVkID09IG5Xb3JrZXJzKSB7XG4gICAgICAgIHByb2Nlc3NTY29yZXMoKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaW5mbyA9PSBcImluaXRJbmZvXCIgJiYgIWNtYUluaXRpYWxpemVkKSB7XG4gICAgICBjcmVhdHVyZXNQZXJXb3JrZXIgPSBtc2cuY3JlYXR1cmVzUGVyV29ya2VyXG4gICAgICBjb25zb2xlLmxvZyhcInd0IGNvdW50XCIsIG1zZy53ZWlnaHRDb3VudClcbiAgICAgIGNvbnNvbGUubG9nKFwiYmlhcyBjb3VudFwiLCBtc2cuYmlhc0NvdW50KVxuICAgICAgLy8gd2VpZ2h0Q291bnQgPSBtc2cud2VpZ2h0Q291bnRcbiAgICAgIC8vIGJpYXNDb3VudCA9IG1zZy5iaWFzQ291bnRcbiAgICAgIC8vIHBvcHNpemUgPSBjcmVhdHVyZXNQZXJXb3JrZXIgKiBuV29ya2Vyc1xuICAgICAgLy8gICBuX2RpbSA9IG1zZy5uX2RpbVxuICAgICAgY21hX3dvcmtlci5wb3N0TWVzc2FnZShbXCJpbml0SW5mb1wiLCBtc2ddKVxuICAgICAgLy8gcG9zaXRpb25zSGlzdG9yeSA9IG5ldyBGbG9hdDMyQXJyYXkoXG4gICAgICAvLyAgIDcgKiBjcmVhdHVyZXNQZXJXb3JrZXIgKiBuV29ya2VycyAqIGVwTGVuXG4gICAgICAvLyApXG4gICAgICBjbWFJbml0aWFsaXplZCA9IHRydWVcbiAgICB9IGVsc2UgaWYgKGluZm8gPT0gXCJkcmF3SGlzdG9yeVwiKSB7XG4gICAgICBjb25zdCByYW5rID0gbXNnLnJhbmssXG4gICAgICAgIGhpc3RvcnkgPSBtc2cuaGlzdG9yeVxuICAgICAgc2F2ZUhpc3RvcnkoaGlzdG9yeSwgcmFuaylcbiAgICAgIGhpc3Rvcmllc1JlY2VpdmVkKytcbiAgICAgIGlmIChoaXN0b3JpZXNSZWNlaXZlZCA9PSBkaXNwbGF5Q3JlYXR1cmVDb3VudCkge1xuICAgICAgICBzdGVwc0Rpc3BsYXllZCA9IDBcbiAgICAgICAgc3dhcEhpc3RvcnkoKVxuICAgICAgICBoaXN0b3JpZXNSZWNlaXZlZCA9IDBcbiAgICAgICAgaWYgKCFsb29waW5nKSB7XG4gICAgICAgICAgbG9vcGluZyA9IHRydWVcbiAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBzaW11bGF0aW9uV29ya2Vycy5wdXNoKHNpbXVsYXRpb25fd29ya2VyKVxufVxuXG5mb3IgKGxldCB3b3JrZXIgb2Ygc2ltdWxhdGlvbldvcmtlcnMpIHtcbiAgd29ya2VyLnBvc3RNZXNzYWdlKFtcInN0YXJ0XCJdKVxufVxuXG5jbWFfd29ya2VyLm9ubWVzc2FnZSA9IChlKSA9PiB7XG4gIGNvbnN0IFtpbmZvLCBtc2ddID0gZS5kYXRhXG4gIGlmIChpbmZvID09IFwic29sdXRpb25zXCIpIHtcbiAgICBjb25zdCB3b3JrZXJTb2x1dGlvbnNMZW5ndGggPSBtc2cubGVuZ3RoIC8gbldvcmtlcnNcbiAgICBsZXQgc29sdXRpb25zSWR4ID0gMFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbldvcmtlcnM7IGkrKykge1xuICAgICAgY29uc3Qgd29ya2VyU29sdXRpb25zID0gbXNnLnNsaWNlKFxuICAgICAgICBzb2x1dGlvbnNJZHgsXG4gICAgICAgIHNvbHV0aW9uc0lkeCArIHdvcmtlclNvbHV0aW9uc0xlbmd0aFxuICAgICAgKVxuICAgICAgc2ltdWxhdGlvbldvcmtlcnNbaV0ucG9zdE1lc3NhZ2UoW1wic29sdXRpb25zXCIsIHdvcmtlclNvbHV0aW9uc10pXG4gICAgICBzb2x1dGlvbnNJZHggKz0gd29ya2VyU29sdXRpb25zTGVuZ3RoXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGxvb3AoKSB7XG4gIGN0eEZHLmNsZWFyUmVjdCgwLCAwLCB3LCBoKVxuICBjb25zdCBwb3NpdGlvbnNMZW5ndGggPSBkaXNwbGF5Q3JlYXR1cmVDb3VudCAqIDcsXG4gICAgcG9zaXRpb25zSGlzdG9yeSA9IGRyYXdIaXN0b3JpZXNbY3VycmVudEhpc3RvcnldLFxuICAgIHBvc2l0aW9ucyA9IHBvc2l0aW9uc0hpc3Rvcnkuc2xpY2UoXG4gICAgICBzdGVwc0Rpc3BsYXllZCAqIHBvc2l0aW9uc0xlbmd0aCxcbiAgICAgIChzdGVwc0Rpc3BsYXllZCArIDEpICogcG9zaXRpb25zTGVuZ3RoXG4gICAgKVxuXG4gIGNvbnN0IGN1cnJlbnRNYXhYID0gcG9zaXRpb25zWzBdXG4gIGNvbnN0IGNhbWVyYVggPSBNYXRoLnJvdW5kKC1jdXJyZW50TWF4WCAqIG1ldGVyc1RvUGl4ZWxzIC0gY2FtZXJhT2Zmc2V0ICsgdylcblxuICBjdHhUZXJyYWluLmNsZWFyUmVjdCgwLCAwLCB3LCB0ZXJyYWluSClcbiAgY29uc3QgdGVycmFpblggPSBjYW1lcmFYICUgd1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDIwOyBpKyspIHtcbiAgICBsZXQgY3VycmVudFggPSAodGVycmFpblggLSAxMDAgKiBpKSAlIHdcbiAgICBpZiAoY3VycmVudFggPCAwKSB7XG4gICAgICBjdXJyZW50WCArPSB3XG4gICAgfVxuICAgIGN0eFRlcnJhaW4uYmVnaW5QYXRoKClcbiAgICBjdHhUZXJyYWluLm1vdmVUbyhjdXJyZW50WCwgMClcbiAgICBjdHhUZXJyYWluLmxpbmVUbyhjdXJyZW50WCwgdGVycmFpbkgpXG4gICAgY3R4VGVycmFpbi5zdHJva2UoKVxuICB9XG5cbiAgZm9yIChsZXQgaSA9IGRpc3BsYXlDcmVhdHVyZUNvdW50IC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBjb25zdCBpZHggPSBpICogN1xuICAgIGRyYXdTcG90KGNhbWVyYVgsIGNhbWVyYUluaXRZLCAuLi5wb3NpdGlvbnMuc2xpY2UoaWR4LCBpZHggKyA3KSwgY3R4RkcpXG4gIH1cblxuICBzdGVwc0Rpc3BsYXllZCsrXG4gIGlmIChzdGVwc0Rpc3BsYXllZCA9PSBlcExlbikge1xuICAgIHN0ZXBzRGlzcGxheWVkID0gMFxuICB9XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKVxufVxuXG5mdW5jdGlvbiBnZXRTY29yZShzY29yZUluZm8pIHtcbiAgLy8gbGV0IHNjb3JlID0gc3BvdC5jaGFzc2lzVmVsWFNxRXJyU3VtICsgc3BvdC5yb2xsaW5nVmVsWFNxRXJyU3VtXG4gIC8vIGxldCBzY29yZSA9IDFlMyAqIHNwb3QuZm9vdFRhbmdlbnRJbXB1bHNlU3VtXG4gIC8vIGNvbnN0IGZpbmFsWCA9IHNjb3JlSW5mb1tcImZpbmFsWFwiXVxuICAvLyAseE1heCA9IHNjb3JlSW5mb1tcInhNYXhcIl1cbiAgLy8gLy8gLy8gLy8gbGV0IHNjb3JlID0gLTFlMyAqIE1hdGguc2lnbihmaW5hbFgpICogZmluYWxYICogZmluYWxYXG4gIC8vIC8vIC8vIC8vIHNjb3JlIC09IDFlMyAqIHNwb3QueE1heCAqIHNwb3QueE1heFxuICAvLyBsZXQgc2NvcmUgPSAtMWUyICogZmluYWxYICogZmluYWxYICogZmluYWxYXG4gIC8vIHNjb3JlIC09IDFlMiAqIHhNYXggKiB4TWF4ICogeE1heFxuICBsZXQgZGlzdFN1bSA9IHNjb3JlSW5mb1tcImZpbmFsWFwiXSArIHNjb3JlSW5mb1tcInhNYXhcIl1cbiAgZGlzdFN1bSAvPSBlcExlblxuICAvLyBkaXN0U3VtICo9IDFlMlxuICBsZXQgc2NvcmVEaXN0ID0gLU1hdGguc2lnbihkaXN0U3VtKSAqIGRpc3RTdW0gKiBkaXN0U3VtXG4gIHNjb3JlRGlzdCAqPSAxZTVcbiAgLy8gbGV0IHNjb3JlID0gLTFlMiAqIChmaW5hbFggKyB4TWF4KVxuICBsZXQgdGFuZ2VudEltcHVsc2VTdW0gPSBzY29yZUluZm8uZm9vdFRhbmdlbnRJbXB1bHNlU3VtXG4gIHRhbmdlbnRJbXB1bHNlU3VtICo9IC0xZS0zICogdGFuZ2VudEltcHVsc2VTdW1cbiAgLy8gLy8gc2NvcmUgLT0gMWUzICogdGFuZ2VudEltcHVsc2VTdW0gKiB0YW5nZW50SW1wdWxzZVN1bSAqIHRhbmdlbnRJbXB1bHNlU3VtXG4gIGxldCBmb290Tm9ybWFsSW1wdWxzZVNxU3VtID0gc2NvcmVJbmZvLmZvb3ROb3JtYWxJbXB1bHNlQWJzU3VtIC8gZXBMZW5cbiAgZm9vdE5vcm1hbEltcHVsc2VTcVN1bSAqPSAtMWUzICogZm9vdE5vcm1hbEltcHVsc2VTcVN1bVxuICBsZXQgbm9uRm9vdE5vcm1hbEltcHVsc2VTcVN1bSA9IHNjb3JlSW5mby5ub25Gb290Tm9ybWFsSW1wdWxzZUFic1N1bSAvIGVwTGVuXG4gIG5vbkZvb3ROb3JtYWxJbXB1bHNlU3FTdW0gKj0gMmU1ICogbm9uRm9vdE5vcm1hbEltcHVsc2VTcVN1bVxuXG4gIC8vIHNjb3JlICs9IDEuMCAqIHNjb3JlSW5mby5ub25Gb290Tm9ybWFsSW1wdWxzZUFic1N1bVxuICAvLyBsZXQgY2xpcHBlZE91dHB1dFN1bXMgPSAwLFxuICBsZXQgY2xpcHBlZFNwZWVkU3VtcyA9IDBcbiAgbGV0IG1vdG9yU3BlZWRTdW1zU3VtID0gMFxuICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgIC8vIGNsaXBwZWRPdXRwdXRTdW1zICs9XG4gICAgLy8gICAxZS0xMiAqXG4gICAgLy8gICBzY29yZUluZm8uY2xpcHBlZE91dHB1dFNxU3Vtc1tpXSAqXG4gICAgLy8gICBzY29yZUluZm8uY2xpcHBlZE91dHB1dFNxU3Vtc1tpXVxuICAgIGxldCBjbGlwcGVkU3BlZWRNZWFuID0gc2NvcmVJbmZvLmNsaXBwZWRTcGVlZFNxU3Vtc1tpXSAvIGVwTGVuXG4gICAgY2xpcHBlZFNwZWVkU3VtcyArPSBjbGlwcGVkU3BlZWRNZWFuICogY2xpcHBlZFNwZWVkTWVhblxuICAgIGxldCBtb3RvclNwZWVkU3VtID0gTWF0aC5hYnMoc2NvcmVJbmZvLm1vdG9yU3BlZWRTdW1zW2ldKSAvIGVwTGVuXG4gICAgbW90b3JTcGVlZFN1bSAqPSBtb3RvclNwZWVkU3VtXG4gICAgbW90b3JTcGVlZFN1bXNTdW0gKz0gbW90b3JTcGVlZFN1bVxuICB9XG4gIGNsaXBwZWRTcGVlZFN1bXMgKj0gMWUxXG4gIG1vdG9yU3BlZWRTdW1zU3VtICo9IDFlLTFcblxuICAvLyAvLyAvLyAvLyAvLyBpZiAoIXNpbXBsZVNjb3JlKSB7XG4gIGxldCBjaGFzc2lzQW5nbGVFcnIgPSBzY29yZUluZm8uY2hhc3Npc0FuZ2xlRXJyIC8gZXBMZW5cbiAgY2hhc3Npc0FuZ2xlRXJyICo9IDEuMCAqIGNoYXNzaXNBbmdsZUVyclxuICAvLyBzY29yZSArPSAxZS0zICogc3BvdC5jaGFzc2lzQW5nbGVFcnIgKiBzcG90LmNoYXNzaXNBbmdsZUVyclxuICAvLyBsZXQgbW90b3JTcGVlZFNxID0gc2NvcmVJbmZvW1wibW90b3JTcGVlZFNxU3VtXCJdIC8gZXBMZW5cbiAgLy8gbW90b3JTcGVlZFNxICo9IDFlLTMgKiBtb3RvclNwZWVkU3FcbiAgLy8gc2NvcmUgLT0gMWUxICogc2NvcmVJbmZvW1wibW90b3JTcGVlZERpZmZTcVN1bVwiXVxuXG4gIGxldCBjaGFzc2lzQW5nbGVTcUVyciA9IHNjb3JlSW5mby5jaGFzc2lzQW5nbGVTcUVyciAvIGVwTGVuXG4gIGNoYXNzaXNBbmdsZVNxRXJyICo9IDEuMFxuICAvLyBzY29yZSArPSAxZS00ICogc3BvdC5jaGFzc2lzQW5nbGVTcUVyciAqIHNwb3QuY2hhc3Npc0FuZ2xlU3FFcnJcblxuICAvLyAvLyBzY29yZSArPSAxZS0yICogc3BvdC55U3FEaWZmU3VtXG4gIGxldCB5U3FEaWZmU3VtID0gc2NvcmVJbmZvLnlTcURpZmZTdW1cbiAgeVNxRGlmZlN1bSAqPSAxZS0zXG4gIC8vIHNjb3JlICs9IDFlLTYgKiBzcG90LnlTcURpZmZTdW0gKiBzcG90LnlTcURpZmZTdW1cbiAgLy8gLy8gLy8gc2NvcmUgKz0gMWUtMiAqIHNwb3QueVZlbFNxU3VtXG4gIGxldCB5VmVsU3FTdW0gPSBzY29yZUluZm8ueVZlbFNxU3VtIC8gZXBMZW5cbiAgLy8geVZlbFNxU3VtICo9IDFlMlxuICB5VmVsU3FTdW0gKj0gLTFlMVxuICAvLyAvLyBzY29yZSArPSAxZS0yICogc3BvdC55VmVsRGlmZlNxU3VtXG4gIC8vIHNjb3JlICs9IDFlLTQgKiBzcG90LnlWZWxEaWZmU3FTdW0gKiBzcG90LnlWZWxEaWZmU3FTdW1cbiAgbGV0IHlWZWxEaWZmU3FTdW0gPSBzY29yZUluZm8ueVZlbERpZmZTcVN1bSAvIGVwTGVuXG4gIC8vIHlWZWxEaWZmU3FTdW0gKj0gMWUzXG4gIHlWZWxEaWZmU3FTdW0gKj0gMS4wXG5cbiAgLy8gc2NvcmUgLT0gMWUtMyAqIHNjb3JlSW5mby5hbmdWZWxBYnNTdW1cbiAgLy8gc2NvcmUgLT0gMWUtMSAqIHNjb3JlSW5mby5hbmdWZWxEaWZmQWJzU3VtXG4gIC8vIC8vIHNjb3JlICs9IDEuMCAqIHNwb3QuYW5nVmVsU3FTdW1cbiAgLy8gc2NvcmUgKz0gMWUtNiAqIHNwb3QuYW5nVmVsU3FTdW0gKiBzcG90LmFuZ1ZlbFNxU3VtXG4gIGxldCBhbmdWZWxTcVN1bSA9IHNjb3JlSW5mby5hbmdWZWxTcVN1bSAvIGVwTGVuXG4gIGFuZ1ZlbFNxU3VtICo9IC0xZTFcbiAgLy8gc2NvcmUgLT0gMWUtMSAqIHNjb3JlSW5mby5hbmdWZWxEaWZmU3FTdW1cbiAgLy8gc2NvcmUgKz0gMWUtNCAqIHNwb3QuYW5nVmVsRGlmZlNxU3VtICogc3BvdC5hbmdWZWxEaWZmU3FTdW1cbiAgbGV0IGFuZ1ZlbERpZmZTcVN1bSA9IHNjb3JlSW5mby5hbmdWZWxEaWZmU3FTdW0gLyBlcExlblxuICBhbmdWZWxEaWZmU3FTdW0gKj0gMWUxXG5cbiAgLy8gc2NvcmUgKz0gMWUtNSAqIHNwb3QueFZlbERpZmZTcVN1bSAqIHNwb3QueFZlbERpZmZTcVN1bVxuXG4gIGxldCBjaGFzc2lzVmVsWFNxRXJyU3VtID0gc2NvcmVJbmZvLmNoYXNzaXNWZWxYU3FFcnJTdW0gLyBlcExlblxuICBjaGFzc2lzVmVsWFNxRXJyU3VtICo9IDFlNCAqIGNoYXNzaXNWZWxYU3FFcnJTdW1cblxuICBsZXQgcm9sbEpvaW50VmVsQWJzID0gMFxuICBsZXQgam9pbnRNb3RvckRpZmZTdW0gPSAwXG4gIGxldCBqb2ludFNwZWVkU3FEaWZmU3VtID0gMFxuICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgIGxldCBqb2ludFNwZWVkU3FEaWZmID0gc2NvcmVJbmZvLmpvaW50U3BlZWRTcURpZmZzW2ldXG4gICAgam9pbnRTcGVlZFNxRGlmZlN1bSArPSBqb2ludFNwZWVkU3FEaWZmXG4gICAgLy8gc2NvcmUgKz0gMWUtMyAqIChzcG90Lm1vdG9yU3BlZWRTdW1zW2ldICogc3BvdC5tb3RvclNwZWVkU3Vtc1tpXSlcbiAgICBjb25zdCByb2xsSm9pbnRWZWxBYnNNZWFuID0gc2NvcmVJbmZvLnJvbGxpbmdKb2ludFNwZWVkQWJzU3Vtc1tpXSAvIGVwTGVuXG4gICAgLy8gcm9sbEpvaW50VmVsQWJzICs9IHJvbGxKb2ludFZlbEFic01lYW4gKiByb2xsSm9pbnRWZWxBYnNNZWFuXG4gICAgLy8gcm9sbEpvaW50VmVsQWJzICs9IE1hdGguc3FydChyb2xsSm9pbnRWZWxBYnNNZWFuKVxuICAgIHJvbGxKb2ludFZlbEFicyArPSByb2xsSm9pbnRWZWxBYnNNZWFuXG4gICAgLy8gc2NvcmUgLT0gMWUtMyAqIHNjb3JlSW5mby5yb2xsaW5nSm9pbnRTcGVlZFNxU3Vtc1tpXVxuICAgIC8vIHNjb3JlIC09IDFlLTQgKiBzY29yZUluZm8ucm9sbGluZ0pvaW50U3BlZWRBYnNEaWZmU3Vtc1tpXVxuICAgIC8vIHNjb3JlIC09IDFlLTQgKiBzY29yZUluZm8ucm9sbGluZ0pvaW50U3BlZWRTcURpZmZTdW1zW2ldXG4gICAgLy8gc2NvcmUgKz0gMWUtMSAqIHNjb3JlSW5mby5qb2ludE1vdG9yU3BlZWREaWZmU3FTdW1zW2ldXG4gICAgY29uc3Qgam9pbnRNb3RvclNwZWVkRGlmZlNxU3VtID1cbiAgICAgIHNjb3JlSW5mby5qb2ludE1vdG9yU3BlZWREaWZmU3FTdW1zW2ldIC8gZXBMZW5cbiAgICAvLyBqb2ludE1vdG9yRGlmZlN1bSArPSBqb2ludE1vdG9yU3BlZWREaWZmU3FTdW0gKiBqb2ludE1vdG9yU3BlZWREaWZmU3FTdW1cbiAgICBqb2ludE1vdG9yRGlmZlN1bSArPSBqb2ludE1vdG9yU3BlZWREaWZmU3FTdW1cbiAgfVxuICByb2xsSm9pbnRWZWxBYnMgKj0gLTUuMFxuICBqb2ludE1vdG9yRGlmZlN1bSAqPSAxZS01XG4gIGpvaW50U3BlZWRTcURpZmZTdW0gKj0gMWUtM1xuICAvLyAvLyAvLyBzY29yZSArPSAxZS04ICogc3BvdC5tb3RvclNwZWVkc1NxRGlzdFN1bVxuICAvLyAvLyAvLyAvLyAvLyAvLyB9XG4gIGxldCB0b3JxdWVSeG5TdW0gPSAwXG4gIGxldCBqb2ludFJ4bkZvcmNlWVNxU3VtID0gMFxuICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgIC8vIHNjb3JlICs9IDFlLTIgKiBzcG90LmpvaW50UmVhY3Rpb25Ub3JxdWVTcVN1bXNbaV1cbiAgICBsZXQgdG9ycXVlUnhuID0gc2NvcmVJbmZvLmpvaW50UmVhY3Rpb25Ub3JxdWVTcVN1bXNbaV0gLyBlcExlblxuICAgIHRvcnF1ZVJ4biAqPSB0b3JxdWVSeG5cbiAgICB0b3JxdWVSeG5TdW0gKz0gdG9ycXVlUnhuXG4gICAgbGV0IGpvaW50UmVhY3Rpb25Gb3JjZVhTcVN1bSA9IHNjb3JlSW5mby5qb2ludFJlYWN0aW9uRm9yY2VYU3FTdW1zW2ldXG4gICAgam9pbnRSeG5Gb3JjZVlTcVN1bSArPSBqb2ludFJlYWN0aW9uRm9yY2VYU3FTdW1cbiAgICAvLyBzY29yZSAtPSAxZS0xICogc3BvdC5qb2ludFJlYWN0aW9uRm9yY2VYU3FTdW1zW2ldXG4gICAgLy8gc2NvcmUgKz0gMWUtMyAqIHNwb3Quam9pbnRSZWFjdGlvbkZvcmNlWVNxU3Vtc1tpXVxuICB9XG4gIHRvcnF1ZVJ4blN1bSAqPSAxZTFcbiAgam9pbnRSeG5Gb3JjZVlTcVN1bSAqPSAxZS00XG4gIC8vIHNjb3JlIC89IGVwTGVuXG4gIC8vIHNjb3JlIC09IDFlLTYgKiBzcG90LnJvbGxpbmdYVmVsTWF4ICogc3BvdC5yb2xsaW5nWFZlbE1heFxuICAvLyAvLyAvLyAvLyBpZiAoIXNpbXBsZVNjb3JlKSB7XG4gIC8vIC8vIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gIC8vIC8vIC8vICAgc2NvcmUgKz0gMWUtMyAqIHNwb3Quam9pbnRTcGVlZE1pbnNbaV1cbiAgLy8gLy8gLy8gICBzY29yZSAtPSAxZS0zICogc3BvdC5qb2ludFNwZWVkTWF4c1tpXVxuICAvLyAvLyAvLyB9XG4gIC8vIH1cbiAgbGV0IGhpc3RvZ3JhbVN1bSA9IDBcbiAgLy8gbGV0IGhpc3RvZ3JhbVByb2QgPSAxXG4gIC8vIGxldCBoaXN0b2dyYW1NYXggPSAtSW5maW5pdHlcbiAgZm9yIChsZXQgaGlzdG9ncmFtU2NvcmUgb2Ygc2NvcmVJbmZvW1wiaGlzdG9ncmFtU2NvcmVzXCJdKSB7XG4gICAgLy8gaGlzdG9ncmFtU3VtICs9IE1hdGguc3FydChoaXN0b2dyYW1TY29yZSlcbiAgICBoaXN0b2dyYW1TdW0gKz0gaGlzdG9ncmFtU2NvcmUgKiBoaXN0b2dyYW1TY29yZVxuICAgIC8vICAqIGhpc3RvZ3JhbVNjb3JlICogaGlzdG9ncmFtU2NvcmVcbiAgICAvLyBoaXN0b2dyYW1Qcm9kICo9IDEgKyBNYXRoLmFicyhoaXN0b2dyYW1TY29yZSlcbiAgICAvLyBpZiAoaGlzdG9ncmFtU2NvcmUgPiBoaXN0b2dyYW1NYXgpIHtcbiAgICAvLyAgIGhpc3RvZ3JhbU1heCA9IGhpc3RvZ3JhbVNjb3JlXG4gICAgLy8gfVxuICB9XG4gIGhpc3RvZ3JhbVN1bSAqPSAxLjBcbiAgLy8gc2NvcmUgKz0gMWUtNCAqIGhpc3RvZ3JhbVN1bSAqIGhpc3RvZ3JhbVN1bVxuICAvLyBzY29yZSArPSAxZS02ICogaGlzdG9ncmFtUHJvZFxuICAvLyBzY29yZSArPSAxZS0xICogaGlzdG9ncmFtTWF4XG5cbiAgbGV0IGwyUGVuYWx0eVdlaWdodHMgPSAwXG4gIGZvciAobGV0IHdlaWdodE5vcm0gb2Ygc2NvcmVJbmZvW1wid2VpZ2h0Tm9ybXNcIl0pIHtcbiAgICAvLyBjb25zb2xlLmxvZyh3ZWlnaHROb3JtKVxuICAgIGwyUGVuYWx0eVdlaWdodHMgKz0gd2VpZ2h0Tm9ybVxuICB9XG4gIC8vIGwyUGVuYWx0eVdlaWdodHMgLz0gd2VpZ2h0Q291bnRcbiAgLy8gbDJQZW5hbHR5V2VpZ2h0cyAqPSAxZTJcbiAgbDJQZW5hbHR5V2VpZ2h0cyAqPSAxLjBcblxuICBsZXQgbDJQZW5hbHR5Qmlhc2VzID0gMFxuICBmb3IgKGxldCBiaWFzTm9ybSBvZiBzY29yZUluZm9bXCJiaWFzTm9ybXNcIl0pIHtcbiAgICBsMlBlbmFsdHlCaWFzZXMgKz0gYmlhc05vcm1cbiAgfVxuICAvLyBjb25zb2xlLmxvZyhsMlBlbmFsdHlXZWlnaHRzLCBsMlBlbmFsdHlCaWFzZXMpXG4gIC8vIGwyUGVuYWx0eUJpYXNlcyAvPSBiaWFzQ291bnRcbiAgLy8gbDJQZW5hbHR5Qmlhc2VzICo9IDEuMFxuICBsMlBlbmFsdHlCaWFzZXMgKj0gMWUtM1xuICByZXR1cm4ge1xuICAgIHNjb3JlRGlzdCxcbiAgICBsMlBlbmFsdHlXZWlnaHRzLFxuICAgIGwyUGVuYWx0eUJpYXNlcyxcbiAgICAvLyAvLyBjbGlwcGVkT3V0cHV0U3VtcyxcbiAgICAvLyBjbGlwcGVkU3BlZWRTdW1zLFxuICAgIC8vIC8vIHRvcnF1ZVJ4blN1bSxcbiAgICAvLyAvLyBmb290Tm9ybWFsSW1wdWxzZVNxU3VtLFxuICAgIC8vIG5vbkZvb3ROb3JtYWxJbXB1bHNlU3FTdW0sXG4gICAgLy8gLy8gcm9sbEpvaW50VmVsQWJzLFxuICAgIC8vIC8vIGhpc3RvZ3JhbVN1bSxcbiAgICAvLyAvLyAvLyAvLyB0YW5nZW50SW1wdWxzZVN1bSxcblxuICAgIC8vIC8vIGpvaW50TW90b3JEaWZmU3VtLFxuXG4gICAgLy8gLy8geVNxRGlmZlN1bSxcblxuICAgIC8vIC8vIC8vIHlWZWxEaWZmU3FTdW0sXG4gICAgLy8gLy8geVZlbFNxU3VtLFxuXG4gICAgLy8gLy8gYW5nVmVsU3FTdW0sXG4gICAgLy8gLy8gLy8gYW5nVmVsRGlmZlNxU3VtLFxuXG4gICAgLy8gLy8gLy8gY2hhc3Npc1ZlbFhTcUVyclN1bSxcbiAgICAvLyAvLyBjaGFzc2lzQW5nbGVFcnIsXG4gICAgLy8gLy8gY2hhc3Npc0FuZ2xlU3FFcnIsXG4gICAgLy8gLy8gam9pbnRTcGVlZFNxRGlmZlN1bSxcbiAgICAvLyBqb2ludFJ4bkZvcmNlWVNxU3VtLFxuICAgIC8vIC8vIG1vdG9yU3BlZWRTdW1zU3VtLFxuICB9XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NTY29yZXMoKSB7XG4gIGNvbnN0IHNvbHV0aW9uc1Njb3JlcyA9IFtdXG4gIGNvbnN0IGJlc3RTY29yZXNBbmRJZHhzID0gW11cbiAgY29uc29sZS5sb2coc2NvcmVTb2x1dGlvbkluZm9zWzBdKVxuICBsZXQgZmluYWxYTWF4ID0gLUluZmluaXR5XG4gIC8vICAgc2NvcmVEaXN0TWluID0gSW5maW5pdHksXG4gIC8vICAgc2NvcmVEaXN0TWF4ID0gLUluZmluaXR5LFxuICAvLyAgIHNjb3JlRGlzdE1lYW4gPSAwLFxuICAvLyAgIGwyV3RzTWluID0gSW5maW5pdHksXG4gIC8vICAgbDJXdHNNYXggPSAtSW5maW5pdHksXG4gIC8vICAgbDJXdHNNZWFuID0gMCxcbiAgLy8gICBsMkJpYXNNaW4gPSBJbmZpbml0eSxcbiAgLy8gICBsMkJpYXNNYXggPSAtSW5maW5pdHksXG4gIC8vICAgbDJCaWFzTWVhbiA9IDBcbiAgY29uc3Qgc2NvcmVTdGF0cyA9IHt9XG4gIGZvciAobGV0IGogPSAwOyBqIDwgc2NvcmVTb2x1dGlvbkluZm9zLmxlbmd0aDsgaisrKSB7XG4gICAgY29uc3Qgc2NvcmVTb2x1dGlvbkluZm8gPSBzY29yZVNvbHV0aW9uSW5mb3Nbal1cbiAgICBpZiAoc2NvcmVTb2x1dGlvbkluZm8uZmluYWxYID4gZmluYWxYTWF4KSB7XG4gICAgICBmaW5hbFhNYXggPSBzY29yZVNvbHV0aW9uSW5mby5maW5hbFhcbiAgICB9XG4gICAgY29uc3Qgc2NvcmVPYmogPSBnZXRTY29yZShzY29yZVNvbHV0aW9uSW5mbyksXG4gICAgICBzb2x1dGlvbiA9IHNjb3JlU29sdXRpb25JbmZvW1wic29sdXRpb25cIl0uc2xpY2UoKSxcbiAgICAgIHNjb3JlID0gT2JqZWN0LnZhbHVlcyhzY29yZU9iaikucmVkdWNlKChhLCBiKSA9PiBhICsgYilcblxuICAgIGNvbnN0IGt2UGFpcnMgPSBPYmplY3QuZW50cmllcyhzY29yZU9iailcbiAgICBrdlBhaXJzLnB1c2goW1wic2NvcmVcIiwgc2NvcmVdKVxuICAgIGZvciAobGV0IFtrZXksIHZhbF0gb2Yga3ZQYWlycykge1xuICAgICAgaWYgKGogPT0gMCkge1xuICAgICAgICBzY29yZVN0YXRzW2tleV0gPSB7IG1lYW46IDAsIG1pbjogSW5maW5pdHksIG1heDogLUluZmluaXR5IH1cbiAgICAgIH1cbiAgICAgIHNjb3JlU3RhdHNba2V5XS5tZWFuICs9IHZhbFxuICAgICAgaWYgKHNjb3JlU3RhdHNba2V5XS5taW4gPiB2YWwpIHtcbiAgICAgICAgc2NvcmVTdGF0c1trZXldLm1pbiA9IHZhbFxuICAgICAgfVxuICAgICAgaWYgKHNjb3JlU3RhdHNba2V5XS5tYXggPCB2YWwpIHtcbiAgICAgICAgc2NvcmVTdGF0c1trZXldLm1heCA9IHZhbFxuICAgICAgfVxuICAgIH1cbiAgICAvLyBzY29yZURpc3RNZWFuICs9IHNjb3JlRGlzdFxuICAgIC8vIGlmIChzY29yZURpc3RNaW4gPiBzY29yZURpc3QpIHtcbiAgICAvLyAgIHNjb3JlRGlzdE1pbiA9IHNjb3JlRGlzdFxuICAgIC8vIH1cbiAgICAvLyBpZiAoc2NvcmVEaXN0TWF4IDwgc2NvcmVEaXN0KSB7XG4gICAgLy8gICBzY29yZURpc3RNYXggPSBzY29yZURpc3RcbiAgICAvLyB9XG5cbiAgICAvLyBsMld0c01lYW4gKz0gbDJQZW5hbHR5V2VpZ2h0c1xuICAgIC8vIGlmIChsMld0c01pbiA+IGwyUGVuYWx0eVdlaWdodHMpIHtcbiAgICAvLyAgIGwyV3RzTWluID0gbDJQZW5hbHR5V2VpZ2h0c1xuICAgIC8vIH1cbiAgICAvLyBpZiAobDJXdHNNYXggPCBsMlBlbmFsdHlXZWlnaHRzKSB7XG4gICAgLy8gICBsMld0c01heCA9IGwyUGVuYWx0eVdlaWdodHNcbiAgICAvLyB9XG5cbiAgICAvLyBsMkJpYXNNZWFuICs9IGwyUGVuYWx0eUJpYXNlc1xuICAgIC8vIGlmIChsMkJpYXNNaW4gPiBsMlBlbmFsdHlCaWFzZXMpIHtcbiAgICAvLyAgIGwyQmlhc01pbiA9IGwyUGVuYWx0eUJpYXNlc1xuICAgIC8vIH1cbiAgICAvLyBpZiAobDJCaWFzTWF4IDwgbDJQZW5hbHR5Qmlhc2VzKSB7XG4gICAgLy8gICBsMkJpYXNNYXggPSBsMlBlbmFsdHlCaWFzZXNcbiAgICAvLyB9XG5cbiAgICAvLyBjb25zdCBzY29yZSA9IHNjb3JlRGlzdCArIGwyUGVuYWx0eVdlaWdodHMgKyBsMlBlbmFsdHlCaWFzZXNcblxuICAgIHNvbHV0aW9uc1Njb3Jlcy5wdXNoKHsgc29sdXRpb24sIHNjb3JlIH0pXG4gICAgbGV0IG5ld0Jlc3RTY29yZSA9IGZhbHNlXG4gICAgaWYgKGJlc3RTY29yZXNBbmRJZHhzLmxlbmd0aCA8IGRpc3BsYXlDcmVhdHVyZUNvdW50KSB7XG4gICAgICBiZXN0U2NvcmVzQW5kSWR4cy5wdXNoKHsgaiwgc2NvcmUgfSlcbiAgICAgIG5ld0Jlc3RTY29yZSA9IHRydWVcbiAgICB9IGVsc2UgaWYgKHNjb3JlIDwgYmVzdFNjb3Jlc0FuZElkeHNbZGlzcGxheUNyZWF0dXJlQ291bnQgLSAxXVtcInNjb3JlXCJdKSB7XG4gICAgICBiZXN0U2NvcmVzQW5kSWR4c1tkaXNwbGF5Q3JlYXR1cmVDb3VudCAtIDFdID0geyBqLCBzY29yZSB9XG4gICAgICBuZXdCZXN0U2NvcmUgPSB0cnVlXG4gICAgfVxuXG4gICAgaWYgKG5ld0Jlc3RTY29yZSkge1xuICAgICAgYmVzdFNjb3Jlc0FuZElkeHMuc29ydCgoYSwgYikgPT4gYVtcInNjb3JlXCJdIC0gYltcInNjb3JlXCJdKVxuICAgIH1cbiAgfVxuXG4gIGNvbnNvbGUubG9nKGBmaW5hbFhNYXg6ICR7ZmluYWxYTWF4fWApXG4gIGZvciAobGV0IHByb3Agb2YgT2JqZWN0LmtleXMoc2NvcmVTdGF0cykpIHtcbiAgICBjb25zdCBzdW1tYXJ5ID0gc2NvcmVTdGF0c1twcm9wXVxuICAgIHN1bW1hcnkubWVhbiAvPSBzY29yZVNvbHV0aW9uSW5mb3MubGVuZ3RoXG4gICAgY29uc29sZS5sb2cocHJvcClcbiAgICBmb3IgKGxldCBbc3RhdCwgdmFsXSBvZiBPYmplY3QuZW50cmllcyhzdW1tYXJ5KSkge1xuICAgICAgY29uc29sZS5sb2coc3RhdCwgdmFsKVxuICAgIH1cbiAgfVxuXG4gIGZvciAobGV0IGogPSAwOyBqIDwgZGlzcGxheUNyZWF0dXJlQ291bnQ7IGorKykge1xuICAgIGNvbnN0IHRvdGFsSWR4ID0gYmVzdFNjb3Jlc0FuZElkeHNbal1bXCJqXCJdLFxuICAgICAgY3JlYXR1cmVJZHggPSB0b3RhbElkeCAlIGNyZWF0dXJlc1BlcldvcmtlcixcbiAgICAgIHdvcmtlcklkeCA9ICh0b3RhbElkeCAtIGNyZWF0dXJlSWR4KSAvIGNyZWF0dXJlc1BlcldvcmtlcixcbiAgICAgIHJhbmsgPSBqXG4gICAgc2ltdWxhdGlvbldvcmtlcnNbd29ya2VySWR4XS5wb3N0TWVzc2FnZShbXG4gICAgICBcInNlbmRIaXN0b3J5XCIsXG4gICAgICB7IGNyZWF0dXJlSWR4LCByYW5rIH0sXG4gICAgXSlcbiAgfVxuICBjbWFfd29ya2VyLnBvc3RNZXNzYWdlKFtcInNvbHV0aW9uc1Njb3Jlc1wiLCBzb2x1dGlvbnNTY29yZXNdKVxuICBzY29yZVNvbHV0aW9uSW5mb3MgPSBbXVxuICBzY29yZXNSZWNlaXZlZCA9IDBcbn1cblxuZnVuY3Rpb24gc3dhcEhpc3RvcnkoKSB7XG4gIGlmIChjdXJyZW50SGlzdG9yeSA9PSAwKSB7XG4gICAgY3VycmVudEhpc3RvcnkgPSAxXG4gICAgbmV4dEhpc3RvcnkgPSAwXG4gIH0gZWxzZSB7XG4gICAgY3VycmVudEhpc3RvcnkgPSAwXG4gICAgbmV4dEhpc3RvcnkgPSAxXG4gIH1cbn1cblxuZnVuY3Rpb24gc2F2ZUhpc3RvcnkoaGlzdG9yeSwgcmFuaykge1xuICBjb25zdCBkcmF3SGlzdG9yeSA9IGRyYXdIaXN0b3JpZXNbbmV4dEhpc3RvcnldXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZXBMZW47IGkrKykge1xuICAgIGNvbnN0IG11bHRpQ3JlYXR1cmVJZHggPSA3ICogKGkgKiBkaXNwbGF5Q3JlYXR1cmVDb3VudCArIHJhbmspLFxuICAgICAgc2luZ2xlQ3JlYXR1cmVJZHggPSA3ICogaVxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgNzsgaisrKSB7XG4gICAgICBkcmF3SGlzdG9yeVttdWx0aUNyZWF0dXJlSWR4ICsgal0gPSBoaXN0b3J5W3NpbmdsZUNyZWF0dXJlSWR4ICsgal1cbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJjaGFzc2lzUHRzRHJhdyIsInVwcGVyTGVnUHRzRHJhdyIsImtuZWVQdERyYXciLCJsb3dlckxlZ1B0c0RyYXciLCJoaXBQdERyYXciLCJhbmtsZVB0RHJhdyIsImZvb3RSYWRpdXNEcmF3IiwibWV0ZXJzVG9QaXhlbHMiLCJsb3dlckxlZ0NvbG9yIiwiZHJhd1Nwb3QiLCJjYW1lcmFYIiwiY2FtZXJhWSIsInhNZXRlcnMiLCJ5TWV0ZXJzIiwiY2hhc3Npc0FuZ2xlIiwic2hvdWxkZXJBbmdsZSIsImhpcEFuZ2xlIiwiZWxib3dBbmdsZSIsImtuZWVBbmdsZSIsImN0eEZHIiwic2F2ZSIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsImRyYXdQb2x5IiwiZHJhd0Zvb3QiLCJwdHMiLCJjb2xvciIsInN0cm9rZUNvbG9yIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwiaSIsImxlbmd0aCIsImxpbmVUbyIsImZpbGxTdHlsZSIsImZpbGwiLCJzdHJva2VTdHlsZSIsInN0cm9rZSIsImFyYyIsIk1hdGgiLCJQSSIsInJlc3RvcmUiLCJuV29ya2VycyIsInBvcHNpemVNdWx0aXBsaWVyIiwiZXBMZW4iLCJjbWFTaWdtYSIsImRpc3BsYXlDcmVhdHVyZUNvdW50IiwidyIsImgiLCJ0cyIsImIyR3JvdW5kSCIsImIyR3JvdW5kVyIsImNhbnZhc0dyb3VuZEgiLCJzaG91bGRlckhNZXRlcnMiLCJjYW1lcmFPZmZzZXQiLCJjYW1lcmFJbml0WSIsInVwcGVyTGVnUHRzIiwibWFwIiwieCIsImtuZWVQdCIsImxvd2VyTGVnUHRzIiwiYW5rbGVQdCIsImZvb3RSYWRpdXMiLCJjaGFzc2lzUHRzIiwiaGlwUHQiLCJ1cHBlckxlZ0xpbWl0cyIsInVwcGVyTGVnTWF4VG9ycXVlIiwibG93ZXJMZWdMaW1pdHMiLCJsb3dlckxlZ01heFRvcnF1ZSIsIm1heFNwZWVkIiwibWF4U3BlZWREaWZmIiwibkpvaW50QW5nbGVCaW5zIiwidW5pZm9ybURpc3RCaW5Db3VudCIsInJvbGxpbmdXaW5kb3ciLCJ0YXJnZXRWZWxYIiwiY21hTWVhbkluaXQiLCJGbG9hdDMyQXJyYXkiLCJmcm9tIiwicmVxdWlyZSIsImNyZWF0dXJlc1BlcldvcmtlciIsInNjb3JlU29sdXRpb25JbmZvcyIsInNjb3Jlc1JlY2VpdmVkIiwiaGlzdG9yaWVzUmVjZWl2ZWQiLCJjdXJyZW50SGlzdG9yeSIsIm5leHRIaXN0b3J5IiwibG9vcGluZyIsInNpbXVsYXRpb25Xb3JrZXJzIiwiZHJhd0hpc3RvcmllcyIsImNhbnZhc0ZHIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJjYW52YXNCRyIsImN0eEJHIiwiY2FudmFzVGVycmFpbiIsImN0eFRlcnJhaW4iLCJjYW52YXNEaXYiLCJzZXRBdHRyaWJ1dGUiLCJ3aWR0aCIsImhlaWdodCIsInRlcnJhaW5IIiwiZmlsbFJlY3QiLCJjbWFfd29ya2VyIiwiV29ya2VyIiwiVVJMIiwiaW1wb3J0IiwibWV0YSIsInVybCIsImNtYUluaXRpYWxpemVkIiwic3RlcHNEaXNwbGF5ZWQiLCJzaW11bGF0aW9uX3dvcmtlciIsIm9ubWVzc2FnZSIsImUiLCJkYXRhIiwiaW5mbyIsIm1zZyIsImoiLCJwcm9jZXNzU2NvcmVzIiwiY29uc29sZSIsImxvZyIsIndlaWdodENvdW50IiwiYmlhc0NvdW50IiwicG9zdE1lc3NhZ2UiLCJyYW5rIiwiaGlzdG9yeSIsInNhdmVIaXN0b3J5Iiwic3dhcEhpc3RvcnkiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJsb29wIiwicHVzaCIsIndvcmtlciIsIndvcmtlclNvbHV0aW9uc0xlbmd0aCIsInNvbHV0aW9uc0lkeCIsIndvcmtlclNvbHV0aW9ucyIsInNsaWNlIiwiY2xlYXJSZWN0IiwicG9zaXRpb25zTGVuZ3RoIiwicG9zaXRpb25zSGlzdG9yeSIsInBvc2l0aW9ucyIsImN1cnJlbnRNYXhYIiwicm91bmQiLCJ0ZXJyYWluWCIsImN1cnJlbnRYIiwiaWR4IiwiZ2V0U2NvcmUiLCJzY29yZUluZm8iLCJkaXN0U3VtIiwic2NvcmVEaXN0Iiwic2lnbiIsInRhbmdlbnRJbXB1bHNlU3VtIiwiZm9vdFRhbmdlbnRJbXB1bHNlU3VtIiwiZm9vdE5vcm1hbEltcHVsc2VTcVN1bSIsImZvb3ROb3JtYWxJbXB1bHNlQWJzU3VtIiwibm9uRm9vdE5vcm1hbEltcHVsc2VTcVN1bSIsIm5vbkZvb3ROb3JtYWxJbXB1bHNlQWJzU3VtIiwiY2xpcHBlZFNwZWVkU3VtcyIsIm1vdG9yU3BlZWRTdW1zU3VtIiwiY2xpcHBlZFNwZWVkTWVhbiIsImNsaXBwZWRTcGVlZFNxU3VtcyIsIm1vdG9yU3BlZWRTdW0iLCJhYnMiLCJtb3RvclNwZWVkU3VtcyIsImNoYXNzaXNBbmdsZUVyciIsImNoYXNzaXNBbmdsZVNxRXJyIiwieVNxRGlmZlN1bSIsInlWZWxTcVN1bSIsInlWZWxEaWZmU3FTdW0iLCJhbmdWZWxTcVN1bSIsImFuZ1ZlbERpZmZTcVN1bSIsImNoYXNzaXNWZWxYU3FFcnJTdW0iLCJyb2xsSm9pbnRWZWxBYnMiLCJqb2ludE1vdG9yRGlmZlN1bSIsImpvaW50U3BlZWRTcURpZmZTdW0iLCJqb2ludFNwZWVkU3FEaWZmIiwiam9pbnRTcGVlZFNxRGlmZnMiLCJyb2xsSm9pbnRWZWxBYnNNZWFuIiwicm9sbGluZ0pvaW50U3BlZWRBYnNTdW1zIiwiam9pbnRNb3RvclNwZWVkRGlmZlNxU3VtIiwiam9pbnRNb3RvclNwZWVkRGlmZlNxU3VtcyIsInRvcnF1ZVJ4blN1bSIsImpvaW50UnhuRm9yY2VZU3FTdW0iLCJ0b3JxdWVSeG4iLCJqb2ludFJlYWN0aW9uVG9ycXVlU3FTdW1zIiwiam9pbnRSZWFjdGlvbkZvcmNlWFNxU3VtIiwiam9pbnRSZWFjdGlvbkZvcmNlWFNxU3VtcyIsImhpc3RvZ3JhbVN1bSIsImhpc3RvZ3JhbVNjb3JlIiwibDJQZW5hbHR5V2VpZ2h0cyIsIndlaWdodE5vcm0iLCJsMlBlbmFsdHlCaWFzZXMiLCJiaWFzTm9ybSIsInNvbHV0aW9uc1Njb3JlcyIsImJlc3RTY29yZXNBbmRJZHhzIiwiZmluYWxYTWF4IiwiSW5maW5pdHkiLCJzY29yZVN0YXRzIiwic2NvcmVTb2x1dGlvbkluZm8iLCJmaW5hbFgiLCJzY29yZU9iaiIsInNvbHV0aW9uIiwic2NvcmUiLCJPYmplY3QiLCJ2YWx1ZXMiLCJyZWR1Y2UiLCJhIiwiYiIsImt2UGFpcnMiLCJlbnRyaWVzIiwia2V5IiwidmFsIiwibWVhbiIsIm1pbiIsIm1heCIsIm5ld0Jlc3RTY29yZSIsInNvcnQiLCJrZXlzIiwicHJvcCIsInN1bW1hcnkiLCJzdGF0IiwidG90YWxJZHgiLCJjcmVhdHVyZUlkeCIsIndvcmtlcklkeCIsImRyYXdIaXN0b3J5IiwibXVsdGlDcmVhdHVyZUlkeCIsInNpbmdsZUNyZWF0dXJlSWR4Il0sInNvdXJjZVJvb3QiOiIifQ==