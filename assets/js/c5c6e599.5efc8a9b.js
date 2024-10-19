"use strict";(self.webpackChunkabigail_portfolio=self.webpackChunkabigail_portfolio||[]).push([[1936],{8129:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>T,contentTitle:()=>I,default:()=>A,frontMatter:()=>S,metadata:()=>_,toc:()=>W});var t=n(4848),o=n(8453),s=n(6540),i=n(4164),a=n(3104),l=n(6347),c=n(205),u=n(7485),d=n(1682),h=n(679);function f(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:n}=e;return(0,s.useMemo)((()=>{const e=r??function(e){return f(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:o}}=e;return{value:r,label:n,attributes:t,default:o}}))}(n);return function(e){const r=(0,d.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function m(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function x(e){let{queryString:r=!1,groupId:n}=e;const t=(0,l.W6)(),o=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,u.aZ)(o),(0,s.useCallback)((e=>{if(!o)return;const r=new URLSearchParams(t.location.search);r.set(o,e),t.replace({...t.location,search:r.toString()})}),[o,t])]}function g(e){const{defaultValue:r,queryString:n=!1,groupId:t}=e,o=p(e),[i,a]=(0,s.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!m({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:o}))),[l,u]=x({queryString:n,groupId:t}),[d,f]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[t,o]=(0,h.Dv)(n);return[t,(0,s.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:t}),g=(()=>{const e=l??d;return m({value:e,tabValues:o})?e:null})();(0,c.A)((()=>{g&&a(g)}),[g]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);a(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var j=n(2303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:r,block:n,selectedValue:o,selectValue:s,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),d=e=>{const r=e.currentTarget,n=c.indexOf(r),t=l[n].value;t!==o&&(u(r),s(t))},h=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;r=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;r=c[n]??c[c.length-1];break}}r?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},r),children:l.map((e=>{let{value:r,label:n,attributes:s}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:o===r?0:-1,"aria-selected":o===r,ref:e=>c.push(e),onKeyDown:h,onClick:d,...s,className:(0,i.A)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":o===r}),children:n??r},r)}))})}function b(e){let{lazy:r,children:n,selectedValue:o}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=a.find((e=>e.props.value===o));return e?(0,s.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:a.map(((e,r)=>(0,s.cloneElement)(e,{key:r,hidden:e.props.value!==o})))})}function w(e){const r=g(e);return(0,t.jsxs)("div",{className:(0,i.A)("tabs-container",y.tabList),children:[(0,t.jsx)(v,{...r,...e}),(0,t.jsx)(b,{...r,...e})]})}function k(e){const r=(0,j.A)();return(0,t.jsx)(w,{...e,children:f(e.children)},String(r))}const E={tabItem:"tabItem_Ymn6"};function C(e){let{children:r,hidden:n,className:o}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,i.A)(E.tabItem,o),hidden:n,children:r})}const S={id:"install-the-cloudflare-enforcer",title:"Install the Cloudflare Enforcer",sidebar_label:"Install the Cloudflare Enforcer",description:"An article instructing how to install a proprietary Enforcer with a Cloudflare Worker on a user's CDN",toc_max_heading_level:4,tags:["Developer","Task"]},I=void 0,_={id:"technical/install-the-cloudflare-enforcer",title:"Install the Cloudflare Enforcer",description:"An article instructing how to install a proprietary Enforcer with a Cloudflare Worker on a user's CDN",source:"@site/docs/technical/install-the-cloudflare-enforcer.mdx",sourceDirName:"technical",slug:"/technical/install-the-cloudflare-enforcer",permalink:"/abigail-cho.github.io/docs/technical/install-the-cloudflare-enforcer",draft:!1,unlisted:!1,tags:[{inline:!0,label:"Developer",permalink:"/abigail-cho.github.io/docs/tags/developer"},{inline:!0,label:"Task",permalink:"/abigail-cho.github.io/docs/tags/task"}],version:"current",frontMatter:{id:"install-the-cloudflare-enforcer",title:"Install the Cloudflare Enforcer",sidebar_label:"Install the Cloudflare Enforcer",description:"An article instructing how to install a proprietary Enforcer with a Cloudflare Worker on a user's CDN",toc_max_heading_level:4,tags:["Developer","Task"]},sidebar:"tutorialSidebar",previous:{title:"GetMyWeather API",permalink:"/abigail-cho.github.io/docs/technical/getMyWeatherAPI/"}},T={},W=[{value:"About this article",id:"about-this-article",level:2},{value:"Install the Cloudflare Enforcer",id:"install-the-cloudflare-enforcer",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Installation",id:"installation",level:3},{value:"Create the Cloudflare Worker",id:"create-the-cloudflare-worker",level:4},{value:"Install the HUMAN Enforcer",id:"install-the-human-enforcer",level:4},{value:"Set up remote configuration",id:"set-up-remote-configuration",level:4}];function N(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"about-this-article",children:"About this article"}),"\n",(0,t.jsx)(r.p,{children:"A procedural article describing how to install the company\u2019s proprietary code on the reader\u2019s server using a Cloudflare Worker. This installation was required to use this company\u2019s more popular products, but often, the person installing this code was not an expert developer. This proved to be a significant barrier to entry and a friction point during onboarding, especially because the early versions of this article were mostly full of technical jargon and did not have clear prerequisites."}),"\n",(0,t.jsx)(r.p,{children:"I chose to include this article because it showcases more technical instructions, but it also demonstrates the expertise of the audience I was writing for. This audience had some experience with command-line interfaces, for example, but not as much with Cloudflare or installing certain programs. Therefore, I presented the information as clearly and succinctly as possible, and I warned readers at steps where past users stumbled."}),"\n",(0,t.jsxs)(r.p,{children:["This article is available publicly, so nothing has been redacted in the sample. You can view the current version ",(0,t.jsx)(r.a,{href:"https://edocs.humansecurity.com/docs/install-the-cloudflare-enforcer",children:"on their site."})]}),"\n",(0,t.jsx)("hr",{}),"\n",(0,t.jsx)(r.h2,{id:"install-the-cloudflare-enforcer",children:"Install the Cloudflare Enforcer"}),"\n",(0,t.jsxs)(r.p,{children:["If your organization uses ",(0,t.jsx)(r.strong,{children:"Cloudflare,"})," you can use HUMAN\u2019s Cloudflare ",(0,t.jsx)(r.strong,{children:"Enforcer"})," to protect against malicious behavior. The Cloudflare Enforcer is installed using a Cloudflare ",(0,t.jsx)(r.strong,{children:"Worker,"})," or a snippet of code, and is deployed to your content delivery network (CDN). The Enforcer dictates how traffic should be handled per your organization\u2019s standards."]}),"\n",(0,t.jsx)(r.p,{children:"You can learn how to install the Cloudflare Enforcer with this article."}),"\n",(0,t.jsx)(r.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["A ",(0,t.jsx)(r.strong,{children:"Cloudflare account."})," You can sign up for an account from ",(0,t.jsx)(r.a,{href:"https://www.cloudflare.com/",children:"Cloudflare's website."})]}),"\n",(0,t.jsxs)(r.li,{children:["A ",(0,t.jsx)(r.strong,{children:"command-line interface (CLI)."})]}),"\n",(0,t.jsx)(r.li,{children:"A text editor."}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Node Version Manager (nvm)"})," installed on your device. See nvm's ",(0,t.jsx)(r.a,{href:"about://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating",children:"GitHub repository"})," to troubleshoot installation issues."]}),"\n",(0,t.jsxs)(r.li,{children:["The latest version of ",(0,t.jsx)(r.strong,{children:"Node.js."})," After installing nvm, enter ",(0,t.jsx)(r.code,{children:"nvm install stable"})," in your CLI to install it."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Wrangler"})," installed on your device. You can enter ",(0,t.jsx)(r.code,{children:"npm install -g wrangler"})," in your CLI to install it."]}),"\n",(0,t.jsxs)(r.li,{children:["Your unique HUMAN information:","\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Your ",(0,t.jsx)(r.strong,{children:"Application ID."})," You can find this under ",(0,t.jsx)(r.strong,{children:"Platform Settings > Applications > Overview"})," in the HUMAN console."]}),"\n",(0,t.jsxs)(r.li,{children:["Your ",(0,t.jsx)(r.strong,{children:"Server Token."})," You can find this under ",(0,t.jsx)(r.strong,{children:"Platform Settings > Applications > Status & Settings > Server Token."})]}),"\n",(0,t.jsxs)(r.li,{children:["Your ",(0,t.jsx)(r.strong,{children:"Risk Cookie Key."})," You can find this under ",(0,t.jsx)(r.strong,{children:"Bot Defender > Policies > Policy Settings > Policy Information."})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(r.p,{children:"There are three parts to the Cloudflare Enforcer installation:"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#create-the-cloudflare-worker",children:"Create the Cloudflare Worker"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#install-the-human-enforcer",children:"Install the HUMAN Enforcer"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#set-up-remote-configuration",children:"Set up remote configuration"})}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"The majority of the installation process is done through a CLI."}),"\n",(0,t.jsx)(r.h4,{id:"create-the-cloudflare-worker",children:"Create the Cloudflare Worker"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["Enter ",(0,t.jsx)(r.code,{children:"npm create cloudflare@latest"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:["When prompted, enter a folder name to create your Worker in. In the example below, we've named our folder ",(0,t.jsx)(r.code,{children:"human-cloudflare-enforcer"}),"."]}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-markup",children:"npm create cloudflare@latest \r\n\r\nusing create-cloudflare version 2.21.X\r\n\u256d Create an application with Cloudflare Step 1 of 3\r\n\u2502 \r\n\u2570 In which directory do you want to create your application? also used as application name\r\n  ./human-cloudflare-enforcer\n"})}),"\n",(0,t.jsxs)(r.ol,{start:"3",children:["\n",(0,t.jsxs)(r.li,{children:["When prompted, select the ",(0,t.jsx)(r.code,{children:'"Hello World" Worker'})," option and hit ",(0,t.jsx)(r.code,{children:"return"})," to proceed."]}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-markup",children:'\u2502 dir ./cloudflare-enforcer\r\n\u2502\r\n\u2570 What type of application do you want to create?\r\n  \u25cf "Hello World" Worker\r\n  \u25cb "Hello World" Worker (Python)\r\n  \u25cb "Hello World" Durable Object\r\n  \u25cb Website or web app\r\n  \u25cb Example router & proxy Worker\r\n  \u25cb Scheduled Worker (Cron Trigger)\r\n  \u25cb Queue consumer & producer Worker\r\n  \u25cb API starter (OpenAPI compliant)\r\n  \u25cb Worker built from a template hosted in a git repository\n'})}),"\n",(0,t.jsxs)(r.ol,{start:"4",children:["\n",(0,t.jsx)(r.li,{children:"Select whether to install the Worker using TypeScript. By default, the Worker will install in JavaScript."}),"\n"]}),"\n",(0,t.jsx)(r.admonition,{title:"Note",type:"warning",children:(0,t.jsxs)(r.p,{children:["Whether you use TypeScript or JavaScript is up to you, but be sure to ",(0,t.jsx)(r.strong,{children:"remember what you chose."})," Later in the installation, you will need to choose the code snippet that corresponds to the language you installed in."]})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-markup",children:'\u251c What type of application do you want to create?\r\n\u2502 type "Hello World" Worker\r\n\u2502\r\n\u2570 Do you want to use TypeScript?\r\n  Yes / No\n'})}),"\n",(0,t.jsxs)(r.ol,{start:"5",children:["\n",(0,t.jsxs)(r.li,{children:["When prompted, select ",(0,t.jsx)(r.code,{children:"No"})," to deploying your application."]}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-markup",children:"\u256d Deploy with Cloudflare Step 3 of 3\r\n\u2502\r\n\u2570 Do you want to deploy your application?\r\n  Yes / No\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Afterwards, you should receive a success message that reads ",(0,t.jsx)(r.code,{children:"APPLICATION CREATED"}),". This means you created a basic Cloudflare Worker, and you're ready to move on to installing the HUMAN Enforcer."]}),"\n",(0,t.jsx)(r.h4,{id:"install-the-human-enforcer",children:"Install the HUMAN Enforcer"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["In your CLI, enter ",(0,t.jsx)(r.code,{children:"cd folder_name"})," to open the folder you created in ",(0,t.jsx)(r.strong,{children:"Create the Cloudflare Worker, Step 2."})," Based on our earlier example, we would enter ",(0,t.jsx)(r.code,{children:"cd human-cloudflare-enforcer"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:["Enter ",(0,t.jsx)(r.code,{children:"npm i --save @humansecurity/cloudflare-enforcer"}),". This will install the latest Cloudflare Enforcer from HUMAN."]}),"\n",(0,t.jsxs)(r.li,{children:["Enter ",(0,t.jsx)(r.code,{children:"cd src"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:["In your preferred text editor, open either ",(0,t.jsx)(r.code,{children:"index.ts"})," or ",(0,t.jsx)(r.code,{children:"index.js"})," depending on your choice in ",(0,t.jsx)(r.strong,{children:"Create the Cloudflare Worker, Step 4."})," The ",(0,t.jsx)(r.code,{children:".ts"})," file is for TypeScript installations, while ",(0,t.jsx)(r.code,{children:".js"})," is for JavaScript."]}),"\n"]}),"\n",(0,t.jsx)(r.admonition,{title:"Note",type:"info",children:(0,t.jsxs)(r.p,{children:["You can check the file type you have by entering ",(0,t.jsx)(r.code,{children:"ls"})," while inside the ",(0,t.jsx)(r.code,{children:"src"})," folder. This will show you your ",(0,t.jsx)(r.code,{children:"index"})," file's type."]})}),"\n",(0,t.jsxs)(r.ol,{start:"5",children:["\n",(0,t.jsxs)(r.li,{children:["Delete all the code currently in the ",(0,t.jsx)(r.code,{children:"index"})," file. The following snippet shows all the default code you should ",(0,t.jsx)(r.strong,{children:"delete."})]}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-markup",children:"/**\r\n * Welcome to Cloudflare Workers! This is your first worker.\r\n *\r\n * - Run `npm run dev` in your terminal to start a development server\r\n * - Open a browser tab at http://localhost:8787/ to see your worker in action\r\n * - Run `npm run deploy` to publish your worker\r\n *\r\n * Learn more at https://developers.cloudflare.com/workers/\r\n */\r\nexport default {\r\n        async fetch(request, env, ctx) {\r\n                return new Response('Hello World!');\r\n        },\r\n};\n"})}),"\n",(0,t.jsxs)(r.ol,{start:"6",children:["\n",(0,t.jsxs)(r.li,{children:["Copy the appropriate code snippet, either TypeScript or JavaScript, from below and paste it into your ",(0,t.jsx)(r.code,{children:"index"})," file."]}),"\n"]}),"\n",(0,t.jsx)(r.admonition,{title:"Note",type:"info",children:(0,t.jsxs)(r.p,{children:["In addition to choosing between TypeScript and JavaScript, you must also make sure to pick the right type of Worker. This can either be an ES Module or Service Module, and it depends on your Cloudflare configuration. You can see some examples from both Workers in ",(0,t.jsx)(r.a,{href:"https://developers.cloudflare.com/workers/reference/migrate-to-module-workers/",children:"Cloudflare's documentation."})]})}),"\n",(0,t.jsxs)(k,{children:[(0,t.jsx)(C,{value:"es-js",label:"ES Modules Syntax: JavaScript",default:!0,children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"import {\r\n    HumanSecurityEnforcer\r\n} from \"@humansecurity/cloudflare-enforcer\";\r\n\r\nconst config = {\r\n    px_app_id: '<APP_ID>',\r\n    px_auth_token: '<AUTH_TOKEN>',\r\n    px_cookie_secret: '<COOKIE_SECRET>',\r\n    // ...\r\n};\r\n\r\nexport default {\r\n    async fetch(request, env, ctx) {\r\n        // create a new enforcer\r\n        const enforcer = await HumanSecurityEnforcer.initialize(config, env);\r\n\r\n        // call enforce\r\n        const retVal = await enforcer.enforce(ctx, request);\r\n\r\n        // if enforce returned a response, return that response\r\n        if (retVal instanceof Response) {\r\n            return retVal;\r\n        }\r\n\r\n        // retrieve the resource from the cache or origin server\r\n        // make sure to use the value returned from enforce\r\n        const response = await fetch(retVal);\r\n\r\n        // call postEnforce and return the resulting response\r\n        return await enforcer.postEnforce(ctx, response);\r\n    },\r\n};\n"})})}),(0,t.jsx)(C,{value:"es-ts",label:"ES Modules Syntax: TypeScript",default:!0,children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"import {\r\n    HumanSecurityEnforcer,\r\n    HumanSecurityConfiguration\r\n} from '@humansecurity/cloudflare-enforcer';\r\n\r\nconst config: HumanSecurityConfiguration = {\r\n    px_app_id: '<APP_ID>',\r\n    px_auth_token: '<AUTH_TOKEN>',\r\n    px_cookie_secret: '<COOKIE_SECRET>',\r\n    // ...\r\n};\r\n\r\ninterface Env {\r\n    // If using Human Security features that require the PXKV Namespace\r\n    PXKV: KVNamespace;\r\n}\r\n\r\nexport default {\r\n    async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise < Response > {\r\n        // create a new enforcer\r\n        const enforcer = await HumanSecurityEnforcer.initialize(config, env);\r\n\r\n        // call enforce\r\n        const retVal = await enforcer.enforce(ctx, request);\r\n\r\n        // if enforce returned a response, return that response\r\n        if (retVal instanceof Response) {\r\n            return retVal;\r\n        }\r\n\r\n        // retrieve the resource from the cache or origin server\r\n        // make sure to use the value returned from enforce\r\n        const response = await fetch(retVal);\r\n\r\n        // call postEnforce and return the resulting response\r\n        return await enforcer.postEnforce(ctx, response);\r\n    },\r\n};\n"})})}),(0,t.jsx)(C,{value:"sw-js",label:"Service Worker Syntax: JavaScript",default:!0,children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"import {\r\n    HumanSecurityEnforcer\r\n} from '@humansecurity/cloudflare-enforcer';\r\n\r\n// define an enforcer configuration however you see fit\r\nconst config = {\r\n    px_app_id: '<APP_ID>',\r\n    px_auth_token: '<AUTH_TOKEN>',\r\n    px_cookie_secret: '<COOKIE_SECRET>',\r\n    // ...\r\n};\r\n\r\nasync function handleEvent(event) {\r\n    // provide the enforcer configuration as an argument and await the returned Promise\r\n    // to receive an instance of the HumanSecurityEnforcer\r\n    const enforcer = await HumanSecurityEnforcer.initialize(config);\r\n\r\n    // call enforce\r\n    const retVal = await enforcer.enforce(event);\r\n\r\n    // if enforce returned a response, return that response\r\n    if (retVal instanceof Response) {\r\n        return retVal;\r\n    }\r\n\r\n    // retrieve the resource from the cache or origin server\r\n    // make sure to use the value returned from enforce\r\n    const response = await fetch(retVal);\r\n\r\n    // call postEnforce and return the resulting response\r\n    return await enforcer.postEnforce(event, response);\r\n}\r\n\r\naddEventListener('fetch', (event) => {\r\n    event.respondWith(handleEvent(event));\r\n});\n"})})}),(0,t.jsx)(C,{value:"sw-ts",label:"Service Worker Syntax: TypeScript",default:!0,children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"import {\r\n    HumanSecurityEnforcer,\r\n    HumanSecurityConfiguration\r\n} from \"@humansecurity/cloudflare-enforcer\";\r\n\r\nconst config: HumanSecurityConfiguration = {\r\n    px_app_id: '<APP_ID>',\r\n    px_auth_token: '<AUTH_TOKEN>',\r\n    px_cookie_secret: '<COOKIE_SECRET>',\r\n    // ...\r\n};\r\n\r\nasync function handleEvent(event: FetchEvent): Promise < Response > {\r\n    // create a new enforcer\r\n    const enforcer = await HumanSecurityEnforcer.initialize(config);\r\n\r\n    // call enforce\r\n    const retVal = await enforcer.enforce(event);\r\n\r\n    // if enforce returned a response, return that response\r\n    if (retVal instanceof Response) {\r\n        return retVal;\r\n    }\r\n\r\n    // retrieve the resource from the cache or origin server\r\n    // make sure to use the value returned from enforce\r\n    const response = await fetch(retVal);\r\n\r\n    // call postEnforce and return the resulting response\r\n    return await enforcer.postEnforce(event, response);\r\n}\r\n\r\naddEventListener('fetch', (event) => {\r\n    event.respondWith(handleEvent(event));\r\n});\n"})})})]}),"\n",(0,t.jsxs)(r.ol,{start:"7",children:["\n",(0,t.jsxs)(r.li,{children:["Update the ",(0,t.jsx)(r.code,{children:"px_add_id"}),", ",(0,t.jsx)(r.code,{children:"px_auth_token"}),", and ",(0,t.jsx)(r.code,{children:"px_cookie_secret"})," fields with your ",(0,t.jsx)(r.strong,{children:"Application ID, Server Token,"})," and ",(0,t.jsx)(r.strong,{children:"Risk Cookie Key"})," respectively."]}),"\n"]}),"\n",(0,t.jsx)(r.admonition,{title:"Note",type:"info",children:(0,t.jsxs)(r.p,{children:["These are the ",(0,t.jsx)(r.strong,{children:"minimum"})," required fields that ",(0,t.jsx)(r.strong,{children:"must be completed"})," in order for the Enforcer to work. You can always return to this file to customize your Enforcer later with our ",(0,t.jsx)(r.a,{href:"https://edocs.humansecurity.com/docs/configuration-cloudflare",children:"optional configurations."})]})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-markup",children:"// define an enforcer configuration however you see fit\r\nconst config = {\r\n    px_app_id: '<APP_ID>',\r\n    px_auth_token: '<AUTH_TOKEN>',\r\n    px_cookie_secret: '<COOKIE_SECRET>',\r\n    // ...\r\n};\n"})}),"\n",(0,t.jsxs)(r.ol,{start:"8",children:["\n",(0,t.jsx)(r.li,{children:"Save and close the file."}),"\n",(0,t.jsxs)(r.li,{children:["Enter ",(0,t.jsx)(r.code,{children:"npx wrangler deploy"})," to deploy your Worker. You may be prompted to log in to your Wrangler or Cloudflare account."]}),"\n",(0,t.jsxs)(r.li,{children:["Navigate to your Cloudflare dashboard and open ",(0,t.jsx)(r.strong,{children:"Workers & Pages."})," Your new Worker with the HUMAN Enforcer should appear with the same name you gave it in ",(0,t.jsx)(r.strong,{children:"Create the Cloudflare Worker, Step 2."})," In our case, the Worker is named ",(0,t.jsx)(r.strong,{children:"human-cloudflare-enforcer."})]}),"\n",(0,t.jsxs)(r.li,{children:["Select the ",(0,t.jsx)(r.strong,{children:"Worker,"})," then select ",(0,t.jsx)(r.strong,{children:"Settings > Triggers > Add route"})," under ",(0,t.jsx)(r.strong,{children:"Routes."})," This is where you can add URL routes and zones to monitor with the Cloudflare Enforcer. We recommend protecting your full domain, including all pages on your domain, with the pattern ",(0,t.jsx)(r.code,{children:"subdomain.apex.com/*"}),". For example, to protect the full domain of a site with the URL ",(0,t.jsx)(r.code,{children:"www.example.com"}),", you should provide the following fields:"]}),"\n"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Route:"})," ",(0,t.jsx)(r.code,{children:"www.example.com/*"})]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Zone:"})," ",(0,t.jsx)(r.code,{children:"example.com"})]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["Next, now that your Cloudflare Worker has been integrated with the Enforcer, you must set up ",(0,t.jsx)(r.strong,{children:"remote configuration fields"})," in your Worker."]}),"\n",(0,t.jsx)(r.h4,{id:"set-up-remote-configuration",children:"Set up remote configuration"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Remote configuration"})," is a feature that lets you access and modify your Enforcer's configuration remotely without redeploying your Cloudflare Worker. This also allows the HUMAN team to troubleshoot or customize your Enforcer directly. Remote configuration is ",(0,t.jsx)(r.strong,{children:"required"})," as part of your Enforcer setup."]}),"\n",(0,t.jsxs)(r.admonition,{title:"Note",type:"info",children:[(0,t.jsxs)(r.p,{children:["HUMAN will ",(0,t.jsx)(r.strong,{children:"never"})," change your Enforcer configuration without your permission. You can learn more about remote configurations with our ",(0,t.jsx)(r.a,{href:"https://edocs.humansecurity.com/docs/configuration-cloudflare#remote-configurations",children:"help article."})]}),(0,t.jsxs)(r.p,{children:["To complete the remote configuration setup, you will need to contact our team. You can reach out to your account manager or reach out to us at ",(0,t.jsx)(r.a,{href:"mailto:contact-support@humansecurity.com",children:"contact-support@humansecurity.com"}),"."]})]}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["In your Cloudflare dashboard's ",(0,t.jsx)(r.strong,{children:"Workers & Pages,"})," select the Worker you created in ",(0,t.jsx)(r.strong,{children:"Create the Cloudflare Worker, Step 2."})," In our case, the Worker is named ",(0,t.jsx)(r.strong,{children:"human-cloudflare-enforcer."})]}),"\n",(0,t.jsxs)(r.li,{children:["Navigate to the Worker's ",(0,t.jsx)(r.strong,{children:"Settings > Variables > KV Namespace Bindings"})," and select ",(0,t.jsx)(r.strong,{children:"Create a KV namespace."})]}),"\n",(0,t.jsxs)(r.li,{children:["Select ",(0,t.jsx)(r.strong,{children:"Create a namespace"})," and enter a ",(0,t.jsx)(r.strong,{children:"name"})," for it, then select ",(0,t.jsx)(r.strong,{children:"Add."})]}),"\n",(0,t.jsxs)(r.li,{children:["Return to your Worker's ",(0,t.jsx)(r.strong,{children:"Settings > Variables > KV Namespace Bindings"})," and select ",(0,t.jsx)(r.strong,{children:"Add binding."})]}),"\n",(0,t.jsx)(r.li,{children:"Create a KV variable with the following fields:"}),"\n"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Variable name:"})," Enter ",(0,t.jsx)(r.strong,{children:"PXKV"}),". The name ",(0,t.jsx)(r.strong,{children:"must"})," be set to PXKV for the remote configuration to work."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"KV Namespace:"})," Select the Namespace you created in ",(0,t.jsx)(r.strong,{children:"Step 3."})]}),"\n"]}),"\n",(0,t.jsxs)(r.ol,{start:"6",children:["\n",(0,t.jsxs)(r.li,{children:["Select ",(0,t.jsx)(r.strong,{children:"Deploy."})]}),"\n",(0,t.jsxs)(r.li,{children:["Navigate back to the Cloudflare ",(0,t.jsx)(r.strong,{children:"dashboard > Websites"})," and select the domain to trigger the Enforcer's Worker."]}),"\n",(0,t.jsxs)(r.li,{children:["Navigate to ",(0,t.jsx)(r.strong,{children:"Workers Routes"})," and select ",(0,t.jsx)(r.strong,{children:"Edit"})," next to the ",(0,t.jsx)(r.strong,{children:"Route"})," to bind your Worker to."]}),"\n",(0,t.jsxs)(r.li,{children:["In the ",(0,t.jsx)(r.strong,{children:"Edit route"})," window that appears, select the ",(0,t.jsx)(r.strong,{children:"Worker"})," you created from the dropdown menu and select ",(0,t.jsx)(r.strong,{children:"Save."})]}),"\n",(0,t.jsxs)(r.li,{children:["From the route you bound the Worker to, share the ",(0,t.jsx)(r.strong,{children:"full website address"})," with HUMAN's Support team. Once we receive your URL, we will complete the setup for you."]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["Your Cloudflare Enforcer has been successfully installed with the minimum requirements to monitor activity on your Cloudflare CDN. You can further customize the Enforcer's behavior by referencing our ",(0,t.jsx)(r.a,{href:"https://edocs.humansecurity.com/docs/configuration-cloudflare",children:"configuration options."})]}),"\n",(0,t.jsx)(r.p,{children:"Once you finish installing, be sure to contact HUMAN to complete your tuning process."})]})}function A(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(N,{...e})}):N(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>a});var t=n(6540);const o={},s=t.createContext(o);function i(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);