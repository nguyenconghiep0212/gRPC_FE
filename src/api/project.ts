import type { AxiosBody, ListModel, ProjectType } from '@/type'
import axios from './axios'

const projectListAsync = async (body: AxiosBody): Promise<ListModel<ProjectType>> => {
  try {
    const response = await axios.post('/api/projects/list', body)
    return response.data
  } catch (error) {
    throw error
  }
}

const projectDetailAsync = async (id: number): Promise<ProjectType> => {
  try {
    const response = await axios.post(`/api/projects/${id}/detail`)
    return response.data
  } catch (error) {
    throw error
  }
}

export { projectListAsync, projectDetailAsync }
