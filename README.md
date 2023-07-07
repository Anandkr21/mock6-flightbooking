# mock6-flightbooking

# Air Ticket Booking

## Instructions:

- Read the entire question carefully for at least 15 mins, understand it and then code it.
- Commit your code every 30min with a proper commit message to your repository (we will monitor every commit)
- Use **Node, Express, Mongo (NEM)** for backend.

---

## Problem Statement:

The task is to create backend for a Air Ticket booking system that allows users to book flights for their desired destinations.

## Instructions:

The system should be built using Node.js, Express.js, and MongoDB (NEM) as the backend stack.

- The backend should have the following models
- User Model

```yaml
{
  _id: ObjectId,
  name: String,
  email: String,
  password: String
}
```

- Flight Model

```yaml
{
  _id: ObjectId,
  airline: String,
  flightNo: String,
  departure: String,
  arrival: String,
  departureTime: Date,
  arrivalTime: Date,
  seats: Number,
  price: Number
}
```

- Booking Model

```yaml
{
	 _id: ObjectId,
	 user : { type: ObjectId, ref: 'User' },
	 flight : { type: ObjectId, ref: 'Flight' }
}

```

The following API routes should be developed to achieve the required functionality:

| METHOD | ENDPOINT | DESCRIPTION | STATUS CODE |
| --- | --- | --- | --- |
| POST | /api/register | This endpoint should allow users to register. | 201 |
| POST | /api/login | This endpoint should allow users to login. | 201 |
| GET | /api/flights | This endpoint should return a list of all available flights. | 200 |
| GET | /api/flights/:id | This endpoint should return the details of a specific flight identified by its ID. | 200 |
| POST | /api/flights | This endpoint should allow users to add new flights to the system. | 201 |
| PUT / PATCH | /api/flights/:id | This endpoint should allow users to update the details of a specific flight identified by its ID. | 204 |
| DELETE | /api/flights/:id | This endpoint should allow users to delete a specific flight identified by its ID. | 202 |
| POST | /api/booking | This endpoint should allow the user to book flights. | 201 |
| GET | /api/dashboard | This point should list all the bookings so far with the user and flight details. | 200 |

---

**Important Note :**

- **Write proper documentation for your API’s clearly specifying what should be the body of your POST API’s, what are the different response API will return. (On your GitHub Readme). You are free to use Postman Documentation or Swagger to implement this.**
