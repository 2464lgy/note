import React, { Component } from "react";
import {Card} from "antd";
import data from "./data";
import PublicCard from "../publicCard";
class Book extends Component{
    render(){
        console.log(data)
        return (
                       
                    <PublicCard data={data}/>
                )
            }
}
export default Book;