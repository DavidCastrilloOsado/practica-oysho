export interface Products {
    id: number,
    name: string,
    nameEn?: string,
    color?: Color[],
    longDescription: string,
    reference: string,
    imagepath:string,
    idMedia:string,
    set:number,
    size:string

}
export interface Pokedex {
    id?:                     number;
    type?:                   string;
    name?:                   string;
    nameEn?:                 string;
    image?:                  null;
    backSoon?:               string;
    unitsLot?:               number;
    isTop?:                  number;
    sizeSystem?:             string;
    subFamily?:              string;
    productType?:            string;
    bundleColors?:           any[];
    tags?:                   any[];
    attributes?:             PokedexAttribute[];
    relatedCategories?:      any[];
    attachments?:            any[];
    bundleProductSummaries?: any[];
    detail?:                 Detail;
    field5?:                 string;
    section?:                string;
    family?:                 string;
    sectionName?:            string;
    sectionNameEN?:          string;
    startDate?:              string;
    keywords?:               string;
    mainColorid?:            string;
    familyCode?:             string;
    subFamilyCode?:          string;
    productUrl?:             string;
    gridElemType?:           string;
    availabilityDate?:       Date;
    visibilityValue?:        VisibilityValue;
    alternativeProductId?:   number;
    isBuyable?:              boolean;
    onSpecial?:              boolean;
    rueiData?:               RueiData;
}

export interface PokedexAttribute {
    id?:               string;
    name?:             string;
    value?:            string;
    type?:             string;
    shortDescription?: string;
    longDescription?:  string;
}

export interface Detail {
    description?:       string;
    longDescription?:   string;
    additionalInfo?:    string;
    reference?:         string;
    displayReference?:  string;
    composition?:       Composition[];
    compositionByZone?: CompositionByZone[];
    care?:              Care[];
    colors?:            Color[];
    relatedProducts?:   any[];
    xmediaDefaultSet?:  null;
    xmedia?:            Xmedia[];
    relatedElements?:   any[];
    warnings?:          any[];
    familyInfo?:        FamilyInfo;
    subfamilyInfo?:     SubfamilyInfo;
    joinLife?:          string;
    joinType?:          string;
    isJoinLife?:        boolean;
    promotions?:        any[];
}

export interface Care {
    id?:          string;
    name?:        string;
    description?: string;
    percentage?:  string;
}

export interface Color {
    id?:                string;
    name?:              string;
    image?:             string;
    sizes?:             Size[];
}

export interface Composition {
    part?:        string;
    composition?: Care[];
}

export interface CompositionByZone {
    part?:  string;
    zones?: Zone[];
}

export interface Zone {
    zone?:        string;
    zoneName?:    ZoneName;
    composition?: Care[];
}

export enum ZoneName {
    Principal = "PRINCIPAL",
    Secundario = "SECUNDARIO",
}

export interface Image {
    timestamp?:          string;
    url?:                string;
    aux?:                string[];
    type?:               string[];
    style?:              string[];
    availableEstilismo?: boolean;
}

export interface Size {
    price?:           string;
    name?:            string;
    visibilityValue?: string;
}

export interface SizeAttribute {
    name?: Name;
}

export enum Name {
    Unknown = "UNKNOWN",
}

export enum VisibilityValue {
    Show = "SHOW",
    SoldOut = "SOLD_OUT",
}

export interface FamilyInfo {
    familyId?:   number;
    familyCode?: number;
}

export interface SubfamilyInfo {
    subFamilyId?:   number;
    subFamilyCode?: number;
    subFamilyName?: null;
}

export interface Xmedia {
    path?:            string;
    xmediaItems?:     XmediaItem[];
    colorCode?:       string;
    xmediaLocations?: XmediaLocation[];
}

export interface XmediaItem {
    medias?: Media[];
    set?:    number;
}

export interface Media {
    format?:    number;
    clazz?:     number;
    idMedia?:   string;
    timestamp?: number;
    extraInfo?: ExtraInfo;
}

export interface ExtraInfo {
}

export interface XmediaLocation {
    locations?: Location[];
    set?:       number;
}

export interface Location {
    mediaLocations?: string[];
    location?:       number;
}

export interface RueiData {
    StoreLangRUEI?:     string;
    StoreTypeRUEI?:     string;
    OperationTypeRUEI?: string;
    OperationRUEI?:     string;
    StoreIdRUEI?:       string;
}
