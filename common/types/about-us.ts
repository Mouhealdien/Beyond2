export interface CompanyBio {
    title: {
      ar: string;
      en: string;
    };
    paragraph: {
      ar: string;
      en: string;
    };
  }
  
  export interface WhatWeDo {
    title: {
      ar: string;
      en: string;
    };
    paragraph: {
      ar: string;
      en: string;
    };
  }
  
  export interface OurVision {
    title: {
      ar: string;
      en: string;
    };
    paragraph: {
      ar: string;
      en: string;
    };
  }
  
  export interface OurMission {
    title: {
      ar: string;
      en: string;
    };
    paragraph: {
      ar: string;
      en: string;
    };
  }
  
  export interface OurGoals {
    title: {
      ar: string;
      en: string;
    };
    paragraph: {
      ar: string;
      en: string;
    };
  }
  
  export interface OurPromise {
    title: {
      ar: string;
      en: string;
    };
    paragraph: {
      ar: string;
      en: string;
    };
  }
  
  // Combine these interfaces into a single data structure
  export interface ResponseData {
    companyBio: CompanyBio;
    whatWeDo: WhatWeDo;
    ourVision: OurVision;
    ourMission: OurMission;
    ourGoals: OurGoals;
    ourPromise: OurPromise;
    _id: string;
    title: {
      ar: string;
      en: string;
      _id: string;
    };
    __v: number;
  }
  
  // Export the entire API response structure
  export type AboutUsResponse = {
    status: string;
    data: ResponseData;
  };