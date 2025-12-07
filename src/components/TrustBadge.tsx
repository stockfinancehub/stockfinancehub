import user1 from "@/assets/user-1.jpg";
import user2 from "@/assets/user-2.jpg";
import user3 from "@/assets/user-3.jpg";

const TrustBadge = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex -space-x-2">
        <img
          src={user1}
          alt="Trader"
          className="w-8 h-8 rounded-full border-2 border-background object-cover"
        />
        <img
          src={user2}
          alt="Trader"
          className="w-8 h-8 rounded-full border-2 border-background object-cover"
        />
        <img
          src={user3}
          alt="Trader"
          className="w-8 h-8 rounded-full border-2 border-background object-cover"
        />
      </div>
      <p className="text-sm text-muted-foreground">
        Trusted by <span className="font-semibold text-foreground">50+</span> traders
      </p>
    </div>
  );
};

export default TrustBadge;
