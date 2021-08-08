import React from 'react'

function Option({ data, ind}) {


    return (

        <div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value={data} id={data}/>
                <label className="form-check-label" htmlFor={data}>
                    {data}
                </label>
            </div>
        </div>

    )
}

export default Option
