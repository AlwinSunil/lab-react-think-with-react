class ReactContainer extends React.Component {
  // JSX tags
  render() {
    return (
      <div>
        Hello! Welcome to Kalvium
        <div>This is babel</div>
      </div>
    );
  }
}

const container = document.getElementById("react-container");
// Direclty pass the component to render
ReactDOM.render(<ReactContainer />, container);
