function base64Encoder(username, password) {
  const credentials = [username, password].join(":");
  return window.btoa(credentials)
}

export default base64Encoder;
