(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{"4Mnt":function(t,o,e){t.exports=e.p+"assets/img/working.c2a72d77.jpg"},"53Q/":function(t,o,e){t.exports=e.p+"assets/img/waiting.b2f892d5.jpg"},"9mp+":function(t,o,e){t.exports=e.p+"assets/img/rob_message.e26419da.jpg"},ExEK:function(t,o,e){t.exports=e.p+"assets/img/baxter_simulation.17b89235.jpg"},FC5s:function(t,o,e){t.exports=e.p+"assets/img/datalog.677c61f5.jpg"},M6Zx:function(t,o,e){t.exports=e.p+"assets/img/result2.bc04ab47.jpg"},SCgq:function(t,o,e){t.exports=e.p+"assets/img/empty_world.6c71b443.jpg"},UQSp:function(t,o,e){"use strict";o.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},b5cV:function(t,o,e){t.exports=e.p+"assets/img/ipfs.6b7fe2b9.jpg"},jhCo:function(t,o,e){t.exports=e.p+"assets/img/local_node.93af06c2.jpg"},nZX3:function(t,o,e){t.exports=e.p+"assets/img/robonomics.ca4f6ba1.jpg"},psqD:function(t,o,e){"use strict";e.r(o);var r=e("KHd+"),a=e("UQSp"),s=e("Kw5r");function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}s.a.config.optionMergeStrategies;var i={VueRemarkRoot:a.a},l=function(t){var o=t.options.components=t.options.components||{},e=t.options.computed=t.options.computed||{};Object.keys(i).forEach((function(t){"object"===n(i[t])&&"function"==typeof i[t].render||"function"==typeof i[t]&&"function"==typeof i[t].options.render?o[t]=i[t]:e[t]=function(){return i[t]}}))},c=s.a.config.optionMergeStrategies,p="__vueRemarkFrontMatter",d={excerpt:null,title:"Control Baxter robot with robonomics",contributors:["nakata5321","Vourhey"],translated:!1};var u=function(t){t.options[p]&&(t.options[p]=d),s.a.util.defineReactive(t.options,p,d),t.options.computed=c.computed({$frontmatter:function(){return t.options[p]}},t.options.computed)},_=Object(r.a)({},(function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("VueRemarkRoot",[r("p",[t._v("Example of how it works:")]),r("div",{staticClass:"youtube-embed"},[r("div",{staticStyle:{width:"100%",margin:"0 auto"}},[r("div",{staticStyle:{position:"relative","padding-bottom":"56.25%","padding-top":"25px",height:"0"}},[r("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:"https://www.youtube-nocookie.com/embed/AeufQmaNRWk",allow:"autoplay; encrypted-media",allowfullscreen:""}})])])]),r("h2",{attrs:{id:"requirements"}},[r("a",{attrs:{href:"#requirements","aria-hidden":"true"}},[t._v("#")]),t._v("Requirements:")]),r("ul",[r("li",[t._v("Ubuntu 18.04")]),r("li",[t._v("ROS Melodic + Gazebo (installation manual "),r("a",{attrs:{href:"http://wiki.ros.org/melodic/Installation",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("here")]),t._v(")  ")]),r("li",[t._v("extra packages:")])]),r("pre",[r("code",{pre:!0,attrs:{class:"hljs language-sh"}},[t._v("sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effort-controllers ros-melodic-joint-state-controller")])]),r("ul",[r("li",[t._v("IPFS 0.4.22 (download from "),r("a",{attrs:{href:"https://dist.ipfs.io/go-ipfs/v0.4.22/go-ipfs_v0.4.22_linux-386.tar.gz",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("here")]),t._v(" and install)")]),r("li",[t._v("pip:")])]),r("pre",[r("code",{pre:!0,attrs:{class:"hljs language-sh"}},[t._v("sudo apt install python-pip")])]),r("ul",[r("li",[t._v("ipfshttpclient:")])]),r("pre",[r("code",{pre:!0,attrs:{class:"hljs language-sh"}},[t._v("pip install ipfshttpclient")])]),r("ul",[r("li",[t._v("Robonomics node (binary file) (download latest "),r("a",{attrs:{href:"https://github.com/airalab/robonomics/releases",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("release")]),t._v(" here)")]),r("li",[t._v("Create "),r("strong",[t._v("Baxter")]),t._v(" and "),r("strong",[t._v("Employer")]),t._v(" accounts  on "),r("strong",[t._v("Robonomics Portal")]),r("br"),t._v("\n(you can find tutorial "),r("a",{attrs:{href:"/docs/create-account-in-dapp"}},[t._v('"Create an Account on Robonomics Portal"')]),t._v(" here).")]),r("li",[t._v("IPFS browser extension (not necessary)")])]),r("h2",{attrs:{id:"1-download-baxter-model-and-controller-packages"}},[r("a",{attrs:{href:"#1-download-baxter-model-and-controller-packages","aria-hidden":"true"}},[t._v("#")]),t._v("1. Download Baxter model and controller packages")]),r("p",[t._v("Download packages:")]),r("pre",[r("code",{pre:!0,attrs:{class:"hljs language-sh"}},[r("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("cd")]),t._v(" ~\nmkdir -p robot_ws/src\n"),r("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("cd")]),t._v(" robot_ws/src\ngit "),r("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("clone")]),t._v(" https://github.com/nakata5321/Baxter_simulation_controller.git\n"),r("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("cd")]),t._v(" Baxter_simulation_controller\ngit checkout old_version\n"),r("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("cd")]),t._v(" ../..\ncatkin build")])]),r("p",[t._v("Dont forget to add source command:")]),r("pre",[r("code",{pre:!0,attrs:{class:"hljs language-sh"}},[r("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("echo")]),t._v(" "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"source /home/'),r("span",{pre:!0,attrs:{class:"hljs-variable"}},[t._v("$USER")]),t._v('/robot_ws/devel/setup.bash"')]),t._v(" >> ~/.bashrc\n"),r("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("source")]),t._v(" ~/.bashrc")])]),r("h2",{attrs:{id:"2-create-simulation-world"}},[r("a",{attrs:{href:"#2-create-simulation-world","aria-hidden":"true"}},[t._v("#")]),t._v("2. Create simulation world")]),r("p",[t._v("Let's start gazebo world and put our baxter in it:")]),r("pre",[r("code",{pre:!0,attrs:{class:"hljs language-sh"}},[t._v("roslaunch gazebo_ros empty_world.launch")])]),r("p",[r("img",{attrs:{src:e("SCgq"),alt:"empty world"}})]),r("p",[t._v("Open one more window in terminal:")]),r("pre",[r("code",{pre:!0,attrs:{class:"hljs language-sh"}},[t._v("rosrun gazebo_ros spawn_model -file `rospack find baxter_description`/urdf/baxter.urdf -urdf -z 1 -model baxter")])]),r("p",[t._v("You can put some models in front of our baxter. It will be more intresting.\n"),r("img",{attrs:{src:e("ExEK"),alt:"baxter"}})]),r("h2",{attrs:{id:"3manage-accounts-in-dapp"}},[r("a",{attrs:{href:"#3manage-accounts-in-dapp","aria-hidden":"true"}},[t._v("#")]),t._v("3.Manage accounts in DAPP")]),r("p",[t._v("Since we are testing, let us create a local robonomics network with robonomics binary file. Go to folder with robonomics file and run:")]),r("pre",[r("code",{pre:!0,attrs:{class:"hljs language-sh"}},[t._v("./robonomics --dev --rpc-cors all")])]),r("p",[r("img",{attrs:{src:e("nZX3"),alt:"robonomics"}})]),r("p",[t._v("Don't forget to remove "),r("code",{pre:!0},[t._v("db")]),t._v(" folder after every launch:")]),r("pre",[r("code",{pre:!0,attrs:{class:"hljs language-sh"}},[t._v("rm -rf /home/"),r("span",{pre:!0,attrs:{class:"hljs-variable"}},[t._v("$USER")]),t._v("/."),r("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("local")]),t._v("/share/robonomics/chains/dev/db")])]),r("p",[t._v("Go to "),r("a",{attrs:{href:"https://parachain.robonomics.network",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("https://parachain.robonomics.network")]),t._v(" and switch to local node\n"),r("img",{attrs:{src:e("jhCo"),alt:"local node"}})]),r("p",[t._v("Go to Accounts and transfer some money to "),r("strong",[t._v("Baxter")]),t._v(" and "),r("strong",[t._v("Employer")]),t._v(" accounts.")]),r("p",[t._v('You can find The manual "Create an Account on Robonomics Portal" '),r("a",{attrs:{href:"/docs/create-account-in-dapp"}},[t._v("here.")])]),r("p",[t._v("Add Baxter's secret key and adress to "),r("code",{pre:!0},[t._v("configuration.txt")]),t._v(" in "),r("code",{pre:!0},[t._v("robot_ws/src/robot_controller/src/")])]),r("h2",{attrs:{id:"4start-simulation"}},[r("a",{attrs:{href:"#4start-simulation","aria-hidden":"true"}},[t._v("#")]),t._v("4.Start simulation")]),r("p",[t._v("In new window run:")]),r("pre",[r("code",{pre:!0,attrs:{class:"hljs language-sh"}},[t._v("ifps init "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("#you only need to do this once")]),t._v("\nipfs daemon")])]),r("p",[t._v("Open separate terminal and start "),r("em",[t._v("controller package")]),t._v(":")]),r("pre",[r("code",{pre:!0,attrs:{class:"hljs language-sh"}},[t._v("rosrun robot_controller robot_control.py")])]),r("p",[r("img",{attrs:{src:e("53Q/"),alt:"waiting"}})]),r("p",[t._v("Return to the first terminal, open new window and send command to "),r("a",{attrs:{href:"/docs/rio-overview"}},[r("strong",[t._v("robonomics io")])]),t._v(". This command will turn ON your robot:")]),r("pre",[r("code",{pre:!0,attrs:{class:"hljs language-sh"}},[r("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("echo")]),t._v(" "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"ON"')]),t._v(" | ./robonomics io write launch -r <CURIOSITY ADDRESS> -s <EMPLOYER’S KEY>")])]),r("p",[t._v("Where "),r("code",{pre:!0},[t._v("<CURIOSITY ADDRESS>")]),t._v(" and "),r("code",{pre:!0},[t._v("<EMPLOYER’S KEY>")]),t._v(" are replaced with previously saved strings accordingly")]),r("p",[r("img",{attrs:{src:e("9mp+"),alt:"rob_message"}})]),r("p",[t._v("You should see the following:")]),r("p",[r("img",{attrs:{src:e("4Mnt"),alt:"working"}})]),r("p",[t._v("when the work is over go to the Robonomics Portal to "),r("code",{pre:!0},[t._v("Developer > Chain state")]),t._v(". Choose "),r("em",[t._v("datalog")]),t._v(" in "),r("strong",[t._v("state query")]),t._v(' and add Baxter datalog message using "+" button.')]),r("p",[r("img",{attrs:{src:e("FC5s"),alt:"datalog"}})]),r("p",[t._v("Now the IPFS hash of the telemetry and photos is saved in the blockchain. To see the data simply copy the hash and insert it in IPFS Companion:")]),r("p",[r("img",{attrs:{src:e("b5cV"),alt:"ipfs"}})]),r("p",[t._v("Click  "),r("strong",[t._v("View on Gateway")]),t._v(" and that's all!")]),r("p",[r("img",{attrs:{src:e("xuxU"),alt:"result1"}}),r("img",{attrs:{src:e("M6Zx"),alt:"result2"}})])])}),[],!1,null,null,null);"function"==typeof l&&l(_),"function"==typeof u&&u(_);o.default=_.exports},xuxU:function(t,o,e){t.exports=e.p+"assets/img/result1.af0479dc.jpg"}}]);