import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
      <form method="POST" action="https://getform.io/f/e88047d4-a9e0-49c4-a8f7-e2761e98c6b2" className="flex flex-col max-w-[600px] w-full">
        <div className="pd-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">Submit the form below or sent me an email - <a href="devendrasoni984@gmail.com"> devendrasoni984@gmail.com</a></p>
        </div>
        <input className="bg-[#ccd6f6] p-2" type="text" placeholder="Name" name='name' />
        <input className="my-4 p-2 bg-[#ccd6f6]" type="email" placeholder="email" name='Email' />
        <textarea className="bg-[#ccd6f6] p-2" name="message" cols='30' rows='10' placeholder="Message"></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-4 my-8 mx-auto flex items-center">Let's Collaborate</button>
      </form>
    </div>
  );
};

export default Contact;
