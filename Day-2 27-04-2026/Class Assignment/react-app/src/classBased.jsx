import { Component } from "react";

class ClassBased extends Component{
    constructor(){
        super();
        console.log(this);
    }
    render(){
        return <h2>This is Class Based Component.</h2>
    }
}

export default ClassBased;