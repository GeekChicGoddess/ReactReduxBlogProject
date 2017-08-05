/**
 * Created by melodytempleton on 8/5/17.
 */
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
class PostsNew extends Component {

renderField(field) {
    const { meta: {touched, error} } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;
    return (
        <div className= {className}>
            <label>{field.label}</label>
            <input
                className="form-control"
                type="text"
                {...field.input}
            />
            <div className="text-help">
            {touched ? error : ''}
            </div>
            </div>
    );
}

    onSubmit(values){
        console.log(values);
    }


    render() {
        const { handleSubmit } = this.props;


        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field name="title"
                       label="Title For Post"
                component={this.renderField}/>
                <Field name="categories"
                       label="Categories"
                component={this.renderField}/>
                <Field name="content"
                       label="Post Content"
                component={this.renderField}/>

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>

        );
    }
}

function validate(values) {

    const errors = {};
    if(!values.title || values.title.length < 3){
        errors.title = "Enter a title that is more than 2 characters!";
    }
    if(!values.categories){
        errors.categories = "Enter a category!";
    }
     if(!values.content){
        errors.content = "Enter some blog content!";
    }

    return errors;

}

export default reduxForm({
    form: 'PostsNewForm',
    validate
})(PostsNew);
