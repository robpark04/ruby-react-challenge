const API_URL = process.env.REACT_APP_API_URL;

export enum API_POST_TYPES {
  GET = "GET",
  POST = "POST",
  UPDATE = "PATCH",
  DELETE = "DELETE",
}
export const getApi = async (endPoint: string) => {
  const headers: HeadersInit = {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };

  try {
    console.log(`[API][getApi] Send GET API call to ${API_URL}${endPoint}.`);
    const rawResponse = await fetch(`${API_URL}${endPoint}`, {
      headers,
      method: "GET",
      mode: "cors",
    }).then((result) => result);

    if (!rawResponse.ok) {
      alert(rawResponse.statusText);
      return;
    }
    return await rawResponse.json();
  } catch (e) {
    console.error(`[API][getApi] GET API call failed ${e}`);
    throw e;
  }
};

export const postApi = async (
  endPoint: string,
  data: Record<string, unknown>,
  method = API_POST_TYPES.POST
) => {
  const headers: HeadersInit = {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };

  try {
    console.info(`[API][postApi] Send POST API call to ${API_URL}${endPoint}.`);
    const rawResponse = await fetch(`${API_URL}${endPoint}`, {
      body: JSON.stringify(data),
      headers,
      method,
      mode: "cors",
    }).then((result) => result);

    if (!rawResponse.ok) {
      alert(rawResponse.statusText);
      return;
    }

    return await rawResponse.json();
  } catch (e) {
    console.error(`[API][postApi] POST API call failed ${e}`);
    throw e;
  }
};
