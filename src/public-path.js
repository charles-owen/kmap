/**
 * Set the Webpack public path so it knows where to load
 * CSS and images relative to. This must be imported before any other
 * imports.
 */

function getScriptDir() {
    const re = /^.*\/\/[^\/]+(\/.*\/)[^\/]+.js$/;
    const result = document.currentScript.src.match(re);
    if(result !== null) {
        return result[1];
    }

    return '';
}

__webpack_public_path__ = getScriptDir();
