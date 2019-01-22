import axios from '../Axios/axios';
import {PRODUCTS,MY_LIKES,COMMENTS} from './types';


export const getProducts = (date) =>{
    return (dispatch) => {          
        dispatch({ type: PRODUCTS, payload:[]}); 
        dispatch({ type: COMMENTS, payload:[]});           
        return axios.get(`posts?day=${date}`)
        .then( response => {                              
            if(response.data.posts.length > 0){
                return response.data.posts;
            }else{
                return [];
            }                                                                                                                                               
         })
         .then( posts => {
            dispatch({ type: PRODUCTS, payload:posts}); 
         });
    }
}   

export const getMyLikes = (userid) =>{
    return (dispatch) => {                   
        dispatch({ type: COMMENTS, payload:[]}); 
        dispatch({ type: MY_LIKES, payload:[]}); 
        return axios.get(`users/${userid}/votes`)
        .then( response => {                             
            if(response.data.votes.length > 0){
               //format data
               return  response.data.votes.map( vote => vote.post);               
            }else{
                return [];
            }                                                                                                                                               
         })
         .then( votes => {
            dispatch({ type: MY_LIKES, payload:votes}); 
         });
    }
} 
export const getComments = (postid,offset) =>{
    return (dispatch,getState) => {                 
        return axios.get(`comments?search[post_id]=${postid}&per_page=5&page=${offset}&sort_by=updated_at`)
        .then( response => {                  
            const getCurrentState = getState();                               
            if(response.data.comments.length > 0){
                if(getCurrentState.main.comments){                    
                    return  [...getCurrentState.main.comments,...response.data.comments];    
                }else{
                    return response.data.comments;
                }                                         
            }else{
                return [...getCurrentState.main.comments];
            }                                                                                                                                               
         })
         .then( comments => {
            dispatch({ type: COMMENTS, payload:comments}); 
         });
    }
}

export const voteUp = (postid) =>{
    return (dispatch) => {                            
        return axios.post(`posts/${postid}/vote`)
         .then( response => {
            
         });
    }
}   

export const unVote = (postid) =>{
    return (dispatch) => {                            
        return axios.delete(`posts/${postid}/vote`)
         .then( response => {
            
         });
    }
} 