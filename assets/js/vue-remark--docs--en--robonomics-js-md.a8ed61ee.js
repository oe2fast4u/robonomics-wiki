(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{UQSp:function(s,a,t){"use strict";a.a={name:"VueRemarkRoot",render:function(s){return s("div",null,this.$slots.default)}}},cLlI:function(s,a,t){"use strict";t.r(a);var e=t("KHd+"),r=t("UQSp"),n=t("Kw5r");function o(s){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(s){return typeof s}:function(s){return s&&"function"==typeof Symbol&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s})(s)}n.a.config.optionMergeStrategies;var l={VueRemarkRoot:r.a},p=function(s){var a=s.options.components=s.options.components||{},t=s.options.computed=s.options.computed||{};Object.keys(l).forEach((function(s){"object"===o(l[s])&&"function"==typeof l[s].render||"function"==typeof l[s]&&"function"==typeof l[s].options.render?a[s]=l[s]:t[s]=function(){return l[s]}}))},c=n.a.config.optionMergeStrategies,i="__vueRemarkFrontMatter",v={excerpt:null,title:"Robonomics-js",contributors:["Vourhey"],translated:!0};var _=function(s){s.options[i]&&(s.options[i]=v),n.a.util.defineReactive(s.options,i,v),s.options.computed=c.computed({$frontmatter:function(){return s.options[i]}},s.options.computed)},h=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("VueRemarkRoot",[t("p",[t("a",{attrs:{href:"https://github.com/airalab/robonomics-js",target:"_blank",rel:"nofollow noopener noreferrer"}},[s._v("Robonomics-js")]),s._v(" is a simple Javascript library for working with Robonomics Network.")]),t("h2",{attrs:{id:"installation"}},[t("a",{attrs:{href:"#installation","aria-hidden":"true"}},[s._v("#")]),s._v("Installation")]),t("pre",[t("code",{pre:!0},[s._v("npm install robonomics-js --save\n")])]),t("p",[s._v("or")]),t("pre",[t("code",{pre:!0},[s._v("yarn add robonomics-js\n")])]),t("h3",{attrs:{id:"dependencies"}},[t("a",{attrs:{href:"#dependencies","aria-hidden":"true"}},[s._v("#")]),s._v("Dependencies")]),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/ethereum/web3.js/",target:"_blank",rel:"nofollow noopener noreferrer"}},[s._v("Web3")]),s._v(" version 1.2.4")]),t("li",[t("a",{attrs:{href:"https://github.com/ipfs/js-ipfs",target:"_blank",rel:"nofollow noopener noreferrer"}},[s._v("Ipfs")]),s._v(" version 0.34.0")])]),t("h2",{attrs:{id:"usage"}},[t("a",{attrs:{href:"#usage","aria-hidden":"true"}},[s._v("#")]),s._v("Usage")]),t("p",[s._v("Creates a Robonomics instance")]),t("pre",[t("code",{pre:!0,attrs:{class:"hljs language-JavaScript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" options = {...};\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" robonomics = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Robonomics(options);")])]),t("h3",{attrs:{id:"options"}},[t("a",{attrs:{href:"#options","aria-hidden":"true"}},[s._v("#")]),s._v("options")]),t("p",[s._v("The object of properties:")]),t("pre",[t("code",{pre:!0},[s._v("options.web3\n")])]),t("p",[s._v("An instance of "),t("a",{attrs:{href:"https://github.com/ethereum/web3.js/",target:"_blank",rel:"nofollow noopener noreferrer"}},[s._v("web3.js")]),s._v(":")]),t("pre",[t("code",{pre:!0,attrs:{class:"hljs language-JavaScript"}},[t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// metamask")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" options = {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("web3")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Web3("),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("window")]),s._v(".ethereum),\n  ...\n};\n\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// infura")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" options = {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("web3")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Web3(\n    "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Web3.providers.WebsocketProvider(\n      "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"wss://mainnet.infura.io/ws/v3/0b2f2a5026264b57b6d698b480332e89"')]),s._v("\n    )\n  ),\n  ...\n};")])]),t("pre",[t("code",{pre:!0},[s._v("options.messageProvider\n")])]),t("p",[s._v("This is an instance of MessageProviderIpfs which uses a "),t("a",{attrs:{href:"https://github.com/ipfs/js-ipfs",target:"_blank",rel:"nofollow noopener noreferrer"}},[s._v("js-ipfs")]),s._v(" node with pubsub support")]),t("pre",[t("code",{pre:!0,attrs:{class:"hljs language-JavaScript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" ipfs = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Ipfs({\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("repo")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'robonomics-example'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("relay")]),s._v(": {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("enabled")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("hop")]),s._v(": {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("enabled")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n    }\n  },\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("EXPERIMENTAL")]),s._v(": {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pubsub")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n  },\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("config")]),s._v(": {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("Addresses")]),s._v(": {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("Swarm")]),s._v(": [\n        "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'/dns4/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-websocket-star'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'/dns4/1.wsstar.aira.life/tcp/443/wss/p2p-websocket-star/'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'/dns4/2.wsstar.aira.life/tcp/443/wss/p2p-websocket-star/'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'/dns4/3.wsstar.aira.life/tcp/443/wss/p2p-websocket-star/'")]),s._v("\n      ]\n    },\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("Bootstrap")]),s._v(": [\n      "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'/dns4/ams-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLer265NRgSp2LA3dPaeykiS1J6DifTC88f5uVQKNAd'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'/dns4/lon-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLMeWqB7YGVLJN3pNLQpmmEk35v6wYtsMGLzSr5QBU3'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'/dns4/nyc-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLueR4xBeUbY9WZ9xGUUxunbKWcrNFTDAadQJmocnWm'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'/dns4/nyc-2.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLV4Bbm51jM9C4gDYZQ9Cy3U6aXMJDAbzgu2fzaDs64'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'/dns4/node0.preload.ipfs.io/tcp/443/wss/ipfs/QmZMxNdpMkewiVZLMRxaNxUeZpDUb34pWjZ1kZvsd16Zic'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'/dns4/node1.preload.ipfs.io/tcp/443/wss/ipfs/Qmbut9Ywz9YEDrz8ySBSgWyJk41Uvm2QJPhwDJzJyGFsD6'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'/dns4/1.pubsub.aira.life/tcp/443/wss/ipfs/QmdfQmbmXt6sqjZyowxPUsmvBsgSGQjm4VXrV7WGy62dv8'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'/dns4/2.pubsub.aira.life/tcp/443/wss/ipfs/QmPTFt7GJ2MfDuVYwJJTULr6EnsQtGVp8ahYn9NSyoxmd9'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'/dns4/3.pubsub.aira.life/tcp/443/wss/ipfs/QmWZSKTEQQ985mnNzMqhGCrwQ1aTA6sxVsorsycQz9cQrw'")]),s._v("\n    ]\n  }\n})\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" options = {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("messageProvider")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" MessageProviderIpfs(ipfs),\n  ...\n};")])]),t("pre",[t("code",{pre:!0},[s._v("options.account\n")])]),t("p",[s._v("This is an account object which will be used to sign messages. It's necessary to specify either account address (that one must be unlocked) or a private key (the address will be recovered from the given private key).")]),t("p",[s._v("Option "),t("code",{pre:!0},[s._v("isSignPrefix")]),s._v(" tells whether or not a prefix must be appended. Default is "),t("code",{pre:!0},[s._v("true")]),s._v(".")]),t("pre",[t("code",{pre:!0,attrs:{class:"hljs language-JavaScript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" options = {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("account")]),s._v(": {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("address")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'0x0000000000000000000000000000000000000000'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("privateKey")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'0x0000000000000000000000000000000000000000000000000000'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("isSignPrefix")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n  },\n  ...\n};")])]),t("pre",[t("code",{pre:!0},[s._v("options.ens\n")])]),t("p",[s._v("This is a "),t("code",{pre:!0},[s._v("ens")]),s._v(" contract object. This one is not required. If it's necessary you may specify "),t("code",{pre:!0},[s._v("address")]),s._v(" of the contract if the network is not set to mainnet. "),t("code",{pre:!0},[s._v("suffix")]),s._v(" may be "),t("code",{pre:!0},[s._v("sid")]),s._v(" for sidechain or "),t("code",{pre:!0},[s._v("eth")]),s._v(" for mainnet. "),t("code",{pre:!0},[s._v("eth")]),s._v(" is default. "),t("code",{pre:!0},[s._v("version")]),s._v(" is the version of Robonomics Network. Default is the latest deployed version.")]),t("pre",[t("code",{pre:!0,attrs:{class:"hljs language-JavaScript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" options = {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ens")]),s._v(": {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("address")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'0x314159265dD8dbb310642f98f50C066173C1259b'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("suffix")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'eth'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("version")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5")]),s._v("\n  },\n  ...\n};")])]),t("pre",[t("code",{pre:!0},[s._v("options.lighthouse\n")])]),t("p",[s._v("ENS name of a lighthouse, not required. Default is "),t("code",{pre:!0},[s._v("airalab.lighthouse.5.robonomics.eth")]),s._v(". It's possible to specify only the first part of the name, like "),t("code",{pre:!0},[s._v("airalab")]),s._v(".")]),t("pre",[t("code",{pre:!0,attrs:{class:"hljs language-JavaScript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" options = {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lighthouse")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'airalab.lighthouse.5.robonomics.eth'")]),s._v(",\n  ...\n};")])]),t("p",[s._v("It's necessary to wait until full initialization")]),t("pre",[t("code",{pre:!0,attrs:{class:"hljs language-JavaScript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" options = {...};\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" robonomics = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Robonomics(options);\nrobonomics.ready().then("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("() =>")]),s._v(" {\n  "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Robonomics instance ready'")]),s._v(")\n})")])]),t("h2",{attrs:{id:"api"}},[t("a",{attrs:{href:"#api","aria-hidden":"true"}},[s._v("#")]),s._v("API")]),t("h3",{attrs:{id:"messages"}},[t("a",{attrs:{href:"#messages","aria-hidden":"true"}},[s._v("#")]),s._v("Messages")]),t("h4",{attrs:{id:"demand"}},[t("a",{attrs:{href:"#demand","aria-hidden":"true"}},[s._v("#")]),s._v("Demand")]),t("p",[s._v("The message specification")]),t("pre",[t("code",{pre:!0,attrs:{class:"hljs language-JavaScript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" demand = {\n  "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// REQUIRED")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("model")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"QmSt69qQqGka1qwRRHbdmAWk4nCbsV1mqJwd8cWbEyhf1M"')]),s._v(",      "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// ipfs hash of the model ")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("objective")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"QmSt69qQqGka1qwRRHbdmAWk4nCbsV1mqJwd8cWbEyhf2M"')]),s._v(",  "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// ipfs hash of the objective")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("token")]),s._v(": robonomics.xrt.address,                                "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// payment token address")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("cost")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(",                                                      "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// cost")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("deadline")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("9999999")]),s._v(",                                            "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// until which block demand is valid")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// NOT REQUIRED ")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lighthouse")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0x0000000000000000000000000000000000000000"')]),s._v(",     "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// lighthouse address, by default the initialization address")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("validator")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0x0000000000000000000000000000000000000000"')]),s._v(",      "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// validator address if necessary")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("validatorFee")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(",                                              "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// validator fee ")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("nonce")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v("                                                      "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// index number ")]),s._v("\n};")])]),t("p",[t("code",{pre:!0},[s._v("robonomics.sendDemand")])]),t("p",[s._v("Signing and broadcasting the demand message. A liability is returned as promise")]),t("pre",[t("code",{pre:!0,attrs:{class:"hljs language-JavaScript"}},[s._v("robonomics.sendDemand(demand).then("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("liability")]),s._v(" =>")]),s._v(" {\n  "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(liability.address);\n});")])]),t("p",[t("code",{pre:!0},[s._v("robonomics.onDemand")])]),t("p",[s._v("Listens to demand messages with a defined model. If model is "),t("code",{pre:!0},[s._v("null")]),s._v(" returns any demand message.")]),t("pre",[t("code",{pre:!0,attrs:{class:"hljs language-JavaScript"}},[s._v("robonomics.onDemand(model, "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("message")]),s._v(" =>")]),s._v(" {\n  "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(message);\n});")])]),t("h4",{attrs:{id:"offer"}},[t("a",{attrs:{href:"#offer","aria-hidden":"true"}},[s._v("#")]),s._v("Offer")]),t("p",[s._v("The message specification")]),t("pre",[t("code",{pre:!0,attrs:{class:"hljs language-JavaScript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" offer = {\n  "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// REQUIRED ")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("model")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"QmSt69qQqGka1qwRRHbdmAWk4nCbsV1mqJwd8cWbEyhf1M"')]),s._v(",      "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// ipfs hash of the model ")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("objective")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"QmSt69qQqGka1qwRRHbdmAWk4nCbsV1mqJwd8cWbEyhf2M"')]),s._v(",  "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// ipfs hash of the objective")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("token")]),s._v(": robonomics.xrt.address,                                "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// payment token address")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("cost")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(",                                                      "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// cost ")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("deadline")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("9999999")]),s._v(",                                            "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// until which block demand is valid")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// NOT REQUIRED")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lighthouse")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0x0000000000000000000000000000000000000000"')]),s._v(",     "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// lighthouse address, by default the initialization address")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lighthouseFee")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(",                                             "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// lighthouse fee")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("validator")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0x0000000000000000000000000000000000000000"')]),s._v(",      "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// validator address if necessary")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("nonce")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v("                                                      "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// index number ")]),s._v("\n};")])]),t("p",[t("code",{pre:!0},[s._v("robonomics.sendOffer")])]),t("p",[s._v("Signs and broadcasts an offer message. A liability is returned as promise")]),t("pre",[t("code",{pre:!0,attrs:{class:"hljs language-JavaScript"}},[s._v("robonomics.sendOffer(offer).then("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("liability")]),s._v(" =>")]),s._v(" {\n  "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(liability.address);\n});")])]),t("p",[t("code",{pre:!0},[s._v("robonomics.onOffer")])]),t("p",[s._v("Listens to offer messages with a defined model. If model is "),t("code",{pre:!0},[s._v("null")]),s._v(" returns any offer message")]),t("pre",[t("code",{pre:!0,attrs:{class:"hljs language-JavaScript"}},[s._v("robonomics.onOffer(model, "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("message")]),s._v(" =>")]),s._v(" {\n  "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(message);\n});")])]),t("h4",{attrs:{id:"result"}},[t("a",{attrs:{href:"#result","aria-hidden":"true"}},[s._v("#")]),s._v("Result")]),t("p",[s._v("The message specification")]),t("pre",[t("code",{pre:!0,attrs:{class:"hljs language-JavaScript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" result = {\n  "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// REQUIRED ")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("liability")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0x0000000000000000000000000000000000000000"')]),s._v(",  "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// liability contract address")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("success")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",                                            "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// status of the task")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("result")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"QmWXk8D1Fh5XFJvBodcWbwgyw9htjc6FJg8qi1YYEoPnrg"')]),s._v("  "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// ipfs hash of the rosbag log file")]),s._v("\n};")])]),t("p",[t("code",{pre:!0},[s._v("robonomics.sendResult")])]),t("p",[s._v("Signs and broadcasts a result message")]),t("pre",[t("code",{pre:!0,attrs:{class:"hljs language-JavaScript"}},[s._v("robonomics.sendResult(result).then("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("() =>")]),s._v(" {\n  "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ok"')]),s._v(");\n});")])]),t("p",[t("code",{pre:!0},[s._v("robonomics.onResult")])]),t("p",[s._v("Listens to result messages. These results may be not valid. Valid results are stored in a liability contract")]),t("pre",[t("code",{pre:!0,attrs:{class:"hljs language-JavaScript"}},[s._v("robonomics.onResult("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("result")]),s._v(" =>")]),s._v(" {\n  "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(result);\n});")])]),t("h3",{attrs:{id:"smart-contracts"}},[t("a",{attrs:{href:"#smart-contracts","aria-hidden":"true"}},[s._v("#")]),s._v("Smart Contracts")]),t("h4",{attrs:{id:"liability"}},[t("a",{attrs:{href:"#liability","aria-hidden":"true"}},[s._v("#")]),s._v("Liability")]),t("p",[t("code",{pre:!0},[s._v("liability.getInfo")])]),t("p",[s._v("Return a property object of the contract")]),t("pre",[t("code",{pre:!0,attrs:{class:"hljs language-JavaScript"}},[s._v("liability.getInfo().then("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("data")]),s._v(" =>")]),s._v(" {\n  "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(data);\n  "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/*\n  {\n    model,\n    objective,\n    result,\n    token,\n    cost,\n    lighthouseFee,\n    validatorFee,\n    demandHash,\n    offerHash,\n    promisor,\n    promisee,\n    lighthouse,\n    validator,\n    isSuccess,\n    isFinalized\n  }\n  */")]),s._v("\n});")])]),t("p",[t("code",{pre:!0},[s._v("liability.onResult")])]),t("p",[s._v("Waits until a liability is finished. Returns a result")]),t("pre",[t("code",{pre:!0,attrs:{class:"hljs language-JavaScript"}},[s._v("liability.onResult().then("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("result")]),s._v(" =>")]),s._v(" {\n  "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(result);\n});")])]),t("h4",{attrs:{id:"lighthouse"}},[t("a",{attrs:{href:"#lighthouse","aria-hidden":"true"}},[s._v("#")]),s._v("Lighthouse")]),t("p",[t("code",{pre:!0},[s._v("robonomics.lighthouse.getInfo")])]),t("p",[s._v("Returns a property object of the contract")]),t("pre",[t("code",{pre:!0,attrs:{class:"hljs language-JavaScript"}},[s._v("robonomics.lighthouse.getInfo().then("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("data")]),s._v(" =>")]),s._v(" {\n  "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(data);\n  "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/*\n  {\n    minimalStake,\n    timeoutInBlocks,\n    keepAliveBlock,\n    marker,\n    quota\n  }\n  */")]),s._v("\n});")])]),t("p",[t("code",{pre:!0},[s._v("robonomics.lighthouse.getProviders")])]),t("p",[s._v("Returns a list of providers on the lighthouse")]),t("pre",[t("code",{pre:!0,attrs:{class:"hljs language-JavaScript"}},[s._v("robonomics.lighthouse.getProviders().then("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("list")]),s._v(" =>")]),s._v(" {\n  "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(list);\n});")])]),t("h5",{attrs:{id:"creation-of-a-new-lighthouse"}},[t("a",{attrs:{href:"#creation-of-a-new-lighthouse","aria-hidden":"true"}},[s._v("#")]),s._v("Creation of a new lighthouse")]),t("pre",[t("code",{pre:!0,attrs:{class:"hljs language-JavaScript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" minimalFreeze = "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1000")]),s._v("      "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// Wn")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" timeout = "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("25")]),s._v("              "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// blocks")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" name = "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'mylighthouse'")]),s._v("     "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// lighthouse name")]),s._v("\nrobonomics.factory.methods.createLighthouse(minimalFreeze, timeout, name).send({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("from")]),s._v(": robonomics.account.address })\n    .then("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("tx")]),s._v(") =>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(tx))\n\nrobonomics.factory.onLighthouse("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("lighthouse")]),s._v(") =>")]),s._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(lighthouse.name)\n})")])]),t("h5",{attrs:{id:"become-a-provider"}},[t("a",{attrs:{href:"#become-a-provider","aria-hidden":"true"}},[s._v("#")]),s._v("Become a provider")]),t("p",[s._v("Preliminarily you must call "),t("code",{pre:!0},[s._v("approve")]),s._v(" for the tokens "),t("code",{pre:!0},[s._v("XRT")])]),t("pre",[t("code",{pre:!0,attrs:{class:"hljs language-JavaScript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" name = "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"mylighthouse"')]),s._v(";    "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// lighthouse name")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" stake = "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1000")]),s._v(";             "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// Wn")]),s._v("\nrobonomics.lighthouse.methods\n  .refill(stake)\n  .send({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("from")]),s._v(": robonomics.account.address })\n  .then("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("tx")]),s._v(" =>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(tx));")])]),t("h4",{attrs:{id:"token"}},[t("a",{attrs:{href:"#token","aria-hidden":"true"}},[s._v("#")]),s._v("Token")]),t("p",[t("code",{pre:!0},[s._v("robonomics.xrt.getInfo")])]),t("p",[s._v("Returns property object of the token")]),t("pre",[t("code",{pre:!0,attrs:{class:"hljs language-JavaScript"}},[s._v("robonomics.xrt.getInfo().then("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("data")]),s._v(" =>")]),s._v(" {\n  "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(data);\n  "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/*\n  {\n    name,\n    totalSupply,\n    decimals,\n    symbol\n  }\n  */")]),s._v("\n});")])]),t("h5",{attrs:{id:"check-balance"}},[t("a",{attrs:{href:"#check-balance","aria-hidden":"true"}},[s._v("#")]),s._v("Check balance")]),t("pre",[t("code",{pre:!0,attrs:{class:"hljs language-JavaScript"}},[s._v("robonomics.xrt.methods\n  .balanceOf(robonomics.account.address)\n  .call()\n  .then("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("balance")]),s._v(" =>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(balance));")])]),t("h5",{attrs:{id:"check-allowance"}},[t("a",{attrs:{href:"#check-allowance","aria-hidden":"true"}},[s._v("#")]),s._v("Check allowance")]),t("pre",[t("code",{pre:!0,attrs:{class:"hljs language-JavaScript"}},[s._v("robonomics.xrt.methods\n  .allowance(robonomics.account.address, robonomics.factory.address)\n  .call()\n  .then("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("allowance")]),s._v(" =>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(allowance));")])]),t("h5",{attrs:{id:"approve"}},[t("a",{attrs:{href:"#approve","aria-hidden":"true"}},[s._v("#")]),s._v("Approve")]),t("pre",[t("code",{pre:!0,attrs:{class:"hljs language-JavaScript"}},[s._v("robonomics.xrt.methods\n  .approve(robonomics.lighthouse.address, "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100")]),s._v(")\n  .send({\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("from")]),s._v(": robonomics.account.address\n  })\n  .then("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("tx")]),s._v(" =>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(tx));")])]),t("h2",{attrs:{id:"links"}},[t("a",{attrs:{href:"#links","aria-hidden":"true"}},[s._v("#")]),s._v("Links")]),t("ul",[t("li",[t("a",{attrs:{href:"https://robonomics.network/",target:"_blank",rel:"nofollow noopener noreferrer"}},[s._v("Website")])]),t("li",[t("a",{attrs:{href:"https://github.com/airalab/vue-dapp-robonomics-template",target:"_blank",rel:"nofollow noopener noreferrer"}},[s._v("Minimal template of dApp")])]),t("li",[t("a",{attrs:{href:"https://codesandbox.io/s/robonomics-vue-template-ewuiw",target:"_blank",rel:"nofollow noopener noreferrer"}},[s._v("dApp example")])])])])}),[],!1,null,null,null);"function"==typeof p&&p(h),"function"==typeof _&&_(h);a.default=h.exports}}]);