#!/usr/bin/env node
const { num } = require('./foo')
console.log(`Hello this is jegwan cli ${process.platform}, from foo num=${num}`)
console.log(`env PORT = ${process.env.npm_package_config_port}`)
