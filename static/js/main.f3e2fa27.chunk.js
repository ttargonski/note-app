(this["webpackJsonpnote-app-firebase-react"]=this["webpackJsonpnote-app-firebase-react"]||[]).push([[0],{19:function(e,t,a){e.exports=a(35)},24:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(2),o=a.n(n),r=a(16),s=a.n(r),c=(a(24),a(6)),l=a(7),i=a(9),m=a(8),u=a(10),h=function(e){return o.a.createElement("header",{className:"note-header"},o.a.createElement("h3",{className:"main-title"},"Notatnik"),o.a.createElement("button",{className:"note-show-form",onClick:e.toggleClass},o.a.createElement("span",{className:"note-plus"},"+")))},d=a(17),p=a(18),b=a.n(p).a.initializeApp({apiKey:"AIzaSyCLscC5S6pXVVJkmhOoIDcMZPMq_gmDW3c",authDomain:"note-app-react-20bea.firebaseapp.com",databaseURL:"https://note-app-react-20bea.firebaseio.com",projectId:"note-app-react-20bea",storageBucket:"note-app-react-20bea.appspot.com",messagingSenderId:"869788691386",appId:"1:869788691386:web:c871fa5fa66b0c750c4b83",measurementId:"G-B7CTFVWV8H"}),f=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this))).handleChange=function(e){a.setState(Object(d.a)({},e.target.name,e.target.value))},a.createNote=function(){""!==a.state.body&&""!==a.state.title?(b.database().ref("notes").push({title:a.state.title,body:a.state.body}),a.setState({title:"",body:"",err:""}),a.props.toggleClass()):a.setState({err:"Wpisz tytu\u0142 oraz te\u015b\u0107 notatki"})},a.state={title:"",body:"",err:""},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"note-form"},o.a.createElement("h3",null,"Stw\xf3rz now\u0105 notatk\u0119"),o.a.createElement("div",{className:"note-form-group"},o.a.createElement("label",{htmlFor:"title"},"Tytu\u0142"),o.a.createElement("input",{name:"title",type:"text",onChange:this.handleChange,value:this.state.title,placeholder:"Tytu\u0142 mojej nowej notatki.."})),o.a.createElement("div",{className:"note-form-group"},o.a.createElement("label",{htmlFor:"body"},"Notatka"),o.a.createElement("textarea",{id:"form-note-body",name:"body",onChange:this.handleChange,value:this.state.body,placeholder:"Tre\u015b\u0107 mojej nowej notatki.."}),this.state.err?o.a.createElement("p",{className:"err"},this.state.err):null),o.a.createElement("button",{className:"note-form-btn",onClick:this.createNote},"Dodaj notatk\u0119"))}}]),t}(n.Component),v=function(e){function t(e){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).call(this))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"removeNote",value:function(e){b.database().ref("notes").child(e).remove()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"notes-wrapper"},this.props.notes.map((function(t){return o.a.createElement("div",{key:t.id,className:"note-box"},o.a.createElement("div",{className:"note-title"},o.a.createElement("h2",null,t.title),o.a.createElement("button",{onClick:function(){return e.removeNote(t.id)}},"+")),o.a.createElement("div",{className:"note-content"},o.a.createElement("p",null,t.body)))})))}}]),t}(n.Component),g=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={notes:[],newNote:!1},a.toggleClass=function(){a.setState({newNote:!a.state.newNote})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.db=b.database(),this.listenForChange()}},{key:"listenForChange",value:function(){var e=this;this.db.ref("notes").on("child_added",(function(t){var a={id:t.key,title:t.val().title,body:t.val().body},n=e.state.notes;n.push(a),e.setState({notes:n})})),this.db.ref("notes").on("child_removed",(function(t){var a=e.state.notes;a=a.filter((function(e){return e.id!==t.key})),e.setState({notes:a})}))}},{key:"render",value:function(){return o.a.createElement("div",{className:this.state.newNote?"App active":"App"},o.a.createElement(h,{toggleClass:this.toggleClass,newNote:this.state.newNote}),o.a.createElement(f,{toggleClass:this.toggleClass}),o.a.createElement(v,{notes:this.state.notes}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.f3e2fa27.chunk.js.map