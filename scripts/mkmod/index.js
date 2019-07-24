#!/usr/bin/env node

/**
 * @fileoverview
 * Creates base files for a view with a provided name. 
 */

'use strict';

// Native deps
const fs = require('fs');

// Third party deps
const program = require('commander');
const colors = require('colors');

program
    .version('0.0.1')
    .option('-n --name <name>', 'The name of the view to make.')
    .option('-d --directory [dir]', 'Relative path to the directory in which to make the view.');

program.parse(process.argv);

if (program.name) console.log(program.name);
if (program.directory) console.log(program.directory);