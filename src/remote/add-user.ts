import { ERSuser } from "../models/ers-user";
import {devboardsClient } from "./devboards-client";

export async function addNewUser(USERNAME:string, PASSWORD: string, 
                            FIRST_NAME: string, LAST_NAME: string, EMAIL: string, ROLE_NAME: string): Promise<ERSuser> {
    let response = await devboardsClient.post('/users', {USERNAME, PASSWORD, FIRST_NAME, LAST_NAME, EMAIL, ROLE_NAME});
    console.log('from addNewUser()', response)
    return await response.data;
}