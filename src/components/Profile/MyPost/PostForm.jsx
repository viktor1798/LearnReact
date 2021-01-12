import { Field, reduxForm } from "redux-form";
import React from 'react';
import { Textarea } from "../../common/FormControl/FormControl";
import { maxLengthCreator, required } from "../../utils/validator";

let maxLenght50 = maxLengthCreator(50);

const AddPostForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field placeholder={'Enter new post'} name={'addNewPost'} component={Textarea} validate={[required,maxLenght50 ]} />
        </div>
        <div>
          <button >Add post</button>
        </div>
      </form>)
  }
  
  const PostReduxForm = reduxForm({ form: 'addPost' })(AddPostForm) 

  export default PostReduxForm;