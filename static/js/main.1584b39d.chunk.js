(this["webpackJsonpimmigrow-front-end"]=this["webpackJsonpimmigrow-front-end"]||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(20),i=n.n(s),r=(n(37),n(5)),o=n(19),l=(n(57),Object(a.createContext)(null)),j=n(3),d=n(2),u=function(){var e=Object(a.useContext)(l),t=e.user,n=e.setUser,c=Object(a.useState)(""),s=Object(r.a)(c,2),i=s[0],u=s[1],b=Object(a.useState)(""),h=Object(r.a)(b,2),m=h[0],O=h[1],p=Object(a.useState)(""),x=Object(r.a)(p,2),g=x[0],f=x[1],v=Object(j.e)();return Object(d.jsx)("div",{className:"LandingPage-container",children:Object(d.jsxs)("div",{className:"Login-container",children:[Object(d.jsxs)("div",{className:"logo-title",children:[Object(d.jsx)("div",{className:"Login-logo",children:Object(d.jsx)("img",{style:{height:"6rem"},alt:"logo",src:"imigrow.png"})}),Object(d.jsx)("div",{className:"LandingPage-title-container",children:Object(d.jsx)("h1",{className:"LandingPage-h1",children:"IMMIGROW"})})]}),Object(d.jsx)("div",{className:"form-container",children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n(Object(o.a)(Object(o.a)({},t),{},{name:i,email:m,password:g})),v.push("/details")},children:[Object(d.jsx)("input",{className:"Login-input",type:"text",placeholder:"Name",value:i,onChange:function(e){return u(e.target.value)},required:!0}),Object(d.jsx)("input",{className:"Login-input",type:"email",placeholder:"Email",value:m,onChange:function(e){return O(e.target.value)},required:!0}),Object(d.jsx)("input",{className:"Login-input",type:"password",placeholder:"Password",value:g,onChange:function(e){return f(e.target.value)},required:!0}),Object(d.jsx)("input",{className:"Login-input",type:"password",placeholder:"Re-Enter Password",required:!0}),Object(d.jsxs)("div",{className:"terms-agree",children:[Object(d.jsx)("input",{type:"checkbox",id:"box"}),Object(d.jsxs)("p",{children:["I agree to the ",Object(d.jsx)("span",{id:"link",children:"terms of service"})," & ",Object(d.jsx)("span",{id:"link",children:"security policy"})]})]}),Object(d.jsx)("button",{type:"submit",className:"Login-btn",children:"Sign Up"})]})}),Object(d.jsx)("div",{className:"policy",children:Object(d.jsx)("p",{children:"Terms of service | Privacy policy | Security"})})]})})},b=n(4),h=(n(67),function(){return Object(d.jsxs)("div",{className:"Signup-container",children:[Object(d.jsx)("div",{className:"immigrow-logo",children:Object(d.jsx)("img",{style:{height:"8rem"},alt:"logo",src:"imigrow.png"})}),Object(d.jsx)("h1",{className:"Signup-title",children:"IMMIGROW"}),Object(d.jsx)("p",{className:"can",children:"Canada"}),Object(d.jsx)("div",{className:"Signup-text",children:Object(d.jsx)("p",{children:"Making your transition to Canada easier with mentorship, community events and more."})}),Object(d.jsx)("p",{className:"lan-select",children:"Select your language"}),Object(d.jsx)("div",{className:"Signup-lan-container",children:Object(d.jsx)("div",{id:"google_translate_element"})}),Object(d.jsx)(b.b,{to:"/signup",children:Object(d.jsx)("button",{className:"Login-btn",children:"Get Started"})})]})}),m=(n(68),function(){return Object(d.jsxs)("div",{className:"UserDetails-header",children:[Object(d.jsx)("img",{style:{height:"3rem"},alt:"logo",src:"imigrow.png"}),Object(d.jsx)("h1",{className:"UserDetails-title",children:"IMMIGROW"})]})}),O=n(47),p=function(){var e=Object(a.useContext)(l),t=e.user,n=e.setUser,c=Object(a.useState)(""),s=Object(r.a)(c,2),i=s[0],u=s[1],b=Object(a.useState)(0),h=Object(r.a)(b,2),p=h[0],x=h[1],g=Object(j.e)();return Object(d.jsxs)("div",{className:"UserDetails-container",children:[Object(d.jsx)(m,{}),Object(d.jsx)("div",{className:"img-upload",children:Object(d.jsx)("div",{className:"img-contain",children:Object(d.jsx)(O.a,{className:"UserDetails-avatar"})})}),Object(d.jsxs)("div",{className:"text-info-User",children:[Object(d.jsx)("p",{className:"Details-txt",children:"Hi,"}),Object(d.jsxs)("p",{className:"Details-txt margin-btn",children:[t.name,"!"]}),Object(d.jsx)("p",{className:"margin-btn bio-txt",children:"Welcome to Immigrow! Please fill out a short bio so we can better connect you with others in your community."}),Object(d.jsx)("p",{className:"Details-txt margin-btn",children:"Bio"})]}),Object(d.jsx)("div",{className:"UserDetails-form-container",children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n(Object(o.a)(Object(o.a)({},t),{},{bio:i})),g.push("/homepage")},children:[Object(d.jsx)("textarea",{className:"DetailsPage-txt-area",placeholder:"Write a short bio about yourself...",value:i,onChange:function(e){u(e.target.value)},onKeyDown:function(e){return function(e){8!==e.keyCode?x(p+1):8===e.keyCode&&0===p?x(0):x(p-1)}(e)}}),Object(d.jsx)("div",{className:"char-remain",children:Object(d.jsxs)("p",{children:[p,"/200 characters"]})}),Object(d.jsx)("button",{type:"submit",className:"Login-btn long",children:"Submit"})]})})]})},x=(n(69),function(e){var t=e.dateone,n=e.imgone,a=e.datetwo,c=e.imgtwo,s=e.imgthree,i=e.datethree,r=e.btntxt,o=e.redirectLink,l=Object(j.e)(),u=function(){l.push(o)};return Object(d.jsxs)("div",{className:"content",children:[Object(d.jsxs)("div",{className:"col",children:[Object(d.jsxs)("div",{className:"content-one",children:[Object(d.jsx)("img",{style:{width:"100%",height:"40%",objectFit:"cover",overflow:"auto"},src:n,alt:"group"}),Object(d.jsx)("h3",{children:t}),Object(d.jsxs)("p",{children:["Finding a sense of community ",Object(d.jsx)("br",{}),"upon arrival"]})]}),Object(d.jsx)("div",{className:"content-two",children:Object(d.jsx)("button",{onClick:u,className:"content-btn",children:r})})]}),Object(d.jsxs)("div",{className:"col",children:[Object(d.jsxs)("div",{className:"content-one",children:[Object(d.jsx)("img",{style:{width:"100%",height:"40%",objectFit:"cover",overflow:"auto"},src:c,alt:"group"}),Object(d.jsx)("h3",{children:a}),Object(d.jsxs)("p",{children:["Finding a sense of community ",Object(d.jsx)("br",{}),"upon arrival"]})]}),Object(d.jsx)("div",{className:"content-two",children:Object(d.jsx)("button",{onClick:u,className:"content-btn",children:r})})]}),Object(d.jsxs)("div",{className:"col",children:[Object(d.jsxs)("div",{className:"content-one",children:[Object(d.jsx)("img",{style:{width:"100%",height:"40%",objectFit:"cover",overflow:"auto"},src:s,alt:"group"}),Object(d.jsx)("h3",{children:i}),Object(d.jsxs)("p",{children:["Finding a sense of community ",Object(d.jsx)("br",{}),"upon arrival"]})]}),Object(d.jsx)("div",{className:"content-two",children:Object(d.jsx)("button",{onClick:u,className:"content-btn",children:r})})]})]})}),g=(n(70),n(48)),f=n(49),v=n(50),N=n(30),y=n(29),C=n(9),k=n(10),w=n(16),S=n(15),M=(c.a.Component,function(){var e=Object(a.useContext)(l),t=e.active,n=e.handleColor;return Object(d.jsxs)("div",{className:"footerbar",children:[Object(d.jsxs)("div",{className:"/homepage"===t?"flex-col active":"flex-col",children:[Object(d.jsx)(b.b,{onClick:function(){return n("/homepage")},to:"/homepage",children:Object(d.jsx)(g.a,{className:"footer-icon black"})}),Object(d.jsx)("p",{className:"footer-text black",children:"HOME"})]}),Object(d.jsxs)("div",{className:"/groups"===t?"flex-col active":"flex-col",children:[Object(d.jsx)(f.a,{className:"footer-icon black"}),Object(d.jsx)("p",{className:"footer-text black",children:"GROUPS"})]}),Object(d.jsxs)("div",{className:"/events"===t?"flex-col active":"flex-col",children:[Object(d.jsx)(v.a,{className:"footer-icon black"}),Object(d.jsx)("p",{className:"footer-text black",children:"EVENTS"})]}),Object(d.jsxs)("div",{className:"/mentors"===t?"flex-col active":"flex-col",children:[Object(d.jsx)(b.b,{onClick:function(){return n("/mentors")},to:"/mentors",children:Object(d.jsx)(N.b,{className:"footer-icon black"})}),Object(d.jsx)("p",{className:"footer-text",children:"MENTORS"})]}),Object(d.jsxs)("div",{className:"/"===t?"flex-col active":"flex-col",children:[Object(d.jsx)(b.b,{onClick:function(){return n("/")},to:"/",children:Object(d.jsx)(y.a,{className:"footer-icon black"})}),Object(d.jsx)("p",{className:"footer-text",children:"LOGOUT"})]})]})}),P=n(51),D=(n(71),function(){return Object(d.jsxs)("div",{className:"UserDetails-header2nd",children:[Object(d.jsxs)("div",{className:"flex-row",children:[Object(d.jsx)("img",{style:{height:"3rem"},alt:"logo",src:"imigrow.png"}),Object(d.jsx)("h1",{className:"UserDetails-title",children:"IMMIGROW"})]}),Object(d.jsx)("div",{children:Object(d.jsx)(P.a,{className:"bell"})})]})}),L=(n(72),function(){return Object(d.jsxs)("div",{className:"Content-container",children:[Object(d.jsx)(D,{}),Object(d.jsxs)("div",{className:"Home-img",children:[Object(d.jsx)("h2",{children:"Upcoming Events"}),Object(d.jsx)(x,{imgone:"img2.jpg",dateone:"Aug 9, 7:00PM",imgtwo:"img3.jpg",datetwo:"Aug 11, 8:00PM",imgthree:"img4.jpg",datethree:"Aug 14, 11:00AM",btntxt:"View"}),Object(d.jsx)("h2",{children:"Community Groups"}),Object(d.jsx)(x,{imgone:"img8.jpg",dateone:"Aug 29, 7:00PM",imgtwo:"img9.jpg",datetwo:"Sep 3, 1:00PM",imgthree:"img7.jpg",datethree:"Sep 5, 11:00AM",btntxt:"Join"}),Object(d.jsx)("h2",{children:"Mentors"}),Object(d.jsx)(x,{imgone:"img5.jpg",dateone:"Sep 5 7:00PM",imgtwo:"img6.jpg",datetwo:"Sep 10, 11:30AM",imgthree:"img7.jpg",datethree:"Sep 5, 11:00AM",btntxt:"Connect",redirectLink:"/mentors"})]}),Object(d.jsx)(M,{})]})}),A=(n(73),function(){var e=Object(a.useContext)(l).user;return Object(d.jsxs)("div",{className:"Profile-page",children:[Object(d.jsxs)("div",{className:"Profile-container",children:[Object(d.jsxs)("h1",{children:["Welcome: ",e.name]}),Object(d.jsxs)("p",{children:["Email: ",e.email]}),Object(d.jsxs)("p",{children:["Age: ",e.age]}),Object(d.jsxs)("p",{children:["Language: ",e.language]}),Object(d.jsxs)("p",{children:["Hobbies: ",e.hobbies]}),Object(d.jsxs)("p",{children:["Bio: ",e.bio]})]}),Object(d.jsx)("div",{className:"btn-container",children:Object(d.jsx)(b.b,{to:"/homepage",children:Object(d.jsx)(N.a,{className:"back-btn"})})})]})}),E=n(7),U=n.n(E),I=n(14),T=n(36),G=(n(75),function(e){var t=e.event,n=Object(a.useState)(!1),c=Object(r.a)(n,2),s=c[0],i=c[1],o=function(){i(!s)};return Object(d.jsxs)("div",{className:"event-container",children:[Object(d.jsx)("h4",{children:t.eventName}),Object(d.jsx)("p",{className:"event-date",children:t.dateTime}),s?Object(d.jsxs)("div",{className:"attend-container",children:[Object(d.jsxs)("p",{className:"attend-txt",children:["Attending: ",Object(d.jsx)("span",{className:"check",children:t.name})," ",Object(d.jsx)("span",{children:"\u2714"})]}),Object(d.jsxs)("p",{children:["Event link: ",Object(d.jsx)("span",{className:"event-link",children:t.link})]}),Object(d.jsx)(T.a,{className:"btn-attend",onClick:o})]}):Object(d.jsxs)("div",{className:"attend-container",children:[Object(d.jsx)("p",{className:"unattend-txt",children:" Click to attend: "}),Object(d.jsx)(T.b,{className:"btn-unattend",onClick:o})]})]})}),F=(n(76),function(e){var t=e.mentor,n=Object(a.useState)(!1),c=Object(r.a)(n,2),s=c[0],i=c[1];return Object(d.jsxs)("div",{className:"Mentor-container",children:[Object(d.jsx)("h3",{className:"Mentor-title",children:t.name}),Object(d.jsx)("img",{style:{height:"10rem",width:"10rem",objectFit:"cover",borderRadius:"50%"},src:t.avatar,alt:"mentor",onClick:function(){i(!s)}}),Object(d.jsx)("p",{children:t.creds}),s?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h3",{children:"Upcoming Seminars:"}),t.events.map((function(e,t){return Object(d.jsx)(G,{event:e},t)}))]}):null,Object(d.jsx)("div",{className:"line-container",children:Object(d.jsx)("hr",{className:"design-line"})})]})}),_=n(52),R=n.n(_),B=(n(95),function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1];console.log(n);var s=function(){var e=Object(I.a)(U.a.mark((function e(){var t;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.get("https://immigrow-server.herokuapp.com/mentors");case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){s()}),[]),Object(d.jsxs)("div",{className:"padding-extra",children:[Object(d.jsx)(m,{}),n.map((function(e){return Object(d.jsx)(F,{mentor:e},e._id)})),Object(d.jsx)(M,{})]})}),W=n(32),z=(n(96),n(26)),V=n(102),q=n(31),H=n(25),J=(n(97),n(23)),K=(n(98),function(e){Object(w.a)(n,e);var t=Object(S.a)(n);function n(e){var a;return Object(C.a)(this,n),(a=t.call(this,e)).addEvent=function(){var e=Object(I.a)(U.a.mark((function e(t){var n,c;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,n=localStorage.getItem("token"),e.next=5,fetch("/api/events",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+n},body:JSON.stringify({name:a.state.name,location:a.state.location,lat:a.props.event.lat,lng:a.props.event.lng,time:a.props.event.time,date:a.state.date,details:a.state.details,firstname:a.state.firstname})});case 5:return c=e.sent,e.next=8,c.json();case 8:e.sent,a.props.updateMarker({name:a.state.name,location:a.state.location,lat:a.props.event.lat,lng:a.props.event.lng,date:a.state.date,details:a.state.details,firstname:a.state.firstname}),a.setState({name:"",location:"",date:"",details:"",firstname:""}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.error("Error:",e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}(),a.handleChange=function(e){console.log(e.target.checkValidity()),a.setState(Object(J.a)({},e.target.name,e.target.value))},a.state={name:"",location:"",date:"",details:"",firstname:""},a}return Object(k.a)(n,[{key:"render",value:function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("form",{className:"eventCreation",children:[Object(d.jsx)("input",{placeholder:"enter event name",type:"text",name:"name",value:this.state.name,onChange:this.handleChange}),Object(d.jsx)("input",{placeholder:"enter event address",type:"text",name:"location",value:this.state.location,onChange:this.handleChange}),Object(d.jsx)("input",{className:"date",placeholder:"enter date and time of event",type:"datetime-local",value:this.state.date,name:"date",onChange:this.handleChange}),Object(d.jsx)("input",{placeholder:"enter details of the event",type:"text",name:"details",value:this.state.details,onChange:this.handleChange}),Object(d.jsx)("input",{placeholder:"enter your first name",type:"text",name:"firstname",value:this.state.firstname,onChange:this.handleChange}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{onClick:this.addEvent,children:"Add event"})]})})}}]),n}(a.Component)),Y=["places"],X={width:"100vw",height:"100vh"},Z={lat:43.653225,lng:-79.383186},Q={styles:[{featureType:"administrative.country",elementType:"geometry",stylers:[{visibility:"simplified"},{hue:"#ff0000"}]}],disableDefaultUI:!0,zoomControl:!0};function $(){var e=Object(z.d)({googleMapsApiKey:"AIzaSyBIuDYexzGjNhhVg6kAVlH8-U1bXo_Po_s",libraries:Y}),t=e.isLoaded,n=e.loadError,s=c.a.useState([]),i=Object(r.a)(s,2),l=i[0],j=i[1],u=c.a.useState(null),b=Object(r.a)(u,2),h=b[0],m=b[1];Object(a.useEffect)((function(){var e=localStorage.getItem("token");fetch("/api/events",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+e}}).then((function(e){return e.json()})).then((function(e){var t=e.filter((function(e){return e.lat&&e.lng&&e.time})).map((function(e){return Object(o.a)(Object(o.a)({},e),{},{submitted:!0,time:new Date(e.time)})}));j(t)}))}),[]);var O=c.a.useCallback((function(e){j((function(t){return[].concat(Object(W.a)(t),[{lat:e.latLng.lat(),lng:e.latLng.lng(),time:new Date,submitted:!1}])}))}),[]),p=c.a.useRef(),x=c.a.useCallback((function(e){p.current=e}),[]),g=c.a.useCallback((function(e){var t=e.lat,n=e.lng;p.current.panTo({lat:t,lng:n}),p.current.setZoom(14)}),[]);return n?"Error loading map;":t?Object(d.jsxs)("div",{children:[Object(d.jsx)(ee,{panTo:g,setMarkers:j}),Object(d.jsxs)(z.a,{mapContainerStyle:X,zoom:8,center:Z,options:Q,onClick:O,onLoad:x,children:[l.map((function(e){return Object(d.jsx)(z.c,{position:{lat:e.lat,lng:e.lng},onMouseOver:function(){m(e)}},e.time.toISOString())})),h?Object(d.jsx)(z.b,{position:{lat:h.lat,lng:h.lng},onCloseClick:function(){m(null)},children:Object(d.jsxs)("div",{className:"info",children:[Object(d.jsx)("h2",{children:"Event Information:"}),h.submitted?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("p",{children:["Event Name: ",h.name]}),Object(d.jsxs)("p",{children:["Location: ",h.location]}),Object(d.jsxs)("p",{children:["Date: ",h.date]}),Object(d.jsxs)("p",{children:["Details: ",h.details]}),Object(d.jsxs)("p",{children:["Created By: ",h.firstname]})]}):Object(d.jsx)(K,{event:h,updateMarker:function(e){var t=e.name,n=e.location,a=e.lat,c=e.lng,s=e.date,i=e.details,r=e.firstname,o=Object(W.a)(l),d=o.find((function(e){return e.lat===a&&e.lng===c}));d.submitted=!0,d.name=t,d.location=n,d.date=s,d.details=i,d.firstname=r,j(o)}}),Object(d.jsxs)("p",{children:["Created: ",Object(V.a)(h.time,new Date)]})]})}):null]})]}):"Loading Maps"}function ee(e){var t=e.panTo,n=e.setMarkers,a=Object(q.a)({requestOptions:{location:{lat:function(){return 43.6532},lng:function(){return-79.3832}},radius:1e5}}),c=a.ready,s=a.value,i=a.suggestions,r=i.status,o=i.data,l=a.setValue,j=a.clearSuggestions;return Object(d.jsx)("div",{className:"search",children:Object(d.jsxs)(H.a,{onSelect:function(){var e=Object(I.a)(U.a.mark((function e(a){var c,s,i,r;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(a,!1),j(),e.prev=2,e.next=5,Object(q.b)({address:a});case 5:return c=e.sent,e.next=8,Object(q.c)(c[0]);case 8:s=e.sent,i=s.lat,r=s.lng,t({lat:i,lng:r}),n((function(e){return[].concat(Object(W.a)(e),[{lat:i,lng:r,time:new Date,submitted:!1}])})),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),console.log("\ud83d\ude31 Error: ",e.t0);case 18:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}(),children:[Object(d.jsx)(H.b,{className:"combobox",value:s,onChange:function(e){l(e.target.value)},disabled:!c,placeholder:"Enter an address"}),Object(d.jsx)(H.d,{children:"OK"===r&&o.map((function(e){var t=e.id,n=e.description;return Object(d.jsx)(H.c,{value:n},t)}))})]})})}var te=function(e){Object(w.a)(n,e);var t=Object(S.a)(n);function n(){var e;Object(C.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={lat:null,lng:null},e}return Object(k.a)(n,[{key:"componentDidMount",value:function(){var e=Object(I.a)(U.a.mark((function e(){var t,n,a;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){navigator.geolocation.getCurrentPosition((function(t){return e({lat:t.coords.latitude,lng:t.coords.longitude})}))}));case 2:t=e.sent,n=t.lat,a=t.lng,this.setState({lat:n,lng:a}),console.log(n,a);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{children:Object(d.jsx)("div",{children:Object(d.jsx)($,{className:"map",lat:this.state.lat,lng:this.state.lng})})}),Object(d.jsx)(M,{})]})}}]),n}(a.Component);function ne(e){return Object(d.jsxs)("div",{className:"post",children:[Object(d.jsx)("p",{className:"title",children:e.post.name}),Object(d.jsx)("p",{className:"content",children:e.post.content})]})}var ae=function(e){Object(w.a)(n,e);var t=Object(S.a)(n);function n(){var e;Object(C.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={content:""},e.handleChange=function(t){e.setState(Object(J.a)({},t.target.name,t.target.value))},e.handleSubmit=Object(I.a)(U.a.mark((function t(){var n,a;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={content:e.state.content},a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)},t.next=4,fetch("/api",a).then((function(e){return e.json()})).then((function(t){e.props.getPosts(),e.setState({content:""})}));case 4:case"end":return t.stop()}}),t)}))),e}return Object(k.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("textarea",{className:"formcontent",name:"content",onChange:this.handleChange,value:this.state.content}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{className:"submitbtn",onClick:this.handleSubmit,children:"Submit!"})]})}}]),n}(a.Component),ce=function(e){Object(w.a)(n,e);var t=Object(S.a)(n);function n(){var e;Object(C.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={posts:[]},e.getPosts=Object(I.a)(U.a.mark((function t(){return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/api").then((function(e){return e.json()})).then((function(t){return e.setState({posts:t})}));case 2:case"end":return t.stop()}}),t)}))),e}return Object(k.a)(n,[{key:"componentDidMount",value:function(){this.getPosts()}},{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"App",children:[this.state.posts.length?this.state.posts.map((function(t){return Object(d.jsx)(ne,{post:t,getPosts:e.getPosts})})):Object(d.jsx)("h1",{children:"Start a discussion with people of similar interests and backgrounds!"}),Object(d.jsx)(ae,{getPosts:this.getPosts}),Object(d.jsx)(M,{})]})}}]),n}(a.Component),se=(n(99),function(e){Object(w.a)(n,e);var t=Object(S.a)(n);function n(){return Object(C.a)(this,n),t.apply(this,arguments)}return Object(k.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(b.b,{to:"/forum",children:Object(d.jsx)("button",{className:"groups",children:"Community Group: French Speakers"})}),Object(d.jsx)(b.b,{to:"/forum",children:Object(d.jsx)("button",{className:"groups",children:"Community Group: Newcomers From Bahrain"})}),Object(d.jsx)(b.b,{to:"/forum",children:Object(d.jsx)("button",{className:"groups",children:"Community Group: Seeking Employment Opportunities"})}),Object(d.jsx)(b.b,{to:"/forum",children:Object(d.jsx)("button",{className:"groups",children:"Community Group: Urdu Speakers"})}),Object(d.jsx)(b.b,{to:"/forum",children:Object(d.jsx)("button",{className:"groups",children:"Community Group: Language Learning"})}),Object(d.jsx)(M,{})]})}}]),n}(a.Component));function ie(){var e=Object(a.useState)("/homepage"),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)({name:"",email:"",password:"",language:"",hobbies:"",age:"",bio:""}),i=Object(r.a)(s,2),o=i[0],m=i[1];return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(b.a,{children:Object(d.jsxs)(l.Provider,{value:{user:o,setUser:m,active:n,setActive:c,handleColor:function(e){c(e)}},children:[Object(d.jsx)(j.a,{path:"/",exact:!0,component:h}),Object(d.jsx)(j.a,{path:"/signup",component:u}),Object(d.jsx)(j.a,{path:"/details",component:p}),Object(d.jsx)(j.a,{path:"/homepage",component:L}),Object(d.jsx)(j.a,{path:"/profile/:id",component:A}),Object(d.jsx)(j.a,{path:"/mentors",component:B}),Object(d.jsx)(j.a,{path:"/events",component:te}),Object(d.jsx)(j.a,{path:"/groups",component:se}),Object(d.jsx)(j.a,{path:"/forum",component:ce})]})})})}i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(ie,{})}),document.getElementById("root"))},37:function(e,t,n){},57:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){e.exports={search:"Map_search__22he7",info:"Map_info__RYT3d"}},98:function(e,t,n){},99:function(e,t,n){}},[[100,1,2]]]);
//# sourceMappingURL=main.1584b39d.chunk.js.map