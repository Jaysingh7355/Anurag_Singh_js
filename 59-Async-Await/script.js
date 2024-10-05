async function MakeRequest() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  
  MakeRequest();