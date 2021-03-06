
var React = require('react');
var Color = require('color');
var HslSliders = require('react-hsl-sliders');

module.exports = React.createClass({

  handleForegroundChange: function(e) {
    this.props.setForeground(e.target.value);
  },

  handleBackgroundChange: function(e) {
    this.props.setBackground(e.target.value);
  },

  render: function() {
    var foreground = this.props.foreground;
    var background = this.props.background;
    try {
      var light = Color(background).light();
    } catch(e) {
      var light = true;
    }
    var style = {
      color: light ? '#111' : '#fff'
    };
    var inputClass = 'block full-width ';
    inputClass += light ? 'field-light' : 'field-dark';
    return (
      <div className="sm-flex flex-center mxn2" style={style}>
        <div className="sm-col-6 px2">
          <label className="h5 bold">Foreground</label>
          <input type="text"
            value={foreground}
            onChange={this.handleForegroundChange}
            className={inputClass} />
          <HslSliders
            value={foreground}
            onChange={this.props.setForeground} />
        </div>
        <div className="sm-col-6 px2">
          <label className="h5 bold">Background</label>
          <input type="text"
            value={background}
            onChange={this.handleBackgroundChange}
            className={inputClass} />
          <HslSliders
            value={background}
            onChange={this.props.setBackground} />
        </div>
      </div>
    )
  }

});

