import React from 'react'

export default function TeamMemberForm(props) {
    const { values, update, submit } = props
    console.log('this is values:', values)
    const onChange = evt => {
        const { name, value } = evt.target
        update( name, value)
        console.log('this is evt. target', evt.target)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group inputs'>
                <label htmlFor='name'>Name
                    <input
                    id='name'
                    type='text'
                    name='name'
                    onChange={onChange}
                    value={values.name}
                    />
                </label>
                <label htmlFor='email'>Email
                    <input
                    id='email'
                    type='email'
                    name='email'
                    onChange={onChange}
                    value={values.email}
                    />
                </label>
                <label htmlFor='role'>Role
                    <select
                    id='role'
                    name='role'
                    onChange={onChange}
                    value={values.role}>
                        <option value=''>-- Select a Role --</option>
                        <option value='friend'>Friend</option>
                        <option value='family'>Family Member</option>
                        <option value='teacher'>Teacher</option>
                        <option value='schoolMate'>School Mate</option>
                        <option value='pet'>Pet</option>
                    </select>
                </label>
                <div className='submit'>
                    <button>Submit</button>
                </div>
            </div>
        </form>
    )
}

