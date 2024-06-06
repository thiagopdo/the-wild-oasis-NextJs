import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";
import {
  getBookedDatesByCabinId,
  getSettings,
} from "@/app/_lib/data-service";

async function Reservation({cabin}) {
  //avoiding blocking waterfall
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);


  return (
    <div className="grid min-h-[400px] grid-cols-2 border border-primary-800">
      <DateSelector />
      <ReservationForm />
    </div>
  );
}

export default Reservation;
