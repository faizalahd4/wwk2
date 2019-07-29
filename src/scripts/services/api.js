/**
 * Copyright (c) 2019
 * API Calls
 * 
 * @summary API Calls
 * @author  Faizal
 * 
 * Created at: 2019 July 26
 */

export const PostService = (api, postData) => {
	let BaseUrl = api;
	
	return new Promise((resolve,reject)=>{
		fetch(BaseUrl, {
			method:'POST',
			body: JSON.stringify(postData)

		})
		.then((response)=> response.json())
		.then((responseJson)=>{
			resolve(responseJson);
		})
		.catch((error)=>{
			console.log("request error messge",error);
			reject(error);
		});
	});
}
export const GetService = (api, postData) => {
	let BaseUrl = api;
	return new Promise((resolve,reject)=>{
		fetch(BaseUrl, {
			method:'GET',
			data: postData
		})
		.then((response)=> response.json())
		.then((responseJson)=>{
			resolve(responseJson);
		})
		.catch((error)=>{
			console.log("request error messge",error);
			reject(error);
		});
	});
}
