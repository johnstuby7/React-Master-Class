import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";

import HomePage from "./pages/Home";
import EventsPage from "./pages/Events";
import NewEventPage from "./pages/NewEvent";
import EventDetailsPage from "./pages/EventDetails";
import EditEventPage from "./pages/EditEvent";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "events", element: <EventsPage /> },
      { path: "events/:eventId", element: <EventDetailsPage /> },
      { path: "events/new", element: <NewEventPage /> },
      { path: "events/:eventId/edit", element: <EditEventPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;