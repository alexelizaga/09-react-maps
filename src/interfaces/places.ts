// Generated by https://quicktype.io

export interface PlacesResponse {
    type:        string;
    query:       string[];
    features:    Feature[];
    attribution: string;
}

export interface Feature {
    id:                  string;
    type:                string;
    place_type:          string[];
    relevance:           number;
    properties:          Properties;
    text_es:             string;
    place_name_es:       string;
    text:                string;
    place_name:          string;
    matching_place_name: string;
    center:              number[];
    geometry:            Geometry;
    context:             Context[];
    bbox?:               number[];
    language_es?:        Language;
    language?:           Language;
}

export interface Context {
    id:           string;
    wikidata?:    string;
    text_es:      string;
    language_es?: Language;
    text:         string;
    language?:    Language;
    short_code?:  Language;
}

export enum Language {
    Es = "es",
}

export interface Geometry {
    type:        string;
    coordinates: number[];
}

export interface Properties {
    accuracy?: string;
    wikidata?: string;
}
