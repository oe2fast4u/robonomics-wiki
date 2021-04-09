(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{UQSp:function(s,t,e){"use strict";t.a={name:"VueRemarkRoot",render:function(s){return s("div",null,this.$slots.default)}}},jd9w:function(s,t,e){"use strict";e.r(t);var a=e("KHd+"),n=e("UQSp"),r=e("Kw5r");function l(s){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(s){return typeof s}:function(s){return s&&"function"==typeof Symbol&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s})(s)}r.a.config.optionMergeStrategies;var o={VueRemarkRoot:n.a},p=function(s){var t=s.options.components=s.options.components||{},e=s.options.computed=s.options.computed||{};Object.keys(o).forEach((function(s){"object"===l(o[s])&&"function"==typeof o[s].render||"function"==typeof o[s]&&"function"==typeof o[s].options.render?t[s]=o[s]:e[s]=function(){return o[s]}}))},i=r.a.config.optionMergeStrategies,c="__vueRemarkFrontMatter",_={excerpt:null,title:"Passing dynamic parameters",contributors:["ensrationis","akru"],translated:!1};var v=function(s){s.options[c]&&(s.options[c]=_),r.a.util.defineReactive(s.options,c,_),s.options.computed=i.computed({$frontmatter:function(){return s.options[c]}},s.options.computed)},d=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("VueRemarkRoot",[e("p",[s._v("In "),e("a",{attrs:{href:"/docs/connect-simple-cps/"}},[s._v("previous")]),s._v(" example we discussed how to create a simple CPS with Arduino. Our first CPS is able to do only one task: to blink a led. We suggest you to get through the first lesson. Now let's expand the example and teach our board to blink blue or red led depending on objective parameter.")]),e("blockquote",[e("p",[s._v("The source code of this lesson is "),e("a",{attrs:{href:"https://github.com/airalab/robonomics_tutorials/tree/master/arduino_with_args",target:"_blank",rel:"nofollow noopener noreferrer"}},[s._v("here")]),s._v(".")])]),e("h2",{attrs:{id:"arduino"}},[e("a",{attrs:{href:"#arduino","aria-hidden":"true"}},[s._v("#")]),s._v("Arduino")]),e("p",[s._v("The only difference in Arduino source code is instead of subscribing to one topic now we subscribe to "),e("code",{pre:!0},[s._v("/blink_red")]),s._v(" and "),e("code",{pre:!0},[s._v("/blink_blue")]),s._v(" topics")]),e("pre",[e("code",{pre:!0,attrs:{class:"hljs language-c"}},[s._v("  "),e("span",{pre:!0,attrs:{class:"hljs-meta"}},[s._v("#"),e("span",{pre:!0,attrs:{class:"hljs-meta-keyword"}},[s._v("include")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-meta-string"}},[s._v("<ros.h>")])]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-meta"}},[s._v("#"),e("span",{pre:!0,attrs:{class:"hljs-meta-keyword"}},[s._v("include")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-meta-string"}},[s._v("<std_msgs/Empty.h>")])]),s._v("\n\n  ros::NodeHandle nh;\n\n  "),e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("void")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("blink")]),e("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("("),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("int")]),s._v(" led, "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("int")]),s._v(" mil)")]),s._v(" ")]),s._v("{\n\n    digitalWrite(led, HIGH);\n    delay(mil);\n    digitalWrite(led, LOW);\n    delay(mil);\n\n  }\n\n  "),e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("void")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("blinkRedCb")]),e("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("("),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" std_msgs::Empty& msg)")]),s._v(" ")]),s._v("{\n    blink("),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("13")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("500")]),s._v(");\n    blink("),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("13")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("500")]),s._v(");\n    blink("),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("13")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("500")]),s._v(");\n  }\n\n  "),e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("void")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("blinkBlueCb")]),e("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("("),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" std_msgs::Empty& msg)")]),s._v(" ")]),s._v("{\n    blink("),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("12")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("500")]),s._v(");\n    blink("),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("12")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("500")]),s._v(");\n    blink("),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("12")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("500")]),s._v(");\n  }\n\n  "),e("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("ros::Subscriber<std_msgs::Empty> "),e("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("subRed")]),e("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"blink_red"')]),s._v(", &blinkRedCb)")])]),s._v(";\n  "),e("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("ros::Subscriber<std_msgs::Empty> "),e("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("subBlue")]),e("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"blink_blue"')]),s._v(", &blinkBlueCb)")])]),s._v(";\n\n  "),e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("void")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("setup")]),e("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("()")]),s._v("\n  ")]),s._v("{\n    pinMode("),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("13")]),s._v(", OUTPUT);\n    pinMode("),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("12")]),s._v(", OUTPUT);\n\n    nh.initNode();\n    nh.subscribe(subRed);\n    nh.subscribe(subBlue);\n  }\n\n  "),e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("void")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("loop")]),e("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("()")]),s._v("\n  ")]),s._v("{\n    nh.spinOnce();\n    delay("),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(");\n  }")])]),e("h2",{attrs:{id:"ros"}},[e("a",{attrs:{href:"#ros","aria-hidden":"true"}},[s._v("#")]),s._v("ROS")]),e("p",[s._v("We can pass arguments via objective which points to rosbag file. Have a look at "),e("code",{pre:!0},[s._v("blink.py")]),s._v(" script. The main difference is "),e("code",{pre:!0},[s._v("blink()")]),s._v(" method:")]),e("pre",[e("code",{pre:!0,attrs:{class:"hljs language-python"}},[e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("def")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("blink")]),s._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("self, data")]),s._v("):")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" data.data == "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"blue"')]),s._v(":\n      rospy.loginfo("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Blinking blue..."')]),s._v(")\n      self.blink_blue.publish(Empty())\n\n  "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" data.data == "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"red"')]),s._v(":\n      rospy.loginfo("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Blinking red..."')]),s._v(")\n      self.blink_red.publish(Empty())\n\n  rospy.wait_for_service("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'/liability/finish'")]),s._v(")\n  fin = rospy.ServiceProxy("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'/liability/finish'")]),s._v(", FinishLiability)\n  fin(FinishLiabilityRequest(address=self.liability, success="),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("True")]),s._v("))\n  rospy.loginfo("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Finished"')]),s._v(")")])]),e("p",[s._v("Now "),e("code",{pre:!0},[s._v("/blink")]),s._v(" topic has a "),e("code",{pre:!0},[s._v("String")]),s._v(" type. You can find prepared rosbags in "),e("code",{pre:!0},[s._v("rosbag")]),s._v(" folder.")]),e("h2",{attrs:{id:"aira"}},[e("a",{attrs:{href:"#aira","aria-hidden":"true"}},[s._v("#")]),s._v("AIRA")]),e("p",[s._v("Connect to AIRA client via SSH as described "),e("a",{attrs:{href:"/docs/aira-connecting-via-ssh/"}},[s._v("here")]),s._v(". Do not forget to add "),e("code",{pre:!0},[s._v("COM1")]),s._v(" port in settings. Run the following command:")]),e("pre",[e("code",{pre:!0},[s._v("$ rosrun arduino_with_args blink.py\n")])]),e("p",[s._v("Also we need to add rosbag files to IPFS:")]),e("pre",[e("code",{pre:!0},[s._v("$ ipfs add rosbag/blink_blue.bag\n$ ipfs add rosbag/blink_red.bag\n")])]),e("p",[e("strong",[s._v("Before the next step you should approve XRT tokens on the Factory.")])]),e("p",[s._v("The last step is to build Dapp and launch. Take a look at the previous "),e("a",{attrs:{href:"/docs/connect-simple-cps/"}},[s._v("lesson")]),s._v(". To make Arduino blink the blue led send blue demand and blue offer messages. For the red one send corresponding messages.")]),e("p",[s._v("That's it! Now you are able to pass dynamic parameters to your cyber-physical system agent!")])])}),[],!1,null,null,null);"function"==typeof p&&p(d),"function"==typeof v&&v(d);t.default=d.exports}}]);