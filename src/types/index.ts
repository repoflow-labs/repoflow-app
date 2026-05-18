export interface RepoClaim {
  repoId: string
  githubUrl: string
  ownerAddress: string
  claimedAt: string
  txHash: string
}

export interface DependencyNode {
  repoId: string
  githubUrl: string
  ownerAddress: string
  weightBps: number
  depth: number
  children: DependencyNode[]
}

export interface FundingState {
  repoId: string
  tokenAddress: string
  totalDeposited: string
  totalWithdrawn: string
  claimable: string
}

export interface ClaimStep {
  id: number
  label: string
  status: 'pending' | 'active' | 'complete' | 'error'
}

export type WalletState = {
  publicKey: string | null
  isConnected: boolean
  connect: () => Promise<void>
  disconnect: () => void
}