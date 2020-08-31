import createComponent from './tools/create-component';

const Speed = createComponent(
  localStorage.getItem('selectOne') ||'miph', 
  localStorage.getItem('selectTwo') || 'kmph');

export default Speed;
