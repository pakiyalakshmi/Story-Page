import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const DesertStory = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Button variant="ghost" className="mb-8 text-white" asChild>
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Stories
          </Link>
        </Button>
        
        <div className="bg-white rounded-lg overflow-hidden shadow-xl">
          <img
            src="https://designerapp.officeapps.live.com/designerapp/document.ashx?path=/0e98d7cb-0ffd-462d-88e8-8285a041b7b8/DallEGeneratedImages/dalle-b6b7cea1-2627-4805-a841-2f016ff7690c0251685071212913652900.jpg"
            alt="Endless Loop in the Desert"
            className="w-full h-64 object-cover"
          />
          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Endless Loop in the Desert</h1>
            <hr className="my-6 border-gray-200" />
            <h4 className="text-lg font-semibold text-gray-700 mb-6">
              Excerpt: The Endless Loop is a creepy story about a man who has a dream that he is lost in the desert. He has no idea how he got there and no idea where he has to go.
            </h4>
            <div className="prose max-w-none">
              <p className="mb-4">One night, a man had a nightmare. It was the most frightening thing he had ever experienced. In the dream, he found himself walking in a desert. Somehow, he had no idea how he had gotten there, but he knew he was lost and alone.</p>
              
              <p className="mb-4">When he looked down, he realized he was carrying a machete in his hand. The long, cold steel blade looked razor-sharp. The sun was beating down and the heat was intense. The man was sweating profusely, but he kept walking, even though he had no idea where he was going.</p>
              
              <p className="mb-4">After some time, he saw a dark figure crouching down in the distance.</p>
              
              <p className="mb-4">As he approached, he saw that it was a person, lying in the sand. He had been feeling extremely lonely, so he was grateful to see another human being. He quickly ran up to the man and bent over to help him up.</p>
              
              <p className="mb-4">However, when he turned the man over, he took one look at his face and recoiled in horror.</p>
              
              <p className="mb-4">He was looking at himself.</p>
              
              <p className="mb-4">In that instant, he was so overcome with fear that he raised the machete above his head and, without thinking, hacked the man to death.</p>
              
              <p className="mb-4">Horrified by what he had just done, he dropped the weapon and started running through the desert, trying to get away as far away from the place as possible. With every step, his feet sank further into the sand, but he kept on going, driven by terror and panic.</p>
              
              <p className="mb-4">Eventually, he stumbled and fell to the ground. Lying in the sand, he realized that he had sprained his ankle. He couldn't walk another step. There was nothing he could do except lie there where he had fallen.</p>
              
              <p className="mb-4">After a while, he looked up and saw something in the distance. It was the figure of a man, approaching across the wide expanse of desert. As the man approached, he waited until he could see his face clearly.</p>
              
              <p className="mb-4">To his horror, he realized it was himself and in his hand, he was carrying a razor-sharp machete…</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesertStory;