import React from 'react'

function youtubeForm() {
    return (
        <div>
            <form>

                <lable htmlFor='name'> Name  </lable>
                <input type='text' id='name' name='name'/>

                <lable htmlFor='email'> E-mail </lable>
                <input type='email' id='email' name='email'/>

                <lable htmlFor='channel'> Channel </lable>
                <input type='text' id='channel' name='channel'/>

                <button>Submit</button>
            </form>
            
        </div>
    )
}

export default youtubeForm
