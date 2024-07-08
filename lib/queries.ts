export const pdpQuery = `
		query {
			faqs {
				data {
					attributes {
						question
						answer
					}
				}
			}
			prices {
				data {
					attributes {
						vehicle
						pricePerKm
						pricePerHour
						travelers
						description
					}
				}
			}
			testimonials {
				data {
					attributes {
						content
						author
						company
					}
				}
			}
			routes {
				data {
					id
					attributes {
						distanceInKm
						description
						images {
							data {
								attributes {
									url
								}
							}
						}
						from {
							data {
								attributes {
									name
								}
							}
						}
						to {
							data {
								attributes {
									name
								}
							}
						}
					}
				}
			}
		}
  `;
