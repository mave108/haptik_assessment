import React from 'react';

const Filter =(props) =>{
    const withoutEventDefault = callback => event => {   
        event.preventDefault()
        callback()
      }
    return(
        <div className="card" style={{backgroundColor:"#f8f9fa!important"}}>
            <div className="row justify-content-center card-body">        
                <form className="form-inline my-2 my-lg-0" onSubmit={withoutEventDefault(props.searchHandler)}>        
                    <input className="form-control mr-sm-2" 
                           type="search" placeholder="yyyy/mm/dd" 
                           onChange={ e => props.changeHandler(e.target.value)}
                           defaultValue={props.date}/>
                    <button className="btn btn-outline-primary my-2 my-sm-0 filter-btn" type="submit">Search</button>
                </form>        
            </div>
        </div>
    );
}

export default Filter;