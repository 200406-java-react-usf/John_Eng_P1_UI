import { ERSreimb} from "../models/ers-reimb";
import {devboardsClient } from "./devboards-client";

export async function getAllReimb(): Promise<ERSreimb[]> {
    let response = await devboardsClient.get('/reimbs');
    console.log('what is the return value after getAllReimb() called')
    console.log(response.data)
    return response.data;
}

