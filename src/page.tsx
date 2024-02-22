/* eslint-disable @typescript-eslint/no-unused-vars */
import { useToast } from "@/components/ui/use-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { IoLocationOutline } from "react-icons/io5";
import { useState } from "react";
import {collection,addDoc} from "firebase/firestore"
import { firestore } from "./lib/firebase";

import {
    Form,

    
    FormControl,
    
    FormField,
    FormItem,
  
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
import * as z from "zod"

const formSchema = z.object({
  email: z.string().email(),
})
const Page = () => {
  const {toast} = useToast();
  // const [input, setInput] = useState<string>("");
  const [more, setMore] = useState<boolean>(false);

      const handleSubscibe=async(email:string)=>{
        try {
          
        await addDoc(collection(firestore,"subscribers"),{
            email:email,
            createdAt:new Date()
        })
        console.log("success");
        // setInput("");
        } catch (error) {
          console.log(error);
        }
    }

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
        },
      })
     
      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof formSchema>) {
      // console.log(values);
      
      try {
        
        handleSubscibe(values?.email);

            console.log(values?.email);
      
            toast({
        
              title: "Subscribed successfully",
              
            })
            form.setValue("email", "");
          } catch (error) {
              toast({
                  variant: "destructive",
                  title: "Uh oh! Something went wrong.",
                  description: "Please try again later.",
                })
            console.log(error);
          }
      }
  return (
    <div className="w-full font-poppins">
      <nav className="flex items-center m-1">
        <img
          src="GrocDen (7).png"
          alt="GrocDen logo"
          className="rounded-full h-20 w-20 m-2 block"
        />
        <div className="flex justify-center w-full">
          <ul className="flex gap-7 text-lg font-medium sm:text-2xl sm:gap-20">
            <li>About us</li>
            <li>Menu</li>
            <li>Offers</li>
          </ul>
        </div>
      </nav>
      <div className="flex flex-col bg-[#45D60070] items-center justify-center p-3 px-7  m-2 rounded-xl gap-3 sm:m-5 ">
        <h2 className="font-bold text-2xl p-2 m-2 sm:text-5xl">About us</h2>
        <p className="text-center text-md mx-4 sm:text-2xl sm:m-8">
          GrocDen is a leading home delivery service dedicated to making your
          life easier by bringing essential products right to your doorstep. We
          understand the value of your time and the importance of convenience,
          and that is why we have built our business around simplifying your
          daily shopping needs.
        </p>
        <p className="text-center text-md mx-4 sm:text-2xl">
          At GrocDen, we are committed to simplifying your life and providing
          you with the best in-home delivery service. Experience the convenience
          of shopping with us today!
        </p>
        <div>
          <button
            className="font-bold rounded-3xl w-36 h-8 sm:w-48 sm:h-11"
            onClick={() => setMore(!more)}
          >
            {more! ? "Show less" : "More about us"}
          </button>
          {more ? (
            <div>
              <p className="text-center text-md mx-4 sm:text-2xl">
                In the urban hustle, time slips away, leaving us with
                unfulfilled desires.
                <br />
                Grocden revolutionizes your urban experience, transforming how
                you handle your works/jobs and explore your city. Serving as a
                bridge to the closest delivery partner, we facilitate purchases,
                pick-ups, and deliveries from nearest store in your apartment
                vicinity.
                <br />
                <br />
                Navigating the challenges of a busy lifestyle, whether busy in
                work or caught in traffic, can hinder your ability to make
                essential purchases or any surprise visit of guests when you are
                running out of your snacks.
                <br />
                <br />
                Simply direct us to your flat no.(destination) & specify the
                items. From there, relax as we take charge of your to-do list.
                Your item will be delivered to you within 10 minutes.Consider us
                your ever-mobile task accomplice.
                <br />
              </p>{" "}
            </div>
          ) : null}
        </div>
        <div className="flex flex-col sm:flex-row">
          <div className="flex flex-col items-center justify-center m-2 p-3 gap-6 sm:gap-12">
            <h4 className="text-4xl font-extrabold sm:text-5xl">
              Subscribe for updates
            </h4>
            <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
    
              <FormControl>
                <Input placeholder="Enter your email..." {...field} className="w-5/6 h-12 bg-white" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-150px">Submit</Button>
      </form>
    </Form>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="fruits.png"
              alt="fruit image"
              className="rounded-full w-[250px] h-[250px] sm:w-[300px] sm:h-[300px]"
            />
          </div>
        </div>
      </div>
      <footer className="flex flex-col items-center justify-center m-2 p-4 bg-[#D6000047] sm:flex-row sm:gap-20">
        <div>
          <h4 className="font-bold text-xl text-center">GrocDen</h4>
          <div className="flex items-center flex-col">
            <div className="flex">
              <IoLocationOutline className="w-6 h-6" />
              <p>Wakad, Pune,Maharashtra-411033</p>
            </div>
            <h5>work.grocden@gmail.com</h5>
          </div>
          <div className=" flex flex-col">
            <div className="flex items-center justify-center">
              <a href="https://www.facebook.com/profile.php?id=61555739729342">
                <img src="Facebook.svg" alt="facebook icon" />
              </a>
              <a href="https://twitter.com/grocden">
                <img src="icons8-twitter.svg" alt="twitter icon" />
              </a>
              <a href="https://www.instagram.com/grocden?igsh=YzV6ZnRpbHNobHZ1">
                <img src="icons8-instagram.svg" alt="instagram icons" />
              </a>
            </div>
          </div>
        </div>
        <div className="m-1">
          <h3 className="text-xl font-medium p-1">Categories</h3>
          <ul className="flex flex-col justify-center items-center">
            <li>Grocery</li>
            <li>Dairy product</li>
            <li>Packaged foods</li>
            <li>Bevragages</li>
          </ul>
        </div>
      </footer>
      <div>
        <p className="text-sm font-extralight">
          @2023 delivary store |Privacy policy |Terms and Conditions| Terms of
          Use
        </p>
      </div>
     
    </div>
  );
};

export default Page;
