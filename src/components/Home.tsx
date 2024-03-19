import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ReviewCard from "./ReviewCard";
import { IReview, getAllReviews } from "../services/review-service";

const Home: React.FC = () => {
  const [reviews, setReviews] = useState<IReview[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviews = await getAllReviews();
        setReviews(reviews);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <>
      <Navbar />
      {reviews.map((review, index) => (
        <ReviewCard
        key={index}
        {...review}
        userFullName={review.author?.fullName!}
        userImgUrl={review.author?.imgUrl!}
      />
      ))}
    </>
  );
};

export default Home;