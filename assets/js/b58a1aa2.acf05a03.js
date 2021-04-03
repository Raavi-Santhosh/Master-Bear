(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{116:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),b=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,u=p["".concat(l,".").concat(d)]||p[d]||m[d]||s;return n?i.a.createElement(u,o(o({ref:t},c),{},{components:n})):i.a.createElement(u,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=d;var o={};for(var r in t)hasOwnProperty.call(t,r)&&(o[r]=t[r]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<s;c++)l[c]=n[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return r})),n.d(t,"default",(function(){return b}));var a=n(3),i=n(7),s=(n(0),n(116)),l={title:"Conditional Statements"},o={unversionedId:"matlab/6-Conditional-Statements",id:"matlab/6-Conditional-Statements",isDocsHomePage:!1,title:"Conditional Statements",description:"Conditional statements comes handy when a set of instructions are need to be executed only when a certain condition is met.",source:"@site/docs/matlab/6-Conditional-Statements.mdx",slug:"/matlab/6-Conditional-Statements",permalink:"/Master-Bear/docs/matlab/6-Conditional-Statements",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/matlab/6-Conditional-Statements.mdx",version:"current",sidebar:"MATLAB Fundass!",previous:{title:"Operators",permalink:"/Master-Bear/docs/matlab/5-Operators"},next:{title:"Colon Opeartor",permalink:"/Master-Bear/docs/matlab/7-Colon-Operator"}},r=[{value:"<code>if</code> statement",id:"if-statement",children:[]},{value:"<code>if... else...</code> statement",id:"if-else-statement",children:[]},{value:"<code>if... elseif...else...</code> statement",id:"if-elseifelse-statement",children:[]},{value:"Nested <code>if</code> Statement",id:"nested-if-statement",children:[{value:"Syntax",id:"syntax-3",children:[]},{value:"Example",id:"example-2",children:[]},{value:"Output",id:"output-4",children:[]}]},{value:"<code>switch... case...</code> Statement",id:"switch-case-statement",children:[{value:"Syntax",id:"syntax-4",children:[]},{value:"Rules to remember",id:"rules-to-remember",children:[]},{value:"Example",id:"example-3",children:[]},{value:"Output",id:"output-5",children:[]}]}],c={toc:r};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Conditional statements comes handy when a set of instructions are need to be executed only when a certain condition is met."),Object(s.b)("p",null,"The following conditional statements are availabe in MATLAB"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"if... statement"),Object(s.b)("li",{parentName:"ul"},"if... else... statement"),Object(s.b)("li",{parentName:"ul"},"if... elseif... elseif.... else statement"),Object(s.b)("li",{parentName:"ul"},"Nested if... statement"),Object(s.b)("li",{parentName:"ul"},"switch... case... statement")),Object(s.b)("h2",{id:"if-statement"},Object(s.b)("inlineCode",{parentName:"h2"},"if")," statement"),Object(s.b)("h4",{id:"syntax"},"Syntax"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-matlab"},"if <conditional_expression>\n    statement 1  % if block starts here\n    statement 2\n    statement 3\n    ....\n    ....\n    statement n\nend\n\n% statements after if\n")),Object(s.b)("p",null,"Body of ",Object(s.b)("inlineCode",{parentName:"p"},"if")," will only executed when the ",Object(s.b)("inlineCode",{parentName:"p"},"conditional_expression")," is evaluated to ",Object(s.b)("strong",{parentName:"p"},"true"),". If the ",Object(s.b)("inlineCode",{parentName:"p"},"conditional_expression")," evaluates to ",Object(s.b)("strong",{parentName:"p"},"false"),", then the first set of code after the end statement will be executed"),Object(s.b)("h4",{id:"flow-diagram"},"Flow Diagram"),Object(s.b)("p",null,Object(s.b)("img",{parentName:"p",src:"https://static.javatpoint.com/tutorial/matlab/images/matlab-if-end-statement.png",alt:"MATLAB if...end statement"})),Object(s.b)("h4",{id:"example---1"},"Example - 1"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-matlab"},"a = 10;\n\n% check the condition using if statement \nif a < 20 \n  % if condition is true then print the following \n  fprintf('a is less than 20\\n' );\nend\n\nfprintf('value of a is : %d\\n', a); % This statement will executed even if block executes or not\n")),Object(s.b)("p",null,"In the above example, the if condition is evaluated to true so,  line 6 is executed ends the if block."),Object(s.b)("h4",{id:"output"},"Output"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-matlab"},"a is less than 20\nvalue of a is : 10\n")),Object(s.b)("h4",{id:"example---2"},"Example - 2"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-matlab"},"a = 30;\n\n% check the condition using if statement \nif a < 20 \n  % if condition is true then print the following \n  fprintf('a is less than 20\\n' );\nend\n\nfprintf('value of a is : %d\\n', a); % This statement will executed even if block executes or not\n")),Object(s.b)("p",null,"In the above example, if block is evaluated to false so if will not execute line 6."),Object(s.b)("h4",{id:"output-1"},"Output"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-matlab"},"value of a is : 30\n")),Object(s.b)("h2",{id:"if-else-statement"},Object(s.b)("inlineCode",{parentName:"h2"},"if... else...")," statement"),Object(s.b)("h4",{id:"syntax-1"},"Syntax"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-matlab"},"if <conditional_expression>\n    statement 1  % if block starts here\n    statement 2\n    statement 3\n    ....\n    ....\n    statement n\n\nelse\n    statement 1  % if block starts here\n    statement 2\n    statement 3\n    ....\n    ....\n    statement n\n\nend\n\n% statements after if...else...\n")),Object(s.b)("p",null,"Body of ",Object(s.b)("inlineCode",{parentName:"p"},"if")," will only executed when the ",Object(s.b)("inlineCode",{parentName:"p"},"conditional_expression")," is evaluated to ",Object(s.b)("strong",{parentName:"p"},"true"),". If the ",Object(s.b)("inlineCode",{parentName:"p"},"conditional_expression")," evaluates to ",Object(s.b)("strong",{parentName:"p"},"false"),", then the statements inside the else block will be executed."),Object(s.b)("p",null,Object(s.b)("img",{parentName:"p",src:"https://www.tutorialspoint.com/matlab/images/if_else_statement.jpg",alt:"MATLAB if...else statement"})),Object(s.b)("h4",{id:"example"},"Example"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-matlab"},"a = 100;\n\n% check the boolean condition \nif a < 20 \n  % if condition is true then print the following \n  fprintf('a is less than 20\\n' );\nelse\n  % if condition is false then print the following \n  fprintf('a is not less than 20\\n' );\nend\n  \nfprintf('value of a is : %d\\n', a);\n")),Object(s.b)("h4",{id:"output-2"},"Output"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-matlab"},"a is not less than 20\nvalue of a is : 100\n")),Object(s.b)("h2",{id:"if-elseifelse-statement"},Object(s.b)("inlineCode",{parentName:"h2"},"if... elseif...else...")," statement"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"if")," statement can be followed by one or more ",Object(s.b)("inlineCode",{parentName:"p"},"elseif")," statements if we want to test many conditions."),Object(s.b)("p",null,"While using ",Object(s.b)("inlineCode",{parentName:"p"},"if... elseif...else...")," statements, there are few points to remember \u2212"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"An ",Object(s.b)("inlineCode",{parentName:"li"},"if")," can have zero or one ",Object(s.b)("inlineCode",{parentName:"li"},"else"),"'s and it must come after any ",Object(s.b)("inlineCode",{parentName:"li"},"elseif"),"."),Object(s.b)("li",{parentName:"ul"},"An ",Object(s.b)("inlineCode",{parentName:"li"},"if")," can have zero to many ",Object(s.b)("inlineCode",{parentName:"li"},"elseif"),"'s and they must come before the ",Object(s.b)("inlineCode",{parentName:"li"},"else"),".")),Object(s.b)("h4",{id:"syntax-2"},"Syntax"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-matlab"},"if <conditional_expression>\n    statement 1  % if block starts here\n    statement 2\n    statement 3\n    ....\n    ....\n    statement n\n\nelseif <conditional_expression>\n    statement 1  % elseif block starts here\n    statement 2\n    statement 3\n    ....\n    ....\n    statement n\n\nelseif <conditional_expression>\n    statement 1  % elseif block starts here\n    statement 2\n    statement 3\n    ....\n    ....\n    statement n\n    \nelse <conditional_expression>\n    statement 1  % else block starts here\n    statement 2\n    statement 3\n    ....\n    ....\n    statement n\nend\n\n% statements after if...elseif...\n")),Object(s.b)("h4",{id:"example-1"},"Example"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-matlab"},"a = 100;\n\n%check the boolean condition \nif a == 10 \n  % if condition is true then print the following \n  fprintf('Value of a is 10\\n' );\n\nelseif( a == 20 )\n  % if else if condition is true \n  fprintf('Value of a is 20\\n' );\n\nelseif a == 30 \n    % if else if condition is true  \n    fprintf('Value of a is 30\\n' );\n\nelse\n  % if none of the conditions is true '\n  fprintf('None of the values are matching\\n');\n  fprintf('Exact value of a is: %d\\n', a );\n\nend\n")),Object(s.b)("h4",{id:"output-3"},"Output"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-matlab"},"None of the values are matching\nExact value of a is: 100\n")),Object(s.b)("h2",{id:"nested-if-statement"},"Nested ",Object(s.b)("inlineCode",{parentName:"h2"},"if")," Statement"),Object(s.b)("p",null,"A ",Object(s.b)("inlineCode",{parentName:"p"},"if")," statement inside another ",Object(s.b)("inlineCode",{parentName:"p"},"if")," statement is called as Nested ",Object(s.b)("inlineCode",{parentName:"p"},"if")," statement"),Object(s.b)("h3",{id:"syntax-3"},"Syntax"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-matlab"},"if <conditional_expression1>\n   % Executes when the boolean expression 1 is true \n   \n   if <conditional_expression2>\n      % Executes when the boolean expression 2 is true    \n   end\n\nend\n")),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"We can also use else and elseif inside the nested if statements.")),Object(s.b)("h3",{id:"example-2"},"Example"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-matlab"},"a = 100;\nb = 200;\n   % check the boolean condition \nif( a == 100 )\n    % if condition is true then check the following \n    if( b == 200 )\n        % if condition is true then print the following \n        fprintf('Value of a is 100 and b is 200\\n' );\n    end\n\nend\nfprintf('Exact value of a is : %d\\n', a );\nfprintf('Exact value of b is : %d\\n', b );\n")),Object(s.b)("h3",{id:"output-4"},"Output"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-matlab"},"Value of a is 100 and b is 200\nExact value of a is : 100\nExact value of b is : 200\n")),Object(s.b)("h2",{id:"switch-case-statement"},Object(s.b)("inlineCode",{parentName:"h2"},"switch... case...")," Statement"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"switch... case...")," conditional statement is alternative to ",Object(s.b)("inlineCode",{parentName:"p"},"if... elseif...")," statement which allows us to execute one set of statements out of several other choices."),Object(s.b)("h3",{id:"syntax-4"},"Syntax"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-matlab"},"switch <switch_conditional_expression>\n   case <case_conditional_expression1>\n      <statements>\n   case <case_conditional_expression2>\n      <statements>\n      ...\n      ...\n   otherwise\n      <statements>\nend\n")),Object(s.b)("h3",{id:"rules-to-remember"},"Rules to remember"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"switch_conditional_expression")," must evaluate to a scalar or string."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"case_conditional_expression")," must evaluate to a scalar or string or a cell array of scalars or strings."),Object(s.b)("li",{parentName:"ul"},"The switch block tests each case until one of the cases is ",Object(s.b)("strong",{parentName:"li"},"true"),". "),Object(s.b)("li",{parentName:"ul"},"A case is true when \u2212",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"For numbers, ",Object(s.b)("strong",{parentName:"li"},"eq(case_conditional_expression,switch_conditional_expression)"),"."),Object(s.b)("li",{parentName:"ul"},"For strings, ",Object(s.b)("strong",{parentName:"li"},"strcmp(case_conditional_expression,switch_conditional_expression)"),"."),Object(s.b)("li",{parentName:"ul"},"For objects that support the ",Object(s.b)("strong",{parentName:"li"},"eq(case_conditional_expression,switch_conditional_expression)"),"."),Object(s.b)("li",{parentName:"ul"},"For a cell array case_conditional_expression, at least one of the  elements of the cell array matches switch_expression, as defined above  for numbers, strings and objects.")))),Object(s.b)("p",null,Object(s.b)("img",{parentName:"p",src:"https://cdn.programiz.com/sites/tutorial2program/files/flowchart-switch-statement.jpg",alt:"Flowchart of switch statement"})),Object(s.b)("h3",{id:"example-3"},"Example"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-matlab"},"grade = 'B';\n   switch(grade)\n     case 'A' \n        fprintf('Excellent!\\n' );\n     case 'B' \n        fprintf('Well done\\n' );\n     case 'C' \n        fprintf('Well done\\n' );\n     case 'D'\n        fprintf('You passed\\n' );\n     case 'F' \n        fprintf('Better try again\\n' );\n     otherwise\n        fprintf('Invalid grade\\n' );\n   end\n")),Object(s.b)("h3",{id:"output-5"},"Output"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-matlab"},"Well done\n")))}b.isMDXComponent=!0}}]);