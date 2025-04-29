
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, Building2, User, MessageSquare } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(5, {
    message: "Message must be at least 5 characters.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const formspreeEndpoint = "https://formspree.io/f/xnndqywz"; // Replace with your endpoint
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    
    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you as soon as possible.",
          className: "bg-green-50 border-green-200",
        });
        form.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-white dark:bg-navy-800 p-6 rounded-xl shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Name *
                </FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Your name" 
                    {...field} 
                    className="bg-slate-50 dark:bg-navy-900 border-slate-200 dark:border-navy-600 focus:ring-2 focus:ring-crimson-500"
                  />
                </FormControl>
                <FormMessage className="text-sm" />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email *
                </FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Your email" 
                    {...field} 
                    className="bg-slate-50 dark:bg-navy-900 border-slate-200 dark:border-navy-600 focus:ring-2 focus:ring-crimson-500"
                  />
                </FormControl>
                <FormMessage className="text-sm" />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="flex items-center gap-2">
                  <Building2 className="h-4 w-4" />
                  Company
                </FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Your company" 
                    {...field} 
                    className="bg-slate-50 dark:bg-navy-900 border-slate-200 dark:border-navy-600 focus:ring-2 focus:ring-crimson-500"
                  />
                </FormControl>
                <FormMessage className="text-sm" />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Phone Number
                </FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Your phone number" 
                    {...field} 
                    className="bg-slate-50 dark:bg-navy-900 border-slate-200 dark:border-navy-600 focus:ring-2 focus:ring-crimson-500"
                  />
                </FormControl>
                <FormMessage className="text-sm" />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Message *
              </FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="How can we help you?"
                  className="min-h-32 bg-slate-50 dark:bg-navy-900 border-slate-200 dark:border-navy-600 focus:ring-2 focus:ring-crimson-500 resize-none"
                  {...field} 
                />
              </FormControl>
              <FormMessage className="text-sm" />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          className="w-full md:w-auto bg-[#0F223D] hover:bg-[#1a3660] text-white px-8 py-2 rounded-lg transition-all duration-200 flex items-center justify-center gap-2" 
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Mail className="h-4 w-4" />
              Send Message
            </>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
