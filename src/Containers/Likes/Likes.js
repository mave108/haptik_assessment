import React from 'react';
import {connect} from 'react-redux';
import Layout from '../../Components/Layout/layout';
import Nav from '../../Components/Nav/Nav';
import {getProducts,getMyLikes} from '../../Actions/actions';
import ProductList from '../../Components/Product/List';
import Filter from '../../Components/Filter/Filter';
import {USER_ID} from '../../Config/config';


class Mylikes extends React.Component{

   constructor(props){
       super(props);
       this.state = {
           
       }      
   }

   componentDidMount(){
      this.props.dispatch(getMyLikes(USER_ID));
   }
    render(){
  
        return(
            <Layout>
                <Nav />  
                <br />              
                <ProductList posts={this.props.likes || []} 
                             voteUpHandler={this.voteUpHandler}
                             unVoteHandler={this.unVoteHandler}

                />
            </Layout>
        );
    }
}
function mapStateToProps(state){
    return {
        likes : state.main.likes,                     
        }
}

export default connect (mapStateToProps,null)(Mylikes);