var exports = typeof exports == 'object' ? exports : {};
var React = typeof React == 'object' ? React : require('react');

function MyButton(props) {
  [click, setClick] = React.useState(0);

  function handleClick() {
    setClick(click + 1);
  }

  return /*#__PURE__*/React.createElement("button", {
    onClick: handleClick
  }, "Clicked: ", click);
}

exports.MyButton = MyButton;