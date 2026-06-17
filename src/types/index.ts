/** On-chain record of a claimed GitHub repository. */
export interface RepoClaim {
  /** Unique identifier for the claimed repository. */
  repoId: string
  /** Canonical GitHub URL of the claimed repository. */
  githubUrl: string
  /** Stellar public key of the verified repo owner. */
  ownerAddress: string
  /** ISO-8601 timestamp of when the claim was recorded on-chain. */
  claimedAt: string
  /** Stellar transaction hash of the claim_repo contract call. */
  txHash: string
}

/** One node in the dependency graph tree. */
export interface DependencyNode {
  /** Unique identifier for this repository. */
  repoId: string
  /** Canonical GitHub URL of the repository. */
  githubUrl: string
  /** Stellar address of the repo owner. */
  ownerAddress: string
  /** Weight in basis points (1-10000) allocated to this dependency. */
  weightBps: number
  /** Depth from the root node (0 = root). */
  depth: number
  /** Nested child dependencies. */
  children: DependencyNode[]
}

/** Funding state for a claimed repository. */
export interface FundingState {
  /** Unique identifier for the repository. */
  repoId: string
  /** Stellar address of the funding token. */
  tokenAddress: string
  /** Total amount deposited into the vault. */
  totalDeposited: string
  /** Total amount withdrawn from the vault. */
  totalWithdrawn: string
  /** Amount currently available for withdrawal. */
  claimable: string
}

/** A single step in the 4-step repository claiming flow. */
export interface ClaimStep {
  /** Step number (1-4). */
  id: number
  /** Human-readable step label. */
  label: string
  /** Current step status. */
  status: 'pending' | 'active' | 'complete' | 'error'
}

/** Current state of the Freighter wallet connection. */
export type WalletState = {
  /** Connected Stellar public key, or null if disconnected. */
  publicKey: string | null
  /** Whether a Freighter wallet is currently connected. */
  isConnected: boolean
  /** Prompt Freighter to request wallet access. */
  connect: () => Promise<void>
  /** Clear the stored wallet connection state. */
  disconnect: () => void
}
