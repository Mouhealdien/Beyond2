
// Define interfaces for the nested structures
export interface SubTitle {
    ar: string[];
    en: string[];
  }
  
  export interface StatisticDetail {
    _id: string;
    title: {
      ar: string;
      en: string;
      _id: string;
    };
    number: string;
  }
  
  export interface Testimonial {
    _id: string;
    name: {
      ar: string;
      en: string;
      _id: string;
    };
    job: {
      ar: string;
      en: string;
      _id: string;
    };
    description: {
      ar: string;
      en: string;
      _id: string;
    };
    img: string;
  }
  
  export interface Certificate {
    _id: string;
    title: {
      ar: string;
      en: string;
      _id: string;
    };
    img: string;
    year: number;
    issuedBy: string;
  }
  
  // Define the Home interface to represent the home object structure
  export interface Home {
    subTitle: SubTitle;
    _id: string;
    title: {
      ar: string;
      en: string;
      _id: string;
    };
    statisticTitle: {
      ar: string;
      en: string;
      _id: string;
    };
    statistic: StatisticDetail[];
    quote: {
      ar: string;
      en: string;
      _id: string;
    };
    testimonialTitle: {
      ar: string;
      en: string;
      _id: string;
    };
    testimonialSubTitle: {
      ar: string;
      en: string;
      _id: string;
    };
    testimonials: Testimonial[];
    certificatesTitle: {
      ar: string;
      en: string;
      _id: string;
    };
    certificates: Certificate[];
  }
  
  // Adjust the ResponseData interface to include the home object
  export interface ResponseData {
    home: Home;
    statistics:StatisticDetail[];
    testimonials: Testimonial[];
  }
  
  // Update the ApiResponse type if needed based on the overall structure
  export type HomeResponse = {
    status: string;
    data: ResponseData;
  };
  