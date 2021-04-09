(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{UQSp:function(t,e,n){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},hm3Y:function(t,e,n){"use strict";n.r(e);var o=n("KHd+"),r=n("UQSp"),i=n("Kw5r");function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}i.a.config.optionMergeStrategies;var a={VueRemarkRoot:r.a},c=function(t){var e=t.options.components=t.options.components||{},n=t.options.computed=t.options.computed||{};Object.keys(a).forEach((function(t){"object"===s(a[t])&&"function"==typeof a[t].render||"function"==typeof a[t]&&"function"==typeof a[t].options.render?e[t]=a[t]:n[t]=function(){return a[t]}}))},u=i.a.config.optionMergeStrategies,p="__vueRemarkFrontMatter",l={excerpt:null,title:"Install Sensors Connectivity on Your Own Aira",contributors:["LoSk-p","Vourhey"],translated:!1};var f=function(t){t.options[p]&&(t.options[p]=l),i.a.util.defineReactive(t.options,p,l),t.options.computed=u.computed({$frontmatter:function(){return t.options[p]}},t.options.computed)},d=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("VueRemarkRoot",[n("h2",{attrs:{id:"prerequirements"}},[n("a",{attrs:{href:"#prerequirements","aria-hidden":"true"}},[t._v("#")]),t._v("Prerequirements")]),n("p",[t._v("You must have an AIRA instance somewhere")]),n("h2",{attrs:{id:"install-the-package"}},[n("a",{attrs:{href:"#install-the-package","aria-hidden":"true"}},[t._v("#")]),t._v("Install the Package")]),n("pre",[n("code",{pre:!0},[t._v("git clone https://github.com/airalab/sensors-connectivity\ncd sensors-connectivity\nnix build -f release.nix\n")])]),n("p",[t._v("From this point you can run the package with the default configuration file or create a systemd service to launch it automatically")]),n("h3",{attrs:{id:"edit-configuration-file"}},[n("a",{attrs:{href:"#edit-configuration-file","aria-hidden":"true"}},[t._v("#")]),t._v("Edit Configuration File")]),n("p",[t._v("Assuming you are in the package root directory edit the file:")]),n("pre",[n("code",{pre:!0},[t._v("cp config/default.json config/my.json\nvim config/my.json\n")])]),n("p",[t._v("Extended description of options is located "),n("a",{attrs:{href:"/docs/configuration-options-description"}},[t._v("here")])]),n("h3",{attrs:{id:"run-manually"}},[n("a",{attrs:{href:"#run-manually","aria-hidden":"true"}},[t._v("#")]),t._v("Run Manually")]),n("p",[t._v("From the package directory:")]),n("pre",[n("code",{pre:!0},[t._v("source result/setup.zsh\nroslaunch sensors_connectivity agent.launch config:=/root/sensors-connectivity/config/my.json\n")])]),n("h3",{attrs:{id:"run-via-systemd"}},[n("a",{attrs:{href:"#run-via-systemd","aria-hidden":"true"}},[t._v("#")]),t._v("Run via systemd")]),n("p",[t._v("Add the following to "),n("code",{pre:!0},[t._v("/etc/nixos/configuration.nix")]),t._v(":")]),n("pre",[n("code",{pre:!0},[t._v('systemd.services.connectivity = {\n  requires = [ "roscore.service" ];\n  after = ["roscore.service" ];\n  wantedBy = [ "multi-user.target" ];\n  environment.ROS_MASTER_URI =  "http://localhost:11311";\n  script = \'\'\n    source /root/sensors-connectivity/result/setup.bash && roslaunch sensors_connectivity agent.launch config:=/root/sensors-connectivity/config/my.json\n  \'\';\n  serviceConfig = {\n    Restart = "on-failure";\n    StartLimitInterval = 0;\n    RestartSec = 60;\n    User = "root";\n  };\n};\n')])]),n("p",[t._v("Then")]),n("pre",[n("code",{pre:!0},[t._v("nixos-rebuild switch\n")])]),n("p",[t._v("Running")]),n("pre",[n("code",{pre:!0},[t._v("systemctl start connectivity.service\n")])])])}),[],!1,null,null,null);"function"==typeof c&&c(d),"function"==typeof f&&f(d);e.default=d.exports}}]);