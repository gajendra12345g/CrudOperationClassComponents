import React from 'react';

class CrudComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{
        id: "1",
        name: "gajendra",
        email: "gajendrar@gmail.com",
        phone: "7828203667",
      }],
      newItem: {
        id: '',
        name: '',
        email: '',
        phone: '',
      },
    };
    
  }

  // Create operation
  addItem = () => {
    const { items, newItem } = this.state;
    const updatedItems = [...items, newItem];
    this.setState({
      items: updatedItems,
      newItem: { id: '', name: '', email: '', phone: '' },
    });
  };



  // Read operation
  getItems = () => {
    const { items } = this.state;
    return items.map((item, index) => (
      <div key={index}>
        <p>ID: {item.id}</p>
        <p>Name: {item.name}</p>
        <p>Email: {item.email}</p>
        <p>Phone: {item.phone}</p>
        <button onClick={() => this.updateItem(item,index)}>Update</button>
        <button onClick={() => this.deleteItem(index)}>Delete</button>
      </div>
    ));
  };

  // Update operation
  // updateItem = (index) => {
  //   const { items } = this.state;
  //   const updatedItem = items[index];
  //   console.log(updatedItem);
  // };
 

  updateItem = (index) => {
    const { items, id, name,email,phone, editingIndex } = this.state;
    const updatedItem = { id,name, email, phone};
    const updatedItems = [...items];
    updatedItems[editingIndex] = updatedItem;
    this.setState({
      items: updatedItems,
      id: '',
      name: '',
      email: "",
      phone: "",
      editingIndex: null,
    });
  };

  // Delete operation
  deleteItem = (index) => {
    const { items } = this.state;
    const updatedItems = items.filter((_,i) => i !== index);
    this.setState({ items: updatedItems });
  };

  render() {
    const { newItem } = this.state;

    return (
      <div>
        <input
          type="text"
          value={newItem.id}
          placeholder="ID"
          onChange={(e) => this.setState({ newItem: { ...newItem, id: e.target.value } })}
        />
        <input
          type="text"
          value={newItem.name}
          placeholder="Name"
          onChange={(e) => this.setState({ newItem: { ...newItem, name: e.target.value } })}
        />
        <input
          type="text"
          value={newItem.email}
          placeholder="Email"
          onChange={(e) => this.setState({ newItem: { ...newItem, email: e.target.value } })}
        />
        <input
          type="text"
          value={newItem.phone}
          placeholder="Phone"
          onChange={(e) => this.setState({ newItem: { ...newItem, phone: e.target.value } })}
        />
        <button onClick={this.addItem}>Add</button>
        <div>{this.getItems()}</div>
      </div>
    );
  }
}

export default CrudComponent;
