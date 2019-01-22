import React from 'react';

const Commentlist = (props) => {
  

    return (

        props.comments.map( comment =>{
            return (
            <div className="card" key={comment.id} style={{marginTop:"5px"}}>
                  <div className="card-body">
                    {/* <h5 className="card-title">{comment.name}</h5> */}
                    <div>{comment.body}</div>
                  </div>
            </div> )
        })
    );
}

export default Commentlist;