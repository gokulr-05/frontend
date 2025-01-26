const headingElement=React.createElement("h1",{id:"heading id", xyz:"bla bla"},"Hello World using React!");
const rootElement=ReactDOM.createRoot(document.getElementById("root"));
console.log(headingElement);
rootElement.render(headingElement);