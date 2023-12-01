import axios from 'axios';

export default axios.create({
    baseURL:'https://bfa6-139-179-124-70.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});