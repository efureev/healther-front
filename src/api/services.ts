import { useFetch } from '@/utils/http'
import type { Services } from '@/@types/services'
import type { IResponse } from '@/@types/responses'

export async function getServiceList() {
  const api = useFetch()
  return api.get<IResponse<Services>>('/services')
}
