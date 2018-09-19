// import chai from 'chai'
// chai.expect();

//this.state updating?
//is get request fetching?
//does the bar change color when time updates?
//does the component play songs? pause songs? plays songs when clicked on the progress bar?
//does the component generate comments for the songs?
//does the album art pop up when clicked on?
//are users and tags interactive?
//does the background dynamically change?
const React = require('react/addons');
const TestUtils = React.addons.TestUtils;
//client side

describe('HeroPlayer', () => {
    const HeroPlayer = require('../client/Components/HeroPlayer.jsx');
    var renderedTree = TestUtils.renderIntoDocument(<HeroPlayer />);

})
// describe('HeroPlayer', function() {
//     var {
//         Simulate,
//         renderIntoDocument
//     } = React.addons.TestUtils;

//     var app;

//     beforeEach(function() {
//         app = renderIntoDocument(
//             <HeroPlayer />
//         )
//     });

//     it('should update the state each time the page gets refreshed', function() {
//         // expect().to.be.true
//     });
//     it('should have a audio file', function() {
//         expect(document.getElementById('song')).to.exist;
//     })
// });

// //server side
// describe('ServerSide', function() {
//     it('should render a new song each time the page is refreshed', function() {
//         // expect().to.be.true
//     });
// })

// //db side
//     //does the db get updated?
