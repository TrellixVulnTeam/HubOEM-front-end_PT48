import React from 'react'

function DocumentsForm() {
    return (
        <>
            <div>
                <form>
                    <label>Company</label>
                    <select id="Comapny" name="Company">
                        <option>FILTEC</option>
                        <option>Palmer</option>
                        <option>AES</option>
                        <option>InLine</option>
                        <option>Cont. Paper</option>
                    </select>
                    <select id="Document" name="Document">
                        <option>Brochure 1</option>
                        <option>Brochure 2</option>
                        <option>Brochure 3</option>
                        <option>Brochure 4</option>
                        <option>Brochure 5</option>
                        <option>Brochure 6</option>
                        <option>Brochure 7</option>
                        <option>Brochure 8</option>
                    </select>
                    <button>Submit</button>
                </form>
            </div>
        </>
    )
}

export default DocumentsForm