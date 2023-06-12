import { defineStore } from 'pinia'
import type { Services } from '@/@types/services'
import { getServiceList } from '@/api/services'

// export const monitorFilter = ref('')

export interface IMonitorsState {
  serviceList: Services
  monitorListFilter: string
  endPointSelected: string
}

export const useMonitor = defineStore('monitor', {
  state(): IMonitorsState {
    return {
      serviceList: [],
      monitorListFilter: '',
      endPointSelected: '',
    }
  },
  getters: {
    filteredServiceList: (state) => {
      if (state.monitorListFilter === '')
        return state.serviceList

      return state.serviceList.filter((item) => {
        return item.url.includes(state.monitorListFilter)
      })
    },
  },
  actions: {
    async getList() {
      const list = await getServiceList()

      this.serviceList = list.data
    },
  },
})
