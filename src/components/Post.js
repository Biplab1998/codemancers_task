import React from 'react'

function Post(props) {
    return (
        <div>
            <div className="post-div">
                <div className="info-container">
                    <img src="./img/avatar.png" alt="" />
                    <p>Mike </p>
                </div>
                <div className="content">
                    <p>{props.text}</p>
                    <br/>
                    <img src={props.gifLink} />
                </div>
            </div>
        </div>
    )
}

export default Post
