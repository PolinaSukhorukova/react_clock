(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),a=n.n(c),o=n(2),i=n(3),s=n(5),r=n(4),l=n(1),m=(n(12),n(0)),u=function(t){Object(s.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={time:new Date,timerId:0},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=window.setInterval((function(){t.setState({time:new Date}),console.info(t.state.time.toUTCString().slice(-12,-4))}),1e3);this.setState({timerId:e})}},{key:"componentDidUpdate",value:function(t){this.props.name!==t.name&&console.debug("Renamed from ".concat(t.name," to ").concat(this.props.name))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.state.timerId)}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"Clock",children:[Object(m.jsx)("strong",{className:"Clock__name",children:this.props.name})," time is ",Object(m.jsx)("span",{className:"Clock__time",children:this.state.time.toUTCString().slice(-12,-4)})]})}}]),n}(l.Component);function d(){var t=Date.now().toString().slice(-4);return"Clock-".concat(t)}var h=function(t){Object(s.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={hasClock:!0,clockName:"Clock-0",timerId:0},t.handleClick=function(){t.setState({hasClock:!0})},t.handleContextmenu=function(e){e.preventDefault(),t.setState({hasClock:!1})},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;document.addEventListener("click",this.handleClick),document.addEventListener("contextmenu",this.handleContextmenu);var e=window.setInterval((function(){t.setState({clockName:d()})}),3300);this.setState({timerId:e})}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.handleClick),document.removeEventListener("contextmenu",this.handleContextmenu),window.clearInterval(this.state.timerId)}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"React clock"}),this.state.hasClock&&Object(m.jsx)(u,{name:this.state.clockName})]})}}]),n}(l.Component);a.a.render(Object(m.jsx)(h,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.dc0f976b.chunk.js.map