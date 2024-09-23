(()=>{"use strict";var e={8296:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Oe});var r=n(2536),o=n(8920),i=n(5544),a=n(7080),s=n(6164),l=n(8700),c=n(3296),u=n(984),d=n(7088),f=n(2920),h=n(2232),p=n(6184),m=n(2988),b=(n(3096),n(7840)),y=n(4504),x="#FF412E",g="#001F3F",j="#FFFFFF",w="AvenirNext-Heavy",v={scrollContainer:{minHeight:"100%"},container:{alignItems:"center",backgroundColor:g,marginTop:0,paddingTop:30,flex:1},buttonContainer:{flexDirection:"row",justifyContent:"center",padding:5},row:{flexDirection:"row",justifyContent:"space-between"},h1:{color:"#7FDBFF",fontSize:30,textAlign:"center",width:"100%",fontFamily:w},h2:{color:x,fontSize:21,marginTop:5,textAlign:"center",width:"100%",fontFamily:w},tempText:{color:"white",fontSize:30,fontWeight:"bold",marginTop:20}};const S=y.default.create(v);var C={base:{alignItems:"center",borderColor:"white",borderRadius:5,flexDirection:"row",justifyContent:"center",marginTop:20,paddingHorizontal:20,paddingVertical:20,textAlign:"center"},fullWidth:{width:"100%"},textStyling:{color:j,fontFamily:w,fontSize:36,letterSpacing:4},shadowProp:{shadowColor:"#000000",shadowOffset:{width:7,height:7},shadowOpacity:.5,shadowRadius:0},primary:{backgroundColor:x,borderColor:"white",color:"white",margin:6,borderRadius:5,padding:10},secondary:{backgroundColor:g,borderColor:"white",color:"white"},primaryText:{color:j,fontSize:18,textAlign:"center",textTransform:"uppercase"},disabledButton:{backgroundColor:"#777777",opacity:.3},icon:{marginLeft:7,marginTop:-4}};const k=y.default.create(C);const O=y.default.create({textInput:{alignItems:"center"},input:{backgroundColor:"white",borderColor:"#666",borderRadius:2,borderWidth:2,height:50,marginBottom:20,marginHorizontal:10,marginVertical:10,padding:10,width:90,fontSize:21,fontWeight:"bold"},inputFullWidth:{backgroundColor:"white",borderColor:"#666",borderRadius:2,borderWidth:2,height:50,marginBottom:20,marginHorizontal:10,marginVertical:10,padding:10,width:"100%",fontSize:21,fontWeight:"bold",textAlign:"center"},inputLabel:{color:"white",fontSize:18,marginBottom:5,marginTop:25},center:{alignItems:"center"}});var I=n(2272),B=n(5802),T=n(9312);function P(e,t,n){return t=(0,p.default)(t),(0,h.default)(e,R()?Reflect.construct(t,n||[],(0,p.default)(e).constructor):t.apply(e,n))}function R(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(R=function(){return!!e})()}var M=function(e){function t(){return(0,d.default)(this,t),P(this,t,arguments)}return(0,m.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){return(0,T.jsxs)(I.default,{activeOpacity:k.activeOpacity,disabled:this.props.disabled,style:[k.base,k.primary,k.shadowProp,this.props.styles],onPress:this.props.onPress,children:[(0,T.jsx)(s.default,{style:k.textStyling,children:this.props.buttonText}),(0,T.jsx)(s.default,{style:k.icon,children:this.props.icon_name?(0,T.jsx)(B.default,{name:this.props.icon_name,size:this.props.icon_size||36,color:this.props.icon_color||"white"}):""})]})}}]),t}(i.Component),z=n(3078),D=function(e){return Math.round(e)},q=function(e){return e.toString()},_=n(8864);function A(e,t,n){return t=(0,p.default)(t),(0,h.default)(e,L()?Reflect.construct(t,n||[],(0,p.default)(e).constructor):t.apply(e,n))}function L(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(L=function(){return!!e})()}var F=function(e){function t(e){var n;return(0,d.default)(this,t),(n=A(this,t,[e])).setPeople=function(e){n.setState({people:e,sacks:D(4*e/35*10)/10,lbs:D(4*e)},(function(){n.props.updateCalculatorData({people:n.state.people,sacks:n.state.sacks,lbs:n.state.lbs,pricePerlb:n.state.pricePerlb})}))},n.setLbs=function(e){n.setState({lbs:e,sacks:D(e/35*10)/10,people:Math.ceil(e/4)},(function(){n.props.updateCalculatorData({people:n.state.people,sacks:n.state.sacks,lbs:n.state.lbs,pricePerlb:n.state.pricePerlb})}))},n.setSacks=function(e){n.setState({sacks:e,people:D(35*e/4),lbs:35*e*10/10},(function(){n.props.updateCalculatorData({people:n.state.people,sacks:n.state.sacks,lbs:n.state.lbs,pricePerlb:n.state.pricePerlb})}))},n.setPricePerlb=function(e){n.setState({pricePerlb:e},(function(){n.props.updateCalculatorData({people:n.state.people,sacks:n.state.sacks,lbs:n.state.lbs,pricePerlb:n.state.pricePerlb})}))},n.setButtonState=function(e){var t=e>0;t?n.setState({buttonStyles:k.primary,isButtonDisabled:!1}):n.setState({buttonStyles:k.disabledButton,isButtonDisabled:!0}),n.props.setCalculatorReadyState(t)},n.state={people:"",lbs:"",sacks:"",pricePerlb:"",buttonStyles:k.disabledButton,isCalculatorReady:n.props.isCalculatorReady,isButtonDisabled:!0},n}return(0,m.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){var e=this;return(0,T.jsx)(_.SafeAreaView,{style:S.container,children:(0,T.jsx)(z.KeyboardAwareScrollView,{contentContainerStyle:S.scrollContainer,children:(0,T.jsxs)(a.default,{children:[(0,T.jsx)(s.default,{style:S.h1,children:"BOIL HERO"}),(0,T.jsx)(s.default,{style:S.h2,children:"Crawculator"}),(0,T.jsxs)(a.default,{style:S.row,children:[(0,T.jsxs)(a.default,{style:O.textInput,children:[(0,T.jsx)(s.default,{style:O.inputLabel,children:"Pounds"}),(0,T.jsx)(b.default,{maxLength:4,style:O.input,placeholder:"",placeholderTextColor:"#444",onChangeText:function(t){e.setLbs(t),e.setButtonState(t)},keyboardType:"numeric",value:this.state.lbs>0?q(this.state.lbs):""})]}),(0,T.jsxs)(a.default,{style:O.textInput,children:[(0,T.jsx)(s.default,{style:O.inputLabel,children:"People"}),(0,T.jsx)(b.default,{maxLength:3,style:O.input,placeholder:"",placeholderTextColor:"#444",onChangeText:function(t){e.setPeople(t),e.setButtonState(t)},keyboardType:"numeric",value:this.state.people>0?q(this.state.people):""})]}),(0,T.jsxs)(a.default,{style:O.textInput,children:[(0,T.jsx)(s.default,{style:O.inputLabel,children:"Sacks"}),(0,T.jsx)(b.default,{maxLength:3,style:O.input,placeholder:"",placeholderTextColor:"#444",onChangeText:function(t){e.setSacks(t),e.setButtonState(t)},keyboardType:"decimal-pad",value:this.state.sacks>0?q(this.state.sacks):""})]})]}),(0,T.jsxs)(a.default,{style:O.center,children:[(0,T.jsx)(s.default,{style:O.inputLabel,children:"$ Price per/lb"}),(0,T.jsx)(b.default,{style:O.input,placeholder:"",placeholderTextColor:"#444",onChangeText:function(t){e.setPricePerlb(t)},keyboardType:"decimal-pad",value:this.state.pricePerlb>0?q(this.state.pricePerlb):""})]}),(0,T.jsx)(a.default,{children:(0,T.jsx)(M,{buttonText:"NEXT",styles:this.state.buttonStyles,disabled:this.state.isButtonDisabled,icon_name:"arrow-right",onPress:function(){return e.props.navigation.navigate("Shopping",{sacks:e.state.sacks,people:e.state.people,lbs:e.state.lbs,pricePerlb:e.state.pricePerlb})}})})]})})})}}]),t}(i.Component),V=n(9828),W={scrollContainer:{},container:{backgroundColor:g,flex:1,paddingBottom:0,flex:1,alignItems:"flex-start",justifyContent:"flex-start"},buttonContainer:{flexDirection:"row",justifyContent:"center",paddingVertical:20},row:{flexDirection:"row"},listItemText:{color:"white",width:"100%",fontSize:21,paddingRight:40},listItemTextisChecked:{textDecorationLine:"line-through",opacity:.4},listItemTextMedium:{color:"white",width:"100%",fontSize:18},listItemWrapper:{flexDirection:"row",justifyContent:"space-between",alignItems:"flex-start",paddingVertical:15,borderBottomWidth:1,borderColor:"rgba(255, 255, 255, 0.06)"},checkbox:{color:"rgba(255, 255, 255, 0.6)",height:30,width:30,marginRight:15,marginTop:-1}};const Q=y.default.create(W);var $=function(e){var t=e.lbs;e.people;return[{id:1,title:"Traditional Cajun",maxBatches:3,ingredients:[{name:"Live Crawfish",perSackMeasurement:"35",ingredientMeasurement:"lbs",measurement:"lbs",quantity:t,subsequentBatchQuantityRatio:1,price:e.crawfishPricePerLbs,timeIn:"00:45:00",instructions:"Washed",buyOnce:!1},{name:"Lemons",perSackMeasurement:"10",ingredientMeasurement:"",measurement:"",quantity:10,subsequentBatchQuantityRatio:.5,price:.5,timeIn:"00:15:00",instructions:"Cut in half",buyOnce:!1},{name:"Oranges",perSackMeasurement:"6",ingredientMeasurement:"",measurement:"",quantity:6,subsequentBatchQuantityRatio:.5,price:.45,timeIn:"00:15:00",instructions:"Cut in half",buyOnce:!1},{name:"Sweet Corn",quantity:4,perSackMeasurement:4,ingredientMeasurement:"Ears",measurement:"Ears",price:1.25,subsequentBatchQuantityRatio:.5,timeIn:"00:60:00",instructions:"Shucked & halved",buyOnce:!1},{name:"Celery",perSackMeasurement:"1",ingredientMeasurement:"Bunch",measurement:"Bunch",quantity:1,subsequentBatchQuantityRatio:0,price:3,timeIn:"00:01:00",instructions:"Chopped",buyOnce:!1},{name:"Garlic",perSackMeasurement:"8",ingredientMeasurement:"Bulbs",measurement:"Bulbs",quantity:8,subsequentBatchQuantityRatio:.5,price:.5,timeIn:"00:10:00",instructions:"Halved sideways",buyOnce:!1},{name:"Yellow Onions",perSackMeasurement:"6",ingredientMeasurement:"",measurement:"",quantity:6,subsequentBatchQuantityRatio:.5,price:.6,timeIn:"00:01:00",instructions:"Cut in half",buyOnce:!1},{name:"Red Potatoes",perSackMeasurement:"1",ingredientMeasurement:"2lb bag",measurement:"2lb bag",quantity:1,subsequentBatchQuantityRatio:1,price:3,timeIn:"00:30:00",instructions:"Whole",buyOnce:!1},{name:"Mushrooms",perSackMeasurement:"1",ingredientMeasurement:"16oz container",measurement:"16oz container",quantity:1,subsequentBatchQuantityRatio:1,price:3,timeIn:"00:30:00",instructions:"Whole",buyOnce:!1},{name:"Zatarain's Pro Boil",quantity:1,perSackMeasurement:"1",ingredientMeasurement:"53oz Jar",measurement:"53oz Jar",price:8.18,subsequentBatchQuantityRatio:.5,timeIn:"00:30:00",instructions:"",buyOnce:!1},{name:"Zatarain's Liquid Crab Boil",quantity:1,perSackMeasurement:"1",ingredientMeasurement:"4oz Bottle",measurement:"4oz Bottle",price:2.39,subsequentBatchQuantityRatio:0,timeIn:"00:16:00",instructions:"",buyOnce:!1},{name:"Cayenne Pepper",perSackMeasurement:"1",ingredientMeasurement:"16oz",measurement:"16oz",quantity:1,subsequentBatchQuantityRatio:.5,price:7.18,timeIn:"00:20:00",instructions:"Adjust to taste",buyOnce:!1},{name:"Sugar",perSackMeasurement:"1/4",ingredientMeasurement:"Cup",measurement:"16oz Can",quantity:1,subsequentBatchQuantityRatio:0,price:1.79,timeIn:"00:20:00",instructions:"",buyOnce:!0},{name:"Whole Cloves",perSackMeasurement:"3",ingredientMeasurement:"",measurement:"0.62 Oz Container",quantity:1,subsequentBatchQuantityRatio:0,price:5,timeIn:"00:05:00",instructions:"",buyOnce:!0},{name:"Andouille Sausage",perSackMeasurement:"1",ingredientMeasurement:"lb",measurement:"lb",quantity:1,subsequentBatchQuantityRatio:1,price:7.5,timeIn:"00:30:00",instructions:"Sliced",buyOnce:!1}]}]},E=function(e,t,n,r,o,i,a){var s=function(e){return Math.round(e)}(n),l=Math.ceil(s/r),c=a?1:e*l+e*t*(s-l);return"Live Crawfish"==o?Math.round(i):Math.floor(c)},N=function(e,t,n,r,o,i,a){return D(e*E(t,n,r,o,i,a)*100)/100},H=n(5504);function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Z(e,t,n){return t=(0,p.default)(t),(0,h.default)(e,K()?Reflect.construct(t,n||[],(0,p.default)(e).constructor):t.apply(e,n))}function K(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(K=function(){return!!e})()}function X(e){return e?` - ${e}`:" - "}var Y=function(e){function t(e){var n;(0,d.default)(this,t),(n=Z(this,t,[e])).initializeItems=function(){var e=n.props,t=e.sacks,r=e.lbs,o=e.pricePerlb;return $({lbs:r,crawfishPricePerLbs:o})[0].ingredients.map((function(e,n){return{id:n,text:`${E(e.quantity,e.subsequentBatchQuantityRatio,t,3,e.name,r,e.buyOnce)}${X(e.measurement)} ${e.name}: $ ${N(e.price,e.quantity,e.subsequentBatchQuantityRatio,t,3,e.name,r)}`,checked:!1}}))},n.toggleCheckbox=function(e){n.setState((function(t){return{items:t.items.map((function(t){return t.id===e?G(G({},t),{},{checked:!t.checked}):t}))}}),(function(){return n.props.updateCheckboxStates(n.state.items)}))},n.renderItems=function(){return n.state.items.map((function(e){return(0,T.jsx)(a.default,{style:Q.itemContainer,children:(0,T.jsxs)(I.default,{onPress:function(){return n.toggleCheckbox(e.id)},style:Q.listItemWrapper,children:[(0,T.jsx)(H.default,{name:e.checked?"checkmark-circle-outline":"ellipse-outline",size:32,color:"rgba(255, 255, 255, 0.65)",style:Q.checkbox}),(0,T.jsx)(s.default,{style:[Q.listItemText,e.checked&&Q.listItemTextisChecked],children:e.text})]})},e.id)}))};var r=n.props,o=r.sacks,i=r.lbs,l=r.pricePerlb,c=r.people;return n.state={items:n.initializeItems(o,i,l,c)},n}return(0,m.default)(t,e),(0,f.default)(t,[{key:"componentDidMount",value:function(){this.props.checkboxStates&&Object.keys(this.props.checkboxStates).length>0&&this.setState({items:this.props.checkboxStates})}},{key:"render",value:function(){var e=this.props,t=e.sacks,n=e.lbs,r=e.pricePerlb,o=e.people,i=$({lbs:n,crawfishPricePerLbs:r});return(0,T.jsxs)(a.default,{children:[this.renderItems(),function(e){var r=0;e.forEach((function(e){r+=N(e.price,e.quantity,e.subsequentBatchQuantityRatio,t,3,e.name,n)}));var i=Math.round(r),l=i.toLocaleString(),c=Math.round(i/o);return(0,T.jsxs)(a.default,{children:[(0,T.jsxs)(s.default,{style:{fontSize:30,marginTop:36,marginBottom:10,fontWeight:"bold",color:"#01FF70",textAlign:"center"},children:["Est. Total: $",l]}),(0,T.jsxs)(s.default,{style:{color:"white",fontSize:20,marginVertical:10,fontWeight:"normal",textAlign:"center"},children:["$",c," Per Person"]})]})}(i[0].ingredients)]})}}]),t}(i.Component);const U=y.default.create({h1:{color:"white",fontSize:24,marginVertical:10,width:"100%",textAlign:"center"},h2:{color:"white",fontSize:17,marginVertical:20,width:"100%",textAlign:"center",fontWeight:"bold"}});function ee(e,t,n){return t=(0,p.default)(t),(0,h.default)(e,te()?Reflect.construct(t,n||[],(0,p.default)(e).constructor):t.apply(e,n))}function te(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(te=function(){return!!e})()}var ne=function(e){function t(){return(0,d.default)(this,t),ee(this,t,arguments)}return(0,m.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){return(0,T.jsx)(a.default,{children:(0,T.jsx)(s.default,{style:U.h2,children:this.props.headerText})})}}]),t}(i.Component),re={container:{backgroundColor:g,flex:1,paddingBottom:0,flex:1},buttonContainer:{flexDirection:"row",justifyContent:"center",paddingVertical:20},row:{flexDirection:"row"},listContainer:{paddingHorizontal:20,width:"100%"},listItem:{borderBottomWidth:1,borderColor:"rgba(0, 0, 0, 0.3)",marginBottom:1,paddingVertical:7,width:"100%",color:"white"},listItemText:{color:"white",width:"100%",fontSize:21},listItemTextMedium:{color:"white",width:"100%",fontSize:18}};const oe=y.default.create(re);function ie(e,t,n){return t=(0,p.default)(t),(0,h.default)(e,ae()?Reflect.construct(t,n||[],(0,p.default)(e).constructor):t.apply(e,n))}function ae(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(ae=function(){return!!e})()}var se=function(e){function t(){return(0,d.default)(this,t),ie(this,t,arguments)}return(0,m.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){var e=this.props,t=e.checkboxStates,n=e.updateCheckboxStates,r=this.props.route.params||{},o=r.sacks,i=r.people,s=r.lbs,l=r.pricePerlb,c=`Shopping List:\n${s} pounds, at $ ${l} /lb`;return(0,T.jsx)(_.SafeAreaView,{style:oe.container,children:(0,T.jsx)(V.default,{contentContainerStyle:oe.scrollContainer,children:(0,T.jsxs)(a.default,{style:oe.listContainer,children:[(0,T.jsx)(ne,{headerText:c}),(0,T.jsx)(Y,{sacks:o,lbs:s,pricePerlb:l,people:i,checkboxStates:t,updateCheckboxStates:n})]})})})}}]),t}(i.Component),le={scrollContainer:{},container:{backgroundColor:g,flex:1},buttonContainer:{flexDirection:"row",justifyContent:"center",paddingVertical:20},row:{flexDirection:"row"},header:{color:j,fontSize:32,paddingBottom:16},body:{color:j,fontSize:18,padding:16,lineHeight:30},content:{paddingHorizontal:16,paddingVertical:32,width:"100%"},listItem:{borderBottomWidth:1,paddingVertical:20,width:"100%",color:"white",fontSize:16},listItemText:{color:"white",width:"100%",fontSize:20,marginBottom:24}};const ce=y.default.create(le);function ue(e,t,n){return t=(0,p.default)(t),(0,h.default)(e,de()?Reflect.construct(t,n||[],(0,p.default)(e).constructor):t.apply(e,n))}function de(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(de=function(){return!!e})()}var fe=function(e){function t(){return(0,d.default)(this,t),ue(this,t,arguments)}return(0,m.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){var e=this.props.route.params||{},t=e.lbs,n=e.crawfishPricePerLbs,r=$({lbs:t,crawfishPricePerLbs:n});return(0,T.jsx)(_.SafeAreaView,{style:ce.container,children:(0,T.jsxs)(V.default,{contentContainerStyle:ce.scrollContainer,children:[(0,T.jsx)(ne,{headerText:"Boiling Instructions"}),(0,T.jsx)(s.default,{style:ce.body,children:"This is how we boil crawfish. It's is a base recipe that should get you started. We hope you'll take what we've presented and make it your own."}),(0,T.jsxs)(a.default,{style:ce.content,children:[(0,T.jsx)(s.default,{style:ce.header,children:"The Basics"}),(0,T.jsx)(s.default,{style:ce.listItemText,children:"1. Make a Stock "}),(0,T.jsx)(s.default,{style:ce.listItemText,children:"2. Cook Vegetables"}),(0,T.jsx)(s.default,{style:ce.listItemText,children:"3. Add Seasoning"}),(0,T.jsx)(s.default,{style:ce.listItemText,children:"4. Add Crawfish"}),(0,T.jsx)(s.default,{style:ce.listItemText,children:"5. Cool Down"}),(0,T.jsx)(s.default,{style:ce.listItemText,children:"6. Soak"})]}),(0,T.jsxs)(a.default,{style:ce.content,children:[(0,T.jsx)(s.default,{style:ce.header,children:"Ingredients"}),(0,T.jsx)(s.default,{style:ce.listItemText,children:"This is the basic ingredients for 1 sack of crawfish, assuming you're using a 60 or 80qt pot."}),(0,T.jsx)(s.default,{style:ce.listItem,children:function(e){var t="";return e.forEach((function(e,n){e.ingredients.forEach((function(e){var n=e.instructions?` (${e.instructions})`:"",r=e.ingredientMeasurement?` ${e.ingredientMeasurement}`:"";t+=`${e.perSackMeasurement} -${r} ${e.name} ${n} \n`})),t+="\n"})),t}(r)})]}),(0,T.jsxs)(a.default,{style:ce.content,children:[(0,T.jsx)(s.default,{style:ce.header,children:"1. Make a Stock"}),(0,T.jsx)(s.default,{style:ce.listItemText,children:"\u2022 Fill an 80qt pot (preferably with a boil basket) with water 1/3 of the way"}),(0,T.jsx)(s.default,{style:ce.listItemText,children:"\u2022 Bring the water to a boil"}),(0,T.jsx)(s.default,{style:ce.listItemText,children:"\u2022 Drop in the Onions, Garlic, Celery, Orange, Lemons Boil for ~ 20-30 mins to develop a vegetable stock"}),(0,T.jsx)(s.default,{style:ce.listItemText,children:"\u2022 Add dry seasoning"}),(0,T.jsx)(s.default,{style:ce.listItemText,children:"\u2022 Add liquid seasoning, Cayenne, Sugar, Orange Juice"}),(0,T.jsx)(s.default,{style:ce.listItemText,children:"\u2022 Stir"})]}),(0,T.jsxs)(a.default,{style:ce.content,children:[(0,T.jsx)(s.default,{style:ce.header,children:"3. Cook Vegetables"}),(0,T.jsx)(s.default,{style:ce.listItemText,children:"\u2022 Add potatoes, sausage, and mushrooms"}),(0,T.jsx)(s.default,{style:ce.listItemText,children:"\u2022 Boil for 10 min"})]}),(0,T.jsxs)(a.default,{style:ce.content,children:[(0,T.jsx)(s.default,{style:ce.header,children:"4. Add Crawfish"}),(0,T.jsx)(s.default,{style:ce.listItemText,children:"\u2022 Bring the water to a roiling boil."}),(0,T.jsx)(s.default,{style:ce.listItemText,children:"\u2022 Drop the live crawfish into the pot and boil for Apx 10 min with the lid on."}),(0,T.jsx)(s.default,{style:ce.listItemText,children:"\u2022 Stir occasionaly to ensure all crawfish are cooked"})]}),(0,T.jsxs)(a.default,{style:ce.content,children:[(0,T.jsx)(s.default,{style:ce.header,children:"5. Cool Down"}),(0,T.jsx)(s.default,{style:ce.listItemText,children:"\u2022 Turn the fire off"}),(0,T.jsx)(s.default,{style:ce.listItemText,children:"\u2022 Remove the lid"}),(0,T.jsx)(s.default,{style:ce.listItemText,children:"\u2022 Add the corn"}),(0,T.jsx)(s.default,{style:ce.listItemText,children:"\u2022 Cool down the pot by running cool water on the outside of the pot with a water hose. Some people prefer 5-10 lbs of ice directly in the boil, but there is some debate around this method of cooling down the pot as it adds water."})]}),(0,T.jsxs)(a.default,{style:ce.content,children:[(0,T.jsx)(s.default,{style:ce.header,children:"6. Soak"}),(0,T.jsx)(s.default,{style:ce.listItemText,children:"\u2022 Let the boil soak for 30-45 min"}),(0,T.jsx)(s.default,{style:ce.listItemText,children:"\u2022 Slowly remove the boil basket from the water"}),(0,T.jsx)(s.default,{style:ce.listItemText,children:"\u2022 Drain for 5 min"}),(0,T.jsx)(s.default,{style:ce.listItemText,children:"\u2022 Pour on a communal table, and enjoy with friends and family!"})]})]})})}}]),t}(i.Component),he={container:{alignItems:"center",color:"white",height:120,justifyContent:"center",width:120},icon:{color:j,fontSize:18,marginVertical:4},active:{backgroundColor:g,borderColor:"white",color:"white"},text:{color:j,fontSize:12},isDisabled:{opacity:.4}};const pe=y.default.create(he);function me(e,t,n){return t=(0,p.default)(t),(0,h.default)(e,be()?Reflect.construct(t,n||[],(0,p.default)(e).constructor):t.apply(e,n))}function be(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(be=function(){return!!e})()}var ye=function(e){function t(){return(0,d.default)(this,t),me(this,t,arguments)}return(0,m.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){var e=this,t=this.props.isDisabled;return(0,T.jsxs)(I.default,{activeOpacity:.8,onPress:function(){t||e.props.on_press()},style:[pe.container,t?pe.isDisabled:""],disabled:t,children:[(0,T.jsx)(H.default,{name:this.props.icon_name||"chevron-forward-outline",size:this.props.icon_size||30,color:this.props.icon_color||"white"}),(0,T.jsx)(s.default,{style:[pe.text,{color:this.props.label_color||"white"}],children:this.props.icon_label})]})}}]),t}(i.Component),xe={stackNavigator:{flex:1,height:"100%",backgroundColor:g},container:{alignItems:"center",backgroundColor:"rgba(0, 0, 0, 0.2)",color:"white",flexDirection:"row",justifyContent:"center",justifyContent:"space-around",margin:10,borderRadius:35,bottom:0,left:0,right:0,zIndex:1}};const ge=y.default.create(xe);function je(e,t,n){return t=(0,p.default)(t),(0,h.default)(e,we()?Reflect.construct(t,n||[],(0,p.default)(e).constructor):t.apply(e,n))}function we(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(we=function(){return!!e})()}const ve=function(e){function t(){var e;(0,d.default)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=je(this,t,[].concat(r))).navigate=function(t,n){var r;null==(r=e.props.navigationRef.current)||r.navigate(t,n)},e}return(0,m.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){var e=this,t=x,n="white";return(0,T.jsx)(a.default,{children:(0,T.jsxs)(a.default,{style:ge.container,children:[(0,T.jsx)(ye,{icon_name:"calculator-outline",icon_color:"Calculator"===this.props.currentRouteName?t:n,icon_label:"Crawculator",on_press:function(){return e.navigate("Calculator")},label_color:"Calculator"===this.props.currentRouteName?t:n}),(0,T.jsx)(ye,{icon_name:"cart-outline",icon_color:"Shopping"===this.props.currentRouteName?t:n,icon_label:"Shopping List",on_press:function(){return e.navigate("Shopping",e.props.calculatorData)},label_color:"Shopping"===this.props.currentRouteName?t:n}),(0,T.jsx)(ye,{icon_name:"flame-outline",icon_color:"Instructions"===this.props.currentRouteName?t:n,icon_label:"Boil Instructions",label_color:"Instructions"===this.props.currentRouteName?t:n,on_press:function(){return e.navigate("Instructions")}})]})})}}]),t}(i.Component);function Se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ce(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Se(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Se(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ke=(0,c.default)();const Oe=function(){var e=(0,i.useRef)(null),t=(0,i.useState)(!1),n=(0,o.default)(t,2),r=n[0],c=n[1],d=i.useState("Calculator"),f=(0,o.default)(d,2),h=f[0],p=f[1],m=(0,i.useState)({sacks:"",people:"",lbs:"",pricePerlb:""}),b=(0,o.default)(m,2),y=b[0],x=b[1];function g(e){c(e)}function j(e){x(e)}var w=function e(t){var n=t.routes[t.index];return n.state?e(n.state):n.name},v=(0,i.useState)({}),S=(0,o.default)(v,2),C=S[0],k=S[1],O=function(e){k(e)};return(0,T.jsx)(u.SafeAreaProvider,{children:(0,T.jsx)(l.default,{ref:e,onStateChange:function(e){var t=w(e);p(t)},children:(0,T.jsxs)(a.default,{style:ge.stackNavigator,children:[(0,T.jsxs)(ke.Navigator,{screenOptions:{headerShown:!1},children:[(0,T.jsx)(ke.Screen,{name:"Calculator",options:{title:"Crawculator"},children:function(e){return(0,T.jsx)(F,Ce(Ce({},e),{},{setCalculatorReadyState:g,updateCalculatorData:j}))}}),(0,T.jsx)(ke.Screen,{name:"Shopping",children:function(e){return(0,T.jsx)(se,Ce(Ce({},e),{},{checkboxStates:C,updateCheckboxStates:O}))}}),(0,T.jsx)(ke.Screen,{name:"Instructions",component:fe,options:{title:"Instructions"}})]}),(0,T.jsx)(ve,{navigationRef:e,isCalculatorReady:r,calculatorData:y,currentRouteName:h}),(0,T.jsx)(s.default,{style:{color:"white",fontSize:10,textAlign:"center",paddingBottom:20,paddingTop:0},children:"Coming soon to the app store."})]})})})}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=e,(()=>{var e=[];n.O=(t,r,o,i)=>{if(!r){var a=1/0;for(u=0;u<e.length;u++){for(var[r,o,i]=e[u],s=!0,l=0;l<r.length;l++)(!1&i||a>=i)&&Object.keys(n.O).every((e=>n.O[e](r[l])))?r.splice(l--,1):(s=!1,i<a&&(a=i));if(s){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[r,o,i]}})(),n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),n.p="/",(()=>{var e={590:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,i,[a,s,l]=r,c=0;if(a.some((t=>0!==e[t]))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(l)var u=l(n)}for(t&&t(r);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},r=self.webpackChunkweb=self.webpackChunkweb||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n.O(void 0,[632],(()=>n(1488)));r=n.O(r)})();
//# sourceMappingURL=main.b3e4f917.js.map