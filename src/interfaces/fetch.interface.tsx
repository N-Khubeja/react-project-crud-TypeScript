export interface fetch {
    name:string
}

export interface fetchprops {
    url:string,
    method:string
}

export interface requesprops {
    url?:string,
    method:string
}

export interface sendbody {
    body:any     
}

export interface forusersprops {
    action: (firstname: string | number, lastname: string | number) => void,
    deffirstname?:string,
    deflastname?:string
}

export interface items {
    firstname:string | number,
    lastname:string | number,
    _uuid:string
}

export interface FetchResponse {
    items: [];
}

export interface fetchuser {
    firstname: string
    lastname: string
    _created: number
    _data_type: string
    _is_deleted: boolean
    _modified: number
    _self_link: string
    _user: string
    _uuid: string
    
}

