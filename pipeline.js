const listings = [
  { name: "Cozy Studio Westlands", price: 3500, rating: 4.8, neighborhood: "Westlands", amenities: ["wifi", "kitchen", "parking"] },
  { name: "Modern Apartment Kilimani", price: 6000, rating: 4.9, neighborhood: "Kilimani", amenities: ["wifi", "pool", "gym", "kitchen"] },
  { name: "Budget Room Eastleigh", price: 1500, rating: 4.2, neighborhood: "Eastleigh", amenities: ["wifi"] },
  { name: "Luxury Penthouse Kilimani", price: 15000, rating: 4.7, neighborhood: "Kilimani", amenities: ["wifi", "pool", "gym", "kitchen", "parking", "balcony"] },
  { name: "Garden Cottage Karen", price: 8000, rating: 4.6, neighborhood: "Karen", amenities: ["wifi", "kitchen", "garden", "parking"] },
  { name: "Artist Loft Westlands", price: 4500, rating: 4.5, neighborhood: "Westlands", amenities: ["wifi", "kitchen"] },
  { name: "Family Home Karen", price: 12000, rating: 4.9, neighborhood: "Karen", amenities: ["wifi", "kitchen", "garden", "parking", "pool"] },
  { name: "Studio Near CBD", price: 2000, rating: 3.9, neighborhood: "CBD", amenities: ["wifi"] },
  { name: "Riverside Apartment", price: 5500, rating: 4.4, neighborhood: "Westlands", amenities: ["wifi", "kitchen", "gym"] },
  { name: "Backpacker Hostel Westlands", price: 800, rating: 4.1, neighborhood: "Westlands", amenities: ["wifi"] }
];

function findTopListings(listings, neighborhood, maxPrice){
    const neighborhoods = listings.filter ( (item) => item.neighborhood.toLowerCase() === neighborhood.toLowerCase()  //1.Filter listings in the given neighborhood
                          && item.price <= maxPrice);   //  2. Filter listings under the given max price
          //console.log(neighborhoods);

   const sorted = neighborhoods.sort( (a, b) => b.rating - a.rating);  //3.Sort by rating (highest first)
   //console.log(sorted);
   const sliced = sorted.slice(0, 5);  //4.Take the top 5
   //.console.log(sliced);
   sliced.map( (list) =>                                                 //5.Map to a formatted summary string:
            console.log(` ⭐ ${list.rating} -${list.name} (KES ${list.price} / night) - ${list.amenities}`))

    
}


//findTopListings(listings, "Westlands", 5000);
findTopListings(listings, "Kilimani", 10000)
