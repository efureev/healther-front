import { defineStore } from 'pinia'
import type { Services } from '@/@types/services'
import { getServiceList } from '@/api/services'

export interface IMonitorsState {
  serviceList: Services
}

export const useMonitor = defineStore('monitor', {
  state(): IMonitorsState {
    return {
      serviceList: [],
    }
  },
  actions: {
    async getList() {
      const list = await getServiceList()

      this.serviceList = list.data

      // console.log(this.serviceList)
      /*
      getServiceList()
        .then((data) => {
          // console.log(this.serviceList)
          this.serviceList = data.data
        })
        .catch((error) => {
          console.log(error)
        })
        */
    },
  },
})