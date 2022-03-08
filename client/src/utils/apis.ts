export const getApi = async (endPoint: string) => {
  const headers: HeadersInit = {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };

  // console.log(API_URL);

  // const token = window.localStorage.getItem("token");
  // if (!token) {
  //   logout();
  //   return;
  // }

  // headers.Authorization = `Bearer ${token}`;
  const API_URL = process.env.REACT_APP_API_URL;

  try {
    console.log(`[API][getApi] Send GET API call to ${API_URL}${endPoint}.`);
    const rawResponse = await fetch(`${API_URL}${endPoint}`, {
      headers,
      method: "GET",
      mode: "cors",
    }).then((result) => result);

    if (rawResponse.status !== 200 && rawResponse.status !== 201) {
      alert("err");
      // logout();
      return;
    }
    // eslint-disable-next-line consistent-return
    return await rawResponse.json();
  } catch (e) {
    console.error(`[API][getApi] GET API call failed ${e}`);
    throw e;
  }
};

export const postApi = async (
  endPoint: string,
  data: Record<string, unknown>
) => {
  const headers: HeadersInit = {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };

  try {
    // const token = window.localStorage.getItem("token");
    // if (!token) {
    //   logout();
    //   return;
    // }

    // headers.Authorization = `Bearer ${token}`;
    const API_URL = process.env.REACT_APP_API_URL;

    console.info(`[API][getApi] Send POST API call to ${API_URL}${endPoint}.`);
    const rawResponse = await fetch(`${API_URL}${endPoint}`, {
      body: JSON.stringify(data),
      headers,
      method: "POST",
      mode: "cors",
    }).then((result) => result);

    if (rawResponse.status !== 200 && rawResponse.status !== 201) {
      // logout();
      alert("err");
      return;
    }

    // eslint-disable-next-line consistent-return
    return await rawResponse.json();
  } catch (e) {
    console.error(`[API][getApi] POST API call failed ${e}`);
    throw e;
  }
};

export const deleteApi = async (endPoint: string) => {
  const headers: HeadersInit = {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };

  try {
    const API_URL = process.env.REACT_APP_API_URL;

    console.info(
      `[API][getApi] Send DELETE API call to ${API_URL}${endPoint}.`
    );
    const rawResponse = await fetch(`${API_URL}${endPoint}`, {
      headers,
      method: "DELETE",
      mode: "cors",
    }).then((result) => result);

    if (rawResponse.status !== 204) {
      // logout();
      alert("err");
      return;
    }

    // eslint-disable-next-line consistent-return
    return await rawResponse.json();
  } catch (e) {
    console.error(`[API][getApi] POST API call failed ${e}`);
    throw e;
  }
};

export const updateApi = async (
  endPoint: string,
  data: Record<string, unknown>
) => {
  const headers: HeadersInit = {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };

  try {
    // const token = window.localStorage.getItem("token");
    // if (!token) {
    //   logout();
    //   return;
    // }

    // headers.Authorization = `Bearer ${token}`;
    const API_URL = process.env.REACT_APP_API_URL;

    console.info(
      `[API][updateApi] Send updateApi API call to ${API_URL}${endPoint}.`
    );
    const rawResponse = await fetch(`${API_URL}${endPoint}`, {
      body: JSON.stringify(data),
      headers,
      method: "PATCH",
      mode: "cors",
    }).then((result) => result);

    if (rawResponse.status !== 200 && rawResponse.status !== 201) {
      // logout();
      alert("err");
      return;
    }

    // eslint-disable-next-line consistent-return
    return await rawResponse.json();
  } catch (e) {
    console.error(`[API][getApi] POST API call failed ${e}`);
    throw e;
  }
};
