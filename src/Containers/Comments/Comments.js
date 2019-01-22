import React from 'react';
import {connect} from 'react-redux';
import Layout from '../../Components/Layout/layout';
import Nav from '../../Components/Nav/Nav';
import {getComments} from '../../Actions/actions';
import ProductList from '../../Components/Product/List';
import Filter from '../../Components/Filter/Filter';
import {USER_ID} from '../../Config/config';
import Commentslist from '../../Components/Comments/List';


class Comments extends React.Component{

   constructor(props){
       super(props);
       this.state = {
           offset:1
       } 
       this.loadMoreHandler = this.loadMoreHandler.bind(this);     
   }

   componentDidMount(){
      this.props.dispatch(getComments(this.props.pid,this.state.offset));
   }
   loadMoreHandler(){
     this.setState( state=> {
         return {offset:state.offset+1}
     },() => { 
         console.log("[offset]",this.state);
         this.props.dispatch(getComments(this.props.pid,this.state.offset))
        });
   }
    render(){
        console.log("[render comment]",this.props);
        return(
            <Layout>
                <Nav />  
                <br />              
                <Commentslist comments={this.props.comments || []} />
                <br /> 
                <div className="d-flex justify-content-center">
                    <button type="button" className="btn btn-success" onClick={this.loadMoreHandler}>Load More</button>
                </div>
            </Layout>
        );
    }
}
function mapStateToProps(state){
    return {
        comments : state.main.comments,                     
        }
}

export default connect (mapStateToProps,null)(Comments);