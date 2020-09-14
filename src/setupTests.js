// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// import '@testing-library/jest-dom/extend-expect';
// eslint-disable-next-line
//import toJson from 'enzyme-to-json'
// import raf from './tempPolyfills.js';
import { 
  configure, 
  shallow, 
  render, 
  mount 
} from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

// React 16 Enzyme adapter
configure({ adapter: new Adapter() });

global.shallow = shallow;
global.render = render;
global.mount = mount;
//global.toJson = toJson

//Fail tests on any warning
console.error = message => {
  throw new Error(message);
}
