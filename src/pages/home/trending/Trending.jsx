import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import Carousel from '../../../components/carousel/Carousel'
import { useState } from 'react'
import useFetch from '../../../hooks/useFetch'

const Trending = () => {
      const [endpoint, setEndpoint] = useState("day");
  
      const { data, loading } = useFetch(`/trending/movie/${endpoint}`);
  
      const onTabChange = (tab) => {
        setEndpoint(tab === "Day" ? "day" : "week");
        // setEndpoint(tab === "Day" ? "day" : tab === "Week" ? "week" : "month");
      };
  
      return (
          <div className="carouselSection">
              <ContentWrapper>
                  <span className="carouselTitle">Trending</span>
                  <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
              </ContentWrapper>
              <Carousel data={data?.results} loading={loading} />
          </div>
      );
  };
  
  export default Trending;