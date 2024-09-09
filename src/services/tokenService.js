const tokenService = {
    client_id: 'a5a49978-60b4-45e5-9fac-8af6887d9602',
    client_secret: '1pWapg0P0mww8j08HCOo4nMpsgg69WGFB36UppRUY8J5lsCAveSFS0UTxatFTt8X',
    grant_type: 'authorization_code',
    code: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjY1ZjJjY2FjMTgzNWIxYjk1NzA3N2VjM2ZlNDhiOWI0YjZhMmVmZTZiYzllMjViNDBiODg4MmI5MDAwNmVmMjFmZjViNmY2YzllY2RiZGYxIn0.eyJhdWQiOiJhNWE0OTk3OC02MGI0LTQ1ZTUtOWZhYy04YWY2ODg3ZDk2MDIiLCJqdGkiOiI2NWYyY2NhYzE4MzViMWI5NTcwNzdlYzNmZTQ4YjliNGI2YTJlZmU2YmM5ZTI1YjQwYjg4ODJiOTAwMDZlZjIxZmY1YjZmNmM5ZWNkYmRmMSIsImlhdCI6MTcyNTg4NjI1MiwibmJmIjoxNzI1ODg2MjUyLCJleHAiOjE3MjYwMTI4MDAsInN1YiI6IjExNDkyNDU4IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxOTM5ODk0LCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiNzkxOGUxNGItOTgwNS00MTZiLTkwMGUtY2I0YTZhNGE3ZThlIiwiYXBpX2RvbWFpbiI6ImFwaS1iLmFtb2NybS5ydSJ9.U6FdcvJlQuSkgkaKgswpMOEPSLxhs2CYqyeP7zIOqWTtH9mztt40pp1IJ6WVEm-GiyRg_WbWjtH8FiBda3R4aq7TR3upPresJk3diWE-eOULtL1MR-Kt38tSr_aEzEIJgZHZMU2G6LIZhn165mSB7l85boJtjWyTZ946M42Y-YisuhmZRVifl90ZfzPTTvKfyTHx4ES1Q_pNK-IyRx5j0EdAN0lc7iof72sN6QXoDSZtKMzQyUBXN3WQB4vASLh0bS8jNyC6NaKqgjNCeArDn3t6J49UKmNM15zf7NGqFwmUUnER39SiEMduI3oXULFdOGqyyqW-teowcye0E01eLg',
    redirect_uri: 'https://digitalbankger.github.io/amocrm_integrations/#/',
    refresh_token: '',

  
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
          redirect_url: "https://digitalbankger.github.io/amocrm_integrations/#/",
          refresh_token: this.code,
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
      