import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <div className="text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
      <p className="text-center text-gray-400 mb-8">Let's get in touch. Send us a message:</p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Input 
            placeholder="Name" 
            required 
            className="bg-gray-800 border-gray-700 text-white"
          />
        </div>
        <div>
          <Input 
            type="email" 
            placeholder="Email" 
            required 
            className="bg-gray-800 border-gray-700 text-white"
          />
        </div>
        <div>
          <Input 
            placeholder="Subject" 
            required 
            className="bg-gray-800 border-gray-700 text-white"
          />
        </div>
        <div>
          <Textarea 
            placeholder="Message" 
            required 
            className="bg-gray-800 border-gray-700 text-white min-h-[150px]"
          />
        </div>
        <Button 
          type="submit" 
          className="w-full bg-red-700 hover:bg-red-800 text-white"
        >
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;