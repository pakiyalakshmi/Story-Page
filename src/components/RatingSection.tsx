import { Progress } from "@/components/ui/progress";

const RatingSection = () => {
  return (
    <div className="text-white">
      <h2 className="text-4xl font-bold text-center mb-12">User Ratings</h2>
      <div className="flex items-center mb-4">
        <div className="flex text-yellow-400 text-2xl">
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span className="text-gray-400">★</span>
        </div>
        <span className="ml-2">4.1 average based on 254 reviews</span>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center">
          <span className="w-20">5 star</span>
          <Progress value={60} className="flex-1 mx-4" />
          <span className="w-12">150</span>
        </div>
        <div className="flex items-center">
          <span className="w-20">4 star</span>
          <Progress value={30} className="flex-1 mx-4" />
          <span className="w-12">63</span>
        </div>
        <div className="flex items-center">
          <span className="w-20">3 star</span>
          <Progress value={10} className="flex-1 mx-4" />
          <span className="w-12">15</span>
        </div>
        <div className="flex items-center">
          <span className="w-20">2 star</span>
          <Progress value={4} className="flex-1 mx-4" />
          <span className="w-12">6</span>
        </div>
        <div className="flex items-center">
          <span className="w-20">1 star</span>
          <Progress value={15} className="flex-1 mx-4" />
          <span className="w-12">20</span>
        </div>
      </div>
    </div>
  );
};

export default RatingSection;