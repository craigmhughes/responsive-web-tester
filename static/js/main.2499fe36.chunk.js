(this["webpackJsonpresponsive-tester"]=this["webpackJsonpresponsive-tester"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/Small Mobile.9fa6b859.svg"},function(e,t,a){e.exports=a.p+"static/media/Large Mobile.54dfc7ae.svg"},function(e,t,a){e.exports=a.p+"static/media/Tablet.d1069b28.svg"},function(e,t,a){e.exports=a.p+"static/media/Laptop.922aa28c.svg"},function(e,t,a){e.exports=a.p+"static/media/Desktop.a690c9f1.svg"},,,,,,,function(e,t,a){e.exports=a.p+"static/media/Splash Vector.6cfd3d76.svg"},function(e,t,a){e.exports=a.p+"static/media/Splash Vector (Underlay).32cd7673.svg"},function(e,t,a){e.exports=a.p+"static/media/search.5437e521.svg"},,,,function(e,t,a){e.exports=a(44)},,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),s=a(25),c=a.n(s),r=(a(37),a(3)),l=a(4),o=a(6),u=a(5),m=a(12),p=a(7),h=a(29),v=a(11),d=a(9),f=(a(38),a(26)),b=a.n(f),E=a(27),y=a.n(E),D=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).urlInput=n.a.createRef(),a.search=n.a.createRef(),a.artSection=n.a.createRef(),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(d.b.main,{className:"container",id:"home",initial:"in",animate:"init",exit:"out",variants:{in:{opacity:1,x:"-100%"},init:{opacity:1,x:0},out:{opacity:0,x:"-100%"}}},n.a.createElement("header",null,n.a.createElement("h1",null,"Responsive ",n.a.createElement("br",null),"Website Tester")),n.a.createElement("section",{className:"body"},n.a.createElement("section",{id:"home-art",ref:this.artSection},n.a.createElement("img",{src:y.a,className:"art"}),n.a.createElement("img",{src:b.a,className:"art"}))),n.a.createElement("section",{className:"footer"},n.a.createElement("button",{className:"primary-btn btn",onClick:function(){e.props.history.push("search")}},"Get Started"),n.a.createElement("button",{className:"secondary-btn btn credit",onClick:function(){window.location.href="https://github.com/craigmhughes"}},"Project by ",n.a.createElement("span",null,"Craig Hughes"))))}}]),t}(n.a.Component),x=a(28),g=a.n(x),O=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).urlInput=n.a.createRef(),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(d.b.main,{className:"container",id:"search",initial:"in",animate:"init",exit:"out",variants:{in:{opacity:1,x:"100%"},init:{opacity:1,x:0},out:{opacity:0,x:"-100%"}}},n.a.createElement("header",null,n.a.createElement("h1",null,"Which site are you testing?")),n.a.createElement("section",{className:"body"},n.a.createElement("div",{className:"search-field",ref:this.search},n.a.createElement("img",{src:g.a}),n.a.createElement("input",{type:"search",placeholder:"Enter your URL here",ref:this.urlInput}))),n.a.createElement("section",{className:"footer"},n.a.createElement("button",{className:"primary-btn btn",onClick:function(){!1!==e.props.useUrl(e.urlInput.current.value)&&e.props.history.push("device-select")}},"Continue")))}}]),t}(n.a.Component),j=a(15),N=a.n(j),k=a(16),w=a.n(k),S=a(17),C=a.n(S),I=a(18),A=a.n(I),L=a(19),T=a.n(L),R=function(e){function t(e){return Object(r.a)(this,t),Object(o.a)(this,Object(u.a)(t).call(this,e))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("li",{onClick:function(){e.props.setActiveDevice(e.props.option,e.props.index)},className:this.props.activeDevice===this.props.index?"active":""},n.a.createElement("img",{src:this.props.icon}),n.a.createElement("h3",null,this.props.title),n.a.createElement("p",null,"(",this.props.dimensions," px)"))}}]),t}(n.a.Component),U=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={activeDevices:[null,null]},a.setActiveDevice=a.setActiveDevice.bind(Object(m.a)(a)),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){if(null==this.props.url)return this.props.history.push("/search"),!1}},{key:"setActiveDevice",value:function(e,t){this.setState({activeDevices:e>0?[this.state.activeDevices[0],[e,t]]:[[e,t],this.state.activeDevices[1]]})}},{key:"render",value:function(){var e=this,t=[{title:"Small Mobile",dimensions:"375 x 667"},{title:"Large Mobile",dimensions:"411 x 823"},{title:"Tablet",dimensions:"1024 x 768"},{title:"Small Laptop",dimensions:"1280 x 800"},{title:"Desktop",dimensions:"1680 x 1050"}],a=[N.a,w.a,C.a,A.a,T.a],i=[null!==this.state.activeDevices[0]?this.state.activeDevices[0][1]:null,null!==this.state.activeDevices[1]?this.state.activeDevices[1][1]:null],s=[[],[]];return t.forEach((function(c){var r=t.indexOf(c);s[0].push(n.a.createElement(R,{key:r,index:r,title:c.title,dimensions:c.dimensions,option:0,activeDevice:i[0],setActiveDevice:e.setActiveDevice,icon:a[r]})),s[1].push(n.a.createElement(R,{key:r,index:r,title:c.title,dimensions:c.dimensions,option:1,activeDevice:i[1],setActiveDevice:e.setActiveDevice,icon:a[r]}))})),n.a.createElement(d.b.main,{className:"container",id:"device-select",initial:"in",animate:"init",exit:"out",variants:{in:{opacity:1,x:"100%"},init:{opacity:1,x:0},out:{opacity:0,x:"-100%"}}},n.a.createElement("header",null,n.a.createElement("h1",null,"Choose devices to compare")),n.a.createElement("section",{className:"body"},n.a.createElement("section",null,n.a.createElement("h2",{className:"subtitle"},"Option One"),n.a.createElement("ul",{className:"device-list"},s[0])),n.a.createElement("section",null,n.a.createElement("h2",{className:"subtitle"},"Option Two"),n.a.createElement("ul",{className:"device-list"},s[1]))),n.a.createElement("section",{className:"footer"},n.a.createElement("button",{className:"primary-btn btn",onClick:function(){e.props.setDevices([e.state.activeDevices[0][1],e.state.activeDevices[1][1]]),e.props.history.push("/view")}},"View Devices")))}}]),t}(n.a.Component),M=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={deviceIcons:null,dimensions:null,deviceStyles:[null,null]},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){if(null==this.props.selectedDevices||null==this.props.url)return this.props.history.push("/device-select"),!1;var e=[N.a,w.a,C.a,A.a,T.a],t=[[375,667],[411,823],[768,1024],[1280,800],[1680,1050]],a=[{marginTop:"-6.75em",transform:"scale(0.4)"},{marginTop:"calc(-10.5em + 40px)",transform:"scale(0.375)",marginLeft:"-3.8em",borderRadius:"2em",height:"763px"},{marginTop:"-15em",transform:"scale(0.275)",marginLeft:"-11em"},{marginTop:"-9.8em",transform:"scale(0.325)",marginLeft:"-15.75em"},{marginTop:"-17.15em",transform:"scale(0.24)",marginLeft:"-27.8em"}];console.log(this.props.selectedDevices),this.setState({deviceIcons:[e[this.props.selectedDevices[0]],e[this.props.selectedDevices[1]]],dimensions:[[t[this.props.selectedDevices[0]][0],t[this.props.selectedDevices[0]][1]],[t[this.props.selectedDevices[1]][0],t[this.props.selectedDevices[1]][1]]],deviceStyles:[a[this.props.selectedDevices[0]],a[this.props.selectedDevices[1]]]})}},{key:"render",value:function(){var e=this,t=null==this.state.deviceIcons?[null,null]:[this.state.deviceIcons[0],this.state.deviceIcons[1]],a=null==this.state.dimensions?[[0,0],[0,0]]:this.state.dimensions;return n.a.createElement(d.b.main,{className:"container",id:"device-view",initial:"in",animate:"init",exit:"out",variants:{in:{opacity:1,x:"100%"},init:{opacity:1,x:0},out:{opacity:0,x:"-100%"}}},n.a.createElement("header",null,n.a.createElement("h1",null,"Device View")),n.a.createElement("section",{className:"body"},n.a.createElement("section",null,n.a.createElement("div",null,n.a.createElement("iframe",{src:this.props.url,width:a[0][0],height:a[0][1],style:this.state.deviceStyles[0]}),n.a.createElement("img",{src:t[0]}))),n.a.createElement("section",null,n.a.createElement("div",null,n.a.createElement("iframe",{src:this.props.url,width:a[1][0],height:a[1][1],style:this.state.deviceStyles[1]}),n.a.createElement("img",{src:t[1]})))),n.a.createElement("section",{className:"footer"},n.a.createElement("button",{className:"primary-btn btn",onClick:function(){return e.props.history.push("/device-select")}},"Reselect Devices")))}}]),t}(n.a.Component),V=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={url:null,urlFail:null,selectedDevices:null},a.useUrl=a.useUrl.bind(Object(m.a)(a)),a.setDevices=a.setDevices.bind(Object(m.a)(a)),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"useUrl",value:function(e){return!(e.length<1)&&(this.setState({url:"https://".concat(e)}),"device-select")}},{key:"setDevices",value:function(e){if(null==e[0]||null==e[1])return!1;this.setState({selectedDevices:e})}},{key:"render",value:function(){var e=this;return n.a.createElement(h.a,{className:"App",basename:"".concat("/responsive-web-tester","/")},n.a.createElement(d.a,{exitBeforeEnter:!0},n.a.createElement(v.c,{location:this.props.history,key:this.props.history},n.a.createElement(v.a,{exact:!0,path:"/",render:function(e){return n.a.createElement(D,{history:e.history})}}),n.a.createElement(v.a,{exact:!0,path:"/search",render:function(t){return n.a.createElement(O,{useUrl:e.useUrl,history:t.history})}}),n.a.createElement(v.a,{exact:!0,path:"/device-select",render:function(t){return n.a.createElement(U,{history:t.history,url:e.state.url,setDevices:e.setDevices})}}),n.a.createElement(v.a,{exact:!0,path:"/view",render:function(t){return n.a.createElement(M,{history:t.history,selectedDevices:e.state.selectedDevices,url:e.state.url})}}))))}}]),t}(n.a.Component);V.displayName=V.name;var W=V;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[32,1,2]]]);
//# sourceMappingURL=main.2499fe36.chunk.js.map