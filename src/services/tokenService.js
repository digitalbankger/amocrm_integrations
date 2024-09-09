const tokenService = {
    client_id: 'a5a49978-60b4-45e5-9fac-8af6887d9602',
    client_secret: '1pWapg0P0mww8j08HCOo4nMpsgg69WGFB36UppRUY8J5lsCAveSFS0UTxatFTt8X',
    grant_type: 'authorization_code',
    refresh_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjY1ZjJjY2FjMTgzNWIxYjk1NzA3N2VjM2ZlNDhiOWI0YjZhMmVmZTZiYzllMjViNDBiODg4MmI5MDAwNmVmMjFmZjViNmY2YzllY2RiZGYxIn0.eyJhdWQiOiJhNWE0OTk3OC02MGI0LTQ1ZTUtOWZhYy04YWY2ODg3ZDk2MDIiLCJqdGkiOiI2NWYyY2NhYzE4MzViMWI5NTcwNzdlYzNmZTQ4YjliNGI2YTJlZmU2YmM5ZTI1YjQwYjg4ODJiOTAwMDZlZjIxZmY1YjZmNmM5ZWNkYmRmMSIsImlhdCI6MTcyNTg4NjI1MiwibmJmIjoxNzI1ODg2MjUyLCJleHAiOjE3MjYwMTI4MDAsInN1YiI6IjExNDkyNDU4IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxOTM5ODk0LCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiNzkxOGUxNGItOTgwNS00MTZiLTkwMGUtY2I0YTZhNGE3ZThlIiwiYXBpX2RvbWFpbiI6ImFwaS1iLmFtb2NybS5ydSJ9.U6FdcvJlQuSkgkaKgswpMOEPSLxhs2CYqyeP7zIOqWTtH9mztt40pp1IJ6WVEm-GiyRg_WbWjtH8FiBda3R4aq7TR3upPresJk3diWE-eOULtL1MR-Kt38tSr_aEzEIJgZHZMU2G6LIZhn165mSB7l85boJtjWyTZ946M42Y-YisuhmZRVifl90ZfzPTTvKfyTHx4ES1Q_pNK-IyRx5j0EdAN0lc7iof72sN6QXoDSZtKMzQyUBXN3WQB4vASLh0bS8jNyC6NaKqgjNCeArDn3t6J49UKmNM15zf7NGqFwmUUnER39SiEMduI3oXULFdOGqyyqW-teowcye0E01eLg',
    redirect_uri: 'https://digitalbankger.github.io/amocrm_integrations/#/',
    code: 'def502000c0188e6356bc091d6a8d394f941f237050520212a4382f1890b59eeed8c199c0a9889442ea61e84d4b426dc691d883dbcb9d7f5b3edfefa50939b07f8b35980a298b31d2423eaee37325a58ab804c6a969d37353122c295510c97cf597717d4d75b24b772caa6928531b696ced83643bf41771ad7c7c2aa28482558c0f6b74e9ca54b5d23a77c5d60203a1a0c23e720c904d5a6cbe0fdbb70a1d549a5364b3474317522da5903e734dfc737e899355fb64006d3cf30c9de362bb94951134cf8e258f4b9206f00f0a749407488a7654e043d066e1c1daa1da1d53a16116080fca1a2333daa94fa3877097455283dd148b36f05d9be33bfbf012fc8c5f8aeb902fe9d1acd0859f6573ca30f585697f1264fc7787b559b21ce5a33176bbd8172df09a35f534a8b39c50a23f5bea3b498aae9333c6cb24c984bfe123bd519cd556d8aec77b09d33d4e570a7cc37bd3560be211d037003c8cf96d6ed25a01d550b1042d4cc502956fe10965fa74bda851ff0878d4fabb5099f20d2fb8dc87f16aa109d7bb9c664a6a88b74e62f284447328698f50ee20076c585114984e8bbeed4e52515c3ee9e97a228ce315091e7b2ed5aa4f537ce3bf2fb38f75e212fccd4fcc335af86d64157527e00294d82d823c38e3c478134d68f2be64c0043b496537ada9b1d23b9d6627c49097b2e9d863e86dfb3105499ccb1e5533e549d5622406edd63bbd37493772c',

  
    async fetchAccessToken() {
      const response = await fetch('https://cors-anywhere.herokuapp.com/https://bkmzenbkmzen.amocrm.ru/oauth2/access_token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          client_id: this.client_id,
          client_secret: this.client_secret,
          grant_type: 'refresh_token',
          code: this.code,
          redirect_uri: "https://digitalbankger.github.io/amocrm_integrations/#/",
        }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to get access token');
      }
  
      const data = await response.json();
  
      this.tokenInfo = {
        access_token: data.access_token,
        refresh_token: data.refresh_token,
        expires_in: data.expires_in,
        token_type: data.token_type,
      };
  
      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('refresh_token', data.refresh_token);
  
      return data.access_token;
    },
  
    getStoredAccessToken() {
      return localStorage.getItem('access_token');
    },
  
    async ensureTokenIsValid() {
      const token = this.getStoredAccessToken();
      if (!token) {
        return await this.fetchAccessToken();
      }
  
      return token;
    },
};

export default tokenService;
      