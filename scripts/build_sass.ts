import sass from 'sass';
import path from 'path';
import fs from 'fs';
import chalk from 'chalk';

const newLinesAndWhitespace = /[\r\n\s]+/g;
const comments = /\/\*(.|[\r\n])*?\*\//g;

const compiled = sass.compile(
    path.resolve(__dirname, '..', 'src', 'scss', 'app.scss'));

const withoutComments = compiled.css.replace(comments, '');
const minified = withoutComments.replace(newLinesAndWhitespace, '');

fs.mkdir(
  path.resolve(__dirname, '..', 'public', 'assets', 'css'),
  { recursive: true },
  err => {
    if (err) throw(err);
  }
);

fs.writeFile(
  path.resolve(__dirname, '..', 'public', 'assets', 'css', 'app.css'),
  minified,
  err => {
    if (err) throw(err);
    console.log(chalk.green('SASS build complete!'));
  }
);

