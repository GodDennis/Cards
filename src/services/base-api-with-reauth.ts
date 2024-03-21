import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query'

import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { publicRouts, router } from '../router'

export const baseQueryWithReauth: BaseQueryFn<
  FetchArgs | string,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const skipRoutes = publicRouts.map(el => el.path)

  const baseQuery = fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es',
    credentials: 'include',
  })

  let result = await baseQuery(args, api, extraOptions)

  if (result.error && result.error.status === 401) {
    const refreshResult = await baseQuery(
      { method: 'POST', url: '/v1/auth/refresh-token' },
      api,
      extraOptions
    )

    if (refreshResult.meta?.response?.status === 204) {
      result = await baseQuery(args, api, extraOptions)
    } else {
      const currentPath = window.location.pathname
      const skip = skipRoutes.filter(route => route && currentPath.includes(route))

      if (skip.length) {
        router.navigate('/login')
      }
    }
  }

  return result
}
