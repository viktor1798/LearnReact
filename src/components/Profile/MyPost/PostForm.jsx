import { Field, reduxForm } from "redux-form";
import React from 'react';

const AddPostForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field placeholder={'Enter new post'} name={'addNewPost'} component={'textarea'} />
        </div>
        <div>
          <button >Add post</button>
        </div>
      </form>)
  }
  
  const PostReduxForm = reduxForm({ form: 'addPost' })(AddPostForm) 

  export default PostReduxForm;