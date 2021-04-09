(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{"2wOq":function(e,t,o){"use strict";o.r(t);var n=o("KHd+"),r=o("UQSp"),a=o("Kw5r");function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}a.a.config.optionMergeStrategies;var s={VueRemarkRoot:r.a},c=function(e){var t=e.options.components=e.options.components||{},o=e.options.computed=e.options.computed||{};Object.keys(s).forEach((function(e){"object"===i(s[e])&&"function"==typeof s[e].render||"function"==typeof s[e]&&"function"==typeof s[e].options.render?t[e]=s[e]:o[e]=function(){return s[e]}}))},l=a.a.config.optionMergeStrategies,d="__vueRemarkFrontMatter",p={excerpt:null,title:"Lesson 5, Connectivity",contributors:["vourhey"],translated:!0};var v=function(e){e.options[d]&&(e.options[d]=p),a.a.util.defineReactive(e.options,d,p),e.options.computed=l.computed({$frontmatter:function(){return e.options[d]}},e.options.computed)},h=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("VueRemarkRoot",[n("h2",{attrs:{id:"iot-as-a-multiple-pie"}},[n("a",{attrs:{href:"#iot-as-a-multiple-pie","aria-hidden":"true"}},[e._v("#")]),e._v("IoT as a Multiple Pie")]),n("ul",[n("li",[e._v("Device Software"),n("ul",[n("li",[e._v("FreeRTOS")]),n("li",[e._v("ESP/Arduino")]),n("li",[e._v("Single-board computers (RPi, LattePanda etc)")])])]),n("li",[e._v("Connectivity"),n("ul",[n("li",[e._v("IoT Hub")]),n("li",[e._v("IoT Manager")])])]),n("li",[e._v("Analytics Services"),n("ul",[n("li",[e._v("AWS")]),n("li",[e._v("Google Cloud IoT Core")]),n("li",[e._v("ThingsBoard")])])])]),n("p",[e._v("As a rule, most are not interested in sensors and servers, but data analytics.\nTo get it, you need to decide which device to use, how to work with it and where to connect")]),n("h2",{attrs:{id:"device-software"}},[n("a",{attrs:{href:"#device-software","aria-hidden":"true"}},[e._v("#")]),e._v("Device Software")]),n("p",[e._v("Consider the example of a home weather station. It is necessary to collect data on air pollution (SDS011), temperature and humidity (BME). The ESP8266 microcontroller can handle this task.")]),n("p",[e._v("Requirements:")]),n("ul",[n("li",[e._v("Correctly read data from sensors")]),n("li",[e._v("Have a unique identifier")]),n("li",[e._v("Transfer data to a known server")]),n("li",[e._v("Provide digital signature of data (optional)")])]),n("p",[e._v("You can find the current firmware "),n("a",{attrs:{href:"https://github.com/LoSk-p/sensors-software/tree/366b19bf447a5fc19220ef89eab0f2440f8db1c2",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("here")])]),n("h2",{attrs:{id:"what-is-connectivity"}},[n("a",{attrs:{href:"#what-is-connectivity","aria-hidden":"true"}},[e._v("#")]),e._v("What is Connectivity?")]),n("p",[e._v("In the IoT world, connectivity refers to the connection of various IoT devices to the Internet to send data and / or control the device.")]),n("p",[e._v("Well-known architectural solutions can be roughly divided into 3 groups:")]),n("ul",[n("li",[e._v("Fully decentralized. For example, devices are connected by a mesh network. Not suitable for wide area networks due to high hardware requirements")]),n("li",[e._v("Centralized. For example, AWS. Provides a single entry point and ease of connection, but there is a high risk of failure in case of server problems")]),n("li",[e._v("Hybrid. For example, "),n("a",{attrs:{href:"https://github.com/airalab/sensors-connectivity",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Robonomics Connectivity")]),e._v('. Provides an address for devices on a "local" network and publishes data to a distributed IPFS message channel')])]),n("h2",{attrs:{id:"comparison-of-aws-and-robonomics-connectivity"}},[n("a",{attrs:{href:"#comparison-of-aws-and-robonomics-connectivity","aria-hidden":"true"}},[e._v("#")]),e._v("Comparison of AWS and Robonomics Connectivity")]),n("table",[n("thead",[n("tr",[n("th",[e._v("Management services")]),n("th",[e._v("AWS")]),n("th",[e._v("Robonomics")])])]),n("tbody",[n("tr",[n("td",[e._v("Transaction type")]),n("td",[e._v("Technical")]),n("td",[e._v("Technical and economic")])]),n("tr",[n("td",[e._v("Security")]),n("td",[e._v("IT-company cloud control")]),n("td",[e._v("Polkadot and Ethereum")])]),n("tr",[n("td",[e._v("Protocol")]),n("td",[e._v("HTTPS, MQTT")]),n("td",[e._v("IPFS, Robonomics")])]),n("tr",[n("td",[e._v("Ecosystem")]),n("td",[e._v("Private")]),n("td",[e._v("Shared")])]),n("tr",[n("td",[e._v("Access to DeFi")]),n("td",[e._v("No")]),n("td",[e._v("Yes")])]),n("tr",[n("td",[e._v("Costs")]),n("td",[e._v("Pushing data - $1-2 a sensor")]),n("td",[e._v("Pushing data - $0")])]),n("tr",[n("td"),n("td",[e._v("Shadow         - from $10 a month")]),n("td",[e._v("Digital Twin    - $0,01 a transaction")])])])]),n("h2",{attrs:{id:"installing-connectivity-on-aira"}},[n("a",{attrs:{href:"#installing-connectivity-on-aira","aria-hidden":"true"}},[e._v("#")]),e._v("Installing Connectivity on Aira")]),n("div",{staticClass:"youtube-embed"},[n("div",{staticStyle:{width:"100%",margin:"0 auto"}},[n("div",{staticStyle:{position:"relative","padding-bottom":"56.25%","padding-top":"25px",height:"0"}},[n("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:"https://www.youtube-nocookie.com/embed/JbBNMHAzJKM",allow:"autoplay; encrypted-media",allowfullscreen:""}})])])]),n("h3",{attrs:{id:"requirements"}},[n("a",{attrs:{href:"#requirements","aria-hidden":"true"}},[e._v("#")]),e._v("Requirements")]),n("ul",[n("li",[n("a",{attrs:{href:"https://www.virtualbox.org/wiki/Downloads",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("VirtualBox 6.1")]),e._v(" and above")]),n("li",[n("a",{attrs:{href:"https://static.aira.life/ova/airaos-21.03_robonomics-winter-school.ova",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Aira OS ova image")])])]),n("p",[e._v("Import Aira image in VirtualBox as described "),n("a",{attrs:{href:"/docs/aira-installation-on-vb/"}},[e._v("here")])]),n("p",[e._v("Set up a connection over "),n("a",{attrs:{href:"/docs/aira-connecting-via-ssh/"}},[e._v("SSH")])]),n("p",[e._v("When everything is set and you successfully log in via SSH, let's clone the main package and build it ")]),n("pre",[n("code",{pre:!0},[e._v("git clone https://github.com/airalab/sensors-connectivity\ncd sensors-connectivity\nnix build -f release.nix\n")])]),n("p",[e._v("Now let's create a copy of the default configuration file for later usage. \nTo learn about all the options check "),n("a",{attrs:{href:"/docs/configuration-options-description/"}},[e._v("this article")]),e._v(" out.\nThen launch the package with "),n("code",{pre:!0},[e._v("roslaunch")])]),n("pre",[n("code",{pre:!0},[e._v("cp config/default.json config/my.json\nsource result/setup.zsh\nroslaunch sensors_connectivity agent.launch config:=$PWD/config/my.json\n")])]),n("h2",{attrs:{id:"connect-sensor-to-connectivity"}},[n("a",{attrs:{href:"#connect-sensor-to-connectivity","aria-hidden":"true"}},[e._v("#")]),e._v("Connect Sensor to Connectivity")]),n("div",{staticClass:"youtube-embed"},[n("div",{staticStyle:{width:"100%",margin:"0 auto"}},[n("div",{staticStyle:{position:"relative","padding-bottom":"56.25%","padding-top":"25px",height:"0"}},[n("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:"https://www.youtube-nocookie.com/embed/yxqxBk-6bpI",allow:"autoplay; encrypted-media",allowfullscreen:""}})])])]),n("h3",{attrs:{id:"requirements-1"}},[n("a",{attrs:{href:"#requirements-1","aria-hidden":"true"}},[e._v("#")]),e._v("Requirements")]),n("ul",[n("li",[n("a",{attrs:{href:"https://aqicn.org/sensor/sds011",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Nova SDS011")]),e._v(" sensor ")]),n("li",[n("a",{attrs:{href:"https://yarnpkg.com/getting-started/install",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Yarn Packet Manager")])])]),n("p",[e._v("Now let's connect a real sensor, forward USB port to the virtual machine, set up a map and look at our own measurements")]),n("p",[e._v("First, stop the Aira OS if it was running and add a corresponding USB device")]),n("p",[n("g-image",{attrs:{src:o("PUd7"),alt:"VB USB Forwarding"}})],1),n("p",[e._v("Start the VM, connect via SSH and set "),n("code",{pre:!0},[e._v("comstation/port")]),e._v(" option according to your USB device in the VM. Also enable "),n("code",{pre:!0},[e._v("comstation")]),e._v(" and set your latitude and longitude. In the end "),n("code",{pre:!0},[e._v("config/my.json")]),e._v(" should look like this:")]),n("pre",[n("code",{pre:!0},[e._v('{\n   "general":{\n      "publish_interval":30\n   },\n   "comstation":{\n      "enable":true,\n      "port":"/dev/ttyUSB0",\n      "work_period":0,\n      "geo":"59.944917,30.294558",\n      "public_key":""\n   },\n   "httpstation":{\n      "enable":false,\n      "port":8001\n   },\n   "mqttstation": {\n      "enable": false,\n      "host": "connectivity.robonomics.network",\n      "port": 1883\n   },\n   "luftdaten":{\n      "enable":false\n   },\n   "robonomics":{\n      "enable":true,\n      "ipfs_provider":"/ip4/127.0.0.1/tcp/5001/http",\n      "ipfs_topic":"airalab.lighthouse.5.robonomics.eth"\n   },\n   "datalog":{\n      "enable":false,\n      "path":"",\n      "suri":"",\n      "remote":"wss://substrate.ipci.io",\n      "dump_interval":3600,\n      "temporal_username":"",\n      "temporal_password":""\n   },\n   "dev":{\n      "sentry":""\n   }\n}\n')])]),n("blockquote",[n("p",[e._v("If you don't have a real sensor, you can use "),n("code",{pre:!0},[e._v("sensors-connectivity/utils/virtual-sensor.py")]),e._v(" script to emulate one")]),n("p",[e._v("Enable "),n("code",{pre:!0},[e._v("HTTPStation")]),e._v(" and disable "),n("code",{pre:!0},[e._v("COMStation")]),e._v(" by changing the configuration file as:")]),n("pre",[n("code",{pre:!0},[e._v('{\n   "general":{\n      "publish_interval":30\n   },\n   "comstation":{\n      "enable":false,\n      "port":"/dev/ttyUSB0",\n      "work_period":0,\n      "geo":"59.944917,30.294558",\n      "public_key":""\n   },\n   "httpstation":{\n      "enable":true,\n      "port":8001\n   },\n   ...\n}\n')])]),n("p",[e._v("and launching "),n("code",{pre:!0},[e._v("utils/virtual-sensor.py")]),e._v(" in a dedicated terminal in the VM")])]),n("p",[e._v("Save the file and launch connectivity from "),n("code",{pre:!0},[e._v("sensors-connectivity")]),e._v(" folder:")]),n("pre",[n("code",{pre:!0},[e._v("source result/setup.zsh\nroslaunch sensors_connectivity agent.launch config:=$PWD/config/my.json\n")])]),n("p",[e._v("You should see first measurements in the console output")]),n("p",[e._v("Look for your IPFS ID in the VM. It appears right after booting the image or via "),n("code",{pre:!0},[e._v("ipfs id")]),e._v(" command. We will need it later.")]),n("p",[e._v("Now let's set up our own instance of the map. On your laptop (not in the VM) clone "),n("a",{attrs:{href:"https://github.com/airalab/sensors.robonomics.network",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("this")]),e._v(" repository and build the app:")]),n("pre",[n("code",{pre:!0},[e._v("git clone https://github.com/airalab/sensors.robonomics.network\ncd sensors.robonomics.network\nyarn install\n")])]),n("p",[e._v("Edit "),n("code",{pre:!0},[e._v("src/agents.json")]),e._v(" file and put your IPFS ID. For example:")]),n("pre",[n("code",{pre:!0},[e._v('[\n  "12D3KooWSCFAD3Lpew1HijniE6oFTuo4jsMwHzF87wNnXkpCRYWn"\n]\n')])]),n("p",[e._v("Launch the map:")]),n("pre",[n("code",{pre:!0},[e._v("yarn serve\n")])]),n("p",[e._v("Go to "),n("a",{attrs:{href:"http://localhost:8080/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("http://localhost:8080/")]),e._v(" or the address yarn gave you and look for the sensor.")]),n("h2",{attrs:{id:"practice"}},[n("a",{attrs:{href:"#practice","aria-hidden":"true"}},[e._v("#")]),e._v("Practice")]),n("h3",{attrs:{id:"trajectory-1-flash-a-sensor-esp--sds011"}},[n("a",{attrs:{href:"#trajectory-1-flash-a-sensor-esp--sds011","aria-hidden":"true"}},[e._v("#")]),e._v("Trajectory 1. Flash a sensor ESP + SDS011")]),n("p",[e._v("Requirements:")]),n("ul",[n("li",[e._v("ESP8266")]),n("li",[e._v("At least one of sensors SDS011, BME280, HTU21D")])]),n("p",[e._v("Use the "),n("a",{attrs:{href:"https://wiki.robonomics.network/docs/connect-sensor-to-robonomics/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("instruction")]),e._v(" to connect a sensor to Robonomics Connectivity. ")]),n("p",[e._v("Check that your sensor appears on our "),n("a",{attrs:{href:"https://sensors.robonomics.network/#/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("map")]),e._v(".")]),n("h3",{attrs:{id:"trajectory-2-launch-connectivity"}},[n("a",{attrs:{href:"#trajectory-2-launch-connectivity","aria-hidden":"true"}},[e._v("#")]),e._v("Trajectory 2. Launch Connectivity")]),n("p",[e._v("Requirements:")]),n("ul",[n("li",[e._v("ROS")]),n("li",[e._v("Python")]),n("li",[e._v("Nix (optional)")])]),n("p",[e._v("Build and launch "),n("a",{attrs:{href:"https://github.com/airalab/sensors-connectivity#get-a-package-and-build",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("sensors-connectivity")])]),n("blockquote",[n("p",[e._v("How it build, install "),n("a",{attrs:{href:"https://wiki.robonomics.network/docs/iot-sensors-connectivity/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("here")]),e._v(" and configure "),n("a",{attrs:{href:"https://wiki.robonomics.network/docs/configuration-options-description/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("here")])])]),n("p",[e._v("General scheme of the package:")]),n("pre",[n("code",{pre:!0},[e._v("    station1 \\                        / feeder1\n    station2 -  sensors-connectivity  - feeder2\n    station3 /                        \\ feeder3\n")])]),n("p",[e._v("The choice is proposed to implement either a new station, for example, a random number generator, or a new feeder, for example, displaying a string on the screen.")]),n("p",[e._v("Interface "),n("code",{pre:!0},[e._v("IStation")]),n("a",{attrs:{href:"https://github.com/airalab/sensors-connectivity/blob/master/src/stations/istation.py#L73",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("here")]),e._v(".")]),n("p",[e._v("Interface "),n("code",{pre:!0},[e._v("IFeeder")]),n("a",{attrs:{href:"https://github.com/airalab/sensors-connectivity/blob/master/src/feeders/ifeeder.py#L5",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("here")])])])}),[],!1,null,null,null);"function"==typeof c&&c(h),"function"==typeof v&&v(h);t.default=h.exports},PUd7:function(e,t){e.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/vb_forward_usb.15e281f.c901501db27dfd3335fe02e6aad25cb0.jpg",size:{width:708,height:586},sizes:"(max-width: 708px) 100vw, 708px",srcset:["/assets/static/vb_forward_usb.15e281f.c901501db27dfd3335fe02e6aad25cb0.jpg 708w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 708 586' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-4b33453b2874275aee9d1006f50f8ddf'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-4b33453b2874275aee9d1006f50f8ddf)' width='708' height='586' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAA1AEADASIAAhEBAxEB/8QAGwAAAQUBAQAAAAAAAAAAAAAAAAIDBAYHAQX/xAA8EAABAgMEBAkJCQAAAAAAAAABAAIDBBEFEiExBgdBURMyNEJEYXGx0QgUFiJSgZGUwRUYIyVUVnODk//EABgBAQADAQAAAAAAAAAAAAAAAAABAgME/8QAIhEAAgIBAwQDAAAAAAAAAAAAAAECEQMxUdESU5HBE0GB/9oADAMBAAIRAxEAPwC8QdS%2bhdpRI0ackIzojXNhhzbRNSAwUqMKHLBTZjUBoFBhNcLPm3OdgGmee0E0yqr9Y8GI2DMuAjuDogcPwYfsDLeOs4r3ZtrXtgh7Q4B1aEZEBXklF0tDODco29TKJXUJoC1jIhkZuHFLcW%2bevdTeK7VJGorQM9GnDs5U5aG0VbXgiwkcUsbUJTbzeKHAZkBgxVbZoZy3UToG1xIlZypp0p2xMnyftXpPIpz5yItSabwNWub2pSWDK/u/avf0U585E8UqHqD0AhG9Dk5wHHpbzsotSQoGh4FkRIYhRi%2bJL1EYXQZfi%2bqNtcT1r3DHZGbCuPDnVNRkcjsVEgaI2VPGZjzF%2b899COFI2VPN31Xs6NaM2bYs2%2bZs%2b9fe3giTFLxTPIgUyWmRKzhwzzuk4Lp3v1XsY%2b0LZN78kmziQCTDx3bE8y1bUAaHaNzDiOdwjR9FcBkEKlrY1%2bHJ3H4XBVBbVrHPR2aH9o8EybftkEj0Wnj18MzwVxQlrYPDl7j8R4Kd6QWz%2b1Z7/Zngp1l2rOzLnieseYkAC1rTFiNN4knu%2bqsahWm0kS9Gk0itOAaadeP0xRtbEww5FK3kb/FwOWcAJCXoAKw21%2bCVM5w%2b09xXLO5BLfxt7l2Zzh9p7ioNvofGQQgZBCFgQhCAEzMtvXMcjVPJqPzfegIksxvm8H1RxG9wTga0GoGKEIRSFV6yip3lCEJCp3lcJIGZ%2bKEIBF5wJNSQ44D2fFcAffLi8lhwDaZe9CEB/9k=' /%3e%3c/svg%3e"}},UQSp:function(e,t,o){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}}}]);