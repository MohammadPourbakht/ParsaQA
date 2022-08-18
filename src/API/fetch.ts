import axios from "axios";

const BaseUrl = "http://test.najaf4.ik8.ir/api";
const postUrl = "https://parseapi.back4app.com/classes/Dataset";


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


export async function Post<T>( data: any) {
  var headers = {
    "content-type": "application/json",
        "X-Parse-Application-Id": "XUQBWvnkgOu0EiIHlh7AzEKN8rZLvgffPqzv6tDq",
        "X-Parse-REST-API-Key": "0cNXNIg3sLywHFGl2lvROSGHhQBYxyoCStyEcwjX",

    // Authorization: `X-Parse-Application-Id "XUQBWvnkgOu0EiIHlh7AzEKN8rZLvgffPqzv6tDq" X-Parse-REST-API-Key "0cNXNIg3sLywHFGl2lvROSGHhQBYxyoCStyEcwjX"`,

    // Authorization: `Token ${localStorage.getItem("token")}`,
  };

  let response = await axios.post(postUrl, data , {headers:headers} );


  return response.data as T;
}




// curl -X POST \
// -H "X-Parse-Application-Id: XUQBWvnkgOu0EiIHlh7AzEKN8rZLvgffPqzv6tDq" \
// -H "X-Parse-REST-API-Key: 0cNXNIg3sLywHFGl2lvROSGHhQBYxyoCStyEcwjX" \
// -H "Content-Type: application/json" \
// -d '{"myCustomKey1Name":"myCustomKey1Value","myCustomKey2Name":"myCustomKey2Value"}' \
// https://parseapi.back4app.com/classes/MyCustomClassName

//
// export async function Post<T>( data: any) {
//   let response = await fetch(postUrl, {
//     body: JSON.stringify(data),
//     method: "POST",
//     headers: {
//       "content-type": "application/json",
//       "X-Parse-Application-Id": "XUQBWvnkgOu0EiIHlh7AzEKN8rZLvgffPqzv6tDq",
//       "X-Parse-REST-API-Key": "0cNXNIg3sLywHFGl2lvROSGHhQBYxyoCStyEcwjX",
//
//       // Authorization: `X-Parse-Application-Id "XUQBWvnkgOu0EiIHlh7AzEKN8rZLvgffPqzv6tDq" X-Parse-REST-API-Key "0cNXNIg3sLywHFGl2lvROSGHhQBYxyoCStyEcwjX"`,
//
//       // Authorization: `Token ${localStorage.getItem("token")}`,
//     },
//     mode: "cors",
//   });
//   return (await response.json()) as T;
// }

