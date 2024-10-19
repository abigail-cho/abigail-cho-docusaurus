"use strict";(self.webpackChunkabigail_portfolio=self.webpackChunkabigail_portfolio||[]).push([[681],{230:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var i=n(4848),a=n(8453);const o={id:"authenticating-api-calls",title:"Authenticating API calls",sidebar_label:"Authenticating API calls",description:"An article instructing how to authenticate API calls for two versions of an API",toc_max_heading_level:4,tags:["Developer","Task","Reference"]},s=void 0,r={id:"technical/authenticating-api-calls",title:"Authenticating API calls",description:"An article instructing how to authenticate API calls for two versions of an API",source:"@site/docs/technical/authenticating-api-calls.md",sourceDirName:"technical",slug:"/technical/authenticating-api-calls",permalink:"/docs/technical/authenticating-api-calls",draft:!1,unlisted:!1,tags:[{inline:!0,label:"Developer",permalink:"/docs/tags/developer"},{inline:!0,label:"Task",permalink:"/docs/tags/task"},{inline:!0,label:"Reference",permalink:"/docs/tags/reference"}],version:"current",frontMatter:{id:"authenticating-api-calls",title:"Authenticating API calls",sidebar_label:"Authenticating API calls",description:"An article instructing how to authenticate API calls for two versions of an API",toc_max_heading_level:4,tags:["Developer","Task","Reference"]},sidebar:"tutorialSidebar",previous:{title:"Developer Documentation",permalink:"/docs/category/developer-documentation"},next:{title:"GetMyWeather API",permalink:"/docs/technical/getMyWeatherAPI/"}},c={},l=[{value:"About this article",id:"about-this-article",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Getting an API key",id:"getting-an-api-key",level:3},{value:"Authenticating requests",id:"authenticating-requests",level:3},{value:"Authenticating requests with the v1 API",id:"authenticating-requests-with-the-v1-api",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"about-this-article",children:"About this article"}),"\n",(0,i.jsx)(t.p,{children:"A user guide for authenticating calls made to one of my past company\u2019s API. I included this sample in particular because of a few nuances:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"The API key could only be generated from a user account from the company\u2019s platform, which developers typically would not have. So, I included instructions on how to get this key, but also included links to customer documentation for general users to reference."}),"\n",(0,i.jsx)(t.li,{children:"The authentication method for the API this article documented, the v2 API, was different from v1. However, it was possible at the time that users would still use both APIs at once. Therefore, I had to include the recommended method for authenticating requests in both cases."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"This article has been edited to remove proprietary information."}),"\n",(0,i.jsx)("hr",{}),"\n",(0,i.jsx)(t.h2,{id:"authentication",children:"Authentication"}),"\n",(0,i.jsxs)(t.p,{children:["Acme uses API keys to authenticate requests. To use the Acme v2 API, you ",(0,i.jsx)(t.strong,{children:"must"})," authenticate every request you make. Requests without authentication will fail."]}),"\n",(0,i.jsx)(t.h3,{id:"getting-an-api-key",children:"Getting an API key"}),"\n",(0,i.jsx)(t.p,{children:"To get your API key, you must have an Acme platform account."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Log in to your Acme account and navigate to Account Settings."}),"\n",(0,i.jsx)(t.li,{children:"Find the Acme API Integration and select Generate Token."}),"\n",(0,i.jsx)(t.li,{children:"Copy your API Key."}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:"Your API key is unique to your account and carry many privileges, so keep it secure! Do not share your key with others or store it in publicly accessible areas."})}),"\n",(0,i.jsxs)(t.p,{children:["For further details, review our ",(0,i.jsx)(t.a,{href:"https://help.acme.co/docs/integrating-with-the-acme-api",children:"customer documentation."})]}),"\n",(0,i.jsx)(t.h3,{id:"authenticating-requests",children:"Authenticating requests"}),"\n",(0,i.jsxs)(t.p,{children:["You can authenticate using your API key as the token with ",(0,i.jsx)(t.code,{children:"--header 'X-API-key: <YOUR_API_TOKEN>'"}),". You do ",(0,i.jsx)(t.strong,{children:"not"})," need to provide a password."]}),"\n",(0,i.jsx)(t.p,{children:"For example, to authorize a request to get a list of conversions:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-markup",children:"curl --request GET \\\n  --url https://app.acme.co/v2/ipsum/ \\\n  --header 'X-API-key: <YOUR_API_TOKEN>' \\\n  --header 'Accept: application/json'\n"})}),"\n",(0,i.jsx)(t.h3,{id:"authenticating-requests-with-the-v1-api",children:"Authenticating requests with the v1 API"}),"\n",(0,i.jsxs)(t.p,{children:["Authenticating requests with Acme\u2019s v1 API (",(0,i.jsx)(t.a,{href:"https://api.acme.co/v1/",children:"https://api.acme.co/v1/"}),") is different from authenticating requests with the our v2 API. When authenticating with API v1, you must authenticate with your API key as the bearer token using ",(0,i.jsx)(t.code,{children:"--header 'Authorization: Bearer <YOUR_API_TOKEN>'"})," instead."]}),"\n",(0,i.jsx)(t.p,{children:"If you are using both APIs, then we recommend using both authorization headers in your requests to either domain."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-markup",children:"curl --request GET \\\n  --url https://app.acme.co/v2/ipsum/ \\\n  --header 'X-API-key: <YOUR_API_TOKEN>' \\\n  --header 'Authorization: Bearer <YOUR_API_TOKEN>' \\\n  --header 'Accept: application/json'\n"})})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var i=n(6540);const a={},o=i.createContext(a);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);