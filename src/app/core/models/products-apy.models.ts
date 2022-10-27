export interface RestApy {
    gridElements?: [];
    products: ProductsApy[];
    rueiData?: [];
}
export interface ProductsApy {
    id: number;
    type?: string;
    name: string;
    nameEn?: string;
    image?: null;
    isBuyable?: boolean;
    onSpecial?: boolean;
    backSoon?: null;
    unitsLot?: number;
    isTop?: number;
    sizeSystem?: string;
    subFamily?: string;
    productType?: string;
    bundleColors?: any[];
    tags?: any[];
    attributes?: AttributeApy[];
    relatedCategories?: any[];
    attachments?: any[];
    bundleProductSummaries: ProductsApy[];
    detail: DetailApy;
    field5?: string;
    sequence?: number;
    section?: string;
    family?: string;
    sectionName?: string;
    sectionNameEN?: string;
    startDate?: string;
    productURL?: string;
    gridElemType?: string;
    availabilityDate?: Date;
    productURLTranslations?: any[];
}

export interface AttributeApy {
    id?: string;
    name?: string;
    value?: string;
    type?: string;
    shortDescription?: string;
    longDescription?: string;
}

export interface DetailApy {
    description?: null;
    longDescription?: string;
    additionalInfo?: string;
    reference?: string;
    displayReference?: string;
    isSport?: boolean;
    defaultImageType?: null;
    composition?: any[];
    compositionByZone?: any[];
    care?: any[];
    colors: ColorApy[];
    relatedProducts?: any[];
    xmediaDefaultSet?: null;
    xmedia: XmediaApy[];
    skuDimensions?: DimensionsApy;
    dimensions?: DimensionsApy;
    familyInfo?: FamilyInfoApy;
    subfamilyInfo?: SubfamilyInfoApy;
    isJoinLife?: boolean;
    compositionDetail?: null;
}

export interface ColorApy {
    id: string;
    name: string;
    modelHeigh?: null;
    modelName?: null;
    modelSize?: null;
    image: ImageApy;
    sizes: SizeApy[];
    isContinuity?: boolean;
    joinLifeInfo?: JoinLifeInfoApy;
    compositionDetail?: null;
    colFilter?: any[];
}

export interface ImageApy {
    timestamp: string;
    url: string;
    aux?: string[];
    type?: string[];
    style?: string[];
    availableEstilismo?: boolean;
}

export interface JoinLifeInfoApy {
    descJoinLife?: string;
    isJoinLife?: boolean;
}

export interface SizeApy {
    sku?: number;
    name: string;
    description?: null;
    partnumber?: string;
    isBuyable?: boolean;
    backSoon?: null;
    mastersSizeID?: string;
    position?: number;
    price: string;
    oldPrice?: null;
    sizeType?: string;
    visibilityValue?: VisibilityValue;
}

export enum VisibilityValue {
    Hidden = 'HIDDEN',
    Show = 'SHOW'
}

export interface DimensionsApy { }

export interface FamilyInfoApy {
    familyID?: number;
    familyCode?: number;
    familyName?: null;
}

export interface SubfamilyInfoApy {
    subFamilyID?: number;
    subFamilyCode?: number;
    subFamilyName?: null;
}

export interface XmediaApy {
    path: string;
    xmediaItems: XmediaItemApy[];
    colorCode?: string;
    xmediaLocations?: XmediaLocationApy[];
}

export interface XmediaItemApy {
    medias: MediaApy[];
    set?: number;
}

export interface MediaApy {
    format?: number;
    clazz?: number;
    idMedia: string;
    extraInfo?: null;
    timestamp?: number;
}

export interface XmediaLocationApy {
    locations?: LocationApy[];
    set?: number;
}

export interface LocationApy {
    mediaLocations?: string[];
    location?: number;
}
