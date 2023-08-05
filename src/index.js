
import React from "react";
import ReactDOM from "react-dom";
import Reflux from "reflux";
import Actions from "./actions.js";
import MyStore from "./store.js";
import "./styles.css";
import Button from "@material-ui/core/Button"
import Container from '@material-ui/core/Container';
import { TextField } from "@material-ui/core";
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import Typography from "@material-ui/core/Typography";


class App extends Reflux.Component {
  constructor(props) {
    super(props);
    //this.state = {newElement: " "};
    //this.state = {counter:0} 
    this.store = MyStore;
  }

  addElement = () => {
    if (this.state.newElement != " ") {
      Actions.addElement(this.state.newElement);
      this.setState({newElement: ""});
    }
  }
  
  removeElement = (index) => {
    Actions.removeElement(index);
  }

  render() {
    return (
      <Container>
        <Typography variant="h2" color="primary" align="center" >
          ToDo List / Lista de tareas 
        </Typography>
        <form noValidate autoComplete="off">
          <TextField
            value={this.state.newElement}
            onChange={(e) => this.setState({newElement: e.target.value,})}
            label="Nueva Tarea"
            variant="outlined"
            color="primary"
            fullWidth
          />
        </form>
        <Button 
          type="button" 
          onClick={this.addElement} 
          color="primary"
        >
          Agregar tarea
        </Button>
        <List>
          {this.state.list.map((item, index) => (
            <ListItem key={index}>
              <ListItemText primary={item}/>
              <Button type="button" onClick={() => this.removeElement(index)}>Eliminar tarea</Button>
            </ListItem>
          ))}
        </List>
      </Container>
    )
  }
  
}
//Ejemplo de codesandbox corregido: 
// <Button type="button" onClick={Actions.increment}>incrementar</Button>
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

