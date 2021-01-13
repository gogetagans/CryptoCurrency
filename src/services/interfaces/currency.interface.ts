export interface Currency {
    id?: number,
    acronym?: string,
    name?: string
    content?: CurrencyBody[],
    body?: CurrencyBody,
    links?: CurrencyLinks[],
    _embedded?: Embedded,
    _links?: WelcomeLinks,
    page?: Page;
   
}

export interface Embedded {
    currencies: Currency[];
}

export interface CurrencyBody {
    acronym: string,
    id: number,
    name: string
} 

export interface CurrencyLinks {
    href: string,
    rel: string,
    templated: boolean
}

export interface Profile {
    href: string;
}

export interface WelcomeLinks {
    self:    Self;
    profile: Profile;
}

export interface Self {
    href:      string;
    templated: boolean;
}

export interface Page {
    size:          number;
    totalElements: number;
    totalPages:    number;
    number:        number;
}