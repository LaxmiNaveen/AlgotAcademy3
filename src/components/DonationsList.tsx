import { Heart, MapPin } from "lucide-react";

interface Donation {
  id: string;
  name: string;
  place: string;
  amount: string;
  message: string;
}

const donations: Donation[] = [
    {
    id: "9",
    name: "K. Lavanya, Lect. in Political Sci",
    place: "Jankampet, Nizamabad Dist",
    amount: "₹100",
    message: "Thank you for supporting orphan children. May God bless you!"
  },
  {
    id: "1",
    name: "Ramesh Kumar",
    place: "Hyderabad",
    amount: "₹50",
    message: "Thank you for supporting orphan children. May God bless you!"
  },
  {
    id: "2",
    name: "M. Vamshi",
    place: "Hyderabad",
    amount: "₹100",
    message: "Your kindness makes a difference. We appreciate your generosity!"
  },
  {
    id: "3",
    name: "K. Naveen",
    place: "Hyderabad",
    amount: "₹100",
    message: "Thank you for your big heart! Your donation will help many children."
  },
  {
    id: "4",
    name: "R. Sateesh",
    place: "Morthad, Nizamabad Dist",
    amount: "₹100",
    message: "God bless you for caring about orphan children. Thank you!"
  },
  {
    id: "5",
    name: "Mohammad Ali",
    place: "Kammarpally, Nizamabad Dist",
    amount: "₹150",
    message: "Your contribution is truly appreciated. May you be blessed abundantly!"
  },
    {
    id: "6",
    name: "Maggidi Harish",
    place: "Nirmal",
    amount: "₹150",
    message: "Your contribution is truly appreciated. May you be blessed abundantly!"
  },
    {
    id: "7",
    name: "A. Laxmi",
    place: "Balkonda, Nizamabad Dist",
    amount: "₹75",
    message: "God bless you for caring about orphan children. Thank you!"
  },
   {
    id: "8",
    name: "N. Srikanth",
    place: "Armoor, Nizamabad Dist",
    amount: "₹500",
    message: "Thank you for your big heart! Your donation will help many children."
  },
];

const DonationsList = () => {
  return (
    <section className="px-4 mt-6">
      <div className="flex items-center gap-2 mb-4">
        <Heart className="w-5 h-5 text-error" fill="currentColor" />
        <h2 className="text-lg font-semibold text-foreground">Recent Donations</h2>
      </div>
      <div className="space-y-3">
        {donations.map((donation) => (
          <div
            key={donation.id}
            className="bg-card rounded-xl p-4 border border-border shadow-card hover:shadow-elevated transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="font-semibold text-foreground">{donation.name}</h3>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  <span>{donation.place}</span>
                </div>
              </div>
              <span className="text-lg font-bold text-success">{donation.amount}</span>
            </div>
            <p className="text-sm text-muted-foreground italic">"{donation.message}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DonationsList;
