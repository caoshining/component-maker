'use strict'

var path = require('path')

function writeIndex (dirPath, dirName, fs, cssType) {
  let str = `\
<template>
  <div class="${dirName}">
        ${dirName}组件
    </div>
</template>'
<script>
export default {
  name: '${dirName}'
  data(){
    return {
    }
  }
};
</script>
<script>
    export default{
      name: '${dirName}'
      data(){
        return {
          telphone:"tel:021 61266174",
        }
      }
    }
</script>
<style scoped lang='${cssType}' src='${dirName}.${cssType}'>
</style>
`
  str = new Buffer(str)
  fs.writeFile(path.join(dirName, 'index.vue'), str, catchErr)
}

function writeCss (dirPath, dirName, fs, cssType) {
  var str = '.container {\n  \n}'
  str = new Buffer(str)
  fs.writeFile(path.join(dirName, dirName + '.' + cssType), str, catchErr)
}

function catchErr (err) {
  if (err) {
    throw err
  }
}
module.exports = {
  writeIndex: writeIndex,
  writeCss: writeCss
}