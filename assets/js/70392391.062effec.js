(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{115:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return f}));var a=t(0),r=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=r.a.createContext({}),s=function(e){var n=r.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},b=function(e){var n=s(e.components);return r.a.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=s(t),p=a,f=b["".concat(i,".").concat(p)]||b[p]||m[p]||c;return t?r.a.createElement(f,o(o({ref:n},u),{},{components:t})):r.a.createElement(f,o({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,i=new Array(c);i[0]=p;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<c;u++)i[u]=t[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},92:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return o})),t.d(n,"default",(function(){return u}));var a=t(3),r=(t(0),t(115));const c={},i={unversionedId:"matlab/Functions",id:"matlab/Functions",isDocsHomePage:!1,title:"Functions",description:"Functions",source:"@site/docs/matlab/Functions.mdx",slug:"/matlab/Functions",permalink:"/Master-Bear/docs/matlab/Functions",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/matlab/Functions.mdx",version:"current"},o=[{value:"Function Declaration",id:"function-declaration",children:[{value:"Syntax",id:"syntax",children:[]},{value:"Example",id:"example",children:[]}]},{value:"Primary and Sub-Functions",id:"primary-and-sub-functions",children:[{value:"Example",id:"example-1",children:[]}]},{value:"Global variable",id:"global-variable",children:[{value:"Example",id:"example-2",children:[]},{value:"Output",id:"output",children:[]}]}],l={toc:o};function u({components:e,...n}){return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"functions"},"Functions"),Object(r.b)("p",null,"Function is a set of statements that together performs a specific task."),Object(r.b)("h2",{id:"function-declaration"},"Function Declaration"),Object(r.b)("p",null,"In MATLAB, functions are defined in saperate files. The name of the function and name of the file where function resist should be the same."),Object(r.b)("p",null,"Functions in MATLAB can accept more than one input arguments and can return more than one output arguments."),Object(r.b)("p",null,"Functions will have their own workspace to operate on variables called as ",Object(r.b)("strong",{parentName:"p"},"local workspace"),". This local workspace is saperate from the ",Object(r.b)("strong",{parentName:"p"},"base workspace")," i.e., the workspace we access at the MATLAB command prompt."),Object(r.b)("h3",{id:"syntax"},"Syntax"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-matlab"},"function [<array_of_return_arguments>] = <function_name>(<array_of_input_arguments)\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Sample function declaration statement")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-matlab"},"function [out1, out2, out3, out4] = my_fun(in1, in2, in3)\n")),Object(r.b)("p",null,"Always function declaration must start with a ",Object(r.b)("inlineCode",{parentName:"p"},"function")," keyword and dont forget to mentioning the same name to function and file in which the function resist."),Object(r.b)("h3",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-matlab"},"function max = mymax(n1, n2, n3, n4, n5)\n\n%This function calculates the maximum of the\n% five numbers given as input\n\n    max =  n1;\n    if(n2 > max)\n       max = n2;\n    end\n    if(n3 > max)\n       max = n3;\n    end\n    if(n4 > max)\n       max = n4;\n    end\n    if(n5 > max)\n       max = n5;\n    end\n")),Object(r.b)("p",null,"In the above example, function name is ",Object(r.b)("em",{parentName:"p"},"mymax")," so this function should be written in a file named ",Object(r.b)("em",{parentName:"p"},"mymax.m"),". This function accepts five arguments and returns single argument."),Object(r.b)("p",null,"The comment lines that come right after the function statement provide the help text. These lines are printed when we try to get the some documentation using help command as shown below"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-matlab"},"help mymax\n")),Object(r.b)("p",null,"MATLAB will return the comment line which are right after the function statement as shown below"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-matlab"},"This function calculates the maximum of the\n   five numbers given as input\n")),Object(r.b)("h2",{id:"primary-and-sub-functions"},"Primary and Sub-Functions"),Object(r.b)("p",null,"Each function file contains a required primary function that appears first and any number of optional sub-functions that comes after the primary function and used by it."),Object(r.b)("p",null,"Primary functions can be called from outside of the file that defines them, either from command line or from other functions, but  sub-functions cannot be called from command line or other functions, outside the function file."),Object(r.b)("p",null,"Sub-functions are visible only to the primary function and other sub-functions within the function file that defines them."),Object(r.b)("h3",{id:"example-1"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-matlab"},"function [x1,x2] = quadratic(a,b,c)\n\n  %this function returns the roots of \n  % a quadratic equation.\n  % It takes 3 input arguments\n  % which are the co-efficients of x2, x and the \n  %constant term\n  % It returns the roots\n  \n  d = disc(a,b,c); \n  x1 = (-b + d) / (2*a);\n  x2 = (-b - d) / (2*a);\n  \nend   % end of quadratic\n\nfunction dis = disc(a,b,c) \n\n  %function calculates the discriminant\n  dis = sqrt(b^2 - 4*a*c);\n  \nend   % end of sub-function\n")),Object(r.b)("p",null,"The function file ",Object(r.b)("em",{parentName:"p"},"quadratic.m")," contains the primary function ",Object(r.b)("em",{parentName:"p"},"quadratic")," and the sub-function ",Object(r.b)("em",{parentName:"p"},"disc"),", which calculates the discriminant."),Object(r.b)("h2",{id:"global-variable"},"Global variable"),Object(r.b)("p",null,"If you wnat to share a variable between one or more function and base workspace then for this,  you need to declare the variable as global in all the functions and at the base workspace."),Object(r.b)("p",null,"The global declaration must occur before the variable is actually used in a function. It is a good practice to use capital letters for the names of global variables to distinguish them from other variables."),Object(r.b)("h3",{id:"example-2"},"Example"),Object(r.b)("p",null,"Let us create a function file named average.m"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-matlab"},"function avg = average(nums)\n  global TOTAL\n  avg = sum(nums)/TOTAL;\nend\n")),Object(r.b)("p",null,"Create a script file"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"global TOTAL; % global variable declaration at base workspace\nTOTAL = 10;\nn = [34, 45, 25, 45, 33, 19, 40, 34, 38, 42];\nav = average(n)\n")),Object(r.b)("h3",{id:"output"},"Output"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"av =  35.500\n")))}u.isMDXComponent=!0}}]);