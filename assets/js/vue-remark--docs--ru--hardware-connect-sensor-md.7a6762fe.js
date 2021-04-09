(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{MkkE:function(e,o,t){"use strict";t.r(o);var r=t("KHd+"),n=t("UQSp"),a=t("Kw5r");function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}a.a.config.optionMergeStrategies;var s={VueRemarkRoot:n.a},l=function(e){var o=e.options.components=e.options.components||{},t=e.options.computed=e.options.computed||{};Object.keys(s).forEach((function(e){"object"===i(s[e])&&"function"==typeof s[e].render||"function"==typeof s[e]&&"function"==typeof s[e].options.render?o[e]=s[e]:t[e]=function(){return s[e]}}))},c=a.a.config.optionMergeStrategies,u="__vueRemarkFrontMatter",p={excerpt:null,title:"Connect an Air Pollution Sensor",contributors:["ensrationis","akru"],translated:!1};var d=function(e){e.options[u]&&(e.options[u]=p),a.a.util.defineReactive(e.options,u,p),e.options.computed=c.computed({$frontmatter:function(){return e.options[u]}},e.options.computed)},f=Object(r.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("VueRemarkRoot",[t("p",[e._v("In this lesson you are going to learn how to connect your sensor to the network and make it publish data. You will see how it is easy to become a member of a global sensor network!")]),t("p",[e._v("Source code is located "),t("a",{attrs:{href:"https://github.com/airalab/robonomics_tutorials/tree/master/sensor_city",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("here")]),e._v(".")]),t("p",[e._v("In this section we are not going to create a liability contract. Instead we will teach Arduino with sensors to publish the data by a request. All measurements will be published as a Result message.")]),t("h2",{attrs:{id:"arduino"}},[t("a",{attrs:{href:"#arduino","aria-hidden":"true"}},[e._v("#")]),e._v("Arduino")]),t("p",[e._v("Let's begin with an Arduino circuit. You need the following components:")]),t("ul",[t("li",[e._v("Arduino Uno")]),t("li",[e._v("Optical Dust Sensor Sharp GP2Y1010AU0F")]),t("li",[e._v("Gas Sensor MQ-2")]),t("li",[e._v("Gas Sensor MQ-7")]),t("li",[e._v("Resistor 150 Ohm")]),t("li",[e._v("Capacitor 220 uF")]),t("li",[e._v("Wires")])]),t("p",[e._v("Connect all parts as described below:")]),t("p",[e._v("A firmware for Arduino Uno is in "),t("code",{pre:!0},[e._v("sensor_city/scetches")]),e._v(" folder. In order to upload it to the board use "),t("a",{attrs:{href:"https://www.arduino.cc/en/Main/Software",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Arduino IDE")]),e._v(".")]),t("h2",{attrs:{id:"aira"}},[t("a",{attrs:{href:"#aira","aria-hidden":"true"}},[e._v("#")]),e._v("Aira")]),t("p",[e._v("The following steps are performed in Aira client. You can download the latest image from "),t("a",{attrs:{href:"https://github.com/airalab/aira/releases",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("this page")]),e._v(". It's convenient to "),t("a",{attrs:{href:"/docs/aira-connecting-via-ssh/"}},[e._v("connect via SSH")]),e._v(".")]),t("p",[e._v("After you have imported the image to VirtualBox, connect Arduino via USB to your PC and enable serial port forwarding. You should check "),t("code",{pre:!0},[e._v("Enable Serial Port")]),e._v(" and assign "),t("code",{pre:!0},[e._v("/dev/ttyACM0")]),e._v(" in "),t("code",{pre:!0},[e._v("Path/Address")]),e._v(". Inside the virtual machine "),t("code",{pre:!0},[e._v("/dev/ttyS0")]),e._v(" refers to your external Arduino.")]),t("p",[e._v("Finally launch the image and run these command:")]),t("pre",[t("code",{pre:!0},[e._v("$ roslaunch sensor_city publish_data.launch\n")])]),t("p",[t("strong",[e._v("Check out the source code to learn how it works under the hood!")])]),t("p",[e._v("Now Aira patiently waits for a signal to publish the measurements. Go to "),t("a",{attrs:{href:"https://dev.aira.life/smart-city/#/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Dapp")]),e._v(" and click on "),t("code",{pre:!0},[e._v("Broadcast signal")]),e._v(". You should see the data!")])])}),[],!1,null,null,null);"function"==typeof l&&l(f),"function"==typeof d&&d(f);o.default=f.exports},UQSp:function(e,o,t){"use strict";o.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}}}]);