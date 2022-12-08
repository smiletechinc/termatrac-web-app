exports.id = 3;
exports.ids = [3];
exports.modules = {

/***/ 9399:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Home_container__bCOhY",
	"main": "Home_main__nLjiQ",
	"left": "Home_left__T7LhQ",
	"right": "Home_right__TcB_0",
	"footer": "Home_footer____T7K",
	"header": "Home_header__GCVRv",
	"headerLogo": "Home_headerLogo__qHj_d",
	"options": "Home_options__Lxd7W",
	"title": "Home_title__T09hD",
	"description": "Home_description__41Owk",
	"code": "Home_code__suPER",
	"grid": "Home_grid__GxQ85",
	"card": "Home_card___LpL1",
	"logo": "Home_logo__27_tb"
};


/***/ }),

/***/ 5722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ ResultView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(124);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2705);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);






const ResultView = ({ text , onPress  })=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (text != "") {
            console.log("text in result", text);
        }
    }, [
        text
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3___default()), {
        maxWidth: "lg",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
            p: "40px 8px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                    m: "16px 0 40px",
                    component: "h3",
                    lineHeight: "1.5",
                    children: "Result Summary"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                    style: {
                        minHeight: "400px",
                        borderRadius: "4px",
                        padding: "2px 5px",
                        marginBottom: 4,
                        border: "1px solid lightgray",
                        width: "100%",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    children: text != "" ? JSON.parse(text) : "Result Wil be displayed here"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Button, {
                    variant: "outlined",
                    color: "primary",
                    style: {
                        display: "flex",
                        justifyContent: "flex-end"
                    },
                    onClick: onPress,
                    children: "Save"
                })
            ]
        })
    });
};


/***/ }),

/***/ 3159:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SearchView)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@material-ui/core/Box"
var Box_ = __webpack_require__(124);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@material-ui/core/Container"
var Container_ = __webpack_require__(2705);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(8130);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./services/apiServices.ts

const BASE_URL = "http://107.20.88.70:8080/infer_termite_rforest";
const sendDataObjectToApi = (dataObject)=>{
    return new Promise(async (resolve, reject)=>{
        console.log("api", dataObject);
        try {
            var headers = {
                "Content-Type": "application/json",
                Accept: "application/json"
            };
            const Axiosbody = {
                features: JSON.parse(dataObject),
                model: "rforest"
            };
            await external_axios_default().post(BASE_URL, Axiosbody, {
                headers: headers
            }).then((resonse)=>{
                console.log("resposnee", resonse);
                resolve(resonse);
            }).catch((e)=>{
                console.log("error", JSON.stringify(e));
                reject(e);
            });
        } catch (err) {
            reject(err);
        }
    });
};

// EXTERNAL MODULE: external "react-dropdown"
var external_react_dropdown_ = __webpack_require__(4001);
var external_react_dropdown_default = /*#__PURE__*/__webpack_require__.n(external_react_dropdown_);
// EXTERNAL MODULE: ./node_modules/react-dropdown/style.css
var style = __webpack_require__(3633);
;// CONCATENATED MODULE: ./components/SearchView/SearchView.tsx








const SearchView = ({ text , setText , setResultString , setResultData  })=>{
    const [dataObjectValue, settDataObjectValue] = external_react_default().useState("");
    const [modelName, setModelName] = external_react_default().useState("");
    const options = [
        "rforest",
        "two",
        "three"
    ];
    const handleChange = (event)=>{
        setModelName(event.value);
    };
    const submitButtonFunction = async ()=>{
        if (modelName === "") {
            alert("Please Enter the modelName");
        } else {
            if ((dataObjectValue === null || dataObjectValue === void 0 ? void 0 : dataObjectValue.length) > 0) {
                const predictPayload = await sendDataObjectToApi(dataObjectValue, modelName);
                setResultString(JSON.stringify(predictPayload.data));
                setResultData({
                    modelName: modelName,
                    modelData: dataObjectValue
                });
            }
        }
    };
    const handleOnChange = (event)=>{
        if (event.target.value != "") {
            settDataObjectValue(event.target.value);
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
        maxWidth: "lg",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
            p: "40px 8px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((external_react_dropdown_default()), {
                    options: options,
                    onChange: handleChange,
                    placeholder: "modelName"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                    m: "16px 0 40px",
                    component: "h3",
                    lineHeight: "1.5",
                    children: "Input Data Object"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(core_.TextareaAutosize, {
                    "aria-label": "Input JSON Object",
                    minRows: 24,
                    maxRows: 30,
                    placeholder: "Inut data object",
                    style: {
                        borderRadius: "4px",
                        padding: "2px 5px",
                        border: "1px solid lightgray",
                        width: "100%"
                    },
                    onChange: handleOnChange
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                    value: text,
                    variant: "outlined",
                    color: "primary",
                    onClick: submitButtonFunction,
                    children: "Submit"
                })
            ]
        })
    });
};


/***/ }),

/***/ 4705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(124);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9399);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);





