!function(e,n){for(var o in n)e[o]=n[o]}(exports,function(e){var n={};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=n,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)o.d(t,r,function(n){return e[n]}.bind(null,r));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o(o.s=1)}([function(e,n){e.exports=require("path")},function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});const t=o(2),r=o(3).loadMessageBundle(o(0).join(__dirname,"extension.ts")),a=r(0,null),i=r(1,null),s="extension.node-debug.toggleAutoAttach",l="debug.node",u="autoAttach";let c,f="disabled",d=!1;function g(){const e=t.workspace.getConfiguration(l);if(e){let n=e.get(u);n="on"===n?"off":"on";const o=e.inspect(u);let r=t.ConfigurationTarget.Global;o&&(o.workspaceFolderValue?r=t.ConfigurationTarget.WorkspaceFolder:o.workspaceValue?r=t.ConfigurationTarget.Workspace:o.globalValue?r=t.ConfigurationTarget.Global:o.defaultValue&&t.workspace.workspaceFolders&&(r=t.ConfigurationTarget.Workspace)),e.update(u,n,r)}}function p(e){const n=t.workspace.getConfiguration(l).get(u);if(n!==f)if("disabled"===n)c&&(c.hide(),c.text=i),d&&t.commands.executeCommand("extension.node-debug.stopAutoAttach").then(e=>{f=n,d=!1});else if(c?c.show():((c=t.window.createStatusBarItem(t.StatusBarAlignment.Left)).command=s,c.tooltip=r(2,null),c.show(),e.subscriptions.push(c)),"off"===n)d&&t.commands.executeCommand("extension.node-debug.stopAutoAttach").then(e=>{f=n,c&&(c.text=i),d=!1});else if("on"===n){const e=process.env.VSCODE_PID,o=e?parseInt(e):0;t.commands.executeCommand("extension.node-debug.startAutoAttach",o).then(e=>{c&&(c.text=a),f=n,d=!0})}}n.activate=function(e){e.subscriptions.push(t.commands.registerCommand(s,g)),e.subscriptions.push(t.workspace.onDidChangeConfiguration(n=>{n.affectsConfiguration(l+"."+u)&&p(e)})),p(e)},n.deactivate=function(){}},function(e,n){e.exports=require("vscode")},function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t,r,a,i,s,l=o(0),u=o(4),c=Object.prototype.toString;function f(e){return void 0!==e}function d(e){return"[object String]"===c.call(e)}function g(e){return JSON.parse(u.readFileSync(e,"utf8"))}function p(e,n){return s&&(e="［"+e.replace(/[aouei]/g,"$&$&")+"］"),0===n.length?e:e.replace(/\{(\d+)\}/g,function(e,o){var t=o[0],r=n[t],a=e;return"string"==typeof r?a=r:"number"!=typeof r&&"boolean"!=typeof r&&void 0!==r&&null!==r||(a=String(r)),a})}function m(e){return function(n,o){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];return function(e){return"[object Number]"===c.call(e)}(n)?n>=e.length?void console.error("Broken localize call found. Index out of bounds. Stacktrace is\n: "+new Error("").stack):p(e[n],t):d(o)?(console.warn("Message "+o+" didn't get externalized correctly."),p(o,t)):void console.error("Broken localize call found. Stacktrace is\n: "+new Error("").stack)}}function v(e,n){for(var o=[],t=2;t<arguments.length;t++)o[t-2]=arguments[t];return p(n,o)}function b(e,n){return a[e]=n,n}function h(e,n){var o,t=l.join(i.cacheRoot,e.id+"-"+e.hash+".json"),r=!1,a=!1;try{return o=JSON.parse(u.readFileSync(t,{encoding:"utf8",flag:"r"})),function(e){var n=new Date;u.utimes(e,n,n,function(){})}(t),o}catch(e){if("ENOENT"===e.code)a=!0;else{if(!(e instanceof SyntaxError))throw e;console.log("Syntax error parsing message bundle: "+e.message+"."),u.unlink(t,function(e){e&&console.error("Deleting corrupted bundle "+t+" failed.")}),r=!0}}if(!(o=function(e,n){var o=i.translationsConfig[e.id];if(o){var t=g(o).contents,r=g(l.join(n,"nls.metadata.json")),a=Object.create(null);for(var s in r){var u=r[s],c=t[e.outDir+"/"+s];if(c){for(var f=[],p=0;p<u.keys.length;p++){var m=u.keys[p],v=c[d(m)?m:m.key];void 0===v&&(v=u.messages[p]),f.push(v)}a[s]=f}else a[s]=u.messages}return a}}(e,n))||r)return o;if(a)try{u.writeFileSync(t,JSON.stringify(o),{encoding:"utf8",flag:"wx"})}catch(e){if("EEXIST"===e.code)return o;throw e}return o}function y(e){try{return function(e){var n=g(l.join(e,"nls.metadata.json")),o=Object.create(null);for(var t in n){var r=n[t];o[t]=r.messages}return o}(e)}catch(e){return void console.log("Generating default bundle from meta data failed.",e)}}function S(e,n){var o;if(!0===i.languagePackSupport&&void 0!==i.cacheRoot&&void 0!==i.languagePackId&&void 0!==i.translationsConfigFile&&void 0!==i.translationsConfig)try{o=h(e,n)}catch(e){console.log("Load or create bundle failed ",e)}if(!o){if(i.languagePackSupport)return y(n);var t=function(e){for(var n=i.locale;n;){var o=l.join(e,"nls.bundle."+n+".json");if(u.existsSync(o))return o;var t=n.lastIndexOf("-");n=t>0?n.substring(0,t):void 0}if(void 0===n&&(o=l.join(e,"nls.bundle.json"),u.existsSync(o)))return o}(n);if(t)try{return g(t)}catch(e){console.log("Loading in the box message bundle failed.",e)}o=y(n)}return o}function k(e){if(!e)return v;var n=l.extname(e);if(n&&(e=e.substr(0,e.length-n.length)),i.messageFormat===t.both||i.messageFormat===t.bundle){var o=function(e){for(var n,o=l.dirname(e);n=l.join(o,"nls.metadata.header.json"),!u.existsSync(n);){var t=l.dirname(o);if(t===o){n=void 0;break}o=t}return n}(e);if(o){var r=l.dirname(o),c=a[r];if(void 0===c)try{var d=JSON.parse(u.readFileSync(o,"utf8"));try{var p=S(d,r);c=b(r,p?{header:d,nlsBundle:p}:null)}catch(e){console.error("Failed to load nls bundle",e),c=b(r,null)}}catch(e){console.error("Failed to read header file",e),c=b(r,null)}if(c){var h=e.substr(r.length+1).replace(/\\/g,"/"),y=c.nlsBundle[h];return void 0===y?(console.error("Messages for file "+e+" not found. See console for details."),function(){return"Messages not found."}):m(y)}}}if(i.messageFormat===t.both||i.messageFormat===t.file)try{var k=g(function(e){var n;if(i.cacheLanguageResolution&&n)n=n;else{if(s||!i.locale)n=".nls.json";else for(var o=i.locale;o;){var t=".nls."+o+".json";if(u.existsSync(e+t)){n=t;break}var r=o.lastIndexOf("-");r>0?o=o.substring(0,r):(n=".nls.json",o=null)}i.cacheLanguageResolution&&(n=n)}return e+n}(e));return Array.isArray(k)?m(k):f(k.messages)&&f(k.keys)?m(k.messages):(console.error("String bundle '"+e+"' uses an unsupported format."),function(){return"File bundle has unsupported format. See console for details"})}catch(e){"ENOENT"!==e.code&&console.error("Failed to load single file bundle",e)}return console.error("Failed to load message bundle for file "+e),function(){return"Failed to load message bundle. See console for details."}}!function(e){e.file="file",e.bundle="bundle",e.both="both"}(t=n.MessageFormat||(n.MessageFormat={})),function(e){e.is=function(e){var n=e;return n&&f(n.key)&&f(n.comment)}}(r||(r={})),function(){if(i={locale:void 0,languagePackSupport:!1,cacheLanguageResolution:!0,messageFormat:t.bundle},d(process.env.VSCODE_NLS_CONFIG))try{var e=JSON.parse(process.env.VSCODE_NLS_CONFIG);if(d(e.locale)&&(i.locale=e.locale.toLowerCase()),function(e){return!0===e||!1===e}(e._languagePackSupport)&&(i.languagePackSupport=e._languagePackSupport),d(e._cacheRoot)&&(i.cacheRoot=e._cacheRoot),d(e._languagePackId)&&(i.languagePackId=e._languagePackId),d(e._translationsConfigFile)){i.translationsConfigFile=e._translationsConfigFile;try{i.translationsConfig=g(i.translationsConfigFile)}catch(n){e._corruptedFile&&u.writeFile(e._corruptedFile,"corrupted","utf8",function(e){console.error(e)})}}}catch(e){}s="pseudo"===i.locale,void 0,a=Object.create(null)}(),n.loadMessageBundle=k,n.config=function(e){return e&&(d(e.locale)&&(i.locale=e.locale.toLowerCase(),void 0,a=Object.create(null)),void 0!==e.messageFormat&&(i.messageFormat=e.messageFormat)),s="pseudo"===i.locale,k}},function(e,n){e.exports=require("fs")}]));
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/c7d83e57cd18f18026a8162d042843bda1bcf21f/extensions/debug-auto-launch/dist/extension.js.map