import { ERSuser } from "../models/ers-user";
import {devboardsClient } from "./devboards-client";

export async function updateUser(ERS_USER_ID: number, USERNAME:string, PASSWORD: string, 
                            FIRST_NAME: string, LAST_NAME: string, EMAIL: string, ROLE_NAME: string): Promise<ERSuser> {
    let response = await devboardsClient.patch('/users', {ERS_USER_ID, USERNAME, PASSWORD, FIRST_NAME, LAST_NAME, EMAIL, ROLE_NAME});
    console.log('from updateUser()', response)
    return await response.data;
}