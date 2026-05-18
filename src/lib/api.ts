import axios from 'axios'
import type { RepoClaim, DependencyNode, FundingState } from '@/types'

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
})

export const getRepo = (id: string) =>
  client.get<RepoClaim>(`/repos/${id}`).then(r => r.data)

export const getDependencies = (id: string) =>
  client.get<DependencyNode[]>(`/repos/${id}/dependencies`).then(r => r.data)

export const getFunding = (id: string) =>
  client.get<FundingState>(`/repos/${id}/funding`).then(r => r.data)

export const generateNonce = (stellarAddress: string, githubUrl: string) =>
  client.post<{ nonce: string; expiresAt: string }>('/claim/generate-nonce', { stellarAddress, githubUrl }).then(r => r.data)

export const verifyNonce = (nonce: string, githubUrl: string) =>
  client.post<{ verified: boolean }>('/claim/verify', { nonce, githubUrl }).then(r => r.data)