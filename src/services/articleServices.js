import axiosWithAuth from "../utils/axiosWithAuth";

const articleService = () => {
    axiosWithAuth()
        .get('http://localhost:5000/api/articles')
            .then(response => {
                
            })
}

export default articleService;

//Task List:
//1. Complete articleServices. This module should make an authenticated call and return an array of those articles.