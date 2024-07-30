![Node.js](https://img.shields.io/badge/Node.js-5FA04E?style=for-the-badge&logo=node.js&logoColor=white "Node.js")
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black "Javascript")
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=Express&logoColor=white "Express")
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white "HTML5")
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white "CSS3")

# File metadata microservice

The File metadata microservice returns the metadata of an uploaded file.

## Table of Contents  

- [Requirements](#requirements)
- [How to use](#how-to-use)
- [Preview](#preview)
- [License](#license)
- [Author](#author)

## <a name="requirements"></a>Requirements
  
  - Node: >=20.0.0 <21

## How to Use
1. **Install the packages:**
   ```sh
   npm install
   ```
2. **Initialize the server:**
   ```sh
   npm run start
   ```

Make a POST request to `/api/fileanalyse`  
Example payload:  
  ```json
    {
      "upfile": "file contents"
    }
  ```
*Note:* The `upfile` field should contain the actual file content in a form-data format, not as JSON.

Example response:  
  ```json
    {
      "name": "fileName.ext",
      "type": "fileType",
      "size": 87820
    }
  ```

## <a name="preview"></a>Preview
![file-metadata-microservice-preview](https://github.com/user-attachments/assets/b6d225cb-ec77-4f76-9df2-0e44c65180e0)

## <a name="license"></a>License

The code is under the [MIT License](./LICENSE).

## <a name="author"></a>Author

Developed by @Wesley-Nunes  
[![Connect](https://img.shields.io/badge/-Connect-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/dev-wesley-nunes/)](https://www.linkedin.com/in/dev-wesley-nunes/)
