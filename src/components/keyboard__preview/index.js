import styles from './keyboard__preview.module.scss'

export default () =>
    `
    <div class="${styles.keyboard__preview}">
       <div class="${styles.keyboard__previewRow}">
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
        
        <div class="${styles.keyboard__previewRow}">
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
        
        <div class="${styles.keyboard__previewRow}">
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
        
         <div class="${styles.keyboard__previewRow}">
         <button class="${styles.key__space}" value=" ">
                <p></p>
            </button>
         </div>
    </div>
    `
