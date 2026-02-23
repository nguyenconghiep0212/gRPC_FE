/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from '../axios'

const GetMachineListAsync = async (): Promise<any> => {
  try {
    const response = await axios.post('/endpoint')
    return response.data
  } catch (error) {
    throw error
  }
}

export { GetMachineListAsync }
