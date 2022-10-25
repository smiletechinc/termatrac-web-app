"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[627],{5276:function(e,t,n){n.d(t,{N8:function(){return iW},U2:function(){return iq},VF:function(){return iM},iH:function(){return iR},t8:function(){return iF}});var i,r,s,o,l,a,h,u,c=n(2238),d=n(8463),_=n(4444),p=n(3333),f=n(4406);let g="@firebase/database",m="0.13.9",y="";/**
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
 */ class v{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),(0,_.Wl)(t))}get(e){let t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:(0,_.cI)(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */ class C{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return(0,_.r3)(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */ let w=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){let t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new v(t)}}catch(n){}return new C},T=w("localStorage"),I=w("sessionStorage"),k=new p.Yd("@firebase/database"),b,E=(b=1,function(){return b++}),N=function(e){let t=(0,_.dS)(e),n=new _.gQ;n.update(t);let i=n.digest();return _.US.encodeByteArray(i)},P=function(...e){let t="";for(let n=0;n<e.length;n++){let i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=P.apply(null,i):"object"==typeof i?t+=(0,_.Wl)(i):t+=i,t+=" "}return t},S=null,x=!0,R=function(e,t){(0,_.hu)(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(k.logLevel=p.in.VERBOSE,S=k.log.bind(k),t&&I.set("logging_enabled",!0)):"function"==typeof e?S=e:(S=null,I.remove("logging_enabled"))},D=function(...e){if(!0===x&&(x=!1,null===S&&!0===I.get("logging_enabled")&&R(!0)),S){let t=P.apply(null,e);S(t)}},M=function(e){return function(...t){D(e,...t)}},F=function(...e){let t="FIREBASE INTERNAL ERROR: "+P(...e);k.error(t)},q=function(...e){let t=`FIREBASE FATAL ERROR: ${P(...e)}`;throw k.error(t),Error(t)},A=function(...e){let t="FIREBASE WARNING: "+P(...e);k.warn(t)},L=function(){"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&A("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},O=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},W=function(e){if((0,_.Yr)()||"complete"===document.readyState)e();else{let t=!1,n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&n()}),window.attachEvent("onload",n))}},U="[MIN_NAME]",H="[MAX_NAME]",Y=function(e,t){if(e===t)return 0;if(e===U||t===H)return -1;if(t===U||e===H)return 1;{let n=Q(e),i=Q(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},j=function(e,t){return e===t?0:e<t?-1:1},z=function(e,t){if(t&&e in t)return t[e];throw Error("Missing required key ("+e+") in object: "+(0,_.Wl)(t))},V=function(e){if("object"!=typeof e||null===e)return(0,_.Wl)(e);let t=[];for(let n in e)t.push(n);t.sort();let i="{";for(let r=0;r<t.length;r++)0!==r&&(i+=","),i+=(0,_.Wl)(t[r]),i+=":",i+=V(e[t[r]]);return i+"}"},K=function(e,t){let n=e.length;if(n<=t)return[e];let i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function B(e,t){for(let n in e)e.hasOwnProperty(n)&&t(n,e[n])}let G=function(e){(0,_.hu)(!O(e),"Invalid JSON number");let t,n,i,r,s;0===e?(n=0,i=0,t=1/e==-1/0?1:0):(t=e<0,(e=Math.abs(e))>=22250738585072014e-324?(n=(r=Math.min(Math.floor(Math.log(e)/Math.LN2),1023))+1023,i=Math.round(e*Math.pow(2,52-r)-4503599627370496)):(n=0,i=Math.round(e/5e-324)));let o=[];for(s=52;s;s-=1)o.push(i%2?1:0),i=Math.floor(i/2);for(s=11;s;s-=1)o.push(n%2?1:0),n=Math.floor(n/2);o.push(t?1:0),o.reverse();let l=o.join(""),a="";for(s=0;s<64;s+=8){let h=parseInt(l.substr(s,8),2).toString(16);1===h.length&&(h="0"+h),a+=h}return a.toLowerCase()},$=RegExp("^-?(0*)\\d{1,10}$"),Q=function(e){if($.test(e)){let t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},X=function(e){try{e()}catch(t){setTimeout(()=>{let e=t.stack||"";throw A("Exception was thrown by user callback.",e),t},Math.floor(0))}},J=function(){let e="object"==typeof window&&window.navigator&&window.navigator.userAgent||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Z=function(e,t){let n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
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
 */ class ee{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then(e=>this.appCheck=e)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){A(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */ class et{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(e=>this.auth_=e)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(e=>e&&"auth/token-not-initialized"===e.code?(D("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',A(e)}}class en{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}en.OWNER="owner";let ei=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,er="websocket",es="long_polling";/**
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
 */ class eo{constructor(e,t,n,i,r=!1,s="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=T.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&T.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){let e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function el(e,t,n){var i;(0,_.hu)("string"==typeof t,"typeof type must == string"),(0,_.hu)("object"==typeof n,"typeof params must == object");let r;if(t===er)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===es)r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw Error("Unknown connection type: "+t);(e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams)&&(n.ns=e.namespace);let s=[];return B(n,(e,t)=>{s.push(e+"="+t)}),r+s.join("&")}/**
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
 */ class ea{constructor(){this.counters_={}}incrementCounter(e,t=1){(0,_.r3)(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return(0,_.p$)(this.counters_)}}/**
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
 */ let eh={},eu={};function ec(e){let t=e.toString();return eh[t]||(eh[t]=new ea),eh[t]}/**
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
 */ class ed{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){let n=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<n.length;++i)n[i]&&X(()=>{this.onMessage_(n[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */ let e_="start";class ep{constructor(e,t,n,i,r,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=M(e),this.stats_=ec(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),el(t,es,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ed(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(3e4)),W(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ef((...e)=>{let[t,n,i,r,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder){if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===e_)this.id=n,this.password=i;else if("close"===t)n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,()=>{this.onClosed_()})):this.onClosed_();else throw Error("Unrecognized command received: "+t)}},(...e)=>{let[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)},()=>{this.onClosed_()},this.urlFn);let e={};e[e_]="t",e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&ei.test(location.hostname)&&(e.r="f");let t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ep.forceAllow_=!0}static forceDisallow(){ep.forceDisallow_=!0}static isAvailable(){return!(0,_.Yr)()&&(!!ep.forceAllow_||!ep.forceDisallow_&&"undefined"!=typeof document&&null!=document.createElement&&!("object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){!this.isClosed_&&(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){let t=(0,_.Wl)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);let n=(0,_.h$)(t),i=K(n,1840);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if((0,_.Yr)())return;this.myDisconnFrame=document.createElement("iframe");let n={};n.dframe="t",n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){let t=(0,_.Wl)(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class ef{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,_.Yr)())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=E(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=ef.createIFrame_();let r="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){let s=document.domain;r='<script>document.domain="'+s+'";</script>'}let o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){D("frame writing exception"),l.stack&&D(l.stack),D(l)}}}static createIFrame_(){let e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{let t=e.contentWindow.document;t||D("No IE domain setting required")}catch(i){let n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));let e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(!this.alive||!this.sendNewPolls||!(this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)))return!1;{this.currentSerial++;let e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;){let r=this.pendingSegs[0];if(r.d.length+30+n.length<=1870){let s=this.pendingSegs.shift();n=n+"&seg"+i+"="+s.seg+"&ts"+i+"="+s.ts+"&d"+i+"="+s.d,i++}else break}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);let n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3)),r=()=>{clearTimeout(i),n()};this.addTag(e,r)}addTag(e,t){(0,_.Yr)()?this.doNodeLongPoll(e,t):setTimeout(()=>{try{if(!this.sendNewPolls)return;let n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){let e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{D("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(i){}},Math.floor(1))}}let eg=null;"undefined"!=typeof MozWebSocket?eg=MozWebSocket:"undefined"!=typeof WebSocket&&(eg=WebSocket);class em{constructor(e,t,n,i,r,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=M(this.connId),this.stats_=ec(t),this.connURL=em.connectionURL_(t,s,o,i,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i,r){let s={};return s.v="5",!(0,_.Yr)()&&"undefined"!=typeof location&&location.hostname&&ei.test(location.hostname)&&(s.r="f"),t&&(s.s=t),n&&(s.ls=n),i&&(s.ac=i),r&&(s.p=r),el(e,er,s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,T.set("previous_websocket_failure",!0);try{let n;if((0,_.Yr)()){let i=this.nodeAdmin?"AdminNode":"Node";n={headers:{"User-Agent":`Firebase/5/${y}/${f.platform}/${i}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(n.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(n.headers["X-Firebase-AppCheck"]=this.appCheckToken);let r=f.env,s=0===this.connURL.indexOf("wss://")?r.HTTPS_PROXY||r.https_proxy:r.HTTP_PROXY||r.http_proxy;s&&(n.proxy={origin:s})}this.mySock=new eg(this.connURL,[],n)}catch(l){this.log_("Error instantiating WebSocket.");let o=l.message||l.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");let t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){em.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){let t=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);t&&t.length>1&&4.4>parseFloat(t[1])&&(e=!0)}return!e&&null!==eg&&!em.forceDisallow_}static previouslyFailed(){return T.isInMemoryStorage||!0===T.get("previous_websocket_failure")}markConnectionHealthy(){T.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){let t=this.frames.join("");this.frames=null;let n=(0,_.cI)(t);this.onMessage(n)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if((0,_.hu)(null===this.frames,"We already have a frame buffer"),e.length<=6){let t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;let t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{let n=this.extractFrameCount_(t);null!==n&&this.appendFrame_(n)}}send(e){this.resetKeepAlive();let t=(0,_.Wl)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);let n=K(t,16384);n.length>1&&this.sendString_(String(n.length));for(let i=0;i<n.length;i++)this.sendString_(n[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){!this.isClosed_&&(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}em.responsesRequiredToBeHealthy=2,em.healthyTimeout=3e4;/**
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
 */ class ey{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ep,em]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){let t=em&&em.isAvailable(),n=t&&!em.previouslyFailed();if(e.webSocketOnly&&(t||A("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[em];else{let i=this.transports_=[];for(let r of ey.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);ey.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ey.globalTransportInitialized_=!1;class ev{constructor(e,t,n,i,r,s,o,l,a,h){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=l,this.onKill_=a,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=M("c:"+this.id+":"),this.transportManager_=new ey(t),this.log_("Connection created"),this.start_()}start_(){let e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},Math.floor(0));let i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Z(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){this.sendData_({t:"d",d:e})}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){let t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){let t=z("t",e),n=z("d",e);if("c"===t)this.onSecondaryControl_(n);else if("d"===t)this.pendingDataMessages.push(n);else throw Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){let t=z("t",e),n=z("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){!this.isHealthy_&&(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){let t=z("t",e);if("d"in e){let n=e.d;if("h"===t)this.onHandshake_(n);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?F("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):F("Unknown control packet command: "+t)}}onHandshake_(e){let t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&A("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){let e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Z(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Z(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){let e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(T.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */ class eC{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */ class ew{constructor(e){this.allowedEvents_=e,this.listeners_={},(0,_.hu)(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){let n=[...this.listeners_[e]];for(let i=0;i<n.length;i++)n[i].callback.apply(n[i].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});let i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);let i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!n||n===i[r].context)){i.splice(r,1);return}}validateEventType_(e){(0,_.hu)(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */ class eT extends ew{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||(0,_.uI)()||(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new eT}getInitialEvent(e){return(0,_.hu)("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}class eI{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let n=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[n]=this.pieces_[i],n++);this.pieces_.length=n,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function ek(){return new eI("")}function eb(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function eE(e){return e.pieces_.length-e.pieceNum_}function eN(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new eI(e.pieces_,t)}function eP(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function eS(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function ex(e){if(e.pieceNum_>=e.pieces_.length)return null;let t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new eI(t,0)}function eR(e,t){let n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof eI)for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);else{let s=t.split("/");for(let o=0;o<s.length;o++)s[o].length>0&&n.push(s[o])}return new eI(n,0)}function eD(e){return e.pieceNum_>=e.pieces_.length}function eM(e,t){let n=eb(e),i=eb(t);if(null===n)return t;if(n===i)return eM(eN(e),eN(t));throw Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function eF(e,t){if(eE(e)!==eE(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function eq(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(eE(e)>eE(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class eA{constructor(e,t){this.errorPrefix_=t,this.parts_=eS(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=(0,_.ug)(this.parts_[n]);eL(this)}}function eL(e){if(e.byteLength_>768)throw Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+eO(e))}function eO(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}/**
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
 */ class eW extends ew{constructor(){super(["visible"]);let e,t;"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{let t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))},!1)}static getInstance(){return new eW}getInitialEvent(e){return(0,_.hu)("visible"===e,"Unknown event type: "+e),[this.visible_]}}class eU extends eC{constructor(e,t,n,i,r,s,o,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=l,this.id=eU.nextPersistentConnectionId_++,this.log_=M("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!(0,_.Yr)())throw Error("Auth override specified in options, but not supported on non Node.js platforms");eW.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&eT.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){let i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_((0,_.Wl)(r)),(0,_.hu)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();let t=new _.BH,n={p:e._path.toString(),q:e._queryObject};this.outstandingGets_.push({action:"g",request:n,onComplete(e){let n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}}),this.outstandingGetCount_++;let i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,i){this.initConnection_();let r=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+r),this.listens.has(s)||this.listens.set(s,new Map),(0,_.hu)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,_.hu)(!this.listens.get(s).has(r),"listen() called twice for same path/queryId.");let o={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(s).set(r,o),this.connected_&&this.sendListen_(o)}sendGet_(e){let t=this.outstandingGets_[e];this.sendRequest("g",t.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(e){let t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);let r={p:n};e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest("q",r,r=>{let s=r.d,o=r.s;eU.warnOnListenWarnings_(s,t);let l=this.listens.get(n)&&this.listens.get(n).get(i);l===e&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,s))})}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&(0,_.r3)(e,"w")){let n=(0,_.DV)(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){let i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();A(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){let t=e&&40===e.length;(t||(0,_.GJ)(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){let e=this.authToken_,t=(0,_.w9)(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,t=>{let n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{let t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(e,t){let n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),(0,_.hu)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");let r=this.removeListen_(n,i);r&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);let r={p:e};i&&(r.q=n,r.t=i),this.sendRequest("n",r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){let r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,e=>{i&&setTimeout(()=>{i(e.s,e.d)},Math.floor(0))})}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();let s={p:t,d:n};void 0!==r&&(s.h=r),this.outstandingPuts_.push({action:e,request:s,onComplete:i}),this.outstandingPutCount_++;let o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){let t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)})}reportStats(e){if(this.connected_){let t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,e=>{let t=e.s;if("ok"!==t){let n=e.d;this.log_("reportStats","Error sending stats: "+n)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+(0,_.Wl)(e));let t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else if("error"in e)throw"A server-side error has occurred: "+e.error;else"a"in e&&this.onDataPush_(e.a,e.b)}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):F("Unrecognized action received from server: "+(0,_.Wl)(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){(0,_.hu)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){!e||this.visible_||this.reconnectDelay_!==this.maxReconnectDelay_||(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){let e=new Date().getTime()-this.lastConnectionEstablishedTime_;e>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime();let t=new Date().getTime()-this.lastConnectionAttemptTime_,n=Math.max(0,this.reconnectDelay_-t);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;let e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+eU.nextConnectionId_++,r=this.lastSessionId,s=!1,o=null,l=function(){o?o.close():(s=!0,n())},a=function(e){(0,_.hu)(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)};this.realtime_={close:l,sendRequest:a};let h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{let[u,c]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);s?D("getToken() completed but was canceled"):(D("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=c&&c.token,o=new ev(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,e=>{A(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")},r))}catch(d){this.log_("Failed to get token: "+d),s||(this.repoInfo_.nodeAdmin&&A(d),l())}}}interrupt(e){D("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){D("Resuming connection for reason: "+e),delete this.interruptReasons_[e],(0,_.xb)(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){let t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){let t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map(e=>V(e)).join("$"):"default";let i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){let n=new eI(e).toString(),i;if(this.listens.has(n)){let r=this.listens.get(n);i=r.get(t),r.delete(t),0===r.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){D("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),("invalid_token"===e||"permission_denied"===e)&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){D("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,("invalid_token"===e||"permission_denied"===e)&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){for(let e of(this.tryAuth(),this.tryAppCheck(),this.listens.values()))for(let t of e.values())this.sendListen_(t);for(let n=0;n<this.outstandingPuts_.length;n++)this.outstandingPuts_[n]&&this.sendPut_(n);for(;this.onDisconnectRequestQueue_.length;){let i=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(i.action,i.pathString,i.data,i.onComplete)}for(let r=0;r<this.outstandingGets_.length;r++)this.outstandingGets_[r]&&this.sendGet_(r)}sendConnectStats_(){let e={},t="js";(0,_.Yr)()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+y.replace(/\./g,"-")]=1,(0,_.uI)()?e["framework.cordova"]=1:(0,_.b$)()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){let e=eT.getInstance().currentlyOnline();return(0,_.xb)(this.interruptReasons_)&&e}}eU.nextPersistentConnectionId_=0,eU.nextConnectionId_=0;/**
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
 */ class eH{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new eH(e,t)}}/**
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
 */ class eY{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){let n=new eH(U,e),i=new eH(U,t);return 0!==this.compare(n,i)}minPost(){return eH.MIN}}/**
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
 */ let ej;class ez extends eY{static get __EMPTY_NODE(){return ej}static set __EMPTY_NODE(e){ej=e}compare(e,t){return Y(e.name,t.name)}isDefinedOn(e){throw(0,_.g5)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return eH.MIN}maxPost(){return new eH(H,ej)}makePost(e,t){return(0,_.hu)("string"==typeof e,"KeyIndex indexValue must always be a string."),new eH(e,ej)}toString(){return".key"}}let eV=new ez;/**
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
 */ class eK{constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,i&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else if(0===s){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}getNext(){if(0===this.nodeStack_.length)return null;let e=this.nodeStack_.pop(),t;if(t=this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;let e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class eB{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:eB.RED,this.left=null!=i?i:eG.EMPTY_NODE,this.right=null!=r?r:eG.EMPTY_NODE}copy(e,t,n,i,r){return new eB(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this,r=n(e,i.key);return(i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n))).fixUp_()}removeMin_(){if(this.left.isEmpty())return eG.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),(e=e.copy(null,null,null,e.left.removeMin_(),null)).fixUp_()}remove(e,t){let n,i;if(n=this,0>t(e,n.key))n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return eG.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight_())).rotateLeft_()).colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=(e=e.rotateRight_()).colorFlip_()),e}rotateLeft_(){let e=this.copy(null,null,eB.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){let e=this.copy(null,null,eB.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){let e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw Error("Right child of ("+this.key+","+this.value+") is red");let e=this.left.check_();if(e===this.right.check_())return e+(this.isRed_()?0:1);throw Error("Black depths differ")}}eB.RED=!0,eB.BLACK=!1;class eG{constructor(e,t=eG.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new eG(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,eB.BLACK,null,null))}remove(e){return new eG(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,eB.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key)))return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key))){if(n.left.isEmpty()){if(i)return i.key;return null}for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new eK(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new eK(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new eK(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new eK(this.root_,null,this.comparator_,!0,e)}}/**
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
 */ function e$(e,t){return Y(e.name,t.name)}function eQ(e,t){return Y(e,t)}eG.EMPTY_NODE=new class{copy(e,t,n,i,r){return this}insert(e,t,n){return new eB(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};/**
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
 */ let eX,eJ=function(e){return"number"==typeof e?"number:"+G(e):"string:"+e},eZ=function(e){if(e.isLeafNode()){let t=e.val();(0,_.hu)("string"==typeof t||"number"==typeof t||"object"==typeof t&&(0,_.r3)(t,".sv"),"Priority must be a string or number.")}else(0,_.hu)(e===eX||e.isEmpty(),"priority of unexpected type.");(0,_.hu)(e===eX||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")},e0;class e1{constructor(e,t=e1.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,(0,_.hu)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),eZ(this.priorityNode_)}static set __childrenNodeConstructor(e){e0=e}static get __childrenNodeConstructor(){return e0}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new e1(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:e1.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return eD(e)?this:".priority"===eb(e)?this.priorityNode_:e1.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:e1.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){let n=eb(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:((0,_.hu)(".priority"!==n||1===eE(e),".priority must be the last token in a path"),this.updateImmediateChild(n,e1.__childrenNodeConstructor.EMPTY_NODE.updateChild(eN(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+eJ(this.priorityNode_.val())+":");let t=typeof this.value_;e+=t+":","number"===t?e+=G(this.value_):e+=this.value_,this.lazyHash_=N(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===e1.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof e1.__childrenNodeConstructor?-1:((0,_.hu)(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){let t=typeof e.value_,n=typeof this.value_,i=e1.VALUE_TYPE_ORDER.indexOf(t),r=e1.VALUE_TYPE_ORDER.indexOf(n);return((0,_.hu)(i>=0,"Unknown leaf type: "+t),(0,_.hu)(r>=0,"Unknown leaf type: "+n),i!==r)?r-i:"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1}withIndex(){return this}isIndexed(){return!0}equals(e){return e===this||!!e.isLeafNode()&&this.value_===e.value_&&this.priorityNode_.equals(e.priorityNode_)}}e1.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */ let e3,e2,e4=new class extends eY{compare(e,t){let n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?Y(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return eH.MIN}maxPost(){return new eH(H,new e1("[PRIORITY-POST]",e2))}makePost(e,t){let n=e3(e);return new eH(t,new e1("[PRIORITY-POST]",n))}toString(){return".priority"}},e5=Math.log(2);class e8{constructor(e){var t;this.count=parseInt(Math.log(e+1)/e5,10),this.current_=this.count-1;let n=parseInt(Array(this.count+1).join("1"),2);this.bits_=e+1&n}nextBitIsOne(){let e=!(this.bits_&1<<this.current_);return this.current_--,e}}let e6=function(e,t,n,i){e.sort(t);let r=function(t,i){let s=i-t,o,l;if(0===s)return null;if(1===s)return o=e[t],l=n?n(o):o,new eB(l,o.node,eB.BLACK,null,null);{let a=parseInt(s/2,10)+t,h=r(t,a),u=r(a+1,i);return o=e[a],l=n?n(o):o,new eB(l,o.node,eB.BLACK,h,u)}},s=new e8(e.length),o=function(t){let i=null,s=null,o=e.length,l=function(t,i){let s=o-t;o-=t;let l=r(s+1,o),h=e[s],u=n?n(h):h;a(new eB(u,h.node,i,null,l))},a=function(e){i?(i.left=e,i=e):(s=e,i=e)};for(let h=0;h<t.count;++h){let u=t.nextBitIsOne(),c=Math.pow(2,t.count-(h+1));u?l(c,eB.BLACK):(l(c,eB.BLACK),l(c,eB.RED))}return s}(s);return new eG(i||t,o)},e7,e9={};class te{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return(0,_.hu)(e9&&e4,"ChildrenNode.ts has not been loaded"),e7=e7||new te({".priority":e9},{".priority":e4})}get(e){let t=(0,_.DV)(this.indexes_,e);if(!t)throw Error("No index defined for "+e);return t instanceof eG?t:null}hasIndex(e){return(0,_.r3)(this.indexSet_,e.toString())}addIndex(e,t){(0,_.hu)(e!==eV,"KeyIndex always exists and isn't meant to be added to the IndexMap.");let n=[],i=!1,r=t.getIterator(eH.Wrap),s=r.getNext();for(;s;)i=i||e.isDefinedOn(s.node),n.push(s),s=r.getNext();let o;o=i?e6(n,e.getCompare()):e9;let l=e.toString(),a=Object.assign({},this.indexSet_);a[l]=e;let h=Object.assign({},this.indexes_);return h[l]=o,new te(h,a)}addToIndexes(e,t){let n=(0,_.UI)(this.indexes_,(n,i)=>{let r=(0,_.DV)(this.indexSet_,i);if((0,_.hu)(r,"Missing index implementation for "+i),n===e9){if(!r.isDefinedOn(e.node))return e9;{let s=[],o=t.getIterator(eH.Wrap),l=o.getNext();for(;l;)l.name!==e.name&&s.push(l),l=o.getNext();return s.push(e),e6(s,r.getCompare())}}{let a=t.get(e.name),h=n;return a&&(h=h.remove(new eH(e.name,a))),h.insert(e,e.node)}});return new te(n,this.indexSet_)}removeFromIndexes(e,t){let n=(0,_.UI)(this.indexes_,n=>{if(n===e9)return n;{let i=t.get(e.name);return i?n.remove(new eH(e.name,i)):n}});return new te(n,this.indexSet_)}}/**
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
 */ let tt;class tn{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&eZ(this.priorityNode_),this.children_.isEmpty()&&(0,_.hu)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return tt||(tt=new tn(new eG(eQ),null,te.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||tt}updatePriority(e){return this.children_.isEmpty()?this:new tn(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{let t=this.children_.get(e);return null===t?tt:t}}getChild(e){let t=eb(e);return null===t?this:this.getImmediateChild(t).getChild(eN(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if((0,_.hu)(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{let n=new eH(e,t),i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(n,this.children_));let s=i.isEmpty()?tt:this.priorityNode_;return new tn(i,s,r)}}updateChild(e,t){let n=eb(e);if(null===n)return t;{(0,_.hu)(".priority"!==eb(e)||1===eE(e),".priority must be the last token in a path");let i=this.getImmediateChild(n).updateChild(eN(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;let t={},n=0,i=0,r=!0;if(this.forEachChild(e4,(s,o)=>{t[s]=o.val(e),n++,r&&tn.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):r=!1}),e||!r||!(i<2*n))return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t;{let s=[];for(let o in t)s[o]=t[o];return s}}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+eJ(this.getPriority().val())+":"),this.forEachChild(e4,(t,n)=>{let i=n.hash();""!==i&&(e+=":"+t+":"+i)}),this.lazyHash_=""===e?"":N(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){let i=this.resolveIndex_(n);if(!i)return this.children_.getPredecessorKey(e);{let r=i.getPredecessorKey(new eH(e,t));return r?r.name:null}}getFirstChildName(e){let t=this.resolveIndex_(e);if(!t)return this.children_.minKey();{let n=t.minKey();return n&&n.name}}getFirstChild(e){let t=this.getFirstChildName(e);return t?new eH(t,this.children_.get(t)):null}getLastChildName(e){let t=this.resolveIndex_(e);if(!t)return this.children_.maxKey();{let n=t.maxKey();return n&&n.name}}getLastChild(e){let t=this.getLastChildName(e);return t?new eH(t,this.children_.get(t)):null}forEachChild(e,t){let n=this.resolveIndex_(e);return n?n.inorderTraversal(e=>t(e.name,e.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){let n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,e=>e);{let i=this.children_.getIteratorFrom(e.name,eH.Wrap),r=i.peek();for(;null!=r&&0>t.compare(r,e);)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){let n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,e=>e);{let i=this.children_.getReverseIteratorFrom(e.name,eH.Wrap),r=i.peek();for(;null!=r&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ti?-1:0}withIndex(e){if(e===eV||this.indexMap_.hasIndex(e))return this;{let t=this.indexMap_.addIndex(e,this.children_);return new tn(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===eV||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode()||!this.getPriority().equals(e.getPriority()))return!1;if(this.children_.count()!==e.children_.count())return!1;{let t=this.getIterator(e4),n=e.getIterator(e4),i=t.getNext(),r=n.getNext();for(;i&&r;){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=t.getNext(),r=n.getNext()}return null===i&&null===r}}resolveIndex_(e){return e===eV?null:this.indexMap_.get(e.toString())}}tn.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;let ti=new class extends tn{constructor(){super(new eG(eQ),tn.EMPTY_NODE,te.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return tn.EMPTY_NODE}isEmpty(){return!1}};function tr(e,t=null){if(null===e)return tn.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),(0,_.hu)(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){let n=e;return new e1(n,tr(t))}if(e instanceof Array){let i=tn.EMPTY_NODE;return B(e,(t,n)=>{if((0,_.r3)(e,t)&&"."!==t.substring(0,1)){let r=tr(n);(r.isLeafNode()||!r.isEmpty())&&(i=i.updateImmediateChild(t,r))}}),i.updatePriority(tr(t))}{let r=[],s=!1,o=e;if(B(o,(e,t)=>{if("."!==e.substring(0,1)){let n=tr(t);n.isEmpty()||(s=s||!n.getPriority().isEmpty(),r.push(new eH(e,n)))}}),0===r.length)return tn.EMPTY_NODE;let l=e6(r,e$,e=>e.name,eQ);if(!s)return new tn(l,tr(t),te.Default);{let a=e6(r,e4.getCompare());return new tn(l,tr(t),new te({".priority":a},{".priority":e4}))}}}Object.defineProperties(eH,{MIN:{value:new eH(U,tn.EMPTY_NODE)},MAX:{value:new eH(H,ti)}}),ez.__EMPTY_NODE=tn.EMPTY_NODE,e1.__childrenNodeConstructor=tn,eX=ti,e2=ti,e3=tr;/**
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
 */ class ts extends eY{constructor(e){super(),this.indexPath_=e,(0,_.hu)(!eD(e)&&".priority"!==eb(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){let n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?Y(e.name,t.name):r}makePost(e,t){let n=tr(e),i=tn.EMPTY_NODE.updateChild(this.indexPath_,n);return new eH(t,i)}maxPost(){let e=tn.EMPTY_NODE.updateChild(this.indexPath_,ti);return new eH(H,e)}toString(){return eS(this.indexPath_,0).join("/")}}let to=new /**
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
 */ class extends eY{compare(e,t){let n=e.node.compareTo(t.node);return 0===n?Y(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return eH.MIN}maxPost(){return eH.MAX}makePost(e,t){let n=tr(e);return new eH(t,n)}toString(){return".value"}},tl="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",ta=function(){let e=0,t=[];return function(n){let i=n===e;e=n;let r,s=Array(8);for(r=7;r>=0;r--)s[r]=tl.charAt(n%64),n=Math.floor(n/64);(0,_.hu)(0===n,"Cannot push at time == 0");let o=s.join("");if(i){for(r=11;r>=0&&63===t[r];r--)t[r]=0;t[r]++}else for(r=0;r<12;r++)t[r]=Math.floor(64*Math.random());for(r=0;r<12;r++)o+=tl.charAt(t[r]);return(0,_.hu)(20===o.length,"nextPushId: Length should be 20."),o}}();/**
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
 */ function th(e){return{type:"value",snapshotNode:e}}function tu(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function tc(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function td(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}/**
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
 */ class t_{constructor(e){this.index_=e}updateChild(e,t,n,i,r,s){(0,_.hu)(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");let o=e.getImmediateChild(t);return o.getChild(i).equals(n.getChild(i))&&o.isEmpty()===n.isEmpty()?e:(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(tc(t,o)):(0,_.hu)(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?s.trackChildChange(tu(t,n)):s.trackChildChange(td(t,n,o))),e.isLeafNode()&&n.isEmpty())?e:e.updateImmediateChild(t,n).withIndex(this.index_)}updateFullNode(e,t,n){return null==n||(e.isLeafNode()||e.forEachChild(e4,(e,i)=>{t.hasChild(e)||n.trackChildChange(tc(e,i))}),t.isLeafNode()||t.forEachChild(e4,(t,i)=>{if(e.hasChild(t)){let r=e.getImmediateChild(t);r.equals(i)||n.trackChildChange(td(t,i,r))}else n.trackChildChange(tu(t,i))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?tn.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */ class tp{constructor(e){this.indexedFilter_=new t_(e.getIndex()),this.index_=e.getIndex(),this.startPost_=tp.getStartPost_(e),this.endPost_=tp.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return 0>=this.index_.compare(this.getStartPost(),e)&&0>=this.index_.compare(e,this.getEndPost())}updateChild(e,t,n,i,r,s){return this.matches(new eH(t,n))||(n=tn.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,r,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=tn.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(tn.EMPTY_NODE);let r=this;return t.forEachChild(e4,(e,t)=>{r.matches(new eH(e,t))||(i=i.updateImmediateChild(e,tn.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(!e.hasStart())return e.getIndex().minPost();{let t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}}static getEndPost_(e){if(!e.hasEnd())return e.getIndex().maxPost();{let t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}}}/**
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
 */ class tf{constructor(e){this.rangedFilter_=new tp(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,n,i,r,s){return(this.rangedFilter_.matches(new eH(t,n))||(n=tn.EMPTY_NODE),e.getImmediateChild(t).equals(n))?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,r,s):this.fullLimitUpdateChild_(e,t,n,r,s)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=tn.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){i=tn.EMPTY_NODE.withIndex(this.index_);let r;r=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let s=0;for(;r.hasNext()&&s<this.limit_;){let o=r.getNext(),l;if(this.reverse_?0>=this.index_.compare(this.rangedFilter_.getStartPost(),o):0>=this.index_.compare(o,this.rangedFilter_.getEndPost()))i=i.updateImmediateChild(o.name,o.node),s++;else break}}else{i=(i=t.withIndex(this.index_)).updatePriority(tn.EMPTY_NODE);let a,h,u,c;if(this.reverse_){c=i.getReverseIterator(this.index_),a=this.rangedFilter_.getEndPost(),h=this.rangedFilter_.getStartPost();let d=this.index_.getCompare();u=(e,t)=>d(t,e)}else c=i.getIterator(this.index_),a=this.rangedFilter_.getStartPost(),h=this.rangedFilter_.getEndPost(),u=this.index_.getCompare();let _=0,p=!1;for(;c.hasNext();){let f=c.getNext();!p&&0>=u(a,f)&&(p=!0);let g=p&&_<this.limit_&&0>=u(f,h);g?_++:i=i.updateImmediateChild(f.name,tn.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,r){let s;if(this.reverse_){let o=this.index_.getCompare();s=(e,t)=>o(t,e)}else s=this.index_.getCompare();(0,_.hu)(e.numChildren()===this.limit_,"");let l=new eH(t,n),a=this.reverse_?e.getFirstChild(this.index_):e.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(e.hasChild(t)){let u=e.getImmediateChild(t),c=i.getChildAfterChild(this.index_,a,this.reverse_);for(;null!=c&&(c.name===t||e.hasChild(c.name));)c=i.getChildAfterChild(this.index_,c,this.reverse_);let d=null==c?1:s(c,l),p=h&&!n.isEmpty()&&d>=0;if(p)return null!=r&&r.trackChildChange(td(t,n,u)),e.updateImmediateChild(t,n);{null!=r&&r.trackChildChange(tc(t,u));let f=e.updateImmediateChild(t,tn.EMPTY_NODE),g=null!=c&&this.rangedFilter_.matches(c);return g?(null!=r&&r.trackChildChange(tu(c.name,c.node)),f.updateImmediateChild(c.name,c.node)):f}}return n.isEmpty()?e:h?s(a,l)>=0?(null!=r&&(r.trackChildChange(tc(a.name,a.node)),r.trackChildChange(tu(t,n))),e.updateImmediateChild(t,n).updateImmediateChild(a.name,tn.EMPTY_NODE)):e:e}}/**
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
 */ class tg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=e4}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,_.hu)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return((0,_.hu)(this.startSet_,"Only valid if start has been set"),this.startNameSet_)?this.indexStartName_:U}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,_.hu)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return((0,_.hu)(this.endSet_,"Only valid if end has been set"),this.endNameSet_)?this.indexEndName_:H}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,_.hu)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===e4}copy(){let e=new tg;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function tm(e){let t={};if(e.isDefault())return t;let n;return e.index_===e4?n="$priority":e.index_===to?n="$value":e.index_===eV?n="$key":((0,_.hu)(e.index_ instanceof ts,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=(0,_.Wl)(n),e.startSet_&&(t.startAt=(0,_.Wl)(e.indexStartValue_),e.startNameSet_&&(t.startAt+=","+(0,_.Wl)(e.indexStartName_))),e.endSet_&&(t.endAt=(0,_.Wl)(e.indexEndValue_),e.endNameSet_&&(t.endAt+=","+(0,_.Wl)(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function ty(e){let t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_)),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_)),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==e4&&(t.i=e.index_.toString()),t}/**
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
 */ class tv extends eC{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=M("p:rest:"),this.listens_={}}reportStats(e){throw Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:((0,_.hu)(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){let r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);let s=tv.getListenId_(e,n),o={};this.listens_[s]=o;let l=tm(e._queryParams);this.restRequest_(r+".json",l,(e,t)=>{let l=t;404===e&&(l=null,e=null),null===e&&this.onDataUpdate_(r,l,!1,n),(0,_.DV)(this.listens_,s)===o&&i(e?401===e?"permission_denied":"rest_error:"+e:"ok",null)})}unlisten(e,t){let n=tv.getListenId_(e,t);delete this.listens_[n]}get(e){let t=tm(e._queryParams),n=e._path.toString(),i=new _.BH;return this.restRequest_(n+".json",t,(e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(Error(r))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);let s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+(0,_.xO)(t);this.log_("Sending REST request for "+s);let o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=(0,_.cI)(o.responseText)}catch(t){A("Failed to parse JSON response for "+s+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&A("Got unsuccessful REST response for "+s+" Status: "+o.status),n(o.status);n=null}},o.open("GET",s,!0),o.send()})}}/**
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
 */ class tC{constructor(){this.rootNode_=tn.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */ function tw(){return{value:null,children:new Map}}function tT(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach((e,n)=>{t(n,e)})}(e,(e,i)=>{let r=new eI(t.toString()+"/"+e);tT(i,r,n)})}/**
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
 */ class tI{constructor(e){this.collection_=e,this.last_=null}get(){let e=this.collection_.get(),t=Object.assign({},e);return this.last_&&B(this.last_,(e,n)=>{t[e]=t[e]-n}),this.last_=e,t}}class tk{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new tI(e),Z(this.reportStats_.bind(this),Math.floor(1e4+2e4*Math.random()))}reportStats_(){let e=this.statsListener_.get(),t={},n=!1;B(e,(e,i)=>{i>0&&(0,_.r3)(this.statsToReport_,e)&&(t[e]=i,n=!0)}),n&&this.server_.reportStats(t),Z(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}function tb(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function tE(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function tN(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}(o=u||(u={}))[o.OVERWRITE=0]="OVERWRITE",o[o.MERGE=1]="MERGE",o[o.ACK_USER_WRITE=2]="ACK_USER_WRITE",o[o.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";/**
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
 */ class tP{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=u.ACK_USER_WRITE,this.source=tb()}operationForChild(e){if(!eD(this.path))return(0,_.hu)(eb(this.path)===e,"operationForChild called for unrelated child."),new tP(eN(this.path),this.affectedTree,this.revert);if(null!=this.affectedTree.value)return(0,_.hu)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{let t=this.affectedTree.subtree(new eI(e));return new tP(ek(),t,this.revert)}}}/**
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
 */ class tS{constructor(e,t){this.source=e,this.path=t,this.type=u.LISTEN_COMPLETE}operationForChild(e){return eD(this.path)?new tS(this.source,ek()):new tS(this.source,eN(this.path))}}/**
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
 */ class tx{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=u.OVERWRITE}operationForChild(e){return eD(this.path)?new tx(this.source,ek(),this.snap.getImmediateChild(e)):new tx(this.source,eN(this.path),this.snap)}}/**
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
 */ class tR{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=u.MERGE}operationForChild(e){if(!eD(this.path))return(0,_.hu)(eb(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new tR(this.source,eN(this.path),this.children);{let t=this.children.subtree(new eI(e));return t.isEmpty()?null:t.value?new tx(this.source,ek(),t.value):new tR(this.source,ek(),t)}}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */ class tD{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(eD(e))return this.isFullyInitialized()&&!this.filtered_;let t=eb(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */ class tM{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function tF(e,t,n,i,r,s){let o=i.filter(e=>e.type===n);o.sort((t,n)=>(function(e,t,n){if(null==t.childName||null==n.childName)throw(0,_.g5)("Should only compare child_ events.");let i=new eH(t.childName,t.snapshotNode),r=new eH(n.childName,n.snapshotNode);return e.index_.compare(i,r)})(e,t,n)),o.forEach(n=>{var i,o,l;let a=(i=e,o=n,l=s,"value"===o.type||"child_removed"===o.type||(o.prevName=l.getPredecessorChildName(o.childName,o.snapshotNode,i.index_)),o);r.forEach(i=>{i.respondsTo(n.type)&&t.push(i.createEvent(a,e.query_))})})}/**
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
 */ function tq(e,t){return{eventCache:e,serverCache:t}}function tA(e,t,n,i){return tq(new tD(t,n,i),e.serverCache)}function tL(e,t,n,i){return tq(e.eventCache,new tD(t,n,i))}function tO(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function tW(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}/**
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
 */ let tU,tH=()=>(tU||(tU=new eG(j)),tU);class tY{constructor(e,t=tH()){this.value=e,this.children=t}static fromObject(e){let t=new tY(null);return B(e,(e,n)=>{t=t.set(new eI(e),n)}),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:ek(),value:this.value};if(eD(e))return null;{let n=eb(e),i=this.children.get(n);if(null===i)return null;{let r=i.findRootMostMatchingPathAndValue(eN(e),t);if(null==r)return null;{let s=eR(new eI(n),r.path);return{path:s,value:r.value}}}}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(eD(e))return this;{let t=eb(e),n=this.children.get(t);return null!==n?n.subtree(eN(e)):new tY(null)}}set(e,t){if(eD(e))return new tY(t,this.children);{let n=eb(e),i=this.children.get(n)||new tY(null),r=i.set(eN(e),t),s=this.children.insert(n,r);return new tY(this.value,s)}}remove(e){if(eD(e))return this.children.isEmpty()?new tY(null):new tY(null,this.children);{let t=eb(e),n=this.children.get(t);if(!n)return this;{let i=n.remove(eN(e)),r;return(r=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&r.isEmpty())?new tY(null):new tY(this.value,r)}}}get(e){if(eD(e))return this.value;{let t=eb(e),n=this.children.get(t);return n?n.get(eN(e)):null}}setTree(e,t){if(eD(e))return t;{let n=eb(e),i=this.children.get(n)||new tY(null),r=i.setTree(eN(e),t),s;return s=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new tY(this.value,s)}}fold(e){return this.fold_(ek(),e)}fold_(e,t){let n={};return this.children.inorderTraversal((i,r)=>{n[i]=r.fold_(eR(e,i),t)}),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,ek(),t)}findOnPath_(e,t,n){let i=!!this.value&&n(t,this.value);if(i)return i;if(eD(e))return null;{let r=eb(e),s=this.children.get(r);return s?s.findOnPath_(eN(e),eR(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ek(),t)}foreachOnPath_(e,t,n){if(eD(e))return this;{this.value&&n(t,this.value);let i=eb(e),r=this.children.get(i);return r?r.foreachOnPath_(eN(e),eR(t,i),n):new tY(null)}}foreach(e){this.foreach_(ek(),e)}foreach_(e,t){this.children.inorderTraversal((n,i)=>{i.foreach_(eR(e,n),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,n)=>{n.value&&e(t,n.value)})}}/**
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
 */ class tj{constructor(e){this.writeTree_=e}static empty(){return new tj(new tY(null))}}function tz(e,t,n){if(eD(t))return new tj(new tY(n));{let i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){let r=i.path,s=i.value,o=eM(r,t);return s=s.updateChild(o,n),new tj(e.writeTree_.set(r,s))}{let l=new tY(n),a=e.writeTree_.setTree(t,l);return new tj(a)}}}function tV(e,t,n){let i=e;return B(n,(e,n)=>{i=tz(i,eR(t,e),n)}),i}function tK(e,t){if(eD(t))return tj.empty();{let n=e.writeTree_.setTree(t,new tY(null));return new tj(n)}}function tB(e,t){return null!=tG(e,t)}function tG(e,t){let n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(eM(n.path,t)):null}function t$(e){let t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(e4,(e,n)=>{t.push(new eH(e,n))}):e.writeTree_.children.inorderTraversal((e,n)=>{null!=n.value&&t.push(new eH(e,n.value))}),t}function tQ(e,t){if(eD(t))return e;{let n=tG(e,t);return new tj(null!=n?new tY(n):e.writeTree_.subtree(t))}}function tX(e){return e.writeTree_.isEmpty()}function tJ(e,t){return function e(t,n,i){if(null!=n.value)return i.updateChild(t,n.value);{let r=null;return n.children.inorderTraversal((n,s)=>{".priority"===n?((0,_.hu)(null!==s.value,"Priority writes must always be leaf nodes"),r=s.value):i=e(eR(t,n),s,i)}),i.getChild(t).isEmpty()||null===r||(i=i.updateChild(eR(t,".priority"),r)),i}}(ek(),e.writeTree_,t)}function tZ(e,t){if(e.snap)return eq(e.path,t);for(let n in e.children)if(e.children.hasOwnProperty(n)&&eq(eR(e.path,n),t))return!0;return!1}function t0(e){return e.visible}function t1(e,t,n){let i=tj.empty();for(let r=0;r<e.length;++r){let s=e[r];if(t(s)){let o=s.path,l;if(s.snap)eq(n,o)?(l=eM(n,o),i=tz(i,l,s.snap)):eq(o,n)&&(l=eM(o,n),i=tz(i,ek(),s.snap.getChild(l)));else if(s.children){if(eq(n,o))l=eM(n,o),i=tV(i,l,s.children);else if(eq(o,n)){if(l=eM(o,n),eD(l))i=tV(i,ek(),s.children);else{let a=(0,_.DV)(s.children,eb(l));if(a){let h=a.getChild(eN(l));i=tz(i,ek(),h)}}}}else throw(0,_.g5)("WriteRecord should have .snap or .children")}}return i}function t3(e,t,n,i,r){if(i||r){let s=tQ(e.visibleWrites,t);if(!r&&tX(s))return n;if(!r&&null==n&&!tB(s,ek()))return null;{let o=function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(eq(e.path,t)||eq(t,e.path))},l=t1(e.allWrites,o,t),a=n||tn.EMPTY_NODE;return tJ(l,a)}}{let h=tG(e.visibleWrites,t);if(null!=h)return h;{let u=tQ(e.visibleWrites,t);if(tX(u))return n;if(null==n&&!tB(u,ek()))return null;{let c=n||tn.EMPTY_NODE;return tJ(u,c)}}}}function t2(e,t,n,i){return t3(e.writeTree,e.treePath,t,n,i)}function t4(e,t){return function(e,t,n){let i=tn.EMPTY_NODE,r=tG(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(e4,(e,t)=>{i=i.updateImmediateChild(e,t)}),i;if(n){let s=tQ(e.visibleWrites,t);return n.forEachChild(e4,(e,t)=>{let n=tJ(tQ(s,new eI(e)),t);i=i.updateImmediateChild(e,n)}),t$(s).forEach(e=>{i=i.updateImmediateChild(e.name,e.node)}),i}{let o=tQ(e.visibleWrites,t);return t$(o).forEach(e=>{i=i.updateImmediateChild(e.name,e.node)}),i}}(e.writeTree,e.treePath,t)}function t5(e,t,n,i){return function(e,t,n,i,r){(0,_.hu)(i||r,"Either existingEventSnap or existingServerSnap must exist");let s=eR(t,n);if(tB(e.visibleWrites,s))return null;{let o=tQ(e.visibleWrites,s);return tX(o)?r.getChild(n):tJ(o,r.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function t8(e,t){var n,i;return n=e.writeTree,i=eR(e.treePath,t),tG(n.visibleWrites,i)}function t6(e,t,n){return function(e,t,n,i){let r=eR(t,n),s=tG(e.visibleWrites,r);if(null!=s)return s;if(!i.isCompleteForChild(n))return null;{let o=tQ(e.visibleWrites,r);return tJ(o,i.getNode().getImmediateChild(n))}}(e.writeTree,e.treePath,t,n)}function t7(e,t){return t9(eR(e.treePath,t),e.writeTree)}function t9(e,t){return{treePath:e,writeTree:t}}/**
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
 */ class ne{constructor(){this.changeMap=new Map}trackChildChange(e){let t=e.type,n=e.childName;(0,_.hu)("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),(0,_.hu)(".priority"!==n,"Only non-priority child changes can be tracked.");let i=this.changeMap.get(n);if(i){let r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,td(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,tc(n,i.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,tu(n,e.snapshotNode));else if("child_changed"===t&&"child_changed"===r)this.changeMap.set(n,td(n,e.snapshotNode,i.oldSnap));else throw(0,_.g5)("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}let nt=new /**
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
 */ class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class nn{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){let t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{let n=null!=this.optCompleteServerCache_?new tD(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return t6(this.writes_,e,n)}}getChildAfterChild(e,t,n){var i,r,s,o,l;let a=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:tW(this.viewCache_),h=function(e,t,n,i,r,s,o){let l,a=tQ(e.visibleWrites,t),h=tG(a,ek());if(null!=h)l=h;else{if(null==n)return[];l=tJ(a,n)}if((l=l.withIndex(o)).isEmpty()||l.isLeafNode())return[];{let u=[],c=o.getCompare(),d=s?l.getReverseIteratorFrom(i,o):l.getIteratorFrom(i,o),_=d.getNext();for(;_&&u.length<1;)0!==c(_,i)&&u.push(_),_=d.getNext();return u}}((i=this.writes_).writeTree,i.treePath,a,t,1,n,e);return 0===h.length?null:h[0]}}function ni(e,t,n,i,r,s){let o=t.eventCache;if(null!=t8(i,n))return t;{let l,a;if(eD(n)){if((0,_.hu)(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){let h=tW(t),u=h instanceof tn?h:tn.EMPTY_NODE,c=t4(i,u);l=e.filter.updateFullNode(t.eventCache.getNode(),c,s)}else{let d=t2(i,tW(t));l=e.filter.updateFullNode(t.eventCache.getNode(),d,s)}}else{let p=eb(n);if(".priority"===p){(0,_.hu)(1===eE(n),"Can't have a priority with additional path components");let f=o.getNode();a=t.serverCache.getNode();let g=t5(i,n,f,a);l=null!=g?e.filter.updatePriority(f,g):o.getNode()}else{let m=eN(n),y;if(o.isCompleteForChild(p)){a=t.serverCache.getNode();let v=t5(i,n,o.getNode(),a);y=null!=v?o.getNode().getImmediateChild(p).updateChild(m,v):o.getNode().getImmediateChild(p)}else y=t6(i,p,t.serverCache);l=null!=y?e.filter.updateChild(o.getNode(),p,y,m,r,s):o.getNode()}}return tA(t,l,o.isFullyInitialized()||eD(n),e.filter.filtersNodes())}}function nr(e,t,n,i,r,s,o,l){let a=t.serverCache,h,u=o?e.filter:e.filter.getIndexedFilter();if(eD(n))h=u.updateFullNode(a.getNode(),i,null);else if(u.filtersNodes()&&!a.isFiltered()){let c=a.getNode().updateChild(n,i);h=u.updateFullNode(a.getNode(),c,null)}else{let d=eb(n);if(!a.isCompleteForPath(n)&&eE(n)>1)return t;let _=eN(n),p=a.getNode().getImmediateChild(d),f=p.updateChild(_,i);h=".priority"===d?u.updatePriority(a.getNode(),f):u.updateChild(a.getNode(),d,f,_,nt,null)}let g=tL(t,h,a.isFullyInitialized()||eD(n),u.filtersNodes()),m=new nn(r,g,s);return ni(e,g,n,r,m,l)}function ns(e,t,n,i,r,s,o){let l=t.eventCache,a,h,u=new nn(r,t,s);if(eD(n))h=e.filter.updateFullNode(t.eventCache.getNode(),i,o),a=tA(t,h,!0,e.filter.filtersNodes());else{let c=eb(n);if(".priority"===c)h=e.filter.updatePriority(t.eventCache.getNode(),i),a=tA(t,h,l.isFullyInitialized(),l.isFiltered());else{let d=eN(n),_=l.getNode().getImmediateChild(c),p;if(eD(d))p=i;else{let f=u.getCompleteChild(c);p=null!=f?".priority"===eP(d)&&f.getChild(ex(d)).isEmpty()?f:f.updateChild(d,i):tn.EMPTY_NODE}if(_.equals(p))a=t;else{let g=e.filter.updateChild(l.getNode(),c,p,d,u,o);a=tA(t,g,l.isFullyInitialized(),e.filter.filtersNodes())}}}return a}function no(e,t){return e.eventCache.isCompleteForChild(t)}function nl(e,t,n){return n.foreach((e,n)=>{t=t.updateChild(e,n)}),t}function na(e,t,n,i,r,s,o,l){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let a=t,h;h=eD(n)?i:new tY(null).setTree(n,i);let u=t.serverCache.getNode();return h.children.inorderTraversal((n,i)=>{if(u.hasChild(n)){let h=t.serverCache.getNode().getImmediateChild(n),c=nl(e,h,i);a=nr(e,a,new eI(n),c,r,s,o,l)}}),h.children.inorderTraversal((n,i)=>{let h=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!u.hasChild(n)&&!h){let c=t.serverCache.getNode().getImmediateChild(n),d=nl(e,c,i);a=nr(e,a,new eI(n),d,r,s,o,l)}}),a}/**
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
 */ class nh{constructor(e,t){var n,i;this.query_=e,this.eventRegistrations_=[];let r=this.query_._queryParams,s=new t_(r.getIndex()),o=r.loadsAllData()?new t_(r.getIndex()):r.hasLimit()?new tf(r):new tp(r);this.processor_={filter:o};let l=t.serverCache,a=t.eventCache,h=s.updateFullNode(tn.EMPTY_NODE,l.getNode(),null),u=o.updateFullNode(tn.EMPTY_NODE,a.getNode(),null),c=new tD(h,l.isFullyInitialized(),s.filtersNodes()),d=new tD(u,a.isFullyInitialized(),o.filtersNodes());this.viewCache_=tq(d,c),this.eventGenerator_=new tM(this.query_)}get query(){return this.query_}}function nu(e,t){let n=tW(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!eD(t)&&!n.getImmediateChild(eb(t)).isEmpty())?n.getChild(t):null}function nc(e){return 0===e.eventRegistrations_.length}function nd(e,t,n){let i=[];if(n){(0,_.hu)(null==t,"A cancel should cancel all event registrations.");let r=e.query._path;e.eventRegistrations_.forEach(e=>{let t=e.createCancelEvent(n,r);t&&i.push(t)})}if(t){let s=[];for(let o=0;o<e.eventRegistrations_.length;++o){let l=e.eventRegistrations_[o];if(l.matches(t)){if(t.hasAnyCallback()){s=s.concat(e.eventRegistrations_.slice(o+1));break}}else s.push(l)}e.eventRegistrations_=s}else e.eventRegistrations_=[];return i}function n_(e,t,n,i){var r,s;t.type===u.MERGE&&null!==t.source.queryId&&((0,_.hu)(tW(e.viewCache_),"We should always have a full cache before handling merges"),(0,_.hu)(tO(e.viewCache_),"Missing event cache, even though we have a server cache"));let o=e.viewCache_,l=function(e,t,n,i,r){let s=new ne,o,l;if(n.type===u.OVERWRITE)n.source.fromUser?o=ns(e,t,n.path,n.snap,i,r,s):((0,_.hu)(n.source.fromServer,"Unknown source."),l=n.source.tagged||t.serverCache.isFiltered()&&!eD(n.path),o=nr(e,t,n.path,n.snap,i,r,l,s));else if(n.type===u.MERGE){var a,h,c,d,p,f,g;let m;n.source.fromUser?(a=e,h=t,c=n.path,d=n.children,p=i,f=r,g=s,m=h,o=(d.foreach((e,t)=>{let n=eR(c,e);no(h,eb(n))&&(m=ns(a,m,n,t,p,f,g))}),d.foreach((e,t)=>{let n=eR(c,e);no(h,eb(n))||(m=ns(a,m,n,t,p,f,g))}),m)):((0,_.hu)(n.source.fromServer,"Unknown source."),l=n.source.tagged||t.serverCache.isFiltered(),o=na(e,t,n.path,n.children,i,r,l,s))}else if(n.type===u.ACK_USER_WRITE)o=n.revert?function(e,t,n,i,r,s){let o;if(null!=t8(i,n))return t;{let l=new nn(i,t,r),a=t.eventCache.getNode(),h;if(eD(n)||".priority"===eb(n)){let u;if(t.serverCache.isFullyInitialized())u=t2(i,tW(t));else{let c=t.serverCache.getNode();(0,_.hu)(c instanceof tn,"serverChildren would be complete if leaf node"),u=t4(i,c)}h=e.filter.updateFullNode(a,u,s)}else{let d=eb(n),p=t6(i,d,t.serverCache);null==p&&t.serverCache.isCompleteForChild(d)&&(p=a.getImmediateChild(d)),(h=null!=p?e.filter.updateChild(a,d,p,eN(n),l,s):t.eventCache.getNode().hasChild(d)?e.filter.updateChild(a,d,tn.EMPTY_NODE,eN(n),l,s):a).isEmpty()&&t.serverCache.isFullyInitialized()&&(o=t2(i,tW(t))).isLeafNode()&&(h=e.filter.updateFullNode(h,o,s))}return o=t.serverCache.isFullyInitialized()||null!=t8(i,ek()),tA(t,h,o,e.filter.filtersNodes())}}(e,t,n.path,i,r,s):function(e,t,n,i,r,s,o){if(null!=t8(r,n))return t;let l=t.serverCache.isFiltered(),a=t.serverCache;if(null!=i.value){if(eD(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return nr(e,t,n,a.getNode().getChild(n),r,s,l,o);if(!eD(n))return t;{let h=new tY(null);return a.getNode().forEachChild(eV,(e,t)=>{h=h.set(new eI(e),t)}),na(e,t,n,h,r,s,l,o)}}{let u=new tY(null);return i.foreach((e,t)=>{let i=eR(n,e);a.isCompleteForPath(i)&&(u=u.set(e,a.getNode().getChild(i)))}),na(e,t,n,u,r,s,l,o)}}(e,t,n.path,n.affectedTree,i,r,s);else if(n.type===u.LISTEN_COMPLETE)o=function(e,t,n,i,r){let s=t.serverCache,o=tL(t,s.getNode(),s.isFullyInitialized()||eD(n),s.isFiltered());return ni(e,o,n,i,nt,r)}(e,t,n.path,i,s);else throw(0,_.g5)("Unknown operation type: "+n.type);let y=s.getChanges();return function(e,t,n){let i=t.eventCache;if(i.isFullyInitialized()){let r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=tO(e);!(n.length>0)&&e.eventCache.isFullyInitialized()&&(!r||i.getNode().equals(s))&&i.getNode().getPriority().equals(s.getPriority())||n.push(th(tO(t)))}}(t,o,y),{viewCache:o,changes:y}}(e.processor_,o,t,n,i);return r=e.processor_,s=l.viewCache,(0,_.hu)(s.eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),(0,_.hu)(s.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed"),(0,_.hu)(l.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=l.viewCache,np(e,l.changes,l.viewCache.eventCache.getNode(),null)}function np(e,t,n,i){let r=i?[i]:e.eventRegistrations_;return function(e,t,n,i){let r=[],s=[];return t.forEach(t=>{if("child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)){var n,i;s.push((n=t.childName,i=t.snapshotNode,{type:"child_moved",snapshotNode:i,childName:n}))}}),tF(e,r,"child_removed",t,i,n),tF(e,r,"child_added",t,i,n),tF(e,r,"child_moved",s,i,n),tF(e,r,"child_changed",t,i,n),tF(e,r,"value",t,i,n),r}(e.eventGenerator_,t,n,r)}/**
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
 */ let nf;class ng{constructor(){this.views=new Map}}function nm(e,t,n,i){let r=t.source.queryId;if(null!==r){let s=e.views.get(r);return(0,_.hu)(null!=s,"SyncTree gave us an op for an invalid query."),n_(s,t,n,i)}{let o=[];for(let l of e.views.values())o=o.concat(n_(l,t,n,i));return o}}function ny(e,t,n,i,r){let s=t._queryIdentifier,o=e.views.get(s);if(!o){let l=t2(n,r?i:null),a=!1;l?a=!0:i instanceof tn?(l=t4(n,i),a=!1):(l=tn.EMPTY_NODE,a=!1);let h=tq(new tD(l,a,!1),new tD(i,r,!1));return new nh(t,h)}return o}function nv(e){let t=[];for(let n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function nC(e,t){let n=null;for(let i of e.views.values())n=n||nu(i,t);return n}function nw(e,t){let n=t._queryParams;if(n.loadsAllData())return nk(e);{let i=t._queryIdentifier;return e.views.get(i)}}function nT(e,t){return null!=nw(e,t)}function nI(e){return null!=nk(e)}function nk(e){for(let t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}/**
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
 */ let nb,nE=1;class nN{constructor(e){this.listenProvider_=e,this.syncPointTree_=new tY(null),this.pendingWriteTree_={visibleWrites:tj.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function nP(e,t,n,i,r){var s,o,l,a,h;return(s=e.pendingWriteTree_,h=r,(0,_.hu)(i>s.lastWriteId,"Stacking an older write on top of newer ones"),void 0===h&&(h=!0),s.allWrites.push({path:t,snap:n,writeId:i,visible:h}),h&&(s.visibleWrites=tz(s.visibleWrites,t,n)),s.lastWriteId=i,r)?nF(e,new tx(tb(),t,n)):[]}function nS(e,t,n=!1){let i=function(e,t){for(let n=0;n<e.allWrites.length;n++){let i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t),r=function(e,t){let n=e.allWrites.findIndex(e=>e.writeId===t);(0,_.hu)(n>=0,"removeWrite called with nonexistent writeId.");let i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,s=!1,o=e.allWrites.length-1;for(;r&&o>=0;){let l=e.allWrites[o];l.visible&&(o>=n&&tZ(l,i.path)?r=!1:eq(i.path,l.path)&&(s=!0)),o--}if(!r)return!1;if(s){var a;return(a=e).visibleWrites=t1(a.allWrites,t0,ek()),a.allWrites.length>0?a.lastWriteId=a.allWrites[a.allWrites.length-1].writeId:a.lastWriteId=-1,!0}if(i.snap)e.visibleWrites=tK(e.visibleWrites,i.path);else{let h=i.children;B(h,t=>{e.visibleWrites=tK(e.visibleWrites,eR(i.path,t))})}return!0}(e.pendingWriteTree_,t);if(!r)return[];{let s=new tY(null);return null!=i.snap?s=s.set(ek(),!0):B(i.children,e=>{s=s.set(new eI(e),!0)}),nF(e,new tP(i.path,s,n))}}function nx(e,t,n){return nF(e,new tx(tE(),t,n))}function nR(e,t,n,i,r=!1){let s=t._path,o=e.syncPointTree_.get(s),l=[];if(o&&("default"===t._queryIdentifier||nT(o,t))){var a,h;let u=function(e,t,n,i){let r=t._queryIdentifier,s=[],o=[],l=nI(e);if("default"===r)for(let[a,h]of e.views.entries())o=o.concat(nd(h,n,i)),nc(h)&&(e.views.delete(a),h.query._queryParams.loadsAllData()||s.push(h.query));else{let u=e.views.get(r);u&&(o=o.concat(nd(u,n,i)),nc(u)&&(e.views.delete(r),u.query._queryParams.loadsAllData()||s.push(u.query)))}return l&&!nI(e)&&s.push(new((0,_.hu)(nf,"Reference.ts has not been loaded"),nf)(t._repo,t._path)),{removed:s,events:o}}(o,t,n,i);0===o.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(s));let c=u.removed;if(l=u.events,!r){let d=-1!==c.findIndex(e=>e._queryParams.loadsAllData()),p=e.syncPointTree_.findOnPath(s,(e,t)=>nI(t));if(d&&!p){let f=e.syncPointTree_.subtree(s);if(!f.isEmpty()){let g=(h=f,h.fold((e,t,n)=>{if(t&&nI(t)){let i=nk(t);return[i]}{let r=[];return t&&(r=nv(t)),B(n,(e,t)=>{r=r.concat(t)}),r}}));for(let m=0;m<g.length;++m){let y=g[m],v=y.query,C=nq(e,y);e.listenProvider_.startListening(nH(v),nA(e,v),C.hashFn,C.onComplete)}}}p||!(c.length>0)||i||(d?e.listenProvider_.stopListening(nH(t),null):c.forEach(t=>{let n=e.queryToTagMap.get(nL(t));e.listenProvider_.stopListening(nH(t),n)}))}!function(e,t){for(let n=0;n<t.length;++n){let i=t[n];if(!i._queryParams.loadsAllData()){let r=nL(i),s=e.queryToTagMap.get(r);e.queryToTagMap.delete(r),e.tagToQueryMap.delete(s)}}}(e,c)}return l}function nD(e,t,n,i){let r=nO(e,i);if(null==r)return[];{let s=nW(r),o=s.path,l=s.queryId,a=eM(o,t),h=new tx(tN(l),a,n);return nU(e,o,h)}}function nM(e,t,n){let i=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,(e,n)=>{let i=eM(e,t),r=nC(n,i);if(r)return r});return t3(i,t,r,n,!0)}function nF(e,t){var n,i;return function e(t,n,i,r){if(eD(t.path))return function e(t,n,i,r){let s=n.get(ek());null==i&&null!=s&&(i=nC(s,ek()));let o=[];return n.children.inorderTraversal((n,s)=>{let l=i?i.getImmediateChild(n):null,a=t7(r,n),h=t.operationForChild(n);h&&(o=o.concat(e(h,s,l,a)))}),s&&(o=o.concat(nm(s,t,r,i))),o}(t,n,i,r);{let s=n.get(ek());null==i&&null!=s&&(i=nC(s,ek()));let o=[],l=eb(t.path),a=t.operationForChild(l),h=n.children.get(l);if(h&&a){let u=i?i.getImmediateChild(l):null,c=t7(r,l);o=o.concat(e(a,h,u,c))}return s&&(o=o.concat(nm(s,t,r,i))),o}}(t,e.syncPointTree_,null,(n=e.pendingWriteTree_,i=ek(),t9(i,n)))}function nq(e,t){let n=t.query,i=nA(e,n);return{hashFn(){var e;let n=t.viewCache_.serverCache.getNode()||tn.EMPTY_NODE;return n.hash()},onComplete(t){if("ok"===t){var r,s;return i?function(e,t,n){let i=nO(e,n);if(!i)return[];{let r=nW(i),s=r.path,o=r.queryId,l=eM(s,t),a=new tS(tN(o),l);return nU(e,s,a)}}(e,n._path,i):(s=n._path,nF(e,new tS(tE(),s)))}{let o=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");let i=Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}(t,n);return nR(e,n,null,o)}}}}function nA(e,t){let n=nL(t);return e.queryToTagMap.get(n)}function nL(e){return e._path.toString()+"$"+e._queryIdentifier}function nO(e,t){return e.tagToQueryMap.get(t)}function nW(e){let t=e.indexOf("$");return(0,_.hu)(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new eI(e.substr(0,t))}}function nU(e,t,n){var i,r;let s=e.syncPointTree_.get(t);(0,_.hu)(s,"Missing sync point for query tag that we're tracking");let o=t9(t,i=e.pendingWriteTree_);return nm(s,n,o,null)}function nH(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new((0,_.hu)(nb,"Reference.ts has not been loaded"),nb)(e._repo,e._path):e}/**
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
 */ class nY{constructor(e){this.node_=e}getImmediateChild(e){let t=this.node_.getImmediateChild(e);return new nY(t)}node(){return this.node_}}class nj{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){let t=eR(this.path_,e);return new nj(this.syncTree_,t)}node(){return nM(this.syncTree_,this.path_)}}let nz=function(e,t,n){return e&&"object"==typeof e?((0,_.hu)(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"])?nV(e[".sv"],t,n):"object"==typeof e[".sv"]?nK(e[".sv"],t):void(0,_.hu)(!1,"Unexpected server value: "+JSON.stringify(e,null,2)):e},nV=function(e,t,n){if("timestamp"===e)return n.timestamp;(0,_.hu)(!1,"Unexpected server value: "+e)},nK=function(e,t,n){e.hasOwnProperty("increment")||(0,_.hu)(!1,"Unexpected server value: "+JSON.stringify(e,null,2));let i=e.increment;"number"!=typeof i&&(0,_.hu)(!1,"Unexpected increment value: "+i);let r=t.node();if((0,_.hu)(null!=r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;let s=r.getValue();return"number"!=typeof s?i:s+i},nB=function(e,t,n){return nG(e,new nY(t),n)};function nG(e,t,n){let i=e.getPriority().val(),r=nz(i,t.getImmediateChild(".priority"),n),s;if(!e.isLeafNode())return s=e,r!==e.getPriority().val()&&(s=s.updatePriority(new e1(r))),e.forEachChild(e4,(e,i)=>{let r=nG(i,t.getImmediateChild(e),n);r!==i&&(s=s.updateImmediateChild(e,r))}),s;{let o=nz(e.getValue(),t,n);return o!==e.getValue()||r!==e.getPriority().val()?new e1(o,tr(r)):e}}/**
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
 */ class n${constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function nQ(e,t){let n=t instanceof eI?t:new eI(t),i=e,r=eb(n);for(;null!==r;){let s=(0,_.DV)(i.node.children,r)||{children:{},childCount:0};i=new n$(r,i,s),n=eN(n),r=eb(n)}return i}function nX(e){return e.node.value}function nJ(e,t){e.node.value=t,function e(t){null!==t.parent&&function(t,n,i){var r;let s=void 0===nX(i)&&!nZ(i),o=(0,_.r3)(t.node.children,n);s&&o?(delete t.node.children[n],t.node.childCount--,e(t)):s||o||(t.node.children[n]=i.node,t.node.childCount++,e(t))}(t.parent,t.name,t)}(e)}function nZ(e){return e.node.childCount>0}function n0(e,t){B(e.node.children,(n,i)=>{t(new n$(n,e,i))})}function n1(e){return new eI(null===e.parent?e.name:n1(e.parent)+"/"+e.name)}/**
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
 */ let n3=/[\[\].#$\/\u0000-\u001F\u007F]/,n2=/[\[\].#$\u0000-\u001F\u007F]/,n4=function(e){return"string"==typeof e&&0!==e.length&&!n3.test(e)},n5=function(e){return"string"==typeof e&&0!==e.length&&!n2.test(e)},n8=function(e,t,n,i){(!i||void 0!==t)&&n6((0,_.gK)(e,"value"),t,n)},n6=function(e,t,n){let i=n instanceof eI?new eA(n,e):n;if(void 0===t)throw Error(e+"contains undefined "+eO(i));if("function"==typeof t)throw Error(e+"contains a function "+eO(i)+" with contents = "+t.toString());if(O(t))throw Error(e+"contains "+t.toString()+" "+eO(i));if("string"==typeof t&&t.length>3495253.3333333335&&(0,_.ug)(t)>10485760)throw Error(e+"contains a string greater than 10485760 utf8 bytes "+eO(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let r=!1,s=!1;if(B(t,(t,n)=>{var o,l;if(".value"===t)r=!0;else if(".priority"!==t&&".sv"!==t&&(s=!0,!n4(t)))throw Error(e+" contains an invalid key ("+t+") "+eO(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');(o=i).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(t),o.byteLength_+=(0,_.ug)(t),eL(o),n6(e,n,i),function(e){let t=e.parts_.pop();e.byteLength_-=(0,_.ug)(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)}),r&&s)throw Error(e+' contains ".value" child '+eO(i)+" in addition to actual children.")}},n7=function(e,t,n,i){if((!i||void 0!==n)&&!n5(n))throw Error((0,_.gK)(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},n9=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),n7(e,t,n,i)},ie=function(e,t){if(".info"===eb(t))throw Error(e+" failed = Can't modify data under /.info/")},it=function(e,t){var n;let i=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!n4(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==i.length&&((n=i)&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),!n5(n)))throw Error((0,_.gK)(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};/**
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
 */ class ii{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ir(e,t){let n=null;for(let i=0;i<t.length;i++){let r=t[i],s=r.getPath();null===n||eF(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(r)}n&&e.eventLists_.push(n)}function is(e,t,n){ir(e,n),function(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){let r=e.eventLists_[i];if(r){let s=r.path;t(s)?(io(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}(e,e=>eq(e,t)||eq(t,e))}function io(e){for(let t=0;t<e.events.length;t++){let n=e.events[t];if(null!==n){e.events[t]=null;let i=n.getEventRunner();S&&D("event: "+n.toString()),X(i)}}}class il{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ii,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=tw(),this.transactionQueueTree_=new n$,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ia(e){let t=e.infoData_.getNode(new eI(".info/serverTimeOffset")),n=t.val()||0;return new Date().getTime()+n}function ih(e){var t;return(t=t={timestamp:ia(e)}).timestamp=t.timestamp||new Date().getTime(),t}function iu(e,t,n,i,r){e.dataUpdateCount++;let s=new eI(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(r){if(i){let l=(0,_.UI)(n,e=>tr(e));o=function(e,t,n,i){let r=nO(e,i);if(!r)return[];{let s=nW(r),o=s.path,l=s.queryId,a=eM(o,t),h=tY.fromObject(n),u=new tR(tN(l),a,h);return nU(e,o,u)}}(e.serverSyncTree_,s,l,r)}else{let a=tr(n);o=nD(e.serverSyncTree_,s,a,r)}}else if(i){let h=(0,_.UI)(n,e=>tr(e));o=function(e,t,n){let i=tY.fromObject(n);return nF(e,new tR(tE(),t,i))}(e.serverSyncTree_,s,h)}else{let u=tr(n);o=nx(e.serverSyncTree_,s,u)}let c=s;o.length>0&&(c=im(e,s)),is(e.eventQueue_,c,o)}function ic(e,t){id(e,"connected",t),!1===t&&function(e){ip(e,"onDisconnectEvents");let t=ih(e),n=tw();tT(e.onDisconnect_,ek(),(i,r)=>{var s,o,l,a;let h=(l=e.serverSyncTree_,nG(r,new nj(l,i),t));!function e(t,n,i){if(eD(n))t.value=i,t.children.clear();else if(null!==t.value)t.value=t.value.updateChild(n,i);else{let r=eb(n);t.children.has(r)||t.children.set(r,tw());let s=t.children.get(r);n=eN(n),e(s,n,i)}}(n,i,h)});let i=[];tT(n,ek(),(t,n)=>{i=i.concat(nx(e.serverSyncTree_,t,n));let r=iw(e,t);im(e,r)}),e.onDisconnect_=tw(),is(e.eventQueue_,ek(),i)}(e)}function id(e,t,n){let i=new eI("/.info/"+t),r=tr(n);e.infoData_.updateSnapshot(i,r);let s=nx(e.infoSyncTree_,i,r);is(e.eventQueue_,i,s)}function i_(e){return e.nextWriteId_++}function ip(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),D(n,...t)}function ig(e,t,n){return nM(e.serverSyncTree_,t,n)||tn.EMPTY_NODE}function im(e,t){let n=iy(e,t),i=n1(n),r=iv(e,n);return function(e,t,n){if(0===t.length)return;let i=[],r=[],s=t.filter(e=>0===e.status),o=s.map(e=>e.currentWriteId);for(let l=0;l<t.length;l++){let a=t[l],h=eM(n,a.path),u=!1,c;if((0,_.hu)(null!==h,"rerunTransactionsUnderNode_: relativePath should not be null."),4===a.status)u=!0,c=a.abortReason,r=r.concat(nS(e.serverSyncTree_,a.currentWriteId,!0));else if(0===a.status){if(a.retryCount>=25)u=!0,c="maxretry",r=r.concat(nS(e.serverSyncTree_,a.currentWriteId,!0));else{let d=ig(e,a.path,o);a.currentInputSnapshot=d;let p=t[l].update(d.val());if(void 0!==p){n6("transaction failed: Data returned ",p,a.path);let f=tr(p),g="object"==typeof p&&null!=p&&(0,_.r3)(p,".priority");g||(f=f.updatePriority(d.getPriority()));let m=a.currentWriteId,y=ih(e),v=nB(f,d,y);a.currentOutputSnapshotRaw=f,a.currentOutputSnapshotResolved=v,a.currentWriteId=i_(e),o.splice(o.indexOf(m),1),r=(r=r.concat(nP(e.serverSyncTree_,a.path,v,a.currentWriteId,a.applyLocally))).concat(nS(e.serverSyncTree_,m,!0))}else u=!0,c="nodata",r=r.concat(nS(e.serverSyncTree_,a.currentWriteId,!0))}}if(is(e.eventQueue_,n,r),r=[],u){var C;t[l].status=2,setTimeout(C=t[l].unwatcher,Math.floor(0)),t[l].onComplete&&("nodata"===c?i.push(()=>t[l].onComplete(null,!1,t[l].currentInputSnapshot)):i.push(()=>t[l].onComplete(Error(c),!1,null)))}}iC(e,e.transactionQueueTree_);for(let w=0;w<i.length;w++)X(i[w]);(function e(t,n=t.transactionQueueTree_){if(n||iC(t,n),nX(n)){let i=iv(t,n);(0,_.hu)(i.length>0,"Sending zero length transaction queue");let r=i.every(e=>0===e.status);r&&function(t,n,i){let r=i.map(e=>e.currentWriteId),s=ig(t,n,r),o=s,l=s.hash();for(let a=0;a<i.length;a++){let h=i[a];(0,_.hu)(0===h.status,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;let u=eM(n,h.path);o=o.updateChild(u,h.currentOutputSnapshotRaw)}let c=o.val(!0);t.server_.put(n.toString(),c,r=>{ip(t,"transaction put response",{path:n.toString(),status:r});let s=[];if("ok"===r){let o=[];for(let l=0;l<i.length;l++)i[l].status=2,s=s.concat(nS(t.serverSyncTree_,i[l].currentWriteId)),i[l].onComplete&&o.push(()=>i[l].onComplete(null,!0,i[l].currentOutputSnapshotResolved)),i[l].unwatcher();iC(t,nQ(t.transactionQueueTree_,n)),e(t,t.transactionQueueTree_),is(t.eventQueue_,n,s);for(let a=0;a<o.length;a++)X(o[a])}else{if("datastale"===r)for(let h=0;h<i.length;h++)3===i[h].status?i[h].status=4:i[h].status=0;else{A("transaction at "+n.toString()+" failed: "+r);for(let u=0;u<i.length;u++)i[u].status=4,i[u].abortReason=r}im(t,n)}},l)}(t,n1(n),i)}else nZ(n)&&n0(n,n=>{e(t,n)})})(e,e.transactionQueueTree_)}(e,r,i),i}function iy(e,t){let n,i=e.transactionQueueTree_;for(n=eb(t);null!==n&&void 0===nX(i);)i=nQ(i,n),t=eN(t),n=eb(t);return i}function iv(e,t){let n=[];return function e(t,n,i){let r=nX(n);if(r)for(let s=0;s<r.length;s++)i.push(r[s]);n0(n,n=>{e(t,n,i)})}(e,t,n),n.sort((e,t)=>e.order-t.order),n}function iC(e,t){let n=nX(t);if(n){let i=0;for(let r=0;r<n.length;r++)2!==n[r].status&&(n[i]=n[r],i++);n.length=i,nJ(t,n.length>0?n:void 0)}n0(t,t=>{iC(e,t)})}function iw(e,t){let n=n1(iy(e,t)),i=nQ(e.transactionQueueTree_,t);return!function(e,t,n){let i=e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}return!1}(i,t=>{iT(e,t)}),iT(e,i),!function e(t,n,i,r){i&&!r&&n(t),n0(t,t=>{e(t,n,!0,r)}),i&&r&&n(t)}(i,t=>{iT(e,t)}),n}function iT(e,t){let n=nX(t);if(n){let i=[],r=[],s=-1;for(let o=0;o<n.length;o++)3===n[o].status||(1===n[o].status?((0,_.hu)(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):((0,_.hu)(0===n[o].status,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(nS(e.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,Error("set"),!1,null))));-1===s?nJ(t,void 0):n.length=s+1,is(e.eventQueue_,n1(t),r);for(let l=0;l<i.length;l++)X(i[l])}}let iI=function(e,t){let n=ik(e),i=n.namespace;"firebase.com"===n.domain&&q(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||q("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||L();let r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new eo(n.host,n.secure,i,r,t,"",i!==n.subdomain),path:new eI(n.pathString)}},ik=function(e){let t="",n="",i="",r="",s="",o=!0,l="https",a=443;if("string"==typeof e){let h=e.indexOf("//");h>=0&&(l=e.substring(0,h-1),e=e.substring(h+2));let u=e.indexOf("/");-1===u&&(u=e.length);let c=e.indexOf("?");-1===c&&(c=e.length),t=e.substring(0,Math.min(u,c)),u<c&&(r=/**
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
 */ function(e){let t="",n=e.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let r=n[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch(s){}t+="/"+r}return t}(e.substring(u,c)));let d=function(e){let t={};for(let n of("?"===e.charAt(0)&&(e=e.substring(1)),e.split("&"))){if(0===n.length)continue;let i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):A(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,c)));(h=t.indexOf(":"))>=0?(o="https"===l||"wss"===l,a=parseInt(t.substring(h+1),10)):h=t.length;let _=t.slice(0,h);if("localhost"===_.toLowerCase())n="localhost";else if(_.split(".").length<=2)n=_;else{let p=t.indexOf(".");i=t.substring(0,p).toLowerCase(),n=t.substring(p+1),s=i}"ns"in d&&(s=d.ns)}return{host:t,port:a,domain:n,subdomain:i,secure:o,scheme:l,pathString:r,namespace:s}};/**
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
 */ class ib{constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}getPath(){let e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+(0,_.Wl)(this.snapshot.exportVal())}}class iE{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */ class iN{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return(0,_.hu)(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */ class iP{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return eD(this._path)?null:eP(this._path)}get ref(){return new iS(this._repo,this._path)}get _queryIdentifier(){let e=ty(this._queryParams),t=V(e);return"{}"===t?"default":t}get _queryObject(){return ty(this._queryParams)}isEqual(e){if(!((e=(0,_.m9)(e))instanceof iP))return!1;let t=this._repo===e._repo,n=eF(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class iS extends iP{constructor(e,t){super(e,t,new tg,!1)}get parent(){let e=ex(this._path);return null===e?null:new iS(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class ix{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){let t=new eI(e),n=iD(this.ref,e);return new ix(this._node.getChild(t),n,e4)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;let t=this._node;return!!t.forEachChild(this._index,(t,n)=>e(new ix(n,iD(this.ref,t),e4)))}hasChild(e){let t=new eI(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function iR(e,t){return(e=(0,_.m9)(e))._checkNotDeleted("ref"),void 0!==t?iD(e._root,t):e._root}function iD(e,t){return null===eb((e=(0,_.m9)(e))._path)?n9("child","path",t,!1):n7("child","path",t,!1),new iS(e._repo,eR(e._path,t))}function iM(e,t){e=(0,_.m9)(e),ie("push",e._path),n8("push",t,e._path,!0);let n=ia(e._repo),i=ta(n),r=iD(e,i),s=iD(e,i),o;return o=null!=t?iF(s,t).then(()=>s):Promise.resolve(s),r.then=o.then.bind(o),r.catch=o.then.bind(o,void 0),r}function iF(e,t){ie("set",(e=(0,_.m9)(e))._path),n8("set",t,e._path,!1);let n=new _.BH;return!function(e,t,n,i,r){ip(e,"set",{path:t.toString(),value:n,priority:i});let s=ih(e),o=tr(n,i),l=nM(e.serverSyncTree_,t),a=nB(o,l,s),h=i_(e),u=nP(e.serverSyncTree_,t,a,h,!0);ir(e.eventQueue_,u),e.server_.put(t.toString(),o.val(!0),(n,i)=>{var s,o,l,a;let u="ok"===n;u||A("set at "+t+" failed: "+n);let c=nS(e.serverSyncTree_,h,!u);is(e.eventQueue_,t,c),s=e,o=r,l=n,a=i,o&&X(()=>{if("ok"===l)o(null);else{let e=(l||"error").toUpperCase(),t=e;a&&(t+=": "+a);let n=Error(t);n.code=e,o(n)}})});let c=iw(e,t);im(e,c),is(e.eventQueue_,c,[])}(e._repo,e._path,t,null,n.wrapCallback(()=>{})),n.promise}function iq(e){e=(0,_.m9)(e);let t=new iN(()=>{}),n=new iA(t);return(function(e,t,n){let i=function(e,t){var n,i,r;let s=t._path,o=null;e.syncPointTree_.foreachOnPath(s,(e,t)=>{let n=eM(e,s);o=o||nC(t,n)});let l=e.syncPointTree_.get(s);l?o=o||nC(l,ek()):(l=new ng,e.syncPointTree_=e.syncPointTree_.set(s,l));let a=null!=o,h=a?new tD(o,!0,!1):null,u=(n=e.pendingWriteTree_,t9(i=t._path,n)),c=ny(l,t,u,a?h.getNode():tn.EMPTY_NODE,a);return tO(c.viewCache_)}(e.serverSyncTree_,t);return null!=i?Promise.resolve(i):e.server_.get(t).then(i=>{let r=tr(i).withIndex(t._queryParams.getIndex());!function(e,t,n,i=!1){var r,s;let o=t._path,l=null,a=!1;e.syncPointTree_.foreachOnPath(o,(e,t)=>{let n=eM(e,o);l=l||nC(t,n),a=a||nI(t)});let h=e.syncPointTree_.get(o);h?(a=a||nI(h),l=l||nC(h,ek())):(h=new ng,e.syncPointTree_=e.syncPointTree_.set(o,h));let u;if(null!=l)u=!0;else{u=!1,l=tn.EMPTY_NODE;let c=e.syncPointTree_.subtree(o);c.foreachChild((e,t)=>{let n=nC(t,ek());n&&(l=l.updateImmediateChild(e,n))})}let d=nT(h,t);if(!d&&!t._queryParams.loadsAllData()){let p=nL(t);(0,_.hu)(!e.queryToTagMap.has(p),"View does not exist, but we have a tag");let f=nE++;e.queryToTagMap.set(p,f),e.tagToQueryMap.set(f,p)}let g=t9(o,r=e.pendingWriteTree_),m=function(e,t,n,i,r,s){let o=ny(e,t,i,r,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),!function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){let n=e.viewCache_.eventCache,i=[];if(!n.getNode().isLeafNode()){let r=n.getNode();r.forEachChild(e4,(e,t)=>{i.push(tu(e,t))})}return n.isFullyInitialized()&&i.push(th(n.getNode())),np(e,i,n.getNode(),t)}(o,n)}(h,t,n,g,l,u);if(!d&&!a&&!i){let y=nw(h,t);m=m.concat(function(e,t,n){let i=t._path,r=nA(e,t),s=nq(e,n),o=e.listenProvider_.startListening(nH(t),r,s.hashFn,s.onComplete),l=e.syncPointTree_.subtree(i);if(r)(0,_.hu)(!nI(l.value),"If we're adding a query, it shouldn't be shadowed");else{let a=l.fold((e,t,n)=>{if(!eD(e)&&t&&nI(t))return[nk(t).query];{let i=[];return t&&(i=i.concat(nv(t).map(e=>e.query))),B(n,(e,t)=>{i=i.concat(t)}),i}});for(let h=0;h<a.length;++h){let u=a[h];e.listenProvider_.stopListening(nH(u),nA(e,u))}}return o}(e,t,y))}return m}(e.serverSyncTree_,t,n,!0);let s;if(t._queryParams.loadsAllData())s=nx(e.serverSyncTree_,t._path,r);else{let o=nA(e.serverSyncTree_,t);s=nD(e.serverSyncTree_,t._path,r,o)}return is(e.eventQueue_,t._path,s),nR(e.serverSyncTree_,t,n,null,!0),r},n=>(ip(e,"get for query "+(0,_.Wl)(t)+" failed: "+n),Promise.reject(Error(n))))})(e._repo,e,n).then(t=>new ix(t,new iS(e._repo,e._path),e._queryParams.getIndex()))}class iA{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){let n=t._queryParams.getIndex();return new ib("value",this,new ix(e.snapshotNode,new iS(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new iE(this,e,t):null}matches(e){return e instanceof iA&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}(0,_.hu)(!nf,"__referenceConstructor has already been defined"),nf=iS,(0,_.hu)(!nb,"__referenceConstructor has already been defined"),nb=iS;let iL={};class iO{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(function(e,t,n){if(e.stats_=ec(e.repoInfo_),e.forceRestClient_||J())e.server_=new tv(e.repoInfo_,(t,n,i,r)=>{iu(e,t,n,i,r)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>ic(e,!0),0);else{if(null!=n){if("object"!=typeof n)throw Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,_.Wl)(n)}catch(i){throw Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new eU(e.repoInfo_,t,(t,n,i,r)=>{iu(e,t,n,i,r)},t=>{ic(e,t)},t=>{var n,i;n=e,i=t,B(i,(e,t)=>{id(n,e,t)})},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(t=>{e.server_.refreshAuthToken(t)}),e.appCheckProvider_.addTokenChangeListener(t=>{e.server_.refreshAppCheckToken(t.token)}),e.statsReporter_=function(e,t){let n=e.toString();return eu[n]||(eu[n]=t()),eu[n]}(e.repoInfo_,()=>new tk(e.stats_,e.server_)),e.infoData_=new tC,e.infoSyncTree_=new nN({startListening(t,n,i,r){let s=[],o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=nx(e.infoSyncTree_,t._path,o),setTimeout(()=>{r("ok")},0)),s},stopListening(){}}),id(e,"connected",!1),e.serverSyncTree_=new nN({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,(n,i)=>{let s=r(n,i);is(e.eventQueue_,t._path,s)}),[]),stopListening(t,n){e.server_.unlisten(t,n)}})}(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new iS(this._repo,ek())),this._rootInternal}_delete(){return null!==this._rootInternal&&(function(e,t){var n;let i=iL[t];i&&i[e.key]===e||q(`Database ${t}(${e.repoInfo_}) has already been deleted.`),e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt"),delete i[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&q("Cannot call "+e+" on a deleted database.")}}function iW(e=(0,c.Mq)(),t){let n=(0,c.qX)(e,"database").getImmediate({identifier:t}),i=(0,_.P0)("database");return i&&function(e,t,n,i={}){var r,s,o,l;(e=(0,_.m9)(e))._checkNotDeleted("useEmulator"),e._instanceStarted&&q("Cannot call useEmulator() after instance has already been initialized.");let a=e._repoInternal,h;if(a.repoInfo_.nodeAdmin)i.mockUserToken&&q('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),h=new en(en.OWNER);else if(i.mockUserToken){let u="string"==typeof i.mockUserToken?i.mockUserToken:(0,_.Sg)(i.mockUserToken,e.app.options.projectId);h=new en(u)}r=a,l=h,r.repoInfo_=new eo(`${t}:${n}`,!1,r.repoInfo_.namespace,r.repoInfo_.webSocketOnly,r.repoInfo_.nodeAdmin,r.repoInfo_.persistenceKey,r.repoInfo_.includeNamespaceInQueryParams),l&&(r.authTokenProvider_=l)}(n,...i),n}eU.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},eU.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)},y=h=c.Jn,(0,c.Xd)(new d.wA("database",(e,{instanceIdentifier:t})=>{let n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return function(e,t,n,i,r){var s,o,l,a;let h=i||e.options.databaseURL;void 0===h&&(e.options.projectId||q("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),D("Using default host for project ",e.options.projectId),h=`${e.options.projectId}-default-rtdb.firebaseio.com`);let u=iI(h,r),c=u.repoInfo,d,_;void 0!==f&&f.env&&(_=f.env.FIREBASE_DATABASE_EMULATOR_HOST),_?(d=!0,c=(u=iI(h=`http://${_}?ns=${c.namespace}`,r)).repoInfo):d=!u.repoInfo.secure;let p=r&&d?new en(en.OWNER):new et(e.name,e.options,t);it("Invalid Firebase Database URL",u),eD(u.path)||q("Database URL must point to the root of a Firebase Database (not including a child path).");let g,m,y=(s=c,o=e,l=p,a=new ee(e.name,n),g=iL[o.name],g||(g={},iL[o.name]=g),m=g[s.toURLString()],m&&q("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),m=new il(s,!1,l,a),g[s.toURLString()]=m,m);return new iO(y,e)}(n,i,r,t)},"PUBLIC").setMultipleInstances(!0)),(0,c.KN)(g,m,void 0),(0,c.KN)(g,m,"esm2017")}}]);