import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { shallow, mount } from 'enzyme';

import Header from '../components/Header';

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "localhost:3000/speed"
  })
}));

describe('Header Component', () => {
  it('Header contain a span node', () => {
    const header = shallow(<Header />);
    expect(header.find('span')).toHaveLength(1);
  })

  // mount 
  // Этот метод отображает полный DOM, включая дочерние компоненты родительского компонента, в котором мы выполняем тесты.

  // shallow 
  // Этот метод отображает только родительский компонент без дочерних. Это позволяет нам тестировать компоненты изолированно.

  // Здесь mount, shallow не будет работать
  it('Header contain html', () => {
    const header = mount(
      <Router>
        <Header />
      </Router>
    );
    
    const renderedHtml = '<header><span class="categories"><a href="/">Categories</a></span>localhost:3000/speed</header>'

    expect(header.html()).toEqual(renderedHtml);
    // expect(header.find('a')).toHaveLength(1);
  })

})