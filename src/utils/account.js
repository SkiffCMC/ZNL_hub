import * as Znl from 'znl-elements';

export const extractPublicKey = passphrase =>
  Znl.cryptography.getKeys(passphrase).publicKey;

/**
 * @param {String} data - passphrase or public key
 */
export const extractAddress = (data) => {
  if (!data) {
    return false;
  }
  if (data.indexOf(' ') < 0) {
    return Znl.cryptography.getAddressFromPublicKey(data);
  }
  return Znl.cryptography.getAddressFromPassphrase(data);
};
