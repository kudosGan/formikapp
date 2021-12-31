import React from 'react'
import{useFormik} from 'formik'

function YoutubeForm() {

    const formik =useFormik({
        initialValues: {
            name:'',
            email:'',
            channel:'',
        }
    })

    console.log ('Form values', formik.values)

    return (
        <div>
            <form>

                <lable htmlFor='name'> Name  </lable>
                <input type='text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name}/>

                <lable htmlFor='email'> E-mail </lable>
                <input type='email' id='email' name='email'onChange={formik.handleChange} value={formik.values.email}/>

                <lable htmlFor='channel'> Channel </lable>
                <input type='text' id='channel' name='channel' onChange={formik.handleChange} value={formik.values.channel}/>

                <button>Submit</button>
            </form>
            
        </div>
    )
}

export default YoutubeForm
