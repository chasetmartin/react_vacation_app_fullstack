import EmptyState from "../components/emptyState";
import ClientOnly from "../components/clientOnly";

import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import TripsClient from "./tripsClient";

const TripsPage = async () => {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return (
            <ClientOnly>
                <EmptyState
                    title="You are not logged in"
                    subtitle="Please login to view your trips"
                />
            </ClientOnly>
        )
    }

    const reservations = await getReservations({
        userId: currentUser.id
    });

    if (reservations.length === 0) {
        return (
            <ClientOnly>
                <EmptyState
                    title="You have no trips"
                    subtitle="You have not booked any trips yet"
                />
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <TripsClient 
                reservations={reservations}
                currentUser={currentUser}
            />
        </ClientOnly>
    )
}

export default TripsPage;