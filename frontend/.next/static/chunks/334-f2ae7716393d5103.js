"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[334],{1453:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=n(r(7294)),i=r(4588),o=r(6565),a=function(e){var t=e.maxSize,r=void 0===t?0:t,n=e.sizeUnit,a=void 0===n?"B":n,l=e.extensions,u=void 0===l?[]:l,h=e.onClick,c=void 0===h?function(){}:h,d=e.onSuccess,_=void 0===d?function(){}:d,p=e.onError,f=void 0===p?function(){}:p,g=e.onFilePicked,m=e.children,b=u instanceof Array?u.join():u,v=u instanceof Array?u:[u],w=s.default.useState(null),k=w[0],y=w[1],R=o.usePrevious(k);s.default.useEffect(function(){if(void 0===k&&void 0!==R)y(null);else if(null!==k){var e=i.InputErrorCode.NoErrors;v.length&&!o.checkExtension(k,v)&&(e|=i.InputErrorCode.InappropriateExtension),r>0&&!o.checkMaxSize(k,r,a)&&(e|=i.InputErrorCode.MaxSizeExceeded),e===i.InputErrorCode.NoErrors?(_(),g(k)):f(e)}},[k]);var T=s.default.useRef(null);return s.default.createElement(s.default.Fragment,null,s.default.createElement("input",{style:{display:"none"},ref:T,type:"file",accept:b,onChange:function(e){e.target.files&&y(e.target.files[0])}}),s.default.cloneElement(m,{onClick:function(){var e;c(),null===(e=T.current)||void 0===e||e.click()}}))};t.default=a},4588:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.InputErrorCode=void 0;var r=function(){function e(){}return e.NoErrors=0,e.MaxSizeExceeded=1,e.InappropriateExtension=2,e.containsMaxSizeError=function(t){return(t&e.MaxSizeExceeded)!=0},e.containsExtensionError=function(t){return(t&e.InappropriateExtension)!=0},e}();t.InputErrorCode=r},8235:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),s=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.InputErrorCode=void 0;var o=r(4588);Object.defineProperty(t,"InputErrorCode",{enumerable:!0,get:function(){return o.InputErrorCode}}),s(r(2840),t);var a=r(1453);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i(a).default}})},2840:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},6565:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.usePrevious=t.checkMaxSize=t.checkExtension=void 0;var s=n(r(7294));t.checkExtension=function(e,t){var r,n=null===(r=e.name.split(".").pop())||void 0===r?void 0:r.toLowerCase();return void 0!==n&&t.map(function(e){return e.toLowerCase().replace(".","")}).includes(n)},t.checkMaxSize=function(e,t,r){return"KB"===r?e.size<=1024*t:"MB"===r?e.size<=1048576*t:"GB"===r?e.size<=1073741824*t:e.size<=t},t.usePrevious=function(e){var t=s.default.useRef();return s.default.useEffect(function(){t.current=e}),t.current}},1153:function(e,t,r){r.d(t,{Jt:function(){return ef},cF:function(){return em},iH:function(){return eg},B0:function(){return ep}});var n,s,i=r(2238),o=r(4444),a=r(8463);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let l="firebasestorage.googleapis.com",u="storageBucket";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class h extends o.ZR{constructor(e,t,r=0){super(c(e),`Firebase Storage: ${t} (${c(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,h.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return c(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function c(e){return"storage/"+e}function d(){return new h("unknown","An unknown error occurred, please check the error payload for server response.")}function _(){return new h("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function p(){return new h("canceled","User canceled the upload/download.")}function f(){return new h("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function g(e){return new h("invalid-argument",e)}function m(){return new h("app-deleted","The Firebase app was deleted.")}function b(e,t){return new h("invalid-format","String does not match format '"+e+"': "+t)}function v(e){throw new h("internal-error","Internal error: "+e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class w{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){let e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){let e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(e,t){var r;let n;try{n=w.makeFromUrl(e,t)}catch(s){return new w(e,"")}if(""===n.path)return n;throw new h("invalid-default-bucket","Invalid default bucket '"+e+"'.")}static makeFromUrl(e,t){let r=null,n="([A-Za-z0-9.\\-_]+)",s=RegExp("^gs://"+n+"(/(.*))?$","i");function i(e){e.path_=decodeURIComponent(e.path)}let o=t.replace(/[.]/g,"\\."),a=RegExp(`^https?://${o}/v[A-Za-z0-9_]+/b/${n}/o(/([^?#]*).*)?$`,"i"),u=RegExp(`^https?://${t===l?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${n}/([^?#]*)`,"i"),c=[{regex:s,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:a,indices:{bucket:1,path:3},postModify:i},{regex:u,indices:{bucket:1,path:2},postModify:i}];for(let d=0;d<c.length;d++){let _=c[d],p=_.regex.exec(e);if(p){let f=p[_.indices.bucket],g=p[_.indices.path];g||(g=""),r=new w(f,g),_.postModify(r);break}}if(null==r){var m;throw new h("invalid-url","Invalid URL '"+e+"'.")}return r}}class k{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}function y(e){return"string"==typeof e||e instanceof String}function R(e){return T()&&e instanceof Blob}function T(){return"undefined"!=typeof Blob}function x(e,t,r,n){if(n<t)throw g(`Invalid value for '${e}'. Expected ${t} or greater.`);if(n>r)throw g(`Invalid value for '${e}'. Expected ${r} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function E(e,t,r){let n=t;return null==r&&(n=`https://${t}`),`${r}://${n}/v0${e}`}function C(e){let t=encodeURIComponent,r="?";for(let n in e)if(e.hasOwnProperty(n)){let s=t(n)+"="+t(e[n]);r=r+s+"&"}return r.slice(0,-1)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function S(e,t){let r=-1!==[408,429].indexOf(e),n=-1!==t.indexOf(e);return e>=500&&e<600||r||n}(n=s||(s={}))[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class U{constructor(e,t,r,n,s,i,o,a,l,u,h,c=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=n,this.successCodes_=s,this.additionalRetryCodes_=i,this.callback_=o,this.errorCallback_=a,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=c,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()})}start_(){let e=(e,t)=>{if(t){e(!1,new O(!1,null,!0));return}let r=this.connectionFactory_();this.pendingConnection_=r;let n=e=>{let t=e.loaded,r=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,r)};null!==this.progressCallback_&&r.addUploadProgressListener(n),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&r.removeUploadProgressListener(n),this.pendingConnection_=null;let t=r.getErrorCode()===s.NO_ERROR,i=r.getStatus();if((!t||S(i,this.additionalRetryCodes_))&&this.retry){let o=r.getErrorCode()===s.ABORT;e(!1,new O(!1,null,o));return}let a=-1!==this.successCodes_.indexOf(i);e(!0,new O(a,r))})},t=(e,t)=>{let r=this.resolve_,n=this.reject_,s=t.connection;if(t.wasSuccessCode)try{var i;let o=this.callback_(s,s.getResponse());void 0!==o?r(o):r()}catch(a){n(a)}else if(null!==s){let l=d();l.serverResponse=s.getErrorText(),n(this.errorCallback_?this.errorCallback_(s,l):l)}else if(t.canceled){let u=this.appDelete_?m():p();n(u)}else{let h=_();n(h)}};this.canceled_?t(!1,new O(!1,null,!0)):this.backoffId_=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e,t,r){let n=1,s=null,i=null,o=!1,a=0;function l(){return 2===a}let u=!1;function h(...e){u||(u=!0,t.apply(null,e))}function c(t){s=setTimeout(()=>{s=null,e(_,l())},t)}function d(){i&&clearTimeout(i)}function _(e,...t){if(u){d();return}if(e){d(),h.call(null,e,...t);return}let r=l()||o;if(r){d(),h.call(null,e,...t);return}n<64&&(n*=2);let s;1===a?(a=2,s=0):s=(n+Math.random())*1e3,c(s)}let p=!1;function f(e){if(!p)p=!0,d(),!u&&(null!==s?(e||(a=2),clearTimeout(s),c(0)):e||(a=1))}return c(0),i=setTimeout(()=>{o=!0,f(!0)},r),f}(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){if(this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_){var t;(t=this.backoffId_)(!1)}null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class O{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function P(...e){let t="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0;if(void 0!==t){let r=new t;for(let n=0;n<e.length;n++)r.append(e[n]);return r.getBlob()}if(T())return new Blob(e);throw new h("unsupported-environment","This browser doesn't seem to support creating Blobs")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let A={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class I{constructor(e,t){this.data=e,this.contentType=t||null}}function M(e){let t=[];for(let r=0;r<e.length;r++){let n=e.charCodeAt(r);if(n<=127)t.push(n);else if(n<=2047)t.push(192|n>>6,128|63&n);else if((64512&n)==55296){let s=r<e.length-1&&(64512&e.charCodeAt(r+1))==56320;if(s){let i=n,o=e.charCodeAt(++r);n=65536|(1023&i)<<10|1023&o,t.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n)}else t.push(239,191,189)}else(64512&n)==56320?t.push(239,191,189):t.push(224|n>>12,128|n>>6&63,128|63&n)}return new Uint8Array(t)}function z(e,t){switch(e){case A.BASE64:{let r=-1!==t.indexOf("-"),n=-1!==t.indexOf("_");if(r||n)throw b(e,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case A.BASE64URL:{let s=-1!==t.indexOf("+"),i=-1!==t.indexOf("/");if(s||i)throw b(e,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/")}}let o;try{var a;a=t,o=atob(a)}catch(l){throw b(e,"Invalid character found")}let u=new Uint8Array(o.length);for(let h=0;h<o.length;h++)u[h]=o.charCodeAt(h);return u}class B{constructor(e){this.base64=!1,this.contentType=null;let t=e.match(/^data:([^,]+)?,/);if(null===t)throw b(A.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");let r=t[1]||null;null!=r&&(this.base64=function(e,t){let r=e.length>=t.length;return!!r&&e.substring(e.length-t.length)===t}(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class q{constructor(e,t){let r=0,n="";R(e)?(this.data_=e,r=e.size,n=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=n}size(){return this.size_}type(){return this.type_}slice(e,t){if(R(this.data_)){var r,n,s;let i=this.data_,o=(r=i,n=e,s=t,r.webkitSlice?r.webkitSlice(n,s):r.mozSlice?r.mozSlice(n,s):r.slice?r.slice(n,s):null);return null===o?null:new q(o)}{let a=new Uint8Array(this.data_.buffer,e,t-e);return new q(a,!0)}}static getBlob(...e){if(T()){let t=e.map(e=>e instanceof q?e.data_:e);return new q(P.apply(null,t))}{let r=e.map(e=>y(e)?function(e,t){switch(e){case A.RAW:return new I(M(t));case A.BASE64:case A.BASE64URL:return new I(z(e,t));case A.DATA_URL:return new I(function(e){let t=new B(e);return t.base64?z(A.BASE64,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(r){throw b(A.DATA_URL,"Malformed data URL.")}return M(t)}(t.rest)}(t),function(e){let t=new B(e);return t.contentType}(t))}throw d()}(A.RAW,e).data:e.data_),n=0;r.forEach(e=>{n+=e.byteLength});let s=new Uint8Array(n),i=0;return r.forEach(e=>{for(let t=0;t<e.length;t++)s[i++]=e[t]}),new q(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function N(e){var t;let r;try{r=JSON.parse(e)}catch(n){return null}return"object"!=typeof(t=r)||Array.isArray(t)?null:r}function L(e){let t=e.lastIndexOf("/",e.length-2);return -1===t?e:e.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function F(e,t){return t}class j{constructor(e,t,r,n){this.server=e,this.local=t||e,this.writable=!!r,this.xform=n||F}}let D=null;function H(){if(D)return D;let e=[];e.push(new j("bucket")),e.push(new j("generation")),e.push(new j("metageneration")),e.push(new j("name","fullPath",!0));let t=new j("name");t.xform=function(e,t){var r;return!y(t)||t.length<2?t:L(t)},e.push(t);let r=new j("size");return r.xform=function(e,t){return void 0!==t?Number(t):t},e.push(r),e.push(new j("timeCreated")),e.push(new j("updated")),e.push(new j("md5Hash",null,!0)),e.push(new j("cacheControl",null,!0)),e.push(new j("contentDisposition",null,!0)),e.push(new j("contentEncoding",null,!0)),e.push(new j("contentLanguage",null,!0)),e.push(new j("contentType",null,!0)),e.push(new j("metadata","customMetadata",!0)),D=e}function $(e,t,r){let n=N(t);return null===n?null:function(e,t,r){var n,s;let i={};i.type="file";let o=r.length;for(let a=0;a<o;a++){let l=r[a];i[l.local]=l.xform(i,t[l.server])}return Object.defineProperty(i,"ref",{get:function(){let t=i.bucket,r=i.fullPath,n=new w(t,r);return e._makeStorageReference(n)}}),i}(e,n,r)}function X(e,t){let r={},n=t.length;for(let s=0;s<n;s++){let i=t[s];i.writable&&(r[i.server]=e[i.local])}return JSON.stringify(r)}class G{constructor(e,t,r,n){this.url=e,this.method=t,this.handler=r,this.timeout=n,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function W(e){if(!e)throw d()}function K(e,t){return function(r,n){let s=$(e,n,t);return W(null!==s),s}}function V(e){return function(t,r){var n,s;let i;return 401===t.getStatus()?i=t.getErrorText().includes("Firebase App Check token is invalid")?new h("unauthorized-app","This app does not have permission to access Firebase Storage on this project."):new h("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(n=e.bucket,i=new h("quota-exceeded","Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(s=e.path,i=new h("unauthorized","User does not have permission to access '"+s+"'.")):i=r,i.status=t.getStatus(),i.serverResponse=r.serverResponse,i}}function J(e){let t=V(e);return function(r,n){let s=t(r,n);if(404===r.getStatus()){var i;i=e.path,s=new h("object-not-found","Object '"+i+"' does not exist.")}return s.serverResponse=n.serverResponse,s}}function Z(e,t,r){let n=Object.assign({},r);if(n.fullPath=e.path,n.size=t.size(),!n.contentType){var s,i;n.contentType=t&&t.type()||"application/octet-stream"}return n}class Y{constructor(e,t,r,n){this.current=e,this.total=t,this.finalized=!!r,this.metadata=n||null}}function Q(e,t){let r=null;try{r=e.getResponseHeader("X-Goog-Upload-Status")}catch(n){W(!1)}return W(!!r&&-1!==(t||["active"]).indexOf(r)),r}let ee={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function et(e){switch(e){case"running":case"pausing":case"canceling":return ee.RUNNING;case"paused":return ee.PAUSED;case"success":return ee.SUCCESS;case"canceled":return ee.CANCELED;default:return ee.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class er{constructor(e,t,r){var n;"function"==typeof e||null!=t||null!=r?(this.next=e,this.error=null!=t?t:void 0,this.complete=null!=r?r:void 0):(this.next=e.next,this.error=e.error,this.complete=e.complete)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function en(e){return(...t)=>{Promise.resolve().then(()=>e(...t))}}class es{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=s.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=s.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=s.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,n){if(this.sent_)throw v("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==n)for(let s in n)n.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,n[s].toString());return void 0!==r?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw v("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw v("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return -1}}getResponse(){if(!this.sent_)throw v("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw v("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class ei extends es{initXhr(){this.xhr_.responseType="text"}}function eo(){return new ei}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ea{constructor(e,t,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=r,this._mappings=H(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=e=>{if(this._request=void 0,this._chunkMultiplier=1,e._codeEquals("canceled"))this._needToFetchStatus=!0,this.completeTransitions_();else{let t=this.isExponentialBackoffExpired();if(S(e.status,[])){if(t)e=_();else{this.sleepTime=Math.max(2*this.sleepTime,1e3),this._needToFetchStatus=!0,this.completeTransitions_();return}}this._error=e,this._transition("error")}},this._metadataErrorHandler=e=>{this._request=void 0,e._codeEquals("canceled")?this.completeTransitions_():(this._error=e,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((e,t)=>{this._resolve=e,this._reject=t,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){let e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,r])=>{switch(this._state){case"running":e(t,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused")}})}_createResumable(){this._resolveToken((e,t)=>{let r=function(e,t,r,n,s){let i=t.bucketOnlyServerUrl(),o=Z(t,n,s),a={name:o.fullPath},l=E(i,e.host,e._protocol),u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${n.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=X(o,r),c=e.maxUploadRetryTime,d=new G(l,"POST",function(e){Q(e);let t;try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(r){W(!1)}return W(y(t)),t},c);return d.urlParams=a,d.headers=u,d.body=h,d.errorHandler=V(t),d}(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),n=this._ref.storage._makeRequest(r,eo,e,t);this._request=n,n.getPromise().then(e=>{this._request=void 0,this._uploadUrl=e,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){let e=this._uploadUrl;this._resolveToken((t,r)=>{let n=function(e,t,r,n){let s=e.maxUploadRetryTime,i=new G(r,"POST",function(e){let t=Q(e,["active","final"]),r=null;try{r=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(s){W(!1)}r||W(!1);let i=Number(r);return W(!isNaN(i)),new Y(i,n.size(),"final"===t)},s);return i.headers={"X-Goog-Upload-Command":"query"},i.errorHandler=V(t),i}(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(n,eo,t,r);this._request=s,s.getPromise().then(e=>{this._request=void 0,this._updateProgress(e.current),this._needToFetchStatus=!1,e.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){let e=262144*this._chunkMultiplier,t=new Y(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((n,s)=>{let i;try{i=function(e,t,r,n,s,i,o,a){let l=new Y(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=n.size()),n.size()!==l.total)throw new h("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.");let u=l.total-l.current,c=u;s>0&&(c=Math.min(c,s));let d=l.current,_=d+c,p="";p=0===c?"finalize":u===c?"upload, finalize":"upload";let g={"X-Goog-Upload-Command":p,"X-Goog-Upload-Offset":`${l.current}`},m=n.slice(d,_);if(null===m)throw f();let b=t.maxUploadRetryTime,v=new G(r,"POST",function(e,r){let s=Q(e,["active","final"]),o=l.current+c,a=n.size(),u;return u="final"===s?K(t,i)(e,r):null,new Y(o,a,"final"===s,u)},b);return v.headers=g,v.body=m.uploadData(),v.progressCallback=a||null,v.errorHandler=V(e),v}(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(o){this._error=o,this._transition("error");return}let a=this._ref.storage._makeRequest(i,eo,n,s,!1);this._request=a,a.getPromise().then(e=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(e.current),e.finalized?(this._metadata=e.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){let e=262144*this._chunkMultiplier;2*e<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{let r=function(e,t,r){let n=t.fullServerUrl(),s=E(n,e.host,e._protocol),i=e.maxOperationRetryTime,o=new G(s,"GET",K(e,r),i);return o.errorHandler=J(t),o}(this._ref.storage,this._ref._location,this._mappings),n=this._ref.storage._makeRequest(r,eo,e,t);this._request=n,n.getPromise().then(e=>{this._request=void 0,this._metadata=e,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{let r=function(e,t,r,n,s){let i=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"},a=function(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();o["Content-Type"]="multipart/related; boundary="+a;let l=Z(t,n,s),u=X(l,r),h="--"+a+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+u+"\r\n--"+a+"\r\nContent-Type: "+l.contentType+"\r\n\r\n",c=q.getBlob(h,n,"\r\n--"+a+"--");if(null===c)throw f();let d={name:l.fullPath},_=E(i,e.host,e._protocol),p=e.maxUploadRetryTime,g=new G(_,"POST",K(e,r),p);return g.urlParams=d,g.headers=o,g.body=c.uploadData(),g.errorHandler=V(t),g}(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),n=this._ref.storage._makeRequest(r,eo,e,t);this._request=n,n.getPromise().then(e=>{this._request=void 0,this._metadata=e,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){let t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,void 0!==this._request?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":let t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":case"error":case"success":this._state=e,this._notifyObservers();break;case"canceled":this._error=p(),this._state=e,this._notifyObservers()}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start()}}get snapshot(){let e=et(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,r,n){let s=new er(t||void 0,r||void 0,n||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){let t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise();let e=this._observers.slice();e.forEach(e=>{this._notifyObserver(e)})}_finishPromise(){if(void 0!==this._resolve){let e=!0;switch(et(this._state)){case ee.SUCCESS:en(this._resolve.bind(null,this.snapshot))();break;case ee.CANCELED:case ee.ERROR:let t=this._reject;en(t.bind(null,this._error))();break;default:e=!1}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){let t=et(this._state);switch(t){case ee.RUNNING:case ee.PAUSED:e.next&&en(e.next.bind(e,this.snapshot))();break;case ee.SUCCESS:e.complete&&en(e.complete.bind(e))();break;case ee.CANCELED:case ee.ERROR:default:e.error&&en(e.error.bind(e,this._error))()}}resume(){let e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e}pause(){let e="running"===this._state;return e&&this._transition("pausing"),e}cancel(){let e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class el{constructor(e,t){this._service=e,t instanceof w?this._location=t:this._location=w.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new el(e,t)}get root(){let e=new w(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return L(this._location.path)}get storage(){return this._service}get parent(){let e=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e){if(0===e.length)return null;let t=e.lastIndexOf("/");if(-1===t)return"";let r=e.slice(0,t);return r}(this._location.path);if(null===e)return null;let t=new w(this._location.bucket,e);return new el(this._service,t)}_throwIfRoot(e){if(""===this._location.path){var t;throw new h("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}}}function eu(e,t){let r=null==t?void 0:t[u];return null==r?null:w.makeFromBucketSpec(r,e)}class eh{constructor(e,t,r,n,s){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=n,this._firebaseVersion=s,this._bucket=null,this._host=l,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,null!=n?this._bucket=w.makeFromBucketSpec(n,this._host):this._bucket=eu(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=w.makeFromBucketSpec(this._url,e):this._bucket=eu(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){x("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){x("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;let e=this._authProvider.getImmediate({optional:!0});if(e){let t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){let e=this._appCheckProvider.getImmediate({optional:!0});if(e){let t=await e.getToken();return t.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new el(this,e)}_makeRequest(e,t,r,n,s=!0){if(this._deleted)return new k(m());{let i=function(e,t,r,n,s,i,o=!0){var a,l,u,h,c,d,_,p;let f=C(e.urlParams),g=e.url+f,m=Object.assign({},e.headers);return a=m,t&&(a["X-Firebase-GMPID"]=t),u=m,null!==r&&r.length>0&&(u.Authorization="Firebase "+r),(c=m)["X-Firebase-Storage-Version"]="webjs/"+(null!=i?i:"AppManager"),_=m,null!==n&&(_["X-Firebase-AppCheck"]=n),new U(g,e.method,m,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,s,o)}(e,this._appId,r,n,t,this._firebaseVersion,s);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,t){let[r,n]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,n).getPromise()}}let ec="@firebase/storage",ed="0.9.12",e_="storage";function ep(e,t,r){var n,s,i;return(n=e=(0,o.m9)(e))._throwIfRoot("uploadBytesResumable"),new ea(n,new q(t),r)}function ef(e){return function(e){e._throwIfRoot("getDownloadURL");let t=function(e,t,r){var n,s;let i=t.fullServerUrl(),o=E(i,e.host,e._protocol),a=e.maxOperationRetryTime,l=new G(o,"GET",function(t,n){let s=$(e,n,r);return W(null!==s),function(e,t,r,n){let s=N(t);if(null===s||!y(s.downloadTokens))return null;let i=s.downloadTokens;if(0===i.length)return null;let o=encodeURIComponent,a=i.split(","),l=a.map(t=>{let s=e.bucket,i=e.fullPath,a="/b/"+o(s)+"/o/"+o(i),l=E(a,r,n),u=C({alt:"media",token:t});return l+u});return l[0]}(s,n,e.host,e._protocol)},a);return l.errorHandler=J(t),l}(e.storage,e._location,H());return e.storage.makeRequestWithTokens(t,eo).then(e=>{if(null===e)throw new h("no-download-url","The given file does not have any download URLs.");return e})}(e=(0,o.m9)(e))}function eg(e,t){return function(e,t){var r,n,s;if(!(t&&/^[A-Za-z]+:\/\//.test(t)))return function e(t,r){if(t instanceof eh){if(null==t._bucket)throw new h("no-default-bucket","No default bucket found. Did you set the '"+u+"' property when initializing the app?");let n=new el(t,t._bucket);return null!=r?e(n,r):n}return void 0!==r?function(e,t){let r=function(e,t){let r=t.split("/").filter(e=>e.length>0).join("/");return 0===e.length?r:e+"/"+r}(e._location.path,t),n=new w(e._location.bucket,r);return new el(e.storage,n)}(t,r):t}(e,t);if(e instanceof eh)return n=e,s=t,new el(n,s);throw g("To use ref(service, url), the first argument must be a Storage instance.")}(e=(0,o.m9)(e),t)}function em(e=(0,i.Mq)(),t){e=(0,o.m9)(e);let r=(0,i.qX)(e,e_),n=r.getImmediate({identifier:t}),s=(0,o.P0)("storage");return s&&function(e,t,r,n={}){!function(e,t,r,n={}){e.host=`${t}:${r}`,e._protocol="http";let{mockUserToken:s}=n;s&&(e._overrideAuthToken="string"==typeof s?s:(0,o.Sg)(s,e.app.options.projectId))}(e,t,r,n)}(n,...s),n}(0,i.Xd)(new a.wA(e_,function e(t,{instanceIdentifier:r}){let n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),o=t.getProvider("app-check-internal");return new eh(n,s,o,r,i.Jn)},"PUBLIC").setMultipleInstances(!0)),(0,i.KN)(ec,ed,""),(0,i.KN)(ec,ed,"esm2017")}}]);