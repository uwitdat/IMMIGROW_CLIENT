import { useEffect, useState } from "react";
import Mentor from "../Mentor/Mentor";
import axios from "axios";
import FooterBar from "../FooterBar/FooterBar";
import DetailsHeader from "../DetailsHeader/DetailsHeader";
import './MentorsPage.css'

const MentorsPage = () => {
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const getMentors = async () => {
    //DEVELOPMENT
    // const res = await axios.get("http://localhost:3001/mentors");

    //PRODUCTION
    const res = await axios.get("https://immigrow-server.herokuapp.com/mentors");
    setMentors(res.data);
    setLoading(false)
  };
  useEffect(() => {
    getMentors();
  }, []);

  return (
    <div className='padding-extra'>
      <DetailsHeader />
      {loading ? <div className='load-contain'> <div class="lds-ring"><div></div><div></div><div></div><div></div></div> </div> : null}

      {mentors.map((mentor) => (
        <Mentor key={mentor._id} mentor={mentor} />
      ))}

      <FooterBar />
    </div>
  );
};
export default MentorsPage;
