export interface PortfolioLine {
    id?: number;
    name?: string;
    content?: Content[];
    links?:   Link[];
    _embedded?: Embedded;
    _links?:    WelcomeLinks;
    page?:      Page;
    amount?:    number;
    currency?:  Currency;
}


export interface Embedded {
    portfolioLines: PortfolioLine[];
}

export interface Page {
    size:          number;
    totalElements: number;
    totalPages:    number;
    number:        number;
}


export interface First {
    href: string;
}

export interface WelcomeLinks {
    first:   First;
    self:    Self;
    next:    First;
    last:    First;
    profile: First;
}

export interface Self {
    href:      string;
    templated: boolean;
}

export interface Content {
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
    id:    number;
    lines: Line[];
    name:  string;
}

export interface Line {
}

export interface Link {
    href:      string;
    rel:       string;
    templated: boolean;
}