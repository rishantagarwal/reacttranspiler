import React from 'react';


class App extends React.Component {

  constructor(){
    super();
    this.state = {
      input: "Enter your JSX here",
      output: "Your transpiled Code",
    }

    this.update = this.update.bind(this);
  }

  update(e){
    let code = e.target.value;
    try{
      this.setState({
        output:babel.transform(code,{
          stage: 0,
          loose: 'all'
        }).code

      })
    }
    catch(err){
      this.setState({
        output: err.message
      })
    }
  }

  render() {
    return (
      <div>
        <header>
          Babel Transpiler
        </header>
        <div className = "container">
          <textarea
            onChange={this.update}
            defaultValue={this.state.input}
            >
          </textarea>
          <pre>{this.state.output}</pre>
        </div>
      </div>
    )
  }
}

export default App
