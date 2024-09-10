"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "react-toastify";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    value: "+91 8840459101",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "Shreyash.gupta.dev@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    value: "Kanpur, Uttar Pradesh, India",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const res = await fetch("/api/sendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.firstname + " " + formData.lastname,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      // Check if the response is OK
      if (res.ok) {
        const result = await res.json();
        toast.success(result.message); // Show success message from API
      } else {
        const errorResult = await res.json();
        toast.error(errorResult.message || "Failed to send message");
      }
    } catch (error) {
      toast.error("Failed to send message");
    }
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section className='py-6 '>
      <div className='mx-20 xl:mx-40 '>
        <div className='flex flex-col xl:flex-row xl:justify-center gap-[30px] '>
          <div className='xl:w-[60%] order-2 xl:order-none'>
            <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
              <h3 className='text-4xl text-accent'>Let's work together</h3>
              <p className='text-white/60'>
                Let's collaborate and combine our strengths to achieve great
                results. Together, we can create innovative solutions and
                overcome challenges effectively.
              </p>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <Input
                  name='firstname'
                  type='firstname'
                  placeholder='Firstname'
                  value={formData.firstname}
                  onChange={handleChange}
                />

                <Input
                  name='lastname'
                  type='lastname'
                  placeholder='Lastname'
                  value={formData.lastname}
                  onChange={handleChange}
                />

                <Input
                  name='email'
                  type='email'
                  placeholder='Email'
                  value={formData.email}
                  onChange={handleChange}
                />

                <Input
                  name='phone'
                  type='phone'
                  placeholder='Phone Number'
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <Textarea
                name='message'
                type='message'
                className='h-[200px]'
                placeholder='Type your message here'
                value={formData.message}
                onChange={handleChange}
              />
              <Button
                type='submit'
                onClick={handleSubmit}
                size='sm'
                className='max-w-40'>
                Send Message
              </Button>
            </form>
          </div>
          <div className='fkex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
            <ul className='flex flex-col gap-10'>
              {info.map((item, index) => (
                <li
                  key={index}
                  className='flex items-center gap-6'>
                  <div className='w-[50px] h-[50px] xl:w-[72px] xl:h-[72px] rounded-md bg-[#27272c] text-accent flex justify-center items-center'>
                    <div className='text-[28px]'>{item.icon}</div>
                  </div>
                  <div>
                    <h4 className='text-xl text-white/60'>{item.title}</h4>
                    <p className=''>{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
