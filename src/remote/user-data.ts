import { ERSuser} from "../models/ers-user";
import {devboardsClient } from "./devboards-client";

export async function getAllUser(): Promise<ERSuser[]> {
    let response = await devboardsClient.get('/users');
    console.log('what is the return value after getAllUser() called')
    console.log(response.data)
    return response.data;
}

