import { ERSreimb } from "../models/ers-reimb";
import {devboardsClient } from "./devboards-client";

export async function statusUpdate(REIMB_ID: number, RESOLVED: Date, RESOLVER_USERNAME: string, REIMB_STATUS:string): Promise<ERSreimb> {
    let response = await devboardsClient.patch('/reimbs', {REIMB_ID, RESOLVED, RESOLVER_USERNAME, REIMB_STATUS});
    console.log('from updateUser()', response)
    return await response.data;
}