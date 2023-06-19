import React, { Component } from "react";

class Crud extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      data: [
        {
            name: "Gajendra",
            email:"Gajendra@gmail.com"
        }
      ] 
    };
    this.editIndex=null;
  } 
  

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, data } = this.state;
    const newData = { name, email };
    if(this.editIndex!==null){
        
        const updatedData = [...data];
        updatedData[this.editIndex] = newData;
        this.editIndex = null;
        this.setState({ name: '', email: '', data: updatedData });
    }
    else{
   
    const updatedData = [...this.state.data, newData];
    this.setState({ name: '', email: '', data: updatedData });
    }
  }
   handleDelete=(item)=>{
    const {data}=this.state;
    console.log(data,item);
     const updatedData=data.filter((p)=>p!==item)
     this.setState({data:updatedData})
   }
  handleEdit=(item,index)=>{
    this.editIndex = index;  
    this.setState({ name: item.name, email: item.email });
  }

  handleUserData=(item)=>{
    alert(` NAME : ${item.name} EMAIL : ${item.email}`);
  }

  componentDidMount() {console.log("componentDidMount");}

  componentDidUpdate() {console.log("componentDidUpdate");}

  render() {
    const { name, email, data } = this.state;

    return (
      <div>
        <h1>Crud App</h1>
        <div>
          <label>Name:</label>
          <input type="text" value={name} name="name" onChange={(e)=>this.handleInput(e)} />
          <br />
          <br />

          <label>Email:</label>
          <input type="text" value={email} name="email" onChange={(e)=>this.handleInput(e)} />
          <br />

          <button onClick={this.handleSubmit}>Add</button>
        </div>

        <div>
          <table border={"black"}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Button</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td><span><button onClick={()=>this.handleEdit(item,index)}>Edit</button><span>
                   <button onClick={()=>this.handleDelete(item)}>Delete</button></span>
                   <span><button onClick={()=>this.handleUserData(item)}>UserData</button></span></span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default Crud;