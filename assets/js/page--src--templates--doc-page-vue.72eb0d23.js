(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"7+Kc":function(t,e){t.exports=[{title:"Meet Robonomics",items:[{title:"Introduction",link:"/docs/"},{title:'DEMO "Get Weather on Fuji Mountain"',link:"/docs/get-weather-on-fuji-mountain/"},{title:"Robonomics DApp Overview",link:"/docs/robonomics-dapp-overview/"},{title:"R&D Based on Robonomics Network",link:"/docs/r-and-d-based-on-robonomics-network/"}]},{title:"Playground",items:[{title:"Create Account on Robonomics Platform",link:"/docs/create-account-in-dapp/"},{title:"Connect Mars Curiosity Rover",link:"/docs/connect-mars-curiosity-rover-under-robonomics-parachain-control/"},{title:"Connect ROS-compatibale Drone",items:[{title:"Part 1. Launch by Transaction",link:"/docs/connect-any-ros-compatitable-robot-under-robonomics-parachain-control-1/"},{title:"Part 2. Saving Data To Blockchain",link:"/docs/connect-any-ros-compatitable-robot-under-robonomics-parachain-control-2/"}]},{title:"Connect Industrial Robot",items:[{title:"Baxter simulation v1.0",link:"/docs/baxter/"},{title:"Baxter simulation v2.0",link:"/docs/baxter2/"}]},{title:"Connect Manipulator",link:"/docs/kuka/"},{title:"Connect Unmanned Aerial Vehicle",link:"/docs/iris-drone/"}]},{title:"Maintain",items:[{title:"Deploy Robonomics Test Network",link:"/docs/robonomics-test-network-manual/"},{title:"Configure Metrics With Prometheus And Grafana",link:"/docs/robonomics-prometheus-grafana/"}]},{title:"Cases",items:[{title:"Open Sensors Network",items:[{title:"Connect Sensor",link:"/docs/connect-sensor-to-robonomics/"},{title:"IoT Sensors Connectivity",link:"/docs/iot-sensors-connectivity/"},{title:"Firmware Upload",link:"/docs/iot-firmware-upload/"},{title:"Install Connectivity on Aira",link:"/docs/sensors-connectivity-on-aira/"},{title:"Configuration Options Description",link:"/docs/configuration-options-description/"}]},{title:"Securely Connect Cloud AI To The Factory Floor",link:"/docs/securely-connect-cloud-ai-to-the-factory-floor/"},{title:"Create digital identity run by Ethereum",link:"/docs/create-digital-identity-run-by-ethereum/"}]},{title:"Learn",items:[{title:"Robonomics IO",items:[{title:"Overview",link:"/docs/rio-overview/"},{title:"IPFS",link:"/docs/rio-ipfs/"},{title:"Launch",link:"/docs/rio-launch/"},{title:"Datalog",link:"/docs/rio-datalog/"}]},{title:"Robonomics-js",link:"/docs/robonomics-js/"},{title:"Glossary",link:"/docs/glossary/"},{title:"Sensors Connectivity",link:"/docs/sensors-connectivity/"},{title:"AIRA",items:[{title:"Overview",link:"/docs/aira-overview/"},{title:"Installation",link:"/docs/aira-installation/"},{title:"AIRA installation on VirtualBox",link:"/docs/aira-installation-on-vb/"},{title:"Basic usage",link:"/docs/aira-basic-usage/"},{title:"Interact with AIRA",link:"/docs/interact-with-aira/"},{title:"Connecting via SSH",link:"/docs/aira-connecting-via-ssh/"},{title:"F.A.Q.",link:"/docs/aira-faq/"}]},{title:"Agent Development",items:[{title:"Market messages",link:"/docs/market-messages/"},{title:"Examples",link:"/docs/agent-development-examples/"},{title:"Robonomics Network",items:[{title:"How it works",link:"/docs/robonomics-how-it-works/"},{title:"Contracts deployment",link:"/docs/robonomics-contracts-deployment/"},{title:"Become a Provider",link:"/docs/robonomics-become-a-provider/"}]},{title:"ROS API Reference",items:[{title:"Robonomics Liability",link:"/docs/robonomics-liability/"},{title:"Robonomics Liability Messages",link:"/docs/robonomics-liability-messages/"},{title:"Ethereum Common",link:"/docs/ethereum-common/"},{title:"Ethereum Common Messages",link:"/docs/ethereum-common-messages/"},{title:"IPFS Common",link:"/docs/ipfs-common/"},{title:"IPFS Common Messages",link:"/docs/ipfs-common-messages/"}]},{title:"Hardware Examples",items:[{title:"Connect the simplest CPS",link:"/docs/connect-simple-cps/"},{title:"Passing dynamic parameters",link:"/docs/hardware-passing-dynamic-parameters/"},{title:"Connect an air pollution sensor",link:"/docs/hardware-connect-sensor/"}]}]}]},{title:"Contribute",items:[{title:"Community",link:"/docs/community/"},{title:"How to contribute",link:"/docs/contributing/"}]}]},Cksx:function(t,e,i){},F3eC:function(t,e,i){"use strict";i.r(e);i("07d7");var n=i("Kw5r"),s={props:{items:{default:[]}},components:{List:function(){return Promise.resolve().then(i.bind(null,"F3eC"))}},data:function(){return{list:this.items}},methods:{toggle:function(t){n.a.set(this.list[t],"isOpen",!this.list[t].isOpen)}}},o=i("KHd+"),l=Object(o.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"menu menu-tree"},t._l(t.list,(function(e,n){return i("li",{key:n},[e.link?i("g-link",{staticClass:"menu__item menu__link",attrs:{to:e.link,exact:"/docs/"==e.link}},[t._v(t._s(e.title))]):[i("h4",{staticClass:"menu__item menu__title",on:{click:function(e){return t.toggle(n)}}},[t._v("\n        "+t._s(e.title)+"\n        "),i("span",[t._v("["+t._s(!0===e.isOpen?"-":"+")+"]")])]),i("List",{directives:[{name:"show",rawName:"v-show",value:e.isOpen,expression:"item.isOpen"}],attrs:{items:e.items}})]],2)})),0)}),[],!1,null,null,null);e.default=l.exports},TeQF:function(t,e,i){"use strict";var n=i("I+eb"),s=i("tycR").filter,o=i("Hd5f"),l=i("rkAj"),a=o("filter"),c=l("filter");n({target:"Array",proto:!0,forced:!a||!c},{filter:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},dDYI:function(t,e,i){"use strict";i.r(e);i("fbCW"),i("2B1R"),i("07d7"),i("mRH6");var n=i("VTBJ"),s=i("F3eC"),o=(i("TeQF"),i("yq1k"),{computed:{subtitles:function(){var t=this.$page.doc.subtitles.filter((function(t,e,i){return[2,3,4].includes(t.depth)}));return t}}}),l=i("KHd+"),a=Object(l.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.subtitles.length>0&&4!==t.subtitles[0].depth?i("div",[t.subtitles.length?i("ul",{staticClass:"menu"},t._l(t.subtitles,(function(e){return i("li",{key:e.value,class:"menu__item-depth-"+e.depth},[i("a",{staticClass:"menu__item menu__link",attrs:{href:e.anchor}},[t._v("\n          "+t._s(e.value)+"\n        ")])])})),0):t._e()]):t._e()}),[],!1,null,null,null).exports,c={functional:!0,render(t,e){const{_c:i,_v:n,data:s,children:o=[]}=e,{class:l,staticClass:a,style:c,staticStyle:r,attrs:d={},...u}=s;return i("svg",{class:[l,a],style:[c,r],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 383 296"},d),...u},o.concat([i("path",{attrs:{d:"M364.4 124H18.6C8.4 124 0 134.8 0 148s8.4 24 18.6 24h345.7c10.3 0 18.6-10.8 18.6-24s-8.3-24-18.5-24zM364.4 0H18.6C8.4 0 0 10.8 0 24s8.4 24 18.6 24h345.7c10.3 0 18.6-10.8 18.6-24s-8.3-24-18.5-24zM364.4 248H18.6C8.4 248 0 258.8 0 272s8.4 24 18.6 24h345.7c10.3 0 18.6-10.8 18.6-24s-8.3-24-18.5-24z"}})]))}},r={functional:!0,render(t,e){const{_c:i,_v:n,data:s,children:o=[]}=e,{class:l,staticClass:a,style:c,staticStyle:r,attrs:d={},...u}=s;return i("svg",{class:[l,a],style:[c,r],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 90 390"},d),...u},o.concat([i("path",{attrs:{d:"M45 0C20.2 0 0 20.2 0 45s20.2 45 45 45 45-20.2 45-45S69.8 0 45 0zM45 150c-24.8 0-45 20.2-45 45s20.2 45 45 45 45-20.2 45-45-20.2-45-45-45zM45 300c-24.8 0-45 20.2-45 45s20.2 45 45 45 45-20.2 45-45-20.2-45-45-45z"}})]))}},d={functional:!0,render(t,e){const{_c:i,_v:n,data:s,children:o=[]}=e,{class:l,staticClass:a,style:c,staticStyle:r,attrs:d={},...u}=s;return i("svg",{class:[l,a],style:[c,r],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 348.3 348.3"},d),...u},o.concat([i("path",{attrs:{d:"M336.6 68.6L231 174.2l105.5 105.5c15.7 15.7 15.7 41.1 0 56.9-7.8 7.8-18.1 11.8-28.4 11.8-10.3 0-20.6-3.9-28.4-11.8L174.2 231 68.6 336.6c-7.8 7.8-18.1 11.8-28.4 11.8-10.3 0-20.6-3.9-28.4-11.8-15.7-15.7-15.7-41.1 0-56.9l105.5-105.5L11.8 68.6c-15.7-15.7-15.7-41.1 0-56.8 15.7-15.7 41.1-15.7 56.8 0l105.6 105.6L279.7 11.8c15.7-15.7 41.1-15.7 56.8 0 15.8 15.7 15.8 41.1.1 56.8z"}})]))}},u=i("7+Kc"),m=i.n(u),p={components:{SidebarDocs:s.default,SidebarContent:a,IconMenu:c,IconDots:r,IconClose:d,Banner:function(){return Promise.all([i.e(0),i.e(56)]).then(i.bind(null,"hK9i"))}},data:function(){return{items:this.setBranchOpenLabel(this.initOpenLabel(m.a))}},methods:{initOpenLabel:function(t){var e=this;return t.map((function(t){return t.items&&(t.items=e.initOpenLabel(t.items)),Object(n.a)(Object(n.a)({},t),{},{isOpen:Object.prototype.hasOwnProperty.call(t,"link")&&e.$route.path===t.link})}))},hasOpenChildren:function(t){return!!t.find((function(t){return t.isOpen}))},setBranchOpenLabel:function(t){var e=this;return t.map((function(t){return t.items&&!t.isOpen&&(t.items=e.setBranchOpenLabel(t.items),t.isOpen=e.hasOpenChildren(t.items)),Object(n.a)({},t)}))},showBlock:function(t,e){var i=document.getElementById(t),n=e.currentTarget.querySelector(".mobileMenu"),s=e.currentTarget.querySelector(".mobileMenuClose");i.classList.contains("mobileClosed")?(i.classList.remove("mobileClosed"),s.style.display="block",n.style.display="none"):(i.classList.add("mobileClosed"),s.style.display="none",n.style.display="block")}},metaInfo:function(){var t=this.$page.doc,e=t.title,i=t.headings;return{title:e||(i.length?i[0].value:void 0)}}},b=(i("wjsv"),null),h=Object(l.a)(p,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Layout",[i("div",{staticClass:"sidebarMobileToggle"},[i("div",{staticClass:"layout__page flex-line"},[i("div",{staticClass:"sidebarMobileToggle__tog",on:{click:function(e){return t.showBlock("sidebarDocs",e)}}},[i("IconMenu",{staticClass:"mobileMenu",attrs:{height:"20px"}}),i("IconClose",{staticClass:"mobileMenuClose",staticStyle:{display:"none"},attrs:{height:"20px"}})],1),i("div",{staticClass:"sidebarMobileToggle__tog",on:{click:function(e){return t.showBlock("sidebarContent",e)}}},[i("IconDots",{staticClass:"mobileMenu",attrs:{height:"20px"}}),i("IconClose",{staticClass:"mobileMenuClose",staticStyle:{display:"none"},attrs:{height:"20px"}})],1)])]),i("div",{staticClass:"page"},[i("div",{staticClass:"page__sidebar mobileClosed",attrs:{id:"sidebarDocs"}},[i("SidebarDocs",{attrs:{items:t.items}}),i("Banner")],1),i("div",{staticClass:"page__content"},[i("VueRemarkContent"),i("Banner",{attrs:{place:"content"}})],1),i("div",{staticClass:"page__sidebar mobileClosed",attrs:{id:"sidebarContent"}},[i("SidebarContent")],1)])])}),[],!1,null,null,null);"function"==typeof b&&b(h);e.default=h.exports},fbCW:function(t,e,i){"use strict";var n=i("I+eb"),s=i("tycR").find,o=i("RNIs"),l=i("rkAj"),a=!0,c=l("find");"find"in[]&&Array(1).find((function(){a=!1})),n({target:"Array",proto:!0,forced:a||!c},{find:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),o("find")},wjsv:function(t,e,i){"use strict";i("Cksx")}}]);