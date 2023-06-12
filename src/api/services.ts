import { useFetch } from '@/utils/http'
import type { Services } from '@/@types/services'
import type { IResponse } from '@/@types/responses'
import type { HeartBeatEvent } from '@/@types/events'

export async function getServiceList() {
  const api = useFetch()
  return api.get<IResponse<Services>>('/services')
}

export async function getBeats(serviceId: string) {
  const api = useFetch()
  return await api.get<IResponse<HeartBeatEvent[]>>('/beats', { query: { serviceId } })
    .then((res) => {
      return res.data
    })
}
