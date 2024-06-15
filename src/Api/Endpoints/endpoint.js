export const endpoint = {
    auth: {
      signup: "/user/signup",
      // login: "/user/signin",
      profileDetails: "/user/profile-details",
    },
    cms: {
      list: "/product/list",
      create: "/product/create",
      Detail: "/product/detail",
      Update: "/product/update",
      Delete: "/product/remove"
    },
  };
  
  export const sucessNotificationEndPoints = [
    // endpoints.auth.signup,
    endpoint.auth.signup,
    // endpoint.auth.login,
    endpoint.auth.profileDetails,
    endpoint.cms.list,
    endpoint.cms.create,
    endpoint.cms.Detail,
    endpoint.cms.Update,
    endpoint.cms.Delete
  ];