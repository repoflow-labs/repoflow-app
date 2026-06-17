import axios from 'axios'
import type { RepoClaim, DependencyNode, FundingState } from '@/types'

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
})

/** Fetch claim details for a repository by ID. */
export const getRepo = (id: string) =>
  client.get<RepoClaim>(`/repos/${id}`).then(r => r.data)

/** Fetch the full dependency tree for a repository. */
export const getDependencies = (id: string) =>
  client.get<DependencyNode[]>(`/repos/${id}/dependencies`).then(r => r.data)

/** Fetch the funding vault state for a repository. */
export const getFunding = (id: string) =>
  client.get<FundingState>(`/repos/${id}/funding`).then(r => r.data)

/** Request a proof nonce from the backend for repo ownership verification. */
export const generateNonce = (stellarAddress: string, githubUrl: string) =>
  client.post<{ nonce: string; expiresAt: string }>('/claim/generate-nonce', { stellarAddress, githubUrl }).then(r => r.data)

/** Poll the backend to verify a nonce has been posted to the GitHub repo. */
export const verifyNonce = (nonce: string, githubUrl: string) =>
  client.post<{ verified: boolean }>('/claim/verify', { nonce, githubUrl }).then(r => r.data)
