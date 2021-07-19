import React, { useState,useRef,useEffect } from "react";
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
// import Giphy from './Giphy'
import TippyGridView from './TippyGridView'
import ContentEditable from 'react-contenteditable'
import Post from "./Post";

class Search extends React.Component {
    constructor() {
        super()
        this.contentEditable = React.createRef();
        this.state = {
            html: "<b>Hello <i>World</i></b>",
            text:"",
            visible:false,
            gifLink:"",
            counter:0,
            postArray:[]
        };
      };
      setVisible=()=>{
          this.setState({
              visible:!this.state.visible
          })
      }
      setGifLink=(e)=>{
        this.setState({
            gifLink:e
        })
      }
      toggleButton=() => {
        this.setState({
            visible:!this.state.visible
        })
    }
    handleChange =(evt) =>{
        //setHtml(`<p>${evt.target.value}</p><br/><br/><img src={${gifLink}} />`)
        if(this.state.gifLink != "" && this.state.counter == 0){
            var str = `${evt.target.value}<br/><br/><img src={${gifLink}} />`
        }
        this.setState({
            html:`<p>${evt.target.value}</p>`
        })
    }
    createPostArray=()=>{
        var arr = []
        arr.push(<Post text={this.state.text} gifLink={this.state.gifLink} key={this.state.text}/>)
        this.setState({
            postArray:[...this.state.postArray,arr],
            text:"",
            gifLink:""
        })
    }
    getArray(){
        return(
            <>
            {this.state.postArray}
            </>
        )    
    }
    render =() =>{


        return(
            <div>

            <textarea placeholder="How are you feeling?" value={this.state.text} onChange={(e)=>{
                this.setState({
                    text:e.target.value
                })
            }}>

</textarea>
<br/>
<img src={this.state.gifLink} />

            <div className="btn-container">
                <Tippy visible={this.state.visible} interactive={true} placement={'bottom'} content={<TippyGridView gifLink={this.setGifLink} setVisible={this.setVisible}/>}>
                    <button onClick={this.toggleButton}>Gif</button>
                </Tippy>
                <button onClick={()=>{
                    this.createPostArray()
                }}>Send</button>
            </div>
            {/* <Post/>
          <Post/> */}
          {/* <Post text={this.state.text} gifLink={this.state.gifLink} key={this.state.text}/> */}
          {this.getArray()}
        </div>
        )
    }
}

export default Search
