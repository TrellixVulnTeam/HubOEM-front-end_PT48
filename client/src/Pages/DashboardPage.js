import React from 'react'

import QuickLinks from '../Components/QuickLinks'
import OrderHistory from '../Components/OrderHistory'
import CPGStats from '../Components/CPGStats'

function DashboardPage() {
  return (
    <div className="Dashboard">

      <div className="Dashboard__quick-links-section">
        <QuickLinks className="Dashboard__quick-links-section__container" title={'Order Parts'} />
        <QuickLinks className="Dashboard__quick-links-section__container" title={'Request Services'} />
        <QuickLinks className="Dashboard__quick-links-section__container" title={'View Documents'} />
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