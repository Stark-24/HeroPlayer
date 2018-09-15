import React from "react";

const barHighlight = {
  fill: "#ec008c",
  opacity: 1
};

const barStyle = {
  fill: "#bfbfbf",
  opacity: 1
};

const randomNum = () => {
  return Math.floor(Math.random() * 80) + 150;
}

class WaveBar extends React.Component {
  constructor(props) {
    super(props);
    this.mouseOverEffect = this.mouseOverEffect.bind(this);
    this.mouseOutEffect = this.mouseOutEffect.bind(this);
    this.state = {
      barClass: barStyle
    };
  }

  mouseOverEffect(e) {
    var currentClass4 = document.getElementsByClassName("cls-4");
    for (var j = 0; j < currentClass4.length; j++) {
      if (
        Number(currentClass4[j].id) <= Number(e.target.id)
      ) {
        currentClass4[j].style.fill = "#ef9356";
        e.target.style.fill = '#ef9356';
      }
    }
  }

  mouseOutEffect(e) {
    var currentClass4 = document.getElementsByClassName("cls-4");
    for(var i = 0; i < currentClass4.length; i++) {
      if(Number(currentClass4[i].id) <= Number(e.target.id)) {
        e.target.style.fill = "#bfbfbf";
        currentClass4[i].style.fill = "#bfbfbf"
      }
    }
  }

  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2317.386 166.99">
        <defs />
        <g
          id="Symbol_1_1"
          data-name="Symbol 1 – 1"
          transform="translate(-1556 -1112.909)"
          style={barStyle}
        >
          <g
            id="Group_1"
            data-name="Group 1"
            transform="translate(1556 1112.909)"
          >
            <g
              id="Rectangle_64"
              data-name="Rectangle 64"
              className="cls-2"
              transform="translate(0 53.146)"
            >
              <rect
                onMouseEnter={this.mouseOverEffect}
                onMouseOut={this.mouseOutEffect}
                className="cls-3"
                id="1"
                width="9"
                height= {randomNum()}
              />
              <rect
                onMouseEnter={this.mouseOverEffect}
                onMouseOut={this.mouseOutEffect}
                className="cls-4"
                id="1"
                x="0.5"
                y="0.5"
                width="8"
                height={randomNum()}
              />
            </g>
            <g
              id="Rectangle_65"
              data-name="Rectangle 65"
              className="cls-2"
              transform="translate(11 36.212)"
            >
              <rect
                onMouseEnter={this.mouseOverEffect}
                onMouseOut={this.mouseOutEffect}
                className="cls-3"
                id="2"
                width="9"
                height={randomNum()}
              />
              <rect
                onMouseEnter={this.mouseOverEffect}
                onMouseOut={this.mouseOutEffect}
                className="cls-4"
                id="2"
                x="0.5"
                y="0.5"
                width="8"
                height={randomNum()}
              />
            </g>
            <g
              id="Rectangle_66"
              data-name="Rectangle 66"
              className="cls-2"
              transform="translate(22 53.146)"
            >
              <rect
                onMouseEnter={this.mouseOverEffect}
                onMouseOut={this.mouseOutEffect}
                className="cls-3"
                id="3"
                width="9"
                height={randomNum()}
              />
              <rect
                onMouseEnter={this.mouseOverEffect}
                onMouseOut={this.mouseOutEffect}
                className="cls-4"
                id="3"
                x="0.5"
                y="0.5"
                width="8"
                height={randomNum()}
              />
            </g>
            <g
              id="Rectangle_67"
              data-name="Rectangle 67"
              className="cls-2"
              transform="translate(33 45.887)"
            >
              <rect
                onMouseEnter={this.mouseOverEffect}
                onMouseOut={this.mouseOutEffect}
                className="cls-3"
                id="4"
                width="9"
                height={randomNum()}
              />
              <rect
                onMouseEnter={this.mouseOverEffect}
                onMouseOut={this.mouseOutEffect}
                className="cls-4"
                id="4"
                x="0.5"
                y="0.5"
                width="8"
                height={randomNum()}
              />
            </g>
            <g
              id="Rectangle_68"
              data-name="Rectangle 68"
              className="cls-2"
              transform="translate(44 53.146)"
            >
              <rect
                onMouseEnter={this.mouseOverEffect}
                onMouseOut={this.mouseOutEffect}
                className="cls-3"
                id="5"
                width="9"
                height={randomNum()}
              />
              <rect
                onMouseEnter={this.mouseOverEffect}
                onMouseOut={this.mouseOutEffect}
                className="cls-4"
                id="5"
                x="0.5"
                y="0.5"
                width="8"
                height={randomNum()}
              />
            </g>
            <g
              id="Rectangle_69"
              data-name="Rectangle 69"
              className="cls-2"
              transform="translate(55 36.212)"
            >
              <rect
                onMouseEnter={this.mouseOverEffect}
                onMouseOut={this.mouseOutEffect}
                className="cls-3"
                id="6"
                width="9"
                height={randomNum()}
              />
              <rect
                onMouseEnter={this.mouseOverEffect}
                onMouseLeave={this.mouseOutEffect}
                className="cls-4"
                id="6"
                x="0.5"
                y="0.5"
                width="8"
                height={randomNum()}
              />
            </g>
            <g
              id="Rectangle_70"
              data-name="Rectangle 70"
              className="cls-2"
              transform="translate(66 53.146)"
            >
              <rect
                onMouseEnter={this.mouseOverEffect}
                onMouseLeave={this.mouseOutEffect}
                className="cls-3"
                id="7"
                width="9"
                height="243.844"
              />
              <rect
                onMouseEnter={this.mouseOverEffect}
                onMouseLeave={this.mouseOutEffect}
                className="cls-4"
                id="7"
                x="0.5"
                y="0.5"
                width="8"
                height="242.844"
              />
            </g>
            <g
              id="Rectangle_71"
              data-name="Rectangle 71"
              className="cls-2"
              transform="translate(77 45.887)"
            >
              <rect
                onMouseEnter={this.mouseOverEffect}
                onMouseLeave={this.mouseOutEffect}
                className="cls-3"
                id= '8'
                width="9"
                height="251.104"
              />
              <rect
                onMouseEnter={this.mouseOverEffect}
                onMouseLeave={this.mouseOutEffect}
                className="cls-4"
                id ='8'
                x="0.5"
                y="0.5"
                width="8"
                height="250.104"
              />
            </g>
            <g
              id="Rectangle_72"
              data-name="Rectangle 72"
              className="cls-2"
              transform="translate(88)"
              style={this.state}
            >
              <rect 
                className="cls-3" 
                id="9"
                width="9" height="296.99" />
              <rect
                onMouseEnter={this.mouseOverEffect}
                onMouseLeave={this.mouseOutEffect}
                className="cls-4"
                id='9'
                x="0.5"
                y="0.5"
                width="8"
                height="295.99"
              />
            </g>
            <g
              id="Rectangle_73"
              data-name="Rectangle 73"
              className="cls-2"
              transform="translate(99 19.285)"
            >
              <rect className="cls-3" width="9" height="277.705" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
                className="cls-4"
                id='10'
                x="0.5"
                y="0.5"
                width="8"
                height={randomNum()}
              />
            </g>
            <g
              id="Rectangle_74"
              data-name="Rectangle 74"
              className="cls-2"
              transform="translate(110 11.018)"
            >
              <rect className="cls-3" width="9" height="285.972" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
                className="cls-4"
                id= '11'
                x="0.5"
                y="0.5"
                width="8"
                height="284.972"
              />
            </g>
            <g
              id="Rectangle_75"
              data-name="Rectangle 75"
              className="cls-2"
              transform="translate(121 19.285)"
            >
              <rect className="cls-3" width="9" height="277.705" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id = '12'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height={randomNum()}
              />
            </g>
            <g
              id="Rectangle_76"
              data-name="Rectangle 76"
              className="cls-2"
              transform="translate(132)"
            >
              <rect className="cls-3" width="9" height="296.99" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id= '13'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="295.99"
              />
            </g>
            <g
              id="Rectangle_77"
              data-name="Rectangle 77"
              className="cls-2"
              transform="translate(143 19.285)"
            >
              <rect className="cls-3" width="9" height="277.705" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='14'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="276.705"
              />
            </g>
            <g
              id="Rectangle_78"
              data-name="Rectangle 78"
              className="cls-2"
              transform="translate(154 11.018)"
            >
              <rect className="cls-3" width="9" height="285.972" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='15'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="284.972"
              />
            </g>
          </g>
          <g
            id="Group_2"
            data-name="Group 2"
            transform="translate(1721 1112.909)"
          >
            <g
              id="Rectangle_64-2"
              data-name="Rectangle 64"
              className="cls-2"
              transform="translate(0 53.146)"
            >
              <rect className="cls-3" width="9" height="243.844" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='16'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="242.844"
              />
            </g>
            <g
              id="Rectangle_65-2"
              data-name="Rectangle 65"
              className="cls-2"
              transform="translate(11 36.212)"
            >
              <rect className="cls-3" width="9" height="260.778" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='17'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="259.778"
              />
            </g>
            <g
              id="Rectangle_66-2"
              data-name="Rectangle 66"
              className="cls-2"
              transform="translate(22 53.146)"
            >
              <rect className="cls-3" width="9" height="243.844" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='18'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="242.844"
              />
            </g>
            <g
              id="Rectangle_67-2"
              data-name="Rectangle 67"
              className="cls-2"
              transform="translate(33 45.887)"
            >
              <rect className="cls-3" width="9" height="251.104" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='19'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="250.104"
              />
            </g>
            <g
              id="Rectangle_68-2"
              data-name="Rectangle 68"
              className="cls-2"
              transform="translate(44 53.146)"
            >
              <rect className="cls-3" width="9" height="243.844" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='20'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="242.844"
              />
            </g>
            <g
              id="Rectangle_69-2"
              data-name="Rectangle 69"
              className="cls-2"
              transform="translate(55 36.212)"
            >
              <rect className="cls-3" width="9" height="260.778" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='21'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="259.778"
              />
            </g>
            <g
              id="Rectangle_70-2"
              data-name="Rectangle 70"
              className="cls-2"
              transform="translate(66 53.146)"
            >
              <rect className="cls-3" width="9" height="243.844" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='22'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="242.844"
              />
            </g>
            <g
              id="Rectangle_71-2"
              data-name="Rectangle 71"
              className="cls-2"
              transform="translate(77 45.887)"
            >
              <rect className="cls-3" width="9" height="251.104" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='23'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="250.104"
              />
            </g>
            <g
              id="Rectangle_72-2"
              data-name="Rectangle 72"
              className="cls-2"
              transform="translate(88)"
            >
              <rect className="cls-3" width="9" height="296.99" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='24'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="295.99"
              />
            </g>
            <g
              id="Rectangle_73-2"
              data-name="Rectangle 73"
              className="cls-2"
              transform="translate(99 19.285)"
            >
              <rect className="cls-3" width="9" height="277.705" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='25'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="276.705"
              />
            </g>
            <g
              id="Rectangle_74-2"
              data-name="Rectangle 74"
              className="cls-2"
              transform="translate(110 11.018)"
            >
              <rect className="cls-3" width="9" height="285.972" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='26'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="284.972"
              />
            </g>
            <g
              id="Rectangle_75-2"
              data-name="Rectangle 75"
              className="cls-2"
              transform="translate(121 19.285)"
            >
              <rect className="cls-3" width="9" height="277.705" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='27'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="276.705"
              />
            </g>
            <g
              id="Rectangle_76-2"
              data-name="Rectangle 76"
              className="cls-2"
              transform="translate(132)"
            >
              <rect className="cls-3" width="9" height="296.99" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='28'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="295.99"
              />
            </g>
            <g
              id="Rectangle_77-2"
              data-name="Rectangle 77"
              className="cls-2"
              transform="translate(143 19.285)"
            >
              <rect className="cls-3" width="9" height="277.705" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='29'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="276.705"
              />
            </g>
            <g
              id="Rectangle_78-2"
              data-name="Rectangle 78"
              className="cls-2"
              transform="translate(154 11.018)"
            >
              <rect className="cls-3" width="9" height="285.972" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='30'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="284.972"
              />
            </g>
          </g>
          <g
            id="Group_3"
            data-name="Group 3"
            transform="translate(1886 1227.25)"
          >
            <g
              id="Rectangle_64-3"
              data-name="Rectangle 64"
              className="cls-2"
              transform="translate(0 32.685)"
            >
              <rect className="cls-3" width="9" height="149.964" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='31'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="148.964"
              />
            </g>
            <g
              id="Rectangle_65-3"
              data-name="Rectangle 65"
              className="cls-2"
              transform="translate(11 22.27)"
            >
              <rect className="cls-3" width="9" height="160.378" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='32'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="159.378"
              />
            </g>
            <g
              id="Rectangle_66-3"
              data-name="Rectangle 66"
              className="cls-2"
              transform="translate(22 32.685)"
            >
              <rect className="cls-3" width="9" height="149.964" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='33'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="148.964"
              />
            </g>
            <g
              id="Rectangle_67-3"
              data-name="Rectangle 67"
              className="cls-2"
              transform="translate(33 28.22)"
            >
              <rect className="cls-3" width="9" height="154.428" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='34'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="153.428"
              />
            </g>
            <g
              id="Rectangle_68-3"
              data-name="Rectangle 68"
              className="cls-2"
              transform="translate(44 32.685)"
            >
              <rect className="cls-3" width="9" height="149.964" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='35'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="148.964"
              />
            </g>
            <g
              id="Rectangle_69-3"
              data-name="Rectangle 69"
              className="cls-2"
              transform="translate(55 22.27)"
            >
              <rect className="cls-3" width="9" height="160.378" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='36'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="159.378"
              />
            </g>
            <g
              id="Rectangle_70-3"
              data-name="Rectangle 70"
              className="cls-2"
              transform="translate(66 32.685)"
            >
              <rect className="cls-3" width="9" height="149.964" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='37'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="148.964"
              />
            </g>
            <g
              id="Rectangle_71-3"
              data-name="Rectangle 71"
              className="cls-2"
              transform="translate(77 28.22)"
            >
              <rect className="cls-3" width="9" height="154.428" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='38'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="153.428"
              />
            </g>
            <g
              id="Rectangle_72-3"
              data-name="Rectangle 72"
              className="cls-2"
              transform="translate(88)"
            >
              <rect className="cls-3" width="9" height="182.649" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='39'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="181.649"
              />
            </g>
            <g
              id="Rectangle_73-3"
              data-name="Rectangle 73"
              className="cls-2"
              transform="translate(99 11.86)"
            >
              <rect className="cls-3" width="9" height="170.788" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='40'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="169.788"
              />
            </g>
            <g
              id="Rectangle_74-3"
              data-name="Rectangle 74"
              className="cls-2"
              transform="translate(110 6.776)"
            >
              <rect className="cls-3" width="9" height="175.873" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='41'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="174.873"
              />
            </g>
            <g
              id="Rectangle_75-3"
              data-name="Rectangle 75"
              className="cls-2"
              transform="translate(121 11.86)"
            >
              <rect className="cls-3" width="9" height="170.788" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='42'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="169.788"
              />
            </g>
            <g
              id="Rectangle_76-3"
              data-name="Rectangle 76"
              className="cls-2"
              transform="translate(132)"
            >
              <rect className="cls-3" width="9" height="182.649" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='43'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="181.649"
              />
            </g>
            <g
              id="Rectangle_77-3"
              data-name="Rectangle 77"
              className="cls-2"
              transform="translate(143 11.86)"
            >
              <rect className="cls-3" width="9" height="170.788" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='44'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="169.788"
              />
            </g>
            <g
              id="Rectangle_78-3"
              data-name="Rectangle 78"
              className="cls-2"
              transform="translate(154 6.776)"
            >
              <rect className="cls-3" width="9" height="175.873" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='45'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="174.873"
              />
            </g>
          </g>
          <g
            id="Group_4"
            data-name="Group 4"
            transform="translate(2051 1112.909)"
          >
            <g
            
