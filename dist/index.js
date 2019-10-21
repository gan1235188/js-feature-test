!function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var s=n(1),o={isOutput:!1},i={done:function(){},name:"",expression:"",type:s.TestType.expectNoWrong,resultCheckFn:function(e,t){t.done(e===t.expectResult)}};function u(){return o}function a(e){document.write("<p>"+e+"</p>")}function c(e,t){return e===t||(e!=e&&t!=t||(Array.isArray(e)&&Array.isArray(t)?p(e,t):"object"==typeof e&&"object"==typeof t&&l(e,t)))}function p(e,t){return e.length===t.length&&(e.every((function(e,n){return c(e,t[n])}))&&t.every((function(t,n){return c(t,e[n])})))}function l(e,t){var n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&(n.every((function(n){return c(e[n],t[n])}))&&r.every((function(n){return c(t[n],e[n])})))}function d(e){try{return f(e.expression)(),e.done(!0)}catch(e){}return e.done(!1)}function f(e){return new Function(e)}t.setConfig=function(e){o=r(r({},o),e)},t.getConfig=u,t.runTest=function(e){void 0===e&&(e=i);var t=function(e){return r(r({},i),e)}(e);switch(u().isOutput&&(t=function(e){var t=e.done;return e.done=function(n){!function(t){a("================================="),a("feature name: "+e.name),a("test result: "+t),a("<pre>expression: "+e.expression+"</pre>"),a("test type: "+e.type),e.description&&a("description: "+e.description),e.resultCheckFn&&a("result check fn: "),e.resultCheckFn&&a("<pre>"+e.resultCheckFn+"</pre>"),e.expectResult&&a("exprect result: "+JSON.stringify(e.expectResult))}(n),t(n)},e}(t)),t.type){case s.TestType.expectNoWrong:return d(t);case s.TestType.checkResult:return function(e){try{var t=f(e.expression)();return e.resultCheckFn(t,e)}catch(e){}return e.done(!1)}(t);case s.TestType.expectThrowError:return function(e){try{return f(e.expression)(),e.done(!1)}catch(t){return e.done(!0)}}(t);default:return d(t)}},t.output=a,t.runIterator=function e(t,n){t((function(){e(t,n)}))},t.isEqual=c,t.isEqualArray=p,t.isEqualObject=l,t.sendAjax=function(e,t,n,r){var s=new XMLHttpRequest;s.onreadystatechange=function(){4==s.readyState&&200==s.status?r(!0,s.responseText):r(!1)},s.onerror=function(e){r(!1,e)},s.open(e.toLocaleUpperCase(),t,!0),s.setRequestHeader("Content-type","application/json"),s.send(JSON.stringify(n))},t.getSearchParams=function(){for(var e=location.search.slice(1),t=decodeURIComponent(e).split("&"),n={},r=t.length-1;r>=0;r--){var s=t[r].split("=");n[s[0]]=s[1]}return n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.checkResult="checkResult",e.expectNoWrong="expectNoWrong",e.expectThrowError="expectThrowError"}(t.TestType||(t.TestType={}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),s=n(0);function o(e,t,n,r){var s=e.name;(0,e.test)(r,(function(e){t[s]=e,n(e)}))}t.featureTest=function(e,t,n,i){s.setConfig(t),function(e,t,n){for(var r={},s=1,i=0;i<t.length;i++)o(t[i],r,u,e);function u(){n(r,++s>=t.length)}}(e,n=function(e){var t=[];return e.map((function(e){(function(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return!0;return!1})(t,(function(t){return t.name===e.name}))||t.push(e)})),t}(n=r.validators.concat(n||[])),(function(e,t){i&&i(e,t)}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),s=n(5),o=n(6),i=n(7),u=n(8),a=n(9),c=n(10),p=n(11),l=n(12),d=n(13),f=n(14),v=n(15),y=n(16),b=n(17),w=n(18),T=n(19),x=n(20),h=n(21),m=n(22),j=n(23),g=n(24),_=n(25),O=n(26),R=n(27),P=n(28),M=n(29),k=n(30),N=n(31),S=n(32),C=n(33),W=n(34),F=n(35),E=n(36),A=n(37),q=n(38),B=n(39),L=n(40),H=n(41),I=n(42),G=n(43),V=n(44),J=n(45),U=n(46);t.validators=[r.validator,s.validator,o.validator,i.validator,u.validator,a.validator,c.validator,p.validator,l.validator,d.validator,f.validator,v.validator,y.validator,b.validator,w.validator,T.validator,x.validator,h.validator,m.validator,j.validator,g.validator,_.validator,O.validator,R.validator,P.validator,M.validator,k.validator,N.validator,S.validator,C.validator,W.validator,F.validator,E.validator,A.validator,q.validator,B.validator,L.validator,H.validator,I.validator,G.validator,V.validator,J.validator,U.validator]},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(1),o="memberExpressionLiterals";t.validator={name:o,test:function(e,t){return r.runTest({done:t,name:o,description:"https://www.babeljs.cn/docs/plugins",expression:"\n    var obj = {}\n    obj.default = 1\n    return obj\n",type:s.TestType.checkResult,resultCheckFn:function(e,t){return(0,t.done)(1===e.default)}})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(1);t.validator={name:"functionBind",test:function(e,t){return r.runTest({done:t,name:"functionBind",description:"https://www.babeljs.cn/docs/plugins",type:s.TestType.expectNoWrong,expression:"{}::()=>{}"})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(1);t.validator={name:"regenerator",test:function(e,t){return r.runTest({done:t,name:"regenerator",description:"https://www.babeljs.cn/docs/plugins",expression:"\n  function* a() {\n    yield 1;\n  }\n  a();\n  async function b() {\n    await 10\n  }\n  b();\n",type:s.TestType.expectNoWrong})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(1);t.validator={name:"spread",test:function(e,t){return r.runTest({done:t,name:"spread",description:"https://www.babeljs.cn/docs/plugins",type:s.TestType.expectNoWrong,expression:"\n  var a = ['a', 'b', 'c'];\n  var b = [...a, 'foo'];\n"})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(1),o="destructuring";t.validator={name:o,test:function(e,t){return r.runTest({done:t,name:o,description:"https://www.babeljs.cn/docs/plugins",type:s.TestType.checkResult,expression:"\n  var {x, y} = {x: 1, y:1};\n  var [a, b, ...rest] = [1,2,3,4,5];\n  return {x, y, a, b, rest}\n",expectResult:{x:1,y:1,a:1,b:2,rest:[3,4,5]}})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(1),o="optionalCatchBinding";t.validator={name:o,test:function(e,t){return r.runTest({done:t,name:o,description:"https://www.babeljs.cn/docs/plugins",type:s.TestType.expectNoWrong,expression:"try{1}catch{}"})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(1),o="unicodePropertyRegex";t.validator={name:o,test:function(e,t){return r.runTest({done:t,name:o,description:"https://www.babeljs.cn/docs/plugins",type:s.TestType.expectNoWrong,expression:'throw new Error("I don\'t know how to test it")'})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(1),o="asyncToGenerator";t.validator={name:o,test:function(e,t){return r.runTest({done:t,name:o,description:"https://www.babeljs.cn/docs/plugins",type:s.TestType.expectNoWrong,expression:"\n  async function a(){ await 1 }\n"})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(1),o="arrowFunctions";t.validator={name:o,test:function(e,t){return r.runTest({done:t,name:o,description:"https://www.babeljs.cn/docs/plugins",type:s.TestType.expectNoWrong,expression:"()=>1"})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(1),o="blockScopedFunctions";t.validator={name:o,test:function(e,t){return r.runTest({done:t,name:o,description:"https://www.babeljs.cn/docs/plugins",type:s.TestType.expectThrowError,expression:"\n  if(1) {\n    function a(){ return 1; }\n  }\n  \n  a()\n"})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(1);t.validator={name:"blockScoping",test:function(e,t){return r.runTest({done:t,name:"blockScoping",description:"https://www.babeljs.cn/docs/plugins",type:s.TestType.expectThrowError,expression:"\n  if(1) {\n    const a = 1\n  }\n\n  a\n"})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(1),o="classProperties";t.validator={name:o,test:function(e,t){return r.runTest({done:t,name:o,description:"https://www.babeljs.cn/docs/plugins",type:s.TestType.expectNoWrong,expression:"\n  class A {\n    a = 1\n  }\n"})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(1);t.validator={name:"classes",test:function(e,t){return r.runTest({done:t,name:"classes",description:"https://www.babeljs.cn/docs/plugins",type:s.TestType.checkResult,expression:"\n  class A {\n    a() { return 1; }\n  }\n\n  class B extends A {\n    b() { return 2;}\n  }\n\n  var b = new B()\n  return b.b()\n",expectResult:2})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(1),o="computedProperties";t.validator={name:o,test:function(e,t){return r.runTest({done:t,name:o,description:"https://www.babeljs.cn/docs/plugins",type:s.TestType.checkResult,expression:"\n  var key = 'key';\n  var obj = {\n    [key + 1]: 1\n  }\n\n  return obj.key1\n",expectResult:1})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(1);t.validator={name:"dotallRegex",test:function(e,t){return r.runTest({done:t,name:"dotallRegex",description:"https://www.babeljs.cn/docs/plugins",type:s.TestType.checkResult,expression:"\n  return /./s.test('\\n')\n",expectResult:!0})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(1),o="exponentiationOperator";t.validator={name:o,test:function(e,t){return r.runTest({done:t,name:o,description:"https://www.babeljs.cn/docs/plugins",type:s.TestType.checkResult,expression:"\n  return 2 ** 2\n",expectResult:4})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(1);t.validator={name:"forOf",test:function(e,t){return r.runTest({done:t,name:"forOf",description:"https://www.babeljs.cn/docs/plugins",type:s.TestType.expectNoWrong,expression:"\n  for(var i of []){}\n"})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(1);t.validator={name:"functionName",test:function(e,t){return r.runTest({done:t,name:"functionName",description:"https://www.babeljs.cn/docs/plugins",type:s.TestType.checkResult,expression:"\n  var fn = function(){}\n  return fn.name\n",expectResult:"fn"})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(1);t.validator={name:"instanceof",test:function(e,t){return r.runTest({done:t,name:"instanceof",description:"https://www.babeljs.cn/docs/plugins",type:s.TestType.expectNoWrong,expression:"\n  Symbol.hasInstance\n"})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(1);t.validator={name:"literals",test:function(e,t){return r.runTest({done:t,name:"literals",description:"https://www.babeljs.cn/docs/plugins",type:s.TestType.checkResult,expression:"\n  return [0b11, 0o7, 'Hello\\u{000A}\\u{0009}!']\n",expectResult:[3,7,"Hello\n\t!"]})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(1),o="propertyLiterals";t.validator={name:o,test:function(e,t){return r.runTest({done:t,name:o,description:"https://www.babeljs.cn/docs/plugins",type:s.TestType.checkResult,expression:"\n  return {\n    default: 1\n  }\n",resultCheckFn:function(e){return 1===e.default}})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(1),o="namedCapturingGroupsRegex";t.validator={name:o,test:function(e,t){return r.runTest({done:t,name:o,description:"https://www.babeljs.cn/docs/plugins",type:s.TestType.checkResult,expression:'\n  var re = /(?<year>d{4})-(?<month>d{2})-(?<day>d{2})/;\n  return re.exec("1999-02-29").groups.year\n',expectResult:"1999"})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(1);t.validator={name:"newTarget",test:function(e,t){return r.runTest({done:t,name:"newTarget",description:"https://www.babeljs.cn/docs/plugins",type:s.TestType.checkResult,expression:"\n  function Foo() {\n    return new.target\n  }\n  return Foo() === undefined && new Foo() === Foo\n",expectResult:!0})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(1);t.validator={name:"ObjectSuper",test:function(e,t){return r.runTest({done:t,name:"ObjectSuper",description:"https://www.babeljs.cn/docs/plugins",type:s.TestType.expectNoWrong,expression:'\nvar obj2 = {\n  say () {\n    return super.say() + "World!"\n  }\n}\n'})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(1);t.validator={name:"parameters",test:function(e,t){return r.runTest({done:t,name:"parameters",description:"https://www.babeljs.cn/docs/plugins",type:s.TestType.expectNoWrong,expression:"\n  function a(x = 1) {}\n  function b({x}){}\n  function c(...x){}\n"})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(1);t.validator={name:"reservedWord",test:function(e,t){return r.runTest({done:t,name:"reservedWord",description:"https://www.babeljs.cn/docs/plugins",type:s.TestType.checkResult,expression:"\n  var abstract = 1;\n  return abstract;\n",expectResult:1})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(1);t.validator={name:"stickyRegex",test:function(e,t){return r.runTest({done:t,name:"stickyRegex",description:"https://www.babeljs.cn/docs/plugins",type:s.TestType.expectNoWrong,expression:"\n  var a = /o+/y;\n"})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(1),o="templateLiterals";t.validator={name:o,test:function(e,t){return r.runTest({done:t,name:o,description:"https://www.babeljs.cn/docs/plugins",type:s.TestType.checkResult,expression:"return `${1}`",expectResult:"1"})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(1);t.validator={name:"typeofSymbol",test:function(e,t){return r.runTest({done:t,name:"typeofSymbol",description:"https://www.babeljs.cn/docs/plugins",type:s.TestType.checkResult,expression:"return typeof Symbol === 'symbol'",expectResult:!0})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(1);t.validator={name:"unicodeRegex",test:function(e,t){return r.runTest({done:t,name:"unicodeRegex",description:"https://www.babeljs.cn/docs/plugins",type:s.TestType.checkResult,expression:"\n  return /^.$/u.test('😄');\n",expectResult:!0})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(1),o="logicalAssignmentOperators";t.validator={name:o,test:function(e,t){return r.runTest({done:t,name:o,description:"https://www.babeljs.cn/docs/plugins",type:s.TestType.checkResult,expression:"\n  var a = 0 ||= 3;\n  var b = 1 &&= 4;\n  return [a, b]\n",expectResult:[3,4]})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(1),o="optionalChaining";t.validator={name:o,test:function(e,t){return r.runTest({done:t,name:o,description:"https://www.babeljs.cn/docs/plugins",type:s.TestType.expectNoWrong,expression:"\n  obj?.test?.name\n"})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(1),o="pipelineOperator";t.validator={name:o,test:function(e,t){return r.runTest({done:t,name:o,description:"https://www.babeljs.cn/docs/plugins",type:s.TestType.checkResult,expression:"\n  function add(x){\n    return function(y){\n      return x + y\n    }\n  }\n\n  return 1 |> add(1)\n",expectResult:2})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(1),o="nullishCoalescingOperator";t.validator={name:o,test:function(e,t){return r.runTest({done:t,name:o,description:"https://www.babeljs.cn/docs/plugins",type:s.TestType.checkResult,expression:"\n  return a ?? 1\n",expectResult:1})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(1),o="doExpressions";t.validator={name:o,test:function(e,t){return r.runTest({done:t,name:o,description:"https://www.babeljs.cn/docs/plugins",type:s.TestType.checkResult,expression:"\n  var a = do {\n    if(true) {\n      'big';\n    } else {\n      'small';\n    }\n  };\n",expectResult:"big"})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(1);t.validator={name:"functionSent",test:function(e,t){return r.runTest({done:t,name:"functionSent",description:"https://www.babeljs.cn/docs/plugins",type:s.TestType.checkResult,expression:"\n  function *a() {\n    return function.sent\n  }\n\n  return a().next(1)\n",expectResult:1})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(1),o="numericSeparator";t.validator={name:o,test:function(e,t){return r.runTest({done:t,name:o,description:"https://www.babeljs.cn/docs/plugins",type:s.TestType.checkResult,expression:"\n  return 1_000\n",expectResult:1e3})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(1),o="throwExpressions";t.validator={name:o,test:function(e,t){return r.runTest({done:t,name:o,description:"https://www.babeljs.cn/docs/plugins",type:s.TestType.checkResult,expression:"\n  return 1 || throw new Error('error')\n",expectResult:1})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(1),o="propertyMutators";t.validator={name:o,test:function(e,t){return r.runTest({done:t,name:o,description:"https://www.babeljs.cn/docs/plugins",type:s.TestType.checkResult,expression:"\n  var isCallSet = false\n  var obj = {\n    _a: '',\n    set a(x) {\n      isCallSet = true\n      this._a = x\n    },\n\n    get a() {\n      return 1\n    }\n  }\n\n  obj.a = 2\n  return isCallSet && obj.a\n",expectResult:1})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(1),o="asyncGeneratorFunctions";t.validator={name:o,test:function(e,t){return r.runTest({done:t,name:o,description:"https://www.babeljs.cn/docs/plugins",type:s.TestType.checkResult,expression:"\n  async function* a() {\n    await 1;\n    yield 2;\n  }\n\n  return a().next()\n",resultCheckFn:function(e){try{e.then((function(e){t(e&&2===e.value)}))}catch(e){t(!1)}}})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(1),o="partialApplication";t.validator={name:o,test:function(e,t){return r.runTest({done:t,name:o,description:"https://www.babeljs.cn/docs/plugins",type:s.TestType.checkResult,expression:"\n  function add(x, y){ return x + y }\n  var add1 = add(1, ?)\n  return add1(1)\n",expectResult:2})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(1),o="privateMethods";t.validator={name:o,test:function(e,t){return r.runTest({done:t,name:o,description:"https://www.babeljs.cn/docs/plugins",type:s.TestType.expectNoWrong,expression:"\n  class Counter {\n    #xValue = 0;\n\n    get #x() { return this.#xValue; }\n    set #x(value) {\n      this.#xValue = value;\n    }\n\n    #clicked() {\n      this.#x++;\n    }\n  }\n"})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(1);t.validator={name:"decorators",test:function(e,t){return r.runTest({done:t,name:"decorators",description:"https://www.babeljs.cn/docs/plugins",type:s.TestType.expectNoWrong,expression:"\n  @annotation\n  class MyClass { }\n\n  function annotation(target) {\n    target.annotated = true;\n  }\n"})}}}]);