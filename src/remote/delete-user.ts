import { ERSuser } from "../models/ers-user";
import {devboardsClient } from "./devboards-client";

export async function deleteUser(ERS_USER_ID: number) {
    await devboardsClient.delete('/users', {params:{ERS_USER_ID}});
 
 
}