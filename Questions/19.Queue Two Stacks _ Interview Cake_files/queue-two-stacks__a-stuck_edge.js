(function($,Edge,compId){var im='images/';var fonts={};fonts['open-sans, sans-serif']='<script src=\"http://use.edgefonts.net/open-sans:n7,i7,n8,i8,i4,n3,i3,n4,n6,i6:all.js\"></script>';fonts['inconsolata, sans-serif']='<script src=\"http://use.edgefonts.net/inconsolata:n5,n7:all.js\"></script>';var resources=[];var symbols={"stage":{version:"2.0.1",minimumCompatibleVersion:"2.0.0",build:"2.0.1.268",baseState:"Base State",initialState:"Base State",gpuAccelerate:false,resizeInstances:false,content:{dom:[{id:'Stack2',type:'rect',rect:['145px','59px','auto','auto','auto','auto']},{id:'Stack1',type:'rect',rect:['38px','59px','auto','103px','auto','auto']},{id:'stack1_label',type:'text',rect:['39px','auto','74px','25px','auto','4px'],text:"stack1",align:"center",font:['open-sans, sans-serif',17,"rgba(85,85,85,1.00)","normal","none",""]},{id:'stack2_label',type:'text',rect:['auto','auto','74px','25px','39px','4px'],text:"stack2",align:"center",font:['open-sans, sans-serif',17,"rgba(85,85,85,1.00)","normal","none",""]},{id:'stack1_label_inStack',display:'none',type:'text',rect:['39px','auto','74px','25px','auto','4px'],text:"inStack<br>",align:"center",font:['open-sans, sans-serif',17,"rgba(85,85,85,1.00)","normal","none",""]},{id:'stack2_label_outStack',display:'none',type:'text',rect:['auto','auto','74px','25px','39px','4px'],text:"outStack",align:"center",font:['open-sans, sans-serif',17,"rgba(85,85,85,1.00)","normal","none",""]},{id:'F',type:'ellipse',rect:['-35px','26px','28px','28px','auto','auto'],borderRadius:["50%","50%","50%","50%"],fill:["rgba(255,255,255,1.00)"],stroke:[1,"rgba(85,85,85,1.00)","solid"],c:[{id:'f',type:'text',rect:['60px','127px','100%','100%','auto','auto'],text:"f",align:"center",font:['open-sans, sans-serif',17,"rgba(85,85,85,1.00)","normal","none",""]}]},{id:'E',type:'ellipse',rect:['-30px','18px','28px','28px','auto','auto'],borderRadius:["50%","50%","50%","50%"],fill:["rgba(255,255,255,1.00)"],stroke:[1,"rgba(85,85,85,1.00)","solid"],c:[{id:'e',type:'text',rect:['-1px','127px','100%','100%','auto','auto'],text:"e",align:"center",font:['open-sans, sans-serif',17,"rgba(85,85,85,1.00)","normal","none",""]}]},{id:'D',type:'ellipse',rect:['-42px','26px','28px','28px','auto','auto'],borderRadius:["50%","50%","50%","50%"],fill:["rgba(255,255,255,1.00)"],stroke:[1,"rgba(85,85,85,1.00)","solid"],c:[{id:'d',type:'text',rect:['-1px','1px','100%','100%','auto','auto'],text:"d",align:"center",font:['open-sans, sans-serif',17,"rgba(85,85,85,1.00)","normal","none",""]}]},{id:'C',type:'ellipse',rect:['4px','140px','28px','28px','auto','auto'],borderRadius:["50%","50%","50%","50%"],fill:["rgba(255,255,255,1.00)"],stroke:[1,"rgba(85,85,85,1.00)","solid"],c:[{id:'c',type:'text',rect:['-1px','0px','100%','100%','auto','auto'],opacity:1,text:"c",align:"center",font:['open-sans, sans-serif',17,"rgba(85,85,85,1.00)","normal","none",""]}]},{id:'B',type:'ellipse',rect:['4px','103px','28px','28px','auto','auto'],borderRadius:["50%","50%","50%","50%"],fill:["rgba(255,255,255,1.00)"],stroke:[1,"rgba(85,85,85,1.00)","solid"],c:[{id:'b',type:'text',rect:['0px','1px','100%','100%','auto','auto'],text:"b",align:"center",font:['open-sans, sans-serif',17,"rgba(85,85,85,1.00)","normal","none",""]}]},{id:'A',type:'ellipse',rect:['4px','65px','28px','28px','auto','auto'],borderRadius:["50%","50%","50%","50%"],fill:["rgba(255,255,255,1.00)"],stroke:[1,"rgba(85,85,85,1.00)","solid"],c:[{id:'a',type:'text',rect:['-1px','1px','100%','100%','auto','auto'],text:"a",align:"center",font:['open-sans, sans-serif',17,"rgba(85,85,85,1.00)","normal","none",""]}]},{id:'enqueue-a',type:'text',rect:['0px','-38px','100%','28px','auto','auto'],text:"enqueue(a)",align:"center",font:['open-sans, sans-serif',17,"rgba(85,85,85,1.00)","400","none","normal"]},{id:'enqueue-b',type:'text',rect:['0px','-35px','100%','28px','auto','auto'],text:"enqueue(b)",align:"center",font:['open-sans, sans-serif',17,"rgba(85,85,85,1.00)","400","none","normal"]},{id:'enqueue-c',type:'text',rect:['0px','-25px','100%','28px','auto','auto'],text:"enqueue(c)",align:"center",font:['open-sans, sans-serif',17,"rgba(85,85,85,1.00)","400","none","normal"],transform:[]},{id:'enqueue-d',type:'text',rect:['0px','-75px','100%','auto','auto','auto'],opacity:1,text:"enqueue(d)",align:"center",font:['open-sans, sans-serif',17,"rgba(85,85,85,1.00)","400","none","normal"],transform:[]},{id:'enqueue-e',type:'text',rect:['0px','-75px','100%','auto','auto','auto'],text:"enqueue(e)",align:"center",font:['open-sans, sans-serif',17,"rgba(85,85,85,1.00)","400","none","normal"],transform:[]},{id:'enqueue-f',type:'text',rect:['0px','-75px','100%','auto','auto','auto'],text:"enqueue(f)",align:"center",font:['open-sans, sans-serif',17,"rgba(85,85,85,1.00)","400","none","normal"],transform:[]},{id:'dequeue',type:'text',rect:['0px','-75px','100%','auto','auto','auto'],text:"dequeue()",align:"center",font:['open-sans, sans-serif',17,"rgba(85,85,85,1.00)","400","none","normal"],transform:[]}],symbolInstances:[{id:'Stack2',symbolName:'Stack'},{id:'Stack1',symbolName:'Stack'}]},states:{"Base State":{"${_Stack1}":[["style","top",'59px'],["style","bottom",'auto'],["style","height",'103px'],["style","right",'auto'],["style","left",'38px']],"${_A}":[["color","background-color",'rgba(255,255,255,1.00)'],["transform","rotateZ",'0deg'],["style","border-style",'solid'],["style","border-width",'1px'],["style","width",'28px'],["style","height",'28px'],["color","border-color",'rgba(85,85,85,1.00)'],["motion","location",'19px 80px'],["style","opacity",'0']],"${_C}":[["color","background-color",'rgba(255,255,255,1.00)'],["style","border-style",'solid'],["style","left",'32px'],["style","width",'28px'],["style","top",'286px'],["style","height",'28px'],["motion","location",'19px 155px'],["color","border-color",'rgba(85,85,85,1.00)'],["style","border-width",'1px'],["style","opacity",'0']],"${_e}":[["style","line-height",'24px'],["color","color",'rgba(85,85,85,1)'],["style","opacity",'1'],["style","left",'-1px'],["style","width",'100%'],["style","top",'1px'],["style","text-align",'center'],["style","height",'100%'],["style","font-family",'open-sans, sans-serif'],["style","font-size",'17px'],["motion","location",'13px 15px']],"${_enqueue-c}":[["color","color",'rgba(85,85,85,1.00)'],["style","opacity",'0'],["style","left",'0px'],["style","width",'100%'],["style","top",'-27px'],["style","text-align",'center'],["transform","skewX",'0deg'],["style","height",'28px'],["style","font-family",'open-sans, sans-serif'],["style","font-size",'17px'],["style","font-weight",'400']],"${_stack1_label_inStack}":[["style","bottom",'4px'],["color","color",'rgba(85,85,85,1)'],["style","opacity",'1'],["style","left",'39px'],["style","font-size",'17px'],["style","top",'auto'],["style","text-align",'center'],["style","height",'25px'],["style","font-family",'open-sans, sans-serif'],["style","display",'none'],["style","width",'74px']],"${_c}":[["style","line-height",'24px'],["color","color",'rgba(85,85,85,1.00)'],["style","opacity",'1'],["style","left",'-1px'],["style","width",'100%'],["style","top",'0px'],["style","text-align",'center'],["style","height",'100%'],["style","font-family",'open-sans, sans-serif'],["style","font-size",'17px']],"${_enqueue-d}":[["transform","scaleX",'1'],["style","opacity",'0'],["style","left",'0px'],["style","width",'100%'],["style","top",'-27px'],["style","text-align",'center'],["color","color",'rgba(85,85,85,1)'],["style","font-weight",'normal'],["style","font-family",'open-sans, sans-serif'],["style","font-size",'17px'],["transform","scaleY",'1']],"${_E}":[["color","background-color",'rgba(255,255,255,1)'],["transform","rotateZ",'0deg'],["style","border-style",'solid'],["style","border-width",'1px'],["style","width",'28px'],["style","top",'127px'],["motion","location",'-15px 33px'],["style","height",'28px'],["color","border-color",'rgb(85, 85, 85)'],["style","opacity",'1'],["style","left",'-30px']],"${_d}":[["style","line-height",'24px'],["color","color",'rgba(85,85,85,1)'],["style","opacity",'1'],["style","left",'-1px'],["style","width",'100%'],["style","top",'1px'],["style","text-align",'center'],["style","height",'100%'],["style","font-family",'open-sans, sans-serif'],["motion","location",'13px 15px'],["style","font-size",'17px']],"${_Stack2}":[["style","top",'59px'],["style","right",'auto'],["style","left",'145px'],["style","bottom",'auto']],"${_B}":[["color","background-color",'rgba(255,255,255,1.00)'],["style","opacity",'0'],["style","height",'28px'],["style","border-style",'solid'],["motion","location",'19px 118px'],["color","border-color",'rgba(85,85,85,1.00)'],["style","border-width",'1px'],["style","width",'28px']],"${_stack2_label_outStack}":[["style","bottom",'4px'],["color","color",'rgba(85,85,85,1)'],["style","right",'39px'],["style","left",'auto'],["style","font-size",'17px'],["style","top",'auto'],["style","text-align",'center'],["style","height",'25px'],["style","display",'none'],["style","font-family",'open-sans, sans-serif'],["style","width",'74px'],["style","opacity",'1']],"${_a}":[["style","line-height",'24px'],["color","color",'rgba(85,85,85,1.00)'],["style","opacity",'1'],["style","left",'-1px'],["style","width",'100%'],["style","top",'1px'],["style","text-align",'center'],["style","height",'100%'],["style","font-family",'open-sans, sans-serif'],["style","font-size",'17px']],"${_enqueue-a}":[["color","color",'rgba(85,85,85,1.00)'],["style","opacity",'0'],["style","left",'0px'],["style","width",'100%'],["style","top",'-27px'],["style","text-align",'center'],["style","height",'28px'],["style","font-family",'open-sans, sans-serif'],["style","font-size",'17px'],["style","font-weight",'400']],"${_enqueue-e}":[["transform","scaleX",'1'],["style","opacity",'0'],["style","left",'0px'],["style","width",'100%'],["style","top",'-27px'],["style","text-align",'center'],["transform","scaleY",'1'],["style","font-size",'17px'],["style","font-family",'open-sans, sans-serif'],["style","font-weight",'normal'],["color","color",'rgba(85,85,85,1)']],"${_f}":[["style","line-height",'24px'],["color","color",'rgba(85,85,85,1)'],["style","opacity",'1'],["style","left",'-1px'],["style","width",'100%'],["style","top",'1px'],["style","text-align",'center'],["style","height",'100%'],["style","font-family",'open-sans, sans-serif'],["style","font-size",'17px'],["motion","location",'13px 15px']],"${_enqueue-f}":[["transform","scaleX",'1'],["style","opacity",'0'],["style","left",'0px'],["style","width",'100%'],["style","top",'-27px'],["transform","scaleY",'1'],["color","color",'rgba(85,85,85,1)'],["style","font-weight",'normal'],["style","font-family",'open-sans, sans-serif'],["style","font-size",'17px'],["style","text-align",'center']],"${_D}":[["color","background-color",'rgba(255,255,255,1)'],["transform","rotateZ",'0deg'],["style","border-style",'solid'],["style","border-width",'1px'],["style","width",'28px'],["style","top",'13px'],["style","left",'-55px'],["style","height",'28px'],["color","border-color",'rgb(85, 85, 85)'],["style","opacity",'1'],["motion","location",'-27px 41px']],"${_dequeue}":[["transform","scaleX",'1'],["style","opacity",'0'],["style","left",'0px'],["style","width",'100%'],["style","top",'-27px'],["transform","scaleY",'1'],["style","text-align",'center'],["style","font-size",'17px'],["style","font-family",'open-sans, sans-serif'],["style","font-weight",'400'],["color","color",'rgba(85,85,85,1.00)']],"${_stack2_label}":[["style","bottom",'4px'],["color","color",'rgba(85,85,85,1.00)'],["style","right",'39px'],["style","left",'auto'],["style","font-size",'17px'],["style","top",'auto'],["style","text-align",'center'],["style","height",'25px'],["style","display",'block'],["style","font-family",'open-sans, sans-serif'],["style","width",'74px'],["style","opacity",'1']],"${_b}":[["style","line-height",'24px'],["color","color",'rgba(85,85,85,1.00)'],["style","opacity",'1'],["style","left",'0px'],["style","width",'100%'],["style","top",'1px'],["style","text-align",'center'],["style","height",'100%'],["style","font-family",'open-sans, sans-serif'],["style","font-size",'17px']],"${_Stage}":[["color","background-color",'rgba(255,255,255,0.00)'],["style","overflow",'hidden'],["style","height",'187px'],["style","width",'257px']],"${_enqueue-b}":[["color","color",'rgba(85,85,85,1.00)'],["style","opacity",'0'],["style","left",'0px'],["style","width",'100%'],["style","top",'-27px'],["style","text-align",'center'],["style","height",'28px'],["style","font-family",'open-sans, sans-serif'],["style","font-size",'17px'],["style","font-weight",'400']],"${_stack1_label}":[["style","bottom",'4px'],["color","color",'rgba(85,85,85,1.00)'],["style","opacity",'1'],["style","left",'39px'],["style","font-size",'17px'],["style","top",'auto'],["style","text-align",'center'],["style","height",'25px'],["style","font-family",'open-sans, sans-serif'],["style","display",'block'],["style","width",'74px']],"${_F}":[["color","background-color",'rgba(255,255,255,1)'],["transform","rotateZ",'0deg'],["style","border-style",'solid'],["style","border-width",'1px'],["style","width",'28px'],["style","top",'26px'],["motion","location",'-21px 46px'],["style","height",'28px'],["color","border-color",'rgb(85, 85, 85)'],["style","opacity",'1'],["style","left",'-35px']]}},timelines:{"Default Timeline":{fromState:"Base State",toState:"",duration:49000,autoPlay:false,labels:{"a-stuck":0,"dig-to-bottom-and-replace":6500,"reverse-order":14750,"solution":19000,"enqueue-d":38250},timeline:[{id:"eid67",tween:["style","${_enqueue-b}","opacity",'1',{fromValue:'0'}],position:1500,duration:250},{id:"eid69",tween:["style","${_enqueue-b}","opacity",'0',{fromValue:'1'}],position:2500,duration:120},{id:"eid395",tween:["style","${_enqueue-b}","opacity",'1',{fromValue:'0'}],position:20500,duration:250},{id:"eid394",tween:["style","${_enqueue-b}","opacity",'0',{fromValue:'1'}],position:21500,duration:120},{id:"eid438",tween:["motion","${_E}",[[-15,33,0,0],[54.13,30.23,41.53,14.88,64.16,22.99],[75.81,59.3,-0.36,115.91,-0.16,50.61],[76,109,0,0]]],position:28250,duration:754,easing:"easeInOutSine"},{id:"eid476",tween:["motion","${_E}",[[76,109,0,0],[75.58,54.25,-1.71,-33,-2.25,-43.29],[124.91,25.47,82.96,-4.45,77.72,-4.17],[182.02,58.26,-0.56,46.38,-0.72,59.34],[182,106,0,0]]],position:32746,duration:754,easing:"easeInOutSine"},{id:"eid486",tween:["motion","${_E}",[[182,106,0,0],[182.2,52,-2.18,-73.91,-1.08,-36.6],[130,41,0,0]]],position:35000,duration:500},{id:"eid488",tween:["motion","${_E}",[[130,41,0,0],[130,-33,0,0]]],position:35750,duration:500},{id:"eid592",tween:["style","${_Stack2}","left",'145px',{fromValue:'145px'}],position:0,duration:0},{id:"eid505",tween:["style","${_stack1_label_inStack}","display",'none',{fromValue:'none'}],position:0,duration:0},{id:"eid506",tween:["style","${_stack1_label_inStack}","display",'block',{fromValue:'none'}],position:19000,duration:0},{id:"eid550",tween:["style","${_stack1_label_inStack}","display",'none',{fromValue:'block'}],position:38121,duration:0,easing:"easeInOutCubic"},{id:"eid293",tween:["style","${_C}","opacity",'1',{fromValue:'0'}],position:0,duration:250,easing:"easeInOutCubic"},{id:"eid289",tween:["style","${_C}","opacity",'0',{fromValue:'1'}],position:6000,duration:250,easing:"easeInOutCubic"},{id:"eid301",tween:["style","${_C}","opacity",'1',{fromValue:'0'}],position:6500,duration:250,easing:"easeInOutCubic"},{id:"eid320",tween:["style","${_C}","opacity",'0',{fromValue:'1'}],position:14250,duration:250,easing:"easeInOutCubic"},{id:"eid359",tween:["style","${_C}","opacity",'1',{fromValue:'0'}],position:14750,duration:250,easing:"easeInOutCubic"},{id:"eid371",tween:["style","${_C}","opacity",'0',{fromValue:'1'}],position:18500,duration:250,easing:"easeInOutCubic"},{id:"eid385",tween:["style","${_C}","opacity",'1',{fromValue:'0'}],position:19000,duration:250,easing:"easeInOutCubic"},{id:"eid561",tween:["style","${_C}","opacity",'0',{fromValue:'1'}],position:38121,duration:0,easing:"easeInOutSine"},{id:"eid525",tween:["style","${_C}","opacity",'1',{fromValue:'0'}],position:38500,duration:250,easing:"easeInOutCubic"},{id:"eid526",tween:["style","${_C}","opacity",'0',{fromValue:'1'}],position:48750,duration:250,easing:"easeInOutCubic"},{id:"eid571",tween:["style","${_enqueue-d}","opacity",'1',{fromValue:'0'}],position:12500,duration:250},{id:"eid583",tween:["style","${_enqueue-d}","opacity",'0',{fromValue:'1'}],position:14250,duration:250,easing:"easeInOutCubic"},{id:"eid411",tween:["style","${_enqueue-d}","opacity",'1',{fromValue:'0'}],position:25496,duration:250},{id:"eid422",tween:["style","${_enqueue-d}","opacity",'0',{fromValue:'1'}],position:26500,duration:120},{id:"eid531",tween:["style","${_enqueue-d}","opacity",'1',{fromValue:'0'}],position:43000,duration:250,easing:"easeInOutSine"},{id:"eid567",tween:["style","${_enqueue-d}","opacity",'0',{fromValue:'1'}],position:48750,duration:250,easing:"easeInOutCubic"},{id:"eid49",tween:["motion","${_C}",[[19,155,0,0],[42.56,25.7,56.93,-46.19,82.72,-67.12],[75.01,36.56,0,0,0,0],[75,74.42,0,0]]],position:2750,duration:750,easing:"easeInOutSine"},{id:"eid311",tween:["motion","${_C}",[[75,74.42,0,0],[74.89,55.03,2.87,-75.33,2.05,-53.79],[127,13.71,65.2,-2.02,81.33,-2.52],[181.96,56.39,-2.19,89.82,-2.25,92.27],[182,142,0,0]]],position:7750,duration:750,easing:"easeInOutSine"},{id:"eid315",tween:["motion","${_C}",[[182,142,0,0],[182.01,49.06,0.3,-62.46,0.25,-51.71],[127.65,19,-67.07,4.2,-72.67,4.55],[74.7,49.25,1.32,72.06,1.63,88.41],[75,109,0,0]]],position:10750,duration:750,easing:"easeInOutSine"},{id:"eid332",tween:["motion","${_C}",[[75,109,0,0],[75,74.42,0,0]]],position:14750,duration:0,easing:"easeInOutSine"},{id:"eid366",tween:["motion","${_C}",[[75,74.42,0,0],[75.16,42.54,0.39,-56.63,0.42,-61.28],[128.25,8.79,42.64,1.11,53,1.38],[181.93,43.04,9.79,27.52,35.75,100.53],[182.07,78.99,3.27,95.25,1.24,36.29],[182,142.4,0,0]]],position:15250,duration:750,easing:"easeInOutCubic"},{id:"eid384",tween:["motion","${_C}",[[182,142.4,0,0],[-20,142,0,0]]],position:19000,duration:0,easing:"easeInOutSine"},{id:"eid402",tween:["motion","${_C}",[[-24,41,0,0],[52.56,20.7,73.3,1.33,103.72,1.88],[75.01,36.56,0,0,0,0],[75,74.42,0,0]]],position:21750,duration:750,easing:"easeInOutSine"},{id:"eid405",tween:["motion","${_C}",[[75,74.42,0,0],[74.89,55.03,2.87,-75.33,2.05,-53.79],[127,13.71,65.2,-2.02,81.33,-2.52],[181.96,56.39,-2.19,89.82,-2.25,92.27],[182,142,0,0]]],position:22750,duration:750,easing:"easeInOutSine"},{id:"eid445",tween:["motion","${_C}",[[182,142,0,0],[183.42,62.92,3.29,-97.79,2.69,-79.88],[130,41,0,0]]],position:29254,duration:496},{id:"eid447",tween:["motion","${_C}",[[130,41,0,0],[130,-33,0,0]]],position:30000,duration:500},{id:"eid557",tween:["motion","${_C}",[[130,-33,0,0],[75,74,0,0]]],position:38121,duration:0,easing:"easeInOutSine"},{id:"eid522",tween:["motion","${_C}",[[75,74.42,0,0],[74.89,55.03,2.87,-75.33,2.05,-53.79],[127,13.71,65.2,-2.02,81.33,-2.52],[181.96,56.39,-2.19,89.82,-2.25,92.27],[182,142,0,0]]],position:39750,duration:750,easing:"easeInOutSine"},{id:"eid535",tween:["motion","${_C}",[[182,140,0,0],[182,142,0,0]]],position:46250,duration:170,easing:"easeInExpo"},{id:"eid539",tween:["motion","${_C}",[[182,142,0,0],[182,137,0,0]]],position:46420,duration:181,easing:"easeInExpo"},{id:"eid540",tween:["motion","${_C}",[[182,137,0,0],[182,142,0,0]]],position:46601,duration:149,easing:"easeInExpo"},{id:"eid468",tween:["motion","${_F}",[[-21,46,0,0],[56.86,43.41,63.49,18.33,80.07,23.11],[76,74,0,0]]],position:30750,duration:754,easing:"easeInOutSine"},{id:"eid474",tween:["motion","${_F}",[[76,74,0,0],[76.38,56.43,1,-24.76,1.65,-40.89],[125.05,24.42,118.33,-8.05,120.51,-8.2],[181.87,56.24,-0.58,86.7,-0.29,43.1],[182,142,0,0]]],position:32000,duration:746,easing:"easeInOutSine"},{id:"eid498",tween:["motion","${_F}",[[182,142,0,0],[182.47,48.67,-1.06,-100.84,-0.66,-63.08],[130,41,0,0]]],position:36500,duration:500},{id:"eid500",tween:["motion","${_F}",[[130,41,0,0],[129,-33,0,0]]],position:37250,duration:500},{id:"eid433",tween:["style","${_enqueue-e}","top",'3px',{fromValue:'-27px'}],position:28000,duration:250},{id:"eid434",tween:["style","${_enqueue-e}","top",'33px',{fromValue:'3px'}],position:29004,duration:120,easing:"easeInOutSine"},{id:"eid435",tween:["style","${_enqueue-e}","opacity",'1',{fromValue:'0'}],position:28000,duration:250},{id:"eid436",tween:["style","${_enqueue-e}","opacity",'0',{fromValue:'1'}],position:29004,duration:120},{id:"eid570",tween:["style","${_enqueue-d}","top",'3px',{fromValue:'-27px'}],position:12500,duration:250},{id:"eid414",tween:["style","${_enqueue-d}","top",'3px',{fromValue:'-27px'}],position:25496,duration:250},{id:"eid425",tween:["style","${_enqueue-d}","top",'33px',{fromValue:'3px'}],position:26500,duration:120},{id:"eid530",tween:["style","${_enqueue-d}","top",'3px',{fromValue:'-23px'}],position:43000,duration:250,easing:"easeInOutSine"},{id:"eid292",tween:["style","${_B}","opacity",'1',{fromValue:'0'}],position:0,duration:250,easing:"easeInOutCubic"},{id:"eid287",tween:["style","${_B}","opacity",'0',{fromValue:'1'}],position:6000,duration:250,easing:"easeInOutCubic"},{id:"eid300",tween:["style","${_B}","opacity",'1',{fromValue:'0'}],position:6500,duration:250,easing:"easeInOutCubic"},{id:"eid319",tween:["style","${_B}","opacity",'0',{fromValue:'1'}],position:14250,duration:250,easing:"easeInOutCubic"},{id:"eid358",tween:["style","${_B}","opacity",'1',{fromValue:'0'}],position:14750,duration:250,easing:"easeInOutCubic"},{id:"eid370",tween:["style","${_B}","opacity",'0',{fromValue:'1'}],position:18500,duration:250,easing:"easeInOutCubic"},{id:"eid383",tween:["style","${_B}","opacity",'1',{fromValue:'0'}],position:19000,duration:250,easing:"easeInOutCubic"},{id:"eid562",tween:["style","${_B}","opacity",'0',{fromValue:'1'}],position:38121,duration:0,easing:"easeInOutSine"},{id:"eid520",tween:["style","${_B}","opacity",'1',{fromValue:'0'}],position:38500,duration:250,easing:"easeInOutCubic"},{id:"eid521",tween:["style","${_B}","opacity",'0',{fromValue:'1'}],position:48750,duration:250,easing:"easeInOutCubic"},{id:"eid508",tween:["style","${_stack1_label}","display",'none',{fromValue:'block'}],position:19000,duration:0},{id:"eid552",tween:["style","${_stack1_label}","display",'block',{fromValue:'none'}],position:38121,duration:0,easing:"easeInOutCubic"},{id:"eid46",tween:["motion","${_B}",[[19,118,0,0],[53.75,28.59,54.88,0.4,101.96,0.74],[74.75,55.42,0,0,0,0],[75,108.15,0,0]]],position:1750,duration:750,easing:"easeInOutSine"},{id:"eid309",tween:["motion","${_B}",[[75,108.15,0,0],[75.01,55.15,0.68,-80.05,0.8,-93.02],[128.56,16.18,48.94,1.16,61.8,1.47],[181.81,57.62,0.38,80.77,0.38,81.52],[182,108.15,0,0]]],position:8500,duration:750,easing:"easeInOutSine"},{id:"eid313",tween:["motion","${_B}",[[182,108.15,0,0],[181.9,50.35,-2.82,-67.32,-3.57,-85.02],[129.39,23.98,-72.1,1.33,-75.66,1.4],[75.34,48.1,1.19,101.98,0.81,69.33],[75,143,0,0]]],position:10000,duration:750,easing:"easeInOutSine"},{id:"eid331",tween:["motion","${_B}",[[75,143,0,0],[75,108.15,0,0]]],position:14750,duration:0,easing:"easeInOutSine"},{id:"eid369",tween:["motion","${_B}",[[75,108.15,0,0],[75.15,41.48,-2.68,-75.64,-3.25,-91.98],[129.18,10.15,34.24,0,39.78,0],[181.92,42.55,2.25,95.26,1.68,71.15],[182,108.15,0,0]]],position:16000,duration:750,easing:"easeInOutCubic"},{id:"eid382",tween:["motion","${_B}",[[182,108.15,0,0],[-20,105,0,0]]],position:19000,duration:0,easing:"easeInOutSine"},{id:"eid401",tween:["motion","${_B}",[[-20,41,0,0],[53.75,28.59,54.88,0.4,101.96,0.74],[74.75,55.42,0,0,0,0],[75,108.15,0,0]]],position:20750,duration:750,easing:"easeInOutSine"},{id:"eid404",tween:["motion","${_B}",[[75,108.15,0,0],[75.01,55.15,0.68,-80.05,0.8,-93.02],[128.56,16.18,48.94,1.16,61.8,1.47],[181.81,57.62,0.38,80.77,0.38,81.52],[182,108.15,0,0]]],position:23500,duration:750,easing:"easeInOutSine"},{id:"eid427",tween:["motion","${_B}",[[182,108.15,0,0],[181.67,66.71,1.58,-73.38,1.12,-52.22],[130,44,0,0]]],position:26750,duration:500,easing:"easeInOutSine"},{id:"eid429",tween:["motion","${_B}",[[130,44,0,0],[130,-31,0,0]]],position:27500,duration:500,easing:"easeInCubic"},{id:"eid558",tween:["motion","${_B}",[[75,108,0,0],[75,108,0,0]]],position:38121,duration:0,easing:"easeInOutSine"},{id:"eid519",tween:["motion","${_B}",[[75,108.15,0,0],[75.01,55.15,0.68,-80.05,0.8,-93.02],[128.56,16.18,48.94,1.16,61.8,1.47],[181.81,57.62,0.38,80.77,0.38,81.52],[182,108.15,0,0]]],position:40500,duration:750,easing:"easeInOutSine"},{id:"eid591",tween:["style","${_Stack1}","left",'38px',{fromValue:'38px'}],position:0,duration:0},{id:"eid56",tween:["style","${_enqueue-a}","opacity",'1',{fromValue:'0'}],position:500,duration:250},{id:"eid62",tween:["style","${_enqueue-a}","opacity",'0',{fromValue:'1'}],position:1500,duration:120},{id:"eid398",tween:["style","${_enqueue-a}","opacity",'1',{fromValue:'0'}],position:19500,duration:250},{id:"eid399",tween:["style","${_enqueue-a}","opacity",'0',{fromValue:'1'}],position:20500,duration:120},{id:"eid593",tween:["style","${_Stack2}","top",'59px',{fromValue:'59px'}],position:0,duration:0},{id:"eid590",tween:["style","${_Stack1}","top",'59px',{fromValue:'59px'}],position:0,duration:0},{id:"eid504",tween:["style","${_stack2_label_outStack}","display",'none',{fromValue:'none'}],position:0,duration:0},{id:"eid507",tween:["style","${_stack2_label_outStack}","display",'block',{fromValue:'none'}],position:19000,duration:0},{id:"eid549",tween:["style","${_stack2_label_outStack}","display",'none',{fromValue:'block'}],position:38121,duration:0,easing:"easeInOutCubic"},{id:"eid82",tween:["style","${_dequeue}","opacity",'1',{fromValue:'0'}],position:3500,duration:250},{id:"eid296",tween:["style","${_dequeue}","opacity",'0',{fromValue:'1'}],position:6000,duration:250,easing:"easeInOutCubic"},{id:"eid303",tween:["style","${_dequeue}","opacity",'1',{fromValue:'0'}],position:7000,duration:250},{id:"eid322",tween:["style","${_dequeue}","opacity",'0',{fromValue:'1'}],position:12130,duration:120},{id:"eid387",tween:["style","${_dequeue}","opacity",'1',{fromValue:'0'}],position:22500,duration:250},{id:"eid408",tween:["style","${_dequeue}","opacity",'0',{fromValue:'1'}],position:25376,duration:120},{id:"eid420",tween:["style","${_dequeue}","opacity",'1',{fromValue:'0'}],position:26500,duration:250},{id:"eid431",tween:["style","${_dequeue}","opacity",'0',{fromValue:'1'}],position:27628,duration:120},{id:"eid442",tween:["style","${_dequeue}","opacity",'1',{fromValue:'0'}],position:29004,duration:250},{id:"eid443",tween:["style","${_dequeue}","opacity",'0',{fromValue:'1'}],position:30132,duration:120},{id:"eid471",tween:["style","${_dequeue}","opacity",'1',{fromValue:'0'}],position:31504,duration:250},{id:"eid472",tween:["style","${_dequeue}","opacity",'0',{fromValue:'1'}],position:34380,duration:120},{id:"eid483",tween:["style","${_dequeue}","opacity",'1',{fromValue:'0'}],position:34750,duration:250},{id:"eid490",tween:["style","${_dequeue}","opacity",'0',{fromValue:'1'}],position:35880,duration:120},{id:"eid494",tween:["style","${_dequeue}","opacity",'1',{fromValue:'0'}],position:36250,duration:250},{id:"eid496",tween:["style","${_dequeue}","opacity",'0',{fromValue:'1'}],position:37380,duration:120},{id:"eid513",tween:["style","${_dequeue}","opacity",'1',{fromValue:'0'}],position:39000,duration:250},{id:"eid512",tween:["style","${_dequeue}","opacity",'0',{fromValue:'1'}],position:42500,duration:250},{id:"eid33",tween:["motion","${_A}",[[19,80,0,0],[48.29,31.92,4.43,-1.78,107.37,-43.09],[73.75,56.55,9.41,6.63,7.75,78.77],[75,142,0,0]]],position:750,duration:750,easing:"easeInOutSine"},{id:"eid201",tween:["motion","${_A}",[[75,142,0,0],[75,144,0,0]]],position:4000,duration:170,easing:"easeInExpo"},{id:"eid202",tween:["motion","${_A}",[[75,144,0,0],[75,137,0,0]]],position:4170,duration:181,easing:"easeInExpo"},{id:"eid203",tween:["motion","${_A}",[[75,137,0,0],[75,144,0,0]]],position:4351,duration:198,easing:"easeInExpo"},{id:"eid204",tween:["motion","${_A}",[[75,144,0,0],[75,137,0,0]]],position:4549,duration:201,easing:"easeInExpo"},{id:"eid205",tween:["motion","${_A}",[[75,137,0,0],[75,144,0,0]]],position:4750,duration:190,easing:"easeInExpo"},{id:"eid206",tween:["motion","${_A}",[[75,144,0,0],[75,142,0,0]]],position:4940,duration:206,easing:"easeInExpo"},{id:"eid305",tween:["motion","${_A}",[[75,142,0,0],[74.13,55.55,-0.37,-28.36,-1.53,-116.2],[101.86,26.54,96.69,-31.85,65.48,-21.57],[131,88,0,0]]],position:9250,duration:750,easing:"easeInOutSine"},{id:"eid317",tween:["motion","${_A}",[[131,88,0,0],[130,-33,0,0]]],position:11750,duration:500,easing:"easeInOutSine"},{id:"eid330",tween:["motion","${_A}",[[75,108.15,0,0],[75,142,0,0]]],position:14750,duration:0,easing:"easeInOutSine"},{id:"eid333",tween:["motion","${_A}",[[75,142,0,0],[75,141.15,0,0]]],position:14750,duration:0,easing:"easeInOutSine"},{id:"eid362",tween:["motion","${_A}",[[75,142,0,0],[74.28,50.01,-1.92,-72,-2.78,-104.38],[130.2,11,48.4,-1.81,52.03,-1.94],[181.37,42.54,-1.03,119.57,-0.87,100.92],[182,74,0,0]]],position:16750,duration:750,easing:"easeInOutCubic"},{id:"eid379",tween:["motion","${_A}",[[75,142,0,0],[-20,74,0,0]]],position:19000,duration:0,easing:"easeInOutSine"},{id:"eid380",tween:["motion","${_A}",[[75,141.15,0,0],[-20,67,0,0]]],position:19000,duration:0,easing:"easeInOutSine"},{id:"eid400",tween:["motion","${_A}",[[-20,33,0,0],[59.29,24.92,37.48,16.65,116.24,51.63],[73.75,56.55,9.41,6.63,7.75,78.77],[75,142,0,0]]],position:19750,duration:750,easing:"easeInOutSine"},{id:"eid403",tween:["motion","${_A}",[[75,142,0,0],[74.13,55.55,-0.37,-28.36,-1.53,-116.2],[101.86,26.54,96.69,-31.85,65.48,-21.57],[131,38,0,0]]],position:24250,duration:750,easing:"easeInOutSine"},{id:"eid406",tween:["motion","${_A}",[[131,38,0,0],[130,-33,0,0]]],position:25250,duration:500,easing:"easeInQuad"},{id:"eid559",tween:["motion","${_A}",[[75,142,0,0],[75,142,0,0]]],position:38121,duration:0,easing:"easeInOutSine"},{id:"eid515",tween:["motion","${_A}",[[75,142,0,0],[74.13,55.55,-0.37,-28.36,-1.53,-116.2],[101.86,26.54,96.69,-31.85,65.48,-21.57],[131,88,0,0]]],position:41250,duration:750,easing:"easeInOutSine"},{id:"eid514",tween:["motion","${_A}",[[131,88,0,0],[130,-33,0,0]]],position:42250,duration:500,easing:"easeInOutSine"},{id:"eid73",tween:["style","${_enqueue-c}","opacity",'1',{fromValue:'0'}],position:2500,duration:250},{id:"eid75",tween:["style","${_enqueue-c}","opacity",'0',{fromValue:'1'}],position:3500,duration:120},{id:"eid390",tween:["style","${_enqueue-c}","opacity",'1',{fromValue:'0'}],position:21500,duration:250},{id:"eid391",tween:["style","${_enqueue-c}","opacity",'0',{fromValue:'1'}],position:22500,duration:120},{id:"eid461",tween:["style","${_enqueue-f}","opacity",'1',{fromValue:'0'}],position:30500,duration:250},{id:"eid462",tween:["style","${_enqueue-f}","opacity",'0',{fromValue:'1'}],position:31504,duration:120},{id:"eid572",tween:["motion","${_D}",[[-27,41,0,0],[27.13,27.23,69.74,-0.56,82.04,-0.66],[74.81,49.3,-0.36,115.91,-0.16,50.61],[75,74,0,0]]],position:12750,duration:754,easing:"easeInOutQuad"},{id:"eid584",tween:["motion","${_D}",[[-61,47,0,0],[-61,47,0,0]]],position:18917,duration:0,easing:"easeInOutCubic"},{id:"eid417",tween:["motion","${_D}",[[-61,47,0,0],[27.13,27.23,69.74,-0.56,82.04,-0.66],[74.81,47.3,-0.36,115.91,-0.16,50.61],[75,142,0,0]]],position:25746,duration:754,easing:"easeInOutSine"},{id:"eid479",tween:["motion","${_D}",[[75,142,0,0],[75.1,48.1,-0.08,-48.65,-0.15,-89.65],[131,41,0,0]]],position:33500,duration:500,easing:"easeInOutSine"},{id:"eid481",tween:["motion","${_D}",[[131,41,0,0],[130,-33,0,0]]],position:34250,duration:500,easing:"easeInOutSine"},{id:"eid534",tween:["motion","${_D}",[[-24,56,0,0],[43.8,24.51,123.58,-6.46,104.27,-5.45],[129,48,0,0]]],position:43250,duration:500,easing:"easeInOutSine"},{id:"eid542",tween:["motion","${_D}",[[129,48,0,0],[114.29,34.83,-20.48,-2.82,-22.89,-3.16],[100,44,0,0]]],position:44000,duration:500,easing:"easeInOutCubic"},{id:"eid543",tween:["motion","${_D}",[[100,44,0,0],[138.69,24.06,38.11,-1.73,56.99,-2.59],[166,41,0,0]]],position:44750,duration:500,easing:"easeInOutCubic"},{id:"eid578",tween:["motion","${_D}",[[166,41,0,0],[125.84,87.63,-10.34,74.6,-10.65,76.86],[152,142,0,0]]],position:45500,duration:500,easing:"easeInOutCubic"},{id:"eid580",tween:["motion","${_D}",[[152,142,0,0],[130,44,0,0]]],position:47250,duration:750},{id:"eid574",tween:["style","${_D}","opacity",'0',{fromValue:'1'}],position:14250,duration:250,easing:"easeInOutCubic"},{id:"eid569",tween:["style","${_D}","opacity",'1',{fromValue:'0'}],position:18917,duration:0,easing:"easeInOutCubic"},{id:"eid554",tween:["style","${_D}","opacity",'0',{fromValue:'1'}],position:38121,duration:0,easing:"easeInOutCubic"},{id:"eid564",tween:["style","${_D}","opacity",'1',{fromValue:'0'}],position:38500,duration:250,easing:"easeInOutCubic"},{id:"eid568",tween:["style","${_D}","opacity",'0',{fromValue:'1'}],position:48750,duration:250,easing:"easeInOutCubic"},{id:"eid509",tween:["style","${_stack2_label}","display",'none',{fromValue:'block'}],position:19000,duration:0},{id:"eid551",tween:["style","${_stack2_label}","display",'block',{fromValue:'none'}],position:38121,duration:0,easing:"easeInOutCubic"},{id:"eid81",tween:["style","${_dequeue}","top",'3px',{fromValue:'-27px'}],position:3500,duration:250},{id:"eid302",tween:["style","${_dequeue}","top",'3px',{fromValue:'-27px'}],position:7000,duration:250},{id:"eid325",tween:["style","${_dequeue}","top",'33px',{fromValue:'3px'}],position:12130,duration:120,easing:"easeInOutSine"},{id:"eid386",tween:["style","${_dequeue}","top",'3px',{fromValue:'-27px'}],position:22500,duration:250},{id:"eid407",tween:["style","${_dequeue}","top",'33px',{fromValue:'3px'}],position:25376,duration:120,easing:"easeInOutSine"},{id:"eid419",tween:["style","${_dequeue}","top",'3px',{fromValue:'-27px'}],position:26500,duration:250},{id:"eid430",tween:["style","${_dequeue}","top",'33px',{fromValue:'3px'}],position:27628,duration:120,easing:"easeInOutSine"},{id:"eid440",tween:["style","${_dequeue}","top",'3px',{fromValue:'-27px'}],position:29004,duration:250},{id:"eid441",tween:["style","${_dequeue}","top",'33px',{fromValue:'3px'}],position:30132,duration:120,easing:"easeInOutSine"},{id:"eid469",tween:["style","${_dequeue}","top",'3px',{fromValue:'-27px'}],position:31504,duration:250},{id:"eid470",tween:["style","${_dequeue}","top",'33px',{fromValue:'3px'}],position:34380,duration:120,easing:"easeInOutSine"},{id:"eid482",tween:["style","${_dequeue}","top",'3px',{fromValue:'-27px'}],position:34750,duration:250},{id:"eid489",tween:["style","${_dequeue}","top",'33px',{fromValue:'3px'}],position:35880,duration:120,easing:"easeInOutSine"},{id:"eid493",tween:["style","${_dequeue}","top",'3px',{fromValue:'-27px'}],position:36250,duration:250},{id:"eid495",tween:["style","${_dequeue}","top",'33px',{fromValue:'3px'}],position:37380,duration:120,easing:"easeInOutSine"},{id:"eid511",tween:["style","${_dequeue}","top",'3px',{fromValue:'-27px'}],position:39000,duration:250},{id:"eid510",tween:["style","${_dequeue}","top",'33px',{fromValue:'3px'}],position:42500,duration:250,easing:"easeInOutSine"},{id:"eid291",tween:["style","${_A}","opacity",'1',{fromValue:'0'}],position:0,duration:250,easing:"easeInOutCubic"},{id:"eid285",tween:["style","${_A}","opacity",'0',{fromValue:'1'}],position:6000,duration:250,easing:"easeInOutCubic"},{id:"eid375",tween:["style","${_A}","opacity",'1',{fromValue:'0'}],position:6500,duration:250,easing:"easeInOutCubic"},{id:"eid376",tween:["style","${_A}","opacity",'0',{fromValue:'1'}],position:14250,duration:250,easing:"easeInOutCubic"},{id:"eid378",tween:["style","${_A}","opacity",'1',{fromValue:'0'}],position:14750,duration:250,easing:"easeInOutCubic"},{id:"eid372",tween:["style","${_A}","opacity",'0',{fromValue:'1'}],position:18500,duration:250,easing:"easeInOutCubic"},{id:"eid381",tween:["style","${_A}","opacity",'1',{fromValue:'0'}],position:19000,duration:250,easing:"easeInOutCubic"},{id:"eid560",tween:["style","${_A}","opacity",'0',{fromValue:'1'}],position:38121,duration:0,easing:"easeInOutSine"},{id:"eid516",tween:["style","${_A}","opacity",'1',{fromValue:'0'}],position:38500,duration:250,easing:"easeInOutCubic"},{id:"eid517",tween:["style","${_A}","opacity",'0',{fromValue:'1'}],position:48750,duration:250,easing:"easeInOutCubic"},{id:"eid64",tween:["style","${_enqueue-b}","top",'3px',{fromValue:'-27px'}],position:1500,duration:250},{id:"eid68",tween:["style","${_enqueue-b}","top",'17px',{fromValue:'3px'}],position:2500,duration:120},{id:"eid393",tween:["style","${_enqueue-b}","top",'3px',{fromValue:'-27px'}],position:20500,duration:250},{id:"eid392",tween:["style","${_enqueue-b}","top",'17px',{fromValue:'3px'}],position:21500,duration:120},{id:"eid72",tween:["style","${_enqueue-c}","top",'3px',{fromValue:'-27px'}],position:2500,duration:250},{id:"eid189",tween:["style","${_enqueue-c}","top",'33px',{fromValue:'3px'}],position:3500,duration:120},{id:"eid388",tween:["style","${_enqueue-c}","top",'3px',{fromValue:'-27px'}],position:21500,duration:250},{id:"eid389",tween:["style","${_enqueue-c}","top",'33px',{fromValue:'3px'}],position:22500,duration:120},{id:"eid53",tween:["style","${_enqueue-a}","top",'3px',{fromValue:'-27px'}],position:500,duration:250},{id:"eid58",tween:["style","${_enqueue-a}","top",'33px',{fromValue:'3px'}],position:1500,duration:120},{id:"eid396",tween:["style","${_enqueue-a}","top",'3px',{fromValue:'-27px'}],position:19500,duration:250},{id:"eid397",tween:["style","${_enqueue-a}","top",'33px',{fromValue:'3px'}],position:20500,duration:120},{id:"eid459",tween:["style","${_enqueue-f}","top",'3px',{fromValue:'-27px'}],position:30500,duration:250},{id:"eid460",tween:["style","${_enqueue-f}","top",'33px',{fromValue:'3px'}],position:31504,duration:120,easing:"easeInOutSine"}]}}},"Stack":{version:"2.0.1",minimumCompatibleVersion:"2.0.0",build:"2.0.1.268",baseState:"Base State",initialState:"Base State",gpuAccelerate:false,resizeInstances:false,content:{dom:[{rect:['auto','auto','0px','100px','36px','1px'],id:'stem',stroke:[1,'rgba(85,85,85,0.00)','solid'],type:'rect',fill:['rgba(85,85,85,1.00)']},{rect:['auto','auto','72px','0px','0px','0px'],id:'base',stroke:[1,'rgba(85,85,85,0.00)','solid'],type:'rect',fill:['rgba(85,85,85,1.00)']}],symbolInstances:[]},states:{"Base State":{"${_base}":[["style","top",'auto'],["color","background-color",'rgba(85,85,85,1.00)'],["color","border-color",'rgba(85,85,85,0.00)'],["style","bottom",'0px'],["style","height",'0px'],["style","right",'0px'],["style","left",'auto'],["style","width",'72px']],"${_stem}":[["style","top",'auto'],["color","background-color",'rgba(85,85,85,1.00)'],["color","border-color",'rgba(85,85,85,0.00)'],["style","bottom",'1px'],["style","height",'100px'],["style","right",'36px'],["style","left",'auto'],["style","width",'0px']],"${symbolSelector}":[["style","height",'103px'],["style","width",'74px']]}},timelines:{"Default Timeline":{fromState:"Base State",toState:"",duration:0,autoPlay:false,timeline:[]}}}};Edge.registerCompositionDefn(compId,symbols,fonts,resources);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"queue-two-stacks__a-stuck");