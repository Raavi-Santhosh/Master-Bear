(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(116)),l={title:"Colon Opeartor"},c={unversionedId:"matlab/7-Colon-Operator",id:"matlab/7-Colon-Operator",isDocsHomePage:!1,title:"Colon Opeartor",description:"Colon operator ( : ) is used to create vectors, array subscripting and most frequently used in for loop operations.",source:"@site/docs/matlab/7-Colon-Operator.mdx",slug:"/matlab/7-Colon-Operator",permalink:"/Master-Bear/docs/matlab/7-Colon-Operator",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/matlab/7-Colon-Operator.mdx",version:"current",sidebar:"MATLAB Fundass!",previous:{title:"Conditional Statements",permalink:"/Master-Bear/docs/matlab/6-Conditional-Statements"},next:{title:"Loops",permalink:"/Master-Bear/docs/matlab/8-Loops"}},i=[{value:"Creating a Row Vector",id:"creating-a-row-vector",children:[{value:"<strong>Syntax</strong> - 1",id:"syntax---1",children:[]},{value:"Syntax - 2",id:"syntax---2",children:[]}]},{value:"Subscripting a Vector using colon operator",id:"subscripting-a-vector-using-colon-operator",children:[]},{value:"Subscripting a Matrix using colon operator",id:"subscripting-a-matrix-using-colon-operator",children:[]}],s={toc:i};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Colon operator ( ",Object(o.b)("inlineCode",{parentName:"p"},":")," ) is used to create vectors, array subscripting and most frequently used in ",Object(o.b)("inlineCode",{parentName:"p"},"for")," loop operations."),Object(o.b)("h2",{id:"creating-a-row-vector"},"Creating a Row Vector"),Object(o.b)("p",null,"Colon operator can be used to create a row vector."),Object(o.b)("h3",{id:"syntax---1"},Object(o.b)("strong",{parentName:"h3"},"Syntax")," - 1"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-matlab"},"vec = <initial_val> : <final_val>\n")),Object(o.b)("p",null,"When initial_val and final_val is specified, then MATLAB creates a row vector starting from initial value to final value (both values are included) with the increment of 1."),Object(o.b)("h4",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-matlab"},"x = 3 : 10;\ndisp(x);    \n")),Object(o.b)("h4",{id:"output"},"Output"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-matlab"},"3    4    5    6    7    8    9   10\n")),Object(o.b)("p",null,"Initial value is mentioned as 3 and final value is as 10, so MATLAB generates a row vector from 3 to 10 with increment of 1 while including both initial and final values as displayed in the output."),Object(o.b)("h3",{id:"syntax---2"},"Syntax - 2"),Object(o.b)("p",null,"We can also specify our desired incremental value or expression while generating row vector using colon operator."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-matlab"},"vec = <initial_val> : <incremental_expression> : <final_val>\n")),Object(o.b)("h4",{id:"example---1"},"Example - 1"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-matlab"},"y = 100 : -5 : 50;\ndisp(y);\n")),Object(o.b)("h4",{id:"output---1"},"Output - 1"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"100    95    90    85    80    75    70    65    60    55    50\n")),Object(o.b)("p",null,"In the above example, we have mentioned -5 as ",Object(o.b)("inlineCode",{parentName:"p"},"incremental_expression"),", it means that the final generated row vector will be decremented by value of 5 from initial value till it reaches the final value. Make sure that initial value is greater than the final value in these kind of scenarios."),Object(o.b)("h4",{id:"example---2"},"Example - 2"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-matlab"},"0:pi/8:pi\n")),Object(o.b)("h4",{id:"output----2"},"Output  - 2"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"ans =\n   Columns 1 through 7\n      0    0.3927    0.7854    1.1781    1.5708    1.9635    2.3562\n   Columns 8 through 9\n      2.7489    3.1416\n")),Object(o.b)("p",null,"Instead of using positive or negative value at ",Object(o.b)("inlineCode",{parentName:"p"},"incremental_expression")," we can also use a expression as shown in the above example. It just creates a regualarly spaced vector using ",Object(o.b)("inlineCode",{parentName:"p"},"incremental_expression")," as increment between expressions."),Object(o.b)("h2",{id:"subscripting-a-vector-using-colon-operator"},"Subscripting a Vector using colon operator"),Object(o.b)("p",null,"We can fetch a particular value from a vector by mentioning the index number of the value as shown below. In MATLAB index starts with 1 not with 0 like in Python. So, if you are trying to fetch 1st value from vector or 1D array mention index number as 1 not 0."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-matlab"},"vec = [3 4 32 77 45 33 21 90];\ndisp(vec(2)); % Fetching value 4 from 'vec' vector\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Output")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-matlab"},"4\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"What if we want to fetch a set of elements from the vector?")),Object(o.b)("p",null,"We can get a set of elements from vector or 1D array using colon operator like shown below."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-matlab"},"vec = [3 4 32 77 45 33 21 90];\n\n% fetching elements of index 2 to 6\ndisp(vec(2:6);\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Output")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-matlab"},"4    32    77    45    33\n")),Object(o.b)("h2",{id:"subscripting-a-matrix-using-colon-operator"},"Subscripting a Matrix using colon operator"),Object(o.b)("p",null,"We can also subscript a Matrix and can get a sub matrix from it using colon operator."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-matlab"},"A = [1 2 3 4; 4 5 6 7; 7 8 9 10];\ndisp(A);\n\nA(:,2)      % all rows and second column of A\nA(:,2:3)    % all rows, second and third column of A\nA(2:3,2:3)  % second and third rows and second and third columns\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Output")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-matlab"},"A =\n      1     2     3     4\n      4     5     6     7\n      7     8     9    10\n\nans =\n      2\n      5\n      8\n\nans =\n      2     3\n      5     6\n      8     9\n\nans =\n      5     6\n      8     9\n")))}p.isMDXComponent=!0},116:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,d=b["".concat(l,".").concat(m)]||b[m]||u[m]||o;return n?r.a.createElement(d,c(c({ref:t},s),{},{components:n})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);