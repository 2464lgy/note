import  React,{ Component } from "react";
import data from "./data";
import PublicCard from "../publicCard";
console.log(data);
class About extends Component{
    render(){
        console.log(data);
        return (<PublicCard data={data} />)
    }
}
export default About;