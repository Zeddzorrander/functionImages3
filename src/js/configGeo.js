export const parameters = {
    "id": "ggbApplet",
    "width":800,
    "height":600,
    "showMenuBar":false,
    "showAlgebraInput":false,
    "showToolBar":false,
    "customToolBar":"0 73 62 | 1 501 67 , 5 19 , 72 75 76 | 2 15 45 , 18 65 , 7 37 | 4 3 8 9 , 13 44 , 58 , 47 | 16 51 64 , 70 | 10 34 53 11 , 24  20 22 , 21 23 | 55 56 57 , 12 | 36 46 , 38 49  50 , 71  14  68 | 30 29 54 32 31 33 | 25 17 26 60 52 61 | 40 41 42 , 27 28 35 , 6",
    "showToolBarHelp":false,
    "showResetIcon":false,
    "enableLabelDrags":true,
    "enableShiftDragZoom":true,
    "enableRightClick":false,
    "errorDialogsActive":false,
    "useBrowserForJS":false,
    "allowStyleBar":false,
    "preventFocus":false,
    "showZoomButtons":true,
    "capturingThreshold":3,
    // add code here to run when the applet starts
    "appletOnLoad":function(api){ 
                                },
    "showFullscreenButton":false,
    "scale":1,
    "disableAutoScale":false,
    "allowUpscale":false,
    "clickToLoad":false,
    "appName":"classic",
    "showSuggestionButtons":true,
    "buttonRounding":0.7,
    "buttonShadows":false,
    "language":"en",
    "rounding":"3",
    // use this instead of ggbBase64 to load a material from geogebra.org
    //"material_id":"kNsYvNTd",
    // use this instead of ggbBase64 to load a .ggb file
    //"filename":"http://Users/Zeddzorrander/Documents/Sabbatical2020/functionImages1/GeoGebra/FunctionImages.ggb"
    "ggbBase64":"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",
    
};
    // is3D=is 3D applet using 3D view, AV=Algebra View, SV=Spreadsheet View, CV=CAS View, EV2=Graphics View 2, CP=Construction Protocol, PC=Probability Calculator DA=Data Analysis, FI=Function Inspector, macro=Macros
export const views = {'is3D': 0,'AV': 0,'SV': 0,'CV': 0,'EV2': 0,'CP': 0,'PC': 0,'DA': 0,'FI': 0,'macro': 0};

// export function ggbFunctionf(x) {
//     return 0.05 * (x + 4) * (x - 1) * (x - 5);
// };

