import React from 'react'

import OrderLineItems from '../Components/OrderLineItems'

function OrderOverview() {
    return (
        <div className="OrderOverview_container__container">
            <div>
                <div className="OrderOverview_container__container__header">
                    <div className="OrderOverview_container__container__title">
                        Order Overview
                    </div>
                    <div className="OrderOverview_container__container__date-range">
                        Select Dates
                    </div>
                </div>
                <div className="OrderOverview_container__container__options">
                    <h5>Totals</h5>
                    <h5>Companies</h5>
                    <h5>Machine Types</h5>
                </div>
                <div className="OrderOverview_container__container__orders-section">
                    <div className="OrderOverview_container__container__orders-section">
                        {/* map orders with an order component */}
                        <table>
                            <tr>
                                <th>Company</th>
                                <th>Part #</th>
                                <th>Part name</th>
                                <th>Machine serial #</th>
                            </tr>
                            <OrderLineItems />
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderOverview;