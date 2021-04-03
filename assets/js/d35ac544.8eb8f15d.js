(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),i=(n(0),n(116)),p={title:"Input & Output Operations"},o={unversionedId:"matlab/4-Input-&-Output-Operations",id:"matlab/4-Input-&-Output-Operations",isDocsHomePage:!1,title:"Input & Output Operations",description:"I/O Operations using input() and disp() Functions",source:"@site/docs/matlab/4-Input-&-Output-Operations.mdx",slug:"/matlab/4-Input-&-Output-Operations",permalink:"/Master-Bear/docs/matlab/4-Input-&-Output-Operations",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/matlab/4-Input-&-Output-Operations.mdx",version:"current",sidebar:"MATLAB Fundass!",previous:{title:"Data Types",permalink:"/Master-Bear/docs/matlab/3-Data-Types"},next:{title:"Operators",permalink:"/Master-Bear/docs/matlab/5-Operators"}},c=[{value:"I/O Operations using <code>input()</code> and <code>disp()</code> Functions",id:"io-operations-using-input-and-disp-functions",children:[{value:"<code>input()</code>",id:"input",children:[]},{value:"<code>disp()</code>",id:"disp",children:[]}]},{value:"I/O Operations using <code>fprintf()</code> and <code>fscanf()</code>",id:"io-operations-using-fprintf-and-fscanf",children:[{value:"fscanf()",id:"fscanf",children:[]},{value:"fprintf()",id:"fprintf",children:[]}]}],u={toc:c};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"io-operations-using-input-and-disp-functions"},"I/O Operations using ",Object(i.b)("inlineCode",{parentName:"h2"},"input()")," and ",Object(i.b)("inlineCode",{parentName:"h2"},"disp()")," Functions"),Object(i.b)("p",null,"In Matlab, we can get the data/values from user via keyboard using ",Object(i.b)("inlineCode",{parentName:"p"},"input()")," function and we can send data to screen which is displayed on command window using ",Object(i.b)("inlineCode",{parentName:"p"},"disp()")," function"),Object(i.b)("h3",{id:"input"},Object(i.b)("inlineCode",{parentName:"h3"},"input()")),Object(i.b)("h4",{id:"syntax---1"},Object(i.b)("strong",{parentName:"h4"},"Syntax - 1")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-matlab"},"x = input(prompt)\n")),Object(i.b)("p",null,"Displays the text in ",Object(i.b)("inlineCode",{parentName:"p"},"prompt")," and waits for the user to input a value or expressions like pi*4 or rand(3) and press Enter/Return key at the end."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"If a value is entered then that value is returned by the ",Object(i.b)("inlineCode",{parentName:"li"},"input()")," function"),Object(i.b)("li",{parentName:"ul"},"If an expression is entered then the value of the evaluated expression is returned by input() function"),Object(i.b)("li",{parentName:"ul"},"If the user presses the ",Object(i.b)("strong",{parentName:"li"},"Return")," key without entering anything, then ",Object(i.b)("inlineCode",{parentName:"li"},"input()")," returns an empty matrix."),Object(i.b)("li",{parentName:"ul"},"If the user enters an invalid expression at the prompt, then MATLAB displays the relevant error message, and then redisplays the prompt. ")),Object(i.b)("h5",{id:"example---1---getting-a-value-from-user"},Object(i.b)("strong",{parentName:"h5"},"Example - 1 :- Getting a value from user")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-matlab"},"x = input('Enter what you like: ');\nx\n")),Object(i.b)("p",null,"At command window enter any value, say, 23"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-matlab"},"Enter what you like: 23\n")),Object(i.b)("h5",{id:"output"},Object(i.b)("strong",{parentName:"h5"},"Output")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-matlab"},"x =\n\n    23\n")),Object(i.b)("h5",{id:"example---2---getting-an-expression-from-user"},Object(i.b)("strong",{parentName:"h5"},"Example - 2 :- Getting an expression from user")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-matlab"},"x = input('Enter what you like: ');\nx\n")),Object(i.b)("p",null,"At command window enter any expresion, say, pi * 4. If the expression entered is valid the it is evaluated and returned by ",Object(i.b)("inlineCode",{parentName:"p"},"input()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-matlab"},"Enter a value: pi * 4\n")),Object(i.b)("h5",{id:"output-1"},Object(i.b)("strong",{parentName:"h5"},"Output")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-matlab"},"x =\n\n    12.5664\n")),Object(i.b)("h4",{id:"syntax---2"},Object(i.b)("strong",{parentName:"h4"},"Syntax - 2")),Object(i.b)("p",null,"If we dont want to evaluate the expression, as we are only interested to get the text from the user the use the following syntax."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-matlab"},"x = input(prompt, 's')\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Returns the entered text by the user without evaluating it as an expression.")),Object(i.b)("h5",{id:"example"},Object(i.b)("strong",{parentName:"h5"},"Example")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-matlab"},"val1 = input('Enter anything: ', 's');\nval1\n")),Object(i.b)("p",null,"At command window enter anything, input() function will return what ever user has entered as text without evaluating it."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-matlab"},"Enter anything: pi * 4\n")),Object(i.b)("h5",{id:"output-2"},Object(i.b)("strong",{parentName:"h5"},"Output")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-matlab"},"val1 =\n\n    pi * 4\n")),Object(i.b)("h3",{id:"disp"},Object(i.b)("inlineCode",{parentName:"h3"},"disp()")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"disp()")," is used to display the value of the variable without printing the variable name. If a variable is empty then it will not display anything."),Object(i.b)("h4",{id:"syntax"},Object(i.b)("strong",{parentName:"h4"},"Syntax")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-matlab"},"disp(x)\n")),Object(i.b)("h5",{id:"example-1"},Object(i.b)("strong",{parentName:"h5"},"Example")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-matlab"},"x = [2 3 4 5];\ndisp(x);\n\nstr = 'Hello, Good Morning';\ndisp(str)\n")),Object(i.b)("h5",{id:"output-3"},Object(i.b)("strong",{parentName:"h5"},"Output")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-matlab"},"     2     3     4     5\n\nHello, Good Morning\n")),Object(i.b)("h2",{id:"io-operations-using-fprintf-and-fscanf"},"I/O Operations using ",Object(i.b)("inlineCode",{parentName:"h2"},"fprintf()")," and ",Object(i.b)("inlineCode",{parentName:"h2"},"fscanf()")),Object(i.b)("p",null,"input() and disp() are not the only functions to interact with the user. We also have fscanf() and fprintf() to get the data from the user and display data onto the screen respectively."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"fscanf()")," and ",Object(i.b)("inlineCode",{parentName:"p"},"fprintf()")," are the formatted functions  which behave like C language's scanf() and  printf() functions."),Object(i.b)("h3",{id:"fscanf"},"fscanf()"),Object(i.b)("h4",{id:"syntax-1"},"Syntax"),Object(i.b)("h4",{id:"example-2"},"Example"),Object(i.b)("h4",{id:"output-4"},"Output"),Object(i.b)("h3",{id:"fprintf"},"fprintf()"),Object(i.b)("h4",{id:"syntax-2"},"Syntax"),Object(i.b)("h4",{id:"example-3"},"Example"),Object(i.b)("h4",{id:"output-5"},"Output"))}l.isMDXComponent=!0},116:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),l=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=l(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=l(n),d=a,m=b["".concat(p,".").concat(d)]||b[d]||s[d]||i;return n?r.a.createElement(m,o(o({ref:t},u),{},{components:n})):r.a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var u=2;u<i;u++)p[u]=n[u];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);