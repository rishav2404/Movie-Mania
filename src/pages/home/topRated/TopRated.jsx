import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import Carousel from '../../../components/carousel/Carousel'
import { useState } from 'react'
import useFetch from '../../../hooks/useFetch'

const TopRated = () => {
      const [endpoint, setEndpoint] = useState("movie");
  
      const { data, loading } = useFetch(`/${endpoint}/top_rated`);
  
      const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv");
        // setEndpoint(tab === "Day" ? "day" : tab === "Week" ? "week" : "month");
      };
  
      return (
          <div className="carouselSection">
              <ContentWrapper>
                  <span className="carouselTitle">Top Rated</span>
                  <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
              </ContentWrapper>
              <Carousel data={data?.results}
               loading={loading}
               endpoint={endpoint} />
          </div>
      );
  };
  
  export default TopRated;