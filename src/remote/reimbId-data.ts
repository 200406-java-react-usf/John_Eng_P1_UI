import { ERSreimb} from "../models/ers-reimb";
import {devboardsClient } from "./devboards-client";

export async function getReimbById(id: number): Promise<ERSreimb> {
    let response = await devboardsClient.get(`/emplReimbs?reimb_id=${id}`);
    console.log('what is the return value after getReimbById() called')
    console.log(response.data)
    return response.data;
}

