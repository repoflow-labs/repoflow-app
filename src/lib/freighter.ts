import * as freighter from '@stellar/freighter-api'

/** Connect to the Freighter browser extension and retrieve the user's Stellar public key. */
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

/** Request the user to sign a Stellar transaction XDR via Freighter. */
export async function signTx(xdr: string, networkPassphrase: string): Promise<string> {
  const result = await freighter.signTransaction(xdr, { networkPassphrase })
  if (result.error) {
    throw new Error(result.error.message)
  }
  return result.signedTxXdr
}
