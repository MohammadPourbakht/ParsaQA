import axios from "axios";

const BaseUrl = "http://80.najaf4.ik8.ir/api";

export async function Get<T>(url: string) {
  let response = await fetch(BaseUrl + url, {
    method: "GET",
    // headers: [
    //   ["Content-Type", "application/json"],
    //   ["Authorization",
    //     // "Token " + localStorage.getItem("token")
    //   ],
    // ],
  });
  return (await response.json()) as T;
}












export async function Post<T>(url: string, data: any) {
  let response = await axios.post(BaseUrl + url, data);
  return response.data as T;
}

export async function PostByToken<T>(url: string, data: any) {
  let response = await fetch(BaseUrl + url, {
    body: JSON.stringify(data),
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
    mode: "cors",
  });
  return (await response.json()) as T;
}

async function PostFormData2<T>(url: string, data: any){
  const keys = Object.keys(data)
  const formData = new FormData()
  for (const key in keys) {
    formData.append(key, data[key])
  }
  let response = await fetch(BaseUrl + url, {
    body: formData,
    method: "POST",
    headers: [
      // ["Content-Type", "application/form-data"],
      ["Authorization", "Token " + localStorage.getItem('token')],
    ],
  });
  return (await response.json()) as T;
}


export async function PutFormData2<T>(url: string, data: any){
  const keys = Object.keys(data)
  const formData = new FormData()
  for (const key in keys) {
    formData.append(key, data[key])
  }
  let response = await fetch(BaseUrl + url, {
    body: formData,
    method: "PUT",
    headers: [
      // ["Content-Type", "application/form-data"],
      ["Authorization", "Token " + localStorage.getItem('token')],
    ],
  });
  return (await response.json()) as T;
}

export async function PostFormData<T>(url: string, data: FormData) {
  let response = await fetch(BaseUrl + url, {
    body: data,
    method: "POST",
    headers: [
      // ["Content-Type", "application/form-data"],
      ["Authorization", "Token " + localStorage.getItem('token')],
    ],
  });
  return (await response.json()) as T;
}


export async function PutFormData<T>(url: string, data: FormData) {
  let response = await fetch(BaseUrl + url, {
    body: data,
    method: "PUT",
    headers: [
      // ["Content-Type", "application/form-data"],
      ["Authorization", "Token " + localStorage.getItem('token')],
    ],
  });
  return (await response.json()) as T;
}

export async function GetFormData<T>(url: string) {
  let response = await fetch(BaseUrl + url, {
    method: "GET",
    headers: [
      ["Content-Type", "application/json"],
      ["Authorization", "Token " + localStorage.getItem("token")],
    ],
  });
  return (await response.formData()) as unknown as T;
}

//***********************************************
//
// export async function Get<T>(url: string) {
//     const res = await fetch(BaseUrl + url);
//     if (!res.ok) {
//       const message = `An error has occured: ${res.status} - ${res.statusText}`;
//       throw new Error(message);
//     }
//
//     const data = await res.json();
//
//     const result = {
//       status: res.status + "-" + res.statusText,
//       headers: {
//         "Content-Type": res.headers.get("Content-Type"),
//         "Content-Length": res.headers.get("Content-Length"),
//       },
//       length: res.headers.get("Content-Length"),
//       data: data,
//     };
//   return (await res.json()) as T;
// }
//**************************************************

export async function GetByArgs<T>(url: string, args: any) {
  let response = await fetch(BaseUrl + url, {
    body: JSON.stringify(args),
    method: "GET",
    headers: [
      ["Content-Type", "application/json"],
      ["Authorization", "Token " + localStorage.getItem("token")],
    ],
  });
  return (await response.json()) as T;
}
export async function Delete<T>(url: string) {
  let response = await fetch(BaseUrl + url, {
    method: "DELETE",
    headers: [
      ["Content-Type", "application/json"],
      ["Authorization", "Token " + localStorage.getItem("token")],
    ],
  });
  return (await response.json()) as T;
}

export async function Put<T>(url: string, data: any) {
  let response = await axios.put(BaseUrl + url, data);
  return response.data as T;
}

export async function PutByToken<T>(url: string, data: any) {
  let response = await fetch(BaseUrl + url, {
    body: JSON.stringify(data),
    method: "PUT",
    headers: [
      ["Content-Type", "application/json"],
      ["Authorization", "Token " + localStorage.getItem("token")],
    ],
  });
  return (await response.json()) as T;
}
export async function Patch<T>(url: string, data: any) {
  let response = await fetch(BaseUrl + url, {
    body: JSON.stringify(data),
    method: "PATCH",
    headers: [
      ["Content-Type", "application/json"],
      // {"Content-Type": "application/json"},
      ["Authorization", "Token " + localStorage.getItem("token")],
      // ["Authorization","Token "],
    ],
  });
  return (await response.json()) as T;
}
