/* UAParser.js v2.0.0-beta.2
   Copyright © 2012-2023 Faisal Salman <f@faisalman.com>
   UAParser.js PRO Enterorise License */
!function(i,u){"use strict";function e(i){for(var e={},t=0;t<i.length;t++)e[i[t].toUpperCase()]=i[t];return e}function n(i,e){if(!(typeof i===d&&0<i.length))return!!gi(i)&&-1!==xi(e).indexOf(xi(i));for(var t in i)if(xi(i[t])==xi(e))return 1}var w="",c="function",b="undefined",d="object",s="string",p="major",h="model",f="name",m="type",g="vendor",v="version",x="architecture",k="console",y="mobile",r="tablet",t="smarttv",o="wearable",a="embedded",l="user-agent",_=500,S="brands",T="formFactor",C="fullVersionList",q="platform",A="platformVersion",O="bitness",z="sec-ch-ua",N=z+"-full-version-list",I=z+"-arch",P=z+"-"+O,U=z+"-form-factor",H=z+"-"+y,E=z+"-"+h,M=z+"-"+q,R=M+"-version",j=[S,C,y,h,q,A,x,T,O],V="browser",B="cpu",F="device",X="engine",D="os",G="result",$="Amazon",L="Apple",W="ASUS",K="BlackBerry",Z="Google",Q="Huawei",Y="Lenovo",J="LG",ii="Microsoft",ei="Motorola",ti="Samsung",oi="Sony",ri="Xiaomi",ai="Zebra",si="Mobile ",ni=" Browser",wi="Chrome",bi="Firefox",li="Opera",ui="Facebook",ci="Windows",di=typeof i!==b,pi=di&&i.navigator?i.navigator:u,hi=pi&&pi.userAgentData?pi.userAgentData:u,fi=function(i,e){var t,o={};for(t in i)o[t]=e[t]&&e[t].length%2==0?e[t].concat(i[t]):i[t];return o},mi=function(i){for(var e in i)return/^(browser|cpu|device|engine|os)$/.test(e)},gi=function(i){return typeof i===s},vi=function(i){if(!i)return u;for(var e,t=[],o=_i(/\\?\"/g,i).split(","),r=0;r<o.length;r++)-1<o[r].indexOf(";")?(e=Ti(o[r]).split(";v="),t[r]={brand:e[0],version:e[1]}):t[r]=Ti(o[r]);return t},xi=function(i){return gi(i)?i.toLowerCase():i},ki=function(i){return gi(i)?_i(/[^\d\.]/g,i).split(".")[0]:u},yi=function(i){for(var e in i){e=i[e];typeof e==d&&2==e.length?this[e[0]]=e[1]:this[e]=u}return this},_i=function(i,e){return gi(e)?e.replace(i,w):e},Si=function(i){return _i(/\\?\"/g,i)},Ti=function(i,e){if(gi(i))return i=_i(/^\s\s*/,i),typeof e===b?i:i.substring(0,_)},Ci=function(i,e){if(i&&e)for(var t,o,r,a,s,n=0;n<e.length&&!a;){for(var w=e[n],b=e[n+1],l=t=0;l<w.length&&!a&&w[l];)if(a=w[l++].exec(i))for(o=0;o<b.length;o++)s=a[++t],typeof(r=b[o])===d&&0<r.length?2===r.length?typeof r[1]==c?this[r[0]]=r[1].call(this,s):this[r[0]]=r[1]:3===r.length?typeof r[1]!==c||r[1].exec&&r[1].test?this[r[0]]=s?s.replace(r[1],r[2]):u:this[r[0]]=s?r[1].call(this,s,r[2]):u:4===r.length&&(this[r[0]]=s?r[3].call(this,s.replace(r[1],r[2])):u):this[r]=s||u;n+=2}},qi=function(i,e){for(var t in e)if(typeof e[t]===d&&0<e[t].length){for(var o=0;o<e[t].length;o++)if(n(e[t][o],i))return"?"===t?u:t}else if(n(e[t],i))return"?"===t?u:t;return e.hasOwnProperty("*")?e["*"]:i},Ai={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},Oi={embedded:"Automotive",mobile:"Mobile",tablet:["Tablet","EInk"],smarttv:"TV",wearable:["VR","XR","Watch"],"?":["Desktop","Unknown"],"*":u},zi={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[v,[f,si+"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[v,[f,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[f,v],[/opios[\/ ]+([\w\.]+)/i],[v,[f,li+" Mini"]],[/\bop(?:rg)?x\/([\w\.]+)/i],[v,[f,li+" GX"]],[/\bopr\/([\w\.]+)/i],[v,[f,li]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[v,[f,"Baidu"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[f,v],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[v,[f,"UCBrowser"]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[v,[f,"WeChat"]],[/konqueror\/([\w\.]+)/i],[v,[f,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[v,[f,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[v,[f,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[v,[f,"Smart "+Y+ni]],[/(avast|avg)\/([\w\.]+)/i],[[f,/(.+)/,"$1 Secure"+ni],v],[/\bfocus\/([\w\.]+)/i],[v,[f,bi+" Focus"]],[/\bopt\/([\w\.]+)/i],[v,[f,li+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[v,[f,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[v,[f,"Dolphin"]],[/coast\/([\w\.]+)/i],[v,[f,li+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[v,[f,"MIUI"+ni]],[/fxios\/([\w\.-]+)/i],[v,[f,si+bi]],[/\bqihu|(qi?ho?o?|360)browser/i],[[f,"360"+ni]],[/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],[[f,/(.+)/,"$1"+ni],v],[/samsungbrowser\/([\w\.]+)/i],[v,[f,ti+" Internet"]],[/(comodo_dragon)\/([\w\.]+)/i],[[f,/_/g," "],v],[/metasr[\/ ]?([\d\.]+)/i],[v,[f,"Sogou Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[f,"Sogou Mobile"],v],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],[f,v],[/(lbbrowser)/i,/\[(linkedin)app\]/i],[f],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[f,ui],v],[/(Klarna)\/([\w\.]+)/i,/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],[f,v],[/\bgsa\/([\w\.]+) .*safari\//i],[v,[f,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[v,[f,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[v,[f,wi+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[f,wi+" WebView"],v],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[v,[f,"Android"+ni]],[/chrome\/([\w\.]+) mobile/i],[v,[f,si+"Chrome"]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[f,v],[/version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i],[v,[f,si+"Safari"]],[/iphone .*mobile(?:\/\w+ | ?)safari/i],[[f,si+"Safari"]],[/version\/([\w\.\,]+) .*(safari)/i],[v,f],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[f,[v,"1"]],[/(webkit|khtml)\/([\w\.]+)/i],[f,v],[/(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i],[[f,si+bi],v],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[f,"Netscape"],v],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[v,[f,bi+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[f,v],[/(cobalt)\/([\w\.]+)/i],[f,[v,/[^\d\.]+./,w]]],cpu:[[/\b(?:(amd|x|x86[-_]?|wow|win)64)\b/i],[[x,"amd64"]],[/(ia32(?=;))/i,/((?:i[346]|x)86)[;\)]/i],[[x,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[x,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[x,"armhf"]],[/windows (ce|mobile); ppc;/i],[[x,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[x,/ower/,w,xi]],[/(sun4\w)[;\)]/i],[[x,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[x,xi]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[h,[g,ti],[m,r]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[h,[g,ti],[m,y]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[h,[g,L],[m,y]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[h,[g,L],[m,r]],[/(macintosh);/i],[h,[g,L]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[h,[g,"Sharp"],[m,y]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[h,[g,Q],[m,r]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[h,[g,Q],[m,y]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[h,/_/g," "],[g,ri],[m,y]],[/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[h,/_/g," "],[g,ri],[m,r]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[h,[g,"OPPO"],[m,y]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[h,[g,"Vivo"],[m,y]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[h,[g,"Realme"],[m,y]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[h,[g,ei],[m,y]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[h,[g,ei],[m,r]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[h,[g,J],[m,r]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[h,[g,J],[m,y]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[h,[g,Y],[m,r]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[h,/_/g," "],[g,"Nokia"],[m,y]],[/(pixel c)\b/i],[h,[g,Z],[m,r]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[h,[g,Z],[m,y]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[h,[g,oi],[m,y]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[h,"Xperia Tablet"],[g,oi],[m,r]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[h,[g,"OnePlus"],[m,y]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[h,[g,$],[m,r]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[h,/(.+)/g,"Fire Phone $1"],[g,$],[m,y]],[/(playbook);[-\w\),; ]+(rim)/i],[h,g,[m,r]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[h,[g,K],[m,y]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[h,[g,W],[m,r]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[h,[g,W],[m,y]],[/(nexus 9)/i],[h,[g,"HTC"],[m,r]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[g,[h,/_/g," "],[m,y]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[h,[g,"Acer"],[m,r]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[h,[g,"Meizu"],[m,y]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[h,[g,"Ulefone"],[m,y]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[g,h,[m,y]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i],[g,h,[m,r]],[/(surface duo)/i],[h,[g,ii],[m,r]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[h,[g,"Fairphone"],[m,y]],[/(shield[\w ]+) b/i],[h,[g,"Nvidia"],[m,r]],[/(sprint) (\w+)/i],[g,h,[m,y]],[/(kin\.[onetw]{3})/i],[[h,/\./g," "],[g,ii],[m,y]],[/droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[h,[g,ai],[m,r]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[h,[g,ai],[m,y]],[/smart-tv.+(samsung)/i],[g,[m,t]],[/hbbtv.+maple;(\d+)/i],[[h,/^/,"SmartTV"],[g,ti],[m,t]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[g,J],[m,t]],[/(apple) ?tv/i],[g,[h,L+" TV"],[m,t]],[/crkey/i],[[h,wi+"cast"],[g,Z],[m,t]],[/droid.+aft(\w+)( bui|\))/i],[h,[g,$],[m,t]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[h,[g,"Sharp"],[m,t]],[/(bravia[\w ]+)( bui|\))/i],[h,[g,oi],[m,t]],[/(mitv-\w{5}) bui/i],[h,[g,ri],[m,t]],[/Hbbtv.*(technisat) (.*);/i],[g,h,[m,t]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[g,Ti],[h,Ti],[m,t]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[m,t]],[/(ouya)/i,/(nintendo) (\w+)/i],[g,h,[m,k]],[/droid.+; (shield) bui/i],[h,[g,"Nvidia"],[m,k]],[/(playstation \w+)/i],[h,[g,oi],[m,k]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[h,[g,ii],[m,k]],[/((pebble))app/i],[g,h,[m,o]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[h,[g,L],[m,o]],[/droid.+; (glass) \d/i],[h,[g,Z],[m,o]],[/droid.+; (wt63?0{2,3})\)/i],[h,[g,ai],[m,o]],[/(quest( 2| pro)?)/i],[h,[g,ui],[m,o]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[g,[m,a]],[/(aeobc)\b/i],[h,[g,$],[m,a]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],[h,[m,y]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[h,[m,r]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[m,r]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[m,y]],[/(android[-\w\. ]{0,9});.+buil/i],[h,[g,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[v,[f,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[v,[f,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[f,v],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[v,f]],os:[[/microsoft (windows) (vista|xp)/i],[f,v],[/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],[f,[v,qi,Ai]],[/windows nt 6\.2; (arm)/i,/windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[v,qi,Ai],[f,ci]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[v,/_/g,"."],[f,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[f,"macOS"],[v,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[v,f],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[f,v],[/\(bb(10);/i],[v,[f,K]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[v,[f,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[v,[f,bi+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[v,[f,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[v,[f,"watchOS"]],[/crkey\/([\d\.]+)/i],[v,[f,wi+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[f,"Chrome OS"],v],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) (\w+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[f,v],[/(sunos) ?([\w\.\d]*)/i],[[f,"Solaris"],v],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[f,v]]},Ni=(wi={init:{},isIgnore:{},isIgnoreRgx:{},toString:{}},yi.call(wi.init,[[V,[f,v,p]],[B,[x]],[F,[m,h,g]],[X,[f,v]],[D,[f,v]]]),yi.call(wi.isIgnore,[[V,[v,p]],[X,[v]],[D,[v]]]),yi.call(wi.isIgnoreRgx,[[V,/ ?browser$/i],[D,/ ?os$/i]]),yi.call(wi.toString,[[V,[f,v]],[B,[x]],[F,[g,h]],[X,[f,v]],[D,[f,v]]]),wi),Ii=function(e,i){var t=Ni.init[i],o=Ni.isIgnore[i]||0,r=Ni.isIgnoreRgx[i]||0,a=Ni.toString[i]||0;function s(){yi.call(this,t)}return s.prototype.getItem=function(){return e},s.prototype.withClientHints=function(){return hi?hi.getHighEntropyValues(j).then(function(i){return e.setCH(new Pi(i,!1)).parseCH().get()}):e.parseCH().get()},s.prototype.withFeatureCheck=function(){return e.detectFeature().get()},i!=G&&(s.prototype.is=function(i){var e,t=!1;for(e in this)if(this.hasOwnProperty(e)&&!n(o,e)&&xi(r?_i(r,this[e]):this[e])==xi(r?_i(r,i):i)){if(t=!0,i!=b)break}else if(i==b&&t){t=!t;break}return t},s.prototype.toString=function(){var i,e=w;for(i in a)typeof this[a[i]]!==b&&(e+=(e?" ":w)+this[a[i]]);return e||b}),hi||(s.prototype.then=function(i){var e=this,t=function(){for(var i in e)e.hasOwnProperty(i)&&(this[i]=e[i])};t.prototype={is:s.prototype.is,toString:s.prototype.toString};t=new t;return i(t),t}),new s};function Pi(i,e){if(i=i||{},yi.call(this,j),e)yi.call(this,[[S,vi(i[z])],[C,vi(i[N])],[y,/\?1/.test(i[H])],[h,Si(i[E])],[q,Si(i[M])],[A,Si(i[R])],[x,Si(i[I])],[T,vi(i[U])],[O,Si(i[P])]]);else for(var t in i)this.hasOwnProperty(t)&&typeof i[t]!==b&&(this[t]=i[t])}function Ui(i,e,t,o){return this.get=function(i){return i?this.data.hasOwnProperty(i)?this.data[i]:u:this.data},this.set=function(i,e){return this.data[i]=e,this},this.setCH=function(i){return this.uaCH=i,this},this.detectFeature=function(){if(pi&&pi.userAgent==this.ua)switch(this.itemType){case V:pi.brave&&typeof pi.brave.isBrave==c&&this.set(f,"Brave");break;case F:!this.get(m)&&hi&&hi[y]&&this.set(m,y),"Macintosh"==this.get(h)&&pi&&typeof pi.standalone!==b&&pi.maxTouchPoints&&2<pi.maxTouchPoints&&this.set(h,"iPad").set(m,r);break;case D:!this.get(f)&&hi&&hi[q]&&this.set(f,hi[q]);break;case G:var e=this.data,i=function(i){return e[i].getItem().detectFeature().get()};this.set(V,i(V)).set(B,i(B)).set(F,i(F)).set(X,i(X)).set(D,i(D))}return this},this.parseUA=function(){return this.itemType!=G&&Ci.call(this.data,this.ua,this.rgxMap),this.itemType==V&&this.set(p,ki(this.get(v))),this},this.parseCH=function(){var i,e=this.uaCH,t=this.rgxMap;switch(this.itemType){case V:var o,r=e[C]||e[S];if(r)for(var a in r){var s=_i(/(Google|Microsoft) /,r[a].brand||r[a]),a=r[a].version;/not.a.brand/i.test(s)||o&&(!/chrom/i.test(o)||/chromi/i.test(s))||(this.set(f,s).set(v,a).set(p,ki(a)),o=s)}break;case B:var n=e[x];n&&(n&&"64"==e[O]&&(n+="64"),Ci.call(this.data,n+";",t));break;case F:if(e[y]&&this.set(m,y),e[h]&&this.set(h,e[h]),"Xbox"==e[h]&&this.set(m,k).set(g,ii),e[T]){if("string"!=typeof e[T])for(var w=0;!i&&w<e[T].length;)i=qi(e[T][w++],Oi);else i=qi(e[T],Oi);this.set(m,i)}break;case D:n=e[q];n&&(l=e[A],n==ci&&(l=13<=parseInt(ki(l),10)?"11":"10"),this.set(f,n).set(v,l)),this.get(f)==ci&&"Xbox"==e[h]&&this.set(f,"Xbox").set(v,u);break;case G:var b=this.data,l=function(i){return b[i].getItem().setCH(e).parseCH().get()};this.set(V,l(V)).set(B,l(B)).set(F,l(F)).set(X,l(X)).set(D,l(D))}return this},yi.call(this,[["itemType",i],["ua",e],["uaCH",o],["rgxMap",t],["data",Ii(this,i)]]),this}function Hi(i,e,t){if(typeof i===d?(e=mi(i)?(typeof e===d&&(t=e),i):(t=i,u),i=u):typeof i!==s||mi(e)||(t=e,e=u),!(this instanceof Hi))return new Hi(i,e,t).getResult();var o=typeof i===s?i:pi&&pi.userAgent?pi.userAgent:t&&t[l]?t[l]:w,r=new Pi(t,!0),a=e?fi(zi,e):zi,e=function(i){return i==G?function(){return new Ui(i,o,a,r).set("ua",o).set(V,this.getBrowser()).set(B,this.getCPU()).set(F,this.getDevice()).set(X,this.getEngine()).set(D,this.getOS()).get()}:function(){return new Ui(i,o,a[i],r).parseUA().get()}};return yi.call(this,[["getBrowser",e(V)],["getCPU",e(B)],["getDevice",e(F)],["getEngine",e(X)],["getOS",e(D)],["getResult",e(G)],["getUA",function(){return o}],["setUA",function(i){return gi(i)&&(o=i.length>_?Ti(i,_):i),this}]]).setUA(o),this}Hi.VERSION="2.0.0-beta.2",Hi.BROWSER=e([f,v,p]),Hi.CPU=e([x]),Hi.DEVICE=e([h,g,m,k,y,t,r,o,a]),Hi.ENGINE=Hi.OS=e([f,v]),typeof exports!==b?(typeof module!==b&&module.exports&&(exports=module.exports=Hi),exports.UAParser=Hi):typeof define===c&&define.amd?define(function(){return Hi}):di&&(i.UAParser=Hi);var Ei,Mi=di&&(i.jQuery||i.Zepto);Mi&&!Mi.ua&&(Ei=new Hi,Mi.ua=Ei.getResult(),Mi.ua.get=function(){return Ei.getUA()},Mi.ua.set=function(i){Ei.setUA(i);var e,t=Ei.getResult();for(e in t)Mi.ua[e]=t[e]})}("object"==typeof window?window:this);