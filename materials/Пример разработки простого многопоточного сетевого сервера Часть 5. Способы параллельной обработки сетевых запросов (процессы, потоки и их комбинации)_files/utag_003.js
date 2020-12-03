//tealium universal tag - utag.24 ut4.0.202004021713, Copyright 2020 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={"id":id};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}
var match=/ut\d\.(\d*)\..*/.exec(utag.cfg.v);if(utag.ut.loader===undefined||!match||parseInt(match[1])<41){u.loader=function(o,a,b,c,l,m){utag.DB(o);a=document;if(o.type=="iframe"){m=a.getElementById(o.id);if(m&&m.tagName=="IFRAME"){b=m;}else{b=a.createElement("iframe");}o.attrs=o.attrs||{};utag.ut.merge(o.attrs,{"height":"1","width":"1","style":"display:none"},0);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";}if(o.id){b.id=o.id;}for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l]);}b.setAttribute("src",o.src);if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState=="complete"||this.readyState=="loaded"){this.onreadystatechange=null;o.cb();}};}}if(o.type!="img"&&!m){l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}}};}else{u.loader=utag.ut.loader;}
if(utag.ut.encode===undefined){u.encode=function(a,b){b="";try{b=encodeURIComponent(a)}catch(e){utag.DB(e);}if(b==""){b=escape(a);}return b;};}else{u.encode=utag.ut.encode;}
u.ev={"link":1};u.map={"media_mt_id":"mt_id","mediamath_excl":"mt_excl","media_mt_adid":"mt_adid","mediamath_event_type":"custom.event_type","mediamath_industry":"custom.industry","mediamath_page_name":"custom.page_name","mediamath_product_id":"custom.product_id","mediamath_product_name":"custom.product_name","mediamath_product_category":"custom.product_category","mediamath_product_status":"custom.product_status","mediamath_product_condition":"custom.product_condition","mediamath_product_color":"custom.product_color","mediamath_product_year":"custom.product_year","mediamath_search_query":"custom.search_query","mediamath_product_brand":"custom.product_brand","mediamath_site_language":"custom.site_language"};u.extend=[function(a,b){try{if(1){if(b['mediamath_conversion.enabled']!=='true'){return false;}}}catch(e){utag.DB(e)}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){utag.DB("send:24");utag.DB(b);var c,d,e,f,c1=[];u.data={"qsp_delim":"&","base_url":"//pixel.mathtag.com/event/","mt_adid":["171815"],"mt_id":[""],"type":"script"||"img"};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){if(typeof utag_err!='undefined'){utag_err.push({e:'extension error:'+e,s:utag.cfg.path+'utag.'+id+'.js',l:c,t:'ex'})}}};utag.DB("send:24:EXTENSIONS");utag.DB(b);for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){if(typeof e[f]!=='undefined'&&e[f].indexOf('custom.')>-1){c1.push(e[f].substring(7)+"="+u.encode(b[d]));}
u.data[e[f]]=b[d];}}}
utag.DB("send:24:MAPPINGS");utag.DB(u.data);for(var i=0;i<u.data.mt_id.length;i++){f=u.data.base_url;u.data.mt_id[i]=u.data.mt_id[i]||"";u.data.mt_adid[i]=u.data.mt_adid[i]||"171815";c1.push("mt_id="+u.encode(u.data.mt_id[i]));c1.push("mt_adid="+u.encode(u.data.mt_adid[i]));if(u.data.mt_exem&&u.data.mt_exem[i]){c1.push("mt_exem="+u.encode(u.data.mt_exem[i]));}else if(u.data.mt_excl&&u.data.mt_excl[i]){c1.push("mt_excl="+u.encode(u.data.mt_excl[i]));}
if(u.data.v1)c1.push("v1="+(u.encode(u.data.v1||"")));if(u.data.v2)c1.push("v2="+(u.encode(u.data.v2||"")));if(u.data.v3)c1.push("v3="+(u.encode(u.data.v3||"")));if(u.data.s1)c1.push("s1="+(u.encode(u.data.s1||"")));if(u.data.s2)c1.push("s2="+(u.encode(u.data.s2||"")));if(u.data.s3)c1.push("s3="+(u.encode(u.data.s3||"")));if(!u.data.mt_id[i]){utag.DB(u.id+": Tag not fired: Required attribute not populated [mt_id]");return;}
if(!u.data.mt_adid[i]){utag.DB(u.id+": Tag not fired: Required attribute not populated [mt_adid]");return;}
f=f+(u.data.type==="script"?"js":u.data.type)+"?"+c1.join(u.data.qsp_delim);u.loader({"type":u.data.type,"src":f,"loc":"script","id":"utag_24_"+i});}
utag.DB("send:24:COMPLETE");}};utag.o[loader].loader.LOAD(id);}("24","ibm.web"));}catch(error){utag.DB(error);}
