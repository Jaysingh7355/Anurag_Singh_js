async function MakeRequest() {
    const url = 'https://slowwly.robertomurray.co.uk/delay/1000/url/https://jsonplaceholder.typicode.com/todos/1';
    
    try {
      const response = await fetch(url, { mode: 'no-cors' });
      console.log(response); // Response will be opaque, you cannot get the data
      console.log('hi');
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  
  MakeRequest();