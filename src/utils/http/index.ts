import { FetchError, type FetchOptions, ofetch } from 'ofetch'
import { errorNotification } from '@/utils/notification'

const apiBaseUrl = import.meta.env.VITE_API_PATH

function mergeOptions<R extends 'json'>(options: FetchOptions, given: FetchOptions): FetchOptions<R> {
  return {
    ...options,
    ...given,
  } as FetchOptions<R>
}

const defaultOptions: FetchOptions = {
  headers: {
    'Accept': 'application/json',
    'Cache-Control': 'no-cache',
  },
  // parseResponse: (resp) => {
  //   console.log('parseResponse', resp)
  //   return JSON.parse(resp)
  // },
  /*
  async onResponse({ request, response, options }) {
    // Log response
    console.log('[fetch response]', request, response.status, response.body)
    console.log('[response]', response)
  },
  async onResponseError({ request, response, options }) {
    // Log error
    console.log('[fetch response error]', request, response, response.status, response.body)
  },
  */
}

function catchErr(promise: Promise<any>): Promise<any> {
  return promise.catch((err) => {
    if (err instanceof FetchError) {
      if (err.response === undefined) {
        errorNotification('API server is unavailable')
        return
      }
    }

    return Promise.reject(err)
  })
}

/**
 * @example
 *  const api = useFetch({ baseURL:'/api' })
 *  api.get('/services')
 */
export function useFetch(options: FetchOptions = {}) {
  if (!options.baseURL)
    options.baseURL = apiBaseUrl

  const apiFetch = ofetch.create(options)

  return {
    get: <T>(url: string, options: FetchOptions = {}): Promise<T> =>
      catchErr(apiFetch<T>(url, mergeOptions(defaultOptions, options))),
  }
}
