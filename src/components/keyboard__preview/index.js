import styles from './keyboard__preview.module.scss'

export default () =>
    `
    <div class="${styles.keyboard__preview}">
       <div class="${styles.keyboard__previewRow}">
           <button class="key__q">
                <p>q</p>
            </button>
            <button class="key__w">
                <p>w</p>
            </button>
            <button class="key__e">
                <p>e</p>
            </button>
            <button class="key__r">
                <p>r</p>
            </button>
            <button class="key__t">
                <p>t</p>
            </button>
            <button class="key__y">
                <p>y</p>
            </button>
            <button class="key__u">
                <p>u</p>
            </button>
            <button class="key__i">
                <p>i</p>
            </button>
            <button class="key__o">
                <p>o</p>
            </button>
            <button class="key__p">
                <p>p</p>
            </button>
            <button class="key__leftbracket">
                <p>[</p>
            </button>
            <button class="key__rightbracket">
                <p>]</p>
            </button>
        </div>
        
        <div class="${styles.keyboard__previewRow}">
            <button class="key__a">
                <p>a</p>
            </button>
            <button class="key__s">
                <p>s</p>
            </button>
            <button class="key__d">
                <p>d</p>
            </button>
            <button class="key__f">
                <p>f</p>
            </button>
            <button class="key__g">
                <p>g</p>
            </button>
            <button class="key__h">
                <p>h</p>
            </button>
            <button class="key__j">
                <p>j</p>
            </button>
            <button class="key__k">
                <p>k</p>
            </button>
            <button class="key__l">
                <p>l</p>
            </button>
            <button class="key__semicolon">
                <p>;</p>
            </button>
            <button class="key__apostrophe">
                <p>'</p>
            </button>
        </div>
        
        <div class="${styles.keyboard__previewRow}">
            <button class="key__z">
                <p>z</p>
            </button>
            <button class="key__x">
                <p>x</p>
            </button>
            <button class="key__c">
                <p>c</p>
            </button>
            <button class="key__v">
                <p>v</p>
            </button>
            <button class="key__b">
                <p>b</p>
            </button>
            <button class="key__n">
                <p>n</p>
            </button>
            <button class="key__m">
                <p>m</p>
            </button>
            <button class="key__comma">
                <p>,</p>
            </button>
            <button class="key__period">
                <p>.</p>
            </button>
            <button class="key__slash">
                <p>/</p>
            </button>
        </div>
        
         <div class="${styles.keyboard__previewRow}">
         <button class="${styles.key__space}">
                <p></p>
            </button>
         </div>
    </div>
    `
