import React from 'react'
import styles from "./FormsControls.module.css";


export const FormsControls =({input, meta, child, ...props})=>{
     
    let hasError = meta.touched && meta.error 
    return (
            <div className={styles.formControl + " "+ (hasError ? styles.error: "")}>
                <div>
                   {props.children}
                </div>
                {hasError && <span>{meta.error}</span>}
            </div>
        )
}

export const Textarea =(props)=>{
     const {input, meta, child, ...restProps} = props;
    return (
        <FormsControls {...props}><textarea {...input}{...restProps} /></FormsControls>
        )
}

export const Input =(props)=>{
     const {input, meta, child, ...restProps} = props;
    return (
          <FormsControls {...props}><input {...input}{...restProps} /></FormsControls>  
        )
}