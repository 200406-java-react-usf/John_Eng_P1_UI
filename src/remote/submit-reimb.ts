import { ERSreimb } from "../models/ers-reimb";
import {devboardsClient } from "./devboards-client";

export async function submitReimb(AMOUNT: string, SUBMITTED: Date, DESCRIPTION: string, RECEIPT: string | null, AUTHOR_USERNAME: string
                                , REIMB_STATUS: string, REIMB_TYPE: string): Promise<ERSreimb> {
    let response = await devboardsClient.post('/emplReimbs', {
        AMOUNT: AMOUNT,
        SUBMITTED: SUBMITTED,
        DESCRIPTION: DESCRIPTION,
        RECEIPT: RECEIPT,
        AUTHOR_USERNAME: AUTHOR_USERNAME,
        REIMB_STATUS: REIMB_STATUS,
        REIMB_TYPE: REIMB_TYPE
    })

    console.log('from submitReimb()', response)
    return await response.data;
}