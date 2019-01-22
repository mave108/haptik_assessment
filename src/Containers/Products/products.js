import React from 'react';
import {connect} from 'react-redux';
import Layout from '../../Components/Layout/layout';
import Nav from '../../Components/Nav/Nav';
import {getProducts,voteUp,unVote} from '../../Actions/actions';
import ProductList from '../../Components/Product/List';
import Filter from '../../Components/Filter/Filter';


class Products extends React.Component{

   constructor(props){
       super(props);
       this.state = {
           date: null
       }
      this.defaultDate = new Date().toLocaleDateString();
      this.dateChangeHandler = this.dateChangeHandler.bind(this);
      this.searchHandler = this.searchHandler.bind(this);
      this.unVoteHandler = this.unVoteHandler.bind(this);
      this.voteUpHandler = this.voteUpHandler.bind(this);
   }

   componentDidMount(){
      this.props.dispatch(getProducts(this.defaultDate));
   }
   voteUpHandler(postid){
    this.props.dispatch(voteUp(postid));
   }
   unVoteHandler(postid){
    this.props.dispatch(voteUp(postid));
   }
   dateChangeHandler(date){
      this.setState({date});
   }
   searchHandler(){
    let date = new Date(this.state.date);
    if(date instanceof Date && !isNaN(date)){
        this.props.dispatch(getProducts(date.toLocaleDateString()));  
    }
   }

    render(){
  
        return(
            <Layout>
                <Nav />
                <br/>
                <Filter date={this.state.date} 
                        searchHandler={this.searchHandler}
                        changeHandler={this.dateChangeHandler}/>
                <br />
                <ProductList posts={this.props.products || []} 
                             voteUpHandler={this.voteUpHandler}
                             unVoteHandler={this.unVoteHandler}

                />
            </Layout>
        );
    }
}
function mapStateToProps(state){
    return {
        products : state.main.products,                     
        }
}

export default connect (mapStateToProps,null)(Products);