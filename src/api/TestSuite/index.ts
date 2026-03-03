/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AxiosBody } from '@/type/Axios'
import axios from '../axios'
import type { TestSuiteType } from '@/type/TestSuiteType'

const TestSuiteListAsync = async (params: AxiosBody): Promise<any> => {
  try {
    const response = await axios.post('/api/test_suite/list', params)
    return response.data
  } catch (error) {
    throw error
  }
}

const TestSuiteCreateAsync = async (params: TestSuiteType): Promise<any> => {
  try {
    const response = await axios.post('/api/test_suite/create', params)
    return response.data
  } catch (error) {
    throw error
  }
}

const TestSuiteUpdateAsync = async (id: number, params: TestSuiteType): Promise<any> => {
  try {
    const response = await axios.put(`/api/test_suite/${id}/update`, params)
    return response.data
  } catch (error) {
    throw error
  }
}

const TestSuiteDetailAsync = async (id: number): Promise<any> => {
  try {
    const response = await axios.get(`/api/test_suite/${id}/detail`)
    return response.data
  } catch (error) {
    throw error
  }
}

const TestSuiteDeleteAsync = async (id: number): Promise<any> => {
  try {
    const response = await axios.delete(`/api/test_suite/${id}/delete`)
    return response.data
  } catch (error) {
    throw error
  }
}
export {
  TestSuiteListAsync,
  TestSuiteCreateAsync,
  TestSuiteUpdateAsync,
  TestSuiteDetailAsync,
  TestSuiteDeleteAsync,
}
