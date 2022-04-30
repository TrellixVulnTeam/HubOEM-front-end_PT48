import React from 'react'

function OEMsForm() {
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
                <label>Options</label>
                <select>
                    <option>View Machines</option>
                    <option>Request Quote</option>
                    <option>Request Service</option>
                    <option>View Documents</option>
                </select>
                <button>Submit</button>
            </form>
        </>
    )
}

export default OEMsForm