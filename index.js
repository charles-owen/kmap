// The public-path module must be imported first!
// import './src/public-path.js';
//
import './src/polyfills/all';
import './src/kmap.scss';
import {Ready} from './src/Kmap/Utility/Ready';
import {Kmap} from './src/Kmap/Kmap';
export {Kmap as default};

// Automatically install into div.kmap-cl-install, where the text
// contents of the tag are JSON to configure Kmap
Ready.go(() => {
    const elements = document.querySelectorAll('div.kmap-cl-install');
    for(let i=0; i<elements.length; i++) {
        let element = elements[i];
        element.classList.remove('kmap-cl-install');
        const json = element.textContent;
        element.innerHTML = '';
        const kmap = new Kmap(element, json);
        kmap.startNow();
        element.style.display = 'block';
    }
});