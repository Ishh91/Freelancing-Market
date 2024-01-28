// 1.28.50
import React from "react";
import './home.scss';
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/Trusted By/TrustedBy";
import Slide from "../../components/Slide/Slide";
import { cards, projects } from "../../data";
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return ([
        <div className="home">
            {<Featured></Featured>
          }

        </div>
    ]);
}
export default Home;