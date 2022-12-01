// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).iterGamma=n()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,t=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__;n=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,n,t){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(f.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),y="get"in t,v="set"in t,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,n,t.get),v&&i&&i.call(r,n,t.set),r};var c=n;function l(r,n,t){c(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var y=/./;function v(r){return"boolean"==typeof r}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function w(r,n){return null!=r&&d.call(r,n)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var j=s()?function(r){var n,t,e;if(null==r)return b.call(r);t=r[m],n=w(r,m);try{r[m]=void 0}catch(n){return b.call(r)}return e=b.call(r),n?r[m]=t:delete r[m],e}:function(r){return b.call(r)},g=Boolean.prototype.toString;var h=s();function A(r){return"object"==typeof r&&(r instanceof Boolean||(h?function(r){try{return g.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===j(r)))}function _(r){return v(r)||A(r)}function O(){return new Function("return this;")()}l(_,"isPrimitive",v),l(_,"isObject",A);var N="object"==typeof self?self:null,U="object"==typeof window?window:null,S="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},E="object"==typeof S?S:null;var T=function(r){if(arguments.length){if(!v(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return O()}if(N)return N;if(U)return U;if(E)return E;throw new Error("unexpected error. Unable to resolve global object.")}(),F=T.document&&T.document.childNodes,I=Int8Array;function P(){return/^\s*function\s*([^(]*)/i}var G=/^\s*function\s*([^(]*)/i;l(P,"REGEXP",G);var V=Array.isArray?Array.isArray:function(r){return"[object Array]"===j(r)};function x(r){return null!==r&&"object"==typeof r}function H(r){var n,t,e,o;if(("Object"===(t=j(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(n=G.exec(e.toString()))return n[1]}return x(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}l(x,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(n){var t,e;if(!V(n))return!1;if(0===(t=n.length))return!1;for(e=0;e<t;e++)if(!1===r(n[e]))return!1;return!0}}(x));var B="function"==typeof y||"object"==typeof I||"function"==typeof F?function(r){return H(r).toLowerCase()}:function(r){var n;return null===r?"null":"object"===(n=typeof r)?H(r).toLowerCase():n};function L(r){return"function"===B(r)}function M(r){var n=typeof r;return null!==r&&("object"===n||"function"===n)&&L(r.next)}function k(r){return"number"==typeof r}var W=Number,C=W.prototype.toString;var Y=s();function q(r){return"object"==typeof r&&(r instanceof W||(Y?function(r){try{return C.call(r),!0}catch(r){return!1}}(r):"[object Number]"===j(r)))}function R(r){return k(r)||q(r)}l(R,"isPrimitive",k),l(R,"isObject",q);var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&w(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var z,D=Object.getPrototypeOf;z=L(Object.getPrototypeOf)?D:function(r){var n=function(r){return r.__proto__}(r);return n||null===n?n:"[object Function]"===j(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var J=z;var K=Object.prototype;function Q(r){var n;return!!function(r){return"object"==typeof r&&null!==r&&!V(r)}(r)&&(n=function(r){return null==r?null:(r=Object(r),J(r))}(r),!n||!w(r,"constructor")&&w(n,"constructor")&&L(n.constructor)&&"[object Function]"===j(n.constructor)&&w(n,"isPrototypeOf")&&L(n.isPrototypeOf)&&(n===K||function(r){var n;for(n in r)if(!w(r,n))return!1;return!0}(r)))}function Z(r,n){return Q(n)?(w(n,"invalid")&&(r.invalid=n.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.")}function $(r,n,t){var e,o,u,i;if(!M(r))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+r+"`.");if(!L(n))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");if(e={invalid:NaN},arguments.length>2&&(u=Z(e,t)))throw u;return l(o={},"next",f),l(o,"return",a),X&&L(r[X])&&l(o,X,c),o;function f(){var t;return i?{done:!0}:(t=r.next()).done?(i=!0,t):{value:k(t.value)?n(t.value):e.invalid,done:!1}}function a(r){return i=!0,arguments.length?{value:r,done:!0}:{done:!0}}function c(){return $(r[X](),n,e)}}function rr(r){return r!=r}var nr=Math.floor;function tr(r){return nr(r)===r}var er=W.NEGATIVE_INFINITY;function or(r){return Math.abs(r)}var ur="function"==typeof Uint32Array;var ir="function"==typeof Uint32Array?Uint32Array:null;var fr,ar="function"==typeof Uint32Array?Uint32Array:void 0;fr=function(){var r,n,t;if("function"!=typeof ir)return!1;try{n=new ir(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(ur&&t instanceof Uint32Array||"[object Uint32Array]"===j(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?ar:function(){throw new Error("not implemented")};var cr=fr,lr="function"==typeof Float64Array;var yr="function"==typeof Float64Array?Float64Array:null;var vr,pr="function"==typeof Float64Array?Float64Array:void 0;vr=function(){var r,n,t;if("function"!=typeof yr)return!1;try{n=new yr([1,3.14,-3.14,NaN]),t=n,r=(lr&&t instanceof Float64Array||"[object Float64Array]"===j(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var sr=vr,br="function"==typeof Uint8Array;var dr="function"==typeof Uint8Array?Uint8Array:null;var wr,mr="function"==typeof Uint8Array?Uint8Array:void 0;wr=function(){var r,n,t;if("function"!=typeof dr)return!1;try{n=new dr(n=[1,3.14,-3.14,256,257]),t=n,r=(br&&t instanceof Uint8Array||"[object Uint8Array]"===j(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?mr:function(){throw new Error("not implemented")};var jr=wr,gr="function"==typeof Uint16Array;var hr="function"==typeof Uint16Array?Uint16Array:null;var Ar,_r="function"==typeof Uint16Array?Uint16Array:void 0;Ar=function(){var r,n,t;if("function"!=typeof hr)return!1;try{n=new hr(n=[1,3.14,-3.14,65536,65537]),t=n,r=(gr&&t instanceof Uint16Array||"[object Uint16Array]"===j(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?_r:function(){throw new Error("not implemented")};var Or,Nr={uint16:Ar,uint8:jr};(Or=new Nr.uint16(1))[0]=4660;var Ur=52===new Nr.uint8(Or.buffer)[0],Sr=!0===Ur?1:0,Er=new sr(1),Tr=new cr(Er.buffer);function Fr(r){return Er[0]=r,Tr[Sr]}function Ir(r,n){var t,e,o,u;return o=(u=r*r)*u,e=u*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(u),e+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(u),(o=1-(t=.5*u))+(1-o-t+(u*e-r*n))}var Pr=-.16666666666666632;function Gr(r,n){var t,e,o;return t=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===n?r+e*(Pr+o*t):r-(o*(.5*n-e*t)-n-e*Pr)}var Vr,xr,Hr=!0===Ur?0:1,Br=new sr(1),Lr=new cr(Br.buffer);!0===Ur?(Vr=1,xr=0):(Vr=0,xr=1);var Mr={HIGH:Vr,LOW:xr},kr=new sr(1),Wr=new cr(kr.buffer),Cr=Mr.HIGH,Yr=Mr.LOW;function qr(r,n){return Wr[Cr]=r,Wr[Yr]=n,kr[0]}var Rr=Number.POSITIVE_INFINITY,Xr=1023;function zr(r){return r===Rr||r===er}var Dr,Jr,Kr=2147483647;!0===Ur?(Dr=1,Jr=0):(Dr=0,Jr=1);var Qr={HIGH:Dr,LOW:Jr},Zr=new sr(1),$r=new cr(Zr.buffer),rn=Qr.HIGH,nn=Qr.LOW;function tn(r,n,t,e){return Zr[0]=r,n[e]=$r[rn],n[e+t]=$r[nn],n}function en(r){return tn(r,[0,0],1,0)}l(en,"assign",tn);var on=[0,0];function un(r,n){var t,e;return en.assign(r,on,1,0),t=on[0],t&=Kr,e=Fr(n),qr(t|=e&=2147483648,on[1])}function fn(r,n,t,e){return rr(r)||zr(r)?(n[e]=r,n[e+t]=0,n):0!==r&&or(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}l((function(r){return fn(r,[0,0],1,0)}),"assign",fn);var an=[0,0],cn=[0,0];function ln(r,n){var t,e;return 0===n||0===r||rr(r)||zr(r)?r:(fn(r,an,1,0),n+=an[1],n+=function(r){var n=Fr(r);return(n=(2146435072&n)>>>20)-Xr|0}(r=an[0]),n<-1074?un(0,r):n>1023?r<0?er:Rr:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,en.assign(r,cn,1,0),t=cn[0],t&=2148532223,e*qr(t|=n+Xr<<20,cn[1])))}function yn(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var vn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],pn=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],sn=16777216,bn=5.960464477539063e-8,dn=yn(20),wn=yn(20),mn=yn(20),jn=yn(20);function gn(r,n,t,e,o,u,i,f,a){var c,l,y,v,p,s,b,d,w;for(v=u,w=e[t],d=t,p=0;d>0;p++)l=bn*w|0,jn[p]=w-sn*l|0,w=e[d-1]+l,d-=1;if(w=ln(w,o),w-=8*nr(.125*w),w-=b=0|w,y=0,o>0?(b+=p=jn[t-1]>>24-o,jn[t-1]-=p<<24-o,y=jn[t-1]>>23-o):0===o?y=jn[t-1]>>23:w>=.5&&(y=2),y>0){for(b+=1,c=0,p=0;p<t;p++)d=jn[p],0===c?0!==d&&(c=1,jn[p]=16777216-d):jn[p]=16777215-d;if(o>0)switch(o){case 1:jn[t-1]&=8388607;break;case 2:jn[t-1]&=4194303}2===y&&(w=1-w,0!==c&&(w-=ln(1,o)))}if(0===w){for(d=0,p=t-1;p>=u;p--)d|=jn[p];if(0===d){for(s=1;0===jn[u-s];s++);for(p=t+1;p<=t+s;p++){for(a[f+p]=vn[i+p],l=0,d=0;d<=f;d++)l+=r[d]*a[f+(p-d)];e[p]=l}return gn(r,n,t+=s,e,o,u,i,f,a)}}if(0===w)for(t-=1,o-=24;0===jn[t];)t-=1,o-=24;else(w=ln(w,-o))>=sn?(l=bn*w|0,jn[t]=w-sn*l|0,o+=24,jn[t+=1]=l):jn[t]=0|w;for(l=ln(1,o),p=t;p>=0;p--)e[p]=l*jn[p],l*=bn;for(p=t;p>=0;p--){for(l=0,s=0;s<=v&&s<=t-p;s++)l+=pn[s]*e[p+s];mn[t-p]=l}for(l=0,p=t;p>=0;p--)l+=mn[p];for(n[0]=0===y?l:-l,l=mn[0]-l,p=1;p<=t;p++)l+=mn[p];return n[1]=0===y?l:-l,7&b}function hn(r,n,t,e){var o,u,i,f,a,c,l;for(4,(u=(t-3)/24|0)<0&&(u=0),f=t-24*(u+1),c=u-(i=e-1),l=i+4,a=0;a<=l;a++)dn[a]=c<0?0:vn[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=i;c++)o+=r[c]*dn[i+(a-c)];wn[a]=o}return 4,gn(r,n,4,wn,f,4,u,i,dn)}var An=Math.round;function _n(r,n,t){var e,o,u,i,f;return u=r-1.5707963267341256*(e=An(.6366197723675814*r)),i=6077100506506192e-26*e,f=n>>20|0,t[0]=u-i,f-(Fr(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((o=u)-(u=o-(i=6077100506303966e-26*e))-i),t[0]=u-i,f-(Fr(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((o=u)-(u=o-(i=20222662487111665e-37*e))-i),t[0]=u-i)),t[1]=u-t[0]-i,e}var On=1.5707963267341256,Nn=6077100506506192e-26,Un=2*Nn,Sn=3*Nn,En=4*Nn,Tn=[0,0,0],Fn=[0,0];function In(r,n){var t,e,o,u,i,f,a;if((o=2147483647&Fr(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?_n(r,o,n):o<=1073928572?r>0?(a=r-On,n[0]=a-Nn,n[1]=a-n[0]-Nn,1):(a=r+On,n[0]=a+Nn,n[1]=a-n[0]+Nn,-1):r>0?(a=r-2*On,n[0]=a-Un,n[1]=a-n[0]-Un,2):(a=r+2*On,n[0]=a+Un,n[1]=a-n[0]+Un,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?_n(r,o,n):r>0?(a=r-3*On,n[0]=a-Sn,n[1]=a-n[0]-Sn,3):(a=r+3*On,n[0]=a+Sn,n[1]=a-n[0]+Sn,-3):1075388923===o?_n(r,o,n):r>0?(a=r-4*On,n[0]=a-En,n[1]=a-n[0]-En,4):(a=r+4*On,n[0]=a+En,n[1]=a-n[0]+En,-4);if(o<1094263291)return _n(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return Br[0]=r,Lr[Hr]}(r),a=qr(o-((e=(o>>20)-1046)<<20|0),t),i=0;i<2;i++)Tn[i]=0|a,a=16777216*(a-Tn[i]);for(Tn[2]=a,u=3;0===Tn[u-1];)u-=1;return f=hn(Tn,Fn,e,u),r<0?(n[0]=-Fn[0],n[1]=-Fn[1],-f):(n[0]=Fn[0],n[1]=Fn[1],f)}var Pn=[0,0];var Gn=3.141592653589793;function Vn(r){return tr(r/2)}function xn(r){return Vn(r>0?r-1:r+1)}var Hn=Math.sqrt,Bn=!0===Ur?0:1,Ln=new sr(1),Mn=new cr(Ln.buffer);function kn(r,n){return Ln[0]=r,Mn[Bn]=n>>>0,Ln[0]}function Wn(r){return 0|r}var Cn=!0===Ur?1:0,Yn=new sr(1),qn=new cr(Yn.buffer);function Rn(r,n){return Yn[0]=r,qn[Cn]=n>>>0,Yn[0]}var Xn=1048576,zn=[1,1.5],Dn=[0,.5849624872207642],Jn=[0,1.350039202129749e-8];var Kn=1048575;var Qn=1048576;var Zn=1083179008,$n=1e300,rt=1e-300,nt=[0,0],tt=[0,0];function et(r,n){var t,e,o,u,i,f,a,c,l,y,v,p,s,b;if(rr(r)||rr(n))return NaN;if(en.assign(n,nt,1,0),i=nt[0],0===nt[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Hn(r);if(-.5===n)return 1/Hn(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(zr(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:or(r)<1==(n===Rr)?0:Rr}(r,n)}if(en.assign(r,nt,1,0),u=nt[0],0===nt[1]){if(0===u)return function(r,n){return n===er?Rr:n===Rr?0:n>0?xn(n)?r:0:xn(n)?un(Rr,r):Rr}(r,n);if(1===r)return 1;if(-1===r&&xn(n))return-1;if(zr(r))return r===er?et(-0,-n):n<0?0:Rr}if(r<0&&!1===tr(n))return(r-r)/(r-r);if(o=or(r),t=u&Kr|0,e=i&Kr|0,a=i>>>31|0,f=(f=u>>>31|0)&&xn(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(Fr(r)&Kr)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*$n*$n:f*rt*rt;if(t>1072693248)return 0===a?f*$n*$n:f*rt*rt;v=function(r,n){var t,e,o,u,i,f;return t=(i=1.9259629911266175e-8*(o=n-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=kn(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=t,r}(tt,o)}else v=function(r,n,t){var e,o,u,i,f,a,c,l,y,v,p,s,b,d,w,m,j,g,h,A,_;return g=0,t<Xn&&(g-=53,t=Fr(n*=9007199254740992)),g+=(t>>20)-Xr|0,t=1072693248|(h=1048575&t|0),h<=235662?A=0:h<767610?A=1:(A=0,g+=1,t-=Xn),i=kn(o=(m=(n=Rn(n,t))-(c=zn[A]))*(j=1/(n+c)),0),e=524288+(t>>1|536870912),a=Rn(0,e+=A<<18),w=(u=o*o)*u*(0===(_=u)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),a=kn(a=3+(u=i*i)+(w+=(f=j*(m-i*a-i*(n-(a-c))))*(i+o)),0),b=(p=-7.028461650952758e-9*(y=kn(y=(m=i*a)+(j=f*a+(w-(a-3-u))*o),0))+.9617966939259756*(j-(y-m))+Jn[A])-((s=kn(s=(v=.9617967009544373*y)+p+(l=Dn[A])+(d=g),0))-d-l-v),r[0]=s,r[1]=b,r}(tt,o,t);if(p=(y=(n-(c=kn(n,0)))*v[0]+n*v[1])+(l=c*v[0]),en.assign(p,nt,1,0),s=Wn(nt[0]),b=Wn(nt[1]),s>=Zn){if(0!=(s-Zn|b))return f*$n*$n;if(y+8008566259537294e-32>p-l)return f*$n*$n}else if((s&Kr)>=1083231232){if(0!=(s-3230714880|b))return f*rt*rt;if(y<=p-l)return f*rt*rt}return p=function(r,n,t){var e,o,u,i,f,a,c,l,y,v;return y=((l=r&Kr|0)>>20)-Xr|0,c=0,l>1071644672&&(o=Rn(0,((c=r+(Qn>>y+1)>>>0)&~(Kn>>(y=((c&Kr)>>20)-Xr|0)))>>>0),c=(c&Kn|Qn)>>20-y>>>0,r<0&&(c=-c),n-=o),r=Wn(r=Fr(a=1-((a=(u=.6931471824645996*(o=kn(o=t+n,0)))+(i=.6931471805599453*(t-(o-n))+-1.904654299957768e-9*o))*(e=a-(o=a*a)*(0===(v=o)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=i-(a-u))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?ln(a,c):Rn(a,r)}(s,l,y),f*p}var ot=Math.ceil;function ut(r){return r<0?ot(r):nr(r)}var it=1.4426950408889634,ft=1/(1<<28);function at(r){var n;return rr(r)||r===Rr?r:r===er?0:r>709.782712893384?Rr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<ft?1+r:function(r,n,t){var e,o,u,i;return ln(1-(n-(e=r-n)*(u=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-u)-r),t)}(r-.6931471803691238*(n=ut(r<0?it*r-.5:it*r+.5)),1.9082149292705877e-10*n,n)}function ct(r){var n,t,e;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),t=at(r),2.5066282746310007*(t=r>143.01608?(e=et(r,.5*r-.25))*(e/t):et(r,r-.5)/t)*n}function lt(r,n){return n/((1+.5772156649015329*r)*r)}function yt(r){var n,t,e,o;if(tr(r)&&r<0||r===er||rr(r))return NaN;if(0===r)return function(r){return 0===r&&1/r===er}(r)?er:Rr;if(r>171.61447887182297)return Rr;if(r<-170.5674972726612)return 0;if((t=or(r))>33)return r>=0?ct(r):(n=0==(1&(e=nr(t)))?-1:1,(o=t-e)>.5&&(o=t-(e+=1)),o=t*function(r){var n;if(n=Fr(r),(n&=2147483647)<=1072243195)return n<1045430272?r:Gr(r,0);if(n>=2146435072)return NaN;switch(3&In(r,Pn)){case 0:return Gr(Pn[0],Pn[1]);case 1:return Ir(Pn[0],Pn[1]);case 2:return-Gr(Pn[0],Pn[1]);default:return-Ir(Pn[0],Pn[1])}}(Gn*o),n*Gn/(or(o)*ct(t)));for(o=1;r>=3;)o*=r-=1;for(;r<0;){if(r>-1e-9)return lt(r,o);o/=r,r+=1}for(;r<2;){if(r<1e-9)return lt(r,o);o/=r,r+=1}return 2===r?o:o*function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),t=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),t=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/t)}(r-=2)}return function(r){return $(r,yt)}}));
//# sourceMappingURL=browser.js.map
