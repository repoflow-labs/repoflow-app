import * as freighter from '@stellar/freighter-api'

export async function connectWallet(): Promise<string> {
  if (!(await freighter.isConnected())) {
    throw new Error('Freighter extension not installed')
  }
  const result = await freighter.getAddress()
  if (result.error) {
    throw new Error(result.error.message)
  }
  return result.address
}

export async function signTx(xdr: string, networkPassphrase: string): Promise<string> {
  const result = await freighter.signTransaction(xdr, { networkPassphrase })
  if (result.error) {
    throw new Error(result.error.message)
  }
  return result.signedTxXdr
}