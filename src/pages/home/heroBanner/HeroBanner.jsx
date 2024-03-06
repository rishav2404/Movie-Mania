import "./style.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useFetch from "../../../hooks/useFetch";

import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bg = url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="heroBanner">

      {!loading && <div className="backdrop-img">
        <Img src={background} alt="heroBanner" />
      </div>}

      <div className="opacity-layer"></div>

      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="subTitle">Movies,TV Shows And much
            more exotic contents to discover...
          </span>
          <din className="searchInput">
            <input
              type="text"
              placeholder="Search for movies, TV Shows and more..."
              onChange={(event) => setQuery(event.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <button>Search</button>
          </din>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default HeroBanner