import { ERSreimb } from "../models/ers-reimb";
import {devboardsClient } from "./devboards-client";

export async function updateReimb(REIMB_ID: number, AMOUNT: number, RECEIPT: string, DESCRIPTION: string, REIMB_TYPE: string): Promise<ERSreimb> {
    let response = await devboardsClient.patch('/emplReimb', {REIMB_ID, AMOUNT, RECEIPT, DESCRIPTION, REIMB_TYPE});
    console.log('from updateUser()', response)
    return await response.data;
}