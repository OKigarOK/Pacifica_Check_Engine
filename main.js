import {RENDER} from "./render.js";
import {ACCORD} from "./accordion.js";
// import {SIDEBAR} from "./sidebar.js";
import {MODAL} from "./modal.js";

RENDER()
ACCORD()
// SIDEBAR()
MODAL()

// (function () {
//     // var app = "https://script.google.com/macros/s/AKfycbzngb-5a3tDdHJ445o5LxqeN63V_ihhF_Nxlkz3gxLyMeG3MA/exec"
//     var app = "https://script.google.com/macros/s/AKfycby88um7iv5WFfY_tqkQlU7rFXFj_fUFYpcoa51XYoRuudr81gwm06M8MX16cLfZwKJMlg/exec",
//         output = '',
//         xhr = new XMLHttpRequest();
//     xhr.open('GET', app);
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState !== 4) return;
//
//         if (xhr.status == 200) {
//             try {
//                 var r = JSON.parse(xhr.responseText),
//                     result = r["result"];
//                 for (var i = 0; i < result.length; i++){
//                     var obj = r["result"][i];
//                     output += obj.join("<br/>") + "<br/><hr/>";
//                 }
//             } catch(e) {}
//         }
//
//         document.getElementById('info').innerHTML = output;
//
//     }
//     xhr.send()
// })()

