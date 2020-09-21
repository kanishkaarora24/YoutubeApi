import React from 'react';
import axios from 'axios';
import Collection from "./components/Collection";
import Description from "./components/Description";
import './App.css';

const Component = React.Component;
const config = require('./configuration');

class App extends Component {

    constructor(props) {
        super(props);
        this.Timeout=null;
        this.state = {
            value:"",
            videos: [],
            currentVideo: null,};
             this.callApi("React mosh");
    }

     callApi = value => {
        //  console.log(this.state.value);
        axios.get(config.youtube.host_url + 'key=' +
            config.youtube.API_KEY + '&q=' + value +'&maxResults=8').then(res => {
            this.setState({
                videos: res.data.items,
                currentVideo: res.data.items[0]
            });
        });
    };


    handleVideoChange = current => {
        this.setState({
            currentVideo: current
        });
    };

  
    handleTextChange = (e) => {
       clearTimeout(this.Timeout);
       this.Timeout = setTimeout(this.callApi.bind(null, this.state.value), 1000);
       this.setState({value: e.target.value});

  };

    render() {
    
           return (
               <div>
              <div>
                 <input value={this.state.value} 
                   onChange={this.handleTextChange} 
                   placeholder={"Search for video"}
                   className="search" 
                   style={{marginTop:'20px',
                   marginLeft:'70px'}}/>
              </div>
                    <Description videos={this.state.currentVideo}/>
                    
                    <Collection handleVideoChange={this.handleVideoChange}
                               videos={this.state.videos}/>
               </div>
           
           )
            
    }
}

 export default App;
