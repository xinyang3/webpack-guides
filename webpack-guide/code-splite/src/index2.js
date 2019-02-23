 import join from 'lodash/join';

 function getComponent() {
   var element = document.createElement('div');

   // Lodash, now imported by this script
   element.innerHTML = join(['Hello', 'webpack'], ' ');
   return import(/* webpackChunkName: "lodash" */ 'lodash/join').then(({ default: join }) => {
     var element = document.createElement('div');

     element.innerHTML = join(['Hello', 'webpack'], ' ');

     return element;

   }).catch(error => 'An error occurred while loading the component');
  }

 getComponent().then(component => {
   document.body.appendChild(component);
 })