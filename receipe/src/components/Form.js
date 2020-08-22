import React from 'react'

const Form = (props) => {

    return (
        <div>
            <form className="text-light" onSubmit={props.getRecipe}>
                <div className="row my-5 mx-3 pl-3 d-flex justify-content-center">
                <input className="col-md-5 col-lg-5" name="recipeName" placeholder='bla'></input>
                <button className="btn btn-danger btn-small ml-3"> Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Form;
