import React from "react";

interface SearchCardProps {
  title: string;
  poster_path: string;
  overview: string;
}

const MovieModal: React.FC<SearchCardProps> = ({
  title,
  poster_path,
  overview,
}) => {
  return (
    <div className="col">
      <div className="card border-dark h-100">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={"https://image.tmdb.org/t/p/w500" + poster_path}
              className="img-fluid rounded-start"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;