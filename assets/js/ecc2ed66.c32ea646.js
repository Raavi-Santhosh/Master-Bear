(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return c}));var a=n(3),i=(n(0),n(115));const r={title:"Introduction to MATLAB"},l={unversionedId:"matlab/1-Matlab-Environment",id:"matlab/1-Matlab-Environment",isDocsHomePage:!1,title:"Introduction to MATLAB",description:"Basics of MATLAB Programming",source:"@site/docs/matlab/1-Matlab-Environment.mdx",slug:"/matlab/1-Matlab-Environment",permalink:"/Master-Bear/docs/matlab/1-Matlab-Environment",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/matlab/1-Matlab-Environment.mdx",version:"current",sidebar:"MATLAB Fundass!",next:{title:"MATLAB Basic Syntax",permalink:"/Master-Bear/docs/matlab/2-Matlab-Basic-Syntax"}},b=[{value:"Comments in MATLAB",id:"comments-in-matlab",children:[{value:"Single-Line Comments",id:"single-line-comments",children:[]},{value:"Multi-Line Comments",id:"multi-line-comments",children:[]}]},{value:"Use of Semicolon (<code>;</code>)",id:"use-of-semicolon-",children:[]},{value:"Identifiers",id:"identifiers",children:[]},{value:"Variables and Values",id:"variables-and-values",children:[]},{value:"Commands Associated with Variables",id:"commands-associated-with-variables",children:[]},{value:"Predifined Values in MATLAB",id:"predifined-values-in-matlab",children:[]},{value:"Basic Commands",id:"basic-commands",children:[]}],o={toc:b};function c({components:e,...t}){return Object(i.b)("wrapper",Object(a.a)({},o,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"basics-of-matlab-programming"},"Basics of MATLAB Programming"),Object(i.b)("h2",{id:"comments-in-matlab"},"Comments in MATLAB"),Object(i.b)("h3",{id:"single-line-comments"},"Single-Line Comments"),Object(i.b)("p",null,"Percentile (",Object(i.b)("inlineCode",{parentName:"p"},"%"),") Symbol is used for writing single line comments in MATLAB"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-matlab"},"% The below line will assign value to a variable\n\nx = 10\n")),Object(i.b)("h3",{id:"multi-line-comments"},"Multi-Line Comments"),Object(i.b)("p",null,"In MATLAB, any text or block of texts between the ",Object(i.b)("inlineCode",{parentName:"p"},"%{")," and  ",Object(i.b)("inlineCode",{parentName:"p"},"%}")," will be treated as block comments or can be called as multi-line comments. "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-matlab"},"%{\n    This is a multi line comment\n    which will be ignored by the MATLAB\n    \n    Writing comments helps reader/viewer to understand \n  the code effortlessly.\n%}\n\n")),Object(i.b)("h2",{id:"use-of-semicolon-"},"Use of Semicolon (",Object(i.b)("inlineCode",{parentName:"h2"},";"),")"),Object(i.b)("p",null,"In MATLAB, semicolon is used to indicate end of the statements but it is not mandatory like in C language."),Object(i.b)("p",null,"If semicolon is used at the end of an expression/statement then the output of that expression is suppressed or hidden at the command window."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-matlab"},"x = 3+1;\ny = 2+3\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Output")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-matlab"},"y =\n\n     5\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Explanation")),Object(i.b)("p",null,"In the above example, at line 1 x is evaluated but output is not shown at the command window because the statement is terminated with a semicolon (",Object(i.b)("inlineCode",{parentName:"p"},";"),"). Whereas, at line 2 y is evaluated and output of the expression is also prompted at command window."),Object(i.b)("h2",{id:"identifiers"},"Identifiers"),Object(i.b)("p",null,"Identifiers are the names which are given to variables, functions, classes etc. The following are the MATLAB rules for naming identifiers"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"All identifiers must start with a letter."),Object(i.b)("li",{parentName:"ol"},"Special characters like .,!@#$% etc., are not allowed."),Object(i.b)("li",{parentName:"ol"},"Only underscore '",Object(i.b)("inlineCode",{parentName:"li"},"_"),"' is allowed in identifiers."),Object(i.b)("li",{parentName:"ol"},"Digits are also allowed while naming identifiers."),Object(i.b)("li",{parentName:"ol"},"MATLAB is case-sensitive programming language so identifier ",Object(i.b)("inlineCode",{parentName:"li"},"width")," is different from ",Object(i.b)("inlineCode",{parentName:"li"},"WIDHT")),Object(i.b)("li",{parentName:"ol"},"Length of identifier name should not exceed ",Object(i.b)("inlineCode",{parentName:"li"},"namelengthmax"))),Object(i.b)("h2",{id:"variables-and-values"},"Variables and Values"),Object(i.b)("p",null,"Variables are valid identifiers which will hold the values so that they can be used later. A value inside a variable can be altered later after initialization."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"In MATLAB environment, every value is a matrix of size (m,n)"),Object(i.b)("li",{parentName:"ul"},"Scalar: A scalar is a single element of number like 2, -5, i, -23. But in MATLAB, a scalar is a matrix of size 1x1."),Object(i.b)("li",{parentName:"ul"},"Vector: A vector is a one dimensional array of elements. MATLAB allows creating two types of arrays.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Row Vectors"),Object(i.b)("li",{parentName:"ul"},"Column vectors"))),Object(i.b)("li",{parentName:"ul"},"Matrix: A matrix is a two dimensional array of elements")),Object(i.b)("p",null,"In MATLAB, a variable gets life i.e., memory is allocated only when a value is assigned to it. There is no type declaration or dimension statements while declaring a variable. Whenever MATLAB encounters a new variable name, it creates the variable and allocates memory space."),Object(i.b)("p",null,"If the variable already exists, then MATLAB replaces the original content with new content and allocates new storage space, where  necessary."),Object(i.b)("h2",{id:"commands-associated-with-variables"},"Commands Associated with Variables"),Object(i.b)("h4",{id:"who"},Object(i.b)("inlineCode",{parentName:"h4"},"who")),Object(i.b)("p",null,"Lists all the variables in the current workspace"),Object(i.b)("h4",{id:"whos"},Object(i.b)("inlineCode",{parentName:"h4"},"whos")),Object(i.b)("p",null,"Lists all the variables in the current workspace in a long listing manner i.e., it will show the variable name, size, class, memory it used in bytes ."),Object(i.b)("h4",{id:"save"},Object(i.b)("inlineCode",{parentName:"h4"},"save")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"save")," command is used for saving all the variables in the workspace, as a file with ",Object(i.b)("inlineCode",{parentName:"p"},".mat")," extension, in the current directory."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-matlab"},"save my_var_file\n")),Object(i.b)("h4",{id:"load"},"load"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"load")," command is used to relaod the variables into the workspace from ",Object(i.b)("inlineCode",{parentName:"p"},".mat")," file "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-matlab"},"load my_var_file\n")),Object(i.b)("h4",{id:"clear"},Object(i.b)("inlineCode",{parentName:"h4"},"clear")),Object(i.b)("p",null,"Removes all the variables from the current workspace. If you want to remove a particular variable the mention the name of the variable ",Object(i.b)("inlineCode",{parentName:"p"},"clear <var1> <var2> <var3>...."),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-matlab"},"clear x y\n")),Object(i.b)("h4",{id:"clear-all"},Object(i.b)("inlineCode",{parentName:"h4"},"clear all")),Object(i.b)("p",null,"Removes all variables, global variables, function and mex files."),Object(i.b)("h2",{id:"predifined-values-in-matlab"},"Predifined Values in MATLAB"),Object(i.b)("h4",{id:"pi"},Object(i.b)("inlineCode",{parentName:"h4"},"pi")),Object(i.b)("p",null,"Contains value of \u03c0 which is significant to 15 digits"),Object(i.b)("h4",{id:"eps"},Object(i.b)("inlineCode",{parentName:"h4"},"eps")),Object(i.b)("p",null,"This variable name is short for ",Object(i.b)("strong",{parentName:"p"},"epsilon"),". It is the smallest difference between two numbers that can be represented on the computer"),Object(i.b)("h4",{id:"ij"},Object(i.b)("inlineCode",{parentName:"h4"},"i,j")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"i"),", ",Object(i.b)("inlineCode",{parentName:"p"},"j")," in MATLAB contains the value  \u221a-1"),Object(i.b)("h4",{id:"ans"},Object(i.b)("inlineCode",{parentName:"h4"},"ans")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"ans")," is the variable created by MATLAB which will store the most recent value when generated by an orphan expression. Orphan expression is an expression whos evaluated result is not assigned to any variable."),Object(i.b)("h4",{id:"inf"},Object(i.b)("inlineCode",{parentName:"h4"},"inf")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"inf")," variable represents infinity. It is usually generated as a result of a division by 0."),Object(i.b)("h4",{id:"nan"},Object(i.b)("inlineCode",{parentName:"h4"},"nan")),Object(i.b)("p",null,"Stands for Not-a-Number. It is the result of an undefined mathematical operation, such as the division of zero by zero."),Object(i.b)("h2",{id:"basic-commands"},"Basic Commands"),Object(i.b)("h4",{id:"clc"},"clc"),Object(i.b)("p",null,"This command will cleans the command window."),Object(i.b)("h4",{id:"exist"},"exist"),Object(i.b)("p",null,"This command Checks for existence of file, variable, script, function, folder or class. It will return between 0 to 8 depending on the type of the existance of the identifier as shown in below table."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"center"},"Return value"),Object(i.b)("th",{parentName:"tr",align:null},"Reasons"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"0"),Object(i.b)("td",{parentName:"tr",align:null},"if NAME does not exist")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"1"),Object(i.b)("td",{parentName:"tr",align:null},"if NAME is a variable in the workspace")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"2"),Object(i.b)("td",{parentName:"tr",align:null},"if NAME is a file with extension .m, .mlx, .mlapp, or .sfx, or NAME is the name of a file with a non-registered file extension")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"3"),Object(i.b)("td",{parentName:"tr",align:null},"if NAME is a MEX-file on the MATLAB search path")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"4"),Object(i.b)("td",{parentName:"tr",align:null},"if NAME is a Simulink model or library file on the MATLAB search path")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"5"),Object(i.b)("td",{parentName:"tr",align:null},"if NAME is a built-in MATLAB function. This does not include classes")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"6"),Object(i.b)("td",{parentName:"tr",align:null},"if NAME is a P-code file on the MATLAB search path")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"7"),Object(i.b)("td",{parentName:"tr",align:null},"if NAME is a folder")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"8"),Object(i.b)("td",{parentName:"tr",align:null},"if NAME is a class (exist returns 0 for Java classes if you start MATLAB with the -nojvm option.)")))),Object(i.b)("h4",{id:"help"},"help"),Object(i.b)("p",null,"help command is used to get documentation of any function, class or command in MATLAB."),Object(i.b)("h4",{id:"quit"},"quit"),Object(i.b)("p",null,"Command to Stop MATLAB."),Object(i.b)("h4",{id:"clock"},"clock"),Object(i.b)("p",null,"This command will returns the current date and time in the form of 6 element row vector containing the year, month, day, hour, minute and seconds."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},">> clock\n\nans =\n\n   1.0e+03 *\n\n    2.0210    0.0030    0.0240    0.0140    0.0290    0.0166\n")),Object(i.b)("h4",{id:"date"},"date"),Object(i.b)("p",null,"Returns the current date in a character string format."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-matlab"},">> date\n\nans =\n\n    '24-Mar-2021'\n")))}c.isMDXComponent=!0},115:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),s=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},m=function(e){var t=s(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),p=a,u=m["".concat(l,".").concat(p)]||m[p]||d[p]||r;return n?i.a.createElement(u,b(b({ref:t},c),{},{components:n})):i.a.createElement(u,b({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=p;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,l[1]=b;for(var c=2;c<r;c++)l[c]=n[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);