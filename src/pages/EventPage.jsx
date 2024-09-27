import EventCard from "../components/event/EventCard";

export default function EventPage() {
  return (
    <div className="py-10 w-11/12 mx-auto">
      <EventCard active={true} />
      <EventCard active={true} />
    </div>
  );
}
