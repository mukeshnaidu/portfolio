import React from "react";
import centrepoint from "../../assets/images/centrepoint.svg";

function Profile() {
  return (
    <div>
      <header className="bg-white h-14">
        <img className="h-10" src={centrepoint} alt="BrandLogo"></img>
      </header>
      <body>
        <h1>My First Heading</h1>
        <hr className="mx-20 my-5 bg-gradient-to-br h-1 from-violet-400 to to-violet-800" />
        <figure>
          <img></img>
        </figure>
      </body>
    </div>
  );
}

export default Profile;
