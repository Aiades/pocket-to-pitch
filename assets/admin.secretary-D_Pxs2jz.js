import{a as e,n as t,t as n}from"./jsx-runtime-CXCudH8Z.js";import{r}from"./index-DtmeKPIu.js";import{n as i,o as a,r as o,t as s}from"./ui-DcWoNllc.js";import{t as c}from"./check-BzRCG3WF.js";var l=e(t()),u=n(),d={会议纪要:`XX 街道 11 月第二次城运工作例会纪要
时间：2026 年 11 月 12 日 14:30　地点：街道三楼会议室
参会：张主任、各科室负责人、12 个居民区书记

一、会议议题
1. 华山路 288 弄施工噪音专项治理
2. 冬季独居老人用电安全入户检查
3. 沿街商铺跨门经营集中整治

二、会议决议
1. 由城建中心牵头，11 月 15 日前约谈施工单位。
2. 各居民区 11 月 30 日前完成 386 户独居老人入户检查。
3. 城管中队联合市场监管所开展为期两周的跨门经营整治。

三、待办事项（已同步至责任人）
☐ 城建中心 · 约谈施工单位 · 11-15
☐ 各居委 · 独居老人入户检查 · 11-30
☐ 城管中队 · 跨门经营整治方案 · 11-14`,工作日报:`社工工作日报 · 王晓雯 · 11 月 13 日

一、走访情况：完成走访 9 户，其中独居老人 6 户、困难家庭 2 户、新迁入 1 户。
二、发现问题：上报隐患 2 件（兴安里 3 号楼飞线充电、长乐路 32 号跨门经营），均已派单。
三、政策解答：现场解答 5 次，涉及高龄津贴、长护险、助餐补贴。
四、关怀跟进：李秀英阿婆用电异常，已上门核实，身体状况良好，系外出女儿家 2 日。
五、明日计划：回访陈国华老人，协助办理助行器租赁。`,月度汇报:`XX 街道 2026 年 10 月基层治理工作汇报（初稿）

一、总体情况
本月共受理各类诉求 2,486 件，按期办结率 97.4%，较上月提升 3.1 个百分点；平均办理时长 6.8 小时，较 AI 大脑上线前缩短 41%。

二、主要成效
（一）治理闭环更快。智能派单准确率 95.2%，退回重派下降 62%。
（二）关怀服务更准。独居老人走访覆盖率达 98%，通过异常信号提前发现并处置风险 23 起。
（三）惠企服务更主动。主动推送政策 642 次，帮助 37 家企业申领补贴 486 万元。

三、存在问题与下步打算
施工噪音类诉求仍居高位，下月将推动“未诉先办”专项……`};function f(){let[e,t]=(0,l.useState)(`会议纪要`);return(0,u.jsxs)(`div`,{className:`space-y-4`,children:[(0,u.jsx)(`h1`,{className:`font-display text-3xl`,children:`数字秘书 · 材料初稿生成`}),(0,u.jsxs)(`div`,{className:`grid gap-4 md:grid-cols-[260px_1fr] xl:grid-cols-[260px_1fr]`,children:[(0,u.jsx)(o,{title:`选择材料`,children:Object.keys(d).map(n=>(0,u.jsxs)(`button`,{onClick:()=>t(n),className:a(`mb-1 w-full rounded-lg p-3 text-left text-sm`,e===n?`bg-accent`:`hover:bg-secondary`),children:[n,(0,u.jsx)(`div`,{className:`text-xs text-muted-foreground`,children:n===`会议纪要`?`来源：会议录音 52 分钟`:n===`工作日报`?`来源：走访录音与工单`:`来源：本月工作数据`})]},n))}),(0,u.jsxs)(o,{title:e,extra:(0,u.jsxs)(`div`,{className:`flex gap-2`,children:[(0,u.jsx)(s,{name:`数字秘书`}),(0,u.jsx)(`button`,{onClick:()=>{navigator.clipboard?.writeText(d[e]).catch(()=>{}),r.success(`已复制全文`)},className:`rounded bg-secondary px-2 py-0.5 text-xs`,children:`复制`}),(0,u.jsx)(`button`,{onClick:()=>{let t=new Blob([d[e]],{type:`application/msword`}),n=URL.createObjectURL(t),i=document.createElement(`a`);i.href=n,i.download=`${e}.doc`,i.click(),URL.revokeObjectURL(n),r.success(`已导出 Word 文档`)},className:`rounded bg-primary px-2 py-0.5 text-xs text-primary-foreground`,children:`导出 Word`})]}),children:[(0,u.jsxs)(`div`,{className:`mx-auto max-w-2xl rounded-lg bg-card p-8 shadow-sm ring-1 ring-border`,children:[(0,u.jsx)(`div`,{className:`mb-4 border-b-2 border-destructive pb-3 text-center font-bold tracking-widest text-destructive`,children:`XX 街道办事处`}),(0,u.jsx)(i,{text:d[e],className:`font-sans leading-8`},e)]}),e===`会议纪要`&&(0,u.jsx)(p,{})]})]})]})}function p(){let e=[[`城建中心`,`约谈华山路 288 弄施工单位`,`11-15`],[`各居委`,`独居老人入户用电检查 386 户`,`11-30`],[`城管中队`,`跨门经营整治方案`,`11-14`]],[t,n]=(0,l.useState)([]);return(0,u.jsxs)(`div`,{className:`mt-4 rounded-lg bg-secondary p-4`,children:[(0,u.jsxs)(`div`,{className:`mb-2 flex items-center justify-between text-sm font-bold`,children:[`会议待办 · 已同步责任人`,(0,u.jsxs)(`span`,{className:`text-xs font-normal text-muted-foreground`,children:[`完成 `,t.length,`/`,e.length]})]}),e.map(([e,i,o],s)=>(0,u.jsxs)(`button`,{onClick:()=>{n(e=>e.includes(s)?e.filter(e=>e!==s):[...e,s]),t.includes(s)||r.success(`已标记完成`,{description:`${e} · ${i}`})},className:`flex w-full items-center gap-3 border-b border-border py-2 text-left text-sm last:border-0`,children:[(0,u.jsx)(`span`,{className:a(`flex h-5 w-5 items-center justify-center rounded`,t.includes(s)?`bg-success text-primary-foreground`:`border-2 border-primary`),children:t.includes(s)&&(0,u.jsx)(c,{className:`h-3.5 w-3.5`})}),(0,u.jsx)(`span`,{className:`w-20 text-xs text-muted-foreground`,children:e}),(0,u.jsx)(`span`,{className:a(`flex-1`,t.includes(s)&&`line-through opacity-60`),children:i}),(0,u.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:o})]},i))]})}export{f as component};