import React from 'react'

import QuickLinks from '../Components/QuickLinks'
import OrderHistory from '../Components/OrderHistory'
import CPGStats from '../Components/CPGStats'

function DashboardPage() {
  return (
    <div className="Dashboard">

      <div className="Dashboard__quicklinks">
        <QuickLinks title={'Order Parts'} />
        <QuickLinks title={'Request Services'} />
        <QuickLinks title={'View Documents'} />
      </div>

      <div className="Dashboard__order-history">
        <OrderHistory />
      </div>

      <div className="Dashboard__quick-stats">
        <CPGStats />
      </div>

    </div>
  )
}

export default DashboardPage;