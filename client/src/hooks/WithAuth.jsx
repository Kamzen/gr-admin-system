import React, { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";

const WithAuth = (Component) => {

  return (props) => {
    const user = false
    // const userInfo = useSelector((state) => state.AuthDuck.userInfo);

    // let user = {
    //   ...userInfo?.user,
    //   token: userInfo?.token,
    //   userType: userInfo?.user?.user_type?.type,
    // };

    // // return user compaany name and user_type

    // let companyDetails;

    // userInfo?.user?.companies_users?.map(
    //   (company) =>
    //     (companyDetails = {
    //       company: company.company.name,
    //       companyRole: company.user_type,
    //       companyId: company.company.id,
    //     })
    // );

    // const modules = userInfo?.user?.Modules_users?.map(
    //   (module) => module?.Module?.name
    // );

    // const moduleAccess = userInfo?.user?.Modules_users;

    if (!user) {
      return false
    } else {
      return (
        <Component
          user={user}
          {...props}
        />
      );
    }
  };
};

export default WithAuth;