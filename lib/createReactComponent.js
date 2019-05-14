'use strict';

var fs = require('fs');
var path = require('path');
var _require = require('./writeFile.js'),
    writeCss = _require.writeCss,
    writeIndex = _require.writeIndex,
    writeJsx = _require.writeJsx;
var _requireVue = require('./writeFileVue.js'),
    writeVueCss = _requireVue.writeCss,
    writeVueIndex = _requireVue.writeIndex;
module.exports = function createReactComponent(dirNames, cssType, usePureComponent, componentType) {
    console.log(dirNames,'dirNames')
    switch (dirNames.length) {
        case 0:
            throw Error('请输入组件名称');
        case 1:
            createOne(dirNames[0], cssType, usePureComponent, componentType);
            break;
        default:
            createMulti(dirNames, cssType, usePureComponent, componentType);
            break;
    }
};

function createOne(dirName, cssType, usePureComponent,componentType) {
    var dirPath = path.join(dirName);
    if(componentType&&componentType=='react'){
        createFiles(dirPath, dirName, cssType, usePureComponent);
    }else if(componentType=='vue'){
        console.log('vue')
        createVueFiles(dirPath, dirName, cssType, usePureComponent);
    }
}

function createMulti(dirNames, cssType, usePureComponent,componentType) {
    dirNames&&dirNames.length>0&&dirNames.forEach(function (ele) {
        var dirPath = path.join(ele);
        createOne(dirPath, ele, cssType, usePureComponent);
    });
}
// React 
function createFiles(dirPath, dirName, cssType, usePureComponent) {
    fs.mkdirSync(dirPath);
    writeIndex(dirPath, dirName, fs);
    writeJsx(dirPath, dirName, fs, cssType, usePureComponent);
    writeCss(dirPath, dirName, fs, cssType);
}
// Vue 
function createVueFiles(dirPath, dirName, cssType, usePureComponent) {
    fs.mkdirSync(dirPath);
    console.log(cssType)
    writeVueIndex(dirPath, dirName, fs, cssType);
    // writeJsx(dirPath, dirName, fs, cssType, usePureComponent);
    writeVueCss(dirPath, dirName, fs, cssType);
}