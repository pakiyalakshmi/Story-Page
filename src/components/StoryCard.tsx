import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface StoryCardProps {
  title: string;
  excerpt: string;
  image: string;
  link: string;
}

const StoryCard = ({ title, excerpt, image, link }: StoryCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-gray-800 border-gray-700">
      <a href={link}>
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardHeader className="text-white">
          <h3 className="text-xl font-semibold">{title}</h3>
        </CardHeader>
        <CardContent>
          <p className="text-gray-400">{excerpt}</p>
        </CardContent>
      </a>
    </Card>
  );
};

export default StoryCard;