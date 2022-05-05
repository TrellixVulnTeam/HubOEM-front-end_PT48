import React from 'react'

function ServicesForm() {
    return (
        <>
            <form>
                <label>Select OEM</label>
                <select id="OEMs" name="Company">
                    <option>FILTEC</option>
                    <option>Palmer</option>
                    <option>AES</option>
                    <option>InLine</option>
                    <option>Cont. Paper</option>
                </select>
                <label>Machine</label>
                <select>
                    <option>#5849032</option>
                    <option>#432</option>
                    <option>#54327890-L</option>
                    <option>#543829</option>
                    <option>#5432-540</option>
                    <option>#5453-</option>
                </select>
                <input placeholder="Message"></input>
                <button className="button__green">Submit</button>
            </form>
        </>
    )
}

export default ServicesForm