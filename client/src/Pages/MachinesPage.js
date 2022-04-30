import React from 'react'

import MachineLineItem from '../Components/MachineLineItem'

function MachinesPage() {
  return (
    <div>
      <table>
        <tr>
          <th>Serial #</th>
          <th>Company</th>
          <th>Model</th>
          <th>Date Purchased</th>
          <th>Date Last Serviced</th>
        </tr>
        <tr>
          <MachineLineItem />
        </tr>
      </table>
    </div>
  )
}

export default MachinesPage