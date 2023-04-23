import axios from "axios";

export const signup = async (name, email, password, passwordConfirm) => {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/v1/users/signup",
      data: {
        name,
        email,
        password,
        passwordConfirm,
      },
    });

    if (res.data.status === "success") {
      console.log("success", "Signed up successfully!");
      window.setTimeout(() => {
        location.assign("/");
      }, 1500); // milisecond
    }
    // console.log('res', res);
  } catch (err) {
    console.log("error", err);
  }
};

export const urlshorten = async (url) => {
  try {
    const res = await axios({
      method: "POST",
      url: "/short",
      data: {
        url,
      },
    });

    if (res.data.status === "success") {
      console.log("success", "Url Shorten up successfully!");
      console.log(res.data.data.URL.url); // milisecond
    }
    // console.log('res', res);
  } catch (err) {
    console.log("error", err);
  }
};
