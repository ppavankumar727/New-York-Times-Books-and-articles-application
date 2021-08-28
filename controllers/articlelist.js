exports.articles=(req,res)=>{
    const fetch = require('node-fetch');

    const url = `https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=${process.env.NYT_API}`;
    const options = {
      method: "GET",
      headers: {
        "Accept": "application/json"
      },
    };
    fetch(url, options).then(
      response => {
        if (response.ok) {
          return response.json();
        }
        return response.text().then(err => {
          return Promise.reject({
            status: response.status,
            statusText: response.statusText,
            errorMessage: err,
          });
        });
      })
      .then(data => {
        console.log(data.results.slice(0,6));
        res.json(data.results.slice(0,6));
      })
      .catch(err => {
        console.error(err);
      });
    
}