import React from "react";
import { useLoaderData, json } from "react-router-dom";

import EventItem from "../components/EventItem";

function EventDetailsPage() {
  const data = useLoaderData();

  return <EventItem event={data.event} />;
}

export default EventDetailsPage;

export async function loader({ request, params }) {
  const id = params.eventId;

  const response = await fetch("http://localhost:8081/events/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      { status: 500 }
    );
  } else {
    return response;
  }
}
