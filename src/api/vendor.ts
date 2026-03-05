/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AxiosBody } from '@/type/Axios'
import axios from './axios'
import type { VendorType } from '@/type/vendorType'
import type { ListModel } from '@/type/ListType'

const VendorListAsync = async (params: AxiosBody): Promise<ListModel<VendorType>> => {
  try {
    const response = await axios.post('/api/vendors/list', params)
    return response.data
  } catch (error) {
    throw error
  }
}

export { VendorListAsync }
