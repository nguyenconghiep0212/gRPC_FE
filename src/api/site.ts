/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AxiosBody } from '@/type/Axios'
import axios from './axios'
import type { SiteType, ListModel } from '@/type'

const SiteListAsync = async (params: AxiosBody): Promise<ListModel<SiteType>> => {
  try {
    const response = await axios.post('/api/sites/list', params)
    return response.data
  } catch (error) {
    throw error
  }
}

export { SiteListAsync }
