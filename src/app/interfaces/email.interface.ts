export interface Email {
    from_name: string,
    to_name: string,
    message: string
}

export interface UserEmail { 
    serviceID: string,
    templateID: string,
    publicKey: string 
}