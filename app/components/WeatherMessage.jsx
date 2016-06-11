var React = require('react')

// var WeatherMessage = React.createClass ({
//   render: function() {
//     return (
//       <h3> It is {this.props.temp} in {this.props.location}</h3>
//     )
//   }
// });

var WeatherMessage = ({temp, location}) => {
  return (
    <h3> It is {temp} in {location}</h3>
  );
};

module.exports = WeatherMessage;
