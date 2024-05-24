// Define the Service interface
export interface Service {
    _id: string;
    icon: string;
    title: {
      ar: string;
      en: string;
      _id: string;
    };
    paragraph: {
      ar: string;
      en: string;
      _id: string;
    };
  }
  
  // Adjust the ResponseData interface to include the services array
  export interface ResponseData {
    services: Service[];
    _id: string;
    title: {
      ar: string;
      en: string;
      _id: string;
    };
    __v: number;
  }
  
  // Update the ApiResponse type to reflect changes in the data structure
  export type ServicesResponse = {
    status: string;
    results: number; // Added to match the new structure
    data: ResponseData;
  };
  