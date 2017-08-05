/**
 * Created by melodytempleton on 8/5/17.
 */
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

renderField(field) {
    return (
        <div className="form-group">
            <label>{field.label}</label>
            <input
                className="form-control"
                type="text"
                {...field.input}
            />
        </div>
    );
}

    render() {
        return(
            <form>
                <Field name="title"
                       label="Title For Post"
                component={this.renderField}/>
                <Field name="categories"
                       label="Categories"
                component={this.renderField}/>
                <Field name="content"
                       label="Post Content"
                component={this.renderField}/>


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
