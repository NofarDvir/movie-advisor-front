import React from "react";
import Navbar from "./Navbar";
import ReviewCard from "./ReviewCard";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      {Array.from({ length: 16 }, (_, id) => (
        <ReviewCard
          key={id}
          reviewId={0}
          commentsCount={40}
          isLiked={false}
          likeCount={45}
          postedOn={new Date()}
          reviewScore={4}
          reviewImageUrl="https://generated.vusercontent.net/placeholder.svg"
          reviewText="The best movie EVER!!!!!"
          reviewerName="Nofi Nof"
          reviewerProfilePictureUrl="https://generated.vusercontent.net/placeholder.svg"
          likeReview={() => {}}
          commentOnReview={() => {}}
        />
      ))}
    </>
  );
};

export default Home;