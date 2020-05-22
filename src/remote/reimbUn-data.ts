import { ERSreimb} from "../models/ers-reimb";
import {devboardsClient } from "./devboards-client";

export async function getAllReimbByUserName(USERNAME: string): Promise<ERSreimb[]> {
    let response = await devboardsClient.get(`/emplReimbs/${USERNAME}`);
    console.log('what is the return value after getAllReimbByUserName() called')
    console.log(response.data)
    return response.data;
}

