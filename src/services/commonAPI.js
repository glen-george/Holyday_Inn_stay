import axios from "axios";

const commonAPI = async (httpMethod, url, Reqbody) => {
  const reqconfig = {
    method: httpMethod,
    url,
    data: Reqbody,
  };

  try {
    const result = await axios(reqconfig);
    return result;
  } catch (error) {
    return error;
  }
};

export default commonAPI;