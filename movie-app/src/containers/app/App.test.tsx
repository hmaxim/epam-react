// import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   // const { getByText } = render(<App />);
//   // const linkElement = getByText(/learn react/i);
//   // expect(linkElement).toBeInTheDocument();
// });

import React from "react";
import { shallow } from "enzyme";


describe("Hello, Enzyme!", () => {
  it("renders", () => {
    const wrapper = shallow(
      <div>
        <h1>Hello, Enzyme!</h1>
      </div>
    );
    expect(wrapper.find("h1").html()).toMatch(/Hello, Enzyme/);
  });

  // it("renders snapshots, too", () => {
  //   const wrapper = shallow(
  //     <div>
  //       <h1>Hello, Enzyme!</h1>
  //     </div>
  //   );
  //   expect(wrapper).toMatchSnapshot();
  // });
});
