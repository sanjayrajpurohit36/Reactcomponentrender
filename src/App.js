import React, { Component } from 'react';
import Dropdown from './Dropdown';
import Button from './Button';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        addDropdown : false,
        list : "",
        sub : [],
        subList : ["Maths", "Science", "Physics"]
    }
    this.removeDropdown = this.removeDropdown.bind(this)
}
  selectSubject(e){
    this.setState({
      addDropdown : true,
      list : ""
    }, () => {
      console.log("value",this.state.list)
    console.log("drop",this.state.addDropdown)
      document.addEventListener('click', this.removeDropdown);
    })
    
  }
  removeDropdown(){
    if(this.state.addDropdown){
      this.setState({
        addDropdown : false,
    },function(){
        document.removeEventListener('click', this.removeDropdown);
    })
    }
  }
  addSubject(v){
    console.log("v",v);     
        this.setState({
            list : v
        })
        console.log("sub",this.state.sub)
  }
  displaySubject(){
    alert(this.state.list)
  }
  render() {
    return (
      <div className="App">
      <h1 className = "heading">Add Your Subject</h1>
       <input type = "text" className = "input-text" placeholder = "Enter" onChange = {this.selectSubject.bind(this)} value = {this.state.list}/>
       {
         this.state.addDropdown ? (
          <Dropdown
          style={{
             position: "absolute",
             width: "17%", 
             height: "auto",
             boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)",
             backgroundColor: "#fff",
             marginLeft: "15%",
             marginTop: "1%",
             zIndex: "1000",
             fontSize: "20px",
             textAlign: "left"
         }}
         display={this.state.addDropdown}
     >
        <div className = "addSubject-dropdown">
            <ul>
              {
                this.state.subList.map((v,k) => {
                  return(
                    <li onClick = {this.addSubject.bind(this, v)}>{v}</li>
                  )
                })
              }
            </ul>
          </div>
    </Dropdown>
         ) : null
       }
       <Button
       style={{
        width: "110px", 
        height: "50px", 
        color: "#fff",
        cursor: "pointer",
        boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)", 
        float: "right",
        marginRight: "19%",
        fontSize: "18px",
        backgroundImage: "linear-gradient(-135deg, #EB0202 0%, #FF5A5F 100%)",
        borderRadius: "25px",
        WebkitBoxShadow: "none",
        outline: "-webkit-focus-ring-color auto 0px",
        display: "table-cell"
    }}
        onClick = {this.displaySubject.bind(this)}
        label = "Click">
       </Button>
      </div>
    );
  }
}

export default App;
