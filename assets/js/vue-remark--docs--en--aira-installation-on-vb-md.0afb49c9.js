(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"38Qz":function(e,t,o){"use strict";o.r(t);var a=o("KHd+"),A=o("UQSp"),i=o("Kw5r");function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}i.a.config.optionMergeStrategies;var s={VueRemarkRoot:A.a},n=function(e){var t=e.options.components=e.options.components||{},o=e.options.computed=e.options.computed||{};Object.keys(s).forEach((function(e){"object"===r(s[e])&&"function"==typeof s[e].render||"function"==typeof s[e]&&"function"==typeof s[e].options.render?t[e]=s[e]:o[e]=function(){return s[e]}}))},l=i.a.config.optionMergeStrategies,c="__vueRemarkFrontMatter",g={excerpt:null,title:"AIRA Installation on VirtualBox",contributors:["akru"],translated:!0};var d=function(e){e.options[c]&&(e.options[c]=g),i.a.util.defineReactive(e.options,c,g),e.options.computed=l.computed({$frontmatter:function(){return e.options[c]}},e.options.computed)},p=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("VueRemarkRoot",[a("p",[e._v('AIRA stands for "Autonomous Intelligent Robot Agent". It is the client for Robonomics Network developed by '),a("a",{attrs:{href:"https://aira.life",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Airalab")]),e._v(". It is an operating system based on "),a("a",{attrs:{href:"https://nixos.org/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("NixOS")]),e._v(". With AIRA you can  turn any cyber-physical system in an economic agent, where robots operate as a services for the reasonable payments. "),a("a",{attrs:{href:"/docs/aira-overview"}},[e._v("More theory about AIRA here")]),e._v(".")]),a("p",[e._v("It's possible to install AIRA on a x86_64 PC. Also there are images for Raspberry Pi 3 and 4 supported by the team.")]),a("p",[e._v("The best way to try AIRA is to start from installing it as a virtual machine on "),a("a",{attrs:{href:"https://www.virtualbox.org/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("VirtualBox")]),e._v(".")]),a("h2",{attrs:{id:"requirements"}},[a("a",{attrs:{href:"#requirements","aria-hidden":"true"}},[e._v("#")]),e._v("Requirements")]),a("ul",[a("li",[e._v("VirtualBox")]),a("li",[a("a",{attrs:{href:"https://www.virtualbox.org/wiki/Downloads#VirtualBox6.1.2OracleVMVirtualBoxExtensionPack",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("VirtualBox Extension Pack")])]),a("li",[e._v("2Gb of RAM for the machine")]),a("li",[e._v("40Gb of free disk space")])]),a("h2",{attrs:{id:"obtain-the-image"}},[a("a",{attrs:{href:"#obtain-the-image","aria-hidden":"true"}},[e._v("#")]),e._v("Obtain the image")]),a("p",[e._v("AIRA has "),a("a",{attrs:{href:"https://aira.life/channels/aira-stable/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("stable")]),e._v(" and "),a("a",{attrs:{href:"https://aira.life/channels/aira-unstable/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("unstable")]),e._v(" channels.")]),a("p",[e._v("To get stable image download the file with "),a("code",{pre:!0},[e._v(".ova")]),e._v(" extension.\n\tThe link for stable image is "),a("a",{attrs:{href:"https://releases.aira.life/channels/aira/stable/862-aira-stable/nixos-20.03pre-git-x86_64-linux.ova",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("here")])]),a("p",[e._v("Don't forget to compare checksum of the downloaded image with the last column "),a("code",{pre:!0},[e._v("SHA-256 hash")]),e._v(" on the "),a("a",{attrs:{href:"https://aira.life/channels/aira-stable/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("download page")]),e._v(". It must be equal to the output of the following command (it is an example, please check the name of downloaded by you .ova file first):")]),a("pre",[a("code",{pre:!0},[e._v("sha256sum nixos-20.03pre-git-x86_64-linux.ova\n")])]),a("p",[e._v("You may wish to check out the walkthrough video:")]),a("div",{staticClass:"youtube-embed"},[a("div",{staticStyle:{width:"100%",margin:"0 auto"}},[a("div",{staticStyle:{position:"relative","padding-bottom":"56.25%","padding-top":"25px",height:"0"}},[a("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:"https://www.youtube-nocookie.com/embed/cDcaypYPBhI",allow:"autoplay; encrypted-media",allowfullscreen:""}})])])]),a("h2",{attrs:{id:"troubleshooting"}},[a("a",{attrs:{href:"#troubleshooting","aria-hidden":"true"}},[e._v("#")]),e._v("Troubleshooting")]),a("p",[e._v("If you have fresh installed VirtualBox, you need to install the "),a("a",{attrs:{href:"https://www.virtualbox.org/wiki/Downloads",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("extension")]),e._v(" pack or disable USB 2.0 controller.")]),a("p",[e._v("Also VirtualBox may show a warning about "),a("code",{pre:!0},[e._v("Display settings")]),e._v(". Consider switching "),a("code",{pre:!0},[e._v("Graphics Controller")]),e._v(" in settings of the VM to "),a("code",{pre:!0},[e._v("VMSVGA")]),e._v(".")]),a("h2",{attrs:{id:"import-to-virtualbox"}},[a("a",{attrs:{href:"#import-to-virtualbox","aria-hidden":"true"}},[e._v("#")]),e._v("Import to VirtualBox")]),a("p",[e._v("Open VirtualBox and press "),a("code",{pre:!0},[e._v("Ctrl+I")]),e._v(" or go to "),a("code",{pre:!0},[e._v("File > Import Applicance...")])]),a("p",[a("g-image",{attrs:{src:o("iEPU"),alt:"AIRA import VB image",title:"AIRA import VB image"}})],1),a("p",[e._v("At this moment the next step is not necessary but it will help you to connect to the VM via SSH easily.")]),a("p",[e._v("First add "),a("code",{pre:!0},[e._v("Host-Only")]),e._v(" adapter in VirtualBox menu "),a("code",{pre:!0},[e._v("File > Host Network Manager...")]),e._v(" or by pressing "),a("code",{pre:!0},[e._v("Ctrl+H")])]),a("p",[a("g-image",{attrs:{src:o("A6Ca"),alt:"Host Only",title:"Host Only"}})],1),a("p",[e._v("Then go to the image's settings, Network and add the second network adapter")]),a("p",[a("g-image",{attrs:{src:o("Ee/5"),alt:"Second adapter",title:"Second adapter"}})],1),a("p",[e._v("For more details look at the standalone "),a("a",{attrs:{href:"/docs/aira-connecting-via-ssh/"}},[e._v("lesson")]),e._v(".")]),a("p",[e._v("Optionally you can increase the amount of video memory and switch "),a("code",{pre:!0},[e._v("Graphics Controller")]),e._v(" to "),a("code",{pre:!0},[e._v("VMSVGA")]),e._v(".")]),a("h2",{attrs:{id:"launch-the-machine"}},[a("a",{attrs:{href:"#launch-the-machine","aria-hidden":"true"}},[e._v("#")]),e._v("Launch the machine")]),a("p",[e._v("Finally press Start and you'll see AIRA welcoming you with generated Ethereum address and IPFS identifier")]),a("p",[a("g-image",{attrs:{src:o("sDWo"),alt:"AIRA image ready, Welcome screen",title:"AIRA image ready, Welcome screen"}})],1),a("p",[e._v("At the very first initialization AIRA generates new Ethereum address and IPNS identifier for you.")])])}),[],!1,null,null,null);"function"==typeof n&&n(p),"function"==typeof d&&d(p);t.default=p.exports},A6Ca:function(e,t){e.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/host_only_adapter.e8cdb81.6a06b28e829c05d423325ea901ac14db.jpg",size:{width:899,height:529},sizes:"(max-width: 899px) 100vw, 899px",srcset:["/assets/static/host_only_adapter.82a2fbd.6a06b28e829c05d423325ea901ac14db.jpg 480w","/assets/static/host_only_adapter.e8cdb81.6a06b28e829c05d423325ea901ac14db.jpg 899w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 899 529' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-7dd2d7e61278baea649e1f5d9f1ac143'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-7dd2d7e61278baea649e1f5d9f1ac143)' width='899' height='529' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAmAEADASIAAhEBAxEB/8QAGwABAQADAAMAAAAAAAAAAAAAAAYBAgQDBQf/xAA0EAAABAIGBQwDAQAAAAAAAAAAAQIDBQYEERIhodIHFRZi4RMXIjEyUVVWcZGUokFygZL/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQMC/8QAHhEBAAICAgMBAAAAAAAAAAAAAAJSErEBEQMxkfD/2gAMAwEAAhEDEQA/APpTejuUyZacflWgLfdfNLhLWs7Ka71VkZV99Q66Lo2kp6lUlpUrQ5KGzKwojcrUX5M77hYbLKSaEsx2MttJI60peTf3X2Rtsuvx%2bOfIRkHXHj4v%2b%2bMspesdJfmskfyzD/vmHQnRzKCSIkwChkRXERGvMKDZdXj8c%2bQjIGy6vH458hGQd4xttMpV0m3dGMlvKtOS5QVqqqrO3mGnNZJHlmgey8wpFSk24db0XjDv7vpygmUWk1kmLxckKvUjl01Gf%2bQxjba5SrpN81ckF1yxQPZeYbI0XyU3eiW6Cn0t5hRtyky2q03FIqlRdRk8msvqCpUaSo3GopFW1Ff0Hkl/OyJ1xY7lXSkAAGbUAAAAAAAYX2FegyML7CvQB6s4refRw4hrXdw4gABrXdw4hrXdw4gABrXdw4hrXdw4gABrXdw4jwuxqytKOTrJVxn3AAD/2Q==' /%3e%3c/svg%3e"}},"Ee/5":function(e,t){e.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/add_second_adapter.79e067c.5d9032376eccfebdc52858fe3507d3d1.jpg",size:{width:658,height:563},sizes:"(max-width: 658px) 100vw, 658px",srcset:["/assets/static/add_second_adapter.79e067c.5d9032376eccfebdc52858fe3507d3d1.jpg 658w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 658 563' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-d1627cc2070c68093824df4c2efe8254'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-d1627cc2070c68093824df4c2efe8254)' width='658' height='563' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAA3AEADASIAAhEBAxEB/8QAGwAAAQUBAQAAAAAAAAAAAAAAAAIDBAYHBQH/xAA7EAACAQMBAwcHCwUAAAAAAAABAgMABBEhBQYSBxMxQVFhcRQXIlKRobEVJDIzQkNUcoGU0jRzk6Li/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECBAP/xAAgEQACAgMAAQUAAAAAAAAAAAAAAQIRAxJxMSEiQWHB/9oADAMBAAIRAxEAPwDQk5Kdz7%2bW6nvNlRPIrhAw2rICQEGOIZ9FujSp9zyIbiw2wkXZEzP6nl0oyezJbFWrZkRCXjB2YNMGIFgGx6A0yNW/MfCrHeJz1oiYzxdRyudD7K3Naul4POHuVv7Mps%2bRrciWbhn2DPAuM8TbRdtezAeuy3JHuVnLWj577mT%2bVWSOKGyleMJbq30Sr3bEkH9DjqoE9omYJlgjhYYcrcMT26ZGtZtm6RWByQ7jji%2baN6Ryc3Mmv%2b1RfMjyffgJP3kv8qvMFns0xYi5wxyjGeNiCD31Lttl21tnmRIM6auT8aWxSM78yHJ9%2bAk/eS/yo8ym4MQLRbPlL4Ix5ZLrnQ/arS/Jk7W9tIlgRY2YFsjvpbFIzX5R3qSWZLW2s2t1l0Zp8Hix0Y5xerGld/dfaO9d5tVRtyzs49nYOJYWUnj6hox766uzJHWJisVyAsikhIEw44R%2bp8emuss/Ouq8xNFwsDl1wDp1V05M6px0X6cuLA7Ut3z4PJ5ZVkwlpI46eNWQZ9pqv%2bVGCd8qrMfsSM%2bnWcYQj2E1aqzLa43g%2bU7oW15aJb8bc2rBsheoHHXXhCG7q0unROeium%2bFxhnW5tUaMgHiUHhBwDkdGQPhXY4H9f3Vn2w03kF/bG5vtnPYtIpljGTKdT0Z6OqtFpOGrq0%2bCE91dNdG%2bB/X91ImRhGxL5HZT9IuPqX8KwbIWz9l2i2kbCLBkCyNhiMtjpqQtpDbFTCpXiYA5Ynt7TT1j/RW/wDbX4V7P93%2bcfA1W78kSS9Ee0y9rbuxZ4Y2Y9JK09RUKMpawRsGSGNWHWFp6iigCm7j6l/CnKbuPqX8KAiW1xIttCoK4CKOjupUk8rAfRyDkaY1oooCMbzaAz80j/z/APNeNebRxpaxdI%2b%2bzpn8vZRRQErn5PW91HlEnre6iigGFu7w544QoxoeMHJ8MDvpAurt5HSSIiLTDZXXXszpRRVRGf/Z' /%3e%3c/svg%3e"}},UQSp:function(e,t,o){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},iEPU:function(e,t){e.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/aira_import_vb_image.567e09a.4fc124de915477fa4292764ec0655dc6.jpg",size:{width:978,height:765},sizes:"(max-width: 978px) 100vw, 978px",srcset:["/assets/static/aira_import_vb_image.82a2fbd.4fc124de915477fa4292764ec0655dc6.jpg 480w","/assets/static/aira_import_vb_image.567e09a.4fc124de915477fa4292764ec0655dc6.jpg 978w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 978 765' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-5caee21f614bfe690e5963f738bcbe2e'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-5caee21f614bfe690e5963f738bcbe2e)' width='978' height='765' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAyAEADASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAIDBQEEBgf/xAA%2bEAACAQMCAgQICgsAAAAAAAABAgMABBESIQUGEzFBUQcUIjJSobHSMzRhcXJzgZHB8BYjQlNigpKTwtHh/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECBAX/xAAhEQACAQQCAwEBAAAAAAAAAAAAAQIEESExA0FRcZFhgf/aAAwDAQACEQMRAD8A7HifIHL1tw%2bficvAOEm1jY62YHUo6s41b1NwbkPkzifCbS9g4Nw4xS691tXfVg/TGK3H8Yl5gk4deI7wyMHUAZBGk4J%2bbPqq94fwGax4NZwWnFJrSJJpE0QBdL6stnJGc7VxUtdUVXNOEoKME2r2011jys95OqpoeGk4YyUnKbSe8NP34frBTw%2bDfktLgGbgNlJHjGgWjqc9hzrNbsfIvIkSYj5ZgUE5wI396unh5e4wFw3M/EVX9nTFEfatWlkt4wUNeLKybOB2/PtXoySWpX%2bnDCTluNvhws3InIsihZOWoGA6h0T%2b9UQ8HvIBGf0Wt/7cnvV6dEs2/S4HdpJPtp9Dd7fn7awbt%2bHlw8HnIBIA5Wt8nYfq396tuLwX8jlsjlezQjcFg4/yr0bQ3e35%2b2llQ9G27Dbu/wC0H8K5OCWV2lvczRky9CqkhiMjGcbUt5bpawdFAgESuM79WQfxIq0sfiVv9WvsFRzW4uXdWd1AYHycb7fLRNpWWg1fLK7h9ysUhQopLkYwdye7r%2benjuGRvhoAoyAjsfwFWVtbCBSFldgTnBx1/dWDYwE5KZPfUKaiXg1LrktACd8M3%2bq3EZHQMhQqRkEE708VukQIjyoPdT6T6RoCPb%2bH10smOjbzer5am0n0jSyqeifyj1GgI7H4lb/Vr7BWOniinkEsiITjAY4ztUdnPGtnAC24jXs%2bQVW8XBmuFMSM%2b27AdlCFz43bnqmjP81Y8bt/30f9Vc/FBMykY0EHJ1dR9VOtpLka3XHbp68fdQp0PSp6Xqo6VO/1VUIjqwPjExx2Ftqm1v3mgLHpU7/VSSyp0TeV2d1aDTFWVWfBY4A79s0MxZcE5FAJB8BF9BfZT0UUAUUUUBhvNNVlsqrOhCgEdRAoooBLgDxPGNtZ2%2b2tmLzoD2gHFFFa6J2f/9k=' /%3e%3c/svg%3e"}},sDWo:function(e,t){e.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/aira_image_ready.ae6f016.0180c3189c4da0f8b2c11f6694315593.jpg",size:{width:804,height:671},sizes:"(max-width: 804px) 100vw, 804px",srcset:["/assets/static/aira_image_ready.82a2fbd.0180c3189c4da0f8b2c11f6694315593.jpg 480w","/assets/static/aira_image_ready.ae6f016.0180c3189c4da0f8b2c11f6694315593.jpg 804w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 804 671' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-ceba77d3b951f08547dc7d87b7ac9f99'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-ceba77d3b951f08547dc7d87b7ac9f99)' width='804' height='671' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAA1AEADASIAAhEBAxEB/8QAGwABAAMBAQEBAAAAAAAAAAAAAAMEBwECBQj/xAA8EAABAgMDBwgGCwAAAAAAAAABAAIDBREEIdEGBxITMUFRCBgyVmGBlOEUFRciQpEzNDVTV3GDhZKVof/EABcBAQEBAQAAAAAAAAAAAAAAAAABAwL/xAAcEQEAAwEBAAMAAAAAAAAAAAAAAQIRAyFRsdH/2gAMAwEAAhEDEQA/AMrjZw5HaIhjRsgJY9/xuMwi%2b9SnbwXgZe5Pmh9ncqpUn7Ri3jht3LOIhDS91xPZoG9RiLD0veDr%2bDW9%2b5NlManBzkSeAIUMZASujHG4zCJfXdt71Mc6MjJLTm5lJuqR6xjbPmsmMdui6gv3VY2lPkqybJjXjnWkANDm7lXj4%2bKhjZzsmY0Qvi5t5U552n1haMVk6K7JkNV9pOS34ayn%2bwtOK9w852TMPoZt5U39wtGKydE2TITh7A7bcDwXC9txqajsVmI6KLy2LQ1P0ihdaNJx0hEPCsTZ/iiq7qaR0di4rXpZ0aVi146zyQ2s1uMUfqeSCqiuemX7I1OGtOCj1sE1LoT3OO8xPJBXRT6cD7l38/JeXuhuADIZaeJdVBG7pFcXXdI/muICIiAiIgIiIP15C5KEniQ2vOU0wBcAfq7MV65psm6zzDw7MURA5psm6zzDw7MU5psm6zzDw7MURA5psm6zzDw7MV8OacmmUWK3Ps4ygt7w1rTpalg2oi15Vi0zrLtaaxGKE05O8qsVpEITy3PBa11dUwbaYq9KeTZJ7faGQjPrewu%2bLVMO47u5EXXWkViM%2bP1jy6Wt1msz579v/9k=' /%3e%3c/svg%3e"}}}]);