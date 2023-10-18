import React, { useEffect, useState } from "react";
import { getUserById } from "../services/apiServices";
import { useParams } from "react-router-dom";


const Header = () => {
    const { id } = useParams();
    const [firstName, setFirstName] = useState("");
  
    useEffect(() => {
      const fetchData = async () => {
        const user = await getUserById(id);
        setFirstName(user.data.userInfos.firstName);
      };
  
      fetchData();
    }, [id]);
    return (
        <>
            <h1 className="header__mainTitle">Bonjour <span className="header__firstName">{firstName}</span></h1>
            <h2 className="header__subTitle">Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
        </>
    );
};

export default Header;