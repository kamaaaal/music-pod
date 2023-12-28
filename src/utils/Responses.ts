export const StatusCode = {
    ok : 200,
    created : 201,
    failed : 400,
    unAuthorized : 403
} as const

const StatusMessage = {
    200 : "success",
    201 : "created",
    400 : "failed",
    403 : "unauthorized"
} as const

type ResStatus = typeof StatusCode[keyof typeof StatusCode];

export interface ResObject <Tpayload = any> {
    status : string;
    message ?: string;
    errors ?: Record<string,string[]> | string;
    payload ?: Tpayload,
}

export function createResponse<Tpayload>(status : ResStatus,message ?: string, payload ?: Tpayload){
    const resObj : ResObject = {status : StatusMessage[status]}

    if (message) resObj.message = message
    if (payload) resObj.payload = payload;
    return resObj;
}