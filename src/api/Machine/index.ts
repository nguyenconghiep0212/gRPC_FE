/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AxiosBody } from '@/type/Axios'
import axios from '../axios'
import type { ListModel } from '@/type/ListType'
import type { MachineType } from '@/type/MachineType'

async function MachineListAsync(body: AxiosBody): Promise<ListModel<MachineType>>{
  try {
    const response = await axios.post('/api/devices/list', body)
    return response.data
  } catch (error) {
    throw error
  }
}

export { MachineListAsync }
