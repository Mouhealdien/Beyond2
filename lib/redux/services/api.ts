import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_API_URL } from '../../../constants/settings'
import { HomeResponse } from '../../../common/types/home'
import { AboutUsResponse } from '../../../common/types/about-us'
import { ServicesResponse } from '../../../common/types/services'
import { ContactFormData } from '../../../common/types/contact'

const Url=BASE_API_URL
export const Api = createApi({
  reducerPath: 'Api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
  endpoints: (builder) => ({
    getHome: builder.query<HomeResponse, void>({
      query: () => `/admin/home`,
    }),
    getAbouUs: builder.query<AboutUsResponse, void>({
        query: () => `/admin/about-us`,
      }),
    getServices: builder.query<ServicesResponse, void>({
        query: () => `/admin/services`,
      }),

    sendEmail: builder.mutation<ContactFormData,{formData: ContactFormData;}>({
			query: (requestBody) => ({
				url: '/contact-us',
				method: 'POST',
				body: JSON.stringify(requestBody),
				headers: {
					'Content-Type': 'application/json',
				},
			}),
		}),

  }),
})

export const { useGetHomeQuery ,useGetAbouUsQuery ,useGetServicesQuery ,useSendEmailMutation } = Api