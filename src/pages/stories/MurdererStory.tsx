import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MurdererStory = () => {
  return (
    <div className="min-h-screen bg-gray-600 py-16 px-4">
      <div className="max-w-3xl mx-auto bg-[rgb(248,247,247)] p-8 rounded-lg shadow-lg">
        <Link to="/">
          <Button variant="outline" className="mb-6">
            ← Back to Stories
          </Button>
        </Link>
        
        <img 
          src="https://www.shutterstock.com/image-photo/word-murder-written-old-typewriter-260nw-136871513.jpg" 
          alt="Sir im a Murderer"
          className="mx-auto w-2/5 rounded-lg mb-6"
        />
        
        <h1 className="text-center text-4xl font-bold mb-6 text-[#801b6a]">
          SIR, I'M THE MURDERER
        </h1>
        
        <hr className="border-t-2 border-gray-300 my-6" />
        
        <div className="space-y-4 text-justify text-lg leading-relaxed">
          <p>It was a gloomy, cloudy night. Shiva was a handsome young man between the age of 25 – 28.</p>
          
          <p>He was very busy with his investigation of two retired police officers who had been missing for the last 2 months one after the other. Their age ranged between 55 to 60. Shiva was seriously examining the pieces of evidence which were collected on the spot. The men's boot was the evidence. It was found at the place where both policemen were found at last. At the time Mr. Shiva heard a creeping voice.</p>
          
          <p>"Sir, I am a murderer."</p>
          
          <p>She was trembling while saying this. She was sitting in the police station, opposite Shiva's table. She was there to surrender herself. He was shocked. She was a beautiful lady of about 22 or 23 years, had long hair which was maintained nicely, wearing a pink shirt and dark blue jeans.</p>
          
          <p>She had sunglasses on her eyes. She was looking from a wealthy and rich family.</p>
          
          <p>"Who did you kill?"</p>
          
          <p>He asked her after a long pause because her first sentence was not expected or if he talk frankly, he was lost in her beauty.</p>
          
          <p>"I have killed 3 people."</p>
          
          <p>Shiva was really surprised to hear that. A girl, so pretty, can kill 3 people and also commit it in front of police. The whole thing was a bit unusual for him. "I have killed my Gardner, my driver, and" She paused a bit and started to sob. "And my mother." She started crying hard. Shiva gave her water and she began to take a sip from that glass.</p>
          
          <p>When she controlled her emotions, she continued to talk.</p>
          
          <p>"Please I beg of you, please arrest me otherwise I will kill someone else also."</p>
          
          <p>"Why did you kill them and why will you kill others? Ma'am, What's your name?"</p>
          
          <p>"Shilpa." She was still sobbing.</p>
          
          <p>"Shilpa, why did you kill them?"</p>
          
          <p>"I don't know. It just happened automatically."</p>
          
          <p>"Shilpa, I am not getting it. And I cannot arrest you without any complaint and without seeing the body of the dead people you are talking about." She was looking very tense to him. So he continued, "Shilpa, where are the bodies?"</p>
          
          <p>"I dug them in my garden."</p>
          
          <p>She was not looking fake but what she was saying was hard to believe.</p>
          
          <p>Shiva decided to go to her house. He took two constables also with him. When they reached her house she guided them to her garden and told them the places where the bodies of the gardener and driver were dug. He commanded the constables to take the bodies out.</p>
          
          <p>"Where's the body of your mother?" Shiva asked Shilpa.</p>
          
          <p>"She is inside."</p>
          
          <p>He started to follow Shilpa. She took him inside the house and then stopped in front of a dark room.</p>
          
          <p>"Inside. My mother is lying inside." She started to cry again.</p>
          
          <p>He slowly started to move inside the room. The room was so dark that it was difficult to see anything. Shiva had one torch with him so he decided to turn that on. He searched the whole room but the room was empty.</p>
          
          <p>Then he saw one room which was closed.</p>
          
          <p>Shiva opened that room and was shocked to see that three bodies were lying inside the room. Two men may be Shilpa's gardener and driver and one old lady maybe her mother.</p>
          
          <p>Shiva was wondering why Shilpa told him that bodies were out there in the garden.</p>
          
          <p>After pointing the torch at those bodies Shiva came to know that those two bodies were the missing Policeman and one unidentified old lady. But it was not her mother.</p>
          
          <p>"Ahhhhhh" Someone stabbed him from behind.</p>
          
          <p>He turned around. He was shocked to see Shilpa standing with a knife in her right hand covered with his blood.</p>
          
          <p>"Why?"</p>
          
          <p>he asked her in a trembling voice.</p>
          
          <p>She came closer to him and stabbed him in his stomach and said,</p>
          
          <p>"Because, it's fun."</p>
          
          <p>He fell to the ground and she took his gun and rushed outside. He heard two fires. She killed Shiva's constables also.</p>
          
          <p>Shiva saw her last image standing in front of the mirror, combing her hair and singing a song..........</p>
          
          <p>"It's just for fun.</p>
          
          <p>And for relief!</p>
          
          <p>But it's a wanted motive."</p>
        </div>
      </div>
    </div>
  );
};

export default MurdererStory;