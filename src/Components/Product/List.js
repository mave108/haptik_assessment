import React from 'react';
import {Link} from 'react-router-dom';

class Planetlist extends React.Component{
    
    render(){
    return(
        <div className="post-container">
        {this.props.posts.map((post)=>{
          return (
          <div className="card" 
               key={post.id} 
               style={{marginBottom:"5px"}}                
               >          
               
            <div className="card-body" style={{fload:"left"}}>
            <div className="row">     
            <div className="col-sm">     
            <img className="card-img-top" src={post.thumbnail.image_url} alt={post.name} style={{fload:"left"}}/>
            </div>
            <div className="col-sm">  
            <Link to={`/post/${post.id}/comments`}>
                <h5 className="card-title">{post.name}</h5>
                <div>{post.tagline}</div>
            </Link>
            <span className="badge badge-secondary" onClick={ () => this.props.voteUpHandler(post.id)}>
                <i className="fa fa-caret-up" aria-hidden="true"></i>
                &nbsp;{post.votes_count}
            </span>&nbsp;
            <span className="badge badge-secondary">
                <i className="far fa-comments" aria-hidden="true"></i>
                &nbsp;{post.comments_count}
            </span>
            </div>
            </div>
            </div>
          </div>
        )
        })}   
        </div>     
    );
}
}

export default Planetlist;