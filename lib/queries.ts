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
