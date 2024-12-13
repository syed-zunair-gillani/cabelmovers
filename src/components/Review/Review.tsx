import apolloClient from "@/config/client";
import { GET_ALL_PROVIDERS } from "@/config/query";
import { gql } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "900px",
    width: "100%",
  },
};

const Review = ({
  setReviewModerOpen,
  reviewModelOpen,
  allProviderslist,
}: any) => {
  function closeModal() {
    setReviewModerOpen(false);
  }


  const [formData, setFormData] = useState({
    provider: 0,
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    comment: "",
  });

  const [commentResponce, setCommentStatus] = useState<any>();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmitReview = async () => {
    const url = "https://cblproject.cablemovers.net/wp-json/custom/v1/insert-comment";

    const headers = {
      "Content-Type": "application/json",
    };

    const data = {
      "post_id": formData?.provider,
      "author": formData?.firstName + ' ' + formData?.lastName,
      "author_email": "email@email.com",
      "content": formData?.comment,
      "city": formData?.city,
      "state": formData?.state,
      "zipcode": formData?.zipcode,
      "street_address" :  formData?.street
  }

    fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setCommentStatus(data)
        data?.comment_id &&
        setFormData({
          provider: 0,
          firstName: "",
          lastName: "",
          street: "",
          city: "",
          state: "",
          zipcode: "",
          comment: "",
        })
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <>
      <Modal
        isOpen={reviewModelOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Review Modal"
      >
        <section className="relative">
          <button
            onClick={closeModal}
            className="text-xl absolute -top-5 -right-2"
          >
            <AiOutlineClose />
          </button>
          <div className="max-w-[900px] mt-4">
            <div className="space-y-3">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Select Provider
                </label>
                <select
                  id="countries"
                  name="provider"
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                  <option selected>Choose a provider</option>
                  {allProviderslist?.map((item: any, idx: number) => {
                    return (
                      <option key={idx} value={item.databaseId}>
                        {item?.title}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="flex md:flex-row flex-col gap-4">
                <div className="flex-1">
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="fname"
                    name="firstName"
                    value={formData?.firstName}
                    onChange={handleChange}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-3"
                    placeholder="Jhon"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lname"
                    name="lastName"
                    value={formData?.lastName}
                    onChange={handleChange}
                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                    placeholder="Peter"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Street Address
                </label>
                <input
                  type="text"
                  id="StreetAddress"
                  name="street"
                  value={formData?.street}
                  onChange={handleChange}
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                  placeholder="Street Address"
                  required
                />
              </div>
              <div className="flex flex-row gap-4">
                <div className="flex-1">
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    City
                  </label>
                  <input
                    type="text"
                    id="City"
                    value={formData?.city}
                    name="city"
                    onChange={handleChange}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-3"
                    placeholder="City"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    State
                  </label>
                  <input
                    type="text"
                    id="State"
                    value={formData?.state}
                    onChange={(e) => handleChange(e)}
                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                    placeholder="State"
                    name="state"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Zipcode
                  </label>
                  <input
                    type="text"
                    id="State"
                    value={formData?.zipcode}
                    onChange={handleChange}
                    name="zipcode"
                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                    placeholder="State"
                    required
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                  Comments
                </label>
                <textarea
                  id="message"
                  value={formData?.comment}
                  name="comment"
                  onChange={handleChange}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                onClick={handleSubmitReview}
                className="py-3 px-5 text-sm font-medium text-center bg-[#EF9831] text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
              >
                 Submit Review
              </button>
              <p>{commentResponce?.data?.createComment?.success && 'Comment Submitted'}</p>
              <p>{commentResponce?.errors && commentResponce?.errors[0]?.message }</p>

            </div>
          </div>
        </section>
      </Modal>
    </>
  );
};

export default Review;