              id="Rectangle_64-4"
              data-name="Rectangle 64"
              className="cls-2"
              transform="translate(0 53.146)"
            >
              <rect className="cls-3" width="9" height="243.844" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='46'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="242.844"
              />
            </g>
            <g
              id="Rectangle_65-4"
              data-name="Rectangle 65"
              className="cls-2"
              transform="translate(11 36.212)"
            >
              <rect className="cls-3" width="9" height="260.778" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='47'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="259.778"
              />
            </g>
            <g
              id="Rectangle_66-4"
              data-name="Rectangle 66"
              className="cls-2"
              transform="translate(22 53.146)"
            >
              <rect className="cls-3" width="9" height="243.844" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='48'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="242.844"
              />
            </g>
            <g
              id="Rectangle_67-4"
              data-name="Rectangle 67"
              className="cls-2"
              transform="translate(33 45.887)"
            >
              <rect className="cls-3" width="9" height="251.104" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='49'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="250.104"
              />
            </g>
            <g
              id="Rectangle_68-4"
              data-name="Rectangle 68"
              className="cls-2"
              transform="translate(44 53.146)"
            >
              <rect className="cls-3" width="9" height="243.844" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='50'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="242.844"
              />
            </g>
            <g
              id="Rectangle_69-4"
              data-name="Rectangle 69"
              className="cls-2"
              transform="translate(55 36.212)"
            >
              <rect className="cls-3" width="9" height="260.778" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='51'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="259.778"
              />
            </g>
            <g
              id="Rectangle_70-4"
              data-name="Rectangle 70"
              className="cls-2"
              transform="translate(66 53.146)"
            >
              <rect className="cls-3" width="9" height="243.844" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='52'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="242.844"
              />
            </g>
            <g
              id="Rectangle_71-4"
              data-name="Rectangle 71"
              className="cls-2"
              transform="translate(77 45.887)"
            >
              <rect className="cls-3" width="9" height="251.104" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='53'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="250.104"
              />
            </g>
            <g
              id="Rectangle_72-4"
              data-name="Rectangle 72"
              className="cls-2"
              transform="translate(88)"
            >
              <rect className="cls-3" width="9" height="296.99" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='54'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="295.99"
              />
            </g>
            <g
              id="Rectangle_73-4"
              data-name="Rectangle 73"
              className="cls-2"
              transform="translate(99 19.285)"
            >
              <rect className="cls-3" width="9" height="277.705" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='55'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="276.705"
              />
            </g>
            <g
              id="Rectangle_74-4"
              data-name="Rectangle 74"
              className="cls-2"
              transform="translate(110 11.018)"
            >
              <rect className="cls-3" width="9" height="285.972" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='56'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="284.972"
              />
            </g>
            <g
              id="Rectangle_75-4"
              data-name="Rectangle 75"
              className="cls-2"
              transform="translate(121 19.285)"
            >
              <rect className="cls-3" width="9" height="277.705" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='57'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="276.705"
              />
            </g>
            <g
              id="Rectangle_76-4"
              data-name="Rectangle 76"
              className="cls-2"
              transform="translate(132)"
            >
              <rect className="cls-3" width="9" height="296.99" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='58'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="295.99"
              />
            </g>
            <g
              id="Rectangle_77-4"
              data-name="Rectangle 77"
              className="cls-2"
              transform="translate(143 19.285)"
            >
              <rect className="cls-3" width="9" height="277.705" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='59'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="276.705"
              />
            </g>
            <g
              id="Rectangle_78-4"
              data-name="Rectangle 78"
              className="cls-2"
              transform="translate(154 11.018)"
            >
              <rect className="cls-3" width="9" height="285.972" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='60'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="284.972"
              />
            </g>
          </g>
          <g
            id="Group_5"
            data-name="Group 5"
            transform="translate(2216 1112.909)"
          >
            <g
              id="Rectangle_64-5"
              data-name="Rectangle 64"
              className="cls-2"
              transform="translate(0 53.146)"
            >
              <rect className="cls-3" width="9" height="243.844" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='61'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="242.844"
              />
            </g>
            <g
              id="Rectangle_65-5"
              data-name="Rectangle 65"
              className="cls-2"
              transform="translate(11 36.212)"
            >
              <rect className="cls-3" width="9" height="260.778" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='62'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="259.778"
              />
            </g>
            <g
              id="Rectangle_66-5"
              data-name="Rectangle 66"
              className="cls-2"
              transform="translate(22 53.146)"
            >
              <rect className="cls-3" width="9" height="243.844" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='63'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="242.844"
              />
            </g>
            <g
              id="Rectangle_67-5"
              data-name="Rectangle 67"
              className="cls-2"
              transform="translate(33 45.887)"
            >
              <rect className="cls-3" width="9" height="251.104" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='64'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="250.104"
              />
            </g>
            <g
              id="Rectangle_68-5"
              data-name="Rectangle 68"
              className="cls-2"
              transform="translate(44 53.146)"
            >
              <rect className="cls-3" width="9" height="243.844" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='66'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="242.844"
              />
            </g>
            <g
              id="Rectangle_69-5"
              data-name="Rectangle 69"
              className="cls-2"
              transform="translate(55 36.212)"
            >
              <rect className="cls-3" width="9" height="260.778" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='67'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="259.778"
              />
            </g>
            <g
              id="Rectangle_70-5"
              data-name="Rectangle 70"
              className="cls-2"
              transform="translate(66 53.146)"
            >
              <rect className="cls-3" width="9" height="243.844" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='68'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="242.844"
              />
            </g>
            <g
              id="Rectangle_71-5"
              data-name="Rectangle 71"
              className="cls-2"
              transform="translate(77 45.887)"
            >
              <rect className="cls-3" width="9" height="251.104" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='69'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="250.104"
              />
            </g>
            <g
              id="Rectangle_72-5"
              data-name="Rectangle 72"
              className="cls-2"
              transform="translate(88)"
            >
              <rect className="cls-3" width="9" height="296.99" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='70'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="295.99"
              />
            </g>
            <g
              id="Rectangle_73-5"
              data-name="Rectangle 73"
              className="cls-2"
              transform="translate(99 19.285)"
            >
              <rect className="cls-3" width="9" height="277.705" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='71'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="276.705"
              />
            </g>
            <g
              id="Rectangle_74-5"
              data-name="Rectangle 74"
              className="cls-2"
              transform="translate(110 11.018)"
            >
              <rect className="cls-3" width="9" height="285.972" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='72'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="284.972"
              />
            </g>
            <g
              id="Rectangle_75-5"
              data-name="Rectangle 75"
              className="cls-2"
              transform="translate(121 19.285)"
            >
              <rect className="cls-3" width="9" height="277.705" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='73'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="276.705"
              />
            </g>
            <g
              id="Rectangle_76-5"
              data-name="Rectangle 76"
              className="cls-2"
              transform="translate(132)"
            >
              <rect className="cls-3" width="9" height="296.99" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='74'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="295.99"
              />
            </g>
            <g
              id="Rectangle_77-5"
              data-name="Rectangle 77"
              className="cls-2"
              transform="translate(143 19.285)"
            >
              <rect className="cls-3" width="9" height="277.705" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='75'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="276.705"
              />
            </g>
            <g
              id="Rectangle_78-5"
              data-name="Rectangle 78"
              className="cls-2"
              transform="translate(154 11.018)"
            >
              <rect className="cls-3" width="9" height="285.972" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='76'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="284.972"
              />
            </g>
          </g>
          <g
            id="Group_6"
            data-name="Group 6"
            transform="translate(2381 1112.909)"
          >
            <g
              id="Rectangle_64-6"
              data-name="Rectangle 64"
              className="cls-2"
              transform="translate(0 53.146)"
            >
              <rect className="cls-3" width="9" height="243.844" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='77'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="242.844"
              />
            </g>
            <g
              id="Rectangle_65-6"
              data-name="Rectangle 65"
              className="cls-2"
              transform="translate(11 36.212)"
            >
              <rect className="cls-3" width="9" height="260.778" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='78'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="259.778"
              />
            </g>
            <g
              id="Rectangle_66-6"
              data-name="Rectangle 66"
              className="cls-2"
              transform="translate(22 53.146)"
            >
              <rect className="cls-3" width="9" height="243.844" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='79'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="242.844"
              />
            </g>
            <g
              id="Rectangle_67-6"
              data-name="Rectangle 67"
              className="cls-2"
              transform="translate(33 45.887)"
            >
              <rect className="cls-3" width="9" height="251.104" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='80'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="250.104"
              />
            </g>
            <g
              id="Rectangle_68-6"
              data-name="Rectangle 68"
              className="cls-2"
              transform="translate(44 53.146)"
            >
              <rect className="cls-3" width="9" height="243.844" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='81'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="242.844"
              />
            </g>
            <g
              id="Rectangle_69-6"
              data-name="Rectangle 69"
              className="cls-2"
              transform="translate(55 36.212)"
            >
              <rect className="cls-3" width="9" height="260.778" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='82'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="259.778"
              />
            </g>
            <g
              id="Rectangle_70-6"
              data-name="Rectangle 70"
              className="cls-2"
              transform="translate(66 53.146)"
            >
              <rect className="cls-3" width="9" height="243.844" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='83'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="242.844"
              />
            </g>
            <g
              id="Rectangle_71-6"
              data-name="Rectangle 71"
              className="cls-2"
              transform="translate(77 45.887)"
            >
              <rect className="cls-3" width="9" height="251.104" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='84'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="250.104"
              />
            </g>
            <g
              id="Rectangle_72-6"
              data-name="Rectangle 72"
              className="cls-2"
              transform="translate(88)"
            >
              <rect className="cls-3" width="9" height="296.99" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='85'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="295.99"
              />
            </g>
            <g
              id="Rectangle_73-6"
              data-name="Rectangle 73"
              className="cls-2"
              transform="translate(99 19.285)"
            >
              <rect className="cls-3" width="9" height="277.705" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='86'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="276.705"
              />
            </g>
            <g
              id="Rectangle_74-6"
              data-name="Rectangle 74"
              className="cls-2"
              transform="translate(110 11.018)"
            >
              <rect className="cls-3" width="9" height="285.972" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='87'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="284.972"
              />
            </g>
            <g
              id="Rectangle_75-6"
              data-name="Rectangle 75"
              className="cls-2"
              transform="translate(121 19.285)"
            >
              <rect className="cls-3" width="9" height="277.705" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='88'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="276.705"
              />
            </g>
            <g
              id="Rectangle_76-6"
              data-name="Rectangle 76"
              className="cls-2"
              transform="translate(132)"
            >
              <rect className="cls-3" width="9" height="296.99" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='89'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="295.99"
              />
            </g>
            <g
              id="Rectangle_77-6"
              data-name="Rectangle 77"
              className="cls-2"
              transform="translate(143 19.285)"
            >
              <rect className="cls-3" width="9" height="277.705" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='90'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="276.705"
              />
            </g>
            <g
              id="Rectangle_78-6"
              data-name="Rectangle 78"
              className="cls-2"
              transform="translate(154 11.018)"
            >
              <rect className="cls-3" width="9" height="285.972" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='91'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="284.972"
              />
            </g>
          </g>
          <g
            id="Group_7"
            data-name="Group 7"
            transform="translate(2546 1183.171)"
          >
            <g
              id="Rectangle_64-7"
              data-name="Rectangle 64"
              className="cls-2"
              transform="translate(0 40.572)"
            >
              <rect className="cls-3" width="9" height="186.155" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='92'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="185.155"
              />
            </g>
            <g
              id="Rectangle_65-7"
              data-name="Rectangle 65"
              className="cls-2"
              transform="translate(11 27.645)"
            >
              <rect className="cls-3" width="9" height="199.083" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='93'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="198.083"
              />
            </g>
            <g
              id="Rectangle_66-7"
              data-name="Rectangle 66"
              className="cls-2"
              transform="translate(22 40.572)"
            >
              <rect className="cls-3" width="9" height="186.155" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='94'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="185.155"
              />
            </g>
            <g
              id="Rectangle_67-7"
              data-name="Rectangle 67"
              className="cls-2"
              transform="translate(33 35.031)"
            >
              <rect className="cls-3" width="9" height="191.697" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='95'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="190.697"
              />
            </g>
            <g
              id="Rectangle_68-7"
              data-name="Rectangle 68"
              className="cls-2"
              transform="translate(44 40.572)"
            >
              <rect className="cls-3" width="9" height="186.155" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='96'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="185.155"
              />
            </g>
            <g
              id="Rectangle_69-7"
              data-name="Rectangle 69"
              className="cls-2"
              transform="translate(55 27.645)"
            >
              <rect className="cls-3" width="9" height="199.083" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='97'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="198.083"
              />
            </g>
            <g
              id="Rectangle_70-7"
              data-name="Rectangle 70"
              className="cls-2"
              transform="translate(66 40.572)"
            >
              <rect className="cls-3" width="9" height="186.155" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='98'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="185.155"
              />
            </g>
            <g
              id="Rectangle_71-7"
              data-name="Rectangle 71"
              className="cls-2"
              transform="translate(77 35.031)"
            >
              <rect className="cls-3" width="9" height="191.697" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='99'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="190.697"
              />
            </g>
            <g
              id="Rectangle_72-7"
              data-name="Rectangle 72"
              className="cls-2"
              transform="translate(88)"
            >
              <rect className="cls-3" width="9" height="226.728" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='100'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="225.728"
              />
            </g>
            <g
              id="Rectangle_73-7"
              data-name="Rectangle 73"
              className="cls-2"
              transform="translate(99 14.723)"
            >
              <rect className="cls-3" width="9" height="212.005" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='101'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="211.005"
              />
            </g>
            <g
              id="Rectangle_74-7"
              data-name="Rectangle 74"
              className="cls-2"
              transform="translate(110 8.411)"
            >
              <rect className="cls-3" width="9" height="218.316" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='102'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="217.316"
              />
            </g>
            <g
              id="Rectangle_75-7"
              data-name="Rectangle 75"
              className="cls-2"
              transform="translate(121 14.723)"
            >
              <rect className="cls-3" width="9" height="212.005" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='103'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="211.005"
              />
            </g>
            <g
              id="Rectangle_76-7"
              data-name="Rectangle 76"
              className="cls-2"
              transform="translate(132)"
            >
              <rect className="cls-3" width="9" height="226.728" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='104'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="225.728"
              />
            </g>
            <g
              id="Rectangle_77-7"
              data-name="Rectangle 77"
              className="cls-2"
              transform="translate(143 14.723)"
            >
              <rect className="cls-3" width="9" height="212.005" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='105'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="211.005"
              />
            </g>
            <g
              id="Rectangle_78-7"
              data-name="Rectangle 78"
              className="cls-2"
              transform="translate(154 8.411)"
            >
              <rect className="cls-3" width="9" height="218.316" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='106'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="217.316"
              />
            </g>
          </g>
          <g
            id="Group_8"
            data-name="Group 8"
            transform="translate(2711 1112.909)"
          >
            <g
              id="Rectangle_64-8"
              data-name="Rectangle 64"
              className="cls-2"
              transform="translate(0 53.146)"
            >
              <rect className="cls-3" width="9" height="243.844" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='107'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="242.844"
              />
            </g>
            <g
              id="Rectangle_65-8"
              data-name="Rectangle 65"
              className="cls-2"
              transform="translate(11 36.212)"
            >
              <rect className="cls-3" width="9" height="260.778" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='108'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="259.778"
              />
            </g>
            <g
              id="Rectangle_66-8"
              data-name="Rectangle 66"
              className="cls-2"
              transform="translate(22 53.146)"
            >
              <rect className="cls-3" width="9" height="243.844" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='109'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="242.844"
              />
            </g>
            <g
              id="Rectangle_67-8"
              data-name="Rectangle 67"
              className="cls-2"
              transform="translate(33 45.887)"
            >
              <rect className="cls-3" width="9" height="251.104" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='110'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="250.104"
              />
            </g>
            <g
              id="Rectangle_68-8"
              data-name="Rectangle 68"
              className="cls-2"
              transform="translate(44 53.146)"
            >
              <rect className="cls-3" width="9" height="243.844" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='111'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="242.844"
              />
            </g>
            <g
              id="Rectangle_69-8"
              data-name="Rectangle 69"
              className="cls-2"
              transform="translate(55 36.212)"
            >
              <rect className="cls-3" width="9" height="260.778" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='112'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="259.778"
              />
            </g>
            <g
              id="Rectangle_70-8"
              data-name="Rectangle 70"
              className="cls-2"
              transform="translate(66 53.146)"
            >
              <rect className="cls-3" width="9" height="243.844" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='113'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="242.844"
              />
            </g>
            <g
              id="Rectangle_71-8"
              data-name="Rectangle 71"
              className="cls-2"
              transform="translate(77 45.887)"
            >
              <rect className="cls-3" width="9" height="251.104" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='114'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="250.104"
              />
            </g>
            <g
              id="Rectangle_72-8"
              data-name="Rectangle 72"
              className="cls-2"
              transform="translate(88)"
            >
              <rect className="cls-3" width="9" height="296.99" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='115'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="295.99"
              />
            </g>
            <g
              id="Rectangle_73-8"
              data-name="Rectangle 73"
              className="cls-2"
              transform="translate(99 19.285)"
            >
              <rect className="cls-3" width="9" height="277.705" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='116'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="276.705"
              />
            </g>
            <g
              id="Rectangle_74-8"
              data-name="Rectangle 74"
              className="cls-2"
              transform="translate(110 11.018)"
            >
              <rect className="cls-3" width="9" height="285.972" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='117'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="284.972"
              />
            </g>
            <g
              id="Rectangle_75-8"
              data-name="Rectangle 75"
              className="cls-2"
              transform="translate(121 19.285)"
            >
              <rect className="cls-3" width="9" height="277.705" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='118'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="276.705"
              />
            </g>
            <g
              id="Rectangle_76-8"
              data-name="Rectangle 76"
              className="cls-2"
              transform="translate(132)"
            >
              <rect className="cls-3" width="9" height="296.99" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='119'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="295.99"
              />
            </g>
            <g
              id="Rectangle_77-8"
              data-name="Rectangle 77"
              className="cls-2"
              transform="translate(143 19.285)"
            >
              <rect className="cls-3" width="9" height="277.705" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='120'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="276.705"
              />
            </g>
            <g
              id="Rectangle_78-8"
              data-name="Rectangle 78"
              className="cls-2"
              transform="translate(154 11.018)"
            >
              <rect className="cls-3" width="9" height="285.972" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='121'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="284.972"
              />
            </g>
          </g>
          <g
            id="Group_9"
            data-name="Group 9"
            transform="translate(2878 1261.404)"
          >
            <g
              id="Rectangle_64-9"
              data-name="Rectangle 64"
              className="cls-2"
              transform="translate(0 26.573)"
            >
              <rect className="cls-3" width="9" height="121.922" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='122'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="120.922"
              />
            </g>
            <g
              id="Rectangle_65-9"
              data-name="Rectangle 65"
              className="cls-2"
              transform="translate(11 18.106)"
            >
              <rect className="cls-3" width="9" height="130.389" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='123'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="129.389"
              />
            </g>
            <g
              id="Rectangle_66-9"
              data-name="Rectangle 66"
              className="cls-2"
              transform="translate(22 26.573)"
            >
              <rect className="cls-3" width="9" height="121.922" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='124'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="120.922"
              />
            </g>
            <g
              id="Rectangle_67-9"
              data-name="Rectangle 67"
              className="cls-2"
              transform="translate(33 22.943)"
            >
              <rect className="cls-3" width="9" height="125.552" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='125'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="124.552"
              />
            </g>
            <g
              id="Rectangle_68-9"
              data-name="Rectangle 68"
              className="cls-2"
              transform="translate(44 26.573)"
            >
              <rect className="cls-3" width="9" height="121.922" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='126'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="120.922"
              />
            </g>
            <g
              id="Rectangle_69-9"
              data-name="Rectangle 69"
              className="cls-2"
              transform="translate(55 18.106)"
            >
              <rect className="cls-3" width="9" height="130.389" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='127'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="129.389"
              />
            </g>
            <g
              id="Rectangle_70-9"
              data-name="Rectangle 70"
              className="cls-2"
              transform="translate(66 26.573)"
            >
              <rect className="cls-3" width="9" height="121.922" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='128'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="120.922"
              />
            </g>
            <g
              id="Rectangle_71-9"
              data-name="Rectangle 71"
              className="cls-2"
              transform="translate(77 22.943)"
            >
              <rect className="cls-3" width="9" height="125.552" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='129'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="124.552"
              />
            </g>
            <g
              id="Rectangle_72-9"
              data-name="Rectangle 72"
              className="cls-2"
              transform="translate(88)"
            >
              <rect className="cls-3" width="9" height="148.495" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='130'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="147.495"
              />
            </g>
            <g
              id="Rectangle_73-9"
              data-name="Rectangle 73"
              className="cls-2"
              transform="translate(99 9.643)"
            >
              <rect className="cls-3" width="9" height="138.853" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='131'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="137.853"
              />
            </g>
            <g
              id="Rectangle_74-9"
              data-name="Rectangle 74"
              className="cls-2"
              transform="translate(110 5.509)"
            >
              <rect className="cls-3" width="9" height="142.986" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='132'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="141.986"
              />
            </g>
            <g
              id="Rectangle_75-9"
              data-name="Rectangle 75"
              className="cls-2"
              transform="translate(121 9.643)"
            >
              <rect className="cls-3" width="9" height="138.853" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='133'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="137.853"
              />
            </g>
            <g
              id="Rectangle_76-9"
              data-name="Rectangle 76"
              className="cls-2"
              transform="translate(132)"
            >
              <rect className="cls-3" width="9" height="148.495" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='134'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="147.495"
              />
            </g>
            <g
              id="Rectangle_77-9"
              data-name="Rectangle 77"
              className="cls-2"
              transform="translate(143 9.643)"
            >
              <rect className="cls-3" width="9" height="138.853" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='135'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="137.853"
              />
            </g>
            <g
              id="Rectangle_78-9"
              data-name="Rectangle 78"
              className="cls-2"
              transform="translate(154 5.509)"
            >
              <rect className="cls-3" width="9" height="142.986" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='136'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="141.986"
              />
            </g>
          </g>
          <g
            id="Group_10"
            data-name="Group 10"
            transform="translate(3041 1112.909)"
          >
            <g
              id="Rectangle_64-10"
              data-name="Rectangle 64"
              className="cls-2"
              transform="translate(0 53.146)"
            >
              <rect className="cls-3" width="9" height="243.844" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='137'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="242.844"
              />
            </g>
            <g
              id="Rectangle_65-10"
              data-name="Rectangle 65"
              className="cls-2"
              transform="translate(11 36.212)"
            >
              <rect className="cls-3" width="9" height="260.778" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='138'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="259.778"
              />
            </g>
            <g
              id="Rectangle_66-10"
              data-name="Rectangle 66"
              className="cls-2"
              transform="translate(22 53.146)"
            >
              <rect className="cls-3" width="9" height="243.844" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='139'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="242.844"
              />
            </g>
            <g
              id="Rectangle_67-10"
              data-name="Rectangle 67"
              className="cls-2"
              transform="translate(33 45.887)"
            >
              <rect className="cls-3" width="9" height="251.104" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='140'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="250.104"
              />
            </g>
            <g
              id="Rectangle_68-10"
              data-name="Rectangle 68"
              className="cls-2"
              transform="translate(44 53.146)"
            >
              <rect className="cls-3" width="9" height="243.844" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='141'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="242.844"
              />
            </g>
            <g
              id="Rectangle_69-10"
              data-name="Rectangle 69"
              className="cls-2"
              transform="translate(55 36.212)"
            >
              <rect className="cls-3" width="9" height="260.778" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='142'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="259.778"
              />
            </g>
            <g
              id="Rectangle_70-10"
              data-name="Rectangle 70"
              className="cls-2"
              transform="translate(66 53.146)"
            >
              <rect className="cls-3" width="9" height="243.844" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='143'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="242.844"
              />
            </g>
            <g
              id="Rectangle_71-10"
              data-name="Rectangle 71"
              className="cls-2"
              transform="translate(77 45.887)"
            >
              <rect className="cls-3" width="9" height="251.104" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='144'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="250.104"
              />
            </g>
            <g
              id="Rectangle_72-10"
              data-name="Rectangle 72"
              className="cls-2"
              transform="translate(88)"
            >
              <rect className="cls-3" width="9" height="296.99" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='145'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="295.99"
              />
            </g>
            <g
              id="Rectangle_73-10"
              data-name="Rectangle 73"
              className="cls-2"
              transform="translate(99 19.285)"
            >
              <rect className="cls-3" width="9" height="277.705" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='146'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="276.705"
              />
            </g>
            <g
              id="Rectangle_74-10"
              data-name="Rectangle 74"
              className="cls-2"
              transform="translate(110 11.018)"
            >
              <rect className="cls-3" width="9" height="285.972" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='147'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="284.972"
              />
            </g>
            <g
              id="Rectangle_75-10"
              data-name="Rectangle 75"
              className="cls-2"
              transform="translate(121 19.285)"
            >
              <rect className="cls-3" width="9" height="277.705" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='148'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="276.705"
              />
            </g>
            <g
              id="Rectangle_76-10"
              data-name="Rectangle 76"
              className="cls-2"
              transform="translate(132)"
            >
              <rect className="cls-3" width="9" height="296.99" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='150'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="295.99"
              />
            </g>
            <g
              id="Rectangle_77-10"
              data-name="Rectangle 77"
              className="cls-2"
              transform="translate(143 19.285)"
            >
              <rect className="cls-3" width="9" height="277.705" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='151'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="276.705"
              />
            </g>
            <g
              id="Rectangle_78-10"
              data-name="Rectangle 78"
              className="cls-2"
              transform="translate(154 11.018)"
            >
              <rect className="cls-3" width="9" height="285.972" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='152'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="284.972"
              />
            </g>
          </g>
          <g
            id="Group_11"
            data-name="Group 11"
            transform="translate(3206 1112.909)"
          >
            <g
              id="Rectangle_64-11"
              data-name="Rectangle 64"
              className="cls-2"
              transform="translate(0 53.146)"
            >
              <rect className="cls-3" width="9" height="243.844" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='153'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="242.844"
              />
            </g>
            <g
              id="Rectangle_65-11"
              data-name="Rectangle 65"
              className="cls-2"
              transform="translate(11 36.212)"
            >
              <rect className="cls-3" width="9" height="260.778" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='154'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="259.778"
              />
            </g>
            <g
              id="Rectangle_66-11"
              data-name="Rectangle 66"
              className="cls-2"
              transform="translate(22 53.146)"
            >
              <rect className="cls-3" width="9" height="243.844" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='155'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="242.844"
              />
            </g>
            <g
              id="Rectangle_67-11"
              data-name="Rectangle 67"
              className="cls-2"
              transform="translate(33 45.887)"
            >
              <rect className="cls-3" width="9" height="251.104" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='156'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="250.104"
              />
            </g>
            <g
              id="Rectangle_68-11"
              data-name="Rectangle 68"
              className="cls-2"
              transform="translate(44 53.146)"
            >
              <rect className="cls-3" width="9" height="243.844" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='157'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="242.844"
              />
            </g>
            <g
              id="Rectangle_69-11"
              data-name="Rectangle 69"
              className="cls-2"
              transform="translate(55 36.212)"
            >
              <rect className="cls-3" width="9" height="260.778" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='158'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="259.778"
              />
            </g>
            <g
              id="Rectangle_70-11"
              data-name="Rectangle 70"
              className="cls-2"
              transform="translate(66 53.146)"
            >
              <rect className="cls-3" width="9" height="243.844" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='159'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="242.844"
              />
            </g>
            <g
              id="Rectangle_71-11"
              data-name="Rectangle 71"
              className="cls-2"
              transform="translate(77 45.887)"
            >
              <rect className="cls-3" width="9" height="251.104" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='160'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="250.104"
              />
            </g>
            <g
              id="Rectangle_72-11"
              data-name="Rectangle 72"
              className="cls-2"
              transform="translate(88)"
            >
              <rect className="cls-3" width="9" height="296.99" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='161'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="295.99"
              />
            </g>
            <g
              id="Rectangle_73-11"
              data-name="Rectangle 73"
              className="cls-2"
              transform="translate(99 19.285)"
            >
              <rect className="cls-3" width="9" height="277.705" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='162'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="276.705"
              />
            </g>
            <g
              id="Rectangle_74-11"
              data-name="Rectangle 74"
              className="cls-2"
              transform="translate(110 11.018)"
            >
              <rect className="cls-3" width="9" height="285.972" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='163'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="284.972"
              />
            </g>
            <g
              id="Rectangle_75-11"
              data-name="Rectangle 75"
              className="cls-2"
              transform="translate(121 19.285)"
            >
              <rect className="cls-3" width="9" height="277.705" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='164'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="276.705"
              />
            </g>
            <g
              id="Rectangle_76-11"
              data-name="Rectangle 76"
              className="cls-2"
              transform="translate(132)"
            >
              <rect className="cls-3" width="9" height="296.99" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='165'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="295.99"
              />
            </g>
            <g
              id="Rectangle_77-11"
              data-name="Rectangle 77"
              className="cls-2"
              transform="translate(143 19.285)"
            >
              <rect className="cls-3" width="9" height="277.705" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='166'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="276.705"
              />
            </g>
            <g
              id="Rectangle_78-11"
              data-name="Rectangle 78"
              className="cls-2"
              transform="translate(154 11.018)"
            >
              <rect className="cls-3" width="9" height="285.972" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='167'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="284.972"
              />
            </g>
          </g>
          <g
            id="Group_12"
            data-name="Group 12"
            transform="translate(3371 1112.909)"
          >
            <g
              id="Rectangle_64-12"
              data-name="Rectangle 64"
              className="cls-2"
              transform="translate(0 53.146)"
            >
              <rect className="cls-3" width="9" height="243.844" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='168'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="242.844"
              />
            </g>
            <g
              id="Rectangle_65-12"
              data-name="Rectangle 65"
              className="cls-2"
              transform="translate(11 36.212)"
            >
              <rect className="cls-3" width="9" height="260.778" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='169'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="259.778"
              />
            </g>
            <g
              id="Rectangle_66-12"
              data-name="Rectangle 66"
              className="cls-2"
              transform="translate(22 53.146)"
            >
              <rect className="cls-3" width="9" height="243.844" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='170'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="242.844"
              />
            </g>
            <g
              id="Rectangle_67-12"
              data-name="Rectangle 67"
              className="cls-2"
              transform="translate(33 45.887)"
            >
              <rect className="cls-3" width="9" height="251.104" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='171'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="250.104"
              />
            </g>
            <g
              id="Rectangle_68-12"
              data-name="Rectangle 68"
              className="cls-2"
              transform="translate(44 53.146)"
            >
              <rect className="cls-3" width="9" height="243.844" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='172'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="242.844"
              />
            </g>
            <g
              id="Rectangle_69-12"
              data-name="Rectangle 69"
              className="cls-2"
              transform="translate(55 36.212)"
            >
              <rect className="cls-3" width="9" height="260.778" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='173'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="259.778"
              />
            </g>
            <g
              id="Rectangle_70-12"
              data-name="Rectangle 70"
              className="cls-2"
              transform="translate(66 53.146)"
            >
              <rect className="cls-3" width="9" height="243.844" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='174'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="242.844"
              />
            </g>
            <g
              id="Rectangle_71-12"
              data-name="Rectangle 71"
              className="cls-2"
              transform="translate(77 45.887)"
            >
              <rect className="cls-3" width="9" height="251.104" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='175'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="250.104"
              />
            </g>
            <g
              id="Rectangle_72-12"
              data-name="Rectangle 72"
              className="cls-2"
              transform="translate(88)"
            >
              <rect className="cls-3" width="9" height="296.99" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='176'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="295.99"
              />
            </g>
            <g
              id="Rectangle_73-12"
              data-name="Rectangle 73"
              className="cls-2"
              transform="translate(99 19.285)"
            >
              <rect className="cls-3" width="9" height="277.705" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='177'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="276.705"
              />
            </g>
            <g
              id="Rectangle_74-12"
              data-name="Rectangle 74"
              className="cls-2"
              transform="translate(110 11.018)"
            >
              <rect className="cls-3" width="9" height="285.972" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='178'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="284.972"
              />
            </g>
            <g
              id="Rectangle_75-12"
              data-name="Rectangle 75"
              className="cls-2"
              transform="translate(121 19.285)"
            >
              <rect className="cls-3" width="9" height="277.705" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='179'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="276.705"
              />
            </g>
            <g
              id="Rectangle_76-12"
              data-name="Rectangle 76"
              className="cls-2"
              transform="translate(132)"
            >
              <rect className="cls-3" width="9" height="296.99" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='180'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="295.99"
              />
            </g>
            <g
              id="Rectangle_77-12"
              data-name="Rectangle 77"
              className="cls-2"
              transform="translate(143 19.285)"
            >
              <rect className="cls-3" width="9" height="277.705" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='181'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="276.705"
              />
            </g>
            <g
              id="Rectangle_78-12"
              data-name="Rectangle 78"
              className="cls-2"
              transform="translate(154 11.018)"
            >
              <rect className="cls-3" width="9" height="285.972" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='182'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="284.972"
              />
            </g>
          </g>
          <g
            id="Group_13"
            data-name="Group 13"
            transform="translate(3536 1310.675)"
          >
            <g
              id="Rectangle_64-13"
              data-name="Rectangle 64"
              className="cls-2"
              transform="translate(0 17.756)"
            >
              <rect className="cls-3" width="9" height="81.468" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='183'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="80.468"
              />
            </g>
            <g
              id="Rectangle_65-13"
              data-name="Rectangle 65"
              className="cls-2"
              transform="translate(11 12.098)"
            >
              <rect className="cls-3" width="9" height="87.126" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='184'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="86.126"
              />
            </g>
            <g
              id="Rectangle_66-13"
              data-name="Rectangle 66"
              className="cls-2"
              transform="translate(22 17.756)"
            >
              <rect className="cls-3" width="9" height="81.468" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='185'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="80.468"
              />
            </g>
            <g
              id="Rectangle_67-13"
              data-name="Rectangle 67"
              className="cls-2"
              transform="translate(33 15.331)"
            >
              <rect className="cls-3" width="9" height="83.894" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='186'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="82.894"
              />
            </g>
            <g
              id="Rectangle_68-13"
              data-name="Rectangle 68"
              className="cls-2"
              transform="translate(44 17.756)"
            >
              <rect className="cls-3" width="9" height="81.468" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='187'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="80.468"
              />
            </g>
            <g
              id="Rectangle_69-13"
              data-name="Rectangle 69"
              className="cls-2"
              transform="translate(55 12.098)"
            >
              <rect className="cls-3" width="9" height="87.126" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='188'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="86.126"
              />
            </g>
            <g
              id="Rectangle_70-13"
              data-name="Rectangle 70"
              className="cls-2"
              transform="translate(66 17.756)"
            >
              <rect className="cls-3" width="9" height="81.468" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='189'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="80.468"
              />
            </g>
            <g
              id="Rectangle_71-13"
              data-name="Rectangle 71"
              className="cls-2"
              transform="translate(77 15.331)"
            >
              <rect className="cls-3" width="9" height="83.894" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='190'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="82.894"
              />
            </g>
            <g
              id="Rectangle_72-13"
              data-name="Rectangle 72"
              className="cls-2"
              transform="translate(88)"
            >
              <rect className="cls-3" width="9" height="99.224" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='191'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="98.224"
              />
            </g>
            <g
              id="Rectangle_73-13"
              data-name="Rectangle 73"
              className="cls-2"
              transform="translate(99 6.443)"
            >
              <rect className="cls-3" width="9" height="92.781" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='192'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="91.781"
              />
            </g>
            <g
              id="Rectangle_74-13"
              data-name="Rectangle 74"
              className="cls-2"
              transform="translate(110 3.681)"
            >
              <rect className="cls-3" width="9" height="95.543" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='193'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="94.543"
              />
            </g>
            <g
              id="Rectangle_75-13"
              data-name="Rectangle 75"
              className="cls-2"
              transform="translate(121 6.443)"
            >
              <rect className="cls-3" width="9" height="92.781" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='194'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="91.781"
              />
            </g>
            <g
              id="Rectangle_76-13"
              data-name="Rectangle 76"
              className="cls-2"
              transform="translate(132)"
            >
              <rect className="cls-3" width="9" height="99.224" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='195'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="98.224"
              />
            </g>
            <g
              id="Rectangle_77-13"
              data-name="Rectangle 77"
              className="cls-2"
              transform="translate(143 6.443)"
            >
              <rect className="cls-3" width="9" height="92.781" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='196'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="91.781"
              />
            </g>
            <g
              id="Rectangle_78-13"
              data-name="Rectangle 78"
              className="cls-2"
              transform="translate(154 3.681)"
            >
              <rect className="cls-3" width="9" height="95.543" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='197'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8"
                height="94.543"
              />
            </g>
          </g>
          <g
            id="Group_14"
            data-name="Group 14"
            transform="translate(3701 1112.909)"
          >
            <g
              id="Rectangle_64-14"
              data-name="Rectangle 64"
              className="cls-2"
              transform="translate(0 53.146)"
            >
              <rect className="cls-3" width="9.518" height="243.844" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='198'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8.518"
                height="242.844"
              />
            </g>
            <g
              id="Rectangle_65-14"
              data-name="Rectangle 65"
              className="cls-2"
              transform="translate(11.633 36.212)"
            >
              <rect className="cls-3" width="9.518" height="260.778" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='199'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8.518"
                height="259.778"
              />
            </g>
            <g
              id="Rectangle_66-14"
              data-name="Rectangle 66"
              className="cls-2"
              transform="translate(23.267 53.146)"
            >
              <rect className="cls-3" width="9.518" height="243.844" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='200'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8.518"
                height="242.844"
              />
            </g>
            <g
              id="Rectangle_67-14"
              data-name="Rectangle 67"
              className="cls-2"
              transform="translate(34.9 45.887)"
            >
              <rect className="cls-3" width="9.518" height="251.104" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='201'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8.518"
                height="250.104"
              />
            </g>
            <g
              id="Rectangle_68-14"
              data-name="Rectangle 68"
              className="cls-2"
              transform="translate(46.534 53.146)"
            >
              <rect className="cls-3" width="9.518" height="243.844" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='202'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8.518"
                height="242.844"
              />
            </g>
            <g
              id="Rectangle_69-14"
              data-name="Rectangle 69"
              className="cls-2"
              transform="translate(58.167 36.212)"
            >
              <rect className="cls-3" width="9.518" height="260.778" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='203'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8.518"
                height="259.778"
              />
            </g>
            <g
              id="Rectangle_70-14"
              data-name="Rectangle 70"
              className="cls-2"
              transform="translate(69.801 53.146)"
            >
              <rect className="cls-3" width="9.518" height="243.844" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='204'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8.518"
                height="242.844"
              />
            </g>
            <g
              id="Rectangle_71-14"
              data-name="Rectangle 71"
              className="cls-2"
              transform="translate(81.434 45.887)"
            >
              <rect className="cls-3" width="9.518" height="251.104" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='205'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8.518"
                height="250.104"
              />
            </g>
            <g
              id="Rectangle_72-14"
              data-name="Rectangle 72"
              className="cls-2"
              transform="translate(93.068)"
            >
              <rect className="cls-3" width="9.518" height="296.99" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='206'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8.518"
                height="295.99"
              />
            </g>
            <g
              id="Rectangle_73-14"
              data-name="Rectangle 73"
              className="cls-2"
              transform="translate(104.701 19.285)"
            >
              <rect className="cls-3" width="9.518" height="277.705" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='207'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8.518"
                height="276.705"
              />
            </g>
            <g
              id="Rectangle_74-14"
              data-name="Rectangle 74"
              className="cls-2"
              transform="translate(116.334 11.018)"
            >
              <rect className="cls-3" width="9.518" height="285.972" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='208'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8.518"
                height="284.972"
              />
            </g>
            <g
              id="Rectangle_75-14"
              data-name="Rectangle 75"
              className="cls-2"
              transform="translate(127.968 19.285)"
            >
              <rect className="cls-3" width="9.518" height="277.705" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='209'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8.518"
                height="276.705"
              />
            </g>
            <g
              id="Rectangle_76-14"
              data-name="Rectangle 76"
              className="cls-2"
              transform="translate(139.601)"
            >
              <rect className="cls-3" width="9.518" height="296.99" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='210'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8.518"
                height="295.99"
              />
            </g>
            <g
              id="Rectangle_77-14"
              data-name="Rectangle 77"
              className="cls-2"
              transform="translate(151.235 19.285)"
            >
              <rect className="cls-3" width="9.518" height="277.705" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='211'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8.518"
                height="276.705"
              />
            </g>
            <g
              id="Rectangle_78-14"
              data-name="Rectangle 78"
              className="cls-2"
              transform="translate(162.868 11.018)"
            >
              <rect className="cls-3" width="9.518" height="285.972" />
              <rect
              onMouseEnter={this.mouseOverEffect}
              onMouseLeave={this.mouseOutEffect}
              id='212'
                className="cls-4"
                x="0.5"
                y="0.5"
                width="8.518"
                height="284.972"
              />
            </g>
          </g>
        </g>
      </svg>
    );
  }
}

export default WaveBar;
