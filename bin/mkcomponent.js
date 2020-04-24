#!/usr/bin/env node

'use strict'
const createReactComponent = require('../lib/createReactComponent')
const pak = require('../package.json')
const program = require('commander')

function parseVal(val) {
    return val.split(',')
}

function log(name, componentStatus, style, componentType) {
    console.log(`创建了 ${componentStatus}component ${name} with ${style} --${componentType}`)
}
// if use pure and scss or less both, it can find the right name
function getName(name, style) {
    const newName = typeof program.pure !== 'boolean' && program.pure ? name : program[style]
    return newName;
}
(function() {
    let usePureComponent = false
    let componentStatus = ''
    let style = 'css'
    let name
    let componentType = 'react'

    program
        .version(pak.version)
        .option('-t --type <value>', 'replace react to vue', parseVal)
        .option('-s --scss [names]', 'replace css to Scss', parseVal)
        .option('-l --less [names]', 'replace css to Less', parseVal)
        .option('-p --pure [names]', 'use pure component', parseVal)
        .parse(process.argv)
    if (process.argv.length < 3) program.help() // 处理不带参数的情况

    if (program.pure) {
        usePureComponent = true
        componentStatus = 'pure '
        name = program.pure
    }
    if (program.type) {
        componentType = program.type && program.type[0].toLocaleLowerCase() === 'vue' ? 'vue' : 'react'
    }
    if (program.scss) {
        style = 'scss'
        name = getName(name, style)
        log(name, componentStatus, style, componentType)
    } else if (program.less) {
        style = 'less'
        name = getName(name, style)
        log(name, componentStatus, style, componentType)
    } else {
        name = name || process
            .argv[2]
            .split(',')
        log(name, componentStatus, style, componentType)
    }
    createReactComponent(name, style, usePureComponent, componentType)

    console.log('创建完成!')
})()