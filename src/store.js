
import Reflux from "reflux";
import Actions from "./actions.js"

class MyStore extends Reflux.Store {
    constructor() {
        super();
        this.state = {
            list: [],
            newElement: " "
        };
        this.listenables = Actions;
    }

    onAddElement(elem) {
        this.setState({list: this.state.list.concat(elem)});
    };

    onRemoveElement(index) {
        let theList = this.state.list.slice();
        theList.splice(index, 1);
        this.setState({list: theList});
    };
}

//ejemplo de codesandbox corregido:
/*
    onIncrement = () => {
        this.setState({counter: this.state.counter+1});
        console.log(this.state.counter);
    };
*/

export default MyStore;