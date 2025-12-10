import {withRouter, Link} from 'react-router-dom'
import Header from '../Header'
import TravelTripContextValue from '../../context/TravelTripContextValue'
import './index.css'

const MyTrips = () => (
  <TravelTripContextValue.Consumer>
    {value => {
      const {myTripsList} = value
      const isCreatedList = myTripsList.length >= 1

      return (
        <div className="my-trips-container">
          {/* Header: Home, My Trips, Logout */}
          <Header />

          {!isCreatedList && (
            <div className="my-trips-content-container">
              <img
                src="https://res.cloudinary.com/dsfextndf/image/upload/v1715695116/Vector_rjv87k.png"
                alt="no trips"
                className="no-trip-image"
              />
              <p className="no-trip-heading">No upcoming trips.</p>
              <p className="no-trip-description">
                When you book a trip, you will see your trip details here.
              </p>
              <Link to="/book-a-new-trip">
                <button className="no-trip-button" type="button">
                  Book a new trip
                </button>
              </Link>
            </div>
          )}

          {isCreatedList && (
            <div className="trips-list-container">
              <h1 className="my-trips-heading">My Trips</h1>
              <ul className="my-trips-list-ul">
                {myTripsList.map(eachTrip => (
                  <li className="my-trips-item-container" key={eachTrip.id}>
                    {/* end location from Your Details step */}
                    <h1 className="trip-item-heading">
                      {eachTrip.endLocation}
                    </h1>

                    <div>
                      <p className="date-text">Date</p>
                      {/* start & end dates from Date Selection step */}
                      <p className="date-to-text">
                        {`${eachTrip.startDate} to ${eachTrip.endDate}`}
                      </p>
                    </div>

                    {/* Cancel button on each trip */}
                    <button type="button" className="trip-cancel-btn">
                      Cancel
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )
    }}
  </TravelTripContextValue.Consumer>
)

export default withRouter(MyTrips)
