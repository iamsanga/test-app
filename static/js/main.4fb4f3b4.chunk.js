(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(30)},30:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),s=a.n(l),o=a(35),c=a(18),u=a(3),i=a(4),m=a(6),p=a(5),h=a(7),b=(a(25),a(32)),d=a(33),E=a(37),v=a(34),f=a(36),g=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).onChangeName=function(e){a.setState({name:e.target.value})},a.onChangeShop=function(e){a.setState({shop:e.target.value})},a.onChangeStatus=function(e){a.setState({status:e.target.value})},a.onSubmit=function(e){e.preventDefault();var t={name:a.state.name,shop:a.state.shop,status:a.state.status};a.props.data(t),a.setState({name:"",shop:"",status:""})},a.state={name:"",shop:"",status:""},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{marginTop:10}},r.a.createElement("h3",{align:"center"},"Details"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null," Name "),r.a.createElement("input",{type:"text",className:"form-control",value:this.state.name,onChange:this.onChangeName})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Shop "),r.a.createElement("input",{type:"text",className:"form-control",value:this.state.shop,onChange:this.onChangeShop})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Status "),r.a.createElement("input",{type:"text",className:"form-control",value:this.state.status,onChange:this.onChangeStatus})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Submit",className:"btn btn-primary",disabled:!this.state.name||!this.state.shop||""===this.state.status}))))}}]),t}(n.Component),S=Object(f.a)(g),y=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).onChangeName=function(e){a.setState({name:e.target.value})},a.onChangeShop=function(e){a.setState({shop:e.target.value})},a.onChangeStatus=function(e){a.setState({status:e.target.value})},a.onSubmit=function(e){e.preventDefault();var t=a.props.history.location.state.name,n={name:a.state.name,shop:a.state.shop,status:a.state.status};a.props.onEdit(n,t),a.props.history.push("/index")},a.state={name:a.props.history.location.state.name,shop:a.props.history.location.state.shop,status:a.props.history.location.state.status},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{marginTop:10}},r.a.createElement("h3",{align:"center"},"Update Details"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null," Name "),r.a.createElement("input",{type:"text",className:"form-control",value:this.state.name,onChange:this.onChangeName})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Shop "),r.a.createElement("input",{type:"text",className:"form-control",value:this.state.shop,onChange:this.onChangeShop})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Status "),r.a.createElement("input",{type:"text",className:"form-control",value:this.state.status,onChange:this.onChangeStatus})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Update",className:"btn btn-primary"}))))}}]),t}(n.Component),j=Object(f.a)(y),N=a(19),C=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleEdit=function(e){a.props.history.push("/edit",Object(N.a)({},e))},a.delete=function(){a.props.del(a.props.obj.name)},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("tr",null,r.a.createElement("td",null,this.props.obj.name),r.a.createElement("td",null,this.props.obj.shop),r.a.createElement("td",null,this.props.obj.status),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(t){e.handleEdit(e.props.obj)},className:"btn btn-primary"},"Edit")),r.a.createElement("td",null,r.a.createElement("button",{onClick:this.delete,className:"btn btn-danger"},"Delete")))}}]),t}(n.Component),O=Object(f.a)(C),k=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).delete=function(e){a.props.onDelete(e)},a.search=function(e){var t=e.target.value;a.props.onSearch(t)},a.tabRow=function(){return a.props.data.map(function(e,t){return r.a.createElement(O,{del:a.delete,obj:e,key:t})})},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("input",{type:"search",placeholder:"Search by name...",onChange:this.search,class:"form-control"}),r.a.createElement("table",{className:"table table-striped",style:{marginTop:20}},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Shop"),r.a.createElement("th",null,"Status"),r.a.createElement("th",{colSpan:"2"},"Action"))),r.a.createElement("tbody",null,this.tabRow())))}}]),t}(n.Component),x=Object(f.a)(k),D=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).onSearch=function(e){a.setState({query:e});var t=a.state.data;t=t.filter(function(e){return-1!==e.name.toLowerCase().search(a.state.query.toLowerCase())}),a.setState({results:t})},a.receiveData=function(e){a.setState({data:[].concat(Object(c.a)(a.state.data),[e])})},a.onDelete=function(e){var t=a.state.data.filter(function(t){return t.name!==e});a.setState({data:t,results:t})},a.onEdit=function(e,t){var n=a.state.data;n=n.map(function(a){return a.name===t&&(a.name=e.name,a.shop=e.shop,a.status=e.status),n}),a.setState({updateData:n})},a.state={data:[],results:[],query:""},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.results,l=t.query,s=""===n||l?n:a;return r.a.createElement(b.a,null,r.a.createElement("div",{className:"container"},r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-blue bg-dark"},r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.a,{to:"/create",className:"nav-link"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.a,{to:"/index",className:"nav-link"},"Records"))))),r.a.createElement(E.a,null,r.a.createElement(v.a,{exact:!0,path:"/",render:function(){return r.a.createElement(S,{data:e.receiveData})}}),r.a.createElement(v.a,{path:"/create",render:function(){return r.a.createElement(S,{data:e.receiveData})}}),r.a.createElement(v.a,{path:"/edit",render:function(){return r.a.createElement(j,{onEdit:e.onEdit})}}),r.a.createElement(v.a,{path:"/index",render:function(){return r.a.createElement(x,{onSearch:e.onSearch,onDelete:e.onDelete,data:s})}}))))}}]),t}(n.Component);s.a.render(r.a.createElement(o.a,{basename:"/test-app"},r.a.createElement(D,null)),document.getElementById("root"))}},[[20,2,1]]]);
//# sourceMappingURL=main.4fb4f3b4.chunk.js.map