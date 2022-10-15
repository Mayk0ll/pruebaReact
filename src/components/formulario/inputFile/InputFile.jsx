import React from 'react'


export const InputFile = ({info}) => {

    const onChange = async(e) => {
        // console.log( await uploadFile(e.target.files[0], e.target.files[0].name));
        await info(e.target.files[0]);
    }
    
    return (
        <input type="file" name="" id=""  onChange={onChange}/>
    )
}
