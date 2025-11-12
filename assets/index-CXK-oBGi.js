(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const h="_keyboard__input_zu1w2_1",_="_input__ontop_zu1w2_12",p="_p__under_zu1w2_33",l={keyboard__input:h,input__ontop:_,p__under:p},b=()=>`
    <div class="${l.keyboard__input}" data-js-keyboard-input>
        <textarea class="${l.input__ontop}" data-js-keyboard-textarea></textarea>
        <p class="${l.p__under}" data-js-keyboard-p></p>
    </div>
    `,v="_keyboard__preview_12od5_1",m="_keyboard__previewRow_12od5_11",w="_key__space_12od5_35",a={keyboard__preview:v,keyboard__previewRow:m,key__space:w},k=()=>`
    <div class="${a.keyboard__preview}" data-js-keyboard-preview>
       <div class="${a.keyboard__previewRow}">
           <button class="key__q" value="q">
                <p>q</p>
            </button>
            <button class="key__w" value="w">
                <p>w</p>
            </button>
            <button class="key__e" value="e">
                <p>e</p>
            </button>
            <button class="key__r" value="r">
                <p>r</p>
            </button>
            <button class="key__t" value="t">
                <p>t</p>
            </button>
            <button class="key__y" value="y">
                <p>y</p>
            </button>
            <button class="key__u" value="u">
                <p>u</p>
            </button>
            <button class="key__i" value="i">
                <p>i</p>
            </button>
            <button class="key__o" value="o">
                <p>o</p>
            </button>
            <button class="key__p" value="p">
                <p>p</p>
            </button>
            <button class="key__leftbracket" value="[">
                <p>[</p>
            </button>
            <button class="key__rightbracket" value="]">
                <p>]</p>
            </button>
        </div>
        
        <div class="${a.keyboard__previewRow}">
            <button class="key__a" value="a">
                <p>a</p>
            </button>
            <button class="key__s" value="s">
                <p>s</p>
            </button>
            <button class="key__d" value="d">
                <p>d</p>
            </button>
            <button class="key__f" value="f">
                <p>f</p>
            </button>
            <button class="key__g" value="g">
                <p>g</p>
            </button>
            <button class="key__h" value="h">
                <p>h</p>
            </button>
            <button class="key__j" value="j">
                <p>j</p>
            </button>
            <button class="key__k" value="k">
                <p>k</p>
            </button>
            <button class="key__l" value="l">
                <p>l</p>
            </button>
            <button class="key__semicolon" value=";">
                <p>;</p>
            </button>
            <button class="key__apostrophe" value="'">
                <p>'</p>
            </button>
        </div>
        
        <div class="${a.keyboard__previewRow}">
            <button class="key__z" value="z">
                <p>z</p>
            </button>
            <button class="key__x" value="x">
                <p>x</p>
            </button>
            <button class="key__c" value="c">
                <p>c</p>
            </button>
            <button class="key__v" value="v">
                <p>v</p>
            </button>
            <button class="key__b" value="b">
                <p>b</p>
            </button>
            <button class="key__n" value="n">
                <p>n</p>
            </button>
            <button class="key__m" value="m">
                <p>m</p>
            </button>
            <button class="key__comma" value=",">
                <p>,</p>
            </button>
            <button class="key__period" value=".">
                <p>.</p>
            </button>
            <button class="key__slash" value="/">
                <p>/</p>
            </button>
        </div>
        
         <div class="${a.keyboard__previewRow}">
         <button class="${a.key__space}" value=" ">
                <p></p>
            </button>
         </div>
    </div>
    `,g="_startGame_ascgn_1",f="_startGameButton_ascgn_18",d={startGame:g,startGameButton:f},x=()=>`
    <div class="${d.startGame}" data-js-start-game>
        <p>Нажмите, чтобы начать.</p>
        <button class="${d.startGameButton}" data-js-start-game-button><p>Начать</p></button>
    </div>
    `;class T{selectors={textArea:"[data-js-keyboard-textarea]",startText:"[data-js-keyboard-p]",keyboardInput:"[data-js-keyboard-input]",keyboardPreview:"[data-js-keyboard-preview]",keyboardButton:"button",startGame:"[data-js-start-game]",startGameButton:"[data-js-start-game-button]",resultWindow:"[data-js-result-window]",tryAgainButton:"[data-js-try-again]",resultText:"[data-js-result-count]",timerBlock:"[data-js-timerBlock]",currentTime:"[data-js-current-time]",maxRating:"[data-js-max-rating]",originalText:["No one shall be subjected to arbitrary arrest, detention or exile. Everyone is entitled in full equality to a fair and public hearing by an independent and impartial tribunal, in the determination of his rights and obligations and of any criminal charge against him.","Every child has the right to education and protection, allowing them to grow in dignity, develop their abilities, and prepare for a responsible life in a free and just society where equality and respect are valued.","Every individual has the right to freedom of movement and residence within the borders of each state. Everyone may leave any country, including his own, and return to it without obstruction or unnecessary delay by any authority or institution.","Everyone has the right to own property alone as well as in association with others, and no one shall be deprived of their property arbitrarily or unlawfully, whether by state decision or by private interference, without fair and lawful compensation.","No person shall be held in slavery or servitude; slavery and the slave trade shall be prohibited in all their forms. Every human being has the right to liberty and personal security under the protection of law.","Everyone has the right to freedom of opinion and expression. This right includes freedom to hold opinions without interference and to seek, receive, and impart information and ideas through any media and regardless of frontiers or restrictions.","All people are equal before the law and are entitled without any discrimination to equal protection of the law. Everyone has the right to equal protection against any incitement to discrimination or violation of human dignity.","Every person has the right to work, to free choice of employment, to just and favorable conditions of labor, and to protection against unemployment, exploitation, or any form of discrimination in the workplace.","Men and women of full age, without any limitation due to race, nationality or religion, have the right to marry and to found a family. They are entitled to equal rights as to marriage, during marriage and at its dissolution.","Everyone has the right to an adequate standard of living for himself and his family, including food, clothing, housing, medical care and necessary social services, and to security in the event of unemployment, sickness or old age.","Every individual has the right to take part in the government of their country, directly or through freely chosen representatives. The will of the people shall be the basis of the authority of government, expressed in genuine elections held periodically."]};constructor(){this.textArea=document.querySelector(this.selectors.textArea),this.startText=document.querySelector(this.selectors.startText),this.keyboardButton=document.querySelectorAll(this.selectors.keyboardButton),this.keyboardInput=document.querySelector(this.selectors.keyboardInput),this.keyboardPreview=document.querySelector(this.selectors.keyboardPreview),this.startGame=document.querySelector(this.selectors.startGame),this.startGameButton=document.querySelector(this.selectors.startGameButton),this.tryAgainButton=document.querySelector(this.selectors.tryAgainButton),this.resultText=document.querySelector(this.selectors.resultText),this.result=document.querySelector(this.selectors.resultWindow),this.timerBlock=document.querySelector(this.selectors.timerBlock),this.currentTime=document.querySelector(this.selectors.currentTime),this.maxRating=document.querySelector(this.selectors.maxRating),this.generateNewText(),this.startTesting()}generateNewText(){this.randomText=this.selectors.originalText[Math.floor(Math.random()*this.selectors.originalText.length)],document.querySelector(this.selectors.startText).innerHTML=this.randomText,this.originalText=this.randomText}startTesting(){this.keyboardInput.style.filter="blur(0.2rem)",this.keyboardPreview.style.filter="blur(0.2rem)",this.timerBlock.style.filter="blur(0.2rem)",this.keyboardPreview.style.pointerEvents="none",this.keyboardInput.style.pointerEvents="none",this.result.style.display="none",window.localStorage.getItem("maxRating")===null?this.maxRating.innerHTML="У вас еще нет рейтинга (o_0)":this.maxRating.innerHTML=`Ваш максимальный рейтинг: ${window.localStorage.getItem("maxRating")}`,this.startGameButton.addEventListener("click",i=>{this.timer(),this.keyboardInput.style.filter="blur(0)",this.keyboardPreview.style.filter="blur(0)",this.timerBlock.style.filter="blur(0)",this.startGame.style.display="none",this.keyboardPreview.style.pointerEvents="auto",this.keyboardInput.style.pointerEvents="auto",this.textArea.focus(),this.whatTheButtonClicked(),this.isCorrectWord()})}resultWindow(i,s){if(this.pauseTimer(),this.timerBlock.style.visibility="hidden",isNaN(s)||s<this.selectors.originalText.length)this.resultText.textContent="К сожалению ты не справился, думаю стоит попробовать еще раз =)";else{let o=this.originalText.split(" ").length,e=Math.round((s-i)/s*100),t=Math.round(o/this.c*60),n=1-i/s,r=Math.round(t*(e/100)*n);window.localStorage.getItem("maxRating")>=r||window.localStorage.setItem("maxRating",`${r}`),this.resultText.innerHTML=`Кол-во ошибок: ${i}<br>
            Аккуратность: ${e}%<br>
            Затраченное время: ${this.currentTime.textContent}<br>
            Рейтинг: ${r}`}this.startTesting(),this.result.style.display="flex",this.tryAgainButton.addEventListener("click",o=>{this.timer(),this.generateNewText(),this.keyboardInput.style.filter="blur(0)",this.keyboardPreview.style.filter="blur(0)",this.timerBlock.style.filter="blur(0)",this.result.style.display="none",this.timerBlock.style.visibility="visible",this.keyboardPreview.style.pointerEvents="auto",this.keyboardInput.style.pointerEvents="auto",this.textArea.focus(),this.whatTheButtonClicked(),this.isCorrectWord()})}whatTheButtonClicked(){const i=[new Audio("/key__sounds/a.wav"),new Audio("/key__sounds/b.wav"),new Audio("/key__sounds/c.wav"),new Audio("/key__sounds/caps_lock.wav"),new Audio("/key__sounds/d.wav"),new Audio("/key__sounds/e.wav"),new Audio("/key__sounds/enter.wav"),new Audio("/key__sounds/f.wav"),new Audio("/key__sounds/g.wav"),new Audio("/key__sounds/h.wav"),new Audio("/key__sounds/i.wav"),new Audio("/key__sounds/j.wav"),new Audio("/key__sounds/k.wav"),new Audio("/key__sounds/l.wav"),new Audio("/key__sounds/m.wav"),new Audio("/key__sounds/n.wav"),new Audio("/key__sounds/o.wav"),new Audio("/key__sounds/p.wav"),new Audio("/key__sounds/q.wav"),new Audio("/key__sounds/r.wav"),new Audio("/key__sounds/s.wav"),new Audio("/key__sounds/shift.wav"),new Audio("/key__sounds/t.wav"),new Audio("/key__sounds/tab.wav"),new Audio("/key__sounds/u.wav"),new Audio("/key__sounds/v.wav"),new Audio("/key__sounds/w.wav"),new Audio("/key__sounds/x.wav"),new Audio("/key__sounds/y.wav"),new Audio("/key__sounds/z.wav")],s=new Audio("/key__sounds/space.wav");addEventListener("keydown",o=>{let e=Math.floor(Math.random()*i.length);(o.key==="Enter"||o.ctrlKey===!0)&&o.preventDefault(),o.key!==" "?i[e].play().catch():s.play().catch(),this.keyboardButton.forEach(t=>{o.key===t.value&&(t.style.backgroundColor="#4895ef",o.key!==" "?t.style.scale="0.92":t.style.scale="0.98")})}),addEventListener("keyup",o=>{this.keyboardButton.forEach(e=>{o.key===e.value&&setTimeout(()=>{e.style.backgroundColor="transparent",e.style.scale="1"},150)})})}timer(){this.timerId&&clearInterval(this.timerId),this.c=0,this.timerId=setInterval(()=>{this.c++,this.c<120?this.c<60?this.currentTime.innerHTML=`${this.c}s`:this.currentTime.innerHTML=`1m${this.c-60}s`:(this.resultWindow(),clearInterval(this.timerId))},1e3)}pauseTimer(){clearInterval(this.timerId)}isCorrectWord(i){const s=[];this.textArea.addEventListener("input",o=>{let e=this.originalText.split("");for(let t=0;t<this.textArea.value.length;t++)this.textArea.value.length<e.length&&this.result.style.display!=="flex"?this.textArea.value[t]!==this.originalText[t]&&this.originalText[t]!==" "&&this.textArea.value[t]!==" "?(e[t]=`<span style="color: #ef6c75">${this.textArea.value[t]}</span>`,s.includes(t)||s.push(t)):this.textArea.value[t]===this.originalText[t]?e[t]=`<span style="color: #4895ef">${this.startText.textContent[t]}</span>`:this.originalText[t]!==" "&&this.textArea.value[t]===" "?(e[t]=`<span style="color: #ef6c75">${this.originalText[t]}</span>`,s.includes(t)||s.push(t)):this.originalText[t]===" "&&this.textArea.value[t]!==" "&&(e[t]='<span style="color: #ef6c75">_</span>',s.includes(t)||s.push(t)):(this.resultWindow(s.length,this.textArea.value.length),this.textArea.value="");this.startText.innerHTML=e.join("")})}}const A="_resultWindow_1r7ub_1",$="_tryAgainButton_1r7ub_18",c={resultWindow:A,tryAgainButton:$},B=()=>`
    <div class="${c.resultWindow}" data-js-result-window>
        <p data-js-result-count></p>
        <button class="${c.tryAgainButton}" data-js-try-again><p>Попробовать снова</p></button>
    </div>
    `,j="_timer_zou83_1",q="_currentTimer_zou83_7",E="_maxRating_zou83_15",u={timer:j,currentTimer:q,maxRating:E},I=()=>`
    <div class="${u.timer}" data-js-timerBlock>
        <p class="${u.currentTimer}" data-js-current-time>0s</p>
        <p class="${u.maxRating}" data-js-max-rating>1</p>
    </div>
    `;document.querySelector(".typing-test-container").innerHTML=`
  ${x()}
  ${I()}
  ${b()}
  ${k()}
  ${B()}
`;new T;
