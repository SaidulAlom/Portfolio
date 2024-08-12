"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+91 60031 10195",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "saidulalom525@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Assam, India",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">

          {/* Contact Form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's Work Together</h3>
              <p className="text-white/60">Feel free to reach out for collaborations or just a friendly chat.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" placeholder="First Name" className="bg-[#1f1f24] text-white" />
                <Input type="text" placeholder="Last Name" className="bg-[#1f1f24] text-white" />
                <Input type="email" placeholder="Email address" className="bg-[#1f1f24] text-white" />
                <Input type="tel" placeholder="Phone number" className="bg-[#1f1f24] text-white" />
              </div>

              <Select>
                <SelectTrigger className="w-full bg-[#1f1f24] text-white">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web-dev">Web Development</SelectItem>
                    <SelectItem value="front-end">Front End Development</SelectItem>
                    <SelectItem value="back-end">Back End Development</SelectItem>
                    <SelectItem value="logo-design">Logo Design</SelectItem>
                    <SelectItem value="graphic-design">Graphic Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea placeholder="Type your message here" className="h-[200px]" />

              <Button size="md" className="max-w-40">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
