export interface Portfolio {
    id?: number;
    name?: string;
    content?: Content[];
    links?: Link[];
    lines?: Link[];
    body?: Link[];
    _embedded?: Embedded;
    _links?:    WelcomeLinks;
    page?:      Page;
    amount?:    number;
    currency?:  Currency;
 
}

export interface Embedded {
    portfolios: Portfolio[];
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

export interface Content {
    id:    number;
    lines: Line[];
    name:  string;
}

export interface Line {
    amount:    number;
    currency:  Currency;
    id:        number;
    portfolio: Portfolio;
}

export interface Currency {
    acronym: string;
    id:      number;
    name:    string;
}

export interface Portfolio {
}

export interface Link {
    href:      string;
    rel:       string;
    templated: boolean;
}