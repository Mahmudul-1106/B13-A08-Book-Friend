import Image from "next/image";
import webImage from "@/assets/webImage.png";
import React from "react";

const Faq = () => {
  return (
    <div className="bg-base-200 mt-5 py-10">
      <h2 className="text-3xl font-bold  text-center text-blue-950">
        Frequently Asked Questions
      </h2>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row px-5">
          <Image
            src={webImage}
            alt="Image"
            width={300}
            height={350}
            className="mx-auto max-w-[250px] max-h-[350px]  md:max-w-md md:max-h-[500px] rounded-lg shadow-2xl"
          ></Image>
          {/* Accordian-- FAQ */}
          <div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title font-semibold">
                What is BookFriend?
              </div>
              <div className="collapse-content text-sm">
                BookFriend is a community-driven platform where book lovers can
                explore a vast library of books, manage their personal reading
                profiles, and borrow books to foster a culture of sharing and
                learning.
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-semibold">
                Do I need an account to browse books?
              </div>
              <div className="collapse-content text-sm">
                No, you can browse all the books in our "All Books" section
                without logging in. However, to borrow a book, to see book
                details or view your personal profile, you must create an
                account and sign in.
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-semibold">
                How do I update my profile information?
              </div>
              <div className="collapse-content text-sm">
                Once logged in, navigate to "My Profile" and click the "Update
                Profile" button. You can change your display name and your
                profile image URL. Your changes will reflect across the site,
                including the navigation bar.
              </div>
              <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">
                  What should I do if I am automatically logged out?
                </div>
                <div className="collapse-content text-sm">
                  For your security, sessions may expire. If you try to borrow a
                  book or update your profile and see a "Please login again"
                  message, simply head to the Login page to start a fresh
                  session.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
