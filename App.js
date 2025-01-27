/* <div id="parent">
<div id="child">
    <h1>heading 1</h1>
    <h2>heading 2</h2>
</div>
</div> */

const headingElement = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement(
    'div',
    { id: 'child' },
    React.createElement('h1', {}, 'Heading 1'),
  ),
);
const rootElement = ReactDOM.createRoot(document.getElementById('root'));
console.log(headingElement);
rootElement.render(headingElement);
