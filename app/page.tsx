import ClientOnly from "./components/clientOnly";
import Container from "./components/container";
import EmptyState from "./components/emptyState";

import getListings from "./actions/getListings";
import ListingCard from "./components/listings/listingCard";
import getCurrentUser from "./actions/getCurrentUser";

export default async function Home() {
  const isEmpty = true;
  const listings = await getListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    )
  }
  
  return (
    <ClientOnly>
      <Container>
        <div className="
          pt-24
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8
        ">
          {listings.map((listing) => {
            return(
              <ListingCard
                currentUser={currentUser} 
                key={listing.id}
                data={listing}
              />
            )
          })}
        </div>
      </Container>
    </ClientOnly>
  )
}
