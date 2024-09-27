import EventCard from "../event/EventCard";

const Events = () => {
  return (
    <div className="mx-auto w-11/12">
      <div className="heading">
        <h1>Popular Events</h1>
      </div>
      <div className="w-full">
        <EventCard />
      </div>
    </div>
  );
};

export default Events;
