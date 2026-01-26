import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import officeImg from "@/assets/office-interior.png";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  service: z.string(),
  message: z.string().min(10, "Please provide more details"),
});

export default function LeadCapture() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "software",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Request Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Info & Image */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Let's Fix It.</h2>
              <p className="text-lg text-muted-foreground">
                Whether you need a custom app built or a motherboard repaired, we're ready to help. Visit our shop or send us a message.
              </p>
            </div>

            <Card className="overflow-hidden border-none shadow-xl">
              <div className="h-64 relative">
                <img src={officeImg} alt="Tech Affairs Office" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                    <div className="text-white">
                        <h4 className="font-bold text-lg">Tech Affairs HQ</h4>
                        <p className="text-sm opacity-80">Stop by for a consultation</p>
                    </div>
                </div>
              </div>
              <CardContent className="grid gap-6 p-6 bg-card">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold">Location</h5>
                    <p className="text-sm text-muted-foreground">123 Innovation Blvd, Tech District</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold">Office Hours</h5>
                    <p className="text-sm text-muted-foreground">Mon-Fri: 9am - 6pm</p>
                    <p className="text-sm text-muted-foreground">Sat: 10am - 4pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                        <Phone size={20} />
                    </div>
                    <div>
                        <h5 className="font-bold">Contact</h5>
                        <p className="text-sm text-muted-foreground">+1 (555) 000-0000</p>
                        <p className="text-sm text-muted-foreground">hello@techaffairs.com</p>
                    </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Form */}
          <div className="bg-card p-8 rounded-2xl border border-border shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Get a Quote</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                        <FormLabel>Service Interested In</FormLabel>
                        <FormControl>
                            <select 
                                className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                {...field}
                            >
                                <option value="software">Software Development</option>
                                <option value="hardware">Hardware Repair</option>
                                <option value="consulting">Consulting / Mentorship</option>
                            </select>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Details</FormLabel>
                      <FormControl>
                        <Textarea 
                            placeholder="Tell us about your project or the issue you're facing..." 
                            className="min-h-[120px]"
                            {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full h-11 text-base shadow-lg shadow-primary/20">
                  Send Message
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
