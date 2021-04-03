(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return c}));var a=n(3),r=(n(0),n(115));const i={},p={unversionedId:"matlab/3-Input-&-Output-Operations",id:"matlab/3-Input-&-Output-Operations",isDocsHomePage:!1,title:"3-Input-&-Output-Operations",description:"Input & Output Operations",source:"@site/docs/matlab/3-Input-&-Output-Operations.mdx",slug:"/matlab/3-Input-&-Output-Operations",permalink:"/Master-Bear/docs/matlab/3-Input-&-Output-Operations",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/matlab/3-Input-&-Output-Operations.mdx",version:"current"},o=[{value:"I/O Operations using <code>input()</code> and <code>disp()</code> Functions",id:"io-operations-using-input-and-disp-functions",children:[{value:"<code>input()</code>",id:"input",children:[]},{value:"<code>disp()</code>",id:"disp",children:[]}]},{value:"I/O Operations using <code>fprintf()</code> and <code>fscanf()</code>",id:"io-operations-using-fprintf-and-fscanf",children:[{value:"fscanf()",id:"fscanf",children:[]},{value:"fprintf()",id:"fprintf",children:[]}]}],u={toc:o};function c({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"input--output-operations"},"Input & Output Operations"),Object(r.b)("h2",{id:"io-operations-using-input-and-disp-functions"},"I/O Operations using ",Object(r.b)("inlineCode",{parentName:"h2"},"input()")," and ",Object(r.b)("inlineCode",{parentName:"h2"},"disp()")," Functions"),Object(r.b)("p",null,"In Matlab, we can get the data/values from user via keyboard using ",Object(r.b)("inlineCode",{parentName:"p"},"input()")," function and we can send data to screen which is displayed on command window using ",Object(r.b)("inlineCode",{parentName:"p"},"disp()")," function"),Object(r.b)("h3",{id:"input"},Object(r.b)("inlineCode",{parentName:"h3"},"input()")),Object(r.b)("h4",{id:"syntax---1"},Object(r.b)("strong",{parentName:"h4"},"Syntax - 1")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-matlab"},"x = input(prompt)\n")),Object(r.b)("p",null,"Displays the text in ",Object(r.b)("inlineCode",{parentName:"p"},"prompt")," and waits for the user to input a value or expressions like pi*4 or rand(3) and press Enter/Return key at the end."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"If a value is entered then that value is returned by the ",Object(r.b)("inlineCode",{parentName:"li"},"input()")," function"),Object(r.b)("li",{parentName:"ul"},"If an expression is entered then the value of the evaluated expression is returned by input() function"),Object(r.b)("li",{parentName:"ul"},"If the user presses the ",Object(r.b)("strong",{parentName:"li"},"Return")," key without entering anything, then ",Object(r.b)("inlineCode",{parentName:"li"},"input()")," returns an empty matrix."),Object(r.b)("li",{parentName:"ul"},"If the user enters an invalid expression at the prompt, then MATLAB displays the relevant error message, and then redisplays the prompt. ")),Object(r.b)("h5",{id:"example---1---getting-a-value-from-user"},Object(r.b)("strong",{parentName:"h5"},"Example - 1 :- Getting a value from user")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-matlab"},"x = input('Enter what you like: ');\nx\n")),Object(r.b)("p",null,"At command window enter any value, say, 23"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-matlab"},"Enter what you like: 23\n")),Object(r.b)("h5",{id:"output"},Object(r.b)("strong",{parentName:"h5"},"Output")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-matlab"},"x =\n\n    23\n")),Object(r.b)("h5",{id:"example---2---getting-an-expression-from-user"},Object(r.b)("strong",{parentName:"h5"},"Example - 2 :- Getting an expression from user")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-matlab"},"x = input('Enter what you like: ');\nx\n")),Object(r.b)("p",null,"At command window enter any expresion, say, pi * 4. If the expression entered is valid the it is evaluated and returned by ",Object(r.b)("inlineCode",{parentName:"p"},"input()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-matlab"},"Enter a value: pi * 4\n")),Object(r.b)("h5",{id:"output-1"},Object(r.b)("strong",{parentName:"h5"},"Output")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-matlab"},"x =\n\n    12.5664\n")),Object(r.b)("h4",{id:"syntax---2"},Object(r.b)("strong",{parentName:"h4"},"Syntax - 2")),Object(r.b)("p",null,"If we dont want to evaluate the expression, as we are only interested to get the text from the user the use the following syntax."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-matlab"},"x = input(prompt, 's')\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Returns the entered text by the user without evaluating it as an expression.")),Object(r.b)("h5",{id:"example"},Object(r.b)("strong",{parentName:"h5"},"Example")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-matlab"},"val1 = input('Enter anything: ', 's');\nval1\n")),Object(r.b)("p",null,"At command window enter anything, input() function will return what ever user has entered as text without evaluating it."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-matlab"},"Enter anything: pi * 4\n")),Object(r.b)("h5",{id:"output-2"},Object(r.b)("strong",{parentName:"h5"},"Output")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-matlab"},"val1 =\n\n    pi * 4\n")),Object(r.b)("h3",{id:"disp"},Object(r.b)("inlineCode",{parentName:"h3"},"disp()")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"disp()")," is used to display the value of the variable without printing the variable name. If a variable is empty then it will not display anything."),Object(r.b)("h4",{id:"syntax"},Object(r.b)("strong",{parentName:"h4"},"Syntax")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-matlab"},"disp(x)\n")),Object(r.b)("h5",{id:"example-1"},Object(r.b)("strong",{parentName:"h5"},"Example")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-matlab"},"x = [2 3 4 5];\ndisp(x);\n\nstr = 'Hello, Good Morning';\ndisp(str)\n")),Object(r.b)("h5",{id:"output-3"},Object(r.b)("strong",{parentName:"h5"},"Output")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-matlab"},"     2     3     4     5\n\nHello, Good Morning\n")),Object(r.b)("h2",{id:"io-operations-using-fprintf-and-fscanf"},"I/O Operations using ",Object(r.b)("inlineCode",{parentName:"h2"},"fprintf()")," and ",Object(r.b)("inlineCode",{parentName:"h2"},"fscanf()")),Object(r.b)("p",null,"input() and disp() are not the only functions to interact with the user. We also have fscanf() and fprintf() to get the data from the user and display data onto the screen respectively."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"fscanf()")," and ",Object(r.b)("inlineCode",{parentName:"p"},"fprintf()")," are the formatted functions  which behave like C language's scanf() and  printf() functions."),Object(r.b)("h3",{id:"fscanf"},"fscanf()"),Object(r.b)("h4",{id:"syntax-1"},"Syntax"),Object(r.b)("h4",{id:"example-2"},"Example"),Object(r.b)("h4",{id:"output-4"},"Output"),Object(r.b)("h3",{id:"fprintf"},"fprintf()"),Object(r.b)("h4",{id:"syntax-2"},"Syntax"),Object(r.b)("h4",{id:"example-3"},"Example"),Object(r.b)("h4",{id:"output-5"},"Output"))}c.isMDXComponent=!0},115:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),l=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=l(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),b=l(n),d=a,O=b["".concat(p,".").concat(d)]||b[d]||s[d]||i;return n?r.a.createElement(O,o(o({ref:t},c),{},{components:n})):r.a.createElement(O,o({ref:t},c))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var c=2;c<i;c++)p[c]=n[c];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);