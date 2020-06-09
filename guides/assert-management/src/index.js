import _ from 'lodash';
import printMe from './print.js';

// function component() {
//   var element = document.createElement('div');
//  var btn = document.createElement('button');

//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//  btn.innerHTML = 'Click me and check the console!';
//  btn.onclick = printMe;

//  element.appendChild(btn);

//   return element;
// }

// document.body.appendChild(component());


import {
  cube
} from './math.js';

function component() {
  var element = document.createElement('pre');

  // lodash 是由当前 script 脚本 import 导入进来的
  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n');

  return element;
}

document.body.appendChild(component());


if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('Accepting the updated printMe module!');
    printMe();
  })
}