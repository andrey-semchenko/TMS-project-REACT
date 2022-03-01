export interface UsersResponse {
    results: User[];
    info: UsersInfo;
};

interface UName {
    title: string;
    first: string;
    last: string;
};

interface Ulocation {
    street: ULocStreet;
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates:ULocCoordinates;
    timezone: ULocTimezone;
};

interface ULocStreet {
    number: number;
    name: string;
};

interface ULocCoordinates {
    latitude: string;
    longitude: string;
};

interface ULocTimezone {
    offset: string;
    description: string;
};

interface ULogin {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
};

interface UDob {
    date: string;
    age: number;
};

interface URegistered {
    date: string;
    age: number;
};

interface UId {
    name: string;
    value: string;
};

interface UPicture {
    large: string;
    medium: string;
    thumbnail: string;
};

interface UsersInfo {
    seed: string;
    results: number;
    page: number;
    version: string;
};

export interface User {
    gender: string;
    name: UName;
    location:Ulocation;
    email: string;
    login: ULogin;
    dob: UDob;
    registered: URegistered;
    phone: string;
    cell: string;
    id: UId;
    picture: UPicture;
    nat: string;
};

export interface UsersRequestParams {
    gender: string,
    nat: string,
    results: number,
    page: number,
}