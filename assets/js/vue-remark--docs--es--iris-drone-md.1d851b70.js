(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{"4qgL":function(e,t,a){"use strict";a.r(t);var o=a("KHd+"),A=a("UQSp"),s=a("Kw5r");function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}s.a.config.optionMergeStrategies;var n={VueRemarkRoot:A.a},r=function(e){var t=e.options.components=e.options.components||{},a=e.options.computed=e.options.computed||{};Object.keys(n).forEach((function(e){"object"===i(n[e])&&"function"==typeof n[e].render||"function"==typeof n[e]&&"function"==typeof n[e].options.render?t[e]=n[e]:a[e]=function(){return n[e]}}))},c=s.a.config.optionMergeStrategies,g="__vueRemarkFrontMatter",l={excerpt:null,title:"Drone control with robonomics",contributors:["tubleronchik","Vourhey"],translated:!1};var p=function(e){e.options[g]&&(e.options[g]=l),s.a.util.defineReactive(e.options,g,l),e.options.computed=c.computed({$frontmatter:function(){return e.options[g]}},e.options.computed)},d=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("VueRemarkRoot",[o("p",[o("strong",[e._v("Drone starts moving after transcation and store file with the coordinates in IPFS. The control script is based on the "),o("a",{attrs:{href:"https://github.com/generalized-intelligence/GAAS",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("GAAS demo script")])])]),o("div",{staticClass:"youtube-embed"},[o("div",{staticStyle:{width:"100%",margin:"0 auto"}},[o("div",{staticStyle:{position:"relative","padding-bottom":"56.25%","padding-top":"25px",height:"0"}},[o("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:"https://www.youtube-nocookie.com/embed/4CwtGAX1OwM",allow:"autoplay; encrypted-media",allowfullscreen:""}})])])]),o("h2",{attrs:{id:"requirements"}},[o("a",{attrs:{href:"#requirements","aria-hidden":"true"}},[e._v("#")]),e._v("Requirements")]),o("ul",[o("li",[e._v("dependencies for control:")])]),o("pre",[o("code",{pre:!0,attrs:{class:"hljs language-sh"}},[e._v("sudo apt install -y \\\n\tpython3-pip \\\n\tninja-build \\\n\texiftool \\\n\tpython-argparse \\\n\tpython-empy \\\n\tpython-toml \\\n\tpython-numpy \\\n\tpython-yaml \\\n\tpython-dev \\\n\tpython-pip \\\n\tninja-build \\\n\tprotobuf-compiler \\\n\tlibeigen3-dev \\\n\tgenromfs")])]),o("pre",[o("code",{pre:!0,attrs:{class:"hljs language-sh"}},[e._v("pip3 install \\\n\tpandas \\\n\tjinja2 \\\n\tpyserial \\\n\tcerberus \\\n\tpyulog \\\n\tnumpy \\\n\ttoml \\\n\tpyquaternion")])]),o("ul",[o("li",[e._v("ROS Melodic + Gazebo "),o("a",{attrs:{href:"http://wiki.ros.org/melodic/Installation",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("installation tutorial")])]),o("li",[e._v("extra packages: ")])]),o("pre",[o("code",{pre:!0,attrs:{class:"hljs language-bash"}},[e._v("sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effort-controllers ros-melodic-joint-state-controller\nsudo apt-get install python-jinja2\nsudo apt-get install python-catkin-pkg\nsudo apt-get install python3-catkin-pkg-modules")])]),o("ul",[o("li",[e._v("IPFS verson 0.4.22")])]),o("pre",[o("code",{pre:!0,attrs:{class:"hljs language-bash"}},[e._v("wget https://dist.ipfs.io/go-ipfs/v0.4.22/go-ipfs_v0.4.22_linux-amd64.tar.gz\ntar -xvzf go-ipfs_v0.4.22_linux-amd64.tar.gz\n"),o("span",{pre:!0,attrs:{class:"hljs-built_in"}},[e._v("cd")]),e._v(" go-ipfs\nsudo bash install.sh\nipfs init")])]),o("ul",[o("li",[e._v("ipfshttpclient")])]),o("pre",[o("code",{pre:!0,attrs:{class:"hljs language-sh"}},[e._v("pip3 install ipfshttpclient")])]),o("ul",[o("li",[e._v("Robonomics node (binary file) (download latest release "),o("a",{attrs:{href:"https://github.com/airalab/robonomics/releases",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("here")]),e._v(")")])]),o("h2",{attrs:{id:"environment-setup"}},[o("a",{attrs:{href:"#environment-setup","aria-hidden":"true"}},[e._v("#")]),e._v("Environment Setup")]),o("pre",[o("code",{pre:!0,attrs:{class:"hljs language-bash"}},[e._v("sudo apt-get install ros-melodic-mavros ros-melodic-mavros-extras\nwget https://raw.githubusercontent.com/mavlink/mavros/master/mavros/scripts/install_geographiclib_datasets.sh\nsudo ./install_geographiclib_datasets.sh\n"),o("span",{pre:!0,attrs:{class:"hljs-built_in"}},[e._v("cd")]),e._v(" ~/catkin_ws/src\ngit "),o("span",{pre:!0,attrs:{class:"hljs-built_in"}},[e._v("clone")]),e._v(" https://github.com/PX4/Firmware.git\n"),o("span",{pre:!0,attrs:{class:"hljs-built_in"}},[e._v("cd")]),e._v(" Firmware\ngit checkout v1.9.0\nbash ./Tools/setup/ubuntu.sh")])]),o("pre",[o("code",{pre:!0,attrs:{class:"hljs language-bash"}},[o("span",{pre:!0,attrs:{class:"hljs-built_in"}},[e._v("cd")]),e._v(" ~/catkin_ws/src\ngit "),o("span",{pre:!0,attrs:{class:"hljs-built_in"}},[e._v("clone")]),e._v(" https://github.com/generalized-intelligence/GAAS.git\ncp -r ~/catkin_ws/src/GAAS/simulator/models/* ~/catkin_ws/src/Firmware/Tools/sitl_gazebo/models/\ncp -r ~/catkin_ws/src/GAAS/simulator/worlds/* ~/catkin_ws/src/Firmware/Tools/sitl_gazebo/worlds/\ncp -r ~/catkin_ws/src/GAAS/simulator/posix-config/* ~/catkin_ws/src/Firmware/posix-configs/SITL/init/ekf2/")])]),o("p",[e._v("Modifying your "),o("code",{pre:!0},[e._v(".bashrc")]),e._v(" file, adding the following lines to the bottom:  ")]),o("p",[o("code",{pre:!0},[e._v("source ~/catkin_ws/devel/setup.bash")]),o("br"),o("code",{pre:!0},[e._v("source ~/catkin_ws/src/Firmware/Tools/setup_gazebo.bash ~/catkin_ws/src/Firmware/ ~/catkin_ws/src/Firmware/build posix_sitl_default")]),o("br"),o("code",{pre:!0},[e._v("export GAZEBO_MODEL_PATH=:~/catkin_ws/src/simulator/models")]),o("br"),o("code",{pre:!0},[e._v("export ROS_PACKAGE_PATH=$ROS_PACKAGE_PATH:~/catkin_ws/src/Firmware")]),o("br"),o("code",{pre:!0},[e._v("export ROS_PACKAGE_PATH=$ROS_PACKAGE_PATH:~/catkin_ws/src/Firmware/Tools/sitl_gazebo")]),o("br"),o("code",{pre:!0},[e._v("export GAZEBO_MODEL_PATH=:~/catkin_ws/src/simulator/models:~/catkin_ws/src/GAAS/simulator/models")])]),o("h2",{attrs:{id:"control-package-installation"}},[o("a",{attrs:{href:"#control-package-installation","aria-hidden":"true"}},[e._v("#")]),e._v("Control Package Installation")]),o("p",[e._v("In a new Terminal:")]),o("pre",[o("code",{pre:!0,attrs:{class:"hljs language-bash"}},[o("span",{pre:!0,attrs:{class:"hljs-built_in"}},[e._v("cd")]),e._v(" catkin_ws/src\ngit "),o("span",{pre:!0,attrs:{class:"hljs-built_in"}},[e._v("clone")]),e._v(" https://github.com/tubleronchik/robonomics_drone_sim.git\n"),o("span",{pre:!0,attrs:{class:"hljs-built_in"}},[e._v("cd")]),e._v(" ..\ncatkin build")])]),o("h2",{attrs:{id:"robonomics-network"}},[o("a",{attrs:{href:"#robonomics-network","aria-hidden":"true"}},[e._v("#")]),e._v("Robonomics Network")]),o("p",[e._v("To create a local robonomics network go to the folder with the robonomic binary file and run:"),o("br"),o("code",{pre:!0},[e._v("./robonomics --dev --rpc-cors all")])]),o("p",[e._v("Add robonomic's path to "),o("code",{pre:!0},[e._v("config.py")])]),o("p",[o("g-image",{attrs:{src:a("6sh4"),alt:"IPFS"}})],1),o("p",[e._v("Go to the "),o("a",{attrs:{href:"https://parachain.robonomics.network",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Robonomics Portal")]),e._v(" and switch to local node.\n"),o("g-image",{attrs:{src:a("bANc"),alt:"localNode"}})],1),o("p",[e._v("Go to "),o("strong",[e._v("Accounts")]),e._v(" and create "),o("strong",[e._v("DRONE")]),e._v(" and "),o("strong",[e._v("EMPLOYER")]),e._v(" accounts. Save the account names and keys and path to "),o("strong",[e._v("robonomics")]),e._v(" to "),o("code",{pre:!0},[e._v("~/catkin_ws/src/drone_sim/src/config.py")]),e._v(". Transfer some money into the accounts.")]),o("p",[o("g-image",{attrs:{src:a("lw5w"),alt:"accounts"}})],1),o("h2",{attrs:{id:"running-simulation"}},[o("a",{attrs:{href:"#running-simulation","aria-hidden":"true"}},[e._v("#")]),e._v("Running Simulation")]),o("p",[e._v("Run IPFS daemon")]),o("pre",[o("code",{pre:!0,attrs:{class:"hljs language-bash"}},[o("span",{pre:!0,attrs:{class:"hljs-built_in"}},[e._v("cd")]),e._v(" go-ipfs\nipfs daemon")])]),o("p",[e._v("In another terminal launch the simulation:")]),o("pre",[o("code",{pre:!0,attrs:{class:"hljs language-bash"}},[e._v("roslaunch px4 mavros_posix_sitl.launch\n"),o("span",{pre:!0,attrs:{class:"hljs-built_in"}},[e._v("cd")]),e._v(" ~/catkin_ws/src/robonomics_drone_sim/src\npython3 takeoff.py")])]),o("p",[e._v('Waiting till "Waiting for payment" ')]),o("p",[o("g-image",{attrs:{src:a("vRJ9"),alt:"launch"}})],1),o("p",[e._v("To send a transaction run in another window:\n"),o("code",{pre:!0},[e._v('echo "ON" | ./robonomics io write launch -r <drone_addres> -s <employer_key>')]),e._v(" - where "),o("strong",[e._v("<drone_address>")]),e._v(" and "),o("strong",[e._v("<employer_key>")]),e._v(" should be replaced with the strings from "),o("code",{pre:!0},[e._v("config.py")]),e._v(" accordingly.")]),o("p",[e._v("After data was pushed to IPFS, go to the "),o("strong",[e._v("Chain State")]),e._v(" in "),o("a",{attrs:{href:"https://parachain.robonomics.network",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Robonomics Portal")]),e._v(". Select "),o("strong",[e._v("datalog")]),e._v(" in query and add DRONE datalog using "),o("code",{pre:!0},[e._v("+")]),e._v(" button.")]),o("p",[o("g-image",{attrs:{src:a("PKdQ"),alt:"datalog"}})],1),o("p",[e._v("You can find drone's telemetry running "),o("code",{pre:!0},[e._v("https://gateway.ipfs.io/ipfs/<hash>")]),e._v(" inserting the hash from above.")]),o("p",[o("g-image",{attrs:{src:a("A5On"),alt:"output"}})],1),o("p",[e._v("It's important to remove "),o("code",{pre:!0},[e._v("db")]),e._v(" derictory before next launches using"),o("br"),o("code",{pre:!0},[e._v("rm -rf ~/.local/share/robonomics/chains/dev/db")])])])}),[],!1,null,null,null);"function"==typeof r&&r(d),"function"==typeof p&&p(d);t.default=d.exports},"6sh4":function(e,t){e.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/IPFS.ee2b1cb.702824e89eb3a006934c45809ddff1a2.jpg",size:{width:1737,height:592},sizes:"(max-width: 1737px) 100vw, 1737px",srcset:["/assets/static/IPFS.82a2fbd.702824e89eb3a006934c45809ddff1a2.jpg 480w","/assets/static/IPFS.cbab2cf.702824e89eb3a006934c45809ddff1a2.jpg 1024w","/assets/static/IPFS.ee2b1cb.702824e89eb3a006934c45809ddff1a2.jpg 1737w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 1737 592' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-35503bcf9a8e6d31c4ac408d5c9d31a3'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-35503bcf9a8e6d31c4ac408d5c9d31a3)' width='1737' height='592' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAWAEADASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAAMCBAUBCP/EADAQAAEDAwICBgsBAAAAAAAAAAEAAgMEESESEzFRI0FxgcHRMjNhY3KRkpOhorHh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEQMRAD8A8308bHukDmg6W4xwyFGWnjLrmIcON7fhNpPTl56cDvC6%2b44O0kcLqQZ0lDI5xLdto5AlIkp3xsLnEY6r5V/Xqwatjeq23dQe2KV1pKuLtMVlRm5RlXCKcA2qGE8tlQGix6WL7Z8kFbKLnmnuZG4kmeMdjCPBKLAB6xh%2bfkg2qQ2leRizTkDPUO5dfweRggXuhCCcGsNcdY%2bn/USU7nu1dAb5u6O5/qEIEupTtOOmnx7u3ikNo3lpO3T4%2bJCEAKN%2blx26f9lWfAQxx0R49pQhB//Z' /%3e%3c/svg%3e"}},A5On:function(e,t){e.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/output.7bb6046.3fda5bedbfc8286a68096302227f39c0.jpg",size:{width:1008,height:1021},sizes:"(max-width: 1008px) 100vw, 1008px",srcset:["/assets/static/output.82a2fbd.3fda5bedbfc8286a68096302227f39c0.jpg 480w","/assets/static/output.7bb6046.3fda5bedbfc8286a68096302227f39c0.jpg 1008w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 1008 1021' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-61851fff53605c880fb5cc941280a05e'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-61851fff53605c880fb5cc941280a05e)' width='1008' height='1021' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCABBAEADASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAUEAwYI/8QANBAAAQMCBAMECAcBAAAAAAAAAQACEQMFBBIUITFBYVGRsdETIjRScXKTohUyMzVikqHC/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APoW4XOrRqim2i1zMo3ObmOhS3VaNak%2brXpPJDoGSq4fH8zvBYbqSMaIHBjStVqcdFUhpbD94MTt8UFPC6OvUDG06jSRtNaZ7nFbNDh/df8AUd5rFb51LZLyN95PHvVZBl0GH91/1Hea6tw9NrQADA6ldUQc/Qs696ehZ1710RB4y7OGr3BgNB5b7LbaWn8Pqw0kGpwEmD3FYrrOqgDi0cTzW%2b2NcLXmc3NmqEtgSOX8Sg228EYpmzxE8WEcu3KFXUm2sOqnKGgN7IJ%2bweKrICIiAiIg8ZdJ1Ug7wI3W63wbWCQ0kVDm/wA7QsF0zaqQWjYRJW%2b3DJamNMfqO5x2dQg32wN1MxBLTAEeSrKVa4diDJktbMhwI8SqqAiIgIiIPF3TNq5GX1QNyDsqWAcRbabgdi8u4x/0FNuRIxriPdE7KjbXOFrpkE%2btUdzPTqgoWp2ao71wYHDMTP3FU1LtkuxBzEmG9p81UQEREBERB4a8e2/18CquA/a6Xzu8URBQtftLvk8lUREBERAREQf/2Q==' /%3e%3c/svg%3e"}},PKdQ:function(e,t){e.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/datalog.917f9d2.e49b9e677275ddd00c56d05e83301788.jpg",size:{width:1902,height:466},sizes:"(max-width: 1902px) 100vw, 1902px",srcset:["/assets/static/datalog.82a2fbd.e49b9e677275ddd00c56d05e83301788.jpg 480w","/assets/static/datalog.cbab2cf.e49b9e677275ddd00c56d05e83301788.jpg 1024w","/assets/static/datalog.917f9d2.e49b9e677275ddd00c56d05e83301788.jpg 1902w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 1902 466' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-eec99d32f7f51334c9c13d842812ddd7'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-eec99d32f7f51334c9c13d842812ddd7)' width='1902' height='466' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAQAEADASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAgMAAQQI/8QAKBAAAgECBQMDBQAAAAAAAAAAAQIAERIDITFSkRMyUQQiYUJxkqHR/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEREv/aAAwDAQACEQMRAD8A6ZRVbEaiipOdGP8AY0YQ%2bqhOmTERS%2b0krkTqRlWFe%2b5uZmItZdqA9uJllq0tMJDQgNl5YiDe25uZL23NzGUWsd0x4H5Qegta0Ote8xd77m5kvfc3MZQrGlABW39zP6jCwCpZsNmpqEY1z%2b0O9tzcwfPzr8yZQrP/2Q==' /%3e%3c/svg%3e"}},UQSp:function(e,t,a){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},bANc:function(e,t){e.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/localNode.4445e3a.12e13ba4ff34d7ff8296889bb7b817ea.jpg",size:{width:1882,height:986},sizes:"(max-width: 1882px) 100vw, 1882px",srcset:["/assets/static/localNode.82a2fbd.12e13ba4ff34d7ff8296889bb7b817ea.jpg 480w","/assets/static/localNode.cbab2cf.12e13ba4ff34d7ff8296889bb7b817ea.jpg 1024w","/assets/static/localNode.4445e3a.12e13ba4ff34d7ff8296889bb7b817ea.jpg 1882w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 1882 986' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-21a9faa9011d94c166f565107c6c342f'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-21a9faa9011d94c166f565107c6c342f)' width='1882' height='986' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAiAEADASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAECAwQI/8QALxAAAQMCAggFBAMAAAAAAAAAAQACAxExBCESEzJBUVKBkjNCYnGRFCNUYXKi8P/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABoRAQEAAwEBAAAAAAAAAAAAAAABERJRYQL/2gAMAwEAAhEDEQA/APSsDJnAulqGkZB2SGRxvmlL2B9gKey1YdAksyJupa0SPl03tuKg%2byzZmNS4To4YUOpPCybI8O4jRhcS3/Zqhh4txjViNoFNKP4WNPF3vU6uL8b%2boS1ENa/TuvWyvVt5o/hZmIgO%2b9CBuqyymni73qjHADQwt%2bAsMThMPKxwZE1jzY0y6gUW%2brcSDr46cA26GMOiNKaNx4gUWp8TibXpJs8Oe9xu/QSTZ4c/uPNTctsullaHavyqs/V2qGWOQvzKug7kQ8/V2oz9Xal0HcjoO5FTISGnasdyzZWrdrZ4LSQVBAAsfMs2Xba3MgxTOWFmIvW/QIQg6oQC01G9WAOAQhA6DgEUHAIQglwFbCxWEW03%2bJQhCP/Z' /%3e%3c/svg%3e"}},lw5w:function(e,t){e.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/addingAcc.3fa2e4a.482ea76ec80a74ab2c6697156de096d1.jpg",size:{width:1140,height:739},sizes:"(max-width: 1140px) 100vw, 1140px",srcset:["/assets/static/addingAcc.82a2fbd.482ea76ec80a74ab2c6697156de096d1.jpg 480w","/assets/static/addingAcc.3fa2e4a.482ea76ec80a74ab2c6697156de096d1.jpg 1140w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 1140 739' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-e78f2b20ce296e91eca11866c61d67ce'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-e78f2b20ce296e91eca11866c61d67ce)' width='1140' height='739' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAApAEADASIAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAAAAIEAwEFCP/EADsQAAEEAAIFBwYPAAAAAAAAAAEAAgMREiEEE1GRoSIxQVRhYnEjJJKxwdIFBhQyMzQ2U3J0gaKz0eH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAYEQEBAQEBAAAAAAAAAAAAAAAAARESAv/aAAwDAQACEQMRAD8A%2bjsOlGbSC7R6brKjInPLbXPV5Z9CoigxipGTMI6dcTfFaaQOVG7VueWmxTqrjmnbpMtnFC4DootPtUU4yCFz5Q/7qT9vvIGkOutVJ4033kHUX2ppZXMrAA%2b%2beiBW8qHSmF0znap776QcvUgssbQixtUghPVm%2bknhjLXfQsZ23aBpWh5z1ZHeFp48VHE5p2YRzJJoGuota0E3fkw60QQyNLmtoXnyoqHApi9Nc9p3Iz2nctgzIWwE%2bKMPc4ph0xz2ncppYXSTXTq22Ffh7nFRTyYJXDXYOzBdJhbpRo1Ciy%2b3Gf6WkUWB4OGu3GSkjkxX5Zzj3Wf4tYzmOU8/ibXsRCvaZQ18U1NIsFtEEbUohlFecPP6BTfF37P/AAX%2bUh/javRWeYan1MtfWH%2biEaiXrD9wVCE5i6n1Mtjzh/PsCBDL1h%2b4KhCcw1PI6OLVtm0hzXOsC3gYiMz0LRgFgiRzssrcCDwXX/Pj8T6k6k8lf//Z' /%3e%3c/svg%3e"}},vRJ9:function(e,t){e.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/launch.91ab2fe.4c91465bb19c574cad7d65be36e2c02a.jpg",size:{width:1908,height:1037},sizes:"(max-width: 1908px) 100vw, 1908px",srcset:["/assets/static/launch.82a2fbd.4c91465bb19c574cad7d65be36e2c02a.jpg 480w","/assets/static/launch.cbab2cf.4c91465bb19c574cad7d65be36e2c02a.jpg 1024w","/assets/static/launch.91ab2fe.4c91465bb19c574cad7d65be36e2c02a.jpg 1908w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 1908 1037' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-35e94c5799cde81b00fba92c59e6c09f'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-35e94c5799cde81b00fba92c59e6c09f)' width='1908' height='1037' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAjAEADASIAAhEBAxEB/8QAHAAAAQQDAQAAAAAAAAAAAAAAAAECBQcDBAgG/8QANxAAAgAFAQQFCQkBAAAAAAAAAQIAAwQFEQYSMUFxBxMhYdEUFSIyUYGxwtIkM1JVc3SFobPB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APNr0l6akypUudWa761FCuZVcuC2O0gFt2YVelDSgUB6jpBc7try8D4TMRQlTUATpoVD6xxlu%2bNfrmzkgZ5mA6UsuvtK3quS309drWjnTFdhU1lyIlIFUsdrEzdgROPW2IAg62uHMXScfmjmfSc1xdXbOSKaeQD%2bm0TRrJx3FRyEBfHnGwggDXFzx3XCd4w9a2xtu1zcffc5o%2baKCNVO37f9CHCsnDiD7oDoBZ1nbdrivP8AKzPqjMnmphgazrmJP5w/1xz2K5%2bKoYelb6Q2pQ3%2b2AkxrumlhUfR2j5hQbJY20ktjiTtdpjHM6QpCgkaG0bsjj5tb648TVUonsXDqDxJ3/GI6bLEtiA4bkICyqPXEm7y62gl6U0xQGbSTvtNHRGXOTCE%2bi20cZxjkY8%2bxGe3jEZpLsuU79pUf5tEpkEZxAIR3wcO3B5QDOf%2bQgbBwR2wC590KN45wcOBhVPpAYwcwF0UVrt5oacmgoyTKUkmQv4R3Q2t0vZZlVMZrfKBJBwpKjcNwBwIIIBsvSFhUhltyKzLglXYEgjtG%2bMQ0jY/KXTyBdkDIHWP7OcEEBglaUsjUk12oVLLjB228Yc2lLIKaU4oF2mYgnbbxgggNa46Ys8lWMuiUEED129nON1NJWMhSaBc4B%2b8fxgggP/Z' /%3e%3c/svg%3e"}}}]);