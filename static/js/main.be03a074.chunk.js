(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{15:function(n,e,a){},16:function(n,e,a){},32:function(n,e,a){"use strict";a.r(e);var t=a(2),d=a.n(t),c=a(9),i=a.n(c),s=(a(15),a(3)),o=a(4),u=a(1),r=a(6),h=a(5),l=(a(16),a(10)),p=a.n(l),y=a(0),m=function(n){Object(r.a)(a,n);var e=Object(h.a)(a);function a(n){var t;return Object(s.a)(this,a),(t=e.call(this,n)).handleClick=t.handleClick.bind(Object(u.a)(t)),t.handleKeyDown=t.handleKeyDown.bind(Object(u.a)(t)),t.playSound=t.playSound.bind(Object(u.a)(t)),t.soundEnded=t.soundEnded.bind(Object(u.a)(t)),t}return Object(o.a)(a,[{key:"handleClick",value:function(){this.playSound()}},{key:"handleKeyDown",value:function(n){n.key.toLowerCase()===this.props.sound.key&&this.playSound()}},{key:"playSound",value:function(){document.getElementById(this.props.sound.key).play(),this.props.soundPlayed(this.props.sound.name)}},{key:"soundEnded",value:function(){this.props.soundEnded(this.props.sound.name)}},{key:"render",value:function(){return Object(y.jsx)(p.a,{target:"window",onKeyDown:this.handleKeyDown,children:Object(y.jsxs)("div",{className:"drum-pad",onClick:this.handleClick,children:[this.props.sound.key,Object(y.jsx)("audio",{id:this.props.sound.key,src:this.props.sound.path,onEnded:this.soundEnded,className:"clip"})]})})}}]),a}(d.a.Component);var k=function(n){return Object(y.jsx)("div",{id:"display",children:n.display})},b=[{name:"kick1",path:"".concat("/react-drum-machine","/sounds/kick-1.wav"),key:"q"},{name:"kick2",path:"".concat("/react-drum-machine","/sounds/kick-2.wav"),key:"w"},{name:"kick3",path:"".concat("/react-drum-machine","/sounds/kick-3.wav"),key:"e"},{name:"kick4",path:"".concat("/react-drum-machine","/sounds/kick-4.wav"),key:"a"},{name:"clap1",path:"".concat("/react-drum-machine","/sounds/clap-1.wav"),key:"s"},,{name:"clap2",path:"".concat("/react-drum-machine","/sounds/clap-2.wav"),key:"d"},{name:"hi-hat-1",path:"".concat("/react-drum-machine","/sounds/hi-hat-1.wav"),key:"z"},{name:"hi-hat-2",path:"".concat("/react-drum-machine","/sounds/hi-hat-2.wav"),key:"x"},{name:"bass",path:"".concat("/react-drum-machine","/sounds/bass.wav"),key:"c"}],j=function(n){Object(r.a)(a,n);var e=Object(h.a)(a);function a(n){var t;return Object(s.a)(this,a),(t=e.call(this,n)).state={playingSound:""},t.setPlayingSound=t.setPlayingSound.bind(Object(u.a)(t)),t.handleSoundEnded=t.handleSoundEnded.bind(Object(u.a)(t)),t}return Object(o.a)(a,[{key:"setPlayingSound",value:function(n){this.setState({playingSound:n})}},{key:"handleSoundEnded",value:function(n){this.setState((function(e){return{playingSound:e.playingSound===n?"":e.playingSound}}))}},{key:"render",value:function(){var n=this;return Object(y.jsxs)("div",{id:"drum-machine",children:[Object(y.jsx)("div",{id:"display"}),b.map((function(e){return Object(y.jsx)(m,{sound:e,soundPlayed:n.setPlayingSound,soundEnded:n.handleSoundEnded},e.name)})),Object(y.jsx)(k,{display:this.state.playingSound})]})}}]),a}(t.Component),v=function(n){n&&n instanceof Function&&a.e(3).then(a.bind(null,33)).then((function(e){var a=e.getCLS,t=e.getFID,d=e.getFCP,c=e.getLCP,i=e.getTTFB;a(n),t(n),d(n),c(n),i(n)}))};i.a.render(Object(y.jsx)(d.a.StrictMode,{children:Object(y.jsx)(j,{})}),document.getElementById("root")),v()}},[[32,1,2]]]);
//# sourceMappingURL=main.be03a074.chunk.js.map