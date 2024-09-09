const tokenService = {
    client_id: 'a5a49978-60b4-45e5-9fac-8af6887d9602',
    client_secret: '1pWapg0P0mww8j08HCOo4nMpsgg69WGFB36UppRUY8J5lsCAveSFS0UTxatFTt8X',
    grant_type: 'authorization_code',
    code: 'def50200b853b0d87ec84691ea1e4e27f9d4d94d2b3b8a7a2bbef15c7fddd4386df22cc70a4dae42c5c370e03c4d8df785b1132b12debce7235d7973d0d5b62717f8851fb8f5cd89626aab90ce23da751c2fc24213ca7a7d931fd41998f34d670baa783324648ed677502c3886724221d4cd7578709172e63de25161bcf8be4d2650026a016b91f1bc2e3991fa713ebf22ff817890bbdb69d84c530b127c5fef2c4baf8f598c58eb71f35ed3578eafdbf3804dc2e7d518086b0ea4d2cfa6d3847a15d47f6687b46a0ef8853a80c61cc688262504473777245ea1f165000d4c45776176beb2c20c2bc5ce3a00191f08ea0acd1244c3baee5cd2325315e5c089ad0261cfb45188ce6cff88c13dd9cff186775881470de0213cca98ea5423e9fd931f8d1bb6a97bd8acb5b5832786a3788119614f3fe742a698d647d0b21d617aaa6fc000046caf21279f32602f8b0fcd2388c96e9e21572ce6fa94d916aab05b7af04970492f4de991e6773f690b4fbbc469e27aabf52f8caebebc373d2fcc69e68d2042031944d6ac0bd1fd705b64c6e8a71a65932434f4d1b4c649cccedbdc70c85cd741266123aff9641ddefc712a330784375bb192bf98d555622a9b87f47e3379715851c16a1a5d7c826df871bf375009f1c236632ed58d4f0e88c6d748eaceeef0555acda10f0fa847b637b877d14dfa66db96727e9185dbcb75e16ecb43a8a22a8663385017a127e7',
    redirect_uri: 'https://digitalbankger.github.io/amocrm_integrations/#/',

  
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
      