const Footer = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().footer),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
            href: "http://smiletechinc.com",
            target: "_blank",
            rel: "noopener noreferrer",
            children: [
                "Developed by",
                " ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().logo),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                        src: "/smiletech-logo.png",
                        alt: "Smile Tech",
                        width: 24,
                        height: 16
                    })
                })
            ]
        })
    });
};


/***/ }),

/***/ 1358:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h": () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@material-ui/core/Box"
var Box_ = __webpack_require__(124);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
;// CONCATENATED MODULE: ./constants/constants.js
const HEADER_HEIGHT = 100;
const HEADER_ZINDEX = 999;

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(9399);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/header/Header.tsx







const Header = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
        bgcolor: "transparent",
        zIndex: HEADER_ZINDEX,
        boxShadow: "0 0 2px lightgrey",
        top: 0,
        position: "fixed",
        height: `${HEADER_HEIGHT}`,
        border: "1px solid #eaeaea",
        className: (Home_module_default()).header,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                className: (Home_module_default()).headerLogo,
                children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                    lineHeight: "1.5",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        href: "/",
                        rel: "noopener noreferrer",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: (Home_module_default()).logo,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/Icon-App.png",
                                    alt: "Vercel Logo",
                                    width: 32,
                                    height: 32
                                })
                            }),
                            " ",
                            "TERMATRAC"
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                className: (Home_module_default()).options,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                        style: {
                            padding: 16
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/history",
                            children: "History"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                        style: {
                            padding: 16
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/data",
                            children: "Data"
                        })
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 4251:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9500);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_analytics__WEBPACK_IMPORTED_MODULE_1__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_analytics__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const firebaseConfig = {
    apiKey: "AIzaSyAWsTi8VtE0d2mcBkGwE2z2ecK11B4tmsU",
    authDomain: "termatrac-a2016.firebaseapp.com",
    projectId: "termatrac-a2016",
    storageBucket: "termatrac-a2016.appspot.com",
    messagingSenderId: "219527952833",
    appId: "1:219527952833:web:85f597550c11887795d740",
    measurementId: "G-JVVNXCN730"
};
let app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
// let app = firebase.initializeApp(firebaseConfig)
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8147:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ modelAddedHook)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1208);
/* harmony import */ var _config_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4251);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_database__WEBPACK_IMPORTED_MODULE_1__, _config_db__WEBPACK_IMPORTED_MODULE_2__]);
([firebase_database__WEBPACK_IMPORTED_MODULE_1__, _config_db__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const modelAddedHook = ()=>{
    const [isModelObject, setIsModelObject] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [modelObjectData, setModelObjectData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [isDataObject, setIsDataObject] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [dataObjectData, setDataObjectData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const dataObjectFetched = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async ()=>{
        setIsDataObject(false);
        const branch = `/dataObject/`;
        if (_config_db__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z) {
            try {
                const db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.getDatabase)(_config_db__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
                (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.get)((0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.ref)(db, branch)).then((snapShot)=>{
                    setIsDataObject(true);
                    setDataObjectData(snapShot.val());
                }).catch((error)=>{
                    console.log("Data Not Found", error);
                });
            } catch (error) {
                console.log("Error Finding Database");
            }
        }
    }, []);
    const dataMetaUpload = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (dataMeta)=>{
        setIsDataObject(false);
        const branch = `/dataObject/`;
        if (_config_db__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z) {
            try {
                const db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.getDatabase)(_config_db__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
                var fileId = (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.push)((0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.ref)(db, branch)).key;
                var updateData = {
                    ...dataMeta,
                    id: fileId
                };
                (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.set)((0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.ref)(db, `/dataObject/${fileId}`), updateData).then(()=>{
                    setIsDataObject(true);
                    console.log("data done");
                }).catch((error)=>{
                    console.log("Data Not Inserted", error);
                });
            } catch (error) {
                console.log("Error Finding Database");
            }
        }
    }, []);
    const modelObjectFetched = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async ()=>{
        setIsModelObject(false);
        const branch = `/ModelObject/`;
        if (_config_db__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z) {
            try {
                const db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.getDatabase)(_config_db__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
                (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.get)((0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.ref)(db, branch)).then((snapShot)=>{
                    setIsModelObject(true);
                    setModelObjectData(snapShot.val());
                }).catch((error)=>{
                    console.log("Data Not Found", error);
                });
            } catch (error) {
                console.log("Error Finding Database");
            }
        }
    }, []);
    const modelAddedFunction = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (modelObject)=>{
        const branch = `/ModelObject/`;
        if (_config_db__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z) {
            try {
                const db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.getDatabase)(_config_db__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
                var modelId = (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.push)((0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.ref)(db, branch)).key;
                var updatedModel = {
                    ...modelObject,
                    id: modelId
                };
                (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.set)((0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.ref)(db, `/ModelObject/${modelId}`), updatedModel).then(()=>{
                    console.log("data done");
                }).catch((error)=>{
                    console.log("Data Not Inserted", error);
                });
            } catch (error) {
                console.log("Error Finding Database");
            }
        }
    }, []);
    return {
        modelAddedFunction,
        modelObjectFetched,
        dataObjectFetched,
        dataMetaUpload,
        isModelObject,
        isDataObject,
        modelObjectData,
        dataObjectData
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;