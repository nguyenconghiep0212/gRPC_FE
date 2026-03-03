/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AxiosBody } from '@/type/Axios'
import axios from '../axios'

const MachineListAsync = async (body: AxiosBody): Promise<any> => {
  try {
    const response = await axios.post('/api/devices/list', body)
    return response.data
  } catch (error) {
    throw error
  }
}

export { MachineListAsync }
