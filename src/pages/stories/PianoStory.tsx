import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PianoStory = () => {
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
            src="https://designerapp.officeapps.live.com/designerapp/document.ashx?path=/0e98d7cb-0ffd-462d-88e8-8285a041b7b8/DallEGeneratedImages/dalle-c650894c-50da-42c4-8f14-7696f9c78b090251685070677547255700.jpg"
            alt="Her Old Piano"
            className="w-full h-64 object-cover"
          />
          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Her Old Piano</h1>
            <hr className="my-6 border-gray-200" />
            <div className="prose max-w-none">
              <p className="mb-4">There was a young girl named Abi who was very fond of classical music. She really wanted to learn how to play the piano and pestered her parents to pay for lessons.</p>
              <p className="mb-4">One day, the girl was walking through the city with her parents when she happened to spot a sign in a shop window. It read, "Piano For Sale". The girl asked her mother and father if they could buy a piano so that she could practice at home. At first, her parents refused and said that it was probably too expensive. The little girl persisted and begged them to go inside and ask the price.</p>
              <p className="mb-4">When they went into the shop, they saw a large, old, grand piano standing in the corner. The old woman who owned the shop came over and asked if she could help them. The father enquired about the price of the piano and was shocked when the old woman told him it was only one hundred dollars. She said that she had found it on a trash heap and fixed up herself.</p>
              <p className="mb-4">The father took one hundred dollars out of his wallet and paid the old woman. She arranged to have the old piano delivered to their house for free. The family walked home, happy with their purchase.</p>
              <p className="mb-4">On the day that the piano arrived, the girl's parents invited all of their friends to dinner. They wanted their daughter to show off her talents and play the piano for them. The guests gathered around and the girl sat down at the old piano and began tinkling away on the keys.</p>
              <p className="mb-4">However, after she had been playing for a while, she began to feel sharp pains and discomfort in her fingertips. Her parents didn't want to disappoint their friends, so they forced her to play all evening. By the end of the night, the girl was extremely tired and her father had to carry her upstairs and put her to bed.</p>
              <p className="mb-4">When she woke up, the next morning, the girl was unable to get out of bed. She had absolutely no energy. Her parents thought that she must be sick and allowed her to stay home from school. After a few days, however, she recovered and was back to normal. She immediately began practicing on her old piano again.</p>
              <p className="mb-4">Every time she tried to play the piano, the girl felt the same sharp pain in her fingers. She tried to ignore it and kept playing despite the discomfort it was causing her. As time went on, she began to get thinner and thinner. Her face became pale and drawn and her skin grew taut and leathery.</p>
              <p className="mb-4">A few days later, one of the keys on the piano stopped working. They called the shop where they bought the piano and asked the old woman to come and fix it. When she arrived, the woman walked over to the piano and said,</p>
              <p className="mb-4">"I can mend it, but I must be alone in the room. It's a very intricate process and I must not be disturbed. Do not look into the room while I am working, or else I will not be able to fix it."</p>
              <p className="mb-4">The girl and her parents obeyed the old woman's orders and waited patiently outside the room. After a while, the old woman emerged and announced that the piano was fixed. She said her goodbyes and left.</p>
              <p className="mb-4">The girl went back to practicing on the piano, but she lost even more weight. Her cheeks were sunken and her arms and legs were almost skeletal. It wasn't long before she was unable to walk around the room. She stopped going to school and her poor parents had to carry her up to bed at night and downstairs in the morning for breakfast. Despite her mysterious illness, she never stopped playing her beloved piano.</p>
              <p className="mb-4">A few days later, another key on the piano stopped working. Again, they called the old woman and she came to fix it. Just as before, she made them wait outside the room while she worked and warned them not to peek inside.</p>
              <p className="mb-4">However, the parents were very curious about what the old woman was up to. The father quietly opened the door a crack and peered through the gap. He watched as the old woman lifted the piano lid and took something out. He gasped in horror when he realized it was a jar full of blood. The old woman brought the jar to her lips and greedily drank it down.</p>
              <p className="mb-4">The girl's parents immediately called the police and the old woman was arrested. When they examined the old piano, they discovered that the piano keys had tiny, fine needles embedded in them. These needles were almost invisible to the naked eye. While the girl had been playing the piano, the needles punctured her fingers and drew blood.</p>
              <p className="mb-4">The droplets of blood dripped down small tubes and were collected in a large jar, hidden deep within the piano. Every time the jar was full, one of the keys would stop working. When the family called the old woman, she would come and drink the blood.</p>
              <p className="mb-4">Filled with rage, the father took an axe and began chopping the piano to pieces. Inside the piano, he found a coffin with a skeleton inside. Not long after that, the girl made a full recovery.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PianoStory;