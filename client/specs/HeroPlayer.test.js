import React, {Component} from 'react';
import { shallow } from "enzyme";
import {expect} from "chai";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import HeroPlayer from "../Components/HeroPlayer.jsx"
import PlayButton from "../Components/PlayButton.jsx"
//import App from "../App.jsx"


Enzyme.configure({ adapter: new Adapter() });

describe("HeroPlayer", () => {
  // beforeEach(() => {
  //   const component = 
  // })
  it("renders the HeroPlayer", () => {
    const wrapper = shallow(<HeroPlayer />);
    expect(wrapper.find(PlayButton)).to.have.lengthOf(1);

  });
});
