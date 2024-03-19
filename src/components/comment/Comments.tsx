import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import CommentCard from "./CommentCard";
import { getCommentsByReviewId } from "../../services/comment-service";
import CommentForm from "./CommentForm";
import { Review, getReviewById } from "../../services/review-service";
import ReviewCard from "../review/ReviewCard";

export interface IComment {
  _id?: string;
  description: string;
  owner: string;
  reviewId: string;
  timeStamp: Date;
  userFullName: string;
  userImgUrl: string;
}

const Comments: React.FC = () => {
  const [review, setReview] = useState<Review[]>([]);
  const [comments, setComments] = useState<IComment[]>([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  const { reviewId } = useParams<{ reviewId: string }>();

  useEffect(() => {
    const fetchReview = async () => {
      try {
        if (reviewId !== undefined) {
          const review = await getReviewById(reviewId);
          setReview(review);
        }
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchReview();
  }, [reviewId]);

  const postComment = (comment: string) => {
    console.log(`Posting comment: ${comment}`);
  };

  useEffect(() => {
    const fetchComments = async () => {
      try {
        if (reviewId !== undefined) {
          const commentsResult = await getCommentsByReviewId(reviewId);
          setComments(commentsResult);
          setDataLoaded(true);
        }
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    if (!dataLoaded) {
      fetchComments();
    }
  }, [reviewId, dataLoaded]);

  return (
    <>
      <Navbar />
      <ReviewCard {...review} showLikesAndComments={false} />
      <div
        className="row row-cols-1 row-cols"
        style={{
          paddingTop: "10px",
          paddingRight: "50px",
          paddingLeft: "50px",
        }}
      >
        <CommentForm reviewId={reviewId} />
        <p className="h2 text-center" style={{ paddingTop: "30px" }}>
          Comments
        </p>
        {comments.map((comment, index) => (
          <CommentCard key={index} {...comment} />
        ))}
      </div>
    </>
  );
};

export default Comments;