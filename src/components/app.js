class App extends React.Component {
  constructor() {
    super();
    this.state = {
      bus : ''
    };
  }

  getResults() {
    var cb = function(results) {
      console.log(results)
    }
      axios
      .get("/getAll")
      .then(function(result) {    
        cb(result)
      })
      
}

  render() {
    return (
      <div> {
        this.getResults()
        }
        <h1>{this.state.bus}</h1>
      </div>
    )
  }
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;