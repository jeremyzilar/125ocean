

// App
var App = React.createClass( {
  loadScriptFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        // console.log(data.feed.entry);
        this.setState({data: data.feed.entry});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadScriptFromServer();
    setInterval(this.loadScriptFromServer, this.props.pollInterval);
  },
  render: function() {
    // console.log(this.state.data);
    return (
      <div className="requestForm">
        <h1>Report an Issue</h1>
        <RequestForm data={this.state.data}/>
      </div>
    );
  }
});

// Request Form
var RequestForm = React.createClass({
  render: function() {
    // console.log('RequestForm');
    // console.log(this.state.data);
    return (
      <form id="RequestForm" action="https://docs.google.com/a/125ocean.org/forms/d/1v99Bv9d3SXDnEqf6cpDvarePHBqC_Bl2DypNrYI9sRg/formResponse" method="POST" target="_self" onsubmit="">
        
        <Select label="Apt #" name="entry.2099144889" id="entry_2099144889" />

        <Input type="text" label="Full Name" name="entry.1268545078" placeholder="" id="entry_1268545078" />
        <Input type="email" label="E-mail" name="entry.1368288206" placeholder="" id="entry_1368288206" />
        <Input type="text" label="Phone" name="entry.177226758" placeholder="" id="entry_177226758" />
        
        <Radio label="A Leak" name="entry.510732652" id="group_510732652_1" />
        <Radio label="No Hot Water" name="entry.510732652" id="group_510732652_2" />
        <Radio label="Hot Water Issue" name="entry.510732652" id="group_510732652_3" />
        <Radio label="Laundry" name="entry.510732652" id="group_510732652_5" />
        <Radio label="Trash & Recycling" name="entry.510732652" id="group_510732652_6" />
        <Radio label="Other" name="entry.510732652" id="group_510732652_4" />
        <input type="hidden" name="entry.510732652" value="No hot water"></input>
        
        <Textarea label="Issue Description" name="entry.332916460" id="entry_332916460" />
        
        <input type="submit" name="submit" value="Submit" className="btn btn-primary"></input>

      </form>
    )
  }
});

// Input
var Input = React.createClass({
  getInitialState: function() {
    var stateObject = function() {
      // returnObj = {};
      returnObj[this.props.name] = '';
         return returnObj;
    }.bind(event)();

    return stateObject;
  },
  handleChange: function(event) {
    var stateObject = function() {
      returnObj = {};
      returnObj[this.props.name] = event.target.value;
         return returnObj;
    }.bind(event)();

    this.setState( stateObject );
    // this.setState({value: event.target.value});
  },
  render: function() {
    console.log(this);
    console.log(this.state.value);
    var value = this.state.value;
    return (
      <div className="form-group">
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <input type={this.props.type} className="form-control" name={this.props.name} id={this.props.name} placeholder={this.props.placeholder} value={value} onChange={this.handleChange}></input>
      </div>
    )
  }
});

// Textarea
var Textarea = React.createClass({
  getInitialState: function() {
    return {value: 'Hello!123'};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render: function() {
    console.log(this);
    console.log(this.state.value);
    var value = this.state.value;
    return (
      <div className="form-group">
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <textarea className="form-control" name={this.props.name} id={this.props.name} rows="5" value={value} onChange={this.handleChange}></textarea>
      </div>
    )
  }
});

// Select
var Select = React.createClass({
  render: function() {
    // var entries = this.props.data.map(function(entry) {
    //   return (
    //     {entry}
        
    //   )
    // });
    // console.log(entries);
    return (
      <div className="form-group">
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <select name={this.props.name} id={this.props.name} className="form-control">
          <option>1A</option>
          <option>2B</option>
          <option>3C</option>
          <option>4D</option>
          <option>5E</option>
        </select>
        <input type="hidden" name={this.props.name} value="4A"></input>
      </div>
    )
  }
});

// Radio
var Radio = React.createClass({
  render: function() {
    return (
      <div className="radio issue-type">
        <label>
          <input type="radio" name={this.props.name} id={this.props.name} value={this.props.name}></input>
          {this.props.label}
        </label>
      </div>
    )
  }
});




ReactDOM.render(
  <App url="https://spreadsheets.google.com/feeds/list/1SXeTZmUwTnLL2Z-tz6a0pjZxKtSEQU1H4q2JPBCOWCk/oysyckg/public/values?alt=json" pollInterval={20000} />,
  document.getElementById('app')
);

