// ==UserScript==
// @name         myUtils
// @description  为了offline
// ==/UserScript==
window.my=new class {
    constructor(){
       EventTarget.prototype.on=function(){
          addEventListener.apply(this,arguments);
          return this
       }
       const e=document.head.nextElementSibling;
       if(e.hasAttribute('my-zone')) this.zone=e;
       else{
           const z=document.createElement('div');
           z.setAttribute('my-zone','');
           z.className="fucking-zhihu-sucks"
           document.head.after(this.zone=z)
       }
       this.addStyle(`#my-btn-container{display:flex;flex-wrap:wrap;z-index:1650729359811;position:fixed!important;right:0;top:0}.my-btn{user-select: none!important}`,'my-css-for-btns fucking-zhihu-sucks');
    }
 
    //dependency:after,zone
    addStyle(css,className='fucking-zhihu-sucks'){
        return this.append('style',this.zone,css,`class`,className)
    }
    
    append(tag,dom,content){
        if(!tag) return;
        const son=typeof tag==='string'?
              document.createElement(tag):tag instanceof EventTarget?
              tag:0;
        let len=arguments.length;
        dom instanceof EventTarget?dom.append(son):0;
        if(content)son.append(content);
        while(len>3){
                son.setAttribute([arguments[len-2]],arguments[len-1]);len-=2
        }return son;
    }
    //my.append('tag',document.body,'content','idk','true','data-s')

    after(tag,dom,content){
        if(!tag) return;
        const bro=typeof tag==='string'?
              document.createElement(tag):tag instanceof EventTarget?
              tag:0;
        let len=arguments.length;
        dom instanceof EventTarget?dom.after(bro):0;
        if(content)bro.append(content);
        while(len>3){
                bro.setAttribute([arguments[len-2]],arguments[len-1]);len-=2
        }return bro;
    }
    //my.after('div',document.body,'','suck','1','dick',000)

    before(tag,dom,content){
        if(!tag) return;
        const bro=typeof tag==='string'?
              document.createElement(tag):tag instanceof EventTarget?
              tag:0;
        let len=arguments.length;
        dom instanceof EventTarget?dom.before(bro):0;
        if(content)bro.append(content);
        while(len>3){
                bro.setAttribute([arguments[len-2]],arguments[len-1]);len-=2
        }return bro;
    }
    // my.before('div',document.head,'','suck','1','dick')

    //enable or disable style with class
    switchStyle(...styleQueryRule){
        styleQueryRule.forEach(e=>{
            this.zone.querySelectorAll('style'+e).forEach(e=>{
                e.type!='0'?e.type=0:e.type="";
            });
        })
    }

    seconds2date(seconds){
        const date=new Date(seconds),year=date.getFullYear(),month=date.getMonth()+1,day=date.getDate(),
              hour=date.getHours(),minute=date.getMinutes(),second=date.getSeconds(),milliseconds=date.getMilliseconds(),currentTime=year+"-"+month+"-"+day+" "+hour+":"+minute+":"+second+":"+milliseconds;
        return currentTime
    }
    //my.seconds2date(new Date().getTime())

    //跳出登录框后再执行
    fuckTiebaLogin(userName,password){
        document.getElementById('TANGRAM__PSP_5__footerULoginBtn').click();
        document.getElementById('TANGRAM__PSP_5__userName').outerHTML+='';
        document.getElementById('TANGRAM__PSP_5__password').outerHTML+='';
        document.getElementById('TANGRAM__PSP_5__userName').value=userName;
        document.getElementById('TANGRAM__PSP_5__password').value=password;
        return document.getElementById('TANGRAM__PSP_5__submit').click();
    }

    getValue(k,aDefault){
        const val=localStorage.getItem("XB_"+k)
        if (!val && 'undefined' != typeof aDefault) return aDefault;
        return val;
    }

    setValue(k, v){
        localStorage.setItem("XB_"+k, v);
    }
    //setValue('k', 'v')

    deleteValue(k){
        if(k.indexOf("XB_")!=-1) localStorage.removeItem(k);
    }
    //deleteValue('k')

    listValues(){
        let list=[],j=0,k,l=localStorage.length;
        for (let i=0;i<l;i++) {
            k=localStorage.key(i);
            if(k.indexOf("XB_")!=-1) list[j++]=localStorage.key(i)
        }return list
    }

    //dependency:listValues
    clearValues(){
        this.listValues().forEach(e=>{
            localStorage.removeItem(e)
        })
    }

    //get len of json obj
    getJsonLen(jsonObj){
        let jsonLen=0, key;
        for (key in jsonObj) {
            if (jsonObj.hasOwnProperty(key)) jsonLen++;
        }return jsonLen;
    }

    //syn console.log
    log(text){
        console.log(JSON.stringify(text))
    }

    //dependency:addStyle,append
    addBtns(...params){
        const z=this.zone,myDiv=z.querySelector('#my-btn-container')||this.append('div',z,'',`id`,'my-btn-container',`class`,'fucking-zhihu-sucks'),btns=[],l=params.length;
        for(let i=0;i<l;){
            const btn=typeof params[i]==="function"?
            this.append('button',myDiv,params[i].name+'|','class','my-btn').on('click',params[i++]):
            this.append('button',myDiv,params[i++]+'|','class','my-btn').on('click',params[i++]);
            btns[btns.length]=btn
        }return btns
    }
    //my.addBtns(()=>{},"func1",e=>{confirm(e.target.id)},function(e){prompt(e.target.outerHTML)},function test(e){return 1})

    //dependency:addStyle,append
    addAs(...args){
        const z=this.zone,myDiv=z.querySelector('#my-btn-container')||this.append('div',z,'',`id`,'my-btn-container',`class`,'fucking-zhihu-sucks');
        for(let i=0;i<args.length;i+=2){
            this.append('a',myDiv,args[i]+'|',`href`,args[i+1]);
        }
    }
    //my.addAs("哔哩哔哩","https://www.bilibili.com/","百度","https://www.baidu.com/")

    //标题防篡改
    fixTitle(){
        Object.defineProperty(document,"title",{
            writable:false
        })
    }
    
    //控制台防输出
    fixConsoleLog(){
        this.cl=console.log;
        console.log=()=>{};
        Object.defineProperty(console,"log",{
            writable:false
        })
    }
}