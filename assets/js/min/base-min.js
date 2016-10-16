

// Entry
var Entry = React.createClass({
  render: function() {
    return (
      <div className="entry">
        <div className="author">
          <img src="assets/img/jeremy.GIF" className="author-img"></img>
        </div>
        <div className="entry-text">
          <h5 className="author-name">
            {this.props.author}
          </h5>
          <p>
            {this.props.children}
          </p>
        </div>
      </div>
    );
  }
});


// App
var App = React.createClass({
  loadScriptFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  handleEntrySubmit: function(entry) {
    var entries = this.state.data;
    entry.id = Date.now();
    var newEntries = entries.concat([entry]);
    this.setState({data: newEntries});

    // console.log(this.props.url);
    // $.ajax({
    //   url: this.props.url,
    //   dataType: 'json',
    //   type: 'POST',
    //   data: entry,
    //   success: function(data) {
    //     this.setState({data: data});
    //   }.bind(this),
    //   error: function(xhr, status, err) {
    //     this.setState({data: entries});
    //     console.error(this.props.url, status, err.toString());
    //   }.bind(this)
    // });
  },
  getInitialState: function() {
    return {
      data: []
    };
  },
  componentDidMount: function() {
    this.loadScriptFromServer();
    // setInterval(this.loadScriptFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="wrapper">
        <Reader data={this.state.data} />
        <Writer onEntrySubmit={this.handleEntrySubmit} />
      </div>
    );
  }
});

// Reader
var Reader = React.createClass({
  render: function() {
    var entries = this.props.data.map(function(entry) {
      return (
        <Entry author={entry.author} key={entry.id}>
          {entry.text}
        </Entry>
      )
    });
    return (
      <div id="reader" className="Reader">
        {entries}
      </div>
    );
  }
});


// WriterForm
var Writer = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var author = this.refs.author.value.trim();
    var text = this.refs.text.value.trim();
    if (!text || !author) {
      return;
    }
    this.props.onEntrySubmit({author: author, text: text});
    this.refs.author.value = '';
    this.refs.text.value = '';
    return;
  },
  render: function() {
    return (
      <div id="writer" className="Writer">
        <form className="WriterForm form-inline" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="hidden" className="form-control" value="Jeremy" ref="author"></input>
            <input type="text" className="form-control" placeholder="..." ref="text"></input>
            <button type="submit"><i className="fa fa-paper-plane"></i></button>
          </div>
        </form>
      </div>
    );
  }
});

ReactDOM.render(
  <App url="assets/js/data.json" pollInterval={20000} />,
  document.getElementById('app')
);


// ===============================

window.addEventListener("load",function() {
  // Set a timeout...
  setTimeout(function(){
    // Hide the address bar!
    window.scrollTo(0, 1);
  }, 0);
});

