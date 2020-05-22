export class EmpReimb{

    REIMB_ID: number;
    AMOUNT: number;
    SUBMITTED: Date;
    RESOLVED: Date;
    DESCRIPTION: string;
    RECEIPT: string;
    AUTHOR_USERNAME: string;
    AUTHOR_FIRST_NAME: string;
    AUTHOR_LAST_NAME: string;
    RESOLVER_USERNAME: string;
    RESOLVER_FIRST_NAME:string;
    RESOLVER_LAST_NAME: string;
    REIMB_STATUS: string;
    REIMB_TYPE: string;

    constructor(id: number, amt: number, subDate: Date, reDate: Date, 
            des: string, rec: string, authUN: string, authFN: string, authLN: string,
            resolUN: string, resolFN: string, resolLN: string, reimbstat: string, reimbtype: string){
        this.REIMB_ID = id;
        this.AMOUNT = amt;
        this.SUBMITTED = subDate;
        this.RESOLVED = reDate;
        this.DESCRIPTION = des;
        this.RECEIPT = rec;
        this.AUTHOR_USERNAME = authUN;
        this.AUTHOR_FIRST_NAME = authFN;
        this.AUTHOR_LAST_NAME = authLN;
        this.RESOLVER_USERNAME = resolUN;
        this.RESOLVER_FIRST_NAME = resolFN;
        this.RESOLVER_LAST_NAME = resolLN
        this.REIMB_STATUS = reimbstat;
        this.REIMB_TYPE = reimbtype;
        

            }
}