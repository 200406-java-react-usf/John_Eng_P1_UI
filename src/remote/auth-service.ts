import { User } from "../dtos/user";
import {devboardsClient } from "./devboards-client";

export async function authenticate(username:string, password: string): Promise<User> {
    let response = await devboardsClient.post('/auth', {username, password});
    console.log('what is the return value after authenticate() called')
    console.log(response.data)
    return await response.data;
}

export async function invalidateSession(){
    console.log('logout is called')
    return await devboardsClient.get('/auth');
}