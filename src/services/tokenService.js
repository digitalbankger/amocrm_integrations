const tokenService = {
    client_id: 'a5a49978-60b4-45e5-9fac-8af6887d9602',
    client_secret: '1pWapg0P0mww8j08HCOo4nMpsgg69WGFB36UppRUY8J5lsCAveSFS0UTxatFTt8X',
    refresh_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImIwNDQyMDI0MTExNGIyY2EwYzQzYmJmYTRkY2RhNWZkNjcxNGU0MTMxNzE3ZjMyYzliN2U5MTA5OWVhYTg2MmQxZTlkM2FhZTQ3NjJkNTkzIn0.eyJhdWQiOiJhNWE0OTk3OC02MGI0LTQ1ZTUtOWZhYy04YWY2ODg3ZDk2MDIiLCJqdGkiOiJiMDQ0MjAyNDExMTRiMmNhMGM0M2JiZmE0ZGNkYTVmZDY3MTRlNDEzMTcxN2YzMmM5YjdlOTEwOTllYWE4NjJkMWU5ZDNhYWU0NzYyZDU5MyIsImlhdCI6MTcyNTg3NTQ2NiwibmJmIjoxNzI1ODc1NDY2LCJleHAiOjE3MjYwMTI4MDAsInN1YiI6IjExNDkyNDU4IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxOTM5ODk0LCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiMTI1ZmQ5ZmYtNTc1Mi00YWQxLWIxMDctYTJiZjlmZTIxMmRlIiwiYXBpX2RvbWFpbiI6ImFwaS1iLmFtb2NybS5ydSJ9.SklgTC8VS1OkpBIJSZvyB6ttTVMkxfQYxrNqyOvbqMOirMZOevxgq_yBzwOVfZ-154t4q6dbVL1WKrERw2decj50B7isILygmm0Md3H_rYY5vC2jlPgMBM3ZSdAKBLo4WwpSFT54lTwnbraNte8tcwC-2J4GYYdLN0KovQ7f7vZsV786G825CnBrNla-Q8tM4eQ_fgBHW9Tvi1YozSYRuuhEZQUS-5vnehTcU4ZEs2mtttIHMyCr70tUrGUf3KE1NySmSjCu77NMlswp4W-fw_m-9EALFCb4yy-EOk4uxf15camHJhMGq16ndNIjnR097wqpozaxicrk3ieCVW4wRA',
    tokenInfo: null,
  
    async fetchAccessToken() {
      const response = await fetch('/api/oauth2/access_token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          client_id: this.client_id,
          client_secret: this.client_secret,
          grant_type: 'refresh_token',
          redirect_url: "",
          refresh_token: this.refresh_token,
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
      