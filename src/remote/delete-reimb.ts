import {devboardsClient } from "./devboards-client";

export async function deleteReimb(REIMB_ID: number) {
    await devboardsClient.delete('/emplReimb', {params:{REIMB_ID}});
}